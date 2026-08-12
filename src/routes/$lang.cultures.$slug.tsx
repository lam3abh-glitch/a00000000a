import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { getArticle } from "@/lib/content.functions";
import { type Lang, t, L } from "@/lib/i18n";

const qo = (slug: string) => queryOptions({ queryKey: ["article", slug], queryFn: () => getArticle({ data: { slug } }) });

export const Route = createFileRoute("/$lang/cultures/$slug")({
  loader: ({ context, params }) => context.queryClient.ensureQueryData(qo(params.slug)),
  component: Culture,
});

function Culture() {
  const { lang, slug } = useParams({ from: "/$lang/cultures/$slug" }) as { lang: Lang; slug: string };
  const { data } = useSuspenseQuery(qo(slug));
  if (!data.article) throw notFound();
  const a: any = data.article;
  const title = L(lang, a.title_ar, a.title_en);
  return (
    <div className="bg-cream pt-32 pb-24 min-h-screen">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">{a.kind}</div>
        <h1 className="font-display text-5xl text-midnight">{title}</h1>
        {a.country && (
          <Link to="/$lang/countries/$slug" params={{ lang, slug: a.country.slug }} className="mt-4 inline-block text-sm text-charcoal/60 hover:text-gold">
            {a.country.flag_emoji} {L(lang, a.country.name_ar, a.country.name_en)}
          </Link>
        )}
        <div className="gold-divider w-24 my-10" />
        <img src={a.hero_image} alt={title} className="w-full aspect-[16/9] object-cover mb-10" />
        <p className="font-display text-xl text-midnight mb-8">{L(lang, a.excerpt_ar, a.excerpt_en)}</p>
        <div className="text-lg leading-loose text-charcoal/85 whitespace-pre-line">{L(lang, a.content_ar, a.content_en)}</div>
      </div>
    </div>
  );
}