import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { getCity } from "@/lib/content.functions";
import { type Lang, t } from "@/lib/i18n";
import { getCityArticle, type ArticleLine } from "@/lib/city-articles";

const qo = (country: string, city: string) =>
  queryOptions({ queryKey: ["city", country, city], queryFn: () => getCity({ data: { country, city } }) });

export const Route = createFileRoute("/$lang/countries/$country/$city")({
  loader: ({ context, params }) => context.queryClient.ensureQueryData(qo(params.country, params.city)),
  component: City,
});

function City() {
  const { lang, country: countrySlug, city: citySlug } = useParams({ from: "/$lang/countries/$country/$city" }) as { lang: Lang; country: string; city: string };
  const { data } = useSuspenseQuery(qo(countrySlug, citySlug));
  if (!data.city || !data.country) throw notFound();
  const city: any = data.city;
  const country: any = data.country;
  const tr = t[lang];
  const name = lang === "ar" ? city.name_ar : city.name_en;
  const article = getCityArticle(city.slug, lang);
  const heroImage = article?.heroImage ?? city.hero_image;

  // Collect all images from the article for the lightbox gallery.
  const galleryImages = useMemo(
    () => (article ? article.lines.filter((l) => l.kind === "IMG").map((l) => l.value) : []),
    [article],
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const openLightbox = useCallback((src: string) => {
    const idx = galleryImages.indexOf(src);
    setLightboxIndex(idx >= 0 ? idx : 0);
  }, [galleryImages]);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % galleryImages.length)),
    [galleryImages.length],
  );
  const prevImage = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length)),
    [galleryImages.length],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) { if (dx < 0) nextImage(); else prevImage(); }
    touchStartX.current = null;
  };

  // Split article lines into pre-attractions prelude (intro, history, geography, etc.)
  // and a list of attraction blocks (each starting at an H5).
  type Attraction = { title: string; paragraphs: string[]; images: string[] };
  const { prelude, attractions } = useMemo(() => {
    const pre: ArticleLine[] = [];
    const list: Attraction[] = [];
    let current: Attraction | null = null;
    for (const line of article?.lines ?? []) {
      if (line.kind === "H5") {
        current = { title: line.value, paragraphs: [], images: [] };
        list.push(current);
        continue;
      }
      if (current) {
        if (line.kind === "IMG") current.images.push(line.value);
        else if (line.kind === "P" || line.kind === "LI") current.paragraphs.push(line.value);
        else {
          // H3/H4 after attractions started — end attraction grouping
          current = null;
          pre.push(line);
        }
      } else {
        pre.push(line);
      }
    }
    return { prelude: pre, attractions: list };
  }, [article]);

  const renderLine = (line: ArticleLine, index: number) => {
    if (line.kind === "IMG") {
      return (
        <figure key={index} className="my-6 sm:my-8 md:my-10 overflow-hidden rounded-xl bg-midnight/5 shadow-xl group">
          <button
            type="button"
            onClick={() => openLightbox(line.value)}
            className="block w-full cursor-zoom-in overflow-hidden"
            aria-label={lang === "ar" ? "فتح الصورة" : "Open image"}
          >
            <img
              src={line.value}
              alt={article?.title ?? name}
              loading="lazy"
              className="w-full max-h-[280px] sm:max-h-[420px] md:max-h-[520px] object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </button>
        </figure>
      );
    }

    if (line.kind === "H3") {
      const text = line.value.replace(/\\n/g, "").trim();
      if (!text) return null;
      return (
        <h2 key={index} className="pt-8 sm:pt-10 font-display text-2xl sm:text-3xl md:text-4xl text-midnight leading-tight">
          {text}
        </h2>
      );
    }

    if (line.kind === "H4") {
      return (
        <h3 key={index} className="font-display text-xl sm:text-2xl md:text-3xl text-midnight/90 leading-tight">
          {line.value}
        </h3>
      );
    }

    if (line.kind === "H5") {
      return (
        <h3 key={index} className="pt-6 sm:pt-8 font-display text-xl sm:text-2xl md:text-3xl text-midnight leading-tight border-t border-sand">
          <span className="text-gold ml-3">◆</span>
          {line.value}
        </h3>
      );
    }

    if (line.kind === "LI") {
      return (
        <li key={index} className="mr-5 sm:mr-6 list-disc text-[15px] sm:text-base md:text-lg text-charcoal/80 leading-loose">
          {line.value}
        </li>
      );
    }

    return (
      <p key={index} className="text-[15px] sm:text-base md:text-lg text-charcoal/85 leading-[1.9]">
        {line.value}
      </p>
    );
  };

  const AttractionImage = ({
    src,
    className,
    heightClass,
  }: {
    src: string;
    className?: string;
    heightClass?: string;
  }) => (
    <button
      type="button"
      onClick={() => openLightbox(src)}
      className={`group relative block w-full overflow-hidden rounded-2xl bg-midnight/5 shadow-lg cursor-zoom-in ${className ?? ""}`}
      aria-label={lang === "ar" ? "فتح الصورة" : "Open image"}
    >
      <img
        src={src}
        alt={name}
        loading="lazy"
        className={`w-full object-cover transition duration-700 group-hover:scale-[1.04] ${heightClass ?? "h-full"}`}
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </button>
  );

  const AttractionNumber = ({ n }: { n: number }) => (
    <div className="inline-flex items-baseline gap-2 text-gold">
      <span className="font-display text-5xl sm:text-6xl leading-none">
        {String(n).padStart(2, "0")}
      </span>
      <span className="h-px w-10 bg-gold/60 translate-y-[-0.6em]" />
    </div>
  );

  const AttractionText = ({ a, n }: { a: Attraction; n: number }) => (
    <div className="space-y-4">
      <AttractionNumber n={n} />
      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-midnight leading-tight">
        {a.title}
      </h3>
      {a.paragraphs.map((p, i) => (
        <p key={i} className="text-[15px] sm:text-base md:text-lg text-charcoal/85 leading-[1.9]">
          {p}
        </p>
      ))}
    </div>
  );

  const renderAttraction = (a: Attraction, i: number) => {
    const n = i + 1;
    const imgs = a.images;

    // First attraction: large feature block
    if (i === 0) {
      return (
        <section key={i} className="pt-6">
          {imgs[0] && (
            <AttractionImage
              src={imgs[0]}
              heightClass="h-[260px] sm:h-[400px] md:h-[520px]"
              className="mb-6 sm:mb-8"
            />
          )}
          <div className="max-w-3xl">
            <AttractionText a={a} n={n} />
          </div>
          {imgs.length > 1 && (
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              {imgs.slice(1, 3).map((src) => (
                <AttractionImage key={src} src={src} heightClass="h-40 sm:h-56 md:h-72" />
              ))}
            </div>
          )}
        </section>
      );
    }

    // No image → clean editorial text block
    if (imgs.length === 0) {
      return (
        <section key={i} className="border-t border-sand pt-8 sm:pt-10">
          <div className="max-w-3xl">
            <AttractionText a={a} n={n} />
          </div>
        </section>
      );
    }

    // Two images → cluster layout
    if (imgs.length >= 2) {
      const reverse = i % 2 === 0;
      return (
        <section key={i} className="border-t border-sand pt-8 sm:pt-10">
          <div className={`grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-12 ${reverse ? "" : "md:[direction:ltr]"}`}>
            <div className={`md:col-span-5 ${lang === "ar" ? "md:[direction:rtl]" : ""}`}>
              <AttractionText a={a} n={n} />
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
              <AttractionImage src={imgs[0]} heightClass="h-48 sm:h-64 md:h-80" className="col-span-2" />
              {imgs.slice(1, 3).map((src) => (
                <AttractionImage key={src} src={src} heightClass="h-32 sm:h-44 md:h-52" />
              ))}
            </div>
          </div>
        </section>
      );
    }

    // Single image → alternating side-by-side (odd = image start, even = image end)
    const imageFirst = i % 2 === 1;
    return (
      <section key={i} className="border-t border-sand pt-8 sm:pt-10">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-12 md:items-center">
          <div className={`md:col-span-6 ${imageFirst ? "md:order-1" : "md:order-2"}`}>
            <AttractionImage src={imgs[0]} heightClass="h-56 sm:h-72 md:h-96" />
          </div>
          <div className={`md:col-span-6 ${imageFirst ? "md:order-2" : "md:order-1"}`}>
            <AttractionText a={a} n={n} />
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="bg-cream">
      <section className="relative h-[52vh] min-h-[340px] sm:h-[60vh] sm:min-h-[420px] bg-midnight">
        <img src={heroImage} alt={name} className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl h-full flex flex-col justify-end px-4 sm:px-6 pb-10 sm:pb-16 text-cream">
          <div className="text-[11px] sm:text-xs text-cream/70 mb-3 flex flex-wrap items-center gap-x-1 gap-y-1">
            <Link to="/$lang" params={{ lang }} className="hover:text-gold">{tr.sections.world}</Link>
            <span className="opacity-60">/</span>
            <Link to="/$lang/continents/$slug" params={{ lang, slug: country.continent.slug }} className="hover:text-gold">{lang === "ar" ? country.continent.name_ar : country.continent.name_en}</Link>
            <span className="opacity-60">/</span>
            <Link to="/$lang/countries/$slug" params={{ lang, slug: country.slug }} className="hover:text-gold">{lang === "ar" ? country.name_ar : country.name_en}</Link>
            <span className="opacity-60">/</span>
            <span className="text-gold">{name}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05]">{name}</h1>
          {article && (
            <div className={`mt-3 sm:mt-4 max-w-2xl text-cream/80 text-sm md:text-base ${lang === "ar" ? "text-right ml-auto" : "text-left"}`}>
              {article.title}
            </div>
          )}
        </div>
      </section>

      {article ? (
        <>
          {/* SOURCE ARTICLE */}
          <section className="py-12 sm:py-16 md:py-24">
            <div className={`mx-auto max-w-4xl px-4 sm:px-6 ${lang === "ar" ? "text-right" : "text-left"}`}>
              <article className="space-y-5">
                {prelude.map(renderLine)}
              </article>
            </div>
            {attractions.length > 0 && (
              <div className={`mx-auto max-w-6xl px-4 sm:px-6 mt-10 sm:mt-14 md:mt-20 ${lang === "ar" ? "text-right" : "text-left"}`}>
                <div className="mb-8 sm:mb-10">
                  <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">
                    {lang === "ar" ? "أبرز المعالم" : "Highlights"}
                  </div>
                  <div className="gold-divider" />
                </div>
                <div className="space-y-12 sm:space-y-16 md:space-y-24">
                  {attractions.map(renderAttraction)}
                </div>
              </div>
            )}
          </section>
        </>
      ) : (
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="text-lg leading-loose text-charcoal/80">{lang === "ar" ? city.content_ar : city.content_en}</p>
          </div>
        </section>
      )}

      {data.siblings.length > 0 && (
        <section className="pb-16 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4 sm:mb-6">{lang === "ar" ? "مدن أخرى" : "Other cities"}</div>
            {/* Mobile: horizontal snap carousel. Desktop: grid. */}
            <div className="flex sm:hidden gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {data.siblings.map((s: any) => (
                <Link key={s.slug} to="/$lang/countries/$country/$city" params={{ lang, country: country.slug, city: s.slug }} className="group block shrink-0 w-[75%] snap-start">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <img src={s.hero_image} alt={s.name_en} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-4 text-cream font-display text-lg">{lang === "ar" ? s.name_ar : s.name_en}</div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {data.siblings.map((s: any) => (
                <Link key={s.slug} to="/$lang/countries/$country/$city" params={{ lang, country: country.slug, city: s.slug }} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <img src={s.hero_image} alt={s.name_en} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-4 text-cream font-display text-xl">{lang === "ar" ? s.name_ar : s.name_en}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pb-16 sm:pb-24">
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 ${lang === "ar" ? "text-right" : "text-left"}`}>
          <Link
            to="/$lang/countries/$slug"
            params={{ lang, slug: country.slug }}
            className="inline-flex items-center justify-center border border-midnight/20 px-5 py-3 text-sm text-midnight hover:border-gold hover:text-gold transition min-h-[44px]"
          >
            {lang === "ar" ? `العودة إلى ${country.name_ar}` : `Back to ${country.name_en}`}
          </Link>
        </div>
      </section>

      {lightboxIndex !== null && galleryImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] bg-midnight/95 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 h-11 w-11 rounded-full bg-cream/10 hover:bg-cream/20 text-cream text-2xl leading-none flex items-center justify-center"
            aria-label={lang === "ar" ? "إغلاق" : "Close"}
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-cream/10 hover:bg-cream/20 text-cream text-2xl leading-none flex items-center justify-center"
            aria-label={lang === "ar" ? "السابق" : "Previous"}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-cream/10 hover:bg-cream/20 text-cream text-2xl leading-none flex items-center justify-center"
            aria-label={lang === "ar" ? "التالي" : "Next"}
          >
            ›
          </button>
          <div
            className="max-w-[95vw] max-h-[85vh] px-2"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={galleryImages[lightboxIndex]}
              alt={name}
              className="max-w-[95vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-3 text-center text-cream/70 text-xs">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
