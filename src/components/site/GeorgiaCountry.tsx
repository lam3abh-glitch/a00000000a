import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import type { Lang } from "@/lib/i18n";

const IMG = (name: string, month: string) =>
  `https://i0.wp.com/100region.com/wp-content/uploads/${month}/${name}?ssl=1`;

const AHMAD_GEORGIA = IMG("img_2692.jpg", "2022/03");
const EMBLEM_MAP = IMG("img_4236.jpg", "2022/04");
const SNOW = IMG("img_4097-2.jpg", "2022/04");
const TBILISI_VIEW = IMG("img_8035.jpg", "2022/04");
const ANTHEM = "https://videos.files.wordpress.com/gPogUO6S/my-movie-5-7.mp4";

const ABOUT = {
  ar: "هي دولة ذات سيادة في منطقة جنوب القوقاز في غرب آسيا ، يحدها من الغرب البحر الاسود ، ومن الشمال روسيا ، ومن الجنوب تركيا وأرمينيا ، ومن الشرق اذربيجان",
  en: "Georgia is a sovereign state in the South Caucasus in western Asia, bordered to the west by the Black Sea, to the north by Russia, to the south by Turkey and Armenia, and to the east by Azerbaijan.",
};

const ABOUT_2 = {
  ar: "تشتهر السياحة في جورجيا بوجود الاماكن الطبيعية الساحرة المتمثلة فى الأنهار والعيون والآبار ، وفيها الكثير من مناطق الجذب السياحى ، وذلك لاحتوائها على معالم وآثار تاريخية تعود الى اقدم الحضارات التى سيطرت عليها فى الزمن السالف ،ولا تزال تضم حتى اليوم بقايا آثارها ، وبالأخص مدنها او مستعمراتها التى بنيت منذ قرون عديدة على رأسها مدينة تبليسى العاصمة ، ومدينة باتومي الساحلية التى تطل على ساحل البحر الأسود",
  en: "Tourism in Georgia is famous for its enchanting natural settings — rivers, springs and wells — and the country holds a great many attractions, since it contains monuments and historic remains going back to the oldest civilisations that once ruled it, whose traces survive to this day, above all in its cities and settlements built many centuries ago: the capital Tbilisi and the coastal city of Batumi on the shore of the Black Sea.",
};

const ABOUT_3 = {
  ar: "وعلى الرغم من ان جمهورية جورجيا تعد دولة صغيرة فى مساحتها وعدد سكانها ، غير ان ما تضمه من تراث ثقافى وتاريخ غنى بالآثار جعلها من افضل الدول السياحية التى يتمنى المرء ان يقوم بزيارتها ، فهي تعتبر مقصد هام جدا للسياح من أصقاع الأرض وتضم معالم سياحية وتاريخية وأثرية هامة ومتنوعة",
  en: "Although the Republic of Georgia is a small country in area and population, its cultural heritage and history rich in monuments have made it one of the finest countries anyone could wish to visit. It is a very important destination for travellers from every corner of the earth and holds important and varied historic and archaeological sights.",
};

/** Bolnisi cross — the motif repeated five times on the Georgian flag. */
function BolnisiCross({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M42 4h16c0 14 0 22 4 26 4 4 12 4 26 4v16c-14 0-22 0-26 4-4 4-4 12-4 26H42c0-14 0-22-4-26-4-4-12-4-26-4V34c14 0 22 0 26-4 4-4 4-12 4-26z"
      />
    </svg>
  );
}

