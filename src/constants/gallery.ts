import type { GalleryItem, GalleryPhoto, ImageData } from "./types";

export const galleryPage = {
  metadata: {
    title: "Gallery",
    description:
      "A glimpse of life at Gospel Pillars Church UK — worship, community, events, and leadership moments across our branches.",
  },
  hero: {
    eyebrow: "Photo Gallery",
    title: "A glimpse of life at Gospel Pillars.",
    description:
      "Moments of worship, fellowship, and community from across our UK branches.",
  },
};

const img = (src: string, alt: string): ImageData => ({ src, alt });

export const branchPhotos: Record<string, ImageData[]> = {
  london: [
    ...Array.from({ length: 17 }, (_, i) =>
      img(`/assets/branches/london/${i + 1}.webp`, `Gospel Pillars London`),
    ),
    ...Array.from({ length: 5 }, (_, i) =>
      img(`/assets/branches/london/${i + 18}.jpg`, `Gospel Pillars London`),
    ),
  ],
  liverpool: Array.from({ length: 12 }, (_, i) =>
    img(`/assets/branches/liverpool/${i + 1}.jpg`, `Gospel Pillars Liverpool`),
  ),
  luton: Array.from({ length: 6 }, (_, i) =>
    img(`/assets/branches/luton/${i + 1}.jpg`, `Gospel Pillars Luton`),
  ),
  newcastle: Array.from({ length: 6 }, (_, i) =>
    img(`/assets/branches/newcastle/${i + 1}.jpg`, `Gospel Pillars Newcastle`),
  ),
  glasgow: Array.from({ length: 9 }, (_, i) =>
    img(`/assets/branches/glasgow/${i + 1}.jpg`, `Gospel Pillars Glasgow`),
  ),
  sunderland: Array.from({ length: 17 }, (_, i) =>
    img(
      `/assets/branches/sunderland/${i + 1}.jpg`,
      `Gospel Pillars Sunderland`,
    ),
  ),
  middlesborough: Array.from({ length: 11 }, (_, i) =>
    img(
      `/assets/branches/middlesborough/${i + 1}.jpg`,
      `Gospel Pillars Middlesborough`,
    ),
  ),
  "milton-keynes": [
    img(
      `/assets/branches/milton-keynes/1.webp`,
      `Gospel Pillars Milton Keynes`,
    ),
  ],
};

