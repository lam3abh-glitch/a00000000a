import type { Lang } from "@/lib/i18n";

const EMBLEM_MAP = "https://i0.wp.com/100region.com/wp-content/uploads/2022/04/img_4278.jpg?ssl=1";
const POLAROID =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Saint_Sophia_Cathedral_Kiev.jpg/1280px-Saint_Sophia_Cathedral_Kiev.jpg";

const ABOUT = {
  ar: "هي جمهورية تقع في أوروبا الشرقية ، تحدها روسيا من الشرق والشمال الشرقي ، ويحدها روسيا البيضاء في الشمال الغربي ، وبولندا وسلوفاكيا الى الغرب ، والمجر ، ورومانيا ، ومولدوفا الى الجنوب الغربي ، والبحر الأسود وبحر آزوف الى الجنوب والجنوب الشرقي ، على التوالي ، ومساحتها شاسعة مما يجعلها أكبر دولة بالكامل داخل أوروبا والدولة الـ 46 الأكبر في العالم ، بل انها أيضا الدولة الـ 32 من حيث عدد السكان في العالم",
  en: "Ukraine is a republic in Eastern Europe, bordered by Russia to the east and north-east, Belarus to the north-west, Poland and Slovakia to the west, Hungary, Romania and Moldova to the south-west, and the Black Sea and the Sea of Azov to the south and south-east respectively. Its territory is vast, making it the largest country entirely inside Europe and the 46th largest in the world, as well as the 32nd most populous.",
};

const TOURISM = {
  ar: "أوكرانيا واحدة من أكبر الدول في أوروبا ، وتتميز السياحة في اوكرانيا بالعديد من مناطق الجذب السياحي الهامة ، وذلك حيث المهرجانات الثقافية وهندستها المعمارية التي تعود قرون من الزمن ، كما تتميز بمناطق الريف ، والشوارع المرصوفة بالحصى في مراكز المدن القديمة ، ومجموعة من أروع المناظر الطبيعية ، كما يتميز الشعب الأوكراني بأنه من الشعوب المضيافة في أوروبا",
  en: "Ukraine is one of the largest countries in Europe, and travel here is marked by many important attractions: cultural festivals, architecture going back centuries, countryside regions, cobbled streets in the old city centres and some of the finest natural scenery. Ukrainians are also among the most hospitable people in Europe.",
};

const WEATHER = {
  ar: "مناخ أوكرانيا معتدل قاري ، يطل البحر الأبيض المتوسط على الساحل الجنوبي في القرم مع هطول الأمطار المتوزعة بشكل غير متناسب لتكون من أعلى المعدلات في الغرب والشمال ، والأقل في الشرق والجنوب الشرقي ، يختلف طقس الشتاء ليكون بارد على طول ساحل البحر الأسود ، بينما يأتي الصيف الحار في الجزء الأكبر من البلاد ، وحار في الجنوب",
  en: "Ukraine has a temperate continental climate, with a Mediterranean character along the southern Crimean coast. Rainfall is unevenly distributed — highest in the west and north, lowest in the east and south-east. Winter varies from cold along the Black Sea coast, while summer is warm across most of the country and hot in the south.",
};

const LANGUAGE = {
  ar: "الأوكرانية هي اللغة الرسمية في أوكرانيا ، أبجديتها هي السيريلية ، والدين السائد في البلاد هو الأرثوذكسية الشرقية ، والتي أثرت بقوة على العمارة الأوكرانية والأدب والموسيقى",
  en: "Ukrainian is the official language, written in the Cyrillic alphabet, and the dominant faith is Eastern Orthodoxy, which has strongly shaped Ukrainian architecture, literature and music.",
};

/** Wheat-ear motif — the sheaf of the Ukrainian countryside. */
function WheatEar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 120" aria-hidden className={className}>
      <g stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round">
        <path d="M30 118 V34" />
        {Array.from({ length: 7 }).map((_, i) => {
          const y = 34 + i * 11;
          return (
            <g key={i}>
              <path d={`M30 ${y} C18 ${y - 4} 12 ${y + 4} 8 ${y + 12}`} />
              <path d={`M30 ${y} C42 ${y - 4} 48 ${y + 4} 52 ${y + 12}`} />
            </g>
          );
        })}
        <path d="M30 34 C24 22 27 12 30 6 C33 12 36 22 30 34 Z" />
      </g>
    </svg>
  );
}

