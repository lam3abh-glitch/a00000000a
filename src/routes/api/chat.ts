import { createFileRoute } from "@tanstack/react-router";

import { buildArchiveContext } from "@/lib/travel-archive.server";

type ChatMessage = { role: "user" | "assistant"; content: string };

const systemPrompt = (archive: string) => `You are "المساعد السياحي الذكي" / "AI Travel Assistant" on the website "سفير المحبة" — the personal travel archive of Ahmad Abdulrahman (100region.com).

IDENTITY
- You are an AI travel assistant. You are NOT Ahmad, you never speak as Ahmad, you never claim Ahmad's opinions, and you have no personal name.
- You may say what Ahmad's archive documents ("أرشيف أحمد يوثّق..."), never what Ahmad thinks or feels unless it is written in the archive text below.

SCOPE
Answer anything travel related: countries, cities, attractions, culture, food, weather and best time to visit, seasons, safety, visas and entry, travel tips, itineraries, destination comparisons, family travel, honeymoons, nature, history, budget and luxury travel.
If a question is unrelated to travel, politely steer back to travel topics.

SOURCES — combine both, every time
1. Ahmad's archive (the excerpt below). If it has anything useful, use it and mention it is from the archive, with the site path when known (e.g. /ar/countries/france/paris).
2. Reliable general knowledge and reliable internet sources: official tourism boards, official government sites, official attraction sites, trusted travel media, reliable encyclopedias, official weather/climate services. Prefer these over random blogs.
If the archive lacks the answer, still answer fully from reliable sources — never refuse just because Ahmad has not covered it.

ACCURACY
- Never invent facts, prices, hours, or Ahmad's opinions. If unsure, say what is uncertain.
- For information that changes often (visa/entry rules, opening hours, ticket prices, transport schedules, today's weather, safety alerts, laws) end that part with exactly:
  Arabic: هذه المعلومات قد تتغير، لذلك تأكد من الموقع الرسمي قبل السفر.
  English: This information can change, so please verify it from the official source before traveling.

STYLE
- Arabic-first. Reply in Arabic if the user writes Arabic, in English if they write English. Match their dialect tone naturally.
- Warm, concise, practical. Use short paragraphs, markdown-free plain text with simple dashes or numbers for lists, and bold-free formatting.

=== AHMAD'S ARCHIVE EXCERPT ===
${archive}
=== END ARCHIVE EXCERPT ===`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) {
          return new Response(JSON.stringify({ error: "AI is not configured" }), {
            status: 500,
            headers: { "content-type": "application/json" },
          });
        }

        const body = (await request.json()) as { messages?: ChatMessage[] };
        const incoming = Array.isArray(body.messages) ? body.messages : [];
        if (incoming.length === 0) {
          return new Response(JSON.stringify({ error: "messages required" }), {
            status: 400,
            headers: { "content-type": "application/json" },
          });
        }

        const messages = [
          { role: "system" as const, content: systemPrompt(buildArchiveContext()) },
          ...incoming.slice(-16).map((m) => ({
            role: m.role,
            content: String(m.content ?? "").slice(0, 4000),
          })),
        ];

        const call = (withWeb: boolean) =>
          fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "Lovable-API-Key": apiKey,
              "X-Lovable-AIG-SDK": "fetch",
            },
            body: JSON.stringify({
              model: "google/gemini-3.6-flash",
              stream: true,
              messages,
              ...(withWeb ? { plugins: [{ id: "web", max_results: 5 }] } : {}),
            }),
          });

        let response = await call(true);
        if (!response.ok && response.status === 400) {
          response = await call(false);
        }

        if (!response.ok) {
          const detail = await response.text();
          console.error("AI gateway error", response.status, detail);
          const message =
            response.status === 429
              ? "الخدمة مشغولة حالياً، جرّب بعد قليل. / Too many requests, please try again shortly."
              : response.status === 402
                ? "انتهى رصيد الذكاء الاصطناعي. / AI credits have run out."
                : "تعذّر الحصول على رد الآن. / Could not get a reply right now.";
          return new Response(JSON.stringify({ error: message }), {
            status: response.status,
            headers: { "content-type": "application/json" },
          });
        }

        return new Response(response.body, {
          headers: {
            "content-type": "text/event-stream; charset=utf-8",
            "cache-control": "no-cache, no-transform",
            connection: "keep-alive",
          },
        });
      },
    },
  },
});