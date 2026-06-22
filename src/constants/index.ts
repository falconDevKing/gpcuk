export * from "./branches";
export * from "./church";
export * from "./contact";
export * from "./events";
export * from "./gallery";
export * from "./homepage";
export * from "./leadership";
export * from "./ministries";
export * from "./pastors";
export * from "./services";
export * from "./types";

import { branches } from "./branches";
import {
  aboutContent,
  appContact,
  churchIdentity,
  footerContent,
  giving,
  navigation,
  seo,
} from "./church";
import { contactPage } from "./contact";
import { events } from "./events";
import { galleryItems } from "./gallery";
import {
  churchExperiences,
  footerCta,
  heroSlides,
  homepageSections,
  prophetFeature,
  welcomeContent,
  wordForTheYear,
} from "./homepage";
import { churchLeadership } from "./leadership";
import { ministryArms } from "./ministries";
import { branchPastors } from "./pastors";
import { nationwideServiceTimes } from "./services";

export const siteData = {
  site: churchIdentity,
  appContact,
  giving,
  seo,
  navigation,
  home: {
    heroSlides,
    welcome: { ...welcomeContent, serviceTimes: nationwideServiceTimes },
    wordForTheYear,
    prophetFeature,
    footerCta,
    sections: homepageSections,
    experiences: churchExperiences,
  },
  about: aboutContent,
  leadership: churchLeadership,
  pastors: branchPastors,
  ministryArms,
  branches,
  gallery: galleryItems,
  events,
  contactPage,
  footer: footerContent,
};
