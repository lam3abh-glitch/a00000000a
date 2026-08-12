import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { type Lang, t, tx } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

export function Header({ lang }: { lang: Lang }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [loc.pathname]);

  const tr = t[lang].nav;
  const otherLang: Lang = tx(lang, "ar");
  const otherPath = loc.pathname.replace(/^\/(ar|en)/, `/${otherLang}`) || `/${otherLang}`;

  const links = [
    { to: `/${lang}`, label: tr.home, exact: true },
    { to: `/${lang}/countries`, label: tr.countries },
    { to: `/${lang}/itineraries/czech-republic-15-days`, label: tr.itineraries },
    { to: `/${lang}/stories/trans-siberian-railway`, label: tr.stories },
    { to: `/${lang}/about`, label: tr.about },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-midnight/85 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-cream">
        <Link to="/$lang" params={{ lang }} className="flex items-baseline gap-2">
          <span className="font-display text-xl md:text-2xl tracking-tight">{t[lang].siteName}</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.25em] text-gold/80">
            {t[lang].tagline}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-cream/80 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.exact }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-xs">
          <Link
            to={otherPath}
            className="rounded-full border border-cream/20 px-3 py-1 text-cream/80 hover:border-gold hover:text-gold transition"
          >
            {otherLang === "ar" ? "العربية" : "English"}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/90 hover:border-gold hover:text-gold transition"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden bg-midnight/95 backdrop-blur-md border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-cream/85 hover:text-gold transition-colors py-1"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.exact }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}