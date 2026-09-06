import { franceGuides, type Guide, type GuideBlock } from "./france-guides";
import { spainGuides, spainGuidesAll } from "./spain-guides";
import { belgiumGuides } from "./belgium-guides";
import { brusselsLandmarkGuides } from "./belgium-guides-brussels";
import { finlandGuides } from "./finland-guides";
import { bulgariaGuides } from "./bulgaria-guides";
import { norwayGuides } from "./norway-guides";
import { norwayDiscoverGuide, norwayDiscoverSubGuides } from "./norway-discover";
import { norwayMoreGuides } from "./norway-more";
import { russiaGuides } from "./russia-guides";
import { latviaGuides } from "./latvia-guides";
import { ukraineGuides } from "./ukraine-guides";
import { armeniaGuides } from "./armenia-guides";
import { albaniaGuides } from "./albania-guides";
import { irelandGuides } from "./ireland-guides";
import { germanyGuides, germanyGuidesAll } from "./germany-guides";
import { pragueGuidesA } from "./czech-guides-prague-a";
import { pragueGuidesB } from "./czech-guides-prague-b";
import { pragueGuidesC } from "./czech-guides-prague-c";
import { czechGuidesExtraA } from "./czech-guides-extra-a";
import { czechGuidesExtraB } from "./czech-guides-extra-b";
import { czechGuidesExtraC } from "./czech-guides-extra-c";
import { czechGuidesExtraD } from "./czech-guides-extra-d";

const pragueLandmarkGuides = [...pragueGuidesA, ...pragueGuidesB, ...pragueGuidesC];
const czechExtraGuides = [...czechGuidesExtraA, ...czechGuidesExtraB, ...czechGuidesExtraC, ...czechGuidesExtraD];

export type { Guide, GuideBlock };

export const GUIDES_BY_COUNTRY: Record<string, Guide[]> = {
  france: franceGuides,
  spain: spainGuides,
  belgium: belgiumGuides,
  finland: finlandGuides,
  bulgaria: bulgariaGuides,
  norway: [...norwayGuides, norwayDiscoverGuide, ...norwayMoreGuides],
  russia: russiaGuides,
  latvia: latviaGuides,
  ukraine: ukraineGuides,
  armenia: armeniaGuides,
  albania: albaniaGuides,
  ireland: irelandGuides,
  germany: germanyGuides,
  "czech-republic": czechExtraGuides,
};

export const COUNTRY_LABEL: Record<string, { ar: string; en: string }> = {
  france: { ar: "فرنسا", en: "France" },
  spain: { ar: "إسبانيا", en: "Spain" },
  belgium: { ar: "بلجيكا", en: "Belgium" },
  finland: { ar: "فنلندا", en: "Finland" },
  bulgaria: { ar: "بلغاريا", en: "Bulgaria" },
  norway: { ar: "النرويج", en: "Norway" },
  russia: { ar: "روسيا", en: "Russia" },
  latvia: { ar: "لاتفيا", en: "Latvia" },
  ukraine: { ar: "أوكرانيا", en: "Ukraine" },
  armenia: { ar: "أرمينيا", en: "Armenia" },
  albania: { ar: "ألبانيا", en: "Albania" },
  ireland: { ar: "أيرلندا", en: "Ireland" },
  germany: { ar: "ألمانيا", en: "Germany" },
  "czech-republic": { ar: "التشيك", en: "Czechia" },
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
  russia: russiaGuides,
  latvia: latviaGuides,
  ukraine: ukraineGuides,
  armenia: armeniaGuides,
  albania: albaniaGuides,
  ireland: irelandGuides,
  germany: germanyGuidesAll,
  "czech-republic": [...pragueLandmarkGuides, ...czechExtraGuides],
};

export function getGuideFor(country: string, slug: string): Guide | undefined {
  return (LOOKUP_BY_COUNTRY[country] ?? guidesFor(country)).find((g) => g.slug === slug);
}

export function countryLabel(country: string, lang: string): string {
  const l = COUNTRY_LABEL[country];
  if (!l) return country;
  return lang === "ar" ? l.ar : l.en;
}
