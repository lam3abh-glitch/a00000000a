import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import type { Lang } from "@/lib/i18n";

const IMG = (name: string, month: string) =>
  `https://i0.wp.com/100region.com/wp-content/uploads/${month}/${name}?ssl=1`;

const AHMAD_DODGERS = IMG("img_4668.jpg", "2022/04");
const AHMAD_LIBERTY = IMG("img_4669.jpg", "2022/04");
const EMBLEM_MAP = IMG("img_3950.jpg", "2022/03");
const ANTHEM = "https://videos.files.wordpress.com/VgXEpT2E/my-movie-5-13.mp4";
const FLAG_IMPORTANCE = IMG("img_4686.jpg", "2022/10");
const FLAG_USA = IMG("img_3579.jpg", "2022/03");

const ABOUT = {
  ar: "هي جمهورية دستورية تضم خمسين ولاية ومنطقة العاصمة الاتحادية ، تقع معظم البلاد في وسط أمريكا الشمالية ، حيث تقع 48 ولاية وواشنطن العاصمة بين المحيط الهادي والمحيط الاطلسي ، وتحدها من الشمال كندا ، وتحدها من الجنوب المكسيك ، تقع ولاية ألاسكا في الشمال الغربي من القارة ، وتحدها كندا شرقاً ، وروسيا غربا عبر مضيق بيرينغ ، أما ولاية هاواي التي تعد أرخبيلا فتقع في منتصف المحيط الهادي ، كما تضم الولايات عددا من الأراضي والجزر في الكاريبي والمحيط الهادىء",
  en: "The United States is a constitutional republic of fifty states and the federal capital district. Most of the country lies in the middle of North America, with 48 states and Washington D.C. set between the Pacific and the Atlantic, bordered to the north by Canada and to the south by Mexico. Alaska lies in the north-west of the continent, bordered by Canada to the east and Russia to the west across the Bering Strait, while Hawaii is an archipelago in the middle of the Pacific. The country also holds a number of territories and islands in the Caribbean and the Pacific.",
};

const ABOUT_2 = {
  ar: "الولايات المتحدة الأمريكية احدى كبرى دول العالم ومن اهم وجهات السياحة العالمية بسبب تنوع مقوماتها من طبيعة وحداثة ومعالم سياحية كثيرة ، تضم امريكا مجموعة من المدن الشهيرة على مستوى العالم والتي تستقطب الكثير من السياح اضافة للزوار القادمين اليها لأغراض عديدة كالدراسة او الهجرة مثلا ، السفر الى امريكا غاية تناسب معظم رغبات السياح فترى الذين يبحثون عن الشواطئ والاستجمام يتجهون الى شواطئ ميامي الساحرة ، ومن يحب حياة الليل يقصد مدينة نيويورك الصاخبة وغيرها الكثير",
  en: "The United States is one of the great countries of the world and one of the most important tourist destinations anywhere, thanks to the sheer variety of what it holds: nature, modernity and a vast number of sights. America gathers a set of cities famous the world over that draw enormous numbers of travellers, along with visitors who come for many other reasons such as study or migration. Travelling to America suits almost every wish: those looking for beaches and rest head for the enchanting shores of Miami, while lovers of nightlife make for the roar of New York — and there is a great deal more besides.",
};

/** Five-pointed star — the motif repeated fifty times on the American flag. */
function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <path fill="currentColor" d="M50 4l12.4 32.1L96 38.2 69.6 59.1 79 92 50 72.6 21 92l9.4-32.9L4 38.2l33.6-2.1z" />
    </svg>
  );
}

/** Chasing bulb strip — the marquee lights of a Strip casino sign. */
function Bulbs({ count = 18, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="vegas-bulb" style={{ animationDelay: `${(i % 3) * 0.37}s` }} />
      ))}
    </div>
  );
}

/** Diamond pip — playing-card suit used as a section marker. */
function Diamond({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <path fill="currentColor" d="M50 2l34 48-34 48L16 50z" />
    </svg>
  );
}

