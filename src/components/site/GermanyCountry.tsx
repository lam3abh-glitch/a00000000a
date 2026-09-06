import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import type { Lang } from "@/lib/i18n";

const IMG = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const AHMAD_GERMANY = IMG("2022/08/img_2096.jpg");
const EMBLEM_MAP = IMG("2022/04/img_4715.jpg");
const SCENE = IMG("2022/09/img_3480.jpg");
const ANTHEM = "https://videos.files.wordpress.com/oaALfQE5/my-movie-5-19.mp4";

const ABOUT = {
  ar: "هي جمهورية اتحادية ديمقراطية تقع في وسط غرب أوروبا ، تتكون من 16 ولاية ، وتتميز بمناخها الموسمي المعتدل ، وتعد ألمانيا الدولة الأوروبية الأكثر سكانا ، ومن أقوى دول الاتحاد الأوروبي وأوسعها نفوذا",
  en: "Germany is a democratic federal republic in west-central Europe, made up of 16 states and marked by a mild seasonal climate. It is the most populous country in Europe and one of the strongest and most influential members of the European Union.",
};

/** Bavarian rhombus (Wecken) lozenge pattern drawn in SVG. */
function BavarianLozenge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" aria-hidden className={className}>
      <g fill="currentColor" opacity="0.9">
        {[0, 30, 60, 90].map((x) => (
          <polygon key={x} points={`${x},0 ${x + 15},30 ${x},60 ${x - 15},30`} />
        ))}
      </g>
    </svg>
  );
}

export function GermanyCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
      {/* Black–red–gold wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,26,46,0.10) 0%, transparent 30%, rgba(198,40,40,0.08) 70%, rgba(212,175,55,0.14) 100%)",
        }}
      />
      {/* Half-timbered (Fachwerk) beams */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #1a1a2e 0 2px, transparent 2px 46px), repeating-linear-gradient(60deg, #1a1a2e 0 2px, transparent 2px 60px), repeating-linear-gradient(-60deg, #1a1a2e 0 2px, transparent 2px 60px)",
        }}
      />

      <BavarianLozenge className="absolute -top-2 left-0 w-56 md:w-80 text-[#3a6ea5]/20 pointer-events-none" />
      <BavarianLozenge className="absolute bottom-2 right-0 w-44 md:w-64 text-[#c62828]/15 pointer-events-none" />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[3deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-8 w-20 h-6 bg-gold/80 rotate-[7deg] z-20 shadow-sm" />
            <div className="absolute -top-4 right-6 w-16 h-5 bg-[#c62828]/60 rotate-[-9deg] z-20 shadow-sm" />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={AHMAD_GERMANY}
                alt={rtl ? "أحمد في ألمانيا" : "Ahmad in Germany"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-midnight text-lg" style={{ fontFamily: "cursive" }}>
                Deutschland · ألمانيا
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span className="inline-block bg-midnight text-cream text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[2deg] mb-6">
            {rtl ? "◆ مقدّمة" : "◆ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl text-midnight leading-snug whitespace-pre-line">{intro}</p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {["bg-midnight", "bg-[#c62828]", "bg-gold"].map((c) => (
              <span key={c} className={`h-2 w-14 ${c}`} />
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c62828] font-mono">
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1 bg-midnight/15" />
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className={`md:col-span-7 ${align}`}>
            <h3 className="font-display text-3xl md:text-4xl text-midnight mb-5">
              {rtl ? "جمهورية المانيا الاتحادية" : "The Federal Republic of Germany"}
            </h3>
            <p className="font-body text-base md:text-lg text-charcoal/85 leading-[1.95]">{ABOUT[lang]}</p>
          </div>
          <div className="md:col-span-5">
            <figure className="overflow-hidden rounded-2xl shadow-lg border border-midnight/10 md:-translate-x-4">
              <img
                src={SCENE}
                alt={rtl ? "مشاهد من ألمانيا" : "Scenes from Germany"}
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
          title={rtl ? "النشيد الوطني الالماني" : "The flag of the Federal Republic of Germany and the German national anthem"}
          theme={{
            bg: "bg-midnight",
            border: "border-gold/30",
            buttonBg: "bg-gold",
            buttonText: "text-midnight",
            buttonHoverBg: "hover:bg-[#c62828]",
            buttonHoverText: "hover:text-cream",
            accent: "text-gold",
            title: "text-cream",
            ping: "border-gold",
          }}
        />
      </div>

      {/* FACTS — emblem & map + video */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group relative bg-white border border-midnight/10 overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-[#c62828] font-mono z-10">
              {rtl ? "01 · حقيقة" : "01 · Fact"}
            </div>
            <div className="pt-16 pb-8 px-6 flex items-center justify-center bg-gradient-to-b from-cream to-white min-h-[280px]">
              <img
                src={EMBLEM_MAP}
                alt={rtl ? "شعار وخارطة جمهورية المانيا" : "Emblem and map of the Federal Republic of Germany"}
                loading="lazy"
                className="max-h-60 w-auto object-contain drop-shadow-md"
              />
            </div>
            <div className={`border-t border-midnight/10 px-6 py-4 ${align}`}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-1">
                {rtl ? "الشعار والموقع" : "Emblem & Geography"}
              </div>
              <div className="font-display text-xl text-midnight">
                {rtl ? "شعار وخارطة جمهورية المانيا" : "Emblem and map of the Federal Republic of Germany"}
              </div>
            </div>
          </div>

          <div className="relative bg-midnight text-cream border border-midnight overflow-hidden shadow-md flex flex-col">
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-gold font-mono z-10">
              {rtl ? "02 · مشاهدة" : "02 · Watch"}
            </div>
            <BavarianLozenge className="absolute -bottom-4 -right-6 w-48 text-cream/10 pointer-events-none" />
            <div className={`relative pt-16 px-7 ${align}`}>
              <h3 className="font-display text-2xl md:text-3xl mb-4">
                {rtl ? "السياحة في ميونخ ألمانيا" : "Tourism in Munich, Germany"}
              </h3>
            </div>
            <div className="relative mt-auto px-7 pb-7">
              <div className="overflow-hidden border border-cream/20 bg-midnight" style={{ aspectRatio: "16 / 9" }}>
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/Bune-mLhGCo"
                  title={rtl ? "السياحة في ميونخ ألمانيا" : "Tourism in Munich, Germany"}
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
