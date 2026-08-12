import { type Lang } from "@/lib/i18n";
import { useTx } from "@/lib/ui-i18n";

type Month = {
  ar: string;
  en: string;
  high: number; // °C
  low: number;
  rain: number; // mm
  note_ar: string;
  note_en: string;
};

const UAE_MONTHS: Month[] = [
  { ar: "يناير",  en: "January",   high: 24, low: 14, rain: 12, note_ar: "معتدل ومشمس", note_en: "Mild & sunny" },
  { ar: "فبراير", en: "February",  high: 26, low: 15, rain: 25, note_ar: "لطيف ومنعش", note_en: "Pleasant" },
  { ar: "مارس",   en: "March",     high: 29, low: 18, rain: 22, note_ar: "دافئ", note_en: "Warm" },
  { ar: "أبريل",  en: "April",     high: 34, low: 21, rain: 8,  note_ar: "دافئ إلى حار", note_en: "Warm to hot" },
  { ar: "مايو",   en: "May",       high: 39, low: 25, rain: 1,  note_ar: "حار وجاف", note_en: "Hot & dry" },
  { ar: "يونيو",  en: "June",      high: 41, low: 28, rain: 0,  note_ar: "شديد الحرارة", note_en: "Very hot" },
  { ar: "يوليو",  en: "July",      high: 42, low: 30, rain: 0,  note_ar: "حار ورطب", note_en: "Hot & humid" },
  { ar: "أغسطس",  en: "August",    high: 42, low: 30, rain: 1,  note_ar: "حار ورطب", note_en: "Hot & humid" },
  { ar: "سبتمبر", en: "September", high: 40, low: 27, rain: 0,  note_ar: "حار", note_en: "Hot" },
  { ar: "أكتوبر", en: "October",   high: 35, low: 23, rain: 2,  note_ar: "أدفأ من المعتدل", note_en: "Warm" },
  { ar: "نوفمبر", en: "November",  high: 30, low: 19, rain: 3,  note_ar: "لطيف", note_en: "Pleasant" },
  { ar: "ديسمبر", en: "December",  high: 26, low: 15, rain: 15, note_ar: "معتدل", note_en: "Mild" },
];

function tempColor(high: number) {
  // interpolate cream -> gold -> terracotta based on high temp
  if (high < 28) return "oklch(0.85 0.06 85)";
  if (high < 34) return "oklch(0.80 0.10 75)";
  if (high < 40) return "oklch(0.72 0.13 55)";
  return "oklch(0.62 0.15 40)";
}

export function WeatherByMonth({ lang }: { lang: Lang }) {
  const tx = useTx(lang);
  const title = tx("الطقس على مدار السنة", "Weather through the year");
  const sub = tx(
    "متوسّط درجات الحرارة وهطول الأمطار في الإمارات لكل شهر.",
    "Average temperatures and rainfall in the UAE, month by month.",
  );
  const eyebrow = tx("دليل الطقس", "Climate guide");
  const highLbl = tx("عليا", "High");
  const lowLbl = tx("دنيا", "Low");
  const rainLbl = tx("أمطار", "Rain");

  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">{eyebrow}</div>
          <h2 className="font-display text-4xl md:text-5xl text-midnight">{title}</h2>
          <p className="mt-4 text-charcoal/70 max-w-xl mx-auto">{sub}</p>
          <div className="gold-divider w-24 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {UAE_MONTHS.map((m) => (
            <div
              key={m.en}
              className="group relative border border-sand bg-card p-5 flex flex-col hover:border-gold transition"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50">
                {tx(m.ar, m.en)}
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span
                  className="font-display text-4xl"
                  style={{ color: tempColor(m.high) }}
                >
                  {m.high}°
                </span>
                <span className="text-charcoal/50 text-sm">/ {m.low}°</span>
              </div>
              <div className="mt-1 text-[11px] text-charcoal/60">
                {tx(m.note_ar, m.note_en)}
              </div>
              <div className="mt-4 pt-3 border-t border-sand/60 flex items-center justify-between text-[10px] text-charcoal/50 uppercase tracking-wider">
                <span>{rainLbl}</span>
                <span className="text-midnight/70 font-medium">{m.rain} mm</span>
              </div>
              <div className="mt-2 h-1 bg-sand/50 overflow-hidden">
                <div
                  className="h-full bg-midnight/40"
                  style={{ width: `${Math.min(100, (m.rain / 25) * 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.25em] text-charcoal/60">
          <span className="flex items-center gap-2">
            <span className="inline-block w-3 h-3" style={{ background: "oklch(0.85 0.06 85)" }} />
            {tx("معتدل", "Mild")}
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-3 h-3" style={{ background: "oklch(0.80 0.10 75)" }} />
            {tx("دافئ", "Warm")}
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-3 h-3" style={{ background: "oklch(0.72 0.13 55)" }} />
            {tx("حار", "Hot")}
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-3 h-3" style={{ background: "oklch(0.62 0.15 40)" }} />
            {tx("شديد الحرارة", "Very hot")}
          </span>
        </div>
      </div>
    </section>
  );
}