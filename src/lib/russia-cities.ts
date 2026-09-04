import { type ArticleLine, type ArticleLineKind, type CityArticle } from "./article-format";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

type Pair = [ArticleLineKind, string, string];

function img(name: string): Pair {
  return ["IMG", U(name), ""];
}

function build(sourceUrl: string, title_ar: string, title_en: string, hero: string, pairs: Pair[]) {
  const lines: ArticleLine[] = pairs.map(([kind, ar]) => ({ kind, value: ar }));
  const ar: CityArticle = { sourceUrl, title: title_ar, heroImage: hero, lines };
  const en = { title: title_en, values: pairs.map(([, , e]) => e) };
  return { ar, en };
}

/* ------------------------------- MOSCOW ------------------------------- */

const MOSCOW = build(
  "https://100region.com/?p=11719&amp=1",
  "السياحة في روسيا – موسكو",
  "Tourism in Russia — Moscow",
  U("2022/08/img_1247.jpg"),
  [
    [
      "P",
      "موسكو العاصمة من اهم وجهات السياحة في روسيا ، تحتضن مجموعة كبيرة من المعالم السياحية من ضمنها متاحف وقصور ومنتزهات من اشهر المزارات السياحية فيها الميدان الاحمر والكرملين وغيرهما",
      "Moscow, the capital, is one of the most important tourist destinations in Russia. It holds a large collection of landmarks, including museums, palaces and parks, and among its most famous attractions are Red Square and the Kremlin.",
    ],
    ["H3", "الميدان الأحمر", "Red Square"],
    img("2022/08/img_1247.jpg"),
    [
      "P",
      "الميدان الأحمر هو أحد أشهر الميادين شعبية في روسيا ، يأخذ الميدان شكل المُربع ويقع بين سوق تجاري تاريخي شهير في موسكو يُطلق عليه (كيتاي جورود)، وبين قصر الكرملن ، الميدان من اهم اماكن السياحة في موسكو وموقعه في قلب المدينة يسهل الوصول إليه من جميع الاتجاهات والطرق السريعة المؤدية من العاصمة وإليه",
      "Red Square is one of the most popular squares in Russia. Square in shape, it lies between a famous historic trading quarter of Moscow known as Kitay-Gorod and the Kremlin palace. It is one of the most important sights in Moscow, and its position in the heart of the city makes it easy to reach from every direction and from the highways leading in and out of the capital.",
    ],
    ["H3", "حرم الكرملين", "The Kremlin"],
    img("2022/08/img_1250.jpg"),
    [
      "P",
      "حرم الكرملين يعد واحدا من أشهر معالم موسكو روسيا ، وهو عبارة عن مجمع قصور تاريخية فاخرة كانت مقرا لحاكم روسيا قديما وتم تحويلها في عصرنا الحالي إلى عدد من المتاحف ، كلمة كرملين باللغة الروسية تعني القلعة أو القصر المنيع ، تقع هذه المتاحف في قلب موسكو بمواجهة الميدان الأحمر وعدد من الأسواق التُجارية ويبلغ ارتفاع أعلى قمة بها أكثر من 25 مترا",
      "The Kremlin is one of the best known landmarks of Moscow and of Russia: a complex of grand historic palaces that once served as the seat of Russia's ruler and that have since been turned into a number of museums. The word Kremlin means the fortress or the impregnable palace in Russian. These museums sit in the heart of Moscow facing Red Square and several commercial markets, and their highest point rises more than 25 metres.",
    ],
    ["H3", "كاتدرائية القديس باسيل", "Saint Basil's Cathedral"],
    img("2022/08/img_1251.jpg"),
    [
      "P",
      "كاتدرائية القديس باسيل هي واحدة من أبرز اماكن السياحة في موسكو ، تحديدًا بجوار قصر الكرملين وبالجزء الجنوبي الشرقي من الميدان الأحمر الشهير، أُطلق عليها هذا الاسم نظرًا للمكانة الهامة التي يحتلها القديس باسيل في نفوس الشعب الروسي وحُكامه عبر التاريخ",
      "Saint Basil's Cathedral is one of the most striking sights in Moscow, standing right beside the Kremlin palace in the south-eastern part of the famous Red Square. It carries this name because of the important place Saint Basil has held in the hearts of the Russian people and their rulers throughout history.",
    ],
    ["H3", "برج أجراس إيفان الكبير", "The Bell Tower of Ivan the Great"],
    img("2022/08/img_1252.jpg"),
    [
      "P",
      "برج اجراس إيفان الكبير هو واحد من أبراج قصور الكرملين ويعد أطولها على الإطلاق حيث يبلغ ارتفاعه 81 مترا، البرج من أقدم معالم موسكو السياحية حيث بني في عام 1508، ومنذ ذلك الحين يعد أشهر معالم السياحة في روسيا السياحية ، ويستقبل بشكل مستمر العديد من الزوار من مختلف أنحاء العالم. يتميز برج ايفان بروعة تصميمه المعماري الذي يأخذ طابع تصميمات العصور الوسطى",
      "The Bell Tower of Ivan the Great is one of the towers of the Kremlin palaces and by far the tallest, rising 81 metres. It is one of Moscow's oldest attractions, built in 1508, and has been among the most famous sights in Russia ever since, welcoming a constant stream of visitors from all over the world. The tower is admired for its magnificent architecture, which carries the character of medieval design.",
    ],
    ["H3", "متحف الدولة التاريخي", "The State Historical Museum"],
    img("2022/08/img_1253.jpg"),
    [
      "P",
      "متحف الدولة التاريخي موسكو هو المبنى الذي يقع على يمينك عند دخولك الميدان الأحمر من خلال بوابة القيامة، افتتح هذا المتحف في عام 1894 بمناسبة تتويج الكسندر الثالث، وكان نتاج لمشروع مدته 20 عاما لتعزيز مختلف المجموعات الأثرية والأنثروبولوجية في متحف واحد، والذي قيل أنه يحكي قصة تاريخ روسيا بأكملها وفقا لأحداث منهجية علمية",
      "The State Historical Museum of Moscow is the building on your right as you enter Red Square through the Resurrection Gate. It opened in 1894 to mark the coronation of Alexander III and was the result of a twenty-year project to bring together the various archaeological and anthropological collections in a single museum, one said to tell the story of the whole history of Russia through a scientific method.",
    ],
  ],
);

export const RUSSIA_CITY_ARTICLES: Record<string, CityArticle> = {
  moscow: MOSCOW.ar,
};

export const RUSSIA_CITY_ARTICLES_EN: Record<string, { title: string; values: string[] }> = {
  moscow: MOSCOW.en,
};
