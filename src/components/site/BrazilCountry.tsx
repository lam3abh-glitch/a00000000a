import type { Lang } from "@/lib/i18n";
import { AnthemPlayer } from "@/components/site/AnthemPlayer";

const ANTHEM_VIDEO = "https://videos.files.wordpress.com/6iC2jPSc/my-movie-5-6.mp4";
const EMBLEM_MAP = "https://i0.wp.com/100region.com/wp-content/uploads/2022/04/img_4213.jpg?ssl=1";

/** Nature showcase — no polaroid this time: a rainforest "window" onto Brazil. */
const NATURE_MAIN =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/00_1838_Iguazu_Falls_from_the_Brazilian_side.jpg/1920px-00_1838_Iguazu_Falls_from_the_Brazilian_side.jpg";
const NATURE_A =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Sunset_at_Amazon_rainforest%2C_Brazil_-_2026-5.jpg/1920px-Sunset_at_Amazon_rainforest%2C_Brazil_-_2026-5.jpg";
const NATURE_B =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Len%C3%A7%C3%B3is_Maranhenses_2018.jpg/1920px-Len%C3%A7%C3%B3is_Maranhenses_2018.jpg";
const NATURE_C = "https://i0.wp.com/100region.com/wp-content/uploads/2022/08/img_2026.jpg?ssl=1";

const GREEN = "#009739";
const YELLOW = "#FFDF00";
const BLUE = "#002776";

const ABOUT = {
  ar: "البرازيل هي أكبر بلد في أمريكا الجنوبية ، حيث تقرب مساحتها من نصف القارة ، الكثير منها مناطق استوائية ، مع مساحات شاسعة من الغابات المطيرة ، المليئة بالنباتات الغريبة والحياة البرية ، هذا بالاضافة الى العديد من المقومات السياحية والطبيعية ، التي جعلت من السياحة في البرازيل وجهة سياحية لها شعبية كبيرة",
  en: "Brazil is the largest country in South America, its territory covering close to half of the continent. Much of it is tropical, with vast stretches of rainforest full of exotic plants and wildlife, alongside many other natural and tourism assets that have made travel in Brazil hugely popular.",
};

const TOURISM = {
  ar: "تعتبر البرازيل بمثابة جنة استوائية ، ووجهة ثقافية مثيرة وغنية بالعديد من المناطق الجاذبة للسياحة ، وذلك حيث عطلات الشاطئ المثالية ، واستكشافات الغابات ، والمتاحف الفنية ذات المستوى العالمي ، والايقاعات أثناء الكرنفال في ريو دي جانيرو",
  en: "Brazil is a tropical paradise and an exciting cultural destination, rich in places that draw visitors: perfect beach holidays, forest explorations, world-class art museums, and the rhythms of the carnival in Rio de Janeiro.",
};

const NATURE_NOTE = {
  ar: "من شلالات إيجوازو على الحدود الجنوبية ، إلى غروب الشمس فوق غابات الأمازون المطيرة ، وكثبان لينسويس مارانينسيس البيضاء المتناثرة بالبحيرات المطرية ، طبيعة البرازيل وحدها سبب كافٍ للسفر",
  en: "From the Iguazu falls on the southern border, to sunset over the Amazon rainforest, to the white dunes of Lençóis Maranhenses scattered with rain lagoons — Brazil's nature alone is reason enough to travel.",
};

/** Tropical monstera-style leaf. */
function Leaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden className={className}>
      <g fill="currentColor">
        <path d="M60 116 C58 80 52 52 22 26 C48 22 72 30 88 46 C104 62 108 88 100 112 C86 104 72 106 60 116 Z" />
      </g>
      <g stroke="rgba(255,255,255,0.55)" strokeWidth="2" fill="none">
        <path d="M60 116 C66 88 74 66 92 50" />
        <path d="M64 96 L44 84 M70 78 L52 62 M78 62 L62 44" />
      </g>
    </svg>
  );
}

