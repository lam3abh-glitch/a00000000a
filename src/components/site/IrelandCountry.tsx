import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import type { Lang } from "@/lib/i18n";

const IMG = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const POLAROID = IMG("2022/02/img_4375.jpg");
const EMBLEM_MAP = IMG("2022/04/img_4287.jpg");
const FLAG = IMG("2022/04/img_4649.png");
const LANDSCAPE = IMG("2022/03/img_3602.jpg");
const ANTHEM = "https://videos.files.wordpress.com/wdauW5wR/my-movie-5-6-1.mp4";

const GREEN = "#169B62";
const DEEP = "#0B4A2F";
const ORANGE = "#FF883E";
const PAPER = "#F6FBF3";

const ABOUT = {
  ar: "هي بلد يقع في شمال غرب أوروبا ، وتتقاسم هذه البلاد ذات السيادة حدودها البرية الوحيدة مع ايرلندا الشمالية التي تشكل جزء من المملكة المتحدة ، وفيما عدا ذلك فهي محاطة بالمحيط الأطلسي ، والبحر الكلتي في الجنوب ، وقناة سانت جورج في الجنوب الشرقي ، والبحر الايرلندي في الشرق ، هي جمهورية مركزية برلمانية",
  en: "Ireland is a country in north-western Europe. This sovereign state shares its only land border with Northern Ireland, which forms part of the United Kingdom; otherwise it is surrounded by the Atlantic Ocean, the Celtic Sea to the south, St George's Channel to the south-east and the Irish Sea to the east. It is a unitary parliamentary republic.",
};

/** Shamrock — the three-leaf clover of Ireland. */
function Shamrock({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className} style={style}>
      <g fill="currentColor">
        <path d="M50 46c-6-6-6-16 0-22s16-4 20 3c-3 9-11 16-20 19Z" />
        <path d="M50 46c-8-3-16-10-19-19 4-7 14-9 20-3s5 16-1 22Z" />
        <path d="M50 48c8 1 16 7 19 15-4 8-15 10-21 3s-4-15 2-18Z" />
        <path d="M49 62c1 12 0 22-4 32h9c-3-10-3-20-2-32Z" />
      </g>
    </svg>
  );
}

/** Celtic knot motif drawn in SVG. */
function CelticKnot({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className} style={style}>
      <g stroke="currentColor" strokeWidth="3" fill="none">
        <circle cx="50" cy="50" r="30" />
        <circle cx="50" cy="50" r="18" />
        <path d="M50 20 C70 35 70 65 50 80 C30 65 30 35 50 20 Z" />
        <path d="M20 50 C35 30 65 30 80 50 C65 70 35 70 20 50 Z" />
      </g>
    </svg>
  );
}

