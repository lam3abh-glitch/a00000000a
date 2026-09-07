import type { Lang } from "@/lib/i18n";
import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import ahmadSeychelles from "@/assets/ahmad-seychelles.png.asset.json";
import seychellesAnthem from "@/assets/seychelles-anthem.mp3.asset.json";

const IMG = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const EMBLEM_MAP = IMG("2022/04/img_4567.jpg");
const FLAG = IMG("2022/03/img_3560.jpg");
const SCENE = IMG("2022/01/img_5711.jpg");
const ISLAND = IMG("2022/08/img_1512.jpg");

const OCEAN = "#003F87";
const LAGOON = "#0FA3B1";
const SAND = "#FFF7E8";
const CORAL = "#F4642A";
const PALM = "#0B7A3B";
const DEEP = "#062A3F";

const ABOUT = {
  ar: [
    "تقع جمهورية السيشل في المحيط الهندي وتبعد عن افرقيا الشرقية مسافة 1600 كم ، جزر السيشل تتواجد في الجهة الشمالية الشرقية لمدغشقر بالمحيط الهندي وتعتبر الصومال اقرب الدول الافريقية الى جزر السيشل في الجهة الشمالية الغربية للقارة الافريقية",
  ],
  en: [
    "The Republic of Seychelles lies in the Indian Ocean, some 1,600 km from East Africa. The Seychelles islands sit to the north-east of Madagascar in the Indian Ocean, and Somalia — to the north-west of the African continent — is the closest African country to them.",
  ],
};

const WEATHER = {
  ar: "السفر الى سيشل مناسب في جميع فصول السنة على وجه العموم فهي تتمتع بمناخ استوائي جميل على مدار السنة ، لكن يمكن تجنب درجات الحرارة العالية في شهري ابريل واكتوبر حيث تحدث هبات هواء ساخنة وتصل درجات الحرارة في المياه الى 29 درجة",
  en: "Travelling to Seychelles suits every season of the year in general, since it enjoys a lovely tropical climate all year round. You may, however, want to avoid the high temperatures of April and October, when hot gusts of air occur and water temperatures reach 29 degrees.",
};

const TAGLINE = {
  ar: "جزر الفيروز .. رمال بيضاء وصخور جرانيتية وسلاحف عملاقة",
  en: "Turquoise islands — white sand, granite boulders and giant tortoises",
};

/** Palm frond — the signature silhouette of the granitic islands. */
function PalmFrond({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 160" aria-hidden className={className} style={style}>
      <g fill="currentColor">
        <path d="M96 158c2-46 6-76 14-98 8-22 22-40 44-54-18 20-28 40-34 60-8 26-10 58-10 92H96Z" />
        <path d="M112 76c-20-16-44-22-70-18 22 2 42 10 58 24l12-6Z" />
        <path d="M120 58c-14-22-34-36-60-42 20 12 34 28 44 48l16-6Z" />
        <path d="M132 46c-2-24-14-42-34-56 12 18 18 38 18 60l16-4Z" />
        <path d="M140 54c12-20 30-32 54-36-20 10-34 26-42 46l-12-10Z" />
        <path d="M148 74c18-12 38-16 60-12-20 0-38 8-52 22l-8-10Z" />
      </g>
    </svg>
  );
}

/** Gentle wave pattern behind the whole section. */
function WavePattern() {
  return (
    <svg aria-hidden className="absolute inset-0 h-full w-full opacity-[0.10] pointer-events-none" preserveAspectRatio="none">
      <defs>
        <pattern id="sc-wave" width="120" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 26c15-16 30-16 45 0s30 16 45 0 30-16 45 0" fill="none" stroke={OCEAN} strokeWidth="3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#sc-wave)" />
    </svg>
  );
}

