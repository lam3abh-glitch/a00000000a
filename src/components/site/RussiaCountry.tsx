import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import type { Lang } from "@/lib/i18n";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const COVER = U("2022/01/fullsizerender-4-2.jpg");
const EMBLEM_MAP = U("2022/04/img_4482.jpg");
const SCENE_A = U("2022/01/cf0468b2-5693-41a4-b0d8-e1a041586501.jpg");
const ANTHEM = "https://videos.files.wordpress.com/OEaM1Cq0/my-movie-5-4.mp4";

const HEADINGS = {
  ar: { kicker: "اكتشف روسيا", crown: "أكبر بلد في العالم من حيث المساحة", title: "جمهورية روسيا" },
  en: {
    kicker: "Discover Russia",
    crown: "The largest country in the world by area",
    title: "The Russian Federation",
  },
};

const ABOUT = {
  ar: "هي دولة تقع في شمال أوراسيا ، ذات حكم جمهوري بنظام شبه رئاسي ، تظم 85 كيانا اتحاديا ، اثنان منهم محدودا الاعتراف دوليا وهما جمهورية القرم ومدينة سيفاستوبول الفيدرالية ، لروسيا حدود مشتركة مع كل من النرويج وفنلندا واستونيا ولاتفيا وليتوانيا وبولندا طريق كالينينغرادسكايا اوبلاست ، وكذلك لها حدود مع كل من روسيا البيضاء واوكرانيا وجورجيا واذربيجان وكازاخستان والصين ومنغوليا وكوريا الشمالية ، كما ان لديها حدود بحرية مع اليابان في بحر اوخوتسك وامريكا عن طريق مضيق بيرينغ",
  en: "Russia is a country in northern Eurasia with a semi-presidential republican system. It is made up of 85 federal subjects, two of which have limited international recognition: the Republic of Crimea and the federal city of Sevastopol. Russia shares land borders with Norway, Finland, Estonia, Latvia, Lithuania and Poland (through Kaliningrad Oblast), as well as with Belarus, Ukraine, Georgia, Azerbaijan, Kazakhstan, China, Mongolia and North Korea. It also has maritime borders with Japan in the Sea of Okhotsk and with the United States across the Bering Strait.",
};

const SCALE = {
  ar: "روسيا هي أكبر بلد في العالم من حيث المساحة ، حيث تغطي نسبة 1/8 من مساحة الأرض المأهولة بالسكان في العالم ، كما انها تاسع اكبر دولة من حيث عدد السكان في العالم ، تمتد روسيا عبر كامل شمال آسيا و40% من اوروبا ، كما تغطي تسع مناطق زمنية وتضم طائفة واسعة من البيئات والتضاريس وتمتلك أكبر احتياطي في العالم من الموارد المعدنية والطاقة ، ولديها اكبر احتياطيات العالم من الغابات والبحيرات ، التي تحتوي ما يقرب من ربع المياه العذبة في العالم",
  en: "Russia is the largest country in the world by area, covering one eighth of the world's inhabited land, and it is the ninth most populous country on earth. It stretches across the whole of northern Asia and 40% of Europe, spans nine time zones and holds a vast range of environments and landscapes. It has the world's largest reserves of mineral and energy resources, as well as the largest reserves of forests and lakes, which contain roughly a quarter of the world's fresh water.",
};

/** Onion-domed skyline, the signature silhouette of Russian architecture. */
function OnionSkyline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 140" aria-hidden className={className} preserveAspectRatio="none">
      <g fill="currentColor">
        <path d="M40 140 V70 C40 46 76 46 76 70 V140 Z M58 20 C46 40 40 52 40 62 H76 C76 52 70 40 58 20 Z" />
        <path d="M130 140 V60 C130 34 178 34 178 60 V140 Z M154 4 C136 30 130 44 130 56 H178 C178 44 172 30 154 4 Z" />
        <path d="M240 140 V78 C240 56 272 56 272 78 V140 Z M256 30 C244 50 240 60 240 70 H272 C272 60 268 50 256 30 Z" />
        <path d="M330 140 V64 C330 40 374 40 374 64 V140 Z M352 10 C336 36 330 48 330 60 H374 C374 48 368 36 352 10 Z" />
        <path d="M440 140 V74 C440 52 474 52 474 74 V140 Z M457 24 C445 46 440 56 440 66 H474 C474 56 469 46 457 24 Z" />
        <path d="M530 140 V68 C530 44 570 44 570 68 V140 Z M550 14 C534 40 530 52 530 62 H570 C570 52 566 40 550 14 Z" />
      </g>
    </svg>
  );
}

/** A single onion dome with a cross finial. */
function OnionDome({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" aria-hidden className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d="M50 6 V22 M42 13 H58" />
        <path d="M50 22 C22 62 16 76 16 90 C16 96 84 96 84 90 C84 76 78 62 50 22 Z" />
        <path d="M22 96 H78 V134 H22 Z" />
        <path d="M34 110 h8 M58 110 h8" />
      </g>
    </svg>
  );
}

/** Khokhloma-style folk swirl, Russia's classic painted ornament. */
function FolkSwirl({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 90" aria-hidden className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 74 C40 74 52 34 84 34 C110 34 112 66 92 66 C78 66 76 46 96 40" />
        <path d="M84 34 C104 12 132 12 148 26 C162 38 156 60 140 58" />
        <path d="M148 26 C168 18 188 28 194 46" />
        <circle cx="120" cy="20" r="5" />
        <circle cx="172" cy="60" r="4" />
        <circle cx="52" cy="52" r="3.5" />
      </g>
    </svg>
  );
}

