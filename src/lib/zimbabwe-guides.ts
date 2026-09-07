import type { Guide } from "./france-guides";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

export const zimbabweGuides: Guide[] = [
  {
    slug: "food",
    title_ar: "أكلات واطباق زيمبابوية",
    title_en: "Zimbabwean food and dishes",
    kicker_ar: "المطبخ",
    kicker_en: "Cuisine",
    image: U("2023/03/image-4.jpg"),
    blocks: [
      {
        type: "P",
        ar: "المطبخ الزيمبابوي يقوم على الذرة أساسا ، وتتنوع أطباقه بين العصائد والخضار واللحوم والحلويات والمشروبات المحلية",
        en: "Zimbabwean cooking is built on maize, with dishes ranging from porridges and vegetables to meat, sweets and local drinks.",
      },
      { type: "H3", ar: "الذرة", en: "Maize", noNumber: true },
      {
        type: "P",
        ar: "الذرة هي المحصول الأساسي في زيمبابوي ، ومنها تُصنع أغلب الأطباق الشعبية اليومية",
        en: "Maize is the staple crop of Zimbabwe, and most everyday popular dishes are made from it.",
      },
      { type: "H3", ar: "سادزا", en: "Sadza", noNumber: true },
      {
        type: "P",
        ar: "سادزا هو الطبق الوطني في زيمبابوي ، وهو عصيدة سميكة من دقيق الذرة الأبيض تُقدَّم مع المرق واللحم أو الخضار المطهوة",
        en: "Sadza is Zimbabwe's national dish: a thick porridge of white maize meal served with stew, meat or cooked vegetables.",
      },
      { type: "H3", ar: "البوتا", en: "Bota", noNumber: true },
      {
        type: "P",
        ar: "البوتا عصيدة خفيفة من دقيق الذرة تُقدَّم على الإفطار وتُحلّى بالزبدة أو الفول السوداني أو المربى",
        en: "Bota is a light maize-meal porridge served at breakfast, sweetened with butter, peanut butter or jam.",
      },
      { type: "H3", ar: "نهديزي", en: "Nhedzi", noNumber: true },
      {
        type: "P",
        ar: "نهديزي هو حساء الفطر البري الغني ، ويُعد من الأطباق المحبوبة في موسم الأمطار",
        en: "Nhedzi is a rich wild-mushroom soup, a much-loved dish in the rainy season.",
      },
      { type: "H3", ar: "دوفي", en: "Dovi", noNumber: true },
      {
        type: "P",
        ar: "دوفي هو يخنة زبدة الفول السوداني مع الدجاج أو الخضار الورقية ، ويقدَّم عادة مع سادزا أو الأرز",
        en: "Dovi is a peanut-butter stew with chicken or leafy greens, usually served with sadza or rice.",
      },
      { type: "H3", ar: "حلوى مامبوبو", en: "Mambobo sweet", noNumber: true },
      {
        type: "P",
        ar: "حلوى مامبوبو من الحلويات المحلية التي تُعتمد على العسل والفواكه المجففة",
        en: "The mambobo sweet is a local dessert based on honey and dried fruit.",
      },
      { type: "H3", ar: "مازو أورانج", en: "Mazoe Orange", noNumber: true },
      {
        type: "P",
        ar: "مازو أورانج هو شراب البرتقال المركز الأشهر في زيمبابوي ، ويعتبر المشروب الوطني غير الكحولي",
        en: "Mazoe Orange is Zimbabwe's most famous orange squash, considered the national soft drink.",
      },
      { type: "IMG", src: U("2023/03/image-4.jpg"), cap_ar: "أكلات وأطباق زيمبابوية", cap_en: "Zimbabwean food and dishes" },
    ],
  },
];
