import type { Guide } from "./france-guides";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/${name}?ssl=1`;

// Deep-dive "read more" pages linked from the New York city article.
export const usaLandmarkGuides: Guide[] = [
  {
    slug: "statue-of-liberty",
    title_ar: "تعرف على تمثال الحرية وقصة وجوده",
    title_en: "The Statue of Liberty and the story behind it",
    kicker_ar: "معلم",
    kicker_en: "Landmark",
    image: U("2022/09/img_2226.jpg"),
    blocks: [
      {
        type: "P",
        ar: "تمثال الحرية واسمه الكامل الحرية تنير العالم هو عمل فني نحتي قامت فرنسا باهدائه الى الولايات المتحدة الامريكية في 28 اكتوبر 1886 كهدية تذكارية ، بهدف توثيق عرى الصداقة بين البلدين بمناسبة الذكرى المئوية للثورة الامريكية 1775 – 1783",
        en: "The Statue of Liberty, whose full name is Liberty Enlightening the World, is a sculptural work that France presented to the United States of America on 28 October 1886 as a commemorative gift, meant to seal the bonds of friendship between the two countries on the centenary of the American Revolution of 1775–1783.",
      },
      {
        type: "P",
        ar: "ومنذ ذلك الحين استقر التمثال بموقعه المطل على خليج نيويورك ليكون في استقبال كل زائري البلاد سواء كانوا سائحين أو مهاجرين ، قام بتصميمه فريدريك بارتولدي بينما صمم هيكله الانشائي غوستاف إيفل",
        en: "Since then the statue has stood on its site overlooking New York Bay, welcoming everyone who arrives in the country, whether tourists or immigrants. It was designed by Frédéric Bartholdi, while its structural frame was designed by Gustave Eiffel.",
      },
      {
        type: "IMG",
        src: U("2022/09/img_2227.jpg"),
        cap_ar: "تمثال الحرية في خليج نيويورك",
        cap_en: "The Statue of Liberty in New York Bay",
      },
      { type: "H3", ar: "الموقع والمساحة", en: "Location and area", noNumber: true },
      {
        type: "P",
        ar: "يستقر التمثال على جزيرة الحرية الواقعة في خليج نيويورك ، حيث يبعد مسافة 600 مترا عن مدينة جيرسي بولاية نيوجيرسي و 2.5 كيلومترا الى الجنوب الغربي من مانهاتن ، بمساحة اجمالية تقدر بـ 49,000 متر مربع",
        en: "The statue stands on Liberty Island in New York Bay, some 600 metres from Jersey City in New Jersey and 2.5 kilometres south-west of Manhattan, on a total area of about 49,000 square metres.",
      },
      {
        type: "IMG",
        src: U("2022/09/img_2228.jpg"),
        cap_ar: "جزيرة الحرية حيث يستقر التمثال",
        cap_en: "Liberty Island, where the statue stands",
      },
      {
        type: "P",
        ar: "الاسم الرسمي لهذا التمثال هو تمثال الحرية ، وهو يمثل الديمقراطية أو الفكر الليبرالي الحر ويرمز إلى سيدة تحررت من قيود الاستبداد التي ألقيت عند احدى قدميها ، تمسك هذه السيدة في يدها اليمنى مشعلا يرمز الى الحرية ، بينما تحمل في يدها اليسرى كتابا نقش عليه بأحرف رومانية جملة 4 يوليه 1776 ، وهو تاريخ اعلان الاستقلال الامريكي ، أما على رأسها فهي ترتدي تاجل مكونا من 7 أسنة تمثل أشعة ترمز الى البحار السبع او القارات السبع الموجودة في العالم",
        en: "The official name of the monument is the Statue of Liberty. It represents democracy and free liberal thought, portraying a woman freed from the chains of tyranny that lie cast at one of her feet. In her right hand she holds a torch symbolising freedom, while in her left she carries a tablet inscribed in Roman numerals with the date 4 July 1776, the day of the American Declaration of Independence. On her head she wears a crown of seven spikes representing rays that stand for the seven seas or the seven continents of the world.",
      },
      {
        type: "IMG",
        src: U("2022/09/img_2229.jpg"),
        cap_ar: "تفاصيل التمثال والمشعل والتاج",
        cap_en: "Details of the statue, the torch and the crown",
      },
      {
        type: "P",
        ar: "يرتكز التمثال على قاعدة أسمنتية جرانيتية يبلغ عرضها 47 مترا ، ويبلغ طوله من القدم الى أعلى المشعل 46 متر ، بينما يبلغ الطول الكلي بالقاعدة 93 مترا ، ويتكون من الواح نحاسية بسمك 2.5 مم مثبتة الى الهيكل الحديدي ، ويزن اجماليا 125 طن يحيط بالتمثال ككل حائط ذو شكل نجمي (نجمة ذات 10 رؤوس) ، وقد تم بناؤه في عام 1812 كجزء من حصن وود والذي استخدم للدفاع عن مدينة نيويورك أثناء الحرب الاهلية الامريكية 1865-1861",
        en: "The statue rests on a granite and concrete pedestal 47 metres wide. From the feet to the top of the torch it measures 46 metres, and the total height including the pedestal is 93 metres. It is made of copper sheets 2.5 mm thick fixed to an iron frame and weighs 125 tonnes in total. The whole statue is surrounded by a star-shaped wall (a ten-pointed star) built in 1812 as part of Fort Wood, which was used to defend New York City during the American Civil War of 1861–1865.",
      },
      {
        type: "IMG",
        src: U("2022/09/img_2230.jpg"),
        cap_ar: "الحائط النجمي المحيط بتمثال الحرية",
        cap_en: "The star-shaped wall surrounding the Statue of Liberty",
      },
    ],
  },
];
