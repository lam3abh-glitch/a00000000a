import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { getCity } from "@/lib/content.functions";
import { type Lang, t } from "@/lib/i18n";
import { CITY_FEATURES, type Attraction } from "@/lib/city-attractions";

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
  const feature = country.slug === "france" ? CITY_FEATURES[city.slug] : undefined;

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
          {feature && (
            <div className={`mt-4 max-w-2xl text-cream/80 text-sm md:text-base ${lang === "ar" ? "text-right ml-auto" : "text-left"}`}>
              {lang === "ar" ? feature.tagline_ar : feature.tagline_en}
            </div>
          )}
        </div>
      </section>

      {feature ? (
        <>
          {/* INTRO */}
          <section className="py-20 md:py-24">
            <div className="mx-auto max-w-3xl px-6 text-center">
              <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">
                {lang === "ar" ? feature.section_title_ar : feature.section_title_en}
              </div>
              <div className={`space-y-6 ${lang === "ar" ? "text-right" : "text-left"} md:text-center`}>
                {(lang === "ar" ? feature.intro_ar : feature.intro_en).map((p, i) => (
                  <p key={i} className={i === 0 ? "font-display text-2xl md:text-3xl text-midnight leading-relaxed" : "text-base md:text-lg text-charcoal/80 leading-loose"}>
                    {p}
                  </p>
                ))}
              </div>
              <div className="gold-divider w-24 mx-auto mt-10" />
            </div>
          </section>

          {/* ATTRACTIONS — alternating layout */}
          <section className="pb-24">
            <div className="mx-auto max-w-6xl px-6 space-y-20 md:space-y-28">
              {feature.attractions.map((a: Attraction, i: number) => {
                const reverse = i % 2 === 1;
                const missingImage = a.image === "__missing__";
                return (
                  <article key={a.num} className="grid md:grid-cols-12 gap-6 md:gap-12 items-center">
                    {/* TEXT — always first on mobile, alternates on desktop */}
                    <div
                      className={`md:col-span-6 ${lang === "ar" ? "text-right" : "text-left"} ${reverse ? "md:order-2" : ""}`}
                    >
                      <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3 font-mono">
                        {lang === "ar" ? `معلم · ${a.num}` : `Landmark · ${a.num}`}
                      </div>
                      <h2 className="font-display text-2xl md:text-4xl text-midnight mb-4 leading-tight">
                        {lang === "ar" ? a.name_ar : a.name_en}
                      </h2>
                      <div className={`h-px w-16 bg-gold mb-4 ${lang === "ar" ? "ml-auto" : ""}`} />
                      <p className="text-sm md:text-lg text-charcoal/80 leading-loose">
                        {lang === "ar" ? a.desc_ar : a.desc_en}
                      </p>
                    </div>
                    {/* IMAGE — mobile-friendly size */}
                    <div className={`md:col-span-6 ${reverse ? "md:order-1" : ""}`}>
                      {missingImage ? (
                        <div className={`relative border border-dashed border-midnight/30 bg-cream/60 flex flex-col items-center justify-center text-center p-6 mx-auto max-w-sm md:max-w-none ${a.tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                          <div className="text-[10px] uppercase tracking-[0.3em] text-midnight/60 mb-2">
                            {lang === "ar" ? "الصورة الأصلية غير متاحة" : "Original image missing from old source"}
                          </div>
                          <a href={feature.source_url} target="_blank" rel="noreferrer" className="text-xs text-gold underline break-all">
                            {feature.source_url}
                          </a>
                        </div>
                      ) : (
                        <div className="relative overflow-hidden shadow-xl bg-midnight/5 group mx-auto max-w-sm md:max-w-none">
                          <img
                            src={a.image}
                            alt={lang === "ar" ? a.name_ar : a.name_en}
                            loading="lazy"
                            className={`w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 ${a.tall ? "aspect-[4/5] md:aspect-[4/5]" : "aspect-[4/3]"}`}
                          />
                          <div className="absolute top-0 left-0 bg-midnight text-cream px-3 py-1.5 text-[10px] tracking-[0.4em] font-mono">
                            {a.num}
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* CLOSING */}
          <section className="pb-24">
            <div className="mx-auto max-w-3xl px-6 text-center">
              <div className="gold-divider w-24 mx-auto mb-8" />
              <p className="font-display text-xl md:text-2xl text-midnight/80 italic">
                {lang === "ar" ? feature.closing_ar : feature.closing_en}
              </p>
            </div>
          </section>
        </>
      ) : (
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-lg leading-loose text-charcoal/80">{lang === "ar" ? city.content_ar : city.content_en}</p>
          </div>
        </section>
      )}

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