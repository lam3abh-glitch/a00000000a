import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { getCity } from "@/lib/content.functions";
import { type Lang, t } from "@/lib/i18n";

const qo = (country: string, city: string) =>
  queryOptions({ queryKey: ["city", country, city], queryFn: () => getCity({ data: { country, city } }) });

export const Route = createFileRoute("/$lang/countries/$country/$city")({
  loader: ({ context, params }) => context.queryClient.ensureQueryData(qo(params.country, params.city)),
  component: City,
});

function City() {
  const { lang, country: countrySlug } = useParams({ from: "/$lang/countries/$country/$city" }) as { lang: Lang; country: string; city: string };
  const { data } = useSuspenseQuery(qo(countrySlug, useParams({ from: "/$lang/countries/$country/$city" }).city));
  if (!data.city || !data.country) throw notFound();
  const city: any = data.city;
  const country: any = data.country;
  const tr = t[lang];
  const name = lang === "ar" ? city.name_ar : city.name_en;

  return (
    <div className="bg-cream">
      <section className="relative h-[60vh] min-h-[420px] bg-midnight">
        <img src={city.hero_image} alt={name} className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl h-full flex flex-col justify-end px-6 pb-16 text-cream">
          <div className="text-xs text-cream/60 mb-3">
            <Link to="/$lang" params={{ lang }} className="hover:text-gold">{tr.sections.world}</Link>
            <span className="mx-2">/</span>
            <Link to="/$lang/continents/$slug" params={{ lang, slug: country.continent.slug }} className="hover:text-gold">{lang === "ar" ? country.continent.name_ar : country.continent.name_en}</Link>
            <span className="mx-2">/</span>
            <Link to="/$lang/countries/$slug" params={{ lang, slug: country.slug }} className="hover:text-gold">{lang === "ar" ? country.name_ar : country.name_en}</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">{name}</span>
          </div>
          <h1 className="font-display text-6xl md:text-7xl">{name}</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-lg leading-loose text-charcoal/80">{lang === "ar" ? city.content_ar : city.content_en}</p>
        </div>
      </section>
      {data.siblings.length > 0 && (
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-6">{lang === "ar" ? "مدن أخرى" : "Other cities"}</div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {data.siblings.map((s: any) => (
                <Link key={s.slug} to="/$lang/countries/$country/$city" params={{ lang, country: country.slug, city: s.slug }} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={s.hero_image} alt={s.name_en} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-4 text-cream font-display text-xl">{lang === "ar" ? s.name_ar : s.name_en}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}