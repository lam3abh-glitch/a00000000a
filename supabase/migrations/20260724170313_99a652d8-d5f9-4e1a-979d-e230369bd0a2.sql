-- Revert current weserv wrappers back to raw wikimedia
UPDATE public.cities SET hero_image = 'https://' || substring(hero_image FROM length('https://images.weserv.nl/?url=')+1)
  WHERE hero_image LIKE 'https://images.weserv.nl/?url=upload.wikimedia.org/%';
UPDATE public.countries SET hero_image = 'https://' || substring(hero_image FROM length('https://images.weserv.nl/?url=')+1)
  WHERE hero_image LIKE 'https://images.weserv.nl/?url=upload.wikimedia.org/%';
-- Wrap with proper URL encoding using url_encode via replace-based percent-encoding
-- Use a simple approach: encode ':' and '/'
UPDATE public.cities SET hero_image = 'https://images.weserv.nl/?url=' ||
  replace(replace(hero_image, ':', '%3A'), '/', '%2F')
  WHERE hero_image LIKE 'https://upload.wikimedia.org/%';
UPDATE public.countries SET hero_image = 'https://images.weserv.nl/?url=' ||
  replace(replace(hero_image, ':', '%3A'), '/', '%2F')
  WHERE hero_image LIKE 'https://upload.wikimedia.org/%';