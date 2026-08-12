import frDict from "./translations/fr.json";
import esDict from "./translations/es.json";
import zhDict from "./translations/zh.json";
import { ar, type UI } from "./ui/ar";
import { en } from "./ui/en";
import { fr } from "./ui/fr";
import { es } from "./ui/es";
import { zh } from "./ui/zh";

export type Lang = "ar" | "en" | "fr" | "es" | "zh";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "ar", label: "العربية" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "zh", label: "中文" },
];

export const isLang = (s: string | undefined): s is Lang =>
  s === "ar" || s === "en" || s === "fr" || s === "es" || s === "zh";

export const dir = (lang: Lang) => (lang === "ar" ? "rtl" : "ltr");

export const htmlLang = (lang: Lang) =>
  ({ ar: "ar", en: "en", fr: "fr", es: "es", zh: "zh-Hans" })[lang];

export const locale = (lang: Lang) =>
  ({ ar: "ar", en: "en-GB", fr: "fr-FR", es: "es-ES", zh: "zh-CN" })[lang];

/* Content translations (database rows, city articles, France guides). */
const DICTS: Record<string, Record<string, string>> = {
  fr: frDict as Record<string, string>,
  es: esDict as Record<string, string>,
  zh: zhDict as Record<string, string>,
};

/** Translate content that exists in Arabic + English into the active language. */
export function L(lang: Lang, arText?: string | null, enText?: string | null): string {
  const arabic = arText ?? "";
  const english = enText ?? "";
  if (lang === "ar") return arabic || english;
  if (lang === "en") return english || arabic;
  const dict = DICTS[lang] ?? {};
  return dict[english.trim()] ?? dict[arabic.trim()] ?? english ?? arabic;
}

/** Translate a single English source string into the active language. */
export function tx(lang: Lang, source: string): string {
  if (lang === "ar" || lang === "en") return source;
  const dict = DICTS[lang] ?? {};
  return dict[source.trim()] ?? source;
}

export const fmt = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_m, k: string) => String(vars[k] ?? ""));

export const t: Record<Lang, UI> = { ar, en, fr, es, zh };
export type { UI };