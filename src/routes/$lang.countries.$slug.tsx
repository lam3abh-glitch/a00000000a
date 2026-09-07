import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { getCountry } from "@/lib/content.functions";
import { type Lang, t } from "@/lib/i18n";
import { WeatherByMonth } from "@/components/site/WeatherByMonth";
import ahmedParis from "@/assets/ahmed-paris.png.asset.json";
import stickerEiffel from "@/assets/sticker-eiffel.png";
import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import franceAnthem from "@/assets/france-anthem.mp4.asset.json";
import franceEmblem from "@/assets/france-emblem.png.asset.json";
import franceMap from "@/assets/france-map.png.asset.json";
import { guidesFor } from "@/lib/guides";
import { UgandaCountry } from "@/components/site/UgandaCountry";
import { SpainCountry } from "@/components/site/SpainCountry";
import { BelgiumCountry } from "@/components/site/BelgiumCountry";
import { FinlandCountry } from "@/components/site/FinlandCountry";
import { BulgariaCountry } from "@/components/site/BulgariaCountry";
import { NorwayCountry } from "@/components/site/NorwayCountry";
import { RussiaCountry } from "@/components/site/RussiaCountry";
import { CzechCountry } from "@/components/site/CzechCountry";
import { LatviaCountry } from "@/components/site/LatviaCountry";
import { UkraineCountry } from "@/components/site/UkraineCountry";
import { BrazilCountry } from "@/components/site/BrazilCountry";
import { ArmeniaCountry } from "@/components/site/ArmeniaCountry";
import { AlbaniaCountry } from "@/components/site/AlbaniaCountry";
import { GermanyCountry } from "@/components/site/GermanyCountry";
import { CubaCountry } from "@/components/site/CubaCountry";
import { IrelandCountry } from "@/components/site/IrelandCountry";
import { ScotlandCountry } from "@/components/site/ScotlandCountry";
import { MoroccoCountry } from "@/components/site/MoroccoCountry";
import { BritainCountry } from "@/components/site/BritainCountry";


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
          {(() => {
            const stats = c.slug === "uganda"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "كمبالا", value_en: "Kampala" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "شيلينغ أوغندي", value_en: "Ugandan shilling" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "24.2 مليون", value_en: "24.2 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "236,040 كم²", value_en: "236,040 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "الاسلام", value_en: "Islam" },
                  { label_ar: "الاستقلال", label_en: "Independence", value_ar: "1962", value_en: "1962" },
                ]
              : c.slug === "spain"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "مدريد", value_en: "Madrid" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "اليورو (€)", value_en: "Euro (€)" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "47.4 مليون", value_en: "47.4 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "505,990 كم²", value_en: "505,990 km²" },
                  { label_ar: "اللغة", label_en: "Language", value_ar: "الإسبانية", value_en: "Spanish" },
                  { label_ar: "نظام الحكم", label_en: "Government", value_ar: "مملكة دستورية", value_en: "Constitutional monarchy" },
                ]
              : c.slug === "belgium"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "بروكسل", value_en: "Brussels" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "اليورو", value_en: "Euro" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "11.3 مليون", value_en: "11.3 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "30,528 كم²", value_en: "30,528 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "المسيحية", value_en: "Christianity" },
                  { label_ar: "التأسيس", label_en: "Founded", value_ar: "1830", value_en: "1830" },
                ]
              : c.slug === "finland"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "هلسنكي", value_en: "Helsinki" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "اليورو", value_en: "Euro" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "5.5 مليون", value_en: "5.5 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "338,424 كم²", value_en: "338,424 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "المسيحية", value_en: "Christianity" },
                  { label_ar: "التأسيس", label_en: "Founded", value_ar: "1917", value_en: "1917" },
                ]
              : c.slug === "bulgaria"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "صوفيا", value_en: "Sofia" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "الليف البلغاري", value_en: "Bulgarian lev" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "6.4 مليون", value_en: "6.4 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "110,879 كم²", value_en: "110,879 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "المسيحية", value_en: "Christianity" },
                  { label_ar: "التأسيس", label_en: "Founded", value_ar: "681", value_en: "681" },
                ]
              : c.slug === "norway"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "اوسلو", value_en: "Oslo" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "كرونه نرويجية", value_en: "Norwegian krone" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "5.4 مليون", value_en: "5.4 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "385,207 كم²", value_en: "385,207 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "المسيحية", value_en: "Christianity" },
                  { label_ar: "التأسيس", label_en: "Founded", value_ar: "1905", value_en: "1905" },
                ]
              : c.slug === "russia"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "موسكو", value_en: "Moscow" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "الروبل الروسي", value_en: "Russian ruble" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "143.9 مليون", value_en: "143.9 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "17,075,400 كم²", value_en: "17,075,400 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "المسيحية", value_en: "Christianity" },
                  { label_ar: "التأسيس", label_en: "Founded", value_ar: "1991", value_en: "1991" },
                ]

              : c.slug === "latvia"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "ريغا", value_en: "Riga" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "اليورو", value_en: "Euro" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "1.9 مليون", value_en: "1.9 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "64,589 كم²", value_en: "64,589 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "المسيحية", value_en: "Christianity" },
                  { label_ar: "التأسيس", label_en: "Founded", value_ar: "1918", value_en: "1918" },
                ]
              : c.slug === "brazil"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "برازيليا", value_en: "Brasília" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "الريال البرازيلي", value_en: "Brazilian real" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "214 مليون", value_en: "214 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "8,515,767 كم²", value_en: "8,515,767 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "المسيحية", value_en: "Christianity" },
                  { label_ar: "التأسيس", label_en: "Founded", value_ar: "1822", value_en: "1822" },
                ]
              : c.slug === "ireland"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "دبلن", value_en: "Dublin" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "اليورو (€)", value_en: "Euro (€)" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "5.1 مليون", value_en: "5.1 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "70,273 كم²", value_en: "70,273 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "المسيحية", value_en: "Christianity" },
                  { label_ar: "التأسيس", label_en: "Founded", value_ar: "1922", value_en: "1922" },
                ]
              : c.slug === "scotland"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "أدنبرة", value_en: "Edinburgh" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "الجنيه الإسترليني", value_en: "Pound sterling" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "5.5 مليون", value_en: "5.5 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "77,933 كم²", value_en: "77,933 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "المسيحية", value_en: "Christianity" },
                  { label_ar: "اللغة", label_en: "Language", value_ar: "الإنجليزية والاسكتلندية", value_en: "English & Scots" },
                ]
              : c.slug === "morocco"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "الرباط", value_en: "Rabat" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "درهم مغربي", value_en: "Moroccan dirham" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "36.4 مليون", value_en: "36.4 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "710,850 كم²", value_en: "710,850 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "الاسلام", value_en: "Islam" },
                  { label_ar: "التأسيس", label_en: "Founded", value_ar: "400 ق.م", value_en: "400 BC" },
                ]
              : c.slug === "britain"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "لندن", value_en: "London" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "الجنيه الإسترليني", value_en: "Pound sterling" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "63.1 مليون", value_en: "63.1 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "242,495 كم²", value_en: "242,495 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "المسيحية", value_en: "Christianity" },
                  { label_ar: "التأسيس", label_en: "Founded", value_ar: "1927", value_en: "1927" },
                ]
              : c.slug === "cuba"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "هافانا", value_en: "Havana" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "بيزو كوبي", value_en: "Cuban peso" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "12.7 مليون", value_en: "12.7 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "109,886 كم²", value_en: "109,886 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "المسيحية", value_en: "Christianity" },
                  { label_ar: "التأسيس", label_en: "Founded", value_ar: "1868", value_en: "1868" },
                ]
              : c.slug === "ukraine"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "كييف", value_en: "Kyiv" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "هريفنيا اوكرانية", value_en: "Ukrainian hryvnia" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "42.4 مليون", value_en: "42.4 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "603,550 كم²", value_en: "603,550 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "المسيحية", value_en: "Christianity" },
                  { label_ar: "التأسيس", label_en: "Founded", value_ar: "1991", value_en: "1991" },
                ]
              : c.slug === "albania"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "تيرانا", value_en: "Tirana" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "ليك ألباني", value_en: "Albanian lek" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "3.1 مليون", value_en: "3.1 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "28,748 كم²", value_en: "28,748 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "المسيحية", value_en: "Christianity" },
                  { label_ar: "التأسيس", label_en: "Founded", value_ar: "1912", value_en: "1912" },
                ]
              : c.slug === "germany"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "برلين", value_en: "Berlin" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "اليورو", value_en: "Euro" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "80.7 مليون", value_en: "80.7 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "357,021 كم²", value_en: "357,021 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "المسيحية", value_en: "Christianity" },
                  { label_ar: "التأسيس", label_en: "Founded", value_ar: "1949", value_en: "1949" },
                ]
              : c.slug === "armenia"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "يريفان", value_en: "Yerevan" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "درام أرميني", value_en: "Armenian dram" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "3.2 مليون", value_en: "3.2 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "29,743 كم²", value_en: "29,743 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "المسيحية", value_en: "Christianity" },
                  { label_ar: "التأسيس", label_en: "Founded", value_ar: "1991", value_en: "1991" },
                ]
              : c.slug === "czech-republic"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: "براغ", value_en: "Prague" },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "كرونة تشيكية", value_en: "Czech koruna" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "10.6 مليون", value_en: "10.6 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "78,866 كم²", value_en: "78,866 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "المسيحية", value_en: "Christianity" },
                  { label_ar: "التأسيس", label_en: "Founded", value_ar: "1993", value_en: "1993" },
                ]
              : c.slug === "france"
              ? [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: c.capital_ar, value_en: c.capital_en },
                  { label_ar: "العملة", label_en: "Currency", value_ar: "اليورو (€)", value_en: "Euro (€)" },
                  { label_ar: "السكان", label_en: "Population", value_ar: "67.1 مليون", value_en: "67.1 million" },
                  { label_ar: "المساحة", label_en: "Area", value_ar: "674,843 كم²", value_en: "674,843 km²" },
                  { label_ar: "الديانة", label_en: "Religion", value_ar: "المسيحية", value_en: "Christianity" },
                  { label_ar: "التأسيس", label_en: "Founded", value_ar: "1958", value_en: "1958" },
                ]
              : [
                  { label_ar: "العاصمة", label_en: "Capital", value_ar: c.capital_ar, value_en: c.capital_en },
                  { label_ar: "العملة", label_en: "Currency", value_ar: c.currency, value_en: c.currency },
                ];
            if (!stats) return null;
            return (
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-cream/10 border border-cream/10 max-w-4xl">
                {stats.map((s, i) => (
                  <div key={i} className={`bg-midnight/40 backdrop-blur-sm px-4 py-3 ${lang === "ar" ? "text-right" : "text-left"}`}>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">
                      {lang === "ar" ? s.label_ar : s.label_en}
                    </div>
                    <div className="text-sm text-cream font-medium leading-tight">
                      {lang === "ar" ? s.value_ar : s.value_en}
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* INTRO */}
      {c.slug === "uganda" ? (
        <UgandaCountry lang={lang} intro={lang === "ar" ? c.intro_ar : c.intro_en} />
      ) : c.slug === "spain" ? (
        <SpainCountry lang={lang} intro={lang === "ar" ? c.intro_ar : c.intro_en} />
      ) : c.slug === "belgium" ? (
        <BelgiumCountry lang={lang} cityLabel={{ ar: "بروكسيل .. مدينة الجمال", en: "Brussels .. the city of beauty" }} />
      ) : c.slug === "finland" ? (
        <FinlandCountry lang={lang} />
      ) : c.slug === "bulgaria" ? (
        <BulgariaCountry lang={lang} />
      ) : c.slug === "norway" ? (
        <NorwayCountry lang={lang} />
      ) : c.slug === "russia" ? (
        <RussiaCountry lang={lang} />
      ) : c.slug === "latvia" ? (
        <LatviaCountry lang={lang} intro={lang === "ar" ? c.intro_ar : c.intro_en} />
      ) : c.slug === "ireland" ? (
        <IrelandCountry lang={lang} intro={lang === "ar" ? c.intro_ar : c.intro_en} />
      ) : c.slug === "scotland" ? (
        <ScotlandCountry lang={lang} intro={lang === "ar" ? c.intro_ar : c.intro_en} />
      ) : c.slug === "morocco" ? (
        <MoroccoCountry lang={lang} intro={lang === "ar" ? c.intro_ar : c.intro_en} />
      ) : c.slug === "britain" ? (
        <BritainCountry lang={lang} intro={lang === "ar" ? c.intro_ar : c.intro_en} />
      ) : c.slug === "cuba" ? (
        <CubaCountry lang={lang} intro={lang === "ar" ? c.intro_ar : c.intro_en} />
      ) : c.slug === "brazil" ? (
        <BrazilCountry lang={lang} intro={lang === "ar" ? c.intro_ar : c.intro_en} />
      ) : c.slug === "ukraine" ? (
        <UkraineCountry lang={lang} intro={lang === "ar" ? c.intro_ar : c.intro_en} />
      ) : c.slug === "albania" ? (
        <AlbaniaCountry lang={lang} intro={lang === "ar" ? c.intro_ar : c.intro_en} />
      ) : c.slug === "germany" ? (
        <GermanyCountry lang={lang} intro={lang === "ar" ? c.intro_ar : c.intro_en} />
      ) : c.slug === "armenia" ? (
        <ArmeniaCountry lang={lang} intro={lang === "ar" ? c.intro_ar : c.intro_en} />
      ) : c.slug === "czech-republic" ? (
        <CzechCountry lang={lang} intro={lang === "ar" ? c.intro_ar : c.intro_en} />

      ) : c.slug === "france" ? (
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

          {/* About France — compact text block */}
          <div className="relative z-10 mt-16 mx-auto max-w-3xl px-6">
            <div className={`flex items-center gap-3 mb-4 ${lang === "ar" ? "flex-row-reverse" : "flex-row"}`}>
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-mono">
                {lang === "ar" ? "٠٠ · نبذة" : "00 · About"}
              </span>
              <span className="h-px flex-1 bg-midnight/10" />
            </div>
            <p className={`font-body text-base md:text-lg text-midnight/85 leading-relaxed ${lang === "ar" ? "text-right" : "text-left"}`}>
              {lang === "ar"
                ? "فرنسا جمهورية دستورية في غرب أوروبا، شعارها حرية ومساواة وأخوة. بلد قديم يعود تكوينه للعصور الوسطى، وصل إلى أوج قوته في القرن 19 والقرن 20، وامتلك ثاني أكبر إمبراطورية استعمارية عام 1950. وهي من مؤسسي الاتحاد الأوروبي وأحد الأعضاء الدائمين في مجلس الأمن الدولي."
                : "France is a constitutional republic in Western Europe. Its motto is Liberty, Equality, and Fraternity. An ancient country formed in the Middle Ages, it reached its peak in the 19th and 20th centuries and held the second-largest colonial empire in 1950. It is a founding member of the European Union and a permanent member of the UN Security Council."}
            </p>
          </div>

          {/* National Anthem */}
          <div className="relative z-10 mt-16">
            <AnthemPlayer
              src={franceAnthem.url}
              lang={lang}
              title={lang === "ar" ? "النشيد الوطني لجمهورية فرنسا" : "National Anthem of the French Republic"}
            />
          </div>

          {/* Fact cards: Emblem + Map */}
          <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group relative bg-white border border-midnight/10 overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-gold font-mono z-10">
                  {lang === "ar" ? "٠١ · حقيقة" : "01 · Fact"}
                </div>
                <div className="pt-16 pb-8 px-8 flex items-center justify-center bg-gradient-to-b from-cream to-white min-h-[280px]">
                  <img src={franceEmblem.url} alt="France emblem" loading="lazy" className="max-h-56 w-auto object-contain drop-shadow-md" />
                </div>
                <div className={`border-t border-midnight/10 px-6 py-4 ${lang === "ar" ? "text-right" : "text-left"}`}>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-1">
                    {lang === "ar" ? "الشعار الوطني" : "National Emblem"}
                  </div>
                  <div className="font-display text-xl text-midnight">
                    {lang === "ar" ? "شعار الجمهورية الفرنسية" : "Emblem of the French Republic"}
                  </div>
                </div>
              </div>
              <div className="group relative bg-white border border-midnight/10 overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-gold font-mono z-10">
                  {lang === "ar" ? "٠٢ · حقيقة" : "02 · Fact"}
                </div>
                <div className="pt-12 pb-4 px-4 flex items-center justify-center bg-gradient-to-b from-cream to-white min-h-[280px]">
                  <img src={franceMap.url} alt="France map" loading="lazy" className="max-h-64 w-auto object-contain" />
                </div>
                <div className={`border-t border-midnight/10 px-6 py-4 ${lang === "ar" ? "text-right" : "text-left"}`}>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-1">
                    {lang === "ar" ? "الموقع الجغرافي" : "Geography"}
                  </div>
                  <div className="font-display text-xl text-midnight">
                    {lang === "ar" ? "فرنسا على الخريطة · العاصمة باريس" : "France on the map · Capital Paris"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="relative z-10 mt-16 mx-auto max-w-4xl px-6">
            <div className={`mb-4 flex items-center gap-3 ${lang === "ar" ? "justify-end" : "justify-start"}`}>
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-mono">
                {lang === "ar" ? "٠٣ · مشاهدة" : "03 · Watch"}
              </span>
              <span className="h-px flex-1 bg-midnight/10" />
            </div>
            <div className="relative overflow-hidden shadow-xl border border-midnight/10 bg-midnight" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/sEfJHnXY1Cg"
                title="France"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className={`mt-3 text-xs text-charcoal/60 ${lang === "ar" ? "text-right" : "text-left"}`}>
              {lang === "ar" ? "لمحة عن فرنسا" : "A glimpse of France"}
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
              <h2 className="font-display text-4xl text-midnight">
                {lang === "ar" ? `المدن التي زرتها في ${c.name_ar}` : `Cities I visited in ${c.name_en}`}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {(() => {
                const list = [...data.cities];
                const CZECH_ORDER = [
                  "kutna-hora", "prague", "ceske-budejovice", "olomouc", "melnik",
                  "tabor", "trebic", "brno", "karlovy-vary", "plzen",
                ];
                if (c.slug === "armenia") {
                  const ARMENIA_ORDER = ["yerevan", "villages"];
                  return list.sort(
                    (x: any, y: any) => ARMENIA_ORDER.indexOf(x.slug) - ARMENIA_ORDER.indexOf(y.slug),
                  );
                }
                if (c.slug === "czech-republic") {
                  return list.sort(
                    (x: any, y: any) => CZECH_ORDER.indexOf(x.slug) - CZECH_ORDER.indexOf(y.slug),
                  );
                }
                const a = list.findIndex((x: any) => x.slug === "madrid");
                const b = list.findIndex((x: any) => x.slug === "seville");
                if (a > -1 && b > -1) { const tmp = list[a]; list[a] = list[b]; list[b] = tmp; }
                return list;
              })().map((city: any, i: number) => (
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

      {/* GUIDE SECTIONS */}
      {guidesFor(c.slug).length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">
                {lang === "ar" ? "أقسام" : "Sections"}
              </div>
              <h2 className="font-display text-4xl text-midnight">
                {lang === "ar" ? `المزيد عن ${c.name_ar}` : `More about ${c.name_en}`}
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {guidesFor(c.slug).map((g, i) => (
                <Link
                  key={g.slug}
                  to="/$lang/countries/$country/guides/$topic"
                  params={{ lang, country: c.slug, topic: g.slug }}
                  className={`group relative flex items-end overflow-hidden rounded-2xl bg-midnight border border-midnight/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-44 ${i === 0 ? "md:col-span-2 h-56" : ""}`}
                >
                  <img
                    src={g.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/45 to-transparent" />
                  <div className={`absolute top-4 ${lang === "ar" ? "right-5" : "left-5"} font-mono text-[11px] tracking-[0.3em] text-gold/90`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className={`relative z-10 w-full p-6 ${lang === "ar" ? "text-right" : "text-left"}`}>
                    <div className="text-[10px] uppercase tracking-[0.35em] text-gold/90 mb-2">
                      {lang === "ar" ? g.kicker_ar : g.kicker_en}
                    </div>
                    <div className="font-display text-2xl md:text-3xl text-cream leading-snug">
                      {lang === "ar" ? g.title_ar : g.title_en}
                    </div>
                    <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-cream/60 group-hover:text-gold transition-colors">
                      {lang === "ar" ? "اقرأ ←" : "Read →"}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {c.slug === "uae" && <WeatherByMonth lang={lang} />}
    </div>
  );
}