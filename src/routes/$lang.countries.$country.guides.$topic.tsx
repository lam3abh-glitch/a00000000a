import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { type Lang } from "@/lib/i18n";
import { getGuideFor, guidesFor, countryLabel, type GuideBlock } from "@/lib/guides";

export const Route = createFileRoute("/$lang/countries/$country/guides/$topic")({
  beforeLoad: ({ params }) => {
    if (!getGuideFor(params.country, params.topic)) throw notFound();
  },
  head: ({ params }) => {
    const g = getGuideFor(params.country, params.topic);
    const title = g ? `${g.title_en} — سفير المحبة` : "Guide — سفير المحبة";
    const desc = g ? `${g.title_ar} · ${g.title_en}` : "Travel guide";
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
  const g = getGuideFor(country, topic);
  if (!g) throw notFound();
  const ar = lang === "ar";
  const title = ar ? g.title_ar : g.title_en;
  const others = guidesFor(country).filter((o) => o.slug !== g.slug);
  const sib = g.theme === "siberia";
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
    <div className={`relative ${sib ? "bg-frost" : "bg-cream"}`} dir={ar ? "rtl" : "ltr"}>
      {sib && (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--steel) 0 2px, transparent 2px 26px)",
            }}
          />
          <svg className="absolute -left-10 top-[30vh] w-40 opacity-[0.07] text-steel" viewBox="0 0 120 40" fill="currentColor">
            <rect x="0" y="18" width="120" height="3" />
            <rect x="0" y="30" width="120" height="2" />
            <rect x="10" y="4" width="34" height="14" rx="3" />
            <rect x="48" y="7" width="28" height="11" rx="2" />
            <rect x="80" y="7" width="28" height="11" rx="2" />
            <circle cx="20" cy="22" r="4" />
            <circle cx="36" cy="22" r="4" />
            <circle cx="60" cy="22" r="3" />
            <circle cx="92" cy="22" r="3" />
          </svg>
          {[
            { top: "18vh", left: "8%", size: 26 },
            { top: "52vh", left: "82%", size: 34 },
            { top: "88vh", left: "14%", size: 20 },
            { top: "128vh", left: "76%", size: 28 },
            { top: "170vh", left: "10%", size: 24 },
          ].map((f, i) => (
            <svg
              key={i}
              className="absolute text-glacier opacity-[0.16]"
              style={{ top: f.top, left: f.left, width: f.size, height: f.size }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            >
              <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
              <path d="M12 6l-2.5 2.5M12 6l2.5 2.5M12 18l-2.5-2.5M12 18l2.5-2.5" />
            </svg>
          ))}
        </div>
      )}
      <div className="fixed top-0 inset-x-0 z-50 h-[3px] bg-transparent">
        <div
          className={`h-full transition-[width] duration-150 ease-out ${sib ? "bg-glacier" : "bg-gold"}`}
          style={{ width: `${progress}%` }}
        />
      </div>


      <section className="relative h-[58svh] min-h-[300px] sm:h-[62vh] bg-midnight">
        <img src={g.image} alt={g.title_en} className={`absolute inset-0 h-full w-full object-cover ${sib ? "opacity-55 saturate-[0.75]" : "opacity-60"}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-midnight/20" />
        {sib && <div className="absolute inset-0 bg-gradient-to-t from-steel/60 via-transparent to-glacier/15" />}
        <div className="relative z-10 mx-auto max-w-4xl h-full flex flex-col justify-end px-5 sm:px-6 pb-10 sm:pb-14 text-cream">
          <div className="text-[11px] sm:text-xs text-cream/60 mb-3 flex flex-wrap items-center gap-x-2">
            <Link to="/$lang/countries/$slug" params={{ lang, slug: country }} className={sib ? "hover:text-glacier" : "hover:text-gold"}>
              {countryLabel(country, lang)}
            </Link>
            <span>/</span>
            <span className={sib ? "text-glacier" : "text-gold"}>{ar ? g.kicker_ar : g.kicker_en}</span>
          </div>
          <h1 className="font-display text-[26px] leading-snug sm:text-4xl md:text-5xl md:leading-tight">{title}</h1>
          {sib && (
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] sm:text-xs text-cream/70 font-mono">
              <span>9248 KM</span>
              <span className="text-glacier">·</span>
              <span>{ar ? "7 أيام" : "7 days"}</span>
              <span className="text-glacier">·</span>
              <span>{ar ? "70 محطة" : "70 stations"}</span>
              <span className="text-glacier">·</span>
              <span>-20°C</span>
            </div>
          )}
          <div className={`mt-4 sm:mt-5 h-px w-20 sm:w-24 ${sib ? "bg-glacier/80" : "bg-gold/70"}`} />
          <div className="mt-5 hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-cream/50">
            <span className={`h-4 w-px animate-pulse ${sib ? "bg-glacier/70" : "bg-gold/60"}`} />
            {ar ? "تابع القراءة" : "Keep scrolling"}
          </div>
        </div>
      </section>

      <article className={`relative mx-auto max-w-3xl px-5 sm:px-6 py-10 sm:py-16 ${ar ? "text-right" : "text-left"}`}>

        {g.blocks
          .reduce<(GuideBlock | Extract<GuideBlock, { type: "IMG" }>[])[]>((acc, b) => {
            if (b.type === "IMG" && b.size === "compact") {
              const last = acc[acc.length - 1];
              if (Array.isArray(last)) last.push(b);
              else acc.push([b]);
            } else {
              acc.push(b);
            }
            return acc;
          }, [])
          .map((item, i) => {
            if (Array.isArray(item)) {
              return (
                <motion.div
                  key={`grid-${i}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 my-4 sm:my-6 -mx-5 sm:mx-0"
                >
                  {item.map((b, j) => (
                    <figure key={j} className="overflow-hidden rounded-2xl border border-sand bg-midnight/5 shadow-sm">
                      <img
                        src={b.src}
                        alt={ar ? b.cap_ar : b.cap_en}
                        loading="lazy"
                        className="w-full h-36 sm:h-44 object-cover sm:transition-transform sm:duration-700 sm:hover:scale-[1.04]"
                      />
                      {(ar ? b.cap_ar : b.cap_en) && (
                        <figcaption className="text-center text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-charcoal/60 mt-2 px-2 pb-2">
                          {ar ? b.cap_ar : b.cap_en}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </motion.div>
              );
            }
            const b = item;
            if (b.type === "H3") {
              const isTitle = b.noNumber;
              if (!isTitle) headingCount += 1;
              paraCount = 0;
              const n = headingCount;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                  className={`mb-5 flex items-start gap-3 sm:gap-4 ${isTitle ? "mt-8 sm:mt-10" : "mt-12 sm:mt-16"}`}
                >
                  {!isTitle && (
                    <span className={`shrink-0 font-display text-3xl sm:text-5xl leading-none pt-1 select-none ${sib ? "text-glacier/50" : "text-gold/40"}`}>
                      {String(n).padStart(2, "0")}
                    </span>
                  )}
                  <div className="min-w-0">
                    <h2 className={`font-display leading-snug text-midnight ${isTitle ? "text-2xl sm:text-4xl" : "text-xl sm:text-3xl"}`}>{ar ? b.ar : b.en}</h2>
                    {(ar ? b.sub_ar : b.sub_en) && (
                      <div className="mt-1.5 text-[13px] sm:text-[14px] text-charcoal/60">{ar ? b.sub_ar : b.sub_en}</div>
                    )}
                    <div className={`mt-3 h-px w-full bg-gradient-to-r rtl:bg-gradient-to-l ${sib ? "from-glacier/70 to-transparent" : "from-gold/60 to-transparent"}`} />
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
            if (b.type === "IMG") {
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
                      className="w-full object-cover sm:transition-transform sm:duration-700 sm:hover:scale-[1.03] max-h-[46vh] sm:max-h-[62vh]"
                    />
                  </div>
                  {(ar ? b.cap_ar : b.cap_en) && (
                    <figcaption className="text-center text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-charcoal/60 mt-3 px-5 sm:px-0">
                      {ar ? b.cap_ar : b.cap_en}
                    </figcaption>
                  )}
                </motion.figure>
              );
            }
            if (b.type === "VIDEO") {
              return (
                <motion.figure
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="my-6 sm:my-10 -mx-5 sm:mx-0"
                >
                  <div className={`overflow-hidden rounded-none sm:rounded-3xl border-y sm:border bg-midnight shadow-sm ${sib ? "border-glacier/40" : "border-sand"}`}>
                    <video
                      src={b.src}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full max-h-[60vh] bg-midnight"
                    />
                  </div>
                  {(ar ? b.cap_ar : b.cap_en) && (
                    <figcaption className="text-center text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-charcoal/60 mt-3 px-5 sm:px-0">
                      {ar ? b.cap_ar : b.cap_en}
                    </figcaption>
                  )}
                </motion.figure>
              );
            }
            if (b.type === "YT") {
              return (
                <motion.figure
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="my-6 sm:my-10 -mx-5 sm:mx-0"
                >
                  <div className={`overflow-hidden rounded-none sm:rounded-3xl border-y sm:border bg-midnight shadow-sm ${sib ? "border-glacier/40" : "border-sand"}`}>
                    <div className="relative w-full aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${b.id}`}
                        title={b.cap_en || b.cap_ar}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                  </div>
                  {(ar ? b.cap_ar : b.cap_en) && (
                    <figcaption className="text-center text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-charcoal/60 mt-3 px-5 sm:px-0">
                      {ar ? b.cap_ar : b.cap_en}
                    </figcaption>
                  )}
                </motion.figure>
              );
            }
            if (b.type === "MORE") {

              return (
                <div key={i} className="my-8 sm:my-10 flex justify-center">
                  <Link
                    to="/$lang/countries/$country/guides/$topic"
                    params={{ lang, country, topic: b.topic }}
                    className="group inline-flex items-center gap-2 rounded-full border border-gold/60 bg-white/70 px-6 py-3 text-[13px] sm:text-sm text-midnight hover:bg-gold hover:text-cream transition-colors"
                  >
                    <span className="font-display">{ar ? b.label_ar : b.label_en}</span>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-charcoal/50 group-hover:text-cream/80">
                      {ar ? "اقرأ المزيد" : "Read more"}
                    </span>
                  </Link>
                </div>
              );
            }
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

      {g.gallery && g.gallery.length > 0 && (
        <section className="pb-14 sm:pb-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="columns-2 sm:columns-3 gap-3 sm:gap-4 [column-fill:_balance]">
              {g.gallery.map((p, i) => (
                <motion.figure
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="mb-3 sm:mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-sand bg-midnight/5 shadow-sm"
                >
                  <img
                    src={p.src}
                    alt={ar ? p.cap_ar : p.cap_en}
                    loading="lazy"
                    className="w-full object-cover sm:transition-transform sm:duration-700 sm:hover:scale-[1.04]"
                  />
                </motion.figure>
              ))}
            </div>
          </div>
        </section>
      )}


      {g.subPages && g.subPages.length > 0 && (
        <section className="pb-12 sm:pb-16">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-gold mb-5 text-center">
              {ar ? "تفاصيل أكثر" : "Explore in detail"}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {g.subPages.map((s) => (
                <Link
                  key={s.slug}
                  to="/$lang/countries/$country/guides/$topic"
                  params={{ lang, country, topic: s.slug }}
                  className="group rounded-2xl border border-sand bg-white/70 px-5 py-4 hover:border-gold/60 hover:shadow-sm transition-all"
                >
                  <div className="font-display text-base sm:text-lg text-midnight leading-snug group-hover:text-gold transition-colors">
                    {ar ? s.label_ar : s.label_en}
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-charcoal/50">
                    {ar ? "اقرأ المزيد" : "Read more"}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
            <span>{ar ? `العودة إلى صفحة ${countryLabel(country, lang)}` : `Back to ${countryLabel(country, lang)}`}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
