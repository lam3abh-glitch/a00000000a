import { createFileRoute, useParams } from "@tanstack/react-router";
import { type Lang, t } from "@/lib/i18n";
import { useTx } from "@/lib/ui-i18n";

export const Route = createFileRoute("/$lang/about")({
  component: About,
});

function About() {
  const { lang } = useParams({ from: "/$lang/about" }) as { lang: Lang };
  const tx = useTx(lang);
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
            <p>
              {tx(
                "أحمد عبد الرحمن محمد، من مملكة البحرين. بدأت هوايتي للسفر والترحال قبل أكثر من عشر سنوات، بهدف واضح: زيارة مئة دولة وأكثر. وللهِ الحمد، تمكنت مؤخراً من إتمام هذا الهدف.",
                "Ahmad Abdulrahman Mohammed, from the Kingdom of Bahrain. I began travelling more than ten years ago with one clear goal: to visit a hundred countries and beyond. By God's grace, I recently completed that goal.",
              )}
            </p>
            <p>
              {tx(
                "أعمل اليوم على توثيق رحلاتي عبر مختلف وسائل التواصل ليستفيد منها الآخرون، ولنبني معاً علاقات محبة وتواصل أساسها السلام والتعايش. يسعدني تواصلكم والردّ على استفساراتكم في كل ما يخصّ السفر والترحال.",
                "Today I document my journeys across social platforms so others can benefit, and so that together we can build relationships of love and connection rooted in peace and coexistence. I'm always glad to hear from travellers and answer questions about the road.",
              )}
            </p>
            <p className="font-display text-2xl text-midnight">
              {tx(
                "«ما أضيق العيش لولا فسحة السفر»",
                "\u201cHow narrow life would be, were it not for the openness of travel.\u201d",
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}