export function UnitedStatesCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  return (
    <section className="relative overflow-hidden bg-vegasnight py-20 sm:py-24">
      {/* Desert-night sky: neon haze rising off the Strip */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 60% at 50% 100%, color-mix(in oklab, var(--vegaspink) 26%, transparent) 0%, transparent 60%), radial-gradient(90% 50% at 15% 0%, color-mix(in oklab, var(--vegaspurple) 45%, transparent) 0%, transparent 65%), radial-gradient(80% 45% at 85% 10%, color-mix(in oklab, var(--vegascyan) 18%, transparent) 0%, transparent 60%)",
        }}
      />
      {/* Retro grid horizon */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklab, var(--vegascyan) 70%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--vegascyan) 70%, transparent) 1px, transparent 1px)",
          backgroundSize: "70px 40px, 70px 40px",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />
      <Star className="absolute -top-6 left-4 md:left-12 w-24 md:w-32 text-vegasgold/20 vegas-flicker pointer-events-none" />
      <Diamond className="absolute bottom-10 right-2 md:right-10 w-24 md:w-32 text-vegaspink/20 pointer-events-none" />

      {/* MARQUEE SIGN — polaroid + intro */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl">
          <div className="relative rounded-[999px] border border-vegasgold/40 bg-vegasink/70 px-8 py-5 text-center vegas-tube-gold backdrop-blur">
            <Bulbs count={14} className="mb-3" />
            <div className="font-mono text-[10px] uppercase tracking-[0.55em] text-vegasgold/80">
              {rtl ? "أهلاً بك في" : "Welcome to fabulous"}
            </div>
            <div className="mt-2 font-display text-3xl md:text-5xl vegas-neon-pink vegas-flicker">
              {rtl ? "الولايات المتحدة" : "The United States"}
            </div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.4em] vegas-neon-cyan">
              {rtl ? "United States · Nevada style" : "الولايات المتحدة"}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative flex justify-center md:justify-start" dir="ltr">
            <div className="relative rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-4 left-8 w-20 h-6 bg-vegaspink/70 rotate-[-7deg] z-20 shadow-sm" />
              <div className="absolute -top-4 right-6 w-14 h-5 bg-vegascyan/60 rotate-[9deg] z-20 shadow-sm" />
              <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm vegas-tube-pink">
                <img
                  src={AHMAD_DODGERS}
                  alt={rtl ? "أحمد في لوس انجلوس" : "Ahmad in Los Angeles"}
                  loading="lazy"
                  className="block w-full h-auto object-cover"
                />
                <div className="mt-4 text-center font-display text-midnight text-lg" style={{ fontFamily: "cursive" }}>
                  United States · الولايات المتحدة
                </div>
              </div>
            </div>
          </div>

          <div className={align}>
            <span className="inline-block bg-vegaspurple text-vegasgold text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[-2deg] mb-6 vegas-tube-gold">
              {rtl ? "★ مقدّمة" : "★ Introduction"}
            </span>
            <p className="font-display text-3xl md:text-4xl text-vegasgold leading-snug whitespace-pre-line">{intro}</p>
            <div className="mt-6 flex items-center gap-1.5" aria-hidden>
              {["bg-vegaspink", "bg-vegascyan", "bg-vegasgold", "bg-vegaspink"].map((c, i) => (
                <span key={i} className={`h-1.5 w-10 ${c}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono vegas-neon-cyan">
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1 bg-vegasgold/20" />
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className={`md:col-span-7 ${align}`}>
            <h3 className="font-display text-3xl md:text-4xl mb-5 vegas-neon-gold">
              {rtl ? "الولايات المتحدة الامريكية" : "The United States of America"}
            </h3>
            <p className="font-body text-base md:text-lg text-cream/85 leading-[1.95]">{ABOUT[lang]}</p>
            <p className="mt-5 font-body text-base md:text-lg text-cream/85 leading-[1.95]">{ABOUT_2[lang]}</p>
          </div>
          <div className="md:col-span-5">
            <figure className="overflow-hidden rounded-2xl bg-vegasink/60 p-2 vegas-tube-cyan">
              <img
                src={AHMAD_LIBERTY}
                alt={rtl ? "أحمد أمام تمثال الحرية في نيويورك" : "Ahmad in front of the Statue of Liberty in New York"}
                loading="lazy"
                className="h-64 md:h-80 w-full rounded-xl object-cover"
              />
            </figure>
          </div>
        </div>
      </div>

      {/* ANTHEM */}
      <div className="relative z-10 mt-20">
        <AnthemPlayer
          src={ANTHEM}
          lang={lang}
          title={rtl ? "النشيد الوطني الأمريكي" : "The American national anthem"}
          theme={{
            bg: "bg-vegasink",
            border: "border-vegasgold/30",
            buttonBg: "bg-vegaspink",
            buttonText: "text-vegasink",
            buttonHoverBg: "hover:bg-vegascyan",
            buttonHoverText: "hover:text-vegasink",
            accent: "text-vegascyan",
            title: "text-vegasgold",
            ping: "border-vegaspink",
          }}
        />
      </div>

      {/* EMBLEM & MAP */}
      <div className="relative z-10 mt-20 mx-auto max-w-3xl px-6">
        <div className="group relative overflow-hidden rounded-xl bg-vegasink/80 vegas-tube-gold">
          <div className="absolute top-4 left-4 z-10 font-mono text-[10px] uppercase tracking-[0.4em] vegas-neon-cyan">
            {rtl ? "01 · حقيقة" : "01 · Fact"}
          </div>
          <Bulbs count={16} className="pt-4" />
          <div className="pt-8 pb-8 px-6 flex items-center justify-center min-h-[280px] vegas-carpet">
            <img
              src={EMBLEM_MAP}
              alt={rtl ? "شعار وخارطة الولايات المتحدة الامريكية" : "Emblem and map of the United States of America"}
              loading="lazy"
              className="max-h-60 w-auto object-contain drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]"
            />
          </div>
          <div className={`border-t border-vegasgold/20 px-6 py-4 ${align}`}>
            <div className="text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-1">
              {rtl ? "الشعار والموقع" : "Emblem & Geography"}
            </div>
            <div className="font-display text-xl text-vegasgold">
              {rtl ? "شعار وخارطة الولايات المتحدة الامريكية" : "Emblem and map of the United States of America"}
            </div>
          </div>
        </div>
      </div>

      {/* FLAG — additional information */}
      <div className="relative z-10 mt-20 mx-auto max-w-4xl px-6">
        <div className={`mb-6 ${align}`}>
          <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-2 vegas-neon-cyan">
            {rtl ? "معلومات إضافية" : "Additional information"}
          </div>
          <h3 className="font-display text-2xl md:text-3xl vegas-neon-gold">
            {rtl ? "علم الولايات المتحدة الأمريكية" : "The flag of the United States of America"}
          </h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { src: FLAG_IMPORTANCE, ar: "أهمية علم الدولة", en: "The importance of a nation's flag" },
            { src: FLAG_USA, ar: "علم الولايات المتحدة الأمريكية", en: "The flag of the United States of America" },
          ].map((item) => {
            const inner = (
              <>
                <img
                  src={item.src}
                  alt={rtl ? item.ar : item.en}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />
                <figcaption className={`border-t border-vegasgold/20 px-5 py-4 font-display text-lg text-vegasgold ${align}`}>
                  {rtl ? item.ar : item.en}
                </figcaption>
              </>
            );
            const cls =
              "block overflow-hidden rounded-xl bg-vegasink/80 vegas-tube-pink";
            return item.ar === "أهمية علم الدولة" ? (
              <a
                key={item.src}
                href="https://100region.com/?p=8943"
                target="_blank"
                rel="noreferrer"
                className={`${cls} hover:-translate-y-1 transition-transform cursor-pointer`}
              >
                {inner}
              </a>
            ) : (
              <figure key={item.src} className={cls}>
                {inner}
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
