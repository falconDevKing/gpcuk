import type { Person } from "./types";

const createPastor = (
  id: string,
  name: string,
  city: string,
  image: string,
): Person => ({
  id,
  name,
  title: "Pastor",
  role: `${city} Branch Pastor`,
  scope: "branch",
  spouseName: "",
  shortBio: "",
  fullBio: "",
  image: { src: image, alt: `${name}, ${city} Branch Pastor` },
  email: "",
  phone: "",
});

export const branchPastors: Person[] = [
  createPastor("london-pastor", "Pst. Kingsley Igharo", "London", "/assets/branches/london/pastor.webp"),
  createPastor("liverpool-pastor", "Pst. Kenneth Uchemefuna", "Liverpool", "/assets/branches/liverpool/pastor.jpg"),
  createPastor("luton-pastor", "Pst. Jaysil Utibe", "Luton", "/assets/branches/luton/pastor.jpg"),
  createPastor("newcastle-pastor", "Pst. Bobby Omorodion", "Newcastle", "/assets/branches/newcastle/pastor.jpg"),
  createPastor("glasgow-pastor", "Pst. Ihuoma Ekwueme", "Glasgow", "/assets/branches/glasgow/pastor.jpg"),
  createPastor("middlesborough-pastor", "Pst. Chuks OwenKings", "Middlesbrough", "/assets/branches/middlesborough/pastor.jpg"),
  createPastor("sunderland-pastor", "Pst. Peter Bardi", "Sunderland", "/assets/branches/sunderland/pastor.jpg"),
  createPastor("milton-keynes-pastor", "Pst. Austine Mcwealth", "Milton Keynes", "/assets/branches/milton-keynes/pastor.jpg"),
];

export function getPastorById(id: string): Person | undefined {
  return branchPastors.find((pastor) => pastor.id === id);
}
