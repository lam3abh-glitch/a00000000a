import type { Guide, GuideBlock } from "./france-guides";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/2022/10/${name}?ssl=1`;

type Museum = {
  ar: string;
  en: string;
  loc_ar: string;
  loc_en: string;
  paras: [string, string][];
  tickets: [string, string];
  images: string[];
};

const museums: Museum[] = [
  {
    ar: "المتحف الحربي",
    en: "The Military Museum",
    loc_ar: "القاهرة",
    loc_en: "Cairo",
    paras: [
      [
        "خصص المتحف لعرض التاريخ الباسل للعسكرية المصرية عبر العصور ، وهو يشغل حاليا ومنذ عام 1949 قصر الحرم الذي شيده محمد علي باشا بقلعة صلاح الدين الأيوبي ، بينما كان مقره بادئ الأمر عام 1937 بمبني وزارة الدفاع القديم بشارع الفلكي",
        "The museum is devoted to the valiant history of the Egyptian military through the ages. Since 1949 it has occupied the Haram Palace built by Muhammad Ali Pasha in the Citadel of Saladin; its first home, in 1937, was the old ministry of defence building on Falaki street.",
      ],
      [
        "يسلط المتحف الضوء على أهم الشخصيات العسكرية ويسجل أشهر المعارك التي خاضها الجندي المصري بشجاعة وعبقرية لا مثيل لهما ، يتناول المتحف تاريخ تطور الأسلحة والمعدات الحربية ، والملابس العسكرية باستخدام وسائل عرض متنوعة ، كما يضم بالعرض الخارجي للمتحف نماذج حقيقية من الدبابات والطائرات التي استخدمت في حرب أكتوبر 1973",
        "It highlights the foremost military figures and records the most famous battles fought by the Egyptian soldier with unmatched courage and genius. It traces the development of weapons, military equipment and uniforms through varied displays, and the outdoor exhibition holds real tanks and aircraft used in the October 1973 war.",
      ],
    ],
    tickets: [
      "مفتوح يوميا من الساعة 9 صباحا الى الساعة 5 مساء ، وسعر التذكرة الشاملة 200 جنيه مصري للأجانب ، و60 جنيه مصري للمصريين والعرب ، وللطلبة من النوعين تكون أسعار التذاكر نصف الاسعار المذكورة ، علما بأن التذكرة الشاملة تسمح بالدخول الى منطقة القلعة ومتحف الشرطة",
      "Open daily from 9 in the morning until 5 in the afternoon. The combined ticket is 200 Egyptian pounds for foreigners and 60 pounds for Egyptians and Arabs, half price for students. The combined ticket also admits you to the citadel area and the police museum.",
    ],
    images: ["img_4191.jpg", "img_4190.jpg", "img_4189.jpg", "img_4188.jpg", "img_4187.jpg"],
  },
  {
    ar: "متحف الشرطة القومي",
    en: "The National Police Museum",
    loc_ar: "القاهرة",
    loc_en: "Cairo",
    paras: [
      [
        "متحف الشرطة القومي الموجود هو أحد متاحف قلعة صلاح الدين الأيوبي بالقاهرة ويقع بالجزء الشمالي من القلعة وهو يستعرض جهود الشرطة المصرية ونضالها المتواصل على مر التاريخ ، يضم المتحف مجموعة من القاعات خصص كل منها لعرض تاريخ حقبة معينة من تاريخ الشرطة المصرية ، حيث تم تخصيص قاعة تعرض تاريخ الشرطة في مصر القديمة ، وقاعة أخرى تعرض تاريخ الشرطة المصرية في العصر الاسلامي ، وقاعة تعرض أدوات رجال الاطفاء",
        "The National Police Museum is one of the museums of the Citadel of Saladin, in the northern part of the fortress, and presents the work of the Egyptian police and their continuous struggle through history. It has several halls, each devoted to one period: a hall on policing in ancient Egypt, another on the Egyptian police in the Islamic era, and a hall of firefighters' equipment.",
      ],
      [
        "ويمكنك الاطلاع على تاريخ أهم المعارك ، الاغتيالات السياسية ، والجرائم الاجتماعية في العصر الحديث ، وكذا نماذج تطور الأسلحة والملابس الخاصة برجال الشرطة كما يمكنك مشاهدة بعض عربات الاطفاء التي استخدمتها الشرطة خلال القرنين 18 ، 19م",
        "You can follow the history of the most important battles, political assassinations and social crimes of the modern era, along with the development of police weapons and uniforms, and see some of the fire engines used by the police in the eighteenth and nineteenth centuries.",
      ],
      [
        "يمكنك أيضا الرجوع بالتاريخ لأهم المعارك التي خاضها رجال الشرطة المصرية من خلال التجول بين النماذج المجسمة التي تمثل كفاح الشرطة المصرية ضد الاستعمار في معركة 25 يناير 1952م بالاسماعيلية",
        "You can also step back to the greatest battles fought by the Egyptian police through the dioramas representing their struggle against colonial rule in the battle of 25 January 1952 at Ismailia.",
      ],
      [
        "يرتكز المبنى على برج السباع الذي عثر عليه أثناء انشاء المتحف ، وجاءت تسمية هذا البرج لوجود نقوش بارزة لعدد من السباع في حالة قتال على الاطار العلوي للبرج ، مما يرجح نسبته الى الظاهر بيبرس ، وهو البرج الوحيد الباقي من أبراج القلعة المملوكية حتى الآن",
        "The building rests on the Lions' Tower, found during its construction and named for the reliefs of lions in combat on the tower's upper frame, which suggest it belongs to al-Zahir Baybars. It is the only surviving tower of the Mamluk citadel.",
      ],
    ],
    tickets: [
      "مفتوح يوميا من الساعة 9 صباحا الى الساعة 5 مساء ، وسعر التذكرة الشاملة 200 جنيه مصري للأجانب ، و60 جنيه مصري للمصريين والعرب ، وللطلبة من النوعين تكون أسعار التذاكر نصف الاسعار المذكورة ، علما بأن التذكرة الشاملة تسمح بالدخول الى منطقة القلعة ومتحف الشرطة",
      "Open daily from 9 in the morning until 5 in the afternoon. The combined ticket is 200 Egyptian pounds for foreigners and 60 pounds for Egyptians and Arabs, half price for students, and admits you to the citadel area and the police museum.",
    ],
    images: ["img_4192.jpg", "img_4193.jpg", "img_4194.jpg", "img_4195.jpg", "img_4196.jpg"],
  },
  {
    ar: "متحف مطار القاهرة الدولي – صالة رقم (2)",
    en: "Cairo International Airport Museum — Terminal 2",
    loc_ar: "القاهرة",
    loc_en: "Cairo",
    paras: [
      [
        "بدأت فكرة اقامة متحف في صالة 2 بمطار القاهرة الدولي في عام 2020م ، وذلك حتى يكون بمثابة نقطة انطلاق لتعريف السادة الزائرين بتاريخ مصر العريق ، وقد اقيم المتحف بالتعاون بين كل من وزارة السياحة والآثار ووزارة الطيران المدني على مساحة تبلغ حوالي 100م2",
        "The idea of a museum in Terminal 2 of Cairo International Airport began in 2020, so that it might be a starting point introducing visitors to Egypt's long history. It was created jointly by the ministry of tourism and antiquities and the ministry of civil aviation over an area of about 100 m².",
      ],
      [
        "يعبر العرض المتحفي عن لمسات مضيئة في تاريخ مصر على مر عصورها ، حيث يعرض المتحف قطع أثرية فريدة تبرز المميزات الفنية والتاريخية لكل حقبة بداية من العصور المصرية القديمة بالاضافة الى ابراز سمات الفنون الرومانية والقبطية والاسلامية وفنون العصر الحديث ، هذا فضلا عن قطع تبرز كينونة مصر كمهد لكافة الأديان السماوية والطوائف الدينية التي اجتمعت تحت ظلالها في سلام وتناغم",
        "The display captures luminous touches in Egypt's history across its ages, with unique antiquities showing the artistic and historical character of each period from ancient Egypt onwards, along with Roman, Coptic, Islamic and modern art, and pieces that show Egypt as the cradle of the revealed religions and of communities that gathered in its shade in peace and harmony.",
      ],
    ],
    tickets: [
      "مفتوح على مدار الساعة ، وسعر التذاكر للاجانب 3 دولار امريكي ، ولحامل الكاميرا 20 جنيه مصري ، والتصوير الفوتوغرافي 50 جنيه مصري ، وسعر التذاكر للمصريين والعرب 25 جنيه مصري ، ولحامل الكاميرا 10 جنيه مصري ، والتصوير الفوتوغرافي 20 جنيه مصري ، وللطلبة من النوعين تكون أسعار التذاكر نصف الاسعار المذكورة",
      "Open around the clock. Tickets are 3 US dollars for foreigners, 20 pounds for a camera and 50 pounds for photography; for Egyptians and Arabs 25 pounds, 10 pounds for a camera and 20 pounds for photography, half price for students.",
    ],
    images: ["img_4197.jpg"],
  },
  {
    ar: "المتحف المصري",
    en: "The Egyptian Museum",
    loc_ar: "القاهرة",
    loc_en: "Cairo",
    paras: [
      [
        "المتحف المصري هو أقدم متحف أثري في الشرق الأوسط ، ويضم أكبر مجموعة من الآثار المصرية القديمة في العالم ، يعرض المتحف مجموعة كبيرة تمتد من فترة ما قبل الأسرات الى العصرين اليوناني والروماني",
        "The Egyptian Museum is the oldest archaeological museum in the Middle East and holds the largest collection of ancient Egyptian antiquities in the world, spanning the predynastic period to the Greek and Roman eras.",
      ],
      [
        "تم اختيار المهندس المعماري للمبنى من خلال مسابقة دولية في عام 1895م ، والتي كانت الأولى من نوعها ، وفاز بها المهندس المعماري الفرنسي مارسيل دورغنون ، افتتح الخديوي عباس حلمي الثاني المتحف في عام 1902م ، وأصبح معلما تاريخيا في وسط القاهرة ، ومكانا لأروع قطع الآثار المصرية القديمة",
        "The architect was chosen through an international competition in 1895, the first of its kind, won by the French architect Marcel Dourgnon. Khedive Abbas Helmy II opened the museum in 1902, and it became a historic landmark in the centre of Cairo and the home of the finest ancient Egyptian pieces.",
      ],
      [
        "من بين مجموعات المتحف التي لا مثيل لها المجموعة الجنائزية ليويا وتويا ، وبسوسينيس الأول وكنوز تانيس ، ولوحة نارمر التي تخلد توحيد مصر العليا والسفلى تحت ملك واحد ، وهي من بين القطع الأثرية التي لا تقدر بثمن في المتحف ، يضم المتحف أيضا تماثيل رائعة للملوك العظماء ، خوفو ، خفرع ، ومنكاورع بناة الأهرام في هضبة الجيزة ، بالاضافة الى مجموعة كبيرة من البرديات والتوابيت والحلي التى تكمل المجموعة المميزة لهذا المتحف",
        "Among its unmatched collections are the funerary group of Yuya and Tuya, Psusennes I and the treasures of Tanis, and the Narmer palette commemorating the unification of Upper and Lower Egypt under one king — among the priceless pieces of the museum. It also holds superb statues of the great kings Khufu, Khafre and Menkaure, builders of the pyramids of Giza, along with a large collection of papyri, sarcophagi and jewellery.",
      ],
    ],
    tickets: [
      "مفتوح يوميا من الساعة 9 صباحا الى الساعة 5 مساء ، وسعر التذاكر للاجانب 200 جنيه مصري ، وللتصوير الفوتوغرافي التذكاري بدون فلاش 50 جنيه مصري ، ولتصوير الفيديو التذكاري 300 جنيه مصري ، وسعر التذاكر للمصريين والعرب 30 جنيه مصري ، وللتصوير الفوتوغرافي التذكاري بدون فلاش 20 جنيه مصري ، ولتصوير الفيديو التذكاري 300 جنيه مصري ، وللطلبة من النوعين تكون أسعار تذاكر الدخول نصف الاسعار المذكورة",
      "Open daily from 9 in the morning until 5 in the afternoon. Tickets are 200 Egyptian pounds for foreigners, 50 pounds for flash-free photography and 300 pounds for video; for Egyptians and Arabs 30 pounds, 20 pounds for photography and 300 pounds for video, half price for students.",
    ],
    images: [
      "img_4198.jpg",
      "img_4199.jpg",
      "img_4200.jpg",
      "img_4201.jpg",
      "img_4202.jpg",
      "img_4203.jpg",
      "img_4204.jpg",
      "img_4211.jpg",
      "img_4210.jpg",
      "img_4209.jpg",
      "img_4208.jpg",
      "img_4207.jpg",
      "img_4206.jpg",
      "img_4205.jpg",
    ],
  },
  {
    ar: "متحف الفن الاسلامي",
    en: "The Museum of Islamic Art",
    loc_ar: "القاهرة",
    loc_en: "Cairo",
    paras: [
      [
        "يضم متحف الفن الاسلامي أكبر وأروع مجموعة من الآثار الاسلامية على مستوى العالم ، بدأت فكرة تجميع وعرض التحف الاسلامية في عام 1880م ومنها تم تأسيس مبنى المتحف وافتتح في عام 1903م في عهد الخديوي عباس حلمي الثاني ، وقد تم تصميم واجهته على نسق واجهات العمارة المملوكية وهو يقع بجوار مبنى دار الكتب القومية",
        "The Museum of Islamic Art holds the largest and finest collection of Islamic antiquities in the world. The idea of gathering and displaying Islamic objects began in 1880; the museum building followed and was opened in 1903 under Khedive Abbas Helmy II. Its façade was designed after Mamluk architecture, and it stands beside the National Library.",
      ],
      [
        "تضرر المتحف على أثر حادث تفجير مبنى مديرية أمن القاهرة عام 2014م ، وقد تم تجديده وافتتاحه عام 2017م ، وهو يتكون من طابقين ويضم المتحف أكبر مجموعة للقطع من مختلف أنحاء العالم الاسلامي والتي تسمح للزائر بالتجول عبر جميع فترات التاريخ الاسلامي ، حيث تنوعت موضوعاتها من فلك وطب وعمارة وغيرها ، كما تنوعت مواد صنعها من أعمال خشبية منحوتة بدقة ، وقطع خزفية مزينة باتقان ومخطوطات غاية في الندرة ، ومن أهم كنوز المتحف مفتاح الكعبة من العصر المملوكي وقطعة نسيج تحمل أقدم كتابة كوفية",
        "The museum was damaged by the bombing of the Cairo security directorate in 2014, then restored and reopened in 2017. On two floors it holds the largest collection of pieces from across the Islamic world, letting the visitor walk through every period of Islamic history, with subjects ranging from astronomy and medicine to architecture, and materials from finely carved woodwork to exquisitely decorated ceramics and rare manuscripts. Among its greatest treasures are the key of the Kaaba from the Mamluk era and a textile bearing the oldest Kufic writing.",
      ],
    ],
    tickets: [
      "مفتوح يوميا من الساعة 9 صباحا الى الساعة 5 مساء ، وسعر التذكرة 120 جنيه مصري للأجانب ، و20 جنيه مصري للمصريين والعرب ، وللطلبة من النوعين تكون أسعار التذاكر نصف الاسعار المذكورة",
      "Open daily from 9 in the morning until 5 in the afternoon. The ticket is 120 Egyptian pounds for foreigners and 20 pounds for Egyptians and Arabs, half price for students.",
    ],
    images: [
      "img_4212.jpg",
      "img_4213.jpg",
      "img_4214.jpg",
      "img_4215.jpg",
      "img_4216.jpg",
      "img_4217.jpg",
      "img_4218.jpg",
      "img_4225.jpg",
      "img_4224.jpg",
      "img_4223.jpg",
      "img_4222.jpg",
      "img_4221.jpg",
      "img_4220.jpg",
      "img_4219.jpg",
    ],
  },
  {
    ar: "المتحف القبطي",
    en: "The Coptic Museum",
    loc_ar: "القاهرة",
    loc_en: "Cairo",
    paras: [
      [
        "يضم المتحف القبطى أكبر مجموعة من الآثار القبطية فى العالم ، تم افتتاحه فى سنة 1910 ، تم انشاء المتحف بمجهودات مرقص سميكة باشا الذى يعتبر أحد الشخصيات المسيحية البارزة وقد كان مهتما بحفظ التراث القبطى ، كان سميكة باشا قد قام بجمع الآثار القبطية والعديد من العناصر المعمارية من الكنائس القديمة التى تخضع للتجديدات ، وقد استخدمها لبناء المتحف وتأسيس مجموعته",
        "The Coptic Museum holds the largest collection of Coptic antiquities in the world and opened in 1910. It was created through the efforts of Marcus Simaika Pasha, a prominent Christian figure concerned with preserving Coptic heritage, who gathered Coptic antiquities and many architectural elements from old churches under renovation and used them to build the museum and form its collection.",
      ],
      [
        "تعكس مجموعة الآثار بالمتحف التاريخ القبطى من بداياته الأولى فى مصر خلال ازدهارها كمركز رائد للمسيحية فى العالم ، ترجع أصول الميسحية القبطية فى مصر الى زيارة القديس مرقص لمدينة الاسكندرية فى القرن الأول الميلادي ، وتعكس الآثار المعروضة فى المتحف المزج بين الفن القبطى والثقافات السائدة بما فى ذلك الفرعونية ، واليونانية ، والرومانية ، والبيزنطية والعثمانية ، وتطورها ليصبح لها شخصيتها وهويتها الخاصة",
        "The collection reflects Coptic history from its first beginnings in Egypt, when the country flourished as a leading centre of Christianity in the world. Coptic Christianity in Egypt goes back to the visit of Saint Mark to Alexandria in the first century AD, and the objects displayed show the blending of Coptic art with the surrounding cultures — pharaonic, Greek, Roman, Byzantine and Ottoman — and its growth into a character and identity of its own.",
      ],
      [
        "تحتوى المجموعة الكبيرة الخاصة بالمتحف على المخطوطات المزخرفة بشكل رائع ، والأيقونات ، والأعمال الخشبية المنحوتة بدقة ، والجداريات (الفريسكات) المتقنة المزخرفة بالمناظر الدينية والباقية من الأديرة والكنائس القديمة",
        "Its large collection includes beautifully illuminated manuscripts, icons, finely carved woodwork and elaborate frescoes decorated with religious scenes surviving from old monasteries and churches.",
      ],
    ],
    tickets: [
      "مفتوح يوميا من الساعة 9 صباحا الى الساعة 5 مساء ، وسعر التذكرة 100 جنيه مصري للأجانب ، و20 جنيه مصري للمصريين والعرب ، وللطلبة من النوعين تكون أسعار التذاكر نصف الاسعار المذكورة ، والمرشد السمعي 20 جنيه مصري",
      "Open daily from 9 in the morning until 5 in the afternoon. The ticket is 100 Egyptian pounds for foreigners and 20 pounds for Egyptians and Arabs, half price for students, and the audio guide is 20 pounds.",
    ],
    images: [
      "img_4226.jpg",
      "img_4227.jpg",
      "img_4228.jpg",
      "img_4235.jpg",
      "img_4234.jpg",
      "img_4233.jpg",
      "img_4232.jpg",
      "img_4231.jpg",
      "img_4230.jpg",
      "img_4229.jpg",
    ],
  },
  {
    ar: "المتحف القومي للحضارة",
    en: "The National Museum of Egyptian Civilisation",
    loc_ar: "القاهرة",
    loc_en: "Cairo",
    paras: [
      [
        "يعتبر المتحف القومي للحضارة المصرية المتحف الأول من نوعه في مصر والعالم العربي ، فهو يعد مجمعا حضاريا عالميا متكاملا يتيح لزائريه فرصة للابحار في رحلة عبر التاريخ للتعرف على الحضارات المصرية المتعاقبة ، بدأت فكرة انشاء المتحف حين أعلنت منظمة الأمم المتحدة للتربية والعلم والثقافة (اليونسكو) ، بناء على طلب من الحكومة المصرية ، عن حملة دولية لانشاء متحف النوبة بأسوان ، والمتحف القومي للحضارة المصرية بالقاهرة عام 1982م ، تم وضع حجر الأساس عام 2002 في قلب مدينة الفسطاط ، أول وأقدم العواصم الاسلامية في أفريقيا ، وذلك بعد فوز المهندس المعماري المصري في مسابقة معمارية دولية لتصميم المتحف",
        "The National Museum of Egyptian Civilisation is the first of its kind in Egypt and the Arab world, a complete cultural complex that lets visitors sail through history and learn about Egypt's successive civilisations. The idea began when UNESCO, at the request of the Egyptian government, announced an international campaign in 1982 to create the Nubia Museum in Aswan and this museum in Cairo. The foundation stone was laid in 2002 in the heart of Fustat, the first and oldest Islamic capital in Africa, after an Egyptian architect won an international competition for its design.",
      ],
      [
        "تعثرت أعمال الانشاء حتى انتهت تماما وتم افتتاح قاعة للعرض المؤقت عن الحرف المصرية عبر العصور المختلفة عام 2017م ، بحضور السيدة ايرينا بوكوفا مدير عام اليونسكو السابق ، لتعكس أربع حرف هي : الفخار ، الأخشاب ، النسيج ، والحلي ، وتم استكمال جميع التجهيزات الخاصة بالقاعات الأخرى للمتحف ، وتفضل فخامة رئيس الجمهورية بافتتاح قاعة العرض المركزي واستقبال 22 مومياء ملكية تم نقلها من المتحف المصري بالتحرير في موكب مهيب عام 2021م ، كما تم افتتاح قاعة للنسيج المصري عام 2022م ، ويستضيف المتحف مدرسة الحضارة المصرية في سبتمبر 2022م ، والتي تهدف الى زيادة الوعي السياحي والأثري لدى المواطنين ، فضلا عن تعريف الأجانب المقيمين بالحضارة المصرية القديمة",
        "Construction faltered before being completed, and in 2017 a temporary hall on Egyptian crafts through the ages was opened in the presence of Irina Bokova, then director-general of UNESCO, covering four crafts: pottery, woodwork, textiles and jewellery. The remaining halls were fitted out, and in 2021 the President opened the central display hall and received 22 royal mummies moved from the Egyptian Museum in Tahrir in a splendid procession. A hall of Egyptian textiles opened in 2022, and the museum hosted the School of Egyptian Civilisation in September 2022, which aims to raise awareness of tourism and antiquities among citizens and to introduce resident foreigners to ancient Egyptian civilisation.",
      ],
      [
        "يضم المتحف مجموعة متنوعة من القطع الأثرية تلقي الضوء على التراث المادي واللامادي لمصر ، مما يساعد الزائرين على فهم الحضارة المصرية عبر عصورها المختلفة بداية من عصور ما قبل التاريخ مرورا بالعصر المصري القديم ، اليوناني ، الروماني ، القبطي ، الاسلامي ، والعصر الحديث والمعاصر ، كما يضم المتحف قاعة للمومياوات وقاعة للنسيج المصري",
        "The museum holds a varied collection that sheds light on Egypt's tangible and intangible heritage, helping visitors understand Egyptian civilisation across its eras, from prehistory through the ancient Egyptian, Greek, Roman, Coptic and Islamic periods to modern and contemporary times. It also has a hall of mummies and a hall of Egyptian textiles.",
      ],
    ],
    tickets: [
      "مفتوح يوميا من الساعة 9 صباحا الى الساعة 5 مساء ، وسعر التذكرة 200 جنيه مصري للأجانب ، و60 جنيه مصري للمصريين والعرب ، وللطلبة من النوعين تكون أسعار التذاكر نصف الاسعار المذكورة ، والمرشد السمعي 30 جنيه مصري",
      "Open daily from 9 in the morning until 5 in the afternoon. The ticket is 200 Egyptian pounds for foreigners and 60 pounds for Egyptians and Arabs, half price for students, and the audio guide is 30 pounds.",
    ],
    images: [
      "img_4236.jpg",
      "img_4237.jpg",
      "img_4238.jpg",
      "img_4239.jpg",
      "img_4240.jpg",
      "img_4241.jpg",
      "img_4242.jpg",
      "img_4249.jpg",
      "img_4248.jpg",
      "img_4247.jpg",
      "img_4246.jpg",
      "img_4245.jpg",
      "img_4244.jpg",
      "img_4243.jpg",
    ],
  },
  {
    ar: "متحف عواصم مصر",
    en: "The Museum of Egypt's Capitals",
    loc_ar: "القاهرة",
    loc_en: "Cairo",
    paras: [
      [
        "يقع المتحف في مدينة الفنون والثقافة بالعاصمة الادارية الجديدة لمصر ، يعرض المتحف قصة العواصم المصرية وتطورها عبر تاريخ مصر من أقدم مدينة عاصمتها ممفيس الى أحدث عاصمة ، يعد المتحف فريدا من نوعه في مصر ، حيث يركز بشكل أساسي على العواصم المصرية",
        "The museum stands in the city of arts and culture in Egypt's new administrative capital. It tells the story of Egypt's capitals and their development through history, from the oldest capital, Memphis, to the newest, and is unique in Egypt for focusing on the capitals themselves.",
      ],
      [
        "تم اختيار ست عواصم رئيسية لتكون أبرز ما في المعرض : ممفيس ، طيبة ، تل العمارنة ، الاسكندرية ، القاهرة الاسلامية ، والقاهرة الخديوية ، حيث لعبت هذه العواصم دورا مهما في التاريخ المصري",
        "Six principal capitals were chosen as the highlights of the display: Memphis, Thebes, Tell el-Amarna, Alexandria, Islamic Cairo and Khedivial Cairo, all of which played an important role in Egyptian history.",
      ],
      [
        "يحتوي المتحف على قاعتين رئيسيتين ، أحدهما مخصصة للعواصم المصرية ، والآخرى توضح المعتقدات المصرية القديمة والحياة الاخرى",
        "The museum has two main halls, one devoted to the Egyptian capitals and the other explaining ancient Egyptian beliefs and the afterlife.",
      ],
      [
        "رؤية المتحف هي الحفاظ على التراث الثقافي والاداري المصري من خلال احياء مفهوم العواصم المصرية المتغيرة عبر آلاف السنين ، مع التأكيد على دور مصر الرائد في انشاء أنظمة ادارية بارزة في متحف فريد من نوعه",
        "Its vision is to preserve Egypt's cultural and administrative heritage by reviving the idea of Egypt's changing capitals across thousands of years, affirming Egypt's leading role in creating notable administrative systems, in a museum unique of its kind.",
      ],
    ],
    tickets: [
      "مفتوح يوميا من الساعة 9 صباحا الى الساعة 2 مساء ، وسعر التذاكر للاجانب 200 جنيه مصري ، وللتصوير الفوتوغرافي التذكاري بدون فلاش 50 جنيه مصري ، ولحامل الكاميرا 20 جنيه مصري ، وسعر التذاكر للمصريين والعرب 80 جنيه مصري ، وللتصوير الفوتوغرافي التذكاري بدون فلاش 20 جنيه مصري ، ولحامل الكاميرا 10 جنيه مصري ، وللطلبة من النوعين تكون أسعار تذاكر الدخول نصف الاسعار المذكورة",
      "Open daily from 9 in the morning until 2 in the afternoon. Tickets are 200 Egyptian pounds for foreigners, 50 pounds for flash-free photography and 20 pounds for carrying a camera; for Egyptians and Arabs 80 pounds, 20 pounds for photography and 10 pounds for a camera, half price for students.",
    ],
    images: [
      "img_4339.jpg",
      "img_4340.jpg",
      "img_4341.jpg",
      "img_4348.jpg",
      "img_4347.jpg",
      "img_4346.jpg",
      "img_4345.jpg",
      "img_4344.jpg",
      "img_4343.jpg",
      "img_4342.jpg",
      "img_4349.jpg",
      "img_4350.jpg",
      "img_4351.jpg",
      "img_4352.jpg",
      "img_4353.jpg",
      "img_4354.jpg",
      "img_4355.jpg",
    ],
  },
  {
    ar: "متحف الغردقة",
    en: "The Hurghada Museum",
    loc_ar: "البحر الأحمر",
    loc_en: "The Red Sea",
    paras: [
      [
        "متحف الغردقة هو أول متحف للآثار في محافظة البحر الأحمر ، ويعد متحف الغردقة هو أول متحف يتم بناؤه بالشراكة مع القطاع الخاص ، وتكون ادارته بالكامل مسئولية وزارة السياحة والآثار ، فقد تم تمويل بناء المتحف من قبل القطاع الخاص ، يضم متحف الغردقة ما يقرب من 2000 قطعة أثرية تروى تاريخ الحضارة المصرية بدء من العصور المصرية القديمة ، واليونانية والرومانية ، مرورا بالعصور المسيحية والاسلامية وصولا للعصر الحديث ، وتبرز هذه القطع موضوع المتحف ، وهو اظهار مفهوم الجمال في مصر",
        "The Hurghada Museum is the first antiquities museum in the Red Sea governorate and the first built in partnership with the private sector, which funded it, while its management rests entirely with the ministry of tourism and antiquities. It holds nearly 2,000 objects telling the history of Egyptian civilisation from ancient Egyptian, Greek and Roman times through the Christian and Islamic eras to the modern age, all serving the museum's theme: the idea of beauty in Egypt.",
      ],
    ],
    tickets: [
      "مفتوح يوميا من الساعة 10 صباحا الى الساعة 1 مساء ، وسعر التذكرة 200 جنيه مصري للأجانب ، و80 جنيه مصري للمصريين والعرب ، وللطلبة من النوعين تكون أسعار التذاكر نصف الاسعار المذكورة ، والمرشد السمعي 30 جنيه مصري",
      "Open daily from 10 in the morning until 1 in the afternoon. The ticket is 200 Egyptian pounds for foreigners and 80 pounds for Egyptians and Arabs, half price for students, and the audio guide is 30 pounds.",
    ],
    images: ["img_4430.jpg", "img_4431.jpg", "img_4432.jpg", "img_4433.jpg"],
  },
  {
    ar: "متحف التحنيط",
    en: "The Mummification Museum",
    loc_ar: "الاقصر",
    loc_en: "Luxor",
    paras: [
      [
        "اعتقد المصري القديم في أهمية الحفاظ على الجسد بعد الوفاة لضمان الخلود في العالم الآخر ، لذا كان التحنيط عنصرا أساسيا في الممارسات الجنائزية للمصريين القدماء ، وكان يشرف عليه رمزيا المعبود أنوبيس",
        "The ancient Egyptian believed in the importance of preserving the body after death to secure eternity in the other world, so mummification was a fundamental part of funerary practice, presided over symbolically by the god Anubis.",
      ],
      [
        "تتضمن عملية التحنيط العديد من الخطوات المعقدة التي كانت تستغرق حوالي 70 يوما ، وتكون مصحوبة باقامة العديد من الطقوس وقراءة التعاويذ ، حيث تزال أعضاء المتوفى بعناية من خلال شق صغير في جسده وتحفظ في أوان تعرف باسم الأواني الكانوبية ، ثم يجفف الجسم باستخدام ملح النطرون ، وأخيرا يلف بلفائف من الكتان ، كما توضع التمائم السحرية داخل اللفافات حول أجزاء مختلفة من المومياء لحماية الجسد ، وفي النهاية تحمل أسرة المتوفى مومياءه لوضعها في تابوت لدفنه",
        "Mummification involved many complex steps taking about 70 days, accompanied by rituals and the reciting of spells. The organs were carefully removed through a small incision and kept in vessels known as canopic jars, the body was dried with natron salt and finally wrapped in linen bandages, with magical amulets placed within the wrappings around different parts of the mummy to protect the body. At the end the family carried the mummy to be placed in a coffin for burial.",
      ],
      [
        "يوفر متحف التحنيط تعريفا شاملا بالعملية بأكملها من خلال شرح الأهمية الدينية للتحنيط والطقوس المرتبطة به ، مع عرض العديد من الأدوات المستخدمة ، كما يعرض المتحف مجموعة من الأواني الكانوبية ، ومومياوات محنطة ، وتوابيت مزينة بشكل متقن ، وتمائم ، وتماثيل المعبودات",
        "The Mummification Museum gives a full introduction to the whole process, explaining the religious meaning of mummification and its rituals and displaying many of the tools used, along with a group of canopic jars, mummies, elaborately decorated coffins, amulets and statues of the gods.",
      ],
    ],
    tickets: [
      "مفتوح يوميا من الساعة 9 صباحا الى الساعة 1 مساء ، وسعر التذكرة 100 جنيه مصري للأجانب ، و20 جنيه مصري للمصريين والعرب ، وللطلبة من النوعين تكون أسعار التذاكر نصف الاسعار المذكورة",
      "Open daily from 9 in the morning until 1 in the afternoon. The ticket is 100 Egyptian pounds for foreigners and 20 pounds for Egyptians and Arabs, half price for students.",
    ],
    images: [
      "img_4416.jpg",
      "img_4417.jpg",
      "img_4418.jpg",
      "img_4419.jpg",
      "img_4420.jpg",
      "img_4421.jpg",
      "img_4422.jpg",
      "img_4423.jpg",
      "img_4424.jpg",
      "img_4425.jpg",
      "img_4426.jpg",
      "img_4427.jpg",
      "img_4428.jpg",
      "img_4429.jpg",
    ],
  },
  {
    ar: "متحف المجوهرات الملكية",
    en: "The Royal Jewellery Museum",
    loc_ar: "الاسكندرية",
    loc_en: "Alexandria",
    paras: [
      [
        "أقيم متحف المجوهرات الملكية لعرض مقتنيات الأسرة العلوية التي أنشأها محمد علي باشا والتي حكمت مصر لأكثر من 150 عاما بداية من عام 1805م وحتى عام 1952م",
        "The Royal Jewellery Museum was created to display the possessions of the Alawite dynasty founded by Muhammad Ali Pasha, which ruled Egypt for more than 150 years, from 1805 until 1952.",
      ],
      [
        "بني القصر بمنطقة زيزينيا في عام 1919م على يد السيدة زينب فهمي وأكملته وأقامت به ابنتها الأميرة فاطمة ابنة الأمير علي حيدر حفيد محمد علي باشا ، ويعتبر بمثابة خلفية مذهلة للممتلكات الرائعة للأسرة العلوية ، اذ يعكس الذوق الرفيع للأميرة في اللوحات ، والأسقف المذهبة ، والفسيفساء التي تزين العديد من غرف القصر ، يتكون القصر من جناحين شرقي وغربي يربط بينهما ممر ، ويتكون كل منهما من طابقين وبدروم",
        "The palace was built in the Zizinia district in 1919 by Mrs Zeinab Fahmy and completed and lived in by her daughter Princess Fatma, daughter of Prince Ali Haidar, grandson of Muhammad Ali Pasha. It makes a stunning setting for the family's magnificent possessions, reflecting the princess's refined taste in the paintings, gilded ceilings and mosaics that adorn many of its rooms. The palace has an eastern and a western wing joined by a corridor, each of two floors and a basement.",
      ],
      [
        "يعرض المتحف الممتلكات التي جمعتها العائلة طوال فترة حكمها في جميع القاعات القصر الرائعة عاكسا أسلوب حياتها الفخم ، فمن بين مقتنيات المتحف تعرض قلادة مطعمة بالماس والزمرد تخص مؤسس الأسرة محمد علي باشا ، بالاضافة الى رقعة شطرنج ذهبية ، ومناظير ذهبية مرصعة بالماس والياقوت والزمرد ، وأكواب ذهبية مطعمة بالأحجار الكريمة ، كما يتم عرض المجوهرات المبهرة التي أعدها كبار المصممين في أوروبا ، والتي كانت تتزين بها الملكات والأميرات من العائلة المالكة في مصر",
        "The museum displays the possessions gathered by the family throughout its rule in all the splendid halls of the palace, reflecting its luxurious way of life. Among the pieces are a necklace inlaid with diamonds and emeralds belonging to the founder of the dynasty, Muhammad Ali Pasha, a golden chess set, gold opera glasses set with diamonds, rubies and emeralds, gold cups inlaid with precious stones, and the dazzling jewellery made by leading European designers and worn by the queens and princesses of Egypt's royal family.",
      ],
    ],
    tickets: [
      "مفتوح يوميا من الساعة 9 صباحا الى الساعة 5 مساء ، وسعر التذكرة 100 جنيه مصري للأجانب ، و20 جنيه مصري للمصريين والعرب ، وللطلبة من النوعين تكون أسعار التذاكر نصف الاسعار المذكورة ، والمرشد السمعي 20 جنيه مصري",
      "Open daily from 9 in the morning until 5 in the afternoon. The ticket is 100 Egyptian pounds for foreigners and 20 pounds for Egyptians and Arabs, half price for students, and the audio guide is 20 pounds.",
    ],
    images: [
      "img_4404.jpg",
      "img_4405.jpg",
      "img_4406.jpg",
      "img_4407.jpg",
      "img_4408.jpg",
      "img_4409.jpg",
      "img_4410.jpg",
      "img_4411.jpg",
      "img_4412.jpg",
      "img_4413.jpg",
      "img_4414.jpg",
      "img_4415.jpg",
    ],
  },
  {
    ar: "متحف قصر الأمير محمد علي بالمنيل",
    en: "The Manial Palace Museum of Prince Muhammad Ali",
    loc_ar: "القاهرة",
    loc_en: "Cairo",
    paras: [
      [
        "يعد متحف قصر الأمير محمد علي بالمنيل من أجمل وأهم المتاحف التاريخية في مصر ، يعبر المتحف عن فترة مهمة من تاريخ مصر الحديث وينفرد بتصميمه المعماري الرائع ، فقد بني على طراز اسلامي حديث مقتبس من المدارس الفنية الفارسية والمملوكية ، كما يتضمن أيضا بعض الزخارف السورية والمغربية والأندلسية ، بل وشاعت فيه الروح العثمانية ، لذا فهو يعد مدرسة فنية جامعة لعناصر الفنون الاسلامية المختلفة",
        "The Manial Palace museum of Prince Muhammad Ali is among the loveliest and most important historic museums in Egypt. It speaks of an important period of modern Egyptian history and is unique for its superb architecture, built in a modern Islamic style drawn from the Persian and Mamluk schools, with Syrian, Moroccan and Andalusian ornament as well and an Ottoman spirit throughout — a school gathering the different elements of Islamic art.",
      ],
      [
        "أنشأه الأمير محمد علي توفيق في الفترة مابين 1319- 1348هـ / 1900- 1929م ، ويتكون القصر من سور خارجي يحيط بمدخل القصر ، ويضم داخل أسواره سراي الاستقبال ، برج الساعة ، السبيل ، المسجد ، متحف الصيد ، سراي الاقامة ، سراي العرش ، المتحف الخاص ، والقاعة الذهبية ، هذا الى جانب الحديقة الرائعة المحيطة بالقصر والفريدة من نوعها",
        "Prince Muhammad Ali Tawfiq built it between 1319 and 1348 AH / 1900 and 1929 AD. An outer wall surrounds the entrance, and within it stand the reception palace, the clock tower, the sabil, the mosque, the hunting museum, the residence palace, the throne palace, the private museum and the golden hall, along with the wonderful garden around the palace, unique of its kind.",
      ],
    ],
    tickets: [
      "مفتوح يوميا من الساعة 9 صباحا الى الساعة 5 مساء ، وسعر التذاكر للاجانب 100 جنيه مصري ، والكاميرا 50 جنيه مصري ، والفيديو 300 جنيه مصري ، والجلسة التصويرية 800 جنيه مصري ، وسعر التذاكر للمصريين والعرب 20 جنيه مصري ، والكاميرا 20 جنيه مصري ، والفيديو 300 جنيه مصري ، والجلسة التصويرية 800 جنيه مصري ، وللطلبة من النوعين تكون أسعار تذاكر الدخول نصف الاسعار المذكورة",
      "Open daily from 9 in the morning until 5 in the afternoon. Tickets are 100 Egyptian pounds for foreigners, 50 pounds for a camera, 300 pounds for video and 800 pounds for a photo shoot; for Egyptians and Arabs 20 pounds, 20 pounds for a camera, 300 pounds for video and 800 pounds for a photo shoot, half price for students.",
    ],
    images: [
      "img_4403.jpg",
      "img_4394.jpg",
      "img_4395.jpg",
      "img_4398.jpg",
      "img_4399.jpg",
      "img_4400.jpg",
      "img_4402.jpg",
      "img_4401.jpg",
      "img_4396.jpg",
    ],
  },
  {
    ar: "متحف جاير أندرسون",
    en: "The Gayer-Anderson Museum",
    loc_ar: "القاهرة",
    loc_en: "Cairo",
    paras: [
      [
        "جاير أندرسون باشا هو ضابط انجليزي أتم دراسته للطب بلندن وعين بالقسم الطبي بالجيش الانجليزي سنة 1904م ، ثم انتقل الى خدمة الجيش الانجليزى بمصر سنة 1907م ، في عام 1935م تقدم جاير أندرسون ، الى لجنة حفظ الآثار العربية بأن يسكن في البيتين وأن يقوم بتاثيثهما على الطراز الاسلامي العربي ، ويعرض فيهما مجموعته الأثرية من مقتنيات أثرية فرعونية واسلامية وآسيوية ، على أن يصبح هذا الأثاث ومجموعته من الآثار ملكا للشعب المصري بعد وفاتة أو حين يغادر مصر نهائيا ، فوافقت اللجنة ، وما أن غادر أندرسون المنزل عام 1942م ، حتى نفذت الوصية وآل البيتين وما فيهما الى مصلحة الآثار العربية التي جعلت منها متحفا باسم جاير أندرسون",
        "Gayer-Anderson Pasha was an English officer who completed his medical studies in London and was appointed to the medical corps of the British army in 1904, moving to its service in Egypt in 1907. In 1935 he asked the committee for the preservation of Arab monuments to let him live in the two houses, furnish them in the Arab Islamic style and display there his collection of pharaonic, Islamic and Asian antiquities, on condition that the furniture and collection would become the property of the Egyptian people after his death or when he left Egypt for good. The committee agreed, and when Anderson left the house in 1942 the bequest was carried out: the two houses and their contents passed to the Arab antiquities service, which made them a museum in his name.",
      ],
      [
        "يتكون البيت من منزلين يرجعان للعصر العثماني في القرنين السادس عشر والسابع عشر الميلادي ، وقد تم دمجهم في منزل واحد ، المنزل الأول أنشأه المعلم عبد القادر الحداد سنة (947هـ / 1545م) ، والذي فى تاريخ لاحق انتقلت ملكيته الى السيدة آمنه بنت سالم ، والمنزل الثاني أنشأه الحاج محمد بن سالم بن جلمام الجزار سنة (1041هـ / 1631م) ، وتعاقبت الأسر على سكنه حتى سكنته سيدة من جزيرة كريت فعرف المنزل ببيت الكريتلية نسبة اليها",
        "The house is made of two Ottoman houses of the sixteenth and seventeenth centuries merged into one. The first was built by the craftsman Abd al-Qadir al-Haddad in 947 AH / 1545 AD and later passed to Amina bint Salim; the second was built by al-Hajj Muhammad ibn Salim ibn Galmam al-Gazzar in 1041 AH / 1631 AD. Families succeeded one another in it until a lady from the island of Crete lived there, and so the house became known as Bayt al-Kritliyya after her.",
      ],
    ],
    tickets: [
      "مفتوح يوميا من الساعة 9 صباحا الى الساعة 3 مساء ، وسعر التذكرة 60 جنيه مصري للأجانب ، و10 جنيه مصري للمصريين والعرب ، وللطلبة من النوعين تكون أسعار التذاكر نصف الاسعار المذكورة",
      "Open daily from 9 in the morning until 3 in the afternoon. The ticket is 60 Egyptian pounds for foreigners and 10 pounds for Egyptians and Arabs, half price for students.",
    ],
    images: [
      "img_4387.jpg",
      "img_4388.jpg",
      "img_4389.jpg",
      "img_4390.jpg",
      "img_4391.jpg",
      "img_4392.jpg",
      "img_4393.jpg",
    ],
  },
  {
    ar: "متحف كفر الشيخ",
    en: "The Kafr El Sheikh Museum",
    loc_ar: "كفر الشيخ",
    loc_en: "Kafr El Sheikh",
    paras: [
      [
        "كان لمحافظة كفر الشيخ منذ أقدم العصور التاريخية نصيب كبير من المساهمة فى تاريخ الحضارة المصرية ، وذلك لوجود مدينة (بوتو) والتى تعرف حاليا بتل الفراعين ، حيث كانت أول عاصمة لأول دولة منظمة في مصر السفلى يهدف المتحف لعرض التاريخ الاقليمي والعديد من القطع الآثرية التي تم الكشف عنها بمحافظة كفر الشيخ ، يشتمل المتحف على عدد ثلاث قاعات ، تضم المقتنيات الآثرية التى تم العثور عليها بجبانة (بوتو العظيمة) ومنطقة المعابد والتى تم الكشف بها عن عدد من القطع الآثرية الهامة التى تجسد قصة الصراع بين حورس وعمه ست ، بالاضافة للمواقع الآثرية الأخرى بكفر الشيخ ومنها تمثال للمعبود حورس الصقر من أروع التماثيل التي اكتشفت بمصر حتى الآن ويعتبر نسخة فريدة لا يضاهيها الا مثيله بمعبد ادفو ، كما خصصت قاعة بالمتحف لعرض المقتنيات التي تجسد فترة استضافة مدينة سخا رحلة العائلة المقدسة أثناء زيارتها لمصر ، بالاضافة الى عرض تاريخ العلوم خلال العصور التاريخية المختلفة كالطب والبيطرة والصيدلة ، وكذلك بعض الموضوعات ذات الصلة بمدينة فوه ذات التراث الاسلامي الثري ، حيث يضم كافة التراث الثقافي لكفر الشيخ باعتبارها ثالث مدينة تراثية بعد القاهرة ورشيد",
        "From the earliest ages the governorate of Kafr El Sheikh had a large share in the history of Egyptian civilisation, thanks to the city of Buto, now known as Tell el-Fara'in, the first capital of the first organised state in Lower Egypt. The museum presents the region's history and many of the objects uncovered in the governorate in three halls, holding finds from the cemetery of Great Buto and the temple area, which yielded important pieces embodying the story of the struggle between Horus and his uncle Seth, along with finds from other sites in Kafr El Sheikh — among them a statue of the falcon god Horus, one of the finest ever discovered in Egypt and a unique piece matched only by its like at the temple of Edfu. One hall is devoted to the period when the town of Sakha hosted the Holy Family on its journey through Egypt, and the museum also presents the history of the sciences through the ages — medicine, veterinary practice and pharmacy — as well as subjects relating to the town of Fuwwah with its rich Islamic heritage, gathering the whole cultural heritage of Kafr El Sheikh as the third heritage city after Cairo and Rashid.",
      ],
    ],
    tickets: [
      "مفتوح يوميا من الساعة 9 صباحا الى الساعة 4 مساء ، وسعر التذاكر للاجانب 80 جنيه مصري ، وللتصوير الفوتوغرافي التذكاري بدون فلاش 50 جنيه مصري ، ولحامل الكاميرا 20 جنيه مصري ، وسعر التذاكر للمصريين والعرب 20 جنيه مصري ، وللتصوير الفوتوغرافي التذكاري بدون فلاش 50 جنيه مصري ، ولحامل الكاميرا 20 جنيه مصري ، وللطلبة من النوعين تكون أسعار تذاكر الدخول نصف الاسعار المذكورة",
      "Open daily from 9 in the morning until 4 in the afternoon. Tickets are 80 Egyptian pounds for foreigners and 20 pounds for Egyptians and Arabs, with 50 pounds for flash-free photography and 20 pounds for carrying a camera, half price for students.",
    ],
    images: [
      "img_4379.jpg",
      "img_4380.jpg",
      "img_4381.jpg",
      "img_4382.jpg",
      "img_4383.jpg",
      "img_4384.jpg",
      "img_4385.jpg",
      "img_4386.jpg",
    ],
  },
  {
    ar: "متحف المركبات الملكية",
    en: "The Royal Carriages Museum",
    loc_ar: "القاهرة",
    loc_en: "Cairo",
    paras: [
      [
        "يعد متحف المركبات الملكية ببولاق واحدا من أعرق المتاحف النوعية على مستوى العالم ، حيث هيئ خصيصا لعرض وحفظ التراث الثقافي الخاص بالمركبات الملكية التي ترجع لعصر أسرة محمد علي وكل ما يتعلق بها ، كما يسلط الضوء على الاهتمام بتربية الخيول في هذه الآونة",
        "The Royal Carriages Museum in Bulaq is one of the most distinguished specialised museums in the world, prepared specially to display and preserve the heritage of the royal carriages of the era of the family of Muhammad Ali and all that relates to them, and to shed light on the breeding of horses in that age.",
      ],
      [
        "ترجع فكرة انشاء مبنى المتحف الى عهد الخديوي اسماعيل الذي حكم مصر فيما بين عامي (1863-1879م) ، فهو أول من فكر في انشاء مبنى خاص بالمركبات الخديوية والخيول ، سمي في بداية الأمر باسم مصلحة الركائب الخديوية ، واستمر هذا الاسم حتى عام 1922م في عهد الملك فؤاد الأول (1917-1936م) ، وأصبح باسم ادارة الاسطبلات الملكية",
        "The idea of the building goes back to Khedive Ismail, who ruled Egypt between 1863 and 1879 and was the first to think of a building for the khedivial carriages and horses. It was first called the khedivial mounts department, a name it kept until 1922, in the reign of King Fuad I (1917–1936), when it became the royal stables administration.",
      ],
      [
        "وكانت هذه المصلحة محط اهتمام القصر الملكي آنذاك ، حيث وفر لها الخبراء المتخصصين ، فضلا عن العمال المهرة ، وقد تم تحويل المبنى الى متحف تاريخي بعد انتهاء ثورة 1952م",
        "The department was a focus of the royal palace's attention, which provided it with specialist experts as well as skilled workmen, and the building was turned into a historic museum after the 1952 revolution.",
      ],
      [
        "يضم المتحف مجموعة رائعة من العربات الملكية مختلفة الأحجام والأنواع ، والتي ترجع الى فترة حكم أسرة محمد علي باشا في مصر ، أشهرها العربة المعروفة باسم عربة الآلاي الكبرى الخصوصي ، والتي تمتاز بدقة صناعتها وفخامة زخرفتها ، وهي مهداه من الامبراطور نابليون الثالث وزوجته الامبراطورة أوجيني للخديوي اسماعيل وقت افتتاح قناة السويس عام 1869م ، وأمر الملك فاروق الأول بتجديدها واستخدامها عند افتتاح البرلمان في عام 1924م",
        "The museum holds a wonderful collection of royal carriages of different sizes and types from the rule of the family of Muhammad Ali Pasha, the most famous being the grand private alay carriage, remarkable for the precision of its making and the richness of its ornament, a gift from Emperor Napoleon III and the Empress Eugénie to Khedive Ismail at the opening of the Suez Canal in 1869; King Farouk I ordered it renewed and used at the opening of parliament in 1924.",
      ],
      [
        "كما يضم مجموعة من أطقم الخيول ولوازمها ، بالاضافة الى الملابس الخاصة بالعاملين بمصلحة الركائب والذين ترتبط وظائفهم بالعربات ، فضلا عن مجموعة من اللوحات الزيتية للملوك والأميرات التي يرجع تأريخها الى نفس الحقبة التاريخية ، والجدير بالذكر أن هناك عدد قليل من المتاحف المتخصصة في عرض هذا النوع من المركبات الملكية في بعض الدول الأوربية مثل النمسا وفرنسا وروسيا وانجلترا",
        "It also holds harness sets and their fittings, the uniforms of the staff of the mounts department whose work was tied to the carriages, and a group of oil paintings of kings and princesses from the same period. Few museums anywhere specialise in this kind of royal carriage — only some in European countries such as Austria, France, Russia and England.",
      ],
    ],
    tickets: [
      "مفتوح يوميا من الساعة 9 صباحا الى الساعة 1 ظهرا ، وسعر التذكرة 100 جنيه مصري للأجانب ، و30 جنيه مصري للمصريين والعرب ، وللطلبة من النوعين تكون أسعار التذاكر نصف الاسعار المذكورة ، والمرشد السمعي 20 جنيه مصري",
      "Open daily from 9 in the morning until 1 in the afternoon. The ticket is 100 Egyptian pounds for foreigners and 30 pounds for Egyptians and Arabs, half price for students, and the audio guide is 20 pounds.",
    ],
    images: [
      "img_4366.jpg",
      "img_4367.jpg",
      "img_4368.jpg",
      "img_4369.jpg",
      "img_4370.jpg",
      "img_4371.jpg",
      "img_4372.jpg",
      "img_4373.jpg",
      "img_4374.jpg",
      "img_4375.jpg",
      "img_4376.jpg",
      "img_4377.jpg",
      "img_4378.jpg",
    ],
  },
  {
    ar: "متحف شرم الشيخ",
    en: "The Sharm El Sheikh Museum",
    loc_ar: "جنوب سيناء",
    loc_en: "South Sinai",
    paras: [
      [
        "تعود فكره بناء المتحف الى عام 2006 وفى عام 2017 تم استكمال بناء المتحف",
        "The idea of building the museum goes back to 2006, and construction was completed in 2017.",
      ],
      [
        "ويعكس سيناريو العرض المتحفي الأوجه المختلفه للحضارة بوجه عام والحضارة المصرية القديمه بشكل خاص ، وذلك عن طريق عرض مجموعة منتقاة من القطع الاثرية التي تم اختيارها بعناية من المخازن المتحفية",
        "The display reflects the different faces of civilisation in general and ancient Egyptian civilisation in particular, through a selection of objects carefully chosen from the museum stores.",
      ],
      [
        "تعبر القاعة الكبرى في العرض المتحفي عن الانسان والحياة البرية في مصر القديمه واهتماماته بالعلم والرياضة والصناعات والحرف وحياته العائلية وحبه للحيوانات لدرجه التبجيل ، كما يعرض بعض الحيوانات المحنطة",
        "The great hall speaks of man and wildlife in ancient Egypt, his interest in learning, sport, industries and crafts, his family life and his love of animals to the point of veneration, and it displays some mummified animals.",
      ],
      [
        "ومن أهم القطع التي تضمها قاعة الحضارات هي التابوت الداخلي والخارجي لايست ام حب زوجة بانجم الثاني الكاهن الأكبر لآمون وحاملة لقب كاهنة المعبودة ايزيس والمعبودين مين وحورس بأخميم ، وأيضا صناديق الأواني الكانوبية الخاص بها وبردية ايست ام حب ، ومجموعه من أواني العطور وأدوات التجميل ، وأيضا رأس للملكة حتشبسوت ومجموعة من تماثيل التناجرا لسيدات بملابس وطرز مختلفة ، بالاضافة لمعروضات من التراث السيناوى",
        "Among the most important pieces in the hall of civilisations are the inner and outer coffins of Iset em Heb, wife of Pinedjem II the high priest of Amun and bearer of the title priestess of the goddess Isis and of the gods Min and Horus at Akhmim, together with her canopic boxes and her papyrus, a group of perfume vessels and cosmetic tools, a head of Queen Hatshepsut, a group of Tanagra figurines of women in different dress and styles, and displays of Sinai heritage.",
      ],
    ],
    tickets: [
      "مفتوح يوميا من الساعة 10 صباحا الى الساعة 1 ظهرا ، وسعر التذاكر للاجانب 200 جنيه مصري ، وللتصوير الفوتوغرافي التذكاري بدون فلاش 50 جنيه مصري ، ولحامل الكاميرا 20 جنيه مصري ، وسعر التذاكر للمصريين والعرب 40 جنيه مصري ، وللتصوير الفوتوغرافي التذكاري بدون فلاش 20 جنيه مصري ، ولحامل الكاميرا 10 جنيه مصري ، وللطلبة من النوعين تكون أسعار تذاكر الدخول نصف الاسعار المذكورة",
      "Open daily from 10 in the morning until 1 in the afternoon. Tickets are 200 Egyptian pounds for foreigners, 50 pounds for flash-free photography and 20 pounds for carrying a camera; for Egyptians and Arabs 40 pounds, 20 pounds for photography and 10 pounds for a camera, half price for students.",
    ],
    images: ["img_4361.jpg", "img_4362.jpg", "img_4363.jpg", "img_4364.jpg", "img_4365.jpg"],
  },
  {
    ar: "متحف مطار القاهرة الدولي – صالة رقم (3)",
    en: "Cairo International Airport Museum — Terminal 3",
    loc_ar: "القاهرة",
    loc_en: "Cairo",
    paras: [
      [
        "تم افتتاح متحف مطار القاهرة الدولي بصالة (3) في عام 2016م ، وذلك في ضوء بروتوكول التعاون بين كل من وزارة الآثار ووزارة الطيران المدني ، ليكون بمثابة البوابة الأولى المؤدية الى تاريخ مصر العريق ، بل والنافذة المطلة على آثارها الشاخصة وحضارتها الشامخة",
        "The museum in Terminal 3 of Cairo International Airport opened in 2016 under a cooperation protocol between the ministry of antiquities and the ministry of civil aviation, to be the first gateway to Egypt's long history and a window onto its standing monuments and lofty civilisation.",
      ],
      [
        "وقد كان المتحف آنذاك يشغل مساحة 60 م2 تقريبا ، وكان يضم عدد (38) قطعة أثرية فقط ، الى أن جاء عام 2020م وتم نقل المتحف من مكانه القديم الى الطابق الرابع في نفس المبنى وذلك بهدف توسعته وعرض المزيد من القطع الأثرية ، حيث أصبحت مساحته تشغل حوالي 150م2 تقريبا",
        "At the time it occupied about 60 m² and held only 38 objects, until in 2020 it was moved from its old place to the fourth floor of the same building in order to expand it and display more pieces, so that it now covers about 150 m².",
      ],
      [
        "يعرض المتحف حاليا مجموعة من أبرز القطع الأثرية التي يستطيع من خلالها الزائر أن يحيا في عبق تاريخ مِصر الخالد في مختلف عصوره المتتابعة ، تلك القطع التي تمثل مرآة لحضارات وفنون مصر المختلفة بداية من العصر الفرعوني مرورا بالعصرين اليوناني والروماني ، فضلا عن الفن القبطي نهاية بالعصر الاسلامي والحديث",
        "It now displays a group of outstanding objects through which the visitor can breathe the fragrance of Egypt's immortal history across its successive ages — pieces that mirror Egypt's different civilisations and arts, from the pharaonic era through the Greek and Roman periods and Coptic art to the Islamic and modern ages.",
      ],
    ],
    tickets: [
      "مفتوح على مدار الساعة ، التذاكر للاجانب 3 دولار أمريكي ، وللمصريين والعرب 25 جنيه مصري",
      "Open around the clock. Tickets are 3 US dollars for foreigners and 25 Egyptian pounds for Egyptians and Arabs.",
    ],
    images: ["img_4357.jpg", "img_4358.jpg", "img_4359.jpg", "img_4197-1.jpg"],
  },
];

const blocks: GuideBlock[] = museums.flatMap((m): GuideBlock[] => [
  { type: "H3", ar: m.ar, en: m.en, noNumber: true },
  { type: "P", ar: `الموقع : ${m.loc_ar}`, en: `Location: ${m.loc_en}` },
  ...m.paras.map(([ar, en]) => ({ type: "P" as const, ar, en })),
  { type: "P", ar: m.tickets[0], en: m.tickets[1] },
  ...m.images.map((n) => ({ type: "IMG" as const, size: "compact" as const, src: U(n), cap_ar: m.ar, cap_en: m.en })),
]);

export const egyptMuseumsGuide: Guide = {
  slug: "egypt-museums",
  title_ar: "المتحف المصري .. تعرف على (17) متحف بجمهورية مصر العربية",
  title_en: "The Egyptian Museum — 17 museums of the Arab Republic of Egypt",
  kicker_ar: "متاحف مصر",
  kicker_en: "Museums of Egypt",
  image: U("img_3996-1.jpg"),
  blocks,
};
