import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { GlobeHero } from "@/components/site/GlobeHero";
import { getHomeData } from "@/lib/content.functions";
import { type Lang, t } from "@/lib/i18n";

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
    .map((c: any) => ({ lat: Number(c.latitude), lng: Number(c.longitude), name: lang === "ar" ? c.name_ar : c.name_en, slug: c.slug }));
  const featured = data.countries.filter((c: any) => c.is_featured).slice(0, 12);
  const continentImages: Record<string, string> = {
    "asia-australia": "https://i0.wp.com/100region.com/wp-content/uploads/2022/03/img_3649.jpg",
    "europe": "https://i0.wp.com/100region.com/wp-content/uploads/2022/03/img_3749.jpg",
    "africa": "https://i0.wp.com/100region.com/wp-content/uploads/2022/03/img_3566.jpg",
    "americas": "https://i0.wp.com/100region.com/wp-content/uploads/2022/03/img_3579.jpg",
  };

  return (
    <>
      {/* HERO + GLOBE */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-midnight">
        <GlobeHero points={points} lang={lang} />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-transparent to-midnight pointer-events-none" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 text-cream">
          <div className="max-w-2xl fade-up">
            <div className="text-[11px] uppercase tracking-[0.4em] text-gold/80 mb-4">
              {lang === "ar" ? "بحرين • العالم" : "Bahrain • World"}
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-cream">
              {tr.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-cream/70 leading-relaxed">
              {tr.hero.sub}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/$lang/countries" params={{ lang }} className="bg-gold text-midnight px-7 py-3 text-sm tracking-wide hover:bg-gold/90 transition">
                {tr.hero.cta1}
              </Link>
              <Link to="/$lang/about" params={{ lang }} className="border border-cream/30 text-cream px-7 py-3 text-sm tracking-wide hover:border-gold hover:text-gold transition">
                {tr.hero.cta2}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AHMAD INTRO */}
      <section className="bg-cream py-28">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src="https://i0.wp.com/100region.com/wp-content/uploads/2022/01/img_1371.jpg" alt="Ahmad" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">{lang === "ar" ? "عن أحمد" : "About Ahmad"}</div>
            <h2 className="font-display text-4xl md:text-5xl text-midnight">{tr.sections.introTitle}</h2>
            <div className="gold-divider w-24 my-8" />
            <p className="text-charcoal/80 leading-loose text-lg">
              {lang === "ar"
                ? "أحمد عبد الرحمن من مملكة البحرين. بدأ هواية السفر قبل أكثر من عشر سنوات بهدف بسيط: زيارة مئة دولة وأكثر. اليوم يوثّق ما رآه ليفيد الآخرين، ويبني مع كل رحلة جسوراً من المحبة والتعايش."
                : "Ahmad Abdulrahman, from the Kingdom of Bahrain. He began travelling more than ten years ago with one goal: to visit a hundred countries and beyond. Today he documents what he has seen so others can benefit, building bridges of love and coexistence with each trip."}
            </p>
            <div className="mt-10 flex items-center gap-10">
              <Stat n={`${data.countries.length}+`} l={lang === "ar" ? "دولة" : "Countries"} />
              <Stat n={"4"} l={lang === "ar" ? "قارات" : "Continents"} />
              <Stat n={"10+"} l={lang === "ar" ? "سنوات" : "Years"} />
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
              <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">{lang === "ar" ? "القارات" : "Continents"}</div>
              <h2 className="font-display text-4xl md:text-5xl">{tr.sections.byContinent}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {data.continents.map((c: any) => (
              <Link
                key={c.slug}
                to="/$lang/continents/$slug"
                params={{ lang, slug: c.slug }}
                className="group relative aspect-[16/10] overflow-hidden"
              >
                <img src={continentImages[c.slug] ?? c.hero_image} alt={c.name_en} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-8">
                  <div className="font-display text-3xl md:text-4xl text-cream">{lang === "ar" ? c.name_ar : c.name_en}</div>
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
            <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">{lang === "ar" ? "الوجهات" : "Destinations"}</div>
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
                <div className="aspect-square rounded-full bg-sand/40 border border-sand grid place-items-center text-3xl md:text-4xl group-hover:border-gold group-hover:bg-cream transition shadow-sm">
                  <span>{c.flag_emoji}</span>
                </div>
                <div className="mt-3 text-xs md:text-sm text-midnight group-hover:text-gold transition truncate">
                  {lang === "ar" ? c.name_ar : c.name_en}
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
              <img src={data.featured.hero_image} alt={data.featured.title_en} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="md:col-span-2">
              <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">{tr.sections.featured}</div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                {lang === "ar" ? data.featured.title_ar : data.featured.title_en}
              </h2>
              <div className="gold-divider w-24 my-8" />
              <p className="text-cream/70 leading-loose">
                {lang === "ar" ? data.featured.excerpt_ar : data.featured.excerpt_en}
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