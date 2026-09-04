import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import type { Lang } from "@/lib/i18n";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const COVER = U("2023/04/img_0401.jpg");
const EMBLEM_MAP = U("2022/04/img_4496.jpg");
const SCENE_B = U("2022/01/img_4955.jpg");
const ANTHEM = "https://videos.files.wordpress.com/30HCtNV0/my-movie-5-7.mp4";
const YOUTUBE_ID = "uMUt1gzNMiQ";

const HEADINGS = {
  ar: { kicker: "اكتشف النرويج", crown: "تاج فخر السياحة العالمية", title: "مملكة النرويج" },
  en: {
    kicker: "Discover Norway",
    crown: "The crowning pride of world tourism",
    title: "The Kingdom of Norway",
  },
};

const ABOUT = {
  ar: "هي دولة تقع في شمالي أوروبا وتحتل الجزء الغربي من شبه الجزيرة الاسكندنافية ، بالإضافة إلى بان ماين وأرخبيل سفالبارد في المنطقة القطبية الشمالية",
  en: "Norway is a country in northern Europe occupying the western part of the Scandinavian peninsula, along with Jan Mayen and the Svalbard archipelago in the Arctic region.",
};

const TOURISM = {
  ar: "السياحة في النرويج من أعظم الخطوات التي يجب أن يأخذها كل فرد في هذا العالم ، بلاد الفايكنج تعتبر جنة حقيقية على الأرض ، الطبيعة هناك خلابة جدا ، والأنشطة السياحية متعددة ، فهناك ستجد خليط رائع من كل شيء ، السياحة التاريخية ، والمتاحف ، والمتنزهات ، والحدائق ، والطبيعة والجبال ، والمضايق والأنهار والشلالات والبحيرات وكل شيء تقريبا",
  en: "Travelling to Norway is one of the greatest journeys anyone in this world should take. The land of the Vikings is a true paradise on earth: the nature there is breathtaking and the activities are endless. You will find a wonderful mixture of everything — historical sights, museums, parks and gardens, nature and mountains, fjords, rivers, waterfalls, lakes and almost everything else.",
};

/** Aurora ribbons drawn in SVG, tinted with the site's gold. */
function Aurora({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 160" aria-hidden className={className} preserveAspectRatio="none">
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <path d="M0 110 C60 40 120 130 190 60 C250 0 320 90 400 40" strokeWidth="10" opacity="0.5" />
        <path d="M0 130 C70 70 130 150 200 90 C260 40 330 120 400 70" strokeWidth="5" opacity="0.35" />
        <path d="M0 90 C80 30 140 110 210 40 C270 -10 340 70 400 20" strokeWidth="2.5" opacity="0.25" />
      </g>
    </svg>
  );
}

/** Fjord mountain range silhouette. */
function Fjord({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 120" aria-hidden className={className} preserveAspectRatio="none">
      <path
        d="M0 120 L70 44 L112 82 L168 26 L232 96 L286 52 L348 100 L404 38 L468 88 L520 56 L600 120 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Viking longship, a nod to Norway's seafaring past. */
function Longship({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 90" aria-hidden className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M12 62 C26 76 94 76 108 62" />
        <path d="M12 62 C8 52 10 44 16 40" />
        <path d="M108 62 C112 52 110 44 104 40" />
        <path d="M60 62 V16" />
        <path d="M60 20 L94 34 L60 46 Z" />
        <path d="M20 66 h80" />
      </g>
    </svg>
  );
}

/** Viking round shield with a simple boss and rim. */
function Shield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.35" />
      <path d="M50 4 V96 M4 50 H96" stroke="currentColor" strokeWidth="1" opacity="0.25" />
    </svg>
  );
}

/** Elder Futhark rune ring decoration. */
function RuneRing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" aria-hidden className={className}>
      <circle cx="80" cy="80" r="72" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <circle cx="80" cy="80" r="58" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      <g fill="currentColor" fontSize="10" fontFamily="serif" opacity="0.35" textAnchor="middle" dominantBaseline="middle">
        <text x="80" y="14">ᚠ</text>
        <text x="113" y="23">ᚢ</text>
        <text x="137" y="47">ᚦ</text>
        <text x="146" y="80">ᚨ</text>
        <text x="137" y="113">ᚱ</text>
        <text x="113" y="137">ᚲ</text>
        <text x="80" y="146">ᚷ</text>
        <text x="47" y="137">ᚹ</text>
        <text x="23" y="113">ᚺ</text>
        <text x="14" y="80">ᚾ</text>
        <text x="23" y="47">ᛁ</text>
        <text x="47" y="23">ᛃ</text>
      </g>
    </svg>
  );
}

/** Norse interlace knot corner ornament. */
function KnotCorner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" aria-hidden className={className}>
      <path
        d="M4 4 h40 a16 16 0 0 1 16 16 v16 M4 4 v40 a16 16 0 0 0 16 16 h16 M4 4 l32 32 M4 4 l52 52"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="4" cy="4" r="2.5" fill="currentColor" />
      <circle cx="36" cy="36" r="2.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

