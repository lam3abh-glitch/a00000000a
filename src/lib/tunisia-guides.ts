import type { Guide } from "./france-guides";
import { tunisiaRegionGuides, TUNIS_REGION_HEROES } from "./tunisia-regions";
import { tunisiaRegionGuides2, TUNIS_REGION_HEROES_2 } from "./tunisia-regions2";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const SIDI = U("2022/10/img_4701.jpg");

/**
 * Placeholder Tunisia sub-pages. Content will be added from the source pages
 * once provided; each guide keeps its title, kicker and hero so the links work.
 */
const soon = (): Guide["blocks"] => [
  {
    type: "P",
    ar: "المحتوى قيد الإضافة .. تابعونا قريباً",
    en: "Content coming soon.",
  },
];

export const tunisiaGuides: Guide[] = [
  {
    slug: "tourist-places",
    title_ar: "الاماكن السياحية",
    title_en: "Tourist places in Tunisia",
    kicker_ar: "أماكن",
    kicker_en: "Places",
    image: SIDI,
    blocks: [
      {
        type: "P",
        ar: "اختر المنطقة التي تريد التعرف عليها في تونس ، من العاصمة وقرطاج وسيدي بوسعيد الى سوسة والمنستير وطبرقة وسبيطلة",
        en: "Choose the region of Tunisia you want to explore, from the capital, Carthage and Sidi Bou Said to Sousse, Monastir, Tabarka and Sbeitla.",
      },
      {
        type: "CARDS",
        items: [
          { topic: "tunis-capital", label_ar: "تونس العاصمة وما حولها", label_en: "Tunis and its surroundings", src: TUNIS_REGION_HEROES["tunis-capital"] },
          { topic: "carthage-sidi-bou-said", label_ar: "قرطاج وسيدي بو سعيد وما حولهما", label_en: "Carthage, Sidi Bou Said and around", src: TUNIS_REGION_HEROES["carthage-sidi-bou-said"] },
          { topic: "sousse-kantaoui", label_ar: "سوسة والقنطاوي وما حولهما", label_en: "Sousse, Port El Kantaoui and around", src: TUNIS_REGION_HEROES["sousse-kantaoui"] },
          { topic: "monastir", label_ar: "المنستير وما حولها", label_en: "Monastir and around", src: TUNIS_REGION_HEROES.monastir },
          { topic: "tabarka", label_ar: "طبرقة", label_en: "Tabarka", src: TUNIS_REGION_HEROES.tabarka },
          { topic: "sbeitla", label_ar: "سبيطلة", label_en: "Sbeitla", src: TUNIS_REGION_HEROES.sbeitla },
        ],
      },
    ],
  },
  {
    slug: "tunisian-food",
    title_ar: "أكلات واطباق تونسية",
    title_en: "Tunisian food and dishes",
    kicker_ar: "مطبخ",
    kicker_en: "Cuisine",
    image: SIDI,
    blocks: soon(),
  },
  {
    slug: "places-to-visit",
    title_ar: "أماكن يفضل زيارتها في تونس",
    title_en: "Places worth visiting in Tunisia",
    kicker_ar: "توصيات",
    kicker_en: "Recommended",
    image: SIDI,
    blocks: soon(),
  },
  {
    slug: "general-info",
    title_ar: "معلومات عامة عن تونس",
    title_en: "General information about Tunisia",
    kicker_ar: "معلومات",
    kicker_en: "Information",
    image: U("2022/04/img_4449.jpg"),
    blocks: soon(),
  },
  {
    slug: "crafts",
    title_ar: "الحرف والصناعات التقليدية التونسية",
    title_en: "Tunisian crafts and traditional industries",
    kicker_ar: "حرف",
    kicker_en: "Crafts",
    image: SIDI,
    blocks: soon(),
  },
  {
    slug: "year-round",
    title_ar: "تونس على مدار العام ترفيه وأنشطة",
    title_en: "Tunisia year-round: leisure and activities",
    kicker_ar: "أنشطة",
    kicker_en: "Activities",
    image: SIDI,
    blocks: soon(),
  },
  ...tunisiaRegionGuides,
];
