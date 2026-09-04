import type { Guide } from "./france-guides";

// Deep-dive landmark pages for Prague, transcribed from 100region.com:
// p21310 (ساعة براغ الفلكية), p21331 (قلعة براغ).
const I = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

export const pragueGuidesA: Guide[] = [
  {
    slug: "astronomical-clock",
    title_ar: "ساعة براغ الفلكية .. رمز براغ وعنوانها",
    title_en: "The Prague Astronomical Clock .. the symbol and emblem of Prague",
    kicker_ar: "معالم براغ",
    kicker_en: "Prague landmarks",
    image: I("2022/09/img_6025-1.jpg"),
    blocks: [
      {
        type: "P",
        ar: "ساعة براغ الفلكية Pražský orloj وتنطق براجسكي أورلوي وهي ساعة فلكية في مدينة براغ عاصمة التشيك وتعود الى عهد العصور الوسطى ، يعود أقدم ذكر للساعة الى سنة 1410 وهي بذلك ثالث أقدم ساعة فلكية في العالم ، وأقدم ساعة لا تزال تعمل",
        en: "The Prague astronomical clock, Pražský orloj, pronounced Prazhski orloi, is an astronomical clock in the city of Prague, the capital of Czechia, dating back to the Middle Ages. The oldest mention of the clock goes back to the year 1410, making it the third oldest astronomical clock in the world, and the oldest one still working.",
      },
      { type: "IMG", src: I("2022/09/img_2473.jpg"), cap_ar: "الساعة الفلكية ببراغ", cap_en: "The astronomical clock in Prague" },
      {
        type: "P",
        ar: "هي التي شنت على ورلوغ على الحائط الجنوبي من قاعة المدينة القديمة في ساحة البلدة القديمة ، والآلية على مدار الساعة وتتكون نفسها من ثلاثة عناصر رئيسية هي الاتصالات الهاتفية الفلكية ، التي تمثل موضع الشمس والقمر في السماء ، وعرض مختلف التفاصيل الفلكية ، ذا ووك الرسل ، وتصورها عرض ساعة من الشخصيات من الرسل وغيرها من المنحوتات وخاصة تحريك شخصية من الموت (ويمثلها هيكل عظمي) ضرب الزمن وتقويم الهاتفي مع الميداليات التي تمثل أشهر ، وفقا لأسطورة محلية ، ستعاني المدينة اذا أهمل على مدار الساعة ، ويتم وضعها عملها جيدة في خطر وشبح ، التي شنت على مدار الساعة ، وكان من المفترض أن ايماءة رأسه في التأكيد ، ووفقا للأسطورة ، وكان يمثل الأمل الوحيد صبي ولد في ليلة رأس السنة الميلادية",
        en: "It is mounted, as an orloj, on the southern wall of the Old Town Hall in the Old Town Square. The clockwork mechanism itself consists of three main components: the astronomical dial, representing the position of the sun and moon in the sky and displaying various astronomical details; the Walk of the Apostles, which shows an hourly display of figures of the apostles and other carvings, in particular the moving figure of Death (represented by a skeleton) striking the time; and the calendar dial with medallions representing the months. According to a local legend, the city will suffer if the clock is neglected, and its good working order was set as being at risk and haunted; the figure mounted on the clock was supposed to nod its head in confirmation, and according to the legend the only hope was a boy born on New Year's Eve.",
      },
      { type: "IMG", src: I("2022/09/img_6049.jpg"), cap_ar: "صورة من امام ساعة براغ الفلكية", cap_en: "A photo from in front of the Prague astronomical clock" },
      { type: "IMG", src: I("2022/09/img_2474.jpg"), cap_ar: "صورة لتماثيل حول ساعة براغ الفلكية", cap_en: "A photo of statues around the Prague astronomical clock" },
      {
        type: "H3",
        noNumber: true,
        ar: "تاريخ الساعة الفلكية براغ",
        en: "History of the Prague astronomical clock",
      },
      {
        type: "P",
        ar: "أقدم جزء من اورلوغ ، على مدار الساعة الميكانيكية والطلب الفلكية ، يعود الى 1410 عندما جعلت من ساعاتي ميكولاس من كادان وجان سيندل ، وهذا الأخير كان أستاذا للرياضيات وعلم الفلك في جامعة تشارلز ، وكان أول ذكر مسجل من ساعة يوم 9 أكتوبر 1410 وفي وقت لاحق ويفترض في جميع أنحاء 1490 ، وأضيف الاتصال الهاتفي التقويم وكان واجهة الساعة مزينة التماثيل القوطية",
        en: "The oldest part of the orloj, the mechanical clock and the astronomical dial, dates back to 1410 when it was made by the clockmakers Mikuláš of Kadaň and Jan Šindel, the latter of whom was a professor of mathematics and astronomy at Charles University. The first recorded mention of the clock was on 9 October 1410, and later, presumably around 1490, the calendar dial was added and the clock's face was decorated with Gothic statues.",
      },
      {
        type: "P",
        ar: "سابقا كان يعتقد أن Orloj شيد في 1490 من قبل سيد الساعة Jan Růže وتسمى أيضا Hanuš ، هذا ومن المعروف الآن أن يكون الخطأ التاريخي ، وهناك أسطورة تتناقله Alois Jirásek لها أن ساعاتي Hanuš كان أعمى بناء على أمر من أعضاء المجلس براغ لدرجة أنه لا يمكن تكرار عمله ، في المقابل كان تعطيل مدار الساعة ، ولم يكن أحد قادرا على اصلاح هذا الضرر لمئات السنين القادمة",
        en: "It was previously believed that the Orloj was built in 1490 by the clockmaster Jan Růže, also called Hanuš. This is now known to be a historical error, and there is a legend passed down by Alois Jirásek that the clockmaker Hanuš was blinded on the orders of members of the Prague council so that his work could not be repeated. In return, the clock's mechanism was disabled, and no one was able to repair this damage for hundreds of years afterwards.",
      },
      {
        type: "P",
        ar: "في عام 1552 تم اصلاحه من قبل يناير Taborský (ca1500-1572) ، ساعاتي سيد Klokotská هورا الذي كتب أيضا تقريرا من ساعة حيث ذكر Hanuš بأنه صانع هذه الساعة ، وكان هذا خطأ تصحيحها عن طريق اللاعب Zdeněk Horský يرجع الى تفسير غير صحيح من السجلات من هذه الفترة ، الافتراض الخاطئ بأن Hanuš كان صانع ربما يرتبط مع اعادة الاعمار له في قاعة المدينة القديمة في السنوات 1470-1473",
        en: "In 1552 it was repaired by Jan Táborský (ca. 1500–1572), master clockmaker of Klokotská Hora, who also wrote a report on the clock in which he mentioned Hanuš as its maker. This error was corrected by Zdeněk Horský, and it was due to an incorrect interpretation of records from that period; the mistaken assumption that Hanuš was the maker was perhaps linked to his reconstruction work at the Old Town Hall in the years 1470–1473.",
      },
      { type: "IMG", src: I("2022/09/img_2555.jpg"), cap_ar: "ساعة براغ الفلكية", cap_en: "The Prague astronomical clock" },
      { type: "IMG", src: I("2022/09/img_2556.jpg"), cap_ar: "تماثيل من داخل ساعة براغ الفلكية", cap_en: "Statues from inside the Prague astronomical clock" },
      {
        type: "H3",
        noNumber: true,
        ar: "مبنى الساعة الفلكية ببراغ",
        en: "The building of the Prague astronomical clock",
      },
      {
        type: "P",
        ar: "مبنى الساعة موجود في بناية بلدية براغ القديمة ، مركبة الساعة من عدة أقسام حيث ترمز الأقسام الى معاني مختلفة ، قسم يمثل الموت وتماثيل الدمى تمثل القمر ، على مدار كل ساعة تظهر فيها الشمس ، الرزنامة السنوية مقسمة حسب فصول السنة على جرس الساعة ، وتدق الساعة بعد كل ساعة كاملة ، من الساعة التاسعة صباحا حتى التاسعة مساء ، وخلال دقة الساعة تظهر التماثيل على شكل شخصية البخيل",
        en: "The clock's building is located in the Old Town Hall of Prague. The clock's mechanism is made up of several sections, each section symbolising different meanings: one section represents death, and figures of puppets represent the moon; the sun appears on the clock every hour; the annual calendar is divided according to the seasons of the year on the clock's bell. The clock chimes after every full hour, from nine in the morning until nine at night, and during the chiming the statues appear, including the figure of the miser.",
      },
      {
        type: "H3",
        noNumber: true,
        ar: "خلفية ثابتة لساعة براغ الفلكية",
        en: "The fixed background of the Prague astronomical clock",
      },
      {
        type: "P",
        ar: "تمثل الخلفية الأرض والعرض المحلي من السماء ، الدائرة الزرقاء مباشرة في وسط تمثل الأرض ، والأزرق العلوي هو جزء من السماء التي فوق الأفق ، تشير المناطق الحمراء والسوداء أجزاء من السماء تحت الأفق ، خلال النهار الشمس تجلس على الجزء الأزرق من الخلفية وفي الليل تجلس على الأسود ، خلال الفجر أو الغسق ، تم وضع الشمس الميكانيكية على الجزء الأحمر من الخلفية",
        en: "The background represents the earth and the local view of the sky. The blue circle directly in the middle represents the earth, and the blue above it is the part of the sky that is above the horizon. The red and black areas indicate parts of the sky below the horizon. During the day the sun sits on the blue part of the background, and at night it sits on the black part; during dawn or dusk, the mechanical sun is placed on the red part of the background.",
      },
    ],
  },
  {
    slug: "prague-castle",
    title_ar: "قلعة براغ .. أكبر قلاع العالم",
    title_en: "Prague Castle .. the largest castle in the world",
    kicker_ar: "معالم براغ",
    kicker_en: "Prague landmarks",
    image: I("2022/09/img_2558.jpg"),
    blocks: [
      {
        type: "P",
        ar: "قلعة براغ Pražský hrad أكبر قلاع العالم ومقر الحكم في تشيكيا على مر العصور من زمن حكام المنطقة الرومان وملوك بوهيميا وحكام العهد الشيوعي حتى حكام فترة ما بعد الشيوعية ، تقع في الجزء الشرقي من العاصمة التشيكية براغ وتحديدا في حي القلعة التاريخي",
        en: "Prague Castle, Pražský hrad, the largest castle in the world and the seat of government in Czechia through the ages, from the time of the Roman rulers of the region and the kings of Bohemia, through the rulers of the communist era, to the rulers of the post-communist period. It is located in the eastern part of the Czech capital Prague, specifically in the historic Castle District.",
      },
      {
        type: "P",
        ar: "تبلغ مساحة القلعة التي بنيت في القرن التاسع الميلادي حوالي 4300 متر مربع ، وتحتوي القلعة على كنيسة القديس فيتوس وتتميز بتنوع الفنون المعمارية فيها من الرومانسيكي الى الحديث",
        en: "The area of the castle, which was built in the ninth century AD, is about 4,300 square metres. The castle contains St. Vitus Cathedral and is distinguished by the diversity of architectural styles within it, ranging from Romanesque to modern.",
      },
      { type: "IMG", src: I("2022/09/img_2557.jpg"), cap_ar: "منظر عام لقلعة براغ", cap_en: "A general view of Prague Castle" },
      { type: "IMG", src: I("2022/09/img_5499.jpg"), cap_ar: "صورة توضح قلعة براغ من جهة النهر", cap_en: "A photo showing Prague Castle from the riverside" },
      { type: "IMG", src: I("2022/09/img_2586.jpg"), cap_ar: "صورة بداخل قلعة براغ", cap_en: "A photo inside Prague Castle" },
      {
        type: "H3",
        noNumber: true,
        ar: "قلعة براغ العملاقة",
        en: "The giant Prague Castle",
      },
      {
        type: "P",
        ar: "تأسست قلعة براغ Prague Castle في أواخر القرن التاسع ، وهي أكبر مجمع محكم البناء ومتسق وفقا لكتاب غينيس للأرقام القياسية ، وكانت القلعة والتي هي حاليا المقر الرسمي لرئيس الجمهورية التشيكية ، مقر السلطة لملوك بوهيميا ، وأباطرة الامبراطورية الرومانية المقدسة ، ورؤساء تشيكوسلوفاكيا واليوم تعد من اشهر معالم براغ",
        en: "Prague Castle was founded in the late ninth century, and it is the largest coherent and well-built castle complex according to the Guinness Book of World Records. The castle, which is currently the official seat of the President of the Czech Republic, was once the seat of power for the kings of Bohemia, the emperors of the Holy Roman Empire, and the presidents of Czechoslovakia, and today it is one of the most famous landmarks of Prague.",
      },
      {
        type: "P",
        ar: "وتحتل القلعة 70,000 متر مربع من مدينة براغ ، وهي من معالم السياحة في التشيك الأكثر زيارة ، حيث تجذب 1,8 مليون زائر سنويا ، وقد أضيف المجمع ككل الى قائمة مواقع اليونيسكو للتراث العالمي ، ويتألف من تشكيلة واسعة من القصور والكنائس لمختلف الأساليب المعمارية",
        en: "The castle occupies 70,000 square metres of the city of Prague, and is one of the most visited tourist landmarks in Czechia, attracting 1.8 million visitors annually. The complex as a whole has been added to the list of UNESCO World Heritage sites, and it consists of a wide array of palaces and churches in various architectural styles.",
      },
      { type: "IMG", src: I("2022/09/img_2587.jpg"), cap_ar: "روائع الهندسة المعمارية لقلعة براغ", cap_en: "Architectural masterpieces of Prague Castle" },
      {
        type: "H3",
        noNumber: true,
        ar: "أفضل الأنشطة التي يمكن القيام بها في قلعة براغ",
        en: "The best activities you can do at Prague Castle",
      },
      {
        type: "P",
        ar: "يمكنك الاستمتاع بمشاهدة مباني القلعة التي تنتمي لطراز القرن العاشر الروماني ، ومن ثم أضيفت لها بعض التعديلات القوطية في القرن 14م",
        en: "You can enjoy viewing the castle's buildings, which belong to the tenth-century Romanesque style, to which some Gothic modifications were later added in the 14th century.",
      },
      {
        type: "P",
        ar: "ثم يمكنك مشاهدة داخل المباني التي تتميز بأقواسها الخلابة ، ولوحاتها وتحفها المدهشة ، ولا تنسى التقاط الصور للتماثيل الموزعة في أنحائها",
        en: "Then you can view the interior of the buildings, distinguished by their stunning arches, paintings and amazing artworks, and do not forget to take photos of the statues scattered around it.",
      },
      {
        type: "P",
        ar: "ولابد لك من زيارة كاتدرائية فيتوس حيث الفن المعماري الجذاب والنوافذ الملونة ، والتي تضم معرض الخزينة لتشاهد الروائع التي يتضمنها",
        en: "You must also visit St. Vitus Cathedral, with its attractive architecture and stained-glass windows, which includes the Treasury exhibition where you can see the masterpieces it contains.",
      },
      {
        type: "P",
        ar: "ولا تنسى زيارة معرض قصة قلعة براغ الذي سيأخذك في رحلة ممتعة عبر تاريخ أكثر من ألف سنة للقلعة",
        en: "And do not forget to visit The Story of Prague Castle exhibition, which will take you on an enjoyable journey through more than a thousand years of the castle's history.",
      },
      {
        type: "P",
        ar: "وقم بزيارة كنيسة القديس جورج المدهشة ، والتي تتضمن صالاتها ومعارضها الداخلية مثالا حيا لطراز الفن الروماني الخلاب رغم صرامته المعهودة",
        en: "Visit the amazing Basilica of St. George, whose interior halls and galleries are a living example of the charming Romanesque art style, despite its usual austerity.",
      },
      {
        type: "P",
        ar: "كما يمكنك الاستمتاع بجولة في حدائق القلعة ، بما في ذلك الحدائق الملكية ، والبيت النباتي الامبراطوري ، وحدائق البستنة ، وكرم ساينت وينسيسلاس",
        en: "You can also enjoy a tour of the castle's gardens, including the Royal Garden, the Imperial Greenhouse, the horticultural gardens, and St. Wenceslas Vineyard.",
      },
      { type: "IMG", src: I("2022/09/img_2585.jpg"), cap_ar: "أحد النوافذ بمباني قلعة براغ العملاقة", cap_en: "One of the windows in the buildings of the giant Prague Castle" },
      {
        type: "H3",
        noNumber: true,
        ar: "اوقات العمل واسعار تذاكر قلعة براغ",
        en: "Opening hours and ticket prices of Prague Castle",
      },
      {
        type: "P",
        ar: "توجد بعض التفصيل لأسعار تذاكر الدخول بحسب الدرجات والجولة المراد القيام بها لذا يرجى التأكد منها بحسب موقع القلعة الالكتروني ، القلعة مفتوحة يوميا من الساعة 06:00 صباحا وحتى الساعة 22:00 مساء ، انا المباني التاريخية فتكون مفتوحة من الساعة 09:00 صباحا وحتى الساعة 17:00 مساء",
        en: "There are some details regarding the prices of entry tickets according to the categories and the tour to be taken, so please confirm them on the castle's official website. The castle is open daily from 06:00 in the morning until 22:00 at night, while the historic buildings are open from 09:00 in the morning until 17:00 in the evening.",
      },
    ],
  },
];
