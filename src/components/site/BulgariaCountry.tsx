import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import type { Lang } from "@/lib/i18n";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const EMBLEM_MAP = U("2022/04/img_4272.jpg");
const COVER = U("2022/01/img_1375.jpg");
const SCENE_A = U("2022/01/img_1193.jpg");
const SCENE_B = U("2022/01/img_1853.jpg");
const ANTHEM = "https://videos.files.wordpress.com/S9aLWVJR/my-movie-5-4-1.mp4";

const ABOUT = {
  ar: "تقع جمهورية بلغاريا في القارة الأوروبية ، في الجزء الجنوبي الشرقي من أوروبا على حدود البحر الأسود بين تركيا ورومانيا ، وتعتبر بلغاريا جزء من شبه جزيرة البلقان ، ويحدها العديد من الدول ، يحدها من جهة الشمال رومانيا ، ويحدها من جهة الجنوب الشرقي تركيا ، ومن جهة الجنوب تحدها اليونان ، ومن جهة الشرق يحدها البحر الأسود ، ومن جهة الغرب تحدها مقدونيا وصربيا",
  en: "The Republic of Bulgaria lies in Europe, in the south-eastern part of the continent on the shore of the Black Sea between Turkey and Romania. Bulgaria is part of the Balkan peninsula and is bordered by several countries: Romania to the north, Turkey to the south-east, Greece to the south, the Black Sea to the east, and North Macedonia and Serbia to the west.",
};

const PARAS = [
  {
    ar: "السياحة في بلغاريا حدى اللآليء اللامعة في جنوب شرق أوروبا ، التي تتيح لزائريها أفضل العطلات السياحية ، فهي من الوجهات السياحية التي تتمتع بثراء ثقافي يعود للعصور القديمة ، ومجموعة ساحرة من المناظر الطبيعية ، وشواطئ البحر الأسود ذات الرمال الناعمة والمياه الفيروزية الصافية ، وتلك المقومات السياحية جعلتها من أجمل الوجهات التي تستحق الزيارة والإستكشاف في القارة الأوروبية",
    en: "Tourism in Bulgaria is one of the shining pearls of south-eastern Europe, offering visitors the finest holidays. It is a destination with a cultural richness reaching back to antiquity, a charming range of natural landscapes, and Black Sea beaches of soft sand and clear turquoise water — qualities that make it one of the most beautiful destinations in Europe, well worth visiting and exploring.",
  },
  {
    ar: "كذلك تتمتع بمجموعة من الجبال العالية ، والبحيرات ، والشلالات الجميلة ، والكهوف ، بالإضافة الى الآثار السوفيتية التاريخية ، والمباني والقلاع والقمم الصخرية ، علاوة على المتنزهات الوطنية الضخمة ، حيث تتجول الحيوانات المهددة بالإنقراض ، والكنائس والكاتدرائيات والمتاحف وغيرها العديد",
    en: "It also enjoys a range of high mountains, lakes, beautiful waterfalls and caves, as well as historic Soviet monuments, buildings, fortresses and rocky peaks, along with vast national parks where endangered animals roam, plus churches, cathedrals, museums and much more.",
  },
  {
    ar: "أفضل وقت للسفر إلى بلغاريا هو في الفترة ما بين من أبريل إلى أكتوبر ، وذلك حيث يكون الطقس معتدل ، مما يتيح لك إمكانية ممارسة جميع الأنشطة الترفيهية والسياحية المختلفة وإستكشاف البلاد في الهواء الطلق",
    en: "The best time to travel to Bulgaria is between April and October, when the weather is mild, letting you take part in all kinds of leisure and tourist activities and explore the country in the open air.",
  },
];

const TELECOM = {
  ar: ["شركة بليزو", "ماكس تيليكوم", "شركة بولسات كوم", "موبيكوم", "شركة كوول بوكس"],
  en: ["Blizoo", "Max Telecom", "Bulsatcom", "Mobikom", "Cool Box"],
};

/** Stylised rose drawn in SVG. */
function Rose({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="50" cy="42" r="6" />
        <circle cx="50" cy="42" r="14" />
        <circle cx="50" cy="42" r="22" />
        <path d="M28 42a22 22 0 0 1 44 0" />
        <path d="M50 64 V94" />
        <path d="M50 74 C40 70 34 74 32 80 C40 84 47 82 50 76" />
        <path d="M50 84 C60 80 66 84 68 90 C60 94 53 92 50 86" />
      </g>
    </svg>
  );
}

/** Decorative folk-embroidery band drawn as repeating diamonds. */
function FolkBand({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <svg viewBox="0 0 120 12" className="w-full h-3" preserveAspectRatio="none">
        <g fill="currentColor">
          {Array.from({ length: 12 }).map((_, i) => (
            <polygon key={i} points={`${i * 10 + 5},1 ${i * 10 + 9},6 ${i * 10 + 5},11 ${i * 10 + 1},6`} />
          ))}
        </g>
      </svg>
    </div>
  );
}

