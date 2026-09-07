import type { Lang } from "@/lib/i18n";
import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import ahmadTanzania from "@/assets/ahmad-tanzania.png.asset.json";
import tanzaniaAnthem from "@/assets/tanzania-anthem.mp3.asset.json";

const IMG = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const EMBLEM_MAP = IMG("2022/04/img_4220.jpg");
const FLAG = IMG("2022/03/img_3562.jpg");
const SCENE = IMG("2022/02/img_2876.jpg");
const BEACH = IMG("2022/02/img_2800.jpg");

const GREEN = "#1EB53A";
const BLUE = "#00A3DD";
const GOLD = "#FCD116";
const BARK = "#2B1C0E";
const SAVANNA = "#FBF4E4";

const ABOUT = {
  ar: "هي دولة في شرق وسط أفريقيا تحدها كينيا وأوغندا من الشمال ، ورواندا وبوروندي وجمهورية الكونغو الديموقراطية الى الغرب ، وزامبيا وملاوي وموزنبيق الى الجنوب ، والحدود الشرقية للبلاد تقع على المحيط الهندي",
  en: "Tanzania is a country in east-central Africa, bordered by Kenya and Uganda to the north, Rwanda, Burundi and the Democratic Republic of the Congo to the west, and Zambia, Malawi and Mozambique to the south, while its eastern boundary lies on the Indian Ocean.",
};

const TAGLINE = {
  ar: "أرض السفاري .. حيث تلتقي الأدغال بالمحيط الهندي",
  en: "The land of safari — where the bush meets the Indian Ocean",
};

const SECTIONS: { n: string; title: { ar: string; en: string }; body: { ar: string; en: string } }[] = [
  {
    n: "03",
    title: { ar: "موقع زنجبار", en: "Where Zanzibar lies" },
    body: {
      ar: "تقع مجموعة جزر زنجبار في المحيط الهندي مقابل الساحل الشرقي لدولة تنزانيا في قارة أفريقيا ، وتبتعد أقرب نقطة برية من ساحل تنزانيا عن زنجبار مسافة 35 كم",
      en: "The Zanzibar archipelago lies in the Indian Ocean off the eastern coast of Tanzania in Africa; the nearest point of the Tanzanian mainland is 35 km from Zanzibar.",
    },
  },
  {
    n: "04",
    title: { ar: "الطقس في زنجبار", en: "The weather in Zanzibar" },
    body: {
      ar: "يغلب على جزر زنجبار أجواء الطقس الاستوائي ، وتتمتع زنجبار بموسمين للمطر خلال العام ، الموسم الأول يكون في مارس وابريل ومايو من كل عام وتكون فيه الأمطار غزيرة ، والموسم الثاني خلال نوفمبر وديسمبر من نهاية كل عام وتكون فيه كمية الأمطار أقل من الموسم الأول",
      en: "Zanzibar has a tropical climate with two rainy seasons each year: the first in March, April and May, when rain is heavy, and the second in November and December, when rainfall is lighter than in the first season.",
    },
  },
  {
    n: "05",
    title: { ar: "السياحة في زنجبار", en: "Tourism in Zanzibar" },
    body: {
      ar: "توفر جزر زنجبار ميزات كثيرة في مكان واحد ، حيث تجمع ما بين سحر الطبيعة الخضراء والبحر والشواطيء الذهبية التي توفر الاستجمام والاسترخاء والتراث التاريخي والحضاري",
      en: "Zanzibar offers many attractions in one place, combining the charm of green nature, the sea and golden beaches for rest and relaxation with a rich historical and cultural heritage.",
    },
  },
];

/** Acacia tree silhouette — the signature tree of the East African savanna. */
function Acacia({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 160 120" aria-hidden className={className} style={style}>
      <g fill="currentColor">
        <path d="M74 118h12l-3-52 22-12-21 5 30-16-31 8 26-16H62l-33-9 27 15-29-8 30 17-22-5 21 12-3 61Z" />
        <path d="M6 44c18-10 44-16 74-16s56 6 74 16c-16-14-44-22-74-22S22 30 6 44Z" />
      </g>
    </svg>
  );
}

