insert into public.cities (country_id, slug, name_ar, name_en, hero_image, content_ar, content_en)
select c.id, 'lisbon', 'لشبونة', 'Lisbon',
  'https://i0.wp.com/100region.com/wp-content/uploads/2022/05/img_7039.jpg?ssl=1',
  'كاتدرائية لشبونة وقلعة سانت جورج وقوس النصر وبرج بيليم واكواريوم لشبونة.',
  'Lisbon Cathedral, the Castle of São Jorge, the Rua Augusta Arch, Belém Tower and the Lisbon Oceanarium.'
from public.countries c where c.slug = 'portugal'
and not exists (select 1 from public.cities x where x.slug = 'lisbon');

insert into public.cities (country_id, slug, name_ar, name_en, hero_image, content_ar, content_en)
select c.id, 'porto', 'بورتو', 'Porto',
  'https://i0.wp.com/100region.com/wp-content/uploads/2022/05/img_7015-1.jpg?ssl=1',
  'مدينة الجمال: جسر دوم لويس وساحة ريبيرا وبرج كليريجوس وحديقة الملك هنريك.',
  'The city of beauty: the Dom Luís Bridge, Ribeira Square, the Clérigos Tower and the Garden of Prince Henry.'
from public.countries c where c.slug = 'portugal'
and not exists (select 1 from public.cities x where x.slug = 'porto');

update public.countries set
  intro_ar = 'البرتغال .. أقصى الغرب الأوروبي على المحيط الأطلسي',
  intro_en = 'Portugal .. the western edge of Europe on the Atlantic',
  hero_image = 'https://i0.wp.com/100region.com/wp-content/uploads/2022/01/img_7781.jpg?ssl=1'
where slug = 'portugal';