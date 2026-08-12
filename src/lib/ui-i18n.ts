import { useEffect, useState } from "react";
import { translateBatch } from "./translate.functions";
import type { Lang } from "./i18n";

type MachineLang = "es" | "fr" | "zh";

const isMachine = (lang: Lang): lang is MachineLang =>
  lang === "es" || lang === "fr" || lang === "zh";

const caches: Record<string, Map<string, string>> = {};
const pending: Record<string, Set<string>> = {};
const inflight: Record<string, Set<string>> = {};
const listeners = new Set<() => void>();
const timers: Record<string, ReturnType<typeof setTimeout> | undefined> = {};

const storageKey = (lang: string) => `ui-i18n:${lang}`;

function cacheFor(lang: string) {
  let c = caches[lang];
  if (c) return c;
  c = new Map<string, string>();
  caches[lang] = c;
  if (typeof window !== "undefined") {
    try {
      const raw = window.localStorage.getItem(storageKey(lang));
      if (raw) for (const [k, v] of Object.entries(JSON.parse(raw) as Record<string, string>)) c.set(k, v);
    } catch {
      /* ignore */
    }
  }
  return c;
}

function persist(lang: string) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      storageKey(lang),
      JSON.stringify(Object.fromEntries(cacheFor(lang))),
    );
  } catch {
    /* ignore */
  }
}

function notify() {
  for (const l of Array.from(listeners)) l();
}

async function flush(lang: MachineLang) {
  timers[lang] = undefined;
  const queue = pending[lang];
  if (!queue || queue.size === 0) return;
  const batch = Array.from(queue).slice(0, 200);
  for (const s of batch) queue.delete(s);
  const busy = (inflight[lang] ??= new Set());
  for (const s of batch) busy.add(s);
  try {
    const res = await translateBatch({ data: { texts: batch, lang } });
    const cache = cacheFor(lang);
    if (res?.texts?.length === batch.length) {
      batch.forEach((src, i) => cache.set(src, res.texts[i] ?? src));
      persist(lang);
      notify();
    }
  } catch {
    /* keep source text on failure */
  } finally {
    for (const s of batch) busy.delete(s);
    if (queue.size > 0) schedule(lang);
  }
}

function schedule(lang: MachineLang) {
  if (timers[lang]) return;
  timers[lang] = setTimeout(() => void flush(lang), 60);
}

/**
 * Returns a translator for short interface strings.
 * `tx(arabicText, englishText)` — Arabic and English are returned as-is, every
 * other language is machine translated on the server (cached in the database
 * and in localStorage) and re-rendered as soon as it arrives.
 */
export function useTx(lang: Lang) {
  const [, bump] = useState(0);
  useEffect(() => {
    const listener = () => bump((v) => v + 1);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  return (ar: string | null | undefined, en?: string | null) => {
    const arabic = ar ?? "";
    const english = en ?? arabic;
    if (lang === "ar") return arabic;
    if (!isMachine(lang)) return english;
    const source = (english || arabic).trim();
    if (!source) return english;
    const cache = cacheFor(lang);
    const hit = cache.get(source);
    if (hit) return hit;
    if (typeof window !== "undefined" && !inflight[lang]?.has(source)) {
      (pending[lang] ??= new Set()).add(source);
      schedule(lang);
    }
    return english;
  };
}
