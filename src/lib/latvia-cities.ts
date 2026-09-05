import { article, type CityArticle } from "./article-format";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

export const LATVIA_CITY_ARTICLES: Record<string, CityArticle> = {
  riga: article(
    "https://100region.com/?p=11798&amp=1",
    "السياحة في لاتفيا – ريغا",
    U("2022/08/img_1831.jpg"),
    String.raw`
P|ريغا هي عاصمة لاتفيا وأكبر المدن في لاتفيا ، وهي من أشهر وأفضل الوجهات السياحية التي يقصدها السياح في لاتفيا بإستمرار ، وتم تحديد المركز التاريخي بها كموقع للتراث العالمي لمنظمة اليونسكو ، وفي عام 2014 م تم إعلان ريجا كعاصمة للثقافة الأوروبية ، لإستضافتها العديد من الأحداث الثقافية الهامة والدولية
P|تقدم ريجا لزائريها الإستمتاع بممارسة مجموعة متنوعة من الأنشطة الترفيهية ، أهمها إستكشاف البلدة القديمة المُسجلة في منظمة اليونسكو، فضلًا عن التجول في شوارعها المُتعرجة والأحجار المرصوفة بالحصى ، ومشاهدة الفن الحديث في المباني الحضارية ، علاوة على زيارة المتاحف ، ومشاهدة نصب الحرية والكنائس ، والتنزه في الحدائق الوطنية ذات المساحات الخضراء الواسعة
IMG|${U("2022/08/img_1831.jpg")}
H5|قرية كولديغا
P|تتمتع قرية كولديغا بالعديد من المقومات السياحية الجاذبة في لاتفيا . فضلًا على شهرتها في جميع أنحاء البلاد يهندستها المعمارية الساحرة ، كما تتيح قرية كولديغا لزائريها إمكانية إستكشاف المعالم التاريخية البارزة مثل المدينة القديمة ، وقلعة كولديغا التي تعود للقرنين السابع عشر والثامن عشر، وكذلك التنزه حول نهر ألكسوبايت ، الذي يوفر العديد من المواقع التي تستحق الزيارة ومنها فينتا رابيد ، الذي يعتبر أوسع منحدرات طبيعية في أوروبا ، علاوة على إستكشاف أطول شلال في لاتفيا الذي يبلغ إرتفاعه تقريباً 4.5 متراً، والإستمتاع بالسباقات حول جسر كولديغا المبني من الطوب ، وغيرها الكثير من الأنشطة الممتعة
H5|قرية بافيلوستا
P|هي منطقة ساحلية دافئة في لاتفيا ، ومن أهم الوجهات السياحية البارزة في البلاد ، لما تتمتع به من مناخ معتدل طوال العام فهي أكثر الجهات المشمسة في لاتفيا ، وتتنوع الأنشطة الترفيهية والألعاب الرياضية المثيرة في قرية بافيلوستا ، فهي مركزا هاما لصيد الأسماك ، فتتيح لك تناول أفضل وألذ المأكولات البحرية الطازجة أو المدخنة ، بالطريقة اللاتفية التقليدية الشهية ، فضلًا على الإسترخاء حول الشاطئ ، والقيام بالجولات البحرية الممتعة ، والتأمل في طبيعة القرية الخيالية ، فهي مدينة رائعة ننصحك بزيارتها
IMG|${U("2022/08/img_1832.jpg")}
`,
  ),
};

export const LATVIA_CITY_ARTICLES_EN: Record<string, { title: string; values: string[] }> = {
  riga: {
    title: "Tourism in Latvia — Riga",
    values: [
      "Riga is the capital of Latvia and its largest city, and one of the most famous and finest destinations that travellers to Latvia visit again and again. Its historic centre is inscribed as a UNESCO World Heritage Site, and in 2014 Riga was named European Capital of Culture for hosting many important international cultural events.",
      "Riga offers its visitors a wide variety of leisure activities, foremost exploring the UNESCO-listed Old Town, wandering its winding cobbled streets, seeing modern art inside its civic buildings, visiting the museums, seeing the Freedom Monument and the churches, and strolling through the national parks with their wide green spaces.",
      "Riga",
      "The village of Kuldiga",
      "Kuldiga enjoys many attractive tourist assets in Latvia. Besides being famous throughout the country for its charming architecture, Kuldiga lets visitors explore outstanding historical landmarks such as the old town and Kuldiga castle dating from the seventeenth and eighteenth centuries, as well as walking along the Alekšupīte river, which offers many places worth visiting including Venta Rapid, considered the widest natural waterfall in Europe. You can also see the tallest waterfall in Latvia, roughly 4.5 metres high, and enjoy the races around the brick-built Kuldiga bridge, along with many other enjoyable activities.",
      "The village of Pavilosta",
      "A warm coastal area of Latvia and one of the country's most prominent destinations, thanks to a mild climate all year round that makes it the sunniest place in Latvia. Leisure activities and exciting sports are varied in Pavilosta, an important fishing centre, so you can eat the best and tastiest fresh or smoked seafood prepared in the delicious traditional Latvian way, as well as relaxing on the beach, taking enjoyable boat trips and contemplating the village's dreamlike nature. It is a wonderful town we recommend you visit.",
      "Pavilosta",
    ],
  },
};
