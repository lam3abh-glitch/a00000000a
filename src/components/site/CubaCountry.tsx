import type { Lang } from "@/lib/i18n";
import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import ahmedCuba from "@/assets/ahmed-cuba.png.asset.json";

const ANTHEM_VIDEO = "https://videos.files.wordpress.com/SuCuoxWM/my-movie-5-1-2.mp4";
const EMBLEM_MAP = "https://i0.wp.com/100region.com/wp-content/uploads/2022/04/img_4611.png?ssl=1";
const SCENE_A = "https://i0.wp.com/100region.com/wp-content/uploads/2022/02/img_3062.jpg?ssl=1";
const SCENE_B =
  "https://i0.wp.com/100region.com/wp-content/uploads/2022/02/596579c3-75da-40d5-893b-42f15caed96c.jpg?ssl=1";
const SCENE_C = "https://i0.wp.com/100region.com/wp-content/uploads/2022/03/img_3580.jpg?ssl=1";

const BLUE = "#002A8F";
const RED = "#CF142B";
const SAND = "#FFF6E5";

const ABOUT = {
  ar: "تقع كوبا في منطقة الكاريبي في مدخل خليج المكسيك ، تتكون من جزيرة كوبا وجزيرة لا جوفنتود ، وعدة أرخبيلات",
  en: "Cuba lies in the Caribbean at the entrance of the Gulf of Mexico. It is made up of the island of Cuba, the Isla de la Juventud and several archipelagos.",
};

const TOURISM = {
  ar: "استكشف واحدة من أهم الوجهات السياحية التي تستقطب الزوار والسائحين من شتى بلدان العالم ، وهي دولة كوبا ، تلك الجزيرة الساحرة التي تقع فى منطقة الكاريبي ، وتمتلك كوبا سياحة متنوعة ما بين معالم تاريخية ، مزارات سياحية ، ومجموعة فريدة من الشواطئ الخلابة",
  en: "Explore one of the most important destinations drawing visitors from every country in the world — Cuba, the enchanting island in the Caribbean. Cuba offers varied travel between historic landmarks, visitor sites and a unique collection of magnificent beaches.",
};

const WEATHER_1 = {
  ar: "تعد أفضل أشهر السياحة لجمهورية كوبا بداية من منتصف شهر نوفمبر وحتى شهر ابريل ، حيث يعرف بموسم الجفاف الذي يتمتع بنسمات باردة ، وبالطبيعة الخلابة ، لذلك ننصح بزيارة كوبا في هذه الفترة ، حتى يتمكن السائح من الاستمتاع بكنوز السياحة في كوبا",
  en: "The best months to travel to Cuba run from mid-November through April — the dry season, with cool breezes and magnificent nature. I recommend visiting Cuba in this period so you can enjoy its treasures at their best.",
};

const WEATHER_2 = {
  ar: "اما موسم الأمطار فيكون في الفترة بين شهري مايو ويونيو ويصبح مناخ كوبا اكثر حرارة ورطوبة ، اما الفترة من يوليو حتى أوائل نوفمبر تكون تلك مواسم الأعاصير فلا أنصح بالسفر في هذه الأشهر",
  en: "The rainy season falls between May and June, when Cuba's climate becomes hotter and more humid. From July to early November is hurricane season, so I do not recommend travelling in those months.",
};

/** Five-pointed star of the Cuban flag. */
function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M50 4 L61.8 36.4 L96 36.4 L68.1 57.6 L79.9 90 L50 69.5 L20.1 90 L31.9 57.6 L4 36.4 L38.2 36.4 Z"
      />
    </svg>
  );
}

/** Palm silhouette — the royal palm of Cuba. */
function Palm({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" aria-hidden className={className}>
      <g fill="currentColor">
        <path d="M57 138 C56 108 56 82 60 58 L66 58 C63 84 63 110 64 138 Z" />
        <path d="M62 56 C46 40 30 34 12 34 C30 24 50 30 62 46 Z" />
        <path d="M62 56 C78 40 94 34 112 34 C94 24 74 30 62 46 Z" />
        <path d="M62 54 C54 34 44 20 28 10 C48 12 60 28 64 48 Z" />
        <path d="M62 54 C70 34 80 20 96 10 C76 12 64 28 60 48 Z" />
        <path d="M62 52 C60 30 62 14 66 2 C56 14 54 32 58 52 Z" />
      </g>
    </svg>
  );
}

