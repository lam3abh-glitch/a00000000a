import { article, type CityArticle } from "./article-format";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

export const BRITAIN_CITY_ARTICLES: Record<string, CityArticle> = {
  london: article(
    "https://100region.com/?p=11223",
    "السياحة في بريطانيا – لندن",
    U("2022/05/img_6897.jpg"),
    String.raw`
P|لندن عاصمة المملكة المتحدة بريطانيا ، وهي أكبر المدن من حيث المساحة والتعداد السكاني في بريطانيا ، تقع مدينة لندن على نهر التايمز المشهور ، ويعود تاريخ هذه المدينة العريقة إلى العهد الروماني ، وكانت تسمى على عهد الرومان بمدينة لوندينيوم ، وقد بلغ عدد سكانها في عام 2015 ثمانية ملايين وستمئة وثلاثين ألف نسمة ، وتعتبر مدينة لندن من المدن الرائدة في مجالات الفن والتعليم والتجارة والسياحة والأزياء
IMG|${U("2022/05/img_6897.jpg")}||مدينة لندن
H5|ساعة بيغ بن
P|إحدى أهم معالم لندن الشهيرة ، والتي تعتبر رمز العاصمة البريطانية ، حيث يتهافت العديد من السياح من كافة أنحاء العالم لرؤيتها ، تبلغ من العمر أكثر من قرن ونصف ، تم إنشاؤها وافتتاحها في عام 1858 م ، تشتهر ساعة بيغ بن بدقتها المتناهية في قياس الوقت ، وتعتبر دقاتها رمزاً للتوقيت العالمي المعروف باسم غرينتش
IMG|${U("2022/05/img_6898.jpg")}||ساعة بيغ بن
H5|برج لندن
P|برج لندن أو قلعة لندن من معالم لندن السياحية الشهيرة ، وهو عبارة عن قلعة تاريخية تقع في وسط مدينة لندن على نهر التايمز من ضفته الشمالية ، حيث كان ويليام الفاتح هو من أمر ببناء البرج الأبيض ليصبح رمزاً لقوة الأسرة الحاكمة في إنجلترا فيما بعد
IMG|${U("2022/05/img_6894-1.jpg")}||برج لندن
H5|قصر وستمنستر
P|هو واحد من أقدم القصور الموجودة في لندن ، بني منذ القرن التاسع عشر ويتميز بموقعه الاستراتيجي على نهر التايمز ، واليوم هو مكان اجتماع البرلمان في لندن واجتماع مجلس العموم ، ويقع دير وستمنستر بجانب القصر مباشرة وهو المكان الذي يتوج به ملوك إنجلترا ويدفنون به ، وبناء قصر وستمنستر مخطط ومعقد إذ يضم 1100 غرفة و 100 سلم
IMG|${U("2022/05/img_6900.jpg")}||قصر وستمنستر
H5|عين لندن
P|عجلة الألفية ، لندن آي ، كلها أسماء لمعلم واحد من أهم معالم السياحة في لندن ، حيث تعتبر من أشهر المعالم الترفيهية في العاصمة البريطانية ، وقد أنشئت احتفالاً بمهرجان بريطانيا سنة 1951 م ، تقع في الطرف الغربي من حدائق اليوبيل ، تماماً على ضفة نهر التايمز الجنوبية
IMG|${U("2022/05/img_6882.jpg")}||عين لندن
H5|قصر باكنغهام
P|يعتبر من أهم قصور لندن السياحية وأحد أهم القصور الملكية في العالم ومقر السكن الرسمي للملكة إليزابيث الثانية ، وله مكانة خاصة في بريطانيا إلى جانب كونه أحد أهم أماكن سياحية في لندن ، يضم القصر حدائق تعد من أكبر الحدائق الخاصة في العالم
IMG|${U("2022/05/img_6901.jpg")}||قصر باكنغهام
H5|شارع أكسفورد
P|أشهر شوارع لندن على الصعيد الأوروبي ويقع في الجهة الغربية من مدينة لندن ، يمتد شارع أكسفورد على مسافة قدرها 1.5 كم ، حيث يلتقي بالعديد من الشوارع الفرعية ، هذا الشارع المزدحم يمر به يومياً أكثر من نصف مليون شخص وقد وصلت مبيعاته إلى أرقام قياسية تقدر بـ 5 مليارات جنيه إسترليني إذ يحتوي على أكثر من 300 محل تجاري
IMG|${U("2022/05/img_6903.jpg")}||شارع أكسفورد
H5|ريجنت ستريت
P|من أشهر وجهات التسوق على الإطلاق وأكثرها حيوية في مدينة لندن ، يضم شارع ريجنت أكثر من 100 علامة تجارية عالمية منها آبل ولاكوست وهامليز مما جعل منه وجهة سياحية مفضلة يتهافت عليها أكثر من 7.5 مليون زائر في السنة ، وهناك أكثر من 20000 شخص يعملون فيه ، كما يشتهر بأبنيته الأثرية الأنيقة المدرجة على قائمة التراث الوطني ويحتوي على الكثير من معالم الجذب التي تشمل الديكورات الداخلية المميزة للمحلات والمعارض الفنية المختلفة بأشكالها فضلاً عن الكثير من الفنادق
IMG|${U("2022/05/img_6904.jpg")}||ريجنت ستريت
H5|شارع العرب
P|شارع العرب في لندن هو شارع الاقتصاد العربي بشكله المصغر في مدينة لندن ، يقع عند تقاطع الزاوية لشارع أكسفورد مع لين بارك ، بالقرب من محطة المترو ماربل آرك ، ويعتبر شارع العرب مكان تواجد مزيج من الثقافات العربية في منطقة واحدة ، حيث يجمع شارع إدجوير في لندن جميع أطياف الزوار العرب
IMG|${U("2022/05/img_6906.jpg")}||شارع العرب
H5|المتحف البريطاني
P|المتحف البريطاني في لندن كان الوجهة الأكثر جذباً لزوار بريطانيا خلال عام 2015 لتسعة أعوام على التوالي ، تم إنشاؤه في عام 1756 م ، وهو يعرض لنا تاريخ الحضارات الإنسانية وذلك لأنه يحتوي على أكثر من 13 مليون تحفة نادرة جمعت من خلال الاستعمار لأغلب القارات والعديد من الشعوب التي تتالت على الحضارة البشرية
IMG|${U("2022/05/img_6908.jpg")}||المتحف البريطاني
H5|متحف الشمع
P|يسمى أيضاً متحف مادام توسو ، يضم المتحف الكثير من التماثيل والمجسمات التي تعود لشخصيات معروفة على مستوى العالم وفي شتى المجالات سواء الرياضية أو الفنية أو حتى السياسية ، للمتحف عدة فروع في عدد من المدن العالمية مثل أمستردام ونيويورك وبرلين ، ويمكن الاستمتاع بالقبة السماوية الموجودة فيه والتي تأخذك برحلة عبر الزمن للتعرف على الحقبة التاريخية التي مرت بها لندن بمؤثرات صوتية وعرض للتماثيل
IMG|${U("2022/05/img_6907.jpg")}||متحف الشمع
`,
  ),
};

