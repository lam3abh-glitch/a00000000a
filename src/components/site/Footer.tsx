import { Link } from "@tanstack/react-router";
import { type Lang, t } from "@/lib/i18n";

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="bg-midnight text-cream/80 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-cream">{t[lang].siteName}</div>
          <div className="mt-1 text-xs uppercase tracking-[0.25em] text-gold/80">{t[lang].tagline}</div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/60 whitespace-pre-line">{t[lang].footer.desc}</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-gold/70 mb-4">{t[lang].nav.explore}</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/$lang/countries" params={{ lang }} className="hover:text-gold">{t[lang].nav.countries}</Link></li>
            <li><Link to="/$lang/continents/$slug" params={{ lang, slug: "asia" }} className="hover:text-gold">{lang === "ar" ? "آسيا" : "Asia"}</Link></li>
            <li><Link to="/$lang/continents/$slug" params={{ lang, slug: "oceania" }} className="hover:text-gold">{lang === "ar" ? "أوقيانوسيا" : "Oceania"}</Link></li>
            <li><Link to="/$lang/continents/$slug" params={{ lang, slug: "europe" }} className="hover:text-gold">{lang === "ar" ? "أوروبا" : "Europe"}</Link></li>
            <li><Link to="/$lang/continents/$slug" params={{ lang, slug: "africa" }} className="hover:text-gold">{lang === "ar" ? "أفريقيا" : "Africa"}</Link></li>
            <li><Link to="/$lang/continents/$slug" params={{ lang, slug: "north-america" }} className="hover:text-gold">{lang === "ar" ? "أمريكا الشمالية" : "North America"}</Link></li>
            <li><Link to="/$lang/continents/$slug" params={{ lang, slug: "south-america" }} className="hover:text-gold">{lang === "ar" ? "أمريكا الجنوبية" : "South America"}</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-gold/70 mb-4">Social</div>
          <ul className="space-y-2 text-sm">
            <li><a href="https://youtube.com/c/flywithahmeda" target="_blank" rel="noreferrer" className="hover:text-gold">YouTube</a></li>
            <li><a href="http://www.instagram.com/ahmed_bahrain" target="_blank" rel="noreferrer" className="hover:text-gold">Instagram</a></li>
            <li><a href="http://www.twitter.com/ahmed__bahrain" target="_blank" rel="noreferrer" className="hover:text-gold">Twitter</a></li>
            <li><a href="http://www.facebook.com/100region" target="_blank" rel="noreferrer" className="hover:text-gold">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-cream/40 flex justify-between">
          <span>© {new Date().getFullYear()} {t[lang].siteName}. {t[lang].footer.rights}.</span>
          <span>Bahrain ⟶ World</span>
        </div>
      </div>
    </footer>
  );
}