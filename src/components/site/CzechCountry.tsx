import type { Lang } from "@/lib/i18n";
import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import czechAnthem from "@/assets/czech-anthem.m4a.asset.json";
import ahmadPrague from "@/assets/ahmad-prague.png.asset.json";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const EMBLEM_MAP = U("2022/04/img_4507.jpg");
const FLAG = U("2022/03/img_3726.jpg");
const SCENE_B = U("2022/01/fe6899f5-f38c-4ba6-bf18-76e1a58d13b4.jpg");
const ANTHEM_VIDEO = "https://www.youtube.com/embed/jnLgBMLDGDI";

const HEADINGS = {
  ar: {
    title: "جمهورية التشيك",
    crown: "التشيك بلاد الجمال والطبيعة الساحرة والعلاج الطبيعي",
  },
  en: {
    title: "The Czech Republic",
    crown: "Czechia — a land of beauty, enchanting nature and healing spas",
  },
};

const ABOUT = {
  ar: "هي دولة تقع في وسط أوروبا ، شكلت سوية مع سلوفاكيا أعوام 1939-1918-1945-1992 جمهورية تشكوسلوفاكيا ، يحدها من الشمال بولندا وألمانيا ، ومن الشرق سلوفاكيا ، ومن الجنوب النمسا ، ومن الغرب ألمانيا ، كما أنها تعد دولة داخلية ولا تملك أية منافذ على البحر",
  en: "Czechia is a country in the heart of Europe. Together with Slovakia it formed the republic of Czechoslovakia in the years 1918, 1939, 1945 and 1992. It is bordered by Poland and Germany to the north, Slovakia to the east, Austria to the south and Germany to the west, and it is a landlocked country with no outlet to the sea.",
};

/** Gothic spires — the signature skyline of Bohemian towns. */
function GothicSkyline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 140" aria-hidden className={className} preserveAspectRatio="none">
      <g fill="currentColor">
        <path d="M20 140 V60 h34 V140 Z M37 10 L54 58 H20 Z" />
        <path d="M96 140 V78 h26 V140 Z M109 34 L122 76 H96 Z" />
        <path d="M170 140 V54 h40 V140 Z M190 2 L210 52 H170 Z" />
        <path d="M250 140 V86 h60 V140 Z M250 86 l30 -22 l30 22 Z" />
        <path d="M348 140 V64 h30 V140 Z M363 16 L378 62 H348 Z" />
        <path d="M420 140 V90 h70 V140 Z M420 90 l35 -24 l35 24 Z" />
        <path d="M520 140 V58 h36 V140 Z M538 8 L556 56 H520 Z" />
      </g>
    </svg>
  );
}

/** Astronomical clock of Prague. */
function AstroClock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <circle cx="60" cy="60" r="52" />
        <circle cx="60" cy="60" r="38" />
        <circle cx="60" cy="60" r="16" />
        <path d="M60 8 v10 M60 102 v10 M8 60 h10 M102 60 h10" />
        <path d="M24 24 l7 7 M96 24 l-7 7 M24 96 l7 -7 M96 96 l-7 -7" />
        <path d="M60 60 L60 30 M60 60 L84 72" />
        <circle cx="60" cy="60" r="3" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

/** Bohemian crystal goblet — Czech glassmaking. */
function CrystalGlass({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 70 120" aria-hidden className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M14 12 h42 l-6 30 c-2 12 -20 12 -22 0 Z" />
        <path d="M14 24 h42" />
        <path d="M35 54 v40" />
        <path d="M18 104 h34 l-4 8 h-26 Z" />
        <path d="M35 94 c-8 0 -14 5 -17 10 M35 94 c8 0 14 5 17 10" />
      </g>
    </svg>
  );
}

