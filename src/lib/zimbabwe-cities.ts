import { article, type CityArticle } from "./article-format";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

export const ZIMBABWE_CITY_ARTICLES: Record<string, CityArticle> = {
  harare: article(
    "https://100region.com/?p=12110",
    "السياحة في زيمبابوي – هراري",
    U("2022/09/img_2175.jpg"),
    String.raw`
P|تعد هراري أكبر مدن زيمبابوي وهي العاصمة ، وتضم العديد من المناظر الطبيعية الساحرة ، والمزارات السياحية الرائعة ، فهي موطنا للعديد من المتنزهات ويُطلق عليها حديقة زيمبابوي أو مدينة الشمس المُشرقة ، وهي تقع في الجزء الشمالي الشرقي من زيمبابوي
P|تتيح هراري لزائريها القيام بالعديد من الأنشطة الترفيهية الرائعة ، وأهمها رحلات السفاري في موكوفيسي وودلاندز ، ومشاهدة الحيوانات البرية ومطاردتها من صغار الفيلة والأسود ، فضلا عن زيارة حديقة كويمبا شيري للطيور ، وكذلك القيام برحلة نهارية الى كهوف شونا ، ولا تنسى الذهاب الى حديقة تشابونجو للنحت ، وحدائق هراري ، والمعرض الوطني ، علاوة على الحدائق الوطنية العشبية والنباتية لحماية الزهور والأشجار ، وغيرها الكثير من المزارات السياحية الجميلة
IMG|${U("2022/09/img_2175.jpg")}||هراري عاصمة زيمبابوي
`,
  ),
  "victoria-falls": article(
    "https://100region.com/?p=12112",
    "السياحة في زيمبابوي – شلالات فيكتوريا",
    U("2022/05/img_6650.jpg"),
    String.raw`
IMG|${U("2022/05/img_6650.jpg")}||شلالات فيكتوريا
H5|موقع شلالات فكتوريا
P|تقع شلالات فيكتوريا في منتصف الطريق على طول مجرى نهر زمبيزي ، وعلى الحدود بين زامبيا في الشمال وزيمبابوي في الجنوب ، حيث يبلغ عرض وعمق الشلال ضعفي عرض وعمق شلالات نياجارا ، ويبلغ متوسط تدفقه حوالي 935 متر مكعب في الثانية ، كما يصل ارتفاع الشلالات إلى ما يقارب من 108.2 م ، ويبلغ اتساع هذه الشلالات 1.2 كم تقريبا ، وهو يعرف باسم موزي أويا تونيا من قبل القبائل المحلية
H5|التنوع البيولوجي لشلالات فكتوريا
P|تمتلك منطقة شلالات فيكتوريا والمناطق المحيطة بها العديد من المتنزهات الوطنية ، حيث تشمل البيئات فيها على غابات خشب الساج ، وغابات السافانا ، كما تزدهر الغابات المطيرة بجانب الشلال مباشرة ، والتي يتم تغذيتها برذاذ الماء والرطوبة العالية ، يحتوي النهر الموجود أسفل الشلالات على ما يقارب من تسعة وثلاثين نوعاً من الأسماك ، وما يقارب تسعة وثمانين نوعا من الأسماك الموجودة في النهر المزوّد لمياه الشلال في الأعلى ، وتعد الفهود، والجاموس ، والظباء ، والأسود، والقردة ، والزرافات ، والحمار الوحشي ، وغيرها الكثير من أنواع الحيوانات العديدة التي تتواجد في شلالات فيكتوريا والمتنزهات المحيطة بها
IMG|${U("2022/05/img_6651.jpg")}||شلالات فيكتوريا
IMG|${U("2022/05/img_6652.jpg")}||شلالات فيكتوريا
P|تتمتع شلالات فيكتوريا بالمناظر الطبيعية التي تجذب العديد من الزائرين ، ومن الحقائق التي يمكن التعرف عليها عن هذه الشلالات انها تصنف شلالات فيكتوريا بأنها واحدة من عجائب الدنيا السبع الطبيعية في العالم ، وتشكل الشلالات أكبر جدار من المياه المتساقطة في العالم ، والذي يضم خمس شلالات ، ومن ضمنها شلالات الملاك ، وشلالات حدوة الحصان في زيمبابوي ، وشلال الشتق الشرقي في زامبيا ، وشلالات قوس قزح ، كما ويرتفع الضباب الملون للشلالات ما يزيد عن 400 متر ، ويمكن رؤيته من مسافة تصل إلى ثماني وأربعين كيلومتر ، يذكر ان شهر نيسان أفضل وقت لزيارة الشلالات بسبب ذروة موسم الفيضان
`,
  ),
};

export const ZIMBABWE_CITY_ARTICLES_EN: Record<string, { title: string; values: string[] }> = {
  harare: {
    title: "Tourism in Zimbabwe — Harare",
    values: [
      "Harare is the largest city of Zimbabwe and its capital. It holds many enchanting natural landscapes and wonderful tourist attractions, and being home to numerous parks it is called the garden of Zimbabwe, or the city of the shining sun. It lies in the north-eastern part of Zimbabwe.",
      "Harare offers its visitors many wonderful leisure activities, the most important being safari trips in Mukuvisi Woodlands, watching and tracking wild animals such as young elephants and lions, as well as visiting Kuimba Shiri bird park, taking a day trip to the Shona caves, and not forgetting Chapungu sculpture park, the Harare Gardens, the National Gallery, and the national grass and botanical gardens that protect flowers and trees — along with many other beautiful attractions.",
    ],
  },
  "victoria-falls": {
    title: "Tourism in Zimbabwe — Victoria Falls",
    values: [
      "The location of Victoria Falls",
      "Victoria Falls lies halfway along the course of the Zambezi River, on the border between Zambia to the north and Zimbabwe to the south. The falls are twice the width and depth of Niagara Falls, with an average flow of about 935 cubic metres per second. Their height reaches roughly 108.2 m and their span about 1.2 km. Local tribes know them as Mosi-oa-Tunya.",
      "The biodiversity of Victoria Falls",
      "The Victoria Falls area and its surroundings hold many national parks, with environments that include teak woodland and savannah forest, while rainforest flourishes right beside the falls, fed by the spray and the high humidity. The river below the falls holds about thirty-nine species of fish, and about eighty-nine species live in the river feeding the falls above. Leopards, buffalo, antelope, lions, monkeys, giraffes, zebras and many other animals are found at Victoria Falls and in the surrounding parks.",
      "Victoria Falls enjoys landscapes that draw many visitors. Among the facts worth knowing: it is classed as one of the seven natural wonders of the world, and it forms the largest wall of falling water on earth, made up of five falls — among them the Devil's Cataract, the Horseshoe Falls in Zimbabwe, the Eastern Cataract in Zambia, and the Rainbow Falls. The coloured mist of the falls rises more than 400 metres and can be seen from up to forty-eight kilometres away. April is the best time to visit, at the peak of the flood season.",
    ],
  },
};
