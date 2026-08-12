export type Lang = "ar" | "en";

export const isLang = (s: string | undefined): s is Lang => s === "ar" || s === "en";

export const t = {
  ar: {
    siteName: "سفير المحبة",
    tagline: "رحلة أحمد حول العالم",
    nav: {
      home: "الرئيسية",
      explore: "استكشف العالم",
      continents: "القارات",
      countries: "الدول",
      itineraries: "البرامج السياحية",
      stories: "القصص والمغامرات",
      about: "عن أحمد",
    },
    hero: {
      title: "من البحرين إلى العالم",
      sub: "رحلة أحمد لاكتشاف الدول والمدن والثقافات حول العالم",
      cta1: "استكشف الرحلة",
      cta2: "تعرف على أحمد",
    },
    sections: {
      introTitle: "قصة بدأت بشغف",
      introCta: "تعرف على أحمد",
      byContinent: "استكشف العالم حسب القارة",
      viewAll: "عرض جميع الوجهات",
      countries: "الدول التي زارها أحمد",
      countriesAll: "عرض جميع الدول",
      featured: "قصة مختارة",
      readStory: "اقرأ القصة",
      searchPlaceholder: "ابحث عن دولة",
      cities: "المدن التي زارها أحمد",
      attractions: "أبرز الأماكن",
      culture: "ثقافة ومعلومات",
      relatedItineraries: "برامج سياحية مرتبطة",
      discover: "اكتشف الرحلة",
      world: "العالم",
      back: "رجوع",
    },
    countriesPage: {
      title: "الدول التي زارها أحمد",
      sub: "أكثر من مئة دولة وثّقها أحمد على مدى سنوات.",
      all: "جميع الدول",
    },
    about: {
      title: "أحمد عبد الرحمن",
      sub: "من مملكة البحرين، صاحب مشروع سفير المحبة.",
    },
    footer: {
      rights: "جميع الحقوق محفوظة",
      desc: "أرشيف شخصي للسفر، يوثّق رحلات أحمد من البحرين إلى أكثر من مئة دولة حول العالم.",
    },
  },
  en: {
    siteName: "Ambassador of Love",
    tagline: "Ahmad's journey around the world",
    nav: {
      home: "Home",
      explore: "Explore",
      continents: "Continents",
      countries: "Countries",
      itineraries: "Itineraries",
      stories: "Stories",
      about: "About Ahmad",
    },
    hero: {
      title: "From Bahrain to the world",
      sub: "Ahmad's journey to discover countries, cities, and cultures across the globe.",
      cta1: "Explore the journey",
      cta2: "About Ahmad",
    },
    sections: {
      introTitle: "A story that began with passion",
      introCta: "About Ahmad",
      byContinent: "Explore by continent",
      viewAll: "View all destinations",
      countries: "Countries Ahmad has visited",
      countriesAll: "View all countries",
      featured: "Featured journey",
      readStory: "Read the story",
      searchPlaceholder: "Search for a country",
      cities: "Cities Ahmad visited",
      attractions: "Notable places",
      culture: "Culture & notes",
      relatedItineraries: "Related itineraries",
      discover: "Discover the journey",
      world: "World",
      back: "Back",
    },
    countriesPage: {
      title: "Countries Ahmad has visited",
      sub: "More than a hundred countries, documented over years.",
      all: "All countries",
    },
    about: {
      title: "Ahmad Abdulrahman",
      sub: "From the Kingdom of Bahrain — founder of the Ambassador of Love project.",
    },
    footer: {
      rights: "All rights reserved",
      desc: "A personal travel archive documenting Ahmad's journeys from Bahrain to more than a hundred countries around the world.",
    },
  },
} as const;

export const dir = (lang: Lang) => (lang === "ar" ? "rtl" : "ltr");