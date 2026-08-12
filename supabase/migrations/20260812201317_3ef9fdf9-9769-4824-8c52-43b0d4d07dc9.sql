CREATE TABLE public.translation_cache (
  id uuid primary key default gen_random_uuid(),
  hash text not null,
  lang text not null,
  source text not null,
  translated text not null,
  created_at timestamptz not null default now(),
  unique (hash, lang)
);
GRANT SELECT ON public.translation_cache TO anon;
GRANT SELECT ON public.translation_cache TO authenticated;
GRANT ALL ON public.translation_cache TO service_role;
ALTER TABLE public.translation_cache ENABLE ROW LEVEL SECURITY;
CREATE POLICY "translation_cache readable by everyone" ON public.translation_cache FOR SELECT TO anon, authenticated USING (true);