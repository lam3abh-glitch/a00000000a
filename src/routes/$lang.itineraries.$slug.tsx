import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { getItinerary } from "@/lib/content.functions";
import { type Lang, t, L } from "@/lib/i18n";

const qo = (slug: string) => queryOptions({ queryKey: ["itinerary", slug], queryFn: () => getItinerary({ data: { slug } }) });

export const Route = createFileRoute("/$lang/itineraries/$slug")({
  loader: ({ context, params }) => context.queryClient.ensureQueryData(qo(params.slug)),
  component: Itinerary,
});

function Itinerary() {
  const { lang, slug } = useParams({ from: "/$lang/itineraries/$slug" }) as { lang: Lang; slug: string };
  const { data } = useSuspenseQuery(qo(slug));
  if (!data.itinerary) throw notFound();
  const it: any = data.itinerary;
  const tr = t[lang];
  const days = (it.days ?? []) as Array<any>;
  const title = L(lang, it.title_ar, it.title_en);

  return (
    <div className="bg-cream">
      <section className="relative h-[60vh] min-h-[420px] bg-midnight">
        <img src={it.hero_image} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl h-full flex flex-col justify-end px-6 pb-16 text-cream">
          <div className="text-xs text-cream/60 mb-3">
            <Link to="/$lang" params={{ lang }} className="hover:text-gold">{tr.sections.world}</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">{tr.nav.itineraries}</span>
          </div>
          <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">{it.duration_days} {lang === "ar" ? "يوم" : "days"}</div>
          <h1 className="font-display text-5xl md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-cream/70">{L(lang, it.summary_ar, it.summary_en)}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-12">
          {days.map((d: any) => (
            <article key={d.day} className="border-t border-sand pt-8">
              <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-2">{lang === "ar" ? `اليوم ${d.day}` : `Day ${d.day}`}</div>
              <h2 className="font-display text-3xl text-midnight">{L(lang, d.title_ar, d.title_en)}</h2>
              <p className="mt-4 leading-loose text-charcoal/80">{L(lang, d.content_ar, d.content_en)}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}