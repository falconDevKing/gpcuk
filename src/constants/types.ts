export type ImageData = {
  src: string;
  alt: string;
};

export type SocialLinks = {
  facebook: string;
  instagram: string;
  youtube?: string;
  whatsapp: string;
  tiktok?: string;
};

export type Address = {
  venueName: string;
  line1: string;
  line2?: string;
  city: string;
  county: string;
  postcode: string;
  country: string;
};

export type ServiceTime = {
  id: string;
  name: string;
  day: string;
  startTime: string;
  endTime: string;
  frequency: string;
  description: string;
  notes: string;
};

export type Person = {
  id: string;
  name: string;
  title: string;
  role: string;
  scope: "global" | "district" | "division" | "branch" | "ministry";
  spouseName: string;
  shortBio: string;
  fullBio: string;
  image: ImageData;
  email: string;
  phone: string;
};

export type Branch = {
  id: string;
  slug: string;
  name: string;
  city: string;
  region: string;
  country: string;
  status: "active" | "coming-soon";
  featured: boolean;
  summary: string;
  pastorId: string;
  address: Address;
  coordinates: { latitude: number | null; longitude: number | null };
  phoneDisplay: string;
  phoneHref: string;
  whatsapp: string;
  publicEmail: string;
  contactFormRecipientEmail: string;
  serviceTimes: ServiceTime[];
  directionsUrl: string;
  mapEmbedUrl: string;
  image: ImageData;
  galleryImageIds: string[];
  social: SocialLinks;
};

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  category: "worship" | "community" | "events" | "leadership";
  image: ImageData;
  branchId: string;
  date: string;
  featured: boolean;
  layout: "standard" | "wide";
};

export type EventData = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  branchId: string;
  venue: Address;
  image: ImageData;
  registrationUrl: string;
  contactEmail: string;
  featured: boolean;
};

export type HeroSlide = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  image: ImageData;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type ExperienceIcon = "music" | "people" | "community";

export type ExperienceItem = {
  id: string;
  title: string;
  description: string;
  icon: ExperienceIcon;
  color: "amber" | "sky" | "emerald";
};

export type MinistryArm = {
  id: string;
  name: string;
  leader: Person;
  summary: string;
  description: string;
  website: string;
  email: string;
  phone: string;
  image: ImageData;
  social: SocialLinks;
};
