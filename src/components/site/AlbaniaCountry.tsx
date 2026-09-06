import type { Lang } from "@/lib/i18n";
import { AnthemPlayer } from "@/components/site/AnthemPlayer";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const ANTHEM_VIDEO = "https://videos.files.wordpress.com/DNROMNuL/my-movie-5-1-4.mp4";

const COVER = U("2022/04/img_4333.jpg");
const EMBLEM_MAP = U("2022/04/img_4605.png");
const SCENES = [
  U("2022/02/img_3930.jpg"),
  U("2022/02/img_3802.jpg"),
  U("2022/02/img_4230.jpg"),
  U("2022/02/img_4476.jpg"),
];

const ABOUT = {
  ar: "هي إحدى دول إقليم البلقان الواقع في جنوب شرق أوروبا ، يحدها من الشمال الغربي الجبل الأسود وكوسوفو الى الشمال الشرقي ، وجمهورية مقدونيا الى الشرق ، واليونان من الجنوب والجنوب الشرقي ، تطل البلاد على البحر الأدرياتيكي الى الغرب ، وعلى البحر الأيوني الى الجنوب الغربي ، تبعد أقل من 72 كم عن ايطاليا عبر مضيق أوترانتو ، والذي يربط بين البحر الأدرياتيكي والبحر الأيوني ، وشعارها هو نسر اسود ذو رأسين وقد وجد انه مرسوم على حجر يعود للعصر الحجري في أحد الكهوف الأثرية في ألبانيا",
  en: "Albania is one of the countries of the Balkan region in south-eastern Europe. It is bordered to the north-west by Montenegro, to the north-east by Kosovo, to the east by North Macedonia, and to the south and south-east by Greece. The country looks out on the Adriatic Sea to the west and the Ionian Sea to the south-west, and lies less than 72 km from Italy across the Strait of Otranto, which links the Adriatic and the Ionian. Its emblem is a black double-headed eagle, found drawn on a Stone Age rock in one of Albania's archaeological caves.",
};

const NATURE = {
  ar: "السياحة في البانيا أو كما تسمى أرض النسور ، أصبحت مقصدا سياحيا هاما ، حيث يأتي إليها آلاف الزوار من مختلف أنحاء العالم سنويا ، تتمتع البانيا بمجموعة ساحرة من المناظر الطبيعية ، وذلك حيث الشواطئ الخلابة على طول امتداد الريفيرا الألبانية ، علاوة على الجبال مثل جبال الألب الألبانية ، وسلسلة جبال بيندوس ، والتلال والأودية والأنهار والبحيرات والغابات ، كل هذا جعل منها وجهة سياحية مميزة وفريدة من نوعها",
  en: "Tourism in Albania — the land of the eagles — has become a major draw, with thousands of visitors arriving from around the world every year. Albania has a charming range of landscapes: breathtaking beaches along the Albanian Riviera, mountains such as the Albanian Alps and the Pindus range, plus hills, valleys, rivers, lakes and forests, all of which make it a distinctive and one-of-a-kind destination.",
};

const HERITAGE = {
  ar: "تتمتع البانيا بمجموعة مُميزة من الآثار التاريخية ، حيث المعابد والحصون اليونانية والرومانية القديمة ، وحمامات القرون الوسطى وغيرها الكثير ، ومن الجدير بالذكر أن البانيا واحدة من أكثر الدول امانا في العالم ، كما أن شعبها ودود للغاية ، البانيا تعتبر من الوجهات السياحية الغير مكلفة ، حيث يمكنك قضاء أسبوع بها والتنقل بين أهم مدنها بأقل التكاليف ، وذلك على عكس أغلب الوجهات السياحية الأخرى في أوروبا الشرقية",
  en: "Albania has a remarkable set of historic remains — ancient Greek and Roman temples and forts, medieval baths and much more. It is worth noting that Albania is one of the safest countries in the world and its people are extremely friendly. It is also an inexpensive destination: you can spend a week there and move between its main cities at the lowest cost, unlike most other destinations in Eastern Europe.",
};

const WEATHER = {
  ar: "البانيا من الوجهات السياحية التي تتيح لك الإستمتاع بخوض مغامرة فريدة لا تنسى ، لذلك عليك معرفة ما هو الوقت المثالي من أجل ذلك ، وتتميز البانيا يتنوع الطقس فيها إلى حد كبير ، حيث يوجد بها ثلاث مناطق مناخية رئيسية وهي ساحل البحر المتوسط الدافيء ، والأطراف القارية من الداخل ، والجبال الأكثر برودة في الشمال الشرقي",
  en: "Albania lets you enjoy a unique, unforgettable adventure, so it helps to know the ideal time to go. Its weather varies a great deal: there are three main climate zones — the warm Mediterranean coast, the continental interior, and the colder mountains of the north-east.",
};

