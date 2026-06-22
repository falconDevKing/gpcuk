import type { Person } from "./types";

export const churchLeadership: Person[] = [
  {
    id: "prophet-isaiah-macwealth",
    name: "Prophet Isaiah Macwealth",
    title: "Prophet",
    role: "Global President",
    scope: "global",
    spouseName: "",
    shortBio:
      "Prophet Isaiah Macwealth is the Global President of Gospel Pillars Church and provides spiritual leadership to the ministry across nations.",
    fullBio:
      "Prophet Isaiah Macwealth is the Global President of Gospel Pillars Church and leads the ministry with a vision to raise believers who are grounded in God's Word and equipped to influence their world. His Word-centred teaching and prophetic ministry strengthen faith, inspire prayer, and call people into deeper fellowship with God. Through his leadership, the Gospel Pillars family continues to grow as a global community committed to worship, discipleship, and kingdom service.",
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
    shortBio:
      "Apostle Derrick Utake provides spiritual oversight for Gospel Pillars churches across the Canada and Europe District.",
    fullBio:
      "Apostle Derrick Utake provides spiritual oversight for Gospel Pillars churches across the Canada and Europe District, strengthening shared direction, leadership, and ministry across the region. His apostolic mandate is centred on building strong local churches, raising leaders, and ensuring that the mission and values of the Gospel Pillars family are upheld throughout the district.",
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
    shortBio:
      "Rev Owen Igharo leads the Gospel Pillars Church UK Division and supports its growing family of local branches.",
    fullBio:
      "Rev Owen Igharo leads the Gospel Pillars Church UK Division, supporting local pastors and branches as the church grows in worship, discipleship, fellowship, and service across the United Kingdom. Under his leadership, the UK Division continues to strengthen its community presence, develop emerging leaders, and create welcoming spaces where people can encounter God and grow in faith.",
    image: { src: "", alt: "Rev Owen Igharo" },
    email: "",
    phone: "",
  },
];

export function getLeaderById(id: string): Person | undefined {
  return churchLeadership.find((leader) => leader.id === id);
}
