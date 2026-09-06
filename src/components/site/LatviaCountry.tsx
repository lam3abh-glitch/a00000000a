import type { Lang } from "@/lib/i18n";
import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import ahmadRiga from "@/assets/ahmad-riga.jpg.asset.json";
import latviaEmblemMap from "@/assets/latvia-emblem-map.jpg.asset.json";

const ANTHEM_VIDEO = "https://videos.files.wordpress.com/RIlDGJYz/my-movie-5-2-7.mp4";

const ABOUT = {
  ar: "تقع لاتفيا في شمال شرق أوروبا على ساحل بحر البلطيق . يحدها من جهة الشمال جمهورية إستونيا ، ومن جهة الجنوب جمهورية ليتوانيا ، وجمهورية روسيا من جهة الشرق ، وجمهورية بيلاروسيا من جهة الجنوب الشرقي ، وبحر البلطيق من جهة الغرب",
  en: "Latvia lies in north-eastern Europe on the coast of the Baltic Sea. It is bordered to the north by Estonia, to the south by Lithuania, to the east by Russia, to the south-east by Belarus, and to the west by the Baltic Sea.",
};

const WEATHER = {
  ar: "أفضل وقت لزيارة لاتفيا يكون خلال فصل الخريف ، ما بين ( سبتمبر إلى ديسمبر ) ، وذلك لوقوع لاتفيا في المنطقة المناخية المعتدلة ، وهذا الأمر الذي جعل لديها أربعة فصول واضحة ، وفصل الخريف تتسم درجات الحرارة بالإعتدال الذي يتيح لك الإستمتاع بعطلة سياحية في أجواء مثالية",
  en: "The best time to visit Latvia is during autumn, between September and December. Latvia sits in the temperate climate zone, which gives it four clearly defined seasons, and in autumn the temperatures are mild enough to let you enjoy a holiday in ideal weather.",
};

const LANGUAGE = {
  ar: "اللغة اللاتيفية هي اللغة الرسمية والسائدة في لاتفيا ، بالإضافة لذلك يوجد عدد من اللغات التي يتحدث بها السكان في لاتفيا ومنها ( الروسية ، والأوكرانية ، واللاتغالية ، والبيلاروسية )",
  en: "Latvian is the official and dominant language of Latvia. Alongside it, a number of other languages are spoken by residents, including Russian, Ukrainian, Latgalian and Belarusian.",
};

/** Baltic amber sun motif — the rising sun of the Latvian coat of arms. */
function BalticSun({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <g stroke="currentColor" strokeWidth="2" fill="none">
        <circle cx="50" cy="50" r="14" />
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 16;
          return (
            <line
              key={i}
              x1={50 + Math.cos(a) * 20}
              y1={50 + Math.sin(a) * 20}
              x2={50 + Math.cos(a) * 44}
              y2={50 + Math.sin(a) * 44}
            />
          );
        })}
      </g>
    </svg>
  );
}

export function LatviaCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
      {/* Latvian flag bands — crimson / white / crimson */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-2 bg-carmine/80" />
      <div aria-hidden className="absolute inset-x-0 top-2 h-1 bg-cream" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--carmine) 12%, transparent) 0%, transparent 42%, color-mix(in oklab, var(--gold) 10%, transparent) 100%)",
        }}
      />
      {/* Baltic pine / woven-belt pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--carmine) 0 2px, transparent 2px 26px), repeating-linear-gradient(0deg, var(--carmine) 0 2px, transparent 2px 26px)",
        }}
      />
      <BalticSun className="absolute -top-10 right-2 md:right-12 w-32 md:w-44 text-gold/30 pointer-events-none" />
      <BalticSun className="absolute bottom-6 left-2 md:left-10 w-24 md:w-32 text-carmine/15 pointer-events-none" />

      {/* INTRO — Ahmad's polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-6 w-20 h-6 bg-carmine/70 rotate-[-6deg] z-20 shadow-sm" />
            <div className="absolute -top-4 right-8 w-16 h-5 bg-gold/70 rotate-[10deg] z-20 shadow-sm" />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={ahmadRiga.url}
                alt={rtl ? "أحمد في ريغا" : "Ahmad in Riga"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-midnight text-lg" style={{ fontFamily: "cursive" }}>
                Rīga · ريغا
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
            {["bg-carmine", "bg-charcoal/20", "bg-carmine", "bg-gold"].map((c, i) => (
              <span key={i} className={`h-1.5 w-10 ${c}`} />
            ))}
          </div>
        </div>
      </div>

      {/* ANTHEM */}
      <div className="relative z-10 mt-16">
        <AnthemPlayer
          src={ANTHEM_VIDEO}
          lang={lang}
          title={rtl ? "النشيد الوطني اللاتفي" : "The Latvian national anthem"}
          theme={{
            bg: "bg-white",
            border: "border-carmine/15",
            buttonBg: "bg-carmine",
            buttonText: "text-cream",
            buttonHoverBg: "hover:bg-gold",
            buttonHoverText: "hover:text-midnight",
            accent: "text-gold",
            title: "text-midnight",
            ping: "border-carmine",
          }}
        />
      </div>

      {/* ABOUT + weather + language */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-carmine font-mono">
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1 bg-carmine/15" />
        </div>

        <h3 className={`font-display text-3xl md:text-4xl text-carmine mb-5 ${align}`}>
          {rtl ? "جمهورية لاتفيا" : "The Republic of Latvia"}
        </h3>
        <p className={`font-body text-base md:text-lg text-charcoal/85 leading-[1.95] ${align}`}>{ABOUT[lang]}</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {[
            { n: "01", t_ar: "الطقس في لاتفيا", t_en: "The weather in Latvia", body: WEATHER[lang] },
            { n: "02", t_ar: "اللغة في لاتفيا", t_en: "The language in Latvia", body: LANGUAGE[lang] },
          ].map((s) => (
            <div key={s.n} className="relative bg-white border border-carmine/10 shadow-md p-7">
              <div className="absolute top-0 inset-x-0 h-1 bg-carmine/70" />
              <div className={`text-[10px] uppercase tracking-[0.4em] text-carmine/70 font-mono mb-3 ${align}`}>
                {s.n}
              </div>
              <h4 className={`font-display text-2xl text-carmine mb-3 ${align}`}>{rtl ? s.t_ar : s.t_en}</h4>
              <p className={`font-body text-sm md:text-base text-charcoal/85 leading-[1.9] ${align}`}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FACT — emblem & map */}
      <div className="relative z-10 mt-16 mx-auto max-w-3xl px-6">
        <div className="relative bg-white border border-carmine/10 overflow-hidden shadow-md">
          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-carmine font-mono z-10">
            {rtl ? "03 · حقيقة" : "03 · Fact"}
          </div>
          <div className="pt-16 pb-8 px-6 flex items-center justify-center bg-gradient-to-b from-cream to-white">
            <img
              src={latviaEmblemMap.url}
              alt={rtl ? "شعار وخارطة جمهورية لاتفيا" : "Emblem and map of the Republic of Latvia"}
              loading="lazy"
              className="max-h-64 w-auto object-contain drop-shadow-md"
            />
          </div>
          <div className={`border-t border-carmine/10 px-6 py-4 ${align}`}>
            <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-1">
              {rtl ? "الشعار والموقع" : "Emblem & Geography"}
            </div>
            <div className="font-display text-xl text-carmine">
              {rtl ? "شعار وخارطة جمهورية لاتفيا" : "Emblem and map of the Republic of Latvia"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
