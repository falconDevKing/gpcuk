import type { MinistryArm, Person } from "./types";

export const ministryLeaders: Person[] = [
  {
    id: "pst-daniella-igharo",
    name: "Pst Daniella Igharo",
    title: "Pastor",
    role: "OneSound Charity Director",
    scope: "ministry",
    spouseName: "",
    shortBio: "Pst Daniella Igharo leads the work of OneSound Charity UK.",
    fullBio:
      "Pst Daniella Igharo leads OneSound Charity UK as it carries out its charitable work and serves communities.",
    image: { src: "/assets/pst-daniella-igharo.jpg", alt: "Pst Daniella Igharo" },
    email: "",
    phone: "",
  },
];

export const ministryArms: MinistryArm[] = [
  {
    id: "onesound-charity",
    name: "OneSound Charity",
    leader: ministryLeaders[0],
    summary:
      "OneSound Charity is a ministry arm of Gospel Pillars Church UK led by Pst Daniella Igharo.",
    description:
      "Discover OneSound Charity's work, follow its latest updates, or contact the team directly to learn more.",
    website: "https://onesoundcharity.org/",
    email: "",
    phone: "+44 7518 521921",
    whatsapp: "https://wa.me/447518521921",
    image: { src: "", alt: "OneSound Charity" },
    social: {
      facebook:
        "https://www.facebook.com/p/Onesound-Charity-UK-61577841322740/",
      instagram: "https://www.instagram.com/onesoundcharityuk/",
      tiktok: "https://www.tiktok.com/@onesoundcharityuk",
    },
  },
];