export function BrazilCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
      {/* flag bands — green, yellow, blue */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-2" style={{ background: GREEN }} />
      <div aria-hidden className="absolute inset-x-0 top-2 h-2" style={{ background: YELLOW }} />
      <div aria-hidden className="absolute inset-x-0 top-4 h-2" style={{ background: BLUE }} />

      {/* jungle wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 70% at 50% 0%, rgba(0,151,57,0.16) 0%, transparent 60%), linear-gradient(180deg, transparent 55%, rgba(255,223,0,0.14) 100%)",
        }}
      />
      <Leaf className="absolute -top-8 -left-6 w-32 md:w-44 text-[#009739]/25 rotate-[18deg] pointer-events-none" />
      <Leaf className="absolute top-40 -right-10 w-28 md:w-40 text-[#009739]/20 -rotate-[24deg] pointer-events-none" />
      <Leaf className="absolute bottom-0 left-10 w-20 md:w-28 text-[#002776]/15 rotate-[52deg] pointer-events-none" />

      {/* INTRO — arched nature window instead of a polaroid */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-7">
            <figure className="relative">
              <div
                className="overflow-hidden shadow-2xl"
                style={{ borderRadius: "9999px 9999px 28px 28px", border: `6px solid ${GREEN}` }}
              >
                <img
                  src={NATURE_MAIN}
                  alt={rtl ? "شلالات إيجوازو من الجانب البرازيلي" : "The Iguazu falls from the Brazilian side"}
                  loading="lazy"
                  className="block w-full h-[320px] md:h-[460px] object-cover"
                />
              </div>
              <figcaption
                className={`mt-4 font-mono text-[11px] uppercase tracking-[0.35em] ${align}`}
                style={{ color: GREEN }}
              >
                {rtl ? "شلالات إيجوازو · البرازيل" : "Iguazu Falls · Brazil"}
              </figcaption>
            </figure>
          </div>

          <div className={`md:col-span-5 ${align}`}>
            <span
              className="inline-block text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[-2deg] mb-6"
              style={{ background: GREEN, color: "#FFFDF5" }}
            >
              {rtl ? "◆ مقدّمة" : "◆ Introduction"}
            </span>
            <p className="font-display text-3xl md:text-4xl leading-snug whitespace-pre-line" style={{ color: BLUE }}>
              {intro}
            </p>
            <div className="mt-6 flex items-center gap-1.5" aria-hidden>
              {[GREEN, YELLOW, BLUE, GREEN].map((c, i) => (
                <span key={i} className="h-1.5 w-10" style={{ background: c }} />
              ))}
            </div>
          </div>
        </div>

        {/* nature strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { src: NATURE_A, ar: "غروب الشمس فوق غابات الأمازون", en: "Sunset over the Amazon rainforest" },
            { src: NATURE_B, ar: "كثبان لينسويس مارانينسيس", en: "The dunes of Lençóis Maranhenses" },
            { src: NATURE_C, ar: "طبيعة البرازيل الاستوائية", en: "The tropical nature of Brazil" },
          ].map((n) => (
            <figure key={n.src} className="overflow-hidden rounded-2xl shadow-lg" style={{ border: `1px solid ${GREEN}33` }}>
              <img
                src={n.src}
                alt={rtl ? n.ar : n.en}
                loading="lazy"
                className="block w-full h-40 md:h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
              <figcaption className={`px-4 py-3 bg-white font-body text-xs text-charcoal/75 ${align}`}>
                {rtl ? n.ar : n.en}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className={`mt-5 font-body text-sm md:text-base text-charcoal/80 leading-[1.9] ${align}`}>
          {NATURE_NOTE[lang]}
        </p>
      </div>

      {/* ABOUT + tourism */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono" style={{ color: GREEN }}>
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1" style={{ background: "rgba(0,151,57,0.2)" }} />
        </div>

        <h3 className={`font-display text-3xl md:text-4xl mb-5 ${align}`} style={{ color: BLUE }}>
          {rtl ? "جمهورية البرازيل" : "The Federative Republic of Brazil"}
        </h3>
        <p className={`font-body text-base md:text-lg text-charcoal/85 leading-[1.95] ${align}`}>{ABOUT[lang]}</p>
        <p className={`mt-5 font-body text-base md:text-lg text-charcoal/85 leading-[1.95] ${align}`}>{TOURISM[lang]}</p>
      </div>

      {/* ANTHEM */}
      <div className="relative z-10 mt-16">
        <AnthemPlayer
          src={ANTHEM_VIDEO}
          lang={lang}
          title={rtl ? "علم جمهورية البرازيل والنشيد الوطني البرازيلى" : "The flag of Brazil and the Brazilian national anthem"}
        />
      </div>

      {/* FACT — emblem & map */}
      <div className="relative z-10 mt-16 mx-auto max-w-3xl px-6">
        <div className="relative bg-white overflow-hidden shadow-md" style={{ border: `1px solid ${GREEN}26` }}>
          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] font-mono z-10" style={{ color: GREEN }}>
            {rtl ? "01 · حقيقة" : "01 · Fact"}
          </div>
          <div className="pt-16 pb-8 px-6 flex items-center justify-center bg-gradient-to-b from-cream to-white">
            <img
              src={EMBLEM_MAP}
              alt={rtl ? "شعار وخارطة جمهورية البرازيل" : "Emblem and map of Brazil"}
              loading="lazy"
              className="max-h-64 w-auto object-contain drop-shadow-md"
            />
          </div>
          <div className={`px-6 py-4 ${align}`} style={{ borderTop: `1px solid ${GREEN}26` }}>
            <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-1">
              {rtl ? "الشعار والموقع" : "Emblem & Geography"}
            </div>
            <div className="font-display text-xl" style={{ color: BLUE }}>
              {rtl ? "شعار وخارطة جمهورية البرازيل" : "Emblem and map of Brazil"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
