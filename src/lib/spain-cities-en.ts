import { SPAIN_EN_1 } from "./spain-cities-en-1";
import { SPAIN_EN_2 } from "./spain-cities-en-2";
import { SPAIN_EN_3 } from "./spain-cities-en-3";
import { SPAIN_EN_4 } from "./spain-cities-en-4";

export type CityArticleEn = { title: string; values: string[] };

export const SPAIN_CITY_ARTICLES_EN: Record<string, CityArticleEn> = {
  ...SPAIN_EN_1,
  ...SPAIN_EN_2,
  ...SPAIN_EN_3,
  ...SPAIN_EN_4,
};
