import type { Lang } from "@/lib/i18n";
import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import ahmadZimbabwe from "@/assets/ahmad-zimbabwe.png.asset.json";
import zimbabweAnthem from "@/assets/zimbabwe-anthem.mp3.asset.json";

const IMG = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const EMBLEM_MAP = IMG("2022/04/img_4426.jpg");
const FLAG = IMG("2022/03/img_3559.jpg");
const SCENES = [
  { src: IMG("2022/04/image-1-2.jpg"), ar: "قرية تقليدية في زيمبابوي", en: "A traditional village in Zimbabwe" },
  { src: IMG("2022/04/image-5.jpg"), ar: "بيت من بيوت الشونا", en: "A Shona homestead" },
  { src: IMG("2022/04/96843c62-7d41-441b-aec6-b1879ae2d3bb.jpg"), ar: "مع أهل زيمبابوي", en: "With the people of Zimbabwe" },
  { src: IMG("2022/04/image-2-2.jpg"), ar: "رقصات شعبية زيمبابوية", en: "Zimbabwean folk dancers" },
  { src: IMG("2022/04/img_4585.jpg"), ar: "سوق البطيخ في زيمبابوي", en: "A melon market in Zimbabwe" },
];

const GREEN = "#1A7A34";
const GOLD = "#FFD200";
const RED = "#D40000";
const INK = "#12160F";
const PAPER = "#FBF7EC";
const STONE = "#6C5F49";

const ABOUT = {
  ar: [
    "دولة افريقية كانت تعرف باسم روديسيا الجنوبية حين كانت مستعمرة بريطانية ، والتي أعلن إيان سميث زعيم الأقلية البيضاء انفصالها واستقلالها عن بريطانيا في سنة 1965 م ، وقد أثارث سياسة سميث العنصرية غضب المجتمع الدولي ، فأعلنت دول عديدة مقاطعة روديسيا اقتصاديا ، وفرضت الأمم المتحدة مقاطعة اقتصادية على حكومة سميث ، ونتج عن السياسة العنصرية التي اتبعتها الأقلية البيضاء تأييد عالمي لجبهة تحرير زيمبابوي، بزعامة موغابي وجوشوا نكومو ، وأخيراً نالت روديسيا إستقلالها تحت حكم الأغلبية الأفريقية ، وعرفت بجمهورية زيمبابوي",
    "زيمبابوي هي بلد غير ساحلية وتقع في جنوب أفريقيا ، ويجري بها نهري زامبيزي ولمبوبو ، يحدها من الجنوب دوله جنوب أفريقيا ، وبوتسوانا من الجنوب الغربي ، وزامبيا من الشمال الغربي ، وموزامبيق من الشرق",
    "تتميز زيمبابوي بتاريخيها ومواقع للعديد من الممالك والإمبراطوريات البارزة ، فضلا عن المسار الرئيسي للهجرة والتجارة لتصبح مستعمرة ترسيم الأراضي الحالية من قبل الشركة البريطانية سيسيل رودس في جنوب أفريقيا خلال عام 1890 ، حتي الحكم الذاتي في جنوب روديسيا في عام 1923 وفي عام 1965 أعلنت الحكومة المحافظة للأقلية البيضاء استقلال روديسيا من جانب واحد ، كما تحملت الدولة الغير معترف بها للعزلة الدولية والحرب الأهلية التي استمرت 15 عاما بين الحكومة والقوى الوطنية السوداء ، وتوجت باتفاقية السلام التي تثبت منح حق التصويت للجميع وسيادة القانون في أبريل 1980 م",
    "زيمبابوي تفتخر بالعديد من مناطق الجذب السياحية الرئيسية ، حيث تقع شلالات فيكتوريا على نهر الزامبيزي ، والتي يتم تقاسمها مع زامبيا ، في الشمال الغربي من زيمبابوي ، وذلك قبل التغييرات الاقتصادية ، فإن الكثير من السياحة لهذه المواقع جاء إلى الجانب زيمبابوي ، ولكن زامبيا الآن هو المستفيد الرئيسي . الحديقة الوطنية فيكتوريا فولز تعمل أيضا في هذا المجال ، وهي واحده من ثمانية متنزهات وطنية رئيسية في زيمبابوي ، وأكبرها هو هوانغي الحديقة الوطنية",
    "بينما المرتفعات الشرقية هي سلسلة من المناطق الجبلية بالقرب من الحدود مع موزامبيق ، توجد أعلى قمة في زيمبابوي Nyangani علي أرتفاع 2593 متر ، وكذلك جبال Bvumba وحديقة نيانغا الوطنية ، بالإضافة إلى عدد من المدن المهمة القديمة التي بنيت بأسلوب فريد من نوعه من الحجر الجاف ، وأشهرها هي أنقاض زيمبابوي العظمى في ماسفينغو ، وتشمل أنقاض أخرى اطلال خامي وزيمبابوي",
    "لقد أصبحت زيمبابوي من مناطق الجذب السياحي المشهورة بسبب أشكالها القديمة والحياة البرية المحلية ، حيث دفن سيسيل رودس وغيرها من الرواد الأبيض مثل يندر ستار جيمسون في هذه التلال في موقع يدعى المشاهدة في العالم",
  ],
  en: [
    "An African country once known as Southern Rhodesia when it was a British colony. Ian Smith, leader of the white minority, declared its separation and independence from Britain in 1965. Smith's racist policy angered the international community, many countries boycotted Rhodesia economically and the United Nations imposed an economic boycott on his government. The white minority's racial policy produced worldwide support for the Zimbabwe liberation front led by Mugabe and Joshua Nkomo, and Rhodesia finally gained independence under African majority rule as the Republic of Zimbabwe.",
    "Zimbabwe is a landlocked country in southern Africa, crossed by the Zambezi and Limpopo rivers. It borders South Africa to the south, Botswana to the south-west, Zambia to the north-west and Mozambique to the east.",
    "Zimbabwe is marked by its history and by the sites of many prominent kingdoms and empires, as well as being a main route of migration and trade. Cecil Rhodes's British company in South Africa demarcated the present lands as a colony in 1890, leading to self-government in Southern Rhodesia in 1923. In 1965 the conservative white-minority government unilaterally declared Rhodesia independent, and the unrecognised state endured international isolation and a fifteen-year civil war between the government and the black nationalist forces, crowned by the peace agreement that established the vote for all and the rule of law in April 1980.",
    "Zimbabwe is proud of many major tourist attractions. Victoria Falls, shared with Zambia, lies on the Zambezi River in the north-west of Zimbabwe. Before the economic changes much of the tourism to these sites came to the Zimbabwean side, but Zambia is now the main beneficiary. Victoria Falls National Park also operates here — one of eight main national parks in Zimbabwe, the largest of which is Hwange National Park.",
    "The Eastern Highlands are a chain of mountainous areas near the border with Mozambique, where Zimbabwe's highest peak, Nyangani, rises to 2,593 metres, along with the Bvumba mountains and Nyanga National Park. There are also a number of important ancient towns built in a unique dry-stone style, the most famous being the ruins of Great Zimbabwe in Masvingo; other ruins include Khami and Zimbabwe.",
    "Zimbabwe has become a famous tourist draw because of its ancient forms and its local wildlife. Cecil Rhodes and other white pioneers such as Leander Starr Jameson are buried in these hills, at a place called World's View.",
  ],
};

