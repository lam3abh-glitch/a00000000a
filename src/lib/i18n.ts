export type Lang = "ar" | "en";

export const isLang = (s: string | undefined): s is Lang => s === "ar" || s === "en";

export const t = {
  ar: {
    siteName: "سفير المحبة",
    tagline: "رحلتي حول العالم",
    nav: {
      home: "الرئيسية",
      explore: "استكشف العالم",
      continents: "القارات",
      countries: "الدول",
      itineraries: "البرامج السياحية",
      stories: "القصص والمغامرات",
      about: "عني أنا",
    },
    hero: {
      title: "من البحرين إلى العالم",
      sub: "رحلتي لاكتشاف الدول والمدن والثقافات حول العالم",
      cta1: "استكشف الرحلة",
      cta2: "من أنا",
    },
    sections: {
      introTitle: "قصة بدأت بشغف",
      introCta: "من أنا",
      byContinent: "استكشف العالم حسب القارة",
      viewAll: "عرض جميع الوجهات",
      countries: "الدول التي زرتها بمختلف قارات العالم",
      countriesAll: "عرض جميع الدول",
      featured: "قصة مختارة",
      readStory: "اقرأ القصة",
      searchPlaceholder: "ابحث عن دولة",
      cities: "المدن التي زرتها",
      attractions: "أبرز الأماكن",
      culture: "ثقافة ومعلومات",
      stories: "القصص والمغامرات",
      relatedItineraries: "برامج سياحية مرتبطة",
      discover: "اكتشف الرحلة",
      world: "العالم",
      back: "رجوع",
    },
    countriesPage: {
      title: "الدول التي زرتها",
      sub: "أكثر من مئة دولة وثّقتها على مدى سنوات.",
      all: "جميع الدول",
    },
    about: {
      title: "أحمد عبد الرحمن",
      sub: "من مملكة البحرين، صاحب مشروع سفير المحبة.",
    },
    footer: {
      rights: "جميع الحقوق محفوظة",
      desc: "أرشيف شخصي معني بالسفر والترحال والتعايش ، ويوثق أكثر من مائة دولة حول العالم",
    },
  },
  en: {
    siteName: "Ambassador of Love",
    tagline: "My journey around the world",
    nav: {
      home: "Home",
      explore: "Explore",
      continents: "Continents",
      countries: "Countries",
      itineraries: "Itineraries",
      stories: "Stories",
      about: "About Me",
    },
    hero: {
      title: "From Bahrain to the world",
      sub: "My journey to discover countries, cities and cultures across the globe.",
      cta1: "Explore the journey",
      cta2: "About Me",
    },
    sections: {
      introTitle: "A story that began with passion",
      introCta: "About Me",
      byContinent: "Explore by continent",
      viewAll: "View all destinations",
      countries: "Countries I've visited across the world's continents",
      countriesAll: "View all countries",
      featured: "Featured journey",
      readStory: "Read the story",
      searchPlaceholder: "Search for a country",
      cities: "Cities I visited",
      attractions: "Notable places",
      culture: "Culture & notes",
      stories: "Stories & Adventures",
      relatedItineraries: "Related itineraries",
      discover: "Discover the journey",
      world: "World",
      back: "Back",
    },
    countriesPage: {
      title: "Countries I've visited",
      sub: "More than a hundred countries, documented over years.",
      all: "All countries",
    },
    about: {
      title: "Ahmad Abdulrahman",
      sub: "From the Kingdom of Bahrain — founder of the Ambassador of Love project.",
    },
    footer: {
      rights: "All rights reserved",
      desc: "A personal archive of travel, journeys and coexistence, documenting more than a hundred countries around the world.",
    },
  },
} as const;

export const dir = (lang: Lang) => (lang === "ar" ? "rtl" : "ltr");