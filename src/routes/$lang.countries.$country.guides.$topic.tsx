import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import { type Lang } from "@/lib/i18n";
import { getGuide, franceGuides } from "@/lib/france-guides";

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
  const title = ar ? g.title_ar : g.title_en;
  const others = franceGuides.filter((o) => o.slug !== g.slug);

  return (
    <div className="bg-cream">
      <section className="relative h-[52vh] min-h-[360px] bg-midnight">
        <img src={g.image} alt={g.title_en} className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-midnight/20" />
        <div className="relative z-10 mx-auto max-w-4xl h-full flex flex-col justify-end px-6 pb-12 text-cream">
          <div className="text-xs text-cream/60 mb-3">
            <Link to="/$lang/countries/$slug" params={{ lang, slug: country }} className="hover:text-gold">
              {ar ? "فرنسا" : "France"}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gold">{ar ? g.kicker_ar : g.kicker_en}</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl leading-tight">{title}</h1>
          <div className="mt-5 h-px w-24 bg-gold/70" />
        </div>
      </section>

      <article className={`mx-auto max-w-3xl px-6 py-16 ${ar ? "text-right" : "text-left"}`}>
        {g.blocks.map((b, i) => {
          if (b.type === "H3")
            return (
              <h2 key={i} className="font-display text-2xl md:text-3xl text-midnight mt-12 mb-4">
                {ar ? b.ar : b.en}
              </h2>
            );
          if (b.type === "P")
            return (
              <p key={i} className="text-[17px] leading-[1.9] text-charcoal/85 mb-6">
                {ar ? b.ar : b.en}
              </p>
            );
          const items = ar ? b.ar : b.en;
          return (
            <ul key={i} className="my-6 space-y-3">
              {items.map((it, j) => (
                <li
                  key={j}
                  className="flex gap-4 items-start rounded-xl border border-sand bg-white/60 px-5 py-4 hover:border-gold/60 transition-colors"
                >
                  <span className="font-mono text-[11px] text-gold pt-1 shrink-0">{String(j + 1).padStart(2, "0")}</span>
                  <span className="text-[16px] leading-[1.9] text-charcoal/85">{it}</span>
                </li>
              ))}
            </ul>
          );
        })}
      </article>

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-5 text-center">
            {ar ? "أقسام أخرى" : "More sections"}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/$lang/countries/$country/guides/$topic"
                params={{ lang, country, topic: o.slug }}
                className="group relative overflow-hidden rounded-2xl bg-midnight h-32 flex items-end border border-midnight/10"
              >
                <img src={o.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
                <div className="relative z-10 p-4">
                  <div className="font-display text-lg text-cream leading-snug">{ar ? o.title_ar : o.title_en}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
