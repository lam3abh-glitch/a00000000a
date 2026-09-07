import type { Guide, GuideBlock } from "./france-guides";
import { egyptMuseumsGuide } from "./egypt-museums";
import { egyptExtraGuides } from "./egypt-extra-guides";
import { egyptErasGuides } from "./egypt-eras-guides";
import { egyptSitesGuides } from "./egypt-sites-guides";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const imgs = (names: string[], cap_ar: string, cap_en: string): GuideBlock[] =>
  names.map((n) => ({ type: "IMG" as const, src: U(`2022/10/${n}`), cap_ar, cap_en }));

const gizaGuide: Guide = {
  slug: "giza-pyramids",
  title_ar: "أهرامات الجيزة",
  title_en: "The Pyramids of Giza",
  kicker_ar: "تعرف على أشهر المواقع الأثرية بمصر",
  kicker_en: "Egypt's most famous archaeological sites",
  image: U("2022/10/img_3926.jpg"),
  blocks: [
    { type: "H3", ar: "هضبة الجيزة وتوابعها", en: "The Giza plateau and its monuments", noNumber: true },
    {
      type: "P",
      ar: "تعد هضبة الجيزة من بين أشهر المواقع السياحية منذ العصور القديمة وحتى اليوم ، وتضم تلك الهضبة مقابر ملوك الأسرة الرابعة 2613-3494 (ق.م) وهي أهرام كل من خوفو 2566-2589 (ق.م) وابنه خفرع وحفيده منكاورع ، بالاضافة الى تمثال أبو الهول الشهير ، ويعد هرم خوفو هو الأكبر والأقدم بين تلك الأهرام والأطول في العالم طيلة 3800 عام",
      en: "The Giza plateau has been among the most famous sites since antiquity to this day. It holds the tombs of the kings of the Fourth Dynasty — the pyramids of Khufu, his son Khafre and his grandson Menkaure — along with the celebrated Sphinx. The pyramid of Khufu is the largest and oldest of them, and was the tallest building in the world for 3,800 years.",
    },
    {
      type: "P",
      ar: "ويحيط بتلك الأهرامات العظيمة آثارا أخرى ، حيث كان لكل هرم مجموعة هرمية بالاضافة الى أهرام الملكات والهريم الصغير الذي كان هرما رمزيا للملك ، وكذلك كانت هناك مصاطب خصصت لدفن كبار الشخصيات وأفراد العائلة الملكية ، ومراكب خوفو المعروفة باسم مراكب الشمس ، وكانت المجموعة الهرمية لكل ملك تتضمن معبدين أحدها هو معبد الوادي ويقع عند مرسى النيل ينطلق منه طريق صاعد جوانبه مزخرفة يؤدي الى معبد علوي والمعروف باسم المعبد الجنائزي المجاور للهرم ، وكان الكهنة يقومون بطقوس الدفن والجنازة الخاصة بالملك المتوفى داخل تلك المعابد حيث يتحول الى معبود وتقدم القرابين الثرية لروحه كي ينعم بالسلام في العالم الآخر",
      en: "Other monuments surround the great pyramids: each pyramid had its own complex, along with the queens' pyramids and the small satellite pyramid that stood symbolically for the king, mastabas set aside for the burial of dignitaries and members of the royal family, and Khufu's boats known as the solar barques. Each king's complex included two temples — the valley temple beside the Nile landing, from which a decorated causeway climbed to the upper or mortuary temple next to the pyramid — where the priests performed the burial rites for the dead king, who became a god, and offerings were made to his soul so it might rest in peace in the other world.",
    },
    {
      type: "P",
      ar: "أوقات عمل واسعار تذاكر هضبة الجيزة : مفتوح يوميا من الساعة 9 صباحا وحتى الساعة 5 مساء ، وتذاكر الدخول للأجانب 240 جنيه مصري ، وللمصريين والعرب 60 جنيه مصري ، وللطلبة نصف اسعار هذه التذاكر ، علما بأن هذه التذاكر لا تشمل الهرم الأكبر ، هرم خفرع ، هرم منكاورع ، مقبرة مرس عنخ ، جبانة العمال",
      en: "Opening hours and tickets for the Giza plateau: open daily from 9 in the morning until 5 in the afternoon. Entry is 240 Egyptian pounds for foreigners and 60 pounds for Egyptians and Arabs, half price for students. The ticket does not include the Great Pyramid, the pyramid of Khafre, the pyramid of Menkaure, the tomb of Meresankh or the workers' cemetery.",
    },
    ...imgs(
      ["img_3928.jpg", "img_3927.jpg", "img_3925.jpg", "img_3924.jpg"],
      "صور متفرقة لما تحتوية هضبة الجيزة",
      "Assorted views of the Giza plateau",
    ),
    { type: "H3", ar: "هرم خفرع بالجيزة", en: "The pyramid of Khafre at Giza", noNumber: true },
    { type: "IMG", src: U("2022/10/img_3929.jpg"), cap_ar: "هرم خفرع بالجيزة", cap_en: "The pyramid of Khafre at Giza" },
    {
      type: "P",
      ar: "أقام الملك خفرع حوالي 2558-2532 (ق.م) ابن الملك خوفو مجموعته الهرمية في هضبة الجيزة بجوار مجموعة أبيه ، ويظهر هرمه أعلى من هرم خوفو لأنه على ربوة أعلى وان كان في حقيقة الأمر أقل في الارتفاع ، حيث يبلغ نحو 143،5م ، وتتكون نواة الهرم من كتل من الحجر الجيري المحلي ، ومازالت قمة الهرم تحتفظ بكساءها الاصلي المصنوع من الحجر الجيري الفخم والذي كان قديما يكسو الهرم بأكمله ، فكان المصريون يجلبونه من محاجر طرة بواسطة مراكب ترسو بالقرب من الهرم",
      en: "King Khafre (about 2558–2532 BC), son of Khufu, raised his pyramid complex on the Giza plateau beside his father's. His pyramid appears taller than Khufu's because it stands on higher ground, although it is in fact lower, at about 143.5 m. The core is built of blocks of local limestone, and the summit still keeps its original casing of fine limestone which once covered the whole pyramid — the Egyptians brought it from the Tura quarries on boats that moored near the pyramid.",
    },
    {
      type: "P",
      ar: "وكان كل من المعبد الجنائزي لخفرع الواقع عند سفح هرمه ومعبد الوادي الخاص به في مقدمة الطريق الصاعد هما الأكبر ضمن معابد أية مجموعة هرمية أخرى ، وهما الأفضل حفظا بين معابد الدولة القديمة ، وهناك تطور معماري آخر حدث في عهد خفرع وهو تعقيد تصميم تلك المعابد ، حيث أصبحت العناصر التي تشكل معبده الجنائزي هي المعيار الجديد الذي اتبع في الدولة القديمة من بعده ، بينما انفردت مجموعة خفرع بوجود تمثال ضخم بجانب معبد الوادي لم يظهر له مثيل وهو تمثال أبي الهول العظيم",
      en: "Khafre's mortuary temple at the foot of his pyramid and his valley temple at the head of the causeway were the largest temples of any pyramid complex and the best preserved of the Old Kingdom. Another architectural development of Khafre's reign was the greater complexity of these temples: the elements of his mortuary temple became the new standard followed in the Old Kingdom after him, while his complex alone held a colossal figure beside the valley temple with no parallel anywhere — the Great Sphinx.",
    },
    {
      type: "P",
      ar: "أما معبد الوادي فيتكون من كتل ضخمة من الحجر الجيري المغطاة بالجرانيت في حين كسيت الأرضيات بالمرمر ، وتضم ساحته الواسعة أعمدة متجانسة من الجرانيت ، وكانت الكوات المنحوتة في جدران الساحة مرتبة بشكل متماثل على طول الجدران كي تضم تماثيل للملك ، بعضها معروض حاليا في المتحف المصري بالتحرير ، احدهم هو تمثال خفرع الشهير المصنوع من الجرانيت مع الصقر حورس يقف خلف رأسه ، وهو التمثال الذي يعتبر واحد من روائع الفن المصري القديم",
      en: "The valley temple is built of huge limestone blocks faced with granite, its floors paved with alabaster. Its wide court holds matched granite pillars, and the niches cut into the court walls were arranged symmetrically along them to hold statues of the king, some now displayed in the Egyptian Museum in Tahrir — among them the famous granite statue of Khafre with the falcon Horus standing behind his head, considered one of the masterpieces of ancient Egyptian art.",
    },
    {
      type: "P",
      ar: "أوقات عمل واسعار تذاكر هرم خفرع : مفتوح يوميا من الساعة 9 صباحا وحتى الساعة 5 مساء ، وتذاكر الدخول بالاضافة لتذكرة دخول المنطقة للأجانب 100 جنيه مصري ، وللمصريين والعرب 30 جنيه مصري ، وللطلبة نصف اسعار هذه التذاكر",
      en: "Opening hours and tickets for the pyramid of Khafre: open daily from 9 in the morning until 5 in the afternoon. Entry, in addition to the site ticket, is 100 Egyptian pounds for foreigners and 30 pounds for Egyptians and Arabs, half price for students.",
    },
    ...imgs(
      ["img_3929-1.jpg", "img_3930.jpg", "img_3931.jpg", "img_3932.jpg", "img_3933.jpg", "img_3934.jpg", "img_3935.jpg"],
      "صور متفرقة لهرم خفرع بالجيزة وما يحتويه",
      "Assorted views of the pyramid of Khafre and its contents",
    ),
    { type: "H3", ar: "الهرم الأكبر .. هرم الملك خوفو", en: "The Great Pyramid — the pyramid of King Khufu", noNumber: true },
    { type: "IMG", src: U("2022/10/img_3936.jpg"), cap_ar: "الهرم الأكبر .. هرم الملك خوفو", cap_en: "The Great Pyramid — the pyramid of King Khufu" },
    {
      type: "P",
      ar: "كان الهرم الأكبر أو المعروف بهرم الملك خوفو 2566-2589 (ق.م) ، مع ارتفاعه الأصلي البالغ 146.5م ، أطول مبنى في العالم طيلة 3800 عام ، كما لا يزال عجيبة من عجائب الدنيا السبع في العالم القديم والباقية حتى الآن ، وقد استغرق بناء الهرم ما بين 10 الى 20 عاما ، وحتى اليوم ليس هناك معلومات مؤكدة حول الطريقة التي بني بها الهرم الأكبر",
      en: "The Great Pyramid, known as the pyramid of King Khufu (2589–2566 BC), with its original height of 146.5 m, was the tallest building in the world for 3,800 years and remains the only surviving wonder of the seven wonders of the ancient world. It took between 10 and 20 years to build, and to this day there is no certain knowledge of how it was raised.",
    },
    {
      type: "P",
      ar: "بني الهرم الأكبر من الحجر الجيري المحلي في حين كان مغطى قديما بالكامل بكساء من الحجر الجيري عالي الجودة ، وقد تم جلب أحجار الكساء من محاجر طرة عن طريق مراكب تصل حتى الهرم ، ويضم الهرم من الداخل ثلاث حجرات دفن ، احدها مقطوعة أسفل الصخر السفلي ، واثنتان على ارتفاع داخل المبنى نفسه ، وهو أمر ينفرد به هرم خوفو لا يمتلكه هرم آخر ، ويمكن للزائر رؤية التابوت الذي كان يرقد فيه الملك خوفو بالحجرة العلوية المعروفة باسم حجرة الملك ، حيث يمكن الوصول الى هذه الحجرة من خلال البهو العظيم وهو ممر ذا سقف متدرج مهيب الحجم يعتبر تحفة في الهندسة المعمارية القديمة",
      en: "The Great Pyramid is built of local limestone and was once entirely covered with a casing of fine limestone brought from the Tura quarries by boats that reached the pyramid. Inside it holds three burial chambers — one cut into the bedrock below and two raised within the building itself, something unique to Khufu's pyramid. Visitors can see the sarcophagus in which King Khufu lay in the upper chamber known as the King's Chamber, reached through the Grand Gallery, a corridor with a stepped roof of imposing size, a masterpiece of ancient engineering.",
    },
    {
      type: "P",
      ar: "تم اكتشاف مركبين كبيرين مفككين داخل حفر بالجانب الجنوبي من الهرم الأكبر ، كان يعتقد أنها استخدمت لنقل مومياء الملك والأثاث الجنائزي الى الهرم",
      en: "Two large dismantled boats were discovered in pits on the south side of the Great Pyramid, thought to have been used to carry the king's mummy and the funerary furniture to the pyramid.",
    },
    {
      type: "P",
      ar: "أوقات عمل واسعار تذاكر هرم الملك خوفو : مفتوح يوميا من الساعة 9 صباحا وحتى الساعة 5 مساء ، وتذاكر الدخول بالاضافة لتذكرة دخول المنطقة للأجانب 440 جنيه مصري ، وللمصريين والعرب 60 جنيه مصري ، وللطلبة نصف اسعار هذه التذاكر",
      en: "Opening hours and tickets for the pyramid of Khufu: open daily from 9 in the morning until 5 in the afternoon. Entry, in addition to the site ticket, is 440 Egyptian pounds for foreigners and 60 pounds for Egyptians and Arabs, half price for students.",
    },
    ...imgs(
      [
        "img_3936-1.jpg",
        "img_3937.jpg",
        "img_3938.jpg",
        "img_3939.jpg",
        "img_3940.jpg",
        "img_3941.jpg",
        "img_3942.jpg",
        "img_3943.jpg",
      ],
      "صور متفرقة لهرم خوفو بالجيزة وما يحتويه",
      "Assorted views of the pyramid of Khufu and its contents",
    ),
    { type: "H3", ar: "مقبرة الملكة مرس عنخ الثالثة", en: "The tomb of Queen Meresankh III", noNumber: true },
    { type: "IMG", src: U("2022/10/img_3945.jpg"), cap_ar: "مقبرة الملكة مرس عنخ الثالثة", cap_en: "The tomb of Queen Meresankh III" },
    {
      type: "P",
      ar: "تحت ظلال الهرم الأكبر تقع مقبرة الملكة مرس عنخ الثالثة ، زوجة الملك خفرع وحفيدة الملك الكبير خوفو ، وتتميز تلك المقبرة بالحجم الكبير والزخارف الرائعة والتي تعكس مكانتها العظيمة ، كما أنها تحتوي على أفضل مناظر محفوظة ضمن مقابر الجبانة الشرقية بهضبة الجيزة",
      en: "In the shadow of the Great Pyramid lies the tomb of Queen Meresankh III, wife of King Khafre and granddaughter of the great king Khufu. The tomb is notable for its large size and superb decoration, reflecting her high standing, and it holds the best preserved scenes among the tombs of the eastern cemetery on the Giza plateau.",
    },
    {
      type: "P",
      ar: "وقد زينت جدران المقبرة بالعديد من المناظر المتنوعة ، منها مناظر صناعة الخبز وتخمير البيرة وصنع الحصير وصهر المعادن ونحت التماثيل ، بالاضافة الى مناظر تمثل الملكة نفسها ، هذا الى جانب مناظر بديعة لحاملات القرابين اللاتي تحملن مختلف العطايا للملكة والتي كان الغرض منها تحول تلك المناظر بطريقة سحرية الى قرابين حقيقية تقدم لروحها بشكل مستمر في العالم الآخر",
      en: "The walls of the tomb are decorated with many varied scenes: baking bread, brewing beer, weaving mats, smelting metals and carving statues, along with scenes of the queen herself and beautiful scenes of offering bearers carrying various gifts to her — meant to be transformed magically into real offerings continually presented to her soul in the other world.",
    },
    {
      type: "P",
      ar: "ومن ضمن الأشياء الرائعة التي تحملنها مظلة بها سرير يوضع أسفلها ، وكرسي بذراعين وكرسي حمل ، وقد تم اكتشاف قطع حقيقية مماثلة لتلك الأثاثات داخل مقبرة الملكة حتب حرس الأولى أم الملك خوفو والمحفوظة حاليا بالمتحف المصري بالتحرير ، أما اللافت لنظر زائر المقبرة هو وجود عشر تماثيل كبيرة منحوتة على الجدار الشمالي لسيدات واقفات متجاورات ، يعتقد أنها تمثل كل من مرس عنخ نفسها وأمها وبناتها",
      en: "Among the wonderful things they carry are a canopy with a bed set beneath it, an armchair and a carrying chair; real pieces matching this furniture were found in the tomb of Queen Hetepheres I, mother of Khufu, and are now kept in the Egyptian Museum in Tahrir. What most strikes the visitor is a row of ten large figures carved on the north wall of standing women side by side, thought to represent Meresankh herself, her mother and her daughters.",
    },
    {
      type: "P",
      ar: "أوقات عمل واسعار تذاكر مقبرة الملكة مرس عنخ الثالثة : مفتوح يوميا من الساعة 9 صباحا وحتى الساعة 5 مساء ، وتذاكر الدخول بالاضافة لتذكرة دخول المنطقة للأجانب 50 جنيه مصري ، وللمصريين والعرب 20 جنيه مصري ، وللطلبة نصف اسعار هذه التذاكر",
      en: "Opening hours and tickets for the tomb of Queen Meresankh III: open daily from 9 in the morning until 5 in the afternoon. Entry, in addition to the site ticket, is 50 Egyptian pounds for foreigners and 20 pounds for Egyptians and Arabs, half price for students.",
    },
    ...imgs(
      [
        "img_3945-1.jpg",
        "img_3946.jpg",
        "img_3947.jpg",
        "img_3948.jpg",
        "img_3949.jpg",
        "img_3950.jpg",
        "img_3951.jpg",
      ],
      "صور متفرقة لمقبرة الملكة مرس عنخ الثالثة بالجيزة وما يحتويه",
      "Assorted views of the tomb of Queen Meresankh III and its contents",
    ),
  ],
};