/** Simple Viking axe silhouette. */
function Axe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" aria-hidden className={className}>
      <path
        d="M38 12 v76 a4 4 0 0 0 8 0 V12 a4 4 0 0 0 -8 0 M46 16 C62 10 72 22 74 38 C68 34 58 30 46 28 Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}

export function NorwayCountry({ lang }: { lang: Lang }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";
  const h = rtl ? HEADINGS.ar : HEADINGS.en;

  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
      {/* Cool northern wash kept inside the site palette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,26,46,0.07) 0%, rgba(219,184,122,0.10) 45%, rgba(255,255,255,0) 100%)",
        }}
      />
      <Aurora className="absolute -top-2 inset-x-0 h-40 text-gold/45 pointer-events-none" />
      <Longship className="absolute top-24 end-4 md:end-14 w-24 md:w-32 text-midnight/15 pointer-events-none" />
      <Fjord className="absolute bottom-0 inset-x-0 h-24 md:h-32 text-midnight/[0.07] pointer-events-none" />

      {/* Viking-themed background stickers — kept subtle so content stays readable */}
      <RuneRing className="absolute -top-8 -start-8 w-40 md:w-56 text-gold/25 pointer-events-none rotate-12" />
      <Shield className="absolute top-36 start-4 md:start-10 w-16 md:w-24 text-midnight/10 pointer-events-none -rotate-6" />
      <Axe className="absolute bottom-28 end-6 md:end-20 w-14 md:w-20 text-midnight/10 pointer-events-none rotate-[25deg]" />
      <KnotCorner className="absolute top-4 end-4 md:end-10 w-16 md:w-24 text-gold/30 pointer-events-none" />
      <KnotCorner className="absolute bottom-4 start-4 md:start-10 w-16 md:w-24 text-gold/25 pointer-events-none rotate-180" />

      {/* INTRO — arched fjord window + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative">
            <div aria-hidden className="absolute -inset-3 rounded-t-full rounded-b-[2rem] border border-gold/35" />
            <figure className="relative overflow-hidden rounded-t-[10rem] rounded-b-[1.75rem] shadow-2xl max-w-xs md:max-w-sm bg-white">
              <img src={COVER} alt="Norway" loading="lazy" className="w-full object-cover" />
              <figcaption className="bg-midnight px-5 py-3 text-center text-[11px] uppercase tracking-[0.3em] text-cream">
                {rtl ? "بلاد الفايكنج والمضايق" : "Land of the Vikings and fjords"}
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
          title={rtl ? "النشيد الوطني النرويجي" : "The Norwegian national anthem"}
        />
      </div>

      {/* YOUTUBE */}
      <div className="relative z-10 mt-12 mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-white shadow-md">
          <div className="absolute top-4 start-4 text-[10px] uppercase tracking-[0.4em] text-gold z-10">
            {rtl ? "◆ مشاهدة" : "◆ Watch"}
          </div>
          <div className="pt-14 pb-6 px-6 md:px-8">
            <h3 className={`font-display text-2xl md:text-3xl mb-5 text-midnight ${align}`}>
              {rtl ? "شاهد فيديو السياحة في النرويج على قناتي في اليوتيوب" : "Watch my Norway travel video on my YouTube channel"}
            </h3>
            <div
              className="overflow-hidden rounded-2xl border border-gold/25 bg-midnight"
              style={{ aspectRatio: "16 / 9" }}
            >
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
                title={rtl ? "السياحة في اوسلو النرويج" : "Tourism in Oslo, Norway"}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {/* TOURISM TEXT + PHOTOS */}
      <div className="relative z-10 mt-16 mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className={align} dir={rtl ? "rtl" : "ltr"}>
          <Aurora className="w-24 h-8 mb-4 text-gold/70" />
          <p className="text-[16px] sm:text-[17px] leading-[2] text-charcoal/85">{rtl ? TOURISM.ar : TOURISM.en}</p>
        </div>
        <figure className="overflow-hidden rounded-2xl border border-gold/25 bg-white shadow-sm" dir="ltr">
          <img src={SCENE_B} alt="Norway" loading="lazy" className="w-full object-cover" />
        </figure>
      </div>

      {/* EMBLEM + MAP */}
      <div className="relative z-10 mt-16 mx-auto max-w-3xl px-6">
        <figure className="overflow-hidden rounded-3xl border border-gold/20 bg-white shadow-sm">
          <img
            src={EMBLEM_MAP}
            alt={rtl ? "شعار وخارطة مملكة النرويج" : "Emblem and map of the Kingdom of Norway"}
            loading="lazy"
            className="w-full object-cover"
          />
          <Fjord className="h-6 w-full text-gold/70" />
          <figcaption className="px-5 py-4 text-center text-[11px] tracking-[0.2em] uppercase text-charcoal/60">
            {rtl ? "شعار وخارطة مملكة النرويج" : "Emblem and map of the Kingdom of Norway"}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