export function UkraineCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
      {/* Ukrainian flag bands — azure over gold */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-2" style={{ background: "#0057B7" }} />
      <div aria-hidden className="absolute inset-x-0 top-2 h-2" style={{ background: "#FFD700" }} />

      {/* sky-to-wheat wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,87,183,0.10) 0%, transparent 45%, rgba(255,215,0,0.16) 100%)",
        }}
      />
      {/* embroidery cross-stitch pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #0057B7 0 3px, transparent 3px 18px), repeating-linear-gradient(-45deg, #0057B7 0 3px, transparent 3px 18px)",
        }}
      />
      <WheatEar className="absolute -top-6 right-3 md:right-14 w-14 md:w-20 text-[#d8a900]/40 pointer-events-none" />
      <WheatEar className="absolute bottom-4 left-3 md:left-12 w-12 md:w-16 text-[#0057B7]/20 pointer-events-none rotate-6" />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-6 w-20 h-6 rotate-[-6deg] z-20 shadow-sm" style={{ background: "rgba(0,87,183,0.75)" }} />
            <div className="absolute -top-4 right-8 w-16 h-5 rotate-[10deg] z-20 shadow-sm" style={{ background: "rgba(255,215,0,0.8)" }} />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={POLAROID}
                alt={rtl ? "كاتدرائية القديسة صوفيا في كييف" : "Saint Sophia Cathedral in Kyiv"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-midnight text-lg" style={{ fontFamily: "cursive" }}>
                Kyiv · كييف
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span
            className="inline-block text-cream text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[-2deg] mb-6"
            style={{ background: "#0057B7" }}
          >
            {rtl ? "◆ مقدّمة" : "◆ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl leading-snug whitespace-pre-line" style={{ color: "#0057B7" }}>
            {intro}
          </p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {["#0057B7", "#FFD700", "#0057B7", "#FFD700"].map((c, i) => (
              <span key={i} className="h-1.5 w-10" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT + tourism */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono" style={{ color: "#0057B7" }}>
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1" style={{ background: "rgba(0,87,183,0.18)" }} />
        </div>

        <h3 className={`font-display text-3xl md:text-4xl mb-5 ${align}`} style={{ color: "#0057B7" }}>
          {rtl ? "جمهورية اوكرانيا" : "The Republic of Ukraine"}
        </h3>
        <p className={`font-body text-base md:text-lg text-charcoal/85 leading-[1.95] ${align}`}>{ABOUT[lang]}</p>
        <p className={`mt-5 font-body text-base md:text-lg text-charcoal/85 leading-[1.95] ${align}`}>{TOURISM[lang]}</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {[
            { n: "01", t_ar: "الطقس في أوكرانيا", t_en: "The weather in Ukraine", body: WEATHER[lang] },
            { n: "02", t_ar: "اللغة في أوكرانيا", t_en: "The language in Ukraine", body: LANGUAGE[lang] },
          ].map((s) => (
            <div key={s.n} className="relative bg-white shadow-md p-7" style={{ border: "1px solid rgba(0,87,183,0.14)" }}>
              <div className="absolute top-0 inset-x-0 h-1" style={{ background: "#FFD700" }} />
              <div className={`text-[10px] uppercase tracking-[0.4em] font-mono mb-3 ${align}`} style={{ color: "rgba(0,87,183,0.7)" }}>
                {s.n}
              </div>
              <h4 className={`font-display text-2xl mb-3 ${align}`} style={{ color: "#0057B7" }}>
                {rtl ? s.t_ar : s.t_en}
              </h4>
              <p className={`font-body text-sm md:text-base text-charcoal/85 leading-[1.9] ${align}`}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FACT — emblem & map */}
      <div className="relative z-10 mt-16 mx-auto max-w-3xl px-6">
        <div className="relative bg-white overflow-hidden shadow-md" style={{ border: "1px solid rgba(0,87,183,0.14)" }}>
          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] font-mono z-10" style={{ color: "#0057B7" }}>
            {rtl ? "03 · حقيقة" : "03 · Fact"}
          </div>
          <div className="pt-16 pb-8 px-6 flex items-center justify-center bg-gradient-to-b from-cream to-white">
            <img
              src={EMBLEM_MAP}
              alt={rtl ? "شعار وخارطة جمهورية اوكرانيا" : "Emblem and map of the Republic of Ukraine"}
              loading="lazy"
              className="max-h-64 w-auto object-contain drop-shadow-md"
            />
          </div>
          <div className={`px-6 py-4 ${align}`} style={{ borderTop: "1px solid rgba(0,87,183,0.14)" }}>
            <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-1">
              {rtl ? "الشعار والموقع" : "Emblem & Geography"}
            </div>
            <div className="font-display text-xl" style={{ color: "#0057B7" }}>
              {rtl ? "شعار وخارطة جمهورية اوكرانيا" : "Emblem and map of the Republic of Ukraine"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