const cairoTowerGuide: Guide = {
  slug: "cairo-tower",
  title_ar: "برج القاهرة",
  title_en: "Cairo Tower",
  kicker_ar: "برج القاهرة .. أيقونة السياحة في مصر",
  kicker_en: "Cairo Tower — an icon of tourism in Egypt",
  image: U("2022/10/img_4261-1.jpg"),
  blocks: [
    { type: "H3", ar: "بناء برج القاهرة", en: "Building Cairo Tower", noNumber: true },
    {
      type: "P",
      ar: "في عهد الرئيس الراحل جمال عبد الناصر ، وضع حجر الأساس للبرج سنة 1956م ، وتم الانتهاء من بنائه سنة 1961م ، وتولت شركة المقاولون العرب مسؤولية بناء البرج بتكلفة قدرها 6 ملايين جنيه مصري ، قام بوضع التصميم الهندسي للبرج المهندس نعوم شبيب الذي صممه على شكل زهرة اللوتس الفرعونية لتدل على الحضارة المصرية القديمة ، وصمم على قاعدة من أحجار الجرانيت الأسواني",
      en: "The foundation stone was laid in 1956 under the late President Gamal Abdel Nasser, and building was completed in 1961. The Arab Contractors company carried out the work at a cost of 6 million Egyptian pounds. The engineering design was by Naoum Shebib, who shaped it like the pharaonic lotus flower to evoke ancient Egyptian civilisation, set on a base of Aswan granite.",
    },
    { type: "H3", ar: "تسمية البرج", en: "The name of the tower", noNumber: true },
    {
      type: "P",
      ar: "جاءت تسمية برج الجزيرة القاهرة لأنه يقع في منطقة الزمالك بالقاهرة ، وتعتبر الزمالك جزيرة وسط النيل لذلك سمي بذلك",
      en: "It is also called the Gezira tower because it stands in the Zamalek district of Cairo, and Zamalek is an island in the middle of the Nile — hence the name.",
    },
    { type: "H3", ar: "ارتفاع برج القاهرة", en: "The height of Cairo Tower", noNumber: true },
    {
      type: "P",
      ar: "يرتفع البرج فوق العاصمة المصرية بارتفاع 614 قدما (187 مترا) ، وهو أعلى من الهرم الأكبر ، وأطول برج في افريقيا",
      en: "The tower rises over the Egyptian capital to 614 feet (187 metres), taller than the Great Pyramid, and is the tallest tower in Africa.",
    },
    { type: "H3", ar: "عدد أدوار البرج", en: "The number of floors", noNumber: true },
    {
      type: "P",
      ar: "يصل عدد ادوار البرج الى 16 طابق بارتفاع يصل الى 187متر ، ويقف على قاعدة من أحجار الجرانيت الأسواني ، ويوجد في قمته مطعم سياحي على منصة دوارة ، تلف بهدوء ، ليرى من بداخله معالم القاهرة من كل اتجاه",
      en: "The tower has 16 floors reaching 187 metres and stands on a base of Aswan granite. At its summit is a restaurant on a revolving platform that turns quietly so that diners see the landmarks of Cairo from every direction.",
    },
    ...imgs(
      ["img_4262.jpg", "img_4263.jpg", "img_4264.jpg", "img_4265.jpg", "img_4266.jpg", "img_4267.jpg"],
      "صور من زوايا مختلفة لبرج القاهرة",
      "Cairo Tower from different angles",
    ),
    { type: "H3", ar: "برج القاهرة من الداخل", en: "Inside Cairo Tower", noNumber: true },
    {
      type: "P",
      ar: "تبدأ الرحلة من المصعد وتستمر 45 ثانية ، حتى تصل الى أعلى البرج الذي يتكون أولا من المطعم السياحي الذي يقع على منصة دوارة تدور بزوار المطعم ليتمكنوا من رؤية معالم القاهرة من كل جانب ، ثم تصعد لأعلى حتى تصل الى قمته ، كي تتمكن من رؤية القاهرة بوضوح ، كما يمكنك استخدام التلسكوب الموجود بالقمة لترى الصورة بشكل أدق",
      en: "The trip begins in the lift and lasts 45 seconds until you reach the top of the tower, first the restaurant on its revolving platform which turns diners round so they see the landmarks of Cairo from every side, then higher still to the summit, where Cairo lies clear before you and you can use the telescope for a closer look.",
    },
    {
      type: "P",
      ar: "ان التلسكوبات في قمة البرج توفر مناظر لا تضاهي على القاهرة والمنطقة المحيطة بها ، مثل (قلعة صلاح الدين ، أهرامات الجيزة وسقارة) ، هناك أيضا عدد من الأماكن لتناول الطعام ، بما في ذلك المطعم الدوار",
      en: "The telescopes at the top give unmatched views over Cairo and the surrounding area — the Citadel of Saladin, the pyramids of Giza and Saqqara — and there are several places to eat, including the revolving restaurant.",
    },
    {
      type: "P",
      ar: "واذا كنت تخطط لزيارة قمة البرح ، فتأكد من قضاء يوم صاف قدر الامكان للحصول على أفضل المناظر الخلابة في مصر",
      en: "If you plan to visit the top of the tower, choose as clear a day as possible for the finest views in Egypt.",
    },
    { type: "H3", ar: "برج القاهرة ليلا", en: "Cairo Tower at night", noNumber: true },
    {
      type: "P",
      ar: "يعتبر البرج من أماكن السياحة الترفيهية الهامة ، فلا تدع فرصة الزيارة تفوتك ، كي لا تحرم وجدانك من الاستمتاع بمنظر القاهرة الساحرة ، ويعتبر أجمل وقت هو الغروب وأنسب وقت للزيارة بعد العصر",
      en: "The tower is one of Cairo's important leisure attractions, so do not let the chance of a visit pass and deny yourself the enchanting view of the city. The loveliest hour is sunset, and the best time to visit is late afternoon.",
    },
    {
      type: "P",
      ar: "يمثل برج القاهرة أحد أهم وأشهر المعالم السياحية المتميزة في مصر ، حيث تم تصميم التشبيك المعقد للبرج الخرساني ، المفتوح من الأعلى ليكشف عن تاجه الخاص بسطح المراقبة ، لتمثيل زهرة اللوتس الفرعونية ، أحد رموز مصر القديمة ، ويضيء المعلم كل مساء بألوان مختلفة ، مما يجعله مشهدا جميلا مقابل سماء الليل",
      en: "Cairo Tower is among the most important and famous landmarks in Egypt: the intricate latticework of the concrete tower, open at the top to reveal the crown of its observation deck, represents the pharaonic lotus flower, one of the symbols of ancient Egypt. Each evening the landmark is lit in different colours, a beautiful sight against the night sky.",
    },
    ...imgs(["img_4259.jpg", "img_4260.jpg", "img_4261.jpg"], "صور من زوايا مختلفة لبرج القاهرة", "Cairo Tower from different angles"),
    { type: "H3", ar: "عنوان البرج", en: "The address", noNumber: true },
    {
      type: "P",
      ar: "يقع في منطقة الزمالك ، شارع البرج بجوار النادي الأهلي ، وتعد أقرب محطة مترو أنفاق هي الأوبرا",
      en: "It stands in Zamalek, on El Borg street next to the Ahly club, and the nearest metro station is Opera.",
    },
    { type: "H3", ar: "مواعيد عمل البرج", en: "Opening hours", noNumber: true },
    {
      type: "P",
      ar: "يفتح البرج أبوابة يوميا من الساعة 9 صباحا وحتى الساعة 11 مساء ، ومنذ بناء البرج حتى وقتنا الحالي لم يتم غلقه سوى عامين من 2006 الى 2008 ، وذلك لتجديده والقيام بأعمال الصيانة به",
      en: "The tower opens daily from 9 in the morning until 11 at night. Since it was built it has closed only for two years, from 2006 to 2008, for renovation and maintenance.",
    },
    { type: "H3", ar: "أسعار تذاكر برج القاهرة", en: "Ticket prices", noNumber: true },
    {
      type: "P",
      ar: "أسعار التذاكر للمصريين هي 40 جنيه مصري ، بينما سعر تذكرة غير المصريين هي 200 جنيه مصري ، وسعر تذكر التلسكوب هو 10 جنيهات للجميع",
      en: "Tickets are 40 Egyptian pounds for Egyptians and 200 pounds for non-Egyptians, and the telescope ticket is 10 pounds for everyone.",
    },
    {
      type: "P",
      ar: "أفضل الانشطة التي يمكن القيام بها في برج القاهرة : يمكنكم البدء بالرحلة في برج القاهرة من الداخل من خلال المصعد حيث ان الصعود الى اعلى البرج يستغرق حوالي 45 ثانية لتشاهد عندما تقف على القمة بانوراما كاملة للقاهرة ، الأهرامات ، مبنى التلفزيون ، أبو الهول ، النيل ، وقلعة صلاح الدين ، وقتها سوف تشعر وأنت تنظر في النظارة المكبرة أنك تزور مصر كلها في لحظة واحدة",
      en: "The best things to do at Cairo Tower: begin inside with the lift — the ride to the top takes about 45 seconds — and from the summit you see a full panorama of Cairo: the pyramids, the television building, the Sphinx, the Nile and the Citadel of Saladin. Looking through the magnifying glass you feel you are visiting the whole of Egypt in a single moment.",
    },
    {
      type: "P",
      ar: "يمكنكم ايضا الذهاب الى مطعم برج القاهرة في الطابق رقم 14 وعلى ارتفاع 160 متر لتناول وجبة شهية مع العائلة ويتميز هذا المطعم بشكله الدائري والذي يدور حول نقطة ارتكاز لترى القاهرة ، وهو فرصة مناسبة جدا لالتقاط الصور التذكارية مع العائلة او الاصدقاء",
      en: "You can also go to the tower restaurant on the 14th floor at a height of 160 metres for a fine meal with the family. The restaurant is circular and turns about a pivot so you see Cairo as you eat — a very good chance for photographs with family or friends.",
    },
    {
      type: "P",
      ar: "ويوجد ايضا في الطابق رقم 15 كافيتيريا يمكنكم من خلالها الحصول على بعض المأكولات الخفيفة والمشروبات بالاضافة الى الاطلالة الرائعة",
      en: "On the 15th floor there is a cafeteria where you can have light food and drinks along with the wonderful view.",
    },
    ...imgs(
      ["img_4271.jpg", "img_4270.jpg", "img_4269.jpg", "img_4268-1.jpg"],
      "صور من زوايا مختلفة لبرج القاهرة",
      "Cairo Tower from different angles",
    ),
  ],
};

