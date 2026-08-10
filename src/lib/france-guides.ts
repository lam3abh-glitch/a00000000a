export type GuideBlock =
  | { type: "P"; ar: string; en: string }
  | { type: "H3"; ar: string; en: string }
  | { type: "LIST"; ar: string[]; en: string[] }
  | { type: "IMG"; src: string; cap_ar: string; cap_en: string };

export type Guide = {
  slug: string;
  title_ar: string;
  title_en: string;
  kicker_ar: string;
  kicker_en: string;
  image: string;
  blocks: GuideBlock[];
};


export const franceGuides: Guide[] = [
  {
    slug: "program",
    title_ar: "تعرف على البرنامج السياحي المعد لفرنسا لمدة 15 يوماً",
    title_en: "The 15-day travel program prepared for France",
    kicker_ar: "برنامج سياحي",
    kicker_en: "Itinerary",
    image: "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_9954.jpg?w=1400&ssl=1",
    blocks: [
      { type: "P", ar: "دولة سياحية سمعت الكثير عن جمالها وربما حلمت بزيارتها وتخيلت مدنها وأماكنها الساحرة، قد تكون فرنسا السياحية التي يحلم الكثير بزيارتها لغناها بالكثير من الميزات السياحية التي تجعلها مقصد السياح للتعرف عليها.", en: "A country of tourism whose beauty you have heard much about, and perhaps dreamed of visiting while imagining its charming cities and places. France may well be the destination that many dream of visiting, thanks to the wealth of attractions that make it a magnet for travellers." },
      { type: "IMG", src: "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_9954.jpg?w=1400&ssl=1", cap_ar: "اكتشف فرنسا", cap_en: "Discover France" },
      { type: "H3", ar: "اليوم الأول — الوصول إلى العاصمة الفرنسية باريس", en: "Day 1 — Arrival in the French capital, Paris" },
      { type: "LIST", ar: ["بعد الوصول إلى العاصمة الفرنسية باريس يتم التوجه إلى الفندق للاستراحة قليلاً قبل البدء بالجولة السياحية في باريس", "زيارة برج ايفل Eiffel Tower الذي يعد من أهم المقاصد السياحية للسياح حيث يمكنكم الصعود إلى أعلى البرج والاستمتاع بمشاهدة منظر ساحر لمدينة باريس من قمة البرج", "زيارة متحف اللوفر Louvre Museum الذي يقع على الضفة الشمالية لنهر السين وهو من أهم المتاحف الفنية في العالم، يوجد بالقرب من المتحف كافيه تجد فيه دونات وكيك وعصير بالإضافة لوجبات خفيفة", "القيام برحلة كروز لمدة ساعة ونصف في نهر السين الرائع والاستمتاع بالأجواء الطبيعية اللطيفة", "الذهاب إلى المطعم الكشميري للبرياني، ثم الذهاب إلى منطقة لاديفانس La Défense وهي مجمع تسوق جميل يمكنكم التجول في المنطقة والمرور على مجمع الأدوم والفصول الأربعة كما أن أسعارهم مناسبة جداً"], en: ["After arriving in Paris, head to the hotel to rest a little before starting the tour of the city.", "Visit the Eiffel Tower, one of the most important destinations for visitors, where you can go up to the top and enjoy a charming view over Paris.", "Visit the Louvre Museum on the north bank of the Seine, one of the most important art museums in the world. Near the museum there is a café serving donuts, cake, juice and light meals.", "Take a one-and-a-half-hour cruise on the beautiful river Seine and enjoy the pleasant natural surroundings.", "Go to the Kashmiri restaurant for biryani, then head to La Défense, a lovely shopping district where you can walk around and pass by Les Quatre Temps mall — the prices there are very reasonable."] },
      { type: "IMG", src: "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_9922.jpg?w=1400&ssl=1", cap_ar: "برج ايفل", cap_en: "The Eiffel Tower" },
      { type: "H3", ar: "اليوم الثاني — جولة في العاصمة باريس", en: "Day 2 — A tour of Paris" },
      { type: "LIST", ar: ["الذهاب لزيارة قصر فرساي Palace of Versailles والتجول فيه للتعرف عليه عن قرب فهو رائع جداً وقد تحتاج للتجول فيه حوالي 3 ساعات تقريباً لأن القصر كبير جداً بالإضافة لوجود حديقة رائعة فيه، كما يوجد بالقرب منه مجمع تجاري وكافيه ممتاز جداً وفيه أكلات خفيفة ويتميز بأسعاره الممتازة", "زيارة ساحة الكونكورد وحديقة التويلري وهي حديقة جميلة جداً", "الذهاب لشارع الشانزليزيه Avenue des Champs-Élysées وهو أجمل شوارع باريس وهناك إقبال كبير من السائحين عليه حيث يضم الكثير من المحلات التجارية والترفيهية", "العشاء: في مطعم بيتزا روما المشهور بتقديم أفضل أنواع بيتزا الجبن"], en: ["Visit the Palace of Versailles and walk through it to see it up close — it is magnificent and you may need around 3 hours because the palace is very large, with a wonderful garden as well. Nearby there is a shopping centre and an excellent café with light food at great prices.", "Visit Place de la Concorde and the Tuileries Garden, a very beautiful park.", "Go to the Avenue des Champs-Élysées, the most beautiful street in Paris and hugely popular with visitors, full of shops and entertainment.", "Dinner: at Pizza Roma, famous for the best cheese pizza."] },
      { type: "IMG", src: "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0225.jpg?w=1400&ssl=1", cap_ar: "قصر فرساي", cap_en: "The Palace of Versailles" },
      { type: "H3", ar: "اليوم الثالث — زيارة أشهر الأماكن السياحية في باريس", en: "Day 3 — The most famous sights of Paris" },
      { type: "LIST", ar: ["الذهاب للغاليري لافييت وهو سوق ممتاز وفيه ماركات متعددة وفيه طوابق لكل طابق قسم معين كملابس الأطفال والألعاب وغيرها", "زيارة متحف الشمع فهو قريب من السوق السابق", "الذهاب إلى المطعم الكردي لتناول الشاورما مع البيبسي والشبس", "زيارة ساحة الأوبرا", "زيارة متحف العطور، الدخول مجاني يوجد فيه أنواع مختلفة من العطورات وبإمكانهم تصميم خلطات من العطر لتكون خاصة بك فقط، زيارة الحي اللاتيني وفيه أسواق ومحلات رخيصة جداً", "العشاء: بإحدى المطاعم الموجودة في الحي وخاصة مطعم معز للفلافل فهو يقدم وجبات لذيذة"], en: ["Go to Galeries Lafayette, an excellent store with many brands, each floor dedicated to a section such as children's clothes, toys and more.", "Visit the wax museum, which is close to the previous store.", "Go to the Kurdish restaurant for shawarma with a Pepsi and crisps.", "Visit the Opera square.", "Visit the perfume museum — entry is free, there are many kinds of perfume and they can blend a scent that is uniquely yours. Then visit the Latin Quarter with its markets and very cheap shops.", "Dinner: at one of the restaurants in the quarter, especially Maoz falafel, which serves delicious food."] },
      { type: "IMG", src: "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0226.jpg?w=1400&ssl=1", cap_ar: "دار الأوبرا", cap_en: "The Opera house" },
      { type: "H3", ar: "اليوم الرابع — زيارة أشهر الأماكن السياحية في باريس", en: "Day 4 — More of the famous sights of Paris" },
      { type: "LIST", ar: ["الذهاب لهضبة المونمارت وهي هضبة يوجد فيها مجموعة رسامين تقع على مكان مرتفع تستطيع مشاهدة باريس من أعلى نقطة فيها", "زيارة متحف رجال الشرطة وهو متحف جميل جداً فيه أسماء أشهر المحققين وصور رجال الشرطة ومعداتهم، الدخول للمتحف مجاني", "زيارة قرية بيرسي التي تقدم لكم تجربة تسوق مميزة ويوجد فيها أيضاً متاحف وكافيهات ومطاعم يمكنكم الغداء بإحدى المطاعم الموجودة هناك", "زيارة حديقة مونسو القريبة من شارع الشانزليزيه، الدخول إليها مجاني", "العودة لشارع الشانزليزيه والصعود إلى سطح قوس النصر الذي يقع على رأس طريق الشانزليزيه يوجد فيه درج ومصعد كهربائي لكنه فقط للحالات الخاصة", "التسوق من محلات شارع الشانزليزيه", "العشاء: بإحدى مطاعم البيتزا لتذوق وجبة لذيذة"], en: ["Go to the hill of Montmartre, home to a community of painters and set high up so you can see Paris from its highest point.", "Visit the police museum, a very nice museum with the names of the most famous detectives and photographs of officers and their equipment. Entry is free.", "Visit Bercy Village, which offers a special shopping experience and also has museums, cafés and restaurants where you can have lunch.", "Visit Parc Monceau near the Champs-Élysées; entry is free.", "Return to the Champs-Élysées and climb to the roof of the Arc de Triomphe at the head of the avenue. There are stairs and a lift, but the lift is only for special cases.", "Shop in the stores of the Champs-Élysées.", "Dinner: at one of the pizza restaurants for a delicious meal."] },
      { type: "IMG", src: "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0227.jpg?w=1400&ssl=1", cap_ar: "هضبة مونمارت", cap_en: "The hill of Montmartre" },
      { type: "H3", ar: "اليوم الخامس — زيارة سوق أوتلت Outlet", en: "Day 5 — Visiting the outlet mall" },
      { type: "LIST", ar: ["الذهاب إلى سوق أوتلت Outlet سوق التخفيضات والماركات المنتهية موضتها والمنطقة فيها مولات ومجمع Val d'Europe وهو مجمع كبير جداً", "الغداء بإحدى مطاعم العاصمة الفرنسية والاستمتاع بتذوق وجبة فرنسية أصيلة", "زيارة برج مونبارناس Montparnasse Tower وهو أطول برج في أوروبا يوجد كافيه بأعلى دور فيه مميز بإطلالته الساحرة", "الذهاب إلى شارع الشانزليزيه والعشاء بمطعم كويك للوجبات السريعة يوجد فيه وجبات حلال"], en: ["Go to the outlet mall, the place for discounts and end-of-season brands. The area has several malls and the very large Val d'Europe centre.", "Lunch at one of the capital's restaurants, enjoying an authentic French meal.", "Visit Montparnasse Tower, the tallest tower in Europe, with a café on the top floor famous for its charming view.", "Go to the Champs-Élysées and have dinner at Quick fast food, which serves halal meals."] },
      { type: "IMG", src: "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0228.jpg?w=1400&ssl=1", cap_ar: "برج مونبارناس", cap_en: "Montparnasse Tower" },
      { type: "H3", ar: "اليوم السادس — زيارة ملاهي بارك أستريكس", en: "Day 6 — Parc Astérix theme park" },
      { type: "LIST", ar: ["زيارة ملاهي بارك أستريكس وهي مجمع ألعاب شهير تمنحك عيش أجمل الأجواء الترفيهية والمرح وهي مناسبة لقضاء يوم كامل فيها", "مساءً: يمكنكم التجول في مدينة باريس قبل مغادرتها والعشاء بإحدى مطاعمها المشهورة"], en: ["Visit Parc Astérix, a famous theme park that gives you the best atmosphere of fun and entertainment — perfect for a full day out.", "Evening: wander through Paris before leaving it, and have dinner at one of its well-known restaurants."] },
      { type: "IMG", src: "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0229.jpg?w=1400&ssl=1", cap_ar: "بارك أستريكس", cap_en: "Parc Astérix" },
      { type: "H3", ar: "اليوم السابع — زيارة مدينة ستراسبورغ", en: "Day 7 — The city of Strasbourg" },
      { type: "LIST", ar: ["زيارة مدينة ستراسبورغ Strasbourg وهي من أهم المدن السياحية في فرنسا، والتي لا تقل أهمية عن باريس فهي تجذب عدداً كبيراً من السياح للتعرف على معالمها العريقة ومن أشهرها: كاتدرائية ستراسبورغ وتعتبر أحد أهم المعالم السياحية التي تتواجد في ستراسبورغ وهي من أشهر الكنائس التي تتواجد في أوروبا وقد تم بناؤها في القرن السابع عشر وكانت أطول مبنى في ذلك الوقت", "زيارة متحف ستراسبورغ التاريخي حيث يعد واحداً من أهم متاحف فرنسا، ويجسد هذا المتحف التاريخ والأصالة الفرنسية فهو يجسد الحقبة التاريخية التي تقع في الفترة بين العصور الوسطى والعصور الحديثة لمدينة ستراسبورغ الرائعة، يمكنكم القيام بجولة داخل المتحف والتعرف على الأقسام المختلفة، بالإضافة لذلك يضم المتحف العديد من المقتنيات الثمينة والقطع الأثرية النفيسة والتي تعود إلى العصور القديمة ومنها الأسلحة القديمة والأزياء العسكرية والتحف الأثرية القديمة وغيرها الكثير"], en: ["Visit Strasbourg, one of the most important tourist cities in France and no less important than Paris; it draws large numbers of visitors to its historic landmarks. The most famous is Strasbourg Cathedral, one of the city's key sights and one of the most famous churches in Europe, built in the seventeenth century and the tallest building of its time.", "Visit the Strasbourg Historical Museum, one of France's most important museums. It embodies French history and heritage, covering the period between the Middle Ages and modern times in this wonderful city. You can tour its different sections, and it holds many precious possessions and valuable antiquities from ancient times, including old weapons, military uniforms and antique artefacts."] },
      { type: "IMG", src: "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0231.jpg?w=1400&ssl=1", cap_ar: "كاتدرائية ستراسبورغ", cap_en: "Strasbourg Cathedral" },
      { type: "H3", ar: "اليوم الثامن — زيارة مدينة شامونيه", en: "Day 8 — The city of Chamonix" },
      { type: "LIST", ar: ["زيارة مدينة شامونيه Chamonix التي تعد من أهم المدن الفرنسية وهي أعلى منطقة في فرنسا بأكملها كما أنها تعد من أجمل المدن السياحية والتي تحتوي على العديد من الجبال والقمم والمرتفعات فهي مناسبة لمحبي مغامرات التزلج وتسلق الجبال حيث يمكنهم ممارسة مجموعة أنشطة هناك", "من المعالم السياحية المهمة التي يمكنكم زيارتها: منتزه شامونيه الترفيهي وهو رائع جداً يقصده العديد من الزوار من مختلف أنحاء العالم، حيث يعتبر من أهم الوجهات السياحية ويضم مجموعة مميزة من الألعاب المثيرة ومن أشهرها زحليقة شامونيه، والتي تمتد لمسافات طويلة في الهواء الطلق فهي تجربة مثيرة وممتعة جداً تمنحك فرصة العيش بأجمل الأجواء الترفيهية، كما يمكنكم أيضاً ممارسة العديد من الرياضات المائية الرائعة ومن أشهرها تجربة ركوب الطائر الذي ينحدر من ارتفاع 8 أمتار بأقصى سرعة ممكنة وغيرها من الألعاب المختلفة المليئة بالإثارة والمغامرات داخل المنتزه لقضاء أوقات سعيدة"], en: ["Visit Chamonix, one of France's most important cities and the highest area in the whole country. It is also one of the most beautiful tourist cities, with many mountains, peaks and highlands, making it ideal for lovers of skiing and mountain climbing, with a range of activities on offer.", "Among the important sights to visit: the Chamonix amusement park, which is wonderful and draws visitors from around the world. It is one of the leading attractions and holds a special collection of thrilling rides, the most famous being the Chamonix luge, which runs for long distances in the open air — an exciting and very enjoyable experience. You can also try many great water activities, the most famous being the zip-line ride that drops from a height of 8 metres at full speed, along with other rides full of thrills and adventure for a happy day out."] },
      { type: "IMG", src: "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0236.jpg?w=1400&ssl=1", cap_ar: "مدينة شامونيه", cap_en: "The city of Chamonix" },
      { type: "H3", ar: "اليوم التاسع — زيارة مدينة آنسي", en: "Day 9 — The city of Annecy" },
      { type: "LIST", ar: ["زيارة مدينة أنسي Annecy والتي تعتبر من أهم المدن في فرنسا، ومن أهم الأماكن السياحية المفضلة للكثير من الزوار والتي تتميز بطبيعتها الساحرة وجوها البديع، ومن أهم معالمها السياحية: بحيرة آنسي وهي من أهم وأشهر البحيرات التي تتواجد في آنسي بصفة خاصة وفي فرنسا بصفة عامة كما أنها ثالث أكبر بحيرة في فرنسا، وهي من أهم الواجهات السياحية المميزة التي تجذب السياح، كما أنها أنظف بحيرة في أوروبا، يمكنكم ممارسة مجموعة من الأنشطة مثل الجلوس على ضفاف البحيرة والتجول سيراً على الأقدام أو بالاعتماد على الدراجة الهوائية والتي تعتبر من أروع الجولات بين أجمل مناظر الطبيعة الخلابة، بالإضافة لذلك يمكنكم ممارسة بعض الرياضات المائية المختلفة مثل الغطس والسباحة والتزلج وركوب الأمواج وغيرها الكثير من الرياضات الرائعة، ويعد هذا المكان رائعاً لالتقاط أجمل الصور التذكارية"], en: ["Visit Annecy, one of the most important cities in France and a favourite destination for many visitors thanks to its charming nature and lovely climate. Its most important sight is Lake Annecy, one of the most famous lakes in Annecy in particular and France in general, and the third largest lake in the country. It is a distinctive attraction that draws visitors, and it is the cleanest lake in Europe. You can enjoy many activities such as sitting on the shore and walking or cycling around it — among the finest tours through beautiful scenery. You can also try water sports such as diving, swimming, water skiing, surfing and much more, and the place is wonderful for taking memorable photographs."] },
      { type: "IMG", src: "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0232.jpg?w=1400&ssl=1", cap_ar: "مدينة أنسي", cap_en: "The city of Annecy" },
      { type: "H3", ar: "اليوم العاشر — زيارة مدينة كان Cannes", en: "Day 10 — The city of Cannes" },
      { type: "LIST", ar: ["زيارة مدينة كان Cannes الفرنسية والتي تعتبر من أهم مدن الريفيرا الفرنسية كما أن مدينة كان مشهورة بتقديم أهم مهرجانات السينما العالمية وتحتوي على العديد من المعالم السياحية التي يمكن زيارتها منها: زيارة مدينة كان القديمة التي تعتبر واحدة من أهم أماكن السياحة في مدينة كان الفرنسية، كما يوجد فيها العديد من المعالم التراثية الأصيلة، وأكثر ما يميز هذه المدينة شوارعها الجميلة وأجواؤها الهادئة، يمكن لزوار مدينة كان القيام بالعديد من الأنشطة المختلفة ومن أشهرها التجول بين شوارع وأزقة المدينة القديمة ورؤية البيوت الملونة", "زيارة العديد من المعالم السياحية المختلفة ومن أشهرها ساحة كاستر والتي تعد أهم المعالم والقلب النابض لمدينة كان القديمة"], en: ["Visit Cannes, one of the most important cities on the French Riviera, famous for hosting the world's leading film festival and home to many sights. Among them: the old town of Cannes, one of the city's most important tourist areas, with many authentic heritage landmarks. What distinguishes it most are its beautiful streets and calm atmosphere; visitors can enjoy many activities, the most popular being strolling the lanes of the old town and seeing the coloured houses.", "Visit many other sights, the most famous being Square Castre, the most important landmark and the beating heart of old Cannes."] },
      { type: "IMG", src: "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0233.jpg?w=1400&ssl=1", cap_ar: "مقر مؤتمرات مهرجان كان", cap_en: "The Cannes festival congress hall" },
      { type: "H3", ar: "اليوم الحادي عشر — مدينة نيس Nice", en: "Day 11 — The city of Nice" },
      { type: "LIST", ar: ["الانطلاق لزيارة مدينة نيس Nice الفرنسية الشهيرة، التي تضم العديد من الواجهات السياحية المتنوعة", "زيارة أشهر الأماكن السياحية في نيس منها: حديقة فونيكس وتعتبر واحدة من أشهر المنتزهات التي توجد في فرنسا ومن أكبر المنتزهات التي يوجد فيها الكثير من الأقسام المختلفة والتي تعتبر من أهم المعالم السياحية، يمكنكم التجول داخل الأقسام المختلفة لحديقة فونيكس ومنها زيارة القسم الخاص بالنباتات والذي يحتوي على العديد من النباتات المختلفة، كما أنه يضم مجموعة واسعة من النباتات النادرة والتي كانت تتواجد في عصور ما قبل التاريخ", "زيارة حديقة الحيوان التي تتواجد في حديقة فونيكس والتي يوجد فيها العديد من الأنواع المختلفة للحيوانات التي توجد بالعالم كله، ومنها الكنغر وثعلب النهر وغيرها"], en: ["Set off to visit the famous French city of Nice, home to many and varied attractions.", "Visit the most famous sights in Nice, among them Parc Phoenix, one of the best known and largest parks in France with many different sections and a leading attraction. You can wander its various sections, including the plant section with its many different species and a wide collection of rare plants that existed in prehistoric times.", "Visit the zoo inside Parc Phoenix, home to many animal species from all over the world, including kangaroos, otters and others."] },
      { type: "IMG", src: "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0107-2.jpg?w=1400&ssl=1", cap_ar: "مدينة نيس", cap_en: "The city of Nice" },
      { type: "H3", ar: "اليوم الثاني عشر — زيارة مدينة كولمار Colmar", en: "Day 12 — The city of Colmar" },
      { type: "LIST", ar: ["الذهاب إلى مدينة كولمار Colmar الفرنسية والتي تعتبر من أجمل مدن العالم لغناها بالكثير من المعالم السياحية الجميلة", "زيارة كنيسة الدومينيكان وتعتبر هذه الكنيسة واحدة من أهم المعالم السياحية في كولمار، وقد تم بناء هذه الكنيسة على الطراز القديم في عصر النهضة، يمكنكم التجول داخلها والتعرف على معالمها الرائعة ومن أشهرها لوحة Schongauer، والأحجار الوردية الرائعة التي استخدمت في بناء الكنيسة، وغيرها الكثير من المعالم الأخرى الجميلة التي تجذب السيّاح لزيارتها", "زيارة مدينة كولمار القديمة حيث تشاهد فيها الكثير من الأبنية القديمة والكلاسيكية الرائعة كما أن التجول في المدينة القديمة يمنحك الفرصة لمشاهدة محلاتها التجارية الجميلة ومطاعمها المشهورة بتقديم أشهى وألذ الأطباق"], en: ["Go to the French city of Colmar, considered one of the most beautiful cities in the world for its wealth of lovely sights.", "Visit the Dominican Church, one of Colmar's most important landmarks, built in the old Renaissance style. You can walk inside and see its wonderful features, the most famous being the Schongauer painting and the beautiful pink stone used to build the church, along with many other lovely details that draw visitors.", "Visit the old town of Colmar, where you will see many wonderful old and classical buildings. Strolling the old town also lets you see its beautiful shops and restaurants famous for the tastiest dishes."] },
      { type: "IMG", src: "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0237.jpg?w=1400&ssl=1", cap_ar: "مدينة كولمار", cap_en: "The city of Colmar" },
      { type: "H3", ar: "اليوم الثالث عشر — التجول في مدينة كولمار", en: "Day 13 — Exploring Colmar" },
      { type: "LIST", ar: ["صباحاً: بعد الإفطار يتم التجول في المدينة", "زيارة فينيسيا الصغيرة وهي قناة مائية تتفرع عن نهر الراين تمر بداخل مدينة كولمار ويوجد حولها الكثير من المباني الجميلة التي تجعلك تشعر بأنك في مدينة البندقية، ويمكنكم القيام برحلة في أحد القوارب والتجول داخل مدينة كولمار ومشاهدة أهم معالمها السياحية الساحرة", "زيارة ميزون دي تيت المعروف بمجلس الرؤساء ويعد من أقدم المباني الخشبية في مدينة كولمار، والذي يتميز بوجود صور وجوه لأبرز شخصيات المدينة، ويحتوي على الكثير من اللوحات الجدارية الجميلة", "زيارة متحف انترليندن وهو من أهم الأماكن السياحية في كولمار ويوجد فيه العديد من لوحات بيكاسو وماتيس وغيرهم من الفنانين، كما يحتوي على تحف عديدة من الدروع والسجاد والفضيات، بالإضافة لذلك يقام فيه بعض الحفلات الموسيقية الرائعة"], en: ["Morning: after breakfast, stroll around the city.", "Visit Little Venice, a canal branching from the Rhine that runs through Colmar, surrounded by beautiful buildings that make you feel you are in Venice. You can take a boat trip through the city and see its most charming landmarks.", "Visit Maison des Têtes, known as the house of heads, one of the oldest wooden buildings in Colmar, distinguished by the carved faces of the city's most prominent figures and many beautiful murals.", "Visit the Unterlinden Museum, one of Colmar's most important attractions, holding many paintings by Picasso, Matisse and other artists, as well as numerous artefacts including armour, carpets and silverware — and wonderful concerts are held there too."] },
      { type: "IMG", src: "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0238.jpg?w=1400&ssl=1", cap_ar: "مدينة كولمار", cap_en: "The city of Colmar" },
      { type: "H3", ar: "اليوم الرابع عشر — العودة إلى مدينة باريس", en: "Day 14 — Back to Paris" },
      { type: "LIST", ar: ["صباحاً: العودة إلى باريس ثم التوجه إلى الفندق للاستراحة قليلاً", "التجول في المدينة والغداء بإحدى مطاعمها المشهورة أو في الفندق", "مساءً: لكم حرية اختيار زيارة الأماكن المفضلة لديكم في العاصمة باريس"], en: ["Morning: return to Paris and head to the hotel to rest a little.", "Stroll around the city and have lunch at one of its well-known restaurants or at the hotel.", "Evening: you are free to choose your favourite places to visit in the capital."] },
      { type: "IMG", src: "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0241.jpg?w=1400&ssl=1", cap_ar: "شارع الشانزليزيه", cap_en: "The Champs-Élysées" },
      { type: "H3", ar: "اليوم الخامس عشر — مغادرة فرنسا والعودة للديار", en: "Day 15 — Leaving France and heading home" },
      { type: "LIST", ar: ["صباحاً: لكم حرية اختيار أنشطتكم المفضلة مثل التسوق أو التجول في المدينة أو غير ذلك", "الغداء بإحدى مطاعم المدينة والاستمتاع بتناول وجبة فرنسية أصيلة", "مساءً: الذهاب إلى مطار باريس الدولي للعودة للديار بسلامة مع أجمل الذكريات وأسعد لحظات هذه الرحلة الممتعة"], en: ["Morning: you are free to choose your favourite activities such as shopping or walking around the city.", "Lunch at one of the city's restaurants, enjoying an authentic French meal.", "Evening: head to Paris international airport to travel home safely with the finest memories and happiest moments of this enjoyable trip."] },
      { type: "IMG", src: "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0239.jpg?w=1400&ssl=1", cap_ar: "", cap_en: "" },
    ],
  },
  {
    "slug": "before-you-go",
    "title_ar": "تعرف على فرنسا قبل السفر لها",
    "title_en": "Know France before you travel",
    "kicker_ar": "قبل السفر",
    "kicker_en": "Before you go",
    "image": "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_9922.jpg?w=1400&ssl=1",
    "blocks": [
      {
        "type": "P",
        "ar": "في هذه الصفحة ستتعرف على الأمور التالية :",
        "en": "On this page you will learn about the following:"
      },
      {
        "type": "LIST",
        "ar": [
          "الأمور الواجب تجنبها أثناء السفر الى فرنسا",
          "معلومات عامة ومهمة عن فرنسا"
        ],
        "en": [
          "Things to avoid while travelling to France",
          "General and important information about France"
        ]
      },
      {
        "type": "IMG",
        "src": "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_9922.jpg?w=1400&ssl=1",
        "cap_ar": "برج ايفل",
        "cap_en": "The Eiffel Tower"
      },
      {
        "type": "H3",
        "ar": "أولا : تجنب هذه الأمور أثناء السفر الى فرنسا",
        "en": "First: avoid these things while travelling to France"
      },
      {
        "type": "P",
        "ar": "اذا كنت تخطط لرحلتك الأولى الى فرنسا وهذا شيء كنت تحلم به لسنوات ، واذا كنت ترغب في الاستفادة القصوى من تجربتك في فرنسا ، فهناك العديد من ملاحظات السفر التي يجب عليك تجنبها",
        "en": "If you are planning your first trip to France, something you have dreamed of for years, and you want to make the most of your experience there, then there are several travel mistakes you should avoid."
      },
      {
        "type": "H3",
        "ar": "السفر الى باريس فقط",
        "en": "Travelling to Paris only"
      },
      {
        "type": "P",
        "ar": "الغالبية العظمى من السائحين الذين يزورون فرنسا يزورون باريس فقط ، وهذا أمر غير صحيح ، لأنه يوجد في فرنسا أكثر بكثير مما تقدمه عاصمة واحدة ، مهما كانت مدينة الضوء رائعة ، سيمكنك اكتشاف المزيد عند الخروج منها الى عالم المدن الفرنسية الأخرى ، بما في ذلك مدينة نيس ملكة الريفيرا ، وهي مدينة تاريخية رائعة تضم المتاحف والمقاهي والمطاعم والحانات ، فضلا عن كونها تضم واحدا من أكثر أسواق الفاكهة والخضروات الملونة في جنوب فرنسا",
        "en": "The vast majority of tourists who visit France visit only Paris, and that is a mistake, because France has far more to offer than a single capital. However wonderful the City of Light is, you will discover much more by stepping out into the world of other French cities, including Nice, queen of the Riviera, a magnificent historic city of museums, cafés, restaurants and bars, as well as home to one of the most colourful fruit and vegetable markets in the south of France."
      },
      {
        "type": "P",
        "ar": "واذا كنت تريد اكتشاف ساحل المحيط الأطلسي ، فكر في بوردو التي خضعت لعملية تجديد ضخمة في السنوات الأخيرة ، ثم هناك مدينة ايكس ان بروفنس القديمة ، ومدينة ليل المتطورة في شمال فرنسا والتي تعتبر رائعة لقضاء عطلة قصيرة من باريس أو المملكة المتحدة ، أضف الى ذلك مدينة ليون في وسط فرنسا ، والتي تعد عاصمة تذوق الطعام مع المطاعم المتنوعة التي تناسب جميع الأذواق",
        "en": "And if you want to discover the Atlantic coast, consider Bordeaux, which has undergone an enormous renovation in recent years. Then there is the old city of Aix-en-Provence, and sophisticated Lille in the north of France, perfect for a short break from Paris or the United Kingdom. Add to that Lyon in central France, the capital of gastronomy, with a variety of restaurants to suit every taste."
      },
      {
        "type": "P",
        "ar": "فرنسا أكبر دولة في أوروبا ، ولديها كل شيء من الشواطئ المذهلة ، مدن سبا ، فضلا عن القرى التي تقع على قمم التلال المحصنة ، والمناظر الطبيعية الساحرة ، وبالفعل يجب على الزائرين تجربة روعة باريس ، ولكن بدلا من التخطيط لرحلتك بأكملها حول العاصمة على أن تبدأ وتنتهي في باريس ، امنح نفسك الفرصة لاستكشاف عجائب فرنسا الأخرى",
        "en": "France is the largest country in Europe and has everything: stunning beaches, spa towns, fortified hilltop villages and enchanting landscapes. Visitors should certainly experience the splendour of Paris, but instead of planning your entire trip around the capital, beginning and ending in Paris, give yourself the chance to explore the other wonders of France."
      },
      {
        "type": "H3",
        "ar": "عدم التعرف على طبيعة الفرنسيين",
        "en": "Not understanding the nature of the French"
      },
      {
        "type": "P",
        "ar": "يتمسك الفرنسيون بعاداتهم وسلوكهم الاجتماعي ، واذا ذهبت الى فرنسا دون أن تتعلم أي شيء عن الشعب الفرنسي ، فسيحدث أمران ، ستفترض أن الفرنسيين فظون بالنسبة اليك ، وسوف يجدك السكان المحليين غير محب لبلادهم ، ويتصرفون وفقا لذلك",
        "en": "The French hold on to their customs and social behaviour. If you go to France without learning anything about the French people, two things will happen: you will assume the French are rude to you, and the locals will find you unappreciative of their country and behave accordingly."
      },
      {
        "type": "P",
        "ar": "ولكن هناك العديد من الأشياء الصغيرة التي يمكنك القيام بها قبل السفر لتفادي ذلك الأمر ، على سبيل المثال ، كل محادثة وأي اجتماع سواء كان من أجل العمل أو مجرد شراء الرغيف الفرنسي في مخبز ، لابد وأن تبدأ بـ Bonjour ، لا تقلق اذا لم تذهب المحادثة الى أبعد من ذلك ، ستكون قد قدمت التحية وسوف يقدر الفرنسيون ذلك كثيرا ، وسيرحبون بك",
        "en": "But there are many small things you can do before travelling to avoid this. For example, every conversation and every encounter, whether for business or simply buying a baguette at a bakery, must begin with Bonjour. Do not worry if the conversation goes no further; you will have greeted them, the French appreciate that greatly, and they will welcome you."
      },
      {
        "type": "H3",
        "ar": "عدم تعلم اللغة الفرنسية",
        "en": "Not learning any French"
      },
      {
        "type": "P",
        "ar": "لن تحتاج الى تعلم الكثير عن اللغة الفرنسية ، ولكن يجب أن تتعلم بالتأكيد الأساسيات ، يجب عليك أيضا اخذ قاموس فرنسي/انجليزي أو مترجم الكتروني حتى تكون مستعدا للتحدث بالفرنسية",
        "en": "You will not need to learn a great deal of French, but you should certainly learn the basics. You should also take a French/English dictionary or an electronic translator so you are ready to speak French."
      },
      {
        "type": "H3",
        "ar": "عدم التعرف على ايقاع الحياة الفرنسية",
        "en": "Not knowing the rhythm of French life"
      },
      {
        "type": "P",
        "ar": "هل ترغب في التسوق ومشاهدة معالم المدينة وتذوق الطعام الرائع وأنت في اجازة في فرنسا ؟ فلابد أن تقوم بالتخطيط لرحلتك في فرنسا بشكل صحيح ، على سبيل المثال ، في البلدات والقرى الصغيرة تغلق جميع المتاجر والشركات ، بما في ذلك البنوك ، ساعتين على الأقل لتناول طعام الغداء ، ففي الجنوب تفتح المتاجر والأسواق مبكرا (الأسواق من حوالي الساعة 7 صباحا) ، لذلك يحتاجون الى القيلولة ، فلابد وان تتعود على ايقاع المكان الذي توجد به لتحظى بفرصة رائعة من الاستمتاع",
        "en": "Do you want to shop, see the sights and taste wonderful food while on holiday in France? Then you must plan your trip properly. For example, in small towns and villages all shops and businesses, including banks, close for at least two hours for lunch. In the south, shops and markets open early (markets from around 7 a.m.), so they need a siesta. You must get used to the rhythm of the place you are in to enjoy it fully."
      },
      {
        "type": "P",
        "ar": "لا تحاول انجاز أي شيء بعد ظهر يوم الأحد عندما يغلق كل شيء ، وتوقع العثور على معظم المطاعم ومحلات البقالة والحانات والمقاهي مغلقة في منتصف فترة الظهيرة لبضع ساعات",
        "en": "Do not try to get anything done on a Sunday afternoon when everything closes, and expect most restaurants, grocery shops, bars and cafés to be closed in the middle of the day for a few hours."
      },
      {
        "type": "H3",
        "ar": "الاعتماد على سيارات الأجرة",
        "en": "Relying on taxis"
      },
      {
        "type": "P",
        "ar": "لا تلتزم بأخذ سيارات الأجرة (غالية الثمن في فرنسا) ، أو الجولات المصحوبة بمرشدين والتي يمكن أن تكون باهظة الثمن وغير موثوقة ، وبدلا من ذلك حاول السفر بالقطار في فرنسا ، فالقطارات مريحة جدا وموثوقة وتأخذك الى كل مكان ، وغالبا ما يكون شراء تذكرة القطار الخاصة بك في فرنسا أرخص ، لذلك يمكنك أن تقرر فجأة الذهاب الى مكان ما لمجرد التنزه واكتشاف وجهة جديدة ، لاسيما وأن ذلك لن يكلفك الكثير من المال",
        "en": "Do not stick to taxis (expensive in France) or guided tours, which can be costly and unreliable. Instead try travelling by train in France; trains are very comfortable and reliable and take you everywhere, and buying your train ticket inside France is often cheaper, so you can suddenly decide to go somewhere just for an outing and discover a new destination, especially as it will not cost you much money."
      },
      {
        "type": "P",
        "ar": "الحافلات هي أيضا وسيلة رائعة ، ففي اقليم بروفانس ألب كوت دازور ، على سبيل المثال ، لا يتطلب الأمر سوى 2 يورو للذهاب الى أي مكان في المنطقة ، لذلك فوسائل النقل العام مريحة بشكل عام ومناسبة وبأسعار معقولة في فرنسا ، المهم تأكد من استخدامها كلما كان ذلك ممكنا ، حيث تتميز أنظمة المترو بسهولة التنقل ، وتعد الحافلات وسيلة رائعة لمشاهدة المدن دون الحاجة الى دفع رسوم سيارات الأجرة المرتفعة",
        "en": "Buses are also an excellent option: in the Provence-Alpes-Côte d'Azur region, for example, it costs only 2 euros to go anywhere in the region. Public transport in France is generally comfortable, convenient and reasonably priced, so make sure to use it whenever possible. Metro systems are easy to navigate, and buses are a great way to see the cities without paying high taxi fares."
      },
      {
        "type": "H3",
        "ar": "عدم الحجز في الفنادق الصغيرة",
        "en": "Not booking smaller hotels"
      },
      {
        "type": "P",
        "ar": "لا تعتمد في فرنسا على خيار الاقامة في أحد الفنادق العالمية الفاخرة ، فالأمر سيكون مكلفا للغاية ، ويمكنك بدلا من ذلك تجربة بعض الفنادق الأصغر ، خاصة فنادق Logis الموجودة في جميع أنحاء فرنسا ، أو لماذا لا تقوم بتأجير أحد الشقق الخاصة ، حيث يتحدث العديد من المالكين ، خاصة في المناطق السياحية الأكثر شهرة الانجليزية ، كما يقدم بعضها أيضا العشاء الذي يعد أرخص بكثير من المطعم أو الفندق",
        "en": "In France do not rely on staying in a luxury international hotel; it will be extremely expensive. Instead try some of the smaller hotels, especially the Logis hotels found all over France, or why not rent a private apartment, since many owners, particularly in the best-known tourist areas, speak English, and some also serve dinner, which is far cheaper than a restaurant or a hotel."
      },
      {
        "type": "H3",
        "ar": "تناول الطعام في الأماكن السياحية",
        "en": "Eating in tourist spots"
      },
      {
        "type": "P",
        "ar": "تعمل أماكن مثل باريس وبوردو ونيس على زيادة الأسعار السياحية لكل شيء بدءا من الفنادق وحتى الطعام والشراب ، فاذا كنت تبحث عن انفاق أموالك في أسرع وقت ممكن ، فيجب أن تبدأ بتناول كوبا من القهوة على التراس العصري المطل على شارع مزدحم ، مع وضع ذلك في الاعتبار ، تأكد من تناول الطعام والشراب بعيدا عن المسارات السياحية المعتادة ، ليس فقط لتوفير أسعار باهظة ، ولكن أيضا للاستمتاع بأماكن أكثر تمثيلا لجوهر البلد الحقيقي ما بين السكان المحليين",
        "en": "Places like Paris, Bordeaux and Nice raise tourist prices for everything from hotels to food and drink. If you are looking to spend your money as fast as possible, start with a cup of coffee on a fashionable terrace overlooking a busy street. With that in mind, make sure you eat and drink away from the usual tourist trails, not only to avoid steep prices but also to enjoy places that better represent the true essence of the country among the locals."
      },
      {
        "type": "H3",
        "ar": "البقشيش في فرنسا",
        "en": "Tipping in France"
      },
      {
        "type": "P",
        "ar": "في فرنسا لست بحاجة الى تقديم البقشيش لأن الخدمة جزء من الفاتورة وعادة ما تكون حوالي 15 في المائة ، ولكن اذا كنت تريد أن تترك يورو أو اثنين ، فلن يتعرض أحد لك للاساءة ، لكن لابد أن تعلم أن النوادل وسائقي سيارات الأجرة وموظفو الفندق لا يتوقعون بالضرورة البقشيش من قبل الزائرين",
        "en": "In France you do not need to tip because service is part of the bill and is usually around 15 per cent. But if you want to leave a euro or two, no one will be offended. Still, you should know that waiters, taxi drivers and hotel staff do not necessarily expect a tip from visitors."
      },
      {
        "type": "H3",
        "ar": "ثانيا : معلومات عن السياحة في فرنسا",
        "en": "Second: information about tourism in France"
      },
      {
        "type": "P",
        "ar": "عاصمة فرنسا هي باريس ، وسكان فرنسا بلغ عددهم 66.6 مليون نسمة ، الشعب الفرنسي يحظى بمستوى معيشة عالي وهناك العديد من المجالات الموجودة في فرنسا التي تحتفظ بمرتبة عالية كالرعاية الصحية والتعليم والتنمية البشرية ، ولا أنكر أن فرنسا لها شأن عظيم في مجال السياحة والسفر ويقصدها العديد من السياح لأن بها الكثير من المعالم السياحية العريقة والمزارات التاريخية ففرنسا تعتبر مركز ثقافي وسياحي",
        "en": "The capital of France is Paris, and the population of France has reached 66.6 million. The French people enjoy a high standard of living, and many fields in France hold a high ranking, such as healthcare, education and human development. There is no denying that France has great standing in tourism and travel, and many tourists head there because it has many venerable landmarks and historic sites; France is considered a cultural and tourist centre."
      },
      {
        "type": "P",
        "ar": "اللغة الأساسية المتداولة بين الناس في فرنسا هي اللغة الفرنسية وهناك البعض يتحدثون الألمانية ، فاذا أردت الذهاب اليها عليك تعلم اللغة الفرنسية لسهولة التعامل مع المواطنيين هناك",
        "en": "The main language spoken among people in France is French, and some speak German. If you want to go there, you should learn French to make dealing with the citizens easier."
      },
      {
        "type": "P",
        "ar": "المزارات الموجودة في فرنسا هي برج ايفل الرائع الذي تشتهر به العاصمة باريس وقصر فيرساي وقوس النصر ومتحف دورسيه وكاتدرائية نوتردام ويوجد هناك حدائق ترفيهية رائعة مثل ديزني لاند وهي ذات شعبية كبيرة في فرنسا ، وللتمتع بالشواطيء الرملية الجميلة والخلجان عليك بالتوجه للريفيرا الفرنسية ويوجد هناك منتجعات رياضية في الشتاء وممارسة رياضة التزلج الجميلة",
        "en": "The sights in France include the magnificent Eiffel Tower for which the capital Paris is famous, the Palace of Versailles, the Arc de Triomphe, the Musée d'Orsay and Notre-Dame Cathedral. There are also wonderful theme parks such as Disneyland, which is hugely popular in France. To enjoy beautiful sandy beaches and bays head to the French Riviera, and there are winter sports resorts where you can enjoy skiing."
      },
      {
        "type": "H3",
        "ar": "السفر إلى فرنسا",
        "en": "Travelling to France"
      },
      {
        "type": "LIST",
        "ar": [
          "فرنسا مثلها مثل معظم مدن أوروبا آمنة ، الا أن العديد من أجزاء فرنسا ستجدها في حالة تأهب للارهاب والخطر ، ولكن البلاد آمنة بشكل عام ، في المدن الكبرى مثل باريس ومرسيليا ، تشمل المخاطر أيضا كالسرقة البسيطة والسطو والخدع ، لذلك عليك بالحرص على مقتنياتك ، ولكن هذا الأمر لايجب أن يثنيك عن الزيارة",
          "تتمتع البلاد بمناظر طبيعية متنوعة من السلاسل الجبلية لجبال الألب وجبال البرانس في الشرق والجنوب ، وتتدفق الأنهار في المناطق الداخلية الوسطى والشمالية ، وتتنوع الشواطئ في الجنوب والغرب",
          "يتم استخدام اللغة الانجليزية على نطاق واسع في المدن الكبرى والمواقع السياحية في فرنسا ، وستجد السكان المحلييين دوما على استعداد للمساعدة اذا كانوا يتحدثون الانجليزية",
          "توجد أجهزة الصراف الآلي في جميع البلدات والمدن الرئيسية في جميع أنحاء البلاد ، كذلك يتم قبول بطاقات الائتمان على نطاق واسع على الرغم من أن بعض المؤسسات مثل الفنادق الصغيرة والمحلات التجارية قد تقبل النقد فقط",
          "فرنسا لديها مجموعة متنوعة من خيارات تناول الطعام التي تناسب جميع الميزانيات والأذواق ، بينما ستجد أن غالبية المطاعم والمقاهي تقدم الأطباق المحلية والأوروبية ، فان البلاد أيضا تضم عروض المطبخ المتنوعة",
          "مطار شارل ديغول هو المطار الدولي الرئيسي في باريس ويعمل كمحور للمسافرين المحليين والدوليين ويبعد 22 كم فقط عن باريس"
        ],
        "en": [
          "France, like most of Europe, is safe, although you will find many parts of France on alert for terrorism and danger; still, the country is generally safe. In major cities such as Paris and Marseille the risks also include petty theft, robbery and scams, so take care of your belongings, but this should not deter you from visiting.",
          "The country enjoys varied landscapes, from the mountain ranges of the Alps and the Pyrenees in the east and south, to rivers flowing through the central and northern interior, and varied beaches in the south and west.",
          "English is widely used in major cities and tourist sites in France, and you will always find locals ready to help if they speak English.",
          "ATMs are found in all main towns and cities throughout the country, and credit cards are widely accepted, although some establishments such as small hotels and shops may accept cash only.",
          "France has a wide variety of dining options to suit all budgets and tastes; while most restaurants and cafés serve local and European dishes, the country also offers a diverse range of cuisines.",
          "Charles de Gaulle is the main international airport in Paris and serves as a hub for domestic and international travellers, only 22 km from Paris."
        ]
      },
      {
        "type": "H3",
        "ar": "مواسم السياحة في فرنسا",
        "en": "Tourist seasons in France"
      },
      {
        "type": "P",
        "ar": "على الرغم من أنه يمكنك زيارة فرنسا على مدار العام ، الا أنه من المفيد معرفة ما يمكن توقعه في كل موسم ، خاصة اذا كنت بحاجة الى التخطيط للاستمتاع بمناخ معين لرحلاتك أو اذا كنت تخطط لزيارة جميع مناطق الجذب السياحي الكبرى ولكنك تريد تجنب الحشود",
        "en": "Although you can visit France all year round, it is useful to know what to expect in each season, especially if you need to plan for a particular climate or if you plan to visit all the major attractions but want to avoid the crowds."
      },
      {
        "type": "P",
        "ar": "من يونيو الى أغسطس (الصيف) تشهد البلاد الكثير من أشعة الشمس ، مما يجعل هذا هو الوقت المثالي للمشي في الجبال واستكشاف المدن الكبرى ، الا أنك ستواجه الحشود في مناطق الجذب السياحي الشهيرة وعلى طول الساحل",
        "en": "From June to August (summer) the country sees plenty of sunshine, making it the ideal time for walking in the mountains and exploring the big cities, though you will meet crowds at the famous attractions and along the coast."
      },
      {
        "type": "P",
        "ar": "من ديسمبر الى مارس (الشتاء) يكون الطقس باردا مع وجود الكثير من الثلج في الجبال ، ما يجعل هذا الوقت مثاليا لأولئك الذين يريدون المشاركة في الرياضات الشتوية مثل التزلج ، كما أنه وقت لطيف من السنة لزيارة بعض القرى الصغيرة على حافة جبال الألب بفضل المناظر الطبيعية الخلابة",
        "en": "From December to March (winter) the weather is cold with plenty of snow in the mountains, making it perfect for those who want to take part in winter sports such as skiing. It is also a pleasant time of year to visit some of the small villages on the edge of the Alps thanks to the breathtaking scenery."
      },
      {
        "type": "P",
        "ar": "أما الفترة من أبريل الى مايو ومن سبتمبر الى أكتوبر (فصلي الربيع والخريف) ، فهي الأفضل للزيارة ، خاصة أن الحشود تكون أقل مما كانت عليه في الصيف ، ويكون الطقس ما زال لطيفا ومشمسا ومثالي لمشاهدة معالم المدينة ، كما أن هذا الوقت هو أرخص أوقات العام للزيارة",
        "en": "The periods from April to May and from September to October (spring and autumn) are the best for a visit, especially as the crowds are smaller than in summer, the weather is still mild and sunny and ideal for sightseeing, and this is also the cheapest time of year to visit."
      },
      {
        "type": "H3",
        "ar": "تكلفة السياحة في فرنسا",
        "en": "The cost of tourism in France"
      },
      {
        "type": "P",
        "ar": "كما هو الحال في كل بلد ، يمكن أن تكون عطلتك عند السفر والسياحة في فرنسا رخيصة أو مكلفة ، وفقا لما تنوي القيام به ، فقط حاول البحث عن البدائل الرخيصة في السكن والمواصلات وتناول الطعام متوسط التكلفة لتوفير المال",
        "en": "As in every country, your holiday when travelling in France can be cheap or expensive depending on what you intend to do. Simply look for cheaper alternatives in accommodation and transport, and eat at moderately priced places, to save money."
      }
    ]
  },
  {
    "slug": "facts",
    "title_ar": "تعرف على عدد من الحقائق والمعلومات عن فرنسا",
    "title_en": "Facts and information about France",
    "kicker_ar": "حقائق",
    "kicker_en": "Facts",
    "image": "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_9954.jpg?w=1400&ssl=1",
    "blocks": [
      {
        "type": "P",
        "ar": "تعد فرنسا أيقونة الرقي ومركز الموضة ، وكل ما يتعلق بمواكبة العصر والتطور ، ومقصد للسياحة والاستجمام ، فهذا كل ما نعرفه عن فرنسا",
        "en": "France is an icon of elegance and a centre of fashion, of everything to do with keeping up with the times and progress, and a destination for tourism and relaxation — that is all we know about France."
      },
      {
        "type": "P",
        "ar": "ولكن الشيء الذي لا نعرفه عنها هو معلومات غريبة عن فرنسا منتشرة بين مواطنيها من ضمن العادات والتقاليد التي لا يمكن تجاهلها",
        "en": "But what we do not know about it are the strange facts that circulate among its citizens, part of customs and traditions that cannot be ignored."
      },
      {
        "type": "IMG",
        "src": "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_9954.jpg?w=1400&ssl=1",
        "cap_ar": "اكتشف فرنسا",
        "cap_en": "Discover France"
      },
      {
        "type": "LIST",
        "ar": [
          "شهدت فرنسا اقصر مدة حكم دامت 20 دقيقة من قبل الملك لويس التاسع الذي تنازل عن عرشه لابنه هنري الخامس",
          "تم اطلاق اسم مدينة الأنوار على باريس لوجود اكثر من 296 موقع من فنادق ومطاعم ونوافير وكنائس وجسور لا تنطفئ الأضواء فيها على الاطلاق",
          "لا يوجد في مدينة باريس سوى علامة توقف واحدة فقط",
          "كان يتوجب ازالة برج ايفل بعد المعرض ، لأنه تم انشاءه من أجل معرض فني ، ولكن بسبب شعبيته تم ابقاءه ، علما بانه يتم طلاء برج ايفل كل سبع سنوات",
          "توجد القلاع بكثرة على أراضي فرنسا ويعود السبب الى كثرة الحروب في العصور الوسطى ويقدر عدد القلاع بحوالي 5000 قلعة",
          "البطاطس كانت محرمة في فرنسا بين الأعوام 1742-1772م لانهم كانو يعتقدون انها سبب لمرض الجذام",
          "يمنع اجراء مسابقة ملكة الجمال للأطفال في فرنسا",
          "كان يمنع ارتداء السروال النسائي في الأماكن العامة حتى عام 2012",
          "استخدام تنفيذ الحكم بالمقصلة استمر حتى عام 1977م في فرنسا",
          "تعتبر فرنسا ثاني اكبر دولة مستهلكة للكحول ، ويوجد فيها أغلى نوع من النبيذ الذي يوصل سعر الزجاجة الواحدة لآلاف الدولارات",
          "تعتبر فرنسا من اكثر الدول اكتئابا ، وذلك لوجود عدد من المصابين بالاكتئاب واستخدامهم للعقاقير المهدئة",
          "تشتهر فرنسا بالكروسان حيث يضن البعض ان فرنسا هي من ابتكره ، ولكن الحقيقة تم ابتكاره في استراليا وليس فرنسا",
          "فرنسا من الدول التي شجعت على زواج المثليين",
          "فرنسا سمحت بالزواج من المتوفي وذلك في حال اثبات ان المتوفي كان يرغب بالشخص من خلال وجود علاقة قبل الوفاة او وجود تواصل بينهم ، ويتم من خلال الحصول على تصريح من رئيس البلاد",
          "الناطقين باللغة الفرنسية في افريقيا اكثر من الناطقين في فرنسا ، حيث يوجد العديد من اللغات في فرنسا جنبا الى جنب مع اللغة الفرنسية",
          "فرنسا تتميز بوجود أكبر عدد من منتجعات التزلج بها",
          "تعتبر فرنسا اكثر دولة مصنعة للجبن في العالم ، حيث يوجد بها أكثر من 1200 نوع من الجبن المنتج",
          "تكون التحية عبارة عن 5 قبلات ، وغير مقبول تبادل القبل عند السكك الحديدية",
          "يجب تبادل الهدايا بين الأصدقاء بعدد فردي",
          "يعتبر رقم 13 رقم شؤم بالنسبة للفرنسيين ويجب عدم استخدامه",
          "تدرس مادة الثقافة الجنسية جنبا الى جنب مع المواد الأساسية في المدراس",
          "يعتبر الديك الحيوان الوطني في فرنسا",
          "يستخدم الفرنسيين الحمام الزاجل في الجيش حتى الآن ، والذي يستخدم في حالة الطوارئ التي يمنع فيها استخدام أي وسيلة اتصال"
        ],
        "en": [
          "France saw the shortest reign in history, lasting 20 minutes, by King Louis IX, who abdicated his throne to his son Henry V.",
          "Paris was named the City of Lights because it has more than 296 sites — hotels, restaurants, fountains, churches and bridges — whose lights never go out.",
          "There is only one stop sign in the whole city of Paris.",
          "The Eiffel Tower was supposed to be removed after the exhibition, because it was built for an art exhibition, but because of its popularity it was kept. The Eiffel Tower is repainted every seven years.",
          "Castles are abundant across France, owing to the many wars of the Middle Ages, and their number is estimated at around 5,000 castles.",
          "Potatoes were forbidden in France between 1742 and 1772 because people believed they caused leprosy.",
          "Child beauty pageants are banned in France.",
          "Women were forbidden to wear trousers in public places until 2012.",
          "Execution by guillotine continued in France until 1977.",
          "France is the second largest consumer of alcohol, and it has the most expensive kind of wine, where a single bottle can reach thousands of dollars.",
          "France is considered one of the most depressed countries, due to the number of people suffering from depression and using sedatives.",
          "France is famous for the croissant, and some think France invented it, but in truth it was invented in Austria, not France.",
          "France is one of the countries that encouraged same-sex marriage.",
          "France has permitted marriage to a deceased person, if it is proven that the deceased wished to marry the person through a relationship or contact before death, and this is done by obtaining a permit from the head of state.",
          "There are more French speakers in Africa than in France itself, and many languages exist in France alongside French.",
          "France has the largest number of ski resorts.",
          "France is the world's biggest cheese-producing country, with more than 1,200 kinds of cheese produced there.",
          "A greeting can be five kisses, and exchanging kisses at railway stations is not accepted.",
          "Gifts between friends must be exchanged in odd numbers.",
          "The number 13 is considered unlucky by the French and should not be used.",
          "Sex education is taught alongside the core subjects in schools.",
          "The rooster is the national animal of France.",
          "The French still use carrier pigeons in the army, used in emergencies where any other means of communication is forbidden."
        ]
      },
      {
        "type": "H3",
        "ar": "أغرب القوانين المطبقة في فرنسا",
        "en": "The strangest laws applied in France"
      },
      {
        "type": "LIST",
        "ar": [
          "من غير القانوني التقاط صور لأفراد الشرطة أو مركباتهم",
          "في حال فتح متجر بمساحة تزيد عن 2300 متر يجب أخذ موافقة الحكومة والتجار الآخرين",
          "تمنح العائلة التي تهتم بتربية اطفالها وسام العائلة الفرنسية من قبل الحكومة"
        ],
        "en": [
          "It is illegal to take pictures of police officers or their vehicles.",
          "If you open a shop larger than 2,300 metres you must obtain the approval of the government and of other merchants.",
          "A family that takes good care of raising its children is awarded the French Family Medal by the government."
        ]
      },
      {
        "type": "H3",
        "ar": "معلومات عامة عن فرنسا",
        "en": "General information about France"
      },
      {
        "type": "LIST",
        "ar": [
          "هل تعلم ان اول عملية زرع قلب صناعي وزرع للوجه كانت في فرنسا",
          "هل تعلم ان اول اختراع بالون بالهواء الساخن وكمرات التصوير السينمائية والدراجة الهوائية والاطارات القابلة للنفخ كانت في فرنسا",
          "هل تعلم ان اختراع للوحات تراخيص السيارات كانت في فرنسا",
          "هل تعلم ان باريس كانت مدينة رومانية في الأصل",
          "هل تعلم ان اول متجر تم فتحه في العالم كان في فرنسا عام 1838م",
          "هل تعلم ان اكثر شعب ينام هو الشعب الفرنسي ، حيث ينامون بمتوسط 8.83 ساعة في اليوم",
          "هل تعلم ان تناول الخيول والارانب أمر شائع في فرنسا"
        ],
        "en": [
          "Did you know that the first artificial heart transplant and the first face transplant were in France?",
          "Did you know that the hot-air balloon, cinema cameras, the bicycle and inflatable tyres were first invented in France?",
          "Did you know that the invention of vehicle licence plates was in France?",
          "Did you know that Paris was originally a Roman city?",
          "Did you know that the first department store in the world opened in France in 1838?",
          "Did you know that the French are the people who sleep the most, sleeping an average of 8.83 hours a day?",
          "Did you know that eating horse and rabbit is common in France?"
        ]
      }
    ]
  },
  {
    "slug": "things-to-do",
    "title_ar": "اشياء عليك القيام بها في فرنسا",
    "title_en": "Things you should do in France",
    "kicker_ar": "تجارب",
    "kicker_en": "Experiences",
    "image": "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_9954.jpg?w=1400&ssl=1",
    "blocks": [
      {
        "type": "P",
        "ar": "تعرف على عدد من الأشياء المستحسن القيام بها أثناء السفر الى فرنسا",
        "en": "Discover a number of things you are recommended to do while travelling in France."
      },
      {
        "type": "IMG",
        "src": "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_9954.jpg?w=1400&ssl=1",
        "cap_ar": "اكتشف فرنسا",
        "cap_en": "Discover France"
      },
      {
        "type": "H3",
        "ar": "شاهد برج ايفل",
        "en": "See the Eiffel Tower"
      },
      {
        "type": "P",
        "ar": "لا تكتمل زيارة فرنسا بدون القاء تحية على برج ايفل ، فاذا كنت على استعداد لمواجهة الحشود فمن المستحسن ان تذهب الى القمة مرة واحدة على الأقل للحصول على منظر لا مثيل له لباريس ، حيث يتحول البرج كل مساء ومع بداية كل ساعة من غروب الشمس الى عرض مبهر للاضواء المتلالئة",
        "en": "No visit to France is complete without saying hello to the Eiffel Tower. If you are ready to face the crowds, it is worth going to the top at least once for an unrivalled view of Paris. Every evening, on the hour from sunset, the tower turns into a dazzling display of sparkling lights."
      },
      {
        "type": "H3",
        "ar": "قم بالابحار في نهر السين",
        "en": "Cruise on the river Seine"
      },
      {
        "type": "P",
        "ar": "يعد الابحار في نهر السين طريقة مبهجة لمشاهدة جميع المعالم السياحية في باريس اثناء الاستمتاع بتجربة الاسترخاء ، كبالاس كونكورد ومتحف اللوفر ومتحف دورسيه وكتدرائية نوتردام وغيرها من المعالم على طول الطريق",
        "en": "Cruising the Seine is a delightful way to see all the sights of Paris while enjoying a relaxing experience: Place de la Concorde, the Louvre, the Musée d'Orsay, Notre-Dame Cathedral and other landmarks along the way."
      },
      {
        "type": "H3",
        "ar": "تجول في الاحياء القديمة في باريس",
        "en": "Wander the old quarters of Paris"
      },
      {
        "type": "P",
        "ar": "تعد احياء كوارتير لاتين ولي سانت لويس ولي مارايس من الاحياء الساحرة ، حيث يمكن للزوار الاستمتاع بأجواء باريس التي تعود الى القرون الوسطى",
        "en": "The Latin Quarter, Île Saint-Louis and Le Marais are charming districts where visitors can enjoy the medieval atmosphere of Paris."
      },
      {
        "type": "P",
        "ar": "ابدأ كذلك في استكشاف الضفة اليسرى في الحي اللاتيني ، وهو الحي الجامعي بالمدينة منذ العصور الوسطى ، بعد اكتشاف المتاجر والمكتبات الانتقائية في هذا الحي النابض بالحياة ، اعبر نهر السين عند جسر بيتي بونت وتوجه الى ايل دو لا سيتي للاستمتاع بواجهة كاتدرائية نوتردام",
        "en": "Start too by exploring the Left Bank in the Latin Quarter, the city's university district since the Middle Ages. After discovering the eclectic shops and bookstores in this lively quarter, cross the Seine at the Petit Pont and head to Île de la Cité to enjoy the façade of Notre-Dame Cathedral."
      },
      {
        "type": "H3",
        "ar": "اشتمم راحة اللافندر في بروفانس",
        "en": "Breathe in the lavender of Provence"
      },
      {
        "type": "P",
        "ar": "خلال اشهر الصيف في فرنسا تمتلئ الحقول في المنطقة الجنوبية من بروفانس بالخزامى ، يعد الذهاب في جولة بالسيارة عبر المنطقة أو ركوب الدراجات في الارجاء طريقة رائعة لتجربة هذا الحدث الموسمي ، كما يرجى تخصيص وقتا أيضا لزيارة معمل التقطير لترى كيف يتم تحويل الأزهار الى ريت عطري",
        "en": "During the summer months in France the fields of southern Provence fill with lavender. Driving through the region or cycling around is a wonderful way to experience this seasonal event, and do set aside time to visit a distillery to see how the flowers are turned into fragrant oil."
      },
      {
        "type": "H3",
        "ar": "استمتع بجمال مونت بلانك",
        "en": "Enjoy the beauty of Mont Blanc"
      },
      {
        "type": "P",
        "ar": "مونت بلانك هو أعلى جبال الألب الفرنسية ، وهو وجهة شهيرة للزوار ، خاصة أولئك الذين يبحثون عن عطلة نشطة للتزلج أو المشي لمسافات طويلة ، فمن الأفضل تجربتها من مدينة شامونيكس ، التي كانت موطنا لأول دورة ألعاب أولمبية شتوية في عام 1924م وتقع شمال القمة",
        "en": "Mont Blanc is the highest of the French Alps and a popular destination for visitors, especially those seeking an active holiday of skiing or hiking. It is best experienced from the town of Chamonix, home of the first Winter Olympics in 1924, which lies north of the summit."
      },
      {
        "type": "H3",
        "ar": "خذ نزهه حول حديقة مونيه في فرنسا",
        "en": "Take a stroll around Monet's garden"
      },
      {
        "type": "P",
        "ar": "يبدو استكشاف حديقة الرسام الانطباعي كلود مونيه وكانك تخطو داخل احدى لوحاته الشهيرة ، يقع منزل الفنان السابق في قرية جيفرني الصغيرة ، وهي رحلة سهلة ليوم واحد في باريس ، وتعتبر هذه الحديقة مصدر الهام لسلسلة لوحات كلود مونيه من الزنابق المائية",
        "en": "Exploring the garden of the impressionist painter Claude Monet feels like stepping inside one of his famous paintings. The artist's former home is in the small village of Giverny, an easy day trip from Paris, and this garden was the inspiration for Monet's Water Lilies series."
      },
      {
        "type": "H3",
        "ar": "قم بزيارة أعجوبة الغرب مونت سانت مايكل",
        "en": "Visit the wonder of the west, Mont Saint-Michel"
      },
      {
        "type": "P",
        "ar": "تعد جزيرة مونت سان ميشيل الصغيرة مع الدير القديم الذي يطفو على القمة ، واحدة من أكثر معالم فرنسا شهرة وأكثرها جمالا في الحياة الواقعية مما هي عليه في الصور ، حاول قدر المستطاع البقاء لفترة غروب الشمس لرؤية أجمل غروب",
        "en": "The small island of Mont Saint-Michel, with its ancient abbey floating on top, is one of France's most famous landmarks and even more beautiful in real life than in photographs. Try as much as possible to stay until sunset to see the most beautiful sunset."
      },
      {
        "type": "H3",
        "ar": "امشي في جيمنس دي سنت جاسكيس",
        "en": "Walk the Chemins de Saint Jacques"
      },
      {
        "type": "P",
        "ar": "لقضاء عطلة نشطة في فرنسا ، حاول قضاء بضعة أيام في اتباع احد مسارات المشي المعروفة مجتمعة باسم Chemins de Saint Jacques مع نقاط انطلاق مختلفة في جميع انحاء فرنسا تؤدي جميعها الى كاتدرائية سانتياغو دي كومبوستيلا في جنوب غرب اسبانيا ، انها رحلة شهيرة وطريقة رائعة لتجربة الريف",
        "en": "For an active holiday in France, try spending a few days following one of the walking routes known collectively as the Chemins de Saint Jacques, with different starting points across France all leading to the Cathedral of Santiago de Compostela in south-west Spain. It is a famous journey and a wonderful way to experience the countryside."
      }
    ]
  },
  {
    "slug": "castles",
    "title_ar": "اشهر عشر قلاع في فرنسا",
    "title_en": "The ten most famous castles in France",
    "kicker_ar": "قلاع",
    "kicker_en": "Castles",
    "image": "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0205.jpg?w=1400&ssl=1",
    "blocks": [
      {
        "type": "P",
        "ar": "في فرنسا كل قلعة هي قصر ، ولكن ليس كل قصر هو قلعة ، يمكن استخدام الكلمة الفرنسية لوصف معظم آلاف القلاع والقصور والمنازل الفخمة المنتشرة في جميع أنحاء البلاد ، تقع العديد من القلاع الفرنسية المفضلة في وادي لوار الأخضر ، ولكن هناك قلاع رائعة تعود لقرون الوسطى وقلاع القصص الخيالية في كل جزء من البلاد ، من الأطلال الرومانسية في Château de Loches الى مدينة Cité de Carcassonne التي تم تجديدها بالكامل تقريبا ، لا تكتمل أي زيارة الى فرنسا دون استكشاف أفضل القلاع في فرنسا",
        "en": "In France every castle is a château, but not every château is a castle. The French word can be used to describe most of the thousands of castles, palaces and stately homes spread across the country. Many favourite French châteaux lie in the green Loire Valley, but there are magnificent medieval fortresses and fairy-tale castles in every part of the country, from the romantic ruins of the Château de Loches to the almost completely restored Cité de Carcassonne. No visit to France is complete without exploring the best castles in France."
      },
      {
        "type": "H3",
        "ar": "قلعة دي فيتر (Chateau de Vitre)",
        "en": "Château de Vitré"
      },
      {
        "type": "P",
        "ar": "قلعة من القرون الوسطى تقع في بلدة فيتري في بريتاني ، تم بناء قصر فيتري في نهاية القرن الحادي عشر بعد أن أصيب حصن خشبي في الموقع بسلسلة من الحرائق ، تم توسيع القلعة خلال القرن الخامس عشر مع اضافة منزل هرج وجسر جدراي وبرج فخم ، ومع ذلك استسلمت القلعة المحصنة دون قتال عام 1487م في عام 1820م ، اشترت المدينة القلعة بمبلغ 8500 فرنك واستعادت هيكلها الخارجي ، تضم القلعة اليوم متحفا صغيرا وقاعة بلدية",
        "en": "A medieval castle in the town of Vitré in Brittany. The château was built at the end of the 11th century after a wooden fort on the site was hit by a series of fires. The castle was expanded during the 15th century with the addition of a gatehouse, a drawbridge and a grand tower. Nevertheless the fortified castle surrendered without a fight in 1487. In 1820 the town bought the castle for 8,500 francs and restored its outer structure. Today the castle houses a small museum and the town hall."
      },
      {
        "type": "IMG",
        "src": "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0205.jpg?w=1400&ssl=1",
        "cap_ar": "قلعة دي فيتر (Chateau de Vitre)",
        "cap_en": "Château de Vitré"
      },
      {
        "type": "H3",
        "ar": "قلعة دي فوجير (Château de Fougères)",
        "en": "Château de Fougères"
      },
      {
        "type": "P",
        "ar": "تقع قلعة دي فوجير Château de Fougères بالقرب من مدينة Rennes في Brittany في القرن 11 على صخرة محاطة بنهر Nançon ، وقد تم تدمير الهيكل الخشبي الأصلي عندما أخذ هنري الثاني من انجلترا الحصن ، وتم بناء قلعة ثانية من قبل هنري الثاني بلانتانجينيت من الحجر ، وأضيف برجان ضخمان الى الحصن في القرن الثالث عشر ، تعتبر قلعة دي فوجير أحد أكبر القلاع التي تعود الى القرون الوسطى في أوروبا ، وهو اليوم ملك لمدينة Fougères ويتم استخدامه كمزار سياحي ، يقود المرشدون الصوتيين الزوار عبر الحصن مع الموسيقى والمؤثرات الصوتية التي تساعد على اعادة خلق الشعور بحياة القلعة خلال العصور الوسطى",
        "en": "Château de Fougères stands near the city of Rennes in Brittany, built in the 11th century on a rock surrounded by the river Nançon. The original wooden structure was destroyed when Henry II of England took the fort, and a second castle was built in stone by Henry II Plantagenet, with two huge towers added to the fortress in the 13th century. Château de Fougères is one of the largest medieval castles in Europe. Today it belongs to the town of Fougères and is used as a tourist attraction; audio guides lead visitors through the fortress with music and sound effects that help recreate the feeling of castle life during the Middle Ages."
      },
      {
        "type": "IMG",
        "src": "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0206.jpg?w=1400&ssl=1",
        "cap_ar": "قلعة دي فوجير (Château de Fougères)",
        "cap_en": "Château de Fougères"
      },
      {
        "type": "H3",
        "ar": "قلعة انجيه (Château d’Angers)",
        "en": "Château d'Angers"
      },
      {
        "type": "P",
        "ar": "تم بناء قلعة انجيه Château d’Angers على موقع مستوطنة رومانية مهجورة في القرن التاسع ، وهي واحدة من أكثر القلاع زيارة في فرنسا ، يقع القصر في وادي اللوار في مدينة أنجيه ، وهو موطن لمطعم نسيج العالم الشهير ، وهي مجموعة من المفروشات الجميلة المنسوجة بين عامي 1373م و 1382م ، ويصور الشريط الأول أحداث لويس الأول ، دوق أنجو ، كتاب الوحي للكتاب المقدس بتفاصيل مذهلة ولون ، مع أبراج المراقبة 17 والبناء المحظور من الحجر الأسود ، القلعة مثيرة للاعجاب أيضا ، الجولات المصحوبة بمرشدين في القلعة مجانية وتتوفر أدلة صوتية ذاتية التوجيه مقابل رسوم رمزية",
        "en": "Château d'Angers was built on the site of an abandoned Roman settlement in the 9th century and is one of the most visited castles in France. The château lies in the Loire Valley in the city of Angers and is home to the world-famous Apocalypse Tapestry, a set of beautiful hangings woven between 1373 and 1382, the first of which depicts, for Louis I, Duke of Anjou, the Book of Revelation in astonishing detail and colour. With its 17 watchtowers and forbidding black stone construction, the castle is impressive too. Guided tours of the castle are free, and self-guided audio guides are available for a small fee."
      },
      {
        "type": "IMG",
        "src": "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0207.jpg?w=1400&ssl=1",
        "cap_ar": "قلعة انجيه (Château d’Angers)",
        "cap_en": "Château d'Angers"
      },
      {
        "type": "H3",
        "ar": "قلعة جيلارد (Château Gaillard)",
        "en": "Château Gaillard"
      },
      {
        "type": "P",
        "ar": "تقع قلعة جيلارد Château Gaillard على تل يطل على نهر السين ومدينة Les Andelys ، وهو واحد من أجمل المعالم السياحية في Upper Normandy الخلابة ، بنى ريتشارد قلب الأسد القلعة بين 1196م و1198م ، ولكن على الرغم من اغناء متحدة المركز والآلات القاتلة ، استولت على القلعة فيليب الثاني من فرنسا بعد ست سنوات فقط ، استمرت قلعة جيلارد Château Gaillard في تغيير الأيدي بين اللغتين الانجليزية والفرنسية حتى أمر بتدميرها هنري الرابع ملك فرنسا في عام 1599م ، ومع ذلك قاومت جدران القلعة السميكة الدمار ، وما زالت القلعة تمثل مشهدا مثيرا للاعجاب ، معظم أنقاض القلعة مفتوحة على مدار العام ، تفتح المنطقة الداخلية ، التي تحتوي على أماكن اقامة للملك من مارس الى نوفمبر",
        "en": "Château Gaillard sits on a hill overlooking the Seine and the town of Les Andelys, one of the finest sights in picturesque Upper Normandy. Richard the Lionheart built the castle between 1196 and 1198, but despite its concentric defences and deadly machinery it was captured by Philip II of France just six years later. Château Gaillard kept changing hands between the English and the French until Henry IV of France ordered its destruction in 1599. Even so, the castle's thick walls resisted the demolition and the castle remains an impressive sight. Most of the ruins are open all year round; the inner area, which contains the king's apartments, opens from March to November."
      },
      {
        "type": "IMG",
        "src": "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0208.jpg?w=1400&ssl=1",
        "cap_ar": "قلعة جيلارد (Château Gaillard)",
        "cap_en": "Château Gaillard"
      },
      {
        "type": "H3",
        "ar": "قلعة دي فينسين (Château de Vincennes)",
        "en": "Château de Vincennes"
      },
      {
        "type": "P",
        "ar": "تقع قلعة دي فينسين Château de Vincennes في ضاحية فينسين في باريس ، قد تم تحسين الموقع خلال القرن الرابع عشر مع الاحتفاظ بحراسة شديدة ، كما تمت اضافة جدار خارجي مستطيل الشكل في القرن الخامس عشر ، وقد ساعد خندق مائي واسع وجسرين من الأدراج على تأمين الموقع ، الذي كان بمثابة مقر ملكي حتى منتصف القرن السادس عشر ، في عام 1860م ، أعطى نابليون الثالث القصر وبوا دي فينسين المجاورة لباريس للاستخدام كحديقة عامة ، واليوم يفتح الموقع والكنيسة الملكية التي تعود الى القرن السادس عشر للزوار",
        "en": "Château de Vincennes lies in the Vincennes suburb of Paris. The site was improved during the 14th century with a heavily guarded keep, and a rectangular outer wall was added in the 15th century. A wide moat and two drawbridges helped secure the site, which served as a royal residence until the mid-16th century. In 1860 Napoleon III gave the château and the neighbouring Bois de Vincennes to Paris for use as a public park. Today the site and the 16th-century royal chapel are open to visitors."
      },
      {
        "type": "IMG",
        "src": "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0209.jpg?w=1400&ssl=1",
        "cap_ar": "قلعة دي فينسين (Château de Vincennes)",
        "cap_en": "Château de Vincennes"
      },
      {
        "type": "H3",
        "ar": "قلعة أوت كونيجسبورج (Château du Haut-Kœnigsbourg)",
        "en": "Château du Haut-Kœnigsbourg"
      },
      {
        "type": "P",
        "ar": "تقع قلعة أوت كونيجسبورج في موقع استراتيجي على تلة مرتفعة تطل على سهل الألزاسي في جبال Vosges في فرنسا ، وكانت تستخدم من قبل قوى متعاقبة من العصور الوسطى حتى حرب الثلاثين عاما عندما احترقت القلعة ونهبت من قبل القوات السويدية بعد حصار استمر 52 يوما ، وبعد ذلك ترك القصر دون استخدام لعدة مئات من السنين ، في عام 1899م ، منحت للامبراطور الألماني فيلهلم الثاني وأعيد بناؤها كما كانت عشية حرب الثلاثين عاما ، وعندما صادر الفرنسيون القلعة بعد الحرب العالمية الأولى ، كان من المألوف أن تسللهم الى القلعة بسبب صلاتها بالامبراطور ولكن اليوم هي واحدة من أشهر القلاع في فرنسا ، مما جذب أكثر من 500 ألف زائر سنويا",
        "en": "Château du Haut-Kœnigsbourg occupies a strategic position on a high hill overlooking the Alsatian plain in the Vosges mountains of France. It was used by successive powers from the Middle Ages until the Thirty Years' War, when the castle was burned and looted by Swedish troops after a siege of 52 days. The château was then left unused for several hundred years. In 1899 it was granted to the German Emperor Wilhelm II and rebuilt as it had been on the eve of the Thirty Years' War. When the French confiscated the castle after the First World War it was unpopular because of its links to the Emperor, but today it is one of the most famous castles in France, attracting more than 500,000 visitors a year."
      },
      {
        "type": "IMG",
        "src": "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0210.jpg?w=1400&ssl=1",
        "cap_ar": "قلعة أوت كونيجسبورج (Château du Haut-Kœnigsbourg)",
        "cap_en": "Château du Haut-Kœnigsbourg"
      },
      {
        "type": "H3",
        "ar": "قلعة دي لوتش (Château de Loches)",
        "en": "Château de Loches"
      },
      {
        "type": "P",
        "ar": "بنيت قلعة دي لوتش Château de Loches على بعد حوالي 500 متر (1600 قدم) من ضفاف نهر Indre في وادي Loire ، ويشتهر بمساحته المركزية الضخمة على شكل مربع ، كما يشتهر بروابطها بالملوك الفرنسي والانكليزي ، تم تشييد القلعة في القرن الحادي عشر ، وقد تم تشييدها من قبل هنري الثاني وريتشارد Lioncart في القرن الثاني عشر ، ثم أصبحت بعد ذلك مقر الاقامة المفضل لتشارلز السابع من فرنسا ، كان في القاعة العظيمة للقلعة أن جوان آرك أقنع تشارلز بأنه ينبغي أن يتوج في ريمز ، وفي حين أن الأقسام القديمة من القصر تقع الآن تحت الأنقاض ، فقد تم تجديد المساكن الملكية التي تعود الى القرن السادس عشر بالكامل",
        "en": "Château de Loches was built about 500 metres (1,600 feet) from the banks of the river Indre in the Loire Valley. It is famous for its massive square central keep and for its links to French and English kings. The castle was built in the 11th century, extended by Henry II and Richard the Lionheart in the 12th century, and later became the favourite residence of Charles VII of France. It was in the castle's great hall that Joan of Arc persuaded Charles that he should be crowned at Reims. While the oldest sections of the château now lie in ruins, the 16th-century royal lodgings have been completely restored."
      },
      {
        "type": "IMG",
        "src": "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0211.jpg?w=1400&ssl=1",
        "cap_ar": "قلعة دي لوتش (Château de Loches)",
        "cap_en": "Château de Loches"
      },
      {
        "type": "H3",
        "ar": "قلعة دي ساومور (Château de Saumur)",
        "en": "Château de Saumur"
      },
      {
        "type": "P",
        "ar": "تقع قلعة دي ساومور Château de Saumur على تل محصن يطل على المدينة والنهر أسفلها ، وهو واحد من أجمل القلاع التي تقع على طول أطول نهر في فرنسا ، وهو نهر اللوار ، يبدو القصر بأبراج الزوايا الثمانية ، وكأنه تم رفعه من قصة خيالية ، مما يجعله وجهة مثالية للعائلات ، بني القصر في الأصل كحصن في القرن العاشر ، وقد حقق مظهره الخفيف والأنيق في أواخر القرن الثاني عشر عندما أعيد بناؤه من قبل هنري الثاني من انجلترا ، وهي الآن ملك للمدينة ، وتضم العديد من المتاحف ، بما في ذلك متحف Musée de la figUrine-Jouet الذي يتميز بمجموعة من التماثيل والألعاب الأثرية",
        "en": "Château de Saumur stands on a fortified hill overlooking the town and the river below, one of the most beautiful castles along France's longest river, the Loire. With its eight corner towers the château looks as if it were lifted out of a fairy tale, making it an ideal destination for families. It was originally built as a fortress in the 10th century and gained its light, elegant appearance in the late 12th century when it was rebuilt by Henry II of England. It now belongs to the town and houses several museums, including the Musée de la Figurine-Jouet with its collection of antique figurines and toys."
      },
      {
        "type": "IMG",
        "src": "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0212.jpg?w=1400&ssl=1",
        "cap_ar": "قلعة دي ساومور (Château de Saumur)",
        "cap_en": "Château de Saumur"
      },
      {
        "type": "H3",
        "ar": "قصر الباباوات (Palais des Papes)",
        "en": "Palais des Papes"
      },
      {
        "type": "P",
        "ar": "يقع قصر الباباوات Palace of the Popes في مدينة Avignon في جنوب فرنسا ، ويعتبر أحد أهم المباني التي تعود الى القرون الوسطى في أوروبا ، وقد بدأ بناء دير في الموقع عام 1252م ، وفي عام 1309م ، أصبح مقر البابوية عندما تمردت روما على انتخاب البابا كليمنت الخامس ، وظل القصر مركزا للمسيحية الغربية طوال القرن الرابع عشر ، يشكل الحصن الذي يجتذب نحو 650 ألف زائر سنويا أكبر مبنى قوطي في أوروبا ، وهو واحد من أفضل عشرة معالم سياحية في فرنسا ، وتشمل معالم الجولة الجص الذي يعود الى القرن الرابع عشر والذي رسمه ماتيو جيوفانيتي والغرف السرية المخبأة في جدران القصر التي يبلغ سمكها 3 أمتار (10 أقدام)",
        "en": "The Palace of the Popes stands in the city of Avignon in southern France and is considered one of the most important medieval buildings in Europe. Construction of a monastery on the site began in 1252, and in 1309 it became the seat of the papacy when Rome rebelled against the election of Pope Clement V. The palace remained the centre of Western Christianity throughout the 14th century. Attracting around 650,000 visitors a year, the fortress is the largest Gothic building in Europe and one of the top ten attractions in France. Highlights of the tour include the 14th-century frescoes painted by Matteo Giovannetti and the secret rooms hidden in the palace walls, which are 3 metres (10 feet) thick."
      },
      {
        "type": "IMG",
        "src": "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0213.jpg?w=1400&ssl=1",
        "cap_ar": "قصر الباباوات (Palais des Papes)",
        "cap_en": "Palais des Papes"
      },
      {
        "type": "H3",
        "ar": "مدينة كاركاسون (Cite de Carcassonne)",
        "en": "Cité de Carcassonne"
      },
      {
        "type": "P",
        "ar": "ربما تكون مدينة كاركاسون المحصنة أكثر من كونها قلعة ، وهي واحدة من أقدم القلاع وأكثرها اثارة للاعجاب في البلاد ، ونظرا لموقعها على الطرق التاريخية عبر جنوب فرنسا ، فقد ظل الموقع محتلا منذ أكثر من 5000 سنة ، يرجع تاريخ أجزاء من جدران القلعة الى أوج الامبراطورية الرومانية ، واحتل فيسيغوثس البناء أثناء القرن الخامس ، واستمر حكام القلعة المتعاقبون في تحسين القلعة حتى القرن السابع عشر عندما بدأت في السقوط ، وقد حول مشروع ترميم في القرن 19 مدينة كاركاسون الى وجهة سياحية شهيرة ، جولات ارشادية تأخذ الزوار الى داخل الغرف الداخلية للقلعة",
        "en": "Carcassonne is perhaps a fortified city more than a castle, and it is one of the oldest and most impressive strongholds in the country. Because of its position on the historic routes across southern France, the site has been occupied for more than 5,000 years. Parts of the walls date back to the height of the Roman Empire, the Visigoths occupied the structure during the 5th century, and successive rulers kept improving the fortress until the 17th century, when it began to fall into decline. A 19th-century restoration project turned the Cité de Carcassonne into a famous tourist destination, and guided tours take visitors inside the castle's inner chambers."
      },
      {
        "type": "IMG",
        "src": "https://i0.wp.com/100region.com/wp-content/uploads/2023/03/img_0214.jpg?w=1400&ssl=1",
        "cap_ar": "مدينة كاركاسون (Cite de Carcassonne)",
        "cap_en": "Cité de Carcassonne"
      }
    ]
  },
];

export const getGuide = (slug: string) => franceGuides.find((g) => g.slug === slug);