export function IrelandCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: PAPER }}>
      {/* flag bar — green, white, orange */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-2.5 flex">
        {[GREEN, "#FFFFFF", ORANGE].map((c) => (
          <span key={c} className="flex-1" style={{ background: c }} />
        ))}
      </div>

      {/* emerald wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(90% 55% at 0% 0%, rgba(22,155,98,0.16) 0%, transparent 60%), linear-gradient(180deg, transparent 58%, rgba(255,136,62,0.12) 100%)",
        }}
      />
      {/* clover field texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(60deg, #0B4A2F 0 1.5px, transparent 1.5px 20px), repeating-linear-gradient(-60deg, #0B4A2F 0 1.5px, transparent 1.5px 20px)",
          backgroundSize: "40px 40px",
        }}
      />
      <Shamrock className="absolute top-16 -left-4 w-24 md:w-36 pointer-events-none" style={{ color: `${GREEN}33` }} />
      <CelticKnot className="absolute bottom-8 -right-6 w-28 md:w-40 pointer-events-none" style={{ color: `${ORANGE}33` }} />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-6 w-20 h-6 rotate-[-6deg] z-20 shadow-sm" style={{ background: "rgba(22,155,98,0.75)" }} />
            <div className="absolute -top-4 right-8 w-16 h-5 rotate-[10deg] z-20 shadow-sm" style={{ background: "rgba(255,136,62,0.75)" }} />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={POLAROID}
                alt={rtl ? "أحمد في ايرلندا" : "Ahmad in Ireland"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-midnight text-lg" style={{ fontFamily: "cursive" }}>
                Éire · ايرلندا
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span
            className="inline-block text-white text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[-2deg] mb-6"
            style={{ background: DEEP }}
          >
            {rtl ? "☘ مقدّمة" : "☘ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl leading-snug whitespace-pre-line" style={{ color: DEEP }}>
            {intro}
          </p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {[GREEN, "#E9EFE7", ORANGE, GREEN].map((c, i) => (
              <span key={i} className="h-1.5 w-10" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono" style={{ color: ORANGE }}>
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1" style={{ background: `${GREEN}33` }} />
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className={`md:col-span-7 ${align}`}>
            <h3 className="font-display text-3xl md:text-4xl mb-5" style={{ color: DEEP }}>
              {rtl ? "جمهورية ايرلندا الجنوبية" : "The Republic of Ireland"}
            </h3>
            <p className="font-body text-base md:text-lg text-charcoal/85 leading-[1.95]">{ABOUT[lang]}</p>
          </div>
          <div className="md:col-span-5 space-y-4">
            <figure className="overflow-hidden rounded-2xl shadow-lg md:translate-x-4" style={{ border: `1px solid ${GREEN}22` }}>
              <img
                src={LANDSCAPE}
                alt={rtl ? "مشاهد من ايرلندا" : "Scenes from Ireland"}
                loading="lazy"
                className="h-48 md:h-60 w-full object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl bg-white shadow-md p-4" style={{ border: `1px solid ${ORANGE}33` }}>
              <img
                src={FLAG}
                alt={rtl ? "علم جمهورية ايرلندا" : "The flag of the Republic of Ireland"}
                loading="lazy"
                className="h-28 w-full object-contain"
              />
              <figcaption className={`mt-3 font-body text-xs text-charcoal/70 ${align}`}>
                {rtl ? "علم جمهورية ايرلندا" : "The flag of the Republic of Ireland"}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* ANTHEM */}
      <div className="relative z-10 mt-20">
        <AnthemPlayer
          src={ANTHEM}
          lang={lang}
          title={rtl ? "علم جمهورية ايرلندا والنشيد الوطني الايرلندي" : "The flag of Ireland and the Irish national anthem"}
        />
      </div>

      {/* FACTS — emblem & map + video */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group relative bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow" style={{ border: `1px solid ${GREEN}26` }}>
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] font-mono z-10" style={{ color: ORANGE }}>
              {rtl ? "01 · حقيقة" : "01 · Fact"}
            </div>
            <div
              className="pt-16 pb-8 px-6 flex items-center justify-center min-h-[280px]"
              style={{ background: `linear-gradient(180deg, ${PAPER}, #ffffff)` }}
            >
              <img
                src={EMBLEM_MAP}
                alt={rtl ? "شعار وخارطة ايرلندا الجنوبية" : "Emblem and map of Ireland"}
                loading="lazy"
                className="max-h-60 w-auto object-contain drop-shadow-md"
              />
            </div>
            <div className={`border-t px-6 py-4 ${align}`} style={{ borderColor: `${GREEN}1f` }}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-1">
                {rtl ? "الشعار والموقع" : "Emblem & geography"}
              </div>
              <div className="font-display text-xl" style={{ color: DEEP }}>
                {rtl ? "شعار وخارطة ايرلندا الجنوبية · العاصمة دبلن" : "Emblem and map of Ireland · Capital Dublin"}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden shadow-md flex flex-col text-cream" style={{ background: DEEP, border: `1px solid ${DEEP}` }}>
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] font-mono z-10" style={{ color: ORANGE }}>
              {rtl ? "02 · مشاهدة" : "02 · Watch"}
            </div>
            <CelticKnot className="absolute -bottom-10 -right-10 w-44 text-cream/10 pointer-events-none" />
            <div className={`relative pt-16 px-7 ${align}`}>
              <h3 className="font-display text-2xl md:text-3xl mb-4">
                {rtl ? "شاهد فيديو السياحة في ايرلندا الجنوبية" : "Watch the Ireland travel video"}
              </h3>
            </div>
            <div className="relative mt-auto px-7 pb-7">
              <div className="overflow-hidden border border-cream/20 bg-midnight" style={{ aspectRatio: "16 / 9" }}>
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/19LKcWFrrC8"
                  title={rtl ? "السياحة في دبلن ايرلندا" : "Tourism in Dublin, Ireland"}
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
