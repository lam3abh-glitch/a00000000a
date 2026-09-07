import type { Lang } from "@/lib/i18n";
import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import ahmadEthiopia from "@/assets/ahmad-ethiopia.png.asset.json";
import ethiopiaAnthem from "@/assets/ethiopia-anthem.mp3.asset.json";

const IMG = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const EMBLEM_MAP = IMG("2022/04/img_4370.jpg");
const FLAG = IMG("2022/04/img_4644.png");
const SCENE = IMG("2022/01/img_7560.jpg");
const HERITAGE = IMG("2022/01/img_7502.jpg");

const GREEN = "#078930";
const YELLOW = "#FCDD09";
const RED = "#DA121A";
const BLUE = "#0F47AF";
const COFFEE = "#2A1810";
const PARCHMENT = "#FBF5E9";

const ABOUT = {
  ar: [
    "إثيوبيا أو كما كانت تسمى قديماً الحبشة ، هي دولة غير ساحلية تقع في القرن الأفريقي ، يحدها من الشرق كل من جيبوتي والصومال ، ومن الشمال أرتيريا ، ومن الشمال الغربي السودان ، ومن الغرب جنوب السودان ، والجنوب الغربي كينيا ، وهي الدولة الثانية عشرة حسب عدد السكان في العالم ، والثانية في أفريقيا بعد نيجيريا وهي العاشرة أفريقيا حسب المساحة",
    "اثيوبيا بلد رائع ذو تاريخ كبير وحضارة عريقة ولوجود اجمل الاماكن السياحية فيه وايضا غناه بالمعلومات التاريخية والآثار القديمة ، اثيوبيا تجذب عدد كبير من السياح كل عام وخاصة باحثي التاريخ ومحبي الفنون والطبيعة ، حيث وصلت الأبحاث فيها الى اكتشاف أصل البشرية واقدم هيكل عظمي انساني بالإضافة إلى الكثير من الاكتشافات التاريخية",
  ],
  en: [
    "Ethiopia, known in the past as Abyssinia, is a landlocked country in the Horn of Africa, bordered to the east by Djibouti and Somalia, to the north by Eritrea, to the north-west by Sudan, to the west by South Sudan and to the south-west by Kenya. It is the twelfth most populous country in the world and the second in Africa after Nigeria, as well as the tenth largest in Africa by area.",
    "Ethiopia is a magnificent country with a long history and an ancient civilisation, home to the most beautiful tourist places and rich in historical lore and ancient remains. It draws great numbers of visitors every year, especially seekers of history and lovers of art and nature — research here led to the discovery of the origin of humankind and the oldest human skeleton, along with many other historical discoveries.",
  ],
};

const WEATHER = {
  ar: "بسبب قربها من خط الاستواء فإن درجات الحرارة تكون مرتفعة على مدار العام وافضل وقت يكون لزيارة اثيوبيا والتعرف على حضارتها والمعالم الموجودة فيها هو من اكتوبر الى ابريل حيث يكون الطقس جميل ودافئ وتقل الأمطار في هذا الوقت من العام",
  en: "Because of its nearness to the equator, temperatures stay high all year round. The best time to visit Ethiopia and get to know its civilisation and landmarks is from October to April, when the weather is fine and warm and rainfall is at its lowest.",
};

const TAGLINE = {
  ar: "الحبشة .. مهد البشرية وأرض القهوة والحضارات",
  en: "Abyssinia — the cradle of humankind, the land of coffee and ancient civilisations",
};

/** Coffee branch — Ethiopia is the birthplace of coffee. */
function CoffeeBranch({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 140" aria-hidden className={className} style={style}>
      <g fill="currentColor">
        <path d="M12 130c40-8 74-30 96-58 20-25 34-44 80-52-44 22-52 40-70 64-24 32-62 52-106 60v-14Z" />
        <ellipse cx="70" cy="76" rx="22" ry="12" transform="rotate(-28 70 76)" />
        <ellipse cx="108" cy="54" rx="22" ry="12" transform="rotate(-28 108 54)" />
        <ellipse cx="146" cy="34" rx="20" ry="11" transform="rotate(-28 146 34)" />
        <circle cx="52" cy="102" r="9" />
        <circle cx="90" cy="80" r="9" />
        <circle cx="128" cy="58" r="9" />
      </g>
    </svg>
  );
}

/** Lalibela-style cross pattern woven into the background. */
function CrossPattern() {
  return (
    <svg aria-hidden className="absolute inset-0 h-full w-full opacity-[0.08] pointer-events-none" preserveAspectRatio="none">
      <defs>
        <pattern id="et-cross" width="90" height="90" patternUnits="userSpaceOnUse">
          <g fill={COFFEE}>
            <path d="M38 8h14v22h22v14H52v22H38V44H16V30h22V8Z" />
            <circle cx="80" cy="80" r="4" />
            <circle cx="8" cy="80" r="4" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#et-cross)" />
    </svg>
  );
}

