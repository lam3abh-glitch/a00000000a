import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import type { Lang } from "@/lib/i18n";

const IMG = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const POLAROID = IMG("2022/01/img_0669.jpg");
const EMBLEM_MAP = IMG("2022/04/img_4206.jpg");
const FLAG = IMG("2022/04/img_4738.png");
const LONDON = IMG("2022/05/img_6897.jpg");
const ANTHEM = "https://videos.files.wordpress.com/DMbFVXK7/my-movie-5-12.mp4";

const NAVY = "#012169";
const CRIMSON = "#C8102E";
const PAPER = "#F5F6FA";

const ABOUT = {
  ar: "هي دولة ذات سيادة ، تقع قبالة الساحل الشمالي الغربي لقارة أوروبا ، تتكون المملكة المتحدة من أرخبيل بريطانيا العظمى ، والجزء الشمالي من جزيرة ايرلندا والعديد من الجزر الصغيرة ، تعد ايرلندا الشمالية الجزء الوحيد من المملكة ذا الحدود البرية التي تفصلها عن جمهورية ايرلندا ، عدى ذلك تحد المملكة المتحدة المحيط الأطلسي وبحر الشمال والقنال الانجليزي وما يسمى بالبحر الايرلندي ، ويربط نفق المانش بريطانيا العظمى بفرنسا",
  en: "The United Kingdom is a sovereign state lying off the north-western coast of the European continent. It is made up of the archipelago of Great Britain, the northern part of the island of Ireland and many smaller islands. Northern Ireland is the only part of the kingdom with a land border, separating it from the Republic of Ireland; otherwise the United Kingdom is bounded by the Atlantic Ocean, the North Sea, the English Channel and what is known as the Irish Sea. The Channel Tunnel links Great Britain with France.",
};

/** The Union Jack drawn in SVG — used as a quiet background motif. */
function UnionJack({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 60 30" aria-hidden className={className} style={style}>
      <rect width="60" height="30" fill={NAVY} />
      <path d="M0 0 60 30M60 0 0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0 60 30M60 0 0 30" stroke={CRIMSON} strokeWidth="4" />
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke={CRIMSON} strokeWidth="6" />
    </svg>
  );
}

/** A guardsman's bearskin silhouette. */
function Crown({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 70" aria-hidden className={className} style={style}>
      <g fill="currentColor">
        <path d="M8 58h84l-6-10H14L8 58Z" />
        <path d="M14 44 8 16l20 14L50 8l22 22 20-14-6 28H14Z" />
        <circle cx="8" cy="12" r="5" />
        <circle cx="50" cy="4" r="5" />
        <circle cx="92" cy="12" r="5" />
      </g>
    </svg>
  );
}

export function BritainCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: PAPER }}>
      {/* flag bar */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-2.5 flex">
        {[NAVY, "#FFFFFF", CRIMSON].map((c) => (
          <span key={c} className="flex-1" style={{ background: c }} />
        ))}
      </div>

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(85% 55% at 100% 0%, rgba(1,33,105,0.14) 0%, transparent 60%), linear-gradient(180deg, transparent 60%, rgba(200,16,46,0.10) 100%)",
        }}
      />
      {/* fine pinstripe — a nod to Savile Row */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(90deg, #012169 0 1px, transparent 1px 14px)" }}
      />
      <UnionJack className="absolute top-14 -left-10 w-40 md:w-56 opacity-[0.10] pointer-events-none" />
      <Crown className="absolute bottom-10 -right-6 w-32 md:w-44 pointer-events-none" style={{ color: `${NAVY}1f` }} />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-6 w-20 h-6 rotate-[-6deg] z-20 shadow-sm" style={{ background: "rgba(1,33,105,0.75)" }} />
            <div className="absolute -top-4 right-8 w-16 h-5 rotate-[10deg] z-20 shadow-sm" style={{ background: "rgba(200,16,46,0.75)" }} />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={POLAROID}
                alt={rtl ? "أحمد في بريطانيا" : "Ahmad in Britain"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-midnight text-lg" style={{ fontFamily: "cursive" }}>
                Great Britain · بريطانيا
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span
            className="inline-block text-white text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[-2deg] mb-6"
            style={{ background: NAVY }}
          >
            {rtl ? "♛ مقدّمة" : "♛ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl leading-snug whitespace-pre-line" style={{ color: NAVY }}>
            {intro}
          </p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {[NAVY, "#E7E9F0", CRIMSON, NAVY].map((c, i) => (
              <span key={i} className="h-1.5 w-10" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono" style={{ color: CRIMSON }}>
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1" style={{ background: `${NAVY}33` }} />
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className={`md:col-span-7 ${align}`}>
            <h3 className="font-display text-3xl md:text-4xl mb-5" style={{ color: NAVY }}>
              {rtl ? "مملكة بريطانيا" : "The Kingdom of Great Britain"}
            </h3>
            <p className="font-body text-base md:text-lg text-charcoal/85 leading-[1.95]">{ABOUT[lang]}</p>
          </div>
          <div className="md:col-span-5 space-y-4">
            <figure className="overflow-hidden rounded-2xl shadow-lg md:translate-x-4" style={{ border: `1px solid ${NAVY}22` }}>
              <img
                src={LONDON}
                alt={rtl ? "مشاهد من لندن" : "Scenes from London"}
                loading="lazy"
                className="h-48 md:h-60 w-full object-cover"
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
          title={rtl ? "النشيد الوطني البريطاني" : "The British national anthem"}
        />
      </div>

      {/* FACTS — emblem/map + flag */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group relative bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow" style={{ border: `1px solid ${NAVY}26` }}>
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] font-mono z-10" style={{ color: CRIMSON }}>
              {rtl ? "01 · حقيقة" : "01 · Fact"}
            </div>
            <div
              className="pt-16 pb-8 px-6 flex items-center justify-center min-h-[280px]"
              style={{ background: `linear-gradient(180deg, ${PAPER}, #ffffff)` }}
            >
              <img
                src={EMBLEM_MAP}
                alt={rtl ? "شعار وخارطة مملكة بريطانيا" : "Emblem and map of Great Britain"}
                loading="lazy"
                className="max-h-60 w-auto object-contain drop-shadow-md"
              />
            </div>
            <div className={`border-t px-6 py-4 ${align}`} style={{ borderColor: `${NAVY}1f` }}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-1">
                {rtl ? "الشعار والموقع" : "Emblem & geography"}
              </div>
              <div className="font-display text-xl" style={{ color: NAVY }}>
                {rtl ? "شعار وخارطة مملكة بريطانيا · العاصمة لندن" : "Emblem and map of Great Britain · Capital London"}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden shadow-md flex flex-col text-cream" style={{ background: NAVY, border: `1px solid ${NAVY}` }}>
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] font-mono z-10" style={{ color: "#FFB3BF" }}>
              {rtl ? "02 · العلم" : "02 · The flag"}
            </div>
            <Crown className="absolute -bottom-8 -right-8 w-40 text-cream/10 pointer-events-none" />
            <div className={`relative pt-16 px-7 ${align}`}>
              <h3 className="font-display text-2xl md:text-3xl mb-4">
                {rtl ? "علم مملكة بريطانيا" : "The flag of Great Britain"}
              </h3>
            </div>
            <div className="relative mt-auto px-7 pb-7">
              <div className="overflow-hidden border border-cream/20 bg-white">
                <UnionJack className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