export const BRITAIN_CITY_ARTICLES_EN: Record<string, { title: string; values: string[] }> = {
  london: {
    title: "Tourism in Britain — London",
    values: [
      "London is the capital of the United Kingdom and the largest city in Britain in both area and population. It sits on the famous river Thames, and the history of this ancient city goes back to Roman times, when it was called Londinium. In 2015 its population reached eight million six hundred and thirty thousand. London is one of the leading cities in the world for art, education, commerce, tourism and fashion.",
      "The city of London",
      "Big Ben",
      "One of London's most famous landmarks and a symbol of the British capital, drawing visitors from every corner of the world. It is more than a century and a half old, built and opened in 1858. Big Ben is renowned for the extreme accuracy of its timekeeping, and its chimes are a symbol of the world standard known as Greenwich Mean Time.",
      "Big Ben",
      "The Tower of London",
      "The Tower of London, or London Castle, is one of the city's famous sights — a historic fortress in the middle of London on the northern bank of the Thames. It was William the Conqueror who ordered the building of the White Tower, which later became a symbol of the power of England's ruling house.",
      "The Tower of London",
      "The Palace of Westminster",
      "One of the oldest palaces in London, built in the nineteenth century and distinguished by its strategic position on the Thames. Today it is where Parliament and the House of Commons meet. Westminster Abbey stands directly beside the palace and is the place where England's monarchs are crowned and buried. The palace itself is elaborately planned, with 1,100 rooms and 100 staircases.",
      "The Palace of Westminster",
      "The London Eye",
      "The Millennium Wheel, the London Eye — all names for a single landmark and one of the most important sights in London, among the best known attractions in the British capital. It was created to celebrate the Festival of Britain in 1951 and stands at the western end of the Jubilee Gardens, right on the south bank of the Thames.",
      "The London Eye",
      "Buckingham Palace",
      "One of London's most important palaces for visitors and one of the world's foremost royal residences, the official home of Queen Elizabeth II. It holds a special place in Britain as well as being one of the city's leading attractions, and the palace grounds are among the largest private gardens in the world.",
      "Buckingham Palace",
      "Oxford Street",
      "The most famous street in London on a European scale, lying in the western part of the city. Oxford Street runs for 1.5 km, meeting many side streets along the way. More than half a million people pass along this busy street every day, and its sales have reached record figures estimated at 5 billion pounds sterling, as it holds more than 300 shops.",
      "Oxford Street",
      "Regent Street",
      "One of the most famous and liveliest shopping destinations anywhere in London. Regent Street holds more than 100 international brands including Apple, Lacoste and Hamleys, which has made it a favourite destination visited by more than 7.5 million people a year, with more than 20,000 people working there. It is also known for its elegant listed heritage buildings and has many attractions, from the distinctive interiors of the shops to art galleries of every kind, as well as plenty of hotels.",
      "Regent Street",
      "Edgware Road — the Arab street",
      "London's Arab street is the Arab economy in miniature within the city. It lies at the corner where Oxford Street meets Park Lane, near Marble Arch underground station, and is a place where a mixture of Arab cultures comes together in one district, as Edgware Road gathers visitors from across the Arab world.",
      "Edgware Road — the Arab street",
      "The British Museum",
      "The British Museum in London was the most visited attraction in Britain in 2015, for the ninth consecutive year. It was founded in 1756 and presents the history of human civilisations, holding more than 13 million rare pieces gathered through the colonisation of most continents and of the many peoples who followed one another through human history.",
      "The British Museum",
      "The wax museum",
      "Also called Madame Tussauds, the museum holds many statues and figures of people known worldwide across every field — sporting, artistic and even political. It has several branches in world cities such as Amsterdam, New York and Berlin. You can also enjoy its planetarium, which takes you on a journey through time to learn about the historical eras London has passed through, with sound effects and displays of the figures.",
      "The wax museum",
    ],
  },
};
