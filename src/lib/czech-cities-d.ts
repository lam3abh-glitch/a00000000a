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

/* ------------------------------- KARLOVY VARY ------------------------------- */

const KARLOVY_VARY = build(
  "https://100region.com/?p=29798&amp=1",
  "السياحة في التشيك – مدينة كارلوفي فاري",
  "Tourism in Czechia — Karlovy Vary City",
  U("2022/11/img_6127.jpg"),
  [
    [
      "H4",
      "جوهرة مثلث السبا البوهيمي الغربي",
      "The jewel of the West Bohemian Spa Triangle",
    ],
    [
      "P",
      "تجسيد أناقة السبا ، وفرض الأعمدة ، ومباني السبا الحصرية والتصميم الرائع في قلب وادي الغابات ، هذه هي كارلوفي فاري ، المدينة الأكثر شهرة في West Bohemian Spa Triangle المشهورة عالميا ، والتي تمتعت فيها بعض الشخصيات الأكثر شهرة في الحياة الفنية والثقافية الأوروبية ، هي اليوم ثاني أكثر الأماكن زيارة في جمهورية التشيك ، بفضل هندسته المعمارية الفريدة ، يعد أحد أجمل المنتجعات الصحية في أوروبا",
      "The embodiment of spa elegance, imposing colonnades, exclusive spa buildings and stunning design in the heart of a forested valley — this is Karlovy Vary, the most famous town of the globally renowned West Bohemian Spa Triangle, where some of the most celebrated figures of European artistic and cultural life once enjoyed themselves. Today it is the second most visited place in the Czech Republic, and thanks to its unique architecture it is one of the most beautiful spa resorts in Europe.",
    ],
    img("2022/11/img_6133-2.jpg"),
    img("2022/11/img_6132.jpg"),
    img("2022/11/img_6131.jpg"),
    img("2022/11/img_6130.jpg"),
    [
      "P",
      "تقول الأسطورة أن كارلوفي فاري أسسها الملك التشيكي والامبراطور الروماني المقدس تشارلز الرابع في القرن الرابع عشر ، يقال أن الحاكم اكتشف نبعا فريدا هنا أثناء صيد الغزلان ، وعلى مر القرون ، نشأت مدينة سبا هنا التي تجاوزت شهرتها حدود بوهيميا ، وأصبح كارلوفي فاري مرادفا للسحر والمكانة الاجتماعية",
      "Legend has it that Karlovy Vary was founded by the Czech king and Holy Roman Emperor Charles IV in the fourteenth century. It is said that the ruler discovered a unique spring here while hunting deer. Over the centuries, a spa town grew up here whose fame spread far beyond the borders of Bohemia, and Karlovy Vary became synonymous with charm and social prestige.",
    ],
    [
      "P",
      "وقد استقبلت شخصيات مثل Goethe وBeethoven وGogol و Paganini وCasanova وMozart ، جنبا الى جنب مع العشرات من رؤساء الدول ، بينما استضافت مؤخرا العديد من نجوم السينما بفضل مهرجانها السينمائي ، وهو أحد أهم المهرجانات في أوروبا",
      "It has welcomed figures such as Goethe, Beethoven, Gogol, Paganini, Casanova and Mozart, alongside dozens of heads of state, while in more recent times it has hosted many film stars thanks to its film festival, one of the most important festivals in Europe.",
    ],
    [
      "H5",
      "اكتشف القوة العلاجية للينابيع الحرارية",
      "Discover the healing power of the thermal springs",
    ],
    [
      "P",
      "تشمل الفنادق الأكثر شهرة فندق Grandhotel Pupp الذي لا يسحر ليس فقط بهندسته المعمارية الفريدة ، ولكن أيضا براحة لا مثيل لها وخدمات من الدرجة الأولى ، فندق امبريال من عصر النهضة الحديث ، مجمع سبا منتجع سبا سانسوسي ، منتجع كارلسباد بلازا الطبي من فئة الخمس نجوم & Wellness Hotel أو فندق Thermal ، الذي يستضيف مهرجان كارلوفي فاري السينمائي الدولي الشهير",
      "The most famous hotels include the Grandhotel Pupp, which charms not only with its unique architecture but also with unmatched comfort and first-class service; the Art Nouveau Imperial Hotel; the Sanssouci spa resort complex; the five-star Karlsbad Plaza Medical Spa & Wellness Hotel; and the Thermal Hotel, which hosts the famous Karlovy Vary International Film Festival.",
    ],
    img("2022/11/img_6129.jpg"),
    img("2022/11/img_6128.jpg"),
    img("2022/11/img_6127-1.jpg"),
    img("2022/11/img_6126.jpg"),
    img("2022/11/img_6125.jpg"),
    img("2022/11/img_6124.jpg"),
    [
      "H5",
      "لا تنس الخزف وأماكن الترفيه الممتازة",
      "Don't forget the porcelain and the excellent entertainment venues",
    ],
    [
      "P",
      "ستختبر أجواء سبا حقيقية في نزهات ممتعة عبر قلبها التاريخي الساحر الذي يتبع مجرى Teplá ، حيث يمكنك ملء ابريق سبا من العديد من ينابيع الشفاء المحلية والتنزه في ظلال الأعمدة الأنيقة ، مثل Mlýnská وTržní Colonnades",
      "You will experience a truly authentic spa atmosphere on pleasant strolls through its charming historic centre, which follows the course of the Teplá river, where you can fill a spa cup from the many local healing springs and walk in the shade of the elegant colonnades, such as the Mlýnská and Tržní Colonnades.",
    ],
    [
      "P",
      "تأكد من رؤية المسرح الرائع ، Císařské lázně وكنيسة القديسة مريم المجدلية ، أكثر الينابيع حرارة هو Vřídlo ، تخرج من الأرض في مكان قريب ، لكن احترس فالماء لديه درجة حرارة لا تصدق من 72 درجة مئوية ، ويمكنك جعل يومك في مدينة القصص الخيالية أكثر امتاعا من خلال زيارة أحد مواقع المراقبة في كارلوفي فاري ، على سبيل المثال سوف ينقلك التلفريك بشكل مريح الى برج ديانا ، حيث تشعر المدينة منه وكأنها في راحة يدك ، وأي نوع من الرحلة الى كارلوفي فاري ستكون اذا لم تأخذ المنزل بعض الأدوات المحلية ، ومن أشهرها منتجات مصنع الزجاج الشهير Moser ، أو خزف Thun Karlovy Vary ، أو مشروب Becherovka العشبي الممتاز ، والذي يطلق عليه غالبا الربيع الثالث عشر للمدينة ، تحتاج أيضا الى تذوق رقائق السبا ، والتي تأتي بنكهات مختلفة",
      "Be sure to see the magnificent theatre, the Císařské lázně (Imperial Baths) and the Church of St. Mary Magdalene. The hottest of the springs is the Vřídlo, which gushes out of the ground nearby, but be careful, as the water has an incredible temperature of 72°C. You can make your day in this fairy-tale town even more enjoyable by visiting one of Karlovy Vary's viewpoints; for instance, a cable car will comfortably take you up to the Diana Tower, from where the town feels as if it fits in the palm of your hand. And what kind of trip to Karlovy Vary would it be if you did not take home some local goods, the most famous of which are products from the celebrated Moser glassworks, Thun Karlovy Vary porcelain, or the excellent herbal drink Becherovka, often called the town's thirteenth spring. You should also make sure to taste the spa wafers, which come in various flavours.",
    ],
    [
      "H5",
      "المزيد من المعرفة",
      "More to discover",
    ],
    [
      "P",
      "هل ترغب في رؤية أحد أهم كنوز جمهورية التشيك بأم عينيك ؟ اذا كان الجواب نعم فيجب عليك زيارة Bečov nad Teplou ، الذي يعد قصره موطنا لسانت موروس ريليكوار الرائع ، أحد أجمل الأمثلة على فن العصور الوسطى في أوروبا ، وجهة رائعة أخرى للقيام برحلة هي مدينة لوكيت الخيالية الصغيرة ، والتي تضم مركزا تاريخيا جميلا وقلعة قوطية رائعة ، كما يمكن مشاهدة معرض أدوات التعذيب وعرض البورسلين هناك",
      "Would you like to see one of the most important treasures of the Czech Republic with your own eyes? If so, you should visit Bečov nad Teplou, whose castle is home to the magnificent Reliquary of Saint Maurus, one of the finest examples of medieval art in Europe. Another wonderful destination for a day trip is the small fairy-tale town of Loket, which has a beautiful historic centre and a striking Gothic castle, where you can also see a torture instruments exhibition and a porcelain display.",
    ],
  ],
);

