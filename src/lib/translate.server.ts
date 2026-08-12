import { createHash } from "crypto";

export type TargetLang = "es" | "fr" | "zh";

const LANG_NAMES: Record<TargetLang, string> = {
  es: "Spanish (Spain)",
  fr: "French (France)",
  zh: "Mandarin Chinese (Simplified)",
};

const hash = (s: string) => createHash("sha256").update(s).digest("hex");

async function translateChunk(texts: string[], lang: TargetLang, apiKey: string): Promise<string[]> {
  const payload = JSON.stringify(texts);
  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "content-type": "application/json" },
    body: JSON.stringify({
      model: "google/gemini-3.6-flash",
      messages: [
        {
          role: "system",
          content: `You are a professional travel-content translator. Translate each string in the JSON array into ${LANG_NAMES[lang]}.
Rules:
- Return ONLY a JSON array of strings, same length and same order as the input. No markdown, no explanation.
- Translate meaning faithfully and naturally; keep the travel-magazine tone.
- Keep proper nouns, place names, numbers, prices and URLs correct. Never add or remove information.
- If a string is empty or just punctuation, return it unchanged.`,
        },
        { role: "user", content: payload },
      ],
    }),
  });
  if (!res.ok) throw new Error(`translate failed: ${res.status}`);
  const data: any = await res.json();
  let content: string = data?.choices?.[0]?.message?.content ?? "[]";
  content = content.trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  const parsed = JSON.parse(content);
  if (!Array.isArray(parsed) || parsed.length !== texts.length) throw new Error("translate shape mismatch");
  return parsed.map((v, i) => (typeof v === "string" && v.trim() ? v : texts[i]));
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
        const rows = chunk.map((i, k) => ({
          hash: keys[i],
          lang,
          source: texts[i],
          translated: translated[k],
        }));
        chunk.forEach((i, k) => cached.set(keys[i], translated[k]));
        await supabaseAdmin.from("translation_cache").upsert(rows, { onConflict: "hash,lang" });
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
