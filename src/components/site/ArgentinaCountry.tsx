import type { Lang } from "@/lib/i18n";
import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import ahmadArgentina from "@/assets/ahmad-argentina.png.asset.json";
import argentinaAnthem from "@/assets/argentina-anthem.mp3.asset.json";

const IMG = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const EMBLEM_MAP = IMG("2022/04/img_4307.jpg");
const FLAG = IMG("2022/04/img_4610.png");
const LANDSCAPE = IMG("2022/04/img_4764.jpg");

const SKY = "#74ACDF";
const SUN = "#F6B40E";
const INK = "#12233A";
const PAPER = "#FBFCFE";

const ABOUT = {
  ar: "تقع جمهورية الأرجنتين في الجزء الجنوبي من أمريكا الجنوبية ، حيث يصل عدد بلدان أمريكا الجنوبية الى 12 دولة ، ويحدها من جهة الشمال بوليفيا والباراغواي ، ومن جهة الجنوب والغرب تشيلي ، ومن جهة الشمال الشرقي البرازيل والأوروغواي ، وتعتبر هذه الدولة ثامن أكبر الدول في العالم من حيث المساحة ، وتنقسم إلى 23 مقاطعة",
  en: "The Argentine Republic lies in the southern part of South America — a continent of 12 countries. It is bordered to the north by Bolivia and Paraguay, to the south and west by Chile, and to the north-east by Brazil and Uruguay. It is the eighth largest country in the world by area and is divided into 23 provinces.",
};

const ABOUT2 = {
  ar: "تعتبر الارجنتين من الدول الجميلة التي تتمتع بالكثير من التاريخ الثقافي والعجائب الطبيعية ، ويذهب إليها جميع السياح من أجل الاستمتاع بها ، ويحب الكثير من الناس زيارة هذه الدولة وذلك لما تتميز به من الكثير من المعالم السياحية والأماكن الجذابة والأنشطة التي يحب الجميع ممارستها ، بالإضافة إلى تميزها بالكثير من الأطعمة اللذيذة التي يحب الجميع تناولها لأنها تصنع في هذه الدولة بطريقة خاصة",
  en: "Argentina is a beautiful country rich in cultural history and natural wonders, and travellers come from everywhere to enjoy it. Many people love visiting it for its many landmarks, attractive places and activities everyone enjoys, as well as its delicious food, prepared here in a way all its own.",
};

const WEATHER = {
  ar: "ان افضل وقت لزيارة الارجنتين يعتمد على ما تنوي فعله ، فهي مناسبة للزيارة في جميع فصول السنة ، ولكن البلاد تفتح جميع ابواب المزارات السياحية في الفترة من نهاية سبتمبر وحتى منتصف شهر نوفمبر وهي فترة الربيع",
  en: "The best time to visit Argentina depends on what you plan to do — it is suitable all year round, but the country opens every tourist site from late September until mid-November, which is spring.",
};

const TAGLINE = {
  ar: "بلاد التانغو .. الشلالات والأنهار الجليدية",
  en: "The land of tango — waterfalls and glaciers",
};

/** The Sun of May from the Argentine flag. */
function SunOfMay({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className} style={style}>
      <g fill="currentColor">
        <circle cx="50" cy="50" r="17" />
        {Array.from({ length: 32 }).map((_, i) => {
          const a = (i * 360) / 32;
          return <rect key={i} x="49" y="6" width="2" height="18" rx="1" transform={`rotate(${a} 50 50)`} />;
        })}
      </g>
    </svg>
  );
}

