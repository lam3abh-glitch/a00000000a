// "Read more" deep-dive pages linked from specific attraction sections of a city
// article. Keyed by city slug, then by the exact attraction heading text.
export const ATTRACTION_LINKS: Record<string, Record<string, { country: string; topic: string }>> = {
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
};

export function attractionLink(citySlug: string, title: string) {
  return ATTRACTION_LINKS[citySlug]?.[title.trim()];
}
