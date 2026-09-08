import type { Guide } from "./france-guides";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?w=1200&ssl=1`;

const places: Guide = {
  slug: "argentina-places",
  title_ar: "أماكن سياحية متفرقة في الأرجنتين",
  title_en: "Scattered attractions across Argentina",
  kicker_ar: "أماكن سياحية",
  kicker_en: "Attractions",
  image: U("2022/08/img_1210.jpg"),
  blocks: [
    { type: "H3", ar: "شلالات إجوازو", en: "The Iguazú Falls", noNumber: true },
    { type: "IMG", src: U("2022/08/img_1210.jpg"), cap_ar: "شلالات إجوازو", cap_en: "The Iguazú Falls", size: "compact" },
    {
      type: "P",
      ar: "شلالات إجوازو المذهلة على طول حدود الأرجنتين مع البرازيل ، مع منتزه إجوازو الوطني على الجانب الأرجنتيني ومنتزه إيغواسو الوطني على الجانب البرازيلي ، هذا وتعتبر هذه الشلالات الضخمة المحمية كموقع تراث عالمي لليونسكو واحدة من أروع المعالم السياحية في أمريكا الجنوبية ، يمكن للزوار الاقتراب تماما من السقوط المدوية بفضل شبكة من الممرات التي يسهل الوصول إليها ومنصات المشاهدة المصممة لتوفير أفضل المناظر الممكنة ، بما في ذلك بعض المناظر في الجزء السفلي من الشلالات ، وهي منطقة تعرف باسم حلق الشيطان",
      en: "The astonishing Iguazú Falls run along Argentina's border with Brazil, with Iguazú National Park on the Argentine side and Iguaçu National Park on the Brazilian side. Protected as a UNESCO World Heritage site, these vast falls are one of the finest attractions in South America. Visitors can get right up to the thundering cascades thanks to a network of accessible walkways and viewing platforms designed to give the best possible views, including some at the lower part of the falls in the area known as the Devil's Throat.",
    },
    {
      type: "P",
      ar: "لذا تعتبر هذه الشلالات من أهم الاماكن السياحية في الارجنتين ، ويتكون إجوازو من 150 الى 300 شلال فردي على طول حافته التي يبلغ طولها ثلاثة كيلومترات تقريبا ، وهو رقم يتغير وفقا للموسم ، ويتراوح ارتفاعه بين 60 الى 82 مترا وكل منها مذهل مثل الموسم التالي ، يخدمها مطار دولي في الأرجنتين (وواحد في البرازيل المجاورة) ، لذا من السهل نسبيا أن تقوم بعمل زيارة خاصة اذا كنت مسافرا من بوينس آيريس",
      en: "These falls are therefore among the most important sights in Argentina. Iguazú is made up of 150 to 300 individual cascades along a rim nearly three kilometres long — a number that shifts with the season — and their height ranges between 60 and 82 metres, each as astonishing as the next. An international airport in Argentina serves them (and another in neighbouring Brazil), so a visit is relatively easy if you are travelling from Buenos Aires.",
    },
    { type: "IMG", src: U("2022/08/img_2024.jpg"), cap_ar: "شلالات إجوازو", cap_en: "The Iguazú Falls", size: "compact" },
    { type: "H3", ar: "نهر بيريتو مورينو الجليدي", en: "The Perito Moreno Glacier", noNumber: true },
    { type: "IMG", src: U("2022/08/img_1212.jpg"), cap_ar: "نهر بيريتو مورينو الجليدي", cap_en: "The Perito Moreno Glacier", size: "compact" },
    {
      type: "P",
      ar: "المركز الرئيسي للسياح الذين يزورون موقع التراث العالمي لليونسكو في منتزه لوس جلاسياريس الوطني في باتاغونيا ، توفر بلدة إل كالافاتي الصغيرة الكثير من خيارات الإقامة ووسائل الراحة الأخرى للزوار",
      en: "The main base for visitors to the UNESCO World Heritage site of Los Glaciares National Park in Patagonia: the small town of El Calafate offers plenty of accommodation and other comforts for travellers.",
    },
    {
      type: "P",
      ar: "هنا ينظم معظم الزوار إلى الرحلات لمشاهدة الأنهار الجليدية الشهيرة في المنتزه ، وعلى الأخص نهر بيريتو مورينو الجليدي المذهل ، وهو عبارة عن تكوين جليدي ضخم يبلغ طوله 30 كيلومترا ، وثالث أكبر محمية للمياه العذبة في العالم ، على بعد 78 كيلومترا فقط من وسط المدينة ، سميت على اسم مستكشف من القرن التاسع عشر ، وهي رحلة تستغرق ساعتين فقط من El Calafate إلى مركز الزوار الكبير في النهر الجليدي ، ومن هنا على بعد مسافة قصيرة سيرا على الأقدام من النهر الجليدي",
      en: "Here most visitors join trips to see the park's famous glaciers, above all the astonishing Perito Moreno — a vast ice formation 30 kilometres long and the third largest freshwater reserve on earth, only 78 kilometres from the town centre. Named after a nineteenth-century explorer, it is a two-hour journey from El Calafate to the glacier's large visitor centre, from where the ice is a short walk away.",
    },
    { type: "IMG", src: U("2022/08/img_1213.jpg"), cap_ar: "نهر بيريتو مورينو الجليدي", cap_en: "The Perito Moreno Glacier", size: "compact" },
    { type: "H3", ar: "حديقة تييرا ديل فويجو الوطنية", en: "Tierra del Fuego National Park", noNumber: true },
    { type: "IMG", src: U("2022/08/img_1214.jpg"), cap_ar: "حديقة تييرا ديل فويجو الوطنية", cap_en: "Tierra del Fuego National Park", size: "compact" },
    {
      type: "P",
      ar: "الحديقة عبارة عن منطقة ضخمة جدا تبلغ المساحة الخاصة بها حوالي 156000 فدان وتمتد حدود هذه الحديقة على طول الطريق من قناة بيغل وتنتهي عند الحدود التشيلية ، ومن الشمال إلى لاغو كامي ، ويحب المشاهد أن يقومون بزيارة هذه الحديقة وذلك من أجل التمتع بالمناظر الخلابة الجميلة التي توجد بهذه الحديقة من الأنهار والبحيرات والقمم الجليدية وغيرها",
      en: "The park is an enormous area of about 156,000 acres, stretching all the way from the Beagle Channel to the Chilean border, and north to Lago Kami. Visitors love it for its breathtaking scenery — rivers, lakes, icy peaks and much more.",
    },
    { type: "H3", ar: "جزيرة فوكلاند", en: "The Falkland Islands", noNumber: true },
    {
      type: "P",
      ar: "تعتبر هذه الجزيرة من أشهر جزر أمريكا الجنوبية السياحية ، وهي عبارة عن جزيرة تتبع للمملكة المتحدة داخليا ، وتقع في الخارج في الجزء الجنوبي من المحيط الأطلسي ، كما تقع على مسافة تصل إلى حوالي 300 ميل (480 كيلومتر) في الجزء الشمالي الشرقي من الطرف الجنوبي لأمريكا الجنوبية ، وتقع على بعد نفس المسافة من شرق مضيق ماجلان الشهير ، وهي جزيرة مميزة حيث من خلالها الاستمتاع برؤية الجبال الثلجية والبطاريق الجميلة التي يحبها الجميع",
      en: "One of the best-known tourist islands of South America, internally a United Kingdom territory, lying out in the southern Atlantic Ocean about 300 miles (480 km) north-east of the southern tip of South America and the same distance east of the famous Strait of Magellan. It is a remarkable place, where you can enjoy the sight of icebergs and the beautiful penguins everyone loves.",
    },
    { type: "IMG", src: U("2022/08/img_1216.jpg"), cap_ar: "جزيرة فوكلاند", cap_en: "The Falkland Islands", size: "compact" },
  ],
};

const language: Guide = {
  slug: "argentina-language",
  title_ar: "اللغة في الأرجنتين",
  title_en: "Languages of Argentina",
  kicker_ar: "لغة وثقافة",
  kicker_en: "Language & culture",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
  blocks: [
    {
      type: "P",
      ar: "يتحدث سكان الارجنتين أكثر من لغة ولكن اللغة المسيطرة على هذه الدولة هي اللغة الإسبانية ، حيث تحتل هذه الدولة المركز الرابع من حيث التحدث بهذه اللغة ، ومن اللغات التي يتم التحدث بها في هذه الدولة :",
      en: "Argentines speak more than one language, but the dominant one is Spanish — the country ranks fourth in the world for Spanish speakers. Among the languages spoken there are:",
    },
    { type: "H3", ar: "اللغة الاسبانية", en: "Spanish", noNumber: true },
    {
      type: "P",
      ar: "تعتبر هذه اللغة الأكثر شهرة في هذه الدولة حيث تحتل المركز الأول وذلك لأنها كانت مستعمرة إسبانية قديماً ، ويتم استخدام هذه اللغة في نظام التعليم وجميع المكاتب والجهات الحكومية كما يتم التحدث بها من قبل وسائل الإعلام الرئيسية التي توجد في تلك البلد",
      en: "This is the country's best-known language and ranks first, because Argentina was once a Spanish colony. It is used throughout the education system and in all government offices and bodies, and it is the language of the country's main media outlets.",
    },
    { type: "H3", ar: "اللغة الايطالية", en: "Italian", noNumber: true },
    {
      type: "P",
      ar: "تحتل هذه اللغة المركز الثاني في هذه الدولة حيث يتحدث بها أكثر من 1.5 مليون نسمة كلغة أساسية ، ويرجع السبب في ذلك إلى وجود نسبة كبيرة من الهجرات الايطالية التي تتجه إلى هذه الدولة ، وذلك بالأخص بعد تدهور الاقتصاد الإيطالي في أوائل القرن التاسع عشر هذا الأمر الذي دفع الكثير من سكان ايطاليا إلى الهجرة إلى دولة الارجنتين",
      en: "Italian ranks second, spoken by more than 1.5 million people as a first language. The reason is the large share of Italian migration to the country, especially after the decline of the Italian economy in the early nineteenth century, which pushed many Italians to emigrate to Argentina.",
    },
    { type: "H3", ar: "اللغة العربية الشامية", en: "Levantine Arabic", noNumber: true },
    {
      type: "P",
      ar: "تلك اللغة التي يتحدث بها المهاجرون السوريون والشاميون والقادمين من فلسطين والدول التي تقع على جانب البحر الأبيض المتوسط ويتحدث بهذه اللغة حوالي مليون نسمة تقريبا من السكان الأرجنتينين",
      en: "This is the language of Syrian and Levantine migrants and those who came from Palestine and the countries along the Mediterranean; roughly a million Argentines speak it.",
    },
  ],
};

export const argentinaGuides: Guide[] = [places, language];
