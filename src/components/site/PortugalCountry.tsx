import { AnthemPlayer } from "@/components/site/AnthemPlayer";
import type { Lang } from "@/lib/i18n";

const IMG = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

const EMBLEM_MAP = IMG("2022/04/img_4193.jpg");
const FLAG = IMG("2022/04/img_4736.png");
const AHMAD_PORTUGAL = IMG("2022/01/img_7781.jpg");
const ANTHEM = "https://videos.files.wordpress.com/0ABjTNVZ/my-movie-5-4.mp4";

/** Portuguese palette: azulejo blue, Atlantic green, vermelho red, limestone. */
const AZUL = "#1B4F8A";
const VERDE = "#046A38";
const VERMELHO = "#C8102E";
const OURO = "#C89B3C";
const PEDRA = "#FAF6EE";
const TINTA = "#12233A";

const ABOUT = {
  ar: "بلد يقع في جنوب غرب أوروبا في شبه الجزيرة الايبيرية ، البرتغال هي أقصى دول أوروبا باتجاه الغرب ويحدها المحيط الأطلسي إلى الغرب والجنوب وأسبانيا من الشمال والشرق . كما أن أرخبيل جزر الأزور وماديا في المحيط الأطلسي هما أيضا جزء من البرتغال",
  en: "Portugal lies in south-western Europe on the Iberian Peninsula and is the westernmost country of mainland Europe, bordered by the Atlantic Ocean to the west and south and by Spain to the north and east. The archipelagos of the Azores and Madeira in the Atlantic are also part of Portugal.",
};

/** Armillary sphere — the emblem of the Portuguese age of discovery. */
function Armillary({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <g stroke="currentColor" strokeWidth="2" fill="none">
        <circle cx="50" cy="50" r="38" />
        <ellipse cx="50" cy="50" rx="38" ry="14" />
        <ellipse cx="50" cy="50" rx="14" ry="38" />
        <ellipse cx="50" cy="50" rx="30" ry="30" />
        <path d="M12 40 H88 M12 60 H88" />
        <path d="M50 4 L50 96" />
      </g>
    </svg>
  );
}

/** Calçada portuguesa — the black-and-white wave pavement of Lisbon. */
function CalcadaWave({ className, color }: { className?: string; color: string }) {
  return (
    <svg viewBox="0 0 240 24" aria-hidden preserveAspectRatio="none" className={className}>
      <path
        d="M0 12 C 15 0, 45 0, 60 12 S 105 24, 120 12 S 165 0, 180 12 S 225 24, 240 12"
        fill="none"
        stroke={color}
        strokeWidth="3"
      />
      <path
        d="M0 20 C 15 8, 45 8, 60 20 S 105 32, 120 20 S 165 8, 180 20 S 225 32, 240 20"
        fill="none"
        stroke={color}
        strokeWidth="2"
        opacity="0.5"
      />
    </svg>
  );
}

