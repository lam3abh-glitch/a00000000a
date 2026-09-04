import { franceGuides, type Guide, type GuideBlock } from "./france-guides";
import { spainGuides, spainGuidesAll } from "./spain-guides";
import { belgiumGuides } from "./belgium-guides";
import { brusselsLandmarkGuides } from "./belgium-guides-brussels";
import { finlandGuides } from "./finland-guides";
import { bulgariaGuides } from "./bulgaria-guides";
import { norwayGuides } from "./norway-guides";
import { norwayDiscoverGuide, norwayDiscoverSubGuides } from "./norway-discover";
import { norwayMoreGuides } from "./norway-more";

export type { Guide, GuideBlock };

export const GUIDES_BY_COUNTRY: Record<string, Guide[]> = {
  france: franceGuides,
  spain: spainGuides,
  belgium: belgiumGuides,
  finland: finlandGuides,
  bulgaria: bulgariaGuides,
  norway: [...norwayGuides, norwayDiscoverGuide, ...norwayMoreGuides],
};

export const COUNTRY_LABEL: Record<string, { ar: string; en: string }> = {
  france: { ar: "فرنسا", en: "France" },
  spain: { ar: "إسبانيا", en: "Spain" },
  belgium: { ar: "بلجيكا", en: "Belgium" },
  finland: { ar: "فنلندا", en: "Finland" },
  bulgaria: { ar: "بلغاريا", en: "Bulgaria" },
  norway: { ar: "النرويج", en: "Norway" },
};

export function guidesFor(country: string): Guide[] {
  return GUIDES_BY_COUNTRY[country] ?? [];
}

// Includes unlisted landmark pages that are only linked from city articles.
const LOOKUP_BY_COUNTRY: Record<string, Guide[]> = {
  france: franceGuides,
  spain: spainGuidesAll,
  belgium: [...belgiumGuides, ...brusselsLandmarkGuides],
  finland: finlandGuides,
  bulgaria: bulgariaGuides,
  norway: [...norwayGuides, norwayDiscoverGuide, ...norwayDiscoverSubGuides, ...norwayMoreGuides],
};

export function getGuideFor(country: string, slug: string): Guide | undefined {
  return (LOOKUP_BY_COUNTRY[country] ?? guidesFor(country)).find((g) => g.slug === slug);
}

export function countryLabel(country: string, lang: string): string {
  const l = COUNTRY_LABEL[country];
  if (!l) return country;
  return lang === "ar" ? l.ar : l.en;
}
