import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { getCity } from "@/lib/content.functions";
import { type Lang, t } from "@/lib/i18n";

const qo = (country: string, city: string) =>
  queryOptions({ queryKey: ["city", country, city], queryFn: () => getCity({ data: { country, city } }) });

export const Route = createFileRoute("/$lang/countries/$country/$city")({
  loader: ({ context, params }) => context.queryClient.ensureQueryData(qo(params.country, params.city)),
  component: City,
});

type Attraction = {
  num: string;
  name_ar: string;
  name_en: string;
  desc_ar: string;
  desc_en: string;
  image: string;
  tall?: boolean;
};

const PARIS_ATTRACTIONS: Attraction[] = [
  {
    num: "01",
    name_ar: "برج إيفل",
    name_en: "Eiffel Tower",
    desc_ar: "برج إيفل من أبرز معالم باريس السياحية، إن لم يكن فرنسا كلها. بُني عام 1889م على يد المهندس غوستاف إيفل، ويبلغ ارتفاعه 324 متراً، ويُعدّ أطول مباني العاصمة باريس على الإطلاق، وأحد أكثر الأماكن السياحية زيارةً في المدينة.",
    desc_en: "The Eiffel Tower is one of the most iconic landmarks of Paris — if not all of France. Built in 1889 by engineer Gustave Eiffel, it rises 324 metres, making it the tallest building in the capital and one of the most visited attractions in the city.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/1024px-Tour_Eiffel_Wikimedia_Commons.jpg",
    tall: true,
  },
  {
    num: "02",
    name_ar: "شارع الشانزليزيه",
    name_en: "Champs-Élysées",
    desc_ar: "يُعتبر شارع الشانزليزيه من أشهر الشوارع الفرنسية وأطولها، وهو من أرقى وأفخم الشوارع السياحية والتجارية في العالم. يضم أرقى المحلات التجارية العالمية والمطاعم الراقية، وتنتشر على جانبيه المقاهي التي تمنحه طابعاً باريسياً خاصاً.",
    desc_en: "The Champs-Élysées is one of France's most famous and longest avenues, and one of the most elegant shopping and tourist streets in the world. It is lined with luxury boutiques, fine restaurants, and countless cafés that give it its unmistakable Parisian character.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Avenue_des_Champs-%C3%89lys%C3%A9es_July_24%2C_2009_N1.jpg",
  },
  {
    num: "03",
    name_ar: "قوس النصر",
    name_en: "Arc de Triomphe",
    desc_ar: "قوس النصر يقع في بداية شارع الشانزليزيه، في ميدان شارل ديغول الذي كان يُعرف بميدان النجمة في قلب باريس. يُعدّ من أهم رموز المدينة بعد برج إيفل، ويبلغ ارتفاعه 50 متراً، ويحظى بشعبية خاصة بين زوار العاصمة.",
    desc_en: "The Arc de Triomphe stands at the start of the Champs-Élysées in Place Charles de Gaulle — once known as Place de l'Étoile — in the heart of Paris. Rising 50 metres high, it is one of the city's most beloved symbols, second only to the Eiffel Tower.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/1280px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg",
    tall: true,
  },
  {
    num: "04",
    name_ar: "ميدان الكونكورد",
    name_en: "Place de la Concorde",
    desc_ar: "ميدان الكونكورد أحد أكبر ميادين العاصمة الفرنسية، ويقع في نهاية شارع الشانزليزيه من طرفه الشرقي. يحوي مسلّة مصرية ضخمة أهداها الخديوي إسماعيل إلى الملك لويس فيليب عام 1831، ويُعدّ من أبرز الأماكن السياحية في باريس.",
    desc_en: "Place de la Concorde is one of the largest squares in the French capital, located at the eastern end of the Champs-Élysées. At its centre stands a great Egyptian obelisk, gifted by Khedive Ismail to King Louis-Philippe in 1831 — a defining landmark of the city.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg/1280px-Place_de_la_Concorde_from_the_Eiffel_Tower%2C_Paris_April_2011.jpg",
  },
  {
    num: "05",
    name_ar: "الحي اللاتيني",
    name_en: "Latin Quarter",
    desc_ar: "الحي اللاتيني من أشهر وأقدم الأماكن السياحية في باريس، يقع على الضفة اليسرى لنهر السين. يضم عدداً كبيراً من المباني التاريخية، ويمنح زواره متعة استكشاف الحياة الباريسية الحقيقية عبر مطاعمه الفرنسية ومقاهيه ومحلات الموضة العالمية.",
    desc_en: "The Latin Quarter is one of the oldest and most celebrated neighbourhoods in Paris, sitting on the Left Bank of the Seine. Filled with historic buildings, traditional bistros, cafés and boutique fashion houses, it offers visitors a taste of authentic Parisian life.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/46/P1300734_Paris_V_place_de_la_Sorbonne_rwk.jpg",
  },
  {
    num: "06",
    name_ar: "باريس ديزني لاند",
    name_en: "Disneyland Paris",
    desc_ar: "باريس ديزني لاند — وتُعرف أيضاً باسم ديزني لاند ريزورت باريس أو يورو ديزني — من أشهر معالم باريس الترفيهية. تقع على بُعد 32 كم من مركز العاصمة، وتضم مدينتي ملاهي و7 فنادق، وتُعدّ ثاني أكبر منتجع لديزني خارج الولايات المتحدة بعد طوكيو ديزني لاند.",
    desc_en: "Disneyland Paris — also called Disneyland Resort Paris or Euro Disney — is the city's flagship entertainment destination, 32 km from the centre of Paris. It holds two theme parks and seven hotels, and is the second-largest Disney resort outside the United States after Tokyo Disneyland.",
    image: "https://upload.wikimedia.org/wikipedia/en/8/88/Sleeping_Beauty_Castle%2C_Disneyland%2C_Paris.jpg",
  },
  {
    num: "07",
    name_ar: "متحف اللوفر",
    name_en: "Louvre Museum",
    desc_ar: "متحف اللوفر واحد من أكبر متاحف العالم وأشهر متحف في باريس، ويشكّل معلماً بارزاً في وسط المدينة. يعرض ما يقرب من 35,000 قطعة أثرية تمتد من عصور ما قبل التاريخ حتى القرن الحادي والعشرين، على مساحة تبلغ 60,600 متر مربع.",
    desc_en: "The Louvre is one of the world's largest museums and the most famous in Paris, sitting at the heart of the city. It displays some 35,000 objects — from prehistory to the 21st century — across an exhibition space of 60,600 square metres.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/1280px-Louvre_Museum_Wikimedia_Commons.jpg",
  },
  {
    num: "08",
    name_ar: "متحف بيكاسو",
    name_en: "Musée Picasso",
    desc_ar: "متحف بيكاسو في باريس هو ثاني أكبر متحف مخصص للفنان بيكاسو بعد متحفه في برشلونة. يعود المبنى إلى عام 1659، وقد كان قصراً ثم تحوّل إلى مدرسة قبل أن تسيطر عليه حكومة الثورة الفرنسية. يُعدّ اليوم من أشهر متاحف باريس.",
    desc_en: "The Musée Picasso in Paris is the second-largest museum dedicated to the artist, after the one in Barcelona. Its 17th-century building — completed in 1659 — was originally a mansion, later a school, before being seized during the French Revolution. Today it stands among the city's most celebrated museums.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/H%C3%B4tel_Sal%C3%A9.JPG",
  },
  {
    num: "09",
    name_ar: "حدائق لوكسمبورغ",
    name_en: "Luxembourg Gardens",
    desc_ar: "جاردان دو لوكسمبورغ — أو حدائق لوكسمبورغ — هي ثاني أكبر الحدائق العامة في باريس، وتمتد على مساحة 224,500 متر مربع. تشتهر بأجوائها الهادئة وأحواضها المائية، وسلسلة تماثيل تخلّد ملكات فرنسا القديمات والقديسين.",
    desc_en: "The Jardin du Luxembourg is the second-largest public garden in Paris, spread across 224,500 square metres. It is loved for its tranquil atmosphere, its reflecting pools, and the long line of statues honouring former queens of France and saints.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/1280px-LuxembourgMontparnasse.JPG",
  },
  {
    num: "10",
    name_ar: "حديقة النباتات",
    name_en: "Jardin des Plantes",
    desc_ar: "حديقة النباتات من أهم حدائق باريس، وتقع بالقرب من معلمَين مهمّين بالنسبة للسائح العربي: المعهد الإسلامي — الذي يضم أكبر مساجد باريس — ومعهد العالم العربي، مما يجعلها محطّة مميّزة في زيارة العاصمة.",
    desc_en: "The Jardin des Plantes is one of Paris's most important gardens, located near two landmarks of special interest to Arab visitors: the Great Mosque of Paris, which is the largest mosque in the city, and the Arab World Institute — making it a rewarding stop in any tour of the capital.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Paris_75005_Grande_Galerie_de_l%27Evolution_20070804.jpg",
  },
  {
    num: "11",
    name_ar: "قصر فرساي",
    name_en: "Palace of Versailles",
    desc_ar: "يُعدّ قصر فرساي من أجمل قصور باريس وفرنسا عموماً. بُني عام 1624 ويقع على بُعد 20 كيلومتراً جنوب باريس. يتميّز بقاعة المرايا الشهيرة، ويحتضن آلاف اللوحات والأعمال الفنية المذهلة، ويُعدّ مثالاً على روعة الفن المعماري الفرنسي. مفتوح يومياً من 09:00 صباحاً حتى 06:30 مساءً، وسعر التذكرة نحو 80 يورو.",
    desc_en: "The Palace of Versailles is among the most beautiful palaces in Paris — and in France as a whole. Built in 1624, it sits 20 km south of Paris. It is famed for the Hall of Mirrors and houses thousands of paintings and works of art, standing as a masterpiece of French architecture. Open daily from 09:00 to 18:30, with tickets around €80.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue_a%C3%A9rienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_081_%28cropped%29.jpg/1280px-Vue_a%C3%A9rienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_081_%28cropped%29.jpg",
  },
  {
    num: "12",
    name_ar: "قصر غارنييه",
    name_en: "Palais Garnier",
    desc_ar: "يقع قصر غارنييه — المعروف باسم أوبرا باريس — في مبنى فخم غاية في الروعة. أسّسه لويس الرابع عشر عام 1669، ثم أُعيد بناؤه بطلب من نابليون الثالث ضمن حملة إعادة إعمار باريس، ليصبح من أكبر دور الأوبرا في العالم.",
    desc_en: "The Palais Garnier — better known as the Paris Opera — occupies one of the most sumptuous buildings in the city. Founded under Louis XIV in 1669 and later commissioned by Napoleon III as part of the great redevelopment of Paris, it stands today as one of the largest opera houses in the world.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Paris_Opera_full_frontal_architecture%2C_May_2009.jpg",
  },
  {
    num: "13",
    name_ar: "قصر الإليزيه",
    name_en: "Élysée Palace",
    desc_ar: "قصر الإليزيه من أشهر قصور باريس، ويُعدّ المقر الرسمي لرئاسة الجمهورية الفرنسية، حيث يضمّ مكتب رئيس الدولة ومكان اجتماع مجلس الوزراء. يقع بالقرب من شارع الشانزليزيه، وبُني في القرن الثامن عشر مع الحفاظ على تصميمه الكلاسيكي عبر القرون.",
    desc_en: "The Élysée Palace is one of the most renowned palaces in Paris and the official residence of the President of the French Republic, hosting the head of state's office and Cabinet meetings. Located near the Champs-Élysées, it was built in the 18th century and has kept its classical design intact through the centuries.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Palais_de_l%27Elys%C3%A9e_-_Vue_g%C3%A9n%C3%A9rale.jpg/1280px-Palais_de_l%27Elys%C3%A9e_-_Vue_g%C3%A9n%C3%A9rale.jpg",
  },
];

