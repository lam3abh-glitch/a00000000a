import type { Guide } from "./france-guides";

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
    blocks: soon(),
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
];
