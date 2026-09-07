import type { Lang } from "@/lib/i18n";
import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import ahmadSenegal from "@/assets/ahmad-senegal.png.asset.json";
import senegalAnthem from "@/assets/senegal-anthem.mp3.asset.json";

const IMG = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const EMBLEM_MAP = IMG("2022/04/img_4423.jpg");
const FLAG = IMG("2022/03/img_3563-1.jpg");

const GREEN = "#00853F";
const YELLOW = "#FDEF42";
const RED = "#E31B23";
const DEEP = "#12281B";
const SAND = "#FBF7EC";

const ABOUT = {
  ar: "هي دولة أفريقية تقع جنوب نهر السنغال في غرب أفريقيا ، وقد اكتسبت اسمها من النهر الذي يحدّها من الشرق والشمال والذي ينبع من فوتاجلون في غينيا ، ويحد السنغال خارجيا المحيط الأطلسي إلى الغرب ، موريتانيا شمالا ، مالي شرقا ، وغينيا وغينيا بيساو جنوبا ، داخلياً تحيط السنغال تقريبا بغامبيا أي من الشمال ، الشرق والجنوب ، ما عدا شاطئ غامبيا القصير على المحيط الأطلسي",
  en: "Senegal is a West African country lying south of the Senegal River, and it takes its name from that river, which borders it to the east and north and rises in the Fouta Djallon highlands of Guinea. Senegal is bounded by the Atlantic Ocean to the west, Mauritania to the north, Mali to the east, and Guinea and Guinea-Bissau to the south. Internally it almost surrounds The Gambia — to the north, east and south — except for The Gambia's short stretch of Atlantic shore.",
};

const TAGLINE = {
  ar: "بلاد التيرانغا .. الضيافة الأفريقية والمحيط الأطلسي",
  en: "The land of Teranga — African hospitality on the Atlantic shore",
};

/** Baobab tree silhouette — the emblem tree of Senegal. */
function Baobab({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden className={className} style={style}>
      <g fill="currentColor">
        <path d="M52 118h16c-2-18-3-38-2-56l14 6-13-14 20 2-21-10 22-8-24 1 14-14-19 8 4-18-11 16-9-17 2 20-18-11 12 16-24-3 22 9-22 9 24-1-16 12 19-7-12 14 14-6c2 18 1 38-2 52Z" />
      </g>
    </svg>
  );
}

/** The five-pointed green star of the Senegalese flag. */
function Star({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className} style={style}>
      <path
        d="M50 6 L61.8 41.5 L99 41.5 L69 63.5 L80.4 99 L50 77.5 L19.6 99 L31 63.5 L1 41.5 L38.2 41.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SenegalCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";
  const t = (o: { ar: string; en: string }) => (rtl ? o.ar : o.en);

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: SAND }}>
      {/* flag stripes along the top */}
      <div aria-hidden className="absolute inset-x-0 top-0 flex h-2.5">
        <span className="flex-1" style={{ background: GREEN }} />
        <span className="flex-1" style={{ background: YELLOW }} />
        <span className="flex-1" style={{ background: RED }} />
      </div>

      {/* woven / kente-like pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #00853F 0 3px, transparent 3px 34px), repeating-linear-gradient(0deg, #E31B23 0 3px, transparent 3px 34px), repeating-linear-gradient(45deg, #FDEF42 0 6px, transparent 6px 24px)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(70% 45% at 0% 0%, rgba(253,239,66,0.30) 0%, transparent 60%), linear-gradient(180deg, transparent 60%, rgba(0,133,63,0.12) 100%)",
        }}
      />
      <Baobab className="absolute top-14 -right-10 w-44 md:w-64 pointer-events-none" style={{ color: `${GREEN}26` }} />
      <Star className="absolute bottom-10 -left-8 w-28 md:w-40 pointer-events-none" style={{ color: `${GREEN}2E` }} />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[3deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-8 w-20 h-6 rotate-[-8deg] z-20 shadow-sm" style={{ background: "rgba(0,133,63,0.75)" }} />
            <div className="absolute -top-4 right-6 w-16 h-5 rotate-[9deg] z-20 shadow-sm" style={{ background: "rgba(227,27,35,0.7)" }} />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={ahmadSenegal.url}
                alt={rtl ? "أحمد في السنغال" : "Ahmad in Senegal"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-lg" style={{ color: DEEP, fontFamily: "cursive" }}>
                Sénégal · السنغال
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span
            className="inline-block text-white text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[-2deg] mb-6"
            style={{ background: GREEN }}
          >
            {rtl ? "★ مقدّمة" : "★ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl leading-snug whitespace-pre-line" style={{ color: DEEP }}>
            {intro}
          </p>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: `${DEEP}B0` }}>
            {t(TAGLINE)}
          </p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {[GREEN, YELLOW, RED].map((c, i) => (
              <span key={i} className="h-1.5 w-12" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono" style={{ color: GREEN }}>
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1" style={{ background: `${DEEP}22` }} />
        </div>
        <h2 className={`font-display text-3xl md:text-4xl mb-5 ${align}`} style={{ color: DEEP }}>
          {rtl ? "جمهورية السنغال" : "The Republic of Senegal"}
        </h2>
        <div className={`space-y-5 text-lg leading-relaxed ${align}`} style={{ color: `${DEEP}CC` }}>
          <p>{t(ABOUT)}</p>
        </div>
      </div>

      {/* EMBLEM / FLAG + ANTHEM */}
      <div className="relative z-10 mt-16 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md p-6">
          <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-4" style={{ color: GREEN }}>
            {rtl ? "01 · الشعار والخارطة" : "01 · Emblem & map"}
          </div>
          <div className="overflow-hidden bg-white" style={{ border: `6px solid ${GREEN}` }}>
            <img
              src={EMBLEM_MAP}
              alt={rtl ? "شعار وخارطة جمهورية السنغال" : "Emblem and map of the Republic of Senegal"}
              loading="lazy"
              className="w-full h-64 object-contain bg-white"
            />
          </div>
          <div className={`mt-4 font-display text-xl ${align}`} style={{ color: DEEP }}>
            {rtl ? "شعار وخارطة جمهورية السنغال" : "Emblem and map of the Republic of Senegal"}
          </div>
        </div>

        <div className="relative overflow-hidden shadow-md flex flex-col text-white" style={{ background: DEEP }}>
          <Baobab className="absolute -bottom-10 -right-8 w-44 text-white/10 pointer-events-none" />
          <div className={`relative pt-8 px-7 ${align}`}>
            <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-3" style={{ color: YELLOW }}>
              {rtl ? "02 · العلم والنشيد" : "02 · Flag & anthem"}
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-5">
              {rtl ? "علم جمهورية السنغال والنشيد الوطني السنغالي" : "The flag of Senegal and the Senegalese national anthem"}
            </h3>
            <div className="overflow-hidden border border-white/20 max-w-sm">
              <img
                src={FLAG}
                alt={rtl ? "علم جمهورية السنغال" : "Flag of the Republic of Senegal"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="relative mt-8 pb-8">
            <AnthemPlayer
              src={senegalAnthem.url}
              lang={lang}
              title={rtl ? "النشيد الوطني السنغالي" : "National Anthem of Senegal"}
              theme={{
                bg: "bg-white",
                border: "border-white/30",
                buttonBg: "bg-[#00853F]",
                buttonText: "text-white",
                buttonHoverBg: "hover:bg-[#E31B23]",
                buttonHoverText: "hover:text-white",
                accent: "text-[#00853F]",
                title: "text-[#12281B]",
                ping: "border-[#FDEF42]",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