const citadelGuide: Guide = {
  slug: "muhammad-ali-mosque",
  title_ar: "قلعة صلاح الدين الأيوبي وجامع محمد علي",
  title_en: "The Citadel of Saladin and the Mosque of Muhammad Ali",
  kicker_ar: "تعرف على أشهر المواقع الأثرية بمصر",
  kicker_en: "Egypt's most famous archaeological sites",
  image: U("2022/10/img_3914.jpg"),
  blocks: [
    { type: "H3", ar: "قلعة صلاح الدين الأيوبي", en: "The Citadel of Saladin", noNumber: true },
    {
      type: "P",
      ar: "تعد قلعة صلاح الدين أحد أهم معالم القاهرة الاسلامية ، واحدى أعرق القلاع الحربية التي شيدت في العصور الوسطى ، وقد أتاح موقعها الاستراتيجي أعلى جبل المقطم اطلالة رائعة على كافة معالم القاهرة التاريخية ، ووفرت الأسوار المنيعة حول عواصم مصر الاسلامية مع القلعة مزيد من الحماية ضد أى اعتداء",
      en: "The Citadel of Saladin is one of the most important landmarks of Islamic Cairo and among the noblest military fortresses built in the Middle Ages. Its strategic position atop the Muqattam hill gives a wonderful view over all the historic landmarks of Cairo, and its impregnable walls, together with those around Egypt's Islamic capitals, gave further protection against any attack.",
    },
    {
      type: "IMG",
      src: U("2022/10/img_3909.jpg"),
      cap_ar: "قلعة صلاح الدين الايوبي ومساجد القلعة بمصر",
      cap_en: "The Citadel of Saladin and its mosques",
    },
    {
      type: "P",
      ar: "بدأ صلاح الدين الأيوبي في تشييد هذه القلعة فوق جبل المقطم في عام 572 هـ /1176 م في موضع كان يعرف بقبة الهواء ، ولكنه لم يتمها في حياته ، وأتمها السلطان الكامل بن العادل (604 هـ/ 1207 م) ، فكان أول من سكنها واتخذها دارا للملك ، وظلت مقرا لحكم مصر حتى عهد الخديوي اسماعيل الذي نقل مقر الحكم الى قصر عابدين بمنطقة القاهرة الخديوية",
      en: "Saladin began building the citadel on the Muqattam hill in 572 AH / 1176 AD, on a spot known as Qubbat al-Hawa, but did not complete it in his lifetime. Sultan al-Kamil ibn al-Adil finished it in 604 AH / 1207 AD and was the first to live in it, making it the royal residence. It remained the seat of government in Egypt until the reign of Khedive Ismail, who moved the seat of rule to Abdeen Palace in Khedivial Cairo.",
    },
    {
      type: "IMG",
      src: U("2022/10/img_3910.jpg"),
      cap_ar: "منظر عام لقلعة صلاح الدين الايوبي بمصر",
      cap_en: "A general view of the Citadel of Saladin",
    },
    {
      type: "P",
      ar: "شهدت القلعة العديد من الأحداث التاريخية منذ العصر الأيوبي حتي نهاية أسرة محمد علي التي تولت حكم مصر بداية من القرن التاسع عشر حتى قيام ثورة يوليو 1952 م ، تمت اضافة العديد من المنشآت بالقلعة على مر العصور والتي من أهمها جامع محمد علي ، جامع الناصر محمد بن قلاوون ، جامع سليمان باشا الخادم ، وذلك بالاضافة الى عدد من المتاحف منها متحف قصر الجوهرة ، الشرطة ، والحربي",
      en: "The citadel witnessed many historic events from the Ayyubid era to the end of the family of Muhammad Ali, which ruled Egypt from the nineteenth century until the July 1952 revolution. Many buildings were added over the ages, chief among them the mosque of Muhammad Ali, the mosque of al-Nasir Muhammad ibn Qalawun and the mosque of Suleiman Pasha al-Khadim, along with several museums including the Gawhara Palace museum, the police museum and the military museum.",
    },
    {
      type: "IMG",
      src: U("2022/10/img_3911.jpg"),
      cap_ar: "جامعي محمد علي والناصر محمد بن قلاوون بمصر",
      cap_en: "The mosques of Muhammad Ali and al-Nasir Muhammad ibn Qalawun",
    },
    {
      type: "P",
      ar: "المزيد من المعرفة عن قلعة صلاح الدين الايوبي بمصر : شرع صلاح الدين الأيوبي في تشييد قلعة فوق جبل المقطم في موضع كان يعرف بقبة الهواء ، ولكنه لم يتمها في حياته ، وانما أتمها السلطان الكامل بن العادل ، فكان أول من سكنها هو الملك الكامل واتخذها دارا للملك ، واستمرت كذلك حتي عهد محمد علي ، وفي الضلع الغربي للقلعة ، يوجد الباب المدرج وفوقه كتابة تشير الى بناء هذه القلعة ، ونصه بسم الله الرحمن الرحيم أمر بانشاء هذه القلعة الباهرة ، المجاورة لمحروسة القاهرة التي جمعت نفعا وتحسينا وسعة علي من ألتجأ الى ظل ملكه وتحصينا ، مولانا الملك الناصر صلاح الدنيا والدين ، أبو المظفر يوسف بن أيوب محيي دولة أمير المؤمنين في نظر أخيه وولي عهده ، الملك العادل سيف الدين أبي بكر محمد خليل أمير المؤمنين ، علي يد أمير مملكته ، ومعين دولته ، قراقوش ابن عبدالله الملكي الناصري في سنة تسع وسبعين وخمسمائه",
      en: "More about the Citadel of Saladin: Saladin set about building a fortress on the Muqattam hill on a spot known as Qubbat al-Hawa but did not finish it in his lifetime; Sultan al-Kamil ibn al-Adil completed it and was the first to live in it as the royal residence, and so it remained until the time of Muhammad Ali. On the western side of the citadel is the stepped gate, above which an inscription records the building of the fortress in the name of al-Malik al-Nasir Salah al-Din Yusuf ibn Ayyub, carried out by the commander of his kingdom, Qaraqush ibn Abdullah, in the year 579 AH.",
    },
    {
      type: "P",
      ar: "وحفر صلاح الدين في القلعة بئراً يستقي منها الجيش وسكان القلعة اذا منع الماء عنها عند حصارها ، وهي أعجب ما تم من أعمال لأن البئر محفور في الصخر بعمق 90 متر من مستوي أرض القلعة ، وهذا يتطلب جهد كبير في ذلك الوقت ، تعتبر قلعة صلاح الدين الأيوبى بالقاهرة من أفخم القلاع الحربية التي شيدت في العصور الوسطى فموقعها استراتيجي من الدرجة الأولى بما يوفره هذا الموقع من أهمية دفاعية لأنه يسيطر على مدينتى القاهرة والفسطاط ، كما أنه يشكل حاجزا طبيعيا مرتفعا بين المدينتين كما أنه بهذا الموقع يمكن توفير الاتصال بين القلعة والمدينة في حالة الحصار ، كما أنها سوف تصبح المعقل الأخير للاعتصام بها في حالة اذا ما سقطت المدينة بيد العدو",
      en: "Saladin also dug a well in the citadel from which the army and its inhabitants could drink if water were cut off during a siege — the most astonishing of the works, since the well is cut into the rock to a depth of 90 metres below the citadel's ground level, a huge effort in that age. The citadel is among the grandest military fortresses of the Middle Ages: its position is strategic of the first order, commanding both Cairo and Fustat, forming a raised natural barrier between the two cities, allowing contact between citadel and city under siege, and serving as the last stronghold should the city fall to an enemy.",
    },
    {
      type: "P",
      ar: "مر بهذه القلعة الشامخة الكثير والعديد من الأحداث التاريخية حيث شهدت أسوارها أحداثا تاريخية مختلفة خلال العصور الأيوبية والمملوكية وزمن الحملة الفرنسية على مصر سنة 1798 م ، وحتى تولى محمد على باشا حكم مصر حيث أعاد لها ازدهارها وعظمتها ، كان السلطان الناصر صلاح الدين يوسف بن أيوب أول من فكر ببناء القلعة على ربوة الصوة في عام 572 هـ/1176 م حيث قام وزيره بهاء الدين قراقوش الأسدى بهدم المساجد والقبور التي كانت موجودة على الصوة لكى يقوم ببناء القلعة عليها حيث قام العمال بنحت الصخر وايجاد خندقا اصطناعيا فصل جبل المقطم عن الصوة زيادة في مناعتها وقوتها",
      en: "Many historic events passed by this lofty citadel: its walls saw the Ayyubid and Mamluk ages, the French expedition to Egypt in 1798, and the rule of Muhammad Ali Pasha, who restored its flourishing and grandeur. Sultan al-Nasir Salah al-Din Yusuf ibn Ayyub was the first to think of building the citadel on the knoll in 572 AH / 1176 AD; his vizier Baha al-Din Qaraqush al-Asadi removed the mosques and tombs that stood there so the fortress could be raised, and the workmen cut the rock and made an artificial ditch separating the Muqattam hill from the knoll to add to its strength.",
    },
    {
      type: "IMG",
      src: U("2022/10/image-5.jpg"),
      cap_ar: "منظر داخلي لقلعة صلاح الدين الايوبي بمصر",
      cap_en: "An interior view of the Citadel of Saladin",
    },
    {
      type: "IMG",
      src: U("2022/10/img_3913.jpg"),
      cap_ar: "منظر جوي لقلعة صلاح الدين الايوبي بمصر",
      cap_en: "An aerial view of the Citadel of Saladin",
    },
    {
      type: "P",
      ar: "أوقات عمل واسعار تذاكر قلعة صلاح الدين الايوبي : مفتوح يوميا من الساعة 9 صباحا وحتى الساعة 5 مساء ، وتذاكر الدخول للأجانب 200 جنيه مصري ، وللمصريين والعرب 60 جنيه مصري ، اما الزيارات الليلية فالتذاكر للاجانب 160 جنيه مصري ، وللمصريين والعرب 30 جنيه مصري ، وللطلبة نصف اسعار هذه التذاكر",
      en: "Opening hours and tickets for the Citadel of Saladin: open daily from 9 in the morning until 5 in the afternoon. Entry is 200 Egyptian pounds for foreigners and 60 pounds for Egyptians and Arabs; for evening visits it is 160 pounds for foreigners and 30 pounds for Egyptians and Arabs, half price for students.",
    },
  ],
};

export const egyptGuides: Guide[] = [
  gizaGuide,
  cairoTowerGuide,
  egyptMuseumsGuide,
  citadelGuide,
  ...egyptExtraGuides,
  ...egyptErasGuides,
  ...egyptSitesGuides,
];
