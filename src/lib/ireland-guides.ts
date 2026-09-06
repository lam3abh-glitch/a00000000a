import type { Guide } from "./france-guides";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

export const irelandGuides: Guide[] = [
  {
    slug: "food",
    title_ar: "أكلات واطباق ايرلندية",
    title_en: "Irish foods and dishes",
    kicker_ar: "مطبخ",
    kicker_en: "Cuisine",
    image: U("2022/02/img_2741-2.jpg"),
    blocks: [
      {
        type: "P",
        ar: "منذ بداية التاريخ عرف الايرلنديون بأكلهم للبطاطس والالبان ، والبطاطس كانت من اسس الوجبات البارزة داخل النظام الغذائي الايرلندي حتى ان الأمر قد وصل بمنتصف الجزء الأول من القرن الثامن عشر ، كانت البطاطس هي المصدر الرئيسي للطعام وللطاقة للشعب الايرلندي ، لكن سرعان ما تغير هذا الأمر ، حاليا اتجه الطعام للتنوع والوصفات المختلفة ، يتناول الايرلنديون نظاما غذائيا يوجد به الجمبري وسمك السلمون ويخني الخضروات وخبز الصودا وأنواع الجبن وايضا اللحوم المشوية ، كما يوجد بعض الأطباق التقليدية والشعبية مثل اصناف في وجبة الافطار الايرلندية واليخني والحساء الايرلندي",
        en: "Since the beginning of history the Irish have been known for eating potatoes and dairy, and the potato was one of the pillars of the Irish diet — so much so that by the middle of the first half of the eighteenth century it was the main source of food and energy for the Irish people. That soon changed. Today the food has turned towards variety and different recipes: the Irish eat a diet that includes prawns and salmon, vegetable stews, soda bread, cheeses and grilled meats, along with traditional and popular dishes such as the items of the Irish breakfast, the stews and Irish soups.",
      },
      { type: "H3", ar: "Savory Pie", en: "Savoury pie" },
      {
        type: "P",
        ar: "هي عبارة عن فطيرة باللحم البقري وأعشاب جينيس ، يتم طبخ كل من اللحم مع الأعشاب ، ومن ثم تفرد طبقة بالقاعدة ويسكب عليها الخليط وتغطى أيضا بطبقة من العجين ، يتم خبز الفطيرة بالفرن ليكون اللون الذهبي ، وهي من الأكلات الخريفية الدافئة ، كما يضاف بعض الأوقات للخليط مسحوق الخردل والزيت والبصل مع قطع الكرفس مع الجزر وعشب جينيس ومرق اللحم وبه أوراق الغار مع البقدونس عليها رشة الزعتر",
        en: "A pie of beef and Guinness-scented herbs. The meat is cooked with the herbs, then a layer of pastry is rolled out for the base, the mixture is poured in and it is covered with another layer of dough. The pie is baked in the oven until golden — a warm autumn dish. Sometimes mustard powder, oil and onion are added to the mixture along with pieces of celery and carrot, Guinness, meat stock, bay leaves and parsley, with a sprinkle of thyme.",
      },
      { type: "IMG", src: U("2022/02/img_2741-2.jpg"), cap_ar: "Savory Pie", cap_en: "Savoury pie", size: "compact" },
      { type: "H3", ar: "Boxty", en: "Boxty" },
      {
        type: "P",
        ar: "وهي عبارة عن فطيرة مصنعة من بطاطس وهو طبق بسيط ومشهور في منطقة ميدلاندز بالشمال ، وبالأخص مقاطعة ليتريم ، يتم بشر البطاطس بشكل جيد ، وتخلط مع الحليب الرائب والطحين ومع البيض ، ثم يعد المزيج مثل أي فطيرة عادية ويتكون من الخضروات الطازجة",
        en: "A pancake made from potato — a simple dish, famous in the northern Midlands and especially County Leitrim. The potatoes are grated finely and mixed with buttermilk, flour and eggs, then the mixture is cooked like any ordinary pancake, together with fresh vegetables.",
      },
      { type: "IMG", src: U("2022/02/img_2742.jpg"), cap_ar: "Boxty", cap_en: "Boxty", size: "compact" },
      { type: "H3", ar: "The Irish breakfast roll", en: "The Irish breakfast roll" },
      {
        type: "P",
        ar: "وهي من أنواع الإفطار الايرلندية المكونة من شطيرة غنية بالمكونات المفيدة ويتم لفها داخل الخبز مع الكثير من المكونات التي يحتويها الإفطار الايرلندي المشهور والتقليدي ، وهي التي تشتمل على اللحم المقدد والفطر وبعض النقانق مع الصلصة البنية ، وهي التي تتوفر في السوبر ماركت او محلات البقالة وهذه الشطائر الأكثر اشباعا وشهرة في ايرلندا",
        en: "One of the Irish breakfast options: a sandwich rich in wholesome ingredients, rolled inside bread with much of what the famous traditional Irish breakfast contains — bacon, mushrooms and some sausages with brown sauce. It is sold in supermarkets and grocery shops, and these rolls are the most filling and best known in Ireland.",
      },
      { type: "IMG", src: U("2022/02/img_2743.jpg"), cap_ar: "The Irish breakfast roll", cap_en: "The Irish breakfast roll", size: "compact" },
      { type: "H3", ar: "Bacon and Cabbage", en: "Bacon and cabbage" },
      {
        type: "P",
        ar: "يعتبر اللحم المقدد والملفوف من أشهر الأطباق الايرلندية وهو صنف تقليدي يعد خلال موسم عيد القديس باتريك ، وهي وصفة سريعة وسهلة الاعداد ، ومن أهم مكونات الوصفة الملفوف ، وبعض من البطاطس مع البصل وقطع الجزر مع اللفت ، في الأغلب ما يكون الطبق معه الصلصة البيضاء وهي التي تشتمل على الزبدة مع كمية من الدقيق والحليب والأعشاب الطازجة كالبقدونس",
        en: "Bacon and cabbage is one of the most famous Irish dishes, a traditional item prepared around the season of St Patrick's Day, and a quick, easy recipe. Its key ingredients are cabbage, some potatoes with onion, and pieces of carrot with turnip. The dish is most often served with a white sauce made of butter with a quantity of flour, milk and fresh herbs such as parsley.",
      },
      { type: "IMG", src: U("2022/02/img_2744.jpg"), cap_ar: "Bacon and Cabbage", cap_en: "Bacon and cabbage", size: "compact" },
      { type: "H3", ar: "Colcannon", en: "Colcannon" },
      {
        type: "P",
        ar: "من أطباق أيرلندا التقليدية ويعد من خلال فرم البطاطس المسلوقة ودمجها مع اللفت أو الملفوف ، ويظهر في شكل خليط كريمي ومع وضع الحليب والزبدة أو الكريمة الطازجة ، يرش بعض من الملح والفلفل ولا يضاف أي توابل أخرى ، وفي أغلب الأوقات يحتوي الكولكانون على مكونات أخرى مثل الثوم المعمر مع البصل الأخضر وقطع الكراث ، كما ان هناك الكثيرون يحبون إضافة اللحم المقدد وهذه من التقاليد الايرلندية ، في العادة يتم تقديم الطبق مثل وجبة فردية أو طبق جانبي مع اللحوم ، ويضاف له مكعب من الزبد بالمنتصف",
        en: "One of Ireland's traditional dishes, made by mashing boiled potatoes and folding through turnip or cabbage. It appears as a creamy mixture with milk and butter or fresh cream, sprinkled with a little salt and pepper and no other spices. Most often colcannon contains other ingredients such as chives, spring onion and pieces of leek, and many people like to add bacon — an Irish tradition. It is usually served as a meal in itself or as a side with meats, with a cube of butter set in the middle.",
      },
      { type: "IMG", src: U("2022/02/img_2745.jpg"), cap_ar: "Colcannon", cap_en: "Colcannon", size: "compact" },
      { type: "H3", ar: "خبز الصودا", en: "Soda bread" },
      {
        type: "P",
        ar: "يعتبر الخبز بالصودا من الأصناف الأمريكية المشهورة والتي بدأت بالظهور في ايرلندا ، وفي حتى القرن التاسع عشر لم يعرف الخبز بالصودا في ايرلندا ، وقد ظهر بسبب مجاعة البطاطس ، بالإضافة الى ان عوامل الطقس والموقع الجغرافي في ايرلندا ، والتي أتاحت إنتاج القمح الطري الذي يشتمل على معدل قليل من البروتين ، ومن هنا أتجه الايرلنديون الى عمل خبز الصودا كمصدر أساسي للغذاء ، وأهم مكونات خبز الصودا الدقيق والملح وصودا الخبز مع اللبن ، وهناك البعض يقوم بإضافة قليل من زيت الزيتون مع البيض ، لا يحتاج هذا الخبز لكثير من العجن ، ثم تشكل العجين اما على شكل رغيف مستدير ، أو يتم فردها وتقسيمها الى أربع قطع ، والتي تسمى بـ Farls",
        en: "Soda bread is one of the famous American breads that began to appear in Ireland. Until the nineteenth century soda bread was unknown there; it emerged because of the potato famine, and because Ireland's weather and geography allowed the growing of soft wheat low in protein. From here the Irish turned to making soda bread as a staple source of food. Its main ingredients are flour, salt and bicarbonate of soda with buttermilk, and some people add a little olive oil with egg. The bread needs little kneading, then the dough is shaped either into a round loaf or flattened and divided into four pieces called farls.",
      },
      { type: "IMG", src: U("2022/02/img_2746.jpg"), cap_ar: "خبز الصودا", cap_en: "Soda bread", size: "compact" },
      { type: "H3", ar: "Beef and Guinness Stew", en: "Beef and Guinness stew" },
      {
        type: "P",
        ar: "مكونات هذا الحساء الايرلندي المشهور والتقليدي من مكعبات من اللحم البقري مع البصل واللحم المقدد ومعجون الطماطم ذات النكهة القوية مع أنواع خضروات كالجزر والبطاطس والكرفس ، ويتم تقوية مذاق الحساء بأوراق الغار والزعتر والملح والثوم مع الفلفل الاسود ، ثم يوضع الدقيق لتكثيف المزيج ، ويتم طهي الطبق ببطء شديد على نار هادئة حتى تختلط كل النكهات بشكل جيد ، يمكن تقديم يخنة اللحم البقري مع المرق وشرائح خبز الصودا الايرلندي بجانب الوصفة ، وهو من الأطباق الشتوية الشهية",
        en: "This famous traditional Irish stew is made of cubes of beef with onion, bacon and strongly flavoured tomato paste, along with vegetables such as carrot, potato and celery. The taste is deepened with bay leaves, thyme, salt and garlic with black pepper, then flour is added to thicken the mixture, and the dish is cooked very slowly over a gentle heat until all the flavours blend well. The beef stew can be served with its gravy and slices of Irish soda bread alongside — a delicious winter dish.",
      },
      { type: "IMG", src: U("2022/02/img_2747.jpg"), cap_ar: "Beef and Guinness Stew", cap_en: "Beef and Guinness stew", size: "compact" },
      { type: "H3", ar: "White pudding", en: "White pudding" },
      {
        type: "P",
        ar: "وهو من الأطباق الايرلندية التقليدية ومكوناته هي دقيق الشوفان والخبز ولحم وبعض من الشحم ، في ايرلندا يتم وضع كل المكونات في غلاف مثل النقانق ، ولكن في اسكتلندا ليس هذا هو الحال فأغلب الدول ، ويتم اضافة مذاق البودنج بالبصل مع التوابل ، وفي أغلب الوقت يتم تقطيع النقانق لشرائح ويتم قليها أو شويها ، وفي العادة يتم تقديم هذا الصنف في الأفطار الأيرلندي",
        en: "One of the traditional Irish dishes, made of oatmeal, bread, meat and some fat. In Ireland all the ingredients are put into a casing like a sausage, though in Scotland — as in most countries — that is not the case. The pudding is flavoured with onion and spices, and most of the time the sausage is cut into slices and fried or grilled. It is usually served as part of the Irish breakfast.",
      },
      { type: "IMG", src: U("2022/02/img_2748.jpg"), cap_ar: "White pudding", cap_en: "White pudding", size: "compact" },
      { type: "H3", ar: "كودل", en: "Coddle" },
      {
        type: "P",
        ar: "الكودل هو طبق من يخني توضع كل مكوناته من أناء واحد يعد من بواقي طعام كان مطبوخا مسبقا ، مثل باقي النقانق ولحم المقدد مع البطاطس والبصل ، ويتم وضع كل المكونات لساعات طويلة حتى يمتزج الطبق سويا ، ويعتبر هذا الطبق مفضلا في مدينة دبلن",
        en: "Coddle is a stew whose ingredients all go into one pot, made from leftovers of food already cooked — such as remaining sausages and bacon with potatoes and onion. Everything is left for long hours until the dish blends together, and it is a favourite in the city of Dublin.",
      },
      { type: "IMG", src: U("2022/02/img_2749.jpg"), cap_ar: "كودل", cap_en: "Coddle", size: "compact" },
      { type: "H3", ar: "Barmbrack", en: "Barmbrack" },
      {
        type: "P",
        ar: "عادة ما يتم تسميته ايضا brack ، هي عبارة عن كعكة فواكه ايرلندية غنية بالزبيب ومع الفواكه المجففة ولها مذاق مميز ، وهذه الكعكة في الغالب يتم تناولها مع الشاي أو العصائر ، مما يصنفها كوجبة خفيفة شهية وبالأخص مع شاي في فترة الظهيرة ، كما يعد هذه الكعكات خلال عيد الهالوين",
        en: "Often also called brack, this is an Irish fruit cake rich in raisins and dried fruit with a distinctive taste. The cake is mostly eaten with tea or juices, which makes it a delicious snack, especially with afternoon tea, and it is also prepared at Halloween.",
      },
      { type: "IMG", src: U("2022/02/img_2750.jpg"), cap_ar: "Barmbrack", cap_en: "Barmbrack", size: "compact" },
      { type: "H3", ar: "Champ", en: "Champ" },
      {
        type: "P",
        ar: "مكونات Champ تشتمل على البطاطس المهروسة ، انها تعد من البطاطس مع الحليب والزبدة وبعض من البصل الأخضر ، ما يجعلها أشهى من البطاطس المهروسة بالطريقة الطبيعية بسبب اضافة الزبدة المذابة في وسط البطاطس",
        en: "Champ is made of mashed potato — potatoes with milk, butter and some spring onion — which makes it tastier than ordinary mash thanks to the melted butter set in the middle of the potato.",
      },
      { type: "IMG", src: U("2022/02/img_2751.jpg"), cap_ar: "Champ", cap_en: "Champ", size: "compact" },
      { type: "H3", ar: "Shepherd’s pie", en: "Shepherd’s pie" },
      {
        type: "P",
        ar: "انتشر هذا الطبق في أمريكا ، وهو في العادة يتم تصنيعه من خلال بواقي الطعام في البيت ، تعد فطيرة الراعي من اللحم الضأن ، وفي بعض المرات يمكن اضافة اللحم المفروم ، وتستخدم هذه الوصفة كثيرا بأمريكا وأوروبا",
        en: "This dish spread in America and is usually made from leftovers at home. Shepherd's pie is prepared with lamb, and sometimes minced meat can be added; the recipe is used a great deal in America and Europe.",
      },
      { type: "IMG", src: U("2022/02/img_2752.jpg"), cap_ar: "Shepherd’s pie", cap_en: "Shepherd’s pie", size: "compact" },
      { type: "H3", ar: "القهوة الايرلندية", en: "Irish coffee" },
      {
        type: "P",
        ar: "تشتهر في كل العالم القهوة الايرلندية ومعروفة بمذاقها الرائع وهي تصنع من القهوة السوداء مع الخمر الايرلندي ويضاف لها القليل من السكر ، ويضاف على السطح الكريمة ، لذا تتميز هذه القهوة بالمذاق المميز",
        en: "Irish coffee is famous all over the world and known for its wonderful taste. It is made from black coffee with Irish spirits and a little sugar, with cream added on top — which gives this coffee its distinctive flavour.",
      },
      { type: "IMG", src: U("2022/02/img_2753-1.jpg"), cap_ar: "القهوة الايرلندية", cap_en: "Irish coffee", size: "compact" },
      { type: "H3", ar: "الافطار الايرلندي", en: "The Irish breakfast" },
      {
        type: "P",
        ar: "عبارة عن وجبة تقليدية مكونة من البيض المقلي ومعه الخضروات مع البطاطس واللحوم المقددة وبعض من النقانق سواء السوداء او البيضاء ، يتم عمل الوجبة بشكل كبير مع خبز الصودا الايرلندية او مع الخبز البني ، ومعه كوب من الشاي او كوب من عصير البرتقال ، وغالبا ما يتم اعداد كل هذه المكونات في زبدة كريمية ، وهذه الوجبة في الأصل تم اختراعها كوسيلة لأطعام الناس بعد يوم من العمل الشاق في المزارع ، وهي الوجبات الشائعة بصورة خاصة في صباح أيام الشتاء البارد",
        en: "A traditional meal of fried eggs with vegetables, potatoes, cured meats and some sausages, whether black or white. The meal is largely served with Irish soda bread or brown bread, along with a cup of tea or a glass of orange juice, and all these ingredients are usually cooked in creamy butter. This meal was originally invented as a way of feeding people after a day of hard work on the farms, and it is especially common on cold winter mornings.",
      },
      { type: "IMG", src: U("2022/02/img_2754.jpg"), cap_ar: "الافطار الايرلندي", cap_en: "The Irish breakfast", size: "compact" },
    ],
  },
];
