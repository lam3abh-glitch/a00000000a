import type { Guide } from "./france-guides";

const U = (p: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${p}?w=1200&ssl=1`;

const mainSites: Guide = {
  slug: "egypt-archaeological-sites",
  title_ar: "أشهر المواقع الأثرية في مصر",
  title_en: "Egypt's most famous archaeological sites",
  kicker_ar: "مواقع أثرية",
  kicker_en: "Archaeological sites",
  image: U("2022/10/image-6.jpg"),
  blocks: [
    { type: "H3", ar: "مفهوم المواقع الأثرية", en: "The concept of archaeological sites", noNumber: true },
    { type: "P", ar: "خلفت الحضارات الغابرة خلفها العديد من الآثار التي بقيت شاهدة عليها ، ودالة على ما كان يتميز به أبناؤها من عمق في التفكير ، وابداع في العمارة ، والفنون ، وفلسفة حياتية عظيمة ، الآثار اجمالا ليست حكرا على منطقة دون المناطق الأخرى ، فهي موجودة في كافة أصقاع المعمورة ، فلا تكاد تخلو دولة ما من معلم أثري هام استطاع أن يخلد حضارة ، وابداعا ، وعظمة", en: "Ancient civilisations left behind many antiquities that still bear witness to them, showing the depth of thought, architectural creativity, arts and great philosophy of life of their people. Antiquities are not confined to one region: they exist all over the world, and hardly any country is without an important archaeological landmark that immortalises a civilisation, a creativity and a greatness." },
    { type: "P", ar: "يمكن تعريف الموقع الأثري على أنه ذلك الموقع الذي يتضمن الدلائل الأثرية ، والتي تتم دراستها ، وفحصها من قبل المختصين في علم الآثار ، ليتم الاستفادة منها لاحقا ، وتوظيفها في العديد من المجالات المختلفة ، حيث تفيد المواقع الأثرية بشكل رئيسي في التعرف على سلوكات الأشخاص الذين تواجدوا يوما ما في الموقع قيد البحث ، والدراسة ، أو أولئك الذين استفادوا منه في حياتهم اليومية ، مما يساعد في التعرف على طبيعة الحياة التي كانت سائدة قديما", en: "An archaeological site can be defined as a place containing archaeological evidence that is studied and examined by specialists in archaeology so it can later be used in many different fields. Archaeological sites mainly help us understand the behaviour of the people who once lived at the site under study, or who used it in their daily lives, which helps us learn about the nature of life in ancient times." },
    { type: "H3", ar: "البحث عن المواقع الأثرية", en: "Searching for archaeological sites", noNumber: true },
    { type: "P", ar: "يعتبر البحث والتنقيب عن المواقع الأثرية من أهم الخطوات المؤدية الى اكتشاف الكنوز الأثرية التي تتضمنها هذه المواقع ، المواقع الأثرية بشكل عام توجد اما على اليابسة ، أو في أعماق البحار ، والمسطحات المائية ، ومن هنا فان بعضها يمتاز بسهولة ايجادها ، حيث تقع في مواقع بارزة من اليابسة ، أو من أماكن التجمعات البشرية ، من جهة أخرى ، فان يجاد بعض المواقع الأثرية يحتاج من العلماء المختصين الى اتباع الطرق العلمية الدقيقة ، وبذل مجهودات كبيرة في سبيل ذلك ، ولعل أبرز هذه الطرق مسح المنطقة المتوقع ايجاد موقع ما فيها سيرا على الأقدام ، الى جانب توظيف الوسائل التقنية الحديثة في ذلك ، كالتصوير الجوي ، والكواشف المعدنية وغيرها", en: "Searching and excavating for archaeological sites is one of the most important steps towards discovering the treasures they contain. Archaeological sites are generally found either on land or in the depths of seas and other bodies of water; some are easy to find because they lie in prominent places on land or near human settlements, while others require specialists to follow precise scientific methods and make great efforts, most notably surveying the expected area on foot alongside modern technical means such as aerial photography and metal detectors." },
    { type: "P", ar: "بعد اكتشاف الموقع الأثري ، يقوم العلماء بتسجيل ملاحظاتهم حوله ، كما ويقومون أيضا بالتقاط الصور له ، ثم رسم الخرائط ، ثم يبدؤون بالتعمق أكثر في محتويات هذا الموقع بالطرق العلمية", en: "After a site is discovered, scholars record their observations about it, take photographs, draw maps, and then begin to examine the contents of the site more deeply through scientific methods." },
    { type: "H3", ar: "المحافظة على المواقع الأثرية", en: "Preserving archaeological sites", noNumber: true },
    { type: "P", ar: "ان واجب المحافظة على المواقع الأثرية من العبث ، والتخريب يعتبر من أولى الواجبات وأكثرها أهمية ، وهذا الواجب غير منوط بجهة معينة دون الجهات الأخرى ، حيث يقع على عاتق الجميع ، لعل الدول والحكومات هي أكثر الجهات تحملا لمسؤولية المحافظة على المواقع الأثرية التي تقع ضمن حدودها ، وذلك من خلال عملها الدوؤب على تنظيفه ، وترتيبه ، وتهيئته لاستقبال الزوار ، الى جانب تعريف العالم عليه ، احياء له ، وجذبا للسياح", en: "The duty of protecting archaeological sites from tampering and vandalism is among the first and most important of duties, and it is not assigned to one party alone — it rests on everyone. States and governments perhaps bear the greatest responsibility for preserving the sites within their borders, through constant work to clean, organise and prepare them to receive visitors, as well as introducing them to the world to revive them and attract travellers." },
    { type: "P", ar: "كما أن المواطنين مسؤولون أيضا عن المواقع الأثرية ، وذلك من خلال عدم العبث بها ، أو تخريبها ، خاصة وأن هذه المواقع تعتبر ارثا وطنيا هاما ، وحساسا ، ويجب ألا تكون في أي وقت من الأوقات عرضة لأنواع العبث المختلفة", en: "Citizens are also responsible for archaeological sites by not tampering with or damaging them, especially since these sites are an important and sensitive national heritage that must never be exposed to any kind of abuse." },
    { type: "H3", ar: "أولا : القاهرة", en: "First: Cairo", noNumber: true },
    {
      type: "CARDS",
      items: [
        { topic: "egypt-site-heliopolis", label_ar: "مصر الجديدة هيليوبوليس", label_en: "Heliopolis", src: U("2022/10/img_3919.jpg") },
        { topic: "muhammad-ali-mosque", label_ar: "قلعة صلاح الدين الايوبي", label_en: "The Citadel of Saladin", src: U("2022/10/img_3915.jpg") },
        { topic: "egypt-site-al-muizz", label_ar: "شارع المعز وتوابعه", label_en: "Al-Muizz Street and its surroundings", src: U("2022/10/img_3956.jpg") },
        { topic: "giza-pyramids", label_ar: "هضبة الجيزة وتوابعها", label_en: "The Giza Plateau and its surroundings", src: U("2022/10/img_3952.jpg") },
        { topic: "egypt-site-al-saliba", label_ar: "شارع الصليبة وتوابعه", label_en: "Al-Saliba Street and its surroundings", src: U("2022/10/img_4096.jpg") },
        { topic: "egypt-site-salah-al-din-square", label_ar: "ميدان صلاح الدين وتوابعه", label_en: "Salah al-Din Square and its surroundings", src: U("2022/10/img_4080.jpg") },
        { topic: "egypt-site-senusret-obelisk", label_ar: "مسلة سنوسرت الأول", label_en: "The Obelisk of Senusret I", src: U("2022/10/img_4146.jpg") },
        { topic: "egypt-site-al-suyufiyya", label_ar: "شارع السيوفية وتوابعه", label_en: "Al-Suyufiyya Street and its surroundings", src: U("2022/10/img_4138.jpg") },
      ],
    },
    { type: "H3", ar: "ثانيا : أسوان", en: "Second: Aswan", noNumber: true },
    {
      type: "CARDS",
      items: [
        { topic: "egypt-site-amada-temples", label_ar: "معابد عمدا وتوابعهم", label_en: "The Amada Temples and their surroundings", src: U("2022/10/img_4034.jpg") },
        { topic: "egypt-site-wadi-al-sebua", label_ar: "معابد وادي السبوع", label_en: "The Wadi al-Sebua Temples", src: U("2022/10/img_4027.jpg") },
        { topic: "egypt-site-philae", label_ar: "آثار فيله", label_en: "The Philae Antiquities", src: U("2022/10/img_4127.jpg") },
        { topic: "egypt-site-abu-simbel", label_ar: "معبد أبو سمبل", label_en: "The Abu Simbel Temple", src: U("2022/10/img_4109.jpg") },
      ],
    },
    { type: "H3", ar: "ثالثا : الاسكندرية", en: "Third: Alexandria", noNumber: true },
    {
      type: "CARDS",
      items: [
        { topic: "egypt-site-pompeys-pillar", label_ar: "عمود دقلديانوس", label_en: "Pompey's Pillar", src: U("2022/10/img_4144.jpg") },
        { topic: "egypt-site-abu-mena", label_ar: "منطقة أبو مينا", label_en: "The Abu Mena area", src: U("2022/10/img_4148.jpg") },
      ],
    },
    { type: "H3", ar: "رابعا : سيناء", en: "Fourth: Sinai", noNumber: true },
    {
      type: "CARDS",
      items: [
        { topic: "egypt-site-saint-catherine", label_ar: "دير سانت كاترين وتوابعه", label_en: "Saint Catherine's Monastery and its surroundings", src: U("2022/10/img_4161.jpg") },
      ],
    },
  ],
};

const stubs: Guide[] = [
  {
    slug: "egypt-site-heliopolis",
    title_ar: "مصر الجديدة هيليوبوليس",
    title_en: "Heliopolis",
    kicker_ar: "مواقع أثرية · القاهرة",
    kicker_en: "Archaeological sites · Cairo",
    image: U("2022/10/img_3919.jpg"),
    blocks: [
      { type: "P", ar: "هذه الصفحة قيد الإعداد وسيتم إضافة تفاصيلها قريباً.", en: "This page is being prepared; its details will be added soon." },
    ],
  },
  {
    slug: "egypt-site-al-muizz",
    title_ar: "شارع المعز وتوابعه",
    title_en: "Al-Muizz Street and its surroundings",
    kicker_ar: "مواقع أثرية · القاهرة",
    kicker_en: "Archaeological sites · Cairo",
    image: U("2022/10/img_3956.jpg"),
    blocks: [
      { type: "P", ar: "هذه الصفحة قيد الإعداد وسيتم إضافة تفاصيلها قريباً.", en: "This page is being prepared; its details will be added soon." },
    ],
  },
  {
    slug: "egypt-site-al-saliba",
    title_ar: "شارع الصليبة وتوابعه",
    title_en: "Al-Saliba Street and its surroundings",
    kicker_ar: "مواقع أثرية · القاهرة",
    kicker_en: "Archaeological sites · Cairo",
    image: U("2022/10/img_4096.jpg"),
    blocks: [
      { type: "P", ar: "هذه الصفحة قيد الإعداد وسيتم إضافة تفاصيلها قريباً.", en: "This page is being prepared; its details will be added soon." },
    ],
  },
  {
    slug: "egypt-site-salah-al-din-square",
    title_ar: "ميدان صلاح الدين وتوابعه",
    title_en: "Salah al-Din Square and its surroundings",
    kicker_ar: "مواقع أثرية · القاهرة",
    kicker_en: "Archaeological sites · Cairo",
    image: U("2022/10/img_4080.jpg"),
    blocks: [
      { type: "P", ar: "هذه الصفحة قيد الإعداد وسيتم إضافة تفاصيلها قريباً.", en: "This page is being prepared; its details will be added soon." },
    ],
  },
  {
    slug: "egypt-site-senusret-obelisk",
    title_ar: "مسلة سنوسرت الأول",
    title_en: "The Obelisk of Senusret I",
    kicker_ar: "مواقع أثرية · القاهرة",
    kicker_en: "Archaeological sites · Cairo",
    image: U("2022/10/img_4146.jpg"),
    blocks: [
      { type: "P", ar: "هذه الصفحة قيد الإعداد وسيتم إضافة تفاصيلها قريباً.", en: "This page is being prepared; its details will be added soon." },
    ],
  },
  {
    slug: "egypt-site-al-suyufiyya",
    title_ar: "شارع السيوفية وتوابعه",
    title_en: "Al-Suyufiyya Street and its surroundings",
    kicker_ar: "مواقع أثرية · القاهرة",
    kicker_en: "Archaeological sites · Cairo",
    image: U("2022/10/img_4138.jpg"),
    blocks: [
      { type: "P", ar: "هذه الصفحة قيد الإعداد وسيتم إضافة تفاصيلها قريباً.", en: "This page is being prepared; its details will be added soon." },
    ],
  },
  {
    slug: "egypt-site-amada-temples",
    title_ar: "معابد عمدا وتوابعهم",
    title_en: "The Amada Temples and their surroundings",
    kicker_ar: "مواقع أثرية · أسوان",
    kicker_en: "Archaeological sites · Aswan",
    image: U("2022/10/img_4034.jpg"),
    blocks: [
      { type: "P", ar: "هذه الصفحة قيد الإعداد وسيتم إضافة تفاصيلها قريباً.", en: "This page is being prepared; its details will be added soon." },
    ],
  },
  {
    slug: "egypt-site-wadi-al-sebua",
    title_ar: "معابد وادي السبوع",
    title_en: "The Wadi al-Sebua Temples",
    kicker_ar: "مواقع أثرية · أسوان",
    kicker_en: "Archaeological sites · Aswan",
    image: U("2022/10/img_4027.jpg"),
    blocks: [
      { type: "P", ar: "هذه الصفحة قيد الإعداد وسيتم إضافة تفاصيلها قريباً.", en: "This page is being prepared; its details will be added soon." },
    ],
  },
  {
    slug: "egypt-site-philae",
    title_ar: "آثار فيله",
    title_en: "The Philae Antiquities",
    kicker_ar: "مواقع أثرية · أسوان",
    kicker_en: "Archaeological sites · Aswan",
    image: U("2022/10/img_4127.jpg"),
    blocks: [
      { type: "P", ar: "هذه الصفحة قيد الإعداد وسيتم إضافة تفاصيلها قريباً.", en: "This page is being prepared; its details will be added soon." },
    ],
  },
  {
    slug: "egypt-site-abu-simbel",
    title_ar: "معبد أبو سمبل",
    title_en: "The Abu Simbel Temple",
    kicker_ar: "مواقع أثرية · أسوان",
    kicker_en: "Archaeological sites · Aswan",
    image: U("2022/10/img_4109.jpg"),
    blocks: [
      { type: "P", ar: "هذه الصفحة قيد الإعداد وسيتم إضافة تفاصيلها قريباً.", en: "This page is being prepared; its details will be added soon." },
    ],
  },
  {
    slug: "egypt-site-pompeys-pillar",
    title_ar: "عمود دقلديانوس",
    title_en: "Pompey's Pillar",
    kicker_ar: "مواقع أثرية · الاسكندرية",
    kicker_en: "Archaeological sites · Alexandria",
    image: U("2022/10/img_4144.jpg"),
    blocks: [
      { type: "P", ar: "هذه الصفحة قيد الإعداد وسيتم إضافة تفاصيلها قريباً.", en: "This page is being prepared; its details will be added soon." },
    ],
  },
  {
    slug: "egypt-site-abu-mena",
    title_ar: "منطقة أبو مينا",
    title_en: "The Abu Mena area",
    kicker_ar: "مواقع أثرية · الاسكندرية",
    kicker_en: "Archaeological sites · Alexandria",
    image: U("2022/10/img_4148.jpg"),
    blocks: [
      { type: "P", ar: "هذه الصفحة قيد الإعداد وسيتم إضافة تفاصيلها قريباً.", en: "This page is being prepared; its details will be added soon." },
    ],
  },
  {
    slug: "egypt-site-saint-catherine",
    title_ar: "دير سانت كاترين وتوابعه",
    title_en: "Saint Catherine's Monastery and its surroundings",
    kicker_ar: "مواقع أثرية · سيناء",
    kicker_en: "Archaeological sites · Sinai",
    image: U("2022/10/img_4161.jpg"),
    blocks: [
      { type: "P", ar: "هذه الصفحة قيد الإعداد وسيتم إضافة تفاصيلها قريباً.", en: "This page is being prepared; its details will be added soon." },
    ],
  },
];

export const egyptSitesGuides: Guide[] = [mainSites, ...stubs];
