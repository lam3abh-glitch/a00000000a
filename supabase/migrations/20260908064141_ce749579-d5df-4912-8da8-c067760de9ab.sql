insert into public.cities (country_id, slug, name_ar, name_en, hero_image)
select '5e4b7dcb-9377-4e68-ad8b-02ff3a273605', 'tbilisi', 'تبليسي', 'Tbilisi', 'https://i0.wp.com/100region.com/wp-content/uploads/2022/08/img_1833.jpg'
where not exists (select 1 from public.cities where slug = 'tbilisi');

insert into public.cities (country_id, slug, name_ar, name_en, hero_image)
select '5e4b7dcb-9377-4e68-ad8b-02ff3a273605', 'batumi', 'باتومي', 'Batumi', 'https://i0.wp.com/100region.com/wp-content/uploads/2022/03/img_3112.jpg'
where not exists (select 1 from public.cities where slug = 'batumi');

update public.countries
set intro_ar = 'بلاد القوقاز .. جبال الثلج وسواحل البحر الأسود',
    intro_en = 'The land of the Caucasus .. snowy mountains and Black Sea shores',
    hero_image = 'https://i0.wp.com/100region.com/wp-content/uploads/2022/04/img_4097-2.jpg'
where slug = 'georgia';