import type { Lang } from "@/lib/i18n";
import { AnthemPlayer } from "@/components/site/AnthemPlayer";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const ANTHEM_VIDEO = "https://videos.files.wordpress.com/DNROMNuL/my-movie-5-1-4.mp4";

/** Source page ?p=3330 — image order and captions taken from the original. */
const EMBLEM_MAP = U("2022/04/img_4333.jpg"); // شعار وخارطة جمهورية البانيا
const SCENE_A = U("2022/04/img_4605.png");
const SCENE_B = U("2022/02/img_3930.jpg");
const SCENE_C = U("2022/02/img_3802.jpg");
const SCENE_D = U("2022/02/img_4230.jpg");
const SCENE_E = U("2022/02/img_4476.jpg");

const ABOUT = {
  ar: "هي إحدى دول إقليم البلقان الواقع في جنوب شرق أوروبا ، يحدها من الشمال الغربي الجبل الأسود وكوسوفو الى الشمال الشرقي ، وجمهورية مقدونيا الى الشرق ، واليونان من الجنوب والجنوب الشرقي ، تطل البلاد على البحر الأدرياتيكي الى الغرب ، وعلى البحر الأيوني الى الجنوب الغربي ، تبعد أقل من 72 كم عن ايطاليا عبر مضيق أوترانتو ، والذي يربط بين البحر الأدرياتيكي والبحر الأيوني ، وشعارها هو نسر اسود ذو رأسين وقد وجد انه مرسوم على حجر يعود للعصر الحجري في أحد الكهوف الأثرية في ألبانيا",
  en: "Albania is one of the countries of the Balkan region in south-eastern Europe. It is bordered to the north-west by Montenegro, to the north-east by Kosovo, to the east by the Republic of Macedonia, and to the south and south-east by Greece. The country looks out on the Adriatic Sea to the west and the Ionian Sea to the south-west, and lies less than 72 km from Italy across the Strait of Otranto, which links the Adriatic and the Ionian. Its emblem is a black double-headed eagle, which was found drawn on a Stone Age rock in one of Albania's archaeological caves.",
};

const NATURE = {
  ar: "السياحة في البانيا أو كما تسمى أرض النسور ، أصبحت مقصدا سياحيا هاما ، حيث يأتي إليها آلاف الزوار من مختلف أنحاء العالم سنويا ، تتمتع البانيا بمجموعة ساحرة من المناظر الطبيعية ، وذلك حيث الشواطئ الخلابة على طول امتداد الريفيرا الألبانية ، علاوة على الجبال مثل جبال الألب الألبانية ، وسلسلة جبال بيندوس ، والتلال والأودية والأنهار والبحيرات والغابات ، كل هذا جعل منها وجهة سياحية مميزة وفريدة من نوعها",
  en: "Tourism in Albania — or the land of the eagles, as it is called — has become a major draw, with thousands of visitors arriving from all over the world every year. Albania has a charming range of landscapes: breathtaking beaches along the Albanian Riviera, mountains such as the Albanian Alps and the Pindus range, plus hills, valleys, rivers, lakes and forests, all of which have made it a distinctive and one-of-a-kind destination.",
};

const HERITAGE = {
  ar: "تتمتع البانيا بمجموعة مُميزة من الآثار التاريخية ، حيث المعابد والحصون اليونانية والرومانية القديمة ، وحمامات القرون الوسطى وغيرها الكثير ، ومن الجدير بالذكر أن البانيا واحدة من أكثر الدول امانا في العالم ، كما أن شعبها ودود للغاية ، البانيا تعتبر من الوجهات السياحية الغير مكلفة ، حيث يمكنك قضاء أسبوع بها والتنقل بين أهم مدنها بأقل التكاليف ، وذلك على عكس أغلب الوجهات السياحية الأخرى في أوروبا الشرقية",
  en: "Albania has a remarkable set of historic remains — ancient Greek and Roman temples and forts, medieval baths and much more. It is worth noting that Albania is one of the safest countries in the world, and its people are extremely friendly. Albania is also an inexpensive destination: you can spend a week there and travel between its main cities at the lowest cost, unlike most other destinations in Eastern Europe.",
};

const WEATHER = {
  ar: "البانيا من الوجهات السياحية التي تتيح لك الإستمتاع بخوض مغامرة فريدة لا تنسى ، لذلك عليك معرفة ما هو الوقت المثالي من أجل ذلك ، وتتميز البانيا يتنوع الطقس فيها إلى حد كبير ، حيث يوجد بها ثلاث مناطق مناخية رئيسية وهي ساحل البحر المتوسط الدافيء ، والأطراف القارية من الداخل ، والجبال الأكثر برودة في الشمال الشرقي",
  en: "Albania is a destination that lets you enjoy a unique, unforgettable adventure, so it helps to know the ideal time to go. Its weather varies a great deal: there are three main climate zones — the warm Mediterranean coast, the continental interior, and the colder mountains of the north-east.",
};

