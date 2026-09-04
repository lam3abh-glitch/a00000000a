import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import type { Lang } from "@/lib/i18n";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const EMBLEM_MAP = U("2022/04/img_4494.jpg");
const LAKE = U("2022/01/img_0450.jpg");
const ANTHEM_VIDEO = "https://videos.files.wordpress.com/u2ebRce2/my-movie-5-6.mp4";
const YOUTUBE_URL = "https://www.youtube.com/watch?v=NM2LbFovLkc";
const YOUTUBE_THUMB = "https://i.ytimg.com/vi/NM2LbFovLkc/hqdefault.jpg";

const FINN_BLUE = "#005293";

const ABOUT = {
  ar: "هي بلد شمالي يقع في المنطقة الفينوسكاندية في شمال أوروبا ، يحدها من الغرب السويد والنرويج من الشمال ، وروسيا في الشرق ، بينما تقع استونيا إلى الجنوب عبر خليج فنلندا",
  en: "Finland is a Nordic country in the Fennoscandian region of northern Europe. It is bordered by Sweden to the west and Norway to the north, Russia to the east, while Estonia lies to the south across the Gulf of Finland.",
};

/** Six-point Nordic snowflake, drawn in SVG. */
function Snowflake({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none">
        {[0, 60, 120].map((a) => (
          <g key={a} transform={`rotate(${a} 50 50)`}>
            <path d="M50 6 V94" />
            <path d="M50 20 L38 32 M50 20 L62 32" />
            <path d="M50 44 L40 54 M50 44 L60 54" />
            <path d="M50 80 L38 68 M50 80 L62 68" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function FinlandCountry({ lang }: { lang: Lang }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Nordic wash: aurora green → ice blue → snow white */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,82,147,0.10) 0%, rgba(120,205,190,0.10) 38%, rgba(255,255,255,0) 100%)",
        }}
      />
      {/* Finnish flag cross drawn faintly across the section */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <div className="absolute inset-x-0 top-1/3 h-16" style={{ background: FINN_BLUE }} />
        <div className="absolute inset-y-0 start-[26%] w-16" style={{ background: FINN_BLUE }} />
      </div>
      <Snowflake className="absolute -top-6 end-4 md:end-14 w-24 md:w-32 text-[#005293]/15 pointer-events-none" />
      <Snowflake className="absolute bottom-8 start-4 md:start-16 w-16 md:w-24 text-[#005293]/10 pointer-events-none" />

      {/* INTRO — lake photo + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] border"
              style={{ borderColor: "rgba(0,82,147,0.25)" }}
            />
            <figure className="relative overflow-hidden rounded-[1.75rem] shadow-2xl max-w-xs md:max-w-sm bg-white">
              <img src={LAKE} alt="Finland" loading="lazy" className="w-full object-cover" />
              <figcaption
                className="px-5 py-3 text-center text-[11px] uppercase tracking-[0.3em] text-white"
                style={{ background: FINN_BLUE }}
              >
                {rtl ? "أرض الألف بحيرة" : "Land of a thousand lakes"}
              </figcaption>
            </figure>
          </div>
        </div>

        <div className={align} dir={rtl ? "rtl" : "ltr"}>
          <div className="text-[11px] uppercase tracking-[0.4em] mb-4" style={{ color: FINN_BLUE }}>
            {rtl ? "جمهورية فنلندا" : "Republic of Finland"}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-midnight leading-tight">
            {rtl ? "جمهورية فنلندا" : "The Republic of Finland"}
          </h2>
          <div className="my-4 h-px w-14" style={{ background: "rgba(0,82,147,0.45)" }} />
          <p className="font-display text-xl sm:text-2xl leading-snug" style={{ color: FINN_BLUE }}>
            {rtl
              ? "أرض الألف بحيرة وشمس منتصف الليل وأسعد بلد في العالم"
              : "Land of a thousand lakes, the midnight sun, and the happiest country in the world"}
          </p>
          <p className="mt-6 text-[16px] sm:text-[18px] leading-[2] text-charcoal/85">{rtl ? ABOUT.ar : ABOUT.en}</p>
        </div>
      </div>

      {/* ANTHEM */}
      <div className="relative z-10 mt-16">
        <AnthemPlayer
          src={ANTHEM_VIDEO}
          lang={lang}
          title={rtl ? "النشيد الوطني الفنلندي" : "The Finnish national anthem"}
        />
      </div>

      {/* YOUTUBE */}
      <div className="relative z-10 mt-8 mx-auto max-w-xl px-6">
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-2xl border bg-white/90 p-3 shadow-sm hover:shadow-md transition-all"
          style={{ borderColor: "rgba(0,82,147,0.25)" }}
        >
          <span className="relative flex-shrink-0 overflow-hidden rounded-xl w-28 sm:w-36">
            <img src={YOUTUBE_THUMB} alt="" loading="lazy" className="w-full object-cover" />
            <span className="absolute inset-0 grid place-items-center bg-midnight/30">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          <span className={rtl ? "text-right min-w-0" : "text-left min-w-0"}>
            <span className="block text-[10px] uppercase tracking-[0.35em]" style={{ color: FINN_BLUE }}>
              YouTube
            </span>
            <span className="block font-display text-base sm:text-lg text-midnight leading-snug">
              {rtl ? "شاهد فيديو السياحة في فنلندا على قناتي في اليوتيوب" : "Watch my Finland travel video on YouTube"}
            </span>
          </span>
        </a>
      </div>

      {/* EMBLEM + MAP */}
      <div className="relative z-10 mt-16 mx-auto max-w-3xl px-6">
        <figure className="overflow-hidden rounded-3xl border bg-white shadow-sm" style={{ borderColor: "rgba(0,82,147,0.2)" }}>
          <img
            src={EMBLEM_MAP}
            alt={rtl ? "شعار وخارطة جمهورية فنلندا" : "Emblem and map of the Republic of Finland"}
            loading="lazy"
            className="w-full object-cover"
          />
          <figcaption className="px-5 py-4 text-center text-[11px] tracking-[0.2em] uppercase text-charcoal/60">
            {rtl ? "شعار وخارطة جمهورية فنلندا" : "Emblem and map of the Republic of Finland"}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
