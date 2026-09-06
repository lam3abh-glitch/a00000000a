import type { Guide } from "./france-guides";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

export const armeniaGuides: Guide[] = [
  {
    slug: "foods",
    title_ar: "أكلات واطباق أرمينية",
    title_en: "Armenian foods and dishes",
    kicker_ar: "المطبخ الأرميني",
    kicker_en: "Armenian cuisine",
    image: U("2022/03/img_3602.jpg"),
    blocks: [
      {
        type: "P",
        ar: "تأثر الطعام الأرميني بالدول المجاورة ، فبالاضافة الى الحيوانات والمحاصيل المزروعة بأراضيها ، فان المطبخ الأرميني غني بالخضروات واللحوم والأسماك ، ويشكل الباذنجان ولحم الضأن واللافاش ( الخبز المسطح ) المكونات الأساسية للمأكولات الأرمينية ، علاوة على القمح المكسور أو البرغل بدلا من الأرز والذرة",
        en: "Armenian food has been shaped by neighbouring countries. Alongside the animals and crops raised on its land, Armenian cooking is rich in vegetables, meat and fish. Aubergine, lamb and lavash (flatbread) form the basic ingredients of Armenian cuisine, together with cracked wheat or bulgur instead of rice and corn.",
      },
      { type: "H3", ar: "دولما", en: "Dolma" },
      {
        type: "P",
        ar: "هي عبارة عن أوراق العنب الطازجة الملفوفة بمزيج من اللحم المفروم والأرز والأعشاب والبهارات اللذيذة",
        en: "Fresh vine leaves rolled around a mixture of minced meat, rice, herbs and delicious spices.",
      },
      { type: "H3", ar: "خوروفاتس", en: "Khorovats" },
      {
        type: "P",
        ar: "من الأكلات الأرمينية اللذيذة وهي عبارة عن قطع اللحوم المشوية على الأسياخ",
        en: "One of the tastiest Armenian dishes — pieces of meat grilled on skewers.",
      },
      { type: "H3", ar: "لافاش", en: "Lavash" },
      {
        type: "P",
        ar: "وهو عبارة عن خبز رقيق ومسطح يشبه التورتيلا المكسيكية ، وهو المكون الأكثر شيوعا في المطبخ الأرميني",
        en: "A thin flatbread resembling the Mexican tortilla, and the most common ingredient in Armenian cooking.",
      },
      { type: "H3", ar: "غاباما", en: "Ghapama" },
      {
        type: "P",
        ar: "أشهر أطباق عيد الميلاد في أرمينيا ، وهو عبارة عن يقطين محشو بالأرز المسلوق والفواكه المجففة مع المكسرات",
        en: "The most famous Christmas dish in Armenia — a pumpkin stuffed with boiled rice, dried fruit and nuts.",
      },
      { type: "H3", ar: "خاش", en: "Khash" },
      {
        type: "P",
        ar: "وهو مصنوع من خروف مسلوق أو أجزاء بقرة تشمل القدمين والرأس ، ويستخدم بعض الأجزاء الأخرى من البقرة ، مثل المعدة في الوصفة ، وهو أحد أهم الأطباق الأرمينية التقليدية",
        en: "Made from boiled lamb or cow parts including the feet and head, with some other parts of the cow, such as the stomach, used in the recipe. It is one of the most important traditional Armenian dishes.",
      },
      { type: "H3", ar: "هريسة", en: "Harissa" },
      {
        type: "P",
        ar: "عبارة عن عصيدة سميكة مصنوعة من القمح المحمص أو المجفف واللحوم الدهنية بلحم الضأن أو الدجاج",
        en: "A thick porridge made of roasted or dried wheat with fatty lamb or chicken.",
      },
      { type: "H3", ar: "باستورما", en: "Basturma" },
      {
        type: "P",
        ar: "عبارة عن لحم بقري مدخن مجفف بالهواء ومتبل من خلال ترك اللحم المملح يجف لمدة تصل الى 15 يوما ، بعد ذلك يغطى اللحم بمعجون يتكون من مزيج من التوابل المختلفة بما في ذلك الكمون والثوم والبابريكا الساخنة والفلفل",
        en: "Air-dried, seasoned smoked beef: the salted meat is left to dry for up to 15 days, then coated in a paste of various spices including cumin, garlic, hot paprika and pepper.",
      },
      { type: "H3", ar: "إيتش", en: "Eech" },
      {
        type: "P",
        ar: "هو طبق جانبي مصنوع من البرغل ، ويمكن تناوله دافئ أو بارد",
        en: "A side dish made of bulgur, eaten either warm or cold.",
      },
      { type: "H3", ar: "بيوريك", en: "Boereg" },
      {
        type: "P",
        ar: "هو عبارة عن فطائر من الجبن المحشو في معجنات فيلو ، وهناك نوع آخر من تلك الفطائر بالسبانخ أو اللحم بدلا من حشوة الجبن",
        en: "Pastries of cheese wrapped in filo, with another version filled with spinach or meat instead of cheese.",
      },
      { type: "H3", ar: "المشروبات", en: "Drinks" },
      {
        type: "P",
        ar: "المشروب الأكثر شعبية هو السورش ( القهوة الأرمنية ) ، والشاي ، و عصائر الفاكهة الطازجة",
        en: "The most popular drink is soorj (Armenian coffee), along with tea and fresh fruit juices.",
      },
    ],
  },
  {
    slug: "internet",
    title_ar: "الاتصالات والانترنت",
    title_en: "Telecoms and internet",
    kicker_ar: "قبل السفر",
    kicker_en: "Before you travel",
    image: U("2022/03/img_3743.jpg"),
    blocks: [
      {
        type: "P",
        ar: "تتمتع أرمينيا بقطاع اتصالات متطور وحديث للغاية ، فيوجد بها العديد من شركات الاتصالات المميزة التي تقدم العديد من الخدمات ، كما تتوفر بطاقات sim في جميع أنحاء البلاد ، ومن أهم شركات الاتصالات في أرمينيا هي :",
        en: "Armenia has a highly developed, modern telecoms sector with many good operators offering a wide range of services, and SIM cards are available all over the country. The most important operators in Armenia are:",
      },
      { type: "H3", ar: "شركة يو كوم Ucom", en: "Ucom" },
      {
        type: "P",
        ar: "هي واحدة من الشركات الرئيسية في أرمينيا ، التي تقدم العديد من خدمات الاتصال والانترنت ، علاوة على العروض المثالية على الباقات للمكالمات والانترنت ، وتتميز بأسعارها المناسبة للجميع",
        en: "One of the main operators in Armenia, offering many calling and internet services along with excellent bundles for calls and data, at prices that suit everyone.",
      },
      { type: "H3", ar: "شركة بيلين أرمينيا Beeline Armenia", en: "Beeline Armenia" },
      {
        type: "P",
        ar: "وهي من أهم شركات الاتصال السلكي واللاسلكي في أرمينيا ، وتوفر الشركة مجموعة متنوعة من خدمات الانترنت ذات السرعة العالية للعملاء ، وتتوفر بطاقات sim الخاصة بها بثلاثة لغات الأرمينية والروسية والإنجليزية",
        en: "One of the most important fixed and wireless operators in Armenia, providing customers with a varied range of high-speed internet services. Its SIM cards come in three languages: Armenian, Russian and English.",
      },
      { type: "H3", ar: "شركة فيفا كول أم تي أس VivaCell MTS", en: "VivaCell MTS" },
      {
        type: "P",
        ar: "هي من أكبر الشركات المشغلة للاتصالات في أرمينيا ، فهي تقدم العديد من الخدمات المتطورة والحديثة ذات التقنيات العالية ، وتغطي شبكة 4G مساحة واسعة من أراضي أرمينيا ، وتتوفر بطاقات التعريف في كل أرجاء البلاد ، وبأسعار معقولة وخدمات وعروض مميزة جدا",
        en: "One of the largest telecom operators in Armenia, offering many advanced, modern, high-tech services. Its 4G network covers a wide area of Armenian territory, SIM cards are available throughout the country, and prices are reasonable with very good services and offers.",
      },
    ],
  },
];
