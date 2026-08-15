import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { getContinent } from "@/lib/content.functions";
import { type Lang, t } from "@/lib/i18n";
import turkishCyprusFlag from "@/assets/turkish-cyprus-flag.png.asset.json";

const qo = (slug: string) => queryOptions({ queryKey: ["continent", slug], queryFn: () => getContinent({ data: { slug } }) });

export const Route = createFileRoute("/$lang/continents/$slug")({
  loader: ({ context, params }) => context.queryClient.ensureQueryData(qo(params.slug)),
  component: Continent,
});

function Continent() {
  const { lang, slug } = useParams({ from: "/$lang/continents/$slug" }) as { lang: Lang; slug: string };
  const { data } = useSuspenseQuery(qo(slug));
  if (!data.continent) throw notFound();
  const cont: any = data.continent;
  const name = lang === "ar" ? cont.name_ar : cont.name_en;
  const desc = lang === "ar" ? cont.description_ar : cont.description_en;
  const tr = t[lang];

  return (
    <div className="bg-cream">
      <section className="relative h-[70vh] min-h-[480px] bg-midnight">
        <img src={cont.hero_image} alt={name} className="absolute inset-0 h-full w-full object-cover opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl h-full flex flex-col justify-end px-6 pb-20 text-cream">
          <div className="text-xs text-cream/60 mb-3">
            <Link to="/$lang" params={{ lang }} className="hover:text-gold">{tr.sections.world}</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">{name}</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl">{name}</h1>
          <p className="mt-6 max-w-2xl text-cream/70 leading-relaxed">{desc}</p>
          <div className="mt-6 text-xs uppercase tracking-[0.3em] text-gold">{data.countries.length} {lang === "ar" ? "دولة" : "countries"}</div>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-10">
            {data.countries.map((c: any) => (
              <Link key={c.slug} to="/$lang/countries/$slug" params={{ lang, slug: c.slug }} className="group text-center">
                <div className="aspect-square rounded-full bg-sand/40 border border-sand overflow-hidden group-hover:border-gold transition shadow-sm">
                  {c.iso2 ? (
                    <img
                      src={`https://flagcdn.com/w320/${c.iso2.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w320/${c.iso2.toLowerCase()}.png 1x, https://flagcdn.com/w640/${c.iso2.toLowerCase()}.png 2x`}
                      alt={lang === "ar" ? c.name_ar : c.name_en}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full grid place-items-center text-3xl md:text-4xl">
                      <span>{c.flag_emoji}</span>
                    </div>
                  )}
                </div>
                <div className="mt-3 text-xs md:text-sm text-midnight group-hover:text-gold transition">
                  {lang === "ar" ? c.name_ar : c.name_en}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}