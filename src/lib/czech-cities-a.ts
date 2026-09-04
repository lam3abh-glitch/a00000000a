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

/* ------------------------------- KUTNÁ HORA ------------------------------- */

const KUTNA_HORA = build(
  "https://100region.com/?p=29882&amp=1",
  "السياحة في التشيك – مدينة كوتنا هورا",
  "Tourism in Czechia — Kutná Hora City",
  U("2022/11/img_6110.jpg"),
  [
    [
      "H4",
      "كوتنا هورا ، خزينة المملكة التشيكية",
      "Kutná Hora, the treasury of the Czech kingdom",
    ],
    [
      "P",
      "كوتنا هورا ، مدينة الفضة ، تنسب بجدارة الى الاسم الآخر الخزانة الوطنية ، وهذا يعني أن ثروتها ساعدت في ضمان ازدهار المملكة التشيكية ، تم ادراج مركز المدينة في قائمة اليونسكو للتراث العالمي في عام 1995م ، بفضل أهميته التاريخية وجواهره المعمارية ، جميع الشوارع والمنازل والكنائس تنضح بتاريخ طويل مليء بالأحداث المهمة ، رمز كوتنا هورا هو الكاتدرائية القوطية الفريدة من نوعها للقديسة باربرا",
      "Kutná Hora, the city of silver, rightly bears the other name of national treasury, meaning that its wealth helped secure the prosperity of the Czech kingdom. The historic centre of the town was inscribed on the UNESCO World Heritage list in 1995, thanks to its historical importance and its architectural gems. Every street, house and church exudes a long history full of significant events, and the symbol of Kutná Hora is the unique Gothic cathedral of Saint Barbara.",
    ],
    [
      "H5",
      "سك العملات المعدنية في دار سك النقود الملكية",
      "Minting coins at the Royal Mint",
    ],
    [
      "P",
      "أصبحت محكمة Wallachian مركزا للأحداث الاقتصادية ، ومقرا للحكام والنعناع الملكي ، حيث تم بالفعل سك أول groschen في عهد Wenceslas II ، الذي استدعى الخبراء الى Kutná Hora من مدينة فلورنسا الايطالية وبدأ اصلاح العملة ، وبصرف النظر عن معرض سك العملات المعدنية ، يمكنك أيضا زيارة متحف الكشف عن الوجه الغامض ، حيث ستتعرف على المجرمين والسحرة والزنادقة ومحرقي الحرائق في أقبية محكمة والاشيان وكذلك القضاة والجلادين",
      "The Wallachian Court became a hub of economic activity and the seat of the rulers and of the royal mint, where the first groschen was actually minted under the reign of Wenceslas II, who summoned experts to Kutná Hora from the Italian city of Florence and began a reform of the currency. Aside from the coin-minting exhibition, you can also visit the museum revealing the mysterious side of the town, where you will learn about the criminals, sorcerers, heretics and arsonists held in the vaults of the Wallachian Court, as well as the judges and executioners.",
    ],
    img("2022/11/img_6110.jpg"),
    img("2022/11/img_6111.jpg"),
    [
      "H5",
      "زخرفة غريبة من عظام بشرية",
      "A strange decoration made of human bones",
    ],
    [
      "P",
      "هل تحب الأماكن غير العادية ؟ اذن يجب عليك بالتأكيد زيارة مجمع دير Cistercian السابق في Sedlec بالقرب من Kutná Hora ، ان زيارة كنيسة العذراء مريم وسانت جون المعمدان وكاتدرائية مقبرة جميع القديسين المشهورة عالميا هي تجربة مدهشة بحد ذاتها ، اذا قمت بزيارة هذه الأماكن في وقت متأخر من المساء ، فسترافقك مرشدين يرتدون عادات الرهبان السيسترسيين ، تضاء مباني الكاتدرائية وخزانة العظام فقط على ضوء الشموع ولديك فرصة رائعة للاستماع الى بعض الترانيم الغريغورية وصوت أرغن الكاتدرائية ، ومع ذلك ، فان كاتدرائية Saint Barbara القوطية المتأخرة هي مبنى فريد من نوعه ، وبفضل زيارتك لهذه المدينة الملكية ستصبح تجربة قوية ، تم بناء هذه الجوهرة المعمارية والكنسية من قبل البناة المحليين على مدار أكثر من 500 عام",
      "Do you love unusual places? Then you should definitely visit the complex of the former Cistercian monastery in Sedlec, near Kutná Hora. Visiting the Church of the Virgin Mary and Saint John the Baptist and the world-famous cathedral of the All Saints' Cemetery is an astonishing experience in itself. If you visit these places late in the evening, you will be accompanied by guides wearing the habits of Cistercian monks; the cathedral buildings and the bone ossuary are lit only by candlelight, giving you a wonderful chance to listen to some Gregorian chants and the sound of the cathedral organ. Meanwhile, the late-Gothic cathedral of Saint Barbara is a truly unique building, and thanks to it a visit to this royal town becomes a powerful experience; this architectural and ecclesiastical gem was built by local craftsmen over more than 500 years.",
    ],
    [
      "H5",
      "تعرف على تقاليد صناعة النبيذ",
      "Discover the traditions of winemaking",
    ],
    [
      "P",
      "Vinné Sklepy هي شركة عائلية تهدف الى تجديد المجد الباهت وازالة الغبار عن التقاليد العريقة لزراعة العنب في منطقة Kutná Hora ، النبيذ المحلي يحمل علامة BIO منذ عام 2009م ، سينقلك مسار الدراجات من الساحة الخلابة الى مزارع الكروم في Pod Sukovem ، الدائرة التي يبلغ طولها 6 كم تربط المركز التاريخي لكوتنا هورا بكروم العنب",
      "Vinné Sklepy is a family company that aims to renew the faded glory and dust off the age-old tradition of grape cultivation in the Kutná Hora region. The local wine has carried the BIO label since 2009. A cycling route will take you from the picturesque square to the vineyards of Pod Sukovem; the 6-kilometre loop links Kutná Hora's historic centre with the vineyards.",
    ],
    img("2022/11/img_6113.jpg"),
    [
      "H5",
      "في أي مكان آخر يتم الانطلاق من أجله :",
      "Where else you can head from here:",
    ],
    [
      "P",
      "يمكنك اكتساب نظرة ثاقبة لتقليد سك العملات المعدنية ومشاهدة بعض الجواهر المعمارية",
      "You can gain deep insight into the tradition of coin minting and see some architectural gems.",
    ],
    [
      "P",
      "يمكنك استخدام Kutná Hora كنقطة انطلاق لرحلة الى Central Bohemian Poděbrady Spa أو زيارة أحد القصور القريبة ، على سبيل المثال ستشعر وكأنك حقا في منتصف قصة خيالية في أوليبي",
      "You can use Kutná Hora as a starting point for a trip to the Central Bohemian spa town of Poděbrady, or visit one of the nearby chateaux; for example, in Kácov you will truly feel as though you are in the middle of a fairy tale.",
    ],
    img("2022/11/img_6114.jpg"),
  ],
);