export function CubaCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: SAND }}>
      {/* flag stripes — blue over white */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-8 flex flex-col">
        {[BLUE, "#FFFFFF", BLUE, "#FFFFFF", BLUE].map((c, i) => (
          <span key={i} className="flex-1" style={{ background: c }} />
        ))}
      </div>
      {/* red triangle with white star, echoing the flag */}
      <div
        aria-hidden
        className={`absolute top-0 h-8 w-14 ${rtl ? "right-0" : "left-0"} flex items-center justify-center`}
        style={{
          background: RED,
          clipPath: rtl ? "polygon(100% 0, 100% 100%, 0 50%)" : "polygon(0 0, 0 100%, 100% 50%)",
        }}
      >
        <Star className={`w-3 text-white ${rtl ? "mr-3" : "ml-3"}`} />
      </div>

      {/* tropical wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(110% 60% at 100% 0%, rgba(0,42,143,0.12) 0%, transparent 60%), linear-gradient(180deg, transparent 55%, rgba(207,20,43,0.10) 100%)",
        }}
      />
      <Palm className="absolute top-24 -left-4 w-24 md:w-36 text-[#0f5132]/20 pointer-events-none" />
      <Palm className="absolute bottom-6 -right-4 w-20 md:w-32 text-[#0f5132]/15 pointer-events-none -scale-x-100" />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-6 w-20 h-6 rotate-[-6deg] z-20 shadow-sm" style={{ background: "rgba(0,42,143,0.75)" }} />
            <div className="absolute -top-4 right-8 w-16 h-5 rotate-[10deg] z-20 shadow-sm" style={{ background: "rgba(207,20,43,0.7)" }} />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={ahmedCuba.url}
                alt={rtl ? "أحمد مع أطفال في هافانا" : "Ahmad with children in Havana"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-midnight text-lg" style={{ fontFamily: "cursive" }}>
                Havana · هافانا
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span
            className="inline-block text-white text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[-2deg] mb-6"
            style={{ background: BLUE }}
          >
            {rtl ? "★ مقدّمة" : "★ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl leading-snug whitespace-pre-line" style={{ color: BLUE }}>
            {intro}
          </p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {[BLUE, RED, BLUE, RED].map((c, i) => (
              <span key={i} className="h-1.5 w-10" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono" style={{ color: RED }}>
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1" style={{ background: "rgba(0,42,143,0.2)" }} />
        </div>
        <h3 className={`font-display text-3xl md:text-4xl mb-5 ${align}`} style={{ color: BLUE }}>
          {rtl ? "جمهورية كوبا" : "The Republic of Cuba"}
        </h3>
        <p className={`font-body text-base md:text-lg text-charcoal/85 leading-[1.95] ${align}`}>{ABOUT[lang]}</p>
        <p className={`mt-5 font-body text-base md:text-lg text-charcoal/85 leading-[1.95] ${align}`}>{TOURISM[lang]}</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { src: SCENE_A, ar: "شوارع كوبا الملوّنة", en: "The colourful streets of Cuba" },
            { src: SCENE_B, ar: "الكاريبي في كوبا", en: "The Caribbean in Cuba" },
            { src: SCENE_C, ar: "معالم كوبا", en: "Landmarks of Cuba" },
          ].map((s) => (
            <figure key={s.src} className="overflow-hidden rounded-2xl shadow-lg bg-white" style={{ border: `1px solid ${BLUE}22` }}>
              <img
                src={s.src}
                alt={rtl ? s.ar : s.en}
                loading="lazy"
                className="block w-full h-44 md:h-52 object-cover transition-transform duration-500 hover:scale-105"
              />
              <figcaption className={`px-4 py-3 font-body text-xs text-charcoal/75 ${align}`}>
                {rtl ? s.ar : s.en}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* WEATHER */}
      <div className="relative z-10 mt-16 mx-auto max-w-4xl px-6">
        <div
          className="p-8 md:p-10 shadow-md bg-white"
          style={{ borderTop: `4px solid ${RED}`, border: `1px solid ${BLUE}1f` }}
        >
          <h4 className={`font-display text-2xl md:text-3xl mb-4 ${align}`} style={{ color: BLUE }}>
            {rtl ? "الطقس في كوبا" : "The weather in Cuba"}
          </h4>
          <p className={`font-body text-base text-charcoal/85 leading-[1.95] ${align}`}>{WEATHER_1[lang]}</p>
          <p className={`mt-4 font-body text-base text-charcoal/85 leading-[1.95] ${align}`}>{WEATHER_2[lang]}</p>
        </div>
      </div>

      {/* ANTHEM */}
      <div className="relative z-10 mt-16">
        <AnthemPlayer
          src={ANTHEM_VIDEO}
          lang={lang}
          title={rtl ? "النشيد الوطني الكوبي" : "The flag of Cuba and the Cuban national anthem"}
        />
      </div>

      {/* FACT — emblem & map */}
      <div className="relative z-10 mt-16 mx-auto max-w-3xl px-6">
        <div className="relative bg-white overflow-hidden shadow-md" style={{ border: `1px solid ${BLUE}26` }}>
          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] font-mono z-10" style={{ color: RED }}>
            {rtl ? "01 · حقيقة" : "01 · Fact"}
          </div>
          <div className="pt-16 pb-8 px-6 flex items-center justify-center" style={{ background: `linear-gradient(180deg, ${SAND}, #ffffff)` }}>
            <img
              src={EMBLEM_MAP}
              alt={rtl ? "شعار كوبا وخريطتها" : "The emblem and map of Cuba"}
              loading="lazy"
              className="max-h-72 w-auto object-contain drop-shadow-md"
            />
          </div>
          <div className={`border-t px-6 py-4 ${align}`} style={{ borderColor: `${BLUE}1a` }}>
            <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-1">
              {rtl ? "الشعار والموقع" : "Emblem & geography"}
            </div>
            <div className="font-display text-xl" style={{ color: BLUE }}>
              {rtl ? "شعار جمهورية كوبا · العاصمة هافانا" : "Emblem of the Republic of Cuba · Capital Havana"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
