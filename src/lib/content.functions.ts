import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

async function admin() {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  return supabaseAdmin;
}

export const getHomeData = createServerFn({ method: "GET" }).handler(async () => {
  const sb = await admin();
  const [continents, countries, featured, itineraries] = await Promise.all([
    sb.from("continents").select("*").order("sort_order"),
    sb.from("countries").select("id, slug, name_ar, name_en, iso2, flag_emoji, hero_image, continent_id, latitude, longitude, is_featured"),
    sb.from("articles").select("*").eq("is_featured", true).limit(1),
    sb.from("itineraries").select("slug, title_ar, title_en, hero_image, duration_days").limit(6),
  ]);
  return {
    continents: continents.data ?? [],
    countries: countries.data ?? [],
    featured: featured.data?.[0] ?? null,
    itineraries: itineraries.data ?? [],
  };
});

export const getCountriesAll = createServerFn({ method: "GET" }).handler(async () => {
  const sb = await admin();
  const [continents, countries] = await Promise.all([
    sb.from("continents").select("*").order("sort_order"),
    sb.from("countries").select("*").order("name_ar"),
  ]);
  return { continents: continents.data ?? [], countries: countries.data ?? [] };
});

export const getContinent = createServerFn({ method: "GET" })
  .inputValidator((d: unknown) => z.object({ slug: z.string() }).parse(d))
  .handler(async ({ data }) => {
    const sb = await admin();
    const { data: continent } = await sb.from("continents").select("*").eq("slug", data.slug).maybeSingle();
    if (!continent) return { continent: null, countries: [] };
    const { data: countries } = await sb.from("countries").select("*").eq("continent_id", continent.id).order("name_ar");
    return { continent, countries: countries ?? [] };
  });

export const getCountry = createServerFn({ method: "GET" })
  .inputValidator((d: unknown) => z.object({ slug: z.string() }).parse(d))
  .handler(async ({ data }) => {
    const sb = await admin();
    const { data: country } = await sb.from("countries").select("*, continent:continents(*)").eq("slug", data.slug).maybeSingle();
    if (!country) return { country: null, cities: [], articles: [], itineraries: [] };
    const [cities, articles, itineraries] = await Promise.all([
      sb.from("cities").select("*").eq("country_id", country.id).order("name_ar"),
      sb.from("articles").select("*").eq("country_id", country.id),
      sb.from("itineraries").select("*").eq("country_id", country.id),
    ]);
    return { country, cities: cities.data ?? [], articles: articles.data ?? [], itineraries: itineraries.data ?? [] };
  });

export const getCity = createServerFn({ method: "GET" })
  .inputValidator((d: unknown) => z.object({ country: z.string(), city: z.string() }).parse(d))
  .handler(async ({ data }) => {
    const sb = await admin();
    const { data: country } = await sb.from("countries").select("*, continent:continents(*)").eq("slug", data.country).maybeSingle();
    if (!country) return { country: null, city: null, siblings: [] };
    const { data: city } = await sb.from("cities").select("*").eq("country_id", country.id).eq("slug", data.city).maybeSingle();
    const { data: siblings } = await sb.from("cities").select("slug, name_ar, name_en, hero_image").eq("country_id", country.id).neq("slug", data.city);
    return { country, city, siblings: siblings ?? [] };
  });

export const getItinerary = createServerFn({ method: "GET" })
  .inputValidator((d: unknown) => z.object({ slug: z.string() }).parse(d))
  .handler(async ({ data }) => {
    const sb = await admin();
    const { data: it } = await sb.from("itineraries").select("*, country:countries(*)").eq("slug", data.slug).maybeSingle();
    return { itinerary: it };
  });

export const getArticle = createServerFn({ method: "GET" })
  .inputValidator((d: unknown) => z.object({ slug: z.string() }).parse(d))
  .handler(async ({ data }) => {
    const sb = await admin();
    const { data: a } = await sb.from("articles").select("*, country:countries(*)").eq("slug", data.slug).maybeSingle();
    return { article: a };
  });