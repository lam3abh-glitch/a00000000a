import type { Guide } from "./france-guides";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

// قطار سيبيريا العظيم (source page_id=1460)
const transSiberian: Guide = {
  slug: "trans-siberian-train",
  title_ar: "قطار سيبيريا العظيم – خط سير أطول رحلة قطار في العالم",
  title_en: "The Great Siberian Train — the longest railway journey in the world",
  kicker_ar: "قطار سيبيريا العظيم",
  kicker_en: "Trans-Siberian train",
  image: U("2022/09/img_2582.jpg"),
  blocks: [
    { type: "H3", ar: "خط سير قطار سيبيريا العظيم", en: "The route of the Great Siberian train", noNumber: true },
    {
      type: "H3",
      ar: "بداية التفكير برحلة القطار وركوبه والجو العام",
      en: "How the idea of the journey began, and the mood on board",
    },
    {
      type: "P",
      ar: "من الوهلة الأولى قد يبدو التفكير في المضي قدما نحو مغامرة بهذا الشكل بأنها فكرة مجنونة أو ذات غير منفعة أو أهمية",
      en: "At first glance, the thought of going ahead with an adventure like this may look like a mad idea, of no real use or importance.",
    },
    {
      type: "P",
      ar: "إلا ان انجاز مغامرة بهذه الضخامة أو الشكل تعد تجربة فريدة من نوعها شكلا وموضوعا وحتى مضمونا",
      en: "Yet completing an adventure of this size is an experience unique in every sense — in form, in subject and even in substance.",
    },
    {
      type: "P",
      ar: "ترددت كثيرا في انجازها وكان بداخلي الكثير من التساؤلات ، أولها هل تستحق هذه المغامرة كل هذا العناء ؟ وماذا سوف أستفيد في نهاية المطاف ؟",
      en: "I hesitated a great deal, and many questions ran through my mind: is this adventure worth all the trouble? And what will I gain from it in the end?",
    },
    {
      type: "P",
      ar: "الا ان الاصرار الذي كان بداخلي أقوى من استفساراتي ، وبالفعل أخذت القرار ، وعقدت العزم قدما نحو تنفيذها ، ولم يكن التنفيذ سهلا ابدا ، فوقتها كنت في جمهورية داغستان ، واضطررت للسفر الى موسكو في رحلة استغرقت ثلاث ساعات ، وفي موسكو انتظرت ترانزيت لمدة أربع ساعات ، على ان احلق مرة أخرى من موسكو الى مدينة في نهاية روسيا وهي مدينة فالديفستوك في رحلة استغرقت بداخل روسيا ثمان ساعات ونصف ، وكان وقتها فارق التوقيت سبع ساعات عن موسكو ، وعند الوصول اضطررت الى البقاء لمدة تسع ساعات حتى موعد انطلاق قطار سيبيريا العظيم باتجاه موسكو مرة أخرى ، في رحلة سوف تستغرق ست ليالي سبعة أيام ، بإجمالي مسافة قدرها 9248 كيلو متر متواصلة ، بحد ذاته الوصول الى القطار كان في غاية الصعوبة والتعقيد وكان يحتاج الى ارادة قوية وعزيمة ثابتة",
      en: "But the determination inside me was stronger than my doubts. I took the decision and set out to carry it through, and it was never easy. At the time I was in the Republic of Dagestan, and I had to fly to Moscow on a three-hour flight, then wait four hours in transit in Moscow before flying again from Moscow to a city at the far end of Russia — Vladivostok — a flight of eight and a half hours inside Russia alone, with a time difference of seven hours from Moscow. On arrival I had to wait nine more hours for the departure of the Great Siberian train back towards Moscow, a journey of six nights and seven days covering 9,248 continuous kilometres. Simply reaching the train was extremely difficult and complicated, and it needed a strong will and a firm resolve.",
    },
    {
      type: "P",
      ar: "شاهد فيديو قطار سيبيريا العظيم على قناتي في اليوتيوب",
      en: "Watch the video of the Great Siberian train on my YouTube channel.",
    },
    {
      type: "P",
      ar: "ما ان وصلت الى مدينة فالديفستوك حتى كانت الطاقة الجسمانية التي كانت بداخلي منتهية تماما ، حيث انني معتاد على عدم النوم بالطائرة ، وكما ذكرت ، فإن المجال مفتوح أمامي لمدة تسع ساعات لاكتشاف المدينة ولو بصورة سريعة ، لذلك اتفقت مع أحد أصحاب التكاسي وكان من جمهورية أوزبكستان بأن يتولى عملية أخذ جولة سياحية في المدينة لمدة خمس ساعات ، وبالفعل قمت بذلك وسوف أشرح في صفحة روسيا الأماكن التي زرتها في فالديفستوك ، وذلك لأن الحديث هنا فقط عن قطار سيبيريا العظيم",
      en: "By the time I reached Vladivostok my physical energy was completely spent, since I am used to not sleeping on planes. As I said, I had nine free hours to discover the city, even if quickly, so I agreed with a taxi driver — he was from Uzbekistan — to take me on a five-hour tour of the city. I will describe the places I visited in Vladivostok on the Russia page, because the subject here is only the Great Siberian train.",
    },
    {
      type: "P",
      ar: "في الساعة الخامسة مساء وقد حان موعد الذهاب الى محطة القطار ، وما ان وصلت المحطة واخذت شنطي تمهيدا للدخول الى المحطة ، فقد طلب مني مسئولو الأمن بالتحقق من سلامة الشنط التي لدي ، وهو ما أعطاني انطباع عام بالأمن والأمان الموجودين في تلك المحطة بشكل خاص ، وفي القطار بشكل عام ، بعدها عرفت انه ليس بإمكان أي شخص الصعود الى القطار طوال الرحلة وفي جميع المحطات من غير أخذ كافة الاحتياطات الخاصة بالأمن والأمان ، وهذا شيء يحسب للقطار وللقائمين عليه ، وكنت قبل الذهاب الى المحطة قد ذهبت الى السوبرماركت لشراء بعض الحاجات التي تمكنني من سد الجوع ولو لفترة بسيطة بداخل القطار ، وبالفعل اشتريت موز وعدد من الفواكة وعدد من الشوكلاته وقطع من الاجبان وخبز ورقائق وشوروبات",
      en: "At five in the afternoon it was time to head to the station. As soon as I arrived and picked up my bags to enter, the security officers asked to check them, which gave me a general impression of the safety of that station in particular and of the train in general. I later learned that nobody can board the train, throughout the trip and at any station, without full security precautions being taken — something to the credit of the train and its staff. Before going to the station I had gone to a supermarket to buy things that would keep hunger away for a while on board: bananas, several fruits, chocolate, pieces of cheese, bread, crisps and instant soups.",
    },
    {
      type: "P",
      ar: "كان قد بقي ساعاتين على انطلاق القطار وهي فترة كافية جدا لمعرفة مكان وصول القطار ، ومعرفة الاجراءات الخاصة به ، كانت المحطة ذات خدمات متكاملة ، بدء من وجود شاشة عرض ترتيب وصول القطارات ، الى دورات المياه النظيفة ، اضافة الى توفر عدد من المكائن التي توفر بعض المأكولات والمشروبات الساخنة والباردة",
      en: "Two hours remained before departure, which was plenty of time to find where the train would arrive and to learn the procedures. The station had complete services, from a screen showing the order of arriving trains to clean toilets, as well as a number of machines offering snacks and hot and cold drinks.",
    },
    {
      type: "P",
      ar: "في الساعة السادسة مساء جاءت اللحظة المنتظرة وقد اتى قطار سيبيريا العظيم الى نقطة الانطلاق ، وبعد التصوير الخارجي للقطار وللأجواء المحيطة به ، بادرت بالصعود اليه ، وقبلها قام موظف الأمن بالقطار بالتحقق من التذكرة والتي كانت موجودة في جهاز هاتفي ، وقد قارن التذكرة مع جوازي والحمدلله الامور طيبة وسلسه",
      en: "At six in the evening the awaited moment came and the Great Siberian train pulled into the departure point. After filming the outside of the train and the atmosphere around it, I boarded. Before that the train's security officer checked my ticket, which was on my phone, and compared it with my passport — and, thank God, everything went smoothly.",
    },
    {
      type: "P",
      ar: "بعدها هممت مسرعا الى القطار كمحاولة مني لاستكشاف المقصورة ، فإذا بها مجموعة من الغرف وعددها عشر غرف ، وبداخل كل غرفة يوجد عدد أربعة أسره ، اثنان بالاسفل واثنان بالاعلى ، وصلت للغرفة الخاصة بي وكانت تحمل رقم 8 ويحمل السرير الخاص بي رقم 32 ، حيث انه بالاعلى ، في بداية الأمر تضايقت كثيرا من مسألة كون السرير في الطابق العلوي وليس بالطابق السفلي ، ولكن عند انتهاء الرحلة شكرت الله انه كان بالطابق العلوي ، وذلك لأكثر خصوصية ، وأكثر راحة ، حيث ان من هم بالطابق السفلي يضطرون الى تحمل نزول من هم في الطابق العلوي ، وتحمل دخول وخروج الأربعة أشخاص طوال الوقت",
      en: "Then I hurried inside to explore the carriage. It held ten compartments, each with four beds — two lower and two upper. I reached my compartment, number 8, and my bed was number 32, an upper one. At first I was annoyed that my bed was on the upper level rather than the lower, but by the end of the journey I was thankful it was up there: more privacy and more comfort, since those below have to put up with the people above climbing down and with four people coming and going all the time.",
    },
    {
      type: "P",
      ar: "عند الوصول الى الغرفة وجدت كافة الاحتياجات التي يحتاجها أي راكب ، من منشفة ووسادة وأغطية الوسادة وشرشف ولحاف ، الكابينة شبه مجهزة لهذا الغرض ، حيث بجانب كل سرير يوجد شاحن للموبايل ، وكذلك مصباح صغير خاص لكل سرير على حده ، وكذلك رف لبعض الاغراض الضرورية كفرشاة الاسنان والمشط ، والمعجون وماكينة الحلاقة",
      en: "In the compartment I found everything a passenger needs: a towel, a pillow, pillowcases, a sheet and a duvet. The cabin is well equipped for the purpose — beside every bed there is a phone charger, a small reading lamp for each bed on its own, and a shelf for essentials such as a toothbrush, a comb, toothpaste and a razor.",
    },
    {
      type: "P",
      ar: "في الساعة السادسة وخمسون دقيقة تحديدا تحرك القطار باتجاه مدينة موسكو ، وفي تلك اللحظة لم استطع وصف شعوري ، ولا اعرف كيف سوف اتحمل تلك المسافة ، وقتها لم يكن أحد معي في الغرفة ، لذلك هممت بترتيبها ووضع شنطي تحت السرير السفلي ، وشنطتي الصغيرة في موضع التخزين في أعلى الغرفة ، وكما ذكرت سابقا بأنني لم أنام لأكثر من يوم حتى الصعود الى القطار ، فإذا بي قد نمت من تلقاء نفسي ، خصوصا ان الوقت كان مظلماً ولم يكن هناك شيء ممكن مشاهدته أو تصويره",
      en: "At exactly 6:50 pm the train moved off towards Moscow. In that moment I could not describe my feelings, nor did I know how I would endure such a distance. Nobody else was in the compartment yet, so I tidied it, put my case under the lower bed and my small bag in the storage space above. As I said, I had not slept for more than a day before boarding, and I fell asleep on my own — especially since it was dark and there was nothing to see or film.",
    },
    {
      type: "P",
      ar: "في الساعة الثانية صباحا .. استيقضت على وقع فتح الباب وازعاج من قبل اثنين كانا قد ركبا القطار في هذا الوقت ، وكانت أسرتهم بنفس غرفتي ، أحسست بهم خصوصا وان الفوضى كانت تعم الغرفة وقت دخولهم ، ولكني لم اعرهم اي اهتمام ، وفي الصباح وعندما استيقضت فإذا هم نائمين",
      en: "At two in the morning I woke to the door opening and the noise of two men who had boarded at that hour; their beds were in my compartment. I noticed them, especially as the room was in disorder while they came in, but I paid them no attention, and when I woke in the morning they were asleep.",
    },
    {
      type: "P",
      ar: "ولم أشأ ان ازعجهم حتى وقت ما صحوا ، فإذا بشخص كبير في السن وشخص آخر صغير في العشرينات من العمر تقريبا ، فبادرت بالتحية وبدورهم بادلوني التحية أيضاً ، ولما كانت نفوسهم سمحة ونفوسهم طيبة وتدل على الطيبة ، الأمر الذي شجعني لأن اتناول اطراف الحديث معهم في مسائل عامة",
      en: "I did not want to disturb them until they woke. One was an elderly man and the other young, roughly in his twenties. I greeted them and they returned the greeting, and their easy, kind manner encouraged me to strike up a conversation with them about general matters.",
    },
    {
      type: "P",
      ar: "وبالطبع كان المنقذ هو برنامج الترجمة الفورية الموجود بهاتفي ، وهو ما بعث على الكثير من السعادة والضحك في كثير من الأحيان ، كون البرنامج لا يلتقط الكلمات بشكل دقيق كما ننطقها ، زاد النقاش وكثرت الاحاديث والتطرق لعدد من الامور سواء من ناحيتي او ناحيتهم ، حتى اصبحنا قريبين بشكل أكبر وأكبر لدرجة ان هذا الرجل أصبح يهتم بأموري ويلاحظ احتياجاتي ، وقد أعطاني نعال من عنده ، وأصبح يزودني بالشاي بين فترة وأخرى ، ودائما ما يطلب مني التغطي جيدا أثناء الخروج من القطار وقت توقفه ، وعلى هذا الحال لمدة يومين ونصف ، وهو الأمر الذي ساعدني كثيرا في تخطي أولى الأوقات الصعبة في القطار",
      en: "The saviour, of course, was the instant translation app on my phone, which brought a lot of joy and laughter because it did not always catch the words exactly as we said them. The conversation grew, we talked about many things from both sides, and we became closer and closer — to the point that the older man began to look after me and notice what I needed. He gave me a pair of his slippers, brought me tea from time to time, and always told me to wrap up well when stepping off the train at the stops. It went on like that for two and a half days, and it helped me greatly through the first difficult hours on board.",
    },
    { type: "H3", ar: "القطار", en: "The train" },
    {
      type: "P",
      ar: "القطار هو قطار سيبيريا .. يخرج من مدينة موسكو الى آخر نقطة في جمهورية روسيا الاتحادية وهي مدينة فالديفستوك ، أو بالعكس من مدينة فالديفستوك الى مدينة موسكو ، وعبر رحلة القطار فهو يتوقف في الكثير من المحطات تصل في مجموعها الى سبعين محطة ، وتختلف أوقات التوقف من محطة الى اخرى ، ويأتي الاختلاف في أوقات التوقف نتيجة لحجم المدينة او القرية التي يتوقف فيها ، فمتى ما كانت المدينة كبيرة زادت عدد دقائق التوقف ، وكلما صغرت المدينة او القرية قلت عدد دقائق التوقف ، كانت الكثير من مناطق التوقف لا يتجاوز التوقف فيها عن دقيقتين ، لذلك فانه يصعب على أي راكب ان يخاطر بالنزول في المدن التي تكون أوقات التوقف فيها قليلة ، وذلك ان درجة المخاطرة فيها كبيرة ، كون القطار يمشي على أوقات محددة وجازمة للغاية ولا ينتظر أحدًا أبدا في حال تأخر في الصعود اليه",
      en: "This is the Siberian train. It runs from Moscow to the last point of the Russian Federation, the city of Vladivostok, or the other way round from Vladivostok to Moscow. Along the way it stops at many stations — around seventy in total — and the stopping times differ from one station to another according to the size of the city or village. The larger the city, the more minutes the train waits; the smaller the town or village, the shorter the stop. At many places the stop is no longer than two minutes, so it is hard for a passenger to risk stepping off in cities with short stops: the risk is high, because the train runs to strict, exact times and never waits for anyone who is late getting back on.",
    },
    { type: "H3", ar: "القطار في الشتاء", en: "The train in winter" },
    {
      type: "P",
      ar: "لقد كنت في غاية الحظ السعيد بأنني ركبت قطار سيبيريا العظيم في فترة الشتاء ، وهو ما اتاح لي ومكنني من ان ارى مشاهد بانورامية واخرى ساحرة ومميزة ورائعة للغاية وخصوصا في تدرجات الثلوج بين الحين والآخر ، ومناظر اخرى يسيل لها اللعاب والمتمثلة في تجمد الكثير من الأنهار والبحيرات المتناثرة طوال سير القطار ، طرقات بيضاء وناصعة واشجار انقلب حالها من اللون الاخضر الى اللون الابيض بالكامل ، مما اعطاها رونقا خاصا ، ومنحني الكثير من الراحة النفسية وصفاء الذهن والنفس والشرود بالفكر والذاكرة الى احلام كثيرة وكبيرة جميعها تصب في بث الطاقة الايجابية بداخلي",
      en: "I was extremely lucky to ride the Great Siberian train in winter, which let me see panoramic views and other magical, remarkable scenes, especially in the changing shades of snow. There were mouth-watering sights of frozen rivers and lakes scattered along the whole route, brilliant white roads and trees that had turned completely from green to white, giving them a special charm. It gave me deep calm, a clear mind and a wandering thoughts and memories full of great dreams, all of which filled me with positive energy.",
    },
    {
      type: "P",
      ar: "أيام وليالي لن ولم تمحوا من ذاكرتي لسنوات طويلة ، فبقدر ما كانت شاقة ومتعبة ومرهقة ، بقدر ما كانت الفرحة بداخلي لا تقدر ولا يمكن معرفة حجمها",
      en: "Days and nights that will not fade from my memory for years to come: as hard and exhausting as they were, the joy inside me was beyond measure.",
    },
    { type: "IMG", src: U("2022/01/img_1934.jpg"), cap_ar: "مشاهد الشتاء من نافذة القطار", cap_en: "Winter scenes from the train window" },
    { type: "H3", ar: "الفترات الزمنية", en: "The time zones" },
    {
      type: "P",
      ar: "ان قطع مسافة 9300 كيلومتر من مدينة فالديفستوك الى مدينة موسكو أو بالعكس ، كانت كفيلة لأن يتغير الزمن او التوقيت لمدة سبع مرات طوال فترة سير القطار ، وهذا بحد ذاته يعطي شعورا غريبا ومتناقضا في عملية الشعور بالوقت بين يوم وآخر ، إضافة الى الشعور بحجم جمهورية روسيا الاتحادية والتي تشكل نسبة الثمن من اجمالي الكرة الأرضية",
      en: "Covering 9,300 kilometres from Vladivostok to Moscow, or the reverse, means the clock changes seven times over the course of the journey. That alone creates a strange, contradictory sense of time from one day to the next, and it makes you feel the sheer size of the Russian Federation, which makes up about an eighth of the globe.",
    },
    { type: "IMG", src: U("2022/01/fullsizerender-2-4.jpg"), cap_ar: "داخل القطار خلال الرحلة", cap_en: "Inside the train during the journey" },
    { type: "H3", ar: "الأمن والأمان في القطار", en: "Safety and security on board" },
    {
      type: "P",
      ar: "كان الأمن متوفر بدرجة كبيرة في كافة أرجاء القطار سواء بداخله أو خارجه ، حيث انه وكما تطرقت له سابقا بأنه قبل دخول أي راكب فإنه يخضع الى تفتيش كامل لكافة أغراضه ، أما عن الأمن في القطار فهو آمن لآخر درجة ، وكثير من الأحيان كنت اترك أغراضي الشخصية على السرير دون اخفاءها ، ولله الحمد اعود اليها وأراها كما هي ، هناك يتواجد شخصين رجل وامرأة في كل كبينه يعملان على حفظ الأمن باستمرار ، وكذلك توفير المتطلبات والخدمات للراكبين ، وهم متواجدين من بداية الرحلة حتى نهايتها ، وفي هذا الأمر وكوني قد مكثت فترة كاملة بالقطار فقد بنيت علاقات طيبة بيني وبينهم ، كان الرجل يتحدث بكلمات بسيطة باللغة الانجليزية وبالكاد يفهم علي وانا بالكاد افهم عليه ، ولكن لغة التخاطب بالاشارة وبالإيحاء كانت تمشي الأمور في غالب الأحيان",
      en: "Security was strongly present everywhere on the train, inside and out. As I mentioned, every passenger's belongings are fully searched before boarding, and on board the train is safe to the highest degree. Many times I left my personal things on the bed without hiding them and, thank God, came back to find them exactly as they were. In every carriage there are two staff, a man and a woman, who keep watch continuously and also provide what the passengers need, and they are there from the first day to the last. Because I stayed on board the whole way, I built a good relationship with them. The man spoke a few simple English words and barely understood me, and I barely understood him, but signs and gestures got us through most of the time.",
    },
    { type: "H3", ar: "الأكل في القطار", en: "Food on the train" },
    {
      type: "P",
      ar: "يتوفر في القطار مطعم مجهز بالكامل سواء من خلال قائمة الطعام المتنوعة او حتى على مستوى الكراسي والطاولات المريحة جداً لتتيح أجواء جميلة وقت تناول الطعام ، ومن خلال تجربتي فإن الأكل كان جيدا نوعا ما ، وهو أيضا في متناول الجميع من حيث الأسعار ، هذا بالإضافة الى ان في كل كبينه تتوفر بعض الأطعمة الخفيفة للبيع مثل الشوربات وعدد من أنواع الشوكلاته ورقائق البطاطس ، لكن الغالب والمتعارف عليه بين جميع الركاب هو أكلهم للشوربات سريعة التحضير والتي لا تحتاج الى جهد لصنعها",
      en: "The train has a fully equipped restaurant, both in the variety of its menu and in its very comfortable chairs and tables, which make for a pleasant atmosphere at mealtimes. From my experience the food was reasonably good and affordable for everyone. In addition, each carriage sells light snacks such as soups, several kinds of chocolate and crisps — though the common habit among all the passengers is instant soup, which takes no effort to prepare.",
    },
    { type: "H3", ar: "الصلاة في القطار", en: "Praying on the train" },
    {
      type: "P",
      ar: "في القطار لا يوجد مكان مخصص للصلاة ، وليس بالاستطاعة الصلاة على أرضية الغرفة ولا في الممر ولا في نهاية المقصورة كون المسافة صغيرة للغاية ، وانما من يريد الصلاة وفي قلبه يستطيع ان يصليها حتى وان كان على سريره ، اما عن اتجاه القبلة فالآن كل أجهزة الهواتف فيها يتوفر برامج متعددة لاتجاه القبلة",
      en: "There is no dedicated place to pray on the train. You cannot pray on the compartment floor, nor in the corridor, nor at the end of the carriage, because the space is far too small. Whoever wishes to pray, and has it in his heart, can pray even on his bed; as for the direction of the qibla, every phone today has several apps that show it.",
    },
    { type: "IMG", src: U("2022/01/img_4831.jpg"), cap_ar: "من أجواء الرحلة داخل المقصورة", cap_en: "Life inside the carriage" },
    { type: "H3", ar: "الراحة في القطار", en: "Comfort on the train" },
    {
      type: "P",
      ar: "من الطبيعي ان تنخفض درجة الراحة في القطار عن الراحة المعتاد عليها الانسان وهو في بيته ، اولا نظرا لتغيير الركاب في الكثير من محطات التوقف ، فإن ذلك يعني دخول وخروج الركاب باستمرار مما يعني حزم حقائب للمغادرين وفتح حقائب للراكبين الجدد ، ثانيا هو صحيح ان القطار سلس في كثير من الأحيان أثناء سيره ، ولكن تبقى هناك الكثير من الهزهزة والخضخضة أثناء انحناء القطار وهو يسير او بعض المطبات والارتفاعات بين الحين والآخر",
      en: "Naturally, comfort on the train is lower than the comfort a person is used to at home. First, passengers change at many stops, which means people coming and going constantly, bags being packed by those leaving and opened by newcomers. Second, while the train often runs smoothly, there is still plenty of shaking and swaying as it takes bends, along with the occasional bump and rise in the track.",
    },
    {
      type: "P",
      ar: "الأمر الآخر والمتعلق بالراحة في السرير ففي الحقيقة السرير قد يبدو مناسب وجيد للأشخاص النحيفين وقصار القامة ، أما الأشخاص الممتلئين فقد يكون عرض السرير عائق في راحتهم ، وكذلك الحال بالنسبة لطوال القامة ، أيضا السرير العلوي قد يعيق الأشخاص الممتلئين من الصعود والنزول بسهولة ، فأنا اعتبره أمر صعب وشاق عليهم",
      en: "The other point concerns the bed itself. In truth the bed may suit slim and shorter people well, while for larger passengers its width can get in the way of their comfort, and the same goes for tall people. The upper bed may also make climbing up and down difficult for larger passengers — I consider it hard work for them.",
    },
    { type: "IMG", src: U("2022/01/img_4846.jpg"), cap_ar: "الأسرّة داخل الغرفة", cap_en: "The beds inside the compartment" },
    { type: "H3", ar: "دورات المياه في القطار", en: "The toilets on the train" },
    {
      type: "P",
      ar: "في اعتقادي الشخصي ان تخصيص دورتين مياه في كل مقصورة يعتبر قليلا جدا قياسا بعدد الأشخاص المنتفعين منها ، صحيح ان الانتظار لم يكن طويلا في حال انشغال دورة المياه الا ان الحاجة لزيادتها أمر ضروري",
      en: "In my personal view, two toilets per carriage is very few compared with the number of people using them. It is true that the wait was not long when one was occupied, but increasing them is a real need.",
    },
    {
      type: "P",
      ar: "وكوصف عام لدورات المياه فأنا اشبهها بدورة المياه الموجودة بالطائرة ، وفي الواقع دائما ما يتم تنظيفها أولا بأول ودائما ما يتم توفير محارم الورق والمعطر ، الا ان ما يعاب عليها هو صغر حجمها ، وقد يعاني الراكب الممتلىء من استخدامها بسهولة او اخذ راحته داخلها بشكل كامل",
      en: "As a general description, I would compare them to an aeroplane toilet. They are in fact cleaned constantly, and paper tissues and air freshener are always provided; the drawback is their small size, and a larger passenger may struggle to use one comfortably.",
    },
    {
      type: "P",
      ar: "اما عن الشاور فلا يتوفر في هذا القطار الضخم الا حمام واحد فقط لأخذ الشاور ، وهو غير مجاني وفي نفس الوقت غير مكلف نهائيا بحوالي دولارين ، ويتعين على من يريد استخدام الشاور اخذ موعد مسبق ، الا ان المشكلة الاكبر هو ان توفر الماء الدافىء في هذا الحمام بمقدار 6 ليترات فقط ، مما يعني انه يتوجب على صاحب الطلب الاسراع في اخذ الشاور ليتمكن من استغلال الكمية الممنوحة له",
      en: "As for showers, this huge train has only one shower room. It is not free, but it is not expensive at all — around two dollars — and anyone who wants to use it must book a time in advance. The bigger problem is that the warm water in that room amounts to only six litres, which means you have to shower quickly to make use of the amount you are given.",
    },
    { type: "H3", ar: "التدخين في القطار", en: "Smoking on the train" },
    {
      type: "P",
      ar: "الجميل في القطار هو منع المدخنين من التدخين منعا باتا ، وهو ما يهيئ القطار لأن يكون بيئة صحية ونقية ، وبالتالي فان على المدخنين الانتظار حتى توقف القطار في المحطات المقررة حتى يخرجوا منه ويدخنوا",
      en: "One good thing about the train is that smoking is strictly forbidden, which keeps it a clean and healthy environment. Smokers therefore have to wait until the train stops at the scheduled stations to step off and smoke.",
    },
    {
      type: "P",
      ar: "توجد مسافة بين المقصورة والأخرى ولو انها صغيرة ، ولو ان درجة الضوضاء فيها مرتفعة ، حيث صوت سير القطار يكون عاليا للغاية في هذه المنطقة ، الا ان بامكان المدخنين التدخين فيها ، ولكن لو كانت فترة سير القطار في الفترة الشتوية فان هذه المنطقة تحديدا تكون باردة للغاية ، وكأن الراكب في العراء",
      en: "There is a small gap between one carriage and the next where the noise is high, since the sound of the moving train is very loud there; smokers can smoke in it. But if the journey is in winter, that particular spot is bitterly cold, as if you were standing outdoors.",
    },
    { type: "IMG", src: U("2022/01/fullsizerender-4-3.jpg"), cap_ar: "بين المقصورات", cap_en: "Between the carriages" },
    { type: "H3", ar: "أسعار تذاكر القطار", en: "Ticket prices" },
    {
      type: "P",
      ar: "سعر تذكرة قطار سيبيريا العظيم تختلف من درجة الى اخرى ، ومن مسافة الى اخرى",
      en: "The price of a ticket on the Great Siberian train differs from one class to another and from one distance to another.",
    },
    {
      type: "UL",
      ar: [
        "الدرجة الثالثة : وهي الدرجة الأرخص في القطار ، حيث ان أصحابها يستخدمون الأسرة المفتوحة والعامة ، والتي لا يوجد بها خصوصية ، وهي عبارة عن مقصورة فيها أسرة متقابلة وذات طابقين ، وسعر تذاكرها لكامل المسافة 70 دينار ، حوالي 185 دولار",
        "الدرجة الثانية : وهي للغرف الرباعية ، بمعنى ان في كل غرفة يوجد أربعة أسرة ، اثنان في الاعلى واثنان في الاسفل ، وسعر تذاكرها لكامل المسافة 120 دينار ، حوالي 317 دولار",
        "الدرجة الأولى : وهي للغرف الثنائية ، بمعنى ان في كل غرفة يوجد سريرين فقط ، وسعر تذاكرها لكامل المسافة 280 دينار ، حوالي 740 دولار",
      ],
      en: [
        "Third class: the cheapest on the train. Passengers use open, communal beds with no privacy — a carriage of facing bunks on two levels. A ticket for the whole distance costs 70 dinars, about 185 dollars.",
        "Second class: four-berth compartments, meaning four beds in each room, two upper and two lower. A ticket for the whole distance costs 120 dinars, about 317 dollars.",
        "First class: two-berth compartments, with only two beds in each room. A ticket for the whole distance costs 280 dinars, about 740 dollars.",
      ],
    },
    {
      type: "P",
      ar: "وهنا اكرر بأن السعر يختلف بناء على المسافة المقطوعة ، وعلى الدرجة المرادة من قبل الراكب ، والسعر يختلف ايضا ان كان السرير في الاعلى او في الاسفل ، الا ان الاختلافات في أسعار التذاكر في الدرجة ذاتها ليس كبيرا",
      en: "Again, the price depends on the distance travelled and the class the passenger wants, and it also differs according to whether the bed is upper or lower — though within the same class the differences are not large.",
    },
    { type: "H3", ar: "الخلط بين الرجال والنساء في القطار", en: "Men and women sharing compartments" },
    {
      type: "P",
      ar: "في القطار لا يوجد ما يسمى بأماكن مخصصة للرجال واخرى للنساء ، فجميع الغرف وفي كافة الدرجات هي مسموحة للجنسين ، ومن المشاهد التي اعتدت عليها هو وجود الخلط بين الجنسين في اغلب الغرف",
      en: "On the train there is no such thing as separate areas for men and for women: all compartments in all classes are open to both, and mixed compartments were a sight I grew used to.",
    },
    { type: "H3", ar: "محطات التوقف", en: "The stops" },
    {
      type: "P",
      ar: "يوجد في كل مقصورة جدول يوضح اسم المناطق التي سوف يقف فيها القطار ، وعدد دقائق التوقف ، مع بيان أوقات الصعود مرة اخرى للقطار ، وكذلك توقيت اختلاف الفترات الزمنية بالنسبة عن فترة التوقيت في العاصمة موسكو",
      en: "Every carriage has a timetable listing the places where the train will stop, the number of minutes at each stop, the times for boarding again, and the difference in time zones relative to Moscow time.",
    },
    {
      type: "P",
      ar: "بناء عليه ولعلمنا بوقت التوقف مسبقا ، فنرى كل من في المقصورة يهم بارتداء الملابس الثقيلة واخذ كافة الاحتياطات من قفاز وكمام وقبعة لمواجهة البرد الخارجي المنتظر والقارس جدا أثناء النزول من القطار ، الا انني على عكسهم تماما ، حيث انني قررت الاستمتاع بالبرودة مهما كانت قاسية وصعبة ، وهو ما جعلني اتجمد من شدة البرد في كثير من محطات التوقف ، وأصبحت الدموع تتساقط من عيني ، اضافة الى صعوبة التصوير نظرا لتجمد اصابع يدي بالكامل وبعد دقيقة واحدة فقط",
      en: "Knowing the stopping times in advance, you see everyone in the carriage putting on heavy clothes and taking every precaution — gloves, a mask and a hat — to face the fierce cold waiting outside. I did the opposite: I decided to enjoy the cold however harsh it was, which left me frozen at many of the stops, with tears running from my eyes, and made filming difficult because my fingers froze completely after just one minute.",
    },
    { type: "H3", ar: "درجات الحرارة خارج القطار", en: "Temperatures outside the train" },
    {
      type: "P",
      ar: "كانت درجات الحرارة تتغير بسرعة اثناء سير القطار ففي الظلام الدامس تصل الحرارة الى -20 وتقل الى -7 مع بداية اليوم ، وهو ما يدل على درجة البرودة الشديدة التي تعرضنا لها لفترات طويلة أثناء سير القطار",
      en: "Temperatures changed quickly as the train travelled: in the pitch dark they reached -20, easing to -7 at the start of the day, which shows the extreme cold we were exposed to for long stretches of the journey.",
    },
    { type: "H3", ar: "درجات الحرارة داخل القطار", en: "Temperatures inside the train" },
    {
      type: "P",
      ar: "في الغالب تكون درجات الحرارة 24 ، سواء من خلال مكيفات التدفئة لفترة الشتاء ، او من خلال مكيفات التبريد لفترة الصيف ، مما يعني ان الراكب لن يشعر بتقلبات درجات الحرارة الخارجية للقطار سواء في فترة الصيف او في فترة الشتاء",
      en: "Inside, the temperature is usually 24 degrees, whether through the heating in winter or the air conditioning in summer, which means a passenger does not feel the swings in outside temperature in either season.",
    },
    { type: "H3", ar: "موقف طريف", en: "An amusing moment" },
    {
      type: "P",
      ar: "صادف ان وجدت احد الركاب وفي احد محطات وقوف القطار ان نزل بشورت قصير وتيشرت خفيف للغاية ، مما ادهشني هذا التصرف ، وكنت أتساءل هل هو عديم الاحساس بالبرد ام انه تحدي لقوى الطبيعة ام انه استهتار منه لا أكثر",
      en: "At one of the stops I happened to see a passenger step off in short shorts and a very light T-shirt. It astonished me, and I wondered whether he simply did not feel the cold, whether it was a challenge to the forces of nature, or nothing more than recklessness.",
    },
    {
      type: "P",
      ar: "وعند العودة للقطار وفي صباح اليوم الثاني قد شاهدته في المقصورة واقفا يتأمل المناظر التي بالخارج ، فاذا بي أسأله عن تصرفه الذي كان عليه في الليلة الماضية ، مما حدى به ان اجابني بأنه يشارك في مسابقات عالمية وعلى مستوى روسيا في الغطس بالثلوج ، وانه على وشك مشاركة قريبة في مسابقة كبيرة ، اضافة الى مشاركاته التي يأمل ان يشارك فيها في عام 2020 ، وكان جوابه قد أزال كافة التساؤلات السابقة بداخلي",
      en: "The next morning I saw him standing in the corridor watching the scenery outside, so I asked him about what he had done the night before. He told me he takes part in international and Russian competitions in ice diving, that he was about to compete in a major contest, and that he hoped to compete again in 2020. His answer cleared away all the questions I had.",
    },
    { type: "H3", ar: "موقف مؤثر", en: "A moving moment" },
    {
      type: "P",
      ar: "كنت قد لاحظت اكثر من مرة قيام امرأة كبيرة في السن ، وهي تعتني بوالدتها العجوز بشكل كبير ، حيث تمسك بيدها وتأخذها الى دورات المياه في فترات مختلفة ، ووالدتها بالكاد تستطيع الحركة ، وهذه العناية هي بالفطرة موجودة عند النساء ، وان دل فانه يدل على حنان قلب هذه المرأة ورغبتها في رد الجميل لوالدتها ورعايتها ، كما انني واثناء مروري بممر المقصورة اراها تقوم بتمشيط شعرها وكذلك باطعامها بشكل مباشر",
      en: "More than once I noticed an elderly woman caring devotedly for her very old mother, taking her by the hand to the toilet at different times while her mother could barely move. Such care comes naturally to women, and it showed the tenderness of this woman's heart and her wish to repay her mother and look after her. Passing along the corridor I would also see her combing her mother's hair and feeding her by hand.",
    },
    { type: "H3", ar: "الانجاز", en: "The achievement" },
    {
      type: "P",
      ar: "وقد اسميته انجاز شخصي وحقيقي .. كيف لا وقد كنت الراكب الوحيد في القطار الذي ركبته من بدايته وحتى نهايته ، كما أنني العربي الوحيد الذي ركبه من بداية الانطلاق وحتى نهايته ، فكان الكثير يدخل ويخرج وباستمرار من القطار ، الا انني صمدت حتى النهاية",
      en: "I have called it a real, personal achievement — and how could it not be? I was the only passenger on that train who rode it from the very beginning to the very end, and the only Arab to do so from departure to arrival. Many people got on and off constantly, but I held on to the end.",
    },
    {
      type: "P",
      ar: "كانت الدعوات الطيبة والمباركة والداعمة تتوالى علي بشكل غزير في كل يوم ، وذلك في وسائل التواصل الاجتماعية ، وأثناء ما كنت اضع المسافة المقطوعة مقارنة مع المسافة المتبقية ، وهو ما لا اخفيكم سرا به ، فان تلك الدعوات وتلك الامنيات وذلك التشجيع هو من خفف التعب والارهاق بشكل كبير ، فالحمدلله على تمام النعمة واكتمال المهمة",
      en: "Kind prayers and supportive messages poured in every single day on social media while I posted the distance covered against the distance remaining. I will not hide it from you: those prayers, those good wishes and that encouragement are what eased the tiredness and exhaustion so greatly. Praise be to God for the completeness of the blessing and the completion of the mission.",
    },
    {
      type: "P",
      ar: "ان الله اعطاني معكم عمرا لا استغرب ان اجرب مثل هذه التجربة لمرة ثانية طالما انني اكتسبت الخبرة في هذا الشأن",
      en: "If God grants me long life among you, I would not be surprised to try an experience like this a second time, now that I have gained the experience for it.",
    },
    {
      type: "P",
      ar: "فرحة ما بعد اكتمال رحلة قطار سيبيريا العظيم",
      en: "The joy that followed the completion of the Great Siberian train journey.",
    },
  ],
};

export const russiaGuides: Guide[] = [transSiberian];