export function ArgentinaCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";
  const t = (o: { ar: string; en: string }) => (rtl ? o.ar : o.en);

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: PAPER }}>
      {/* flag stripes along the top */}
      <div aria-hidden className="absolute inset-x-0 top-0 flex flex-col h-3">
        <span className="flex-1" style={{ background: SKY }} />
        <span className="flex-1 bg-white" />
        <span className="flex-1" style={{ background: SKY }} />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 40% at 100% 0%, rgba(116,172,223,0.18) 0%, transparent 65%), radial-gradient(50% 35% at 0% 100%, rgba(246,180,14,0.12) 0%, transparent 60%)",
        }}
      />
      <SunOfMay className="absolute -top-10 -left-12 w-52 md:w-72 pointer-events-none" style={{ color: `${SUN}1F` }} />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-10 w-20 h-6 rotate-[7deg] z-20 shadow-sm" style={{ background: "rgba(116,172,223,0.8)" }} />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={ahmadArgentina.url}
                alt={rtl ? "أحمد في بيونس آيرس" : "Ahmad in Buenos Aires"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-lg" style={{ color: INK, fontFamily: "cursive" }}>
                Argentina · الأرجنتين
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span
            className="inline-block text-[11px] uppercase tracking-[0.4em] px-4 py-2 mb-6"
            style={{ background: SKY, color: "#fff" }}
          >
            {rtl ? "مقدّمة" : "Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl leading-snug whitespace-pre-line" style={{ color: INK }}>
            {intro}
          </p>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: `${INK}A6` }}>
            {t(TAGLINE)}
          </p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {[SKY, SUN, SKY].map((c, i) => (
              <span key={i} className="h-1.5 w-12" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono" style={{ color: SKY }}>
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1" style={{ background: `${INK}1F` }} />
        </div>
        <h2 className={`font-display text-3xl md:text-4xl mb-5 ${align}`} style={{ color: INK }}>
          {rtl ? "جمهورية الارجنتين" : "The Argentine Republic"}
        </h2>
        <div className={`space-y-5 text-lg leading-relaxed ${align}`} style={{ color: `${INK}CC` }}>
          <p>{t(ABOUT)}</p>
          <p>{t(ABOUT2)}</p>
        </div>
        <figure className="mt-10">
          <img
            src={LANDSCAPE}
            alt={rtl ? "مناظر من الأرجنتين" : "Landscapes of Argentina"}
            loading="lazy"
            className="w-full max-h-[420px] object-cover shadow-md"
          />
        </figure>
      </div>

      {/* WEATHER */}
      <div className="relative z-10 mt-16 mx-auto max-w-5xl px-6">
        <div className="bg-white shadow-md p-7 md:p-9" style={{ borderTop: `4px solid ${SUN}` }}>
          <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-3" style={{ color: SUN }}>
            {rtl ? "01 · الطقس" : "01 · Weather"}
          </div>
          <h3 className={`font-display text-2xl md:text-3xl mb-4 ${align}`} style={{ color: INK }}>
            {rtl ? "الطقس في الارجنتين" : "The weather in Argentina"}
          </h3>
          <p className={`text-lg leading-relaxed ${align}`} style={{ color: `${INK}CC` }}>
            {t(WEATHER)}
          </p>
        </div>
      </div>

      {/* EMBLEM / FLAG + ANTHEM */}
      <div className="relative z-10 mt-16 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md p-6">
          <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-4" style={{ color: SKY }}>
            {rtl ? "02 · الشعار والخارطة" : "02 · Emblem & map"}
          </div>
          <div className="overflow-hidden bg-white" style={{ border: `6px solid ${SKY}` }}>
            <img
              src={EMBLEM_MAP}
              alt={rtl ? "شعار وخارطة جمهورية الارجنتين" : "Emblem and map of the Argentine Republic"}
              loading="lazy"
              className="w-full h-64 object-contain bg-white"
            />
          </div>
          <div className={`mt-4 font-display text-xl ${align}`} style={{ color: INK }}>
            {rtl ? "شعار وخارطة جمهورية الارجنتين" : "Emblem and map of the Argentine Republic"}
          </div>
        </div>

        <div className="relative overflow-hidden shadow-md flex flex-col text-white" style={{ background: INK }}>
          <SunOfMay className="absolute -bottom-12 -right-10 w-48 text-white/10 pointer-events-none" />
          <div className={`relative pt-8 px-7 ${align}`}>
            <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-3" style={{ color: SUN }}>
              {rtl ? "03 · العلم والنشيد" : "03 · Flag & anthem"}
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-5">
              {rtl ? "علم جمهورية الارجنتين والنشيد الوطني الأرجنتيني" : "The flag of Argentina and the Argentine national anthem"}
            </h3>
            <div className="overflow-hidden border border-white/20 max-w-sm">
              <img
                src={FLAG}
                alt={rtl ? "علم جمهورية الارجنتين" : "Flag of the Argentine Republic"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="relative mt-8 pb-8">
            <AnthemPlayer
              src={argentinaAnthem.url}
              lang={lang}
              title={rtl ? "النشيد الوطني الأرجنتيني" : "National Anthem of Argentina"}
              theme={{
                bg: "bg-white",
                border: "border-white/30",
                buttonBg: "bg-[#74ACDF]",
                buttonText: "text-white",
                buttonHoverBg: "hover:bg-[#F6B40E]",
                buttonHoverText: "hover:text-[#12233A]",
                accent: "text-[#74ACDF]",
                title: "text-[#12233A]",
                ping: "border-[#F6B40E]",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
