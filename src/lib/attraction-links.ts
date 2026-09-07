// "Read more" deep-dive pages linked from specific attraction sections of a city
// article. Keyed by city slug, then by the exact attraction heading text.
export const ATTRACTION_LINKS: Record<string, Record<string, { country: string; topic: string }>> = {
  edinburgh: {
    "قلعة أدنبره": { country: "scotland", topic: "edinburgh-castle" },
    "Edinburgh Castle": { country: "scotland", topic: "edinburgh-castle" },
    "بلدة أدنبرة القديمة": { country: "scotland", topic: "edinburgh-old-town" },
    "Edinburgh Old Town": { country: "scotland", topic: "edinburgh-old-town" },
    "قصر هوليرود هاوس": { country: "scotland", topic: "holyroodhouse" },
    "The Palace of Holyroodhouse": { country: "scotland", topic: "holyroodhouse" },
    "جسر فيرث أوف فورث بأدنبرة": { country: "scotland", topic: "forth-bridge" },
    "The Forth Bridge at Edinburgh": { country: "scotland", topic: "forth-bridge" },
  },
  london: {
    "ساعة بيغ بن": { country: "britain", topic: "big-ben" },
    "Big Ben": { country: "britain", topic: "big-ben" },
    "برج لندن": { country: "britain", topic: "tower-of-london" },
    "The Tower of London": { country: "britain", topic: "tower-of-london" },
    "قصر وستمنستر": { country: "britain", topic: "westminster-palace" },
    "The Palace of Westminster": { country: "britain", topic: "westminster-palace" },
    "عين لندن": { country: "britain", topic: "london-eye" },
    "The London Eye": { country: "britain", topic: "london-eye" },
    "قصر باكنغهام": { country: "britain", topic: "buckingham-palace" },
    "Buckingham Palace": { country: "britain", topic: "buckingham-palace" },
    "شارع أكسفورد": { country: "britain", topic: "oxford-street" },
    "Oxford Street": { country: "britain", topic: "oxford-street" },
    "المتحف البريطاني": { country: "britain", topic: "british-museum" },
    "The British Museum": { country: "britain", topic: "british-museum" },
  },
  barcelona: {
    "كنيسة ساغرادا فاميليا": { country: "spain", topic: "sagrada-familia" },
    "Sagrada Família Church": { country: "spain", topic: "sagrada-familia" },
    "شارع الرامبلا": { country: "spain", topic: "la-rambla" },
    "La Rambla Street": { country: "spain", topic: "la-rambla" },
    "حديقة جويل برشلونه": { country: "spain", topic: "park-guell" },
    "حديقة جويل برشلونة": { country: "spain", topic: "park-guell" },
    "Park Güell, Barcelona": { country: "spain", topic: "park-guell" },
    "ملعب الكامب نو": { country: "spain", topic: "camp-nou" },
    "Camp Nou Stadium": { country: "spain", topic: "camp-nou" },
  },
  munich: {
    "كنيسة القديس بطرس": { country: "germany", topic: "st-peters-church" },
    "St Peter's Church": { country: "germany", topic: "st-peters-church" },
    "المتحف الالماني": { country: "germany", topic: "deutsches-museum" },
    "The Deutsches Museum": { country: "germany", topic: "deutsches-museum" },
    "الحديقة الأولمبية": { country: "germany", topic: "olympic-park" },
    "The Olympic Park": { country: "germany", topic: "olympic-park" },
    "قصر نيمفينبورج": { country: "germany", topic: "nymphenburg-palace" },
    "Nymphenburg Palace": { country: "germany", topic: "nymphenburg-palace" },
  },
  madrid: {
    "ساحة دي سيبيليس": { country: "spain", topic: "cibeles" },
    "Plaza de Cibeles": { country: "spain", topic: "cibeles" },
    "بلازا مايور مدريد": { country: "spain", topic: "plaza-mayor" },
    "Plaza Mayor, Madrid": { country: "spain", topic: "plaza-mayor" },
    "شارع غران فيا": { country: "spain", topic: "gran-via" },
    "Gran Vía Street": { country: "spain", topic: "gran-via" },
    "القصر الملكي": { country: "spain", topic: "royal-palace" },
    "The Royal Palace": { country: "spain", topic: "royal-palace" },
  },
  brussels: {
    "الميدان الكبير": { country: "belgium", topic: "grand-place" },
    "The Grand Place": { country: "belgium", topic: "grand-place" },
    "حديقة سينكونت ناير": { country: "belgium", topic: "cinquantenaire-park" },
    "Cinquantenaire Park": { country: "belgium", topic: "cinquantenaire-park" },
    "القصر الملكي": { country: "belgium", topic: "royal-palace-brussels" },
    "The Royal Palace": { country: "belgium", topic: "royal-palace-brussels" },
    "الأتوميوم": { country: "belgium", topic: "atomium" },
    "The Atomium": { country: "belgium", topic: "atomium" },
    "حديقة أوروبا الصغيرة": { country: "belgium", topic: "mini-europe" },
    "Mini-Europe Park": { country: "belgium", topic: "mini-europe" },
  },
  oslo: {
    "دار الاوبرا": { country: "norway", topic: "opera-house" },
    "دار الأوبرا": { country: "norway", topic: "opera-house" },
    "The Opera House": { country: "norway", topic: "opera-house" },
  },
  zanzibar: {
    "السياحة في زنجبار": { country: "tanzania", topic: "zanzibar-tourism" },
    "Tourism in Zanzibar": { country: "tanzania", topic: "zanzibar-tourism" },
  },
  prague: {
    "ساعة براغ الفلكية": { country: "czech-republic", topic: "astronomical-clock" },
    "The Prague Astronomical Clock": { country: "czech-republic", topic: "astronomical-clock" },
    "قلعة براغ": { country: "czech-republic", topic: "prague-castle" },
    "Prague Castle": { country: "czech-republic", topic: "prague-castle" },
    "برج بترين": { country: "czech-republic", topic: "petrin-tower" },
    "Petřín Tower": { country: "czech-republic", topic: "petrin-tower" },
    "ساحة البلدة القديمة": { country: "czech-republic", topic: "old-town-square" },
    "Old Town Square": { country: "czech-republic", topic: "old-town-square" },
    "جسر تشارلز": { country: "czech-republic", topic: "charles-bridge" },
    "Charles Bridge": { country: "czech-republic", topic: "charles-bridge" },
    "البيت الراقص": { country: "czech-republic", topic: "dancing-house" },
    "The Dancing House": { country: "czech-republic", topic: "dancing-house" },
  },

};

export function attractionLink(citySlug: string, title: string) {
  return ATTRACTION_LINKS[citySlug]?.[title.trim()];
}

// "Read more" links attached to the end of a prelude section (H3 heading) of a
// city article, keyed by city slug then by the exact heading text.
export const SECTION_LINKS: Record<string, Record<string, { country: string; topic: string }>> = {
  bergen: {
    "بيرغن باختصار": { country: "norway", topic: "bergen-brief" },
    "Bergen in brief": { country: "norway", topic: "bergen-brief" },
  },
};

export function sectionLink(citySlug: string, title: string) {
  return SECTION_LINKS[citySlug]?.[title.trim()];
}
