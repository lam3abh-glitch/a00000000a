import { article, type CityArticle } from "./article-format";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

export const CUBA_CITY_ARTICLES: Record<string, CityArticle> = {
  havana: article(
    "https://100region.com/?p=12363&amp=1",
    "السياحة في كوبا – مدينة هافانا",
    U("2022/02/img_3578.jpg"),
    String.raw`
P|هافانا واحدة من أجمل مدن كوبا ، وأكبر مدن منطقة البحر الكاريبي ، والتي تضم الكثير من الاماكن السياحية ، وتمتلك العمارة الاسبانية في قالبها الأصلي والتي يعود تاريخها الى القرن 16 الميلادي ، اضافة الى الشواطئ التي تتميز بإطلالاتها الخلابة فتمنح زائريها الكثير من المرح والاستمتاع
IMG|${U("2022/02/img_3578.jpg")}||هافانا
P|وتتعدد أوجه السياحة في هافانا من التسوق في البازارات الرخيصة ، والتجول لرؤية المعالم السياحية الشهيرة ، والتي من بينها المدينة القديمة الباروك التي تعكس مبانيها المزيج المعماري النابض بالحياة ، الحصن البحري ، ومبني الكابيتول الوطنى الذي يعد من أهم المعالم التي أقيمت في عشرينات القرن الماضي ، كما تضم المتاحف المتنوعة التي تحمل الكثير من تاريخ جمهورية كوبا الرائعة
IMG|${U("2022/02/img_4172.jpg")}||هافانا القديمة
IMG|${U("2022/02/img_2998.jpg")}||شوارع هافانا
`,
  ),
  "santiago-de-cuba": article(
    "https://100region.com/?p=12363&amp=1",
    "السياحة في كوبا – مدينة سانتياغو",
    U("2022/02/img_4669.jpg"),
    String.raw`
P|هي ثاني أجمل مدينة سياحية والأكثر ثراء في جزيرة كوبا بعد مدينة هافانا ، وأهم الموانئ الكوبية ، مما جعل منها وجهة اقتصادية هامة في البلاد ، والتي تعد بمثابة متحف طبيعي في الهواء الطلق ، وتتمتع سانتياغو بطبيعة خلابة وإطلالات مذهلة والتي ستأخذك في جولة عبر التاريخ بين معالمها السياحية وأبنيتها التي أقيمت على مزيج بين الطراز القوطي مع الإسباني
IMG|${U("2022/02/img_4669.jpg")}||سانتياغو دي كوبا
P|تضم سانتياغو الشواطئ الرائعة يحيط بها الجبال الشاهقة التي يكسوها اللون الأخضر مما يقدم لوحة فنية من الطبيعة الخلابة ، والعديد من أهم الاماكن السياحية في كوبا ، متاحف أثرية ، مزارات تاريخية ، وغيرها مما يتيح للسائح القيام بالكثير من الأنشطة والحصول على الحد الأقصى من الاستمتاع
IMG|${U("2022/02/img_3034.jpg")}||طبيعة سانتياغو
`,
  ),
  varadero: article(
    "https://100region.com/?p=12363&amp=1",
    "السياحة في كوبا – مدينة فاراديرو",
    U("2022/02/img_2662.jpg"),
    String.raw`
P|تعد فاراديرو هي الأجمل من بين مدن دوله كوبا ، وواحدة من أكبر المنتجعات الشاطئية في منطقة البحر الكريبي ، فضلا عن كونها الأكثر شعبية بين وجهات السياحة في كوبا ، تلك المدينة الساحرة التي تطل على 20 كم من ساحل المحيط الأطلسي ، فيمنحها إطلالات لا مثيل لها
IMG|${U("2022/02/img_2662.jpg")}||فاراديرو
P|كما تعتبر فاراديرو محمية طبيعية مكونة من مسارات متعددة في غابات المانجروف الساحرة ، والكهوف القديمة الشاسعة ، ومن أهم الأماكن التي يصبو اليها محبي الغطس وركوب الماء وغيرها من الرياضات المائية الممتعة ، إضافة الى العديد من المنتزهات ، المتاحف ذات القيمة التاريخية العريقة ، والقصور الأثرية ، علاوة على الأسواق ، المطاعم والمتاجر المتعددة
`,
  ),
};

export const CUBA_CITY_ARTICLES_EN: Record<string, { title: string; values: string[] }> = {
  havana: {
    title: "Tourism in Cuba — Havana",
    values: [
      "Havana is one of the most beautiful cities in Cuba and the largest city in the Caribbean. It holds a great many places to visit and keeps its Spanish architecture in its original form, dating back to the sixteenth century, alongside beaches with stunning views that give visitors plenty of fun and enjoyment.",
      "Havana",
      "Travel in Havana has many faces: shopping in the inexpensive bazaars and wandering to see the famous landmarks, among them the baroque old town whose buildings reflect a lively architectural mix, the sea fortress, and the National Capitol building — one of the most important landmarks raised in the 1920s. The city also holds varied museums carrying much of the wonderful history of the Republic of Cuba.",
      "Old Havana",
      "The streets of Havana",
    ],
  },
  "santiago-de-cuba": {
    title: "Tourism in Cuba — Santiago",
    values: [
      "Santiago is the second most beautiful and the wealthiest tourist city on the island of Cuba after Havana, and the most important Cuban port, which has made it a significant economic destination in the country. It is like an open-air natural museum: Santiago enjoys stunning nature and amazing views that will take you on a journey through history among its sights and its buildings, raised in a blend of Gothic and Spanish styles.",
      "Santiago de Cuba",
      "Santiago has wonderful beaches surrounded by towering mountains covered in green, presenting a painting of magnificent nature, along with many of the most important places to visit in Cuba — archaeological museums, historic sites and more, letting the visitor take on many activities and get the greatest enjoyment.",
      "The nature of Santiago",
    ],
  },
  varadero: {
    title: "Tourism in Cuba — Varadero",
    values: [
      "Varadero is the most beautiful of Cuba's cities and one of the largest beach resorts in the Caribbean, as well as the most popular of Cuba's destinations. This charming city looks out over 20 km of Atlantic coastline, which gives it views like no other.",
      "Varadero",
      "Varadero is also a nature reserve made up of many trails through enchanting mangrove forests and vast ancient caves, and it is one of the top places for lovers of diving, water riding and other enjoyable water sports — in addition to many parks, museums of deep historical value and heritage palaces, as well as markets, restaurants and numerous shops.",
    ],
  },
};
