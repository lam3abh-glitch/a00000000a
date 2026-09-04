import type { Guide } from "./france-guides";
import { spainGuidesA } from "./spain-guides-a";
import { spainGuidesB } from "./spain-guides-b";
import { spainGuidesFestivals } from "./spain-guides-festivals";
import { spainGuidesExtra } from "./spain-guides-extra";
import { spainGuidesBarcelona } from "./spain-guides-barcelona";
import { spainGuidesShopping } from "./spain-guides-shopping";
import { spainProgramsA } from "./spain-programs-a";
import { spainProgramsB } from "./spain-programs-b";
import { spainProgramsC } from "./spain-programs-c";
import { spainProgramsD } from "./spain-programs-d";
import { spainProgramsE } from "./spain-programs-e";

const ALL = [
  ...spainGuidesA,
  ...spainGuidesB,
  ...spainGuidesFestivals,
  ...spainGuidesExtra,
  ...spainGuidesBarcelona,
  ...spainGuidesShopping,
  ...spainProgramsA,
  ...spainProgramsB,
  ...spainProgramsC,
  ...spainProgramsD,
  ...spainProgramsE,
];

// Every guide, including unlisted landmark pages, for URL lookups.
export const spainGuidesAll: Guide[] = ALL;

// Display order mirrors the section list on the original Spain page.
const ORDER = [
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
