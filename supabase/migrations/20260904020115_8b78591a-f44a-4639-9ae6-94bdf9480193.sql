UPDATE public.countries
SET intro_ar = 'اكتشف اسبانيا
بلاد الاندلس وجوهرة أوروبا
وعشق الرياضة والطبيعة الفاتنة',
    intro_en = 'Discover Spain — the land of Al-Andalus and the jewel of Europe, a country in love with sport and with breathtaking nature.',
    hero_image = 'https://i0.wp.com/100region.com/wp-content/uploads/2023/04/img_0849.jpg'
WHERE slug = 'spain';

INSERT INTO public.cities (slug, country_id, name_ar, name_en, hero_image)
SELECT v.slug, c.id, v.name_ar, v.name_en, v.hero_image
FROM public.countries c,
(VALUES
  ('madrid', 'مدريد', 'Madrid', 'https://i0.wp.com/100region.com/wp-content/uploads/2022/09/image-7.jpg'),
  ('barcelona', 'برشلونة', 'Barcelona', 'https://i0.wp.com/100region.com/wp-content/uploads/2022/05/img_7052.jpg'),
  ('bilbao', 'بلباو', 'Bilbao', 'https://i0.wp.com/100region.com/wp-content/uploads/2023/04/img_0898.jpg'),
  ('zaragoza', 'سرقسطة', 'Zaragoza', 'https://i0.wp.com/100region.com/wp-content/uploads/2023/04/img_0919.jpg'),
  ('cordoba', 'قرطبة', 'Cordoba', 'https://i0.wp.com/100region.com/wp-content/uploads/2023/04/img_0976.jpg'),
  ('malaga', 'مالقا', 'Malaga', 'https://i0.wp.com/100region.com/wp-content/uploads/2023/04/img_0834.jpg'),
  ('valencia', 'فالنسيا', 'Valencia', 'https://i0.wp.com/100region.com/wp-content/uploads/2023/04/img_0831.jpg'),
  ('granada', 'غرناطة', 'Granada', 'https://i0.wp.com/100region.com/wp-content/uploads/2023/04/img_0843.jpg'),
  ('seville', 'اشبيلية', 'Seville', 'https://i0.wp.com/100region.com/wp-content/uploads/2023/04/img_0845.jpg'),
  ('costa-del-sol', 'كوستا ديل سول', 'Costa del Sol', 'https://i0.wp.com/100region.com/wp-content/uploads/2023/04/img_0931.jpg'),
  ('marbella', 'ماربيا', 'Marbella', 'https://i0.wp.com/100region.com/wp-content/uploads/2023/04/img_0927.jpg'),
  ('villajoyosa', 'فيلاجويوسا', 'Villajoyosa', 'https://i0.wp.com/100region.com/wp-content/uploads/2023/04/img_0827.jpg'),
  ('canary-islands', 'جزر الكناري', 'Canary Islands', 'https://i0.wp.com/100region.com/wp-content/uploads/2023/04/img_0866.jpg')
) AS v(slug, name_ar, name_en, hero_image)
WHERE c.slug = 'spain'
  AND NOT EXISTS (SELECT 1 FROM public.cities x WHERE x.slug = v.slug);