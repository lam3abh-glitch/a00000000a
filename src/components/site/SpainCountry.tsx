import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import type { Lang } from "@/lib/i18n";

const IMG = (name: string, month: string) =>
  `https://i0.wp.com/100region.com/wp-content/uploads/${month}/${name}?ssl=1`;

const AHMAD_SPAIN = IMG("img_0849.jpg", "2023/04");
const EMBLEM_MAP = IMG("img_4700.jpg", "2022/04");

const LANDSCAPE = IMG("img_3652-1.jpg", "2022/03");
const ANTHEM = "https://videos.files.wordpress.com/N1M9ZE9R/my-movie-5-18.mp4";

const ABOUT = {
  ar: "هي دولة عضو في الاتحاد الاوروبي تقع في جنوب غرب اوروبا في شبه الجزيرة الأيبيرية ، يجد برها الرئيسي من الجنوب والشرق البحر الأبيض المتوسط ، باستثناء الحدود البرية الصغيرة مع اقليم ما وراء البحار البريطاني جبل طارق ، يحدها من الشمال فرنسا وأندورا وخليج بسكاي ، والى الشمال الغربي والغرب المحيط الأطلسي والبرتغال",
  en: "Spain is a member state of the European Union, located in south-western Europe on the Iberian Peninsula. Its mainland meets the Mediterranean Sea to the south and east, apart from a small land border with the British overseas territory of Gibraltar. To the north it is bordered by France, Andorra and the Bay of Biscay, and to the north-west and west by the Atlantic Ocean and Portugal.",
};

/** Simple azulejo-style tile motif drawn in SVG (no external assets). */
function Azulejo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <rect width="100" height="100" fill="none" />
      <g stroke="currentColor" strokeWidth="2.5" fill="none">
        <path d="M50 6 L94 50 L50 94 L6 50 Z" />
        <path d="M50 24 L76 50 L50 76 L24 50 Z" />
        <circle cx="50" cy="50" r="9" />
        <path d="M50 0 L50 16 M50 84 L50 100 M0 50 L16 50 M84 50 L100 50" />
      </g>
    </svg>
  );
}

export function SpainCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
      {/* Warm Mediterranean wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--saffron) 14%, transparent) 0%, transparent 38%, color-mix(in oklab, var(--carmine) 8%, transparent) 100%)",
        }}
      />
      {/* Andalusian tile lattice */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--carmine) 0 1.5px, transparent 1.5px 18px), repeating-linear-gradient(-45deg, var(--azulejo) 0 1.5px, transparent 1.5px 18px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Corner tiles */}
      <Azulejo className="absolute -top-6 left-2 md:left-8 w-28 md:w-40 text-azulejo/25 pointer-events-none" />
      <Azulejo className="absolute bottom-4 right-2 md:right-10 w-24 md:w-32 text-carmine/20 pointer-events-none" />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-6 w-20 h-6 bg-saffron/75 rotate-[-6deg] z-20 shadow-sm" />
            <div className="absolute -top-4 right-8 w-16 h-5 bg-carmine/55 rotate-[10deg] z-20 shadow-sm" />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={AHMAD_SPAIN}
                alt={rtl ? "أحمد في إسبانيا" : "Ahmad in Spain"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-midnight text-lg" style={{ fontFamily: "cursive" }}>
                España · إسبانيا
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span className="inline-block bg-carmine text-cream text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[-2deg] mb-6">
            {rtl ? "◆ مقدّمة" : "◆ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl text-carmine leading-snug whitespace-pre-line">{intro}</p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {["bg-carmine", "bg-saffron", "bg-azulejo", "bg-olive"].map((c) => (
              <span key={c} className={`h-1.5 w-10 ${c}`} />
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT — مملكة اسبانيا */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-carmine font-mono">
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1 bg-carmine/15" />
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className={`md:col-span-7 ${align}`}>
            <h3 className="font-display text-3xl md:text-4xl text-carmine mb-5">
              {rtl ? "مملكة اسبانيا" : "The Kingdom of Spain"}
            </h3>
            <p className="font-body text-base md:text-lg text-charcoal/85 leading-[1.95]">{ABOUT[lang]}</p>
          </div>
          <div className="md:col-span-5 space-y-4">
            <figure className="overflow-hidden rounded-2xl shadow-lg border border-carmine/10 md:translate-x-4">
              <img
                src={LANDSCAPE}
                alt={rtl ? "مشاهد من اسبانيا" : "Scenes from Spain"}
                loading="lazy"
                className="h-48 md:h-56 w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </div>

      {/* ANTHEM */}
      <div className="relative z-10 mt-20">
        <AnthemPlayer
          src={ANTHEM}
          lang={lang}
          title={rtl ? "علم مملكة اسبانيا والنشيد الوطني" : "The flag of the Kingdom of Spain and the national anthem"}
        />
      </div>

      {/* FACTS — emblem & map + video */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group relative bg-white border border-carmine/10 overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-carmine font-mono z-10">
              {rtl ? "01 · حقيقة" : "01 · Fact"}
            </div>
            <div className="pt-16 pb-8 px-6 flex items-center justify-center bg-gradient-to-b from-cream to-white min-h-[280px]">
              <img
                src={EMBLEM_MAP}
                alt={rtl ? "شعار وخارطة مملكة اسبانيا" : "Emblem and map of the Kingdom of Spain"}
                loading="lazy"
                className="max-h-60 w-auto object-contain drop-shadow-md"
              />
            </div>
            <div className={`border-t border-carmine/10 px-6 py-4 ${align}`}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-1">
                {rtl ? "الشعار والموقع" : "Emblem & Geography"}
              </div>
              <div className="font-display text-xl text-carmine">
                {rtl ? "شعار وخارطة مملكة اسبانيا" : "Emblem and map of the Kingdom of Spain"}
              </div>
            </div>
          </div>

          <div className="relative bg-carmine text-cream border border-carmine overflow-hidden shadow-md flex flex-col">
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-saffron font-mono z-10">
              {rtl ? "02 · مشاهدة" : "02 · Watch"}
            </div>
            <Azulejo className="absolute -bottom-8 -right-8 w-40 text-cream/10 pointer-events-none" />
            <div className={`relative pt-16 px-7 ${align}`}>
              <h3 className="font-display text-2xl md:text-3xl mb-4">
                {rtl ? "السياحة في اسبانيا" : "Travelling through Spain"}
              </h3>
            </div>
            <div className="relative mt-auto px-7 pb-7">
              <div className="overflow-hidden border border-cream/20 bg-midnight" style={{ aspectRatio: "16 / 9" }}>
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/eWlKyRpLVWs"
                  title={rtl ? "السياحة في اسبانيا" : "Tourism in Spain"}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
