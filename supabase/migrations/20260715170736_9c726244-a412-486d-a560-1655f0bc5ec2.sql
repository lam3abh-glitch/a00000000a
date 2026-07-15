
UPDATE cities SET hero_image = CASE slug
  WHEN 'paris' THEN 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg'
  WHEN 'nice' THEN 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Promenade_des_Anglais_Nice_IMG_1255.jpg/1280px-Promenade_des_Anglais_Nice_IMG_1255.jpg'
  WHEN 'lyon' THEN 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Vieux_Lyon_-_Panorama_depuis_Fourvi%C3%A8re.jpg/1280px-Vieux_Lyon_-_Panorama_depuis_Fourvi%C3%A8re.jpg'
  WHEN 'marseille' THEN 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Notre-Dame_de_la_Garde_aerial_view_2020.jpeg'
  WHEN 'bordeaux' THEN 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bordeaux_Place_de_la_Bourse_de_nuit.jpg/1280px-Bordeaux_Place_de_la_Bourse_de_nuit.jpg'
  WHEN 'strasbourg' THEN 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Strasbourg_Cathedral.jpg'
  WHEN 'cannes' THEN 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Cannes_from_Suquet_Tower_03.jpg/1280px-Cannes_from_Suquet_Tower_03.jpg'
  WHEN 'chamonix' THEN 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Chamonix_valley_from_la_Fl%C3%A9g%C3%A8re%2C2010_07.JPG'
  WHEN 'colmar' THEN 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/View_of_%C3%89glise_Saint-Martin_%2843833049001%29.jpg/1280px-View_of_%C3%89glise_Saint-Martin_%2843833049001%29.jpg'
  WHEN 'annecy' THEN 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Annecy_-_Palais_de_l%27Isle_%28cropped%29.jpg/1280px-Annecy_-_Palais_de_l%27Isle_%28cropped%29.jpg'
END
WHERE slug IN ('paris','nice','lyon','marseille','bordeaux','strasbourg','cannes','chamonix','colmar','annecy')
  AND country_id = (SELECT id FROM countries WHERE slug='france');