const FOOD = {
  ar: "الطعام في البانيا أحد أهم أسباب وعوامل الجذب السياحي في البانيا ، وذلك حيث أن الأطعمة الألبانية تتمتع بمذاق لذيذ وطازج ، ويمكنك تناوله في أرقى المطاعم وكذلك ايضا من مأكولات الشارع الشهية . وهناك العديد من المأكولات الألبانية الرائعة التي يمكنك تجربتها في أرض النسور ومنها البيريك ، بيرك بالسبانخ ، تافو كوسي ، فرايد كاشكافال ، البقلاوة ، تريليس ، كرات اللحم المشوية ، الكفتة الألبانية ، الخضروات المشوية وغيرها الكثير ، هذا بالإضافة إلى المأكولات البحرية الطازجة الممتازة ، نظرا لوقوع البانيا على البحر المتوسط ، فلا يفوتك تناول الطعام الشهي والتمتع بالمناظر الساحرة على طول امتداد الساحل من شرفات المطاعم",
  en: "Food is one of the biggest reasons to travel to Albania, as Albanian dishes are delicious and fresh, served both in the finest restaurants and as tasty street food. There are many wonderful Albanian dishes to try in the land of the eagles: byrek, spinach byrek, tavë kosi, fried kaçkavall, baklava, trileçe, grilled meatballs, Albanian qofte, grilled vegetables and much more, plus excellent fresh seafood since Albania sits on the Mediterranean. Do not miss eating well while enjoying the charming views along the coast from restaurant terraces.",
};

const LANGUAGE = {
  ar: "من الجدير بالذكر أن البانيا بلد متجانسة عِرقيا ، ويتحدث الغالبية العظمى من سكانها اللغة الألبانية ، بينما يتحدث الأقليات لغتها الأصلية مثل اليونانية والمقدونية والرومانية وغيرها ، وتعد اللغة الإيطالية والإنجليزية هما أشهر اللغات التي يتحدث بها الألبانيون",
  en: "Albania is an ethnically homogeneous country: the vast majority of its people speak Albanian, while minorities speak their own languages such as Greek, Macedonian, Romanian and others. Italian and English are the most widely spoken foreign languages among Albanians.",
};

/** Albanian double-headed eagle — simplified heraldic silhouette. */
function DoubleEagle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" aria-hidden className={className}>
      <g fill="currentColor">
        <path d="M60 34c-4 0-7 3-7 7v20c0 8 3 14 7 18 4-4 7-10 7-18V41c0-4-3-7-7-7Z" />
        <path d="M53 44 24 30c-6-3-12-3-16 0 5 1 8 4 9 8-5-1-9 0-12 3 5 0 8 2 10 6-4 1-7 3-9 7 5-2 9-1 13 2l34 12V44Z" />
        <path d="M67 44 96 30c6-3 12-3 16 0-5 1-8 4-9 8 5-1 9 0 12 3-5 0-8 2-10 6 4 1 7 3 9 7-5-2-9-1-13 2L67 68V44Z" />
        <path d="M46 22c-5-6-13-8-19-5 4 2 6 5 6 9 4-3 9-3 13-4Zm28 0c5-6 13-8 19-5-4 2-6 5-6 9-4-3-9-3-13-4Z" />
      </g>
    </svg>
  );
}

