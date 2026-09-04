// "Read more" deep-dive pages linked from specific attraction sections of a city
// article. Keyed by city slug, then by the exact attraction heading text.
export const ATTRACTION_LINKS: Record<string, Record<string, { country: string; topic: string }>> = {
  madrid: {
    "ساحة دي سيبيليس": { country: "spain", topic: "cibeles" },
  },
};

export function attractionLink(citySlug: string, title: string) {
  return ATTRACTION_LINKS[citySlug]?.[title.trim()];
}
