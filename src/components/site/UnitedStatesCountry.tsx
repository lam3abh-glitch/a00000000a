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

/** Stripes block echoing the thirteen stripes of the flag. */
function Stripes({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" aria-hidden className={className}>
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={i} x="0" y={i * 8.6} width="100" height="4.3" fill="currentColor" />
      ))}
    </svg>
  );
}

export function UnitedStatesCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  return (
    <section className="relative overflow-hidden bg-usparch py-20 sm:py-24">
      {/* Stars & stripes wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--usnavy) 12%, transparent) 0%, transparent 45%, color-mix(in oklab, var(--usred) 10%, transparent) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, var(--usred) 0 10px, transparent 10px 26px)",
        }}
      />

      <Star className="absolute -top-6 left-4 md:left-12 w-24 md:w-32 text-usnavy/15 pointer-events-none" />
      <Stripes className="absolute bottom-8 right-0 md:right-10 w-36 md:w-52 text-usred/15 pointer-events-none" />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-8 w-20 h-6 bg-usred/70 rotate-[-7deg] z-20 shadow-sm" />
            <div className="absolute -top-4 right-6 w-14 h-5 bg-usnavy/60 rotate-[9deg] z-20 shadow-sm" />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
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
          <span className="inline-block bg-usnavy text-usparch text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[-2deg] mb-6">
            {rtl ? "★ مقدّمة" : "★ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl text-usnavy leading-snug whitespace-pre-line">{intro}</p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {["bg-usred", "bg-usnavy", "bg-gold", "bg-usred"].map((c, i) => (
              <span key={i} className={`h-1.5 w-10 ${c}`} />
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-usred font-mono">
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1 bg-usnavy/15" />
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className={`md:col-span-7 ${align}`}>
            <h3 className="font-display text-3xl md:text-4xl text-usnavy mb-5">
              {rtl ? "الولايات المتحدة الامريكية" : "The United States of America"}
            </h3>
            <p className="font-body text-base md:text-lg text-charcoal/85 leading-[1.95]">{ABOUT[lang]}</p>
            <p className="mt-5 font-body text-base md:text-lg text-charcoal/85 leading-[1.95]">{ABOUT_2[lang]}</p>
          </div>
          <div className="md:col-span-5">
            <figure className="overflow-hidden rounded-2xl shadow-lg border border-usnavy/10">
              <img
                src={AHMAD_LIBERTY}
                alt={rtl ? "أحمد أمام تمثال الحرية في نيويورك" : "Ahmad in front of the Statue of Liberty in New York"}
                loading="lazy"
                className="h-64 md:h-80 w-full object-cover"
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
            bg: "bg-usnavy",
            border: "border-usparch/20",
            buttonBg: "bg-usred",
            buttonText: "text-usparch",
            buttonHoverBg: "hover:bg-usparch",
            buttonHoverText: "hover:text-usnavy",
            accent: "text-gold",
            title: "text-usparch",
            ping: "border-gold",
          }}
        />
      </div>

      {/* EMBLEM & MAP */}
      <div className="relative z-10 mt-20 mx-auto max-w-3xl px-6">
        <div className="group relative bg-white border border-usnavy/10 overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-usred font-mono z-10">
            {rtl ? "01 · حقيقة" : "01 · Fact"}
          </div>
          <Star className="absolute -bottom-10 -right-10 w-40 text-usnavy/5 pointer-events-none" />
          <div className="pt-16 pb-8 px-6 flex items-center justify-center bg-gradient-to-b from-usparch to-white min-h-[280px]">
            <img
              src={EMBLEM_MAP}
              alt={rtl ? "شعار وخارطة الولايات المتحدة الامريكية" : "Emblem and map of the United States of America"}
              loading="lazy"
              className="max-h-60 w-auto object-contain drop-shadow-md"
            />
          </div>
          <div className={`border-t border-usnavy/10 px-6 py-4 ${align}`}>
            <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-1">
              {rtl ? "الشعار والموقع" : "Emblem & Geography"}
            </div>
            <div className="font-display text-xl text-usnavy">
              {rtl ? "شعار وخارطة الولايات المتحدة الامريكية" : "Emblem and map of the United States of America"}
            </div>
          </div>
        </div>
      </div>

      {/* FLAG — additional information */}
      <div className="relative z-10 mt-20 mx-auto max-w-4xl px-6">
        <div className={`mb-6 ${align}`}>
          <div className="text-[10px] uppercase tracking-[0.4em] text-usred font-mono mb-2">
            {rtl ? "معلومات إضافية" : "Additional information"}
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-usnavy">
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
                <figcaption className={`border-t border-usnavy/10 px-5 py-4 font-display text-lg text-usnavy ${align}`}>
                  {rtl ? item.ar : item.en}
                </figcaption>
              </>
            );
            const cls =
              "block bg-white border border-usnavy/10 overflow-hidden shadow-md hover:shadow-xl transition-shadow";
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
