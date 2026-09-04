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

/* --------------------------- ČESKÉ BUDĚJOVICE --------------------------- */

const CESKE_BUDEJOVICE = build(
  "https://100region.com/?p=29879&amp=1",
  "السياحة في التشيك – مدينة سيسكي بوديوفيتش",
  "Tourism in Czechia — České Budějovice City",
  U("2022/11/img_6028.jpg"),
  [
    [
      "H4",
      "اكتشف المواقع الخلابة ذات الطابع التاريخي",
      "Discover the stunning sites with a historic character",
    ],
    [
      "P",
      "تجمعت منازل التاون هاوس الأنيقة حول واحدة من أكبر الساحات في أوروبا ، ومتجر ملح مثالي ومصنع جعة لطهي بيرة بودفار الأصلية – هذه هي České Budějovice ، عاصمة جنوب بوهيميا ، حافظت هذه المدينة على طابعها التاريخي على مر القرون ولكنها أيضا مركز اقليمي حديث ، تأسست České Budějovice في منتصف القرن الثالث عشر كمدينة ملكية ، بفضل موقعها الاستراتيجي الممتد على طول طريق تجارة الملح القديم بين براغ ولينز ، والذي تم استبداله لاحقا بأول سكة حديد تجرها الخيول في أوروبا ، نمت المدينة تدريجيا أكثر ثراء وثراء وتطورت لتصبح مستوطنة مهمة ، على الرغم من الحروب والحرائق المتكررة في العصور الوسطى ، فقد نجا عدد كبير من المواقع التاريخية ويمكن لزوار اليوم الاعجاب بهذه المواقع",
      "Elegant townhouses gathered around one of the largest squares in Europe, a perfect salt shop, and a brewery cooking up original Budvar beer — this is České Budějovice, the capital of South Bohemia. This city has kept its historic character over the centuries but is also a modern regional hub. České Budějovice was founded in the mid-thirteenth century as a royal town, thanks to its strategic location stretching along the old salt-trading route between Prague and Linz, which was later replaced by the first horse-drawn railway in Europe. The town gradually grew wealthier and wealthier and developed into an important settlement, and despite repeated wars and fires in the Middle Ages, a great many historic sites survived and today's visitors can admire them.",
    ],
    ["H5", "مربع الكتاب المدرسي", "The Textbook Square"],
    [
      "P",
      "في وسط České Budějovice ستجد فخر المدينة وفرحها – ساحة مربعة سميت على اسم الملك Přemysl Otakar II ، واحدة من أكبر المربعات في أوروبا ، تبلغ مساحتها هكتارا بالضبط وأصبحت جزء لا يتجزأ من كل كتاب رياضيات تشيكي ، الساحة محاطة بالمنازل الرائعة ذات الأقواس الباروكية ، والمبنى الكبير لمبنى البلدية ، وهو أحد أكثر الأماكن جاذبية في البلاد ، يزين أيضا أحجاره ، خذ قسطا من الراحة بجوار نافورة شمشون في المنتصف والتي تتميز ببعض الزخارف النحتية الرائعة ، تأكد من زيارة كاتدرائية القديس نيكولاس ومتجر الملح الشهير في المدينة أثناء التنزه في وسط المدينة",
      "In the centre of České Budějovice you will find the town's pride and joy — a square named after King Přemysl Otakar II, one of the largest squares in Europe. It measures exactly one hectare and has become an integral part of every Czech mathematics textbook. The square is surrounded by wonderful houses with baroque arcades, and the large town hall building, one of the most attractive spots in the country, also adorns its stones. Take a rest beside the Samson Fountain in the middle, which features some marvellous sculpted decorations, and be sure to visit St Nicholas's Cathedral and the town's famous salt shop while strolling through the town centre.",
    ],
    ["H5", "احترس من الهيكل العظمي", "Beware of the Skeleton"],
    [
      "P",
      "اذا كنت لائقا بما يكفي ، فتأكد من الصعود الى قمة البرج الأسود ، تم بناء هذا الرمز للمدينة لاظهار مدى ثراء České Budějovice ، وهو غارق في الأساطير والأساطير ، أحدها يتعلق بكيفية وضع الهيكل العظمي فوق جرس Bumerin ، ويقرعه للاحتفال بالوفيات لأن حارس البرج كان كسولا جدا لتسلق البرج عندما كان من المفترض أن يصعد ، يقال اليوم أن الأطفال فقط هم من يمكنهم رؤية الهيكل العظمي",
      "If you are fit enough, make sure to climb to the top of the Black Tower. This symbol of the town was built to show off just how wealthy České Budějovice was, and it is steeped in legends and lore. One of them concerns how a skeleton was placed above the Bumerin bell and rings it to mark deaths, because the tower guard was too lazy to climb up when he was supposed to. Today it is said that only children can see the skeleton.",
    ],
    ["H5", "بودفار الحقيقي", "The Real Budvar"],
    [
      "P",
      "جزء لا يتجزأ من المدينة هو مصنع الجعة Budějovický Budvar حيث تم انتاج البيرة باستخدام وصفة أصلية لمدة سبعة قرون ، لا تفوت فرصة زيارة مركز زوار مصنع الجعة حيث يمكنك التعرف على كل شيء عن رحيق العنبر في جنوب بوهيميا ، تعرف ماركة Budvar في جميع أنحاء العالم ، لكن الاسم تسبب في الكثير من الصداع ، الاسم الألماني للمدينة هو Budweis الذي يشكل جزء من اسم البيرة الأمريكية التي لا علاقة لها على الاطلاق بمشروب České Budějovice الشهير ، على الرغم من أن اجراءات المحكمة من المقرر أن تستمر لسنوات عديدة أخرى ، فان بودجوفيتش بودفار الحقيقي سيظل مذاقا جيدا عندما يتم الانتهاء من كل شيء وتنظيفه من الغبار ، يمكنك تذوق مشروع الجعة بودفار في Masné krámy الأسطوري ، الذي أسسه الملك تشارلز الرابع",
      "An integral part of the town is the Budějovický Budvar brewery, where beer has been produced using an original recipe for seven centuries. Don't miss the chance to visit the brewery's visitor centre, where you can learn everything about this amber nectar of South Bohemia. The Budvar brand is known throughout the world, but the name has caused a great deal of headache — the German name of the town is Budweis, which forms part of the name of the American beer that has absolutely nothing to do with České Budějovice's famous drink. Although court proceedings are set to continue for many more years, the real Budweiser Budvar will still taste good once everything is settled and dusted off. You can taste the Budvar brew at the legendary Masné krámy, founded by King Charles IV.",
    ],
    [
      "P",
      "يمكنك الاستمتاع بمعرض وسائط متعددة يسمى The Story of Budweiser Beer واكتشاف أسرار الجعة المشهورة عالميا Budweiser Budvar خلال جولة مصنع الجعة ، يدعوك تتويج الجولة لتذوق البيرة مباشرة في مخزن الجعة ، ويمكنك أيضا تجربة البيرة مباشرة من الخزانات في Masné krámy ، أشهر قاعات البيرة في České Budějovice",
      "You can enjoy a multimedia exhibition called The Story of Budweiser Beer and discover the secrets of the world-famous Budweiser Budvar beer during a brewery tour. The crowning moment of the tour invites you to taste the beer straight from the beer cellar, and you can also try the beer straight from the tanks at Masné krámy, the most famous beer hall in České Budějovice.",
    ],
  ],
);

