import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { getCountry } from "@/lib/content.functions";
import { type Lang, t } from "@/lib/i18n";
import { WeatherByMonth } from "@/components/site/WeatherByMonth";
import ahmedParis from "@/assets/ahmed-paris.png.asset.json";
import stickerEiffel from "@/assets/sticker-eiffel.png";
import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import franceAnthem from "@/assets/france-anthem.mp4.asset.json";

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
        <section className="relative py-24 overflow-hidden bg-cream">
          {/* subtle background dots */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.12] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, #1a1a2e 1px, transparent 1.5px)", backgroundSize: "22px 22px" }}
          />

          {/* Real Eiffel Tower sketch — corner accents with glowing lights */}
          <div aria-hidden className="absolute top-6 left-4 md:left-10 pointer-events-none">
            <div className="relative">
              <img src={stickerEiffel} alt="" loading="lazy" className="w-28 md:w-40 rotate-[-6deg] drop-shadow-xl" />
              {/* twinkling gold lights over the tower */}
              {[
                { top: "18%", left: "48%", d: 0.4 },
                { top: "34%", left: "42%", d: 1.2 },
                { top: "34%", left: "56%", d: 2.0 },
                { top: "52%", left: "38%", d: 0.8 },
                { top: "52%", left: "60%", d: 1.6 },
                { top: "70%", left: "34%", d: 0.2 },
                { top: "70%", left: "64%", d: 1.4 },
              ].map((s, i) => (
                <span
                  key={i}
                  className="absolute block w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_2px_rgba(245,199,74,0.9)]"
                  style={{ top: s.top, left: s.left, animation: `twinkle 2.2s ease-in-out ${s.d}s infinite` }}
                />
              ))}
            </div>
          </div>
          <div aria-hidden className="absolute bottom-8 right-4 md:right-12 pointer-events-none">
            <div className="relative">
              <img src={stickerEiffel} alt="" loading="lazy" className="w-24 md:w-32 rotate-[8deg] opacity-90 drop-shadow-xl" />
              {[
                { top: "22%", left: "50%", d: 0.6 },
                { top: "40%", left: "44%", d: 1.5 },
                { top: "56%", left: "56%", d: 0.9 },
                { top: "72%", left: "40%", d: 1.8 },
              ].map((s, i) => (
                <span
                  key={i}
                  className="absolute block w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_2px_rgba(245,199,74,0.9)]"
                  style={{ top: s.top, left: s.left, animation: `twinkle 2.4s ease-in-out ${s.d}s infinite` }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Polaroid photo */}
            <div className="relative flex justify-center md:justify-start" dir="ltr">
              <div className="relative rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-4 left-6 w-20 h-6 bg-gold/70 rotate-[-6deg] z-20 shadow-sm" />
                <div className="absolute -top-4 right-8 w-16 h-5 bg-terracotta/60 rotate-[10deg] z-20 shadow-sm" />
                <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
                  <img src={ahmedParis.url} alt="Ahmed in Paris" className="block w-full h-auto object-cover" loading="lazy" />
                  <div className="mt-4 text-center font-display text-midnight text-lg" style={{ fontFamily: "cursive" }}>
                    Paris · باريس
                  </div>
                </div>
              </div>
            </div>

            {/* Intro text */}
            <div className={lang === "ar" ? "text-right" : "text-left"}>
              <span className="inline-block bg-midnight text-cream text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[-2deg] mb-6">
                {lang === "ar" ? "★ مقدّمة" : "★ Introduction"}
              </span>
              <p className="font-display text-3xl md:text-4xl text-midnight leading-snug whitespace-pre-line">
                {lang === "ar" ? c.intro_ar : c.intro_en}
              </p>
            </div>
          </div>

          <style>{`@keyframes twinkle { 0%,100% { opacity: 0.35; transform: scale(0.8);} 50% { opacity: 1; transform: scale(1.3);} }`}</style>
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