import { franceGuides, type Guide } from "./france-guides";
import { spainGuides } from "./spain-guides";

export type { Guide };

export const GUIDES_BY_COUNTRY: Record<string, Guide[]> = {
  france: franceGuides,
  spain: spainGuides,
};

export const COUNTRY_LABEL: Record<string, { ar: string; en: string }> = {
  france: { ar: "فرنسا", en: "France" },
  spain: { ar: "إسبانيا", en: "Spain" },
};

export function guidesFor(country: string): Guide[] {
  return GUIDES_BY_COUNTRY[country] ?? [];
}

export function getGuideFor(country: string, slug: string): Guide | undefined {
  return guidesFor(country).find((g) => g.slug === slug);
}

export function countryLabel(country: string, lang: string): string {
  const l = COUNTRY_LABEL[country];
  if (!l) return country;
  return lang === "ar" ? l.ar : l.en;
}
