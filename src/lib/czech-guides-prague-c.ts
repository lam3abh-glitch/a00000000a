import type { Guide } from "./france-guides";

// Deep-dive landmark pages for Prague, transcribed from 100region.com:
// p21406 (جسر تشارلز), p21423 (البيت الراقص).
const I = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

export const pragueGuidesC: Guide[] = [
  {
    slug: "charles-bridge",
    title_ar: "جسر تشارلز .. تاريخ من العراقة ببراغ",
    title_en: "Charles Bridge .. a history of grandeur in Prague",
    kicker_ar: "معالم براغ",
    kicker_en: "Prague landmarks",
    image: I("2022/09/img_5334.jpg"),
    blocks: [
      {
        type: "P",
        ar: "اعبر براغ سيرا على الأقدام وتعرف على مدينة براغ عن كثب .. نعم أول مكان يجب ان تقصده في مدينة براغ هو هذا جسر تشارلز وهو الجسر التاريخي العتيق ، فهو بالاضافة الى كونه الأقدم والأجمل الا أنه يعد من أكثر الجسور ارتباطا بتاريخ المدينة وأحداثها التاريخية البارزة",
        en: "Cross Prague on foot and get to know the city of Prague up close .. yes, the first place you should head to in Prague is this Charles Bridge, the ancient historic bridge, for besides being the oldest and the most beautiful, it is also one of the bridges most closely tied to the city's history and its most prominent historical events.",
      },
      {
        type: "P",
        ar: "يعد جزء من المثلث السياحي الأكثر زيارة من قبل السياح مع قلعة الهرادتشاني والساحة القديمة ، بدأ بناؤه عام 1357 وانتهى عام 1402 وكان يعرف باسم الجسر الحجري ، وتحول فيما بعد الى اسم تشارلز نسبة الى كارل الرابع الذي وضع حجر أساسه",
        en: "It is part of the most-visited tourist triangle along with Hradčany Castle and the Old Town Square. Its construction began in 1357 and finished in 1402, and it was known as the Stone Bridge before it later took the name Charles, after Charles IV who laid its foundation stone.",
      },
      {
        type: "P",
        ar: "يربط الجسر بين حيين هامين وسط المدينة ،هما الساحة القديمة وحي مالاسترانا ، الذي يوصل الى قلعة براغ التاريخية ، لذلك يعبره يوميا نحو 30 ألف زائر ، فيما يحظر على السيارات عبوره منذ عام 1965 ويعد مزارا للسياح من كل أنحاء العالم وفي كل أوقات السنة",
        en: "The bridge connects two important districts in the city centre — the Old Town Square and the Malá Strana district, which leads to historic Prague Castle. As a result about 30,000 visitors cross it daily, while cars have been banned from crossing it since 1965, and it remains a destination for tourists from all over the world at every time of year.",
      },
      {
        type: "P",
        ar: "يضم على جانبيه أكثر من ثلاثين تمثالا من النمط الباروكي ، التي تشكل ما يسمى بطريق القديسين وينتشر الرسامون فيه والموسيقيون الذين يعزفون الألحان الجميلة التي تضفي السحر والروعة على المكان",
        en: "It holds on both sides more than thirty Baroque-style statues, which form what is called the Way of Saints, and it is filled with painters and musicians who play beautiful tunes that lend the place its charm and splendour.",
      },
      {
        type: "P",
        ar: "يذكر أن الجسر يعتبر كالمتحف في الهواء الطلق ، وهو من الآثار الهامة التي تحميها اليونسيكو مع مواقع أخرى في المدينة لذلك تم تحويله الى موقع أثري وطني وذلك عام 1962 وتم إنشاء متحف خاص به وذلك لما يناله من مكانة خاصة في قلوب سكان المدينة وزوارها الذين يتوجهون اليه فور وصولهم الى المدينة",
        en: "It is worth noting that the bridge is considered like an open-air museum, and it is one of the important monuments protected by UNESCO along with other sites in the city, so it was turned into a national heritage site in 1962 and a dedicated museum was established for it, owing to the special place it holds in the hearts of the city's residents and visitors who head to it as soon as they arrive in the city.",
      },
      { type: "IMG", src: I("2022/09/img_2607.jpg"), cap_ar: "صورة جوية لجسر تشارلز ببراغ", cap_en: "An aerial photo of Charles Bridge in Prague" },
      {
        type: "P",
        ar: "جسر كارل Karlův most جسر شهير في العاصمة التشيكية براغ ، ويعتبر من أهم المعالم السياحية في التشيك واوروبا الوسطى",
        en: "Charles Bridge, Karlův most, is a famous bridge in the Czech capital Prague, considered one of the most important tourist landmarks in the Czech Republic and Central Europe.",
      },
      {
        type: "P",
        ar: "يبلغ طول الجسر 516 م ويصل عرضه لعشرة أمتار ، يربط ضفتي نهر الفلتافا ، شرع في بنائه عام 1357 م بأمر من الملك كارل الرابع",
        en: "The bridge is 516 metres long and ten metres wide, linking the two banks of the Vltava River. Its construction began in 1357 by order of King Charles IV.",
      },
      {
        type: "P",
        ar: "استمر العمل لبناء الجسر حتى عام 1400 م عام في بادئ الأمر كان يسمى الجسر بالجسر الحجري أو جسر براغ وفي عام 1870 م أطلق عليه مسمى جسر كارل يصل الجسر البلدة القديمة في براغ بقلعة براغ",
        en: "Work on building the bridge continued until the year 1400. At first the bridge was called the Stone Bridge or the Prague Bridge, and in 1870 it was given the name Charles Bridge. The bridge connects the Old Town in Prague with Prague Castle.",
      },
      { type: "IMG", src: I("2022/09/img_6471.jpg"), cap_ar: "صورة من على جسر تشارلز ببراغ", cap_en: "A photo taken on Charles Bridge in Prague" },
      {
        type: "P",
        ar: "قبل بناء جسر تشارلز عبر فلتافا ، حاول سكان براغ مرتين بناء الجسور ، لكن لم يدم أي منها طويلا ، لقد دمرتهم الفيضانات ، وبدا للسكان المحليين أن القوات العليا لم تسمح ببناء معبر بين الضفتين اليمنى واليسرى ، لكن الملك تشارلز الرابع قرر عدم الاستسلام والاقتراب من بناء الجسر بشكل كامل ،لهذا جمع المنجمين وأمرهم بحساب الوقت المناسب للبناء ، تم تحديد التاريخ ، بدأ البناء في عام 1357 09.07 الساعة 5.31. كما ترون ، هذه المرة ليست عرضية وهي متطابقة ، أي أنها تقرأ بالتساوي في كلا الاتجاهين",
        en: "Before Charles Bridge was built across the Vltava, the residents of Prague twice tried to build bridges, but none of them lasted long — floods destroyed them, and it seemed to the local residents that higher powers did not allow a crossing to be built between the right and left banks. But King Charles IV decided not to give up and to approach the building of the bridge fully, so he gathered astrologers and ordered them to calculate the right time for construction. The date was set, and construction began in 1357, on 9 July at 5:31. As you can see, this time is not random and is a palindrome — that is, it reads the same in both directions.",
      },
      {
        type: "P",
        ar: "تبين أن جسر تشارلز ، الذي بني على مثل هذا التاريخ السحري ، قوي بالفعل ، لم يضربه فيضان واحد بالاضافة الى ذلك لا يزال لا يتطلب اصلاحات كبيرة ونادرا ما يتم استعادته ، حقيقة أخرى جديرة بالملاحظة هي أن مهندس الجسر ، بيتر بارلر ، كان لا يزال شابا عندما عرض عليه هذا المشروع ، كان بالكاد يبلغ من العمر 22 عاما ، هذا أمر غير معتاد ، لأنه من أجل الحصول على مثل هذا الأمر ، كان على المرء أن يتمتع بخبرة وشهرة كبيرتين ، لكن بطرس قام بعمل ممتاز وبرر آمال الملك",
        en: "It turned out that Charles Bridge, built on such a magical date, is indeed strong — not a single flood has struck it, and moreover it still does not require major repairs and is rarely restored. Another fact worth noting is that the bridge's engineer, Peter Parler, was still young when this project was offered to him — he was barely 22 years old. This is unusual, because to receive such a commission one had to have great experience and fame, but Peter did an excellent job and justified the king's hopes.",
      },
      {
        type: "P",
        ar: "بناء جسر تشارلز له أسطورة خاصة به ، يعتقد أن المهندس المعماري أمر باستخدام بياض البيض بدلا من خليط أسمنتي لتثبيت الكتل الحجرية ، لذلك بأمر من الملك ، ذهب الرسل لجمع الجزية من السكان ببيض الدجاج ، بفضل هذه المادة ، هناك شائعة شائعة ، فان جسر تشارلز قوي جدا",
        en: "The building of Charles Bridge has its own legend — it is believed the architect ordered egg whites to be used instead of a cement mixture to fix the stone blocks together. So, by order of the king, messengers went to collect tribute from the population in the form of chicken eggs. Thanks to this material, there is a popular rumour that Charles Bridge is extremely strong.",
      },
      {
        type: "P",
        ar: "ومع ذلك هناك أيضا أسطورة مرعبة أكثر ، يعتقد أن بيتر بارلر أبرم صفقة مع الشيطان فقط اذا كان الجسر سيقف الى الأبد ولم ينهار ، في المقابل طلب الشيطان الروح الخالدة لأول شخص يعبر هذا الجسر ، ووافق المهندس المعماري ، لكن مفيستوفيليس الماكر قرر اغراء ابن بيتر الصغير ، الذي كان يلعب في الجوار ، الى الجسر ، فقط في الثانية الأخيرة لاحظ الأب الصبي وأنقذه ، وكان أول من ترك الديك الأسود يعبر الجسر الذي أخرج الشيطان ومسح الجسرة",
        en: "However there is also an even more terrifying legend — it is believed that Peter Parler made a deal with the devil so that the bridge would stand forever and never collapse. In return the devil asked for the immortal soul of the first person to cross this bridge, and the architect agreed. But the cunning Mephistopheles decided to lure Peter's little son, who was playing nearby, onto the bridge. Only at the last second did the father notice the boy and save him, and instead a black rooster was the first to be let cross the bridge, which drove out the devil and cleansed the bridge.",
      },
      { type: "IMG", src: I("2022/09/img_5343.jpg"), cap_ar: "أحد الفرق الفنية بجسر تشارلز ببراغ", cap_en: "One of the artistic troupes on Charles Bridge in Prague" },
      {
        type: "H3",
        noNumber: true,
        ar: "افضل الانشطة التي يمكن القيام بها في جسر تشارلز ببراغ",
        en: "The best activities to do at Charles Bridge in Prague",
      },
      {
        type: "P",
        ar: "يمكن القيام بجولة سيرا على الأقدام فوق جسر تشارلز براغ ، والاستمتاع بمنحوتاته وتماثيله التي يعود تاريخ بعضها للقرن الثامن عشر",
        en: "You can take a walking tour across Charles Bridge in Prague and enjoy its sculptures and statues, some of which date back to the eighteenth century.",
      },
      {
        type: "P",
        ar: "وخلال جولتك فوق الجسر ، ستصادف العديد من الموسيقيين والرسامين والباعة المتجولين الذين يضيفون رونقا خاصا يزيد من سحر وجمال الجسر",
        en: "During your tour over the bridge you will come across many musicians, painters and street vendors who add a special touch that increases the bridge's charm and beauty.",
      },
      {
        type: "P",
        ar: "والتقط العديد من الصور لأبراج الجسر ، خصوصا الذي يقع في ناحية المدينة القديمة ، حيث يعتبر أحد مباني الطراز القوطي المدهشة",
        en: "Take plenty of photos of the bridge's towers, especially the one located on the Old Town side, which is one of the amazing Gothic-style buildings.",
      },
      {
        type: "P",
        ar: "واستمتع بمشاهدة نهر فلتافا الخلاب ، ولا تنسى التقاط الصور لأنواع البط والاوز التي تستوطن النهر وتتجول بكل حرية فيه",
        en: "Enjoy watching the picturesque Vltava River, and don't forget to take photos of the ducks and geese that live on the river and roam freely on it.",
      },
      {
        type: "P",
        ar: "وامنح نفسك رفاهية رحلة بحرية في النهر ، والتي ستمنحك رؤية أجمل لالتقاط صور للجسر الذي ستمر من تحت أحد أقواسه",
        en: "Treat yourself to the luxury of a boat trip on the river, which will give you a more beautiful view for taking photos of the bridge as you pass under one of its arches.",
      },
      {
        type: "P",
        ar: "ولا ضير من تجوالك في مالا سترانا ، أو ليسر براغو الضفة اليسرى من جسر تشارلز براغ ، وهي من أهم مناطق السياحة في براغ التاريخية",
        en: "There is also no harm in strolling through Malá Strana, or Lesser Prague, the left bank of Charles Bridge, which is one of the most important tourism areas in historic Prague.",
      },
      {
        type: "P",
        ar: "كما يمكنك زيارة الضفة اليمنى حيث المدينة القديمة في براغ التي ستأخذك في رحلة عبر القرون الوسطى للمدينة حيث ساعة براغ الفلكية",
        en: "You can also visit the right bank, where the Old Town of Prague is, which will take you on a journey through the medieval history of the city, including the Prague Astronomical Clock.",
      },
      { type: "IMG", src: I("2022/09/img_5609.jpg"), cap_ar: "يكثر الرسامين بجسر تشارلز ببراغ", cap_en: "Painters abound on Charles Bridge in Prague" },
      {
        type: "P",
        ar: "على الرغم من هذه الأسطورة المرعبة حول البناء ، يعتبر جسر تشارلز نفسه مكانا مشرقا للغاية مع طاقة ايجابية ، حتى الدالاي لاما ، الذي سار عبر الجسر في عام 1990 ، قال ان المشي في هذا المكان مفيد لصحتك",
        en: "Despite this frightening legend about its construction, Charles Bridge itself is considered a very bright place with positive energy — even the Dalai Lama, who walked across the bridge in 1990, said that walking in this place is good for your health.",
      },
      {
        type: "P",
        ar: "لكن الجسر نفسه ليس كل شيء ، فقد حصل على سحر خاص فقط في عام 1683 ، عندما بدأت المنحوتات تظهر عليه ، تمت اضافتهم حتى عام 1714 ، قبل ذلك بقليل بدا الجسر أكثر ترويعا وليس جذابا على الاطلاق ، لأنه من عام 1621 الى عام 1631 تم تعليق رؤساء النبلاء التشيكيين الذين تم اعدامهم والذين انضموا الى الانتفاضة ضد هابسبورغ على الجسر ، ولكن الآن كل هذه المذابح الفظيعة منسية ، والمنحوتات لا تتذكر رعب الأيام الماضية",
        en: "But the bridge itself is not everything — it only gained its special charm in 1683, when the sculptures began to appear on it; they continued to be added until 1714. Shortly before that the bridge looked far more frightening and not attractive at all, because from 1621 to 1631 the heads of executed Czech nobles who had joined the uprising against the Habsburgs were hung on the bridge. But now all these horrific massacres are forgotten, and the sculptures do not recall the horror of days past.",
      },
      {
        type: "P",
        ar: "هناك 31 منحوتة على جسر تشارلز ، ومع ذلك فان جميع المنحوتات المعروضة تقريبا عبارة عن نسخ ، ويتم الاحتفاظ بالنسخ الأصلية في المتحف ، لكن هذا يجعلها لا تقل سحرا وجاذبية ، العديد من المنحوتات لها أيضا أساطيرها ومعتقداتها ، وبعضها يجلب الحظ السعيد ، تمثال جان نيبوموك محبوب بشكل خاص ، العثور عليه من أجل تحقيق أمنية هو أمر سهل مثل تقشير الكمثرى ، لأن السياح قاموا بفركه حتى يلمع وهو يبرز على خلفية بقية التماثيل",
        en: "There are 31 sculptures on Charles Bridge, yet almost all the sculptures on display are copies, and the originals are kept in the museum — but this makes them no less magical or attractive. Many of the sculptures also have their own legends and beliefs, and some are said to bring good luck. The statue of John Nepomuk is especially beloved; finding it to make a wish is as easy as peeling a pear, since tourists have rubbed it until it shines, making it stand out against the background of the other statues.",
      },
      {
        type: "P",
        ar: "تمثال نيبوموك البرونزي له 5 نجوم حول رأسه ، لتحقيق هذه الرغبة ، يجب وضع كل اصبع من اليد اليمنى على النجمة ، وتلمس رجلي القديس بيدك اليسرى ، عند القيام بذلك يجب أن تلمس القدم اليمنى المسمار الذهبي على الرصيف ، يجب أن تتحقق الرغبة في مثل هذا الموقف وعندها فقط تتحقق",
        en: "The bronze statue of Nepomuk has 5 stars around its head. To make this wish come true, you must place each finger of your right hand on a star, and touch the saint's legs with your left hand — while doing so your right foot must touch the golden nail on the pavement. The wish must be made in this exact position, and only then will it come true.",
      },
      {
        type: "P",
        ar: "يمكنك أيضا تحقيق أمنية عند مدخل جسر تشارلز اذا تمكنت من العثور على الرفراف الخامس ، وفي تمثال ولد عار ، تتمنى النساء اللواتي يردن الحمل ، يعد جسر تشارلز نفسه مكانا رائعا ورائعا الى حد ما ، ولهذا السبب على الأرجح يحتوي على العديد من الأساطير والحكايات ، فضلا عن القصص الحقيقية التي تحولت الى ملاحم وحكايات خرافية ، لذلك عند زيارة براغ ، تأكد من السير على طول هذا الجسر الخلاب ولا تنسَ أن تتمنى واحدة على الأقل",
        en: "You can also make a wish at the entrance to Charles Bridge if you manage to find the fifth relief, and at the statue of a naked boy, women who want to become pregnant make a wish. Charles Bridge itself is a wonderful and rather remarkable place, and for that reason it probably holds so many legends and tales, as well as true stories that have turned into epics and folk tales. So when visiting Prague, be sure to walk along this picturesque bridge and don't forget to make at least one wish.",
      },
      {
        type: "P",
        ar: "من بين الأماكن التي يجب مشاهدتها في براغ ، أحد أهمها هو جسر تشارلز ، ان زيارة براغ وعدم المشي فيها أشبه بزيارة موسكو وعدم الذهاب الى الميدان الأحمر ، وفي باريس لا ترى برج ايفل ، وفي لندن تتجاهل ساعة بيغ بن ، وفي نيويورك – تمثال الحرية",
        en: "Among the places that must be seen in Prague, one of the most important is Charles Bridge. Visiting Prague and not walking on it is like visiting Moscow and not going to Red Square, or being in Paris and not seeing the Eiffel Tower, or in London ignoring Big Ben, or in New York — the Statue of Liberty.",
      },
      {
        type: "P",
        ar: "يعد جسر تشارلز حقا بطاقة زيارة لمدينة براغ وواحد من أكثر الأماكن الأسطورية والأكثر زيارة ، وكم عدد الأساطير التي تمت كتابتها عنها ، وكم عدد القصص التي حدثت عليها ، ومدى ارتباط كل شيء بها – من المستحيل اعادة سردها كلها ، اكتسب الجسر مظهره الحديث في القرن السابع عشر ، ثم ظهرت تماثيله الشهيرة هنا ، والتي بدونها يصعب اليوم تخيل مظهرها اليوم ، بالمناسبة بدأوا في استدعاء الجسر تكريما للامبراطور تشارلز فقط في القرن الثامن عشر ، وقبل ذلك كان يحمل اسم براغ",
        en: "Charles Bridge is truly a calling card for the city of Prague and one of the most legendary and most visited places. How many legends have been written about it, how many stories have taken place on it, and how much everything is tied to it — it is impossible to recount them all. The bridge gained its modern appearance in the seventeenth century, when its famous statues appeared, without which it is hard today to imagine its appearance. By the way, they only began calling the bridge in honour of Emperor Charles in the eighteenth century, and before that it bore the name of Prague.",
      },
      { type: "IMG", src: I("2022/09/img_6444.jpg"), cap_ar: "جسر تشارلز الوجهة السياحية الاولى في براغ", cap_en: "Charles Bridge, the top tourist destination in Prague" },
      {
        type: "H3",
        noNumber: true,
        ar: "المنحوتات المثبتة على جسر تشارلز ببراغ",
        en: "The sculptures installed on Charles Bridge in Prague",
      },
      {
        type: "P",
        ar: "هناك 30 منحوتة مثبتة على الجسر ، صنعت في أوقات مختلفة ، وهذه قائمة المنحوتات على جسر تشارلز :",
        en: "There are 30 sculptures installed on the bridge, made at different times, and this is the list of sculptures on Charles Bridge:",
      },
      {
        type: "P",
        ar: "1. القديس إيفو (1711 ، MB براون)\n2. مادونا مع سانت برنارد (1708-1709 ، إم في ياكيل)\n3. القديسين باربرا ومارجريت وإليزابيث (1707 ، إف إم بروكوف)\n4. مادونا مع القديسين دومينيك وتوماس أكويناس (1708 ، M.V. Yakel)\n5. بيتا (1859 ، ج. ماكس)\n6. صلب – أول منحوتة تم تركيبها عام 1629 (H. Hillinger)\n7. القديس يوسف (1854 ، ج. ماكس)\n8. القديسة آنا (1707 ، M.V. Yakel)\n9. القديس فرانسيس كزافييه (1711 ، إف إم بروكوف)\n10. القديسين سيريل وميثوديوس (1928 ، ك. دفوراك)\n11. سانت كريستوفر (1857 ، إي ماكس)\n12. القديس يوحنا المعمدان (1857 ، ج. ماكس)\n13. سانت فرانسيس بورجيا (1710 ، إف إم بروكوف)\n14. Saints Norbert، Wenceslas and Sigismund (1853، J. Max)\n15. سانت لودميلا (1720 ، MB براون)\n16. القديس يوحنا نيبوموك (1683 ، ج. بروكوف)\n17. القديس فرنسيس الأسيزي (1855 ، إي ماكس)\n18. القديس أنتوني بادوا (1707 ، جيه أو ماير)\n19. سانت فنسنت دي فيرارا وسانت بروكوبيوس (1712 ، إف إم بروكوف)\n20. القديس الرسول يهوذا ثاديوس (1708 ، جيه أو ماير)\n21. القديس نيكولاس تولينتيس (1708 ، إ. كول)\n22. القديس أوغسطي 8 (1709 ، إ. كول)\n23. سانت لوتجارد (1710 ، إم دبليو براون)\n24. سانت كايتان (1709 ، إف إم بروكوف)\n25. سانت فوجتيك (1709 ، ج. إم بروكوف)\n26. القديس فيليب بينيتسكي (1714 ، MB Mandl)\n27. القديسين جان دي ماتا وفيليكس دي فالوا وإيفان من بوهيميا (1714 ، إف إم بروكوف)\n28. سانت فيتوس (1714 ، M. B. Mandl)\n29. القديس فينسيسلاس (1859 ، جي كي بيهم)\n30. المسيح المخلص مع القديسين كوزماس وداميان (1709 ، جيه أو ماير)",
        en: "1. Saint Ivo (1711, M.B. Braun)\n2. Madonna with Saint Bernard (1708-1709, M.V. Jäckel)\n3. Saints Barbara, Margaret and Elizabeth (1707, F.M. Brokoff)\n4. Madonna with Saints Dominic and Thomas Aquinas (1708, M.V. Jäckel)\n5. Pietà (1859, J. Max)\n6. Crucifix — the first sculpture installed, in 1629 (H. Hillinger)\n7. Saint Joseph (1854, J. Max)\n8. Saint Anne (1707, M.V. Jäckel)\n9. Saint Francis Xavier (1711, F.M. Brokoff)\n10. Saints Cyril and Methodius (1928, K. Dvořák)\n11. Saint Christopher (1857, E. Max)\n12. Saint John the Baptist (1857, J. Max)\n13. Saint Francis Borgia (1710, F.M. Brokoff)\n14. Saints Norbert, Wenceslas and Sigismund (1853, J. Max)\n15. Saint Ludmila (1720, M.B. Braun)\n16. Saint John of Nepomuk (1683, J. Brokoff)\n17. Saint Francis of Assisi (1855, E. Max)\n18. Saint Anthony of Padua (1707, J.O. Mayer)\n19. Saint Vincent Ferrer and Saint Procopius (1712, F.M. Brokoff)\n20. Saint Jude Thaddeus the Apostle (1708, J.O. Mayer)\n21. Saint Nicholas of Tolentino (1708, A. Kern)\n22. Saint Augustine (1709, A. Kern)\n23. Saint Lutgardis (1710, M.W. Braun)\n24. Saint Cajetan (1709, F.M. Brokoff)\n25. Saint Vojtěch (1709, F.M. Brokoff)\n26. Saint Philip Benizi (1714, M.B. Mandl)\n27. Saints John de Matha, Felix of Valois and Ivan of Bohemia (1714, F.M. Brokoff)\n28. Saint Vitus (1714, M.B. Mandl)\n29. Saint Wenceslas (1859, J.K. Böhm)\n30. Christ the Saviour with Saints Cosmas and Damian (1709, J.O. Mayer)",
      },
      {
        type: "P",
        ar: "حاليا تم تثبيت 28 من أصل 31 تمثالا على الجسر – نسخ طبق الأصل من النسخ الأصلية ، والتي تم نقلها الى المتحف الوطني في القرن العشرين ، وذلك لأن التماثيل كانت مصنوعة من الحجر الرملي قصير العمر وكانت تتداعى ، كما انه بالقرب من أحد أعمدة الجسر ، يوجد أيضا تمثال برونزويك ، عمل نحات مجهول من أوائل القرن السادس عشر",
        en: "Currently 28 out of the 31 statues installed on the bridge are exact replicas of the originals, which were moved to the National Museum in the twentieth century, because the statues were made of short-lived sandstone and were crumbling. Also, near one of the bridge's pillars, there is a statue of Bruncvík, the work of an unknown sculptor from the early sixteenth century.",
      },
      { type: "IMG", src: I("2022/09/img_5380.jpg"), cap_ar: "الحياة دائما ما تدب في جسر تشارلز ببراغ", cap_en: "Life is always bustling on Charles Bridge in Prague" },
    ],
  },
  {
    slug: "dancing-house",
    title_ar: "البيت الراقص .. ترقص معه كل براغ",
    title_en: "The Dancing House .. all of Prague dances with it",
    kicker_ar: "معالم براغ",
    kicker_en: "Prague landmarks",
    image: I("2022/09/img_2614-1.jpg"),
    blocks: [
      {
        type: "P",
        ar: "بيت الرقص (البيت الراقص) أو فريد وجينجر ، هذا الاسم المستعار لمبنى هولندا الوطنية في سد جسر رشين في براغ ، شارك المهندس المعماري بتصميمه الكرواتي التشيكي فلادو ميلونيتش بالتعاون مع المهندس المعماري الكندي الأمريكي فرانك جيري على قطعة أرض شاغرة على ضفاف النهر ، تم تصميم المبنى في عام 1992 وتم الانتهاء منه بعد أربع سنوات في عام 1996",
        en: "The Dancing House (or Fred and Ginger), this nickname for the Nationale-Nederlanden building at the Rašín Embankment bridge in Prague, was designed jointly by the Croatian-Czech architect Vlado Milunić in collaboration with the Canadian-American architect Frank Gehry, on a vacant plot of land on the riverbank. The building was designed in 1992 and completed four years later in 1996.",
      },
      {
        type: "P",
        ar: "كان التصميم الغير تقليدي مثيرا للجدل في ذلك الوقت لأن المنزل كان يبرز بين المباني الباروكية والقوطية والفن الحديث التي كان براغ تشتهر بها ، كان الرئيس التشيكي حينذاك ، فاتسلاف هافيل الذي عاش لعقود من الزمن بجوار الموقع ، قد دعم بشغف هذا المشروع ، على أمل أن يصبح ذالك المبنى مركزا للنشاط الثقافي",
        en: "The unconventional design was controversial at the time because the house stood out among the Baroque, Gothic and Art Nouveau buildings for which Prague was famous. The Czech president at the time, Václav Havel, who had lived for decades next to the site, passionately supported this project, hoping the building would become a centre of cultural activity.",
      },
      {
        type: "P",
        ar: "لقد قام جيري في الأصل باطلاق اسم فريد وجينجر على ذالك المنزل (على اسم الراقصين فريد استير وجينجر روجرز لأن المنزل كان يشبه زوجا من الراقصين) ، ولكن نادرا ما كان يستخدم هذا اللقب الآن ، وكان جيري بنفسه في وقت لاحق يخشى أن يكون استيراد هوليوود الأمريكية الفن الهابط الى براغ ، وبالتالي يتخلصون من فكرته الخاصة",
        en: "Gehry originally gave the house the name Fred and Ginger (after the dancers Fred Astaire and Ginger Rogers, because the house resembled a pair of dancers), but this nickname is now rarely used, and Gehry himself later feared that it might look like American Hollywood importing lowbrow art to Prague, thereby undermining his own idea.",
      },
      { type: "IMG", src: I("2022/09/img_2614.jpg"), cap_ar: "البيت الراقص ببراغ", cap_en: "The Dancing House in Prague" },
      {
        type: "P",
        ar: "يقع البيت الراقص على ملكية ذات أهمية تاريخية كبيرة ، فقد كان موقعها هو موقع منزل دمره القصف الأمريكي لبراغ عام 1945 ، كانت قطعة الأرض والهيكل متداولتين حتى عام 1960 عندما تم التطهير للمنطقة ، كانت الأرض المجاورة لها مملوكة بشكل مشترك من قبل عائلة فاتسلاف هافل الذي قضى معظم حياته هناك ، في وقت مبكر من عام 1986 (خلال الحقبة الشيوعية) تصور فلادو ميلونيتش ، الذي كان حينذاك مهندسا معماريا محترما في البيئة التشيكوسلوفاكية ، فكر في مشروع للمكان وناقشها مع جاره ، المنشق غير المعروف آنذاك فاكلاف هافيل",
        en: "The Dancing House sits on a property of great historical significance, as its site was the location of a house destroyed by the American bombing of Prague in 1945. The plot and the structure remained in this state until 1960, when the area was cleared. The neighbouring land was jointly owned by the family of Václav Havel, who spent most of his life there. As early as 1986 (during the Communist era), Vlado Milunić, who was then a respected architect in the Czechoslovak environment, envisioned a project for the site and discussed it with his neighbour, the then little-known dissident Václav Havel.",
      },
      {
        type: "P",
        ar: "بعد بضع سنوات خلال الثورة المخملية ، أصبح هافيل قائدا شعبيا واصبح لاحقا رئيسا لتشيكوسلوفاكيا ، بفضل سلطته ازدهرت فكرة تطوير الموقع ، قرر هافيل في النهاية أن يقوم ميلونيتش بمسح الموقع ، على أمل أنه سيصبح مركزا ثقافيا ، على الرغم من أن هذه لم تكن هي النتيجة",
        en: "A few years later, during the Velvet Revolution, Havel became a popular leader and later president of Czechoslovakia. Thanks to his authority, the idea of developing the site flourished. Havel eventually decided that Milunić would survey the site, hoping it would become a cultural centre, although this was not the eventual outcome.",
      },
      {
        type: "P",
        ar: "لقد قامت الشركة للتأمين الهولندية ناشينال نيدرلاندين بالموافقة (من 1991 حتى 2016 أنج بنك) على رعاية بناء منزل في الموقع ، اختار «السوبر بانك» ميلونيتش كمصمم رئيسي وطلب منه أن يشترك مع مهندس معماري آخر شهرته عالميه للتعامل مع هذه العملية ، حيث قام المهندس المعماري الفرنسي جان نوفيل برفض الفكرة بسبب أن المساحة كانت صغيرة ، لكن المهندس المعماري الكندي الأمريكي فرانك جيري قبل الدعوة ، نظرا للحالة المالية الممتازة للبنك في ذلك الوقت ، فقد تمكن من تقديم تمويل غير محدود تقريبا للمشروع ، ومنذ أول اجتماع لهم في عام 1992 في جنيف بدأ جيري وميلونيتش في تطوير الفكرة لميلونيتش الأصلية عن مبنى يتكون من جزأين ، ثابت وديناميكي (يين ويانغ) ، فقد كانا يرمزان الى انتقال تشيكوسلوفاكيا من نظام شيوعي الى ديمقراطية برلمانية",
        en: "The Dutch insurance company Nationale-Nederlanden (from 1991 to 2016, ING Bank) agreed to sponsor the building of a house on the site. The 'super bank' chose Milunić as lead designer and asked him to team up with another internationally renowned architect to handle the project. The French architect Jean Nouvel rejected the idea because the space was small, but the Canadian-American architect Frank Gehry accepted the invitation. Given the bank's excellent financial state at the time, it was able to provide almost unlimited funding for the project, and from their first meeting in 1992 in Geneva, Gehry and Milunić began developing Milunić's original idea of a building composed of two parts, static and dynamic (yin and yang), symbolising Czechoslovakia's transition from a Communist system to a parliamentary democracy.",
      },
      { type: "IMG", src: I("2022/09/img_2619.jpg"), cap_ar: "صورة توضح جمال البيت الراقص ببراغ", cap_en: "A photo showing the beauty of the Dancing House in Prague" },
      { type: "IMG", src: I("2022/09/img_2618.jpg"), cap_ar: "صورة توضح جمال البيت الراقص ببراغ", cap_en: "A photo showing the beauty of the Dancing House in Prague" },
      { type: "IMG", src: I("2022/09/img_2617.jpg"), cap_ar: "صورة توضح جمال البيت الراقص ببراغ", cap_en: "A photo showing the beauty of the Dancing House in Prague" },
      { type: "IMG", src: I("2022/09/img_2621.jpg"), cap_ar: "صورة توضح جمال البيت الراقص ببراغ", cap_en: "A photo showing the beauty of the Dancing House in Prague" },
      {
        type: "H3",
        noNumber: true,
        ar: "بناء البيت الراقص براغ",
        en: "Constructing the Dancing House in Prague",
      },
      {
        type: "P",
        ar: "كان طراز الهندسة المعماريه يعرف باسم التفكيك (الباروك الجديد للمصممين) نظرا لشكلها الغير عادي ، الشكل الراقص مدعوم بـ 99 لوحة خرسانية ، كل واحده منها لها شكل وأبعاد مختلفة ، حيث يوجد في الجزء العلوي من المبنى هيكل كبير ملتوي من المعدن يطلق عليه اسم ماري",
        en: "The architectural style became known as Deconstructivism (the designers' New Baroque) because of its unusual shape. The dancing form is supported by 99 concrete panels, each with a different shape and dimensions, and at the top of the building there is a large twisted metal structure called Medusa (Mary).",
      },
      {
        type: "P",
        ar: "في منتصف من المباني المربع من القرن الثامن عشر والتاسع عشر ، فقد كان يتكون البيت الراقص من جزأين رئيسيين ، الأول كان عبارة عن برج زجاجي يضيق بنصف ارتفاعه وتدعمه أعمدة منحنية ، اما الثاني فقد كان متوازي مع النهر ويتميز بقوالب متموجة ونوافذ غير محاذية",
        en: "Set among the square's eighteenth- and nineteenth-century buildings, the Dancing House consists of two main parts. The first is a glass tower that narrows at half its height and is supported by curved columns, while the second runs parallel to the river and is distinguished by wavy mouldings and misaligned windows.",
      },
      {
        type: "P",
        ar: "المشهورين الراقصين الذين تم تمثيلهم لفريد أستير وجينجر روجرز في الهيكل ، يستخدم البرج الصخري لتمثيل فريد ، هذا البرج يحتوي أيضا على رأس معدني ، برج من الزجاج مصنوع يستخدم لتمثيل الزنجبيل",
        en: "The two famous dancers represented in the structure are Fred Astaire and Ginger Rogers — the stone tower is used to represent Fred and also has a metal head, while a tower made of glass is used to represent Ginger.",
      },
      {
        type: "P",
        ar: "كان هذا التصميم بشكل أساسي مدفوعا باعتبارات جمالية من شأنها أن توضح النوافذ المتوافقه أن يتكون المبنى من طابقين آخرين ، على الرغم من أنه بنفس ارتفاع المبنيين المجاورين في القرن التاسع عشر ، تحتوي النوافذ على اطارات بارزة ، مثل اطارات اللوحات ، حيث أن قصدالمصمم أن يكون لها تأثير ثلاثي الأبعاد ، تعمل القوالب المتعرجة أيضا على الواجهة على تقليل التباين مع المباني المحيطه وارباك المنظور",
        en: "This design was primarily driven by aesthetic considerations, so that the aligned windows would make it appear as though the building had two additional floors, even though it is the same height as the neighbouring nineteenth-century buildings. The windows have protruding frames, like picture frames, since the designer intended them to have a three-dimensional effect. The zigzagging mouldings on the façade also work to reduce the contrast with the surrounding buildings and confuse the perspective.",
      },
      { type: "IMG", src: I("2022/09/img_2620.jpg"), cap_ar: "فخامة البيت الراقص ببراغ", cap_en: "The grandeur of the Dancing House in Prague" },
      { type: "IMG", src: I("2022/09/img_7150.jpg"), cap_ar: "صورة من امام البيت الراقص ببراغ", cap_en: "A photo taken in front of the Dancing House in Prague" },
      {
        type: "H3",
        noNumber: true,
        ar: "التصاميم الداخلية للبيت الراقص ببراغ",
        en: "The interior designs of the Dancing House in Prague",
      },
      {
        type: "P",
        ar: "المهندس المعماري البريطاني قام بتصميم التشيكيه معظم الأجزاء الداخلية ، ارتفاع المبنى يبلغ 9 طوابق ويتكون تحت الأرض من طابقين ، كل طابق يختلف بسبب تصميمه الشكل غير المتماثل للمبنى ، مما يتسبب أن تكون الغرف بالداخل غير متماثلة أيضا ، بالمبنى المناطق التجارية في الردهة والطابق الأول ، تستخدم الستة طوابق أعلاه بشكل أساسي كمساحات مكتبية ، الطابق التاسع يضم مطعم ، نظرا للمبنى فانه يمتلك شكلا نحيفا ، وينقسم المبنى الى جزأين عموديا ، فان مساحة المكتب محدودة ، لتحقيق استفادة أقصى من المساحة ، استخدم المهندس المعماري التشيكيه العناصر الشائعة للتصميم في السفن ودمج ممرات صغيرة في داخل المبنى",
        en: "The Czech architect designed most of the interior parts. The building is 9 storeys high and has two underground floors. Each floor differs because of the asymmetrical shape of the building's design, which causes the rooms inside to be asymmetrical as well. The building has commercial areas on the lobby and first floor, while the six floors above are used mainly as office space, and the ninth floor houses a restaurant. Because the building has a slender shape and is divided vertically into two parts, office space is limited; to make maximum use of the space, the Czech architect used design elements common in ships and incorporated small corridors inside the building.",
      },
      {
        type: "P",
        ar: "المساحة الداخلية الاجماليه للمبنى 3796 متر مربع ، في سنة 2016 ، على مدار الخمسة أشهر ، تم التجديد لطابقين من المبنى ليصبح فندقا من 21 غرفة من قبل فخم ترف أجنحة سرو يحتوي الفندق أيضا على شقق متوفرة في كل برج يحمل اسم فريد وجينجر ، يعمل مطعم زنجبيل وفريد الآن في الطابق السابع ، يوجد بار زجاجي الآن في الطابق الثامن ، يوجد أيضا معرض فني الآن في المبنى",
        en: "The total interior space of the building is 3,796 square metres. In 2016, over the course of five months, two floors of the building were renovated to become a 21-room hotel by the luxury Sirocco Suites, and the hotel also has apartments available in each tower, named Fred and Ginger. The Ginger & Fred restaurant now operates on the seventh floor, there is now a glass bar on the eighth floor, and there is also now an art gallery in the building.",
      },
    ],
  },
];
