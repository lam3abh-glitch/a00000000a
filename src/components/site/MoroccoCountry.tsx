import type { Lang } from "@/lib/i18n";
import ahmadMorocco from "@/assets/ahmad-morocco.png.asset.json";

const IMG = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const EMBLEM_MAP = IMG("2022/04/img_4167.jpg");
const SCENE_C = IMG("2022/10/img_4459.jpg");
const SCENE_A = IMG("2022/04/img_4672.jpg");
const SCENE_B = IMG("2022/10/img_4462.jpg");
const ANTHEM_VIDEO = "https://videos.files.wordpress.com/K0FqCvhL/my-movie-5-3.mp4";

const RED = "#B7202E";
const GREEN = "#0E6B45";
const CLAY = "#C0562B";
const DEEP = "#3A1B12";
const SAND = "#FBF4E9";

const ABOUT = {
  ar: "تقع في أقصى غرب شمال أفريقيا وتطل على البحر المتوسط شمالاً والمحيط الأطلسي غرباً ، وتحدها الجزائر شرقاً ، وموريتانيا جنوباً ، وفي الشريط البحري الضيق الفاصل بين المغرب وأسبانيا توجد مكتنفات متنازع عليها بين البلدين وهي سبتة ومليلية وعدد من الجزر",
  en: "Morocco lies at the far west of North Africa, looking out on the Mediterranean to the north and the Atlantic Ocean to the west, bordered by Algeria to the east and Mauritania to the south. In the narrow strip of sea that separates Morocco from Spain lie the enclaves disputed between the two countries — Ceuta, Melilla and a number of islands.",
};

const IN_BRIEF = {
  ar: "المغرب باختصار .. تقاليد راسخة ، ثقافات حية ، احتفالات فريدة ، مدن قديمة وعتيقة",
  en: "Morocco in brief: deep-rooted traditions, living cultures, unique celebrations, and ancient walled cities.",
};

const TAGLINE = {
  ar: "بلاد الطبيعة الساحرة والمدن الفاتنة والزيتون",
  en: "A land of enchanting nature, captivating cities and olive groves",
};

/** Moroccan eight-point star (khatim) motif. */
function Khatim({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className} style={style}>
      <g fill="currentColor">
        <path d="M50 4 61 24 83 17 76 39 96 50 76 61 83 83 61 76 50 96 39 76 17 83 24 61 4 50 24 39 17 17 39 24Z" />
      </g>
    </svg>
  );
}

/** The pentagram of the Moroccan flag, drawn as an outline. */
function Pentagram({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className} style={style}>
      <path
        d="M50 8 L61.8 44.3 L100 44.3 L69.1 66.8 L80.9 103 L50 80.6 L19.1 103 L30.9 66.8 L0 44.3 L38.2 44.3 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  );
}

/** Moroccan horseshoe arch frame. */
function Arch({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="overflow-hidden bg-white shadow-2xl"
      style={{ borderRadius: "50% 50% 8px 8px / 34% 34% 4px 4px", border: `6px solid ${CLAY}` }}
    >
      {children}
    </div>
  );
}

