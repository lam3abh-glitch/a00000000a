import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import type { Lang } from "@/lib/i18n";
import ahmadKampalaAsset from "@/assets/ahmad-kampala.png.asset.json";

const IMG = (name: string, month: string) =>
  `https://i0.wp.com/100region.com/wp-content/uploads/${month}/${name}?ssl=1`;

const AHMAD_KAMPALA = ahmadKampalaAsset.url;
const SAFARI = IMG("img_3050.jpg", "2022/01");
const PEOPLE = IMG("img_2102.jpg", "2022/01");
const EMBLEM_MAP = IMG("img_4242.jpg", "2022/04");
const ANTHEM = "https://videos.files.wordpress.com/01q0KH2T/my-movie-5-9.mp4";

const ABOUT = {
  ar: [
    "تقع أوغندا في شرق وسط أفريقيا ، تحدها جنوب السودان من الشمال ، وكينيا من الشرق ، وتنزانيا ورواندا الى الجنوب ، وجمهورية الكونغو الديمقراطية الى الغرب . عاصمتها هي مدينة كمبالا في أقصى جنوب البلاد ، وقد حصلت أوغندا على استقلالها في عام 1962 م",
    "تقدم أوغندا بعضا من مشاهد الحياة البرية الأكثر تنوعا في القارة السمراء اضافة الى المناظر الطبيعية الخلابة ، وتجارب ثقافية غامرة ، وكرم الضيافة الأصيل الذي تتمتع به أوغندا ، وتعد أوغندا موطنا للغوريلا الجبلية المهددة بالانقراض في العالم ، والرحلات لمشاهدة هذه العملاقة اللطيفة في غابة بويندي المنيعة والتي هي واحدة من أفضل أنشطة السفر في العالم",
    "كما وتكثر فرص رحلات السفاري في مناطق السافانا والغابات والأراضي الرطبة في جميع أنحاء 10 حدائق وطنية محمية ، حيث يمكن للزوار مشاهدة أكبر 7 حيوانات برية في العالم وهي الأسد والفهد ووحيد القرن والفيل والجاموس المائي والشمبانزي والغوريلا الجبلية ، بالإضافة الى الزرافة والحمار الوحشي وفرس النهر والتمساح وأكثر من نصف جميع أنواع الطيور الموجودة في أفريقيا",
  ],
  en: [
    "Uganda lies in east-central Africa, bordered by South Sudan to the north, Kenya to the east, Tanzania and Rwanda to the south, and the Democratic Republic of the Congo to the west. Its capital is the city of Kampala in the far south of the country, and Uganda gained its independence in 1962.",
    "Uganda offers some of the most diverse wildlife scenes on the African continent, along with breathtaking landscapes, immersive cultural experiences and the genuine hospitality Uganda is known for. Uganda is home to the world's endangered mountain gorillas, and trips to see these gentle giants in the Bwindi Impenetrable Forest are among the finest travel experiences in the world.",
    "Safari opportunities also abound across the savanna, forests and wetlands of 10 protected national parks, where visitors can see the 7 biggest wild animals in the world — the lion, the leopard, the rhino, the elephant, the water buffalo, the chimpanzee and the mountain gorilla — in addition to the giraffe, the zebra, the hippo, the crocodile and more than half of all bird species found in Africa.",
  ],
};

const WEATHER = {
  ar: "بسبب الموقع الاستوائي لأوغندا ، هناك اختلاف طفيف في انحراف الشمس في منتصف النهار ، وطول مدة النهار دائماً ما يقرب من 12 ساعة ، ويتأثر المناخ في أوغندا كثيرا بالارتفاع الذي يتراوح ما بين 1000 إلى 1400 مترا فضلا عن أنواع مختلفة من الرياح ، يتراوح متوسط درجات الحرارة السنوية بين 24 درجة مئوية و 31 درجة مئوية ، ويتراوح معدل هطول الأمطار من 500 ملم في الشمال الشرقي إلى 2000 ملم في جزر سيسي في بحيرة فيكتوريا",
  en: "Because of Uganda's equatorial location there is only slight variation in the sun's midday declination, and the length of the day is always close to 12 hours. The climate in Uganda is strongly influenced by an altitude ranging between 1000 and 1400 metres, as well as by different kinds of winds. Average annual temperatures range between 24°C and 31°C, and rainfall ranges from 500 mm in the north-east to 2000 mm in the Ssese Islands of Lake Victoria.",
};

