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
  createPastor("luton-pastor", "Pst. Kenneth Uchemefuna", "Luton"),
  createPastor("newcastle-pastor", "Pst. Kenneth Uchemefuna", "Newcastle"),
  createPastor("glasgow-pastor", "Pst. Kenneth Uchemefuna", "Glasgow"),
  createPastor(
    "middlesborough-pastor",
    "Pst. Kenneth Uchemefuna",
    "Middlesborough",
  ),
  createPastor("sunderland-pastor", "Pst. Kenneth Uchemefuna", "Sunderland"),
  createPastor(
    "milton-keynes-pastor",
    "Pst. Kenneth Uchemefuna",
    "Milton Keynes",
  ),
];

export function getPastorById(id: string): Person | undefined {
  return branchPastors.find((pastor) => pastor.id === id);
}
