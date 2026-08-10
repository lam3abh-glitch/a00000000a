export type GuideBlock =
  | { type: "P"; ar: string; en: string }
  | { type: "H3"; ar: string; en: string }
  | { type: "LIST"; ar: string[]; en: string[] };

export type Guide = {
  slug: string;
  title_ar: string;
  title_en: string;
  kicker_ar: string;
  kicker_en: string;
  image: string;
  blocks: GuideBlock[];
};

const HERO = {
  program: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=80",
  before: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=1600&q=80",
  facts: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1600&q=80",
  todo: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=1600&q=80",
  castles: "https://images.unsplash.com/photo-1591289009723-aef0a1a8a23b?w=1600&q=80",
};

export const franceGuides: Guide[] = [
  {
    slug: "program",
    title_ar: "تعرف على البرنامج السياحي المعد لفرنسا",
    title_en: "The travel program prepared for France",
    kicker_ar: "برنامج سياحي",
    kicker_en: "Itinerary",
    image: HERO.program,
    blocks: [
      { type: "P", ar: "برنامج سياحي مقترح لمدة أربعة عشر يوماً يجمع بين باريس والجنوب الفرنسي والقرى الجبلية، مرتّب بحيث تنتقل من مدينة إلى أخرى بالقطار السريع دون تعب أو ازدحام.", en: "A suggested fourteen-day program combining Paris, the French south and the mountain villages, arranged so you move between cities by high-speed train without fatigue or crowding." },
      { type: "H3", ar: "الأسبوع الأول", en: "Week one" },
      { type: "LIST", ar: ["اليوم ١ – ٤: باريس، برج إيفل والحي اللاتيني والمتاحف وأوبرا غارنييه.", "اليوم ٥: رحلة يوم إلى قصر فرساي.", "اليوم ٦ – ٧: ستراسبورغ وكولمار وبيوتها الملوّنة على الماء."], en: ["Days 1–4: Paris — the Eiffel Tower, the Latin Quarter, the museums and the Palais Garnier.", "Day 5: A day trip to the Palace of Versailles.", "Days 6–7: Strasbourg and Colmar with their coloured houses on the water."] },
      { type: "H3", ar: "الأسبوع الثاني", en: "Week two" },
      { type: "LIST", ar: ["اليوم ٨ – ٩: ليون، مدينة الطعام والمتاحف والأزقة القديمة.", "اليوم ١٠: أنسي وبحيرتها الصافية.", "اليوم ١١: شامونيه وجبال الألب وتلفريك إيغي دو ميدي.", "اليوم ١٢ – ١٣: نيس وكان وشواطئ الريفييرا.", "اليوم ١٤: مارسيليا والميناء القديم ثم العودة."], en: ["Days 8–9: Lyon, the city of food, museums and old lanes.", "Day 10: Annecy and its clear lake.", "Day 11: Chamonix, the Alps and the Aiguille du Midi cable car.", "Days 12–13: Nice and Cannes and the Riviera beaches.", "Day 14: Marseille and the Old Port, then the journey home."] },
      { type: "H3", ar: "نصائح للتنقل", en: "Getting around" },
      { type: "P", ar: "احجز تذاكر القطار مبكراً للحصول على أفضل سعر، واحمل حقيبة واحدة متوسطة لأن معظم الفنادق في المدن القديمة بلا مصاعد كبيرة، واجعل أول وآخر ليلة في مدينة فيها مطار دولي.", en: "Book train tickets early for the best fare, carry one medium suitcase since most hotels in old towns have small lifts, and keep the first and last night in a city with an international airport." },
    ],
  },
  {
    slug: "before-you-go",
    title_ar: "تعرف على فرنسا قبل السفر لها",
    title_en: "Know France before you travel",
    kicker_ar: "قبل السفر",
    kicker_en: "Before you go",
    image: HERO.before,
    blocks: [
      { type: "P", ar: "فرنسا بلد منظّم يحب الهدوء والاحترام المتبادل، ومعرفة بعض التفاصيل الصغيرة قبل السفر تجعل الرحلة أسهل وأجمل بكثير.", en: "France is an orderly country that values calm and mutual respect, and knowing a few small details before you travel makes the trip far easier and more enjoyable." },
      { type: "H3", ar: "التأشيرة والدخول", en: "Visa and entry" },
      { type: "P", ar: "فرنسا ضمن منطقة شنغن، ويمكن التقديم على التأشيرة قبل الرحلة بأسابيع مع حجز الفندق وتذاكر الطيران والتأمين الصحي. احتفظ بنسخة ورقية ورقمية من كل مستند.", en: "France is part of the Schengen area; apply for the visa weeks before the trip with hotel bookings, flight tickets and health insurance. Keep a paper and digital copy of every document." },
      { type: "H3", ar: "أفضل وقت للزيارة", en: "Best time to visit" },
      { type: "P", ar: "الربيع من أبريل إلى يونيو والخريف في سبتمبر وأكتوبر هما الأجمل: جو معتدل وزحام أقل وأسعار أهدأ. أغسطس موسم ذروة وكثير من المحال المحلية تغلق للعطلة.", en: "Spring from April to June and autumn in September and October are the loveliest: mild weather, fewer crowds and calmer prices. August is peak season and many local shops close for the holidays." },
      { type: "H3", ar: "المال واللغة", en: "Money and language" },
      { type: "LIST", ar: ["العملة اليورو، والبطاقات مقبولة في كل مكان تقريباً مع الاحتفاظ بقليل من النقد للأسواق.", "كلمة Bonjour قبل أي حديث تفتح كل الأبواب، وMerci عند المغادرة.", "الإنجليزية مفهومة في المدن الكبيرة، وأقل في القرى."], en: ["The currency is the euro and cards are accepted almost everywhere, though keep a little cash for markets.", "Saying Bonjour before any conversation opens every door, and Merci when you leave.", "English is understood in big cities and less so in villages."] },
      { type: "H3", ar: "أعراف وسلوكيات", en: "Etiquette" },
      { type: "P", ar: "الصوت المنخفض في المطاعم والقطارات مطلوب، والخدمة عادة محسوبة في الفاتورة فالبقشيش اختياري، والوقوف في الصفوف أمر مقدّس.", en: "A low voice in restaurants and trains is expected, service is usually included in the bill so tipping is optional, and queuing is taken seriously." },
    ],
  },
  {
    slug: "facts",
    title_ar: "تعرف على عدد من الحقائق والمعلومات عن فرنسا",
    title_en: "Facts and information about France",
    kicker_ar: "حقائق",
    kicker_en: "Facts",
    image: HERO.facts,
    blocks: [
      { type: "P", ar: "مجموعة من الحقائق التي تعطي صورة أوضح عن فرنسا: أرضها وناسها وثقافتها وما يجعلها الدولة الأكثر زيارة في العالم.", en: "A set of facts that give a clearer picture of France: its land, people, culture and what makes it the most visited country in the world." },
      { type: "LIST", ar: [
        "العاصمة باريس، وعدد السكان نحو ٦٧ مليون نسمة.",
        "المساحة نحو ٦٧٤٬٨٤٣ كم² وهي أكبر دولة في الاتحاد الأوروبي.",
        "فرنسا الدولة الأولى عالمياً في عدد الزوار السنوي.",
        "أعلى قمة في أوروبا الغربية هي مون بلان بارتفاع ٤٨٠٧ أمتار على الحدود مع إيطاليا.",
        "متحف اللوفر أكبر متحف فني في العالم ويضم لوحة الموناليزا.",
        "في فرنسا أكثر من ٤٠٠ نوع من الجبن، والخبز الفرنسي محمي بقانون.",
        "شبكة قطارات TGV تربط المدن بسرعة تصل إلى ٣٢٠ كم/س.",
        "العلم الفرنسي ثلاثي الألوان، وشعار الدولة: حرية، مساواة، أخوّة.",
        "لفرنسا سواحل على المحيط الأطلسي والبحر المتوسط وبحر المانش.",
      ], en: [
        "The capital is Paris and the population is around 67 million.",
        "The area is about 674,843 km², making it the largest country in the European Union.",
        "France is first in the world for annual visitor numbers.",
        "The highest peak in Western Europe is Mont Blanc at 4,807 metres on the Italian border.",
        "The Louvre is the largest art museum in the world and home to the Mona Lisa.",
        "France has more than 400 kinds of cheese, and French bread is protected by law.",
        "The TGV network links cities at speeds up to 320 km/h.",
        "The French flag is a tricolour and the national motto is Liberty, Equality, Fraternity.",
        "France has coasts on the Atlantic, the Mediterranean and the English Channel.",
      ] },
    ],
  },
  {
    slug: "things-to-do",
    title_ar: "أشياء عليك القيام بها في فرنسا",
    title_en: "Things you must do in France",
    kicker_ar: "تجارب",
    kicker_en: "Experiences",
    image: HERO.todo,
    blocks: [
      { type: "P", ar: "ليست قائمة أماكن فقط، بل تجارب تجعل الرحلة إلى فرنسا ذكرى لا تُنسى.", en: "Not just a list of places, but experiences that turn a trip to France into an unforgettable memory." },
      { type: "LIST", ar: [
        "شاهد برج إيفل وقت الغروب ثم انتظر إضاءته اللامعة كل ساعة.",
        "تناول فطوراً فرنسياً في مقهى على الرصيف: كرواسان وقهوة وصحيفة.",
        "اصعد بتلفريك إيغي دو ميدي في شامونيه لترى جبال الألب من الأعلى.",
        "تجوّل في أسواق المدن القديمة واشترِ الجبن والفواكه من الفلاحين.",
        "اركب قارباً في بحيرة أنسي أو رحلة نهرية في بوردو.",
        "زُر قصر فرساي وحدائقه الواسعة في رحلة يوم من باريس.",
        "امشِ على كورنيش الإنجليز في نيس عند الصباح الباكر.",
        "جرّب قطار TGV بين مدينتين لتشاهد الريف الفرنسي من النافذة.",
        "زُر مزارع اللافندر في بروفانس في يونيو ويوليو.",
        "اقضِ أمسية في أوبرا غارنييه أو مسرح صغير في ليون.",
      ], en: [
        "Watch the Eiffel Tower at sunset, then wait for its hourly sparkle.",
        "Have a French breakfast at a pavement café: croissant, coffee and a newspaper.",
        "Ride the Aiguille du Midi cable car in Chamonix to see the Alps from above.",
        "Wander the old-town markets and buy cheese and fruit from the farmers.",
        "Take a boat on Lake Annecy or a river cruise in Bordeaux.",
        "Visit the Palace of Versailles and its vast gardens on a day trip from Paris.",
        "Walk the Promenade des Anglais in Nice in the early morning.",
        "Take the TGV between two cities and watch the French countryside pass by.",
        "Visit the lavender fields of Provence in June and July.",
        "Spend an evening at the Palais Garnier or a small theatre in Lyon.",
      ] },
    ],
  },
  {
    slug: "castles",
    title_ar: "أشهر عشر قلاع في فرنسا",
    title_en: "The ten most famous castles in France",
    kicker_ar: "قلاع وقصور",
    kicker_en: "Castles",
    image: HERO.castles,
    blocks: [
      { type: "P", ar: "فرنسا بلد القلاع، ومعظمها في وادي اللوار حيث بُنيت قصور الملوك بين الأنهار والغابات. هذه أشهر عشر قلاع يمكن زيارتها.", en: "France is a land of castles, most of them in the Loire Valley where the kings built their palaces among rivers and forests. These are the ten most famous castles to visit." },
      { type: "LIST", ar: [
        "قصر فرساي – أشهر قصر ملكي في العالم وقاعة المرايا وحدائقه الهائلة.",
        "قلعة شامبور – أكبر قلاع وادي اللوار بسلالمها الحلزونية المزدوجة.",
        "قلعة شينونسو – قلعة النساء الممتدة فوق نهر الشير.",
        "قلعة مون سان ميشيل – دير محصّن على جزيرة يحيط بها المد.",
        "قلعة كاركاسون – مدينة محصنة كاملة بأسوار وأبراج من العصور الوسطى.",
        "قلعة شيفرني – قلعة كلاسيكية بأثاثها الأصلي وحدائقها.",
        "قلعة أمبواز – قلعة ملكية تطل على اللوار ويرقد فيها ليوناردو دافنشي.",
        "قلعة بلوا – ثلاث حقب معمارية في فناء واحد.",
        "قلعة أزاي لو ريدو – قلعة صغيرة أنيقة تنعكس في الماء.",
        "قلعة بو – مسقط رأس هنري الرابع في جنوب غرب فرنسا.",
      ], en: [
        "Palace of Versailles – the world's most famous royal palace, with the Hall of Mirrors and immense gardens.",
        "Château de Chambord – the largest Loire castle, with its double spiral staircase.",
        "Château de Chenonceau – the ladies' castle, stretching across the river Cher.",
        "Mont-Saint-Michel – a fortified abbey on an island surrounded by the tide.",
        "Carcassonne – a complete medieval walled city of ramparts and towers.",
        "Château de Cheverny – a classical castle with its original furniture and gardens.",
        "Château d'Amboise – a royal castle above the Loire where Leonardo da Vinci is buried.",
        "Château de Blois – three architectural eras around a single courtyard.",
        "Château d'Azay-le-Rideau – a small, elegant castle reflected in the water.",
        "Château de Pau – birthplace of Henry IV in south-west France.",
      ] },
    ],
  },
];

export const getGuide = (slug: string) => franceGuides.find((g) => g.slug === slug);
