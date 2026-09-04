import type { Guide } from "./france-guides";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

export const bulgariaGuides: Guide[] = [
  {
    slug: "foods",
    title_ar: "أكلات وأطباق بلغارية",
    title_en: "Bulgarian foods and dishes",
    kicker_ar: "المطبخ البلغاري",
    kicker_en: "Bulgarian cuisine",
    image: U("2022/01/img_1853.jpg"),
    blocks: [
      {
        type: "P",
        ar: "تتنوع تقاليد الطبخ البلغارية ، وذلك بسبب العوامل الجغرافية والظروف المناخية ، فالطعام البلغاري دليلا رائعا على روعة طعام اوروبا الشرقية",
        en: "Bulgarian cooking traditions are varied thanks to geographical factors and climatic conditions — Bulgarian food is wonderful proof of just how good Eastern European cuisine can be.",
      },
      { type: "H3", ar: "بانيتسا", en: "Banitsa" },
      {
        type: "P",
        ar: "وهو من الأطباق الشعبية والشهية جدا ، وهو عبارة عن معجنات بلغارية تقليدية مصنوعة من مزيج من البيض المخفوق وقطع الجبن بين معجنات فيلو ، ثم تخبز في الفرن حتى تنضج من الداخل وتكون مقرمشة من الخارج",
        en: "One of the most popular and delicious dishes: a traditional Bulgarian pastry made from a mixture of beaten eggs and pieces of cheese layered between filo pastry, then baked in the oven until cooked inside and crisp outside.",
      },
      { type: "H3", ar: "ميشانا سكارا", en: "Meshana skara" },
      {
        type: "P",
        ar: "وهو أحد الأطباق البلغارية اللذيذة ، وهو عبارة عن مزيج من اللحوم المشوية بأشكال مختلفة ومتنوعة",
        en: "One of the tastiest Bulgarian dishes: a mixed grill of different kinds and cuts of grilled meat.",
      },
      { type: "H3", ar: "تاراتور", en: "Tarator" },
      {
        type: "P",
        ar: "وهو عبارة عن حساء بارد ومنعش ولذيذ ، ويتم تناولة خاصة في فصل الصيف ، وهو مكون من الخيار الطازج والجوز والثوم واللبن البلغاري والشبت والأعشاب والخل أو الليمون",
        en: "A cold, refreshing and delicious soup eaten especially in summer, made of fresh cucumber, walnuts, garlic, Bulgarian yoghurt, dill, herbs and vinegar or lemon.",
      },
      { type: "H3", ar: "سارمي", en: "Sarmi" },
      {
        type: "P",
        ar: "السارمي من أشهى المأكولات البلغارية ، ويتكون من الملفوف أو ورق العنب المحشو بمزيج لذيذ من الأرز والتوابل",
        en: "Sarmi is among the tastiest Bulgarian foods: cabbage or vine leaves stuffed with a delicious mixture of rice and spices.",
      },
      { type: "H3", ar: "شكيمبي", en: "Shkembe" },
      {
        type: "P",
        ar: "هي من الأطعمة البلغارية الغريبة ، فهي عبارة عن شوربة كِرشة متبلة أمعاء الماعز بالثوم والفلفل الأحمر الحار والخل ، وتتمتع بنكهة ورائحة مميزة للغاية",
        en: "One of the stranger Bulgarian foods: a tripe soup of goat innards seasoned with garlic, hot red pepper and vinegar, with a very distinctive flavour and aroma.",
      },
      { type: "H3", ar: "كيسيلو مليكو", en: "Kiselo mlyako" },
      {
        type: "P",
        ar: "واحد من أشهر الأطباق البلغارية ، وهو أحد أفضل أنواع الزبادي المتاحة نظرا لنوعين من البكتيريا الموجودة به ، وهي بكتيريا بروبيوتيك ممتازة تحافظ على صحة بكتيريا الأمعاء",
        en: "One of the most famous Bulgarian dishes, and one of the finest yoghurts available thanks to the two kinds of bacteria it contains — excellent probiotics that keep gut bacteria healthy.",
      },
      { type: "H3", ar: "مشروب العيران", en: "Ayran" },
      {
        type: "P",
        ar: "وهو من أشهر المشروبات البلغارية المنعشة ، وهو عبارة عن مشروب الحليب المصنوع من الزبادي البلغاري الرائع",
        en: "One of the most famous refreshing Bulgarian drinks: a milk drink made from the wonderful Bulgarian yoghurt.",
      },
      { type: "H3", ar: "عصير البلسان", en: "Elderflower juice" },
      {
        type: "P",
        ar: "وهو من المشروبات اللذيذة المصنوعة منزليا ، والتي تتميز بقائمة كاملة من الفوائد الصحية ، له طعم شبه حلو وشبه حامض وعادة ما يكون لونه أصفر",
        en: "A delicious homemade drink with a whole list of health benefits. It tastes half sweet and half sour and is usually yellow in colour.",
      },
      { type: "H3", ar: "مشروب غازي الايتار", en: "Aytar fizzy drink" },
      {
        type: "P",
        ar: "مشروب لونه بني فاتح ، وله طعم سكري ضعيف للفاكهة ، وهو مشروب لذيذ",
        en: "A light brown drink with a faint sugary fruit taste — a delicious drink.",
      },
      { type: "H3", ar: "القهوة التركية", en: "Turkish coffee" },
      {
        type: "P",
        ar: "القهوة أيضا من المشروبات السائدة في بلغاريا",
        en: "Coffee is also one of the prevailing drinks in Bulgaria.",
      },
    ],
  },
];
