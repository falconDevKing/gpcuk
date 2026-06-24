import type { GalleryItem, ImageData } from "./types";

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

export const galleryPhotos: ImageData[] = [
  { src: "/assets/prophet-isaiah-macwealth.jpeg", alt: "Prophet Isaiah Macwealth" },
  { src: "/assets/word-for-the-year-banner.jpeg", alt: "2026 Word for the Year" },
  { src: "/assets/apostle-derrick-utake.jpg", alt: "Apostle Derrick Utake" },
  { src: "/assets/word-for-the-year-banner.jpeg", alt: "Worship and praise" },
  { src: "/assets/prophet-isaiah-macwealth.jpeg", alt: "Word-centred teaching" },
  { src: "/assets/apostle-derrick-utake.jpg", alt: "District leadership" },
  { src: "/assets/word-for-the-year-banner.jpeg", alt: "Glory, Overflow and Dominion" },
  { src: "/assets/prophet-isaiah-macwealth.jpeg", alt: "Global leadership" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "worship-moments",
    title: "Worship Moments",
    description: "",
    category: "worship",
    image: { src: "/assets/word-for-the-year-banner.jpeg", alt: "Gospel Pillars worship moment" },
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
    image: { src: "/assets/prophet-isaiah-macwealth.jpeg", alt: "Prophet Isaiah Macwealth" },
    branchId: "",
    date: "",
    featured: true,
    layout: "standard",
  },
  {
    id: "apostle-derrick",
    title: "Apostle Derrick Utake",
    description: "",
    category: "leadership",
    image: { src: "/assets/apostle-derrick-utake.jpg", alt: "Apostle Derrick Utake" },
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
    image: { src: "/assets/word-for-the-year-banner.jpeg", alt: "Gospel Pillars annual word artwork" },
    branchId: "",
    date: "",
    featured: true,
    layout: "wide",
  },
];
