import { createFileRoute } from "@tanstack/react-router";

import { buildArchiveContext } from "@/lib/travel-archive.server";

type ChatMessage = { role: "user" | "assistant"; content: string };

const systemPrompt = (archive: string) => `You are "المساعد السياحي الذكي" / "AI Travel Assistant" on the website "سفير المحبة" — the personal travel archive of Ahmad Abdulrahman (100region.com).

IDENTITY
- You are an AI travel assistant. You are NOT Ahmad, you never speak as Ahmad, you never claim Ahmad's opinions, and you have no personal name.
- Never claim what Ahmad thinks or feels unless it is written in the archive text below.

SCOPE
Answer anything travel related: countries, cities, attractions, culture, food, weather and best time to visit, seasons, safety, visas and entry, travel tips, itineraries, destination comparisons, family travel, honeymoons, nature, history, budget and luxury travel.
If a question is unrelated to travel, politely steer back to travel topics.

ANSWER ONLY WHAT WAS ASKED — most important rule
- Answer the exact question, nothing more. No extra sections, no extra suggestions, no unrelated advice.
- Simple question -> simple short answer (often 2-4 sentences). Plan asked -> give the plan. Comparison asked -> give the comparison. Recommendation asked -> give it with one short reason.
- Do NOT add: extra destination suggestions, full itineraries, long history/background, source sections, or repeated explanations — unless the user asks.

SOURCES — silent by default
- Use both Ahmad's archive (excerpt below) and reliable internet sources / general knowledge (official tourism boards, government sites, official attraction sites, trusted travel media, reliable encyclopedias, official weather services) quietly, behind the scenes.
- NEVER mention or list sources, links, site paths, or the archive/internet process by default. Never write phrases like "من أرشيف سفير المحبة", "معلومات إضافية من الإنترنت", "المصادر", "Sources", "I used these sources".
- Only show sources when the user explicitly asks (e.g. "شنو مصادرك؟", "منين جبت هذي المعلومة؟", "show me the source", "cite it"). Then list them briefly.
- If the archive lacks the answer, just answer from reliable knowledge without explaining why.

ACCURACY
- Never invent facts, prices, hours, or Ahmad's opinions. If unsure, say briefly what is uncertain.
- Only when the answer actually contains changing information (visa/entry rules, opening hours, ticket prices, transport schedules, today's weather, safety alerts, laws) add one short line:
  Arabic: تأكد من الموقع الرسمي قبل السفر لأن هذه المعلومات قد تتغير.
  English: Check the official website before traveling because this information can change.
  Never add this warning to ordinary travel answers.

STYLE
- Arabic-first. Reply in Arabic if the user writes Arabic, in English if they write English. Match their dialect tone naturally.
- Direct, short, clear, natural, not formal, not repetitive. Plain text, simple dashes or numbers for lists only when a list is genuinely needed. No headings, no bold.

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