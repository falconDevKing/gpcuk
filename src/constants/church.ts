import type { Address, ImageData, SocialLinks } from "./types";

export const churchIdentity = {
  name: "Gospel Pillars Church UK",
  shortName: "GPC UK",
  legalName: "",
  tagline: "One Church. Many Locations.",
  description:
    "A global ministry with a growing church presence across the United Kingdom.",
  siteUrl: "",
  locale: "en-GB",
  country: "United Kingdom",
  timezone: "Europe/London",
  logo: {
    src: "/assets/logo.png",
    alt: "Gospel Pillars Church UK logo",
  } satisfies ImageData,
  favicon: "/icon.png",
};

export const appContact = {
  publicEmail: "info@gospelpillars.co.uk",
  prayerEmail: "prayer@gospelpillars.co.uk",
  contactFormRecipientEmail: "info@gospelpillars.co.uk",
  phoneDisplay: "+44 7886 887994",
  phoneHref: "+44 7886 887994",
  whatsapp: "+44 7882 483329",
  whatsappLink: "https://wa.me/447882483329",
  officeAddress: {
    venueName: "The Rehoboth",
    line1: "Main Hall, Harris Girls Academy Bromley,",
    line2: "Lennard Road",
    city: "Beckenham",
    county: "London",
    postcode: "BR3 1QP",
    country: "United Kingdom",
  } satisfies Address,
  social: {
    facebook: "https://www.facebook.com/gospelpillarsuk",
    instagram: "https://www.instagram.com/gpc.lewishamlondon/",
    youtube: "https://www.youtube.com/@gospelpillarsuk",
    tiktok: "https://www.tiktok.com/@gospelpillars_uk",
  } satisfies SocialLinks,
};

export const planVisitWhatsAppMessage =
  "Hello Gospel Pillars Church UK, I would like to plan a visit. I stay in [YOUR_LOCATION], please help me with the nearest branch, service times, and anything I should know before attending.";

export const planVisitWhatsAppUrl = `${appContact.whatsappLink}?text=${encodeURIComponent(planVisitWhatsAppMessage)}`;

export const giving = {
  enabled: false,
  url: "",
  label: "Give Now",
  unavailableLabel: "Giving details coming soon",
  description: "",
};

export const seo = {
  defaultTitle: "Gospel Pillars Church UK",
  titleTemplate: "%s | Gospel Pillars Church UK",
  defaultDescription:
    "Find a Gospel Pillars Church branch, service, and church family near you in the UK.",
  keywords: [
    "Gospel Pillars Church UK",
    "church in the UK",
    "UK church locations",
  ],
  socialImage: { src: "", alt: "Gospel Pillars Church UK" } satisfies ImageData,
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerContent = {
  description:
    "Worship with Gospel Pillars Church UK and connect with a growing church family across multiple locations.",
  copyrightName: "Gospel Pillars Church UK",
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function toTelephoneHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}
