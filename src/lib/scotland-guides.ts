import type { Guide } from "./france-guides";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const foodGuide: Guide = {
  slug: "food",
  title_ar: "أكلات وأطباق اسكتلندية",
  title_en: "Scottish food and dishes",
  kicker_ar: "مطبخ",
  kicker_en: "Cuisine",
  image: U("2022/02/img_2699.jpg"),
  blocks: [
    {
      type: "P",
      ar: "اسكتلندا هي بلد للأحلام وأرض وفيرة من حيث المنتجات الطازجة من سمك السلمون الأسكتلندي الى كعكة الغنم المصنوعة منزليا من الزبد ، تعرف معي على أشهر وأبرز المأكولات فيها",
      en: "Scotland is a country of dreams and a land abundant in fresh produce, from Scottish salmon to home-made buttery shortbread. Come and discover its most famous dishes with me.",
    },
    { type: "H3", ar: "الهاجيس", en: "Haggis" },
    {
      type: "P",
      ar: "يتكون الطبق الوطني الشهير في اسكتلندا من قطيع الأغنام الكبد والرئتين والقلب مفرومة مع التوابل والملح ودقيق الشوفان والدهن والبصل داخل بطانة من معدة الحيوان ( لكنه في الوقت الحاضر يمكن أن يكون مصطنعا ) ، ومن الضروري تجربته قبل مغادرة اسكتلندا",
      en: "Scotland's famous national dish is made from sheep's liver, lungs and heart, minced with spices, salt, oatmeal, suet and onion inside a lining of the animal's stomach (although nowadays it can be artificial). It is essential to try it before you leave Scotland.",
    },
    { type: "IMG", src: U("2022/02/img_2699.jpg"), cap_ar: "الهاجيس", cap_en: "Haggis" },
    { type: "H3", ar: "النيبس والتوتيس", en: "Neeps and tatties" },
    {
      type: "P",
      ar: "على الرغم من أنه يتم تقديمه عادة مع الهاجيس ، إلا أن النيبس وتوتيس يوجد في العديد من الأطباق الأسكتلندية ، فقط للتوضيح neeps هي اللفت و tatties هي البطاطس ، إذا قمت بإضافة الزبدة والثوم المعمر للمزيج ، يمكنك الحصول على الوصفة ( طبق مصدره أوركني ) ، في اسكتلندا دوما يؤكل النيبس والتوتيس سويا مثل البازلاء والجزر",
      en: "Although they are usually served with haggis, neeps and tatties appear in many Scottish dishes. Just to be clear: neeps are turnips and tatties are potatoes. If you add butter and chives to the mixture you get the classic recipe (a dish that comes from Orkney). In Scotland neeps and tatties are always eaten together, like peas and carrots.",
    },
    { type: "IMG", src: U("2022/02/img_2700.jpg"), cap_ar: "النيبس والتوتيس", cap_en: "Neeps and tatties" },
    { type: "H3", ar: "سمك السلمون الأسكتلندي", en: "Scottish salmon" },
    {
      type: "P",
      ar: "يوجد في أي سوبر ماركت أو مطعم راقي في جميع أنحاء العالم سمك السلمون الأسكتلندي ، وذلك يرجع لأنه الأفضل والاشهى ، اسكتلندا هي أرض خصبة لتربية السلمون ، مع المياه العذبة التي يمكن أن تكون سببا في أنه دوما طازج ، يعرف سمك السلمون الأسكتلندي عالميا بمذاقه الرائع والملمس المثالي ، تأكد من تجربة عظمة السلمون في قلب اسكتلندا وتجربة ذلك بنفسك",
      en: "You will find Scottish salmon in any supermarket or fine restaurant anywhere in the world, and that is because it is the best and the tastiest. Scotland is fertile ground for salmon farming, with fresh water that keeps it always fresh. Scottish salmon is known worldwide for its wonderful flavour and perfect texture — be sure to taste the greatness of salmon in the heart of Scotland and see for yourself.",
    },
    { type: "IMG", src: U("2022/02/img_2701.jpg"), cap_ar: "سمك السلمون الأسكتلندي", cap_en: "Scottish salmon" },
    { type: "H3", ar: "العصيدة", en: "Porridge" },
    {
      type: "P",
      ar: "سواء كان شوربة عصيدة الشوفان التي تتواجد معلبة في محلات الأغذية أو تجربتها في مطعم للتذوق ، لا شيء يتفوق على المذاق الشهي للعصيدة الأسكتلندية القديمة ، ولتعلم أنها مصنوعة مع الملح ، وليس السكر ، للعصيدة قوام سميك حتى إنه يمكنك مسكها بيديك",
      en: "Whether it is the packaged oat porridge found in food shops or a bowl tasted in a restaurant, nothing beats the delicious flavour of good old Scottish porridge. Note that it is made with salt, not sugar, and it is so thick that you could almost hold it in your hands.",
    },
    { type: "IMG", src: U("2022/02/img_2702.jpg"), cap_ar: "العصيدة", cap_en: "Porridge" },
    { type: "H3", ar: "الإفطار الأسكتلندي الكامل", en: "The full Scottish breakfast" },
    {
      type: "P",
      ar: "يشبه الإفطار الأسكتلندي الكامل الفطور الإنجليزي الكامل ، إلا أنه يأتي مع بودنغ أسود وسجق لورن وكعك البطاطس ، وقد يتضمن الفطور الهاجيس في بعض الأحيان ، قد تكون البطاطس الكريمية رائعة للبعض ، وتقدم بقطع الزبدة ، فالطاولة الأسكتلندية توفر لك أصناف تشعرك بالشبع ومذاق لذيذ المحتوى ، معظم الأماكن في اسكتلندا تقدم هذا الإفطار طوال اليوم",
      en: "The full Scottish breakfast resembles the full English breakfast, except that it comes with black pudding, Lorne sausage and potato scones, and sometimes it includes haggis. The creamy potatoes, served with pats of butter, are wonderful for some. The Scottish table gives you dishes that fill you up with a delicious flavour, and most places in Scotland serve this breakfast all day.",
    },
    { type: "IMG", src: U("2022/02/img_2703.jpg"), cap_ar: "الإفطار الأسكتلندي الكامل", cap_en: "The full Scottish breakfast" },
    { type: "H3", ar: "الأقراص الأسكتنلدية", en: "Scottish tablet" },
    {
      type: "P",
      ar: "الأقراص هو خيار جيد عندما يتعلق الأمر بالأكلات الأسكتلندية ، تخيل السكر والحليب المكثف والزبدة التي تم طهيها معا حتى تتبلور ، والنتيجة هي قطعة من الحلوى الأسكتلندية ، يمكن العثور على بعض الأقراص المحشوة ، يتم إعداد هذا الحلا اللذيذ في جميع أنحاء اسكتلندا ومن السهل جداً إيجاده",
      en: "Tablet is a fine choice when it comes to Scottish food. Imagine sugar, condensed milk and butter cooked together until they crystallise — the result is a piece of Scottish confectionery. You can find some tablet with fillings; this delicious sweet is made all over Scotland and is very easy to find.",
    },
    { type: "IMG", src: U("2022/02/img_2704-1.jpg"), cap_ar: "الأقراص الأسكتلندية", cap_en: "Scottish tablet" },
    { type: "H3", ar: "السجق والبطاطس المهروسة", en: "Sausage and mash" },
    {
      type: "P",
      ar: "أي أسرة بريطانية تتطلع الى السجق والبطاطس المهروسة للعشاء ، انه طبق كلاسيكي جدا ، وعادة ما يتم إضافة كتلة وافرة من الزبدة والحليب لجعل البطاطس المهروسة أكثر رقة ، السجق أو النقانق في اسكتلندا لا يعلى عليه ، نتوقع العثور على اللحوم التي تم رعيها محليا بأعلى مستويات الجودة ، لا تتفاجأ بالنكهات الأكثر غرابة للسجق ، مثل التفاح أو لحم الغزال ، والمختلطة أيضا",
      en: "Any British family looks forward to sausage and mash for dinner; it is a very classic dish. A generous lump of butter and some milk are usually added to make the mash smoother. Sausages in Scotland are unbeatable — expect locally reared meat of the highest quality. And do not be surprised by the more unusual sausage flavours, such as apple or venison, and mixtures of them too.",
    },
    { type: "IMG", src: U("2022/02/img_2705.jpg"), cap_ar: "السجق والبطاطس المهروسة", cap_en: "Sausage and mash" },
    { type: "H3", ar: "بودينغ التوفي اللزج", en: "Sticky toffee pudding" },
    {
      type: "P",
      ar: "هذه الحلوى اللذيذة هي الغذاء الرئيسي البريطاني ، بودنغ التوفي اللزج هو الأروع على الإطلاق ، ويتكون من كعكة اسفنجية رطبة كاملة مع التمر وصلصة التوفي وحشو الفانيليا أو الآيس كريم ، يمكن العثور على هذه الحلوى في معظم المحلات الأسكتلندية وهي خيار حلوى مثالي للغاية",
      en: "This delicious dessert is a British staple, and sticky toffee pudding is the finest of all: a moist sponge cake full of dates with toffee sauce and a filling of vanilla or ice cream. You can find it in most Scottish establishments and it is a perfect choice of pudding.",
    },
    { type: "IMG", src: U("2022/02/img_2706.jpg"), cap_ar: "بودينغ التوفي اللزج", cap_en: "Sticky toffee pudding" },
    { type: "H3", ar: "السمك الأسكتلندي ورقائق البطاطس", en: "Scottish fish and chips" },
    {
      type: "P",
      ar: "لا يوجد شيء مثل تناول السمك الأسكتلندي على العشاء ، اجلس على الشاطئ ، وشاهد المد والجزر ، وتذوق السمك الهش مع رقائق البطاطس الرقيقة ، تأكد من ان تسأل عن صلصة الملح في أدنبره والاستمتاع بصلصة الخبز ذات اللون البني المحمر",
      en: "There is nothing like Scottish fish for dinner. Sit by the shore, watch the tide, and taste the crisp fish with thin chips. Be sure to ask for the 'salt and sauce' in Edinburgh and enjoy the reddish-brown chippy sauce.",
    },
    { type: "IMG", src: U("2022/02/img_2707.jpg"), cap_ar: "السمك ورقائق البطاطس", cap_en: "Fish and chips" },
    { type: "H3", ar: "الدجاج البري", en: "Grouse" },
    {
      type: "P",
      ar: "هذا الطائر يسكن الأراضي المستنقعية في بريطانيا ، مع العديد من المقيمين في جميع أنحاء أسكتلندا ، للدجاج البري طعم شهي ، خصوصا بعد أن يتم موسم الصيد للدجاج البري بسلاسة وبناء على الجدول الزمني ، يعرف هذا الطبق بشهرته وغالبا ما يكون طعما خفيفا وشهيا",
      en: "This bird lives on Britain's moorlands, with many resident across Scotland. Grouse has a delicious taste, especially once the shooting season has run smoothly and on schedule. The dish is famous and is often light and appetising.",
    },
    { type: "IMG", src: U("2022/02/img_2708.jpg"), cap_ar: "الدجاج البري", cap_en: "Grouse" },
    { type: "H3", ar: "البودنج الأسود", en: "Black pudding" },
    {
      type: "P",
      ar: "بالنسبة لأولئك الذين ليسوا على دراية بالمطبخ الأسكتلندي التقليدي ، فإن البودنج الأسود يميل الى أن يكون في نفس فئة الهاجيس ، وبعبارة أخرى ، يتساءل الكثيرون كيف أن هذا أمر صالح للأكل ، يوجد به لحوم السجق ودقيق الشوفان",
      en: "For those unfamiliar with traditional Scottish cooking, black pudding tends to fall in the same category as haggis — in other words, many wonder how it can be edible. It contains sausage meat and oatmeal.",
    },
    { type: "IMG", src: U("2022/02/img_2709.jpg"), cap_ar: "البودنج الأسود", cap_en: "Black pudding" },
    { type: "H3", ar: "الكعكة الصغيرة", en: "Shortbread" },
    {
      type: "P",
      ar: "لقد كان خيار الحلوى الأسكتلندية لسنوات ، لذا عام 1736 م شهد أول وصفة مطبوعة من هذا الاختراع الرائع ، انها لها رائحة ذو مذاق مليء بالنكهات ، على الرغم من أنك ستجد أن المذاق يختلف باختلاف من يعده ، وهي توجد في جميع الأشكال والأحجام ، وتعتبر مرافق مثالي لكوب من الشاي ، يقدم الأسكتلنديون هذه الكعكة في بعض المناسبات مثل الكريسماس",
      en: "It has been the Scottish sweet of choice for years; 1736 saw the first printed recipe for this wonderful invention. It has an aroma and a taste full of flavour, although you will find the taste differs from baker to baker. It comes in every shape and size and is the perfect companion to a cup of tea. Scots serve it on certain occasions such as Christmas.",
    },
    { type: "IMG", src: U("2022/02/img_2710-1.jpg"), cap_ar: "الكعكة الصغيرة", cap_en: "Shortbread" },
    { type: "H3", ar: "حساء الكراث والبطاطس", en: "Leek and potato soup" },
    {
      type: "P",
      ar: "على الرغم من أن هذا الحساء يبدو متواضعا ، إلا أنه يقدم في بيرنز سوبرس ، وهو حدث ثقافي مهم حيث يتجمع الأسكتلنديون للاحتفال بالشاعر روبرت بيرنز وأعماله الرائعة ، البرد في الطقس الأسكتلندي لا يمكن التنبؤ به لذا هذا الحساء سيكون مفيد ، لا تزال وصفات هذا الحساء تضاف الى وصفات الأكلات عبر الأجيال",
      en: "Although this soup looks humble, it is served at Burns Suppers, the important cultural event where Scots gather to celebrate the poet Robert Burns and his wonderful works. The cold of Scottish weather is unpredictable, so this soup comes in useful — and its recipes are still handed down through the generations.",
    },
    { type: "IMG", src: U("2022/02/img_2711.jpg"), cap_ar: "حساء الكراث والبطاطس", cap_en: "Leek and potato soup" },
    { type: "H3", ar: "سندوتش اللحم المقدد", en: "The bacon roll" },
    {
      type: "P",
      ar: "يتم وضع قطع من أفضل اللحم المقدد في أسكتلندا داخل لفة بيضاء مع الزبدة ، ثم يضاف كمية سخية من الصلصة البنية ، وستستمتع بأطعمة كل المكونات الموجودة في السندوتش",
      en: "Slices of Scotland's finest bacon are placed inside a white roll with butter, then a generous amount of brown sauce is added — and you will enjoy every ingredient in the sandwich.",
    },
    { type: "IMG", src: U("2022/02/img_2712.jpg"), cap_ar: "سندوتش اللحم المقدد", cap_en: "The bacon roll" },
    { type: "H3", ar: "بار شوكلاتة مارس بالزبدة", en: "Deep-fried Mars bar" },
    {
      type: "P",
      ar: "هذه الفطائر محشوة بالشوكلاتة وتقلى ويتم إخراجها من الزيت بشوكلاتة مذابة وتصبح أفضل الحلوى ، وبسبب وجود الزبد تحتفظ هذه الفطيرة بالشوكلاتة بداخلها ، فبمجرد فتح الفطيرة تظهر الشوكلاتة من الداخل ، ويمكن اختيار أي حشو حين القيام بإعدادها",
      en: "These are stuffed with chocolate and deep-fried, coming out of the oil with the chocolate melted, making the finest of sweets. Thanks to the batter the chocolate is kept inside, so as soon as you open it the chocolate flows out — and any filling can be chosen when making it.",
    },
    { type: "IMG", src: U("2022/02/img_2713.jpg"), cap_ar: "بار شوكلاتة مارس بالزبدة", cap_en: "Deep-fried Mars bar" },
    { type: "H3", ar: "الفطيرة الأسكتلندية", en: "The Scotch pie" },
    {
      type: "P",
      ar: "قد تكون هذه الفطيرة صغيرة ولكن هذا لا يسلبها نكهتها ، العجينة المزدوجة تجعل طعم الفطيرة مثالي ، يمكن تقديم الفطيرة الأسكتلندية ساخنة أو باردة ، وتحتوي على حشوة لحم الضأن المفروم أو أي نوع من اللحم ، في كل عام ، يتنافس الجزارون والخبازون من جميع أنحاء العالم على اللقب المشرف لجائزة بطل أسكتلندا للفطائر",
      en: "This pie may be small, but that does not take away its flavour. The double crust makes the taste perfect. A Scotch pie can be served hot or cold and holds a filling of minced mutton or any kind of meat. Every year butchers and bakers from all over the world compete for the honourable title of Scotch Pie Champion.",
    },
    { type: "IMG", src: U("2022/02/img_2714.jpg"), cap_ar: "الفطيرة الأسكتلندية", cap_en: "The Scotch pie" },
  ],
};

