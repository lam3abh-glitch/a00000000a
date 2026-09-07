import type { Lang } from "@/lib/i18n";
import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import egyptAnthem from "@/assets/egypt-anthem.mp3.asset.json";
import pyramidsAerial from "@/assets/egypt-pyramids-aerial.jpg";

const IMG = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const EMBLEM_MAP = IMG("2022/04/img_4175.jpg");
const FLAG = IMG("2022/03/img_3559-1.jpg");
const AHMAD_NILE = IMG("2022/01/img_3805.jpg");
const NILE_LAND = IMG("2022/10/img_4102-1.jpg");

const SAND = "#F6EBD8";
const INK = "#17110B";
const LAPIS = "#123C63";
const TURQUOISE = "#1E8E86";
const OCHRE = "#C8862B";
const CARNELIAN = "#A6321F";

const TAGLINE = {
  ar: "بلاد الفراعنة .. بلاد النيل .. بلاد السد العالي",
  en: "Land of the pharaohs .. land of the Nile .. land of the High Dam",
};

const ABOUT = {
  ar: [
    "هي دولة عربية تقع في الركن الشمالي الشرقي من قارة أفريقيا ، ولديها امتداد آسيوي ، حيث تقع شبه جزيرة سيناء داخل قارة آسيا فهي دولة عابرة للقارات ، ولجمهورية مِصر العربية سواحل طويلة على البحرين الأبيض والأحمر ، وتشترك بحدود مع سبعة دول",
  ],
  en: [
    "Egypt is an Arab country in the north-eastern corner of Africa with an Asian extension, since the Sinai peninsula lies within Asia — making it a transcontinental state. The Arab Republic of Egypt has long coasts on both the Mediterranean and the Red Sea, and shares borders with seven countries.",
  ],
};

/* Hieroglyph-inspired repeating band drawn as SVG (no external assets) */
function GlyphBand({ className, color }: { className?: string; color: string }) {
  return (
    <svg aria-hidden className={className} viewBox="0 0 240 40" preserveAspectRatio="none">
      <g fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
        {[0, 60, 120, 180].map((x) => (
          <g key={x} transform={`translate(${x} 0)`}>
            {/* ankh */}
            <circle cx="10" cy="12" r="5" />
            <path d="M10 17v16M4 23h12" />
            {/* eye of Horus */}
            <path d="M24 20c4-6 12-6 16 0-4 6-12 6-16 0z" />
            <circle cx="32" cy="20" r="2.4" fill={color} stroke="none" />
            <path d="M40 20c2 4 0 8-3 9" />
            {/* pyramid */}
            <path d="M46 30l6-12 6 12z" />
          </g>
        ))}
      </g>
    </svg>
  );
}

function PyramidSilhouette({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg aria-hidden className={className} style={style} viewBox="0 0 400 160" fill="currentColor">
      <path d="M0 160h400L300 30 250 90 150 0 60 110z" />
    </svg>
  );
}

function Scarab({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg aria-hidden className={className} style={style} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
      <ellipse cx="50" cy="56" rx="20" ry="28" />
      <circle cx="50" cy="24" r="9" />
      <path d="M50 30v54M30 38l-18-12M70 38l18-12M28 58H8M72 58h20M30 78l-16 14M70 78l16 14" />
    </svg>
  );
}

