import { createFileRoute, useParams } from "@tanstack/react-router";
import { type Lang, t } from "@/lib/i18n";

export const Route = createFileRoute("/$lang/about")({
  component: About,
});

function About() {
  const { lang } = useParams({ from: "/$lang/about" }) as { lang: Lang };
  return (
    <div className="bg-cream pt-32 pb-24 min-h-screen">
      <div className="mx-auto max-w-4xl px-6 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 relative aspect-[3/4] overflow-hidden">
          <img src="https://i0.wp.com/100region.com/wp-content/uploads/2023/03/image-5.jpg" alt="Ahmad" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">{t[lang].nav.about}</div>
          <h1 className="font-display text-5xl text-midnight">{t[lang].about.title}</h1>
          <div className="gold-divider w-24 my-8" />
          <div className="space-y-6 text-lg leading-loose text-charcoal/80">
            <p>{t[lang].about.p1}</p>
            <p>{t[lang].about.p2}</p>
            <p className="font-display text-2xl text-midnight">{t[lang].about.quote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}