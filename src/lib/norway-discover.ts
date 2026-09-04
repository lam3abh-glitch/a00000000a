import type { Guide } from "./france-guides";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const HERO = U("2023/04/img_0401.jpg");
const HERO2 = U("2023/04/img_0402.jpg");

// Main listed guide: اكتشف النرويج (source p=34456)
export const norwayDiscoverGuide: Guide = {
  slug: "discover-norway",
  title_ar: "اكتشف النرويج – تعرف على كل ما يخص مملكة النرويج قبل السفر لها",
  title_en: "Discover Norway — everything to know about the kingdom before you travel",
  kicker_ar: "اكتشف النرويج",
  kicker_en: "Discover Norway",
  image: HERO,
  blocks: [
    { type: "H3", ar: "أصل تسمية النرويج", en: "The origin of the name Norway" },
    {
      type: "P",
      ar: "يطلق على النرويج رسميا تسمية مملكة النرويج ، الاسم التقليدي للنرويج في اللغة النوردية القديمة هو نوريجر ، أما الاسم اللاتيني في القرون الوسطى فكان نورثفيجيا ، بينما وردت أقدم صيغة مكتوبة للاسم في الانكليزية (في أواخر القرن التاسع من رحلات أوتير الهالوغالاندي) باسم نوردويغ",
      en: "Norway is officially called the Kingdom of Norway. Its traditional Old Norse name was Norvegr, the medieval Latin name was Northvegia, and the oldest written English form of the name appears in the late ninth century, in the voyages of Ohthere of Hålogaland, as Norðweg.",
    },
    {
      type: "P",
      ar: "كما تزعم بعض نصوص القرون الوسطى أن أصل التسمية يعود الى الملك نور الأسطوري ، يسود الاعتقاد حاليا أن الاسم يعود الى التسمية النوردية القديمة نوردفيغر ، والتي تعني طريق الشمال ، يوجد في اللغة النرويجية أيضا تسميات أخرى مثل أوسترفيغر بمعنى الأراضي الشرقية (روسيا وآسيا) ، وفيسترفيغر بمعنى الأراضي الغربية (الجزر البريطانية) ، وسودرفيغر بمعنى الأراضي الجنوبية (البحر المتوسط) ، ويقول الخبراء أنه لا يزال هناك امكانية كون الأشكال من العصور الوسطى لكلمة نورد هي مصطلحات شعبية وأن للتسمية أصل آخر",
      en: "Some medieval texts claim the name goes back to a legendary King Nór. The prevailing view today is that it derives from the Old Norse Norðvegr, meaning the northern way. Norwegian also has related terms such as Austrvegr for the eastern lands (Russia and Asia), Vestrvegr for the western lands (the British Isles) and Suðrvegr for the southern lands (the Mediterranean). Experts note it is still possible that the medieval forms of the word norð were folk terms and that the name has another origin.",
    },
    { type: "H3", ar: "تاريخ النرويج", en: "The history of Norway" },
    {
      type: "P",
      ar: "تشير الاكتشافات الأثرية أن منطقة النرويج الحالية كانت مأهولة بالسكان منذ ما لا يقل عن الألف العاشرة قبل الميلاد ، يطلق على السكان الأصليين في شمال النرويج ووسطها اسم شعب سامي ، رغم أن الثقافة النوردية وصلت في وقت مبكر جدا ، ايضا ذكر الملك الحالي للنرويج أن المملكة تأسست على أراضي الشعبين النرويجي وسامي ، وفي القرون الأولى للميلاد ، تألفت النرويج من عدد من الممالك الصغيرة ، ووفقا لجاريد دياموند ، تعلم الشعب النوردي ركوب البحر حوالي سنة 600م",
      en: "Archaeological finds indicate that the area of present-day Norway was inhabited at least as early as the tenth millennium BC. The indigenous people of northern and central Norway are the Sámi, although Norse culture arrived very early. Norway's current king has said the kingdom was founded on the lands of two peoples, the Norwegians and the Sámi. In the first centuries AD Norway consisted of a number of small kingdoms, and according to Jared Diamond the Norse learned to take to the sea around the year 600.",
    },
    { type: "MORE", topic: "norway-history", label_ar: "تاريخ النرويج العريق", label_en: "The long history of Norway" },
    { type: "H3", ar: "جغرافيا النرويج", en: "The geography of Norway" },
    {
      type: "P",
      ar: "تشكل النرويج الجزء الغربي من اسكندنافيا في شمال اوروبا ، ساحلها متعرج يتخلله العديد من الفيوردات الهائلة وآلاف الجزر ، يبلغ طول الساحل 2,500 كم ، لكنه يصل الى 83,000 كم عند ضم هذه الجزر والفيوردات",
      en: "Norway forms the western part of Scandinavia in northern Europe. Its jagged coast is broken by many immense fjords and thousands of islands. The coastline is 2,500 km long, but reaches 83,000 km when those islands and fjords are included.",
    },
    {
      type: "P",
      ar: "تشترك النرويج مع السويد في 1,619 كم من الحدود البرية و727 كم مع فنلندا ، و196 كم مع روسيا في الشرق ، أما الى الشمال والغرب والجنوب فيحد النرويج بحر بارنتس وبحر النرويج وبحر الشمال وسكاجيراك",
      en: "Norway shares 1,619 km of land border with Sweden, 727 km with Finland and 196 km with Russia in the east. To the north, west and south it is bounded by the Barents Sea, the Norwegian Sea, the North Sea and the Skagerrak.",
    },
    { type: "IMG", src: HERO2, cap_ar: "النرويج", cap_en: "Norway" },
    { type: "H3", ar: "مساحة النرويج", en: "The area of Norway" },
    {
      type: "P",
      ar: "من مساحة البلاد البالغة 385,207 كيلومترا مربعا ، بما فيها سفالبارد وجان ماين ، تهيمن المناطق الجبلية والمرتفعة على البلاد مع وجود العديد من المظاهر الطبيعية التي نشأت عن الكتل الجليدية في عصور ما قبل التاريخ والطبوغرافيا المتنوعة",
      en: "Of the country's 385,207 square kilometres, including Svalbard and Jan Mayen, mountains and highlands dominate, with many natural features created by prehistoric ice masses and a highly varied topography.",
    },
    {
      type: "P",
      ar: "من أبرز هذه المعالم هي الفيوردات : وهي أخاديد عميقة محفورة في الأرض غمرتها مياه البحر بعد نهاية العصر الجليدي ، أطولها هو سوجنيفيوردن بطول 204 كم ، يعد سوجنيفيوردن ثاني أعمق فيورد في العالم وبحيرة هورنيندالسفاتنيت أعمق بحيرة في اوروبا ، يمكن مشاهدة الارض المتجمدة طوال العام في المناطق الجبلية المرتفعة وفي المناطق الداخلية من مقاطعة فينمارك ، كما توجد العديد من الأنهار الجليدية في النرويج",
      en: "The most striking of these features are the fjords: deep gorges carved into the land and flooded by the sea after the end of the ice age. The longest is the Sognefjord at 204 km, the second deepest fjord in the world, while Hornindalsvatnet is the deepest lake in Europe. Permanently frozen ground can be seen year-round in the high mountains and the interior of Finnmark, and Norway also has many glaciers.",
    },
    { type: "H3", ar: "طبيعة النرويج", en: "The nature of Norway" },
    {
      type: "P",
      ar: "يمكن للناظر أن يطالع عددا من أكثر المناظر الطبيعية الخلابة في العالم بالنرويج ، حيث يضم الساحل الغربي لجنوب البلاد وسواحل شمالها حاليا بعض المشاهد الساحرة الفريدة عالميا ، صنفت جمعية ناشيونال جيوغرافيك الفيوردات النرويجية على أنها مصدر الجذب السياحي الأعلى في العالم ، في عام 2008م وضع مؤشر الأداء البيئي النرويج في المركز الثاني بعد سويسرا بعد استنادا الى الأداء البيئي لسياسات البلاد",
      en: "Norway offers some of the most spectacular scenery in the world: the western coast of the south and the northern shores hold views that are unique globally. The National Geographic Society ranked the Norwegian fjords as the world's top tourist attraction, and in 2008 the Environmental Performance Index placed Norway second after Switzerland on the environmental performance of its policies.",
    },
    {
      type: "P",
      ar: "وفي النرويج العديد من الشلالات الجميلة التي تم تصنيف أحدها حسب قاعدة بيانات الشلالات العالمية كأحد أجمل الشلالات في العالم وهو شلال لانجفوسن",
      en: "Norway also has many beautiful waterfalls, one of which — Langfossen — is listed by the World Waterfall Database among the most beautiful in the world.",
    },
    { type: "H3", ar: "المطبخ النرويجي", en: "Norwegian cuisine" },
    {
      type: "P",
      ar: "تظهر تقاليد الطهي النرويجية نفوذ البحر والتقاليد الزراعية حيث سمك السلمون (الطازجة والمجمد) والرنجة (مخللة أو متبلة) والتروتة وسمك القد وغيرها من المأكولات البحرية ، يقابلها الجبن ومنتجات الألبان والخبز ، لفس هو خبز نرويجي من البطاطا شائع تناوله في موسم عيد الميلاد ، بعض الأطباق التقليدية النرويجية تشمل لوتفسك وسامالهوف وبينكيوت وكروتكاكار وفوريكول",
      en: "Norwegian cooking traditions show the influence of the sea and of farming: salmon (fresh and frozen), herring (pickled or spiced), trout, cod and other seafood, set against cheese, dairy products and bread. Lefse is a Norwegian potato bread commonly eaten at Christmas. Traditional dishes include lutefisk, smalahove, pinnekjøtt, krotekake and fårikål.",
    },
    { type: "H3", ar: "الرياضات الشتوية بالنرويج", en: "Winter sports in Norway" },
    {
      type: "P",
      ar: "تغطي الثلوج الكثيفة مختلف أنحاء النرويج كل شتاء ، لذا كان من الطبيعي أن تنال الرياضات الشتوية المرتبطة بالثلج والجليد شعبية واسعة في البلاد ، وفي مقدمة هذه الرياضات يأتي التزلج ، الذي برز في هذه المنطقة من العالم منذ حوالي 4000 سنة ، عندما لم يكن أمام السكان حل آخر سوى اللجوء اليه للنتقل من مكان لآخر ، يعتبر سوندر نورهايم أبو التزلج النرويجي في الفترة المعاصرة ، ذلك أنه صمم نوعا من التزلج يعرف بتزلج تلمارك ، وهو عبارة عن مزج لتقنيات التزلج العادي والقفزي والمتعرج",
      en: "Heavy snow covers much of Norway every winter, so it was natural for snow and ice sports to become widely popular. Skiing comes first among them; it emerged in this part of the world some 4,000 years ago, when people had no other way of moving from place to place. Sondre Norheim is considered the father of modern Norwegian skiing, having designed the style known as Telemark skiing, a blend of ordinary, jumping and slalom techniques.",
    },
    {
      type: "P",
      ar: "وصل التزلج من النرويج الى الولايات المتحدة عام 1825م على يد المهاجرين النرويجيين ، ومن هناك انتشر في مختلف أرجاء المعمورة ، يعتبر التزلج رياضة مفضلة عند الكثير من الناس في النرويج ، حيث يتراوح سن من يمارسه بين سنتين وحتى 90 سنة ، وفي البلاد العديد من مدارس ومؤسسات تعليم هذه الرياضة ، أقامت مدينة تروندهايم بطولة العالم في الرياضات الشمالية عام 1996م ، وقد فاز فيها شخص ياباني بكأس التزلج",
      en: "Skiing reached the United States from Norway in 1825 with Norwegian emigrants, and spread around the world from there. It is a favourite sport for many Norwegians, practised by people from two years old to ninety, and the country has many schools and institutions teaching it. Trondheim hosted the Nordic World Ski Championships in 1996, where a Japanese competitor took the skiing cup.",
    },
    { type: "H3", ar: "فن العمارة في النرويج", en: "Architecture in Norway" },
    {
      type: "P",
      ar: "اعتمد التقليد النرويجي في البناء دائما على استخدام الأخشاب ، وفي واقع الأمر فان العديد من المباني الحديثة اليوم والأكثر اثارة للاهتمام بنيت من الخشب الأمر الذي يعكس الاقبال الشديد على هذه المادة للمصممين والمعماريين النرويجيين ، ومع تحول النرويج الى المسيحية قبل ألف عام أدخلت الهندسة المعمارية الحجرية مثل بناء كاتدرائية نيداروس في تروندهايم",
      en: "The Norwegian building tradition has always relied on timber, and in fact many of the most interesting modern buildings are built of wood, reflecting how strongly Norwegian designers and architects favour the material. When Norway converted to Christianity a thousand years ago, stone architecture was introduced, such as Nidaros Cathedral in Trondheim.",
    },
    { type: "MORE", topic: "norway-architecture", label_ar: "فن العمارة بالنرويج", label_en: "Architecture in Norway" },
    { type: "H3", ar: "اللغة المستخدمة في النرويج", en: "The language used in Norway" },
    {
      type: "P",
      ar: "للغة الجرمانية الشمالية النرويجية شكلان مكتوبان رسميان هما البوكمول النينوشك ، يعترف بكل منهما كلغة رسمية وبذلك يستخدمان على حد سواء في الادارة العامة والمدارس والكنائس ووسائل الاعلام ، لكن البوكمول تستخدم من قبل الأغلبية الساحقة بنسبة تتراوح بين 85 و90%",
      en: "Norwegian, a North Germanic language, has two official written forms: Bokmål and Nynorsk. Each is recognised as official and both are used in public administration, schools, churches and the media, but Bokmål is used by the overwhelming majority, between 85 and 90 per cent.",
    },
    { type: "MORE", topic: "norway-language", label_ar: "اللغة المستخدمة في النرويج", label_en: "The language used in Norway" },
    { type: "H3", ar: "الديانة المتبعة في النرويج", en: "Religion in Norway" },
    {
      type: "P",
      ar: "تصل نسبة الأشخاص المنتمين الى كنيسة النرويج الى 80.7% ، وذلك اعتبارا من 1 يناير سنة 2009 متراجعا بنسبة 1% مقارنة مع العام الذي سبقه ، وبنسبة 2% عن عامين سابقين ، يسجل النرويجيين عند التعميد كأعضاء في كنيسة النرويج ، يحافظ العديدون على عضويتهم في الكنائس التابعة للدولة لكي يستطيعوا استخدام الخدمات مثل التعميد وسر التثبيت والزواج والدفن والطقوس التي تمتلك مكانة ثقافية قوية في النرويج",
      en: "As of 1 January 2009, 80.7 per cent of people belonged to the Church of Norway, down one per cent on the previous year and two per cent on two years earlier. Norwegians are registered as members of the Church of Norway at baptism, and many keep their membership in the state churches so they can use services such as baptism, confirmation, marriage and burial — rites that hold a strong cultural place in Norway.",
    },
    { type: "MORE", topic: "norway-religion", label_ar: "الديانات المتبعة في النرويج", label_en: "The religions followed in Norway" },
    { type: "H3", ar: "الحيوانات التي تشتهر بها النرويج", en: "The animals Norway is famous for" },
    {
      type: "P",
      ar: "أكبر الحيوانات المفترسة في المياه النرويجية هي حيتان العنبر وأكبر الأسماك هي القرش المتشمس ، أكبر المفترسات على اليابسة هي الدببة القطبية بينما الدببة البنية هي أكبر الضواري على البر الرئيسي النرويجي ، بينما يعتبر الموظ أكبر الثدييات النروجية بلا منازع",
      en: "The largest predators in Norwegian waters are sperm whales and the largest fish is the basking shark. On land the biggest predators are polar bears, while brown bears are the largest carnivores on the Norwegian mainland, and the moose is without question the largest Norwegian mammal.",
    },
    { type: "MORE", topic: "norway-animals", label_ar: "الحيوانات الموجودة في النرويج", label_en: "The animals found in Norway" },
    { type: "H3", ar: "مناخ النرويج", en: "The climate of Norway" },
    {
      type: "P",
      ar: "تتكون معظم الأراضي النرويجية من صخور الغرانيت وصخور نايس الصوانية ، كما يمكن العثور على الاردواز والاحجار الرملية والحجر الجيري في طبقات الأرض ، كما تحتوي الارتفاعات الأدنى على رواسب بحرية ، بسبب تيار الخليج والرياح الغربية السائدة تعيش النرويج درجات حرارة مرتفعة نسبيا وهطول أمطار يفوق ما هو متوقع في مثل هذا الموقع الشمالي",
      en: "Most of Norway's land is made up of granite and gneiss, with slate, sandstone and limestone found in its layers, while the lower elevations contain marine deposits. Because of the Gulf Stream and the prevailing westerly winds, Norway enjoys relatively high temperatures and more rainfall than would be expected at such a northern latitude.",
    },
    { type: "MORE", topic: "norway-climate", label_ar: "مناخ النرويج عبر فصول السنة", label_en: "Norway's climate through the seasons" },
    { type: "H3", ar: "المواصلات والانتقال في النرويج", en: "Transport and getting around in Norway" },
    {
      type: "P",
      ar: "نظرا لانخفاض الكثافة السكانية وطبيعة البلاد والسواحل الطويلة ، فان وسائل النقل العام في النرويج أقل تطورا مما هي عليه في العديد من البلدان الأوروبية ولا سيما خارج المدن ، على هذا النحو تستخدم النرويج الوسائل القديمة في النقل المائي ، لكن وزارة النقل والاتصالات النرويجية بدأت في السنوات الأخيرة في تطوير السكك الحديدية والطرق البرية والنقل الجوي من خلال فروعها العديدة من أجل تطوير البنية التحتية للبلاد",
      en: "Because of the low population density, the nature of the country and the long coastlines, public transport in Norway is less developed than in many European countries, particularly outside the cities, and traditional water transport is still used. In recent years, however, the Norwegian Ministry of Transport and Communications has worked through its many branches to develop the railways, roads and air transport that make up the country's infrastructure.",
    },
    { type: "MORE", topic: "norway-transport", label_ar: "وسائل المواصلات في النرويج", label_en: "Means of transport in Norway" },
    { type: "H3", ar: "الثقافة والفنون في النرويج", en: "Culture and the arts in Norway" },
    { type: "H3", ar: "الثقافة", en: "Culture", noNumber: true },
    {
      type: "P",
      ar: "ترتبط ثقافة النرويج ارتباطا وثيقا بتاريخ البلاد وجغرافيتها ، ثقافة المزرعة النرويجية فريدة من نوعها ومستمرة حتى اليوم الحالي ، حيث لم تتطور فقط بسبب الموارد الشحيحة والظروف المناخية القاسية ، ولكن أيضا بسبب قوانين الملكية القديمة",
      en: "Norwegian culture is closely tied to the country's history and geography. Norway's farm culture is unique and continues to this day, shaped not only by scarce resources and harsh climatic conditions but also by ancient property laws.",
    },
    { type: "MORE", topic: "norway-culture-arts", label_ar: "الثقافة في النرويج", label_en: "Culture in Norway" },
    { type: "H3", ar: "الفنون", en: "The arts", noNumber: true },
    {
      type: "P",
      ar: "لفترة طويلة سيطر على المشهد الفني النرويجي أعمال فنية من ألمانيا وهولندا فضلا عن تأثير كوبنهاغن ، ولم تبدأ الفترة النرويجية بالفعل الى أن حل القرن التاسع عشر ، وقد بدأت هذه الفترة أولا مع اللوحات الشخصية وفي وقت لاحق مع المناظر الطبيعية الرائعة",
      en: "For a long time the Norwegian art scene was dominated by work from Germany and the Netherlands, as well as the influence of Copenhagen, and a genuinely Norwegian period only began in the nineteenth century, first with portraits and later with magnificent landscapes.",
    },
    { type: "MORE", topic: "norway-culture-arts", label_ar: "الفنون في النرويج", label_en: "The arts in Norway" },
    { type: "H3", ar: "الموسيقى", en: "Music", noNumber: true },
    {
      type: "P",
      ar: "الى جانب الموسيقى الكلاسيكية من الملحن الرومانسي ادوارد غريغ والموسيقى الحديثة لآرني نوردهايم ، تكتسب موسيقى الميتال الأسود النرويجية شهرة في السنوات الأخيرة ، ومن بين الموسيقيين الكلاسيكيين النرويجيين : ليف أوف أندسنس أحد أشهر عازفي البيانو في العالم ، وترلس مورك عازف التشيلو البارع",
      en: "Alongside the classical music of the romantic composer Edvard Grieg and the modern work of Arne Nordheim, Norwegian black metal has gained fame in recent years. Norwegian classical musicians include Leif Ove Andsnes, one of the world's best-known pianists, and the outstanding cellist Truls Mørk.",
    },
    { type: "MORE", topic: "norway-culture-arts", label_ar: "الموسيقى في النرويج", label_en: "Music in Norway" },
    { type: "H3", ar: "كيف الوصول الى النرويج", en: "How to reach Norway" },
    {
      type: "P",
      ar: "هناك رحلات مباشرة الى النرويج من العديد من المدن حول العالم ، لديك أيضا خيار السفر بالسفينة أو القطار أو الحافلة أو السيارة ، مع وصلات ممتازة الى الدول الاسكندنافية وأوروبا وبقية العالم",
      en: "There are direct flights to Norway from many cities around the world, and you also have the option of travelling by ship, train, bus or car, with excellent links to the Scandinavian countries, Europe and the rest of the world.",
    },
    { type: "H3", ar: "بالقطار", en: "By train", noNumber: true },
    {
      type: "P",
      ar: "تربط شبكة سكك حديدية واسعة النرويج ببقية الدول الاسكندنافية وأوروبا ، هناك رحلات قطار منتظمة الى أوسلو من كوبنهاغن وستوكهولم وغوتنبرغ ، معظم رحلات القطار من القارة بين عشية وضحاها ، وستجد مقصورات للنوم عليها جميعا ، بعد الوصول الى النرويج ، من السهل استكشاف كل من فيجورد النرويج وبقية البلاد حتى شمال النرويج بالقطار ، في بعض أجمل رحلات السكك الحديدية في العالم",
      en: "A wide rail network links Norway with the rest of Scandinavia and Europe, with regular trains to Oslo from Copenhagen, Stockholm and Gothenburg. Most journeys from the continent run overnight and all of them have sleeping compartments. Once in Norway it is easy to explore the fjords and the rest of the country as far as the north by train, on some of the most beautiful railway journeys in the world.",
    },
    { type: "H3", ar: "بالسيارة", en: "By car", noNumber: true },
    {
      type: "P",
      ar: "هناك العديد من المعابر الحدودية عن طريق البر الى السويد ، تحد النرويج أيضا فنلندا وروسيا ، توجد فحوصات جمركية في جميع المعابر الرئيسية ، المدخل الرئيسي من السويد : يمر الطريق السريع E6 عبر مالمو وهيلسينجبورج وغوتنبرغ في السويد ، قبل عبور الحدود في سفينسوند في جنوب شرق النرويج ، المدخل الرئيسي من فنلندا : يمر الطريق السريع E8 عبر توركو وفاسا وأولو في فنلندا قبل عبور الحدود في كيلبيسجارفي ، هناك عبارات سيارات منتظمة بين النرويج والدنمارك والسويد وهولندا",
      en: "There are many land border crossings into Sweden, and Norway also borders Finland and Russia, with customs checks at all the main crossings. The main entry from Sweden is the E6 motorway through Malmö, Helsingborg and Gothenburg before crossing the border at Svinesund in south-east Norway. From Finland the E8 runs through Turku, Vaasa and Oulu before crossing at Kilpisjärvi. Regular car ferries connect Norway with Denmark, Sweden and the Netherlands.",
    },
    { type: "H3", ar: "بالحافلة", en: "By bus", noNumber: true },
    {
      type: "P",
      ar: "يمكنك الوصول الى النرويج بالحافلة من السويد والدنمارك وفنلندا وروسيا ، خدمات الحافلات من غوتنبرغ في السويد وكوبنهاغن في الدنمارك تستغرق كل ساعة تقريبا ، مع العديد من رحلات المغادرة اليومية ، الخدمة من ستوكهولم أيضا أكثر تواترا بكثير من القطار ، يقدم العديد من المشغلين خدمات حافلات غير مكلفة بين المدن الكبرى في النرويج والدنمارك والسويد",
      en: "You can reach Norway by bus from Sweden, Denmark, Finland and Russia. Services from Gothenburg in Sweden and Copenhagen in Denmark run roughly hourly with several departures a day, and the service from Stockholm is far more frequent than the train. Many operators offer inexpensive coach services between the major cities of Norway, Denmark and Sweden.",
    },
  ],
  subPages: [
    { slug: "norway-history", label_ar: "تاريخ النرويج", label_en: "The history of Norway" },
    { slug: "norway-architecture", label_ar: "فن العمارة", label_en: "Architecture" },
    { slug: "norway-language", label_ar: "اللغة", label_en: "Language" },
    { slug: "norway-religion", label_ar: "الديانة", label_en: "Religion" },
    { slug: "norway-animals", label_ar: "الحيوانات", label_en: "Animals" },
    { slug: "norway-climate", label_ar: "المناخ", label_en: "Climate" },
    { slug: "norway-transport", label_ar: "المواصلات", label_en: "Transport" },
    { slug: "norway-culture-arts", label_ar: "الثقافة والفنون والموسيقى", label_en: "Culture, arts and music" },
  ],
};