/** Borjgali — the ancient Georgian sun symbol. */
function Borjgali({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <g stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round">
        <circle cx="50" cy="50" r="9" />
        {Array.from({ length: 7 }).map((_, i) => (
          <path
            key={i}
            d="M50 39 C50 24 62 16 70 22"
            transform={`rotate(${(360 / 7) * i} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="44" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

export function GeorgiaCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  return (
    <section className="relative overflow-hidden bg-gestone py-20 sm:py-24">
      {/* Caucasus stone wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--geored) 10%, transparent) 0%, transparent 40%, color-mix(in oklab, var(--gepine) 12%, transparent) 100%)",
        }}
      />
      {/* Grapevine / stone-carving lattice */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, var(--geowine) 0 1.5px, transparent 1.5px 22px), repeating-linear-gradient(90deg, var(--geowine) 0 1.5px, transparent 1.5px 22px)",
          backgroundSize: "44px 44px",
        }}
      />

      <BolnisiCross className="absolute -top-4 left-3 md:left-10 w-24 md:w-32 text-geored/15 pointer-events-none" />
      <Borjgali className="absolute bottom-6 right-2 md:right-12 w-28 md:w-40 text-geowine/20 pointer-events-none" />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[3deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-8 w-20 h-6 bg-geored/70 rotate-[7deg] z-20 shadow-sm" />
            <div className="absolute -top-4 right-6 w-14 h-5 bg-gepine/60 rotate-[-9deg] z-20 shadow-sm" />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={AHMAD_GEORGIA}
                alt={rtl ? "أحمد في جورجيا" : "Ahmad in Georgia"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-midnight text-lg" style={{ fontFamily: "cursive" }}>
                საქართველო · جورجيا
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span className="inline-block bg-geowine text-gestone text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[2deg] mb-6">
            {rtl ? "✚ مقدّمة" : "✚ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl text-geowine leading-snug whitespace-pre-line">{intro}</p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {["bg-geored", "bg-geowine", "bg-gepine", "bg-gold"].map((c) => (
              <span key={c} className={`h-1.5 w-10 ${c}`} />
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT — جمهورية جورجيا */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-geored font-mono">
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1 bg-geowine/15" />
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className={`md:col-span-7 ${align}`}>
            <h3 className="font-display text-3xl md:text-4xl text-geowine mb-5">
              {rtl ? "جمهورية جورجيا" : "The Republic of Georgia"}
            </h3>
            <p className="font-body text-base md:text-lg text-charcoal/85 leading-[1.95]">{ABOUT[lang]}</p>
            <p className="mt-5 font-body text-base md:text-lg text-charcoal/85 leading-[1.95]">{ABOUT_2[lang]}</p>
            <p className="mt-5 font-body text-base md:text-lg text-charcoal/85 leading-[1.95]">{ABOUT_3[lang]}</p>
          </div>
          <div className="md:col-span-5 space-y-4">
            <figure className="overflow-hidden rounded-2xl shadow-lg border border-geowine/10 md:-translate-x-4">
              <img
                src={SNOW}
                alt={rtl ? "التزلج على جبال جورجيا" : "Skiing in the Georgian mountains"}
                loading="lazy"
                className="h-48 md:h-56 w-full object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl shadow-lg border border-geowine/10">
              <img
                src={TBILISI_VIEW}
                alt={rtl ? "مشاهد من تبليسي" : "Scenes from Tbilisi"}
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
          title={rtl ? "النشيد الوطني الجورجي" : "The Georgian national anthem"}
        />
      </div>

      {/* FACTS — emblem & map + video */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group relative bg-white border border-geowine/10 overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-geored font-mono z-10">
              {rtl ? "01 · حقيقة" : "01 · Fact"}
            </div>
            <div className="pt-16 pb-8 px-6 flex items-center justify-center bg-gradient-to-b from-gestone to-white min-h-[280px]">
              <img
                src={EMBLEM_MAP}
                alt={rtl ? "شعار وخارطة جمهورية جورجيا" : "Emblem and map of the Republic of Georgia"}
                loading="lazy"
                className="max-h-60 w-auto object-contain drop-shadow-md"
              />
            </div>
            <div className={`border-t border-geowine/10 px-6 py-4 ${align}`}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-1">
                {rtl ? "الشعار والموقع" : "Emblem & Geography"}
              </div>
              <div className="font-display text-xl text-geowine">
                {rtl ? "شعار وخارطة جمهورية جورجيا" : "Emblem and map of the Republic of Georgia"}
              </div>
            </div>
          </div>

          <div className="relative bg-geowine text-gestone border border-geowine overflow-hidden shadow-md flex flex-col">
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-gold font-mono z-10">
              {rtl ? "02 · مشاهدة" : "02 · Watch"}
            </div>
            <BolnisiCross className="absolute -bottom-8 -right-8 w-40 text-gestone/10 pointer-events-none" />
            <div className={`relative pt-16 px-7 ${align}`}>
              <h3 className="font-display text-2xl md:text-3xl mb-4">
                {rtl ? "السياحة في جورجيا" : "Travelling through Georgia"}
              </h3>
            </div>
            <div className="relative mt-auto px-7 pb-7">
              <div className="overflow-hidden border border-gestone/20 bg-midnight" style={{ aspectRatio: "16 / 9" }}>
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/FxNACyG0T2M"
                  title={rtl ? "السياحة في جورجيا" : "Tourism in Georgia"}
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