export function EgyptCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";
  const t = (o: { ar: string; en: string }) => (rtl ? o.ar : o.en);

  const stickers: { src: string; ar: string; en: string; rot: string; tint: string }[] = [
    { src: NILE_LAND, ar: "أرض النيل", en: "The land of the Nile", rot: "-4deg", tint: TURQUOISE },
    { src: AHMAD_NILE, ar: "أحمد على كورنيش النيل بالقاهرة", en: "Ahmad on the Nile corniche in Cairo", rot: "3deg", tint: OCHRE },
  ];

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: SAND }}>
      {/* papyrus texture + sun glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 0%, rgba(200,134,43,0.32) 0%, transparent 70%), repeating-linear-gradient(90deg, rgba(23,17,11,0.05) 0 1px, transparent 1px 7px), repeating-linear-gradient(0deg, rgba(23,17,11,0.04) 0 1px, transparent 1px 9px)",
        }}
      />
      {/* pyramid horizon */}
      <PyramidSilhouette className="absolute bottom-0 left-0 w-full h-40 pointer-events-none" style={{ color: `${OCHRE}22` }} />
      <PyramidSilhouette className="absolute top-10 -right-16 w-72 pointer-events-none" style={{ color: `${LAPIS}12` }} />
      <Scarab className="absolute top-8 left-6 w-20 md:w-28 pointer-events-none" style={{ color: `${LAPIS}30` }} />
      <Scarab className="absolute bottom-24 right-8 w-16 md:w-24 pointer-events-none" style={{ color: `${CARNELIAN}25` }} />
      <GlyphBand className="absolute inset-x-0 top-0 h-10 w-full opacity-40" color={OCHRE} />

      {/* AERIAL PYRAMIDS — arched window instead of a polaroid */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="relative">
          <div
            className="relative overflow-hidden shadow-2xl"
            style={{
              borderRadius: "999px 999px 24px 24px",
              border: `10px solid ${INK}`,
              boxShadow: `0 0 0 6px ${OCHRE}, 0 30px 60px -20px rgba(23,17,11,0.6)`,
            }}
          >
            <img
              src={pyramidsAerial}
              alt={rtl ? "أهرامات الجيزة من الأعلى" : "The pyramids of Giza from above"}
              width={1600}
              height={1008}
              className="block w-full h-[46vh] md:h-[60vh] object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: `linear-gradient(180deg, rgba(18,60,99,0.25) 0%, transparent 40%, rgba(23,17,11,0.75) 100%)` }}
            />
            <div className={`absolute bottom-0 inset-x-0 p-6 md:p-10 ${align}`}>
              <span
                className="inline-block text-[10px] md:text-[11px] uppercase tracking-[0.4em] px-4 py-2 mb-4 text-white"
                style={{ background: CARNELIAN }}
              >
                {rtl ? "من الأعلى · هضبة الجيزة" : "From above · Giza plateau"}
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-white leading-tight drop-shadow-lg">
                {rtl ? "جمهورية مصر العربية" : "The Arab Republic of Egypt"}
              </h2>
              <p className="mt-3 text-base md:text-lg" style={{ color: "#F6EBD8CC" }}>
                {t(TAGLINE)}
              </p>
            </div>
          </div>
          <GlyphBand className="mt-4 h-9 w-full opacity-60" color={LAPIS} />
        </div>
      </div>

      {/* INTRO */}
      <div className="relative z-10 mt-16 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono" style={{ color: TURQUOISE }}>
            {rtl ? "00 · مقدّمة" : "00 · Introduction"}
          </span>
          <span className="h-px flex-1" style={{ background: `${INK}22` }} />
        </div>
        <p className={`font-display text-3xl md:text-4xl leading-snug whitespace-pre-line ${align}`} style={{ color: INK }}>
          {intro}
        </p>
        <div className={`mt-6 space-y-5 text-lg leading-relaxed ${align}`} style={{ color: `${INK}CC` }}>
          {ABOUT[lang].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className={`mt-6 flex items-center gap-1.5 ${rtl ? "justify-end" : "justify-start"}`} aria-hidden>
          {[CARNELIAN, INK, OCHRE, LAPIS, TURQUOISE].map((c, i) => (
            <span key={i} className="h-1.5 w-10 rounded-full" style={{ background: c }} />
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {stickers.map((s, i) => (
            <figure
              key={i}
              className="bg-white shadow-xl overflow-hidden"
              style={{ border: `6px solid ${s.tint}`, transform: `rotate(${s.rot})` }}
            >
              <img src={s.src} alt={rtl ? s.ar : s.en} loading="lazy" className="block w-full h-64 object-cover" />
              <figcaption className={`px-4 py-3 text-sm ${align}`} style={{ color: `${INK}A0` }}>
                {rtl ? s.ar : s.en}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* EMBLEM / FLAG + ANTHEM */}
      <div className="relative z-10 mt-16 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-4" style={{ color: TURQUOISE }}>
            {rtl ? "01 · الشعار والخارطة" : "01 · Emblem & map"}
          </div>
          <div className="overflow-hidden rounded-xl bg-white" style={{ border: `6px solid ${OCHRE}` }}>
            <img
              src={EMBLEM_MAP}
              alt={rtl ? "شعار وخارطة جمهورية مصر العربية" : "Emblem and map of the Arab Republic of Egypt"}
              loading="lazy"
              className="w-full h-64 object-contain bg-white"
            />
          </div>
          <div className={`mt-4 font-display text-xl ${align}`} style={{ color: INK }}>
            {rtl ? "شعار وخارطة جمهورية مصر العربية" : "Emblem and map of the Arab Republic of Egypt"}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-md flex flex-col text-white" style={{ background: INK }}>
          <PyramidSilhouette className="absolute bottom-0 inset-x-0 w-full h-32 pointer-events-none" style={{ color: `${OCHRE}22` }} />
          <div className={`relative pt-8 px-7 ${align}`}>
            <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-3" style={{ color: OCHRE }}>
              {rtl ? "02 · العلم والنشيد" : "02 · Flag & anthem"}
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-5">
              {rtl ? "علم جمهورية مصر والنشيد الوطني المصري" : "The flag of Egypt and the Egyptian national anthem"}
            </h3>
            <div className="overflow-hidden rounded-xl border border-white/20 max-w-sm">
              <img
                src={FLAG}
                alt={rtl ? "علم جمهورية مصر العربية" : "Flag of the Arab Republic of Egypt"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="relative mt-8 pb-8">
            <AnthemPlayer
              src={egyptAnthem.url}
              lang={lang}
              title={rtl ? "النشيد الوطني المصري — بلادي بلادي" : "National Anthem of Egypt — Bilady, Bilady"}
              theme={{
                bg: "bg-white",
                border: "border-white/30",
                buttonBg: "bg-[#C8862B]",
                buttonText: "text-white",
                buttonHoverBg: "hover:bg-[#A6321F]",
                buttonHoverText: "hover:text-white",
                accent: "text-[#1E8E86]",
                title: "text-[#17110B]",
                ping: "border-[#C8862B]",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
