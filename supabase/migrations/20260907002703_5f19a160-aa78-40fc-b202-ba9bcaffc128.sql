UPDATE public.countries SET is_featured = true,
  intro_ar = 'المغرب .. بلاد الطبيعة الساحرة والمدن الفاتنة والزيتون',
  intro_en = 'Morocco — a land of enchanting nature, captivating cities and olive groves',
  capital_ar = 'الرباط', capital_en = 'Rabat', currency = 'درهم مغربي',
  hero_image = 'https://i0.wp.com/100region.com/wp-content/uploads/2022/04/img_4612.png?ssl=1',
  source_url = 'https://100region.com/?p=2450'
WHERE slug = 'morocco';

INSERT INTO public.cities (slug, country_id, name_ar, name_en, hero_image)
SELECT v.slug, c.id, v.name_ar, v.name_en,
       'https://i0.wp.com/100region.com/wp-content/uploads/' || v.img || '?ssl=1'
FROM public.countries c,
  (VALUES
    ('casablanca','الدار البيضاء','Casablanca','2022/05/img_6472.jpg'),
    ('marrakesh','مراكش','Marrakesh','2022/05/img_6580.jpg'),
    ('rabat','الرباط','Rabat','2022/10/img_4455.jpg'),
    ('tetouan','تطوان','Tetouan','2022/10/img_4446.jpg'),
    ('essaouira','الصويرة','Essaouira','2022/10/img_4463.jpg'),
    ('chefchaouen','شفشاون','Chefchaouen','2022/10/img_4482.jpg'),
    ('tangier','طنجة','Tangier','2022/10/img_4480.jpg'),
    ('agadir','أغادير','Agadir','2022/10/img_4479.jpg'),
    ('fes','فاس','Fes','2022/10/img_4440.jpg'),
    ('ifrane','افران','Ifrane','2022/10/image-11.jpg')
  ) AS v(slug, name_ar, name_en, img)
WHERE c.slug = 'morocco'
  AND NOT EXISTS (SELECT 1 FROM public.cities x WHERE x.slug = v.slug AND x.country_id = c.id);