const WEATHER = {
  ar: "يتميز مناخ زيمبابوي بالمناخ الجاف الشبيه للمناخ الإستوائي ، وتعتبر افضل أوقات الزيارة لدولة زيمبابوي هذه الشهور أبريل ، مايو ، أغسطس ، وسبتمبر ، حيث تكون ألطف درجات حرارة وأقل هطولا للأمطار فتتراوح درجات الحرارة بها من 23 إلى 26 درجة مئوية ، وينصح بالبعد عن السفر في شهر نوفمبر لأنه من أشد الشهور ارتفاعا للحرارة ، كما ينبغي البعد عن فترة هطول الأمطار التي تبدأ من شهر نوفمبر وتنتهي في شهر مارس",
  en: "Zimbabwe's climate is dry and close to tropical. The best months to visit are April, May, August and September, when temperatures are mildest and rainfall lowest, ranging from 23 to 26 degrees Celsius. Travelling in November is not advised as it is one of the hottest months, and the rainy period from November to March is best avoided.",
};

const LANGUAGE = {
  ar: "هناك 16 لغة تعتبر من اللغات الرسمية والأساسية في زيمبابوي، أهمها اللغة الإنجليزية والشونا والسينديبيلي . وبالرغم من ذلك يتحدث الأنجليزية أقلية تصل إلى أقل من 2.5% من جملة السكان ، وبقية السكان يتحدثون لغات مثل الشونا بنسبة 70% من جملة السكان ، أما المُتحدثين بلغة السينديبيلي بنسبة تُقدر بـ 20%",
  en: "Sixteen languages are official and principal in Zimbabwe, the most important being English, Shona and Sindebele. Even so, fewer than 2.5% of the population speak English; Shona is spoken by about 70% and Sindebele by an estimated 20%.",
};

