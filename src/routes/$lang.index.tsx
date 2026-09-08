import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight, Compass, MapPin } from "lucide-react";
import { GlobeHero } from "@/components/site/GlobeHero";
import { getHomeData } from "@/lib/content.functions";
import { type Lang, t } from "@/lib/i18n";
import shapeAsia from "@/assets/continent-asia.png";
import shapeOceania from "@/assets/continent-oceania.png";
import shapeEurope from "@/assets/continent-europe.png";
import shapeAfrica from "@/assets/continent-africa.png";
import shapeNorthAmerica from "@/assets/continent-north-america.png";
import shapeSouthAmerica from "@/assets/continent-south-america.png";
import turkishCyprusFlag from "@/assets/turkish-cyprus-flag.png.asset.json";

const homeQO = queryOptions({ queryKey: ["home"], queryFn: () => getHomeData() });

export const Route = createFileRoute("/$lang/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(homeQO),
  head: ({ params }) => {
    const arabic = params.lang !== "en";
    const title = arabic ? "سفير المحبة | رحلات أحمد حول العالم" : "Ambassador of Love | Ahmad's World Travels";
    const description = arabic
      ? "رحلات أحمد من البحرين إلى 122 دولة: وجهات ومدن وثقافات وقصص موثقة من حول العالم."
      : "Ahmad's journeys from Bahrain across 122 countries, with documented destinations, cities, cultures and stories.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
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
  const spotlightCountries = featured.slice(0, 5);
  const continentShapes: Record<string, string> = {
    "asia": shapeAsia,
    "oceania": shapeOceania,
    "europe": shapeEurope,
    "africa": shapeAfrica,
    "north-america": shapeNorthAmerica,
    "south-america": shapeSouthAmerica,
  };

  return (
    <main className="overflow-hidden bg-atlas-paper">
      <section className="relative min-h-[720px] h-[92svh] max-h-[940px] w-full overflow-hidden bg-atlas text-atlas-paper">
        <img
          src="https://i0.wp.com/100region.com/wp-content/uploads/2022/01/img_1371.jpg"
          alt={lang === "ar" ? "أحمد عبد الرحمن خلال إحدى رحلاته" : "Ahmad Abdulrahman during one of his journeys"}
          className="absolute inset-0 h-full w-full object-cover object-[44%_center] opacity-55 md:w-[58%] md:opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-atlas via-atlas/35 to-atlas/70 md:bg-gradient-to-l md:from-atlas md:via-atlas/90 md:to-atlas/10" />
        <div className="absolute inset-y-0 left-0 w-full opacity-50 md:w-[58%] md:opacity-95">
          <GlobeHero points={points} lang={lang} />
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(var(--atlas-paper) 1px, transparent 1px), linear-gradient(90deg, var(--atlas-paper) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-16 pt-28 md:items-center md:pb-8 lg:px-10">
          <div className="pointer-events-auto max-w-2xl fade-up md:ms-auto md:w-[52%]">
            <div className="mb-5 flex items-center gap-3 text-xs font-medium text-atlas-gold">
              <MapPin size={15} aria-hidden="true" />
              <span>{lang === "ar" ? "من مملكة البحرين إلى العالم" : "From the Kingdom of Bahrain to the world"}</span>
            </div>
            <h1 className="font-display text-5xl leading-[1.12] text-atlas-paper sm:text-6xl lg:text-8xl">
              {lang === "ar" ? <>سفير المحبة<br /><span className="text-atlas-gold">أحمد عبد الرحمن</span></> : <>Ambassador of Love<br /><span className="text-atlas-gold">Ahmad Abdulrahman</span></>}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-atlas-paper/75 md:text-lg">
              {tr.hero.sub}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/$lang/countries" params={{ lang }} className="inline-flex items-center gap-3 bg-atlas-gold px-6 py-3.5 text-sm font-semibold text-atlas transition hover:bg-atlas-paper">
                {tr.hero.cta1} {lang === "ar" ? <ArrowLeft size={17} /> : <ArrowRight size={17} />}
              </Link>
              <Link to="/$lang/about" params={{ lang }} className="border-b border-atlas-paper/40 px-1 py-2 text-sm text-atlas-paper transition hover:border-atlas-gold hover:text-atlas-gold">
                {tr.hero.cta2}
              </Link>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 border-y border-atlas-paper/15 py-5">
              <HeroStat n="122+" l={lang === "ar" ? "دولة" : "Countries"} />
              <HeroStat n="6" l={lang === "ar" ? "قارات" : "Continents"} />
              <HeroStat n="250+" l={lang === "ar" ? "مدينة" : "Cities"} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-6 z-20 hidden items-center gap-3 text-[11px] text-atlas-paper/55 md:flex lg:left-10">
          <span className="h-px w-10 bg-atlas-gold" />
          {lang === "ar" ? "حرّك الكرة واكتشف الوجهات" : "Move the globe and discover destinations"}
        </div>
      </section>

      <section className="bg-atlas-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-atlas-red"><Compass size={15} /> {lang === "ar" ? "افتح الأطلس" : "Open the atlas"}</div>
              <h2 className="font-display text-4xl leading-tight text-atlas md:text-6xl">{tr.sections.byContinent}</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-atlas/65">{lang === "ar" ? "كل علامة على الخريطة تحمل مدينة وقصة وصوراً جمعها أحمد عبر سنوات من السفر." : "Every point on the map holds a city, a story and photographs Ahmad gathered over years of travel."}</p>
          </div>

          <div className="grid auto-rows-[210px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {data.continents.map((c: any, index: number) => (
              <Link
                key={c.slug}
                to="/$lang/continents/$slug"
                params={{ lang, slug: c.slug }}
                className={`group relative overflow-hidden bg-atlas text-atlas-paper ${index === 0 || index === 5 ? "sm:col-span-2" : ""} ${index === 0 ? "lg:row-span-2" : ""}`}
              >
                {continentShapes[c.slug] && (
                  <img
                    src={continentShapes[c.slug]}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain p-7 opacity-20 transition duration-700 group-hover:scale-105 group-hover:opacity-30"
                  />
                )}
                <span className="absolute end-5 top-4 font-display text-5xl text-atlas-paper/10">0{index + 1}</span>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-atlas via-atlas/80 to-transparent p-6">
                  <div className="font-display text-3xl text-atlas-paper md:text-4xl">{lang === "ar" ? c.name_ar : c.name_en}</div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-atlas-gold opacity-80 transition group-hover:gap-4">{tr.sections.discover} {lang === "ar" ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-atlas/10 bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="mb-3 text-xs font-semibold text-atlas-red">{lang === "ar" ? "وجهات مختارة" : "Selected destinations"}</div>
              <h2 className="font-display max-w-3xl text-4xl leading-tight text-atlas md:text-6xl">{tr.sections.countries}</h2>
            </div>
            <Link to="/$lang/countries" params={{ lang }} className="inline-flex items-center gap-2 border-b border-atlas-gold pb-2 text-sm font-semibold text-atlas transition hover:text-atlas-red">
              {tr.sections.countriesAll} {lang === "ar" ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden border border-atlas/15 bg-atlas/15 md:grid-cols-5">
            {spotlightCountries.map((c: any, index: number) => (
              <Link
                key={c.slug}
                to="/$lang/countries/$slug"
                params={{ lang, slug: c.slug }}
                className={`group relative min-h-56 overflow-hidden bg-atlas ${index === 0 ? "col-span-2 md:row-span-2 md:min-h-[460px]" : ""}`}
              >
                {c.hero_image && <img src={c.hero_image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105" />}
                <div className="absolute inset-0 bg-gradient-to-t from-atlas via-atlas/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-atlas-paper">
                  <span className="font-display text-2xl md:text-3xl">
                  {lang === "ar" ? c.name_ar : c.name_en}
                  </span>
                  <span className="text-2xl">{c.flag_emoji}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-12">
            {featured.concat(data.countries.filter((c: any) => !c.is_featured)).slice(5, 29).map((c: any) => (
              <Link key={c.slug} to="/$lang/countries/$slug" params={{ lang, slug: c.slug }} className="group text-center" title={lang === "ar" ? c.name_ar : c.name_en}>
                <div className="mx-auto aspect-square max-w-14 overflow-hidden rounded-full border border-atlas/15 bg-atlas-paper transition group-hover:-translate-y-1 group-hover:border-atlas-gold">
                  {c.slug === "northern-cyprus" ? <img src={turkishCyprusFlag.url} alt="" loading="lazy" className="h-full w-full object-cover" /> : c.iso2 ? <img src={`https://flagcdn.com/w160/${c.iso2.toLowerCase()}.png`} alt="" loading="lazy" className="h-full w-full object-cover" /> : <span className="grid h-full place-items-center text-2xl">{c.flag_emoji}</span>}
                </div>
                <span className="mt-2 block truncate text-[11px] text-atlas/65 group-hover:text-atlas">{lang === "ar" ? c.name_ar : c.name_en}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-atlas py-20 text-atlas-paper md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-12 md:items-center lg:px-10">
          <div className="relative aspect-[4/3] overflow-hidden md:col-span-7">
            <img
              src="https://i0.wp.com/100region.com/wp-content/uploads/2022/09/img_2582.jpg?ssl=1"
              alt={lang === "ar" ? "قطار سيبيريا العظيم" : "Trans-Siberian train"}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 border-[12px] border-atlas/15" />
          </div>
          <div className="md:col-span-5 md:-ms-16 md:bg-atlas md:p-10">
            <div className="mb-4 text-xs font-semibold text-atlas-gold">{tr.sections.featured}</div>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              {lang === "ar"
                ? "قطار سيبيريا العظيم – خط سير أطول رحلة قطار في العالم"
                : "The Great Siberian Train — the longest railway journey in the world"}
            </h2>
            <div className="my-7 h-px w-24 bg-atlas-gold" />
            <p className="leading-8 text-atlas-paper/70">
              {lang === "ar"
                ? "رحلة من فلاديفستوك إلى موسكو تمتد ٩٢٤٨ كيلومتراً متواصلة على متن أطول خط قطار في العالم، ست ليالي سبعة أيام من الخيال السيبيري."
                : "A journey from Vladivostok to Moscow stretching 9,248 continuous kilometres aboard the longest railway in the world — six nights and seven days of Siberian wonder."}
            </p>
            <Link
              to="/$lang/countries/$country/guides/$topic"
              params={{ lang, country: "russia", topic: "trans-siberian-train" }}
              className="mt-8 inline-flex items-center gap-2 border-b border-atlas-gold pb-2 text-atlas-paper transition hover:text-atlas-gold"
            >
              {tr.sections.readStory} {lang === "ar" ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroStat({ n, l }: { n: string; l: string }) {
  return (
    <div className="border-e border-atlas-paper/15 px-3 first:px-s-0 last:border-0">
      <div className="font-display text-3xl text-atlas-paper md:text-4xl">{n}</div>
      <div className="mt-1 text-xs text-atlas-paper/55">{l}</div>
    </div>
  );
}