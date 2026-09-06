import type { Lang } from "@/lib/i18n";
import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import ahmadSevan from "@/assets/ahmad-sevan.jpg.asset.json";
import armeniaEmblemMap from "@/assets/armenia-emblem-map.jpg.asset.json";

const ANTHEM_VIDEO = "https://videos.files.wordpress.com/aWElus5Q/my-movie-5-2-1.mp4";

const ABOUT = {
  ar: "تقع أرمينيا على طول طريق الحرير العظيم ، جنوب القوقاز بين بحر قزوين والبحر الأسود بين آسيا وأوروبا الشرقية ، وهي جمهورية غير ساحلية يحدها العديد من الدول ، فيحدها من الشمال جورجيا ، ومن الجنوب تحدها ايران ، ويحدها من الشرق أذربيجان ، ومن الغرب تحدها تركيا",
  en: "Armenia lies along the great Silk Road, in the South Caucasus between the Caspian Sea and the Black Sea, between Asia and Eastern Europe. It is a landlocked republic bordered by several countries: Georgia to the north, Iran to the south, Azerbaijan to the east and Turkey to the west.",
};

const BEST_TIME = {
  ar: "الفترة من أواخر شهر ابريل الى أوائل شهر يونيو ، وذلك لأن تلك الفترة يكون الطقس فيها معتدلا قبل أن يبدأ موسم الحر ، مما يجعلها وقتا مثاليا لاستكشاف البلاد ، وممارسة العديد من الأنشطة السياحية",
  en: "From late April to early June, because in that period the weather is mild before the hot season begins, which makes it an ideal time to explore the country and take part in many activities.",
};

const LANGUAGE = {
  ar: "اللغة الأرمنية هي اللغة الرسمية والمستخدمة في جمهورية أرمينيا ، كما يوجد العديد من اللغات الفرعية الأخرى مثل اللغة الروسية واللغة الانجليزية",
  en: "Armenian is the official and everyday language of the Republic of Armenia, and several other languages are used as well, such as Russian and English.",
};

/** Khachkar-style Armenian carved cross motif. */
function Khachkar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <g stroke="currentColor" strokeWidth="2.4" fill="none">
        <path d="M50 8 V92 M14 40 H86" />
        <path d="M50 8 q-9 8 -9 14 M50 8 q9 8 9 14" />
        <path d="M14 40 q8 -9 14 -9 M14 40 q8 9 14 9" />
        <path d="M86 40 q-8 -9 -14 -9 M86 40 q-8 9 -14 9" />
        <path d="M50 92 q-9 -8 -9 -14 M50 92 q9 -8 9 -14" />
        <circle cx="50" cy="40" r="8" />
        <path d="M32 62 q18 12 36 0" />
      </g>
    </svg>
  );
}

/** Pomegranate — the emblem of Armenian art and abundance. */
function Pomegranate({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <g stroke="currentColor" strokeWidth="2.4" fill="none">
        <path d="M50 24 C24 24 18 46 22 62 C26 80 38 90 50 90 C62 90 74 80 78 62 C82 46 76 24 50 24 Z" />
        <path d="M50 24 l-8 -14 M50 24 l0 -16 M50 24 l8 -14" />
        <circle cx="42" cy="56" r="4" />
        <circle cx="58" cy="56" r="4" />
        <circle cx="50" cy="70" r="4" />
      </g>
    </svg>
  );
}

