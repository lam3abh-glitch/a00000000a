import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

import { type Lang, t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Msg = { role: "user" | "assistant"; content: string };

export function TravelAssistant({ lang }: { lang: Lang }) {
  const rtl = lang === "ar";
  const c = t[lang].assistant;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || loading) return;
    setInput("");
    const history: Msg[] = [...messages, { role: "user", content: question }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok || !res.body) {
        let msg: string = c.error;
        try {
          const data = (await res.json()) as { error?: string };
          if (data?.error) msg = data.error;
        } catch {
          /* ignore */
        }
        setMessages([...history, { role: "assistant", content: msg }]);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let answer = "";

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data:")) continue;
          const payload = trimmed.slice(5).trim();
          if (!payload || payload === "[DONE]") continue;
          try {
            const json = JSON.parse(payload) as {
              choices?: { delta?: { content?: string } }[];
            };
            const delta = json.choices?.[0]?.delta?.content;
            if (delta) {
              answer += delta;
              setMessages([...history, { role: "assistant", content: answer }]);
            }
          } catch {
            /* partial chunk */
          }
        }
      }

      if (!answer) setMessages([...history, { role: "assistant", content: c.error }]);
    } catch {
      setMessages([...history, { role: "assistant", content: c.error }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          dir={rtl ? "rtl" : "ltr"}
          className={cn(
            "fixed bottom-5 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-xl transition hover:brightness-110",
            rtl ? "start-5" : "end-5",
          )}
        >
          <MessageCircle className="size-5" />
          <span className="hidden sm:inline">{c.button}</span>
        </button>
      )}

      {open && (
        <div
          dir={rtl ? "rtl" : "ltr"}
          className={cn(
            "fixed z-50 flex flex-col overflow-hidden border border-border bg-card shadow-2xl",
            "inset-x-0 bottom-0 h-[85vh] rounded-t-3xl",
            "sm:inset-x-auto sm:bottom-5 sm:h-[600px] sm:w-[420px] sm:rounded-3xl",
            rtl ? "sm:start-5" : "sm:end-5",
          )}
        >
          <header className="flex items-center justify-between gap-3 border-b border-border bg-primary/10 px-4 py-3">
            <div>
              <h2 className="text-base font-semibold text-foreground">{c.title}</h2>
              <p className="text-xs text-muted-foreground">{c.subtitle}</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label={c.close}
              className="rounded-full p-2 text-muted-foreground transition hover:bg-accent hover:text-foreground"
            >
              <X className="size-5" />
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            <div className="rounded-2xl bg-muted/60 px-4 py-3 text-sm leading-relaxed text-foreground">
              {c.welcome}
            </div>

            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {c.suggestions.map((s: string) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full border border-primary/40 px-3 py-1.5 text-xs text-foreground transition hover:bg-primary/10"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-loose",
                    m.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/60 text-foreground",
                  )}
                >
                  {m.content ||
                    (loading && i === messages.length - 1 ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : null)}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-border px-3 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={c.placeholder}
              className="flex-1 rounded-full border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-full bg-primary p-2.5 text-primary-foreground transition disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="size-5 animate-spin" />
              ) : (
                <Send className={cn("size-5", rtl && "-scale-x-100")} />
              )}
            </button>
          </form>
        </div>
      )}
    </>
  );
}