export function PortugalCountry({ lang, intro }: { lang: Lang; intro: string }) {
  const rtl = lang === "ar";
  const align = rtl ? "text-right" : "text-left";

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ backgroundColor: PEDRA }}>
      {/* Azulejo tile wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.09]"
        style={{
          backgroundImage: `linear-gradient(45deg, ${AZUL} 25%, transparent 25%, transparent 75%, ${AZUL} 75%), linear-gradient(45deg, ${AZUL} 25%, transparent 25%, transparent 75%, ${AZUL} 75%)`,
          backgroundSize: "34px 34px",
          backgroundPosition: "0 0, 17px 17px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{ background: `linear-gradient(180deg, ${VERDE}18 0%, transparent 100%)` }}
      />

      <Armillary className="absolute -top-10 right-2 md:right-10 w-40 md:w-56 pointer-events-none text-[#1B4F8A]/20" />

      {/* INTRO — polaroid + text */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center md:justify-start" dir="ltr">
          <div className="relative rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-6 w-20 h-6 rotate-[-6deg] z-20 shadow-sm" style={{ backgroundColor: `${VERDE}CC` }} />
            <div className="absolute -top-4 right-8 w-16 h-5 rotate-[10deg] z-20 shadow-sm" style={{ backgroundColor: `${VERMELHO}AA` }} />
            <div className="bg-white p-4 pb-16 shadow-2xl max-w-xs md:max-w-sm">
              <img
                src={AHMAD_PORTUGAL}
                alt={rtl ? "أحمد في البرتغال" : "Ahmad in Portugal"}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
              <div className="mt-4 text-center font-display text-lg" style={{ fontFamily: "cursive", color: TINTA }}>
                Portugal · البرتغال
              </div>
            </div>
          </div>
        </div>

        <div className={align}>
          <span
            className="inline-block text-[11px] uppercase tracking-[0.4em] px-4 py-2 rotate-[-2deg] mb-6 text-white"
            style={{ backgroundColor: VERDE }}
          >
            {rtl ? "◆ مقدّمة" : "◆ Introduction"}
          </span>
          <p className="font-display text-3xl md:text-4xl leading-snug whitespace-pre-line" style={{ color: AZUL }}>
            {intro}
          </p>
          <CalcadaWave className="mt-6 h-6 w-56" color={AZUL} />
        </div>
      </div>

      {/* ABOUT — جمهورية البرتغال */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className={`flex items-center gap-3 mb-6 ${rtl ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono" style={{ color: VERMELHO }}>
            {rtl ? "00 · نبذة" : "00 · About"}
          </span>
          <span className="h-px flex-1" style={{ backgroundColor: `${AZUL}26` }} />
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className={`md:col-span-7 ${align}`}>
            <h3 className="font-display text-3xl md:text-4xl mb-5" style={{ color: AZUL }}>
              {rtl ? "جمهورية البرتغال" : "The Portuguese Republic"}
            </h3>
            <p className="font-body text-base md:text-lg text-charcoal/85 leading-[1.95]">{ABOUT[lang]}</p>
            <div className="mt-6 flex items-center gap-1.5" aria-hidden>
              {[VERDE, VERMELHO, AZUL, OURO].map((col) => (
                <span key={col} className="h-1.5 w-10" style={{ backgroundColor: col }} />
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <figure
              className="overflow-hidden rounded-2xl shadow-lg md:translate-x-4 bg-white p-4"
              style={{ border: `1px solid ${AZUL}22` }}
            >
              <img
                src={FLAG}
                alt={rtl ? "علم جمهورية البرتغال" : "The flag of the Portuguese Republic"}
                loading="lazy"
                className="h-40 md:h-48 w-full object-contain"
              />
              <figcaption className={`mt-3 font-display text-lg ${align}`} style={{ color: VERMELHO }}>
                {rtl ? "علم جمهورية البرتغال" : "The flag of the Portuguese Republic"}
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
          title={rtl ? "النشيد الوطني البرتغالي" : "The Portuguese national anthem"}
          theme={{
            bg: "bg-white",
            border: "border-[#1B4F8A]/15",
            buttonBg: "bg-[#046A38]",
            buttonText: "text-white",
            buttonHoverBg: "hover:bg-[#C8102E]",
            buttonHoverText: "hover:text-white",
            accent: "text-[#C8102E]",
            title: "text-[#1B4F8A]",
            ping: "border-[#C89B3C]",
          }}
        />
      </div>

      {/* FACTS — emblem & map + video */}
      <div className="relative z-10 mt-20 mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group relative bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow" style={{ border: `1px solid ${AZUL}1F` }}>
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] font-mono z-10" style={{ color: VERMELHO }}>
              {rtl ? "01 · حقيقة" : "01 · Fact"}
            </div>
            <div className="pt-16 pb-8 px-6 flex items-center justify-center min-h-[280px]" style={{ background: `linear-gradient(180deg, ${PEDRA} 0%, #fff 100%)` }}>
              <img
                src={EMBLEM_MAP}
                alt={rtl ? "شعار وخارطة جمهورية البرتغال" : "Emblem and map of the Portuguese Republic"}
                loading="lazy"
                className="max-h-60 w-auto object-contain drop-shadow-md"
              />
            </div>
            <div className={`px-6 py-4 ${align}`} style={{ borderTop: `1px solid ${AZUL}1F` }}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 mb-1">
                {rtl ? "الشعار والموقع" : "Emblem & Geography"}
              </div>
              <div className="font-display text-xl" style={{ color: AZUL }}>
                {rtl ? "شعار وخارطة جمهورية البرتغال" : "Emblem and map of the Portuguese Republic"}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden shadow-md flex flex-col text-white" style={{ backgroundColor: AZUL }}>
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] font-mono z-10" style={{ color: OURO }}>
              {rtl ? "02 · مشاهدة" : "02 · Watch"}
            </div>
            <Armillary className="absolute -bottom-10 -right-10 w-44 text-white/10 pointer-events-none" />
            <div className={`relative pt-16 px-7 ${align}`}>
              <h3 className="font-display text-2xl md:text-3xl mb-4">
                {rtl ? "شاهد فيديو السياحة في البرتغال" : "Travelling through Portugal"}
              </h3>
            </div>
            <div className="relative mt-auto px-7 pb-7">
              <div className="overflow-hidden border border-white/20 bg-midnight" style={{ aspectRatio: "16 / 9" }}>
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/OonE0CDposg"
                  title={rtl ? "السياحة في البرتغال" : "Tourism in Portugal"}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CalcadaWave className="relative z-10 mt-16 h-8 w-full opacity-40" color={AZUL} />
    </section>
  );
}
