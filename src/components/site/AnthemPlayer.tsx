import { useEffect, useRef, useState } from "react";

export interface AnthemTheme {
  bg?: string;
  border?: string;
  buttonBg?: string;
  buttonText?: string;
  buttonHoverBg?: string;
  buttonHoverText?: string;
  accent?: string;
  title?: string;
  ping?: string;
}

const DEFAULT_THEME: Required<AnthemTheme> = {
  bg: "bg-cream",
  border: "border-midnight/10",
  buttonBg: "bg-midnight",
  buttonText: "text-cream",
  buttonHoverBg: "hover:bg-gold",
  buttonHoverText: "hover:text-midnight",
  accent: "text-gold",
  title: "text-midnight",
  ping: "border-gold",
};

export function AnthemPlayer({
  src,
  lang,
  title,
  theme = {},
}: {
  src: string;
  lang: "ar" | "en";
  title: string;
  theme?: AnthemTheme;
}) {
  const t = { ...DEFAULT_THEME, ...theme };
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = ref.current;
    if (!a) return;
    const onEnd = () => setPlaying(false);
    a.addEventListener("ended", onEnd);
    return () => a.removeEventListener("ended", onEnd);
  }, []);

  const toggle = () => {
    const a = ref.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play(); setPlaying(true); }
  };

  return (
    <div className="mx-auto max-w-xl px-6">
      <div className={`relative flex items-center gap-5 ${t.bg} border ${t.border} rounded-full py-3 pr-3 pl-3 shadow-lg`}>
        <button
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          className={`relative flex-shrink-0 h-14 w-14 rounded-full ${t.buttonBg} ${t.buttonText} flex items-center justify-center ${t.buttonHoverBg} ${t.buttonHoverText} transition-colors`}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5 ml-0.5" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          )}
          {playing && <span className={`absolute inset-0 rounded-full border ${t.ping} animate-ping`} />}
        </button>
        <div className={lang === "ar" ? "text-right flex-1" : "text-left flex-1"}>
          <div className={`text-[10px] uppercase tracking-[0.4em] ${t.accent}`}>
            {lang === "ar" ? "النشيد الوطني" : "National Anthem"}
          </div>
          <div className={`font-display text-lg leading-tight ${t.title}`}>{title}</div>
        </div>
        <div className={lang === "ar" ? "pl-4" : "pr-4"}>
          <div className="flex items-end gap-0.5 h-6">
            {[0,1,2,3,4].map((i) => (
              <span
                key={i}
                className={`w-[3px] rounded-full ${t.accent.replace("text-", "bg-")}`}
                style={{
                  height: playing ? "100%" : "20%",
                  animation: playing ? `bars 0.9s ease-in-out ${i * 0.12}s infinite` : "none",
                }}
              />
            ))}
          </div>
        </div>
        <audio ref={ref} src={src} preload="none" />
      </div>
      <style>{`@keyframes bars { 0%,100% { height: 20%; } 50% { height: 100%; } }`}</style>
    </div>
  );
}
