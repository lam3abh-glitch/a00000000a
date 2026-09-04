// "Read more" deep-dive pages linked from specific attraction sections of a city
// article. Keyed by city slug, then by the exact attraction heading text.
export const ATTRACTION_LINKS: Record<string, Record<string, { country: string; topic: string }>> = {
  madrid: {
    "ساحة دي سيبيليس": { country: "spain", topic: "cibeles" },
    "Plaza de Cibeles": { country: "spain", topic: "cibeles" },
    "بلازا مايور مدريد": { country: "spain", topic: "plaza-mayor" },
    "Plaza Mayor, Madrid": { country: "spain", topic: "plaza-mayor" },
    "شارع غران فيا": { country: "spain", topic: "gran-via" },
    "Gran Vía Street": { country: "spain", topic: "gran-via" },
  },
};

export function attractionLink(citySlug: string, title: string) {
  return ATTRACTION_LINKS[citySlug]?.[title.trim()];
}