const FOOD_1 = {
  ar: "الطعام في البانيا أحد أهم أسباب وعوامل الجذب السياحي في البانيا ، وذلك حيث أن الأطعمة الألبانية تتمتع بمذاق لذيذ وطازج ، ويمكنك تناوله في أرقى المطاعم وكذلك ايضا من مأكولات الشارع الشهية",
  en: "Food is one of the biggest reasons people travel to Albania, as Albanian dishes are delicious and fresh; you can eat them in the finest restaurants and as tasty street food too.",
};

const FOOD_2 = {
  ar: "وهناك العديد من المأكولات الألبانية الرائعة التي يمكنك تجربتها في أرض النسور ومنها البيريك ، بيرك بالسبانخ ، تافو كوسي ، فرايد كاشكافال ، البقلاوة ، تريليس ، كرات اللحم المشوية ، الكفتة الألبانية ، الخضروات المشوية وغيرها الكثير ، هذا بالإضافة إلى المأكولات البحرية الطازجة الممتازة ، نظرا لوقوع البانيا على البحر المتوسط ، فلا يفوتك تناول الطعام الشهي والتمتع بالمناظر الساحرة على طول امتداد الساحل من شرفات المطاعم",
  en: "There are many wonderful Albanian dishes to try in the land of the eagles: byrek, spinach byrek, tavë kosi, fried kaçkavall, baklava, trileçe, grilled meatballs, Albanian qofte, grilled vegetables and much more, plus excellent fresh seafood since Albania sits on the Mediterranean. Do not miss eating well while enjoying the charming views along the coast from the restaurant terraces.",
};

