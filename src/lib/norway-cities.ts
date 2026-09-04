import vigelandParkAsset from "@/assets/vigeland-park-oslo.png.asset.json";
import osloMunchMuseumAsset from "@/assets/oslo-munch-museum.png.asset.json";
import osloMunchSelfPortraitAsset from "@/assets/oslo-munch-selfportrait.png.asset.json";
import osloMunchInteriorAsset from "@/assets/oslo-munch-interior.png.asset.json";
import lysefjordHeroAsset from "@/assets/lysefjord-hero.png.asset.json";
import { type ArticleLine, type ArticleLineKind, type CityArticle } from "./article-format";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

type Pair = [ArticleLineKind, string, string];

function img(name: string): Pair {
  return ["IMG", U(name), ""];
}

function build(sourceUrl: string, title_ar: string, title_en: string, hero: string, pairs: Pair[]) {
  const lines: ArticleLine[] = pairs.map(([kind, ar]) => ({ kind, value: ar }));
  const ar: CityArticle = { sourceUrl, title: title_ar, heroImage: hero, lines };
  const en = { title: title_en, values: pairs.map(([, , e]) => e) };
  return { ar, en };
}

/* ------------------------------- OSLO ------------------------------- */

const OSLO = build(
  "https://100region.com/?p=11740&amp=1",
  "تعرف على اوسلو جوهرة مدن النرويج",
  "Oslo — the jewel of Norway's cities",
  U("2023/04/img_0712.jpg"),
  [
    ["H3", "المدينة الفاتنة", "The captivating city"],
    [
      "P",
      "تعتبر أوسلو عاصمة النرويج واحدة من أسرع المدن نموا في أوروبا ، تكتب وسائل الاعلام الدولية باستمرار عن الهندسة المعمارية والمتاحف والأحياء المبتكرة في أوسلو ، فضلا عن كل ما يتعلق بمشاهد الطعام والأزياء والفن والموسيقى",
      "Oslo, the capital of Norway, is one of the fastest growing cities in Europe. The international media write constantly about Oslo's architecture, museums and innovative neighbourhoods, as well as everything to do with its food, fashion, art and music scenes.",
    ],
    [
      "P",
      "على مدى السنوات القليلة الماضية ، تم انشاء العديد من الأحياء الجديدة في وسط المدينة ، مع أنشطة ومناطق جذب جديدة ومثيرة ، تعمل المباني الشاهقة في Barcode والمعالم الجذابة مثل دار الأوبرا ومتحف Astrup Fearnley على تغيير وجه المدينة ، وسيصاحبها قريبا متحف Munch الجديد والمتحف الوطني الجديد",
      "Over the past few years several new districts have been created in the city centre, with exciting new activities and attractions. The high-rises of the Barcode row and landmarks such as the Opera House and the Astrup Fearnley Museum are changing the face of the city, and they will soon be joined by the new Munch Museum and the new National Museum.",
    ],
    ["H3", "عاصمة خضراء", "A green capital"],
    [
      "P",
      "أوسلو مدينة خضراء وحصلت على لقب العاصمة الخضراء الأوروبية المرموقة في عام 2019م ، تغطي الغابات والمتنزهات أكثر من نصف بلدية أوسلو ، ويمتد المضيق البحري على طول الطريق الى وسط المدينة ، أصبح المركز نفسه خاليا من السيارات بشكل متزايد ويسهل استكشافه سيرا على الأقدام أو بالدراجة ، يسهل نظام النقل العام الفعال الوصول الى باقي المدينة",
      "Oslo is a green city and held the prestigious title of European Green Capital in 2019. Forests and parks cover more than half of the municipality, and the fjord reaches all the way into the centre. The centre itself is increasingly car-free and easy to explore on foot or by bike, while an efficient public transport system makes the rest of the city easy to reach.",
    ],
    [
      "P",
      "العاصمة مليئة بالتجارب الخضراء ، سواء كنت ترغب في السباحة أو التجديف بالكاياك أو التنقل بين الجزر أو الاسترخاء في الحدائق المورقة أو المشي أو ركوب الدراجة أو التزلج في الغابة",
      "The capital is full of green experiences, whether you want to swim, kayak, hop between the islands, relax in lush parks, or walk, cycle and ski in the forest.",
    ],
    [
      "P",
      "متى كانت آخر مرة كنت في مدينة كبيرة بها مزارع حضرية وطريق سريع منفصل للنحل ؟ في الحديقة النباتية ، يمكنك زيارة أول بيت مناخي في منطقة الشمال ومشاهدة المعارض المتعلقة بالمناخ وتغير المناخ ، بالاضافة الى كل هذا ، فان المزيد والمزيد من المطاعم تركز على القوائم الخضراء ، بينما يتزايد عدد الفنادق المعتمدة بيئيا كل عام",
      "When were you last in a big city with urban farms and a dedicated highway for bees? In the botanical garden you can visit the first climate house in the Nordic region and see exhibitions about climate and climate change. On top of all this, more and more restaurants focus on green menus, while the number of eco-certified hotels grows every year.",
    ],
    ["H3", "مميزات اوسلو", "What makes Oslo special"],
    [
      "P",
      "اوسلو هي أكبر مدن النرويج وهذا جعل منها العاصمة ، وهي من أشهر المدن على الاطلاق ، ومصنفة من أول ثلاث مدن على مستوى العالم من حيث جودة المعيشة واحترام الحياة ، تقع على الساحل الشرقي للنرويج ، تتميز بوجود عشرات القلاع والمتاحف والمتنزهات والأماكن الترفيهية المميزة ، هذا غير أن التجول فيها بحد ذاته يعد متعة منقطعة النظير بسبب نوعية الطبيعة والشوارع والنظافة الموجودة فيها ، وأهم المعالم السياحية فيها هو متحف سفن الفيكنج الذي يعرض سفن حقيقية للفايكنج ، وحديقة فورجنر وفيجلاند بارك ، التي تحتوي على العديد من المنحوتات البرونزية والجرانيت ، وأخيرا قلعة أكيروش",
      "Oslo is the largest city in Norway, which is what made it the capital, and it is among the most famous cities anywhere — ranked in the world's top three for quality of life and respect for life. It sits on Norway's eastern coast and is distinguished by dozens of castles, museums, parks and outstanding leisure spots. Simply wandering around is a pleasure in itself thanks to the quality of the nature, the streets and the cleanliness. Its most important sights are the Viking Ship Museum, which displays real Viking ships, Frogner Park and Vigeland Park with their many bronze and granite sculptures, and finally Akershus Fortress.",
    ],
    ["H3", "الاكل في اوسلو", "Eating in Oslo"],
    [
      "P",
      "أثبتت أوسلو نفسها منذ فترة طويلة كوجهة للطهي ، تتنوع المطاعم من مطاعم ميشلان المتميزة الى قاعات الطعام العصرية وشاحنات الطعام العصرية ، تظهر مطاعم جديدة باستمرار ، والعديد منها يتبع نهجا ابداعيا للمكونات النرويجية وتقاليد الطعام ، في السنوات الأخيرة ظهر أيضا عدد من المطاعم العضوية والنباتية في المدينة ، المكونات الطبيعية والجودة العالية هي أيضا كلمات رئيسية مهمة في مقاهي أوسلو لمشروبات الكوكتيل والقهوة ، والتي تحظى باهتمام دولي مستمر",
      "Oslo has long established itself as a culinary destination. The restaurants range from Michelin-starred dining rooms to modern food halls and trendy food trucks. New places open constantly, many of them taking a creative approach to Norwegian ingredients and food traditions. In recent years a number of organic and vegetarian restaurants have also appeared in the city. Natural ingredients and high quality are key words in Oslo's cocktail and coffee bars too, which receive continuous international attention.",
    ],
    ["H3", "مدينة لجميع الفصول", "A city for every season"],
    [
      "P",
      "في حين أن الخريف هو الوقت المثالي للمعارض الفنية المثيرة ، فان الربيع مرادف للمشروبات المختلفة في الخارج والأسواق المستعملة والحياة الصاخبة في حدائق وشوارع أوسلو ، وفي فصل الشتاء يمكن الجمع بين التجارب الحضرية والتجديف بالكاياك على المضيق البحري والتزحلق أسفل تل مزلقة ومنحدرات التزلج على بعد رحلة قصيرة بالمترو من وسط المدينة",
      "While autumn is the perfect time for exciting art exhibitions, spring is synonymous with drinks outdoors, flea markets and the bustling life of Oslo's parks and streets. In winter you can combine city experiences with kayaking on the fjord, sledging down a hill, and ski slopes just a short metro ride from the centre.",
    ],
    [
      "P",
      "وفي غابة Oslomarka تنتظركم أكثر من 2600 كيلومتر من المسارات عبر البلاد بالاضافة الى العديد من الكبائن مع المقاهي التي تقدم الطعام والكعك الطازج والشوكولاتة الساخنة ، جرب الغوص المنعش في المضيق البحري بعد زيارة الساونا بجانب أو على الماء ، واذا كنت من النوع الذي يريد أن يستمر الشتاء طوال العام ، فستتحقق أمنيتك في SNØ ، أحد ساحات التزلج الداخلية الوحيدة في العالم",
      "In the Oslomarka forest more than 2,600 kilometres of cross-country trails await you, along with many cabins and cafés serving food, freshly baked cakes and hot chocolate. Try a refreshing dip in the fjord after a sauna beside or on the water, and if you are the type who wants winter to last all year, your wish comes true at SNØ, one of the world's only indoor ski arenas.",
    ],
    ["H3", "المعالم السياحية في اوسلو", "The sights of Oslo"],
    img("2022/08/img_1698.jpg"),
    ["H5", "القصر الملكي", "The Royal Palace"],
    [
      "P",
      "يقع القصر الملكي ومقر إقامة العائلة المالكة ، على تلة بيليفو ، في نهاية الشارع الرئيسي لمدينة اوسلو كارل يوهان ، ويعتبر القصر من أهم مباني البلاد ، ومن اهم معالم السياحة في اوسلو النرويج ورمز هام في التاريخ النرويجي",
      "The Royal Palace, the residence of the royal family, stands on the Bellevue hill at the end of Oslo's main street, Karl Johans gate. It is one of the country's most important buildings, one of the leading sights of Oslo and a significant symbol in Norwegian history.",
    ],
    img("2022/08/img_1699.jpg"),
    img("2022/08/img_1700.jpg"),
    img("2022/08/img_1701.jpg"),
    img("2022/08/img_1702.jpg"),
    ["H5", "منتزة فروجنر", "Frogner Park"],
    [
      "P",
      "منتزه فروجنر أكبر منطقة ترفيهية في الأجزاء الوسطى من مدينة أوسلو وأهم الاماكن السياحية في اوسلو وأكثرها شعبية ، يتضمن المنتزه حديقة فيجيلاند الشهيرة بمنحوتاتها المذهلة ويشتهر بأكبر مجموعة من الورود النرويجية ، ويتضمن 14,000 نبتة من 150 نوعا مختلفا من النباتات ، وهو ملاذ سكان أوسلو",
      "Frogner Park is the largest recreational area in the central parts of Oslo and the most important and popular of the city's attractions. It contains the Vigeland sculpture park, famous for its stunning statues, and is known for the largest collection of Norwegian roses — 14,000 plants of 150 different varieties. It is the refuge of Oslo's residents.",
    ],
    img("2022/08/img_1703.jpg"),
    img("2022/08/img_1704.jpg"),
    img("2022/08/img_1705.jpg"),
    img("2022/08/img_1706.jpg"),
    img("2022/08/img_1707.jpg"),
    img("2022/08/img_1708.jpg"),
    ["H5", "حديقة فيجلاند", "Vigeland Park"],
    [
      "P",
      "تعتبر حديقة فيجلاند واحدة من مناطق السياحة في أوسلو النرويج الأكثر شعبية ، ويجدر القول بأنها أكبر حديقة منحوتات مصنوعة من قبل فنان واحد في العالم ، والتي تمثل حياة النحات غوستاف فيجيلاند الفنية",
      "Vigeland Park is one of the most popular attractions in Oslo, and it is worth saying that it is the largest sculpture park in the world made by a single artist, representing the artistic life of the sculptor Gustav Vigeland.",
    ],
    ["IMG", vigelandParkAsset.url, ""],
    ["H5", "متحف سفينة الفايكنغ", "The Viking Ship Museum"],
    [
      "P",
      "متحف سفينة الفايكنغ في مدينة أوسلو النرويج تعود معروضاته للقرن التاسع ، ويعتبر من اهم معالم السياحة في اوسلو حيث يضم سفن الفايكنغ الأفضل في العالم ، إلى جانب بعض الآثار التي تم اكتشافها في مقابر الفايكنغ حول مضيق أوسلو",
      "The exhibits of the Viking Ship Museum in Oslo date back to the ninth century. It is one of the most important sights in the city, home to the finest Viking ships in the world along with artefacts discovered in Viking burial mounds around the Oslo fjord.",
    ],
    img("2022/08/img_1709.jpg"),
    img("2022/08/img_1710.jpg"),
    img("2022/08/img_1711.jpg"),
    img("2022/08/img_1712.jpg"),
    img("2022/08/img_1713.jpg"),
    img("2022/08/img_1716.jpg"),
    ["H5", "دار الاوبرا", "The Opera House"],
    [
      "P",
      "دار الأوبرا حيث هى من أجمل المبانى التى يمكن أن تراها على الإطلاق فهى تمتاز بهندسة معمارية فريدة فتجدها تخرج من قلب الماء بلونها الأبيض الجميل و بهندستها المعمارية الغريبة",
      "The Opera House is one of the most beautiful buildings you will ever see. It has a unique architecture, rising out of the water itself in beautiful white with its extraordinary design.",
    ],
    img("2022/08/img_1714.jpg"),
    img("2022/08/img_1717.jpg"),
    img("2022/08/img_1718.jpg"),
    img("2022/08/img_1719.jpg"),
    img("2022/08/img_1720.jpg"),
    ["H5", "قاعة مدينة أوسلو", "Oslo City Hall"],
    [
      "P",
      "تم افتتاحها في عام 1950م ، وهي الهيئة الادارية للمدينة ومقر مجلس المدينة ، وتم تزيين المبنى بالفن النرويجي العظيم من عام 1900م الى عام 1950م ، بزخارف من التاريخ والثقافة والحياة العملية النرويجية",
      "Opened in 1950, it is the administrative body of the city and the seat of the city council. The building is decorated with great Norwegian art from 1900 to 1950, with motifs from Norwegian history, culture and working life.",
    ],
    img("2023/04/img_0721.jpg"),
    [
      "P",
      "حفلات كاريلون في أول يوم سبت كل شهر في الساعة 11 صباحا ، في يونيو ويوليو وأغسطس من كل يوم أحد في الساعة 3 مساء ، وما بين 14 يناير و27 أبريل ، يمكنك مشاهدة معرض جائزة السلام من مركز نوبل للسلام في قاعة المدينة ، الدخول مجاني ومفتوح كل يوم من الساعة 9 صباحا الى الساعة 4 مساء",
      "Carillon concerts take place on the first Saturday of every month at 11 am, and in June, July and August every Sunday at 3 pm. Between 14 January and 27 April you can see the Peace Prize exhibition from the Nobel Peace Center inside the City Hall. Entry is free and it is open every day from 9 am to 4 pm.",
    ],
    img("2023/04/img_0731.jpg"),
    img("2023/04/img_0730.jpg"),
    ["H5", "مجموعة مونش", "The MUNCH collection"],
    [
      "P",
      "تتكون مجموعة MUNCH ، التي تركها الفنان نفسه لمدينة أوسلو ، من لوحات ومطبوعات رسومية ورسومات ، انها أكبر مجموعة فنية لفنان واحد",
      "The MUNCH collection, left by the artist himself to the city of Oslo, consists of paintings, graphic prints and drawings. It is the largest art collection devoted to a single artist.",
    ],
    [
      "P",
      "الوجهة الأولى في العالم لتجربة حياة وفن ادوارد مونش ، يتمتع Edvard Munch بمكانة فريدة بين الرسامين الشماليين ويعتبر رائدا في التعبيرية ، بالاضافة الى فن مونش ، يتم عرض الفن العالمي المعاصر في المبنى المكون من 13 طابقا ، من خلال تغيير المعارض باستمرار ، يتأكد المتحف من أنه يمكن للمرء دائما تجربة شيء جديد أثناء زيارته هناك ، مثل المعارض الفردية لتكريم الفائزين بجائزة Edvard Munch Art",
      "It is the world's foremost destination for experiencing the life and art of Edvard Munch, who holds a unique position among Nordic painters and is regarded as a pioneer of Expressionism. Alongside Munch's art, contemporary international art is shown in the thirteen-storey building. By changing the exhibitions constantly, the museum makes sure there is always something new to experience on a visit, such as the solo exhibitions honouring the winners of the Edvard Munch Art Award.",
    ],
    [
      "P",
      "تظهر الأحداث الفنية والثقافية أيضا في تقويم MUNCH ، كما يوفر المتحف الضخم بجوار مضيق أوسلو ثلاثة أماكن لتناول الطعام والشراب : Munch Deli & Café وBistro Tolvte وKranen Bar ، فضلا عن وجود متجر الهدايا ومنتجات للأطفال وأدبا عن Munch ومنتجات فريدة أخرى مستوحاة من فن Munch",
      "Art and cultural events also appear on the MUNCH calendar, and the huge museum beside the Oslo fjord offers three places to eat and drink — Munch Deli & Café, Bistro Tolvte and Kranen Bar — as well as a gift shop with products for children, literature about Munch and other unique products inspired by his art.",
    ],
    [
      "P",
      "حجز التذاكر العادية : عدد الأشخاص الذين يمكنهم الدخول في فترة زمنية معينة محدود ، وللتأكد من القبول يجب أن تحصل على التذاكر المحددة بوقت مقدما ، اذا لم تقم بحجز تذكرتك مسبقا ، فلن يضمن المتحف أنك ستتمكن من الدخول في الوقت الذي تريده ، سعر التذاكر 160 للكبار ، و100 لأقل من 25 سنة ، ومجانا لأقل من 18 سنة",
      "Booking regular tickets: the number of people who can enter within a given time slot is limited, so to be sure of admission you should buy timed tickets in advance. If you have not booked your ticket beforehand, the museum cannot guarantee that you will be able to enter at the time you want. Tickets cost 160 for adults, 100 for those under 25, and are free for under-18s.",
    ],
    ["IMG", osloMunchSelfPortraitAsset.url, ""],
    ["IMG", osloMunchInteriorAsset.url, ""],
    img("2023/04/img_0727.jpg"),
    img("2023/04/img_0726.jpg"),
    img("2023/04/img_0725.jpg"),
    img("2023/04/img_0724.jpg"),
    img("2023/04/img_0723.jpg"),
    img("2023/04/img_0722.jpg"),
    img("2023/04/img_0720.jpg"),
    img("2023/04/img_0738-1.jpg"),
  ],
);

