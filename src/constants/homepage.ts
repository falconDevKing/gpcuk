import type { ExperienceItem, HeroSlide } from "./types";
import { planVisitWhatsAppUrl } from "./church";

export const heroSlides: HeroSlide[] = [
  {
    id: "worship",
    label: "Worship",
    eyebrow: "A joyful church community with room for you and your family.",
    title: "Experience God in a new way.",
    description:
      "Find belonging, encouragement, and a church family ready to welcome you.",
    image: { src: "", alt: "Gospel Pillars Church worship" },
    primaryCta: { label: "Plan Your Visit", href: planVisitWhatsAppUrl },
    secondaryCta: { label: "View Locations", href: "/locations" },
  },
  {
    id: "community",
    label: "Community",
    eyebrow: "A bright and welcoming family across the United Kingdom.",
    title: "Find faith, family and fellowship.",
    description:
      "Come as you are and discover a church family shaped by worship and the Word.",
    image: { src: "", alt: "Gospel Pillars Church community" },
    primaryCta: { label: "Plan Your Visit", href: planVisitWhatsAppUrl },
    secondaryCta: { label: "View Locations", href: "/locations" },
  },
];

export const welcomeContent = {
  eyebrow: "Welcome",
  title: "Welcome to Gospel Pillars Church UK",
  description:
    "A house of worship where faith is strengthened, people encounter God, and families find a place to belong.",
};

export const wordForTheYear = {
  year: 2026,
  eyebrow: "Word for the Year",
  title: "Glory, Overflow and Dominion",
  description: "",
  scriptureReference: "Genesis 1:26",
  scriptureText:
    "And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.",
  image: {
    src: "/assets/word-for-the-year-banner.jpeg",
    alt: "2026 Glory, Overflow and Dominion banner",
  },
};

export const prophetFeature = {
  personId: "prophet-isaiah-macwealth",
  description:
    "Prophet Isaiah Macwealth is the Global President of Gospel Pillars Church and leads the ministry with a vision to raise believers who are grounded in God's Word and equipped to influence their world. His Word-centred teaching and prophetic ministry continue to strengthen faith, inspire prayer, and draw people into deeper fellowship with God across nations. Through his leadership, the Gospel Pillars family is growing as a global community committed to worship, discipleship, and kingdom service.",
  learnMoreHref: "/about",
};

export const footerCta = {
  eyebrow: "Join us this Sunday",
  title: "Let us help you plan your visit and find a branch near you.",
  description:
    "Send us a message and we will help you confirm service details or find the nearest location.",
};

export const homepageSections = {
  branches: {
    eyebrow: "UK Branch Network",
    title: "Find a Gospel Pillars branch near you.",
    description:
      "Connect with a Gospel Pillars congregation and plan your next visit.",
  },
  gallery: {
    eyebrow: "Photo Gallery",
    title: "A glimpse of life at Gospel Pillars.",
  },
  experiences: {
    eyebrow: "Church Experience",
    title: "Worship, fellowship, and community in one family.",
  },
};

export const churchExperiences: ExperienceItem[] = [
  {
    id: "worship",
    title: "Worship",
    description: "Spirit-filled worship moments across the UK family.",
    icon: "music",
    color: "amber",
  },
  {
    id: "fellowship",
    title: "Fellowship",
    description: "Warm connection before, during, and after service.",
    icon: "people",
    color: "sky",
  },
  {
    id: "community",
    title: "Community",
    description: "A multi-branch church presence built for real attendance.",
    icon: "community",
    color: "emerald",
  },
];