/* ------------------------------- PLZEŇ ------------------------------- */

const PLZEN = build(
  "https://100region.com/?p=29880&amp=1",
  "السياحة في التشيك – مدينة بلزن",
  "Tourism in Czechia — Plzeň City",
  U("2022/11/img_6116.jpg"),
  [
    [
      "H4",
      "بلزن وسط غرب بوهيميا",
      "Plzeň, in the heart of western Bohemia",
    ],
    [
      "H5",
      "مدينة الثقافة والبيرة",
      "A city of culture and beer",
    ],
    [
      "P",
      "Pilsen هو المركز الثقافي والصناعي وتخمير البيرة في غرب بوهيميا ، انها مدينة ذات مركز تاريخي مثير للاعجاب ، وآثار يهودية وتقنية ، وتقع عند التقاء أربعة أنهار ، انطلق في جولة عبر التصميمات الداخلية الرائعة للمهندس المعماري الشهير Adolf Loose ، عبر المنتزهات في المركز التاريخي أو تحقق من مصنع الجعة المشهور عالميا ، ولا تنس تذوق بيرة Pilsner Urquell lager المشهورة عالميا برأس مناسب ، لأن زيارة بيلسن وعدم وجود نصف لتر من البيرة المحلية ستكون كما لو لم تكن هناك",
      "Pilsen is the cultural, industrial and beer-brewing centre of western Bohemia. It is a town with an impressive historic centre, Jewish and technical monuments, and it lies at the confluence of four rivers. Set off on a tour through the magnificent interiors designed by the famous architect Adolf Loos, through the parks of the historic centre, or check out the world-renowned brewery, and do not forget to taste the world-famous Pilsner Urquell lager with a proper head, because visiting Pilsen without having half a litre of the local beer would be as if you had never been there at all.",
    ],
    [
      "H5",
      "الحداثة المبسطة في بداية القرن العشرين",
      "Stripped-down modernism at the start of the twentieth century",
    ],
    [
      "P",
      "يعتبر Adolf Loos مؤسس المفهوم الحديث للهندسة المعمارية ، وبالتالي ينتمي الى مجموعة ضيقة من أهم المهندسين المعماريين المعاصرين قبل الحرب ، صمم Loos بشكل أساسي المباني السكنية ، ولكن من بين انجازاته ، يمكننا أيضا العثور على متجر متعدد الأقسام وبار ومقهى وكوخ جبلي والمزيد ، يمكننا العثور عليها في جميع أنحاء أوروبا ، بالاضافة الى فيينا ، وكذلك في باريس ومونترو وسمرينغ ، في جمهورية التشيك ، نجد معظم انجازات لوس في بلسن وبراغ وموطنه الأصلي برنو ، في Pilsen أنشأ Loos ما يصل الى ثلاثة عشر انجازا داخليا في الغالب ، في الوقت الحالي يمكنك زيارة طريقين لمشاهدة معالم المدينة في بيلسن ، والتي ستأخذك عبر ثلاثة تصميمات داخلية افتتحت حديثا من قبل المهندس المعماري الشهير أدولف لوس ، كل واحد منهم مختلف ، لكنهم بالتأكيد يستحقون الزيارة ، وشقة دكتور كراوس ، وشقة دكتور فوغل ومنزل بروميل",
      "Adolf Loos is considered the founder of the modern concept of architecture, and he therefore belongs to a small group of the most important pre-war contemporary architects. Loos designed mainly residential buildings, but among his works we can also find a department store, a bar, a café, a mountain cabin and more. His works can be found across Europe: besides Vienna, also in Paris, Montreux and Semmering. In the Czech Republic, most of Loos's works are found in Pilsen, Prague and his native Brno. In Pilsen, Loos created up to thirteen works, mostly interiors. At present you can take two sightseeing routes in Pilsen, which will take you through three interiors recently opened to the public that were designed by the famous architect Adolf Loos. Each one is different, but they are all certainly worth visiting: Dr. Kraus's apartment, Dr. Vogl's apartment and the Brummel House.",
    ],
    img("2022/11/img_6116.jpg"),
    img("2022/11/img_6117.jpg"),
    img("2022/11/img_6118.jpg"),
    img("2022/11/img_6119.jpg"),
    [
      "H5",
      "عندما تكون رائحة الشعير المسكرة في الهواء",
      "When the intoxicating scent of malt is in the air",
    ],
    [
      "P",
      "بالكاد يمكن للمرء الاستغناء عن الآخر ، بيرة Pilsner خفيفة ، مخمرة في القاع ويتم تخميرها وفقا للوصفة التي تم انشاؤها في Plzeň ، نكهته المتميزة تميزه عن غيره من الجعة ، ان الحصول على نصف لتر من Pilsner on tap المبرد هي تجربة لا يجب أن تفوتها عند زيارة جمهورية التشيك ، اذا كنت كذلك أو حتى اذا لم تكن من محبي البيرة ، فيمكنك تحميص البط مع الملفوف هناك ، يجب عليك أيضا زيارة أحد مصانع الجعة حيث يمتلئ الهواء برائحة الشعير ، وحيث يمكنك رؤية التكنولوجيا الرائعة لتخمير البيرة بأم عينيك وحيث يمكنك تذوق البيرة مباشرة في أقبية مصنع الجعة ، يحتوي متحف مصنع الجعة على أصغر كوب في العالم ، ومختبر تخمير ومنزل الشعير القوطي ، ويمكنك زيارة المعرض التعليمي والترفيهي الذي يشرح تاريخ صناعة البيرة من العصور القديمة وحتى الوقت الحاضر",
      "The two can hardly be separated from one another. Pilsner is a light, bottom-fermented beer brewed according to the recipe created in Plzeň, and its distinctive flavour sets it apart from other lagers. Getting a chilled half-litre of Pilsner on tap is an experience you should not miss when visiting the Czech Republic; whether you are a beer lover or not, you can pair it there with roast duck and cabbage. You should also visit one of the breweries, where the air is filled with the scent of malt, where you can see the remarkable beer-brewing technology with your own eyes, and where you can taste the beer straight from the brewery's cellars. The brewery museum houses the smallest cup in the world, a brewing laboratory and a Gothic malt house, and you can visit the educational and entertaining exhibition that explains the history of beer-making from ancient times to the present day.",
    ],
    [
      "H5",
      "نزهة عبر واحدة من أكبر الساحات الأوروبية",
      "A walk through one of the largest squares in Europe",
    ],
    [
      "P",
      "توجد العديد من المنازل التاريخية الجميلة والمقاهي الممتعة في ساحة الجمهورية ، الساحة الرئيسية في بلزن ، انه أيضا مكان تقام فيه أسواق المزارعين الموسمية ، حيث تقدم الخضروات المحلية والفواكه وغيرها من الأشياء الجيدة ، تهيمن على الساحة كاتدرائية القديس بارثولوميو – المعبد القوطي ، والذي يضم أيضا أعلى برج كنيسة (102 مترا) في جمهورية التشيك ، تعد قاعة مدينة Plzeň ، التي تم بناؤها في الميدان في القرن السادس عشر بأسلوب عصر النهضة الايطالي ، موقعا ثقافيا مهما أيضا ، يكتمل جو المركز بالحدائق مع مطاعم الحدائق والمقاهي الخارجية",
      "There are many beautiful historic houses and enjoyable cafés on Republic Square, Pilsen's main square. It is also the place where seasonal farmers' markets are held, offering local vegetables, fruit and other good things. The square is dominated by the Cathedral of St. Bartholomew, a Gothic temple that also has the tallest church tower (102 metres) in the Czech Republic. Pilsen's town hall, built on the square in the sixteenth century in the Italian Renaissance style, is another important cultural site. The atmosphere of the centre is completed by gardens with garden restaurants and outdoor cafés.",
    ],
  ],
);

export const CZ_CITY_ARTICLES_D: Record<string, CityArticle> = {
  "karlovy-vary": KARLOVY_VARY.ar,
  "plzen": PLZEN.ar,
};

export const CZ_CITY_ARTICLES_D_EN: Record<string, { title: string; values: string[] }> = {
  "karlovy-vary": KARLOVY_VARY.en,
  "plzen": PLZEN.en,
};
