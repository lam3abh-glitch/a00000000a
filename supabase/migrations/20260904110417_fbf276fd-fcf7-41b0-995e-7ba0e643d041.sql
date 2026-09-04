insert into public.cities (country_id, slug, name_ar, name_en, hero_image, content_ar, content_en)
select c.id, 'helsinki', 'هلسنكي', 'Helsinki',
 'https://i0.wp.com/100region.com/wp-content/uploads/2022/08/img_1672.jpg?ssl=1',
 'عاصمة فنلندا على بحر البلطيق: ساحة مجلس الشيوخ، جزر سومينلينا، وساحة السوق كوباتوري.',
 'The Finnish capital on the Baltic: Senate Square, the Suomenlinna islands, and the Kauppatori market square.'
from public.countries c where c.slug = 'finland'
and not exists (select 1 from public.cities x where x.country_id = c.id and x.slug = 'helsinki');

update public.countries set
 intro_ar = 'هي بلد شمالي يقع في المنطقة الفينوسكاندية في شمال أوروبا ، يحدها من الغرب السويد والنرويج من الشمال ، وروسيا في الشرق ، بينما تقع استونيا إلى الجنوب عبر خليج فنلندا',
 intro_en = 'Finland is a Nordic country in the Fennoscandian region of northern Europe. It is bordered by Sweden to the west and Norway to the north, Russia to the east, while Estonia lies to the south across the Gulf of Finland.'
where slug = 'finland';