/* ------------------------------ BERGEN ------------------------------ */

const BERGEN = build(
  "https://100region.com/?p=34270&amp=1",
  "تعرف على كل ما يخص مدينة بيرغن السياحية",
  "Everything about the tourist city of Bergen",
  U("2023/04/img_0567.jpg"),
  [
    ["H3", "مدينة بيرغن بشكل عام", "Bergen in general"],
    [
      "P",
      "تعد منطقة بيرغن هانسيتك وارف الأثرية داخل تصنيف منظمة اليونيسكو كمنطقة تراثية عالمية ، وتعتبر هذه المنطقة من أكثر مناطق النرويج ازدحاما على الاطلاق بالسياح ، وتعتبر مدينة بيرغن نفسها من أهم المدن النرويجية وهذا لأنها كانت العاصمة فيما قبل ، وتبعد عن اوسلو مسافة تصل الى 480 كم ، وأكثر ما يميز المدينة أنها صاخبة وفي نفس الوقت طبيعية ، فهي مدينة تمتاز بالتصاميم القديمة ، والحارات ، والأسواق المفتوحة والمتاجر ، والمراسي ، كأنك دخلت الى عصر آخر في النرويج مدينة كاملة قديمة ، وفي نفس الوقت جميلة ، وأهم المناطق السياحية هناك بالطبع جبل فلوين ، ومنطقة بيرغن هانسيك وارف ، ومعهم قلعة بيرجينهوس",
      "The historic Hanseatic Wharf district of Bergen is on the UNESCO World Heritage list, and it is one of the busiest places in all of Norway for visitors. Bergen itself is one of the most important Norwegian cities because it was once the capital, and it lies some 480 km from Oslo. What distinguishes the city most is that it is lively and natural at the same time: a city of old designs, alleyways, open markets and shops, and quaysides — as if you had stepped into another age of Norway, an entire old city that is beautiful at the same time. The most important sights there are of course Mount Fløyen, the Bryggen Hanseatic wharf and Bergenhus Fortress.",
    ],
    [
      "P",
      "اشتهرت في عشرينات القرن الحادي عشر بأنها مدينة تجارية ، وبلغ نشاطها الذروة عندما اختيرت عاصمة للنرويج في القرن الثالث عشر ، ولمع نجمها في العام 1789م وحازت حقوق الوساطة التجارية بين شمالي النرويج والعالم ، بقيت بيرغن ميناء رئيسيا على مر السنين ، وصنفت موقعا للتراث العالمي من قبل اليونسكو ، ولحقت بها أضرار كبيرة خلال حرائق مختلفة نشبت في المدينة",
      "In the 1020s it became known as a trading city, and its activity peaked when it was chosen as the capital of Norway in the thirteenth century. Its star rose in 1789 when it gained the rights of commercial mediation between northern Norway and the world. Bergen remained a major port over the years and was listed as a World Heritage site by UNESCO, though it suffered great damage in the various fires that broke out in the city.",
    ],
    [
      "P",
      "أنشئت فيها كلية للدراسات الاقتصادية في العام 1936م في حين افتتحت جامعة بيرغن في العام 1948م وفي العام 1972م ، ضمت اليها أربع بلديات محيطة بها وفي الوقت ذاته أصبحت جزءا من مقاطعة هوردالاند",
      "A college of economics was founded here in 1936, while the University of Bergen opened in 1948. In 1972 four surrounding municipalities were merged into the city, and at the same time it became part of Hordaland county.",
    ],
    img("2023/04/img_0567-1.jpg"),
    ["H3", "بيرغن باختصار", "Bergen in brief"],
    [
      "P",
      "من المدن السياحية الجميلة في النرويج ولكنها بعيدة عن اوسلو ، مدينة بيرغن هى ثاني اكبر مدينه نرويجيه وتقع في الغرب وكانت عاصمة النرويج بين القرنين 12-13م ، وتحيط بها الكثير من الاماكن الطبيعية والخلجان الجميله ، وتبعد مدينة بيرغن عن اوسلو بحوالى 480 كم ، كما تبعد عن مدينة ستافنجر بـ 210 كم",
      "One of the beautiful tourist cities of Norway, though far from Oslo. Bergen is the second largest Norwegian city, lies in the west and was the capital of Norway between the twelfth and thirteenth centuries. It is surrounded by many natural spots and beautiful bays. Bergen is about 480 km from Oslo and 210 km from Stavanger.",
    ],
    img("2023/04/img_0572-1.jpg"),
    ["H3", "أفضل وقت لزيارة بيرغن", "The best time to visit Bergen"],
    [
      "P",
      "يعتمد أفضل وقت لزيارة بيرغن على الأجواء المفضلة لك ، فاذا كنت تحب الأمطار والغيوم ، ستكون أشهر ابريل ومايو وسبتمبر مناسبة لك ، واذا كنت تحب الجو الدافئ ، فأفضل وقت لك هو شهر مايو ، وتعد الفترة من يونيو وحتى شهر أغسطس مناسبة للتنزه والتجول ، لأن درجات الحرارة تكون معتدلة وتقل فيها الأمطار",
      "The best time to visit Bergen depends on the weather you prefer. If you like rain and clouds, April, May and September will suit you; if you like warm weather, May is your best month. The period from June to August is good for walking and sightseeing, because temperatures are mild and there is less rain.",
    ],
    ["H3", "أين تقع مدينة بيرغن", "Where Bergen is located"],
    [
      "P",
      "تقع مدينة بيرغن في جنوب غرب النرويج ، وهي مدينة ساحلية سياحية ، وتعد ثاني أكبر مدينة بعد العاصمة النرويجية أوسلو ، تتواجد بيرغن في وسط الجبال السبعة على واحد من الخلجان الصغيرة للبحر الشمالي ، وكانت تمثل عاصمة للنرويج في العصور الوسطى",
      "Bergen lies in south-western Norway. It is a coastal tourist city and the second largest after the Norwegian capital Oslo. Bergen sits among the seven mountains on one of the small inlets of the North Sea, and it was the capital of Norway in the Middle Ages.",
    ],
    [
      "P",
      "تقع معظم ضواحي مدينة بيرغن في جزر تنتشر حول المدينة ، وتتكون المدينة من ثمانية أحياء هي آرنا وأرستاد وآسان وبيرغن هوز وفانا وفيلينغسد وآلين ولاكسيفاغ ووارتريبيغدا",
      "Most of Bergen's suburbs lie on islands scattered around the city, and the city is made up of eight boroughs: Arna, Årstad, Åsane, Bergenhus, Fana, Fyllingsdalen, Ytrebygda and Laksevåg.",
    ],
    img("2023/04/img_0573-2.jpg"),
    ["H3", "بيرغن القديمة", "Old Bergen"],
    [
      "P",
      "تتركز أحياء بيرغن القديمة في خليج فاغن في مركز المدينة ، وكانت في الأصل تتركز خارج المنطقة الشرقية من خليج بيرغن الذي تتمدد شرقا ونحو الجنوب ، ولا تزال مجموعة محدودة من المباني القديمة قائمة الآن ، ومن أهم معالم المدينة كنيسة سانت ماري التي شيدت في القرن الثاني عشر ، وتوجد المباني الفاخرة التي شيدها الأثرياء بين حيي موهلينبري ونيغارد وعلى جانب هضبة فلوين",
      "The old quarters of Bergen are concentrated around Vågen bay in the city centre; originally they lay outside the eastern side of the bay, which stretches east and to the south. A limited group of old buildings still stands today, and among the city's most important landmarks is St Mary's Church, built in the twelfth century. The grand houses raised by the wealthy stand between the Møhlenpris and Nygård districts and on the side of the Fløyen plateau.",
    ],
    img("2023/04/img_0575.jpg"),
    ["H3", "السياحة في بيرغن", "Tourism in Bergen"],
    [
      "P",
      "تدر السياحة على بيرغن عائدات ضخمة ، ولذلك تعد السياحة مصدرا ممتازا لدخل المدينة ، ويمكن القول ان فنادق المدينة مملوءة بالنزلاء طوال فترة العام ، وذلك نتيجة للزيادة المطردة لعدد السياح وباعتبارها مركزا للمؤتمرات ، حيث ينظر الى بيرغن على أنها العاصمة الاقليمية غير الرسمية لمناطق غرب النرويج ، وتقدم موانئ المدينة خدمات للسفن السياحية العابرة العملاقة التي ترسو في موانئ المدينة لتفرغ حمولتها من السياح الذين يردون الى المدينة بالآلاف",
      "Tourism brings Bergen enormous revenue, so it is an excellent source of income for the city. Its hotels are full of guests all year round, thanks to the steady rise in visitor numbers and to the city's role as a conference centre. Bergen is regarded as the unofficial regional capital of western Norway, and its harbours serve the giant cruise ships that dock here to unload their passengers, who arrive in the thousands.",
    ],
    [
      "P",
      "تمثل مدينة بيرغن بوابة لأشهر المضايق البحرية في البلاد ، وهي مدينة جميلة تمتاز بطبيعة أخاذة وتاريخ عريق يرجع للعصور الوسطى ، وموقع رائع بين الجبال والسهول والمروج الخضراء ومظاهر الحضارة القديمة والحديثة ، لذلك هي تضم مجموعة كبيرة من الأماكن الطبيعية والمزارات السياحية التي تجتذب السكان المحليين والمسافرين على حد سواء",
      "Bergen is the gateway to the country's most famous fjords: a beautiful city with breathtaking nature and a long history reaching back to the Middle Ages, in a wonderful setting among mountains, plains and green meadows, with signs of both old and modern civilisation. It therefore holds a large collection of natural spots and attractions that draw locals and travellers alike.",
    ],
    ["H3", "فنادق بيرغن", "Hotels in Bergen"],
    [
      "P",
      "فنادق مقترحة في بيرغن ، تنتشر الفنادق في وسط المدينة وحول خليج فاغن وقريبا من محطة القطار ، وهي الأنسب للتنقل سيرا على الأقدام",
      "Suggested hotels in Bergen: the hotels are spread around the city centre, along Vågen bay and near the railway station, which is the most convenient area for getting around on foot.",
    ],
    ["H3", "مطاعم بيرغن", "Restaurants in Bergen"],
    [
      "P",
      "مطاعم مقترحة في بيرغن ، وأشهرها مطاعم الأسماك حول سوق السمك في الميناء ، حيث تقدم المأكولات البحرية الطازجة يوميا",
      "Suggested restaurants in Bergen, the most famous being the fish restaurants around the fish market at the harbour, where fresh seafood is served daily.",
    ],
    ["H3", "نصائح ومعلومات قبل السفر الى بيرغن", "Tips and information before travelling to Bergen"],
    [
      "P",
      "تعد بيرغن مركز الجمال والثقافة والطبيعة الأخاذة في النرويج ، يمكنك استكشافها في مدة لا تقل عن 10 أيام ، مع العلم أن النرويج واحدة من أغلى دول العالم ، فربما تجد الرحلة مكلفة قليلا ولكنها تستحق بالتأكيد",
      "Bergen is Norway's centre of beauty, culture and breathtaking nature. You can explore it over at least 10 days, bearing in mind that Norway is one of the most expensive countries in the world — you may find the trip a little costly, but it is certainly worth it.",
    ],
    [
      "P",
      "حاول تعلم بعض الجمل والعبارات النرويجية ليسهل عليك التواصل مع الآخرين",
      "Try to learn a few Norwegian phrases and expressions to make communicating with others easier.",
    ],
    [
      "P",
      "يجب عليك ارتداء ملابس ثقيلة نوعا ما ، فأعلى درجة حرارة تكون 14 درجة مئوية",
      "You should wear reasonably heavy clothing, as the highest temperature is around 14 degrees Celsius.",
    ],
    [
      "P",
      "شراء بطاقة زيارة بيرغن ضرورية لأنها تمنحك دخول مجاني لبعض الأماكن ، وكذلك تخفيض للمتاحف والمعالم السياحية ، مع العلم أن البطاقة لها مدة محددة ، فعليك اختيار المدة التي ستزور فيها بيرغن",
      "Buying the Bergen Card is essential, as it gives you free entry to some places and discounts on museums and attractions. The card is valid for a fixed period, so choose the length that matches your stay in Bergen.",
    ],
    [
      "P",
      "ركوب الحافلات العامة هي الخيار الأفضل للتنقل في بيرغن ، لأن السيارات الخاصة مرتفعة الأسعار الى حد ما",
      "Public buses are the best option for getting around Bergen, because private cars are rather expensive.",
    ],
    [
      "P",
      "وحدة العملة في النرويج هي الكرونة النرويجية (NOK) ، وتعادل 50 فلس بحريني تقريبا",
      "The currency of Norway is the Norwegian krone (NOK), roughly equal to 50 Bahraini fils.",
    ],
    [
      "P",
      "اللغة الرسمية هي اللغة النرويجية ، ومع ذلك لن تجد صعوبة في التواصل بالانجليزية ، فأغلب السكان يجيدونها",
      "The official language is Norwegian, but you will have no difficulty communicating in English, as most people speak it well.",
    ],
    img("2023/04/img_0592.jpg"),
  ],
);

