import type { Address, Branch, SocialLinks } from "./types";

const createBranch = ({
  id,
  city,
  pastorId,
  social,
  address,
  phone,
  whatsapp,
  publicEmail,
  contactFormRecipientEmail,
  image,
}: {
  id: string;
  city: string;
  pastorId: string;
  social: SocialLinks;
  address: Address;
  phone: string;
  whatsapp: string;
  publicEmail: string;
  contactFormRecipientEmail: string;
  image: string;
}): Branch => ({
  id,
  slug: id,
  name: `Gospel Pillars Church ${city}`,
  city,
  region: "",
  country: "United Kingdom",
  status: "active",
  featured: false,
  summary: "",
  pastorId,
  address,
  coordinates: { latitude: null, longitude: null },
  phoneDisplay: phone,
  phoneHref: phone,
  whatsapp,
  publicEmail,
  contactFormRecipientEmail,
  serviceTimes: [],
  directionsUrl: "",
  mapEmbedUrl: "",
  image: { src: image, alt: `Gospel Pillars Church ${city}` },
  galleryImageIds: [],
  social,
});

const liverpoolSocial: SocialLinks = {
  facebook: "https://www.facebook.com/gpclewisham",
  whatsapp: "https://wa.me/447733732649",
  instagram: "https://www.instagram.com/gpc.lewishamlondon/",
  tiktok: "https://www.tiktok.com/@gpcliverpool",
};

const liverpoolAddress: Address = {
  venueName: "Ark of Light Hub, Liverpool",
  line1: "2 Stopgate Lane",
  city: "Liverpool",
  county: "Liverpool",
  postcode: "L9 6AP",
  country: "United Kingdom",
};

const copiedLiverpoolDetails = {
  social: liverpoolSocial,
  address: liverpoolAddress,
  phone: "+447733732649",
  whatsapp: "https://wa.me/447733732649",
  publicEmail: "liverpool@gospelpillarsuk.org",
  contactFormRecipientEmail: "liverpool@gospelpillarsuk.org",
  image: "",
};

export const branches: Branch[] = [
  createBranch({
    id: "london",
    city: "London",
    pastorId: "london-pastor",
    social: {
      facebook: "https://www.facebook.com/gpclewisham",
      whatsapp: "https://wa.me/447873652025",
      instagram: "https://www.instagram.com/gpc.lewishamlondon/",
      tiktok: "https://www.tiktok.com/@gpc.lewisham",
    },
    address: {
      venueName: "The Rehoboth",
      line1: "Capital House,",
      line2: "47 Rushey Green.",
      city: "London",
      county: "London",
      postcode: "SE6 4AS",
      country: "United Kingdom",
    },
    phone: "+447873652025",
    whatsapp: "https://wa.me/447873652025",
    publicEmail: "lewisam@gospelpillarsuk.org",
    contactFormRecipientEmail: "lewisam@gospelpillarsuk.org",
    image: "",
  }),
  createBranch({
    id: "liverpool",
    city: "Liverpool",
    pastorId: "liverpool-pastor",
    ...copiedLiverpoolDetails,
  }),
  createBranch({
    id: "luton",
    city: "Luton",
    pastorId: "luton-pastor",
    ...copiedLiverpoolDetails,
  }),
  createBranch({
    id: "newcastle",
    city: "Newcastle",
    pastorId: "newcastle-pastor",
    ...copiedLiverpoolDetails,
  }),
  createBranch({
    id: "glasgow",
    city: "Glasgow",
    pastorId: "glasgow-pastor",
    ...copiedLiverpoolDetails,
  }),
  createBranch({
    id: "middlesborough",
    city: "Middlesborough",
    pastorId: "middlesborough-pastor",
    ...copiedLiverpoolDetails,
  }),
  createBranch({
    id: "sunderland",
    city: "Sunderland",
    pastorId: "sunderland-pastor",
    ...copiedLiverpoolDetails,
  }),
  createBranch({
    id: "milton-keynes",
    city: "Milton Keynes",
    pastorId: "milton-keynes-pastor",
    ...copiedLiverpoolDetails,
  }),
];

export function getBranchById(id: string): Branch | undefined {
  return branches.find((branch) => branch.id === id);
}