// Unlisted detail pages linked from the sections above.
export const norwayDiscoverSubGuides: Guide[] = [
  {
    slug: "norway-history",
    title_ar: "تعرف على تاريخ النرويج العريق",
    title_en: "The long history of Norway",
    kicker_ar: "اكتشف النرويج",
    kicker_en: "Discover Norway",
    image: HERO,
    blocks: [
      { type: "H3", ar: "النرويج وخصائصها", en: "Norway and its character", noNumber: true },
      {
        type: "P",
        ar: "النرويج والمعروفة رسميا باسم مملكة النرويج ، هي دولة تقع في شمال اوروبا وتحتل الجزء الغربي من شبه الجزيرة الاسكندنافية بالاضافة الى يان ماين وأرخبيل سفالبارد في المنطقة القطبية الشمالية",
        en: "Norway, officially the Kingdom of Norway, is a country in northern Europe occupying the western part of the Scandinavian peninsula, together with Jan Mayen and the Svalbard archipelago in the Arctic.",
      },
      {
        type: "P",
        ar: "تصل مساحة النرويج الكلية 385,207 كيلومتر مربع ، ويبلغ عدد سكانها حوالي 5 ملايين نسمة ، تعد البلاد احدى اقل الدول الاوروبية كثافة سكانية ، وتملك حدودا طويلة مع السويد في الشرق ، وتحد أقصى حدودها الشمالية فنلندا من الجنوب وروسيا الى الشرق ، بينما تقع الدنمارك الى الجنوب عند طرف البلاد الجنوبي عبر مضيق سكاجيراك",
        en: "Norway's total area is 385,207 square kilometres and its population is about five million, making it one of the least densely populated countries in Europe. It has a long border with Sweden in the east, while its far north is bordered by Finland to the south and Russia to the east, and Denmark lies to the south across the Skagerrak strait.",
      },
      {
        type: "P",
        ar: "عاصمة النرويج هي أوسلو ، وتمتلك سواحل عريضة تواجه المحيط الاطلسي وبحر بارنتس ، وهذه السواحل هي موطن الفيورد الشهيرة",
        en: "The capital is Oslo, and the country has broad coastlines facing the Atlantic Ocean and the Barents Sea — the home of the famous fjords.",
      },
      {
        type: "P",
        ar: "بعد الحرب العالمية الثانية شهدت النرويج نموا اقتصاديا سريعا بالأخص في العقدين الأولين ، وذلك بسبب الشحن النرويجي والتجارة البحرية والتصنيع المحلي ، أما ازدهارها في أوائل عقد السبعينيات من القرن العشرين فيعود لاستثمار كميات الكبيرة من النفط والغاز الطبيعي ، التي تم اكتشافها في بحر الشمال وبحر النرويج",
        en: "After the Second World War Norway saw rapid economic growth, especially in the first two decades, driven by Norwegian shipping, maritime trade and domestic manufacturing. Its prosperity in the early 1970s came from developing the large quantities of oil and natural gas discovered in the North Sea and the Norwegian Sea.",
      },
      {
        type: "P",
        ar: "تعد النرويج حاليا ثالث أغنى بلد في العالم من حيث القيمة النقدية ، مع ثاني أكبر احتياطي للفرد الواحد من أي دولة أخرى ، النرويج هي الدولة الثاني عشر تصديرا للنفط ، والسادسة عشر انتاجا له ، والدولة الثامنة عالميا انتاجا للغاز الطبيعي ، وتساهم الصناعات البترولية بحوالي ربع الناتج المحلي الاجمالي ، في أعقاب الأزمة المالية العالمية للفترة الممتدة بين سنوات 2007 و2010م ، اعتبر المصرفيون الكرونة النرويجية احدى أكثر العملات ثباتا في العالم",
        en: "Norway is now the third richest country in the world in monetary terms, with the second largest reserves per capita of any country. It is the twelfth largest exporter of oil, the sixteenth largest producer, and the eighth largest producer of natural gas worldwide, with the petroleum industries contributing about a quarter of GDP. In the wake of the global financial crisis of 2007 to 2010, bankers considered the Norwegian krone one of the most stable currencies in the world.",
      },
      {
        type: "P",
        ar: "تمتلك النرويج موارد طبيعية غنية من النفط والغاز الطبيعي والطاقة الكهرمائية والغابات والمعادن ، كما كانت ثاني أكبر مصدر للمأكولات البحرية من حيث القيمة ، بعد الصين ، تشمل الصناعات الرئيسية الأخرى الشحن البحري والمعالجة الغذائية وبناء السفن وصناعة المعادن والكيماويات والتعدين والصيد والمنتجات الورقية من الغابات",
        en: "Norway has rich natural resources of oil, natural gas, hydropower, forests and minerals, and has been the second largest exporter of seafood by value after China. Other major industries include shipping, food processing, shipbuilding, metals, chemicals, mining, fishing and forest paper products.",
      },
      {
        type: "P",
        ar: "تحتفظ النرويج بنموذج الرعاية الاسكندنافية بوجود نظام رعاية صحية عالمي ودعم نظام التعليم العالي ونظام شامل للضمان الاجتماعي ، صنفت النرويج في المرتبة الأعلى بين جميع البلدان في مجال التنمية البشرية للفترة الممتدة بين سنتي 2001 و2007 ، ومرة أخرى في عام 2009م ، كما صنفت أيضا أكثر البلدان سلمية في العالم في استطلاع لسنة 2007 من قبل مؤشر السلام العالمي ، تتبع النرويج نظاما ملكيا دستوريا ديمقراطيا برلمانيا ، ويمثل الملك هارالد الخامس قمة هرم الدولة",
        en: "Norway maintains the Scandinavian welfare model with universal health care, subsidised higher education and a comprehensive social security system. It ranked highest of all countries for human development from 2001 to 2007 and again in 2009, and was ranked the most peaceful country in the world in a 2007 survey by the Global Peace Index. Norway is a democratic parliamentary constitutional monarchy, with King Harald V at the head of the state.",
      },
      { type: "IMG", src: HERO2, cap_ar: "النرويج", cap_en: "Norway" },
      { type: "H3", ar: "ما قبل التاريخ", en: "Prehistory" },
      {
        type: "P",
        ar: "تشير الاكتشافات الأثرية أن منطقة النرويج الحالية كانت مأهولة بالسكان منذ ما لا يقل عن الألف العاشرة قبل الميلاد ، يطلق على السكان الأصليين في شمال النرويج ووسطها اسم شعب سامي ، رغم أن الثقافة النوردية وصلت في وقت مبكر جدا ، ايضا ذكر الملك الحالي للنرويج أن المملكة تأسست على أراضي الشعبين النرويجي وسامي ، وفي القرون الأولى للميلاد ، تألفت النرويج من عدد من الممالك الصغيرة ، ووفقا لجاريد دياموند ، تعلم الشعب النوردي ركوب البحر حوالي سنة 600م",
        en: "Archaeological finds indicate that present-day Norway was inhabited at least as early as the tenth millennium BC. The indigenous people of northern and central Norway are the Sámi, although Norse culture arrived very early. Norway's current king has said the kingdom was founded on the lands of two peoples, the Norwegians and the Sámi. In the first centuries AD Norway consisted of a number of small kingdoms, and according to Jared Diamond the Norse learned to take to the sea around the year 600.",
      },
      { type: "H3", ar: "عصر الفايكنغ", en: "The Viking age" },
      {
        type: "P",
        ar: "اتسم عهد الفايكنغ بالتوسع والهجرة من قبل الفايكنغ البحارة ، وفقا للتقاليد فان هارالد هارفاغر (هارالد ذو الشعر الجميل) وحد البلاد ببضعة سنوات قليلة على عام 900م ، وقد حكمها الأخير بقبضة حديدية مما دفع الكثير من النرويجيين (وفقا للملاحم الشعبية) الى مغادرة البلاد للعيش في آيسلندا وجزر فارو وجرينلاند وأجزاء من بريطانيا وايرلندا",
        en: "The Viking age was marked by the expansion and emigration of Viking seafarers. According to tradition, Harald Fairhair united the country a few years before the year 900 and ruled it with an iron fist, which drove many Norwegians — according to the sagas — to leave and settle in Iceland, the Faroe Islands, Greenland and parts of Britain and Ireland.",
      },
      {
        type: "P",
        ar: "تأسست المدن الأيرلندية الحالية : ليمريك ودبلن ووترفورد على يد المستوطنين النرويج ، استبدلت التقاليد المسيحية بتلك النوردية بشكل تدريجي في القرنين العاشر والحادي عشر ، ويعزى ذلك الى حد كبير للملوك المبشرين أولاف تريغفاسون والقديس أولاف ، كان الملك هاكون الخير ملك النرويج المسيحي الأول في منتصف القرن العاشر ، على الرغم من رفض محاولته لادخال الدين للبلاد",
        en: "The present-day Irish cities of Limerick, Dublin and Waterford were founded by Norwegian settlers. Christian traditions gradually replaced Norse ones in the tenth and eleventh centuries, largely thanks to the missionary kings Olaf Tryggvason and Saint Olaf. Haakon the Good was Norway's first Christian king in the mid-tenth century, although his attempt to introduce the religion was rejected.",
      },
      {
        type: "P",
        ar: "أطلق أولاف تريغفاسون المولود في وقت ما بين سنتي 963 و969م حملات بحرية على انكلترا بأسطول مكون من 390 سفينة ، وهاجم لندن خلال هذه الاغارة ، عندما عاد أولاف الى النرويج في عام 995 ، نزل في موستر وبنى هناك كنيسة أصبحت أول كنيسة مسيحية في النرويج ، أبحر أولاف من موستر شمالا الى تروندهايم ، حيث نصب ملكا للنرويج من قبل أيراثينغ في سنة 995م",
        en: "Olaf Tryggvason, born some time between 963 and 969, launched naval campaigns against England with a fleet of 390 ships and attacked London during the raid. When he returned to Norway in 995 he landed at Moster and built a church there, the first Christian church in Norway. From Moster he sailed north to Trondheim, where he was proclaimed King of Norway by the Eyrathing in 995.",
      },
      {
        type: "P",
        ar: "ومما يميز النرويج والسويد عن باقي أنحاء أوروبا في تلك الفترة ، أن الاقطاعية لم تتطور فعلا في تلك البلاد كما كانت فعلت في بقية أوروبا ، حيث حافظت على طابع محافظ جدا منها ، أجبرت الرابطة الهانزية الطبقة الملكية على التنازل لها عن ممتلكات كبيرة وأكثرية مقابل التجارة الخارجية والاقتصاد ، وكان للرابطة الهانزية هذا التأثير على الملوك بسبب القروض التي منحتها الهانزيون لهم والدين الكبير الذي حمله أولئك الملوك ، أدى هذا التلاعب من قبل الرابطة بالاقتصاد النرويجي الى الضغط على جميع الفئات ولا سيما الفلاحين الى درجة أنه لم توجد طبقة مواطنين أحرار حقيقية في النرويج",
        en: "What distinguished Norway and Sweden from the rest of Europe in this period is that feudalism never really developed there as it did elsewhere, and the countries kept a very conservative character. The Hanseatic League forced the royal class to hand over large holdings and privileges in exchange for foreign trade and the economy, an influence it held because of the loans the Hansards granted the kings and the heavy debts those kings carried. This manipulation of the Norwegian economy pressed on every class, especially the farmers, to the point that no genuine class of free citizens existed in Norway.",
      },
      { type: "H3", ar: "اتحاد كالمار", en: "The Kalmar Union" },
      {
        type: "P",
        ar: "مع وفاة هاكون الخامس ملك النرويج عام 1319م ورث ماغنوس اريكسون ذو الثلاث سنوات عرش النرويج ، فعرف باسم ماغنوس السابع ، كما بدا في الوقت نفسه أن التحرك لجعل ماغنوس ملكا للسويد قد نجح ، ذلك أنه حينها كان ملوك السويد والدنمارك ينتخبون من قبل طبقة النبلاء ، وهكذا مع انتخابه لعرش السويد توحدت السويد والنرويج تحت حكم الملك ماغنوس السابع",
        en: "On the death of King Haakon V in 1319, the three-year-old Magnus Eriksson inherited the Norwegian throne as Magnus VII. At the same time the move to make Magnus king of Sweden appeared to succeed, since the kings of Sweden and Denmark were then elected by the nobility, so with his election to the Swedish throne Sweden and Norway were united under Magnus VII.",
      },
      {
        type: "P",
        ar: "في عام 1349 غير الموت الاسود ملامح النرويج تغييرا جذريا ، حيث أسفر عن وفاة ما تراوحت نسبته بين 50 و60% من سكانها ، وتركها متدهورة اجتماعيا واقتصاديا ، وبعد أن انقشعت غيمة وباء الطاعون ، ظهرت النرويج في حالة سيئة للغاية ، حيث ازدادت نسبة الفقر وارتفع عدد الفقراء والبؤساء ، وعلى الرغم من أن معدل الوفيات كان شبيها بذاك في أوروبا فان التعافي الاقتصادي استغرق وقتا أطول بكثير بسبب عدد السكان القليل والمتناثر",
        en: "In 1349 the Black Death changed Norway radically, killing between 50 and 60 per cent of the population and leaving the country socially and economically broken. When the plague lifted, Norway emerged in a very poor state, with rising poverty and growing numbers of the destitute, and although the death rate resembled the rest of Europe, economic recovery took far longer because the population was small and scattered.",
      },
      {
        type: "P",
        ar: "حكم ماغنوس السابع النرويج حتى عام 1350 ، عندما استبدل بابنه هاكون ، فعرف باسم هاكون السادس ، تزوج هاكون السادس في عام 1363 من مارغريت ابنة الملك فالديمار الدنماركي ، وبعد وفاة هاكون السادس في سنة 1379 ، تولى ابنه أولاف الخامس ذو العشر سنوات الحكم ، سبق لأولاف أن انتخب لعرش الدنمارك سنة 1376 ، وهكذا ومع توليه عرش النرويج وحد أولاف الدنمارك والنرويج في عرش واحد",
        en: "Magnus VII ruled Norway until 1350, when he was replaced by his son Haakon VI. In 1363 Haakon VI married Margaret, daughter of the Danish king Valdemar. After Haakon's death in 1379 his ten-year-old son Olaf V took over; Olaf had already been elected to the Danish throne in 1376, so on taking the Norwegian throne he united Denmark and Norway under one crown.",
      },
      {
        type: "P",
        ar: "أدارت أم أولاف وأرملة هاكون ، الملكة مارغريت ، الشؤون الخارجية للدنمارك والنرويج خلال طفولة أولاف الخامس ، عملت مارغريت على ضم عرش السويد الى الدنمارك والنرويج عن طريق انتخاب أولاف لعرش السويد ، وكانت على وشك تحقيق مرادها عندما توفي ولدها فجأة ، فانتخبت الدنمارك مارغريت كحاكمة مؤقتة بعد وفاة الملك ، وفي سنة 1388 ، حذت النرويج حذو الدنمارك وتوجت مارغريت ملكة عليها",
        en: "Olaf's mother and Haakon's widow, Queen Margaret, ran the foreign affairs of Denmark and Norway during Olaf's childhood. Margaret worked to add the Swedish throne to Denmark and Norway by having Olaf elected there, and was close to achieving it when her son suddenly died. Denmark then elected Margaret as temporary ruler, and in 1388 Norway followed suit and crowned her its queen.",
      },
      {
        type: "P",
        ar: "أدركت الملكة مارغريت منذ البداية أن سلطتها ستكون أكثر أمنا لو عثرت على ملك يحكم مكانها ، فاستقر رأيها على اريك البوميراني حفيد أختها ، وفي اجتماع لكل الدول الاسكندنافية عقد في كالمار ، توج اريك البوميراني ملكا على جميع البلدان الاسكندنافية الثلاث ، بناء على ذلك أدت السياسة الحاكمة الى وحدة شخصية بين بلدان الشمال الأوروبي ليتحد في النهاية عرش النرويج والدنمارك والسويد تحت سيطرة الملكة مارغريت الأولى الدنماركية ، عندما انضمت البلاد الى اتحاد كالمار",
        en: "Queen Margaret recognised from the start that her authority would be safer if she found a king to reign in her place, and settled on Eric of Pomerania, her sister's grandson. At a meeting of all the Scandinavian countries held in Kalmar, Eric was crowned king of all three Scandinavian realms. This policy produced a personal union between the Nordic countries, so that the thrones of Norway, Denmark and Sweden were finally united under Margaret I of Denmark when the country joined the Kalmar Union.",
      },
      { type: "H3", ar: "الاتحاد مع الدنمارك", en: "The union with Denmark" },
      {
        type: "P",
        ar: "غادرت السويد اتحاد كالمار في عام 1521 بينما بقيت النرويج مع الدنمارك حتى عام 1814م في ما مجموعه 436 عاما ، خلال الرومانسية الوطنية من القرن التاسع عشر سميت هذه الفترة من قبل البعض باسم ليلة 400 سنة ، حيث كانت كل السلطات الملكية الفكرية والادارية متمركزة في كوبنهاغن في الدنمارك",
        en: "Sweden left the Kalmar Union in 1521, while Norway remained with Denmark until 1814, a total of 436 years. During the national romanticism of the nineteenth century some called this period the four-hundred-year night, since all royal, intellectual and administrative power was concentrated in Copenhagen.",
      },
      {
        type: "P",
        ar: "مع التحول للبروتستانتية في سنة 1536 ، تم حل مطرانية تروندهايم وأصبحت النرويج بالفعل أحد روافد الدانمارك ، كما حول دخل الكنيسة للبلاط الملكي في كوبنهاغن ، فقدت النرويج تدفق الحجاج المستمر الى القطع الأثرية للقديس أولاف في مزار نيداروس ، وبالتالي فقدت الكثير من التواصل مع الحياة الثقافية والاقتصادية في بقية أنحاء أوروبا",
        en: "With the conversion to Protestantism in 1536 the archbishopric of Trondheim was dissolved and Norway effectively became a dependency of Denmark, with church income diverted to the royal court in Copenhagen. Norway lost the steady flow of pilgrims to the relics of Saint Olaf at the Nidaros shrine, and with it much of its contact with cultural and economic life in the rest of Europe.",
      },
      {
        type: "P",
        ar: "بالاضافة الى ذلك خسرت النرويج بعضا من مساحتها في القرن السابع عشر بعد أن فقدت مقاطعات بوهوسلن وجيمتلاند وهيريدالن لصالح السويد نتيجة لحروب عديدة ، رغم ذلك كسبت النرويج بعض الأراضي الى الشمال بضم المقاطعات الشمالية : ترومس وفنمارك ، على حساب السويد وروسيا ، قضت المجاعة التي انتشرت في البلاد بين عامي 1695 و1696 على حوالي 10% من سكان النرويج ، كما سجل ضياع ما لا يقل عن تسعة محاصيل في الدول الاسكندنافية بين عامي 1740 و1800 مما أدى الى ارتفاع كبير في معدل الوفيات",
        en: "Norway also lost territory in the seventeenth century, ceding the provinces of Bohuslän, Jämtland and Härjedalen to Sweden after a series of wars, though it gained land in the north by adding Troms and Finnmark at the expense of Sweden and Russia. The famine of 1695 to 1696 killed about 10 per cent of Norway's population, and at least nine harvests failed across Scandinavia between 1740 and 1800, causing a sharp rise in mortality.",
      },
      { type: "H3", ar: "الاتحاد مع السويد", en: "The union with Sweden" },
      {
        type: "P",
        ar: "بعد أن هوجمت الدنمارك والنرويج من طرف المملكة المتحدة ، دخلت النرويج في تحالف مع الامبراطور الفرنسي نابليون الاول في معركة كوبنهاغن ، أدت الحرب الى مجاعة عام 1812م ، كما وجدت المملكة الدنماركية نفسها في الجانب الخاسر في عام 1814م ، واضطرت تحت شروط معاهدة كييل للتنازل عن النرويج لملك السويد في حين بقيت المقاطعات الدنماركية النرويجية الأخرى مثل آيسلندا وغرينلاند وجزر فارو ضمن التاج الدانماركي",
        en: "After Denmark-Norway was attacked by Britain, Norway entered an alliance with the French emperor Napoleon I at the Battle of Copenhagen. The war brought the famine of 1812, and the Danish kingdom found itself on the losing side in 1814, forced under the terms of the Treaty of Kiel to cede Norway to the king of Sweden, while other Dano-Norwegian provinces such as Iceland, Greenland and the Faroe Islands remained under the Danish crown.",
      },
      {
        type: "P",
        ar: "استغلت النرويج هذه الفرصة لاعلان الاستقلال واعتمد دستور استنادا الى النموذجين الامريكي والفرنسي ، كما انتخب ولي عهد الدنمارك والنرويج كريستيان فريدريك ملكا في سنة 1814م ، يحتفل بذكرى هذا اليوم في السابع عشر من مايو من قبل النرويجيين والأميركيين من أصل نرويجي على حد سواء ، ويسمى هذا اليوم أيضا باسم يوم الدستور النرويجي",
        en: "Norway seized the chance to declare independence and adopted a constitution modelled on the American and French examples, electing the Dano-Norwegian crown prince Christian Frederik as king in 1814. That day is commemorated on 17 May by Norwegians and Norwegian-Americans alike, and is also known as Norwegian Constitution Day.",
      },
      {
        type: "P",
        ar: "تسبب قرار ربط النرويج بالسويد بنشوب الحرب النرويجية السويدية ، ولكن بما أن جيش السويد لم يكن قادرا على هزيمة القوات النرويجية هزيمة صريحة ، كما أن الخزانة النرويجية لم تكن كبيرة بما يكفي لدعم الحرب التي طال أمدها ، بالاضافة الى حصار القوات البحرية البريطانية والروسية للساحل النرويجي ، اضطرت كل من النرويج والسويد للتفاوض على تسوية ، بناء على ذلك دخل البلدان في اتحاد بتاريخ 4 نوفمبر سنة 1814م ، حافظت النرويج بموجب هذا الترتيب على دستورها الليبرالي وعلى مؤسساتها المستقلة باستثناء العلاقات الخارجية",
        en: "The decision to bind Norway to Sweden caused the Swedish-Norwegian war, but since the Swedish army could not decisively defeat the Norwegian forces, the Norwegian treasury was too small to sustain a prolonged war, and British and Russian naval forces blockaded the Norwegian coast, both sides were forced to negotiate a settlement. The two countries entered a union on 4 November 1814, under which Norway kept its liberal constitution and its independent institutions except for foreign relations.",
      },
      {
        type: "P",
        ar: "شهدت هذه الفترة أيضا ظهور النزعة القومية الرومانسية النرويجية ، حيث سعى النرويجيون لتعريف هوية قومية متميزة لهم ، شملت الحركة جميع فروع الثقافة بما في ذلك الأدب ، حيث برز من الأدباء القوميين : هنريك فيرغيلاند وبيورنستيرن بيورنسون وبيتر كريستيان أسبيورنسن ويورغن مو ، أما من الرسامين فبرز : هانز غود وأدولف تيدماند ، وفي الموسيقى لمع نجم ادوارد غريغ ، وحتى في موضوع اللغة حيث برزت محاولات لتحديد لغة أصلية مكتوبة للنرويج",
        en: "This period also saw the rise of Norwegian romantic nationalism, as Norwegians sought to define a distinct national identity. The movement covered every branch of culture, including literature, where the national writers Henrik Wergeland, Bjørnstjerne Bjørnson, Peter Christen Asbjørnsen and Jørgen Moe stood out; painting, with Hans Gude and Adolph Tidemand; and music, where Edvard Grieg shone. It even reached language, with attempts to define an original written form for Norwegian.",
      },
      {
        type: "P",
        ar: "كان الملك كارل يوحنا الرابع عشر الذي جلس على عرش النرويج والسويد في سنة 1818م الملك الأول على النرويج بعد خروجها من سيطرة الدنمارك والاتحاد مع السويد ، كان كارل يوحنا رجلا معقدا امتد حكمه الى عام 1844م ، وقد صان الدستور والحريات في النرويج والسويد ، لذلك عد من الملوك الليبراليين في ذاك العصر ، رغم ذلك لم يكن رحيما في استخدامه المخبرين والشرطة السرية اضافة الى القيود المفروضة على حرية الصحافة لاخماد الحركات العامة للاصلاح وخصوصا حركة الاستقلال الوطني النرويجي",
        en: "King Charles XIV John, who took the Norwegian and Swedish thrones in 1818, was the first king of Norway after it left Danish control and entered the union with Sweden. A complex man whose reign lasted until 1844, he preserved the constitution and liberties in Norway and Sweden and was counted among the liberal monarchs of the age, yet he was not merciful in his use of informers and secret police, or in the restrictions he placed on press freedom to suppress public reform movements, especially the Norwegian national independence movement.",
      },
      {
        type: "P",
        ar: "تلا عهد الملك كارل يوحنا عصر الرومانسية وتخللها بعض الاصلاحات الاجتماعية والسياسية الهامة ، سمح للنساء عام 1854م بوراثة ممتلكات مثل الرجال ، وفي عام 1863م رفعت حالة القصور عن النساء غير المتزوجات ، علاوة على ذلك سمح لهن بالحصول على مختلف المهن ولا سيما التدريس في المدارس العامة ، مع ذلك كانت النرويج في منتصف هذا القرن لا تزال بعيدة عن الديمقراطية ، حيث اقتصر حق التصويت على المسؤولين وأصحاب الممتلكات والمستأجرين ومواطني البلدات المدمجة",
        en: "The reign of Charles John was followed by the romantic era, punctuated by important social and political reforms. In 1854 women were allowed to inherit property like men, and in 1863 the status of minority was lifted from unmarried women, who were further allowed to enter various professions, especially teaching in public schools. Even so, mid-century Norway was still far from democratic: the vote was limited to officials, property owners, tenants and citizens of incorporated towns.",
      },
      {
        type: "P",
        ar: "رغم كل ذلك كانت النرويج مجتمعا محافظا ، وكانت الحياة في النرويج ولا سيما الحياة الاقتصادية ، تهيمن عليها طبقة أرستقراطية من الرجال المهنيين الذين شغلوا معظم المناصب الهامة في الحكومة المركزية ، وهكذا وحتى في الوقت الذي اجتاحت فيه الثورات معظم بلدان أوروبا في عام 1848م ، فان النرويج لم تتأثر لحد كبير بها",
        en: "Norway remained a conservative society, and life there — especially economic life — was dominated by an aristocracy of professional men who held most of the important posts in central government. So even when revolutions swept most of Europe in 1848, Norway was largely untouched by them.",
      },
      {
        type: "P",
        ar: "وفي واقع الأمر لم تقم سوى ثورة وحيدة في النرويج عام 1848م ، هي حركة ثران ، كان ماركوس ثران اشتراكيا طوباويا ، وجه نداءه الى الطبقات الكادحة داعيا الى تغيير البنية الاجتماعية من الأدنى الى الأعلى ، في عام 1848م نظم مجتمع عمل في درامن ، بلغت عضوية هذا المجتمع في بضعة أشهر فقط 500 عضو ونجح في طباعة صحيفة خاصة به ، في غضون سنتين نظمت 300 من المجتمعات في جميع أنحاء النرويج تضم في عضويتها ما مجموعه 20,000 شخص ، في نهاية المطاف سحق التمرد بسهولة وأسر ثران وحكم عليه بالسجن لثلاث سنوات ، وعند الافراج عنه هاجر ماركوس ثران الى الولايات المتحدة الأمريكية",
        en: "In fact only one uprising took place in Norway in 1848, the Thrane movement. Marcus Thrane was a utopian socialist who appealed to the labouring classes, calling for social structure to be changed from the bottom up. In 1848 he organised a workers' society in Drammen which reached 500 members within months and managed to print its own newspaper; within two years 300 societies had been organised across Norway with a total membership of 20,000. The revolt was ultimately crushed easily, Thrane was captured and sentenced to three years in prison, and on his release he emigrated to the United States.",
      },
      { type: "H3", ar: "الاستقلال", en: "Independence" },
      {
        type: "P",
        ar: "لعب كريستيان ميكلسن ، أحد أقطاب مجال الشحن ورجل دولة ورئيس وزراء النرويج من سنة 1905م حتى سنة 1907م ، دورا رئيسيا في الانفصال السلمي للنرويج عن السويد في 7 يونيو سنة 1905م ، بعد اجراء استفتاء وطني فضل الشعب النظام الملكي الدستوري على النظام الجمهوري ، وعرضت الحكومة النرويجية عرش النرويج على الأمير كارل الدنماركي ، وانتخبه البرلمان ملكا بالاجماع ، حيث كان أول ملك لنرويج مستقلة تماما منذ 586 سنة ، أطلق هذا الملك على نفسه اسم هاكون السابع تيمنا بملوك البلاد في العصور الوسطى ، وفي سنة 1913م ، منحت النساء حق التصويت ، بعد أن كان جميع الرجال قد حصلوا على هذا الحق في عام 1898م",
        en: "Christian Michelsen, a shipping magnate, statesman and prime minister of Norway from 1905 to 1907, played a leading role in Norway's peaceful separation from Sweden on 7 June 1905. After a national referendum the people preferred a constitutional monarchy to a republic, and the Norwegian government offered the throne to Prince Carl of Denmark, whom parliament elected king unanimously — the first king of a fully independent Norway in 586 years. He took the name Haakon VII after the country's medieval kings. In 1913 women were granted the vote, all men having gained it in 1898.",
      },
      { type: "H3", ar: "الحربان العالميتان", en: "The two world wars" },
      {
        type: "P",
        ar: "خلال الحرب العالمية الاولى التزمت النرويج الحياد ، لكنها عمليا تعرضت لضغوط من قبل بريطانيا العظمى لتسليم أجزاء متزايدة من أسطولها التجاري الكبير لبريطانيا بأقل الأسعار ، فضلا عن الانضمام الى الحصار التجاري المفروض على ألمانيا ، كان على السفن النرويجية التجارية والبحارة النرويجيين رفع العلم البريطاني على سفنهم رغم خطورة اغراقها من طرف الغواصات الألمانية ، وكان من نتيجة ذلك أن فقدت البلاد كثيرا من بحارتها وسفنها ، وهبط ترتيب الأسطول التجاري النرويجي من المركز الرابع عالميا الى المركز السادس",
        en: "During the First World War Norway remained neutral, but in practice came under British pressure to hand over ever larger parts of its great merchant fleet at the lowest prices and to join the trade blockade of Germany. Norwegian merchant ships and sailors had to fly the British flag despite the risk of being sunk by German submarines, and as a result the country lost many of its sailors and ships, with the Norwegian merchant fleet falling from fourth to sixth in the world.",
      },
      {
        type: "P",
        ar: "أعلنت النرويج أيضا حيادها خلال الحرب العالمية الثانية ، ولكنها تعرضت للغزو الألماني في سنة 1940م ، لم تكن النرويج مستعدة للهجوم المفاجئ من طرف الألمان ، لذلك لم تدم المقاومة العسكرية أو البحرية أكثر من شهرين ، شنت القوات المسلحة في الشمال هجوما على القوات الألمانية في معارك نارفيك حتى أجبروا على الاستسلام في 10 يونيو بعد خسارتهم المساعدة البريطانية بعد سقوط فرنسا",
        en: "Norway also declared neutrality in the Second World War but was invaded by Germany in 1940. Unprepared for the surprise attack, its military and naval resistance lasted no more than two months. Armed forces in the north attacked the Germans in the battles of Narvik until they were forced to surrender on 10 June, having lost British support after the fall of France.",
      },
      {
        type: "P",
        ar: "هرب الملك هاكون والحكومة النرويجية لروثرهيث في لندن ، وأيدوا النضال من خلال خطب بثت اذاعيا من لندن ومن خلال دعم العمليات العسكرية السرية في النرويج ضد النازيين ، في يوم الغزو حاول زعيم الحزب الوطني الاشتراكي الصغير ، فيدكون كويسلنغ ، الاستيلاء على السلطة لكنه اضطر للتنحي بضغط من المحتلين الألمان ، كانت السلطة الحقيقية في يد زعيم سلطة الاحتلال الألماني جوزيف تيربوفن ، شكل كويسلنغ في وقت لاحق حكومة عميلة تحت السيطرة الألمانية ، وتطوع ما يقرب من 15,000 من النرويجيين للقتال في الوحدات الألمانية",
        en: "King Haakon and the Norwegian government fled to Rotherhithe in London, supporting the struggle through speeches broadcast from London and by backing secret military operations against the Nazis inside Norway. On the day of the invasion the leader of the small National Socialist party, Vidkun Quisling, tried to seize power but was forced to step down under pressure from the German occupiers; real authority lay with the German occupation chief Josef Terboven. Quisling later formed a puppet government under German control, and nearly 15,000 Norwegians volunteered to fight in German units.",
      },
      {
        type: "P",
        ar: "كان هناك أيضا الكثير من النرويجيين وذوي الأصول النرويجية الذين انضموا الى قوات التحالف بالاضافة الى القوات الحرة النرويجية ، في بداية الأمر بلغ عدد القوات النرويجية التي غادرت البلاد مع الملك في يونيو سنة 1940م ، 13 سفينة وخمس طائرات و500 رجل من البحرية الملكية النرويجية ، لكن هذه الأعداد سرعان ما تضاعفت ووصلت عند نهاية الحرب الى 58 سفينة و7500 رجل في خدمة البحرية النرويجية و5 أسراب من الطائرات في القوات الجوية النرويجية حديثة التشكل",
        en: "Many Norwegians and people of Norwegian descent also joined the Allied forces and the Free Norwegian Forces. The Norwegian forces that left the country with the king in June 1940 initially numbered 13 ships, five aircraft and 500 men of the Royal Norwegian Navy, but those numbers soon multiplied, reaching by the end of the war 58 ships and 7,500 men in Norwegian naval service and five air squadrons in the newly formed Norwegian air force.",
      },
      {
        type: "P",
        ar: "خلال السنوات الخمس من الاحتلال النازي ، أسس النرويجيون حركة مقاومة حاربت الاحتلال الألماني وأعلنوا العصيان المدني والمقاومة المسلحة وقاموا بتدمير محطة نورسك هيدرو للمياه الثقيلة ومخزون من المياه الثقيلة في فيمروك ، مما شل البرنامج النووي الألماني ، أما العنصر الأكثر أهمية للحلفاء كان دور البحرية التجارية النرويجية ، اذ أن البلاد امتلكت في وقت الغزو رابع أسطول تجاري بحري في العالم",
        en: "During the five years of Nazi occupation Norwegians founded a resistance movement that fought the German occupation, declared civil disobedience and armed resistance, and destroyed the Norsk Hydro heavy-water plant and a stock of heavy water at Vemork, crippling the German nuclear programme. The most important element for the Allies, however, was the role of the Norwegian merchant navy, since at the time of the invasion the country had the fourth largest merchant fleet in the world.",
      },
      {
        type: "P",
        ar: "أدارت شركة الشحن النرويجية نورتراشب الأسطول تحت ادارة الحلفاء خلال الحرب حيث كان دورهم اخلاء دونكيرك تمهيدا لعملية الانزال في النورماندي ، في كل شهر ديسمبر من كل عام ، تهدي النرويج شجرة عيد ميلاد للمملكة المتحدة اعترافا بفضلها في مساعدة النرويج خلال الحرب العالمية الثانية ، ويقام حفل نصب الشجرة في ساحة الطرف الاغر الشهيرة في لندن",
        en: "The Norwegian shipping company Nortraship ran the fleet under Allied direction during the war, from the evacuation of Dunkirk to the Normandy landings. Every December Norway gives the United Kingdom a Christmas tree in recognition of its help during the Second World War, and the tree is raised in a ceremony in London's famous Trafalgar Square.",
      },
      { type: "H3", ar: "فترة ما بعد الحرب", en: "The post-war period" },
      {
        type: "P",
        ar: "خلال الفترة الممتدة بين عامي 1945 و1961 ، سيطر حزب العمال على البرلمان بعد حصوله على الأغلبية المطلقة من الأصوات ، وقاد الحكومة رئيس الوزراء اينار جيرهادرسن الذي شرع في برنامج مستوحى من علم الاقتصاد الكينزي مشددا على تمويل الدولة للتصنيع والتعاون بين النقابات العمالية ومنظمات أرباب العمل ، استمرت كثير من تدابير الدولة للسيطرة على الاقتصاد التي فرضت خلال الحرب ، على الرغم من رفع نظام الحصص عن منتجات الألبان في عام 1949م في حين استمرت مراقبة الأسعار وتقنين المساكن والسيارات حتى عام 1960م",
        en: "Between 1945 and 1961 the Labour Party dominated parliament with an absolute majority of the vote, and the government was led by Prime Minister Einar Gerhardsen, who launched a programme inspired by Keynesian economics, emphasising state funding of industrialisation and cooperation between trade unions and employers' organisations. Many of the wartime state controls on the economy continued, although the quota system on dairy products was lifted in 1949, while price controls and the rationing of housing and cars lasted until 1960.",
      },
      {
        type: "P",
        ar: "استمر التحالف مع بريطانيا والولايات المتحدة في زمن الحرب الى سنوات ما بعد الحرب ، على الرغم من سعي حزب العمال تحقيق الهدف المتمثل في الاقتصاد الاشتراكي ، فانه نأى بنفسه عن الشيوعيين وعزز السياسة الخارجية وسياسة الدفاع مع الولايات المتحدة ، تلقت النرويج مساعدة من خطة مارشال من الولايات المتحدة ابتداء من عام 1947م وانضمت الى منظمة التعاون والتنمية الاقتصادية بعد عام وأصبحت عضوا مؤسسا لمنظمة حلف شمال الاطلسي في عام 1949م",
        en: "The wartime alliance with Britain and the United States continued into the post-war years. Although the Labour Party pursued the goal of a socialist economy, it distanced itself from the communists and strengthened foreign and defence policy with the United States. Norway received Marshall Plan aid from 1947, joined the Organisation for Economic Co-operation a year later, and became a founding member of NATO in 1949.",
      },
    ],
  },
  {
    slug: "norway-architecture",
    title_ar: "تعرف على فن العمارة بالنرويج",
    title_en: "Architecture in Norway",
    kicker_ar: "اكتشف النرويج",
    kicker_en: "Discover Norway",
    image: HERO,
    blocks: [
      { type: "H3", ar: "فن العمارة بالنرويج", en: "Architecture in Norway", noNumber: true },
      {
        type: "P",
        ar: "اعتمد التقليد النرويجي في البناء دائما على استخدام الأخشاب ، وفي واقع الأمر فان العديد من المباني الحديثة اليوم والأكثر اثارة للاهتمام بنيت من الخشب الأمر الذي يعكس الاقبال الشديد على هذه المادة للمصممين والمعماريين النرويجيين",
        en: "The Norwegian building tradition has always relied on timber, and in fact many of today's most interesting modern buildings are built of wood, reflecting how strongly Norwegian designers and architects favour the material.",
      },
      {
        type: "P",
        ar: "ومع تحول النرويج الى المسيحية قبل ألف عام أدخلت الهندسة المعمارية الحجرية مثل بناء كاتدرائية نيداروس في تروندهايم",
        en: "When Norway converted to Christianity a thousand years ago, stone architecture was introduced, such as the building of Nidaros Cathedral in Trondheim.",
      },
      {
        type: "P",
        ar: "وفي بدايات العصور الوسطى شيدت الكنائس في جميع أنحاء النرويج ، ولا يزال الكثير منها قائما حتى اليوم ، وتمثل مساهمة هامة في تاريخ النرويج المعماري ، ومن أبرز الأمثلة كنيسة العصا في أرنيس التي تصنف الآن على قائمة اليونسكو للتراث العالمي ، ومن الأمثلة الأخرى على فن العمارة الخشبية بريغن وارف في برغن التي تتكون من صف من هياكل خشبية ضيقة على طول رصيف الميناء",
        en: "In the early Middle Ages churches were built all over Norway, and many still stand today as an important contribution to the country's architectural history. Among the most notable examples is the Urnes stave church, now on the UNESCO World Heritage list. Another example of wooden architecture is Bryggen wharf in Bergen, a row of narrow wooden structures along the harbour quay.",
      },
      {
        type: "P",
        ar: "في القرن السابع عشر وتحت الحكم الدنماركي ، أنشئت مدن مثل كونغسبورغ وكنيستها بطراز الباروك وروروس بمبانيها الخشبية ، بعد حل الاتحاد بين النرويج والدنمارك عام 1814م أصبحت أوسلو عاصمة البلاد ، صمم المهندس المعماري كريستيان غروش أقدم أجزاء جامعة أوسلو وسوق بورصة أوسلو وغيرها من المباني العديدة والكنائس",
        en: "In the seventeenth century, under Danish rule, towns such as Kongsberg with its baroque church and Røros with its wooden buildings were founded. After the dissolution of the union between Norway and Denmark in 1814, Oslo became the capital. The architect Christian Grosch designed the oldest parts of the University of Oslo, the Oslo stock exchange and many other buildings and churches.",
      },
      {
        type: "P",
        ar: "في بداية القرن العشرين أعيد بناء مدينة أليسوند بأسلوب الفن الحديث ، هيمنت الوظيفية في الثلاثينيات من القرن العشرين ، وحينها كانت فترة قوية للعمارة النرويجية لكن المعماريين النرويجيين لم ينالوا الشهرة حتى مؤخرا ، أحد المباني الحديثة الأكثر لفتا للأنظار في النرويج هو برلمان سامي في كاراشيوكا من تصميم ستاين هالفورسون وكريستيان سندبي ، غرفة النقاش في البرلمان مصممة كنسخة خشبية للافو التي هي الخيمة التقليدية التي استخدمها شعب سامي الرحل",
        en: "At the start of the twentieth century the town of Ålesund was rebuilt in art nouveau style. Functionalism dominated in the 1930s, a strong period for Norwegian architecture, although Norwegian architects only gained wider fame recently. One of the most striking modern buildings in Norway is the Sámi parliament in Karasjok, designed by Stein Halvorsen and Christian Sundby; its debating chamber is designed as a wooden version of the lavvu, the traditional tent used by the nomadic Sámi.",
      },
    ],
  },
  {
    slug: "norway-language",
    title_ar: "تعرف على اللغة المستخدمة في النرويج",
    title_en: "The language used in Norway",
    kicker_ar: "اكتشف النرويج",
    kicker_en: "Discover Norway",
    image: HERO,
    blocks: [
      { type: "H3", ar: "اللغة المستخدمة في النرويج", en: "The language used in Norway", noNumber: true },
      {
        type: "P",
        ar: "للغة الجرمانية الشمالية النرويجية شكلان مكتوبان رسميان هما البوكمول النينوشك ، يعترف بكل منهما كلغة رسمية وبذلك يستخدمان على حد سواء في الادارة العامة والمدارس والكنائس ووسائل الاعلام ، لكن البوكمول تستخدم من قبل الأغلبية الساحقة بنسبة تتراوح بين 85 و90%",
        en: "Norwegian, a North Germanic language, has two official written forms, Bokmål and Nynorsk. Each is recognised as official and both are used in public administration, schools, churches and the media, but Bokmål is used by the overwhelming majority, between 85 and 90 per cent.",
      },
      {
        type: "P",
        ar: "يتكلم حوالي 95% من السكان النرويجية كلغة أصلية على الرغم من أن العديدين يتكلمون لهجات قد تختلف كثيرا عن اللغة المكتوبة ، بشكل عام معظم اللهجات النرويجية مفهومة بين متحدثي اللغة على الرغم من أن بعضها قد يتطلب جهودا كبيرة من جانب المستمع ليفهمها",
        en: "About 95 per cent of the population speak Norwegian as a native language, although many speak dialects that can differ greatly from the written form. In general most Norwegian dialects are mutually intelligible, though some require considerable effort from the listener.",
      },
      {
        type: "P",
        ar: "يتحدث العديدون باللغات الفنلندية الأوغرية لشعب سامي في جميع أنحاء البلد ولا سيما في الشمال ، يحق للمتحدثين بها الحصول على التعليم باللغة سامي أيا كان المكان الذي يعيشون فيه وتلقي الاتصالات من قبل الحكومة بمختلف لغات سامي",
        en: "Many people speak the Finno-Ugric Sámi languages throughout the country, particularly in the north. Speakers are entitled to education in Sámi wherever they live and to receive government communications in the various Sámi languages.",
      },
      {
        type: "P",
        ar: "أقلية كفين تتكلم اللغة الفنلندية الأوغرية الكفين / الفنلندية ، كما توجد دعوة لجعل لغة الاشارة النرويجية لغة رسمية في البلاد",
        en: "The Kven minority speaks the Finno-Ugric Kven/Finnish language, and there is also a campaign to make Norwegian sign language an official language of the country.",
      },
      {
        type: "P",
        ar: "خضعت اللغة النرويجية في القرنين التاسع عشر والعشرين لجدل سياسي وثقافي قوي مما أدى الى نشوء النينوشك في القرن التاسع عشر والى تشكيل معايير املائية بديلة في القرن العشرين ، ولا سيما معيار ريكسمول الذي يعتبر أكثر محافظة (أي أكثر شبها بالدنماركية) من بوكمول",
        en: "In the nineteenth and twentieth centuries Norwegian was the subject of intense political and cultural debate, which produced Nynorsk in the nineteenth century and alternative spelling standards in the twentieth, notably Riksmål, considered more conservative — that is, closer to Danish — than Bokmål.",
      },
      {
        type: "P",
        ar: "تتشابه النرويجية واللغات الاسكندنافية الأخرى : السويدية والدنماركية ، يمكن فهم اللغات الثلاث بين متحدثيها وتستخدم عادة في التواصل بين سكان الدول الاسكندنافية ، نتيجة للتعاون في اطار مجلس الشمال يحق لسكان جميع بلدان الشمال الأوروبي بما في ذلك آيسلندا وفنلندا الاتصال بالسلطات النرويجية بلغتهم الخاصة",
        en: "Norwegian resembles the other Scandinavian languages, Swedish and Danish. All three are mutually intelligible and are commonly used for communication between the people of the Scandinavian countries. As a result of cooperation within the Nordic Council, residents of all Nordic countries, including Iceland and Finland, may contact the Norwegian authorities in their own language.",
      },
      {
        type: "P",
        ar: "يتم تشجيع أي طالب نرويجي الذي هو طفل لأبوين مهاجرين على تعلم اللغة النرويجية ، تقدم الحكومة النرويجية دورات تعليمية للغة للمهاجرين الراغبين في الحصول على الجنسية النرويجية ، مع ذلك لا يطلب من المهاجرين تعلم النرويجية من أجل الحصول على الجنسية النرويجية ولا أولادهم",
        en: "Any Norwegian pupil who is the child of immigrant parents is encouraged to learn Norwegian, and the government offers language courses to immigrants who wish to obtain Norwegian citizenship, although immigrants and their children are not required to learn Norwegian in order to become citizens.",
      },
      {
        type: "P",
        ar: "اللغة الأجنبية الرئيسية التي تدرس في المدرسة الابتدائية النرويجية هي اللغة الانكليزية ، تجيد غالبية السكان الانجليزية وخاصة أولئك الذين ولدوا بعد الحرب العالمية الثانية ، الألمانية والفرنسية والاسبانية تدرس عادة كلغة ثانية أو في أكثر الأحيان كلغة ثالثة",
        en: "The main foreign language taught in Norwegian primary schools is English, and the majority of the population speak it well, especially those born after the Second World War. German, French and Spanish are usually taught as a second or, more often, a third language.",
      },
      {
        type: "P",
        ar: "اللغات الروسية واليابانية والايطالية واللاتينية ونادرا الصينية (المندرين) تتوفر في بعض المدارس ومعظمها في المدن ، تقليديا تعتبر الانكليزية والألمانية والفرنسية اللغات الأجنبية الرئيسية في النرويج ، استخدمت هذه اللغات على سبيل المثال على جوازات السفر النرويجية حتى عقد التسعينات من القرن العشرين ، ويحق لطلاب الجامعات استخدام هذه اللغات عند تقديم أطروحاتهم",
        en: "Russian, Japanese, Italian, Latin and, rarely, Mandarin Chinese are available in some schools, mostly in the cities. Traditionally English, German and French have been the main foreign languages in Norway; they appeared, for example, on Norwegian passports until the 1990s, and university students are entitled to use them when submitting their theses.",
      },
    ],
  },
  {
    slug: "norway-religion",
    title_ar: "تعرف على الديانات المتبعة في النرويج",
    title_en: "The religions followed in Norway",
    kicker_ar: "اكتشف النرويج",
    kicker_en: "Discover Norway",
    image: HERO,
    blocks: [
      { type: "H3", ar: "الديانات المتبعة في النرويج", en: "The religions followed in Norway", noNumber: true },
      {
        type: "P",
        ar: "تصل نسبة الأشخاص المنتمين الى كنيسة النرويج الى 80.7% ، وذلك اعتبارا من 1 يناير سنة 2009 متراجعا بنسبة 1% مقارنة مع العام الذي سبقه ، وبنسبة 2% عن عامين سابقين ، يسجل النرويجيين عند التعميد كأعضاء في كنيسة النرويج ، يحافظ العديدون على عضويتهم في الكنائس التابعة للدولة لكي يستطيعوا استخدام الخدمات مثل التعميد وسر التثبيت والزواج والدفن والطقوس التي تمتلك مكانة ثقافية قوية في النرويج",
        en: "As of 1 January 2009, 80.7 per cent of people belonged to the Church of Norway, down one per cent on the previous year and two per cent on two years earlier. Norwegians are registered as members of the Church of Norway at baptism, and many keep their membership in the state churches so they can use services such as baptism, confirmation, marriage and burial — rites that hold a strong cultural place in Norway.",
      },
      {
        type: "P",
        ar: "مع ذلك فان 20% فقط من النرويجيين يقول أن الدين يحتل مكانا هاما في حياتهم ، وفقا لاستطلاع للرأي أجرته مؤسسة غالوب ، مما يجعل النرويج احدى أكثر الدول علمانية في العالم ، (كانت استونيا والسويد والدنمارك فقط أقل من النرويج)",
        en: "Even so, only 20 per cent of Norwegians say religion holds an important place in their lives, according to a Gallup poll, making Norway one of the most secular countries in the world — only Estonia, Sweden and Denmark scored lower.",
      },
      {
        type: "P",
        ar: "في أوائل عقد التسعينات من القرن العشرين ، قدر أن ما تتراوح نسبته بين 4.7% و5.3% من النرويجيين حضر الكنيسة على أساس أسبوعي ، ما يصل الى 40% من أعضاء الكنيسة يحضر الاجتماعات أو المناسبات الدينية مرة في السنة",
        en: "In the early 1990s it was estimated that between 4.7 and 5.3 per cent of Norwegians attended church weekly, while up to 40 per cent of church members attended a service or religious event once a year.",
      },
      {
        type: "P",
        ar: "ووفقا لأحدث استطلاع أجري عام 2005 فان 32% من المواطنين النرويجيين يعتقدون بوجود الله في حين أجاب 47% منهم أنهم يعتقدون أن هناك نوعا من الروح أو قوة الحياة ، وقال 17% أنهم لا يعتقدون بوجود أي نوع من الروح أو الله أو قوة الحياة ، بينما طبقا لغوستافسون وبيترسون (2002) فان 72% من النرويجيين لا يعتقد في شخصية الله",
        en: "According to a 2005 survey, 32 per cent of Norwegian citizens believe in God, while 47 per cent answered that they believe there is some kind of spirit or life force and 17 per cent said they do not believe in any spirit, God or life force. According to Gustafsson and Pettersson (2002), 72 per cent of Norwegians do not believe in a personal God.",
      },
      {
        type: "P",
        ar: "تبلغ نسبة السكان غير المنتمين للكنيسة النرويجية حوالي 10% حسب احصائية سنة 2009 (80.7% أعضاء في كنيسة النرويج ، و9% آخرون أو 431,000 شخص أعضاء في المجتمعات الدينية خارج كنيسة النرويج)",
        en: "About 10 per cent of the population did not belong to the Church of Norway according to 2009 figures: 80.7 per cent were members of the Church of Norway and another 9 per cent, or 431,000 people, were members of religious communities outside it.",
      },
      {
        type: "P",
        ar: "يبلغ اجمالي اتباع الطوائف المسيحية الأخرى الى 4.9% من السكان ، بما في ذلك الانجيلية اللوثرية الحرة والرومان الكاثوليك والمعمدانيين والخمسينية والميثوديون والأدفنتست والآشوريين والكلدان وغيرهم ، ونسبة 2.8% من الرومان الكاثوليك ، و2.8% مسلمين ، و2% أخرى ، ونسبة 7.5% غير محدد ، يشكل المسلمين ثاني أكبر مجموعة دينية في البلاد حيث قدر مركز بيو نسبة السكان المسلمين عند 5.7% لسنة 2016 ، يمارس الاسلام بشكل رئيسي من قبل المهاجرين العرب والصوماليين والألبان والأتراك ، فضلا عن النرويجيين من أصل باكستاني",
        en: "Followers of other Christian denominations total 4.9 per cent of the population, including the Evangelical Lutheran Free Church, Roman Catholics, Baptists, Pentecostals, Methodists, Adventists, Assyrians and Chaldeans among others; 2.8 per cent are Roman Catholic, 2.8 per cent Muslim, 2 per cent other and 7.5 per cent unspecified. Muslims form the second largest religious group in the country, with the Pew Center estimating the Muslim population at 5.7 per cent in 2016. Islam is practised mainly by Arab, Somali, Albanian and Turkish immigrants, as well as Norwegians of Pakistani origin.",
      },
      {
        type: "P",
        ar: "تشكل كافة الديانات الأخرى أقل من 1% لكل منها بما في ذلك اليهودية ، فضلا عن كنيسة يسوع المسيح لقديسي الأيام الأخيرة وشهود يهوه ، قدم المهاجرون الهنود الهندوسية الى النرويج ولكنهم يقلون عن 5000 شخص أو 1% من النرويجيين غير اللوثريين ، هناك 11 منظمة بوذية تنضوي تحت لواء منظمة الاتحاد البوذي في النرويج التي تشكل 0.42% من السكان ، نحو 1.5% من النرويجيين يلتزم بالرابطة الانسانية النرويجية العلمانية",
        en: "All other religions account for less than 1 per cent each, including Judaism, as well as the Church of Jesus Christ of Latter-day Saints and Jehovah's Witnesses. Indian immigrants brought Hinduism to Norway, but they number fewer than 5,000 people, or 1 per cent of non-Lutheran Norwegians. Eleven Buddhist organisations fall under the Buddhist Federation of Norway, which makes up 0.42 per cent of the population, and about 1.5 per cent of Norwegians belong to the secular Norwegian Humanist Association.",
      },
      {
        type: "P",
        ar: "تبع النرويجيون ، مثل غيرهم من سكان الدول الاسكندنافية ، شكلا من أشكال الوثنية الجرمانية الأم المعروفة باسم الوثنية النوردية ، وبحلول نهاية القرن الحادي عشر عندما اعتنقت النرويج المسيحية ، تم منع الديانات النوردية الوثنية ، لكن لا تزال بقايا من تلك المعتقدات حية في البلاد في الأسماء النرويجية والأسماء المرجعية للمدن والمواقع وأيام الأسبوع ونواحي أخرى من اللغة اليومية",
        en: "Norwegians, like other Scandinavians, followed a form of ancestral Germanic paganism known as Norse paganism. By the end of the eleventh century, when Norway converted to Christianity, the pagan Norse religions were banned, but traces of those beliefs still live on in Norwegian personal names, the names of towns and places, the days of the week and other aspects of everyday language.",
      },
      {
        type: "P",
        ar: "أدى الاهتمام الحديث في الطرق القديمة لاحياء الممارسات الدينية الوثنية في ما يعرف باسم اساترو ، تشكلت أساتروفلسكابت بيفروست النرويجية في عام 1996م ، وفي عام 2005م وصل عدد أعضائها لنحو 200 عضو ، تشكلت فورنينغن فورن سد في عام 1999م واعترفت بها الحكومة النرويجية كمنظمة دينية",
        en: "Modern interest in the old ways has revived pagan religious practice in what is known as Ásatrú. The Norwegian group Åsatrufellesskapet Bifrost was formed in 1996 and by 2005 had about 200 members, while Foreningen Forn Sed was formed in 1999 and recognised by the Norwegian government as a religious organisation.",
      },
      {
        type: "P",
        ar: "احتفظ بعض من أقلية سامي بديانتهم الشامانية حتى القرن الثامن عشر عندما تم تحويلهم الى المسيحية من قبل المبشرين النرويجيين والدنماركيين ، الأرثوذكسية هي العقيدة الأسرع نموا في النرويج بمعدل وصل الى 231.1% بين عامي 2000م و2009م مقارنة مع 64.3% للاسلام",
        en: "Some of the Sámi minority kept their shamanic religion until the eighteenth century, when they were converted to Christianity by Norwegian and Danish missionaries. Orthodoxy is the fastest growing faith in Norway, with growth of 231.1 per cent between 2000 and 2009, compared with 64.3 per cent for Islam.",
      },
    ],
  },
  {
    slug: "norway-animals",
    title_ar: "تعرف على مختلف الحيوانات الموجودة في النرويج",
    title_en: "The animals found in Norway",
    kicker_ar: "اكتشف النرويج",
    kicker_en: "Discover Norway",
    image: HERO2,
    blocks: [
      { type: "H3", ar: "الحيوانات الموجودة في النرويج", en: "The animals found in Norway", noNumber: true },
      {
        type: "P",
        ar: "أكبر الحيوانات المفترسة في المياه النرويجية هي حيتان العنبر وأكبر الأسماك هي القرش المتشمس ، أكبر المفترسات على اليابسة هي الدببة القطبية بينما الدببة البنية هي أكبر الضواري على البر الرئيسي النرويجي ، بينما يعتبر الموظ أكبر الثدييات النروجية بلا منازع",
        en: "The largest predators in Norwegian waters are sperm whales and the largest fish is the basking shark. On land the biggest predators are polar bears, while brown bears are the largest carnivores on the Norwegian mainland, and the moose is without question the largest Norwegian mammal.",
      },
      {
        type: "P",
        ar: "تمتد النرويج على عدد من خطوط العرض ، بالاضافة الى التنوع الواسع في تضاريس البلاد ، كل ذلك جعل من النرويج موطنا طبيعيا للعديد من الكائنات الحية تفوق في تنوعها أغلب الدول الأوروبية ، فهناك ما يقرب من 60,000 نوع من الكائنات الحية في البر النرويجي والمياه المتاخمة لها (باستثناء البكتيريا والفيروسات)",
        en: "Norway stretches across a number of latitudes and its terrain is enormously varied, which has made it a natural home for a diversity of living things greater than in most European countries: there are some 60,000 species on Norwegian land and in its adjoining waters, excluding bacteria and viruses.",
      },
      {
        type: "P",
        ar: "كما يعتبر النظام البيئي البحري على الجرف النرويجي الكبير مثمرا جدا ، يستوطن البلاد ما يقرب من 16,000 نوع من الحشرات ، و20,000 نوع من الطحالب ، و1800 نوعا من الأشنيات ، و1,050 نوعا من الحزازيات ، و2,800 نوعا من النباتات الوعائية ، وما يقرب من 7,000 نوع من الفطريات ، و450 نوعا من الطيور ، و90 نوعا من الثدييات ، و45 من أسماك المياه العذبة ، و150 من أسماك المياه المالحة ، بالاضافة الى 1000 نوع من لافقاريات المياه العذبة ، و3500 نوع من لافقاريات المياه المالحة",
        en: "The marine ecosystem on the great Norwegian shelf is also highly productive. The country is home to about 16,000 insect species, 20,000 species of algae, 1,800 lichens, 1,050 mosses, 2,800 vascular plants, some 7,000 fungi, 450 birds, 90 mammals, 45 freshwater fish and 150 saltwater fish, as well as 1,000 freshwater invertebrates and 3,500 saltwater invertebrates.",
      },
      {
        type: "P",
        ar: "وصف العلم ما يقرب من 40,000 من هذه الكائنات ، تضم القائمة الحمراء لعام 2006م منهم 3886 صنفا يدرج 17 نوعا في هذه القائمة بشكل أساسي بسبب خطر انقراضها عالميا ، مثل القندس الأوروبي ، حتى وان لم يكن هذا النوع مهددا في النرويج بالذات ، هناك 430 نوعا من الفطريات في القائمة الحمراء",
        en: "Science has described about 40,000 of these organisms. The 2006 red list contains 3,886 of them, with 17 species listed mainly because of the risk of global extinction, such as the European beaver, even where the species is not threatened in Norway itself. There are 430 fungal species on the red list.",
      },
      {
        type: "P",
        ar: "ويرتبط العديد منها بشكل وثيق مع المناطق الصغيرة المتبقية من الغابات القديمة ، هناك أيضا 90 نوعا من الطيور على اللائحة و25 نوعا من الثدييات ، يدرج حاليا 1,988 نوع كمهدد بالانقراض أو مهدد بدرجة دنيا وفقا لتقرير عام 2006م ، ومن هذه الأنواع وصف 939 نوعا بأنه مهدد بدرجة دنيا و734 مهددة بدرجة وسطى ، و285 نوعا مهدد بدرجة قصوى ، ومن بين هذه الأنواع الذئب الرمادي والثعلب القطبي وضفدع البرك",
        en: "Many of them are closely tied to the small remaining areas of old-growth forest. The list also includes 90 bird species and 25 mammals. According to the 2006 report, 1,988 species are currently listed as endangered or near-threatened: 939 described as near-threatened, 734 as vulnerable and 285 as critically endangered, among them the grey wolf, the Arctic fox and the pool frog.",
      },
    ],
  },
  {
    slug: "norway-climate",
    title_ar: "تعرف على مناخ النرويج عبر مختلف فصول السنة",
    title_en: "Norway's climate through the seasons",
    kicker_ar: "اكتشف النرويج",
    kicker_en: "Discover Norway",
    image: HERO,
    blocks: [
      { type: "H3", ar: "مناخ النرويج عبر مختلف فصول السنة", en: "Norway's climate through the seasons", noNumber: true },
      {
        type: "P",
        ar: "تتكون معظم الأراضي النرويجية من صخور الغرانيت وصخور نايس الصوانية ، كما يمكن العثور على الاردواز والاحجار الرملية والحجر الجيري في طبقات الأرض ، كما تحتوي الارتفاعات الأدنى على رواسب بحرية ، بسبب تيار الخليج والرياح الغربية السائدة",
        en: "Most of Norway's land is made up of granite and gneiss, with slate, sandstone and limestone found in its layers, while the lower elevations contain marine deposits, all under the influence of the Gulf Stream and the prevailing westerly winds.",
      },
      {
        type: "P",
        ar: "تعيش النرويج درجات حرارة مرتفعة نسبيا وهطول الأمطار يفوق ما هو متوقع في مثل هذا الموقع الشمالي وخصوصا على طول الساحل ، يعيش البر الرئيسي للبلاد أربعة فصول متميزة حيث يكون الشتاء باردا مع انخفاض هطول الأمطار داخليا ، في الجزء الشمالي يكون المناخ قطبيا شماليا بحريا ثانويا ، في حين تعيش سفالبارد مناخ التندرا القطبي",
        en: "Norway has relatively high temperatures and more rainfall than would be expected at such a northern latitude, especially along the coast. The mainland has four distinct seasons, with cold winters and low precipitation inland. In the north the climate is subarctic maritime, while Svalbard has a polar tundra climate.",
      },
      {
        type: "P",
        ar: "يرتفع معدل هطول الأمطار في الأجزاء الجنوبية والغربية كما يكون شتاؤها أكثر اعتدالا من الجزء الجنوبي الشرقي ، تمتلك الأراضي المنخفضة حول أوسلو صيفا دافئا ومشمسا لكن البرد والثلوج تهيمن في فصل الشتاء (خاصة داخليا) ، ارتفع متوسط درجات الحرارة خلال العقود الماضية مما خفض من عدد الأيام التي يغطي فيها الثلج المناطق المنخفضة",
        en: "Rainfall is higher in the southern and western parts, and their winters are milder than in the south-east. The lowlands around Oslo have warm, sunny summers, but cold and snow dominate in winter, especially inland. Average temperatures have risen over recent decades, reducing the number of days when snow covers the lowlands.",
      },
      {
        type: "P",
        ar: "بسبب تعدد خطوط العرض في النرويج توجد اختلافات موسمية كبيرة في طول اليوم ، من أواخر مايو الى أواخر يوليو ، لا تغيب الشمس تماما تحت الأفق في المناطق الواقعة شمال الدائرة القطبية الشمالية ، ومن هنا وصف النرويج بأنها أرض شمس منتصف الليل ، بينما في بقية البلاد فيكون طول النهار بحدود 20 ساعة في اليوم ، في المقابل من أواخر نوفمبر الى أواخر يناير لا ترتفع الشمس فوق الأفق في الشمال بينما تكون ساعات النهار قصيرة جدا في بقية أنحاء البلاد",
        en: "Because Norway spans so many latitudes there are large seasonal differences in day length. From late May to late July the sun never sets completely below the horizon in areas north of the Arctic Circle, which is why Norway is called the land of the midnight sun, while in the rest of the country daylight lasts around 20 hours. Conversely, from late November to late January the sun does not rise above the horizon in the north, and daylight hours are very short in the rest of the country.",
      },
    ],
  },
  {
    slug: "norway-transport",
    title_ar: "تعرف على مختلف وسائل المواصلات في النرويج",
    title_en: "Means of transport in Norway",
    kicker_ar: "اكتشف النرويج",
    kicker_en: "Discover Norway",
    image: HERO2,
    blocks: [
      { type: "H3", ar: "المواصلات والانتقال في النرويج", en: "Transport and getting around in Norway", noNumber: true },
      {
        type: "P",
        ar: "نظرا لانخفاض الكثافة السكانية وطبيعة البلاد والسواحل الطويلة ، فان وسائل النقل العام في النرويج أقل تطورا مما هي عليه في العديد من البلدان الأوروبية ولا سيما خارج المدن ، على هذا النحو تستخدم النرويج الوسائل القديمة في النقل المائي ، لكن وزارة النقل والاتصالات النرويجية بدأت في السنوات الأخيرة في تطوير السكك الحديدية والطرق البرية والنقل الجوي من خلال فروعها العديدة من أجل تطوير البنية التحتية للبلاد",
        en: "Because of the low population density, the nature of the country and the long coastlines, public transport in Norway is less developed than in many European countries, particularly outside the cities, and traditional water transport is still used. In recent years, however, the Norwegian Ministry of Transport and Communications has worked through its many branches to develop railways, roads and air transport as part of the country's infrastructure.",
      },
      {
        type: "P",
        ar: "تتكون شبكة السكك الحديدية النرويجية الرئيسية من 4,114 كم من الخطوط القياسية ، منها 242 كم ذات مسار مزدوج و64 كيلومترا من السكك الحديدية عالية السرعة (210 كم في الساعة) ، بينما يعمل 62% منها على الكهرباء في 15 كيلو فولت تيار متردد بدرجة 16 هرتز",
        en: "The main Norwegian rail network consists of 4,114 km of standard-gauge line, of which 242 km is double track and 64 km is high-speed railway at 210 km/h, while 62 per cent of it is electrified at 15 kV, 16 Hz alternating current.",
      },
      {
        type: "P",
        ar: "نقلت خطوط السكك الحديدية 56,827,000 راكبا ، و2,956 مليون مسافر كيلومتر ، و24,783,000 طن من البضائع ، و3,414 مليون طن كيلومتر ، تعود ملكية كامل الشبكة لادارة السكك الحديدية الوطنية النرويجية ، في حين يتم تشغيل جميع قطارات الركاب المحلية باستثناء مشروع قطار المطار السريع عن طريق نورجيس ستاتبانر ، بينما تسير عدة شركات خاصة قطارات شحن",
        en: "The railways carried 56,827,000 passengers, 2,956 million passenger-kilometres, 24,783,000 tonnes of freight and 3,414 million tonne-kilometres. The whole network is owned by the Norwegian National Rail Administration, while all local passenger trains except the airport express are operated by Norges Statsbaner, and several private companies run freight trains.",
      },
      {
        type: "P",
        ar: "يتم تمويل الاستثمار في البنية التحتية الجديدة والصيانة من خلال الموازنة العامة للدولة والاعانات المقدمة لعمليات قطار الركاب ، تشغل نورجيس ستاتبانر قطارات المسافات الطويلة بما في ذلك القطارات ليلا والخدمات الاقليمية وأربعة أنظمة محلية لقطارات الركاب حول أوسلو وتروندهايم وبرغن وستافنجر",
        en: "Investment in new infrastructure and maintenance is funded from the state budget, along with subsidies for passenger train operations. Norges Statsbaner runs long-distance trains, including night trains, regional services and four local commuter systems around Oslo, Trondheim, Bergen and Stavanger.",
      },
      {
        type: "P",
        ar: "هناك ما يقرب من 92,946 كم من الطرق في النرويج ، منها 72,033 كم ممهد و664 كم من الطرق السريعة ، هناك أربعة مستويات من الطرق وهي الوطني وفي المقاطعة والبلدية والخاص ، الطرق الوطنية وحدها مرقمة ، وأهمها يعد جزء من خطة الطرق الأوروبية وأبرزها E6 الواصل بين شمال وجنوب البلد في حين يسير خط E39 على طول الساحل الغربي ، تدار الطرق الوطنية وطرق المقاطعات من قبل ادارة الطرق العامة النرويجية",
        en: "Norway has about 92,946 km of roads, of which 72,033 km are paved and 664 km are motorway. There are four levels of road — national, county, municipal and private — and only national roads are numbered. The most important of them form part of the European route scheme, notably the E6 linking the north and south of the country and the E39 running along the west coast. National and county roads are managed by the Norwegian Public Roads Administration.",
      },
      {
        type: "P",
        ar: "من بين 97 مطارا في النرويج يوجد 52 مطارا عاما ، و46 يتم تشغيلها من طرف أفينور المملوكة للدولة ، تنقل سبعة مطارات أكثر من مليون راكب سنويا ، كما عبر مطارات النرويج 41,089,675 راكب في عام 2007م منهم 13,397,458 عبر المطار الدولي",
        en: "Of Norway's 97 airports, 52 are public and 46 are operated by the state-owned Avinor. Seven airports handle more than a million passengers a year, and 41,089,675 passengers passed through Norwegian airports in 2007, of whom 13,397,458 went through the international airport.",
      },
      {
        type: "P",
        ar: "ان المدخل الرئيس للنرويج عن طريق الجو هو مطار أوسلو – غاردرموين ، الذي يقع على بعد حوالي 50 كم الى الشمال من أوسلو ، حيث تسير الرحلات الى معظم الدول الأوروبية وبعض الوجهات العالمية الأخرى ، ويعد هذا المطار مركزا لاثنتين من شركات الطيران النرويجية هما الخطوط الجوية الاسكندنافية ، والمكوك الجوي النرويجي (النرويجية) ، أما الطيران الاقليمي فيدار من غرب النرويج",
        en: "The main gateway to Norway by air is Oslo Gardermoen airport, about 50 km north of Oslo, with flights to most European countries and some other international destinations. It is a hub for two Norwegian carriers, Scandinavian Airlines and Norwegian Air Shuttle, while regional aviation is managed from western Norway.",
      },
    ],
  },
  {
    slug: "norway-culture-arts",
    title_ar: "تعرف على مجمل الثقافات والفنون في النرويج",
    title_en: "Culture, arts and music in Norway",
    kicker_ar: "اكتشف النرويج",
    kicker_en: "Discover Norway",
    image: HERO,
    blocks: [
      { type: "H3", ar: "الثقافة", en: "Culture" },
      {
        type: "P",
        ar: "ترتبط ثقافة النرويج ارتباطا وثيقا بتاريخ البلاد وجغرافيتها ، ثقافة المزرعة النرويجية فريدة من نوعها ومستمرة حتى اليوم الحالي ، حيث لم تتطور فقط بسبب الموارد الشحيحة والظروف المناخية القاسية ، ولكن أيضا بسبب قوانين الملكية القديمة",
        en: "Norwegian culture is closely tied to the country's history and geography. Norway's farm culture is unique and continues to this day, shaped not only by scarce resources and harsh climatic conditions but also by ancient property laws.",
      },
      {
        type: "P",
        ar: "في القرن الثامن عشر تطورت حركة قومية رومانسية قوية لا تزال واضحة في اللغة النرويجية ووسائل الاعلام ، في القرن التاسع عشر ازدهرت الثقافة النرويجية من خلال تواصل الجهود للوصول الى هوية مستقلة في مجالات الأدب والفن والموسيقى ، لا يزال هذا الأمر في الوقت الحالي جليا في الفنون المسرحية ونتيجة للدعم الحكومي للمعارض والمشاريع الثقافية والفنية",
        en: "In the eighteenth century a strong romantic national movement developed that is still visible in the Norwegian language and media. In the nineteenth century Norwegian culture flourished through sustained efforts to reach an independent identity in literature, art and music, and this remains evident today in the performing arts and in government support for exhibitions and cultural and artistic projects.",
      },
      {
        type: "P",
        ar: "تبنت النرويج في وقت مبكر حقوق المرأة وحقوق الأقليات وحقوق المثليين ، على سبيل المثال ، في عام 1990م كانت النرويج أول دولة تعترف باتفاقية منظمة العمل الدولية رقم 169 حول السكان الأصليين ، وفي عام 1993م أصبحت النرويج ثاني دولة تسمح بالشراكة المدنية بين المثليين ومنحتهم المساواة الكاملة في حق الزواج في 1 يناير من عام 2009م لتكون سادس دولة تقوم بذلك",
        en: "Norway adopted women's rights, minority rights and gay rights early. In 1990, for example, it was the first country to recognise International Labour Organization Convention 169 on indigenous peoples, and in 1993 it became the second country to allow civil partnership for same-sex couples, granting full marriage equality on 1 January 2009 as the sixth country to do so.",
      },
      { type: "H3", ar: "الفنون", en: "The arts" },
      {
        type: "P",
        ar: "لفترة طويلة سيطر على المشهد الفني النرويجي أعمال فنية من ألمانيا وهولندا فضلا عن تأثير كوبنهاغن ، ولم تبدأ الفترة النرويجية بالفعل الى أن حل القرن التاسع عشر ، وقد بدأت هذه الفترة أولا مع اللوحات الشخصية وفي وقت لاحق مع المناظر الطبيعية الرائعة",
        en: "For a long time the Norwegian art scene was dominated by work from Germany and the Netherlands, as well as the influence of Copenhagen, and a genuinely Norwegian period only began in the nineteenth century, first with portraits and later with magnificent landscapes.",
      },
      {
        type: "P",
        ar: "أعاد يوحنا كريستيان دال (1788-1857) ، وهو أحد الفنانين تابعي مدرسة درسدن ، أعاد في النهاية رسم المناظر الطبيعية في غرب النرويج محددا اللوحة النرويجية للمرة الأولى",
        en: "Johan Christian Dahl (1788-1857), one of the artists of the Dresden school, ultimately returned to paint the landscapes of western Norway, defining Norwegian painting for the first time.",
      },
      {
        type: "P",
        ar: "شجع استقلال النرويج الجديد عن الدنمارك الرسامين لتطوير هويتهم النرويجية وخاصة في لوحات المناظر لفنانين مثل كيتي كيلاند وهي رسامة درست على يد غود ، بالاضافة الى هارييت بيكر (1845-1932) التي تعتبر من بين الرائدات وتأثرت بالانطباعية ، وفريتس تاولو الانطباعي الذي تأثر بالمشهد الفني في باريس ، بينما كان كريستيان كروغ واقعيا اشتهر بلوحاته حول البغايا",
        en: "Norway's new independence from Denmark encouraged painters to develop their Norwegian identity, especially in landscapes, with artists such as Kitty Kielland, who studied under Gude, Harriet Backer (1845-1932), regarded as a pioneer influenced by impressionism, the impressionist Frits Thaulow, influenced by the Paris art scene, and Christian Krohg, a realist known for his paintings about prostitutes.",
      },
      {
        type: "P",
        ar: "تجدر الاشارة بوجه خاص بالرسام ادفارت مونك وهو رسام رمزي/تعبيري أصبح شهيرا عالميا بسبب لوحته الصرخة التي يقال أنها تمثل قلق الانسان المعاصر ، ومن الفنانين النرويجيين الآخرين : هارالد سولبيرغ وهو رسام مجدد رومانسي يتذكر بلوحاته مثل روروس ، والرسام أود نيردروم",
        en: "Special mention goes to Edvard Munch, a symbolist and expressionist painter who became world-famous for The Scream, said to represent the anxiety of modern man. Other Norwegian artists include Harald Sohlberg, a neo-romantic painter remembered for works such as his Røros paintings, and the painter Odd Nerdrum.",
      },
      { type: "H3", ar: "الموسيقى", en: "Music" },
      {
        type: "P",
        ar: "الى جانب الموسيقى الكلاسيكية من الملحن الرومانسي ادوارد غريغ والموسيقى الحديثة لآرني نوردهايم ، تكتسب موسيقى الميتال الأسود النرويجية شهرة في السنوات الأخيرة ، من بين الموسيقيين الكلاسيكيين النرويجيين : ليف أوف أندسنس أحد أشهر عازفي البيانو في العالم ، وترلس مورك عازف التشيلو البارع",
        en: "Alongside the classical music of the romantic composer Edvard Grieg and the modern work of Arne Nordheim, Norwegian black metal has gained fame in recent years. Norwegian classical musicians include Leif Ove Andsnes, one of the world's best-known pianists, and the outstanding cellist Truls Mørk.",
      },
      {
        type: "P",
        ar: "مشهد موسيقى الجاز في النرويج أيضا مزدهر ، يعترف بكل من يان غاربارك وتيري ريبدال وماري بوين وأريلد أندرسن وبوغه فيسيلتوفت عالميا ، بينما يصبح حاليا بال نيلسن لوف وسوبرسايلنت وياغا جازست وويبوتي فنانين شبابا من الطراز العالمي",
        en: "Norway's jazz scene also thrives: Jan Garbarek, Terje Rypdal, Mari Boine, Arild Andersen and Bugge Wesseltoft are internationally recognised, while Paal Nilssen-Love, Supersilent, Jaga Jazzist and Wibutee are becoming young artists of world class.",
      },
      {
        type: "P",
        ar: "تمتلك النرويج تقليدا عريقا من الموسيقى الشعبية والتي لا تزال شعبية لهذا اليوم ، من بين أبرز الموسيقيين في هذا المجال هاردانغر فدلرز وأندريا اين وأولاف يورغن هيغه وآنبيورغ لين والمطربون أغنيس بوين غارناس وكيرستن بروتن بيرغ وأود نوردستوغا",
        en: "Norway has a deep tradition of folk music that remains popular today. Among its most notable musicians are the Hardanger fiddlers, Andrea Een, Olav Jørgen Hegge and Annbjørg Lien, and the singers Agnes Buen Garnås, Kirsten Bråten Berg and Odd Nordstoga.",
      },
      {
        type: "P",
        ar: "منذ التسعينات ، أصبحت النرويج من المصدرين للميتال الأسود ، حيث تفجرت موسيقى لو فاي ودارك ورو من الميتال الثقيل في التسعينات في النرويج لتطلق العنان لعدد من الفرق مثل غورغوروث ومايهيم وبورزوم وامبيرور وداركثرون وامورتال ، بالاضافة الى الفرق اللاحقة مثل ديمو بورغير ، استقبل هذا التطور الى حد ما استقبالا جيدا لقيمته الموسيقية ولكن العديد من حفلات الميتال الأسود التي جرت في أوائل التسعينات نشرت الذعر بين النرويجيين",
        en: "Since the 1990s Norway has become an exporter of black metal, as lo-fi, dark and raw heavy metal exploded there and unleashed bands such as Gorgoroth, Mayhem, Burzum, Emperor, Darkthrone and Immortal, followed by later bands such as Dimmu Borgir. The development was received reasonably well for its musical value, but many of the black metal events of the early 1990s spread alarm among Norwegians.",
      },
    ],
  },
];