/* ---------------------------- LYSEFJORD ---------------------------- */

const LYSEFJORD = build(
  "https://100region.com/?p=34922&amp=1",
  "تعرف على أنشطة منطقة ليسفجورد وما حولها",
  "Activities in the Lysefjord area and around it",
  lysefjordHeroAsset.url,
  [
    [
      "P",
      "تتنوع الأنشطة والبرامج والفعاليات في منطقة ليسفجورد ، وبطبيعة الحال في المناطق المجاورة لها والقريبة منها أيضا ، كونها برامج شيقة وممتعة وتعطي انطباعا مهما عن حجم السياحة المذهلة في تلك المناطق ، واليكم ستة نماذج مقترحة من هذه الفعاليات كي تأخذوا فكرة عن الوضع العام السائد هناك",
      "The activities, programmes and events in the Lysefjord area — and naturally in the neighbouring areas close to it — are wonderfully varied. They are engaging and enjoyable, and they give an important impression of the sheer scale of tourism in those areas. Here are six suggested examples so you can get an idea of what to expect there.",
    ],
    ["H5", "أولا : قرية لاندا بارك ما قبل التاريخ", "First: the prehistoric village of Landa Park"],
    [
      "P",
      "تعد زيارة منتزه لاندا في Forsand في Ryfylke رحلة مثيرة عبر الزمن ، أحضر عائلتك وتقرب عن كثب للتاريخ",
      "A visit to Landa Park in Forsand in Ryfylke is an exciting journey through time. Bring your family and get close to history.",
    ],
    img("2023/04/img_0745.jpg"),
    [
      "P",
      "عاش اسلافهم هنا بشكل مستمر لمدة 2000 عام ، من حوالي 1500 قبل الميلاد الى 600 بعد الميلاد ، تعتبر الاكتشافات الأثرية في لاندا فريدة من نوعها ويمكن أن تشير الى تاريخ يعود الى 2000 عام في الزمن ، وذلك من العصر البرونزي الى فترة الهجرة",
      "Their ancestors lived here continuously for 2,000 years, from around 1500 BC to AD 600. The archaeological finds at Landa are unique and can point to a history reaching 2,000 years back in time, from the Bronze Age to the Migration Period.",
    ],
    img("2023/04/img_0744.jpg"),
    [
      "P",
      "تهدف اعادة الاعمار الى اعادة خلق شيء من الغلاف الجوي الذي كان سائدا منذ 3000 عام ، تم عرض المبنى الأول ، وهو منزل من العصر البرونزي ، في عام 1995م ، شاهد كيف التاريخ ينبض بالحياة",
      "The reconstruction aims to recreate something of the atmosphere that prevailed 3,000 years ago. The first building, a Bronze Age house, was presented in 1995. Watch history come to life.",
    ],
    img("2023/04/img_0743.jpg"),
    [
      "P",
      "شارك في أنشطة رائعة مثل الجولات المصحوبة بمرشدين ، القوس والسهم ، اخبز الخبز والفطائر فوق النار ، قم بانشاء عقد خاص بك من ravstone ، وقم بانشاء جرار من السيراميك ، ورمي حدوات الخيل ، وركوب الخيل ، واستئجار قوارب الكاياك ، واستئجار الدراجات ، ورحلات الصيد ، ومسار النشاط والحيوانات الصديقة",
      "Take part in wonderful activities such as guided tours, archery, baking bread and flatbread over the fire, making your own amber necklace, making ceramic jars, horseshoe throwing, horse riding, kayak hire, bike hire, fishing trips, the activity trail and the friendly animals.",
    ],
    img("2023/04/img_0742.jpg"),
    [
      "P",
      "بالقرب من ليسفيجورد المهيب يقع Landa Park Camping في Forsand ، أنت قريب جدا من الأماكن السياحية الرئيسية ، وعليك التوجه لها اذا امكن ذلك ، مثل Preikestolen (Pulpit Rock) وKjerag ، يعد Landa Park Camping أيضا قاعدة رائعة للعديد من رحلات التنزه الرائعة الأخرى في المنطقة ، يمكننا أن نوصي على سبيل المثال Uburen وRøssdalen وSolifjell أو Sokkanuten مع اطلالاته الخلابة على Lysefjord وقرية Forsand",
      "Close to the majestic Lysefjord lies Landa Park Camping in Forsand. You are very near the main attractions and should head for them if you can, such as Preikestolen (Pulpit Rock) and Kjerag. Landa Park Camping is also a great base for many other wonderful hikes in the area — we can recommend Uburen, Røssdalen and Solifjell, or Sokkanuten with its stunning views over Lysefjord and the village of Forsand.",
    ],
    img("2023/04/img_0741.jpg"),
    ["P", "عنوان المنتزه هو : Haukalivegen 24 ، فورساند", "The address of the park is Haukalivegen 24, Forsand."],
    ["H5", "ثانيا : ركوب الخيل في أوبوران", "Second: horse riding at Uburen"],
    [
      "P",
      "يقوم Fossanmoen Islandshestsenter بترتيب ركوب الخيل الى Uburen في Forsand ، تستغرق الرحلة من 3-4 ساعات ، وستحصل على مناظر رائعة في الأعلى ، للرحلة الى Uburen ، سيجد لك مدرب Fossanmoen خوذة وحصانا مناسبا ، بعد ذلك سيتم اعطاؤك معلومات حول الرحلة وسيظهر لك كيفية التعامل مع خيلك",
      "Fossanmoen Islandshestsenter arranges horse rides up to Uburen in Forsand. The trip takes 3–4 hours and you get wonderful views at the top. For the ride to Uburen the Fossanmoen instructor will find you a helmet and a suitable horse, then give you information about the trip and show you how to handle your horse.",
    ],
    img("2023/04/img_0748.jpg"),
    [
      "P",
      "الجزء الأول من الرحلة يحدث على الطريق ، هذا يعطي الوقت لكل من الفارس والحصان للاحماء قبل الدخول الى التضاريس الأكثر تحديا ، الممر شديد الانحدار وصخري وطويل ، ستقدر على الفور موهبة الحصان الأيسلندي في مثل هذه البيئة الصعبة ، بمجرد الوصول الى القمة ، تتسطح الأراضي وعلى ارتفاع 400 متر فوق المضيق البحري ، ستشعر بالجبال العالية ، المناظر هنا مطلة على قرية Rossavik ، وهو مجتمع زراعي خلاب يقع في الجزء الداخلي من Høgsfjord",
      "The first part of the trip happens on the road, giving both rider and horse time to warm up before entering more demanding terrain. The path is steep, rocky and long, and you will immediately appreciate the talent of the Icelandic horse in such a difficult environment. Once you reach the top the land flattens out, and at 400 metres above the fjord you feel the high mountains. The views here look over the village of Rossavik, a picturesque farming community in the inner part of Høgsfjord.",
    ],
    img("2023/04/img_0747.jpg"),
    [
      "P",
      "الجزء الثاني من الرحلة يخصص للمسار المتموج ويصل ارتفاعه الى 416 مترا ، ومن هنا توجد مناظر جميلة ورائعة مطلة على Boknafjord ، ومصب Lysefjord ، وقرى Forsand وIms وHøle والعديد من الجزر ، في الطقس الجيد جدا ، يمكن للمرء أيضا رؤية ستافنجر وجزر Karmoy وBokn البعيدة",
      "The second part of the trip is given to the undulating trail, which climbs to 416 metres. From here there are beautiful, magnificent views over Boknafjord, the mouth of Lysefjord, the villages of Forsand, Ims and Høle and many islands. In very good weather you can also see Stavanger and the distant islands of Karmøy and Bokn.",
    ],
    img("2023/04/img_0746.jpg"),
    [
      "P",
      "على الرغم من ان التضاريس متطلبة الا ان المدرب يهتم كثيرا للسماح للجميع بوقت للراحة ، الهدف هو منح جميع الدراجين تجربة لا تنسى ، لكن عند حجز الجولة ، امنحهم بعض المعلومات حول قدرتك وخبرتك في الركوب",
      "Although the terrain is demanding, the instructor takes great care to give everyone time to rest. The aim is to give all riders an unforgettable experience — but when you book the tour, give them some information about your ability and riding experience.",
    ],
    [
      "P",
      "عنوان المكان هو : Fossanmoen Islandshestsenter, Espedalsvegen 174, Forsand",
      "The address is Fossanmoen Islandshestsenter, Espedalsvegen 174, Forsand.",
    ],
    ["H5", "ثالثا : الدراجات الكهربائية والتقليدية", "Third: electric and traditional bicycles"],
    [
      "P",
      "هل تريد تجربة Forsand بطريقة مستدامة ؟ اكتشف Lysefjorden تأجير كل من الدراجات الكهربائية والتقليدية في Gøysa Gard ، وكذلك ترتيب جولات الدراجات المصحوبة بمرشدين",
      "Do you want to experience Forsand in a sustainable way? Explore Lysefjorden hires out both electric and traditional bicycles at Gøysa Gard, and also arranges guided cycling tours.",
    ],
    img("2023/04/img_0754.jpg"),
    [
      "P",
      "يعد ركوب الدراجات حول Forsand والمناطق المحيطة بها أحد أكثر الطرق استدامة لاستكشاف الطبيعة النرويجية المذهلة ، هناك أميال من الطرق الصغيرة والمريحة التي تأخذك الى الوديان ، بجانب المضيق البحري وبين الجبال والشلالات والبحيرات",
      "Cycling around Forsand and its surroundings is one of the most sustainable ways to explore Norway's stunning nature. There are miles of small, comfortable roads that take you into the valleys, beside the fjord and among the mountains, waterfalls and lakes.",
    ],
    img("2023/04/img_0753.jpg"),
    [
      "P",
      "يمكنك الاختيار بين دراجاتهم الكهربائية التي يمكن أن تأخذك الى الأطراف البعيدة لمنطقتنا الجميلة ، أو الدراجات التقليدية اذا كنت تريد المزيد من التمارين أو مجرد جولة صغيرة في الحي ، يمكن للجميع استئجار الدراجات ، اذا كنت تقيم في Gøysa Gard ، فستحصل على خصم 20٪",
      "You can choose between their electric bikes, which can take you to the far edges of this beautiful region, or traditional bikes if you want more exercise or just a short ride around the neighbourhood. Anyone can hire a bike, and if you stay at Gøysa Gard you get a 20% discount.",
    ],
    img("2023/04/img_0752.jpg"),
    [
      "P",
      "هناك أيضا الكثير من أماكن التنزه في المنطقة التي تعتبر مثالية للاستكشاف مع جولة بالدراجة ، يسعدهم في Gøysa Gard مساعدتك في وضع خطة تناسبك",
      "There are also plenty of walking spots in the area that are perfect to explore with a bike ride, and the team at Gøysa Gard are happy to help you put together a plan that suits you.",
    ],
    img("2023/04/img_0751.jpg"),
    [
      "P",
      "من الممكن أيضا القيام بجولة متعددة الأيام والنوم في خيمة أو البقاء في مقصورة تديرها DNT (جمعية الرحلات النرويجية)",
      "It is also possible to do a multi-day tour, sleeping in a tent or staying in a cabin run by DNT (the Norwegian Trekking Association).",
    ],
    img("2023/04/img_0750.jpg"),
    ["P", "عنوان المكان هو : Gøysa Gard, Gjøysavegen 26, Forsand", "The address is Gøysa Gard, Gjøysavegen 26, Forsand."],
    img("2023/04/img_0749.jpg"),
    ["H5", "رابعا : التنزه حول ليسفجوردن", "Fourth: hiking around Lysefjorden"],
    [
      "P",
      "أحد أروع مسارات التنزه لعدة أيام في النرويج ، تقع كل من Preikestolen وKjerag وFlørli المعروفة عالميا على طول Lysefjord في Ryfylke",
      "One of the finest multi-day hiking trails in Norway: the world-famous Preikestolen, Kjerag and Flørli all lie along Lysefjord in Ryfylke.",
    ],
    img("2023/04/img_0760.jpg"),
    [
      "P",
      "ومع ذلك فان المضيق البحري الذي يبلغ طوله 42 كيلومترا يوفر مجموعة واسعة من المسارات الأخرى الأقل شهرة والتكوينات الصخرية ووجهات النظر ، يبلغ طول الممر أكثر من 100 كيلومتر وينقسم الى 8 مراحل",
      "Yet the 42-kilometre fjord offers a wide range of other, less famous trails, rock formations and viewpoints. The route is more than 100 kilometres long and is divided into 8 stages.",
    ],
    img("2023/04/img_0759.jpg"),
    [
      "P",
      "تعتبر Lysefjorden Rundt واحدة من أروع مسارات المشي لمسافات طويلة في البلاد ، وهي موصى بها بشدة من قبل جمعية الرحلات النرويجية (DNT) ، يمتد مسار Lysefjorden Rundt من المضيق البحري الى الجبل ، ويعود مرة أخرى عدة مرات ، يمر عبر المزارع الجبلية القديمة ، ومستوطنات الطاقة الكهرومائية المهجورة ، والبحيرات الجبلية ، والوديان والمنحدرات الصخرية ، وفوق الصخور ، وعبر الغابات المورقة ، بالاضافة الى الطبيعة الجميلة ، يمكنك اكتشاف العديد من الكنوز الثقافية والتاريخية",
      "Lysefjorden Rundt is one of the country's most magnificent long-distance walks and is strongly recommended by the Norwegian Trekking Association (DNT). The route runs from the fjord up to the mountain and back down again several times, passing old mountain farms, abandoned hydropower settlements, mountain lakes, valleys and cliffs, over rock and through lush forest. Besides the beautiful nature, you can discover many cultural and historical treasures.",
    ],
    img("2023/04/img_0758.jpg"),
    [
      "P",
      "تم وضع علامة Lysefjorden Rundt وتمييزها بالتعاون مع جمعية الرحلات النرويجية وLysefjorden Utvikling وملاك الأراضي المحليين ، التضاريس والممر في بعض الأحيان متطلبان للغاية ، لكن عليك ان تتذكر أنه ليس عليك التنزه حول Lysefjord بأكمله ، نرحب بك لجمع المراحل المختلفة والعودة عدة مرات وعلى طول المسار ، يمكنك قضاء الليل في أنواع مختلفة من الكبائن والمرافق السياحية",
      "Lysefjorden Rundt was marked and signposted in cooperation with the Norwegian Trekking Association, Lysefjorden Utvikling and local landowners. The terrain and the path are at times very demanding, but remember that you do not have to hike around the whole of Lysefjord. You are welcome to collect the different stages and come back several times, and along the route you can spend the night in various kinds of cabins and tourist facilities.",
    ],
    img("2023/04/img_0757.jpg"),
    ["H5", "المراحل المخصصة", "The designated stages"],
    ["LI", "المرحلة 1 : Vinddalen – Skåpet ، سهل – 3.5 كم", "Stage 1: Vinddalen – Skåpet, easy – 3.5 km"],
    ["LI", "المرحلة 2 : Skåpet – Flørli ، متطلب – 10 كم", "Stage 2: Skåpet – Flørli, demanding – 10 km"],
    ["LI", "المرحلة 3 : Flørli – Langavatn ، متطلب للغاية – 17 كم", "Stage 3: Flørli – Langavatn, very demanding – 17 km"],
    ["LI", "المرحلة 4 : لانجافاتن – كيجراج – ليسيبوتن ، متطلب – 13 كم", "Stage 4: Langavatn – Kjerag – Lysebotn, demanding – 13 km"],
    ["LI", "المرحلة 5 : ليسيبوتن – سونجدالن فيلجارد ، متطلب – 24 كم", "Stage 5: Lysebotn – Songedalen Fjellgard, demanding – 24 km"],
    ["LI", "المرحلة 6 : Songedalen Fjellgard – Bakken Gård ، متوسط : 10 كم", "Stage 6: Songedalen Fjellgard – Bakken Gård, moderate – 10 km"],
    ["LI", "المرحلة 7 : باكن جارد – Preikestolen BaseCamp ، متطلب : 16 كم", "Stage 7: Bakken Gård – Preikestolen BaseCamp, demanding – 16 km"],
    ["LI", "المرحلة 8 : Preikestolen BaseCamp – Høllesliheia ، متطلب : 9 كم", "Stage 8: Preikestolen BaseCamp – Høllesliheia, demanding – 9 km"],
    img("2023/04/img_0755.jpg"),
    ["P", "عنوان المكان هو : Vinddalen, FORSAND", "The address is Vinddalen, Forsand."],
    ["H5", "خامسا : التنزه في بريكستولن", "Fifth: hiking at Preikestolen"],
    [
      "P",
      "تعد منطقة Preikestolen (Pulpit Rock) أشهر مناطق الجذب السياحي في النرويج ، حيث يبلغ ارتفاعها 604 مترا فوق Lysefjord ، وتم اختيار Preikestolen كواحدة من أكثر نقاط المشاهدة اثارة في العالم من قبل كل من CNN Go وLonely Planet ، فعلى الأرجح تشكلت الهضبة الجبلية التي تبلغ حوالي 25 × 25 مترا من خلال تمدد الجليد منذ حوالي 10000 عام ، المياه التي تجمدت في شقوق الجبل تسببت في كسر كتل كبيرة من الحجر ذات الحواف التي جلبها الجليد الجليدي على طول مجراه ، وفي الأيام الخوالي ، كان اسم الهضبة هو Hyvlatånnå (سن مسطح) ، وكان معروفا في ذلك الوقت كمعلم للمسافرين في المضيق البحري في Lysefjord ، لم يكن الأمر كذلك حتى عام 1900م ، حيث سافر أول سائح الى القمة وتم اكتشاف بريكستولن كوجهة سياحية",
      "Preikestolen (Pulpit Rock) is Norway's most famous attraction, standing 604 metres above Lysefjord. It has been named one of the world's most spectacular viewpoints by both CNN Go and Lonely Planet. The mountain plateau, roughly 25 by 25 metres, was most likely formed by the expansion of ice around 10,000 years ago: water that froze in the cracks of the mountain broke off large blocks of stone with edges that the glacier carried along its course. In the old days the plateau was called Hyvlatånnå (the planed tooth) and was known as a landmark for travellers on the Lysefjord. It was not until 1900 that the first tourist travelled to the summit and Preikestolen was discovered as a destination.",
    ],
    img("2023/04/img_0761.jpg"),
    ["H5", "موسم التنزه", "The hiking season"],
    ["LI", "الموسم الرئيسي : أبريل – أكتوبر", "Main season: April – October"],
    [
      "LI",
      "خارج الموسم : يوصى باستخدام الدليل ، الصعود 500 متر ، الوقت المتوقع من 4-5 ساعات",
      "Out of season: a guide is recommended. Ascent 500 m, expected time 4–5 hours.",
    ],
    [
      "P",
      "تبدأ الرحلة من مواقف السيارات ، يتم تطبيق رسوم وقوف السيارات بجوار Preikestolen Mountain Lodge ، يقع هنا مرفق خدمة مع مراحيض ، يتكون الارتفاع من تضاريس جبلية مع اختلاف في الارتفاع يبلغ 500 متر ، عامل الجذب الرئيسي في التنزه أنك تحصل على قمة الهضبة مع اطلالة ساحرة على Lysefjord المتميز ، بالاضافة الى ذلك ، هناك أماكن جميلة للسباحة بالاضافة الى مناطق استرخاء ممتعة على طول الطريق",
      "The trip starts from the car park; a parking fee applies next to the Preikestolen Mountain Lodge, where there is a service facility with toilets. The climb consists of mountain terrain with a height difference of 500 metres. The main draw of the hike is that you reach the top of the plateau with its charming view over the remarkable Lysefjord, and along the way there are lovely swimming spots as well as pleasant places to relax.",
    ],
    [
      "P",
      "من المهم ان تتحقق من حالة الطقس في جميع الأوقات ، اذا كان هناك ثلوج في الجبال ، فلا ينصح بالقيام بالمشي لمسافات طويلة ، أو يجب عليك استخدام مرشد عن الطبيعة ، تذكر دائما الأحذية الجيدة ، ويفضل الأحذية الجبلية والملابس الدافئة والأطعمة والمشروبات ، اذا كان الطقس يشير الى ظروف صعبة ، فيرجى استخدام عصي المشي في التنزه ، اللياقة البدنية العامة الجيدة ضرورية ، ولتجنب ضياع ضوء النهار في رحلة العودة ، يجب ألا تشرع في هذه الرحلة في وقت متأخر جدا من اليوم",
      "It is important to check the weather at all times. If there is snow in the mountains the hike is not recommended, or you should use a nature guide. Always remember good footwear — preferably mountain boots — warm clothing, food and drink. If the weather points to difficult conditions, please use walking or ski poles on the hike. Good general fitness is essential, and to avoid losing daylight on the way back you should not set out too late in the day.",
    ],
    img("2023/04/img_0762.jpg"),
    [
      "P",
      "خارج الموسم يمكنك المشي لمسافات طويلة الى Preikestolen على مدار السنة ، كما أن شروق الشمس والشتاء تزداد شعبية ، بسبب وجود الثلج والجليد ، لا ينصح بالمشي لمسافات طويلة الى Preikestolen بدون مرشد خلال فصل الشتاء (يناير – مارس) ، تم تدريب المرشدين المحترفين من Explore Lysefjorden على المناورة بأمان خلال الظروف الجوية المتغيرة بسرعة ، يحملون معهم جميع معدات الملاحة والسلامة اللازمة ، كما وتنظم شركة الدليل أيضا النقل ، والذي يمكن أن يمثل تحديا خارج موسم التنزه الرئيسي",
      "Out of season you can hike to Preikestolen all year round, and sunrise and winter hikes are becoming more popular. Because of snow and ice, hiking to Preikestolen without a guide is not recommended during winter (January – March). The professional guides from Explore Lysefjorden are trained to manoeuvre safely through rapidly changing weather and carry all the necessary navigation and safety equipment. The guiding company also arranges transport, which can be a challenge outside the main hiking season.",
    ],
    [
      "P",
      "من الرائع أيضا تجربة Preikestolen من المضيق البحري ، اما من قارب لمشاهدة المعالم أو من عبارة سيارة متجهة من Lauvvik أو Oanes أو Stavanger أو من عدة أماكن أخرى للاتصال في Lysefjorden",
      "It is also wonderful to experience Preikestolen from the fjord, either from a sightseeing boat or from a car ferry travelling from Lauvvik, Oanes or Stavanger, or from several other calling points in Lysefjorden.",
    ],
    ["H5", "حقيقة ممتعة عن بريكستولن", "A fun fact about Preikestolen"],
    [
      "P",
      "يبدو الشق الموجود في هضبة Preikestolen وكأنه قد تم نحته بسكين ، من الواضح أن النمط الزاوي للشق يكون مرئيا عند النظر الى الهضبة من الأعلى ، يمكنك بسهولة أن تتخيل أن الكتل الكبيرة بجوار Preikestolen قد تراجعت الى Lysefjord ، وعلى طول المضيق البحري بأكمله ، ستجد ما يسمى بفجوات ازالة الضغط ، ومثال كتابي على هذا هو الشق الموجود في Preikestolen ، عندما ذاب النهر الجليدي منذ حوالي 10000 عام ، اختفى الضغط من الجليد وانفتح الجبل",
      "The crack in the Preikestolen plateau looks as if it were carved with a knife, and the angular pattern of the crack is clearly visible when you look at the plateau from above. You can easily imagine that the large blocks beside Preikestolen once slid down into Lysefjord. Along the whole fjord you will find so-called pressure-release fissures, and a textbook example is the crack in Preikestolen: when the glacier melted around 10,000 years ago, the pressure of the ice disappeared and the mountain opened up.",
    ],
    ["H5", "اكتشاف بريكستولن", "The discovery of Preikestolen"],
    [
      "P",
      "كان لاعب الجمباز توماس بيتر راندولف مسافرا في Lysefjord على متن قارب بخاري Oscar II ، أشار قبطان السفينة باصبعه الى التكوين الصخري الخاص المرتفع فوق المضيق البحري ، وقال : هذا يشبه المنبر (بريكيستول) ، بالنسبة للجمباز والرياضي راندولف تم تحديد الهدف ، فأراد أن يصل الى قمة هذا الجبل ، كانت هذه بداية حركة السياحة الى بريكستولن ، في عام 1949م ، قامت جمعية Stavanger Trekking ببناء نزل Preikestolen حتى يتمكن السياح من الوصول بسهولة الى المنطقة ، في عام 1961م ، تم بناء الطريق المؤدية الى النزل",
      "The gymnast Thomas Peter Randulff was travelling on Lysefjord aboard the steamer Oscar II when the ship's captain pointed to the peculiar rock formation rising above the fjord and said: that looks like a pulpit (preikestol). For the gymnast and athlete Randulff the goal was set — he wanted to reach the top of that mountain. This was the beginning of tourism to Preikestolen. In 1949 the Stavanger Trekking Association built the Preikestolen lodge so that tourists could reach the area easily, and in 1961 the road to the lodge was built.",
    ],
    img("2023/04/img_0763.jpg"),
    ["P", "عنوان المكان هو : Preikestolen, JØRPELAND", "The address is Preikestolen, Jørpeland."],
    ["H5", "سادسا : التنزه في كجيراغ", "Sixth: hiking at Kjerag"],
    [
      "P",
      "تعتبر Kjerag جلالة Lysefjord ، في Ryfylke ، على ارتفاع 1084 متر ، حيث تقع أبراج Kjerag فوق القمم الأخرى على طول Lysefjord",
      "Kjerag is the majesty of Lysefjord, in Ryfylke: at 1,084 metres, Kjerag towers above the other peaks along the fjord.",
    ],
    img("2023/04/img_0764.jpg"),
    [
      "P",
      "كان من المعتاد الاستمتاع بهذا الوجه الجبلي من المضيق البحري ، ولكن في السنوات الأخيرة ، أصبح السير على الطريق المؤدية الى الهضبة أمرا شائعا بشكل متزايد ، يسعد معظم الناس فقط بالاستمتاع بمنظر Lysefjord ، ولكن بالنسبة لبعض المتنزهين ، فان ذروة الرحلة هي أن يتم تصويرهم على Kjeragbolten ، وهي صخرة مستديرة مثبتة بقوة في شق جبلي",
      "It used to be customary to enjoy this mountain face from the fjord, but in recent years walking the path up to the plateau has become increasingly common. Most people are happy simply to enjoy the view over Lysefjord, but for some hikers the highlight of the trip is being photographed on Kjeragbolten, a round boulder wedged firmly in a mountain crevice.",
    ],
    [
      "P",
      "أصبحت Kjerag أيضا نقطة جذب شهيرة لمتسلقي الجبال والقفزات الأساسية ، وقد تم اعتماد الممر المؤدي الى Kjerag باعتباره رحلات مشي نرويجية ذات مناظر طبيعية خلابة",
      "Kjerag has also become a famous draw for mountain climbers and base jumpers, and the path up to Kjerag has been certified as one of Norway's scenic hikes.",
    ],
    img("2023/04/img_0765.jpg"),
    [
      "P",
      "خلال فصل الصيف ، يمكنك الوصول الى Kjerag عن طريق ركوب عبارة السيارة السياحية الى Lysebotn ثم الذهاب بالسيارة أو التاكسي الى Øygardstøl ، نقطة انطلاق الرحلة ، وفي موسم الذروة يمكنك أيضا الذهاب بالحافلة من Stavanger الى Øygardstøl",
      "During summer you can reach Kjerag by taking the tourist car ferry to Lysebotn and then going by car or taxi to Øygardstøl, the starting point of the hike. In peak season you can also take the bus from Stavanger to Øygardstøl.",
    ],
    [
      "P",
      "تبدأ الرحلة من موقف السيارات (الرسوم) في Øygardstøl جنوب Lysefjord بواسطة Lysevegen فوق Lysebotn ، يوجد هناك مرفق خدمة به مراحيض ومعلومات سياحية ، وسيأخذك الممر الصعب صعودا وهبوطا على قمم الجبال ، ويبلغ فرق الارتفاع 750 مترا ، من المهم دائما اتخاذ احتياطات الطقس ، اذا كان هناك ثلوج في الجبل ، فلا ينصح القيام بالمشي لمسافات طويلة ، أو يجب عليك استخدام دليل الطبيعة ، ودائما تذكر الأحذية الجيدة ، ويفضل الأحذية الجبلية والملابس الدافئة والأطعمة والمشروبات",
      "The hike starts from the (paid) car park at Øygardstøl south of Lysefjord, by the Lysevegen road above Lysebotn, where there is a service facility with toilets and tourist information. The difficult path takes you up and down over mountain tops, with a height difference of 750 metres. It is always important to take weather precautions: if there is snow on the mountain the hike is not recommended, or you should use a nature guide. Always remember good footwear, preferably mountain boots, warm clothing, food and drink.",
    ],
    [
      "P",
      "واذا كان الطقس يشير الى ظروف صعبة ، فيرجى استخدام عصي المشي في التنزه ، اللياقة البدنية العامة الجيدة ضرورية ، ولتجنب ضياع ضوء النهار في رحلة العودة ، يجب ألا تشرع في هذه الرحلة في وقت متأخر جدا من اليوم ، احرص على الحصول على معلومات حول وقت غروب الشمس بالاضافة الى أحوال الطقس الأخرى",
      "And if the weather points to difficult conditions, please use walking poles on the hike. Good general fitness is essential, and to avoid losing daylight on the way back you should not set out too late in the day. Make sure to get information about the time of sunset as well as other weather conditions.",
    ],
    img("2023/04/img_0772.jpg"),
    [
      "P",
      "تجربة كجيراغ من المضيق البحري ، فـ Kjerag هو منظر مثير للاعجاب من المضيق البحري ، اما من العبارة أو من القارب لمشاهدة المعالم ، يمكنك ايضا القاء نظرة على ارتفاع 1000 متر فوقك ، واذا كنت محظوظا ، قد ترى لاعبي القفز الأساسي خلال فصل الصيف",
      "Experiencing Kjerag from the fjord: Kjerag is an impressive sight from the water, whether from the ferry or from a sightseeing boat. You can also look up 1,000 metres above you, and if you are lucky you may see base jumpers during the summer.",
    ],
    img("2023/04/img_0774.jpg"),
    [
      "P",
      "حقائق ممتعة عن كجيراغ : في جبل Kjerag وفي مكان واحد محدد قبل الوصول الى قمة الجبل ، يمكنك أحيانا سماع صوت مشابه لصوت طلقة نارية ورؤية الدخان يتصاعد من الجبل ، وهذا يحدث مرة أخرى من وقت لآخر ، اختبر مهندس المساحة هذه الظاهرة في عام 1855م ، تقول قصته : سمعت لأول مرة بعض الانفجارات التي أصبحت تدريجيا أكثر تواترا وأقوى ، ثم سمعت ضجيجا رهيبا عندما رأيت شعاعا من الضوء ينطلق أفقيا من الصخرة الى داخل وسط المضيق البحري ، حيث ذاب واختفى ، لماذا يحدث هذا ، لا أحد يعرف على وجه اليقين ، لكن السكان المحليين افترضوا منذ سنوات أن الماء يجبر على الخروج من الجبل",
      "Fun facts about Kjerag: on the mountain, at one particular spot before you reach the summit, you can sometimes hear a sound like a gunshot and see smoke rising from the rock. It happens again from time to time. A surveyor experienced this phenomenon in 1855 and told his story: I first heard some explosions that gradually became more frequent and stronger, then I heard a terrible noise as I saw a beam of light shoot horizontally out of the rock into the middle of the fjord, where it dissolved and disappeared. Why this happens, nobody knows for certain, but locals have supposed for years that water is forced out of the mountain.",
    ],
    img("2023/04/img_0773.jpg"),
    ["P", "عنوان المكان هو : Lysebotn, FORSAND", "The address is Lysebotn, Forsand."],
  ],
);

export const NORWAY_CITY_ARTICLES: Record<string, CityArticle> = {
  oslo: OSLO.ar,
  bergen: BERGEN.ar,
  lysefjord: LYSEFJORD.ar,
};

export const NORWAY_CITY_ARTICLES_EN: Record<string, { title: string; values: string[] }> = {
  oslo: OSLO.en,
  bergen: BERGEN.en,
  lysefjord: LYSEFJORD.en,
};
