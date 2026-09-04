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

/** Atomium — nine spheres of the 1958 Expo, drawn in SVG. */
function Atomium({ className }: { className?: string }) {
  const pts: [number, number][] = [
    [50, 8], [16, 30], [84, 30], [50, 50], [16, 70], [84, 70], [50, 92], [30, 50], [70, 50],
  ];
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <g stroke="currentColor" strokeWidth="1.6" fill="none" opacity="0.9">
        <path d="M50 8 L16 30 L16 70 L50 92 L84 70 L84 30 Z M50 8 L50 50 L50 92 M16 30 L50 50 L84 30 M16 70 L50 50 L84 70 M30 50 L70 50" />
      </g>
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill="currentColor" opacity="0.55" />
      ))}
    </svg>
  );
}

/** Art Nouveau whiplash curve (Horta line). */
function Whiplash({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" aria-hidden className={className} preserveAspectRatio="none">
      <path
        d="M0 40 C 40 0, 60 60, 100 30 S 160 0, 200 34"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="100" cy="30" r="3.5" fill="currentColor" />
    </svg>
  );
}

function Tricolour({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`} aria-hidden>
      <span className="h-1.5 w-8 bg-belnoir" />
      <span className="h-1.5 w-8 bg-belor" />
      <span className="h-1.5 w-8 bg-belrouge" />
    </span>
  );
}

export function BelgiumCountry({ lang, cityLabel }: { lang: Lang; cityLabel: { ar: string; en: string } }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  const links = [
    {
      to: "/$lang/countries/$country/$city" as const,
      params: { lang, country: "belgium", city: "brussels" },
      no: "01",
      title: rtl ? "السياحة في بروكسل" : "Tourism in Brussels",
      sub: rtl ? cityLabel.ar : cityLabel.en,
    },
    {
      to: "/$lang/countries/$country/guides/$topic" as const,
      params: { lang, country: "belgium", topic: "album" },
      no: "02",
      title: rtl ? "ألبوم الصور" : "Photo album",
      sub: rtl ? "صور من بلجيكا" : "Photographs from Belgium",
    },
    {
      to: "/$lang/countries" as const,
      params: { lang },
      no: "03",
      title: rtl ? "العودة لصفحة السياحة في دول العالم" : "Back to the countries of the world",
      sub: rtl ? "كل الدول" : "All countries",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-belnoir text-cream">
      {/* Gilded Grand-Place night: dark stone with gold leaf bloom */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 70% at 50% -10%, color-mix(in oklab, var(--belor) 24%, transparent) 0%, transparent 60%), radial-gradient(80% 50% at 100% 100%, color-mix(in oklab, var(--belrouge) 18%, transparent) 0%, transparent 65%)",
        }}
      />
      {/* Cobblestone texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10px 10px, var(--cream) 1px, transparent 1.6px), radial-gradient(circle at 30px 30px, var(--cream) 1px, transparent 1.6px)",
          backgroundSize: "40px 40px",
        }}
      />
      <Atomium className="absolute -top-10 end-[-3rem] w-72 md:w-96 text-belor/15 pointer-events-none" />

      {/* MASTHEAD */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 sm:pt-24">
        <div className={`flex flex-col ${rtl ? "items-end" : "items-start"} gap-4`}>
          <Tricolour />
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-belor">
            {rtl ? "مملكة بلجيكا" : "The Kingdom of Belgium"}
          </h2>
          <div className="text-[11px] uppercase tracking-[0.5em] text-cream/60">
            {rtl ? "بروكسل · الاتحاد الأوروبي · حلف شمال الأطلسي" : "Brussels · European Union · NATO"}
          </div>
        </div>
        <Whiplash className="mt-8 w-full h-10 text-belor/40" />
      </div>

      {/* INTRO — gilded frame portrait + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 mt-10 grid md:grid-cols-12 gap-10 md:gap-14 items-center">
        <div className="md:col-span-5" dir="ltr">
          <div className="relative mx-auto max-w-xs md:max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] border border-belor/40" />
            <div className="absolute -inset-6 rounded-[2.5rem] border border-belor/15" />
            <figure className="relative overflow-hidden rounded-[1.6rem] border border-belor/50 shadow-2xl">
              <img src={AHMAD} alt="Ahmad in Belgium" loading="lazy" className="w-full object-cover" />
              <figcaption className="bg-belnoir/85 px-5 py-3 text-center font-display text-lg text-belor">
                {rtl ? "أحمد في بلجيكا" : "Ahmad in Belgium"}
              </figcaption>
            </figure>
          </div>
        </div>

        <div className={`md:col-span-7 ${align}`} dir={rtl ? "rtl" : "ltr"}>
          <div className="text-[11px] uppercase tracking-[0.45em] text-belrouge mb-4">
            {rtl ? "نبذة" : "About"}
          </div>
          <p className="text-[17px] sm:text-[19px] leading-[2.1] text-cream/85">{rtl ? ABOUT.ar : ABOUT.en}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              rtl ? "نظام ملكي اتحادي" : "Federal monarchy",
              rtl ? "عضو مؤسس في الاتحاد الأوروبي" : "EU founding member",
              rtl ? "العاصمة بروكسل" : "Capital: Brussels",
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-belor/35 px-4 py-1.5 text-[12px] tracking-wide text-cream/80"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* EMBLEM + MAP · FLAG + ANTHEM — asymmetric plates */}
      <div className="relative z-10 mt-20 mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-6">
        <figure className="md:col-span-7 overflow-hidden rounded-[1.5rem] border border-belor/25 bg-cream/[0.04] backdrop-blur-sm">
          <img
            src={EMBLEM_MAP}
            alt={rtl ? "شعار وخارطة مملكة بلجيكا" : "Emblem and map of the Kingdom of Belgium"}
            loading="lazy"
            className="w-full object-cover"
          />
          <figcaption className={`px-6 py-5 ${align}`}>
            <span className="block text-[10px] uppercase tracking-[0.4em] text-belrouge mb-1">
              {rtl ? "الشعار والموقع" : "Emblem & geography"}
            </span>
            <span className="font-display text-xl text-belor">
              {rtl ? "شعار وخارطة مملكة بلجيكا" : "Emblem and map of the Kingdom of Belgium"}
            </span>
          </figcaption>
        </figure>

        <figure className="md:col-span-5 overflow-hidden rounded-[1.5rem] border border-belor/25 bg-cream/[0.04] backdrop-blur-sm flex flex-col">
          <img
            src={FLAG}
            alt={rtl ? "علم مملكة بلجيكا" : "Flag of the Kingdom of Belgium"}
            loading="lazy"
            className="w-full object-cover"
          />
          <div className="px-5 pt-5">
            <video
              controls
              preload="metadata"
              src={ANTHEM_VIDEO}
              className="w-full rounded-xl border border-belor/25 bg-black"
              style={{ aspectRatio: "16 / 9" }}
            />
          </div>
          <figcaption className={`px-6 py-5 mt-auto ${align}`}>
            <span className="block text-[10px] uppercase tracking-[0.4em] text-belrouge mb-1">
              {rtl ? "النشيد الوطني" : "National anthem"}
            </span>
            <span className="font-display text-lg text-belor">
              {rtl ? "علم مملكة بلجيكا والنشيد الوطني البلجيكي" : "Flag of Belgium and the Belgian national anthem"}
            </span>
          </figcaption>
        </figure>
      </div>

      {/* MAIN LINKS — comic-strip panels (bande dessinée) */}
      <div className="relative z-10 mt-20 pb-24 mx-auto max-w-6xl px-6">
        <div className={`flex items-center gap-4 mb-7 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[11px] uppercase tracking-[0.45em] text-belor">
            {rtl ? "الروابط الرئيسية" : "Main links"}
          </span>
          <span className="h-px flex-1 bg-belor/25" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {links.map((l) => (
            <Link
              key={l.no}
              to={l.to}
              params={l.params as never}
              className="group relative block rounded-[1.25rem] border-2 border-belor/40 bg-cream/[0.05] p-6 transition-all hover:-translate-y-1 hover:bg-belor hover:text-belnoir"
            >
              <span className="absolute top-4 end-5 font-mono text-[11px] tracking-[0.3em] text-belrouge group-hover:text-belnoir/60">
                {l.no}
              </span>
              <Atomium className="absolute bottom-3 start-4 w-10 text-belor/25 group-hover:text-belnoir/25 pointer-events-none" />
              <div className={`relative ${align}`}>
                <div className="font-display text-xl text-belor group-hover:text-belnoir leading-snug min-h-[3.5rem]">
                  {l.title}
                </div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.25em] text-cream/55 group-hover:text-belnoir/70">
                  {l.sub}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
