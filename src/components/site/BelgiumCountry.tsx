import { Link } from "@tanstack/react-router";
import type { Lang } from "@/lib/i18n";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const EMBLEM_MAP = U("2022/04/img_4534.jpg");
const FLAG = U("2022/04/img_4735.png");
const AHMAD = U("2022/01/img_1365.jpg");
const ANTHEM_VIDEO = "https://videos.files.wordpress.com/4hF23bST/my-movie-5-1-7.mp4";

const ABOUT = {
  ar: "هي دولة ذات نظام « ملكي اتحادي » في أوروبا الغربية ، وهي عضو مؤسس في الاتحاد الأوروبي ، وتستضيف مقر الاتحاد الأوروبي ، فضلا عن ذلك العديد من المنظمات الدولية الرئيسية الأخرى مثل منظمة حلف شمال الأطلسي ، عاصمتها هي مدينة بروكسل وهي العاصمة الإدارة لمنظمة الاتحاد الأوروبي",
  en: "Belgium is a country with a “federal monarchy” system in Western Europe. It is a founding member of the European Union and hosts the seat of the European Union, as well as many other major international organisations such as NATO. Its capital is the city of Brussels, which is the administrative capital of the European Union.",
};

/** Gothic guild-house gable motif from the Grand Place, drawn in SVG. */
function Gable({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" aria-hidden className={className}>
      <g stroke="currentColor" strokeWidth="2.5" fill="none">
        <path d="M50 4 L86 40 L86 116 L14 116 L14 40 Z" />
        <path d="M32 116 L32 74 L46 74 L46 116 M54 116 L54 74 L68 74 L68 116" />
        <path d="M50 18 L50 36 M26 56 h48" />
        <circle cx="50" cy="50" r="7" />
      </g>
    </svg>
  );
}

export function BelgiumCountry({ lang, cityLabel }: { lang: Lang; cityLabel: { ar: string; en: string } }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
      {/* Belgian tricolour wash: black · gold · red */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,26,46,0.10) 0%, rgba(245,199,74,0.10) 45%, rgba(191,42,45,0.10) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-y-0 start-0 w-2 sm:w-3 pointer-events-none"
        style={{ background: "linear-gradient(180deg,#1a1a2e 0 33%,#f5c74a 33% 66%,#bf2a2d 66% 100%)" }}
      />
      <Gable className="absolute -top-4 end-3 md:end-10 w-20 md:w-28 text-midnight/15 pointer-events-none" />
      <Gable className="absolute bottom-6 start-6 md:start-16 w-16 md:w-24 text-[#bf2a2d]/20 pointer-events-none" />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-6 w-20 h-6 bg-[#f5c74a]/80 rotate-[-6deg] z-20 shadow-sm" />
            <div className="absolute -top-4 right-8 w-16 h-5 bg-[#bf2a2d]/60 rotate-[9deg] z-20 shadow-sm" />
            <div className="bg-white p-4 pb-14 shadow-2xl max-w-xs md:max-w-sm">
              <img src={AHMAD} alt="Ahmad in Belgium" loading="lazy" className="w-full object-cover" />
              <div className="mt-4 text-center font-display text-lg text-midnight">
                {rtl ? "أحمد في بلجيكا" : "Ahmad in Belgium"}
              </div>
            </div>
          </div>
        </div>

        <div className={align} dir={rtl ? "rtl" : "ltr"}>
          <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">
            {rtl ? "مملكة بلجيكا" : "Kingdom of Belgium"}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-midnight leading-tight">
            {rtl ? "مملكة بلجيكا" : "The Kingdom of Belgium"}
          </h2>
          <div className="gold-divider w-24 my-7" />
          <p className="text-[16px] sm:text-[18px] leading-[2] text-charcoal/85">{rtl ? ABOUT.ar : ABOUT.en}</p>
        </div>
      </div>

      {/* EMBLEM + MAP · FLAG + ANTHEM */}
      <div className="relative z-10 mt-16 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-6">
        <figure className="overflow-hidden rounded-3xl border border-sand bg-white/70 shadow-sm">
          <img src={EMBLEM_MAP} alt={rtl ? "شعار وخارطة مملكة بلجيكا" : "Emblem and map of the Kingdom of Belgium"} loading="lazy" className="w-full object-cover" />
          <figcaption className="px-5 py-4 text-center text-[11px] tracking-[0.2em] uppercase text-charcoal/60">
            {rtl ? "شعار وخارطة مملكة بلجيكا" : "Emblem and map of the Kingdom of Belgium"}
          </figcaption>
        </figure>

        <figure className="overflow-hidden rounded-3xl border border-sand bg-white/70 shadow-sm">
          <img src={FLAG} alt={rtl ? "علم مملكة بلجيكا" : "Flag of the Kingdom of Belgium"} loading="lazy" className="w-full object-cover" />
          <div className="px-4 pb-4">
            <video
              controls
              preload="metadata"
              src={ANTHEM_VIDEO}
              className="w-full rounded-2xl border border-sand bg-midnight"
              style={{ aspectRatio: "16 / 9" }}
            />
          </div>
          <figcaption className="px-5 pb-4 text-center text-[11px] tracking-[0.2em] uppercase text-charcoal/60">
            {rtl ? "علم مملكة بلجيكا والنشيد الوطني البلجيكي" : "Flag of Belgium and the Belgian national anthem"}
          </figcaption>
        </figure>
      </div>

      {/* MAIN LINKS */}
      <div className="relative z-10 mt-16 mx-auto max-w-5xl px-6">
        <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-5 text-center">
          {rtl ? "الروابط الرئيسية" : "Main links"}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <Link
            to="/$lang/countries/$country/$city"
            params={{ lang, country: "belgium", city: "brussels" }}
            className="group rounded-2xl border border-sand bg-white/70 px-5 py-5 hover:border-gold/60 hover:shadow-sm transition-all"
          >
            <div className="font-display text-lg text-midnight group-hover:text-gold transition-colors">
              {rtl ? "السياحة في بروكسل" : "Tourism in Brussels"}
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-charcoal/50">
              {rtl ? cityLabel.ar : cityLabel.en}
            </div>
          </Link>
          <Link
            to="/$lang/countries/$country/guides/$topic"
            params={{ lang, country: "belgium", topic: "album" }}
            className="group rounded-2xl border border-sand bg-white/70 px-5 py-5 hover:border-gold/60 hover:shadow-sm transition-all"
          >
            <div className="font-display text-lg text-midnight group-hover:text-gold transition-colors">
              {rtl ? "ألبوم الصور" : "Photo album"}
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-charcoal/50">
              {rtl ? "صور من بلجيكا" : "Photographs from Belgium"}
            </div>
          </Link>
          <Link
            to="/$lang/countries"
            params={{ lang }}
            className="group rounded-2xl border border-sand bg-white/70 px-5 py-5 hover:border-gold/60 hover:shadow-sm transition-all"
          >
            <div className="font-display text-lg text-midnight group-hover:text-gold transition-colors">
              {rtl ? "العودة لصفحة السياحة في دول العالم" : "Back to the countries of the world"}
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-charcoal/50">
              {rtl ? "كل الدول" : "All countries"}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
