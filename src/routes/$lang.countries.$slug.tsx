import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { getCountry } from "@/lib/content.functions";
import { type Lang, t } from "@/lib/i18n";
import { WeatherByMonth } from "@/components/site/WeatherByMonth";
import ahmedParis from "@/assets/ahmed-paris.png.asset.json";
import { EiffelSketch } from "@/components/site/EiffelSketch";

const qo = (slug: string) => queryOptions({ queryKey: ["country", slug], queryFn: () => getCountry({ data: { slug } }) });

export const Route = createFileRoute("/$lang/countries/$slug")({
  loader: ({ context, params }) => context.queryClient.ensureQueryData(qo(params.slug)),
  component: Country,
});

function Country() {
  const { lang, slug } = useParams({ from: "/$lang/countries/$slug" }) as { lang: Lang; slug: string };
  const { data } = useSuspenseQuery(qo(slug));
  if (!data.country) throw notFound();
  const c: any = data.country;
  const tr = t[lang];
  const name = lang === "ar" ? c.name_ar : c.name_en;
  const continent = c.continent;

  return (
    <div className="bg-cream">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[480px] bg-midnight">
        <img src={c.hero_image} alt={name} className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-midnight/30" />
        <div className="relative z-10 mx-auto max-w-7xl h-full flex flex-col justify-end px-6 pb-16 text-cream">
          <div className="text-xs text-cream/60 mb-3">
            <Link to="/$lang" params={{ lang }} className="hover:text-gold">{tr.sections.world}</Link>
            <span className="mx-2">/</span>
            <Link to="/$lang/continents/$slug" params={{ lang, slug: continent.slug }} className="hover:text-gold">
              {lang === "ar" ? continent.name_ar : continent.name_en}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gold">{name}</span>
          </div>
          <div className="flex items-baseline gap-5">
            <span className="text-6xl md:text-7xl">{c.flag_emoji}</span>
            <h1 className="font-display text-5xl md:text-7xl">{name}</h1>
          </div>
          <div className="mt-4 text-sm text-cream/70 flex flex-wrap gap-x-8 gap-y-2">
            <span>{lang === "ar" ? "العاصمة:" : "Capital:"} {lang === "ar" ? c.capital_ar : c.capital_en}</span>
            <span>{lang === "ar" ? "العملة:" : "Currency:"} {c.currency}</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      {c.slug === "france" ? (
        <section className="relative py-28 overflow-hidden bg-gradient-to-b from-midnight via-midnight to-[#0d1226] text-cream">
          {/* subtle stars */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.25] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(245,199,74,0.35) 0.6px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* centered Eiffel sketch behind content */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <EiffelSketch className="h-[110%] w-auto text-cream/25" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
            {/* Elegant framed photo */}
            <div className="flex justify-center md:justify-start" dir="ltr">
              <div className="relative group">
                {/* thin gold frame */}
                <div className="absolute -inset-3 border border-gold/60" />
                <div className="absolute -inset-1 border border-gold/30" />
                <div className="relative overflow-hidden shadow-2xl">
                  <img
                    src={ahmedParis.url}
                    alt="Ahmed in Paris"
                    loading="lazy"
                    className="block w-72 md:w-80 h-auto object-cover grayscale-[0.15] group-hover:grayscale-0 transition duration-700"
                  />
                </div>
                <div className="mt-6 text-center">
                  <div className="text-[10px] uppercase tracking-[0.5em] text-gold/80">Paris · MMXXIV</div>
                  <div className="mt-2 h-px w-16 bg-gold/50 mx-auto" />
                </div>
              </div>
            </div>

            {/* Intro text */}
            <div className={lang === "ar" ? "text-right" : "text-left"}>
              <div className="text-[10px] uppercase tracking-[0.5em] text-gold mb-5">
                {lang === "ar" ? "مقدّمة" : "Introduction"}
              </div>
              <p className="font-display text-3xl md:text-4xl text-cream leading-snug whitespace-pre-line">
                {lang === "ar" ? c.intro_ar : c.intro_en}
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-16 bg-gold/60" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-cream/60">
                  {lang === "ar" ? "من دفتر رحلات أحمد" : "From Ahmed's travel notes"}
                </span>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">{lang === "ar" ? "مقدّمة" : "Introduction"}</div>
            <p className="font-display text-2xl md:text-3xl text-midnight leading-relaxed">
              {lang === "ar" ? c.intro_ar : c.intro_en}
            </p>
            <div className="gold-divider w-24 mx-auto mt-10" />
          </div>
        </section>
      )}

      {/* CITIES */}
      {data.cities.length > 0 && (
        <section className="py-20 bg-sand/20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">{lang === "ar" ? "المدن" : "Cities"}</div>
              <h2 className="font-display text-4xl text-midnight">{tr.sections.cities}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {data.cities.map((city: any, i: number) => (
                <Link
                  key={city.slug}
                  to="/$lang/countries/$country/$city"
                  params={{ lang, country: c.slug, city: city.slug }}
                  className="group relative flex flex-col items-center justify-end overflow-hidden rounded-2xl bg-midnight aspect-[3/4] border border-midnight/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  {city.hero_image && (
                    <img
                      src={city.hero_image}
                      alt={city.name_en}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
                  <div className="absolute top-3 left-3 text-[10px] tracking-[0.3em] text-gold/90 font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative z-10 w-full p-4 text-center">
                    <div className="font-display text-xl md:text-2xl text-cream leading-tight">
                      {lang === "ar" ? city.name_ar : city.name_en}
                    </div>
                    <div className="mt-2 mx-auto h-px w-8 bg-gold/70 group-hover:w-16 transition-all duration-500" />
                    <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-cream/60 group-hover:text-gold transition-colors">
                      {lang === "ar" ? "اكتشف ←" : "Explore →"}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED */}
      {c.slug === "uae" && <WeatherByMonth lang={lang} />}
      {(data.articles.length > 0 || data.itineraries.length > 0) && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
            {data.itineraries.length > 0 && (
              <div>
                <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">{tr.sections.relatedItineraries}</div>
                <div className="space-y-3">
                  {data.itineraries.map((i: any) => (
                    <Link key={i.slug} to="/$lang/itineraries/$slug" params={{ lang, slug: i.slug }} className="block border-t border-sand pt-3 hover:text-gold">
                      <div className="font-display text-xl text-midnight">{lang === "ar" ? i.title_ar : i.title_en}</div>
                      <div className="text-xs text-charcoal/60 mt-1">{i.duration_days} {lang === "ar" ? "أيام" : "days"}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {data.articles.length > 0 && (
              <div>
                <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">{tr.sections.culture}</div>
                <div className="space-y-3">
                  {data.articles.map((a: any) => (
                    <Link key={a.slug} to={a.kind === "story" ? "/$lang/stories/$slug" : "/$lang/cultures/$slug"} params={{ lang, slug: a.slug }} className="block border-t border-sand pt-3 hover:text-gold">
                      <div className="font-display text-xl text-midnight">{lang === "ar" ? a.title_ar : a.title_en}</div>
                      <div className="text-xs text-charcoal/60 mt-1 uppercase tracking-wider">{a.kind}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}