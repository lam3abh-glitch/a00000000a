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

/* -------------------------------- TÁBOR -------------------------------- */

const TABOR = build(
  "https://100region.com/?p=29886&amp=1",
  "السياحة في التشيك – مدينة تابور",
  "Tourism in Czechia — Tábor",
  U("2022/11/img_6101.jpg"),
  [
    [
      "H4",
      "مدينة مثالية من القرون الوسطى",
      "An ideal city from the Middle Ages",
    ],
    [
      "P",
      "متاهة من شوارع العصور الوسطى وأسوار مدينة ضخمة وتاريخ ساحر ، ستجد كل هذا في مدينة تابور الواقعة في جنوب بوهيميا ، والتي تأسست في القرن الخامس عشر كنموذج للمدينة المثالية ، حيث يتساوى الجميع ، تعال وتعرف على قصة المكان الذي أصبح في العصور الوسطى محفورا بشكل لا يمحى في تاريخ الأراضي التشيكية وانغمس في أجواء لا مثيل لها ، ليس غالبا أن تتلقى مدينة في أوروبا الوسطى اسما توراتيا ، استثناء واحد هو تابور ، الذي سمي على اسم جبل ثابور بالقرب من الناصرة في اسرائيل ، قام مؤسسوها ، الذين كانوا من أنصار حركة الاصلاح الهوسية التشيكية ، ببنائها بتصميم لانشاء كومنولث جديد يرفض قوانين الانسان ويحكمه فقط شريعة الله ، في الأيام الأولى للمدينة ، تنازل سكانها عن جميع ممتلكاتهم ثم تم تقسيمها حسب الحاجة.",
      "A maze of medieval streets, the walls of a huge town and an enchanting history — you will find all of this in the town of Tábor, located in South Bohemia, which was founded in the fifteenth century as a model of the ideal town, where everyone is equal. Come and discover the story of the place that, in the Middle Ages, was etched indelibly into the history of the Czech lands, and immerse yourself in an atmosphere like no other. It is not common for a town in Central Europe to be given a biblical name; one exception is Tábor, named after Mount Tabor near Nazareth in Israel. Its founders, who were followers of the Czech Hussite reform movement, built it with the intention of establishing a new commonwealth that rejected the laws of man and was governed only by the law of God. In the town's early days, its inhabitants gave up all their possessions, which were then divided according to need.",
    ],
    img("2022/11/img_6101.jpg"),
    img("2022/11/img_6100.jpg"),
    img("2022/11/img_6099.jpg"),
    img("2022/11/img_6098.jpg"),
    img("2022/11/img_6097.jpg"),
    img("2022/11/img_6096.jpg"),
    img("2022/11/img_6094.jpg"),
    [
      "P",
      "هناك المزيد من الأماكن الرائعة التي تستحق الزيارة حول الساحة في تابور ، وهي تشمل على سبيل المثال ، بار النبيذ Thir ، حيث لا يمكنك فقط تذوق النبيذ البوهيمي والمورافي الأصيل ، ولكن أيضا عصير التفاح المحلي من معقل Sudkův Dl القريب ، تم تقديم عصير التفاح المصنوع في Sudkův Důl من الأصناف القديمة في أفضل مطاعم ميشلان في انجلترا ونيويورك ، علاوة على ذلك ، يوجد مطعم هندي مشهور مباشرة في الساحة ، الناس من منطقة محيطة واسعة يحبون الذهاب الى هناك",
      "There are more wonderful places worth visiting around the square in Tábor. These include, for example, the Thir wine bar, where you can taste not only authentic Bohemian and Moravian wine but also local apple cider from the nearby Sudkův Důl estate. The cider made in Sudkův Důl from old varieties has been served at some of the best Michelin restaurants in England and New York. Furthermore, there is a well-known Indian restaurant right on the square, and people from a wide surrounding area love to go there.",
    ],
    [
      "H5",
      "تعال الى بطولة الفرسان",
      "Come to the Knights' Tournament",
    ],
    [
      "P",
      "اذا كنت ترغب في معرفة المزيد عن حركة Hussite ، فتوجه الى المتحف في Old Town Hall ، أحد أهم المباني القوطية في جمهورية التشيك ، من أقبية تقود شبكة من الأنفاق تحت الساحة الرئيسية ، والتي سميت على اسم قائد هوسيت الأكثر أهمية ، يان سيشكا من تروكنوف ، بالقرب من قاعة المدينة ، يمكنك اختبار لياقتك من خلال الصعود الى أعلى برج الكنيسة المحلي ، حيث ستتمتع باطلالة رائعة على قلب المدينة التاريخي بأكمله ، انغمس في الروح الحقيقية للعصور الوسطى في زيارة قلعة Kotnov السابقة ببرجها الدائري ، اذا كنت تستمتع بالتمارين الرياضية ، يمكنك التنزه حول Jordán Reservoir ، وهو الأقدم في وسط أوروبا ، هل ترغب في العودة بالزمن الى العصور الوسطى ؟ ثم قم بزيارة تابور في سبتمبر خلال احتفالات تابور ، عندما تنبض المدينة بالحياة بالمعارض التاريخية والمواكب والبطولات الفرسان",
      "If you would like to learn more about the Hussite movement, head to the museum in the Old Town Hall, one of the most important Gothic buildings in the Czech Republic. From its cellars a network of tunnels leads under the main square, named after the most important Hussite commander, Jan Žižka of Trocnov. Near the town hall, you can test your fitness by climbing to the top of the local church tower, where you will enjoy a magnificent view over the entire historic heart of the town. Immerse yourself in the true spirit of the Middle Ages by visiting the former Kotnov Castle with its round tower. If you enjoy exercise, you can take a walk around the Jordán Reservoir, the oldest reservoir in Central Europe. Would you like to travel back in time to the Middle Ages? Then visit Tábor in September during the Tábor Meetings festival, when the town comes alive with historical exhibitions, processions and knights' tournaments.",
    ],
  ],
);

