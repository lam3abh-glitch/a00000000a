UPDATE public.countries
SET hero_image = 'https://i0.wp.com/100region.com/wp-content/uploads/2022/01/img_3050.jpg?ssl=1',
    intro_ar = 'اكتشف أوغندا
لؤلؤة أفريقيا، أرض الغوريلا الجبلية والسافانا ومنبع النيل',
    intro_en = 'Discover Uganda — the pearl of Africa, land of mountain gorillas, savanna plains and the source of the Nile.',
    capital_ar = 'كمبالا',
    capital_en = 'Kampala',
    currency = 'شيلينغ أوغندي'
WHERE slug = 'uganda';

INSERT INTO public.cities (slug, country_id, name_ar, name_en, hero_image)
SELECT 'kampala', id, 'كمبالا', 'Kampala', 'https://i0.wp.com/100region.com/wp-content/uploads/2022/05/img_6653.jpg?ssl=1'
FROM public.countries WHERE slug = 'uganda'
AND NOT EXISTS (SELECT 1 FROM public.cities WHERE slug = 'kampala');