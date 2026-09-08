import type { Lang } from "@/lib/i18n";
import ahmadTunisia from "@/assets/ahmad-tunisia.jpeg.asset.json";

const IMG = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const SIDI_BOU_SAID = IMG("2022/10/img_4701.jpg");
const EMBLEM_MAP = IMG("2022/04/img_4449.jpg");
const ANTHEM_VIDEO = "https://videos.files.wordpress.com/mO29iXCI/my-movie-5-7-1.mp4";

const RED = "#E70013";
const BLUE = "#1B4F9C";
const DEEP = "#131C34";
const SAND = "#FBF7EF";
const WHITE = "#FFFFFF";

const ABOUT = {
  ar: "هي دولة في أقصى شمال أفريقيا ، وهي جزء من منطقة المغرب العربي ، وتحدها الجزائر من الغرب والجنوب الغربي ، ليبيا من الجنوب الشرقي والبحر الأبيض المتوسط من الشمال والشرق ، تحتوي على الطرف الشرقي لجبال الأطلس والروافد الشمالية للصحراء الكبرى ، مع الكثير من أراضيها المتبقية من الأراضي الصالحة للزراعة . يشمل خطها الساحلي الذي يبلغ طوله 1300 كيلومتر (810 ميل) الارتباط الأفريقي بين الأجزاء الغربية والشرقية",
  en: "Tunisia is a country in the far north of Africa and part of the Maghreb, bordered by Algeria to the west and south-west, Libya to the south-east, and the Mediterranean Sea to the north and east. It holds the eastern tip of the Atlas Mountains and the northern reaches of the Sahara, with much of the remaining land arable. Its 1,300 km (810 mile) coastline forms the African link between the western and eastern parts of the Mediterranean.",
};

const TAGLINE = {
  ar: "تونس الخضراء .. أزرق سيدي بوسعيد وبياض المدينة العتيقة",
  en: "Green Tunisia — the blue of Sidi Bou Said and the white of the old medina",
};