/* ------------------------------- PRAGUE ------------------------------- */

const PRAGUE = build(
  "https://100region.com/?p=11751&amp=1",
  "السياحة في التشيك – مدينة براغ",
  "Tourism in Czechia — Prague City",
  U("2022/05/img_6858.jpg"),
  [
    [
      "H4",
      "تعرف على أجمل وأشهر أماكن السياحة في مدينة براغ",
      "Discover the most beautiful and most famous tourist places in Prague",
    ],
    [
      "H3",
      "براغ كما لو لم تعرفها من قبل",
      "Prague as you have never known it before",
    ],
    [
      "P",
      "الممرات المتعرجة الضيقة والساحات الخلابة وأسوار المدينة وأبراج الكنائس ، هذه هي الرومانسية في مدينة براغ التاريخية",
      "Narrow winding lanes, picturesque squares, city walls and church towers — this is the romance of the historic city of Prague.",
    ],
    [
      "P",
      "انطلق في رحلة الى مدن مليئة بالأجواء الرومانسية وتنبض بالحياة ، حيث تنتظرك تجارب لا تنسى ، مناظر خلابة ومأكولات شهية رائعة أثناء الجلوس في أحد المقاهي أو المطاعم المتخصصة في المنتجات الاقليمية",
      "Set off on a trip to cities filled with romantic atmosphere and pulsing with life, where unforgettable experiences await you, along with breathtaking views and wonderful delicious food as you sit in one of the cafés or restaurants specialising in regional products.",
    ],
    [
      "P",
      "براغ هي واحدة من الوجهات السياحية الأكثر شعبية في أوروبا الوسطى ، انها حدود الغرب الحديث والستار الحديدي السابق ، تختبئ في مثل هذا الجمال وهذه الأناقة التي ستدهشك ، فبراغ لديها القليل من كل شيء : المعالم التاريخية ، والهندسة المعمارية الرائعة ، فضلا عن الحدائق والمتنزهات الشاسعة ، لذلك اعثر على ما يعجبك في براغ",
      "Prague is one of the most popular tourist destinations in Central Europe. It is the border of the modern West and the former Iron Curtain, hiding such beauty and elegance that it will amaze you. Prague has a little of everything: historic landmarks, magnificent architecture, as well as vast gardens and parks — so find what pleases you in Prague.",
    ],
    [
      "P",
      "العمارة الجميلة هي أحد رموز براغ الرئيسية ، جسر تشارلز ، ارتفاع مهيمن فوق نهر فلتافا ، وساحة البلدة القديمة مع أفضل ساعة فلكية محفوظة في العالم ، قلعة براغ الضخمة والمقر القديم لملوك بوهيميا ، عمرها أكثر من ألف عام ، كاتدرائية سانت فيتوس بنوافذها الزجاجية المتقنة وأجواءها الروحية القوية ، أو البيت الراقص على ضفة نهر فلتافا ، وهو أحد أول تعبيرات العمارة الحديثة في جمهورية التشيك ما بعد الاشتراكية",
      "Beautiful architecture is one of Prague's main symbols: Charles Bridge, towering dominantly over the Vltava River; the Old Town Square with the best-preserved astronomical clock in the world; the massive Prague Castle, the ancient seat of the kings of Bohemia, more than a thousand years old; Saint Vitus Cathedral with its intricate stained-glass windows and powerful spiritual atmosphere; or the Dancing House on the bank of the Vltava, one of the first expressions of modern architecture in post-socialist Czechia.",
    ],
    [
      "P",
      "فاذا كنت تعرف بالفعل هذه الأماكن الشهيرة ، فقد حان الوقت للتعمق في أركان براغ ، وخطط لنزهة عبر حي Vinohrady ، الذي يجمع بين الفيلات التاريخية والوظيفية والتكعيبية ، واحصل على قسط من الراحة في حدائق قلعة براغ ، أو خطط لنزهة تحت قيادة الفارس البرونزي في فيتكوف ، فهناك الكثير لتراه في براغ",
      "If you already know these famous places, then it is time to delve deeper into the corners of Prague. Plan a stroll through the Vinohrady district, which combines historic, functionalist and cubist villas, and get some rest in the gardens of Prague Castle, or plan a walk beneath the leadership of the bronze knight at Vítkov. There is so much to see in Prague.",
    ],
    [
      "P",
      "مدينة براغ عاصمة التشيك ومن أجمل مدن العالم والوجهة الاهم من بين وجهات السياحة في التشيك ، فهي تضم مجموعة كبيرة من المعالم السياحية التي تثير الاعجاب ، تلقب براغ بعدة القاب منها لقب المدينة الذهبية ومدينة الابراج حيث تتميز بكثرة الابراج وبمبانيها التاريخية التي تعد احدى سماتها السياحية",
      "The city of Prague, the capital of Czechia, is one of the most beautiful cities in the world and the most important destination among Czechia's tourist attractions. It holds a large collection of impressive landmarks, and Prague carries several nicknames, including the Golden City and the City of a Hundred Spires, since it is distinguished by its many towers and its historic buildings, which are one of its tourist features.",
    ],
    ["H5", "ساعة براغ الفلكية", "The Prague Astronomical Clock"],
    img("2022/05/img_6858.jpg"),
    [
      "P",
      "تعتبر ساعة براغ الفلكية واحدة من المعالم السياحة في براغ الأكثر شهرة حيث يعود تاريخ إنشاء الساعة الفلكية، ونصبها على الجدار الجنوبي الخاص بقاعة المدينة القديمة في براغ إلى القرون الوسطى ، وتعتبر ساعة براغ الفلكية حاليا ثالث أقدم ساعة على مستوى العالم، وأقدم ساعة فلكية لا زالت تعمل حتى يومنا هذا .. اقرأ المزيد",
      "The Prague Astronomical Clock is considered one of the most famous tourist landmarks in Prague, as the clock's construction and its mounting on the southern wall of the Old Town Hall in Prague date back to the Middle Ages. The Prague Astronomical Clock is currently the third-oldest clock in the world, and the oldest astronomical clock still working to this day.. Read more",
    ],
    ["H5", "قلعة براغ", "Prague Castle"],
    [
      "P",
      "تأسست قلعة براغ في أواخر القرن التاسع ، وهي أكبر مجمع محكم البناء ومتسق وفقًا لكتاب غينيس للأرقام القياسية . ، وتحتل القلعة 70,000 متر مربع من مدينة براغ في التشيك ، وهي من اهم الاماكن السياحية في براغ حيث تجذب 1,8 مليون زائر سنويا .. اقرأ المزيد",
      "Prague Castle was founded in the late ninth century, and it is the largest coherent castle complex according to the Guinness Book of World Records. The castle occupies 70,000 square metres of the city of Prague in Czechia, and it is one of the most important tourist places in Prague, attracting 1.8 million visitors annually.. Read more",
    ],
    img("2022/05/img_6859.jpg"),
    img("2022/05/img_6861.jpg"),
    img("2022/05/img_6860.jpg"),
    img("2022/05/img_6862.jpg"),
    ["H5", "برج بترين", "Petřín Tower"],
    ["IMG", "/__l5e/assets-v1/0f8b0849-50cb-4cd1-ae21-09a5027b4f0f/prague-petrin-tower.png", ""],
    [
      "P",
      "بني برج تلة بترين في عام 1891 بارتفاع 63,5 مترا كنموذج مصغر لبرج إيفل الباريسي في مدينة براغ ، ويقع البرج في متنزه تلة بترين ، وبني بمادة الحديد الصلب، ليستخدم كبرج للمراقبة والإرسال ، ويعتبر حاليا وجهة من وجهات السياحة في براغ التشيك ، ويتضمن المتنزه حدائق كثيرة بمناظر طبيعية خلابة .. اقرأ المزيد",
      "Petřín Hill Tower was built in 1891, standing 63.5 metres tall, as a miniature model of the Parisian Eiffel Tower in the city of Prague. The tower is located in Petřín Hill Park and was built of solid iron to be used as an observation and transmission tower. It is currently considered one of Prague's tourist destinations in Czechia, and the park includes many gardens with breathtaking natural scenery.. Read more",
    ],
    ["H5", "ساحة البلدة القديمة", "Old Town Square"],
    [
      "P",
      "ساحة البلدة القديمة هي ساحة تاريخية في مدينة براغ في التشيك ، تقع تحديدا بين ساحة وينسيسلاس وجسر تشارلز وتعتبر من الاماكن السياحية في التشيك في العاصمة براغ ، وتتضمن الساحة العديد من الأساليب المعمارية المختلفة ، ما بين القوطية والباروكية ، وعمران عصر النهضة ، وتضم عددا من الكنائس والنصب التذكارية .. اقرأ المزيد",
      "Old Town Square is a historic square in the city of Prague in Czechia, located specifically between Wenceslas Square and Charles Bridge, and it is considered one of the tourist places in Czechia in the capital, Prague. The square includes many different architectural styles, ranging between Gothic and Baroque, and Renaissance construction, and it includes a number of churches and memorials.. Read more",
    ],
    img("2022/05/img_6864.jpg"),
    img("2022/05/img_6865.jpg"),
    img("2022/05/img_6863.jpg"),
    img("2022/05/img_6868.jpg"),
    ["H5", "جسر تشارلز", "Charles Bridge"],
    [
      "P",
      "يعبر جسر تشارلز نهر فلتافا في براغ تشيكيا ، ويعود بناؤه لأواسط القرن 14 ، وافتتح بداية القرن 15. ، يبلغ طول الجسر 621 مترا ، وعرضه حوالي 10 أمتار ، ويقع فوق 16 قوسا ، ويتضمن 3 أبراج والعديد من التماثيل والمنحوتات يعد الجسر من اهم اماكن سياحية في براغ التشيك براغ ويربط حاليا بين صفتي مدينة براغ ، حيث المدينة القديمة في الجهة اليمنى ، وجسر براغ في الجهة اليسرى .. اقرأ المزيد",
      "Charles Bridge crosses the Vltava River in Prague, Czechia. Its construction dates back to the middle of the 14th century, and it was opened at the beginning of the 15th century. The bridge is 621 metres long and about 10 metres wide, resting on 16 arches, and it includes 3 towers and many statues and sculptures. The bridge is one of the most important tourist places in Prague, Czechia, and it currently links the two sides of the city of Prague, with the Old Town on the right side and the Lesser Town on the left side.. Read more",
    ],
    img("2022/05/img_6870.jpg"),
    img("2022/05/img_6869.jpg"),
    img("2022/05/img_6867.jpg"),
    img("2022/05/img_6866.jpg"),
    ["H5", "البيت الراقص", "The Dancing House"],
    [
      "P",
      "البيت الراقص أو فريد وجينجر ، هو لقب مبنى نيديرلاندن الوطني الذي يقع قبالة سد راشينوفو في براغ وقد افتتح عام 1996 م وقد اعتبر من معالم السياحة في براغ ، والملفت في البناء هو التصميم غير التقليدي والمثير للجدل حينها ، حيث يقع وسط خليط من المباني الباروكية والقوطية والفن الجديد في مدينة براغ في التشيك .. اقرأ المزيد",
      "The Dancing House, or Fred and Ginger, is the nickname of the Nationale-Nederlanden building located opposite the Rašínovo Embankment in Prague. It opened in 1996 and has come to be regarded as one of Prague's tourist landmarks. What stands out about the building is its unconventional design, which was controversial at the time, as it sits amid a mix of Baroque, Gothic and Art Nouveau buildings in the city of Prague in Czechia.. Read more",
    ],
    img("2022/05/img_6871.jpg"),
  ],
);

export const CZ_CITY_ARTICLES_A: Record<string, CityArticle> = {
  "kutna-hora": KUTNA_HORA.ar,
  prague: PRAGUE.ar,
};

export const CZ_CITY_ARTICLES_A_EN: Record<string, { title: string; values: string[] }> = {
  "kutna-hora": KUTNA_HORA.en,
  prague: PRAGUE.en,
};
