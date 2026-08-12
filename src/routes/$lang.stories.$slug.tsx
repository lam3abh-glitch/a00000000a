import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { getArticle } from "@/lib/content.functions";
import { type Lang, t } from "@/lib/i18n";
import { useTx } from "@/lib/ui-i18n";

const qo = (slug: string) => queryOptions({ queryKey: ["article", slug], queryFn: () => getArticle({ data: { slug } }) });

export const Route = createFileRoute("/$lang/stories/$slug")({
  loader: ({ context, params }) => context.queryClient.ensureQueryData(qo(params.slug)),
  component: Story,
});

function Story() {
  const { lang, slug } = useParams({ from: "/$lang/stories/$slug" }) as { lang: Lang; slug: string };
  const tx = useTx(lang);
  const { data } = useSuspenseQuery(qo(slug));
  if (!data.article) throw notFound();
  const a: any = data.article;
  const tr = t[lang];
  const title = tx(a.title_ar, a.title_en);

  return (
    <div className="bg-cream">
      <section className="relative h-[80vh] min-h-[560px] bg-midnight">
        <img src={a.hero_image} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl h-full flex flex-col justify-end px-6 pb-20 text-cream">
          <div className="text-xs text-cream/60 mb-3">
            <Link to="/$lang" params={{ lang }} className="hover:text-gold">{tr.sections.world}</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">{tr.nav.stories}</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-tight">{title}</h1>
          {a.country && (
            <Link to="/$lang/countries/$slug" params={{ lang, slug: a.country.slug }} className="mt-6 text-sm text-gold hover:underline">
              {a.country.flag_emoji} {tx(a.country.name_ar, a.country.name_en)}
            </Link>
          )}
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6">
          <p className="font-display text-2xl text-midnight leading-relaxed mb-12">{tx(a.excerpt_ar, a.excerpt_en)}</p>
          <div className="gold-divider w-24 mb-12" />
          <div className="text-lg leading-loose text-charcoal/85 whitespace-pre-line">
            {tx(a.content_ar, a.content_en)}
          </div>
        </div>
      </section>
    </div>
  );
}