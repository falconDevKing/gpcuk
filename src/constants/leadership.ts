import type { Person } from "./types";

export const churchLeadership: Person[] = [
  {
    id: "prophet-isaiah-macwealth",
    name: "Prophet Isaiah Macwealth",
    title: "Prophet",
    role: "Global President",
    scope: "global",
    spouseName: "",
    shortBio: "",
    fullBio: "",
    image: {
      src: "/assets/prophet-isaiah-macwealth.jpeg",
      alt: "Prophet Isaiah Macwealth",
    },
    email: "",
    phone: "",
  },
  {
    id: "apostle-derrick-utake",
    name: "Apostle Derrick Utake",
    title: "Apostle",
    role: "Canada / Europe District Head",
    scope: "district",
    spouseName: "",
    shortBio: "",
    fullBio: "",
    image: {
      src: "/assets/apostle-derrick-utake.jpg",
      alt: "Apostle Derrick Utake",
    },
    email: "",
    phone: "",
  },
  {
    id: "rev-owen-igharo",
    name: "Rev Owen Igharo",
    title: "Reverend",
    role: "UK Divisional Head",
    scope: "division",
    spouseName: "",
    shortBio: "",
    fullBio: "",
    image: { src: "", alt: "Rev Owen Igharo" },
    email: "",
    phone: "",
  },
];

export function getLeaderById(id: string): Person | undefined {
  return churchLeadership.find((leader) => leader.id === id);
}
