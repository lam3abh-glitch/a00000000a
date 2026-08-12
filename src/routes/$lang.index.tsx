import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { GlobeHero } from "@/components/site/GlobeHero";
import { getHomeData } from "@/lib/content.functions";
import { type Lang, t, L, tx } from "@/lib/i18n";
import shapeAsia from "@/assets/continent-asia-australia.png";
import shapeEurope from "@/assets/continent-europe.png";
import shapeAfrica from "@/assets/continent-africa.png";
import shapeAmericas from "@/assets/continent-americas.png";

const homeQO = queryOptions({ queryKey: ["home"], queryFn: () => getHomeData() });

export const Route = createFileRoute("/$lang/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(homeQO),
  component: Home,
});

function Home() {
  const { lang } = useParams({ from: "/$lang/" }) as { lang: Lang };
  const { data } = useSuspenseQuery(homeQO);
  const tr = t[lang];
  const points = data.countries
    .filter((c: any) => c.latitude != null && c.longitude != null)
    .map((c: any) => ({ lat: Number(c.latitude), lng: Number(c.longitude), name: L(lang, c.name_ar, c.name_en), slug: c.slug }));
  const featured = data.countries.filter((c: any) => c.is_featured).slice(0, 12);
  const continentImages: Record<string, string> = {
    "asia-australia": "https://i0.wp.com/100region.com/wp-content/uploads/2022/03/img_3649.jpg",
    "europe": "https://i0.wp.com/100region.com/wp-content/uploads/2022/03/img_3749.jpg",
    "africa": "https://i0.wp.com/100region.com/wp-content/uploads/2022/03/img_3566.jpg",
    "americas": "https://i0.wp.com/100region.com/wp-content/uploads/2022/03/img_3579.jpg",
  };
  const continentShapes: Record<string, string> = {
    "asia-australia": shapeAsia,
    "europe": shapeEurope,
    "africa": shapeAfrica,
    "americas": shapeAmericas,
  };

  return (
    <>
      {/* HERO + GLOBE */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-[#3d4a5f]">
        <img
          src="https://i0.wp.com/100region.com/wp-content/uploads/2022/01/img_1371.jpg"
          alt="Ahmad"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3d4a5f]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3d4a5f]/90 via-[#3d4a5f]/50 to-[#3d4a5f]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3d4a5f]/30 via-transparent to-[#3d4a5f] pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-full md:w-[55%] lg:w-[50%] opacity-90">
          <GlobeHero points={points} lang={lang} />
        </div>
        <div className="relative z-10 mx-auto grid h-full max-w-7xl grid-cols-1 md:grid-cols-12 items-end md:items-center gap-8 px-6 pb-16 md:pb-0 text-cream pointer-events-none">
          <div className="md:col-span-7 max-w-2xl fade-up pointer-events-auto">
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#d4aa5a] mb-4">
              {tx(lang, "Bahrain • World")}
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-cream">
              {tr.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-cream/80 leading-relaxed">
              {tr.hero.sub}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/$lang/countries" params={{ lang }} className="bg-[#d4aa5a] text-[#2a3344] px-7 py-3 text-sm tracking-wide hover:bg-[#c49a4a] transition">
                {tr.hero.cta1}
              </Link>
              <Link to="/$lang/about" params={{ lang }} className="border border-cream/40 text-cream px-7 py-3 text-sm tracking-wide hover:border-[#d4aa5a] hover:text-[#d4aa5a] transition">
                {tr.hero.cta2}
              </Link>
            </div>
          </div>
          <div className="hidden md:block md:col-span-5" />
        </div>
      </section>

      {/* AHMAD INTRO */}
      <section className="bg-cream py-28">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src="https://i0.wp.com/100region.com/wp-content/uploads/2022/01/img_1371.jpg" alt="Ahmad" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">{tx(lang, "About Ahmad")}</div>
            <h2 className="font-display text-4xl md:text-5xl text-midnight">{tr.sections.introTitle}</h2>
            <div className="gold-divider w-24 my-8" />
            <p className="text-charcoal/80 leading-loose text-lg">
              {lang === "ar"
                ? "أحمد عبد الرحمن من مملكة البحرين. بدأ هواية السفر قبل أكثر من عشر سنوات بهدف بسيط: زيارة مئة دولة وأكثر. اليوم يوثّق ما رآه ليفيد الآخرين، ويبني مع كل رحلة جسوراً من المحبة والتعايش."
                : "Ahmad Abdulrahman, from the Kingdom of Bahrain. He began travelling more than ten years ago with one goal: to visit a hundred countries and beyond. Today he documents what he has seen so others can benefit, building bridges of love and coexistence with each trip."}
            </p>
            <div className="mt-10 flex items-center gap-10">
              <Stat n={`${data.countries.length}+`} l={tx(lang, "Countries")} />
              <Stat n={"4"} l={tx(lang, "Continents")} />
              <Stat n={"10+"} l={tx(lang, "Years")} />
            </div>
            <Link to="/$lang/about" params={{ lang }} className="mt-10 inline-block text-sm text-midnight border-b border-gold pb-1 hover:text-gold">
              {tr.sections.introCta} →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTINENTS */}
      <section className="bg-midnight text-cream py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">{tx(lang, "Continents")}</div>
              <h2 className="font-display text-4xl md:text-5xl">{tr.sections.byContinent}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {data.continents.map((c: any) => (
              <Link
                key={c.slug}
                to="/$lang/continents/$slug"
                params={{ lang, slug: c.slug }}
                className="group relative aspect-[16/10] overflow-hidden bg-midnight border border-cream/10"
              >
                {continentShapes[c.slug] && (
                  <img
                    src={continentShapes[c.slug]}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain p-8 opacity-90 transition duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                )}
                <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-midnight via-midnight/60 to-transparent">
                  <div className="font-display text-3xl md:text-4xl text-cream">{L(lang, c.name_ar, c.name_en)}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.3em] text-gold/80 opacity-0 group-hover:opacity-100 transition">{tr.sections.discover} →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="bg-cream py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">{tx(lang, "Destinations")}</div>
            <h2 className="font-display text-4xl md:text-5xl text-midnight">{tr.sections.countries}</h2>
            <div className="gold-divider w-24 mx-auto my-8" />
            <p className="text-charcoal/70 max-w-xl mx-auto">
              {lang === "ar" ? `${data.countries.length} دولة موثّقة عبر سنوات من السفر.` : `${data.countries.length} countries documented across years of travel.`}
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-8">
            {featured.concat(data.countries.filter((c: any) => !c.is_featured).slice(0, 24)).map((c: any) => (
              <Link
                key={c.slug}
                to="/$lang/countries/$slug"
                params={{ lang, slug: c.slug }}
                className="group text-center"
              >
                <div className="aspect-square rounded-full overflow-hidden group-hover:scale-105 transition shadow-sm border border-sand group-hover:border-gold">
                  {c.iso2 ? (
                    <img
                      src={`https://flagcdn.com/w320/${c.iso2.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w320/${c.iso2.toLowerCase()}.png 1x, https://flagcdn.com/w640/${c.iso2.toLowerCase()}.png 2x`}
                      alt={L(lang, c.name_ar, c.name_en)}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-sand/40 grid place-items-center">
                      <span className="text-3xl md:text-4xl">{c.flag_emoji}</span>
                    </div>
                  )}
                </div>
                <div className="mt-3 text-xs md:text-sm text-midnight group-hover:text-gold transition truncate">
                  {L(lang, c.name_ar, c.name_en)}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/$lang/countries" params={{ lang }} className="inline-block border border-midnight text-midnight px-8 py-3 text-sm tracking-wide hover:bg-midnight hover:text-cream transition">
              {tr.sections.countriesAll}
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      {data.featured && (
        <section className="bg-midnight text-cream py-28">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 relative aspect-[4/3] overflow-hidden">
              <img src={data.featured.hero_image ?? "https://i0.wp.com/100region.com/wp-content/uploads/2022/03/img_3749.jpg"} alt={data.featured.title_en} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="md:col-span-2">
              <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">{tr.sections.featured}</div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                {L(lang, data.featured.title_ar, data.featured.title_en)}
              </h2>
              <div className="gold-divider w-24 my-8" />
              <p className="text-cream/70 leading-loose">
                {L(lang, data.featured.excerpt_ar, data.featured.excerpt_en)}
              </p>
              <Link to="/$lang/stories/$slug" params={{ lang, slug: data.featured.slug }} className="mt-10 inline-block border-b border-gold pb-1 text-cream hover:text-gold">
                {tr.sections.readStory} →
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-midnight">{n}</div>
      <div className="text-xs uppercase tracking-widest text-charcoal/60 mt-1">{l}</div>
    </div>
  );
}