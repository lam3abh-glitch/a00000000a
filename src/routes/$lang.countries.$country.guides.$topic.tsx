import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { type Lang } from "@/lib/i18n";
import { getGuide, franceGuides } from "@/lib/france-guides";
import { useTranslated } from "@/lib/useTranslated";

export const Route = createFileRoute("/$lang/countries/$country/guides/$topic")({
  beforeLoad: ({ params }) => {
    if (!getGuide(params.topic)) throw notFound();
  },
  head: ({ params }) => {
    const g = getGuide(params.topic);
    const title = g ? `${g.title_en} — سفير المحبة` : "Guide — سفير المحبة";
    const desc = g ? `${g.title_ar} · ${g.title_en}` : "France travel guide";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: GuidePage,
});

function GuidePage() {
  const { lang, country, topic } = useParams({ from: "/$lang/countries/$country/guides/$topic" }) as {
    lang: Lang;
    country: string;
    topic: string;
  };
  const g = getGuide(topic);
  if (!g) throw notFound();
  const ar = lang === "ar";

  // Machine-translate the English source text for languages beyond ar/en.
  const sourceStrings = useMemo(() => {
    const out: string[] = [g.title_en, g.kicker_en];
    for (const b of g.blocks) {
      if (b.type === "IMG") out.push(b.cap_en);
      else if (b.type === "LIST") out.push(...b.en);
      else out.push(b.en);
    }
    return out;
  }, [g]);
  const tx = useTranslated(sourceStrings, lang);
  const translating = lang !== "ar" && lang !== "en";
  const blocks = useMemo(() => {
    if (!translating) return g.blocks;
    let k = 2;
    return g.blocks.map((b) => {
      if (b.type === "IMG") return { ...b, cap_en: tx[k++] ?? b.cap_en };
      if (b.type === "LIST") return { ...b, en: b.en.map((v) => tx[k++] ?? v) };
      return { ...b, en: tx[k++] ?? b.en };
    });
  }, [g, tx, translating]);
  const title = ar ? g.title_ar : translating ? (tx[0] ?? g.title_en) : g.title_en;
  const kicker = ar ? g.kicker_ar : translating ? (tx[1] ?? g.kicker_en) : g.kicker_en;
  const others = franceGuides.filter((o) => o.slug !== g.slug);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [topic]);

  let headingCount = 0;
  let paraCount = 0;

  return (
    <div className="bg-cream" dir={ar ? "rtl" : "ltr"}>
      <div className="fixed top-0 inset-x-0 z-50 h-[3px] bg-transparent">
        <div className="h-full bg-gold transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <section className="relative h-[58svh] min-h-[300px] sm:h-[62vh] bg-midnight">
        <img src={g.image} alt={g.title_en} className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-midnight/20" />
        <div className="relative z-10 mx-auto max-w-4xl h-full flex flex-col justify-end px-5 sm:px-6 pb-10 sm:pb-14 text-cream">
          <div className="text-[11px] sm:text-xs text-cream/60 mb-3 flex flex-wrap items-center gap-x-2">
            <Link to="/$lang/countries/$slug" params={{ lang, slug: country }} className="hover:text-gold">
              {ar ? "فرنسا" : "France"}
            </Link>
            <span>/</span>
            <span className="text-gold">{kicker}</span>
          </div>
          <h1 className="font-display text-[26px] leading-snug sm:text-4xl md:text-5xl md:leading-tight">{title}</h1>
          <div className="mt-4 sm:mt-5 h-px w-20 sm:w-24 bg-gold/70" />
          <div className="mt-5 hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-cream/50">
            <span className="h-4 w-px bg-gold/60 animate-pulse" />
            {ar ? "تابع القراءة" : "Keep scrolling"}
          </div>
        </div>
      </section>

      <article className={`mx-auto max-w-3xl px-5 sm:px-6 py-10 sm:py-16 ${ar ? "text-right" : "text-left"}`}>
        {blocks.map((b, i) => {
          if (b.type === "H3") {
            headingCount += 1;
            paraCount = 0;
            const n = headingCount;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="mt-12 sm:mt-16 mb-5 flex items-start gap-3 sm:gap-4"
              >
                <span className="shrink-0 font-display text-3xl sm:text-5xl text-gold/40 leading-none pt-1 select-none">
                  {String(n).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h2 className="font-display text-xl leading-snug sm:text-3xl text-midnight">{ar ? b.ar : b.en}</h2>
                  <div className="mt-3 h-px w-full bg-gradient-to-r from-gold/60 to-transparent rtl:bg-gradient-to-l" />
                </div>
              </motion.div>
            );
          }
          if (b.type === "P") {
            paraCount += 1;
            return (
              <p
                key={i}
                className={`text-[16px] sm:text-[18px] leading-[2] text-charcoal/85 mb-5 sm:mb-6 ${
                  paraCount === 1 && headingCount > 0 ? "text-charcoal" : ""
                }`}
              >
                {ar ? b.ar : b.en}
              </p>
            );
          }
          if (b.type === "IMG")
            return (
              <motion.figure
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="my-6 sm:my-10 -mx-5 sm:mx-0"
              >
                <div className="overflow-hidden rounded-none sm:rounded-3xl border-y sm:border border-sand bg-midnight/5 shadow-sm">
                  <img
                    src={b.src}
                    alt={b.cap_en || b.cap_ar}
                    loading="lazy"
                    className="w-full max-h-[46vh] sm:max-h-[62vh] object-cover sm:transition-transform sm:duration-700 sm:hover:scale-[1.03]"
                  />
                </div>
                {(ar ? b.cap_ar : b.cap_en) && (
                  <figcaption className="mt-3 px-5 sm:px-0 text-center text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-charcoal/60">
                    {ar ? b.cap_ar : b.cap_en}
                  </figcaption>
                )}
              </motion.figure>
            );
          const items: string[] = ar ? b.ar : b.en;
          return (
            <ul key={i} className="my-6 sm:my-8 space-y-2.5 sm:space-y-3">
              {items.map((it, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.35, delay: Math.min(j * 0.04, 0.3) }}
                  className="flex gap-3 sm:gap-4 items-start rounded-2xl border border-sand bg-white/70 px-4 py-3.5 sm:px-5 sm:py-4 hover:border-gold/60 hover:shadow-sm transition-all"
                >
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 font-mono text-[10px] text-gold">
                    {j + 1}
                  </span>
                  <span className="min-w-0 text-[15px] sm:text-[16px] leading-[1.9] text-charcoal/85">{it}</span>
                </motion.li>
              ))}
            </ul>
          );
        })}
      </article>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-gold mb-5 text-center">
            {ar ? "أقسام أخرى" : "More sections"}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/$lang/countries/$country/guides/$topic"
                params={{ lang, country, topic: o.slug }}
                className="group relative overflow-hidden rounded-2xl bg-midnight h-28 sm:h-32 flex items-end border border-midnight/10"
              >
                <img src={o.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
                <div className="relative z-10 p-4 min-w-0">
                  <div className="font-display text-base sm:text-lg text-cream leading-snug">{ar ? o.title_ar : o.title_en}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-cream border-t border-sand">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 flex justify-center">
          <Link
            to="/$lang/countries/$slug"
            params={{ lang, slug: country }}
            className="group inline-flex items-center gap-3 rounded-full border border-gold/60 bg-white/80 px-6 py-3.5 sm:px-8 sm:py-4 font-display text-sm sm:text-base text-midnight hover:bg-gold hover:text-cream hover:border-gold transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`shrink-0 transition-transform duration-300 ${ar ? "rotate-180 group-hover:-translate-x-1" : "group-hover:-translate-x-1"}`}
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span>{ar ? "العودة إلى صفحة فرنسا" : "Back to France"}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