/* -------------------------------- TŘEBÍČ -------------------------------- */

const TREBIC = build(
  "https://100region.com/?p=29887&amp=1",
  "السياحة في التشيك – مدينة تريبيك",
  "Tourism in Czechia — Třebíč",
  U("2022/11/img_6059.jpg"),
  [
    img("2022/11/img_6059.jpg"),
    [
      "H4",
      "مدينة رومانسية بروح القرون الوسطى",
      "A romantic town with a medieval spirit",
    ],
    [
      "P",
      "هل تحب العمارة القديمة في العصور الوسطى ، والأزقة السحرية المتعرجة للأحياء اليهودية ، وهدوء مدينة صغيرة ؟ اذا كان الأمر كذلك ، فيجب عليك الانطلاق الى Tebíč ، لأنها تقدم شيئا من كل هؤلاء ، ستندهش عندما ترى كيف عاش اليهود والمسيحيون جنبا الى جنب في سلام ووئام خلال العصور الوسطى ، بفضل هذا ، نجا مركز المدينة ، مع الحي اليهودي والمقبرة والبازيليك الرومانيسكي المتأخر ، حتى يومنا هذا ، وكل هذا بجانب بعضها البعض ، في عام 2003 تم تسجيل Třebíč ، وتحديدا الحي اليهودي وكنيسة القديس بروكوبيوس ، في قائمة اليونسكو للتراث العالمي الثقافي والطبيعي",
      "Do you love old medieval architecture, the magical winding alleys of Jewish quarters, and the calm of a small town? If so, you should head to Třebíč, because it offers a bit of all of that. You will be amazed to see how Jews and Christians lived side by side in peace and harmony during the Middle Ages. Thanks to this, the town centre — with its Jewish quarter, cemetery, and late Romanesque basilica — has survived to this day, all standing right next to one another. In 2003, Třebíč, specifically the Jewish quarter and the Basilica of Saint Procopius, was inscribed on the UNESCO World Cultural and Natural Heritage list.",
    ],
    img("2022/11/img_6061.jpg"),
    img("2022/11/img_6060.jpg"),
    img("2022/11/img_6058.jpg"),
    img("2022/11/img_6057.jpg"),
    [
      "H5",
      "ما لا يجب أن تفوته",
      "What you must not miss",
    ],
    [
      "P",
      "في زيارتك الى Tebíč (التي تقع في غرب مورافيا بين Jihlava وBrno) ، يجب الا تحذف جولة في الحي اليهودي الخلاب ، انه أحد أسباب ادراج المدينة في قائمة اليونسكو للتراث الثقافي العالمي ، ستجد هنا متاهة من الأزقة والممرات مع معبدين يهوديين ومدرسة ومبنى بلدية وحاخامية ، الحي اليهودي القديم بأكمله محاط من جانب بمنحدر حاد ، وعلى الجانب الآخر من النهر بواجهة بحرية مبنية ، عاش اليهود والمسيحيون جنبا الى جنب في وئام لقرون في توبيش ، وعلى الرغم من اختلاف أديانهم ، الا أن بعضهم يحترم الآخر ، هنا فقط يمكن أن ترتفع كنيسة القديس كريستيان بروكوبيوس ، المبنية على الطراز الرومانسكي مع عناصر قوطية مبكرة ، في المنطقة المجاورة مباشرة للغيتو ، الكاتدرائية هي جوهرة العمارة البوهيمية في العصور الوسطى",
      "On your visit to Třebíč (located in western Moravia between Jihlava and Brno), you must not skip a tour of the charming Jewish quarter — it is one of the reasons the town was included on the UNESCO World Heritage list. Here you will find a maze of alleys and passageways with two synagogues, a school, a town hall building and a rabbinate. The entire old Jewish quarter is bordered on one side by a steep slope, and on the other side of the river by a built waterfront. Jews and Christians lived side by side in harmony for centuries in Třebíč, and despite their differing religions, they respected one another. Only here could the Basilica of Saint Procopius rise, built in the Romanesque style with early Gothic elements, in the area immediately adjoining the ghetto — the basilica is a gem of medieval Bohemian architecture.",
    ],
    img("2022/11/img_6065.jpg"),
    img("2022/11/img_6064.jpg"),
    img("2022/11/img_6063.jpg"),
    img("2022/11/img_6062.jpg"),
    [
      "H5",
      "نزهة عبر Tebíč اليهودية",
      "A walk through Jewish Třebíč",
    ],
    [
      "P",
      "اذا كنت ترغب في رؤية أسرة يهودية نموذجية من القرون السابقة ، فان Třebíč تقدم فرصة فريدة من نوعها للقيام بذلك ، بمساعدة المتحف المحلي ، يدعوك أحد سكان المدينة سيليجمان باور الى منزله ، الذي بناه في القرن الثامن عشر بجوار كنيس توبيش ، أثناء زيارتك ستتجول في متجر الطابق الأرضي مع مفروشات قديمة وغرفة نوم ومساحات داخلية أخرى ، تم تحويل العلية السابقة الى غرفة محاضرات ممتعة مع معدات سمعية وبصرية ، وفي عدة مرات في السنة ، خلال المناسبات الاحتفالية ، يقدم المطبخ الأطباق اليهودية التقليدية في أوروبا الوسطى",
      "If you would like to see a typical Jewish household from centuries past, Třebíč offers a unique opportunity to do so. With the help of the local museum, one of the town's residents, Seligmann Bauer, invites you into his home, which he built in the eighteenth century next to the Třebíč synagogue. During your visit you will wander through the ground-floor shop with its antique furnishings, a bedroom and other interior spaces. The former attic has been turned into an enjoyable lecture room with audiovisual equipment, and several times a year, during festive occasions, the kitchen serves traditional Central European Jewish dishes.",
    ],
    [
      "H5",
      "الى أين أذهب",
      "Where to go",
    ],
    [
      "P",
      "لكل حي يهودي مقبرة خاصة به ، يقع واحد في Tebíč في المنحدرات الشديدة لوادي النهر ، ومع ما يقرب من ثلاثة آلاف شواهد ، فهو واحد من أكبر القبور في جمهورية التشيك ، تماما مثل أي مقبرة أخرى ، تتمتع المقبرة الموجودة في توبيتش بأجواء مؤثرة ستأسرك ، يوجد أيضا عدد من مسارات ركوب الدراجات حول توبيش ، لذلك يمكنك الاستمتاع بالمنطقة المحيطة من مقعد دراجتك أيضا ، بالاضافة الى ذلك هناك مدينة أخرى بالقرب من Tebíč مدرجة ضمن آثار اليونسكو Telč ، مع قصرها وساحة النهضة الجميلة ، لاحظ بنفسك أن رحلة الى هذه المدينة القريبة تستحق وقتك",
      "Every Jewish quarter has its own cemetery, and the one in Třebíč lies on the steep slopes of the river valley. With nearly three thousand headstones, it is one of the largest cemeteries in the Czech Republic. Just like any other cemetery, the one in Třebíč has a moving atmosphere that will captivate you. There are also a number of cycling routes around Třebíč, so you can enjoy the surrounding area from your bicycle seat as well. In addition, there is another town near Třebíč listed as a UNESCO site — Telč, with its chateau and beautiful Renaissance square. See for yourself that a trip to this nearby town is worth your time.",
    ],
  ],
);