export function ArmeniaCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
      {/* Armenian flag bands — red / blue / apricot */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-carmine/80" />
      <div aria-hidden className="absolute inset-x-0 top-1.5 h-1.5 bg-azulejo/70" />
      <div aria-hidden className="absolute inset-x-0 top-3 h-1.5 bg-saffron/80" />

      {/* Ararat sunrise wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--saffron) 16%, transparent) 0%, transparent 40%, color-mix(in oklab, var(--carmine) 9%, transparent) 100%)",
        }}
      />
      {/* Carved tuff-stone lattice */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(30deg, var(--carmine) 0 1.5px, transparent 1.5px 20px), repeating-linear-gradient(-30deg, var(--azulejo) 0 1.5px, transparent 1.5px 20px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Mount Ararat silhouette */}
      <svg
        aria-hidden
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-40 w-full text-azulejo/10 pointer-events-none"
      >
        <path d="M0 220 L250 90 L340 130 L520 30 L700 150 L830 70 L1000 160 L1200 100 L1200 220 Z" fill="currentColor" />
      </svg>

      <Khachkar className="absolute -top-6 right-2 md:right-12 w-24 md:w-36 text-carmine/20 pointer-events-none" />
      <Pomegranate className="absolute bottom-8 left-2 md:left-10 w-24 md:w-32 text-carmine/20 pointer-events-none" />

      {/* INTRO — Ahmad's polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-6 w-20 h-6 bg-carmine/70 rotate-[-6deg] z-20 shadow-sm" />
            <div className="absolute -top-4 right-8 w-16 h-5 bg-saffron/75 rotate-[10deg] z-20 shadow-sm" />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={ahmadSevan.url}
                alt={rtl ? "أحمد عند بحيرة سيفان في أرمينيا" : "Ahmad at Lake Sevan in Armenia"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-midnight text-lg" style={{ fontFamily: "cursive" }}>
                Sevan · بحيرة سيفان
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span className="inline-block bg-carmine text-cream text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[-2deg] mb-6">
            {rtl ? "◆ مقدّمة" : "◆ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl text-carmine leading-snug whitespace-pre-line">{intro}</p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {["bg-carmine", "bg-azulejo", "bg-saffron"].map((c) => (
              <span key={c} className={`h-1.5 w-12 ${c}`} />
            ))}
          </div>
        </div>
      </div>

      {/* ANTHEM */}
      <div className="relative z-10 mt-16">
        <AnthemPlayer
          src={ANTHEM_VIDEO}
          lang={lang}
          title={rtl ? "علم جمهورية ارمينيا والنشيد الوطني الارميني" : "The flag of the Republic of Armenia and the Armenian national anthem"}
          theme={{
            bg: "bg-white",
            border: "border-carmine/15",
            buttonBg: "bg-carmine",
            buttonText: "text-cream",
            buttonHoverBg: "hover:bg-saffron",
            buttonHoverText: "hover:text-midnight",
            accent: "text-saffron",
            title: "text-midnight",
            ping: "border-carmine",
          }}
        />
      </div>

      {/* ABOUT + best time + language */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-carmine font-mono">
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1 bg-carmine/15" />
        </div>

        <h3 className={`font-display text-3xl md:text-4xl text-carmine mb-5 ${align}`}>
          {rtl ? "جمهورية أرمينيا" : "The Republic of Armenia"}
        </h3>
        <p className={`font-body text-base md:text-lg text-charcoal/85 leading-[1.95] ${align}`}>{ABOUT[lang]}</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {[
            {
              n: "01",
              t_ar: "أفضل وقت لزيارة جمهورية أرمينيا",
              t_en: "The best time to visit Armenia",
              body: BEST_TIME[lang],
            },
            { n: "02", t_ar: "اللغة في أرمينيا", t_en: "The language in Armenia", body: LANGUAGE[lang] },
          ].map((s) => (
            <div key={s.n} className="relative bg-white border border-carmine/10 shadow-md p-7">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-carmine via-azulejo to-saffron" />
              <div className={`text-[10px] uppercase tracking-[0.4em] text-carmine/70 font-mono mb-3 ${align}`}>{s.n}</div>
              <h4 className={`font-display text-2xl text-carmine mb-3 ${align}`}>{rtl ? s.t_ar : s.t_en}</h4>
              <p className={`font-body text-sm md:text-base text-charcoal/85 leading-[1.9] ${align}`}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FACTS — emblem & map + video */}
      <div className="relative z-10 mt-16 mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative bg-white border border-carmine/10 overflow-hidden shadow-md">
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-carmine font-mono z-10">
              {rtl ? "03 · حقيقة" : "03 · Fact"}
            </div>
            <div className="pt-16 pb-8 px-6 flex items-center justify-center bg-gradient-to-b from-cream to-white min-h-[280px]">
              <img
                src={armeniaEmblemMap.url}
                alt={rtl ? "شعار وخارطة جمهورية ارمينيا" : "Emblem and map of the Republic of Armenia"}
                loading="lazy"
                className="max-h-60 w-auto object-contain drop-shadow-md"
              />
            </div>
            <div className={`border-t border-carmine/10 px-6 py-4 ${align}`}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-1">
                {rtl ? "الشعار والموقع" : "Emblem & Geography"}
              </div>
              <div className="font-display text-xl text-carmine">
                {rtl ? "شعار وخارطة جمهورية ارمينيا" : "Emblem and map of the Republic of Armenia"}
              </div>
            </div>
          </div>

          <div className="relative bg-carmine text-cream border border-carmine overflow-hidden shadow-md flex flex-col">
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-saffron font-mono z-10">
              {rtl ? "04 · مشاهدة" : "04 · Watch"}
            </div>
            <Khachkar className="absolute -bottom-10 -right-8 w-40 text-cream/10 pointer-events-none" />
            <div className={`relative pt-16 px-7 ${align}`}>
              <h3 className="font-display text-2xl md:text-3xl mb-4">
                {rtl ? "السياحة في يريفان أرمينيا" : "Tourism in Yerevan, Armenia"}
              </h3>
            </div>
            <div className="relative mt-auto px-7 pb-7">
              <div className="overflow-hidden border border-cream/20 bg-midnight" style={{ aspectRatio: "16 / 9" }}>
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/hY6yxTjJojQ"
                  title={rtl ? "السياحة في يريفان أرمينيا" : "Tourism in Yerevan, Armenia"}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