const famousGuide: Guide = {
  slug: "famous-for",
  title_ar: "ما تشتهر به اسكتلندا",
  title_en: "What Scotland is famous for",
  kicker_ar: "ثقافة",
  kicker_en: "Culture",
  image: U("2022/05/img_6911.jpg"),
  blocks: [
    { type: "H3", ar: "اللباس التقليدي", en: "Traditional dress" },
    {
      type: "P",
      ar: "تتميز اسكتلندا بلباس تقليدي فريد من نوعه مكون من حقيبة تلبس حول الخصر ، وخنجر صغير ، وإزار مثبت بدبوس مصنوع من نوع خاص من الأقمشة يسمى بالطرطان ، وهو من الأقمشة الصوفية التي تتكون من خطوط أفقية ورأسية بألوان مختلفة ، ويصنع من هذا القماش التنانير التي يرتديها كِلا الجنسين يسمى بالإزار السكتلندي أو الكلت ، ويمكن أن يستخدم القماش بأكثر من طريقة ، كربطة عنق ، أو سراويل ، وغيرها ، وعادة ما يلبس في المناسبات والأفراح ، وفي موسم الألعاب",
      en: "Scotland has a uniquely distinctive traditional dress made up of a pouch worn at the waist, a small dagger, and a pinned wrap made of a special cloth called tartan — a woollen fabric of horizontal and vertical lines in different colours. From this cloth are made the skirts worn by both sexes, called the Scottish plaid or kilt. The cloth can be used in more than one way, as a tie, as trousers and so on, and it is usually worn at occasions and weddings and during the games season.",
    },
    { type: "H3", ar: "الموسيقى التقليدية", en: "Traditional music" },
    {
      type: "P",
      ar: "تعد الموسيقى جزء من ثقافة المجتمع الأسكتلندي ، ومن أشهر الآلات الموسيقية في اسكتلندا هو مزمار القربة ، ويوجد نوعان من النغمات الموسيقية التي يتم عزفها على المزمار ، الموسيقى الكبيرة ، والموسيقى الصغيرة ، تعتمد الموسيقى الكبيرة على نمط كلاسيكي وبطيء ، بينما تعتمد الموسيقى الصغيرة على إيقاع يناسب الرقصات التقليدية لدى المجتمع الأسكتلندي",
      en: "Music is part of the culture of Scottish society, and the most famous instrument in Scotland is the bagpipes. There are two kinds of tune played on the pipes: the big music and the little music. The big music follows a slow, classical style, while the little music follows a rhythm suited to the traditional dances of Scottish society.",
    },
    { type: "H3", ar: "الألعاب الشعبية", en: "Traditional games" },
    {
      type: "P",
      ar: "تعد الألعاب الشعبية جزء من ثقافة أسكتلندا منذ مئات السنين أشهرها ألعاب المرتفعات ، وتجري هذه اللعبة في يوم واحد في جميع أنحاء الدولة ، وتتكون من مجموعة ألعاب مثل شد الحبل ، ورمي الأخشاب ، ورمي المطرقة ، بالإضافة الى فقرات تتضمن الموسيقى والرقص ، ويبدأ موسم الألعاب في شهر مايو ، ويبلغ ذروته في شهر يوليو وأغسطس ، وينتهي مع نهاية شهر سبتمبر ، وتقام معظم الألعاب في عطلة نهاية الأسبوع",
      en: "Traditional games have been part of Scotland's culture for hundreds of years, the most famous being the Highland Games. They are held on a single day across the country and consist of a set of contests such as tug of war, tossing the caber and throwing the hammer, alongside items of music and dance. The games season begins in May, peaks in July and August and ends with the close of September, with most games held at weekends.",
    },
    { type: "H3", ar: "الأطباق التقليدية", en: "Traditional dishes" },
    {
      type: "P",
      ar: "تشتهر اسكتلندا بالعديد من الأطباق التقليدية منها طبق يسمى بالهاغيس ، يتكون الطبق من سجق محشي بخليط من اللحم ، ودقيق الشوفان ، والبصل ، والملح ، والتوابل ، وعادة ما يقدم مع البطاطا المهروسة واللفت",
      en: "Scotland is famous for many traditional dishes, among them one called haggis, made of a sausage stuffed with a mixture of meat, oatmeal, onion, salt and spices, usually served with mashed potatoes and turnips.",
    },
    { type: "H3", ar: "الطبيعة الخلابة", en: "Breathtaking nature" },
    {
      type: "P",
      ar: "تمتلك اسكتلندا العديد من الأماكن الطبيعية ، بما فيها الشواطئ ، والغابات ، والجزر ، ومن أشهرها خليج سانا ، وخليج تاليسكر ، ونهر ألنس ، وجبال بن هيانت ، وغابات غلين أفريك ، وجزر نيس ، وغيرها الكثير",
      en: "Scotland has many natural places, including beaches, forests and islands. Among the most famous are Sanna Bay, Talisker Bay, the river Alness, the mountains of Ben Hiant, the forests of Glen Affric, the islands of Ness and many more.",
    },
    { type: "H3", ar: "المناطق الأثرية والتراثية", en: "Historic and heritage sites" },
    {
      type: "P",
      ar: "تمتلك اسكتلندا العديد من القلاع والمدن التاريخية ، مثل مدينة لينثليتجو الأثرية التي تحتوي على مجموعة من القصور ، ومدينة ميلروز التي تحتوي على آثار رومانية ، ومدينة إلجين التي تحتوي على أبراج وأماكن كانت العائلة المالكة في القرن الرابع عشر تقضي عطلتها فيها ، كما تحتوي على كتدرائية تسمى فانوس الشمال ، ومدينة كيركودبرايت التي تحتوي على قلعة دوغلاس وغيرها من المدن الأثرية",
      en: "Scotland has many castles and historic towns, such as the historic town of Linlithgow with its group of palaces, Melrose with its Roman remains, and Elgin with towers and places where the royal family spent their holidays in the fourteenth century, as well as a cathedral called the Lantern of the North, and Kirkcudbright with Douglas Castle — among other historic towns.",
    },
  ],
};