export function EthiopiaCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";
  const t = (o: { ar: string; en: string }) => (rtl ? o.ar : o.en);

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: PARCHMENT }}>
      {/* flag stripes along the top */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-3"
        style={{ background: `linear-gradient(180deg, ${GREEN} 0 34%, ${YELLOW} 34% 67%, ${RED} 67% 100%)` }}
      />

      <CrossPattern />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 40% at 0% 0%, rgba(252,221,9,0.30) 0%, transparent 65%), linear-gradient(180deg, transparent 55%, rgba(7,137,48,0.14) 100%)",
        }}
      />
      <CoffeeBranch className="absolute top-8 -right-8 w-56 md:w-80 pointer-events-none" style={{ color: `${COFFEE}1F` }} />
      <CoffeeBranch
        className="absolute bottom-6 -left-10 w-52 md:w-72 pointer-events-none"
        style={{ color: `${COFFEE}18`, transform: "scaleX(-1)" }}
      />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-7 w-20 h-6 rotate-[6deg] z-20 shadow-sm" style={{ background: "rgba(7,137,48,0.75)" }} />
            <div className="absolute -top-4 right-6 w-16 h-5 rotate-[-9deg] z-20 shadow-sm" style={{ background: "rgba(218,18,26,0.7)" }} />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={ahmadEthiopia.url}
                alt={rtl ? "أحمد في اثيوبيا" : "Ahmad in Ethiopia"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-lg" style={{ color: COFFEE, fontFamily: "cursive" }}>
                Ethiopia · اثيوبيا
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span
            className="inline-block text-white text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[2deg] mb-6"
            style={{ background: GREEN }}
          >
            {rtl ? "✚ مقدّمة" : "✚ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl leading-snug whitespace-pre-line" style={{ color: COFFEE }}>
            {intro}
          </p>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: `${COFFEE}B0` }}>
            {t(TAGLINE)}
          </p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {[GREEN, YELLOW, RED, BLUE].map((c, i) => (
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
          <span className="h-px flex-1" style={{ background: `${COFFEE}22` }} />
        </div>
        <h2 className={`font-display text-3xl md:text-4xl mb-5 ${align}`} style={{ color: COFFEE }}>
          {rtl ? "جمهورية اثيوبيا" : "The Republic of Ethiopia"}
        </h2>
        <div className={`space-y-5 text-lg leading-relaxed ${align}`} style={{ color: `${COFFEE}CC` }}>
          {ABOUT[lang].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {[HERITAGE, SCENE].map((src, i) => (
            <div key={i} className="overflow-hidden shadow-md bg-white" style={{ border: `5px solid ${i === 0 ? YELLOW : GREEN}` }}>
              <img
                src={src}
                alt={rtl ? "من معالم اثيوبيا" : "Ethiopian landmarks"}
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
              alt={rtl ? "شعار وخارطة جمهورية اثيوبيا" : "Emblem and map of the Republic of Ethiopia"}
              loading="lazy"
              className="w-full h-64 object-contain bg-white"
            />
          </div>
          <div className={`mt-4 font-display text-xl ${align}`} style={{ color: COFFEE }}>
            {rtl ? "شعار وخارطة جمهورية اثيوبيا" : "Emblem and map of the Republic of Ethiopia"}
          </div>
        </div>

        <div className="relative overflow-hidden shadow-md flex flex-col text-white" style={{ background: COFFEE }}>
          <CoffeeBranch className="absolute -bottom-6 -right-6 w-52 text-white/10 pointer-events-none" />
          <div className={`relative pt-8 px-7 ${align}`}>
            <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-3" style={{ color: YELLOW }}>
              {rtl ? "02 · العلم والنشيد" : "02 · Flag & anthem"}
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-5">
              {rtl ? "علم جمهورية أثيوبيا والنشيد الوطني الاثيوبي" : "The flag of Ethiopia and the Ethiopian national anthem"}
            </h3>
            <div className="overflow-hidden border border-white/20 max-w-sm">
              <img
                src={FLAG}
                alt={rtl ? "علم جمهورية أثيوبيا" : "Flag of the Republic of Ethiopia"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="relative mt-8 pb-8">
            <AnthemPlayer
              src={ethiopiaAnthem.url}
              lang={lang}
              title={rtl ? "النشيد الوطني الاثيوبي" : "National Anthem of Ethiopia"}
              theme={{
                bg: "bg-white",
                border: "border-white/30",
                buttonBg: "bg-[#078930]",
                buttonText: "text-white",
                buttonHoverBg: "hover:bg-[#DA121A]",
                buttonHoverText: "hover:text-white",
                accent: "text-[#078930]",
                title: "text-[#2A1810]",
                ping: "border-[#FCDD09]",
              }}
            />
          </div>
        </div>
      </div>

      {/* CLIMATE */}
      <div className="relative z-10 mt-16 mx-auto max-w-5xl px-6">
        <div className="bg-white shadow-md p-7" style={{ borderInlineStart: `6px solid ${YELLOW}` }}>
          <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-3" style={{ color: GREEN }}>
            {rtl ? "03 · المناخ" : "03 · Climate"}
          </div>
          <h3 className={`font-display text-2xl md:text-3xl mb-4 ${align}`} style={{ color: COFFEE }}>
            {rtl ? "أفضل وقت لزيارة اثيوبيا" : "The best time to visit Ethiopia"}
          </h3>
          <p className={`text-lg leading-relaxed ${align}`} style={{ color: `${COFFEE}CC` }}>
            {t(WEATHER)}
          </p>
        </div>
      </div>
    </section>
  );
}