export const galleryPhotos: GalleryPhoto[] = [
  { src: "/assets/branches/newcastle/1.jpg", alt: "Gospel Pillars Newcastle" },
  {
    src: "/assets/branches/glasgow/3.jpg",
    alt: "Gospel Pillars Glasgow",
    rowSpan: 2,
  },

  {
    src: "/assets/branches/london/1.webp",
    alt: "Gospel Pillars London",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    src: "/assets/branches/glasgow/1.jpg",
    alt: "Gospel Pillars Glasgow",
    rowSpan: 2,
  },
  { src: "/assets/branches/liverpool/1.jpg", alt: "Gospel Pillars Liverpool" },
  {
    src: "/assets/branches/middlesborough/1.jpg",
    alt: "Gospel Pillars Middlesborough",
  },
  {
    src: "/assets/branches/sunderland/1.jpg",
    alt: "Gospel Pillars Sunderland",
  },

  { src: "/assets/branches/london/2.webp", alt: "Gospel Pillars London" },
  {
    src: "/assets/branches/sunderland/2.jpg",
    alt: "Gospel Pillars Sunderland",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    src: "/assets/branches/middlesborough/2.jpg",
    alt: "Gospel Pillars Middlesborough",
  },
  { src: "/assets/branches/glasgow/2.jpg", alt: "Gospel Pillars Glasgow" },
  { src: "/assets/branches/london/3.webp", alt: "Gospel Pillars London" },

  {
    src: "/assets/branches/liverpool/2.jpg",
    alt: "Gospel Pillars Liverpool",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    src: "/assets/branches/newcastle/2.jpg",
    alt: "Gospel Pillars Newcastle",
    rowSpan: 2,
  },
  {
    src: "/assets/branches/sunderland/3.jpg",
    alt: "Gospel Pillars Sunderland",
  },
  { src: "/assets/branches/liverpool/3.jpg", alt: "Gospel Pillars Liverpool" },
  { src: "/assets/branches/luton/2.jpg", alt: "Gospel Pillars Luton" },
  {
    src: "/assets/branches/london/4.webp",
    alt: "Gospel Pillars London",
    colSpan: 2,
  },
  {
    src: "/assets/branches/luton/1.jpg",
    alt: "Gospel Pillars Luton",
    rowSpan: 2,
  },
  {
    src: "/assets/branches/middlesborough/3.jpg",
    alt: "Gospel Pillars Middlesborough",
  },
  {
    src: "/assets/branches/sunderland/4.jpg",
    alt: "Gospel Pillars Sunderland",
  },
  {
    src: "/assets/branches/liverpool/4.jpg",
    alt: "Gospel Pillars Liverpool",
    rowSpan: 2,
  },
  {
    src: "/assets/branches/london/5.webp",
    alt: "Gospel Pillars London",
    rowSpan: 2,
  },
  { src: "/assets/branches/newcastle/3.jpg", alt: "Gospel Pillars Newcastle" },
  { src: "/assets/branches/luton/3.jpg", alt: "Gospel Pillars Luton" },
  { src: "/assets/branches/glasgow/4.jpg", alt: "Gospel Pillars Glasgow" },
  {
    src: "/assets/branches/sunderland/5.jpg",
    alt: "Gospel Pillars Sunderland",
  },
  {
    src: "/assets/branches/middlesborough/4.jpg",
    alt: "Gospel Pillars Middlesborough",
  },
  { src: "/assets/branches/london/6.webp", alt: "Gospel Pillars London" },
  { src: "/assets/branches/liverpool/5.jpg", alt: "Gospel Pillars Liverpool" },
  { src: "/assets/branches/newcastle/4.jpg", alt: "Gospel Pillars Newcastle" },
  {
    src: "/assets/branches/sunderland/6.jpg",
    alt: "Gospel Pillars Sunderland",
  },
  {
    src: "/assets/branches/glasgow/5.jpg",
    alt: "Gospel Pillars Glasgow",
    rowSpan: 2,
  },
  { src: "/assets/branches/luton/4.jpg", alt: "Gospel Pillars Luton" },
  { src: "/assets/branches/london/7.webp", alt: "Gospel Pillars London" },
  {
    src: "/assets/branches/middlesborough/5.jpg",
    alt: "Gospel Pillars Middlesborough",
  },
  { src: "/assets/branches/liverpool/6.jpg", alt: "Gospel Pillars Liverpool" },
  {
    src: "/assets/branches/sunderland/7.jpg",
    alt: "Gospel Pillars Sunderland",
  },
  {
    src: "/assets/branches/london/8.webp",
    alt: "Gospel Pillars London",
    rowSpan: 2,
  },
  { src: "/assets/branches/newcastle/5.jpg", alt: "Gospel Pillars Newcastle" },
  {
    src: "/assets/branches/middlesborough/6.jpg",
    alt: "Gospel Pillars Middlesborough",
  },
  {
    src: "/assets/branches/london/21.jpg",
    alt: "Gospel Pillars London",
    rowSpan: 2,
  },
  { src: "/assets/branches/liverpool/7.jpg", alt: "Gospel Pillars Liverpool" },
  {
    src: "/assets/branches/sunderland/8.jpg",
    alt: "Gospel Pillars Sunderland",
  },
  { src: "/assets/branches/luton/5.jpg", alt: "Gospel Pillars Luton" },
  { src: "/assets/branches/london/9.webp", alt: "Gospel Pillars London" },
  {
    src: "/assets/branches/glasgow/6.jpg",
    alt: "Gospel Pillars Glasgow",
    rowSpan: 2,
  },
  {
    src: "/assets/branches/middlesborough/7.jpg",
    alt: "Gospel Pillars Middlesborough",
    rowSpan: 2,
  },
  { src: "/assets/branches/liverpool/8.jpg", alt: "Gospel Pillars Liverpool" },
  {
    src: "/assets/branches/sunderland/9.jpg",
    alt: "Gospel Pillars Sunderland",
  },
  { src: "/assets/branches/london/10.webp", alt: "Gospel Pillars London" },
  { src: "/assets/branches/newcastle/6.jpg", alt: "Gospel Pillars Newcastle" },
  { src: "/assets/branches/glasgow/7.jpg", alt: "Gospel Pillars Glasgow" },
  {
    src: "/assets/branches/sunderland/10.jpg",
    alt: "Gospel Pillars Sunderland",
    colSpan: 2,
  },
  { src: "/assets/branches/liverpool/9.jpg", alt: "Gospel Pillars Liverpool" },
  { src: "/assets/branches/luton/6.jpg", alt: "Gospel Pillars Luton" },
  { src: "/assets/branches/london/11.webp", alt: "Gospel Pillars London" },
  {
    src: "/assets/branches/middlesborough/8.jpg",
    alt: "Gospel Pillars Middlesborough",
  },
  {
    src: "/assets/branches/sunderland/11.jpg",
    alt: "Gospel Pillars Sunderland",
  },
  { src: "/assets/branches/liverpool/10.jpg", alt: "Gospel Pillars Liverpool" },
  {
    src: "/assets/branches/glasgow/8.jpg",
    alt: "Gospel Pillars Glasgow",
  },
  { src: "/assets/branches/london/12.webp", alt: "Gospel Pillars London" },
  {
    src: "/assets/branches/middlesborough/9.jpg",
    alt: "Gospel Pillars Middlesborough",
  },
  {
    src: "/assets/branches/london/21.jpg",
    alt: "Gospel Pillars London",
    rowSpan: 2,
  },
  {
    src: "/assets/branches/sunderland/12.jpg",
    alt: "Gospel Pillars Sunderland",
  },
  {
    src: "/assets/branches/milton-keynes/1.webp",
    alt: "Gospel Pillars Milton Keynes",
  },
  { src: "/assets/branches/liverpool/11.jpg", alt: "Gospel Pillars Liverpool" },
  { src: "/assets/branches/london/13.webp", alt: "Gospel Pillars London" },
  { src: "/assets/branches/glasgow/9.jpg", alt: "Gospel Pillars Glasgow" },
  {
    src: "/assets/branches/sunderland/13.jpg",
    alt: "Gospel Pillars Sunderland",
  },
  {
    src: "/assets/branches/middlesborough/10.jpg",
    alt: "Gospel Pillars Middlesborough",
  },
  { src: "/assets/branches/liverpool/12.jpg", alt: "Gospel Pillars Liverpool" },
  { src: "/assets/branches/london/14.webp", alt: "Gospel Pillars London" },
  {
    src: "/assets/branches/sunderland/14.jpg",
    alt: "Gospel Pillars Sunderland",
  },
  {
    src: "/assets/branches/middlesborough/11.jpg",
    alt: "Gospel Pillars Middlesborough",
  },
  { src: "/assets/branches/london/15.webp", alt: "Gospel Pillars London" },
  {
    src: "/assets/branches/sunderland/15.jpg",
    alt: "Gospel Pillars Sunderland",
    rowSpan: 2,
  },
  { src: "/assets/branches/london/16.webp", alt: "Gospel Pillars London" },
  {
    src: "/assets/branches/sunderland/16.jpg",
    alt: "Gospel Pillars Sunderland",
    rowSpan: 2,
  },
  {
    src: "/assets/branches/london/17.webp",
    alt: "Gospel Pillars London",
    rowSpan: 2,
  },
  {
    src: "/assets/branches/sunderland/17.jpg",
    alt: "Gospel Pillars Sunderland",
    rowSpan: 2,
  },
  {
    src: "/assets/branches/london/20.jpg",
    alt: "Gospel Pillars London",
    rowSpan: 2,
  },
  {
    src: "/assets/branches/london/18.jpg",
    alt: "Gospel Pillars London",
    colSpan: 2,
  },
  // { src: "/assets/branches/london/19.jpg", alt: "Gospel Pillars London" },

  // { src: "/assets/branches/london/22.jpg", alt: "Gospel Pillars London" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "worship-moments",
    title: "Worship Moments",
    description: "",
    category: "worship",
    image: {
      src: "/assets/branches/london/1.webp",
      alt: "Gospel Pillars worship",
    },
    branchId: "",
    date: "",
    featured: true,
    layout: "wide",
  },
  {
    id: "the-word",
    title: "The Word",
    description: "",
    category: "leadership",
    image: {
      src: "/assets/prophet-isaiah-macwealth.jpeg",
      alt: "Prophet Isaiah Macwealth",
    },
    branchId: "",
    date: "",
    featured: true,
    layout: "standard",
  },
  {
    id: "community",
    title: "Community",
    description: "",
    category: "community",
    image: {
      src: "/assets/branches/sunderland/1.jpg",
      alt: "Gospel Pillars community",
    },
    branchId: "",
    date: "",
    featured: true,
    layout: "standard",
  },
  {
    id: "presence",
    title: "Presence",
    description: "",
    category: "worship",
    image: {
      src: "/assets/branches/glasgow/1.jpg",
      alt: "Gospel Pillars worship",
    },
    branchId: "",
    date: "",
    featured: true,
    layout: "wide",
  },
];
