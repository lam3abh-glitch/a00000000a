import type { Guide } from "./france-guides";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const ALBUM = [
  "2022/05/img_6897.jpg",
  "2022/05/img_6876.jpg",
  "2022/05/img_6878.jpg",
  "2022/05/img_6879.jpg",
  "2022/05/img_6881.jpg",
  "2022/05/img_6882.jpg",
  "2022/05/img_6889.jpg",
  "2022/05/img_6888.jpg",
  "2022/05/img_6886.jpg",
  "2022/05/img_6887.jpg",
  "2022/05/img_6885.jpg",
  "2022/05/img_6884.jpg",
  "2022/05/img_6883.jpg",
  "2022/05/img_6890.jpg",
  "2022/05/img_6891.jpg",
  "2022/05/img_6892.jpg",
  "2022/05/img_6893.jpg",
  "2022/05/img_6894.jpg",
  "2022/05/img_6895.jpg",
  "2022/05/img_6896.jpg",
];

export const britainGuides: Guide[] = [
  {
    slug: "best-time",
    title_ar: "أفضل وقت للزيارة",
    title_en: "The best time to visit",
    kicker_ar: "معلومات إضافية",
    kicker_en: "Good to know",
    image: U("2022/04/img_4688.jpg"),
    blocks: [
      { type: "H3", ar: "فصل الصيف", en: "Summer", noNumber: true },
      {
        type: "P",
        ar: "بفضل المناخ المعتدل فإن زيارة بريطانيا على مدار العام ممتعة ، الصيف هو ذروة موسم السياحة ، وخلال فصل الصيف لا تتجاوز درجات الحرارة 30 درجة مئوية ، وعلى الرغم من أن الأماكن السياحية تعج بالسياح ، إلا أن الأجواء رائعة بفضل الطقس الدافئ ، وفي هذه الفترة تتواجد باستمرار العديد من الأحداث والمهرجانات في جميع أنحاء البلاد",
        en: "Thanks to the mild climate, visiting Britain is enjoyable all year round. Summer is the peak of the tourist season, and temperatures then do not go above 30°C. Although the sights are packed with visitors, the atmosphere is wonderful because of the warm weather, and during this period there is a constant stream of events and festivals all over the country.",
      },
      { type: "IMG", src: U("2022/04/img_4688.jpg"), cap_ar: "بريطانيا في الصيف", cap_en: "Britain in summer", size: "compact" },
      { type: "H3", ar: "فصلا الربيع والخريف", en: "Spring and autumn", noNumber: true },
      {
        type: "P",
        ar: "يعد الربيع والخريف من الأوقات الرائعة للسياحة في بريطانيا حيث تكون درجات الحرارة معتدلة بالمقارنة مع باقي الفصول ، لكن كن مستعداً للقليل من المطر هنا وهناك",
        en: "Spring and autumn are wonderful times for travel in Britain, with temperatures mild compared with the other seasons — but be ready for a little rain here and there.",
      },
      { type: "IMG", src: U("2022/04/img_4689.jpg"), cap_ar: "الربيع والخريف في بريطانيا", cap_en: "Spring and autumn in Britain", size: "compact" },
      { type: "H3", ar: "فصل الشتاء", en: "Winter", noNumber: true },
      {
        type: "P",
        ar: "يستمر الشتاء في بريطانيا من ديسمبر إلى فبراير ونادراً ما تنخفض درجات الحرارة إلى أقل من 5 درجات مئوية ، وخلال هذا الوقت تخف حشود السياحة بشكل كبير ، وتجدر الإشارة إلى أن بعض الأماكن السياحية في الشمال أو في الجبال في هذه الفترة قد تكون مغلقة",
        en: "Winter in Britain lasts from December to February and temperatures rarely drop below 5°C. During this time the tourist crowds thin out considerably, though it is worth noting that some attractions in the north or in the mountains may be closed in this period.",
      },
      { type: "IMG", src: U("2022/04/img_4690.jpg"), cap_ar: "بريطانيا في الشتاء", cap_en: "Britain in winter", size: "compact" },
    ],
  },
  {
    slug: "album",
    title_ar: "ألبوم الصور",
    title_en: "Photo album",
    kicker_ar: "ألبوم",
    kicker_en: "Album",
    image: U("2022/05/img_6897.jpg"),
    blocks: [
      {
        type: "P",
        ar: "مجموعة من الصور التي التقطت خلال الرحلة إلى بريطانيا ، من شوارع لندن ومعالمها إلى الحدائق والأنهار والمشاهد اليومية في المدينة",
        en: "A collection of photographs taken during the journey through Britain — from the streets and landmarks of London to the parks, the rivers and everyday scenes around the city.",
      },
    ],
    gallery: ALBUM.map((n) => ({ src: U(n), cap_ar: "بريطانيا", cap_en: "Britain" })),
  },
];
