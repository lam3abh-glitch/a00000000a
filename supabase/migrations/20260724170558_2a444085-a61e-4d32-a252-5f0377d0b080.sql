UPDATE public.cities SET hero_image = replace(replace(substring(hero_image FROM length('https://images.weserv.nl/?url=')+1), '%3A', ':'), '%2F', '/')
  WHERE hero_image LIKE 'https://images.weserv.nl/?url=%';
UPDATE public.countries SET hero_image = replace(replace(substring(hero_image FROM length('https://images.weserv.nl/?url=')+1), '%3A', ':'), '%2F', '/')
  WHERE hero_image LIKE 'https://images.weserv.nl/?url=%';