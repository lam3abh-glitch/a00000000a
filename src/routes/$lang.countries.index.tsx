import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { getCountriesAll } from "@/lib/content.functions";
import { type Lang, t, L } from "@/lib/i18n";

const qo = queryOptions({ queryKey: ["countries-all"], queryFn: () => getCountriesAll() });

export const Route = createFileRoute("/$lang/countries/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(qo),
  component: Countries,
});

function Countries() {
  const { lang } = useParams({ from: "/$lang/countries/" }) as { lang: Lang };
  const { data } = useSuspenseQuery(qo);
  const [q, setQ] = useState("");
  const [cont, setCont] = useState<string>("all");
  const tr = t[lang];
  const filtered = useMemo(() => {
    return data.countries.filter((c: any) => {
      if (cont !== "all" && c.continent_id !== data.continents.find((x: any) => x.slug === cont)?.id) return false;
      if (!q) return true;
      const s = q.toLowerCase();
      return c.name_ar.toLowerCase().includes(s) || c.name_en.toLowerCase().includes(s);
    });
  }, [q, cont, data]);

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">{tr.nav.countries}</div>
          <h1 className="font-display text-5xl text-midnight">{tr.countriesPage.title}</h1>
          <div className="gold-divider w-24 mx-auto my-6" />
          <p className="text-charcoal/70">{tr.countriesPage.sub}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-12">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={tr.sections.searchPlaceholder}
            className="w-full md:w-80 px-4 py-2 bg-cream border border-sand text-midnight focus:border-gold focus:outline-none rounded-sm"
          />
          <div className="flex flex-wrap gap-2 justify-center">
            <FilterBtn active={cont === "all"} onClick={() => setCont("all")}>{tr.countriesPage.all}</FilterBtn>
            {data.continents.map((c: any) => (
              <FilterBtn key={c.slug} active={cont === c.slug} onClick={() => setCont(c.slug)}>
                {L(lang, c.name_ar, c.name_en)}
              </FilterBtn>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-10">
          {filtered.map((c: any) => (
            <Link key={c.slug} to="/$lang/countries/$slug" params={{ lang, slug: c.slug }} className="group text-center">
              <div className="aspect-square rounded-full bg-sand/40 border border-sand overflow-hidden group-hover:border-gold transition shadow-sm">
                {c.iso2 ? (
                  <img
                    src={`https://flagcdn.com/w320/${c.iso2.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w320/${c.iso2.toLowerCase()}.png 1x, https://flagcdn.com/w640/${c.iso2.toLowerCase()}.png 2x`}
                    alt={L(lang, c.name_ar, c.name_en)}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full grid place-items-center text-3xl md:text-4xl">
                    <span>{c.flag_emoji}</span>
                  </div>
                )}
              </div>
              <div className="mt-3 text-xs md:text-sm text-midnight group-hover:text-gold transition">
                {L(lang, c.name_ar, c.name_en)}
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center text-charcoal/60 py-16">—</div>
        )}
      </div>
    </div>
  );
}

function FilterBtn({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-xs uppercase tracking-widest border rounded-sm transition ${
        active ? "bg-midnight text-cream border-midnight" : "border-sand text-charcoal/70 hover:border-gold hover:text-gold"
      }`}
    >
      {children}
    </button>
  );
}