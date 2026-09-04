import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { type Lang, t } from "@/lib/i18n";

export const Route = createFileRoute("/$lang/stories/")({
  component: StoriesIndex,
});

type StoryCard = {
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  image: string;
  countryAr: string;
  countryEn: string;
  to: { country: string; topic: string };
};

const STORIES: StoryCard[] = [
  {
    titleAr: "قطار سيبيريا العظيم – خط سير أطول رحلة قطار في العالم",
    titleEn: "The Great Siberian Train — the longest railway journey in the world",
    excerptAr:
      "رحلة من فلاديفستوك إلى موسكو تمتد ٩٢٤٨ كيلومتراً متواصلة على متن أطول خط قطار في العالم، ست ليالٍ وسبعة أيام من الخيال السيبيري.",
    excerptEn:
      "A journey from Vladivostok to Moscow stretching 9,248 continuous kilometres aboard the longest railway in the world — six nights and seven days of Siberian wonder.",
    image: "https://i0.wp.com/100region.com/wp-content/uploads/2022/09/img_2582.jpg?ssl=1",
    countryAr: "روسيا",
    countryEn: "Russia",
    to: { country: "russia", topic: "trans-siberian-train" },
  },
];

function StoriesIndex() {
  const { lang } = useParams({ from: "/$lang/stories/" }) as { lang: Lang };
  const tr = t[lang];
  const ar = lang === "ar";

  return (
    <div className="bg-cream min-h-screen">
      <section className="bg-midnight text-cream py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-xs text-cream/60 mb-4">
            <Link to="/$lang" params={{ lang }} className="hover:text-gold">
              {tr.sections.world}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gold">{tr.nav.stories}</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl leading-tight">{tr.nav.stories}</h1>
          <div className="gold-divider w-24 my-8" />
          <p className="max-w-2xl text-cream/70 leading-loose">
            {ar
              ? "حكايات من الطريق: رحلات طويلة، مدن بعيدة، وتفاصيل صغيرة تبقى في الذاكرة."
              : "Tales from the road: long journeys, distant cities, and the small details that stay with you."}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-14">
          {STORIES.map((s) => (
            <Link
              key={s.to.topic}
              to="/$lang/countries/$country/guides/$topic"
              params={{ lang, country: s.to.country, topic: s.to.topic }}
              className="group grid md:grid-cols-5 gap-10 items-center"
            >
              <div className="md:col-span-3 relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={ar ? s.titleAr : s.titleEn}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="md:col-span-2">
                <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">
                  {ar ? s.countryAr : s.countryEn}
                </div>
                <h2 className="font-display text-3xl md:text-4xl leading-tight text-midnight">
                  {ar ? s.titleAr : s.titleEn}
                </h2>
                <div className="gold-divider w-20 my-6" />
                <p className="text-charcoal/75 leading-loose">{ar ? s.excerptAr : s.excerptEn}</p>
                <span className="mt-8 inline-block border-b border-gold pb-1 text-midnight group-hover:text-gold">
                  {tr.sections.readStory} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
