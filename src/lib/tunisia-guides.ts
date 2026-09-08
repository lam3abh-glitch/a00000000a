import type { Guide } from "./france-guides";
import { tunisiaRegionGuides, TUNIS_REGION_HEROES } from "./tunisia-regions";
import { tunisiaRegionGuides2, TUNIS_REGION_HEROES_2 } from "./tunisia-regions2";
import { tunisiaRegionGuides3, TUNIS_REGION_HEROES_3 } from "./tunisia-regions3";
import { tunisiaInfoGuides } from "./tunisia-info";

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
          { topic: "kairouan", label_ar: "القيروان وما حولها", label_en: "Kairouan and around", src: TUNIS_REGION_HEROES_2.kairouan },
          { topic: "mahdia", label_ar: "المهدية وما حولها", label_en: "Mahdia and around", src: TUNIS_REGION_HEROES_2.mahdia },
          { topic: "nabeul", label_ar: "نابل الوطن القبلي", label_en: "Nabeul and Cap Bon", src: TUNIS_REGION_HEROES_2.nabeul },
          { topic: "bizerte-dougga", label_ar: "من بنزرت إلى دقة", label_en: "From Bizerte to Dougga", src: TUNIS_REGION_HEROES_2["bizerte-dougga"] },
          { topic: "kef", label_ar: "الكاف", label_en: "Le Kef", src: TUNIS_REGION_HEROES_2.kef },
          { topic: "gabes-matmata", label_ar: "من قابس إلى مطماطة", label_en: "From Gabes to Matmata", src: TUNIS_REGION_HEROES_2["gabes-matmata"] },
          { topic: "tataouine", label_ar: "تطاوين وما حولها", label_en: "Tataouine and around", src: TUNIS_REGION_HEROES_2.tataouine },
          { topic: "hammamet", label_ar: "الحمامات وما حولها", label_en: "Hammamet and around", src: TUNIS_REGION_HEROES_3.hammamet },
          { topic: "sfax-kerkennah", label_ar: "صفاقس وقرقنة وما حولهما", label_en: "Sfax, Kerkennah and around", src: TUNIS_REGION_HEROES_3["sfax-kerkennah"] },
          { topic: "djerba-zarzis", label_ar: "جربة وجرجيس وما حولهما", label_en: "Djerba, Zarzis and around", src: TUNIS_REGION_HEROES_3["djerba-zarzis"] },
          { topic: "tozeur", label_ar: "توزر وما حولها", label_en: "Tozeur and around", src: TUNIS_REGION_HEROES_3.tozeur },
          { topic: "douz", label_ar: "دوز وما حولها", label_en: "Douz and around", src: TUNIS_REGION_HEROES_3.douz },
        ],
      },
    ],
  },
  ...tunisiaInfoGuides,
  ...tunisiaRegionGuides,
  ...tunisiaRegionGuides2,
  ...tunisiaRegionGuides3,
];
