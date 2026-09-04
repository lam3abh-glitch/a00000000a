import type { Guide } from "./france-guides";

const U = (name: string) => `https://i0.wp.com/100region.com/wp-content/uploads/2022/10/${name}?ssl=1`;

// Photo album — https://100region.com/?p=23725 ("صور من بلجيكا")
const ALBUM = [
  "img_3579.jpg",
  "img_3554.jpg",
  "img_3569.jpg",
  "img_3586-1.jpg",
  "img_3597-1.jpg",
  "img_3565.jpg",
  "img_3606.jpg",
  "img_3607.jpg",
  "img_3608.jpg",
  "img_3609.jpg",
  "img_3610.jpg",
  "img_3611.jpg",
  "img_3612.jpg",
  "img_3613.jpg",
  "img_3614.jpg",
  "img_3615.jpg",
  "img_3616.jpg",
  "img_3617.jpg",
  "img_3565-1.jpg",
  "img_3619.jpg",
  "img_3620.jpg",
  "img_3621.jpg",
  "img_3622.jpg",
  "img_3623.jpg",
].map((n) => ({ src: U(n), cap_ar: "صور من بلجيكا", cap_en: "Photographs from Belgium" }));

export const belgiumGuides: Guide[] = [
  {
    slug: "album",
    title_ar: "صور من بلجيكا",
    title_en: "Photographs from Belgium",
    kicker_ar: "ألبوم الصور",
    kicker_en: "Photo album",
    image: U("img_3606.jpg"),
    blocks: [],
    gallery: ALBUM,
  },
];