const TELECOM = {
  ar: "أصبح لدى زيمبابوي مؤخرا توسع سريع جدا في الإتصالات السلكية واللاسلكية ، مما أدى إلى أن الإنترنت أصبح أوفر وأرخص وأسهل وسيلة للإتصال داخل زيمبابوي وخارجها ، ويوجد العديد من شبكات الاتصال والتكنولوجيا الرائدة في زيمبابوي مثل GSM و ECONET و NET ONE و TELECEL",
  en: "Zimbabwe has recently seen very rapid expansion in wired and wireless communications, making the internet the most available, cheapest and easiest way to communicate inside and outside the country. Several leading networks and technologies operate there, such as GSM, ECONET, NET ONE and TELECEL.",
};

const TAGLINE = {
  ar: "أرض الحجر والدخان الذي يرعد .. شلالات فيكتوريا وأنقاض زيمبابوي العظمى",
  en: "Land of stone and the smoke that thunders — Victoria Falls and the ruins of Great Zimbabwe",
};

/** The soapstone Zimbabwe Bird — the national emblem, carved on the Great Zimbabwe walls. */
function ZimBird({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 120 200" aria-hidden className={className} style={style}>
      <g fill="currentColor">
        <path d="M52 22c8-8 22-8 28 2 4 7 2 14-4 18l10 6-12 2c6 10 8 22 6 34-3 18-4 32-2 46l6 32H32l6-34c2-16 0-30-4-44-4-16 0-30 12-40-6-4-8-12 0-18 2-2 4-3 6-4Z" />
        <path d="M66 90c14 6 22 18 24 34-8-12-16-20-26-24l2-10Z" />
        <path d="M24 170h72l8 22H16l8-22Z" />
      </g>
    </svg>
  );
}

/** Dry-stone masonry pattern, after the walls of Great Zimbabwe. */
function StonePattern() {
  return (
    <svg aria-hidden className="absolute inset-0 h-full w-full opacity-[0.09] pointer-events-none" preserveAspectRatio="none">
      <defs>
        <pattern id="zw-stone" width="72" height="24" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="70" height="10" rx="2" fill="none" stroke={STONE} strokeWidth="2" />
          <rect x="-36" y="12" width="70" height="10" rx="2" fill="none" stroke={STONE} strokeWidth="2" />
          <rect x="36" y="12" width="70" height="10" rx="2" fill="none" stroke={STONE} strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#zw-stone)" />
    </svg>
  );
}