export function BulgariaCountry({ lang }: { lang: Lang }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
      {/* Soft warm wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(219,184,122,0.08) 45%, rgba(224,126,80,0.08) 100%)",
        }}
      />
      <Rose className="absolute -top-4 end-4 md:end-16 w-24 md:w-32 text-gold/25 pointer-events-none" />
      <Rose className="absolute bottom-10 start-4 md:start-16 w-16 md:w-24 text-midnight/10 pointer-events-none" />

      {/* INTRO — Polaroid cover photo + about text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-6 w-20 h-6 bg-gold/70 rotate-[-6deg] z-20 shadow-sm" />
            <div className="absolute -top-4 right-8 w-16 h-5 bg-terracotta/60 rotate-[10deg] z-20 shadow-sm" />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img src={COVER} alt="Bulgaria" loading="lazy" className="block w-full h-auto object-cover" />
              <div className="mt-4 text-center font-display text-midnight text-lg" style={{ fontFamily: "cursive" }}>
                {rtl ? "لؤلؤة البلقان" : "The pearl of the Balkans"}
              </div>
            </div>
          </div>
        </div>

        <div className={align} dir={rtl ? "rtl" : "ltr"}>
          <span className="inline-block bg-midnight text-cream text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[-2deg] mb-6">
            {rtl ? "◆ مقدّمة" : "◆ Introduction"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-midnight leading-tight">
            {rtl ? "جمهورية بلغاريا" : "The Republic of Bulgaria"}
          </h2>
          <div className="my-4 h-px w-14 bg-gold" />
          <p className="font-display text-xl sm:text-2xl leading-snug text-terracotta">
            {rtl
              ? "أرض الورد الدمشقي وجبال البلقان وشواطئ البحر الأسود"
              : "Land of the damask rose, the Balkan mountains and the Black Sea coast"}
          </p>
          <p className="mt-6 text-[16px] sm:text-[18px] leading-[2] text-charcoal/85">{rtl ? ABOUT.ar : ABOUT.en}</p>
        </div>
      </div>

      {/* ANTHEM */}
      <div className="relative z-10 mt-16">
        <AnthemPlayer
          src={ANTHEM}
          lang={lang}
          title={rtl ? "النشيد الوطني البلغاري" : "The Bulgarian national anthem"}
        />
      </div>

      {/* TOURISM TEXT + PHOTOS */}
      <div className="relative z-10 mt-16 mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-10 items-start">
        <div className={`${align} space-y-6`} dir={rtl ? "rtl" : "ltr"}>
          {PARAS.map((p, i) => (
            <div key={i}>
              <FolkBand className={`w-16 mb-3 ${i % 2 ? "text-terracotta/70" : "text-gold/70"}`} />
              <p className="text-[16px] leading-[2] text-charcoal/85">{rtl ? p.ar : p.en}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4" dir="ltr">
          <figure className="overflow-hidden rounded-2xl border border-gold/25 bg-white shadow-sm">
            <img src={SCENE_A} alt="Bulgaria" loading="lazy" className="w-full object-cover" />
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-terracotta/25 bg-white shadow-sm mt-8">
            <img src={SCENE_B} alt="Bulgaria" loading="lazy" className="w-full object-cover" />
          </figure>
        </div>
      </div>

      {/* TELECOM NOTE */}
      <div className="relative z-10 mt-16 mx-auto max-w-3xl px-6">
        <div
          className={`rounded-3xl border border-gold/25 bg-white shadow-sm px-6 py-6 ${align}`}
          dir={rtl ? "rtl" : "ltr"}
        >
          <div className="text-[10px] uppercase tracking-[0.4em] mb-3 text-gold">
            {rtl ? "◆ الاتصالات" : "◆ Telecoms"}
          </div>
          <p className="text-[16px] leading-[2] text-charcoal/85">
            {rtl
              ? "تتمتع بلغاريا بشبكة واسعة من الإتصالات السلكية واللاسلكية ومنها :"
              : "Bulgaria has a wide network of wired and wireless telecommunications, including:"}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {(rtl ? TELECOM.ar : TELECOM.en).map((n) => (
              <li
                key={n}
                className="rounded-full border border-terracotta/30 px-4 py-1.5 text-sm text-charcoal/80"
              >
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* EMBLEM + MAP */}
      <div className="relative z-10 mt-16 mx-auto max-w-3xl px-6">
        <figure className="overflow-hidden rounded-3xl border border-gold/20 bg-white shadow-sm">
          <img
            src={EMBLEM_MAP}
            alt={rtl ? "شعار وخارطة جمهورية بلغاريا" : "Emblem and map of the Republic of Bulgaria"}
            loading="lazy"
            className="w-full object-cover"
          />
          <FolkBand className="text-gold/80" />
          <figcaption className="px-5 py-4 text-center text-[11px] tracking-[0.2em] uppercase text-charcoal/60">
            {rtl ? "شعار وخارطة جمهورية بلغاريا" : "Emblem and map of the Republic of Bulgaria"}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
