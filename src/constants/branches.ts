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

export const branches: Branch[] = [
  createBranch({
    id: "london",
    city: "London",
    pastorId: "london-pastor",
    social: {
      facebook: "https://www.facebook.com/gpclewisham",
      instagram: "https://www.instagram.com/gpc.lewishamlondon/",
      tiktok: "https://www.tiktok.com/@gpc.lewisham",
    },
    address: {
      venueName: "The Rehoboth",
      line1: "Main Hall, Harris Girls Academy Bromley,",
      line2: "Lennard Road",
      city: "Beckenham",
      county: "London",
      postcode: "BR3 1QP",
      country: "United Kingdom",
    },
    phone: "+447873652025",
    whatsapp: "https://wa.me/447873652025",
    publicEmail: "lewisham@gospelpillars.co.uk",
    contactFormRecipientEmail: "lewisham@gospelpillars.co.uk",
    image: "/assets/branches/london/1.webp",
  }),
  createBranch({
    id: "liverpool",
    city: "Liverpool",
    pastorId: "liverpool-pastor",
    social: {
      facebook: "https://www.facebook.com/gospelpillarsliverpool/",
      instagram: "https://www.instagram.com/gpc.liverpool/",
      tiktok: "https://www.tiktok.com/@gpcliverpool",
    },
    address: {
      venueName: "Ark of Light Hub",
      line1: "2 Stopgate Lane",
      city: "Liverpool",
      county: "Liverpool",
      postcode: "L9 6AP",
      country: "United Kingdom",
    },
    phone: "+447733732649",
    whatsapp: "https://wa.me/447733732649",
    publicEmail: "liverpool@gospelpillars.co.uk",
    contactFormRecipientEmail: "liverpool@gospelpillars.co.uk",
    image: "/assets/branches/liverpool/1.jpg",
  }),
  createBranch({
    id: "luton",
    city: "Luton",
    pastorId: "luton-pastor",
    social: {
      facebook: "https://www.facebook.com/gospelpillarschurchluton/",
      instagram: "https://www.instagram.com/gpc.luton/",
      tiktok: "https://www.tiktok.com/@gospel.pillars.luton",
    },
    address: {
      venueName: "Regional House",
      line1: "28 - 34 Chapel Street",
      city: "Luton",
      county: "Luton",
      postcode: "LU1 2SE",
      country: "United Kingdom",
    },
    phone: "+447774915049",
    whatsapp: "https://wa.me/447774915049",
    publicEmail: "luton@gospelpillars.co.uk",
    contactFormRecipientEmail: "luton@gospelpillars.co.uk",
    image: "/assets/branches/luton/1.jpg",
  }),
  createBranch({
    id: "newcastle",
    city: "Newcastle",
    pastorId: "newcastle-pastor",
    social: {
      facebook: "https://www.facebook.com/Gospelpillarschurchnewcastle/",
      instagram: "https://www.instagram.com/gpc.newcastle",
    },
    address: {
      line1: "Leonardo Hotel, Scotswood Road",
      city: "Newcastle Upon Tyne",
      county: "Newcastle",
      postcode: "NE1 4AD",
      country: "United Kingdom",
      venueName: "",
    },
    phone: "+447783155411",
    whatsapp: "https://wa.me/447783155411",
    publicEmail: "newcastle@gospelpillars.co.uk",
    contactFormRecipientEmail: "newcastle@gospelpillars.co.uk",
    image: "/assets/branches/newcastle/1.jpg",
  }),
  createBranch({
    id: "glasgow",
    city: "Glasgow",
    pastorId: "glasgow-pastor",
    social: {
      facebook: "https://www.facebook.com/p/Gospel-Pillars-Church-Glasgow/",
      instagram: "https://www.instagram.com/gospelpillarschurchglasgow",
      tiktok: "https://www.tiktok.com/@gpc_glasgow",
    },
    address: {
      line1: "Room 109, Leonardo Royal Hotel",
      line2: "80 Jamaica Street",
      city: "Glasgow",
      county: "Glasgow",
      postcode: "G1 4QG",
      country: "United Kingdom",
      venueName: "",
    },
    phone: "+447413023053",
    whatsapp: "https://wa.me/447413023053",
    publicEmail: "glasgow@gospelpillars.co.uk",
    contactFormRecipientEmail: "glasgow@gospelpillars.co.uk",
    image: "/assets/branches/glasgow/1.jpg",
  }),
  createBranch({
    id: "sunderland",
    city: "Sunderland",
    pastorId: "sunderland-pastor",
    social: {
      facebook:
        "https://www.facebook.com/p/Gospel-Pillars-Church-Sunderland-100084283663716/",
      instagram: "https://www.instagram.com/gospelpillarschurchsunderland/",
      tiktok: "https://www.tiktok.com/@gpcsunderlandmedia",
    },
    address: {
      venueName: "Deptford & Milfield Community Centre",
      line1: "270 Hylton Road",
      city: "Sunderland",
      county: "Sunderland",
      postcode: "SR4 7XJ",
      country: "United Kingdom",
    },
    phone: "+447534112021",
    whatsapp: "https://wa.me/447534112021",
    publicEmail: "sunderland@gospelpillars.co.uk",
    contactFormRecipientEmail: "sunderland@gospelpillars.co.uk",
    image: "/assets/branches/sunderland/1.jpg",
  }),
  createBranch({
    id: "middlesborough",
    city: "Middlesborough",
    pastorId: "middlesborough-pastor",
    social: {
      facebook:
        "https://www.facebook.com/p/Gospel-Pillars-Church-Middlesbrough-UK-61554912783056/",
      instagram: "https://www.instagram.com/gpc.middlesbroughchurch/",
    },
    address: {
      venueName: "Odeon Deluxe Cinema, Screen 7",
      line1: "Marton Road",
      city: "Middlesborough",
      county: "Middlesborough",
      postcode: "TS1 2DY",
      country: "United Kingdom",
    },
    phone: "+447754475584",
    whatsapp: "https://wa.me/447754475584",
    publicEmail: "middlesborough@gospelpillars.co.uk",
    contactFormRecipientEmail: "middlesborough@gospelpillars.co.uk",
    image: "/assets/branches/middlesborough/1.jpg",
  }),
  createBranch({
    id: "milton-keynes",
    city: "Milton Keynes",
    pastorId: "milton-keynes-pastor",
    social: {
      facebook:
        "https://www.facebook.com/p/Gospel-Pillars-Church-Milton-Keynes-61572403592626/",
      instagram: "https://www.instagram.com/gpcmiltonkeynes/",
      tiktok: "https://www.tiktok.com/@gpcmiltonkeynes",
    },
    address: {
      line1: "27a Queensway",
      line2: "Bletchley",
      city: "Milton Keynes",
      county: "Milton Keynes",
      postcode: "MK2 2DR",
      country: "United Kingdom",
      venueName: "",
    },
    phone: "+447856730016",
    whatsapp: "https://wa.me/447856730016",
    publicEmail: "milton-keynes@gospelpillars.co.uk",
    contactFormRecipientEmail: "milton-keynes@gospelpillars.co.uk",
    image: "/assets/branches/milton-keynes/1.webp",
  }),
];

export function getBranchById(id: string): Branch | undefined {
  return branches.find((branch) => branch.id === id);
}
