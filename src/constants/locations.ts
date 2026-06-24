import { planVisitWhatsAppUrl } from "./church";

export const locationsPage = {
  metadata: {
    title: "Locations",
    description:
      "Find a Gospel Pillars Church branch near you across the United Kingdom. View addresses, service times, and contact details for all our locations.",
  },
  hero: {
    eyebrow: "Our Locations",
    title: "Find a branch near you.",
    description:
      "Gospel Pillars Church has branches across the United Kingdom. Each location is a welcoming community where you can worship, grow, and belong.",
  },
  cta: {
    eyebrow: "Plan Your Visit",
    title: "We would love to welcome you this Sunday.",
    description:
      "Send us a WhatsApp message and our team will help you find the nearest branch and plan your visit.",
    primaryCta: { label: "Message Us on WhatsApp", href: planVisitWhatsAppUrl },
  },
};