/* --------------------------------- OLOMOUC -------------------------------- */

const OLOMOUC = build(
  "https://100region.com/?p=29892&amp=1",
  "السياحة في التشيك – مدينة أولوموك",
  "Tourism in Czechia — Olomouc City",
  U("2022/11/img_6074.jpg"),
  [
    [
      "H4",
      "استمتع برائحة وجمال الباروك في أولوموك",
      "Enjoy the scent and beauty of baroque in Olomouc",
    ],
    [
      "P",
      "لطالما كانت أولوموك واحدة من أهم المدن في مملكة بوهيميا ، بفضل موقعها المتميز والجامعة القديمة والتقاليد الروحية والثقافية ، فقد كانت المركز الطبيعي لمورافيا لعدة قرون ، يعتبر القلب التاريخي لمدينة أولوموتس ، الذي يسيطر عليه عمود الثالوث المقدس ، المدرج في قائمة اليونسكو ، ثاني أهم منطقة أثرية في جمهورية التشيك بعد براغ ، يجب عليك بالتأكيد تجربة التخصص المحلي ، Olomouc tvarůžky الشهير ، الجبن الأسطوري لنكهته ورائحته المميزة",
      "Olomouc has long been one of the most important towns in the Kingdom of Bohemia. Thanks to its distinguished location, its old university and its spiritual and cultural traditions, it has been the natural centre of Moravia for several centuries. The historic heart of Olomouc, dominated by the Holy Trinity Column, listed by UNESCO, is considered the second most important heritage site in the Czech Republic after Prague. You should definitely try the local speciality, the famous Olomouc tvarůžky, a legendary cheese known for its distinctive flavour and smell.",
    ],
    img("2022/11/img_6074.jpg"),
    img("2022/11/img_6075.jpg"),
    img("2022/11/img_6076.jpg"),
    img("2022/11/img_6077.jpg"),
    img("2022/11/img_6078.jpg"),
    img("2022/11/img_6079.jpg"),
    [
      "P",
      "أهم نصب تذكاري في أولوموك هو عمود الثالوث المقدس الذي يقف في الساحة المركزية ، يمثل أكبر مجموعة من تماثيل الباروك في هيكل واحد في وسط أوروبا ، يمكنك الحصول على عرض بانورامي للعمود من برج Town Hall القريب ، يمكنك أيضا الاستمتاع بجمالها الرائع أثناء الجلوس في أحد المقاهي هنا ، بصرف النظر عن العديد من المباني التاريخية ، هناك نقطة أخرى مثيرة للاهتمام حول أولوموك وهي الساعة الفلكية ، المصممة بروح الواقعية الاشتراكية ، يمكنك أيضا اكتشاف ثروة التاريخ هنا أثناء القيام بجولة في قلعة أولوموك ، والتي تم تصميمها لدرء هجمات الجيش البروسي الغاضب بفضل أسوارها الضخمة وثكناتها الواسعة ، بحثا عن التصوف والثروة على درب ألف عام من التاريخ",
      "The most important monument in Olomouc is the Holy Trinity Column, standing in the central square. It represents the largest single collection of baroque statues in one structure in Central Europe. You can get a panoramic view of the column from the nearby Town Hall tower, and you can also enjoy its wonderful beauty while sitting at one of the cafés here. Aside from the many historic buildings, another interesting point about Olomouc is the astronomical clock, designed in the spirit of socialist realism. You can also discover a wealth of history here while touring Olomouc Castle, which was designed to fend off the attacks of an angry Prussian army thanks to its massive walls and spacious barracks — a search for mysticism and riches along a path of a thousand years of history.",
    ],
    img("2022/11/img_6082.jpg"),
    img("2022/11/img_6081.jpg"),
    img("2022/11/img_6080.jpg"),
    [
      "P",
      "الأمراء الأسطوريون والملوك الموثقون تاريخيا لأقدم العائلات الحاكمة البوهيمية ، Přemysls ، لقد انتهى عصر حكمهم الشهير في أولوموك بالتحديد ، عندما قتل Wenceslas III هنا في عام 1306م ، وماتت العائلة بالسيف ، انطلقوا في دربهم الى السمة المهيمنة المكونة من الأبراج العالية الثلاثة لكاتدرائية القديس وينسيسلاس التي ترتفع فوق أفق أولوموك ثم تابع السير الى أراضي قلعة أولوموك أو لاكتشاف قصر رئيس الأساقفة المزخرف بأناقة ، مقر رائع لأسقفية أولوموك ، وأين يمكنك الذهاب للعثور على تاريخ الكنيسة المهم ؟ اسمح لنفسك بأن تصاب بالعمى من جمال الكنوز الموجودة في متحف الأبرشية ، الذي تأسس بتحريض من يوحنا بولس الثاني ، أو انطلق من أجل السلام والتأمل في موقع الحج الضخم الذي يشكل السمة الغالبة في أولوموك ، سفاتو كوبيشيك ، تعرف على التوازن الروحي والثروة المادية وجها لوجه مع ألف عام من التاريخ",
      "The legendary princes and historically documented kings of the oldest Bohemian ruling family, the Přemyslids, saw the era of their famous rule end right here in Olomouc, when Wenceslas III was killed here in the year 1306 and the family died out by the sword. Set off on their path towards the dominant feature made up of the three tall towers of St Wenceslas Cathedral, rising above the Olomouc skyline, then continue on to the grounds of Olomouc Castle, or to discover the elegantly ornamented Archbishop's Palace, a magnificent seat of the Olomouc archdiocese. And where can you go to find the church's important history? Allow yourself to be dazzled by the beauty of the treasures found in the Diocesan Museum, founded at the instigation of John Paul II, or set off for peace and contemplation at the massive pilgrimage site that forms the dominant feature of Olomouc, Svatý Kopeček — encounter spiritual balance and material riches face to face with a thousand years of history.",
    ],
    ["H5", "في أي مكان آخر على الانطلاق ؟", "Where else to head off to?"],
    [
      "P",
      "يوفر الريف الجميل لجبال Jeseníky الراحة من التباهي بالمباني في Olomouc ، هذه السلسلة الجبلية الخلابة هي الوجهة المثالية لقضاء عطلة نشطة ، جوهرة تاريخية أخرى يمكن العثور عليها في مورافيا هي مدينة Kroměříž ، والتي بفضل قصرها وحدائقها وجدت طريقها الى قائمة اليونسكو",
      "The beautiful countryside of the Jeseníky Mountains offers a rest from the grandeur of Olomouc's buildings. This stunning mountain range is the perfect destination for an active holiday. Another historic gem to be found in Moravia is the town of Kroměříž, which, thanks to its palace and gardens, found its way onto the UNESCO list.",
    ],
  ],
);

