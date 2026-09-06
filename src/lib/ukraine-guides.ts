import type { Guide } from "./france-guides";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

export const ukraineGuides: Guide[] = [
  {
    slug: "famous-for",
    title_ar: "ما تشتهر به اوكرانيا",
    title_en: "What Ukraine is famous for",
    kicker_ar: "معلومات إضافية",
    kicker_en: "Additional information",
    image: U("2022/05/img_6874.jpg"),
    blocks: [
      { type: "H3", ar: "العجائب السبع في اوكرانيا", en: "The seven wonders of Ukraine" },
      {
        type: "P",
        ar: "داخل حدود أوكرانيا تتواجد سبعة أماكن للتراث العالمي ، ومن أهم هذه الأماكن هي كاتدرائية القديسة صوفيا التي تعود الى القرن الحادي عشر ، وتتوزع هذه العجائب في كييف ، ومدينة تشيرسونيسوس القديمة ، وفي الغابات البدائية لجبال الكاربات وكذلك قوس ستروف الجيوديسي وهو عبارة عن سلسلة من عمليات المسح المثلثية التي تربط هامرفست في النرويج بالبحر الأسود في أوكرانيا ، ووفقا لمنظمة اليونسكو ساعد على تحديد الحجم الدقيق للكوكب وشكله ، وهو خطوة مهمة في عملية تطوير علوم الأرض ورسم الخرائط الطبوغرافية ، كما أن أوكرانيا لديها ثروة كبيرة من الكاتدرائيات الأرثوذكسية ، مثل كاتدرائية القديسة صوفيا ، وكاتدرائية سانت مايكل في كييف",
        en: "Within Ukraine's borders there are seven World Heritage sites, the most important of them the eleventh-century Saint Sophia Cathedral. These wonders are spread across Kyiv, the ancient city of Chersonesus, the primeval forests of the Carpathians, and the Struve Geodetic Arc — a chain of triangulation surveys linking Hammerfest in Norway with the Black Sea in Ukraine, which according to UNESCO helped establish the exact size and shape of the planet, an important step in the development of earth sciences and topographic mapping. Ukraine also has a great wealth of Orthodox cathedrals, such as Saint Sophia Cathedral and Saint Michael's Cathedral in Kyiv.",
      },
      { type: "H3", ar: "التاريخ الاوكراني العظيم", en: "Ukraine's great history" },
      {
        type: "P",
        ar: "تشتهر أوكرانيا بتاريخها العظيم وقد تعرضت للكثير من التدميرات على مر التاريخ ، ولكنها كانت مضيفة مؤتمر يالطا في عام 1945 م ، حيث التقى تشرشل وستالين وروزفلت لمناقشة تنظيم أوروبا بعد الحرب ، وقد استضاف قصر ليفاديا الاجتماع ، وفي الوقت الحالي تم فتح القصر واعتباره متحف رائع ، وتعتبر يالطا اليوم جزء من التاريخ مرة أخرى لأنها تقع في شبه جزيرة القرم المتنازع عليها ، والتي ضمتها روسيا في عام 2014 م ، وشبه جزيرة القرم هي واحدة من أربع مناطق ينصح بعدم السفر إليها",
        en: "Ukraine is famous for its great history and has suffered much destruction over the centuries, yet it hosted the Yalta Conference in 1945, where Churchill, Stalin and Roosevelt met to discuss the organisation of post-war Europe. Livadia Palace hosted the meeting and today it is open as a wonderful museum. Yalta is once again part of history because it lies in the disputed Crimean peninsula, annexed by Russia in 2014; Crimea is one of four regions travellers are advised not to visit.",
      },
      { type: "H3", ar: "موطن كارثة تشيرنوبل", en: "Home of the Chernobyl disaster" },
      {
        type: "P",
        ar: "يقول البعض بأن موقع أسوأ كارثة لمحطة الطاقة النووية في العالم يتواجد في شمال أوكرانيا ، ويوجد داخل هذه المنطقة عدد من البلدات المهجورة التي تجذب اهتمام جميع السياح من مختلف أنحاء العالم",
        en: "Some say the site of the world's worst nuclear power plant disaster lies in northern Ukraine. Inside this zone there are a number of abandoned towns that draw the interest of travellers from all over the world.",
      },
      { type: "H3", ar: "مقاهي مدينة لفيف", en: "The cafés of Lviv" },
      {
        type: "P",
        ar: "تشتهر مدينة لفيف الأوكرانية بأنها تحتوي على أكبر عدد من المقاهي في العالم وتتمتع هذه المدينة بجو هادئ ومليء بطلاب الجامعات ، ومزين بمتاجر الحلوى ، وعدد من مباني عصر النهضة ، والأماكن المعطرة برائحة مئات المقاهي ذات الطراز الفييني ، يمكن التنزه مع الحشود على طول العمود المركزي للمدينة ، وتشتهر مدينة لفيف أيضا بكونها موطن اختراع أول مصباح غاز في العالم",
        en: "The Ukrainian city of Lviv is famous for having the largest number of cafés in the world. The city enjoys a calm atmosphere full of university students, dotted with sweet shops, a number of Renaissance buildings, and places perfumed by the aroma of hundreds of Viennese-style cafés. You can stroll with the crowds along the city's central spine. Lviv is also famous as the birthplace of the world's first gas lamp.",
      },
      { type: "H3", ar: "بناء طائرة فائقة", en: "Building a giant aircraft" },
      {
        type: "P",
        ar: "هناك العديد من المعالم السياحية في كييف التي يأتي لزيارتها السياح من كل مكان في العالم ، وقد كانت كييف مسقط رأس أكبر طائرة في العالم ، وتحتوي الطائرة على أكبر الجناحات حجما في العالم ، حيث يبلغ 88.4 مترا ويزن 640 ألف كيلوجرام ، ومن الممكن القيام بالتزلج هناك والاستمتاع بالأنشطة المتميزة في منتجعات التزلج الموجودة في جبال الكاربات مع منحدرات تبلغ حوالي 55 كيلو متر و 15 مصعد",
        en: "Kyiv has many attractions that travellers come from everywhere in the world to see, and it was the birthplace of the largest aircraft in the world — a plane with the largest wingspan anywhere, 88.4 metres, weighing 640,000 kilograms. You can also ski and enjoy outstanding activities at the resorts of the Carpathian mountains, with around 55 kilometres of slopes and 15 lifts.",
      },
      { type: "H3", ar: "مدينة الأبطال كييف", en: "Kyiv, the hero city" },
      {
        type: "P",
        ar: "قام الاتحاد السوفيتي بمنح العاصمة كييف لقب مدينة الأبطال بعد مقاومتها للنازيين في معركة كييف عام 1941 م ، وقد حاصر الألمان المدينة في شهر يوليو من عام 1941 م ، وقد استولوا عليها في نهاية المطاف في شهر سبتمبر وأسروا أكثر من 600 ألف جندي ، وعلى الرغم من اعتبار المعركة انتصارا كبيرا لهتلر ، تمت مكافأة المدينة على دفاعها بلقب مدينة الأبطال خلال عام 1965 م",
        en: "The Soviet Union granted the capital Kyiv the title of hero city after its resistance to the Nazis in the battle of Kyiv in 1941. The Germans besieged the city in July 1941 and eventually took it in September, capturing more than 600,000 soldiers. Although the battle was considered a great victory for Hitler, the city was rewarded for its defence with the title of hero city in 1965.",
      },
      { type: "H3", ar: "شوربة بورش", en: "Borscht soup" },
      {
        type: "P",
        ar: "تشتهر أوكرانيا بالعديد من الأطعمة اللذيذة ومن أهمها هي شوربة بورش الشهيرة ، وتظهر الثقافة الأوكرانية واضحة في هذه الأطعمة ، ومن الممكن العثور على البورش الأوكراني التقليدي في المطاعم في جميع أنحاء البلاد ، ويتوافر هذا الطبق اما ساخنا أو باردا",
        en: "Ukraine is famous for many delicious foods, the most important of them the well-known borscht soup. Ukrainian culture shows clearly in these dishes, and traditional Ukrainian borscht can be found in restaurants all over the country, served either hot or cold.",
      },
      { type: "H3", ar: "حقل عباد الشمس", en: "Sunflower fields" },
      {
        type: "P",
        ar: "يعتبر حقل عباد الشمس من أهم أماكن السياحة في اوكرانيا وتتم زراعة عباد الشمس بكثرة هناك ، لذلك نجد أن زيت عباد الشمس هو أحد أكبر صادرات الدولة ، وفي الواقع تعتبر اوكرانيا ثاني أكبر منتج للنفط في العالم ، ويجد السياح هناك حقول واسعة من الزهور في مختلف أنحاء البلاد ، ويستمتعون بالتقاط الصور بجانبها وشراء الزهور",
        en: "Sunflower fields are among the most important sights in Ukraine, where sunflowers are grown in abundance, which is why sunflower oil is one of the country's biggest exports — in fact Ukraine is the second largest producer of the oil in the world. Travellers find wide fields of the flowers all around the country and enjoy taking photographs beside them and buying the blooms.",
      },
      { type: "H3", ar: "الأسواق المحلية الخارجية", en: "Local open-air markets" },
      {
        type: "P",
        ar: "عندما نذكر ما تشتهر به أوكرانيا لا يمكن أن نتجاهل الأسواق المحلية الخارجية ، ففي هذه الأسواق تظهر مهارة الحرفيين الموهوبين في صناعة المنتجات والدمى الروسية الشهيرة ، ويمكن شراء عدد من الهدايا التذكارية من هناك ، ومجموعة من الحرف اليدوية التي تدل على روعة الفنون التقليدية ، وكذلك المنسوجات والمناشف والبلوزات المطرزة بشكل تقليدي وتتواجد هناك أيضا الكثير من العناصر الحربية القديمة التي تتواجد في أسواق السلع المستعملة ، وتباع هناك أيضا مجموعة من أغطية الرأس المميزة التي يتم استخدامها في المهرجانات والاحتفالات",
        en: "When we speak of what Ukraine is famous for we cannot overlook the local open-air markets. In them the skill of talented craftspeople shows in the goods and the well-known nesting dolls. You can buy plenty of souvenirs there, along with handicrafts that reveal the splendour of traditional arts, as well as textiles, towels and traditionally embroidered blouses. There are also many antique military items in the second-hand markets, and a range of distinctive headdresses used at festivals and celebrations.",
      },
      { type: "H3", ar: "نفق الحب", en: "The tunnel of love" },
      {
        type: "P",
        ar: "يقع هذا النفق الشهير خارج مدينة كليفان مباشرة ، وهو مكان شهير آخر يستحق الزيارة في أوكرانيا ، ويزوره الكثير من العشاق والعزاب على حد سواء ، وهو يعتبر امتداد لمسافة ميلين من السكك الحديدية الخاصة ، وهي مظلة من الأشجار تصنع نفق مميز وتتوجه حفلات الزفاف إلى هناك لتمني أمنية أو القيام بعمل نزهة رومانسية لا مثيل لها ، وتقول الأسطورة أن الأزواج الذين يتمنون أمنية في نفق الحب تتحقق هذه الأمنية لهم إذا كان الحب حقيقيا ، وهو موقع يهتم الكثير من المصورين بتصويره لإبراز جماله",
        en: "This famous tunnel lies just outside the town of Klevan and is another well-known place worth visiting in Ukraine, drawing couples and singles alike. It runs for two miles of private railway, a canopy of trees forming a remarkable tunnel. Weddings head there to make a wish or enjoy an unmatched romantic walk, and legend says that couples who make a wish in the tunnel of love will have it granted if the love is true. Many photographers love to capture the site and show off its beauty.",
      },
    ],
  },
];
