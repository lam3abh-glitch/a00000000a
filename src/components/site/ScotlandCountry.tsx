import type { Lang } from "@/lib/i18n";

const IMG = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const EMBLEM_MAP = IMG("2022/04/img_4695.jpg");
const FLAG = IMG("2022/04/img_4696.jpg");
const POLAROID = IMG("2022/02/fullsizerender-1-1.jpg");
const SCENE_B = IMG("2022/02/a8002b07-2f91-4e08-a74e-98dbab285cc4.jpg");
const SCENE_C = IMG("2022/02/fullsizerender-1.jpg");

const BLUE = "#0065BF";
const DEEP = "#04294B";
const THISTLE = "#8E5CA6";
const PAPER = "#F4F7FB";

const ABOUT = {
  ar: "دولة في شمال غرب اوروبا ، تعتبر جزء من الدول الأربع المكونة للمملكة المتحدة ، تحتل الثلث الشمالي من جزيرة بريطانيا العظمى ، وتحدها جنوبا انجلترا ، ويحدها شرقا بحر الشمال ، وغربا المحيط الاطلسي ، كانت اسكتلندا مملكة مستقلة ، والذي اتحدت بموجبه مملكتي انجلترا واسكتلندا في ما يعرف اليوم بمملكة بريطانيا العظمى",
  en: "Scotland is a country in north-western Europe and one of the four nations that make up the United Kingdom. It occupies the northern third of the island of Great Britain, bordered by England to the south, the North Sea to the east and the Atlantic Ocean to the west. Scotland was once an independent kingdom, until the kingdoms of England and Scotland were united into what is known today as Great Britain.",
};

const PEOPLE = {
  ar: "أما عن الشعب الإسكتلندي فيتميز بالطيبة وحسن الضيافة والكرم الريفي المعتاد ، يدين أغلبه بالمسيحية البروتستانتية واللادينية وأقليات من أديان عدة ، ويتحدث 3 لغات رئيسية هي الإنجليزية بلكنة اسكتلندية في الحضر ، اللغة الاسكتلندية الخالصة في الريف ، اللغة الغيلية بالمرتفعات والجزر",
  en: "The Scottish people are known for their kindness, hospitality and easy rural generosity. Most are Protestant Christian or non-religious, with minorities of several faiths, and three main languages are spoken: English with a Scottish accent in the towns, pure Scots in the countryside, and Gaelic in the Highlands and Islands.",
};

const TOURISM = {
  ar: "وعن السياحة في اسكتلندا فهي عادة ما يغلب عليها زيارة الجزر الشاطئية والمرافئ العريقة ، المرتفعات والقرى الريفية الخلابة ، مع عشرات المواقع الأثرية والمهرجانات الفنية والثقافية",
  en: "Tourism in Scotland is mostly about the coastal islands and historic harbours, the Highlands and beautiful country villages, along with dozens of archaeological sites and arts and culture festivals.",
};

const BEST_TIME = {
  ar: "مقارنة بغيرها من مناطق بريطانيا السياحية تقدم اسكتلندا سياحة شاطئية وريفية طبيعية خلابة ، وتمثل الفترة من إبريل وحتى سبتمبر الموسم السياحي في اسكتلندا ، حيث يكون الطقس لطيفا وأكثر دفئا وتكون جميع المعالم السياحية متاحة للزيارة",
  en: "Compared with the rest of Britain, Scotland offers stunning coastal and rural nature. April to September is the tourist season in Scotland, when the weather is mild and warmer and every attraction is open to visitors.",
};

const OPERATORS = ["فودافون", "أورانج", "ليبارا", "غيف غاف", "فيرجن موبايل", "نقاش نقاش", "أو تو", "ثري", "إي إي"];
const OPERATORS_EN = ["Vodafone", "Orange", "Lebara", "GiffGaff", "Virgin Mobile", "Talk Talk", "O2", "Three", "EE"];

/** Scottish thistle — the national flower. */
function Thistle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className} style={style}>
      <g fill="currentColor">
        <path d="M50 6c-4 6-6 12-5 18-6-3-12-3-17 1 5 2 9 6 11 11-7 1-12 5-15 11 7-2 13-1 19 2-4 5-5 11-3 17 4-5 9-8 15-9 6 1 11 4 15 9 2-6 1-12-3-17 6-3 12-4 19-2-3-6-8-10-15-11 2-5 6-9 11-11-5-4-11-4-17-1 1-6-1-12-5-18Z" />
        <path d="M47 60c1 12 0 24-4 34h14c-4-10-5-22-4-34Z" />
      </g>
    </svg>
  );
}

/** Saltire — the flag of Scotland, drawn as a motif. */
function Saltire({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className} style={style}>
      <g stroke="currentColor" strokeWidth="12" strokeLinecap="round">
        <path d="M8 8 L92 92" />
        <path d="M92 8 L8 92" />
      </g>
    </svg>
  );
}

