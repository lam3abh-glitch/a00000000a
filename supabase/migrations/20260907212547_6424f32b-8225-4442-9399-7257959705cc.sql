insert into public.countries (slug, name_ar, name_en, capital_ar, capital_en, currency, iso2, flag_emoji, continent_id, latitude, longitude, is_featured, hero_image, intro_ar, intro_en, source_url)
select 'argentina', 'الأرجنتين', 'Argentina', 'بيونس آيرس', 'Buenos Aires', 'ARS', 'AR', '🇦🇷',
  (select continent_id from public.countries where slug = 'brazil'),
  -38.42, -63.62, false,
  'https://i0.wp.com/100region.com/wp-content/uploads/2022/04/img_4764.jpg?ssl=1',
  'بلاد التانغو .. الشلالات والأنهار الجليدية',
  'The land of tango — waterfalls and glaciers',
  'https://100region.com/?p=3636'
where not exists (select 1 from public.countries where slug = 'argentina');

insert into public.cities (slug, name_ar, name_en, country_id, hero_image, content_ar, content_en)
select 'buenos-aires', 'بيونس آيرس', 'Buenos Aires',
  (select id from public.countries where slug = 'argentina'),
  'https://i0.wp.com/100region.com/wp-content/uploads/2022/08/img_1993.jpg?ssl=1',
  'عاصمة الأرجنتين: ساحة مايو، قصر كاسا روسادا، حي لابوكا ومسرح كولون.',
  'Argentina''s capital: Plaza de Mayo, the Casa Rosada, La Boca and the Colón Theatre.'
where not exists (select 1 from public.cities where slug = 'buenos-aires');