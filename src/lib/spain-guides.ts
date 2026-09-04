import type { Guide } from "./france-guides";
import { spainGuidesA } from "./spain-guides-a";
import { spainGuidesB } from "./spain-guides-b";
import { spainGuidesFestivals } from "./spain-guides-festivals";
import { spainGuidesExtra } from "./spain-guides-extra";
import { spainGuidesBarcelona } from "./spain-guides-barcelona";
import { spainGuidesShopping } from "./spain-guides-shopping";

const ALL = [
  ...spainGuidesA,
  ...spainGuidesB,
  ...spainGuidesFestivals,
  ...spainGuidesExtra,
  ...spainGuidesBarcelona,
  ...spainGuidesShopping,
];

// Every guide, including unlisted landmark pages, for URL lookups.
export const spainGuidesAll: Guide[] = ALL;

// Display order mirrors the section list on the original Spain page.
const ORDER = [
  "before-travel",
  "markets",
  "festivals",
  "programs",
  "costa-blanca-beaches",
  "ten-reasons",
  "beaches19",
  "cantabria-train",
  "ibiza",
  "food",
  "weather",
  "flag",
];

export const spainGuides: Guide[] = ORDER.map((slug) => ALL.find((g) => g.slug === slug)).filter(
  (g): g is Guide => Boolean(g),
);