export function AlbaniaCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
      {/* Albanian flag — deep crimson field */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-2 bg-carmine" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--carmine) 16%, transparent) 0%, transparent 40%, color-mix(in oklab, var(--midnight) 8%, transparent) 100%)",
        }}
      />
      {/* Mountain-ridge chevrons of the Albanian Alps */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--midnight) 0 2px, transparent 2px 22px), repeating-linear-gradient(45deg, var(--carmine) 0 2px, transparent 2px 22px)",
        }}
      />
      <DoubleEagle className="absolute -top-4 right-2 md:right-12 w-36 md:w-52 text-midnight/10 pointer-events-none" />
      <DoubleEagle className="absolute bottom-8 left-2 md:left-10 w-28 md:w-40 text-carmine/10 pointer-events-none" />

      {/* INTRO — cover photo + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-6 w-20 h-6 bg-carmine/75 rotate-[-6deg] z-20 shadow-sm" />
            <div className="absolute -top-4 right-8 w-16 h-5 bg-midnight/60 rotate-[10deg] z-20 shadow-sm" />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={COVER}
                alt={rtl ? "السياحة في ألبانيا" : "Tourism in Albania"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-midnight text-lg" style={{ fontFamily: "cursive" }}>
                Shqipëria · ألبانيا
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
            {["bg-carmine", "bg-midnight", "bg-carmine", "bg-gold"].map((c, i) => (
              <span key={i} className={`h-1.5 w-10 ${c}`} />
            ))}
          </div>
        </div>
      </div>

      {/* ANTHEM */}
      <div className="relative z-10 mt-16">
        <AnthemPlayer
          src={ANTHEM_VIDEO}
          lang={lang}
          title={rtl ? "النشيد الوطني الألباني" : "The Albanian national anthem"}
          theme={{
            bg: "bg-white",
            border: "border-carmine/15",
            buttonBg: "bg-carmine",
            buttonText: "text-cream",
            buttonHoverBg: "hover:bg-midnight",
            buttonHoverText: "hover:text-cream",
            accent: "text-carmine",
            title: "text-midnight",
            ping: "border-carmine",
          }}
        />
      </div>

      {/* ABOUT */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-carmine font-mono">
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1 bg-carmine/15" />
        </div>

        <h3 className={`font-display text-3xl md:text-4xl text-carmine mb-5 ${align}`}>
          {rtl ? "جمهورية البانيا" : "The Republic of Albania"}
        </h3>
        <p className={`font-body text-base md:text-lg text-charcoal/85 leading-[1.95] ${align}`}>{ABOUT[lang]}</p>
        <p className={`mt-5 font-body text-base md:text-lg text-charcoal/85 leading-[1.95] ${align}`}>
          {NATURE[lang]}
        </p>

        {/* SCENES */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {SCENES.map((src, i) => (
            <figure key={src} className="overflow-hidden border border-carmine/10 bg-white shadow-md">
              <img
                src={src}
                alt={rtl ? "مشاهد من ألبانيا" : "Scenes from Albania"}
                loading="lazy"
                className={`w-full object-cover ${i % 2 === 0 ? "h-48 md:h-56" : "h-40 md:h-48"}`}
              />
            </figure>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { n: "01", t_ar: "الآثار والتكاليف", t_en: "Heritage & costs", body: HERITAGE[lang] },
            { n: "02", t_ar: "الطقس في ألبانيا", t_en: "The weather in Albania", body: WEATHER[lang] },
            { n: "03", t_ar: "اللغة في ألبانيا", t_en: "The language in Albania", body: LANGUAGE[lang] },
          ].map((s) => (
            <div key={s.n} className="relative bg-white border border-carmine/10 shadow-md p-7">
              <div className="absolute top-0 inset-x-0 h-1 bg-carmine/70" />
              <div className={`text-[10px] uppercase tracking-[0.4em] text-carmine/70 font-mono mb-3 ${align}`}>
                {s.n}
              </div>
              <h4 className={`font-display text-2xl text-carmine mb-3 ${align}`}>{rtl ? s.t_ar : s.t_en}</h4>
              <p className={`font-body text-sm md:text-base text-charcoal/85 leading-[1.9] ${align}`}>{s.body}</p>
            </div>
          ))}
        </div>

        {/* FOOD */}
        <div className="mt-10 relative overflow-hidden bg-carmine text-cream border border-carmine shadow-lg p-8 md:p-10">
          <DoubleEagle className="absolute -bottom-6 -right-6 w-44 text-cream/10 pointer-events-none" />
          <div className={`relative text-[10px] uppercase tracking-[0.4em] text-cream/70 font-mono mb-3 ${align}`}>
            {rtl ? "04 · المطبخ" : "04 · Cuisine"}
          </div>
          <h4 className={`relative font-display text-2xl md:text-3xl mb-4 ${align}`}>
            {rtl ? "الأكل والشراب في ألبانيا" : "Eating and drinking in Albania"}
          </h4>
          <p className={`relative font-body text-sm md:text-base leading-[1.95] text-cream/90 ${align}`}>
            {FOOD[lang]}
          </p>
        </div>
      </div>

      {/* FACT — emblem & map */}
      <div className="relative z-10 mt-16 mx-auto max-w-3xl px-6">
        <div className="relative bg-white border border-carmine/10 overflow-hidden shadow-md">
          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-carmine font-mono z-10">
            {rtl ? "05 · حقيقة" : "05 · Fact"}
          </div>
          <div className="pt-16 pb-8 px-6 flex items-center justify-center bg-gradient-to-b from-cream to-white">
            <img
              src={EMBLEM_MAP}
              alt={rtl ? "شعار وخارطة جمهورية البانيا" : "Emblem and map of the Republic of Albania"}
              loading="lazy"
              className="max-h-64 w-auto object-contain drop-shadow-md"
            />
          </div>
          <div className={`border-t border-carmine/10 px-6 py-4 ${align}`}>
            <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-1">
              {rtl ? "الشعار والموقع" : "Emblem & Geography"}
            </div>
            <div className="font-display text-xl text-carmine">
              {rtl ? "شعار وخارطة جمهورية البانيا" : "Emblem and map of the Republic of Albania"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