export function MoroccoCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";
  const t = (o: { ar: string; en: string }) => (rtl ? o.ar : o.en);

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: SAND }}>
      <div aria-hidden className="absolute inset-x-0 top-0 h-2.5" style={{ background: RED }} />
      <div
        aria-hidden
        className="absolute inset-x-0 top-2.5 h-1"
        style={{ background: GREEN }}
      />

      {/* zellige tile pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-conic-gradient(from 45deg at 0 0, #B7202E 0deg 90deg, transparent 90deg 180deg), repeating-linear-gradient(45deg, #0E6B45 0 2px, transparent 2px 28px), repeating-linear-gradient(-45deg, #0E6B45 0 2px, transparent 2px 28px)",
          backgroundSize: "56px 56px, auto, auto",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(80% 50% at 100% 0%, rgba(192,86,43,0.20) 0%, transparent 62%), linear-gradient(180deg, transparent 65%, rgba(14,107,69,0.12) 100%)",
        }}
      />
      <Khatim className="absolute top-16 -left-12 w-44 md:w-60 pointer-events-none" style={{ color: `${CLAY}26` }} />
      <Pentagram className="absolute bottom-8 -right-8 w-32 md:w-44 pointer-events-none" style={{ color: `${GREEN}33` }} />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-8 w-20 h-6 rotate-[7deg] z-20 shadow-sm" style={{ background: "rgba(183,32,46,0.75)" }} />
            <div className="absolute -top-4 right-6 w-16 h-5 rotate-[-9deg] z-20 shadow-sm" style={{ background: "rgba(14,107,69,0.7)" }} />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={ahmadMorocco.url}
                alt={rtl ? "أحمد في المغرب" : "Ahmad in Morocco"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-lg" style={{ color: DEEP, fontFamily: "cursive" }}>
                Maroc · المغرب
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span
            className="inline-block text-white text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[2deg] mb-6"
            style={{ background: RED }}
          >
            {rtl ? "✦ مقدّمة" : "✦ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl leading-snug whitespace-pre-line" style={{ color: DEEP }}>
            {intro}
          </p>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: `${DEEP}B0` }}>
            {t(TAGLINE)}
          </p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {[RED, "#F0E2CE", GREEN, CLAY].map((c, i) => (
              <span key={i} className="h-1.5 w-10" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono" style={{ color: CLAY }}>
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1" style={{ background: `${DEEP}22` }} />
        </div>
        <h2 className={`font-display text-3xl md:text-4xl mb-5 ${align}`} style={{ color: DEEP }}>
          {rtl ? "المملكة المغربية" : "The Kingdom of Morocco"}
        </h2>
        <div className={`space-y-5 text-lg leading-relaxed ${align}`} style={{ color: `${DEEP}CC` }}>
          <p>{t(ABOUT)}</p>
          <p>{t(IN_BRIEF)}</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4" dir="ltr">
          {[SCENE_C, SCENE_A, SCENE_B].map((src, i) => (
            <div
              key={src}
              className="bg-white p-2 shadow-lg"
              style={{ transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}
            >
              <img
                src={src}
                alt={rtl ? "المغرب" : "Morocco"}
                loading="lazy"
                className="block w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* EMBLEM / FLAG + ANTHEM */}
      <div className="relative z-10 mt-16 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md p-6">
          <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-4" style={{ color: CLAY }}>
            {rtl ? "01 · الشعار والخارطة" : "01 · Emblem & map"}
          </div>
          <Arch>
            <img
              src={EMBLEM_MAP}
              alt={rtl ? "شعار وخارطة مملكة المغرب" : "Emblem and map of the Kingdom of Morocco"}
              loading="lazy"
              className="w-full h-64 object-contain bg-white"
            />
          </Arch>
          <div className={`mt-4 font-display text-xl ${align}`} style={{ color: DEEP }}>
            {rtl ? "شعار وخارطة مملكة المغرب · العاصمة الرباط" : "Emblem and map of Morocco · Capital Rabat"}
          </div>
        </div>

        <div className="relative overflow-hidden shadow-md flex flex-col text-white" style={{ background: DEEP }}>
          <Khatim className="absolute -bottom-12 -right-10 w-44 text-white/10 pointer-events-none" />
          <div className={`relative pt-8 px-7 ${align}`}>
            <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-3" style={{ color: "#E9B98F" }}>
              {rtl ? "02 · العلم والنشيد" : "02 · Flag & anthem"}
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-4">
              {rtl ? "علم مملكة المغرب والنشيد الوطني المغربي" : "The flag of Morocco and the Moroccan national anthem"}
            </h3>
          </div>
          <div className="relative mt-auto px-7 pb-7">
            <div className="overflow-hidden border border-white/20" style={{ background: "#000" }}>
              <video src={ANTHEM_VIDEO} controls preload="metadata" className="block w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