function City() {
  const { lang, country: countrySlug } = useParams({ from: "/$lang/countries/$country/$city" }) as { lang: Lang; country: string; city: string };
  const { data } = useSuspenseQuery(qo(countrySlug, useParams({ from: "/$lang/countries/$country/$city" }).city));
  if (!data.city || !data.country) throw notFound();
  const city: any = data.city;
  const country: any = data.country;
  const tr = t[lang];
  const name = lang === "ar" ? city.name_ar : city.name_en;
  const isParis = country.slug === "france" && city.slug === "paris";

  return (
    <div className="bg-cream">
      <section className="relative h-[60vh] min-h-[420px] bg-midnight">
        <img src={city.hero_image} alt={name} className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl h-full flex flex-col justify-end px-6 pb-16 text-cream">
          <div className="text-xs text-cream/60 mb-3">
            <Link to="/$lang" params={{ lang }} className="hover:text-gold">{tr.sections.world}</Link>
            <span className="mx-2">/</span>
            <Link to="/$lang/continents/$slug" params={{ lang, slug: country.continent.slug }} className="hover:text-gold">{lang === "ar" ? country.continent.name_ar : country.continent.name_en}</Link>
            <span className="mx-2">/</span>
            <Link to="/$lang/countries/$slug" params={{ lang, slug: country.slug }} className="hover:text-gold">{lang === "ar" ? country.name_ar : country.name_en}</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">{name}</span>
          </div>
          <h1 className="font-display text-6xl md:text-7xl">{name}</h1>
          {isParis && (
            <div className={`mt-4 max-w-2xl text-cream/80 text-sm md:text-base ${lang === "ar" ? "text-right ml-auto" : "text-left"}`}>
              {lang === "ar" ? "مدينة النور · عاصمة فرنسا · وجهة الفن والأزياء والثقافة" : "The City of Light · Capital of France · Home of art, fashion and culture"}
            </div>
          )}
        </div>
      </section>

      {isParis ? (
        <>
          {/* INTRO */}
          <section className="py-20 md:py-24">
            <div className="mx-auto max-w-3xl px-6 text-center">
              <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">
                {lang === "ar" ? "أجمل وأشهر أماكن السياحة في باريس" : "The finest sights of Paris"}
              </div>
              <p className="font-display text-2xl md:text-3xl text-midnight leading-relaxed">
                {lang === "ar"
                  ? "باريس، عاصمة فرنسا وأجمل مدنها السياحية. مدينة النور — أو مدينة الحب كما يحلو للبعض تسميتها — تُعدّ منذ عقود واحدة من المراكز الرائدة في العالم للأعمال والأزياء والترفيه والفن والثقافة. يرتبط اسمها بالمعالم العالمية الشهيرة والمتاحف والكاتدرائيات، وهي الوجهة الأولى للسياحة في فرنسا."
                  : "Paris, capital of France and the loveliest of its cities. The City of Light — or the City of Love, as some prefer to call it — has for decades been a leading centre for business, fashion, entertainment, art and culture. Its name is bound to world-famous landmarks, museums and cathedrals, and it remains the first destination for tourism in France."}
              </p>
              <div className="gold-divider w-24 mx-auto mt-10" />
            </div>
          </section>

          {/* ATTRACTIONS — alternating layout */}
          <section className="pb-24">
            <div className="mx-auto max-w-6xl px-6 space-y-20 md:space-y-28">
              {PARIS_ATTRACTIONS.map((a, i) => {
                const reverse = i % 2 === 1;
                return (
                  <article key={a.num} className="grid md:grid-cols-12 gap-6 md:gap-12 items-center">
                    {/* TEXT — always first on mobile, alternates on desktop */}
                    <div
                      className={`md:col-span-6 ${lang === "ar" ? "text-right" : "text-left"} ${reverse ? "md:order-2" : ""}`}
                    >
                      <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3 font-mono">
                        {lang === "ar" ? `معلم · ${a.num}` : `Landmark · ${a.num}`}
                      </div>
                      <h2 className="font-display text-2xl md:text-4xl text-midnight mb-4 leading-tight">
                        {lang === "ar" ? a.name_ar : a.name_en}
                      </h2>
                      <div className={`h-px w-16 bg-gold mb-4 ${lang === "ar" ? "ml-auto" : ""}`} />
                      <p className="text-sm md:text-lg text-charcoal/80 leading-loose">
                        {lang === "ar" ? a.desc_ar : a.desc_en}
                      </p>
                    </div>
                    {/* IMAGE — mobile-friendly size */}
                    <div className={`md:col-span-6 ${reverse ? "md:order-1" : ""}`}>
                      <div className="relative overflow-hidden shadow-xl bg-midnight/5 group mx-auto max-w-sm md:max-w-none">
                        <img
                          src={a.image}
                          alt={lang === "ar" ? a.name_ar : a.name_en}
                          loading="lazy"
                          className={`w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 ${a.tall ? "aspect-[4/5] md:aspect-[4/5]" : "aspect-[4/3]"}`}
                        />
                        <div className="absolute top-0 left-0 bg-midnight text-cream px-3 py-1.5 text-[10px] tracking-[0.4em] font-mono">
                          {a.num}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* CLOSING */}
          <section className="pb-24">
            <div className="mx-auto max-w-3xl px-6 text-center">
              <div className="gold-divider w-24 mx-auto mb-8" />
              <p className="font-display text-xl md:text-2xl text-midnight/80 italic">
                {lang === "ar"
                  ? "«باريس تستحق الزيارة دائماً، مهما تغيّرت الفصول.»"
                  : "\u201CParis is always a good idea, no matter the season.\u201D"}
              </p>
            </div>
          </section>
        </>
      ) : (
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-lg leading-loose text-charcoal/80">{lang === "ar" ? city.content_ar : city.content_en}</p>
          </div>
        </section>
      )}

      {data.siblings.length > 0 && (
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-6">{lang === "ar" ? "مدن أخرى" : "Other cities"}</div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {data.siblings.map((s: any) => (
                <Link key={s.slug} to="/$lang/countries/$country/$city" params={{ lang, country: country.slug, city: s.slug }} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={s.hero_image} alt={s.name_en} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-4 text-cream font-display text-xl">{lang === "ar" ? s.name_ar : s.name_en}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}