const albumGuide: Guide = {
  slug: "album",
  title_ar: "ألبوم الصور",
  title_en: "Photo album",
  kicker_ar: "ألبوم",
  kicker_en: "Album",
  image: U("2022/05/img_6911.jpg"),
  blocks: [],
  gallery: [
    "2022/05/img_6911.jpg",
    "2022/05/img_6912.jpg",
    "2022/05/img_6913.jpg",
    "2022/05/img_6914.jpg",
    "2022/05/img_6915.jpg",
    "2022/05/img_6916.jpg",
    "2022/05/img_6917.jpg",
    "2022/05/img_6918.jpg",
  ].map((n) => ({ src: U(n), cap_ar: "اسكتلندا", cap_en: "Scotland" })),
};

/** Listed sections on the Scotland country page. */
export const scotlandGuides: Guide[] = [foodGuide, famousGuide, albumGuide];

/** Deep-dive landmark pages, linked from the Edinburgh city article. */
export const scotlandLandmarkGuides: Guide[] = [
  {
    slug: "edinburgh-castle",
    title_ar: "قلعة أدنبره .. الشاهد على حضارة اسكتلندا",
    title_en: "Edinburgh Castle — witness to the civilisation of Scotland",
    kicker_ar: "اسكتلندا",
    kicker_en: "Scotland",
    image: U("2022/09/img_2817.jpg"),
    blocks: [
      { type: "IMG", src: U("2022/09/img_2817.jpg"), cap_ar: "قلعة ادنبره", cap_en: "Edinburgh Castle" },
      {
        type: "P",
        ar: "قلعة ادنبره Caisteal Dhùn Èideann هي قلعة تاريخية تسيطر على أفق مدينة ادنبره من موقعها على قلعة الصخرة ، أنشأ علماء الآثار الاحتلال البشري للصخرة منذ العصر الحديدي على الأقل (القرن الثاني الميلادي) ، رغم أن طبيعة المستوطنة المبكرة غير واضحة ، كانت هناك قلعة ملكية على الصخرة منذ عهد ديفيد الاول على الأقل في القرن الثاني عشر ، وظل الموقع مكان اقامة ملكي حتى عام 1633",
        en: "Edinburgh Castle (Caisteal Dhùn Èideann) is a historic castle that dominates the skyline of Edinburgh from its position on Castle Rock. Archaeologists have established human occupation of the rock since at least the Iron Age (second century AD), although the nature of the early settlement is unclear. There has been a royal castle on the rock since at least the reign of David I in the twelfth century, and the site remained a royal residence until 1633.",
      },
      {
        type: "P",
        ar: "من القرن الخامس عشر انخفض دور القلعة السكني ، وبحلول القرن السابع عشر كان يستخدم بشكل أساسي كثكنات عسكرية مع حامية كبيرة ، تم الاعتراف بشكل متزايد بأهميتها كجزء من التراث الوطني لاسكتلندا منذ أوائل القرن التاسع عشر وما بعده ، وتم تنفيذ العديد من برامج الاستعادة على مدار القرن ونصف القرن الماضي ، باعتبارها واحدة من أهم معاقل مملكة اسكتلندا ، شاركت قلعة أدنبره في العديد من الصراعات التاريخية من حروب الاستقلال الاسكتلندية في القرن الرابع عشر وحتى صعود يعقوبي عام 1745",
        en: "From the fifteenth century the castle's residential role declined, and by the seventeenth century it was used mainly as military barracks with a large garrison. Its importance as part of Scotland's national heritage was increasingly recognised from the early nineteenth century onwards, and many restoration programmes have been carried out over the past century and a half. As one of the most important strongholds of the Kingdom of Scotland, Edinburgh Castle took part in many historical conflicts, from the Wars of Scottish Independence in the fourteenth century to the Jacobite rising of 1745.",
      },
      {
        type: "P",
        ar: "حددت الأبحاث التي أجريت في عام 2014 حدوث 26 حصارا في تاريخها الممتد منذ 1100 عام ، مما جعلها تدعى بأنها أكثر الأماكن المحاصرة في بريطانيا العظمى وواحدة من أكثر المناطق التي تعرضت للهجوم في العالم ، القلعة هي تحت رعاية البيئة التاريخية لاسكتلندا ، هي أكثر مناطق الجذب السياحي مدفوعة الأجر في اسكتلندا ، حيث زارها أكثر من مليوني زائر في عام 2017 وأكثر من 70 في المائة من الزوار السياحيين الى ادنبره ، كخلفية لشمعة أدنبره العسكرية خلال مهرجان ادنبره السنوي ، والآن أصبحت القلعة رمزا معروفا لادنبره واسكتلندا",
        en: "Research carried out in 2014 identified 26 sieges in its 1,100-year history, making it claimed to be the most besieged place in Great Britain and one of the most attacked places in the world. The castle is in the care of Historic Environment Scotland and is the most visited paid attraction in Scotland, with more than two million visitors in 2017 and more than 70 per cent of all tourist visitors to Edinburgh. It serves as the backdrop for the Edinburgh Military Tattoo during the annual Edinburgh Festival, and the castle has now become a well-known symbol of Edinburgh and of Scotland.",
      },
      { type: "IMG", src: U("2022/09/img_2812.jpg"), cap_ar: "قاعة ادنبره", cap_en: "The Great Hall, Edinburgh" },
      {
        type: "P",
        ar: "اعتبرت مدينة ادنبره من أهم المراكز في أثناء عصر التنوير ، وصنفت منظمة الأمم المتحدة للتربية والعلم والثقافة البلدتين القديمة والحديثة في ادنبرة ضمن مواقع التراث العالمي عام 1995 ، ويوجد في البلدتين أكثر من 4500 مبنى من أشهرها قلعة ادنبرة ، التي اختيرت مؤخرا بوصفها المكان الأثري الأكثر جذبا للسياح في قوائم السفر البريطانية",
        en: "Edinburgh was considered one of the most important centres during the Enlightenment, and UNESCO inscribed the Old and New Towns of Edinburgh as World Heritage Sites in 1995. The two towns contain more than 4,500 buildings, the most famous of which is Edinburgh Castle, recently chosen as the most attractive historic site for tourists in British travel listings.",
      },
      {
        type: "P",
        ar: "هذه القلاع لم تلفت انتباه الزائرين من فراغ ، حيث ان لها تاريخ بناء معقدا فضلا عن أنها مغرقة في القِدم ، فالجزء الأقدم من أبنيتها ، وهو كنيسة سانت مارغريت يعود تاريخها الى القرن الثاني عشر ، وأقام جيمس الرابع (1473-1513) القلعة الكبرى المسماة قلعة كونوي ، التي تعتبر من أروع الأمثلة العسكرية المعمارية في أوروبا ، وذلك عام 1510 للميلاد",
        en: "These castles did not catch visitors' attention for nothing: they have a complex building history and are steeped in antiquity. The oldest part of the buildings, St Margaret's Chapel, dates back to the twelfth century, and James IV (1473–1513) raised the great hall known as Conwy Castle — considered one of the finest examples of military architecture in Europe — in the year 1510.",
      },
      {
        type: "P",
        ar: "وأضيفت بطارية نصف القمر من قبل ريجنت مورتون ، في أواخر القرن السادس عشر للميلاد ، وهي بناء مرتفع من القلعة يشرف على المدينة ، وكان له دور مهم في كشف نيران الأعداء واسقاطها ، وعملت على صد العديد من الاعتداءات على القلعة ، أما النصب التذكاري للحرب الوطنية الأسكتلندية فقد أنشئ في أعقاب الحرب العالمية الأولى",
        en: "The Half Moon Battery was added by Regent Morton in the late sixteenth century — a raised part of the castle overlooking the city that played an important role in exposing and bringing down enemy fire and repelled many assaults on the castle. The Scottish National War Memorial, meanwhile, was created in the aftermath of the First World War.",
      },
      { type: "IMG", src: U("2022/09/img_2818.jpg"), cap_ar: "احد المدافع الموجودة بقلعة ادنبره", cap_en: "One of the cannon at Edinburgh Castle" },
      { type: "IMG", src: U("2022/09/img_2815.jpg"), cap_ar: "احد زوايا المباني بقلعة ادنبره", cap_en: "A corner of the buildings at Edinburgh Castle" },
      { type: "H3", ar: "تاريخ قلعة ادنبره", en: "The history of Edinburgh Castle", noNumber: true },
      {
        type: "P",
        ar: "وعلى المستوى التاريخي فقد أدت قلعة ادنبرة دورا محوريا في التاريخ الأسكتلندي ، حيث كانت كمقر اقامة ملكية ، اتخذها الملك مالكولم كانمور في 1058 للميلاد ، واهتمت الملكة مارغريت أن يكون منزلهما في القلعة عينها في القرن الحادي عشر ، اضافة الى اتخاذها معقلا عسكريا",
        en: "Historically, Edinburgh Castle played a pivotal role in Scottish history as a royal residence: King Malcolm Canmore took it as his seat in 1058, and Queen Margaret was keen that their home should be in the castle itself in the eleventh century, besides its use as a military stronghold.",
      },
      {
        type: "P",
        ar: "والجدير بالذكر أن آخر عمل عسكري شهدته القلعة كان في عام 1745 ، ومن ذلك الحين حتى 1920 كانت بمثابة القاعدة الرئيسية للجيش البريطاني في أسكتلندا ، وبعد ذلك وحتى اليوم أضحت القلعة واحدة من مناطق الجذب السياحي الأكثر شعبية في أسكتلندا",
        en: "It is worth noting that the last military action the castle saw was in 1745, and from then until 1920 it served as the main base of the British Army in Scotland. After that, and to this day, the castle has become one of the most popular tourist attractions in Scotland.",
      },
      {
        type: "P",
        ar: "وأدت الصخور السوداء المتداعية من صخرة القلعة ، التي ترتفع فوق الطرف الغربي من شارع الأمراء ، دورا رئيسا ومهما في الحفاظ على ادنبرة ، بل يعزو علماء التاريح اليها بأنها السبب في وجود ادنبرة حتى اليوم ، ويقال انها كانت مشرفة ومطلة بسهولة على طريق الغزو بين انجلترا ووسط اسكتلندا ، وهو طريق لطالما اعتمدته الجيوش التي لا تعد ولا تحصى من الجحافل الرومانية منذ القرنين الأول والثاني الميلاديين ، كطريق أساسي لها لمهاجمة القلعة",
        en: "The crumbling black rocks of Castle Rock, rising above the western end of Princes Street, played a major and important role in preserving Edinburgh — historians even credit them as the reason Edinburgh exists today. They are said to have looked out easily over the invasion route between England and central Scotland, a road long relied on by countless armies, from the Roman legions of the first and second centuries AD, as their main way of attacking the castle.",
      },
      {
        type: "P",
        ar: "وكان لهذه الاطلالة دور في اطلاق المدافع على تلك الجيوش وتفريق شملها ، اضافة الى تسخيرها لتكون خط الدفاع الأول والأقوى لادنبرة",
        en: "That vantage point made it possible to fire the cannon on those armies and scatter them, and it was harnessed as the first and strongest line of defence for Edinburgh.",
      },
      { type: "IMG", src: U("2022/09/img_2813.jpg"), cap_ar: "قلعة ادنبره كما تبدو بروعتها المعهوده", cap_en: "Edinburgh Castle in its familiar splendour" },
      { type: "H3", ar: "وصف قلعة ادنبره", en: "A description of Edinburgh Castle", noNumber: true },
      {
        type: "P",
        ar: "في جنوب جبل ميلز القريب تتعرج الطريق يمينا من خلال بوابة الى أعلى جزء من قلعة الصخرة ، حيث كنيسة سانت مارغريت ، أقدم مبنى موجود في ادنبرة ، ويقال انه ربما بنيت من قبل ديفيد الأول ، أو ألكسندر الأول في ذكرى أمهما الملكة مارغريت في عام 1130 تقريبا ، الى جانب المصلى يقف مونس ميج ، وهو عبارة عن بندقية حربية عملاقة تعود الى القرن الخامس عشر بنيت في مونس (تعرف الآن ببلجيكا) في عام 1449",
        en: "South of nearby Mills Mount the road winds right through a gate to the upper part of Castle Rock, where St Margaret's Chapel stands — the oldest surviving building in Edinburgh, said to have been built perhaps by David I or Alexander I in memory of their mother Queen Margaret around 1130. Beside the chapel stands Mons Meg, a giant siege gun from the fifteenth century built in Mons (now in Belgium) in 1449.",
      },
      {
        type: "P",
        ar: "هذا وتوجد المجموعة الرئيسية للمباني على قمة صخرة القلعة حول ميدان التاج ، التي يسيطر عليها ضريح النصب التذكاري للحرب الوطنية الأسكتلندية ، وفي مقابله توجد القاعة الكبرى التي بنيت لجيمس الرابع (1488-1513) كقاعة احتفالات ، واستخدمت كمكان للاجتماع للبرلمان الأسكتلندي حتى عام 1639 ، وتتمثل أبرز سماتها في السقف الأصلي للمطرقة الذي يعود الى القرن السادس عشر ، واستخدمت القاعة الكبرى تحت القلعة بشكل مختلف كمخازن ومخابز وأيضا كسجن ، وجرى تجديد هذه المخازن لتشبه سجون القرن الثامن عشر وأوائل القرن التاسع عشر ، حيث يمكن رؤية الجدران التي نحتها السجناء الفرنسيون والأمريكيون على الأبواب الخشبية القديمة",
        en: "The main group of buildings stands on the summit of the castle rock around Crown Square, dominated by the shrine of the Scottish National War Memorial; opposite it is the Great Hall built for James IV (1488–1513) as a hall of ceremony, used as the meeting place of the Scottish Parliament until 1639, its most striking feature the original sixteenth-century hammerbeam roof. The vaults beneath the castle were used variously as stores and bakehouses and also as a prison; these stores have been restored to resemble the prisons of the eighteenth and early nineteenth centuries, where you can see the walls carved by French and American prisoners on the old wooden doors.",
      },
      {
        type: "P",
        ar: "وعلى الجانب الشرقي من الساحة يوجد القصر الملكي الذي بني في القرنين الخامس عشر والسابع عشر ، حيث سلسلة من اللوحات التاريخية تؤدي الى تسليط الضوء على القلعة ، وفيها غرفة محكمة البناء تسمى بشرف أسكتلندا ، تحوي ما يعرف بمجوهرات التاج الأسكتلندية وبقايا التاج والجواهر ، وهذه الغرفة مقفلة وتحوي التاج الذهبي الذي صنع في عام 1540 من ذهب روبرت الاكليل بروس في القرن الـ 14 ، وبقي التاج وحيدا حتى عثر على السيف والصولجان بعد بحث الروائي السير والتر سكوت في 1818 ، حيث جرى الكشف عنهما وعرضهما مع التاج",
        en: "On the east side of the square stands the Royal Palace, built in the fifteenth and seventeenth centuries, where a series of historic rooms leads to the highlights of the castle, including the strongroom called the Honours of Scotland, holding what are known as the Scottish crown jewels and the remains of the crown and gems. This room is locked and contains the golden crown made in 1540 from the gold of Robert the Bruce's fourteenth-century coronet. The crown remained alone until the sword and sceptre were found after a search by the novelist Sir Walter Scott in 1818, when they were revealed and displayed with the crown.",
      },
      {
        type: "P",
        ar: "وجدير بالذكر أن القلعة تحوي العديد من المتاحف التاريخية ، يصحب الزائر اليها العديد من المرشدين السياحيين ، وفيها أجهزة الكترونية صوتية مبرمجة لثماني لغات ، وذلك لفهم ما يقوله المرشد عن تاريخ القلعة ومرافقها",
        en: "It is worth noting that the castle holds many historical museums, that visitors are accompanied by many guides, and that it has electronic audio devices programmed in eight languages so you can understand what the guide says about the history of the castle and its buildings.",
      },
      { type: "IMG", src: U("2022/09/img_2816.jpg"), cap_ar: "احد المعروضات الموجودة بكثرة داخل قلعة ادنبره", cap_en: "One of the many displays inside Edinburgh Castle" },
      { type: "H3", ar: "ساعات العمل واسعار تذاكر قلعة ادنبره", en: "Opening hours and ticket prices for Edinburgh Castle", noNumber: true },
      {
        type: "P",
        ar: "قلعة ادنبرة هى قلعة رائعة فى قلب ادنبرة عاصمة اسكتلندا وهى من اجمل واشهر القلاع الموجودة فى غرب اوروبا ، وتفتح القلعة ابوابها من الساعة التاسعة والنصف صباحا وحتى الخامسة مساء من كل يوم ، وتذكرة الدخول الخاصة بها تقدر بــ 17 جنيه استرلينى للكبار وعشرة جنيهات استرلينى للاطفال",
        en: "Edinburgh Castle is a magnificent fortress in the heart of Edinburgh, the capital of Scotland, and one of the loveliest and most famous castles in western Europe. It opens from half past nine in the morning until five in the afternoon every day, and the entry ticket is about 17 pounds sterling for adults and ten pounds sterling for children.",
      },
      {
        type: "P",
        ar: "قلعة ادنبرة تقع فى مكان مرتفع فى اسكتلندا ، لذا فهي تحتاج الى بعض المجهود للوصول لها ، ويرجى العلم انه لا يوجد مكان لركن السيارة اذا انتويت الصعود بالسيارة فالقلعة تقع على قمة جبل , وبالدخول يمكنك الحصول على جهاز اوديو مجانى يمكنك سماع تاريخ القلعة به حيث مزودا بثمانية لغات مختلفة تتيح لك التعرف اكثر على تاريخ القلعة",
        en: "The castle stands on high ground in Scotland, so it takes some effort to reach, and please note there is no parking if you intend to drive up, as the castle sits on the top of a hill. On entry you can get a free audio device on which you can hear the history of the castle, provided in eight different languages so you can learn more about its past.",
      },
      {
        type: "P",
        ar: "بالطبع تنتشر محلات الهدايا و التذكارات بالقرب من القلعة و ان كانت اسعارها اعلى نسبيا من الشراء من منتصف المدينة فى شارع برنسيس وايضا يوفر محلات بسيطة للاكل الخفيف والسريع بجوار القلعة",
        en: "Gift and souvenir shops are of course found near the castle, although their prices are relatively higher than buying in the middle of the city on Princes Street, and there are also simple outlets for light and fast food beside the castle.",
      },

    ],
  },

  {
    slug: "edinburgh-old-town",
    title_ar: "بلدة ادنبره القديمة .. وكفى بها فخامة",
    title_en: "Edinburgh Old Town — grandeur enough in itself",
    kicker_ar: "اسكتلندا",
    kicker_en: "Scotland",
    image: U("2022/09/img_2852-1.jpg"),
    blocks: [
      { type: "IMG", src: U("2022/09/img_2852-1.jpg"), cap_ar: "بلدة ادنبره القديمة", cap_en: "Edinburgh Old Town" },
      {
        type: "P",
        ar: "يزور البلدة القديمة عدد كبير من المحليين والسياح من جميع أنحاء العالم نظرا لاحتوائها على المباني الكلاسيكية التي تعود الى قرون مضت والأزقة الضيقة الخلابة ، وتعد هذه البلدة موطن لجواهر التاج في اسكتلندا ، ويمتد شارع رويال مايل من القلعة الى البرلمان الأسكتلندي وقصر هوليرود هاوس وهو شارع حاد تصطف عليه المطاعم والمقاهي التقليدية ، ومتاجر الهدايا التذكارية الرائعة ، والمتاحف الصغيرة ، والمعارض الفنية ، والمعالم التاريخية المميزة والاستثنائية وغيرها الكثير",
        en: "The Old Town is visited by great numbers of locals and tourists from all over the world thanks to its classical buildings dating back centuries and its picturesque narrow closes. This is the home of Scotland's crown jewels, and the Royal Mile runs from the castle to the Scottish Parliament and the Palace of Holyroodhouse — a steep street lined with traditional restaurants and cafés, wonderful souvenir shops, small museums, art galleries, exceptional historic landmarks and much more.",
      },
      {
        type: "P",
        ar: "تعتبر المدينة القديمة ادنبرة Old Town Edinburgh الأكثر زيارة وهي واحدة من أشهر المدن السياحية في العالم ، حيث أنها عاصمة اسكتلندا الرئيسية وثاني أكبر مدينة فيها وسابع مدينة على مستوى المملكة المتحدة في بريطانيا جمالا",
        en: "The Old Town of Edinburgh is the most visited part of the city and one of the most famous tourist places in the world, being the main capital of Scotland, its second largest city, and the seventh most beautiful city in the United Kingdom.",
      },
      {
        type: "P",
        ar: "مدينة ادنبرة تنقسم الى حديثة وقديمة ، والاحياء القديمة منها مليئة بالعديد من المباني القديمة التي تعد تراث تاريخي عظيم لا يقدر بثمن ، كما أنها مليئة بالآثار والمتاحف التي لا تعد ولا تحصى ، كما وحافظت مدينة ادنبرة القديمة على خطى العصور الوسطى وعلى العديد من المباني التاريخية الساحرة للأعين والتي تعود الى عصر الاصلاح",
        en: "Edinburgh is divided into a New Town and an Old Town, and the old quarters are full of ancient buildings that are a great historic heritage beyond price, as well as countless monuments and museums. The Old Town has preserved the pattern of the Middle Ages and many historic buildings that charm the eye, dating back to the age of the Reformation.",
      },
      { type: "IMG", src: U("2022/09/img_2828.jpg"), cap_ar: "البلدة القديمة بأدنبره", cap_en: "The Old Town of Edinburgh" },
      {
        type: "P",
        ar: "ومن بين المباني الهامة بالبلدة القديمة في ادنبره ، كاتدرائية القديس جايلز والتي يعود تاريخها الى العصور الوسطى وتعد تحفة معمارية قوطية لا مثيل لها تزين مدينة ادنبرة الساحرة ، وهي كنيسة أبرشية تابعة لكنيسة اسكتلندا شيدت في العشرينيات من القرن الحادي عشر ، وتشتهر بنوافذها الزجاجية الجميلة ، وبآلة الأرغن التي تم تركيبها في عام 1992 ، تقع هذه الكاتدرائية الرائعة في شارع رويال مايل التاريخي في منتصف الطريق بين قلعة ادنبرة وقصر هوليرود هاوس",
        en: "Among the important buildings of Edinburgh's Old Town is St Giles' Cathedral, whose history goes back to the Middle Ages and which is an unmatched Gothic architectural masterpiece adorning the charming city. It is a parish church of the Church of Scotland, built in the 1120s, and is famous for its beautiful stained-glass windows and for the organ installed in 1992. This splendid cathedral stands on the historic Royal Mile, halfway between Edinburgh Castle and the Palace of Holyroodhouse.",
      },
      ...[
        "2022/09/img_2831.jpg",
        "2022/09/img_2832.jpg",
        "2022/09/img_2839.jpg",
        "2022/09/img_2838.jpg",
        "2022/09/img_2837.jpg",
        "2022/09/img_2836.jpg",
        "2022/09/img_2835.jpg",
        "2022/09/img_2834.jpg",
        "2022/09/img_2833.jpg",
      ].map((n) => ({ type: "IMG" as const, src: U(n), cap_ar: "كاتدرائية القديس جايلز", cap_en: "St Giles' Cathedral" })),
      {
        type: "P",
        ar: "ومن الاماكن المهمة ايضا بالبلدة القديمة هي مكتبة اسكتلندا الوطنية والتي تعد متحفا راقيا يضم ما يقرب من 8000 قطعة ويغطي مجموعة واسعة من الموضوعات التي تمتد من عصر ما قبل التاريخ الى يومنا هذا ، يتم عرض المعروضات بترتيب زمني لذلك من السهل متابعة تطور العالم ، وتشمل الأقسام المختلفة للمتحف معارض الفن والتصميم ومعارض العالم الوطني والثقافات العالمية وقصة اسكتلندا ، وتعد المكتبة من أكبر المكتبات في المملكة وتدعم احتياجات البحث والتعلم لموظفي المتحف والزوار ومجتمع البحث الخارجي الأوسع",
        en: "Another important place in the Old Town is the National Library of Scotland, a refined museum holding nearly 8,000 objects and covering a wide range of subjects from prehistory to the present day. The displays are arranged chronologically, so it is easy to follow the development of the world. The museum's different sections include the art and design galleries, the natural world and world cultures galleries and the story of Scotland. The library is one of the largest in the kingdom and supports the research and learning needs of museum staff, visitors and the wider external research community.",
      },
      ...[
        "2022/09/img_2840.jpg",
        "2022/09/img_2841.jpg",
        "2022/09/img_2842.jpg",
        "2022/09/img_2843.jpg",
        "2022/09/img_2844.jpg",
        "2022/09/img_2845.jpg",
        "2022/09/img_2846.jpg",
        "2022/09/img_2847.jpg",
        "2022/09/img_2848.jpg",
      ].map((n) => ({ type: "IMG" as const, src: U(n), cap_ar: "مكتبة اسكتلندا الوطنية", cap_en: "The National Library of Scotland" })),
      {
        type: "P",
        ar: "متجر جبن .. وهو واحد من المتاجر المشهورة والواقعة في قلب مدينة ادنبرة وفي البلدة القديمة ، ويختص في بيع مجموعة كبيرة من الأجبان المحلة والاوروبية كالجبنة الزرقاء ، والجبنة السويسرية ، وجبن البارميزان ، والجبن الرومي ، وجبن التشيدر ، والجبن المحلى ، وجبنة الغودا ، والجبن الأسكتلندي المحلي ، وغيرها من الاجبان اللذيذة والفريدة من نوعها ، وسيساعدك البائعون على اختيار النوع الذي تريده ، ويمكنك تذوق اي نوع مع الانواع مع بسكويت الكراكرز المقرمش",
        en: "A cheese shop — one of the famous shops in the heart of Edinburgh's Old Town, specialising in a large range of local and European cheeses such as blue cheese, Swiss cheese, Parmesan, Roumy, Cheddar, sweetened cheese, Gouda, local Scottish cheese and other delicious and unique varieties. The sellers will help you choose the kind you want, and you can taste any of them with crisp crackers.",
      },
      ...[
        "2022/09/img_2849.jpg",
        "2022/09/img_2850.jpg",
        "2022/09/img_2851.jpg",
        "2022/09/img_2852.jpg",
        "2022/09/img_2853.jpg",
      ].map((n) => ({ type: "IMG" as const, src: U(n), cap_ar: "متجر الجبن بالبلدة القديمة", cap_en: "The cheese shop in the Old Town" })),
    ],
  },

  {
    slug: "holyroodhouse",
    title_ar: "قصر هولي رود هاوس .. قصر ملوك بريطانيا",
    title_en: "The Palace of Holyroodhouse — palace of Britain's monarchs",
    kicker_ar: "اسكتلندا",
    kicker_en: "Scotland",
    image: U("2022/09/img_2819.jpg"),
    blocks: [
      { type: "IMG", src: U("2022/09/img_2819.jpg"), cap_ar: "قصر هولي رود هاوس", cap_en: "The Palace of Holyroodhouse" },
      {
        type: "P",
        ar: "قصر هولي ‌ رود هاوس Holyroodhouse هو قصر من أهم القصور الملكية في اسكتلندا ، ويقع في الجزء الادنى من طريق رويال مايل ، الذي يمتد من قصر ادنبره كاسل والمبنى الحالي لقصر هولي رود هاوس ، من عمل المهندس المعماري السير دافيد بروس في القرن السابع عشر ، وقد اشترك كل من تشارلز الاول وتشارلز الثاني في العمل بكل ما في وسعهما ليكون قصر هولي ‌ رود هاوس قصرا ملكيا فخما",
        en: "The Palace of Holyroodhouse is one of the most important royal palaces in Scotland. It stands at the lower end of the Royal Mile, which runs from Edinburgh Castle, and the present building is the work of the architect Sir William Bruce in the seventeenth century. Both Charles I and Charles II did everything in their power to make Holyroodhouse a magnificent royal palace.",
      },
      {
        type: "P",
        ar: "وقد أمضت الملكة ماري ملكة اسكتلندا ست سنوات ملؤها التعاسة في قصر هوليرود ، وكانت ملكة على فرنسا ، ولكنها عادت الى اسكتلندا في عام 1561 بعد وفاة زوجها ، وفي هذا القصر جرت تلك المحاورات الشهيرة بنيها وبين جون نوكس عالم اللاهوت العنيف المتشدد ، ولكن ماري كانت من أنصار مذهب الكاثوليك الرومان ، وكان نوكس من البروتستانت ، ولم يتهيأ لأحدهما قط أن يقدر وجهة نظر الآخر ، وقد شهد القصر أيضا مصرع ريزيو سكرتير ماري الايطالي ، طعنا بالنخناجر بناء على أوامر دارنلي زوجها الثاني",
        en: "Mary, Queen of Scots spent six unhappy years at Holyrood. She had been queen of France, but returned to Scotland in 1561 after the death of her husband. It was in this palace that the famous disputations took place between her and John Knox, the fierce and uncompromising theologian; Mary was a Roman Catholic and Knox a Protestant, and neither was ever able to appreciate the other's point of view. The palace also witnessed the killing of Rizzio, Mary's Italian secretary, stabbed with daggers on the orders of Darnley, her second husband.",
      },
      {
        type: "P",
        ar: "وتقوم الى جوار القصر كنيسة هولي رود آبي التي لم يبق منها الى الآن سوى صحن الكنيسة ، وكان ديفيد الاول قد أنشأها في عام 1128 من أجل كهنة القديس اوجستين",
        en: "Beside the palace stands Holyrood Abbey, of which only the nave now survives. David I founded it in 1128 for the canons of St Augustine.",
      },
      { type: "IMG", src: U("2022/09/img_2822.jpg"), cap_ar: "غرفة الطعام بقصر هولي رود هاوس بادنبره", cap_en: "The dining room at the Palace of Holyroodhouse, Edinburgh" },
      {
        type: "P",
        ar: "يعتبر التصميم الداخلي والخارجي لقصر هولي رود هاوس من الطراز الأول في الديكور الباروكي ، ومن الطبيعي أن ترغب في معرفة ما يوجد داخل قصر هولي رود هاوس وهي كالتالي :",
        en: "The interior and exterior design of Holyroodhouse is of the first rank in Baroque decoration, and naturally you will want to know what lies inside the palace. Here it is:",
      },
      {
        type: "P",
        ar: "شقق ستيت .. تشتهر شقق State في Holyroodhouse بأعمال الجبس الجميلة على الأسقف والمنسوجات الفرنسية والفلمنكية المعلقة من الجدران",
        en: "The State Apartments — famous for the beautiful plasterwork on their ceilings and the French and Flemish tapestries hung on the walls.",
      },
      {
        type: "P",
        ar: "حجرة نوم الملك .. تم السماح بأهم الضيوف فقط في غرفة سرير الملك ، التي يسيطر عليها سرير الدولة ، كان السرير موجودا في الغرفة منذ عام 1684",
        en: "The King's Bedchamber — only the most important guests were allowed into the king's bedchamber, dominated by the state bed, which has stood in the room since 1684.",
      },
      {
        type: "P",
        ar: "في السبعينيات تم تجديد السرير ، ولا تزال المادة الأصلية موجودة على اللوح الأمامي والكورنيش والمظلة ، بعض الأشياء التي يجب البحث عنها في غرفة سرير الملك هي وعاء الخزف الصيني ( صنع بين 1680 و 1700) ، لوحة الرضع هرقل يخنق الثعابين ، والساعة الحالة للقرن السابع عشر",
        en: "In the 1970s the bed was restored, and the original material still survives on the headboard, cornice and canopy. Things to look out for in the king's bedchamber are the Chinese porcelain vase (made between 1680 and 1700), the painting of the infant Hercules strangling the serpents, and the seventeenth-century clock.",
      },
      {
        type: "P",
        ar: "غرفة طعام ملكية .. تستخدم غرفة الطعام هذه حتى اليوم عندما تزور صاحبة الجلالة وأفراد العائلة المالكة اسكتلندا ، حصل الملك جورج الخامس والملكة ماري على الميدالية الفضية على طاولة الطعام كهدية في عام 1935 ، ألهمت الأمثلة الاسكتلندية في أوائل القرن السابع عشر تصميمها",
        en: "The Royal Dining Room — still used today when Her Majesty and members of the royal family visit Scotland. King George V and Queen Mary received the silver medal on the dining table as a gift in 1935, and its design was inspired by early seventeenth-century Scottish examples.",
      },
      {
        type: "P",
        ar: "غرفة العرش .. تستخدم غرفة العرش في حفلات الاستقبال ومناسبات الولاية الأخرى التي يترأسها أفراد العائلة المالكة ، فلا تفوت فرصة مشاهدة العروسين اللذين كلفهما الملك جورج الخامس في هولي رود هاوس في عام 1911 ، عندما تزور الملكة اسكتلندا ، تستضيف الغداء في غرفة العرش لفرسان وسيدات وسام الشوك",
        en: "The Throne Room — used for receptions and other state occasions presided over by members of the royal family. Do not miss the thrones commissioned by King George V for Holyroodhouse in 1911. When the Queen visits Scotland she hosts a lunch in the Throne Room for the Knights and Ladies of the Order of the Thistle.",
      },
      { type: "IMG", src: U("2022/09/05ce5c47-4fb7-49d6-ab7a-a7069c77d1e6.jpg"), cap_ar: "صورة من امام قصر هولي رود هاوس باسكتلندا", cap_en: "A view from in front of the Palace of Holyroodhouse, Scotland" },
      {
        type: "P",
        ar: "غرفة خاصة .. الغرفة الخاصة هي غرفة مصممة في القرن السابع عشر وما زالت تستخدم من قبل الملكة للجمهور الخاص عند زيارتها ، لا يستطيع الزوار تفويت علامة الهولندي يان فان سانتفورت على المنحوتات المعقدة في جميع أنحاء الغرفة",
        en: "The Privy Chamber — a room designed in the seventeenth century and still used by the Queen for private audiences during her visits. Visitors cannot miss the mark of the Dutchman Jan van Santvoort on the intricate carvings all around the room.",
      },
      {
        type: "P",
        ar: "لا تفوت فرصة مشاهدة اللوحة مشهد الاستحمام بجانب النهر والمنسوجات الفرنسية التي تحكي قصة ديانا الهة الصيد ، يبلغ عمر المفروشات أكثر من 350 عاما – تم شراؤها لتشارلز الثاني عام 1668 وتم تعليقها في غرفة الملكة منذ عام 1796",
        en: "Do not miss the painting of a bathing scene beside the river and the French tapestries telling the story of Diana, goddess of the hunt. The hangings are more than 350 years old — bought for Charles II in 1668 and hung in the Queen's room since 1796.",
      },
      {
        type: "P",
        ar: "ماري ملكة الغرف الاسكتلندية .. على الرغم من أنها عاشت هنا لفترة وجيزة (1561-1567) ، فإن ماري ملكة اسكتلندا في قصر هوليرود هي أشهر شخصية مرتبطة بالقصر ، كان وقتها القصر مليئا بالمكائد والمآسي والقتل ، ويمكنك أن تشعر بكل ذلك عندما تصل الى قسم قلعة هولي رود هوس ، حيث كانت تعيش عبر الدرج الضيق والمنحدر والمتعرج",
        en: "Mary, Queen of Scots' Chambers — although she lived here only briefly (1561–1567), Mary, Queen of Scots is the most famous figure connected with Holyrood. In her day the palace was full of intrigue, tragedy and murder, and you can feel all of it when you reach her part of the palace, where she lived up a narrow, steep and winding stair.",
      },
      {
        type: "P",
        ar: "حجرة النوم .. ربما تكون غرفة نوم ماري ، ملكة الاسكتلنديين هي الغرفة الأكثر شهرة في اسكتلندا ، احترس من المدخل المنخفض لغرفة النوم عند دخولك ، انه نوع من المضحك لأن ماري كانت بطول ستة أقدام ، فلا لا تفوت فرصة زيارة سقف البلوط المزخرف والافريز المطلي",
        en: "The Bedchamber — Mary, Queen of Scots' bedroom is perhaps the most famous room in Scotland. Mind the low doorway as you enter; it is rather funny, since Mary was six feet tall. Do not miss the decorated oak ceiling and the painted frieze.",
      },
      {
        type: "P",
        ar: "غرفة العشاء .. كانت غرفة العشاء في هوليرود هاوس شاهدا على القتل المروع للسكرتير الخاص للملكة ماري ، في 9 مارس 1566 ، عندما كانت ماري تتناول العشاء مع عدد قليل من صديقاتها وسكرتيرها ديفيد ريزيو ، دخل زوجها الغيور اللورد دارنلي مع مجموعة من اللوردات الاسكتلنديين",
        en: "The Supper Room — the supper room at Holyroodhouse witnessed the horrifying murder of Queen Mary's private secretary. On 9 March 1566, while Mary was dining with a few of her friends and her secretary David Rizzio, her jealous husband Lord Darnley entered with a group of Scottish lords.",
      },
      {
        type: "P",
        ar: "أمام الملكة التي كانت حامل في شهرها السادس ، طعنت سكرتيرتها 56 طعنة وقتلت ، فأثناء زيارتك ، يمكنك محاولة اكتشاف بقع الدم من جسد Rizzio في الغرفة الخارجية",
        en: "In front of the queen, who was six months pregnant, her secretary was stabbed 56 times and killed. During your visit you can try to spot the bloodstains from Rizzio's body in the outer chamber.",
      },
      {
        type: "P",
        ar: "الغرفة الخارجية .. استقبلت الملكة ماري الضيوف في الغرفة الخارجية ، في هذه الغرفة ، انخرطت الملكة الرومانية الكاثوليكية في العديد من المناقشات مع جون نوكس ، رجل الدين البروتستانتي الاسكتلندي ، تحقق من خطبها المكسو بألواح البلوط ، وصليب القديس أندرو في السقف ، وجوهرة دارنلي",
        en: "The Outer Chamber — Queen Mary received guests here. In this room the Roman Catholic queen engaged in many debates with John Knox, the Scottish Protestant churchman. Look at her oak-panelled closet, the cross of St Andrew in the ceiling and the Darnley Jewel.",
      },
      {
        type: "P",
        ar: "بوني الأمير تشارلي .. كان اسم بوني برينس تشارلي الحقيقي الأمير تشارلز ادوارد ستيوارت ، مكث في قصر هوليرود هاوس لمدة ستة أسابيع عام 1745 ، جاء تشارلز الى اسكتلندا لاستعادة عرش بريطانيا العظمى لوالده ، جيمس فرانسيس ادوارد ستيوارت ، الذي كان في المنفى ، رحب به السكان المحليون بأذرع مفتوحة ، وأثناء اقامته في القصر ، سمح للجمهور بمشاهدته حتى أثناء تناول العشاء في غرفة الانتظار",
        en: "Bonnie Prince Charlie — his real name was Prince Charles Edward Stuart, and he stayed at Holyroodhouse for six weeks in 1745. Charles came to Scotland to recover the throne of Great Britain for his father, James Francis Edward Stuart, who was in exile. The locals welcomed him with open arms, and during his stay at the palace the public was allowed to see him, even while he dined in the waiting room.",
      },
      {
        type: "P",
        ar: "معرض كبير .. يبلغ طول معرض Great Gallery 44 مترا (144 قدما ) ، مما يجعله أكبر غرفة في قصر هوليرود هاوس ، يعرض لوحات لـ 95 ملوكا وملكة واحدة ، تصور الصور الخط الطويل لسلالة ستيوارت ، بدء من فيرغوس الأول ، مؤسس اسكتلندا",
        en: "The Great Gallery — 44 metres (144 feet) long, making it the largest room in Holyroodhouse. It displays portraits of 95 kings and one queen, depicting the long line of the Stuart dynasty beginning with Fergus I, the founder of Scotland.",
      },
      {
        type: "P",
        ar: "ماري ملكة اسكتلندا ، هي الملكة الوحيدة التي تزين جدران المعرض الكبير ، في الوقت الحاضر تستخدم الملكة البريطانية المعرض الكبير لاستضافة الولائم الرسمية ، ووجبات العشاء ، وحفلات الاستقبال خلال زيارتها الى اسكتلندا",
        en: "Mary, Queen of Scots is the only queen adorning the walls of the Great Gallery. Today the British monarch uses the Great Gallery to host official banquets, dinners and receptions during visits to Scotland.",
      },
      { type: "IMG", src: U("2022/09/img_2821.jpg"), cap_ar: "جانب من معروضات قصر هولي رود هاوس بادنبره", cap_en: "Part of the displays at the Palace of Holyroodhouse, Edinburgh" },
      { type: "IMG", src: U("2022/09/img_2824.jpg"), cap_ar: "تمثال ادوارد السابع بقصر هولي رود هاوس بادنبره", cap_en: "The statue of Edward VII at the Palace of Holyroodhouse, Edinburgh" },
      { type: "H3", ar: "اوقات عمل قصر هولي رود هاوس بادنبره", en: "Opening times of the Palace of Holyroodhouse, Edinburgh", noNumber: true },
      {
        type: "P",
        ar: "خلال أشهر الذروة (من 1 أبريل الى 31 أكتوبر) ، يفتح قصر هولي رود هاوس من الساعة 09:30 صباحا وحتى الساعة 04:30 مساء ، وفي بقية الأشهر (من 1 نوفمبر الى 31 مارس) ، من الساعة 09:30 صباحا وحتى الساعة 03:15 مساء نظرا لأن Holyroodhouse هو قصر ملكي ، يتم الاعلان عن الاغلاق في بعض الأحيان في وقت قصير ، كما ان القصر يكون مغلق أمام الزوار خلال عيد الميلاد وعندما يزور الملك اسكتلندا",
        en: "During the peak months (1 April to 31 October) Holyroodhouse opens from 09:30 in the morning until 04:30 in the afternoon, and in the remaining months (1 November to 31 March) from 09:30 until 03:15. Since Holyroodhouse is a royal palace, closures are sometimes announced at short notice, and the palace is closed to visitors over Christmas and when the monarch visits Scotland.",
      },
      { type: "IMG", src: U("2022/09/img_2823.jpg"), cap_ar: "نافورة قصر هولي رود هاوس بادنبره", cap_en: "The fountain at the Palace of Holyroodhouse, Edinburgh" },
      { type: "H3", ar: "افضل الانشطة التي يمكن القيام فيها بقصر هولي رود هاوس بادنبره", en: "The best things to do at the Palace of Holyroodhouse, Edinburgh", noNumber: true },
      {
        type: "P",
        ar: "تجول في صحن الكنيسة الذي لا سقف له تحقق من مدخل الموكب الشرقي ، الجزء الوحيد الذي بنيته ديفيد في عام 1128 والذي لا يزال على قيد الحياة اقض بعض الوقت في النظر إلى الواجهة الغربية ، التي تتميز بواجهات ونوافذ قوطية شاهد القبو الملكي والذي يعد المثوى للعديد من العظماء الاسكتلنديين",
        en: "Wander through the roofless nave of the abbey; look at the eastern processional doorway, the only part of David's building of 1128 still surviving; spend some time looking at the west front with its Gothic facades and windows; and see the royal vault, the resting place of many great Scots.",
      },
      { type: "IMG", src: U("2022/09/img_2820.jpg"), cap_ar: "قصر هولي رود هاوس من الداخل", cap_en: "Inside the Palace of Holyroodhouse" },
      { type: "H3", ar: "اسعار تذاكر قصر هولي رود هاوس بادنبره", en: "Ticket prices for the Palace of Holyroodhouse, Edinburgh", noNumber: true },
      {
        type: "P",
        ar: "سعر تذكرة الدخول للبالغين 16:50 جنيه استرليني ، ولكبار السن والطلاب 14:90 جنيه استرليني ، وللاطفال 9:50 جنيه استرليني",
        en: "The entry ticket costs 16.50 pounds sterling for adults, 14.90 pounds for seniors and students, and 9.50 pounds for children.",
      },
    ],
  },

  {
    slug: "forth-bridge",
    title_ar: "جسر فيرث أوف فورث بأدنبره",
    title_en: "The Forth Bridge at Edinburgh",
    kicker_ar: "جسور ذات طابع خاص",
    kicker_en: "Bridges with character",
    image: U("2022/02/img_2696.jpg"),
    blocks: [
      {
        type: "P",
        ar: "جسر فيرث أوف فورث في اسكتلندا هو معلم اسكتلندي شهير ، وهو الجسر الرابع الناتئ للسكك الحديدية في شرق اسكتلندا ، والذي يمتد الى الغرب من مدينة ادنبره ، يعد هذا الجسر هو الهيكل المميز والرائع ، كما انه رمز الإبداع من اسكتلندا ، وهو ضمن مواقع التراث العالمي لليونسكو ، وقد صمم من قبل كلا المهندسين الإنجليزيين السير جون فاولر والسير بنيامين بيكر",
        en: "The Forth Bridge in Scotland is a famous Scottish landmark — the fourth cantilever railway bridge in eastern Scotland, extending west of the city of Edinburgh. This bridge is a remarkable, distinctive structure and a symbol of Scottish ingenuity, and it is a UNESCO World Heritage Site. It was designed by the two English engineers Sir John Fowler and Sir Benjamin Baker.",
      },
      { type: "IMG", src: U("2022/02/img_2696.jpg"), cap_ar: "جسر فيرث أوف فورث", cap_en: "The Forth Bridge" },
      {
        type: "P",
        ar: "بدأ بناء الجسر في عام 1882 م وتم افتتاحه في يوم 4 مارس 1890 م ، من قبل الأمير ويلز ، يمتد الجسر الرابع بين قريتي كوينسفيري الجنوبية والشمالية ويبلغ طوله لنحو 8094 قدم (2467 م ) ، وكان هذا الجسر هو أطول جسر ناتئ ، وواحدة من أطول الجسور القوسية في العالم حتى عام 1917 م ، وذلك حتى تم الانتهاء من بناء جسر كيبيك في كندا ، وهو لا يزال ثاني أطول جسر ناتئ في العالم ، وتعود ملكية الجسر والبنية التحتية للسكك الحديدية المرتبطة بها من البنية التحتية لشبكة السكك الحديدية المحدودة",
        en: "Construction of the bridge began in 1882 and it was opened on 4 March 1890 by the Prince of Wales. The bridge runs between the villages of South and North Queensferry and is about 8,094 feet (2,467 m) long. It was the longest cantilever bridge and one of the longest span bridges in the world until 1917, when the Quebec Bridge in Canada was completed, and it is still the second longest cantilever bridge in the world. The bridge and its associated railway infrastructure are owned by Network Rail Infrastructure Limited.",
      },
      { type: "IMG", src: U("2022/02/img_2697.jpg"), cap_ar: "جسر فيرث أوف فورث", cap_en: "The Forth Bridge" },
      {
        type: "P",
        ar: "ويشار الى جسر فيرث أوف فورث أحيانا باسم جسر السكك الحديدية الرابع ، وذلك لتمييزه عن جسر الطريق الرابع ، رغم أن هذا الإسم للجسر ليس الاسم الرسمي ، هذا جسر السكك الحديدية الذي يعبر مصب نهر فورث في اسكتلندا ، والذي كان أطول جسور العالم ، عندما افتتح في عام 1890 م ، لا يزال جسر فيرث أوف فورث واحدا من أعظم الجسور المميزة لنقل الركاب والبضائع ، هناك الإطلالة الجمالية الصناعية المميزة للعرض الصريح والغير مزين من المكونات الهيكلية ، الابتكار في الاسلوب والمواد والحجم ، لجسر فورث يجعله معلما هاما في تصميم الجسر والبناء خلال الفترة التي استخدمت فيها السكك الحديدية للسيطرة على مسافات طويلة للسفر برا",
        en: "The Forth Bridge is sometimes called the Forth Railway Bridge to distinguish it from the Forth Road Bridge, although that is not its official name. This is the railway bridge crossing the Firth of Forth in Scotland, which was the longest bridge in the world when it opened in 1890. It remains one of the great distinctive bridges for carrying passengers and goods. There is a distinctive industrial aesthetic in the frank, unadorned display of its structural components; the innovation in style, materials and scale makes the Forth Bridge an important landmark in bridge design and construction during the period when railways dominated long-distance land travel.",
      },
      {
        type: "P",
        ar: "جسر فيرث أوف فورث هو علامة فارقة في تطور الهندسة المدنية للسكك الحديدية ، وكان هو أول هيكل كبير في بريطانيا مصنوع من الصلب ، وتميز بنائه بتغيير مسار السكك الحديدية في الساحل الشرقي الممتد من لندن الى أبردين ، وجاء هذا الجسر كمعبرا من السكك الحديدية في عام 1850 م ، وذلك عندما بدأ في أدنبره",
        en: "The Forth Bridge is a milestone in the development of railway civil engineering, and it was the first major structure in Britain made of steel. Its construction changed the route of the East Coast railway running from London to Aberdeen; the crossing had been served by railway ferry from 1850, when work began at Edinburgh.",
      },
      {
        type: "P",
        ar: "وكان جسر فيرث أوف فورث هو الجسر الذي أشتهر أيضا باسم الجسر الرابع ، والذي أمتد على مصب نهر ( فيرث ) من نهر فورث في شرق اسكتلندا لربطه مع ادنبره عن طريق خطوط السكك الحديدية ، افتتح جسر فيرث أوف فورث في عام 1890 م ، وبدأ العمل عليه باعتباره جسر الركاب والبضائع الهام بالسكك الحديدية",
        en: "The Forth Bridge also became famous simply as the Forth Bridge, spanning the firth of the river Forth in eastern Scotland to link it with Edinburgh by railway lines. It opened in 1890 and went into service as an important railway bridge for passengers and goods.",
      },
      { type: "IMG", src: U("2022/02/img_2698-1.jpg"), cap_ar: "جسر فيرث أوف فورث", cap_en: "The Forth Bridge" },
      {
        type: "P",
        ar: "هذا الهيكل الضخم له إطلالة جمالية صناعية متميزة باللون الأحمر الصارخ ، فقد صمم وبني بإستخدام مبادئ التصميم الهندسية المدنية المتطورة مع أساليب البناء المبتكرة في التصميم ، والمواد ، والحجم",
        en: "This huge structure has a distinctive industrial aesthetic in its striking red colour. It was designed and built using advanced principles of civil engineering design together with innovative construction methods in design, materials and scale.",
      },
      {
        type: "P",
        ar: "جسر الرابع هو تحفة عبقرية خلاقة بسبب جماله الصناعي المتميز ، وهو نتيجة مميزة للعرض المزين الصريح من عناصره الضخمة الوظيفية الهيكلية ، ظهور هذا العمل الهندسي على نطاق واسع هو نتيجة طبيعية ، حيث يتألف من حوالي 54000 طن من لوحة فولاذ ، ونصب الأنابيب بقطر 4 م وهي الأنابيب المستخدمة في الضغط ، ويرجع استخدام الفولاذ ، كمادة جديدة نسبيا في عام 1880 م على مثل هذا المشروع الممتد على نطاق واسع مبتكر ، والذي ساعد على تعزيز شهرة ذلك الجسر ، البنية الفوقية للجسر تأخذ شكل ثلاثة أبراج مزدوجة بإرتفاع 110 متر فوق أساساتها",
        en: "The Forth Bridge is a masterpiece of creative genius because of its distinctive industrial beauty, the remarkable result of the frank display of its massive functional structural elements. The vast scale of this engineering work is a natural outcome: it is made up of about 54,000 tons of steel plate, with tubes 4 m in diameter used in compression. The use of steel as a relatively new material in 1880 on such a large-scale project was innovative and helped build the bridge's fame. Its superstructure takes the form of three double towers rising 110 metres above their foundations.",
      },
    ],
  },
];

export const scotlandGuidesAll: Guide[] = [...scotlandGuides, ...scotlandLandmarkGuides];