const LANGUAGE = {
  ar: "من الجدير بالذكر أن البانيا بلد متجانسة عِرقيا ، ويتحدث الغالبية العظمى من سكانها اللغة الألبانية ، بينما يتحدث الأقليات لغتها الأصلية مثل اليونانية والمقدونية والرومانية وغيرها ، وتعد اللغة الإيطالية والإنجليزية هما أشهر اللغات التي يتحدث بها الألبانيون",
  en: "It is worth noting that Albania is an ethnically homogeneous country: the vast majority of its people speak Albanian, while minorities speak their own languages such as Greek, Macedonian, Romanian and others. Italian and English are the most widely spoken foreign languages among Albanians.",
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
      <div aria-hidden className="absolute inset-x-0 top-0 h-2 bg-carmine" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--carmine) 14%, transparent) 0%, transparent 38%, color-mix(in oklab, var(--midnight) 8%, transparent) 100%)",
        }}
      />
      {/* Mountain-ridge chevrons of the Albanian Alps */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--midnight) 0 2px, transparent 2px 22px), repeating-linear-gradient(45deg, var(--carmine) 0 2px, transparent 2px 22px)",
        }}
      />
      <DoubleEagle className="absolute -top-4 right-2 md:right-12 w-32 md:w-48 text-midnight/10 pointer-events-none" />
      <DoubleEagle className="absolute bottom-10 left-2 md:left-10 w-24 md:w-36 text-carmine/10 pointer-events-none" />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-6 w-20 h-6 bg-carmine/75 rotate-[-6deg] z-20 shadow-sm" />
            <div className="absolute -top-4 right-8 w-16 h-5 bg-midnight/55 rotate-[10deg] z-20 shadow-sm" />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={SCENE_B}
                alt={rtl ? "مشاهد من ألبانيا" : "Scenes from Albania"}
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

      {/* ABOUT — جمهورية البانيا */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-carmine font-mono">
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1 bg-carmine/15" />
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className={`md:col-span-7 ${align}`}>
            <h3 className="font-display text-3xl md:text-4xl text-carmine mb-5">
              {rtl ? "جمهورية البانيا" : "The Republic of Albania"}
            </h3>
            <p className="font-body text-base md:text-lg text-charcoal/85 leading-[1.95]">{ABOUT[lang]}</p>
            <p className="mt-5 font-body text-base md:text-lg text-charcoal/85 leading-[1.95]">{NATURE[lang]}</p>
          </div>
          <div className="md:col-span-5 space-y-4">
            <figure className="overflow-hidden rounded-2xl shadow-lg border border-carmine/10 md:translate-x-4">
              <img
                src={SCENE_A}
                alt={rtl ? "مشاهد من ألبانيا" : "Scenes from Albania"}
                loading="lazy"
                className="h-48 md:h-56 w-full object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl shadow-lg border border-carmine/10">
              <img
                src={SCENE_C}
                alt={rtl ? "الريفيرا الألبانية" : "The Albanian Riviera"}
                loading="lazy"
                className="h-44 md:h-52 w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </div>

      {/* ANTHEM */}
      <div className="relative z-10 mt-20">
        <AnthemPlayer
          src={ANTHEM_VIDEO}
          lang={lang}
          title={rtl ? "علم جمهورية البانيا والنشيد الوطني الالباني" : "The flag of the Republic of Albania and the Albanian national anthem"}
        />
      </div>

      {/* HERITAGE & WEATHER */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-carmine font-mono">
            {rtl ? "01 · الآثار والطقس" : "01 · Heritage & weather"}
          </span>
          <span className="h-px flex-1 bg-carmine/15" />
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="md:col-span-5">
            <figure className="overflow-hidden rounded-2xl shadow-lg border border-carmine/10">
              <img
                src={SCENE_D}
                alt={rtl ? "آثار تاريخية في ألبانيا" : "Historic sites in Albania"}
                loading="lazy"
                className="h-56 md:h-72 w-full object-cover"
              />
            </figure>
          </div>
          <div className={`md:col-span-7 ${align}`}>
            <p className="font-body text-base md:text-lg text-charcoal/85 leading-[1.95]">{HERITAGE[lang]}</p>
            <p className="mt-5 font-body text-base md:text-lg text-charcoal/85 leading-[1.95]">{WEATHER[lang]}</p>
          </div>
        </div>
      </div>

      {/* FOOD & LANGUAGE */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-6">
        <div className="relative overflow-hidden bg-carmine text-cream border border-carmine shadow-md flex flex-col">
          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-cream/70 font-mono z-10">
            {rtl ? "02 · المطبخ" : "02 · Cuisine"}
          </div>
          <DoubleEagle className="absolute -bottom-8 -right-8 w-40 text-cream/10 pointer-events-none" />
          <div className={`relative pt-16 px-7 pb-7 ${align}`}>
            <h3 className="font-display text-2xl md:text-3xl mb-4">
              {rtl ? "الأكل والشراب في ألبانيا" : "Eating and drinking in Albania"}
            </h3>
            <p className="font-body text-sm md:text-base leading-[1.95] text-cream/90">{FOOD_1[lang]}</p>
            <p className="mt-4 font-body text-sm md:text-base leading-[1.95] text-cream/90">{FOOD_2[lang]}</p>
          </div>
          <figure className="relative mt-auto">
            <img
              src={SCENE_E}
              alt={rtl ? "أطباق ألبانية" : "Albanian dishes"}
              loading="lazy"
              className="h-52 w-full object-cover border-t border-cream/20"
            />
          </figure>
        </div>

        <div className="relative bg-white border border-carmine/10 shadow-md flex flex-col md:self-start">
          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-carmine font-mono z-10">
            {rtl ? "03 · اللغة" : "03 · Language"}
          </div>
          <div className={`pt-16 px-7 pb-7 ${align}`}>
            <h3 className="font-display text-2xl md:text-3xl text-carmine mb-4">
              {rtl ? "اللغة في ألبانيا" : "The language in Albania"}
            </h3>
            <p className="font-body text-sm md:text-base text-charcoal/85 leading-[1.95]">{LANGUAGE[lang]}</p>
          </div>
          <div className="mt-auto border-t border-carmine/10 px-7 py-5">
            <div className={`text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-2 ${align}`}>
              {rtl ? "اللغات الأكثر تحدثا" : "Most spoken languages"}
            </div>
            <div className={`flex flex-wrap gap-2 ${rtl ? "justify-end" : "justify-start"}`}>
              {(rtl
                ? ["الألبانية", "الإيطالية", "الإنجليزية", "اليونانية", "المقدونية", "الرومانية"]
                : ["Albanian", "Italian", "English", "Greek", "Macedonian", "Romanian"]
              ).map((t) => (
                <span key={t} className="border border-carmine/25 text-carmine text-xs px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FACT — emblem & map */}
      <div className="relative z-10 mt-20 mx-auto max-w-3xl px-6">
        <div className="relative bg-white border border-carmine/10 overflow-hidden shadow-md">
          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-carmine font-mono z-10">
            {rtl ? "04 · حقيقة" : "04 · Fact"}
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