export function UgandaCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
      {/* Warm savanna wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--savanna) 12%, transparent) 0%, transparent 40%, color-mix(in oklab, var(--clay) 10%, transparent) 100%)",
        }}
      />
      {/* Subtle African-inspired chevron pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--earth) 0 2px, transparent 2px 14px), repeating-linear-gradient(-45deg, var(--earth) 0 2px, transparent 2px 14px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-6 w-20 h-6 bg-savanna/70 rotate-[-6deg] z-20 shadow-sm" />
            <div className="absolute -top-4 right-8 w-16 h-5 bg-clay/60 rotate-[10deg] z-20 shadow-sm" />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={AHMAD_KAMPALA}
                alt={lang === "ar" ? "أحمد في كمبالا" : "Ahmad in Kampala"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-midnight text-lg" style={{ fontFamily: "cursive" }}>
                Kampala · كمبالا
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span className="inline-block bg-earth text-cream text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[-2deg] mb-6">
            {lang === "ar" ? "◆ مقدّمة" : "◆ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl text-earth leading-snug whitespace-pre-line">{intro}</p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {["bg-earth", "bg-gold", "bg-clay", "bg-savanna"].map((c) => (
              <span key={c} className={`h-1.5 w-10 ${c}`} />
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT UGANDA */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-clay font-mono">
            {lang === "ar" ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1 bg-earth/15" />
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className={`md:col-span-7 space-y-5 ${align}`}>
            {ABOUT[lang].map((p, i) => (
              <p key={i} className="font-body text-base md:text-lg text-charcoal/85 leading-[1.95]">
                {p}
              </p>
            ))}
          </div>
          <div className="md:col-span-5 space-y-4">
            <figure className="overflow-hidden rounded-2xl shadow-lg border border-earth/10">
              <img
                src={SAFARI}
                alt={lang === "ar" ? "رحلة سفاري في أوغندا" : "Safari in Uganda"}
                loading="lazy"
                className="h-56 md:h-64 w-full object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl shadow-lg border border-earth/10 md:translate-x-4">
              <img
                src={PEOPLE}
                alt={lang === "ar" ? "أهل أوغندا" : "People of Uganda"}
                loading="lazy"
                className="h-48 md:h-56 w-full object-cover"
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
          title={lang === "ar" ? "النشيد الوطني لجمهورية أوغندا" : "National Anthem of the Republic of Uganda"}
        />
      </div>

      {/* FACTS */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group relative bg-white border border-earth/10 overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-clay font-mono z-10">
              {lang === "ar" ? "01 · حقيقة" : "01 · Fact"}
            </div>
            <div className="pt-16 pb-8 px-6 flex items-center justify-center bg-gradient-to-b from-cream to-white min-h-[280px]">
              <img
                src={EMBLEM_MAP}
                alt={lang === "ar" ? "شعار وخارطة جمهورية أوغندا" : "Emblem and map of the Republic of Uganda"}
                loading="lazy"
                className="max-h-56 w-auto object-contain drop-shadow-md"
              />
            </div>
            <div className={`border-t border-earth/10 px-6 py-4 ${align}`}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-1">
                {lang === "ar" ? "الشعار والموقع" : "Emblem & Geography"}
              </div>
              <div className="font-display text-xl text-earth">
                {lang === "ar" ? "شعار وخارطة جمهورية أوغندا" : "Emblem and map of the Republic of Uganda"}
              </div>
            </div>
          </div>

          <div className="relative bg-earth text-cream border border-earth overflow-hidden shadow-md">
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-gold font-mono z-10">
              {lang === "ar" ? "02 · حقيقة" : "02 · Fact"}
            </div>
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: "repeating-linear-gradient(90deg, var(--cream) 0 1px, transparent 1px 16px)",
              }}
            />
            <div className={`relative pt-16 pb-8 px-7 ${align}`}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-cream/60 mb-2">
                {lang === "ar" ? "المناخ" : "Climate"}
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4">
                {lang === "ar" ? "الطقس في أوغندا" : "The weather in Uganda"}
              </h3>
              <p className="font-body text-sm md:text-base text-cream/85 leading-[1.95]">{WEATHER[lang]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
