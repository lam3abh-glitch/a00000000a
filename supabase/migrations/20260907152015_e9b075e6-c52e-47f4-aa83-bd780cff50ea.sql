delete from public.cities where slug = 'luxor';

update public.cities set
  hero_image = 'https://i0.wp.com/100region.com/wp-content/uploads/2022/10/image-7.jpg?ssl=1',
  content_ar = 'القاهرة .. ومن كمثلها مدينة، تجتمع فيها الأهرامات والمتحف المصري وخان الخليلي وقصر عابدين.',
  content_en = 'Cairo — and what city is like it: the pyramids, the Egyptian Museum, Khan el-Khalili and Abdeen Palace.'
where slug = 'cairo';

insert into public.cities (slug, country_id, name_ar, name_en, hero_image, content_ar, content_en)
select 'alexandria', id, 'الاسكندرية', 'Alexandria',
  'https://i0.wp.com/100region.com/wp-content/uploads/2022/05/img_6453.jpg?ssl=1',
  'عروس البحر الأبيض المتوسط، بمتحفها القومي والمسرح الروماني وقلعة قايتباي.',
  'The bride of the Mediterranean, with its national museum, the Roman theatre and the Citadel of Qaitbay.'
from public.countries where slug = 'egypt'
and not exists (select 1 from public.cities where slug = 'alexandria');

insert into public.cities (slug, country_id, name_ar, name_en, hero_image, content_ar, content_en)
select 'sharm-el-sheikh', id, 'شرم الشيخ', 'Sharm El Sheikh',
  'https://i0.wp.com/100region.com/wp-content/uploads/2022/05/img_6461.jpg?ssl=1',
  'لؤلؤة الخليج، سفاري سيناء وجزيرة تيران ومحمية رأس محمد.',
  'The pearl of the gulf: the Sinai safari, Tiran Island and the Ras Muhammad reserve.'
from public.countries where slug = 'egypt'
and not exists (select 1 from public.cities where slug = 'sharm-el-sheikh');

update public.countries set
  intro_ar = 'بلاد الفراعنة .. بلاد النيل .. بلاد السد العالي',
  intro_en = 'Land of the pharaohs .. land of the Nile .. land of the High Dam',
  hero_image = 'https://i0.wp.com/100region.com/wp-content/uploads/2022/10/img_4102-1.jpg?ssl=1'
where slug = 'egypt';