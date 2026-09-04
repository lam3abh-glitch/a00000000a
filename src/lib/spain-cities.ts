import type { CityArticle } from "./article-format";
import { SPAIN_CITIES_A } from "./spain-cities-a";
import { SPAIN_CITIES_B } from "./spain-cities-b";

export const SPAIN_CITY_ARTICLES: Record<string, CityArticle> = {
  ...SPAIN_CITIES_A,
  ...SPAIN_CITIES_B,
};