/** Elephant silhouette. */
function Elephant({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 140" aria-hidden className={className} style={style}>
      <path
        fill="currentColor"
        d="M42 132V96c-9-9-14-21-14-34 0-31 27-52 62-52 33 0 60 18 64 46 2 12 8 15 14 20 6 6 5 15-3 17-8 2-14-3-18-9-3 8-9 15-17 20v28h-16v-22c-7 2-14 3-22 3-6 0-12-1-17-2v21H42Zm52-38c4 10 3 22-3 30-2 3 3 6 6 3 8-10 10-24 5-36-1-3-9-1-8 3Z"
      />
    </svg>
  );
}

/** Giraffe-patch background pattern. */
function GiraffePatches() {
  return (
    <svg aria-hidden className="absolute inset-0 h-full w-full opacity-[0.10] pointer-events-none" preserveAspectRatio="none">
      <defs>
        <pattern id="tz-patches" width="120" height="120" patternUnits="userSpaceOnUse">
          <g fill={BARK}>
            <path d="M10 12 34 4l16 18-10 22-24 4-12-18Z" />
            <path d="M66 6 92 10l10 22-18 16-20-8-6-20Z" />
            <path d="M18 62 44 58l14 20-12 24-26-4-8-22Z" />
            <path d="M74 60l24 6 8 24-22 14-18-12 2-22Z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#tz-patches)" />
    </svg>
  );
}

