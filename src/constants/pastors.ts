import type { Person } from "./types";

const createPastor = (id: string, name: string, city: string): Person => ({
  id,
  name,
  title: "Pastor",
  role: `${city} Branch Pastor`,
  scope: "branch",
  spouseName: "",
  shortBio: "",
  fullBio: "",
  image: { src: "", alt: `${name}, ${city} Branch Pastor` },
  email: "",
  phone: "",
});

export const branchPastors: Person[] = [
  createPastor("london-pastor", "Pst. Kingsley Igharo", "London"),
  createPastor("liverpool-pastor", "Pst. Kenneth Uchemefuna", "Liverpool"),
  createPastor("luton-pastor", "Pst. Jaysil Utibe", "Luton"),
  createPastor("newcastle-pastor", "Pst. Bobby Omorodion", "Newcastle"),
  createPastor("glasgow-pastor", "Pst. Ihuoma Ekwueme", "Glasgow"),
  createPastor(
    "middlesborough-pastor",
    "Pst. Chuks OwenKings",
    "Middlesbrough",
  ),
  createPastor("sunderland-pastor", "Pst. Peter Bardi", "Sunderland"),
  createPastor(
    "milton-keynes-pastor",
    "Pst. Austine Mcwealth",
    "Milton Keynes",
  ),
];

export function getPastorById(id: string): Person | undefined {
  return branchPastors.find((pastor) => pastor.id === id);
}