/* --------------------------------- MĚLNÍK -------------------------------- */

const MELNIK = build(
  "https://100region.com/?p=29884&amp=1",
  "السياحة في التشيك – مدينة ميلنيك",
  "Tourism in Czechia — Mělník City",
  U("2022/11/img_6108-1.jpg"),
  [
    ["H4", "استمتع بكل ما في المدينة", "Enjoy everything the town has to offer"],
    [
      "P",
      "لا توجد طريقة أفضل للاستمتاع بسحر Mlník الذي لا ينسى من مشاهدة غروب الشمس عند التقاء أكبر نهرين تشيكيين أسفل قصرها الرائع أثناء امتاع ذوقك بالنبيذ المحلي الممتاز ، وتأتي تجربة ذلك بنفسك",
      "There is no better way to enjoy Mělník's unforgettable charm than watching the sunset at the confluence of the two largest Czech rivers beneath its magnificent château, while delighting your palate with excellent local wine — an experience you must try for yourself.",
    ],
    [
      "P",
      "يمكنك بدء اقامتك في Mělník من خلال التجول في الساحة التي تصطف على جانبيها المباني المقنطرة الجميلة ، سوف تنجذب نظراتك بالتأكيد الى قاعة المدينة ودير Capuchin السابق المجاور ، واذا كنت تحب المساحات الغامضة ذات الطاقة الخاصة ، يمكنك النزول الى Mělník تحت الأرض في العصور الوسطى مع أوسع بئر في جمهورية التشيك ، يمكنك المشي في شارع Svatováclavská ulice (شارع St. Wenceslas) الى Mělník Chateau والميزة المهيمنة على المدينة ، وهي كاتدرائية SS Peter and Paul المزينة بشكل جميل ، والتي يمكنك في سردابها زيارة أحد أكبر العظام في البلاد ، والتي تحتوي على رفات ما يصل الى 15,000 شخص",
      "You can begin your stay in Mělník by wandering around the square lined on both sides with beautiful arcaded buildings. Your eyes will certainly be drawn to the town hall and the neighbouring former Capuchin monastery. And if you love mysterious spaces with a special energy, you can descend into medieval underground Mělník, with the widest well in the Czech Republic. You can walk along Svatováclavská ulice (St Wenceslas Street) to Mělník Chateau and the town's dominant feature, the beautifully decorated Cathedral of SS Peter and Paul, in whose crypt you can visit one of the largest ossuaries in the country, containing the remains of up to 15,000 people.",
    ],
    img("2022/11/img_6108-1.jpg"),
    img("2022/11/img_6107.jpg"),
    img("2022/11/img_6106.jpg"),
    img("2022/11/img_6105.jpg"),
    ["H5", "أجمل منظر في المدينة", "The most beautiful view in town"],
    [
      "P",
      "تأكد من القيام بجولة في القصر ، لن ترى فقط المجموعات الغنية لعائلة Lobkowicz ولكن في أقبيتها ستتاح لك أيضا فرصة فريدة لتذوق نبيذ القصر من واحدة من منطقتين فقط لزراعة العنب في بوهيميا ، من مطعم القصر ، ستتمتع باطلالة رائعة على التقاء نهري البه وفتافا ، ومزرعة سانت لودميلا للعنب ، وجبل شيب المهيب والقمم البركانية لمرتفعات بوهيميا الوسطى",
      "Be sure to take a tour of the château. You will not only see the rich collections of the Lobkowicz family, but in its cellars you will also have a unique chance to taste the château's wine, from one of only two grape-growing regions in Bohemia. From the château restaurant, you will enjoy a wonderful view over the confluence of the Elbe and Vltava rivers, the vineyard of St Ludmila, the majestic Říp Mountain and the volcanic peaks of the Central Bohemian Highlands.",
    ],
    img("2022/11/img_6104.jpg"),
    img("2022/11/img_6103.jpg"),
  ],
);

export const CZ_CITY_ARTICLES_B: Record<string, CityArticle> = {
  "ceske-budejovice": CESKE_BUDEJOVICE.ar,
  olomouc: OLOMOUC.ar,
  melnik: MELNIK.ar,
};

export const CZ_CITY_ARTICLES_B_EN: Record<string, { title: string; values: string[] }> = {
  "ceske-budejovice": CESKE_BUDEJOVICE.en,
  olomouc: OLOMOUC.en,
  melnik: MELNIK.en,
};
