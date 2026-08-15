INSERT INTO public.countries (
  slug, name_ar, name_en, iso2, flag_emoji, continent_id,
  capital_ar, capital_en, currency, latitude, longitude
)
SELECT
  v.slug, v.name_ar, v.name_en, v.iso2, v.flag_emoji, c.id,
  v.capital_ar, v.capital_en, v.currency, v.latitude, v.longitude
FROM (
  VALUES
    ('kenya','كينيا','Kenya','KE','🇰🇪','africa','نيروبي','Nairobi','Kenyan shilling',-1.2921,36.8219),
    ('somalia','الصومال','Somalia','SO','🇸🇴','africa','مقديشيو','Mogadishu','Somali shilling',2.0469,45.3182),
    ('sudan','السودان','Sudan','SD','🇸🇩','africa','الخرطوم','Khartoum','Sudanese pound',15.5007,32.5599)
) AS v(slug, name_ar, name_en, iso2, flag_emoji, continent_slug, capital_ar, capital_en, currency, latitude, longitude)
JOIN public.continents c ON c.slug = v.continent_slug
ON CONFLICT (slug) DO NOTHING;