export function TanzaniaCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";
  const t = (o: { ar: string; en: string }) => (rtl ? o.ar : o.en);

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: SAVANNA }}>
      {/* flag diagonal along the top */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-3" style={{ background: `linear-gradient(90deg, ${GREEN} 0 33%, ${GOLD} 33% 39%, #000 39% 61%, ${GOLD} 61% 67%, ${BLUE} 67% 100%)` }} />

      <GiraffePatches />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 40% at 100% 0%, rgba(252,209,22,0.35) 0%, transparent 65%), linear-gradient(180deg, transparent 55%, rgba(30,181,58,0.14) 100%)",
        }}
      />
      <Acacia className="absolute top-10 -left-10 w-52 md:w-80 pointer-events-none" style={{ color: `${BARK}1F` }} />
      <Elephant className="absolute bottom-6 -right-10 w-56 md:w-80 pointer-events-none" style={{ color: `${BARK}1A` }} />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-7 w-20 h-6 rotate-[7deg] z-20 shadow-sm" style={{ background: "rgba(30,181,58,0.75)" }} />
            <div className="absolute -top-4 right-6 w-16 h-5 rotate-[-9deg] z-20 shadow-sm" style={{ background: "rgba(0,163,221,0.7)" }} />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={ahmadTanzania.url}
                alt={rtl ? "أحمد في تنزانيا" : "Ahmad in Tanzania"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-lg" style={{ color: BARK, fontFamily: "cursive" }}>
                Tanzania · تنزانيا
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span
            className="inline-block text-white text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[2deg] mb-6"
            style={{ background: GREEN }}
          >
            {rtl ? "★ مقدّمة" : "★ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl leading-snug whitespace-pre-line" style={{ color: BARK }}>
            {intro}
          </p>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: `${BARK}B0` }}>
            {t(TAGLINE)}
          </p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {[GREEN, GOLD, "#000000", BLUE].map((c, i) => (
              <span key={i} className="h-1.5 w-10" style={{ background: c }} />
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
          <span className="h-px flex-1" style={{ background: `${BARK}22` }} />
        </div>
        <h2 className={`font-display text-3xl md:text-4xl mb-5 ${align}`} style={{ color: BARK }}>
          {rtl ? "جمهورية تنزانيا" : "The Republic of Tanzania"}
        </h2>
        <div className={`space-y-5 text-lg leading-relaxed ${align}`} style={{ color: `${BARK}CC` }}>
          <p>{t(ABOUT)}</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {[SCENE, BEACH].map((src, i) => (
            <div key={i} className="overflow-hidden shadow-md bg-white" style={{ border: `5px solid ${i === 0 ? GOLD : BLUE}` }}>
              <img
                src={src}
                alt={rtl ? "من طبيعة تنزانيا" : "Tanzanian landscapes"}
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
          <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-4" style={{ color: GREEN }}>
            {rtl ? "01 · الشعار والخارطة" : "01 · Emblem & map"}
          </div>
          <div className="overflow-hidden bg-white" style={{ border: `6px solid ${GREEN}` }}>
            <img
              src={EMBLEM_MAP}
              alt={rtl ? "شعار وخارطة جمهورية تنزانيا" : "Emblem and map of the Republic of Tanzania"}
              loading="lazy"
              className="w-full h-64 object-contain bg-white"
            />
          </div>
          <div className={`mt-4 font-display text-xl ${align}`} style={{ color: BARK }}>
            {rtl ? "شعار وخارطة جمهورية تنزانيا" : "Emblem and map of the Republic of Tanzania"}
          </div>
        </div>

        <div className="relative overflow-hidden shadow-md flex flex-col text-white" style={{ background: BARK }}>
          <Acacia className="absolute -bottom-6 -right-6 w-52 text-white/10 pointer-events-none" />
          <div className={`relative pt-8 px-7 ${align}`}>
            <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-3" style={{ color: GOLD }}>
              {rtl ? "02 · العلم والنشيد" : "02 · Flag & anthem"}
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-5">
              {rtl ? "علم جمهورية تنزانيا والنشيد الوطني التنزاني" : "The flag of Tanzania and the Tanzanian national anthem"}
            </h3>
            <div className="overflow-hidden border border-white/20 max-w-sm">
              <img
                src={FLAG}
                alt={rtl ? "علم جمهورية تنزانيا" : "Flag of the Republic of Tanzania"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="relative mt-8 pb-8">
            <AnthemPlayer
              src={tanzaniaAnthem.url}
              lang={lang}
              title={rtl ? "النشيد الوطني التنزاني" : "National Anthem of Tanzania"}
              theme={{
                bg: "bg-white",
                border: "border-white/30",
                buttonBg: "bg-[#1EB53A]",
                buttonText: "text-white",
                buttonHoverBg: "hover:bg-[#00A3DD]",
                buttonHoverText: "hover:text-white",
                accent: "text-[#1EB53A]",
                title: "text-[#2B1C0E]",
                ping: "border-[#FCD116]",
              }}
            />
          </div>
        </div>
      </div>

      {/* ZANZIBAR SECTIONS */}
      <div className="relative z-10 mt-16 mx-auto max-w-5xl px-6 space-y-10">
        {SECTIONS.map((s) => (
          <div key={s.n} className="bg-white shadow-md p-7" style={{ borderInlineStart: `6px solid ${GOLD}` }}>
            <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-3" style={{ color: GREEN }}>
              {s.n} · {t({ ar: "زنجبار", en: "Zanzibar" })}
            </div>
            <h3 className={`font-display text-2xl md:text-3xl mb-4 ${align}`} style={{ color: BARK }}>
              {t(s.title)}
            </h3>
            <p className={`text-lg leading-relaxed ${align}`} style={{ color: `${BARK}CC` }}>
              {t(s.body)}
            </p>
          </div>
        ))}
      </div>

      {/* VIDEO */}
      <div className="relative z-10 mt-16 mx-auto max-w-4xl px-6">
        <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-4" style={{ color: GREEN }}>
          {rtl ? "06 · فيديو" : "06 · Video"}
        </div>
        <div className="overflow-hidden shadow-lg" style={{ border: `6px solid ${BARK}` }}>
          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              src="https://www.youtube.com/embed/y4vjKS1TPzw"
              title={rtl ? "السياحة في تنزانيا" : "Tourism in Tanzania"}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
        <div className={`mt-3 text-sm ${align}`} style={{ color: `${BARK}99` }}>
          {rtl ? "شاهد فيديو السياحة في تنزانيا على قناتي في اليوتيوب" : "Watch my Tanzania travel video on my YouTube channel"}
        </div>
      </div>
    </section>
  );
}
