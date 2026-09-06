import type { Guide } from "./france-guides";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

export const albaniaGuides: Guide[] = [
  {
    slug: "places",
    title_ar: "البانيا – الاماكن السياحية",
    title_en: "Albania – places to visit",
    kicker_ar: "أرض النسور",
    kicker_en: "The land of the eagles",
    image: U("2022/08/img_1589.jpg"),
    blocks: [
      { type: "H3", ar: "تيرانا", en: "Tirana" },
      {
        type: "P",
        ar: "هي عاصمة الجمهورية الألبانية وأكبر مدنها ، وهي المدينة الأكثر زيارة شهرة سياحيا ، حيث يأتي إليها الكثير من الزوار من جميع الأنحاء على مدار العام ، تتمتع مدينة تيرانا بمناخها المتوسط المعتدل ، فهي النقطة الرئيسية للسياحة في البانيا ، هي مدينة غير مكلفة وسكانها ودودين للغاية ، كذلك تمتع بتناول أشهى الأطعمة والمشروبات والنوادي الليلية",
        en: "Tirana is the capital of the Republic of Albania and its largest city, and the most visited and famous city for tourism, with visitors arriving from everywhere all year round. Tirana enjoys a mild Mediterranean climate and is the main hub of tourism in Albania. It is an inexpensive city with extremely friendly people, and you can enjoy the tastiest food and drink as well as its nightlife.",
      },
      { type: "IMG", src: U("2022/08/img_1590.jpg"), cap_ar: "تيرانا", cap_en: "Tirana" },
      {
        type: "P",
        ar: "تضم تيرانا مجموعة فريدة من المعالم السياحية التي يمكنك إستكشافها بسهولة مثل الكنائس ، والتحف المعمارية ، والمتحف التاريخي الوطني ، وقلعة بتريلا ، ومسجد علم بك ، والبازار القديم ، وصالة العرض الوطنية ، وجرس السلام ، وبرج الساعة ، ومسرح العرائس وغيرها العديد من المعالم التاريخية والترفيهية . علاوة على ذلك تتمتع تيرانا بالغابات الخضراء الواسعة ، والحدائق الرائعة التي يمكنك الإسترخاء فيها والإستمتاع بالهدوء التام ، هذا بالإضافة إلى جبل داجتي ، وإمكانية القيام بمغامرات مثيرة",
        en: "Tirana holds a unique collection of sights that are easy to explore: churches, architectural treasures, the National Historical Museum, Petrela Castle, the Et'hem Bey Mosque, the old bazaar, the National Gallery, the Peace Bell, the clock tower, the puppet theatre and many more historic and recreational landmarks. Tirana also has wide green forests and wonderful parks where you can relax in complete calm, as well as Mount Dajti and the chance to take on thrilling adventures.",
      },
      { type: "IMG", src: U("2022/08/img_1589.jpg"), cap_ar: "تيرانا وجبل داجتي", cap_en: "Tirana and Mount Dajti" },

      { type: "H3", ar: "بيرات", en: "Berat" },
      {
        type: "P",
        ar: "بيرات وهي واحدة من الوجهات السياحية الهامة في البانيا ، يطلق عليها أسم مدينة الألف نافذة نظرا لمزجها بين الحضارة الألبانية والعثمانية ، وقد تم إدراجها في قائمة اليونسكو للتراث العالمي ، تشتهر بيرات بجمال العمارة العثمانية ، وتقع في وسط البانيا ، تضم المدينة مجموعة مميزة من المعالم السياحية الجميلة التي يمكنك الإستمتاع بزيارتها",
        en: "Berat is one of Albania's important destinations, nicknamed the city of a thousand windows for the way it blends Albanian and Ottoman civilisation, and it is inscribed on the UNESCO World Heritage list. Berat is famous for the beauty of its Ottoman architecture and lies in central Albania, with a distinctive set of beautiful sights you will enjoy visiting.",
      },
      { type: "IMG", src: U("2022/08/img_1591.jpg"), cap_ar: "بيرات · مدينة الألف نافذة", cap_en: "Berat · the city of a thousand windows" },
      {
        type: "P",
        ar: "من أهم معالم المدينة قلعة كالاجا التي يرجع تاريخها إلى القرن 14 ، والتي لا تزال موطنا لمجموعة من الأفراد ، بالإضافة إلى ذلك الكنائس البيزنطية العديدة المنتشرة حول المدينة ، أيضا من معالمها الهامة قصر يعود للقرن الثالث عشر ، ويتمتع بالعديد من المناظر الطبيعية ، وكذلك المتحف الإثنوغرافي الوطني ، والمتحف الأيقوني الوطني ، وجسر جوريكا ، علاوة على نهر Osumi أيضا من أهم عوامل الجذب السياحي في مدينة بيرات",
        en: "Among the city's most important landmarks is Kalaja Castle, dating back to the 14th century and still home to a number of families, along with the many Byzantine churches scattered around the city. Other notable sights include a 13th-century palace with wide natural views, the National Ethnographic Museum, the National Iconographic Museum, the Gorica bridge, and the Osumi river — one of Berat's biggest attractions.",
      },
      { type: "IMG", src: U("2022/08/img_1592.jpg"), cap_ar: "جسر جوريكا في بيرات", cap_en: "The Gorica bridge in Berat" },

      { type: "H3", ar: "كرويه", en: "Krujë" },
      {
        type: "P",
        ar: "كرويه هي مدينة صغيرة تقع على قمة جبل ، وتعد من المدن الشهيرة والتاريخية للغاية في البانيا ، وذلك حيث أنها مسقط رأس البطل القومي لألبانيا جاجيرج سكاندربيج الذي أنقذ البلاد من الغزو العثماني لأكثر من ثلاثة عقود ، تشتهر كرويه بهندستها المعمارية المذهلة ، والبيوت الحجرية القديمة ، وتتيح لك المدينة الإستمتاع بممارسة انشطة ترفيهية متنوعة مثل زيارة البازار ، ومتحف سكاندربج ، والقلعة التي يمكنك من خلالها مشاهدة أفضل الإطلالات على البحر الأدرياتيكي ، كذلك يمكنك الذهاب إلى الحديقة الوطنية ، والإستمتاع ببحيراتها وجبالها ووديانها الرائعة",
        en: "Krujë is a small town on a mountain top and one of Albania's most famous and historic places, being the birthplace of the national hero Gjergj Kastrioti Skanderbeg, who saved the country from Ottoman invasion for more than three decades. Krujë is known for its stunning architecture and old stone houses, and it offers a variety of activities: the bazaar, the Skanderbeg Museum, and the castle with the finest views over the Adriatic Sea. You can also head to the national park and enjoy its lakes, mountains and wonderful valleys.",
      },
      { type: "IMG", src: U("2022/08/img_1593.jpg"), cap_ar: "قلعة كرويه", cap_en: "Krujë Castle" },
      { type: "IMG", src: U("2022/08/img_1596.jpg"), cap_ar: "بازار كرويه القديم", cap_en: "The old bazaar of Krujë", size: "compact" },
      { type: "IMG", src: U("2022/08/img_1595.jpg"), cap_ar: "كرويه على سفح الجبل", cap_en: "Krujë on the mountainside", size: "compact" },

      { type: "H3", ar: "جيروكاسترا", en: "Gjirokastër" },
      {
        type: "P",
        ar: "جيروكاسترا هي واحدة من المدن الألبانية الرائعة التي تستحق الزيارة ، وقد تم تصنيفها كموقع للتراث العالمي لمنظمة اليونسكو ، وذلك لما تتمتع به من مميزات عديدة ، من أهمها موقعها الإستراتيجي الساحر والقمم المغطاه بالتلوج في واد دينو ، وذلك على إرتفاع ما يصل إلى 300 مترا فوق سطح الأرض",
        en: "Gjirokastër is one of the wonderful Albanian towns that deserve a visit, and it is listed as a UNESCO World Heritage site thanks to its many qualities — chief among them its charming strategic position and the snow-covered peaks of the Drino valley, at an altitude reaching 300 metres.",
      },
      { type: "IMG", src: U("2022/08/img_1600.jpg"), cap_ar: "بيوت جيروكاسترا الحجرية", cap_en: "The stone houses of Gjirokastër" },
      {
        type: "P",
        ar: "تعتبر جيروكاسترا مدينة تاريخية وثقافية ، ويطلق عليها أسم مدينة الحجر ، فهي تضم مجموعة من الآثار والمباني المعمارية الجميلة ، فيوجد بها 600 منزل ضخم ، يعود للعصر العثماني مما جعلهم من أهم المعالم السياحية بالمدينة ، هذا فضلا عن مناظرها الطبيعية الخلابة ، كما يمكنك الإستمتاع بزيارة القلعة ، والمركز التاريخي بها ، والسوق العثماني القديم ، والحديقة لممارسة أنشطة ترفيهية متنوعة ، علاوة على كل ما سبق يقام بها المهرجان الفولكلوري الوطني",
        en: "Gjirokastër is a historic and cultural town known as the city of stone, holding a collection of ruins and beautiful architecture, including 600 grand houses from the Ottoman era that count among its most important sights, as well as breathtaking scenery. You can enjoy the castle, the historic centre, the old Ottoman market and the park for a variety of activities — and on top of all that, the National Folklore Festival is held here.",
      },
      { type: "IMG", src: U("2022/08/img_1601.jpg"), cap_ar: "البازار العثماني القديم", cap_en: "The old Ottoman bazaar" },
      { type: "IMG", src: U("2022/08/img_1597.jpg"), cap_ar: "أزقة المركز التاريخي", cap_en: "Alleys of the historic centre", size: "compact" },
      { type: "IMG", src: U("2022/08/img_1598.jpg"), cap_ar: "داخل قلعة جيروكاسترا", cap_en: "Inside Gjirokastër Castle", size: "compact" },
      { type: "IMG", src: U("2022/08/img_1599.jpg"), cap_ar: "سطوح المدينة الحجرية", cap_en: "The stone rooftops of the city", size: "compact" },
      { type: "IMG", src: U("2022/08/img_1602.jpg"), cap_ar: "المنازل العثمانية على المنحدر", cap_en: "Ottoman houses on the slope", size: "compact" },
      { type: "IMG", src: U("2022/08/img_1603.jpg"), cap_ar: "واد دينو", cap_en: "The Drino valley", size: "compact" },

      { type: "H3", ar: "بوغراديس", en: "Pogradec" },
      {
        type: "P",
        ar: "تتمتع مدينة بوغراديس بموقع جغرافي ساحر على ضفاف بحيرة أوخريد ، والذي قام بدوره في جعلها من أكثر وجهات السياحة في البانيا شهرة وشعبية بين السائحين . فهي وجهة مثالية للإسترخاء والإنسجام في أحضان الطبيعة الجميلة والإستمتاع بالهدوء التام ، يمكنك الإستمتاع بممارسة العديد من الأنشطة الترفيهية في بوغراديس ، ومنها زيارة متنزه Driloni الوطني ، وجسر جوليك ، والمقابر الملكية ، هذا فضلا عن القيام بالرحلات الرائعة للقرى المجاورة ، وإستكشاف كل ما بها من مغامرات مثيرة مثل التجديف وغيرها الكثير",
        en: "Pogradec has a charming setting on the shores of Lake Ohrid, which has made it one of Albania's most famous and popular destinations among travellers. It is an ideal place to relax in the arms of beautiful nature and enjoy complete quiet. You can take part in many activities in Pogradec: visiting the Drilon national park, the Golik bridge and the royal tombs, as well as wonderful trips to the neighbouring villages and thrilling adventures such as rowing and much more.",
      },
      { type: "IMG", src: U("2022/08/img_1604.jpg"), cap_ar: "بوغراديس", cap_en: "Pogradec" },

      { type: "H3", ar: "سارنده", en: "Sarandë" },
      {
        type: "P",
        ar: "سارنده هي واحدة من المدن الشاطئية الخيالية في البانيا ، تقع على خليج مفتوح للبحر الآيوني في وسط البحر الأبيض المتوسط ، وهي من أفضل الأماكن السياحية الألبانية التي يُمكنك زيارتها خلال شهور فصل الصيف ، يمكن للزائر الإستمتاع بالمناظر الطبيعية التي لا يمكن نسيانها ، وخاصة غروب الشمس الذي يجذب عددًا كبيرا من الزوار والسائحين ، هذا بالإضافة إلى المواقع الأثرية والتاريخية الهامة في المدينة مثل قلعة ليكورسي ، وميناء سارنده ، فضلًا عن محلات بيع الهدايا التذكارية، والمطاعم والمقاهي",
        en: "Sarandë is one of Albania's fairy-tale seaside towns, set on a bay open to the Ionian Sea in the middle of the Mediterranean, and one of the best Albanian places to visit during the summer months. Visitors can enjoy unforgettable scenery, especially the sunset that draws large numbers of travellers, as well as important archaeological and historic sites such as Lëkurësi Castle and the port of Sarandë, plus souvenir shops, restaurants and cafés.",
      },
      {
        type: "IMG",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Sarand%C3%AB%2C_Albania.jpg/1280px-Sarand%C3%AB%2C_Albania.jpg",
        cap_ar: "خليج سارنده على البحر الآيوني",
        cap_en: "The bay of Sarandë on the Ionian Sea",
      },

      { type: "H3", ar: "شكودر", en: "Shkodër" },
      {
        type: "P",
        ar: "شكودر هي أحدى المدن التاريخية القديمة في البانيا ، وتتمتع بموقع إستراتيجي فوق بحيرة شكودر الساحرة ، وتعد من أهم مناطق الجذب السياحي في ألبانيا ، تعرف المدينة بأسم مدينة الدراجات ، وتضم مجموعة متعددة من المعالم السياحية الجميلة ، والتي يعد أبرزها أطلال قلعة روزافا ، على تل صخري فوق المدينة ويوفر للزائر إطلالات بانورامية للمناظر الطبيعية حول البحيرة",
        en: "Shkodër is one of Albania's ancient historic cities, in a strategic position above the charming Lake Shkodër, and among the country's most important attractions. Known as the city of bicycles, it holds many beautiful sights, the most prominent being the ruins of Rozafa Castle on a rocky hill above the city, offering panoramic views of the scenery around the lake.",
      },
      { type: "IMG", src: U("2022/08/img_1606.jpg"), cap_ar: "جبال الألب الألبانية شمال شكودر", cap_en: "The Albanian Alps north of Shkodër" },
      {
        type: "P",
        ar: "وتعتبر شكودر العاصمة الثقافية للبلاد ، وذلك لما تستضيفه من أحداث مثل مهرجان الأطفال ، ويوم البحيرة ، والكرنفال ، ومهرجان شكودر للجاز وغيرها الكثير ، يمكنك ايضا الإستمتاع في شكودر بزيارة متحف ماروبي الوطني للتصوير الفوتوغرافي ، الذي يتيح لزائريه تعلم التاريخ والفن والديموغرافيا ، فضلًا عن تاريخ التصوير الفوتوغرافي العالمي",
        en: "Shkodër is considered the country's cultural capital for the events it hosts, such as the children's festival, Lake Day, the carnival and the Shkodër jazz festival, and much more. You can also enjoy the Marubi National Museum of Photography, where visitors learn about history, art and demography as well as the history of world photography.",
      },
      { type: "IMG", src: U("2022/08/img_1607.jpg"), cap_ar: "جسر ميسي القديم قرب شكودر", cap_en: "The old Mesi bridge near Shkodër" },
      { type: "IMG", src: U("2022/08/img_1608.jpg"), cap_ar: "شكودر وبحيرتها", cap_en: "Shkodër and its lake", size: "compact" },
      { type: "IMG", src: U("2022/08/img_1609.jpg"), cap_ar: "بحيرة كومان", cap_en: "Lake Koman", size: "compact" },
      { type: "IMG", src: U("2022/08/img_1605.jpg"), cap_ar: "منعطف النهر قرب شكودر", cap_en: "The river bend near Shkodër", size: "compact" },

      { type: "H3", ar: "دوريس", en: "Durrës" },
      {
        type: "P",
        ar: "دوريس هي واحدة من أحمل أماكن السياحة في البانيا . تتمتع المدينة بإطلالات ساحرة على البحر الأدرياتيكي ، فهي من أكثر الجهات زيارة ، لما تضمه من مجموعة مميزة من الشواطئ الساحلية المُبهرة ذات المياة المتلألأة والرمال الناعمة ، تضم مدينة دوريس أيضا الكثير من المواقع الأثرية والتاريخية الرومانية العتيقة ، التي يمكنك زيارتها وإستكشاف تاريخ البلاد العريق ، حيث أنها المدينة الأقدم في البانيا",
        en: "Durrës is one of the most beautiful places to visit in Albania. The city has charming views over the Adriatic Sea and is among the most visited, thanks to a stunning set of coastal beaches with glittering water and soft sand. Durrës also holds many ancient Roman archaeological and historic sites you can visit to explore the country's deep past — it is the oldest city in Albania.",
      },
      { type: "IMG", src: U("2022/08/img_1612.jpg"), cap_ar: "دوريس", cap_en: "Durrës" },

      { type: "H3", ar: "برمت", en: "Përmet" },
      {
        type: "P",
        ar: "تعد مدينة برمت من أجمل مدن السياحة في البانيا وأجملها على الإطلاق . فهي تعد مقصدا سياحيا هاما ، وذلك لما تمتاز به من مناظر طبيعية رائعة تثير الإعجاب والدهشة ، فهي مدينة كثيرة الخضرة ، تضم برمت مجموعة من الينابيع المائية الدافئة ، يمكنك القيام بالعديد من الأنشطة الترفيهية المثيرة في المدينة ، والتي من أهمها التجول والإستمتاع بالمشاهد الطبيعية الخلابة ، فضلا عن البحيرات الصغيرة ذات الأحجام المختلفة . كما يمكنك الذهاب إلى جسر كاتيو القديم الذي تم بناؤه في فترة العصور الوسطى ، والذي لا يزال بحالة جيدة إلى يومنا هذا",
        en: "Përmet is among the most beautiful tourist towns in Albania — an important destination for its wonderful scenery that stirs admiration and wonder. It is a very green town with a group of warm water springs, and you can take part in many exciting activities, chief among them wandering and enjoying the breathtaking landscapes as well as the small lakes of varying sizes. You can also visit the old Katiu bridge, built in the Middle Ages and still in good condition today.",
      },

      { type: "H3", ar: "كورتشي", en: "Korçë" },
      {
        type: "P",
        ar: "كورتشي هي سادس أكبر مدينة في البانيا ، وتتسم بجمالها الطبيعي ، تم إنشاؤها في واد ، فهي تحاط بمجموعة من الجبال العالية الإرتفاع ، التي جعلت منها لوحة فنية متكاملة يأتي إليها آلاف الزوار سنويا ، كذلك تشتهر كورتشي بهندستها المعمارية الضخمة الفريدة من نوعها ، فتجد المباني المحفوظة ، والفيلات الحجرية المرصوفة بالحصى",
        en: "Korçë is the sixth largest city in Albania and is marked by its natural beauty. Built in a valley, it is surrounded by high mountains that turn it into a complete work of art, drawing thousands of visitors every year. Korçë is also known for its grand, one-of-a-kind architecture, with preserved buildings and cobbled stone villas.",
      },
      { type: "IMG", src: U("2022/08/img_1614.jpg"), cap_ar: "كورتشي", cap_en: "Korçë" },
      {
        type: "P",
        ar: "يمكن للسائح ممارسة العديد من الأنشطة الترفيهية الممتعة ، مثل زيارة المتاحف الثقافية والأدبية بالمدينة مثل المتحف الوطني لفنون العصور الوسطى ، وكذلك الذهاب إلى مسجد ميراهوري ، والبازار القديم الذي يمتليء بالمطاعم المختلفة ، والمقاهي التقليدية والحديثة ، والمحلات التجارية والمخابز ، فضلًا عن الأزقة التقليدية والأغاني الرومانسية الجميلة",
        en: "Visitors can enjoy many activities, such as the city's cultural and literary museums including the National Museum of Medieval Art, the Mirahori Mosque, and the old bazaar full of restaurants, traditional and modern cafés, shops and bakeries, as well as the traditional alleyways and beautiful romantic songs.",
      },
      { type: "IMG", src: U("2022/08/img_1615.jpg"), cap_ar: "كورتشي", cap_en: "Korçë" },
      { type: "IMG", src: U("2022/08/img_1616.jpg"), cap_ar: "كورتشي", cap_en: "Korçë" },
      { type: "IMG", src: U("2022/08/img_1617.jpg"), cap_ar: "كورتشي", cap_en: "Korçë" },
      { type: "IMG", src: U("2022/08/img_1618.jpg"), cap_ar: "كورتشي", cap_en: "Korçë" },
    ],
  },
];