/** Twin-tailed Bohemian lion. */
function BohemianLion({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 110" aria-hidden className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M18 92 C24 60 44 42 70 42 C88 42 100 32 104 18" />
        <path d="M104 18 c8 2 14 8 16 16 c-8 4 -16 2 -20 -4" />
        <path d="M70 42 C58 46 48 56 44 70 L38 92" />
        <path d="M18 92 l-8 12 M38 92 l-4 12 M78 60 l6 32 M96 54 l8 30" />
        <path d="M44 70 C30 68 20 58 22 46" />
        <path d="M112 30 c10 10 14 26 8 40 c8 4 12 12 10 20" />
        <circle cx="110" cy="26" r="1.8" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

/** Baroque folk flourish. */
function BaroqueScroll({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 80" aria-hidden className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 66 C36 66 46 28 78 28 C104 28 108 58 88 58 C74 58 74 38 94 32" />
        <path d="M78 28 C98 8 128 8 144 22 C158 34 152 56 136 54" />
        <path d="M144 22 C164 14 186 24 194 42" />
        <circle cx="116" cy="16" r="4.5" />
        <circle cx="50" cy="46" r="3.5" />
      </g>
    </svg>
  );
}

export function CzechCountry({ lang }: { lang: Lang }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";
  const h = rtl ? HEADINGS.ar : HEADINGS.en;

  return (
    <section className="relative overflow-hidden bg-cream py-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #1a1a2e 1px, transparent 1.5px)", backgroundSize: "22px 22px" }}
      />

      {/* Bohemian background stickers — kept faint so photos and text stay readable */}
      <GothicSkyline className="absolute bottom-0 inset-x-0 h-24 md:h-32 text-midnight/[0.07] pointer-events-none" />
      <AstroClock className="absolute top-14 end-4 md:end-16 w-20 md:w-28 text-midnight/15 pointer-events-none" />
      <AstroClock className="absolute bottom-32 start-4 md:start-14 w-12 md:w-16 text-gold/30 pointer-events-none" />
      <CrystalGlass className="absolute top-1/2 start-3 md:start-12 w-10 md:w-14 text-midnight/12 pointer-events-none" />
      <BohemianLion className="absolute top-36 start-6 md:start-24 w-20 md:w-28 text-terracotta/20 pointer-events-none" />
      <BaroqueScroll className="absolute -top-2 -start-6 w-44 md:w-64 text-gold/30 pointer-events-none" />
      <BaroqueScroll className="absolute bottom-24 end-2 md:end-16 w-40 md:w-56 text-gold/25 pointer-events-none rotate-180" />

      {/* INTRO */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center" dir={rtl ? "rtl" : "ltr"}>
        <span className="inline-block bg-midnight text-cream text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[-2deg] mb-6">
          {rtl ? "★ مقدّمة" : "★ Introduction"}
        </span>
        <p className="font-display text-3xl md:text-5xl text-midnight leading-snug">{h.title}</p>
        <div className="my-5 h-px w-16 bg-gold mx-auto" />
        <p className="font-display text-xl sm:text-2xl leading-snug text-terracotta">{h.crown}</p>
      </div>

      {/* About */}
      <div className="relative z-10 mt-16 mx-auto max-w-3xl px-6">
        <div className={`flex items-center gap-3 mb-4 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-mono">
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1 bg-midnight/10" />
        </div>
        <p className={`font-body text-base md:text-lg text-midnight/85 leading-relaxed ${align}`}>
          {rtl ? ABOUT.ar : ABOUT.en}
        </p>
      </div>

      {/* Fact cards: emblem & map + flag */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group relative bg-white border border-midnight/10 overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-gold font-mono z-10">
              {rtl ? "01 · حقيقة" : "01 · Fact"}
            </div>
            <div className="pt-16 pb-8 px-8 flex items-center justify-center bg-gradient-to-b from-cream to-white min-h-[280px]">
              <img
                src={EMBLEM_MAP}
                alt={rtl ? "شعار وخارطة جمهورية التشيك" : "Emblem and map of the Czech Republic"}
                loading="lazy"
                className="max-h-64 w-auto object-contain drop-shadow-md"
              />
            </div>
            <div className={`border-t border-midnight/10 px-6 py-4 ${align}`}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-1">
                {rtl ? "الشعار والموقع" : "Emblem & Geography"}
              </div>
              <div className="font-display text-xl text-midnight">
                {rtl ? "شعار وخارطة جمهورية التشيك · العاصمة براغ" : "Emblem and map of Czechia · Capital Prague"}
              </div>
            </div>
          </div>

          <div className="group relative bg-white border border-midnight/10 overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-gold font-mono z-10">
              {rtl ? "02 · حقيقة" : "02 · Fact"}
            </div>
            <div className="pt-12 pb-4 px-4 flex items-center justify-center bg-gradient-to-b from-cream to-white min-h-[280px]">
              <img
                src={FLAG}
                alt={rtl ? "علم جمهورية التشيك" : "Flag of the Czech Republic"}
                loading="lazy"
                className="max-h-56 w-auto object-contain shadow-lg"
              />
            </div>
            <div className={`border-t border-midnight/10 px-6 py-4 ${align}`}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-1">
                {rtl ? "العلم الوطني" : "National Flag"}
              </div>
              <div className="font-display text-xl text-midnight">
                {rtl ? "علم جمهورية التشيك" : "Flag of the Czech Republic"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ANTHEM */}
      <div className="relative z-10 mt-20">
        <AnthemPlayer
          src={czechAnthem.url}
          lang={lang}
          title={rtl ? "النشيد الوطني التشيكي" : "The Czech national anthem"}
        />
      </div>

      {/* Scenes from Czechia */}
      <div className="relative z-10 mt-16 mx-auto max-w-3xl px-6">
        <div className="overflow-hidden border border-midnight/10 bg-white shadow-md">
          <img src={SCENE_B} alt="Czechia" loading="lazy" className="w-full h-64 md:h-80 object-cover" />
        </div>
      </div>

      {/* Video */}
      <div className="relative z-10 mt-16 mx-auto max-w-4xl px-6">
        <div className={`mb-4 flex items-center gap-3 ${rtl ? "justify-end" : "justify-start"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-mono">
            {rtl ? "03 · مشاهدة" : "03 · Watch"}
          </span>
          <span className="h-px flex-1 bg-midnight/10" />
        </div>
        <div className="relative overflow-hidden shadow-xl border border-midnight/10 bg-midnight" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src={ANTHEM_VIDEO}
            title="Czechia"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className={`mt-3 text-xs text-charcoal/60 ${align}`}>
          {rtl ? "شاهد فيديو السياحة في التشيك على قناتي في اليوتيوب" : "Watch my Czechia travel video on my YouTube channel"}
        </div>
      </div>
    </section>
  );
}