export function ZimbabweCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";
  const t = (o: { ar: string; en: string }) => (rtl ? o.ar : o.en);

  const facts: { n: string; title: { ar: string; en: string }; body: { ar: string; en: string } }[] = [
    { n: "03", title: { ar: "الطقس في زيمبابوي", en: "The weather in Zimbabwe" }, body: WEATHER },
    { n: "04", title: { ar: "اللغة في زيمبابوي", en: "Language in Zimbabwe" }, body: LANGUAGE },
    { n: "05", title: { ar: "الاتصالات في زيمبابوي", en: "Communications in Zimbabwe" }, body: TELECOM },
  ];

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: PAPER }}>
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-3"
        style={{
          background: `linear-gradient(90deg, ${GREEN} 0 20%, ${GOLD} 20% 40%, ${RED} 40% 60%, ${INK} 60% 80%, ${GREEN} 80% 100%)`,
        }}
      />

      <StonePattern />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 45% at 100% 0%, rgba(255,210,0,0.28) 0%, transparent 65%), linear-gradient(180deg, transparent 60%, rgba(26,122,52,0.14) 100%)",
        }}
      />
      <ZimBird className="absolute -top-4 -left-6 w-32 md:w-44 pointer-events-none" style={{ color: `${GOLD}55` }} />
      <ZimBird
        className="absolute bottom-6 -right-8 w-28 md:w-40 pointer-events-none"
        style={{ color: `${GREEN}30`, transform: "scaleX(-1)" }}
      />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-7 w-20 h-6 rotate-[7deg] z-20 shadow-sm" style={{ background: "rgba(255,210,0,0.8)" }} />
            <div className="absolute -top-4 right-6 w-16 h-5 rotate-[-8deg] z-20 shadow-sm" style={{ background: "rgba(212,0,0,0.7)" }} />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={ahmadZimbabwe.url}
                alt={rtl ? "أحمد في زيمبابوي" : "Ahmad in Zimbabwe"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-lg" style={{ color: INK, fontFamily: "cursive" }}>
                Zimbabwe · زيمبابوي
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span
            className="inline-block text-white text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[-2deg] mb-6"
            style={{ background: GREEN }}
          >
            {rtl ? "≈ مقدّمة" : "≈ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl leading-snug whitespace-pre-line" style={{ color: INK }}>
            {intro}
          </p>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: `${INK}A8` }}>
            {t(TAGLINE)}
          </p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {[GREEN, GOLD, RED, INK].map((c, i) => (
              <span key={i} className="h-1.5 w-10 rounded-full" style={{ background: c }} />
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
          <span className="h-px flex-1" style={{ background: `${INK}22` }} />
        </div>
        <h2 className={`font-display text-3xl md:text-4xl mb-5 ${align}`} style={{ color: INK }}>
          {rtl ? "جمهورية زيمبابوي" : "The Republic of Zimbabwe"}
        </h2>
        <div className={`space-y-5 text-lg leading-relaxed ${align}`} style={{ color: `${INK}CC` }}>
          {ABOUT[lang].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SCENES.map((s, i) => (
            <figure
              key={i}
              className="overflow-hidden rounded-2xl shadow-md bg-white"
              style={{ border: `5px solid ${[GREEN, GOLD, RED][i % 3]}` }}
            >
              <img src={s.src} alt={rtl ? s.ar : s.en} loading="lazy" className="block w-full h-52 object-cover" />
              <figcaption className={`px-4 py-3 text-sm ${align}`} style={{ color: `${INK}A0` }}>
                {rtl ? s.ar : s.en}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* EMBLEM / FLAG + ANTHEM */}
      <div className="relative z-10 mt-16 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-4" style={{ color: GREEN }}>
            {rtl ? "01 · الشعار والخارطة" : "01 · Emblem & map"}
          </div>
          <div className="overflow-hidden rounded-xl bg-white" style={{ border: `6px solid ${GREEN}` }}>
            <img
              src={EMBLEM_MAP}
              alt={rtl ? "شعار وخارطة جمهورية زيمبابوي" : "Emblem and map of the Republic of Zimbabwe"}
              loading="lazy"
              className="w-full h-64 object-contain bg-white"
            />
          </div>
          <div className={`mt-4 font-display text-xl ${align}`} style={{ color: INK }}>
            {rtl ? "شعار وخارطة جمهورية زيمبابوي" : "Emblem and map of the Republic of Zimbabwe"}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-md flex flex-col text-white" style={{ background: INK }}>
          <ZimBird className="absolute -bottom-6 -right-4 w-40 pointer-events-none" style={{ color: `${GOLD}22` }} />
          <div className={`relative pt-8 px-7 ${align}`}>
            <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-3" style={{ color: GOLD }}>
              {rtl ? "02 · العلم والنشيد" : "02 · Flag & anthem"}
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-5">
              {rtl ? "علم جمهورية زيمبابوي والنشيد الوطني الزيمبابوي" : "The flag of Zimbabwe and the Zimbabwean national anthem"}
            </h3>
            <div className="overflow-hidden rounded-xl border border-white/20 max-w-sm">
              <img
                src={FLAG}
                alt={rtl ? "علم جمهورية زيمبابوي" : "Flag of the Republic of Zimbabwe"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="relative mt-8 pb-8">
            <AnthemPlayer
              src={zimbabweAnthem.url}
              lang={lang}
              title={rtl ? "النشيد الوطني الزيمبابوي" : "National Anthem of Zimbabwe"}
              theme={{
                bg: "bg-white",
                border: "border-white/30",
                buttonBg: "bg-[#1A7A34]",
                buttonText: "text-white",
                buttonHoverBg: "hover:bg-[#D40000]",
                buttonHoverText: "hover:text-white",
                accent: "text-[#1A7A34]",
                title: "text-[#12160F]",
                ping: "border-[#FFD200]",
              }}
            />
          </div>
        </div>
      </div>

      {/* CLIMATE / LANGUAGE / TELECOM */}
      <div className="relative z-10 mt-16 mx-auto max-w-5xl px-6 space-y-6">
        {facts.map((f, i) => (
          <div
            key={f.n}
            className="bg-white rounded-2xl shadow-md p-7"
            style={{ borderInlineStart: `6px solid ${[GOLD, RED, GREEN][i % 3]}` }}
          >
            <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-3" style={{ color: GREEN }}>
              {f.n} · {rtl ? ["المناخ", "اللغة", "الاتصالات"][i] : ["Climate", "Language", "Communications"][i]}
            </div>
            <h3 className={`font-display text-2xl md:text-3xl mb-4 ${align}`} style={{ color: INK }}>
              {t(f.title)}
            </h3>
            <p className={`text-lg leading-relaxed ${align}`} style={{ color: `${INK}CC` }}>
              {t(f.body)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
