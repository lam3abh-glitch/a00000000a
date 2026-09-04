import { SPAIN_CITIES_A_EN } from "./spain-cities-a-en";
import { SPAIN_CITIES_B_EN } from "./spain-cities-b-en";

export type CityArticleEn = { title: string; values: string[] };

export const SPAIN_CITY_ARTICLES_EN: Record<string, CityArticleEn> = {
  ...SPAIN_CITIES_A_EN,
  ...SPAIN_CITIES_B_EN,
};
