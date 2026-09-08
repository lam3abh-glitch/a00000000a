import type { Guide } from "./france-guides";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?w=1200&ssl=1`;

const c = (src: string, cap_ar: string, cap_en: string) =>
  ({ type: "IMG", src, cap_ar, cap_en, size: "compact" }) as const;

const n = (src: string) => ({ type: "IMG", src, size: "compact" }) as const;

const album: Guide = {
  slug: "portugal-album",
  title_ar: "السياحة في البرتغال – ألبوم الصور",
  title_en: "Tourism in Portugal — Photo album",
  kicker_ar: "ألبوم الصور",
  kicker_en: "Photo album",
  image: U("2022/05/img_7014.jpg"),
  blocks: [],
  gallery: [
    { src: U("2022/05/img_7014.jpg"), cap_ar: "البرتغال", cap_en: "Portugal" },
    { src: U("2022/05/img_7015.jpg"), cap_ar: "البرتغال", cap_en: "Portugal" },
    { src: U("2022/05/img_7016.jpg"), cap_ar: "البرتغال", cap_en: "Portugal" },
    { src: U("2022/05/img_7023.jpg"), cap_ar: "البرتغال", cap_en: "Portugal" },
    { src: U("2022/05/img_7022.jpg"), cap_ar: "البرتغال", cap_en: "Portugal" },
    { src: U("2022/05/img_7021.jpg"), cap_ar: "البرتغال", cap_en: "Portugal" },
    { src: U("2022/05/img_7020.jpg"), cap_ar: "البرتغال", cap_en: "Portugal" },
    { src: U("2022/05/img_7019.jpg"), cap_ar: "البرتغال", cap_en: "Portugal" },
    { src: U("2022/05/img_7018.jpg"), cap_ar: "البرتغال", cap_en: "Portugal" },
    { src: U("2022/05/img_7017.jpg"), cap_ar: "البرتغال", cap_en: "Portugal" },
  ],
};

const saoJorgeCastle: Guide = {
  slug: "sao-jorge-castle",
  title_ar: "قلعة سانت جورج .. العراقة والتاريخ",
  title_en: "The Castle of São Jorge — history and heritage",
  kicker_ar: "لشبونة",
  kicker_en: "Lisbon",
  image: U("2022/09/img_8516.jpg"),
  blocks: [
    { type: "P", ar: "تعد قلعة ساو جورج – Castelo de São Jorge دون جدال المقصد السياحي الأعلى زيارة في مدينة لشبونة البرتغالية ، والتي تقع فوق قمة تلال مقاطعة (Baixa) حيث يعتقد أن هذا المكان شغل بالسكان منذ العصر الحديدي ، الا أن الرومان هم اكتشفوا أهميته الاستراتيجية وأقاموا القلاع والحصون فيه وذلك في عام 205 قبل الميلاد", en: "The Castle of São Jorge is without doubt the most visited attraction in the Portuguese city of Lisbon. It sits on top of the hills above the Baixa district, a spot believed to have been inhabited since the Iron Age, though it was the Romans who recognised its strategic importance and built fortifications there in 205 BC." },
    { type: "P", ar: "كما وحظيت القلعة بمكانة حصينة بفضل المستنقعات التي تحيط بها ، حتى عام 1147 م عندما تم احتلالها من قبل القوات المسيحية بقيادة الملك الفونسو هنريك ومنذ ذلك الوقت والقلعة تعتبر مقرا ملكيا مزدهرا وذلك حتى بداية القرن السادس عشر عندما بني مانويل الأول قصرا جديدا مهابا بجوار النهر", en: "The castle also enjoyed a formidable position thanks to the marshland surrounding it, until 1147 when it was taken by Christian forces led by King Afonso Henriques. From that time it served as a flourishing royal residence, until the early sixteenth century when Manuel I built an imposing new palace beside the river." },
    { type: "P", ar: "المرحلة التاريخية التالية في حياة قلعة ساو جورج لعبت فيها أدوارا عديدة منها كثكنات للجنود , ومسرح , وسجن , وحتى كملجأ للأطفال قبل أن يقوم علماء الأثار التابعين للديكتاتور أنطونيو سالازار في اعادة ترميم البنية المتهالكة للقلعة في عام 1938م ، وبذلك فان البناء الحالي للقلعة ما هو الا تجديد لأحد المعالم المعمارية البارزة للعصور الوسطى ، ورغم ذلك فان قلعة ساو جورج في لشبونة تظل واحدة من أعلى المزارات السياحية في البلاد والتي يقصدها ألاف السياح سنويا", en: "In the next stage of its history the Castle of São Jorge played many roles — soldiers' barracks, theatre, prison, even an orphanage — before archaeologists working under the dictator António Salazar restored its crumbling structure in 1938. The castle as it stands today is therefore a renewal of one of the outstanding medieval monuments, yet it remains one of the most visited sites in the country, drawing thousands of travellers every year." },
    { type: "P", ar: "وقد كشفت البعثات الأثرية الحديثة عن أساسات هياكل مستعمرات ترجع الى القرن الحادي عشر الميلادي وأطلال القصر الملكي القصبات الأندلسية والذي دمر تاريخيا في زلزال عام 1755 م الشهير ، يضم متحف قلعة ساو جورج مجموعة من المعروضات التي يتشكل غالبها من المقتنيات التي وجدت أثناء الحفر تحت القلعة أو في المناطق المجاورة لها", en: "Modern archaeological missions have uncovered the foundations of settlement structures dating to the eleventh century, together with the ruins of the Andalusian royal alcáçova, destroyed in the famous earthquake of 1755. The castle museum holds a collection of exhibits, most of them objects found while digging beneath the castle or in the neighbouring areas." },
    { type: "P", ar: "تتضمن الجولات التي يقوم بها السياح أثناء زيارة قلعة ساو جورج التجول في ساحات القلعة التي شهدت العديد من المعارك الحربية و السير فوق الأسوار المهيبة التي تحيط بها والتي تمكن السائح من رؤية العديد من معالم لشبونة ولو من مسافة مثل النهر و المحيط الأطلنطي", en: "Tours of the Castle of São Jorge take visitors through the courtyards that witnessed so many battles and along the mighty walls surrounding it, from which many landmarks of Lisbon can be seen — even at a distance — such as the river and the Atlantic Ocean." },
    { type: "P", ar: "كما تعتبر زيارة برج (Ulysses) واستعمال المنظار المكبر الذي يسمى (Obscura Camera) ، والذي يعرض رؤية بانورامية بزاوية 360 درجة لجميع مشاهد المدينة السفلى من أجمل الأوقات لدى الزائرين ، تحيط بقلعة ساو جورج العديد من المقاهي والمطاعم المتناثرة في الحدائق والمساحات الخضراء والتي يستخدم بعضا منها كمسارح مفتوحة أو قاعات لعروض الفرق الموسيقية", en: "A visit to the Ulysses Tower and its camera obscura, which gives a 360-degree panorama of the whole lower city, is one of the highlights for visitors. The Castle of São Jorge is surrounded by cafés and restaurants scattered through the gardens and green spaces, some of them used as open-air theatres or halls for musical performances." },
    c(U("2022/09/9375b768-52c2-405a-ba3b-56eb04f9137c.jpg"), "من داخل قلعة سانت جورج بلشبونة", "Inside the Castle of São Jorge in Lisbon"),
    { type: "P", ar: "تقع قلعة سان جورج في لشبونة على ربوة تطل على حي قديم وهي من أهم المزارات السياحية في البرتغال ، وقد بدأ بناء القلعة في القرن الـ 11 ثم تم استكمالها في القرن الـ 12 لتصبح قصرا للملك ، وفي القرن الـ 16 تهدمت أجزاء من القلعة بفعل الزلزال ، وتم تجديدها بعدها لتصبح اليوم معلم رئيسي معبر عن مدينة لشبونة وتضم متحفا يشمل بعض الآثار العربية التي تعود لحكم العرب للمنطقة ، ويمكن رؤية القلعة من أي مكان في المدينة نظرا لموقعها المرتفع ، كما يمكن الحصول على مشهد ساحر للمدينة من أعلى القلعة", en: "The Castle of São Jorge stands in Lisbon on a hill overlooking an old quarter and is one of the most important sites in Portugal. Construction began in the eleventh century and was completed in the twelfth to serve as a royal palace. In the sixteenth century parts of the castle were brought down by the earthquake, and it was renovated afterwards to become the landmark that speaks for Lisbon today, with a museum holding some Arab remains from the period of Arab rule over the region. The castle can be seen from anywhere in the city thanks to its elevated position, and from the top there is an enchanting view over Lisbon." },
    c(U("2022/09/img_8481.jpg"), "بالقرب من احد الابراج الموجودة بقلعة سانت جورج بلشبونة", "Beside one of the towers of the Castle of São Jorge"),
    c(U("2022/09/img_8516.jpg"), "قلعة سانت جورج واطلالتها المبهرة على كافة لشبونة", "The castle and its dazzling view over all of Lisbon"),
    c(U("2022/09/img_8431.jpg"), "اطلاله اخرى لقلعة سانت جورج بلشبونة", "Another view of the Castle of São Jorge"),
    { type: "H3", ar: "افضل الانشطة التي يمكن القيام بها في قلعة سانت جورج بلشبونة", en: "The best things to do at the Castle of São Jorge" },
    { type: "P", ar: "عشاق التاريخ والآثار القديمة خاصة المهتمين بحقبة العصور الوسطى ، يمكنكم مشاهدة قلعة ساو جورج هذه القلعة التي تتميز بتاريخها العريق", en: "Lovers of history and ancient remains, especially those interested in the medieval period, can explore the Castle of São Jorge and its long history." },
    { type: "P", ar: "القلعة أيضا تعد مكانا مثاليا للغاية لمحبي فنون العمارة والبناء ، تصميمها القديم والفريد الباقي منذ مئات الأعوام يستحق نظرة قريبة ، أيضا النقوش الفريدة التي تزين جدرانها واللوحات العتيقة والنصب التذكارية التي تنتشر داخل ساحتها من الأشياء المميزة", en: "The castle is also an ideal place for admirers of architecture: its old and singular design, surviving for hundreds of years, deserves a close look, and the unique carvings decorating its walls, the antique panels and the memorials scattered through its courtyard are all remarkable." },
    { type: "P", ar: "عند صعودك الى قمة قلعة ساو جورج تستطيع أن تحصل على مشهد بانورامي خلاب للغاية لمدينة لشبونة الرائعة ، محبي المرتفعات يمكنهم تسلق عدد لا بأس به من الدرجات للوصول الى قمة القلعة التاريخية", en: "Climbing to the top of the Castle of São Jorge rewards you with a breathtaking panorama of wonderful Lisbon, and those who love heights can take on a fair number of steps to reach the summit of the historic fortress." },
    c(U("2022/09/img_8460.jpg"), "عند احد مداخل الغرف بقلعة سانت جورج بلشبونة", "At one of the room entrances inside the castle"),
    c(U("2022/09/img_8573.jpg"), "قلعة سانت جورج بلشبونة", "The Castle of São Jorge in Lisbon"),
    c(U("2022/09/img_8392.jpg"), "قلعة سانت جورج بلشبونة", "The Castle of São Jorge in Lisbon"),
    { type: "H3", ar: "سعر تذكرة وأوقات دخول قلعة سانت جورج بلشبونة", en: "Tickets and opening hours of the Castle of São Jorge" },
    { type: "P", ar: "القلعة متاحة للزيارة كافة ايام الاسبوع من الساعة 09:00 صباحا وحتى الساعة 06:00 مساء ، واسعار التذاكر للبالغين 8.50 يورو ، وللطلبة 5 يورو ، وللاطفال أقل من 10 أعوام دخول مجاني", en: "The castle is open every day of the week from 09:00 to 18:00. Tickets cost 8.50 euros for adults and 5 euros for students, while children under 10 enter free." },
  ],
};

const lisbonCathedral: Guide = {
  slug: "lisbon-cathedral",
  title_ar: "كاتدرائية لشبونة .. العراقة والتاريخ",
  title_en: "Lisbon Cathedral — history and heritage",
  kicker_ar: "لشبونة",
  kicker_en: "Lisbon",
  image: U("2022/09/img_2864.jpg"),
  blocks: [
    { type: "P", ar: "كاتدرائية لشبونة Santa Maria Maior de Lisboa وتعرف شعبيا ببساطة سا Sé ، هي كنيسة رومانية كاثوليكية تقع في مدينة لشبونة البرتغالية ، وتعتبر أقدم كنيسة في المدينة ، وهي مقام كرسي مطرانية لشبونة ، منذ بداية بناء الكنيسة على أطلال جامع لشبونة المدمر عقب حصار لشبونة عام 1147 ، رممت البناية عدة مرات وصمدت أمام زلازل كثيرة ، وهي اليوم تمثل مزيجا من الأساليب المعمارية ، صنفت ضمن المعالم الوطنية منذ 1910", en: "Lisbon Cathedral, Santa Maria Maior de Lisboa, popularly known simply as the Sé, is a Roman Catholic church in the Portuguese city of Lisbon and the oldest church in the city, the seat of the Archdiocese of Lisbon. Since it was first built on the ruins of the mosque of Lisbon, destroyed after the siege of 1147, the building has been restored several times and has withstood many earthquakes. Today it presents a blend of architectural styles, and it has been classified as a national monument since 1910." },
    c(U("2022/09/image-5.jpg"), "من امام كاتدرائية لشبونة", "In front of Lisbon Cathedral"),
    { type: "P", ar: "تعتبر كاتدرائية لشبونة معلم أثري مهم في مدينة لشبونة ، وهي من أقدم الكنائس الموجودة فيها ، انها عبارة عن كنيسة رومانية كاثوليكية ، حيث تتميز بطرازها المعماري الجميل ففيها الشبابيك الملونة والمزخرفة والأشكال الهندسية والقباب والأعمدة والأقواس ، ومن الجدير بالذكر أنه يتم ترميم هذه الكنيسة بشكل مستمر مما جعلها تمثل مزيجا من الأساليب المعمارية المهيبة", en: "Lisbon Cathedral is an important historic monument in the city and one of its oldest churches. A Roman Catholic church, it is distinguished by its beautiful architecture — stained and ornamented windows, geometric forms, domes, columns and arches. It is worth noting that the church is continuously restored, which is what has made it a blend of imposing architectural styles." },
    c(U("2022/09/img_2865.jpg"), "صورة توضح جمال الزجاج بداخل كاتدرائية لشبونة", "The beauty of the stained glass inside the cathedral"),
    c(U("2022/09/img_2864.jpg"), "كاتدرائية لشبونة", "Lisbon Cathedral"),
    c(U("2022/09/img_2866.jpg"), "كاتدرائية لشبونة ليلا", "Lisbon Cathedral by night"),
    c(U("2022/09/img_8693.jpg"), "داخل كاتدرائية لشبونة", "Inside Lisbon Cathedral"),
    c(U("2022/09/img_8689.jpg"), "داخل كاتدرائية لشبونة", "Inside Lisbon Cathedral"),
  ],
};

const domLuisBridge: Guide = {
  slug: "dom-luis-bridge",
  title_ar: "جسر دوم لويس .. اعجوبة التصميم والتنفيذ",
  title_en: "The Dom Luís Bridge — a marvel of design and engineering",
  kicker_ar: "بورتو",
  kicker_en: "Porto",
  image: U("2022/09/img_2944.jpg"),
  blocks: [
    { type: "P", ar: "تمتد المساحات المعدنية ذات الطابقين لجسر دوم لويس عبر نهر دورو من بورتو الى فيلا نوفا دي جايا ، وقد صممها تيوفيل سيريغ ، وغوستاف ايفل هو الذي وضع أيضا الخطط لجسر دونا ماريا بيا القريب ، عندما تم الانتهاء من جسر دوم لويس في عام 1886 ، كان أطول جسر منفرد في العالم بارتفاع 564 قدما ، وكان يدعم وزن 3045 طنا من الفولاذ", en: "The double-deck metal spans of the Dom Luís Bridge cross the river Douro from Porto to Vila Nova de Gaia. They were designed by Théophile Seyrig, while Gustave Eiffel drew up the plans for the nearby Dona Maria Pia Bridge. When the Dom Luís Bridge was completed in 1886 it was the longest single span in the world at 564 feet, carrying 3,045 tonnes of steel." },
    { type: "P", ar: "شكل الجسر خطوة مهمة الى الأمام في النمو الاقتصادي لبورتو ، كما كان من قبل ، كانت الممرات الوحيدة عبر النهر هي القوارب التي كانت متماسكة معا ، اليوم يحمل السطح السفلي للجسر السيارات بينما يستخدم المترو الخط D المستوى العلوي ويحتوي على ممر للمشاة يوفر اطلالات عبر النهر ، منذ أواخر القرن التاسع عشر ، انضمت أربعة جسور أخرى الى جسر دوم لويس الأول ودونا ماريا بيا في عبور نهر دورو ، يمكن رؤيتهم جميعا بشكل أفضل من خلال رحلة نهرية في رابيلو خشبي تقليدي", en: "The bridge was an important step forward in the economic growth of Porto: before it, the only crossings of the river were boats lashed together. Today the lower deck carries cars while metro line D uses the upper level, which also has a pedestrian walkway offering views across the river. Since the late nineteenth century, four more bridges have joined Dom Luís I and Dona Maria Pia in crossing the Douro, and all of them are best seen from a river trip in a traditional wooden rabelo." },
    c(U("2022/09/img_2942.jpg"), "صورة جوية لجسر دوم لويس ببورتو", "An aerial view of the Dom Luís Bridge in Porto"),
    { type: "P", ar: "يمتد جسر دوم لويس الأول على نهر دورو ويربط بين بيوت النبيذ في فيلا نوفا دي جايا ومنطقة Ribeira الصاخبة وسط مدينة بورتو ، بني الجسر بين عامي 1881 و 1886 ، وحمل اسم ملك البرتغال آنذاك لويس الأول", en: "The Dom Luís I Bridge spans the Douro and links the wine houses of Vila Nova de Gaia with the lively Ribeira district in the centre of Porto. It was built between 1881 and 1886 and named after the king of Portugal at the time, Luís I." },
    { type: "P", ar: "جسر دوم لويس الأول بونتي دي دوم لويس الأول ، أو جسر لويس الأول ، هو جسر معدني ذو طابقين يمتد على نهر دورو بين مدينتي بورتو وفيلا نوفا دي جايا في البرتغال ، عند بنائه كان امتداده 172 مترا ، وهو الأطول من نوعه في العالم ، تم الخلط بينه وبين جسر Maria Pia القريب منه ، وهو جسر للسكك الحديدية تم بناؤه قبل 9 سنوات ( ويقع على بعد كيلومتر واحد الى الشرق ) ، وهو مشابه لجسر لويس الأول", en: "The Ponte de Dom Luís I, or Luís I Bridge, is a double-deck metal bridge over the Douro between the cities of Porto and Vila Nova de Gaia in Portugal. When built, its span of 172 metres was the longest of its kind in the world. It is often confused with the nearby Maria Pia Bridge, a railway bridge built nine years earlier one kilometre to the east, which resembles it closely." },
    { type: "P", ar: "في عام 1879 ، قدم غوستاف ايفل مشروعا لبناء جسر جديد فوق دورو ، بسطح واحد مرتفع من أجل تسهيل الملاحة في السفن ، لكن تم رفض هذا المشروع بسبب النمو الهائل لسكان الحضر ، الأمر الذي تطلب اعادة التفكير في حدود منصة ذات طابق واحد", en: "In 1879 Gustave Eiffel submitted a project for a new bridge over the Douro with a single high deck to ease the passage of ships, but the plan was rejected because of the huge growth of the urban population, which required a rethinking of the limits of a single-deck platform." },
    c(U("2022/09/img_2943.jpg"), "صورة توضح أعمال الانشاء لجسر دوم لويس ببورتو", "The construction works of the Dom Luís Bridge"),
    c(U("2022/09/img_2945.jpg"), "جسر دوم لويس كما يبدو ليلا", "The Dom Luís Bridge by night"),
    c(U("2022/09/img_2946.jpg"), "احد جوانب جسر دوم لويس ببورتو", "One side of the Dom Luís Bridge in Porto"),
    { type: "P", ar: "افضل الانشطة التي يمكن القيام بها في جسر دوم لويس ببورتو", en: "The best things to do at the Dom Luís Bridge in Porto" },
    c(U("2022/09/img_2947.jpg"), "صورة لجسر دوم لويس ببورتو من المركب السياحي", "The bridge seen from the tourist boat"),
    n(U("2022/09/img_2948.jpg")),
    n(U("2022/09/img_2949.jpg")),
    n(U("2022/09/img_2950.jpg")),
    n(U("2022/09/img_2951.jpg")),
    n(U("2022/09/img_2953.jpg")),
    n(U("2022/09/img_2960.jpg")),
    n(U("2022/09/img_2959.jpg")),
    n(U("2022/09/img_2958.jpg")),
    n(U("2022/09/img_2957.jpg")),
    n(U("2022/09/img_2956.jpg")),
    n(U("2022/09/img_2955.jpg")),
  ],
};

// Listed on the Portugal country page.
export const portugalGuides: Guide[] = [album];

// Every page, including the landmark deep dives linked from the city articles.
export const portugalGuidesAll: Guide[] = [album, saoJorgeCastle, lisbonCathedral, domLuisBridge];
