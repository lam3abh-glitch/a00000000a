import { createHash } from "crypto";

export type TargetLang = "es" | "fr" | "zh";

const LANG_NAMES: Record<TargetLang, string> = {
  es: "Spanish (Spain)",
  fr: "French (France)",
  zh: "Mandarin Chinese (Simplified)",
};

const hash = (s: string) => createHash("sha256").update(s).digest("hex");

async function callModel(texts: string[], lang: TargetLang, apiKey: string): Promise<string[]> {
  const payload = JSON.stringify(
    Object.fromEntries(texts.map((s, i) => [String(i), s])),
  );
  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "content-type": "application/json" },
    body: JSON.stringify({
      model: "google/gemini-3.6-flash",
      messages: [
        {
          role: "system",
          content: `You are a professional travel-content translator. You receive a JSON object whose values are strings to translate into ${LANG_NAMES[lang]}.
Rules:
- Return ONLY a JSON object with EXACTLY the same keys as the input, where each value is the translation of the matching input value. No markdown, no explanation, no extra or missing keys.
- Translate meaning faithfully and naturally; keep the travel-magazine tone.
- Keep proper nouns, place names, numbers, prices and URLs correct. Never add or remove information.
- If a string is empty or just punctuation, return it unchanged.`,
        },
        { role: "user", content: payload },
      ],
      response_format: { type: "json_object" },
    }),
  });
  if (!res.ok) throw new Error(`translate failed: ${res.status}`);
  const data: any = await res.json();
  let content: string = data?.choices?.[0]?.message?.content ?? "{}";
  content = content.trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  const parsed = JSON.parse(content);
  const values: unknown[] = Array.isArray(parsed)
    ? parsed
    : texts.map((_, i) => (parsed as Record<string, unknown>)?.[String(i)]);
  if (values.length !== texts.length) throw new Error("translate shape mismatch");
  return values.map((v, i) => (typeof v === "string" && v.trim() ? v : texts[i]));
}

/** Translates a chunk, splitting it on shape mismatches so one bad item can't lose the rest. */
async function translateChunk(texts: string[], lang: TargetLang, apiKey: string): Promise<string[]> {
  try {
    return await callModel(texts, lang, apiKey);
  } catch (err) {
    if (texts.length === 1) {
      console.error("translate item error", err);
      return texts;
    }
    const mid = Math.ceil(texts.length / 2);
    const [a, b] = await Promise.all([
      translateChunk(texts.slice(0, mid), lang, apiKey),
      translateChunk(texts.slice(mid), lang, apiKey),
    ]);
    return [...a, ...b];
  }
}

export async function translateTexts(texts: string[], lang: TargetLang): Promise<string[]> {
  const out = [...texts];
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  const keys = texts.map((s) => hash(`${lang}::${s}`));
  const unique = Array.from(new Set(keys));
  const cached = new Map<string, string>();

  for (let i = 0; i < unique.length; i += 200) {
    const slice = unique.slice(i, i + 200);
    const { data } = await supabaseAdmin
      .from("translation_cache")
      .select("hash, translated")
      .eq("lang", lang)
      .in("hash", slice);
    for (const row of data ?? []) cached.set((row as any).hash, (row as any).translated);
  }

  const missingIdx = texts.map((_, i) => i).filter((i) => texts[i].trim() && !cached.has(keys[i]));
  const apiKey = process.env["LOVABLE_API_KEY"];

  if (missingIdx.length && apiKey) {
    const chunks: number[][] = [];
    let current: number[] = [];
    let size = 0;
    for (const i of missingIdx) {
      if (current.length >= 25 || size > 6000) {
        chunks.push(current);
        current = [];
        size = 0;
      }
      current.push(i);
      size += texts[i].length;
    }
    if (current.length) chunks.push(current);

    for (const chunk of chunks) {
      try {
        const translated = await translateChunk(chunk.map((i) => texts[i]), lang, apiKey);
        const rows = chunk
          .map((i, k) => ({
            hash: keys[i],
            lang,
            source: texts[i],
            translated: translated[k],
          }))
          // never cache items the model failed on (they come back unchanged)
          .filter((r) => r.translated !== r.source);
        chunk.forEach((i, k) => cached.set(keys[i], translated[k]));
        if (rows.length) await supabaseAdmin.from("translation_cache").upsert(rows, { onConflict: "hash,lang" });
      } catch (err) {
        console.error("translate chunk error", err);
      }
    }
  }

  texts.forEach((s, i) => {
    out[i] = cached.get(keys[i]) ?? s;
  });
  return out;
}