export function ScotlandCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";
  const t = (o: { ar: string; en: string }) => (rtl ? o.ar : o.en);

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: PAPER }}>
      {/* saltire bar */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-2.5" style={{ background: BLUE }} />

      {/* blue wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(85% 55% at 100% 0%, rgba(0,101,191,0.18) 0%, transparent 62%), linear-gradient(180deg, transparent 60%, rgba(142,92,166,0.12) 100%)",
        }}
      />
      {/* tartan texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.09] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #04294B 0 10px, transparent 10px 46px), repeating-linear-gradient(0deg, #04294B 0 10px, transparent 10px 46px), repeating-linear-gradient(90deg, #8E5CA6 0 2px, transparent 2px 46px), repeating-linear-gradient(0deg, #8E5CA6 0 2px, transparent 2px 46px)",
        }}
      />
      <Saltire className="absolute top-14 -left-10 w-40 md:w-56 pointer-events-none" style={{ color: `${BLUE}26` }} />
      <Thistle className="absolute bottom-6 -right-6 w-28 md:w-40 pointer-events-none" style={{ color: `${THISTLE}33` }} />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[3deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-8 w-20 h-6 rotate-[7deg] z-20 shadow-sm" style={{ background: "rgba(0,101,191,0.75)" }} />
            <div className="absolute -top-4 right-6 w-16 h-5 rotate-[-9deg] z-20 shadow-sm" style={{ background: "rgba(142,92,166,0.7)" }} />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img src={POLAROID} alt={rtl ? "أحمد في اسكتلندا" : "Ahmad in Scotland"} loading="lazy" className="block w-full h-auto object-cover" />
              <div className="mt-4 text-center font-display text-midnight text-lg" style={{ fontFamily: "cursive" }}>
                Alba · اسكتلندا
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span className="inline-block text-white text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[2deg] mb-6" style={{ background: DEEP }}>
            {rtl ? "✦ مقدّمة" : "✦ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl leading-snug whitespace-pre-line" style={{ color: DEEP }}>
            {intro}
          </p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {[BLUE, "#E4ECF5", THISTLE, BLUE].map((c, i) => (
              <span key={i} className="h-1.5 w-10" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono" style={{ color: THISTLE }}>
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1" style={{ background: `${DEEP}22` }} />
        </div>
        <h2 className={`font-display text-3xl md:text-4xl mb-5 ${align}`} style={{ color: DEEP }}>
          {rtl ? "مملكة اسكتلندا" : "The Kingdom of Scotland"}
        </h2>
        <div className={`space-y-5 text-lg leading-relaxed ${align}`} style={{ color: `${DEEP}CC` }}>
          <p>{t(ABOUT)}</p>
          <p>{t(PEOPLE)}</p>
          <p>{t(TOURISM)}</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4" dir="ltr">
          {[SCENE_A, SCENE_B, SCENE_C].map((src, i) => (
            <div key={src} className="bg-white p-2 shadow-lg" style={{ transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}>
              <img src={src} alt={rtl ? "اسكتلندا" : "Scotland"} loading="lazy" className="block w-full h-56 object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* BEST TIME */}
      <div className="relative z-10 mt-16 mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden shadow-md p-8 text-cream" style={{ background: DEEP }}>
          <Saltire className="absolute -bottom-14 -right-10 w-52 text-cream/10 pointer-events-none" />
          <div className={`relative ${align}`}>
            <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-3" style={{ color: "#9EC7EE" }}>
              {rtl ? "01 · الموسم" : "01 · Season"}
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-4">
              {rtl ? "أفضل وقت لزيارة مملكة اسكتلندا" : "The best time to visit Scotland"}
            </h3>
            <p className="text-cream/85 leading-relaxed text-lg">{t(BEST_TIME)}</p>
            <div className="mt-6">
              <div className="text-[11px] uppercase tracking-[0.35em] mb-3" style={{ color: "#9EC7EE" }}>
                {rtl ? "شركات الاتصالات" : "Mobile operators"}
              </div>
              <div className={`flex flex-wrap gap-2 ${rtl ? "justify-end" : "justify-start"}`}>
                {(rtl ? OPERATORS : OPERATORS_EN).map((o) => (
                  <span key={o} className="border border-cream/25 px-3 py-1 text-sm text-cream/90">
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EMBLEM / FLAG / VIDEO */}
      <div className="relative z-10 mt-16 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md p-6">
          <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-4" style={{ color: THISTLE }}>
            {rtl ? "02 · الشعار والعلم" : "02 · Emblem & flag"}
          </div>
          <div className="grid grid-cols-2 gap-4" dir="ltr">
            <img src={EMBLEM_MAP} alt={rtl ? "شعار وخارطة مملكة اسكتلندا" : "Emblem and map of Scotland"} loading="lazy" className="w-full h-40 object-contain" />
            <img src={FLAG} alt={rtl ? "علم مملكة اسكتلندا" : "Flag of Scotland"} loading="lazy" className="w-full h-40 object-contain" />
          </div>
          <div className={`mt-4 font-display text-xl ${align}`} style={{ color: DEEP }}>
            {rtl ? "شعار وخارطة مملكة اسكتلندا · العاصمة أدنبرة" : "Emblem and map of Scotland · Capital Edinburgh"}
          </div>
        </div>

        <div className="relative overflow-hidden shadow-md flex flex-col text-cream" style={{ background: DEEP }}>
          <Thistle className="absolute -bottom-10 -right-8 w-40 text-cream/10 pointer-events-none" />
          <div className={`relative pt-8 px-7 ${align}`}>
            <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-3" style={{ color: "#9EC7EE" }}>
              {rtl ? "03 · مشاهدة" : "03 · Watch"}
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-4">
              {rtl ? "شاهد فيديو السياحة في اسكتلندا" : "Watch the Scotland travel video"}
            </h3>
          </div>
          <div className="relative mt-auto px-7 pb-7">
            <div className="overflow-hidden border border-cream/20 bg-midnight" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dL34g5NXPQU"
                title={rtl ? "السياحة في اسكتلندا" : "Tourism in Scotland"}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
