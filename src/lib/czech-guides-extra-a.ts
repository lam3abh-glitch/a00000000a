import type { Guide } from "./france-guides";

const I = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

export const czechGuidesExtraA: Guide[] = [
  {
    slug: "royal-way",
    title_ar: "الطريق الملكي في براغ",
    title_en: "The Royal Way in Prague",
    kicker_ar: "المزيد عن التشيك",
    kicker_en: "More about Czechia",
    image: I("2022/11/img_6028.jpg"),
    blocks: [
      {
        type: "H3",
        noNumber: true,
        ar: "طريق التتويج الملكي هو أجمل جولة في وسط مدينة براغ",
        en: "The Royal Coronation Route is the most beautiful tour in the center of Prague",
      },
      {
        type: "P",
        ar: "الطريق الملكي لن تجده في أي خريطة ، ولا يوجد شارع يحمل اسمه ، ومع ذلك فهو مذكور في كل دليل سياحي تقريبا ويريد كل زائر من براغ التجول فيه ، وما هي الدورة بالضبط ؟ الطريق الملكي هو المسار التاريخي الذي سارت فيه مواكب التتويج الاحتفالية للحكام التشيك قبل تتويجهم",
        en: "You won't find the Royal Way on any map, and there is no street bearing its name; however, it is mentioned in almost every tourist guide and every visitor to Prague wants to walk it. What exactly is this route? The Royal Way is the historical path taken by the ceremonial coronation processions of Czech rulers before their coronation.",
      },
      {
        type: "IMG",
        src: I("2022/11/img_6018-1.jpg"),
        cap_ar: "جانب من الطريق الملكي في براغ",
        cap_en: "A part of the Royal Way in Prague",
      },
      {
        type: "P",
        ar: "اليوم ، يعد الطريق الملكي بمثابة الطريق السياحي الرئيسي عبر وسط براغ ، فاذا كنت ترغب في السير في نفس المسار الذي اعتاد ملوك التشيك أن يسلكوه ، فعليك أن تبدأ في Králův dvůr في المدينة القديمة ، مقر المدينة السابق لملوك التشيك بجوار برج باودر (حيث يقف الآن مبنى البلدية) ، استمر على طول شارع Celetná عبر ساحة البلدة القديمة مرورا بقاعة المدينة القديمة ، ثم عبر ميدان Malé ، شارع Karlova بعد Klementinum عبر ساحة Křižovnické ، عبر جسر Charles الذي يربط بين الضفتين اليمنى واليسرى لنهر فلتافا ، ثم استمر عبر شارع Mostecká الى ساحة Malostranské ، على طول شارع Nerudova وKe Hradu ، عبر ساحة Hradčanské الى قلعة براغ وكاتدرائية القديس فيتوس ، حيث كان يتم التتويج ، الدقات والغناء ونيران المدفع",
        en: "Today, the Royal Way serves as the main tourist route through the center of Prague. If you wish to walk the same path that the Czech kings used to take, you should start at Králův dvůr in the Old Town, the former city seat of the Czech kings next to the Powder Tower (where the Municipal House now stands). Continue along Celetná Street through Old Town Square past the Old Town Hall, then through Malé Square, Karlova Street past the Klementinum through Křižovnické Square, over Charles Bridge connecting the right and left banks of the Vltava River. Then continue through Mostecká Street to Malostranské Square, along Nerudova and Ke Hradu streets, through Hradčanské Square to Prague Castle and St. Vitus Cathedral, where the coronation took place amidst chiming, singing, and cannon fire.",
      },
      {
        type: "P",
        ar: "كان أول ملك يركب طريق التتويج هو ألبريشت الثاني ملك هابسبورغ عام 1438م ، وبعد أربعمائة عام في عام 1836م ، كان فرديناند الأول من النمسا هو الأخير ، ومع ذلك اتخذ الطريق الملكي أيضا رسلا وضيوفا بارزين من دول أجنبية ، حيث سارت المواكب الجنائزية التي تحمل رفات حكام هابسبورغ ، وفي عام 1729م ، سار أيضا الموكب بمناسبة تقديس جان نيبوموك على طول هذا الطريق ، كان الطريق مزينا ، ستتوقف المواكب على طول الطريق وتلتقي بممثلي النقابات والمدارس وأوامر الكنيسة والجيش وأيضا ممثلين من مجالس مدينة براغ ، وعلى طول الطريق يمكنك سماع أجراس الرنين والموسيقى والغناء ونيران المدافع",
        en: "The first king to ride the coronation route was Albrecht II of Habsburg in 1438 AD, and four hundred years later in 1836 AD, Ferdinand I of Austria was the last. However, the Royal Way also welcomed messengers and prominent guests from foreign countries, and funeral processions carrying the remains of Habsburg rulers also passed through it. In 1729, a procession for the canonization of John of Nepomuk also took place along this route. The road was decorated, and processions would stop along the way to meet representatives of guilds, schools, church orders, the army, and representatives from Prague's city councils. Along the way, you could hear bells ringing, music, singing, and cannon fire.",
      },
    ],
  },
];