/** Crescent and five-pointed star of the Tunisian flag. */
function CrescentStar({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className} style={style}>
      <path
        d="M62 12a38 38 0 1 0 0 76 30 30 0 1 1 0-76Z"
        fill="currentColor"
      />
      <path
        d="M60 34 L64.7 47.6 L79 47.9 L67.6 56.5 L71.6 70.3 L60 62 L48.4 70.3 L52.4 56.5 L41 47.9 L55.3 47.6 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Tunisian keyhole arch frame (Sidi Bou Said doorway). */
function Keyhole({ children, color = BLUE }: { children: React.ReactNode; color?: string }) {
  return (
    <div
      className="overflow-hidden bg-white shadow-2xl"
      style={{ borderRadius: "48% 48% 10px 10px / 32% 32% 6px 6px", border: `6px solid ${color}` }}
    >
      {children}
    </div>
  );
}

export function TunisiaCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";
  const t = (o: { ar: string; en: string }) => (rtl ? o.ar : o.en);

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: SAND }}>
      <div aria-hidden className="absolute inset-x-0 top-0 h-3" style={{ background: RED }} />

      {/* Sidi Bou Said blue lattice */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #1B4F9C 0 2px, transparent 2px 22px), repeating-linear-gradient(-45deg, #1B4F9C 0 2px, transparent 2px 22px)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(75% 45% at 100% 0%, rgba(231,0,19,0.14) 0%, transparent 60%), linear-gradient(180deg, transparent 60%, rgba(27,79,156,0.12) 100%)",
        }}
      />
      <CrescentStar className="absolute top-14 -left-10 w-44 md:w-60 pointer-events-none" style={{ color: `${RED}1F` }} />
      <CrescentStar className="absolute bottom-6 -right-10 w-32 md:w-44 pointer-events-none" style={{ color: `${BLUE}26` }} />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-8 w-20 h-6 rotate-[7deg] z-20 shadow-sm" style={{ background: "rgba(231,0,19,0.75)" }} />
            <div className="absolute -top-4 right-6 w-16 h-5 rotate-[-9deg] z-20 shadow-sm" style={{ background: "rgba(27,79,156,0.7)" }} />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={ahmadTunisia.url}
                alt={rtl ? "أحمد أمام باب بحر في تونس" : "Ahmad in front of Bab Bhar in Tunis"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center text-lg" style={{ color: DEEP, fontFamily: "cursive" }}>
                Tunisie · تونس
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span
            className="inline-block text-white text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[2deg] mb-6"
            style={{ background: RED }}
          >
            {rtl ? "✦ مقدّمة" : "✦ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl leading-snug whitespace-pre-line" style={{ color: DEEP }}>
            {intro}
          </p>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: `${DEEP}B0` }}>
            {t(TAGLINE)}
          </p>
          <div className="mt-6 flex items-center gap-1.5" aria-hidden>
            {[RED, WHITE, BLUE, RED].map((c, i) => (
              <span key={i} className="h-1.5 w-10 border" style={{ background: c, borderColor: `${DEEP}20` }} />
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono" style={{ color: RED }}>
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1" style={{ background: `${DEEP}22` }} />
        </div>
        <h2 className={`font-display text-3xl md:text-4xl mb-5 ${align}`} style={{ color: DEEP }}>
          {rtl ? "جمهورية تونس" : "The Republic of Tunisia"}
        </h2>
        <div className={`space-y-5 text-lg leading-relaxed ${align}`} style={{ color: `${DEEP}CC` }}>
          <p>{t(ABOUT)}</p>
        </div>

        <div className="mt-10" dir="ltr">
          <Link
            to="/$lang/countries/$country/guides/$topic"
            params={{ lang, country: "tunisia", topic: "tourist-places" }}
            className="block bg-white p-2 shadow-lg transition hover:-translate-y-1"
            style={{ transform: "rotate(-1.2deg)" }}
          >
            <img
              src={SIDI_BOU_SAID}
              alt={rtl ? "تونس الخضراء - سيدي بوسعيد" : "Green Tunisia — Sidi Bou Said"}
              loading="lazy"
              className="block w-full h-72 md:h-96 object-cover"
            />
            <span className={`block mt-3 mb-1 text-sm ${align}`} style={{ color: BLUE }}>
              {rtl ? "تونس الخضراء — اضغط للمزيد ←" : "Green Tunisia — click for more →"}
            </span>
          </Link>
        </div>
      </div>

      {/* EMBLEM / MAP + ANTHEM */}
      <div className="relative z-10 mt-16 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md p-6">
          <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-4" style={{ color: RED }}>
            {rtl ? "01 · الشعار والخارطة" : "01 · Emblem & map"}
          </div>
          <Link
            to="/$lang/countries/$country/guides/$topic"
            params={{ lang, country: "tunisia", topic: "general-info" }}
            className="block"
          >
            <Keyhole>
              <img
                src={EMBLEM_MAP}
                alt={rtl ? "شعار وخارطة جمهورية تونس" : "Emblem and map of the Republic of Tunisia"}
                loading="lazy"
                className="w-full h-64 object-contain bg-white"
              />
            </Keyhole>
          </Link>
          <div className={`mt-4 font-display text-xl ${align}`} style={{ color: DEEP }}>
            {rtl ? "شعار وخارطة جمهورية تونس" : "Emblem and map of Tunisia · Capital Tunis"}
          </div>
        </div>

        <div className="relative overflow-hidden shadow-md flex flex-col text-white" style={{ background: DEEP }}>
          <CrescentStar className="absolute -bottom-12 -right-10 w-44 text-white/10 pointer-events-none" />
          <div className={`relative pt-8 px-7 ${align}`}>
            <div className="text-[10px] uppercase tracking-[0.4em] font-mono mb-3" style={{ color: "#F2A8A8" }}>
              {rtl ? "02 · العلم والنشيد" : "02 · Flag & anthem"}
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-4">
              {rtl ? "علم جمهورية تونس والنشيد الوطني التونسي" : "The flag of Tunisia and the Tunisian national anthem"}
            </h3>
          </div>
          <div className="relative mt-auto px-7 pb-7">
            <div className="overflow-hidden border border-white/20" style={{ background: "#000" }}>
              <video src={ANTHEM_VIDEO} controls preload="metadata" className="block w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* SUB-PAGES */}
      <div className="relative z-10 mt-16 mx-auto max-w-6xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono" style={{ color: BLUE }}>
            {rtl ? "03 · صفحات تونس" : "03 · Tunisia pages"}
          </span>
          <span className="h-px flex-1" style={{ background: `${DEEP}22` }} />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tunisiaGuides.map((g, i) => (
            <Link
              key={g.slug}
              to="/$lang/countries/$country/guides/$topic"
              params={{ lang, country: "tunisia", topic: g.slug }}
              className="group block bg-white shadow-lg overflow-hidden transition hover:-translate-y-1"
              style={{ borderTop: `4px solid ${i % 2 ? BLUE : RED}` }}
            >
              <div className="overflow-hidden">
                <img
                  src={g.image}
                  alt={rtl ? g.title_ar : g.title_en}
                  loading="lazy"
                  className="block w-full h-44 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className={`p-5 ${align}`}>
                <div className="text-[10px] uppercase tracking-[0.35em] font-mono mb-2" style={{ color: i % 2 ? BLUE : RED }}>
                  {rtl ? g.kicker_ar : g.kicker_en}
                </div>
                <div className="font-display text-xl leading-snug" style={{ color: DEEP }}>
                  {rtl ? g.title_ar : g.title_en}
                </div>
                <div className="mt-3 text-sm" style={{ color: `${DEEP}99` }}>
                  {rtl ? "اقرأ المزيد ←" : "Read more →"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
