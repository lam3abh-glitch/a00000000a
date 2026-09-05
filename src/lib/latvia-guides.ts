import type { Guide } from "./france-guides";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

export const latviaGuides: Guide[] = [
  {
    slug: "foods",
    title_ar: "أكلات وأطباق لاتيفية",
    title_en: "Latvian foods and dishes",
    kicker_ar: "المطبخ اللاتيفي",
    kicker_en: "Latvian cuisine",
    image: U("2022/08/img_1832.jpg"),
    blocks: [
      {
        type: "P",
        ar: "المطبخ اللاتيفي يتميز بمأكولاته الغريبة والفريدة من نوعها ، ويوجد العديد من الأطباق اللاتفية التقليدية الشهيرة التي ننصحك بتجربتها أثناء قضاء عُطلتك في لاتفيا ، فيما يلي أهمها :",
        en: "Latvian cuisine stands out for its unusual, one-of-a-kind dishes. There are many famous traditional Latvian plates we recommend trying during your holiday in Latvia — here are the most important of them:",
      },
      { type: "H3", ar: "حساء الشمندر", en: "Beetroot soup" },
      {
        type: "P",
        ar: "طبق تقليدي شهير وفريد من نوعه ، ويحظى بشعبية كبيرة لدى شعب لاتفيا . هو حساء بارد مكون من الكفير ، والشمندر ، والخيار ، والبيض ، والأعشاب . ويتميز بلونه الأرجواني الشهي",
        en: "A famous, one-of-a-kind traditional dish that is hugely popular with the Latvian people. It is a cold soup made of kefir, beetroot, cucumber, eggs and herbs, distinguished by its appetising purple colour.",
      },
      { type: "H3", ar: "شبيك حساء الخبز", en: "Bread soup (maizes zupa)" },
      {
        type: "P",
        ar: "وهو أيضًا من الأطباق الشعبية في لاتفيا، ويتكون هذا الحساء من خبز الجاودار الممزوج بالسكر والفواكه الجافة والقشدة المخفوقة .",
        en: "Also one of Latvia's popular dishes. This soup is made of rye bread mixed with sugar, dried fruit and whipped cream.",
      },
      { type: "H3", ar: "الفطر عيش الغراب", en: "Mushrooms" },
      {
        type: "P",
        ar: "يدخل الفطر في الكثير من الاطباق اللاتفية . فيقوم الناس خلال فصل الخريف بالذهاب إلى الغابات ، لجمع الفطر الطازج . وهناك الكثير من الأطباق اللاتفية التقليدية المصنوعة من عيش الغراب ، ولكن يجب أن يتم قلي البوليتوس مع الملح وخبز الجاودار والزبدة المُنكهة بالأعشاب الرائعة",
        en: "Mushrooms go into many Latvian dishes. In autumn people head into the forests to gather fresh mushrooms, and there are many traditional Latvian dishes made with them — though boletus should be fried with salt, rye bread and wonderful herb-flavoured butter.",
      },
      { type: "H3", ar: "خبز الجاودار الداكن رومبجاميز", en: "Dark rye bread (rupjmaize)" },
      {
        type: "P",
        ar: "خبز الجاودار الداكن هو خبز يمكنك العثور عليه في جميع أنحاء أوروبا الشرقية وروسيا ، بما في ذلك البلدان المجاورة للاتفيا ( إستونيا وليتوانيا ). فهو خبز صحي وشهي وله نكهة لاذعة فريدة",
        en: "Dark rye bread can be found all over Eastern Europe and Russia, including Latvia's neighbours (Estonia and Lithuania). It is a healthy, tasty bread with a uniquely tangy flavour.",
      },
      { type: "H3", ar: "فطائر البطاطس", en: "Potato pancakes" },
      {
        type: "P",
        ar: "تعتبر البطاطا بشكل عام صنف رئيسي في المطبخ اللاتفي ، لأنها واحدة من الخضروات المتوفرة بكثرة في الحقول المحلية . وتُعد فطائر البطاطس من الأطباق اللاتفية الشهية والتي تٌقدم مع صلصة البقع أو الكريمة الحامضة",
        en: "Potatoes are generally a staple of Latvian cooking, as they are one of the vegetables most abundantly grown in local fields. Potato pancakes are one of the tastiest Latvian dishes, served with bacon sauce or sour cream.",
      },
      { type: "H3", ar: "السمك المدخن", en: "Smoked fish" },
      {
        type: "P",
        ar: "تستحوذ الأسماك على جزء كبير من مطبخ لاتفيا، والسمك المدخن هو مصنوع من سمك القد المدخن والبطاطس والبصل",
        en: "Fish takes up a large part of Latvian cuisine, and this smoked dish is made of smoked cod with potatoes and onions.",
      },
      { type: "H3", ar: "حساء كرات اللحم", en: "Meatball soup" },
      {
        type: "P",
        ar: "وهو طبق مفضل للعديد من اللاتفيين ، يُسمى حساء الـ “ فريكاديلو زوبا “. وهو حساء كرات اللحم في لاتفيا، و يتم تقديم فريكاديلو زوبا عادة بجانب خبز الجاودار و القشدة الحامضة",
        en: "A favourite dish for many Latvians, called “frikadeļu zupa”. It is Latvia's meatball soup, usually served alongside rye bread and sour cream.",
      },
      { type: "H3", ar: "المشروبات", en: "Drinks" },
      {
        type: "P",
        ar: "أغلب المشروبات ذات الشعبية في لاتفيا كحولية، لذلك كُن حذر وتأكد من مكونات وطبيعة المشروبات قبل تناولها . ويوجد في السوق المركزي مجموعة من عصائر الفاكهة المعبأة في زجاجات . ومن أشهرها عصير السفرجل ، التوت البري، الكشمش الأسود، وعصير نبق البحر",
        en: "Most popular drinks in Latvia are alcoholic, so be careful and check the ingredients and nature of a drink before having it. The central market sells a range of bottled fruit juices, the most famous being quince, cranberry, blackcurrant and sea-buckthorn juice.",
      },
    ],
  },
];
