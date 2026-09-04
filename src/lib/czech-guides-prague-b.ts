import type { Guide } from "./france-guides";

// Deep-dive landmark pages for Prague, transcribed from 100region.com:
// p21371 (برج بترين), p21390 (ساحة البلدة القديمة).
const I = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

export const pragueGuidesB: Guide[] = [
  {
    slug: "petrin-tower",
    title_ar: "برج بترين .. شبيه برج ايفل الشهير",
    title_en: "Petřín Tower .. the lookalike of the famous Eiffel Tower",
    kicker_ar: "معالم براغ",
    kicker_en: "Prague landmarks",
    image: I("2022/09/img_6314.jpg"),
    blocks: [
      {
        type: "P",
        ar: "برج بترين هو عبارة عن برج من المعدن بارتفاع 63.5 م ، على تلة بترين في براغ ، بني عام 1891 ، ويشبه برج ايفل واستخدم كبرج مراقبة وبرج ارسال ، يعتبر البرج اليوم من المعالم السياحية في براغ",
        en: "Petřín Tower is a metal tower 63.5 metres tall, on Petřín Hill in Prague, built in 1891. It resembles the Eiffel Tower and was used as an observation tower and a transmission tower. Today the tower is one of the tourist landmarks of Prague.",
      },
      { type: "IMG", src: I("2022/09/img_6327.jpg"), cap_ar: "صورة من امام برج بترين ببراغ", cap_en: "A photo from in front of Petřín Tower in Prague" },
      {
        type: "P",
        ar: "تقع تلة بترين على بعد حوالي نصف ساعة من مسارات المشي ، والبرج ايضا شاق التسلق ، مع ذلك يتم خدمة هذه التلة بواسطة سكة بترين الحديدية ، كما يحتوي البرج على مصعد للأشخاص المسنين وذوي الاحتياجات الخاصة",
        en: "Petřín Hill is about half an hour away along walking paths, and the tower is also strenuous to climb. Nevertheless, the hill is served by the Petřín funicular railway, and the tower also has an elevator for elderly people and those with special needs.",
      },
      {
        type: "P",
        ar: "في عام 2014 والاعوام التي تليه يزور البرج أكثر من 557,000 زائر سنويا ، حيث شكل الأجانب نسبة 70% من الزوار المذكورين",
        en: "In 2014 and the years that followed, the tower was visited by more than 557,000 visitors annually, with foreigners making up 70% of the aforementioned visitors.",
      },
      {
        type: "P",
        ar: "يمكن الوصول الى منصتي المراقبة من خلال 299 سلم في أقسام ، تتكون من 13 شاحط تحيط بالهيكل الداخلي للبرج ، يشكل زوج من السلالم هيكل حلزوني يسمح للزوار بالحركة صعودا ونزولا في نفس الوقت",
        en: "The two observation platforms can be reached via 299 steps in sections, made up of 13 flights surrounding the inner structure of the tower. A pair of staircases forms a spiral structure that allows visitors to move up and down at the same time.",
      },
      {
        type: "P",
        ar: "هناك محل لبيع الهدايا وكافتيريا صغيرة في الطابق الرئيسي ، أهبط طابق فيه هو عبارة عن منطقة عرض صغيرة ، عرض فيه أبراج المراقبة ميركور (Merkur) في الفترة 6 مارس 2013 الى 30 مارس 2014",
        en: "There is a gift shop and a small cafeteria on the main floor. The lowest floor is a small exhibition area, where Merkur observation towers were displayed from 6 March 2013 to 30 March 2014.",
      },
      { type: "IMG", src: I("2022/09/img_2591.jpg"), cap_ar: "برج بترين كما تبدو روعته", cap_en: "Petřín Tower, showing its splendour" },
      { type: "IMG", src: I("2022/09/img_2592.jpg"), cap_ar: "تلة بترين مع برج بترين", cap_en: "Petřín Hill with Petřín Tower" },
      {
        type: "H3",
        noNumber: true,
        ar: "مقارنة ما بين برج بترين وبرج ايفل",
        en: "A comparison between Petřín Tower and the Eiffel Tower",
      },
      {
        type: "P",
        ar: "غالبا ما يوصف برج بترين بأنه نسخة مصغرة من برج ايفل الشهير ، على النقيض من برج ايفل يمتلك برج بترين مقطع عرضي مثمن وليس مربع ، علاوة على ذلك لا يرتكز هذا البرج كما هو الحال في برج ايفل على أربعة أعمدة من المعدن ، فالمنطقة بأكملها تحت أرجله مغطاة بقاعة المدخل ، فالتشابه بين برج ايفل وبرج بترين هو تصميم الجسور السفلية المتقاطعة على شكل عظام مستديرة",
        en: "Petřín Tower is often described as a miniature version of the famous Eiffel Tower. Unlike the Eiffel Tower, Petřín Tower has an octagonal cross-section rather than a square one. Furthermore, this tower does not rest, as the Eiffel Tower does, on four metal pillars; the entire area beneath its legs is covered by an entrance hall. The similarity between the Eiffel Tower and Petřín Tower lies in the design of the lower crossing girders shaped like rounded bones.",
      },
      { type: "IMG", src: I("2022/09/img_2593.jpg"), cap_ar: "روعة الاضاءة ببرج بترين", cap_en: "The splendour of the lighting at Petřín Tower" },
      {
        type: "H3",
        noNumber: true,
        ar: "تاريخ برج بترين ببراغ",
        en: "The history of Petřín Tower in Prague",
      },
      {
        type: "P",
        ar: "في عام 1889 ، زار أعضاء نادي السياح التشيكيين المعرض العالمي في باريس واستلهموا برج ايفل ، جمعوا مبلغا كافيا من المال وفي شهر مارس 1891 بدأ بناء البرج لمعرض اليوبيل العالمي ، انتهى بناؤه في أربعة أشهر",
        en: "In 1889 members of the Czech Tourist Club visited the World's Fair in Paris and were inspired by the Eiffel Tower. They raised a sufficient amount of money, and in March 1891 construction of the tower began for the Jubilee World Exhibition; it was completed in four months.",
      },
      {
        type: "P",
        ar: "كان للبرج مصعدا لستة أشخاص ، في عام 1953 ، أنشئ جهاز ارسال تلفزيوني في البرج وازيل المصعد ، وملىء الانبوب بالكابلات وامدادات الطاقة",
        en: "The tower had an elevator for six people. In 1953, a television transmission device was installed in the tower, the elevator was removed, and the shaft was filled with cables and power supplies.",
      },
      {
        type: "P",
        ar: "في عام 1953 ، ركب هوائي بث تلفزيوني على برج بترين ، وهو تغذية للبرنامج الذي يقوم به هوائي راديو اتجاهي ، عمل هذا كمزود الاشارات التلفزيونية في براغ لحين افتتاح برج تلفزيون تشيكوف في أواخر عام 1992",
        en: "In 1953, a television broadcasting antenna was installed on Petřín Tower, fed by the program carried by a directional radio antenna. This served as the provider of television signals in Prague until the opening of the Žižkov Television Tower in late 1992.",
      },
      {
        type: "P",
        ar: "أغلق البرج أمام الجمهور أثناء اعادة الاعمار في الفترة 1979-1992 ، في الفترة 1999-2002 ، أعيد بناء البرج بالكامل مرة أخرى وركب مصعد جديد لذوي الاحتياجات الخاصة وكبار السن",
        en: "The tower was closed to the public during reconstruction in the period 1979-1992. In the period 1999-2002, the tower was completely rebuilt again and a new elevator was installed for people with special needs and the elderly.",
      },
      {
        type: "P",
        ar: "من 21 يناير 2013 تم تشغيل البرج من قبل متحف مدينة براغ",
        en: "Since 21 January 2013, the tower has been operated by the Prague City Museum.",
      },
      { type: "IMG", src: I("2022/09/img_6374.jpg"), cap_ar: "صورة من اعلى نقطة في برج بترين", cap_en: "A photo from the highest point of Petřín Tower" },
      {
        type: "H3",
        noNumber: true,
        ar: "اوقات العمل واسعار تذاكر برج بترين ببراغ",
        en: "Opening hours and ticket prices for Petřín Tower in Prague",
      },
      {
        type: "P",
        ar: "يفتح البرج أبوابه لاستقبال الزوار يوميا من الساعة 10:00 صباحا وحتى الساعة 18:00 مساء ، ويمتد موعد الاغلاق في أشهر الربيع والصيف حتى الساعة 22:00 مساء",
        en: "The tower opens its doors to receive visitors daily from 10:00 a.m. until 6:00 p.m., and the closing time extends in the spring and summer months until 10:00 p.m.",
      },
      {
        type: "P",
        ar: "اما أسعار تذاكر برج بترين براغ للكبار 5 يورو ، وللطلاب والأطفال 2,5 يورو",
        en: "As for ticket prices for Petřín Tower in Prague, they are 5 euros for adults, and 2.5 euros for students and children.",
      },
    ],
  },
  {
    slug: "old-town-square",
    title_ar: "ساحة البلدة القديمة .. متعة الترفيه ببراغ",
    title_en: "Old Town Square .. the joy of entertainment in Prague",
    kicker_ar: "معالم براغ",
    kicker_en: "Prague landmarks",
    image: I("2022/09/img_7404.jpg"),
    blocks: [
      {
        type: "P",
        ar: "ساحة البلدة القديمة Staroměstské náměstí هي ساحة تاريخية في البلدة القديمة من براغ ، عاصمة جمهورية التشيك ، تقع الساحة بين ساحة فاتسلاف وجسر تشارلز",
        en: "Old Town Square (Staroměstské náměstí) is a historic square in the Old Town of Prague, the capital of the Czech Republic. The square lies between Wenceslas Square and Charles Bridge.",
      },
      { type: "IMG", src: I("2022/09/img_7389.jpg"), cap_ar: "ساحة البلدة القديمة ببراغ", cap_en: "Old Town Square in Prague" },
      {
        type: "P",
        ar: "تضم الساحة مبان ذات طرازات معمارية عديدة ، ومن ضمنها كنيسة سيدة تين القوطية ، والتي كانت الكنيسة الرئيسية في هذا الجزء من المدينة منذ القرن الرابع عشر ، يبلغ طول أبراج الكنيسة 80 مترا",
        en: "The square contains buildings of many architectural styles, including the Gothic Church of Our Lady before Týn, which has been the main church in this part of the city since the fourteenth century. The church's towers are 80 metres tall.",
      },
      {
        type: "P",
        ar: "كما تضم الساحة ساعة براغ الفلكية وهي ساعة فلكية من القرون الوسطى ، وتقع على جدار البلدية القديمة ، وتم تركيب الساعة في عام 1410 ، مما يجعلها ثالث أقدم ساعة فلكية في العالم وأقدم واحدة لا تزال تعمل",
        en: "The square also contains the Prague Astronomical Clock, a medieval astronomical clock located on the wall of the Old Town Hall. The clock was installed in 1410, making it the third-oldest astronomical clock in the world and the oldest one still working.",
      },
      {
        type: "P",
        ar: "كنيسة القديس نقولا الباروكية هي كنيسة أخرى في الساحة ، بينما يوفر برج البلدية القديمة اطلالة بانورامية على البلدة القديمة ، يقع متحف الفن التابع للمعرض الوطني التشيكي في قصر كينسكي",
        en: "The Baroque Church of St. Nicholas is another church in the square, while the Old Town Hall Tower offers a panoramic view over the Old Town. The art museum of the Czech National Gallery is located in the Kinský Palace.",
      },
      { type: "IMG", src: I("2022/09/img_2598.jpg"), cap_ar: "مبنى كنيسة القديس نقولا", cap_en: "The building of St. Nicholas Church" },
      { type: "IMG", src: I("2022/09/img_2599.jpg"), cap_ar: "نصب بان هوس التذكاري", cap_en: "The Jan Hus Memorial" },
      {
        type: "H3",
        noNumber: true,
        ar: "التماثيل والنصب التذكارية في ساحة البلدة القديمة ببراغ",
        en: "Statues and memorials in Old Town Square in Prague",
      },
      {
        type: "P",
        ar: "في وسط الساحة يوجد تمثال للمجدد الديني بان هوس ، والذي اعدم حرقا في كونستانس بسبب معتقداته ، مما أدى الى حرب الهوسيين ، نصب التمثال المعروف باسم نصب يان هوس التذكاري في 6 يوليو 1915 ، الذكرى الــ 500 لوفاته",
        en: "In the middle of the square there is a statue of the religious reformer Jan Hus, who was burned at the stake in Constance for his beliefs, which led to the Hussite Wars. The statue, known as the Jan Hus Memorial, was erected on 6 July 1915, the 500th anniversary of his death.",
      },
      {
        type: "P",
        ar: "أمام البلدية القديمة هناك نصب تذكاري للشهداء الذين أعدموا بقطع الرأس على تلك البقعة في اعدام جماعي من قبل مملكة هابسبورغ ، بعيد معركة الجبل الابيض ، تم تثبيت سبعة وعشرين صليبا في الأرض لذكراهم خلال اصلاحات من البلدية القديمة بعد انتهاء الحرب العالمية الثانية بين كانت قد ثبتت لوحة بأسماء الضحايا الــ 27 سنة",
        en: "In front of the Old Town Hall there is a memorial to the martyrs who were executed by beheading on that spot in a mass execution by the Habsburg kingdom, after the Battle of White Mountain. Twenty-seven crosses were installed in the ground in their memory during renovations of the Old Town Hall, after the end of World War II, when a plaque bearing the names of the 27 victims had been fixed for years.",
      },
      {
        type: "P",
        ar: "في 3 نوفمبر 1918 ، تم تدمير عمود مريمي الذي كان قد أقيم في الساحة بعد انتهاء حرب الثلاثين عاما ، وذلك احتفالا بالاستقلال عن امبراطورية هابسبورغ",
        en: "On 3 November 1918, the Marian Column, which had been erected in the square after the end of the Thirty Years' War, was destroyed, in celebration of independence from the Habsburg Empire.",
      },
      { type: "IMG", src: I("2022/09/img_7398.jpg"), cap_ar: "ساحة البلدة القديمة ببراغ كما هو واضح جمالها وحشودها", cap_en: "Old Town Square in Prague, its beauty and crowds evident" },
      {
        type: "H3",
        noNumber: true,
        ar: "سوق عيد الميلاد بساحة البلدة القديمة ببراغ",
        en: "The Christmas market at Old Town Square in Prague",
      },
      {
        type: "P",
        ar: "في عيد الميلاد وعيد الفصح في تقام الأسواق في الساحة ، وهي تشبه أسواق القرون الوسطى ، أسواق عيد الميلاد في ساحة البلدة القديمة هي أكبر أسواق عيد الميلاد في الجمهورية التشيكية ويزورها مئات الآلاف من الزوار من داخل الجمهورية التشيكية ومن خارجها ، تقام شجرة طويلة مزينة ومنصة موسيقية ، معظم زايري الأسواق هم من الألمان والروس والايطاليين والبريطانيين",
        en: "At Christmas and Easter, markets are held in the square, resembling medieval markets. The Christmas markets at Old Town Square are the largest Christmas markets in the Czech Republic, visited by hundreds of thousands of visitors from within and outside the Czech Republic. A tall decorated tree and a music stage are set up. Most visitors to the markets are Germans, Russians, Italians and British.",
      },
      { type: "IMG", src: I("2022/09/img_2602.jpg"), cap_ar: "اسواق عيد الميلاد بساحة البلدة القديمة ببراغ", cap_en: "The Christmas markets at Old Town Square in Prague" },
      {
        type: "H3",
        noNumber: true,
        ar: "افضل الانشطة التي يمكن القيام بها في ساحة البلدة القديمة ببراغ",
        en: "The best activities to do in Old Town Square in Prague",
      },
      {
        type: "P",
        ar: "يمكنك التجول في الساحة والتقاط الصور لتمثال جان هوس الذي تم نصبه في عام 1915 م للاحتفال بالذكرى الخمسمئة لوفاته",
        en: "You can stroll around the square and take photos of the statue of Jan Hus, which was erected in 1915 to celebrate the 500th anniversary of his death.",
      },
      {
        type: "P",
        ar: "وقم بزيارة الساعة الفلكية ، وكنيسة العذراء التي تعود الى القرن 14 ، ويبلغ ارتفاع أبراجها 80 مترا وتعلوها أربعة أبراج صغيرة",
        en: "Visit the astronomical clock, and the Church of Our Lady dating back to the 14th century, whose towers rise 80 metres and are topped by four small turrets.",
      },
      {
        type: "P",
        ar: "ولا تنسى التقاط الصور لكنيسة القديس نيكولاس الباروقوطية ، والتي بنيت في القرن 18 م في موقع كنيسة قوطية من القرن 13 م",
        en: "And don't forget to take photos of the Baroque Church of St. Nicholas, which was built in the 18th century on the site of a 13th-century Gothic church.",
      },
      {
        type: "P",
        ar: "ولا بد من زيارتك لقصر كينسكي الذي يعود للقرن 18 م ، ويستخدم حاليا كمتحفا للفنون ، لتحظى بتجربة فنية مميزة ومدهشة",
        en: "You must also visit the 18th-century Kinský Palace, which is currently used as an art museum, to enjoy a distinctive and amazing artistic experience.",
      },
      {
        type: "P",
        ar: "كما ستصادف العديد من الفرق التي تقدم عروضا متنوعة ومختلفة تزيد من متعة زيارتك ، كالفرق الموسيقية ، والأكروبات ، والسحرة ، وغيرها الكثير",
        en: "You will also come across many groups presenting varied and different performances that increase the enjoyment of your visit, such as musical bands, acrobats, magicians, and many others.",
      },
      {
        type: "P",
        ar: "ولابد لك من العودة الى سحر التاريخ وأناقته ، والاستمتاع بجولة في أرجاء الساحة داخل احدى عربات الأحصنة المتواجدة باستمرار هناك",
        en: "You must return to the charm and elegance of history and enjoy a tour around the square inside one of the horse-drawn carriages that are always present there.",
      },
      {
        type: "P",
        ar: "وانهي زيارتك بجولة تسوق مثيرة ، أو بالاستمتاع بوجبة لذيذة أو كوب من القهوة في أحد المقاهي العديدة التي تتضمنها ساحة البلدة القديمة في براغ",
        en: "End your visit with an exciting shopping tour, or by enjoying a delicious meal or a cup of coffee at one of the many cafes found around Old Town Square in Prague.",
      },
    ],
  },
];