/** Matryoshka nesting-doll outline. */
function Matryoshka({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 130" aria-hidden className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M45 6 C64 6 74 22 70 40 C86 56 86 100 72 116 C60 128 30 128 18 116 C4 100 4 56 20 40 C16 22 26 6 45 6 Z" />
        <path d="M22 44 C32 56 58 56 68 44" />
        <circle cx="35" cy="30" r="2.4" fill="currentColor" stroke="none" />
        <circle cx="55" cy="30" r="2.4" fill="currentColor" stroke="none" />
        <path d="M45 78 c-10 0 -16 8 -16 16 c0 10 32 10 32 0 c0 -8 -6 -16 -16 -16 Z" />
      </g>
    </svg>
  );
}

/** Winter snowflake. */
function Snowflake({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" aria-hidden className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M30 4 V56 M8 17 L52 43 M52 17 L8 43" />
        <path d="M30 14 l-6 -6 M30 14 l6 -6 M30 46 l-6 6 M30 46 l6 6" />
        <path d="M17 22 l-8 -1 M43 38 l8 1 M43 22 l8 -1 M17 38 l-8 1" />
      </g>
    </svg>
  );
}

export function RussiaCountry({ lang }: { lang: Lang }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";
  const h = rtl ? HEADINGS.ar : HEADINGS.en;

  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
      {/* Soft wash kept inside the site palette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,26,46,0.07) 0%, rgba(219,184,122,0.10) 45%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Russian background stickers — subtle so the content stays readable */}
      <OnionSkyline className="absolute bottom-0 inset-x-0 h-24 md:h-32 text-midnight/[0.07] pointer-events-none" />
      <OnionDome className="absolute top-16 end-4 md:end-16 w-16 md:w-24 text-midnight/15 pointer-events-none" />
      <OnionDome className="absolute top-1/2 start-3 md:start-10 w-12 md:w-16 text-gold/30 pointer-events-none" />
      <FolkSwirl className="absolute -top-2 -start-6 w-44 md:w-64 text-gold/30 pointer-events-none" />
      <FolkSwirl className="absolute bottom-24 end-2 md:end-16 w-40 md:w-56 text-gold/25 pointer-events-none rotate-180" />
      <Matryoshka className="absolute top-40 start-6 md:start-20 w-12 md:w-16 text-terracotta/20 pointer-events-none -rotate-6" />
      <Snowflake className="absolute top-8 start-1/3 w-8 md:w-10 text-midnight/10 pointer-events-none" />
      <Snowflake className="absolute top-1/3 end-1/4 w-6 md:w-8 text-gold/35 pointer-events-none" />
      <Snowflake className="absolute bottom-40 start-1/4 w-7 md:w-9 text-midnight/10 pointer-events-none" />

      {/* INTRO — cover photo + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative">
            <div aria-hidden className="absolute -inset-3 rounded-t-full rounded-b-[2rem] border border-gold/35" />
            <figure className="relative overflow-hidden rounded-t-[9rem] rounded-b-[1.75rem] shadow-2xl max-w-xs md:max-w-sm bg-white">
              <img src={COVER} alt="Russia" loading="lazy" className="w-full object-cover" />
              <figcaption className="bg-midnight px-5 py-3 text-center text-[11px] uppercase tracking-[0.3em] text-cream">
                {rtl ? "بلاد القياصرة والقباب الذهبية" : "Land of the tsars and golden domes"}
              </figcaption>
            </figure>
          </div>
        </div>

        <div className={align} dir={rtl ? "rtl" : "ltr"}>
          <div className="text-[11px] uppercase tracking-[0.4em] mb-4 text-gold">◆ {h.kicker}</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-midnight leading-tight">{h.title}</h2>
          <div className="my-4 h-px w-14 bg-gold" />
          <p className="font-display text-xl sm:text-2xl leading-snug text-terracotta">{h.crown}</p>
          <p className="mt-6 text-[16px] sm:text-[18px] leading-[2] text-charcoal/85">{rtl ? ABOUT.ar : ABOUT.en}</p>
        </div>
      </div>

      {/* ANTHEM */}
      <div className="relative z-10 mt-16">
        <AnthemPlayer
          src={ANTHEM}
          lang={lang}
          title={rtl ? "علم روسيا والنشيد الوطني الروسي" : "The flag of Russia and the Russian national anthem"}
        />
      </div>

      {/* SCALE TEXT + PHOTO */}
      <div className="relative z-10 mt-16 mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className={align} dir={rtl ? "rtl" : "ltr"}>
          <FolkSwirl className="w-28 h-10 mb-4 text-gold/70" />
          <p className="text-[16px] sm:text-[17px] leading-[2] text-charcoal/85">{rtl ? SCALE.ar : SCALE.en}</p>
        </div>
        <figure className="overflow-hidden rounded-2xl border border-gold/25 bg-white shadow-sm" dir="ltr">
          <img src={SCENE_A} alt="Russia" loading="lazy" className="w-full object-cover" />
        </figure>
      </div>

      {/* EMBLEM + MAP */}
      <div className="relative z-10 mt-16 mx-auto max-w-3xl px-6">
        <figure className="overflow-hidden rounded-3xl border border-gold/20 bg-white shadow-sm">
          <img
            src={EMBLEM_MAP}
            alt={rtl ? "شعار وخارطة جمهورية روسيا" : "Emblem and map of the Russian Federation"}
            loading="lazy"
            className="w-full object-cover"
          />
          <OnionSkyline className="h-6 w-full text-gold/70" />
          <figcaption className="px-5 py-4 text-center text-[11px] tracking-[0.2em] uppercase text-charcoal/60">
            {rtl ? "شعار وخارطة جمهورية روسيا" : "Emblem and map of the Russian Federation"}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
