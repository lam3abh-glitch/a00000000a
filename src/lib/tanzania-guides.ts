import type { Guide } from "./france-guides";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

export const tanzaniaGuides: Guide[] = [
  {
    slug: "zanzibar-tourism",
    title_ar: "السياحة في زنجبار",
    title_en: "Tourism in Zanzibar",
    kicker_ar: "جزر المحيط الهندي",
    kicker_en: "Indian Ocean islands",
    image: U("2022/05/img_6645.jpg"),
    blocks: [
      {
        type: "P",
        ar: "توفر جزر زنجبار ميزات كثيرة في مكان واحد ، حيث تجمع ما بين سحر الطبيعة الخضراء والبحر والشواطيء الذهبية التي توفر الاستجمام والاسترخاء والتراث التاريخي والحضاري",
        en: "Zanzibar offers many attractions in one place, combining the charm of green nature, the sea and golden beaches for rest and relaxation with a rich historical and cultural heritage.",
      },
      { type: "IMG", src: U("2022/05/img_6645.jpg"), cap_ar: "السياحة في زنجبار", cap_en: "Tourism in Zanzibar" },
      { type: "H3", ar: "جزيرة بمبا", en: "Pemba Island", noNumber: true },
      { type: "IMG", src: U("2022/05/img_6646.jpg"), cap_ar: "جزيرة بمبا", cap_en: "Pemba Island" },
      {
        type: "P",
        ar: "الجزيرة الثانية من حيث الحجم والمساحة في مجموعة جزر زنجبار ، ويبلغ طولها 67 كم وعرضها 29 كم ، وتتميز جزيرة بمبا بتربتها الرملية الخصبة ، وتشتهر بزراعة جوز الهند ، والقرنفل ، والأرز والموز ، وتعد الجزيرة منتجة لأجود أنواع القرنفل في العالم",
        en: "The second largest island of the Zanzibar archipelago, 67 km long and 29 km wide. Pemba is known for its fertile sandy soil and for growing coconuts, cloves, rice and bananas, and it produces the finest cloves in the world.",
      },
      { type: "H3", ar: "حديقة جوزاني الوطنية", en: "Jozani National Park", noNumber: true },
      { type: "IMG", src: U("2022/05/img_6647.jpg"), cap_ar: "حديقة جوزاني الوطنية", cap_en: "Jozani National Park" },
      {
        type: "P",
        ar: "محمية طبيعية تمتد على مساحة 76 كم ، وتشكل وجهة سياحية للراغبين في خوض تجربة التجوال في الأدغال الأفريقية ، وتضم نباتات وأشجار استوائية كثيفة ومتشابكة ، اضافة الى تنوع الحيوانات والفراشات فيها",
        en: "A nature reserve covering 76 km, a destination for anyone wishing to experience walking through the African jungle. It holds dense, tangled tropical plants and trees, along with a great variety of animals and butterflies.",
      },
      { type: "H3", ar: "المدينة الحجرية", en: "Stone Town", noNumber: true },
      { type: "IMG", src: U("2022/05/img_6649-1.jpg"), cap_ar: "المدينة الحجرية", cap_en: "Stone Town" },
      {
        type: "P",
        ar: "الجزء التاريخي القديم لزنجبار ، تقع على الساحل الغربي للجزيرة ، وهي منطقة تاريخية مدرجة على قائمة اليونيسكو للتراث العالمي ، تضم المنطقة أماكن تاريخية ومباني وآثار قديمة ، وهي عبارة عن شبه جزيرة باتصالها مع زنجبار ، وأحيانا تكون جزيرة منفصلة بفعل عوامل المد والجزر البحري ، حيث تقوم المدينة الحجرية على الشعب المرجانية والملاط ، وتمتد المدينة الحجرية على مساحة 96 كم ، وتضم 51 مسجدا وكنيستين كاتدرائية",
        en: "The old historic part of Zanzibar, on the west coast of the island, is a historic quarter inscribed on the UNESCO World Heritage list, with historic sites, buildings and ancient remains. It forms a peninsula joined to Zanzibar, and at times becomes a separate island with the tides, standing on coral rock and mortar. Stone Town extends over 96 km and contains 51 mosques and two cathedral churches.",
      },
    ],
  },
];
