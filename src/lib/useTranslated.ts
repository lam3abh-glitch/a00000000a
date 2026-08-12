import { useQuery } from "@tanstack/react-query";
import { translateBatch } from "./translate.functions";
import type { Lang } from "./i18n";

/**
 * Translates a list of English source strings into the current language.
 * Arabic and English are served from the static content, everything else is
 * machine translated on the server (and cached) the first time it is requested.
 */
export function useTranslated(texts: string[], lang: Lang): string[] {
  const needs = lang === "es" || lang === "fr" || lang === "zh";
  const key = needs ? texts.join("\u0000") : "";
  const { data } = useQuery({
    queryKey: ["translate", lang, key.length, key.slice(0, 200), texts.length],
    enabled: needs && texts.length > 0,
    staleTime: Infinity,
    gcTime: Infinity,
    queryFn: () => translateBatch({ data: { texts, lang: lang as "es" | "fr" | "zh" } }),
  });
  if (!needs) return texts;
  return data?.texts?.length === texts.length ? data.texts : texts;
}
