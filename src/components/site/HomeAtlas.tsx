import { Link } from "@tanstack/react-router";
import { ArrowUpLeft, ArrowUpRight, Compass, MapPin, Plane } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import shapeAsia from "@/assets/continent-asia.png";
import shapeOceania from "@/assets/continent-oceania.png";
import shapeEurope from "@/assets/continent-europe.png";
import shapeAfrica from "@/assets/continent-africa.png";
import shapeNorthAmerica from "@/assets/continent-north-america.png";
import shapeSouthAmerica from "@/assets/continent-south-america.png";
import prague from "@/assets/ahmad-prague.png.asset.json";
import norway from "@/assets/lysefjord-hero.png.asset.json";
import barcelona from "@/assets/sagrada-familia.webp.asset.json";
import kampala from "@/assets/wonder-world-kampala.webp.asset.json";

const continents = [
  { slug: "north-america", ar: "أمريكا الشمالية", en: "North America", image: shapeNorthAmerica, pos: "md:left-[2%] md:top-[8%] md:w-[28%]" },
  { slug: "south-america", ar: "أمريكا الجنوبية", en: "South America", image: shapeSouthAmerica, pos: "md:left-[19%] md:top-[48%] md:w-[18%]" },
  { slug: "europe", ar: "أوروبا", en: "Europe", image: shapeEurope, pos: "md:left-[39%] md:top-[7%] md:w-[23%]" },
  { slug: "africa", ar: "أفريقيا", en: "Africa", image: shapeAfrica, pos: "md:left-[43%] md:top-[39%] md:w-[19%]" },
  { slug: "asia", ar: "آسيا", en: "Asia", image: shapeAsia, pos: "md:left-[58%] md:top-[13%] md:w-[33%]" },
  { slug: "oceania", ar: "أستراليا", en: "Oceania", image: shapeOceania, pos: "md:left-[76%] md:top-[60%] md:w-[19%]" },
];

const destinations = [
  { slug: "czech-republic", ar: "براغ", en: "Prague", image: prague.url, rotate: "-rotate-2" },
  { slug: "norway", ar: "النرويج", en: "Norway", image: norway.url, rotate: "rotate-1" },
  { slug: "spain", ar: "برشلونة", en: "Barcelona", image: barcelona.url, rotate: "-rotate-1" },
  { slug: "uganda", ar: "كامبالا", en: "Kampala", image: kampala.url, rotate: "rotate-2" },
];

export function HomeAtlas({ lang }: { lang: Lang }) {
  const Arrow = lang === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section className="atlas-section relative overflow-hidden bg-cream py-20 md:py-28">
      <div className="atlas-grid pointer-events-none absolute inset-0 opacity-45" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.35em] text-atlas-teal">
            <span className="h-px w-10 bg-gold" />
            {lang === "ar" ? "أطلس الرحلات" : "Travel atlas"}
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-display text-4xl text-midnight md:text-6xl">
            {lang === "ar" ? "العالم كما رآه أحمد" : "The world through Ahmad’s eyes"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-charcoal/65">
            {lang === "ar"
              ? "اضغط على قارة، واتبع الحكايات والصور من مكانٍ إلى آخر."
              : "Choose a continent and follow the stories and photographs from place to place."}
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl overflow-hidden border-y border-atlas-teal/15 py-8 md:min-h-[610px] md:py-0">
          <div className="atlas-route absolute left-[12%] top-[39%] hidden w-[75%] border-t border-dashed border-atlas-teal/45 md:block" />
          <Plane aria-hidden="true" className="absolute left-[47%] top-[36%] hidden size-5 -rotate-12 text-gold md:block" />
          <div className="grid grid-cols-2 gap-3 md:block">
            {continents.map((continent, index) => (
              <Link
                key={continent.slug}
                to="/$lang/continents/$slug"
                params={{ lang, slug: continent.slug }}
                className={`atlas-continent group relative flex min-h-36 items-center justify-center overflow-hidden border border-atlas-teal/10 bg-card/45 p-3 transition duration-500 hover:z-20 hover:border-gold/60 hover:bg-card md:absolute md:min-h-0 md:border-0 md:bg-transparent md:p-0 ${continent.pos}`}
                aria-label={lang === "ar" ? continent.ar : continent.en}
              >
                <img
                  src={continent.image}
                  alt=""
                  aria-hidden="true"
                  className="h-full max-h-44 w-full object-contain opacity-75 mix-blend-multiply transition duration-500 group-hover:scale-105 group-hover:opacity-100 md:max-h-none"
                />
                <span className="absolute bottom-3 start-3 inline-flex items-center gap-1.5 bg-cream/90 px-2.5 py-1 text-xs text-midnight shadow-sm backdrop-blur md:bottom-[12%] md:start-1/2 md:-translate-x-1/2">
                  <MapPin className="size-3 text-gold" />
                  {lang === "ar" ? continent.ar : continent.en}
                </span>
                {index < 5 && <span className="absolute end-[12%] top-[20%] hidden size-2 rounded-full bg-gold shadow-[0_0_0_5px_color-mix(in_oklab,var(--gold)_18%,transparent)] md:block" />}
              </Link>
            ))}
          </div>

          <div className="absolute bottom-8 start-4 hidden max-w-32 -rotate-3 font-display text-lg leading-8 text-atlas-teal/75 lg:block">
            {lang === "ar" ? "كل بلد حكاية، وكل طريق ذكرى." : "Every country a story, every road a memory."}
          </div>
          <Compass aria-hidden="true" className="absolute bottom-8 end-5 hidden size-20 stroke-[0.7] text-atlas-teal/35 md:block" />
        </div>

        <div className="relative z-10 -mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4 md:-mt-14 md:gap-5">
          {destinations.map((destination) => (
            <Link
              key={destination.slug}
              to="/$lang/countries/$slug"
              params={{ lang, slug: destination.slug }}
              className={`group relative aspect-[4/5] overflow-hidden border-[6px] border-card bg-card shadow-[0_14px_35px_color-mix(in_oklab,var(--midnight)_16%,transparent)] transition duration-500 hover:z-20 hover:rotate-0 hover:-translate-y-2 ${destination.rotate}`}
            >
              <img src={destination.image} alt={lang === "ar" ? destination.ar : destination.en} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-midnight/90 to-transparent p-4 pt-12 text-cream">
                <span className="font-display text-xl">{lang === "ar" ? destination.ar : destination.en}</span>
                <Arrow className="size-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/$lang/countries"
            params={{ lang }}
            className="inline-flex items-center gap-3 border-b border-gold pb-2 text-sm text-midnight transition hover:text-atlas-teal"
          >
            {lang === "ar" ? "استكشف جميع الوجهات" : "Explore all destinations"}
            <Arrow className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}