/* --------------------------------- BRNO --------------------------------- */

const BRNO = build(
  "https://100region.com/?p=29896&amp=1",
  "السياحة في التشيك – مدينة برنو",
  "Tourism in Czechia — Brno",
  U("2022/11/img_6067.jpg"),
  [
    [
      "H4",
      "مدينة نابضة بالحياة في وسط أوروبا",
      "A city pulsing with life in Central Europe",
    ],
    [
      "P",
      "تجمع عاصمة جنوب مورافيا بشكل مثالي بين التاريخ والعمارة الحديثة والثقافة والحياة الليلية المزدحمة في الحانات الأصلية ، يجب أن تشاهد فيلا Tugendhat الأسطورية ، تحت الأرض الغامض ، ملجأ القنبلة الذرية للقلة المختارة ، سجن سيئ السمعة وثاني أكبر مستودع للعظام في أوروبا : كل ذلك في مدينة الطلاب والعلوم والجو السحري المنتشر في كل مكان مواسم ، لقد اخترنا ستة أنشطة وأماكن لا بد منها في برنو",
      "The capital of South Moravia combines history, modern architecture, culture and a nightlife bustling with original bars in perfect harmony. You must see the legendary Villa Tugendhat, the mysterious underground, an atomic bomb shelter for the chosen few, an infamous prison, and Europe's second-largest ossuary: all of this in a city of students and science, with a magical atmosphere spread everywhere throughout the seasons. We have chosen six must-do activities and places in Brno.",
    ],
    [
      "H5",
      "جوهرة وظيفية أسطورية",
      "A legendary functionalist gem",
    ],
    [
      "P",
      "فيلا Tugendhat",
      "Villa Tugendhat",
    ],
    [
      "P",
      "عند زيارة مدينة برنو ، عليك ببساطة أن ترى فيلا توجندهات ، الجوهرة الوظيفية للمهندس المعماري لودفيج ميس فان دير روه ، تم تسجيل الفيلا في قائمة التراث الثقافي العالمي لليونسكو ، لأول مرة في التاريخ ، استخدم المهندس المعماري هيكلا فولاذيا على أعمدة مع مخطط أرضي في منزل خاص ، كانت الفيلا استثنائية في وقتها (نهاية العشرينيات) بفضل العديد من وسائل الراحة غير العادية : نظام مشابه للتكييف الحديث ، وتدفئة الهواء الساخن ، وخلية التصوير عند المدخل ، وفتح النافذة الكهربائية ، وجدار الجزع الجميل ، جوهرة أخرى من العمارة الحديثة هي فيلا Stiassni ، التي تمثل رفاهية وسحر فترة ما بين الحربين ، بعد الحرب العالمية الثانية ، كان بمثابة فندق لزيارات الدولة البارزة ، لا تزال بعض الجواهر الوظيفية في برنو تعيش اليوم ، مثل مقهى ERA ، حيث يمكنك الاستمتاع بفنجان رائع من القهوة مع كعكة",
      "When visiting the city of Brno, you simply must see Villa Tugendhat, the functionalist gem of architect Ludwig Mies van der Rohe. The villa was inscribed on the UNESCO World Cultural Heritage list. For the first time in history, the architect used a steel structure on columns with an open floor plan in a private home. The villa was exceptional for its time (the late 1920s) thanks to numerous unusual amenities: a system similar to modern air conditioning, warm-air heating, a photoelectric cell at the entrance, an electric window opener, and a beautiful onyx wall. Another gem of modern architecture is Villa Stiassni, which represents the luxury and charm of the interwar period; after the Second World War, it served as a hotel for prominent state visits. Some functionalist gems in Brno are still alive today, such as Café ERA, where you can enjoy a wonderful cup of coffee with a cake.",
    ],
    img("2022/11/img_6067.jpg"),
    img("2022/11/img_6068.jpg"),
    img("2022/11/img_6069.jpg"),
    [
      "H5",
      "كاتدرائية القديس بطرس وبولس",
      "The Cathedral of Saints Peter and Paul",
    ],
    [
      "P",
      "عندما أنقذت حيلة صغيرة المدينة من السويديين",
      "When a small trick saved the city from the Swedes",
    ],
    [
      "P",
      "ترتفع كاتدرائية القديس بطرس وبولس ذات الطراز القوطي الجديد مع برج الكنيسة المزدوج النموذجي بشكل مهيب فوق وسط المدينة ، انه يوفر اطلالة جميلة على المدينة ويمكنك رؤية الكاتدرائية والقبو والخزانة هناك ، اشتهرت بخدعة صغيرة حدثت عام 1645م ، تقول الأسطورة أنه بعد ثلاثة أشهر ونصف من محاصرة المدينة ، قال السويديون انهم اذا لم يتمكنوا من هزيمة المدينة حتى يدق الجرس عند الظهر ، فسيغادرون ، لذلك قرع المدافعون الجرس قبل ساعة",
      "The Neo-Gothic Cathedral of Saints Peter and Paul, with its characteristic twin church tower, rises majestically over the city centre. It offers a beautiful view of the city, and there you can see the cathedral, the crypt and the treasury. It became famous for a small trick that took place in 1645: legend has it that after three and a half months of besieging the city, the Swedes said that if they could not defeat the city by the time the bell tolled noon, they would leave — so the defenders rang the bell an hour early.",
    ],
    [
      "P",
      "يوجد في كنيسة القديس يعقوب المحلية برج يبلغ ارتفاعه 92 مترا وثاني أكبر معبد للعظام في أوروبا حيث تستريح بقايا أكثر من 50 ألف شخص",
      "The local Church of Saint James has a tower 92 metres tall and Europe's second-largest ossuary, where the remains of more than 50,000 people rest.",
    ],
    [
      "H5",
      "سوق الملفوف والساعة الفلكية الحديثة",
      "The Cabbage Market and the modern astronomical clock",
    ],
    [
      "P",
      "متاهة وساعة بها كرات متساقطة",
      "A maze and a clock with falling balls",
    ],
    [
      "P",
      "سوق الملفوف هو سوق مفتوح في برنو ، أدت الحاجة الى تخزين الطعام في العصور الوسطى الى حفر أقبية تحت المنازل هناك ، تم الحفاظ على متاهة الممرات والأقبية الغامضة على بعد عدة أمتار تحت الأرض حتى يومنا هذا ، يمكنك رؤية حبوب منع الحمل هناك ، بالاضافة الى قفص للأشخاص المجانين ومختبر الكيميائي ، ولا تنس ضبط ساعتك وفقا للساعة القضيبية لبرنو ، انها تظهر الوقت بطريقة غامضة ولكنها على الأقل تطلق كرة جامع كل يوم في الساعة 11",
      "The Cabbage Market is an open-air market in Brno. The need to store food in the Middle Ages led to cellars being dug beneath the houses there. The maze of mysterious passages and cellars several metres underground has been preserved to this day. You can see contraceptive pills there, as well as a cage for the mad and an alchemist's laboratory. And do not forget to set your watch by Brno's astronomical clock — it shows the time in a mysterious way, but at least it releases a glass marble every day at 11 o'clock.",
    ],
    [
      "H5",
      "قلعة Špilberk",
      "Špilberk Castle",
    ],
    [
      "P",
      "كان السجن الأشد سابقا في أوروبا",
      "It was once the harshest prison in Europe",
    ],
    [
      "P",
      "تم بناء قلعة سبيلبيرك من قبل الملك التشيكي أوتوكار الثاني ملك بوهيميا في منتصف القرن الثالث عشر ، تم تحويل القلعة القوطية في الأصل الى حصن باروكي ضخم في منتصف القرن السابع عشر قاوم العديد من الحصارات ، منذ القرن الثامن عشر ، تم استخدام Špilberk كسجن مدني به عدد كبير من الملاجئ المظلمة وغرفة تعذيب ، وهي وجهة شهيرة للسياح اليوم ، انه المكان الذي قضى فيه الشاعر الايطالي سيلفيو بيليكو عقوبته ، وكذلك البارون ترينك وقطاع الطرق بابنسكي ، اليوم ، سبيلبيرك هو مكان ثقافي يستضيف المعارض والمهرجانات الموسيقية والفعاليات المسرحية الصيفية",
      "Špilberk Castle was built by the Czech king Ottokar II of Bohemia in the mid-thirteenth century. The originally Gothic castle was transformed into a massive Baroque fortress in the mid-seventeenth century, which withstood numerous sieges. Since the eighteenth century, Špilberk has been used as a civil prison with a large number of dark dungeons and a torture chamber, and it is a popular destination for tourists today. It is the place where the Italian poet Silvio Pellico served his sentence, as did Baron Trenck and the highwayman Babinský. Today, Špilberk is a cultural venue that hosts exhibitions, music festivals and summer theatrical events.",
    ],
    [
      "H5",
      "10-Z Shelter",
      "10-Z Shelter",
    ],
    [
      "P",
      "ملجأ من القنابل الذرية للنخبة",
      "An atomic bomb shelter for the elite",
    ],
    [
      "P",
      "10-Z هو الاسم الرمزي للمأوى الذري الأكثر سرية لنخبة برنو والمنطقة ، تم بناؤه خلال النظام النازي كمأوى ضد القصف الأمريكي والسوفيتي لبرنو ، لكنه لم ينته حتى عام 1959م ، تتسع لـ 500 شخص ، ويمكن أن يحميهم لمدة ثلاثة أيام ، درجة الحرارة في الملجأ ثابتة 14 درجة مئوية ، وبالتالي ستستمتع بجولة مدتها 60 دقيقة مرتديا معطف الجندي ، في نهاية الجولة ، يمكنك الاستمتاع بأحد الوجبات الخفيفة الاجتماعية النموذجية في بار الألبان الأنيق ، مثل البيض الروسي",
      "10-Z is the code name of the most secret atomic shelter for the elite of Brno and the region. It was built during the Nazi regime as a shelter against American and Soviet bombing of Brno, but it was not finished until 1959. It can hold 500 people and can protect them for three days. The temperature in the shelter is a constant 14 degrees Celsius, so you will enjoy a 60-minute tour wearing a soldier's coat. At the end of the tour, you can enjoy one of the typical convivial snacks at the elegant dairy bar, such as Russian eggs.",
    ],
    img("2022/11/img_6070.jpg"),
    img("2022/11/img_6071.jpg"),
    img("2022/11/img_6072.jpg"),
    [
      "H5",
      "المقاهي والبارات",
      "Cafés and bars",
    ],
    [
      "P",
      "برنو مذاقها جيد في أي وقت",
      "Brno tastes good at any time",
    ],
    [
      "P",
      "برنو مدينة الطلاب والقهوة ومفاهيم الحانات غير العادية ، هناك شيء فريد في كل زاوية ، تقدم شاحنات المقاهي الرجعية نكهة قهوة مختلفة كل يوم ، البنفسج أو العلكة أو الموز ، كما تقدم المقاهي المريحة خلطات محمصة أو قهوة مزينة بحلوى غزل البنات ، وعندما تغرب الشمس ستختبر نبض برنو : المشروبات الغريبة والتقليدية ، والبرغر الممتاز ، والبيرة عند النقر والموسيقى ، وللاسترخاء قم بزيارة سد برنو مع الشواطئ والمرافق الرياضية ، كما يمكنك استقلال قاربا الى قلعة Veveří ، وهي واحدة من أقدم وأكبر مجمعات القلعة في مورافيا ، يجب عليك بالتأكيد زيارة برنو : يمكن للجميع العثور على شيء يحبه هناك",
      "Brno is a city of students, coffee, and unusual bar concepts — there is something unique on every corner. Retro coffee trucks offer a different coffee flavour every day: violet, bubblegum, or banana. Cosy cafés also serve roasted blends or coffee decorated with cotton-candy sweets. And when the sun sets, you will experience the pulse of Brno: unusual and traditional drinks, excellent burgers, beer on tap, and music. To relax, visit the Brno reservoir with its beaches and sports facilities; you can also take a boat to Veveří Castle, one of the oldest and largest castle complexes in Moravia. You should definitely visit Brno: everyone can find something to love there.",
    ],
    [
      "H5",
      "نصائح للرحلات حول برنو",
      "Tips for trips around Brno",
    ],
    [
      "P",
      "يحتفل Cairn of Peace بالقرب من Slavkov بذكرى معركة الأباطرة الثلاثة الشهيرة بالقرب من Slavkov في عام 1805م ، سوف يسحرك Moravian Karst بعالم كهوف الهوابط والهاوية الأسطورية ونهر تحت الأرض ، تعد منطقة Lednice-Valtice Landscape هي أكبر منطقة ذات مناظر طبيعية في أوروبا وهي مسجلة في قائمة اليونسكو. ستجذبك الأجواء التاريخية لميكولوف مع النبيذ والصخور البيضاء",
      "The Cairn of Peace near Slavkov commemorates the famous Battle of the Three Emperors near Slavkov in 1805. The Moravian Karst will enchant you with its world of stalactite caves, a legendary abyss, and an underground river. The Lednice-Valtice Landscape is the largest landscape area in Europe and is registered on the UNESCO list. The historic atmosphere of Mikulov, with its wine and white rocks, will draw you in.",
    ],
    [
      "H5",
      "العنوان",
      "Address",
    ],
    [
      "P",
      "TIC BRNO, příspěvková organizace, Radnická 365/2, 602 00 Brno",
      "TIC BRNO, příspěvková organizace, Radnická 365/2, 602 00 Brno",
    ],
  ],
);

export const CZ_CITY_ARTICLES_C: Record<string, CityArticle> = {
  tabor: TABOR.ar,
  trebic: TREBIC.ar,
  brno: BRNO.ar,
};

export const CZ_CITY_ARTICLES_C_EN: Record<string, { title: string; values: string[] }> = {
  tabor: TABOR.en,
  trebic: TREBIC.en,
  brno: BRNO.en,
};