export function SeychellesCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";
  const t = (o: { ar: string; en: string }) => (rtl ? o.ar : o.en);

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: SAND }}>
      {/* flag rays along the top */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-3"
        style={{
          background: `linear-gradient(90deg, ${OCEAN} 0 20%, #FCD116 20% 40%, #FFFFFF 40% 60%, ${CORAL} 60% 80%, ${PALM} 80% 100%)`,
        }}
      />

      <WavePattern />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 45% at 100% 0%, rgba(15,163,177,0.30) 0%, transparent 65%), linear-gradient(180deg, transparent 55%, rgba(0,63,135,0.14) 100%)",
        }}
      />
      <PalmFrond className="absolute -top-6 -left-10 w-60 md:w-80 pointer-events-none" style={{ color: `${PALM}26` }} />
      <PalmFrond
        className="absolute bottom-4 -right-12 w-56 md:w-80 pointer-events-none"
        style={{ color: `${LAGOON}30`, transform: "scaleX(-1)" }}
      />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[3deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-7 w-20 h-6 rotate-[-7deg] z-20 shadow-sm" style={{ background: "rgba(15,163,177,0.75)" }} />
            <div className="absolute -top-4 right-6 w-16 h-5 rotate-[8deg] z-20 shadow-sm" style={{ background: "rgba(244,100,42,0.7)" }} />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={ahmadSeychelles.url}
                alt={rtl ? "أحمد في سيشيل" : "Ahmad in Seychelles"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-lg" style={{ color: DEEP, fontFamily: "cursive" }}>
                Seychelles · سيشيل
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span
            className="inline-block text-white text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[-2deg] mb-6"
            style={{ background: LAGOON }}
          >
            {rtl ? "≈ مقدّمة" : "≈ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl leading-snug whitespace-pre-line" style={{ color: DEEP }}>
            {intro}
          </p>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: `${DEEP}B0` }}>
            {t(TAGLINE)}
          </p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {[OCEAN, "#FCD116", CORAL, PALM].map((c, i) => (
              <span key={i} className="h-1.5 w-10 rounded-full" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono" style={{ color: LAGOON }}>
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1" style={{ background: `${DEEP}22` }} />
        </div>
        <h2 className={`font-display text-3xl md:text-4xl mb-5 ${align}`} style={{ color: DEEP }}>
          {rtl ? "جمهورية سيشيل" : "The Republic of Seychelles"}
        </h2>
        <div className={`space-y-5 text-lg leading-relaxed ${align}`} style={{ color: `${DEEP}CC` }}>
          {ABOUT[lang].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {[SCENE, ISLAND].map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md bg-white"
              style={{ border: `5px solid ${i === 0 ? LAGOON : PALM}` }}
            >
              <img
                src={src}
                alt={rtl ? "من جزر سيشيل" : "The islands of Seychelles"}
                loading="lazy"
                className="block w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* EMBLEM / FLAG + ANTHEM */}
      <div className="relative z-10 mt-16 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-4" style={{ color: LAGOON }}>
            {rtl ? "01 · الشعار والخارطة" : "01 · Emblem & map"}
          </div>
          <div className="overflow-hidden rounded-xl bg-white" style={{ border: `6px solid ${OCEAN}` }}>
            <img
              src={EMBLEM_MAP}
              alt={rtl ? "شعار وخارطة جمهورية سيشيل" : "Emblem and map of the Republic of Seychelles"}
              loading="lazy"
              className="w-full h-64 object-contain bg-white"
            />
          </div>
          <div className={`mt-4 font-display text-xl ${align}`} style={{ color: DEEP }}>
            {rtl ? "شعار وخارطة جمهورية سيشيل" : "Emblem and map of the Republic of Seychelles"}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-md flex flex-col text-white" style={{ background: OCEAN }}>
          <PalmFrond className="absolute -bottom-8 -right-8 w-56 text-white/10 pointer-events-none" />
          <div className={`relative pt-8 px-7 ${align}`}>
            <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-3" style={{ color: "#FCD116" }}>
              {rtl ? "02 · العلم والنشيد" : "02 · Flag & anthem"}
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-5">
              {rtl ? "علم جمهورية سيشيل والنشيد الوطني السيشيلي" : "The flag of Seychelles and the Seychellois national anthem"}
            </h3>
            <div className="overflow-hidden rounded-xl border border-white/20 max-w-sm">
              <img
                src={FLAG}
                alt={rtl ? "علم جمهورية سيشيل" : "Flag of the Republic of Seychelles"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="relative mt-8 pb-8">
            <AnthemPlayer
              src={seychellesAnthem.url}
              lang={lang}
              title={rtl ? "النشيد الوطني السيشيلي" : "National Anthem of Seychelles"}
              theme={{
                bg: "bg-white",
                border: "border-white/30",
                buttonBg: "bg-[#0FA3B1]",
                buttonText: "text-white",
                buttonHoverBg: "hover:bg-[#F4642A]",
                buttonHoverText: "hover:text-white",
                accent: "text-[#0FA3B1]",
                title: "text-[#062A3F]",
                ping: "border-[#FCD116]",
              }}
            />
          </div>
        </div>
      </div>

      {/* CLIMATE */}
      <div className="relative z-10 mt-16 mx-auto max-w-5xl px-6">
        <div className="bg-white rounded-2xl shadow-md p-7" style={{ borderInlineStart: `6px solid ${CORAL}` }}>
          <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-3" style={{ color: LAGOON }}>
            {rtl ? "03 · المناخ" : "03 · Climate"}
          </div>
          <h3 className={`font-display text-2xl md:text-3xl mb-4 ${align}`} style={{ color: DEEP }}>
            {rtl ? "الطقس في سيشيل" : "The weather in Seychelles"}
          </h3>
          <p className={`text-lg leading-relaxed ${align}`} style={{ color: `${DEEP}CC` }}>
            {t(WEATHER)}
          </p>
        </div>
      </div>
    </section>
  );
}
