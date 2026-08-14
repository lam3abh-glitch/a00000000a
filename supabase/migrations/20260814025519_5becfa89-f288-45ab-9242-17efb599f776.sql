UPDATE public.continents SET slug='asia', name_ar='آسيا', name_en='Asia', sort_order=1 WHERE slug='asia-australia';
UPDATE public.continents SET slug='north-america', name_ar='أمريكا الشمالية', name_en='North America', sort_order=5 WHERE slug='americas';
UPDATE public.continents SET sort_order=3 WHERE slug='europe';
UPDATE public.continents SET sort_order=4 WHERE slug='africa';
INSERT INTO public.continents (slug, name_ar, name_en, description_ar, description_en, hero_image, sort_order)
VALUES
('oceania','أوقيانوسيا','Oceania','قارة الجزر والمحيط الهادئ — أستراليا ونيوزيلندا وجزر المحيط.','The islands of the Pacific — Australia, New Zealand and the ocean isles.','https://i0.wp.com/100region.com/wp-content/uploads/2022/03/img_3649.jpg',2),
('south-america','أمريكا الجنوبية','South America','الأمازون والأنديز وثقافات لاتينية نابضة بالحياة.','The Amazon, the Andes and vibrant Latin cultures.','https://i0.wp.com/100region.com/wp-content/uploads/2022/03/img_3579.jpg',6)
ON CONFLICT (slug) DO NOTHING;
UPDATE public.countries SET continent_id=(SELECT id FROM public.continents WHERE slug='oceania') WHERE iso2 IN ('AU','NZ');
UPDATE public.countries SET continent_id=(SELECT id FROM public.continents WHERE slug='south-america') WHERE iso2 IN ('AR','BR');
UPDATE public.countries SET continent_id=(SELECT id FROM public.continents WHERE slug='north-america') WHERE iso2 IN ('US','CU','CA','MX');