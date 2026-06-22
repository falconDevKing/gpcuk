import type { MinistryArm, Person } from "./types";

export const ministryLeaders: Person[] = [
  {
    id: "pst-daniella-igharo",
    name: "Pst Daniella Igharo",
    title: "Pastor",
    role: "OneSound Charity Director",
    scope: "ministry",
    spouseName: "",
    shortBio: "",
    fullBio: "",
    image: { src: "", alt: "Pst Daniella Igharo" },
    email: "",
    phone: "",
  },
];

export const ministryArms: MinistryArm[] = [
  {
    id: "onesound-charity",
    name: "OneSound Charity",
    leader: ministryLeaders[0],
    summary: "",
    description: "",
    website: "",
    email: "",
    phone: "",
    image: { src: "", alt: "OneSound Charity" },
    social: {
      facebook: "https://www.facebook.com/profile.php?id=61577841322740",
      whatsapp: "https://wa.me/447518521921",
      instagram: "https://www.instagram.com/gpc.lewishamlondon/",
      youtube: "https://www.youtube.com/@gospelpillarsuk",
      tiktok: "https://www.tiktok.com/@gospelpillars_uk",
    },
  },
];
