import { planVisitWhatsAppUrl } from "./church";

export const aboutPage = {
  metadata: {
    title: "About Us",
    description:
      "Learn about Gospel Pillars Church UK, our beliefs, leadership, branch pastors, and ministry structure.",
  },
  hero: {
    eyebrow: "About Gospel Pillars",
    title: "One church, built on the Word, serving across nations.",
    description:
      "Gospel Pillars Church UK is part of a global ministry committed to helping people know God, grow through His Word, and live out their faith through worship, fellowship, and service.",
    primaryCta: { label: "Find a Branch", href: "/locations" },
    secondaryCta: {
      label: "Plan Your Visit",
      href: planVisitWhatsAppUrl,
    },
  },
  overview: {
    eyebrow: "Who We Are",
    title: "One family with a shared spiritual heritage.",
    introduction:
      "Across our UK branches, we are a welcoming church family united by worship, the Word, prayer, discipleship, and a desire to serve the communities around us.",
    vision: {
      title: "Our Vision",
      description:
        "To raise a people rooted in God's Word, alive to His presence, and equipped to represent His kingdom in every sphere of life.",
    },
    mission: {
      title: "Our Mission",
      description:
        "We gather people into worship and fellowship, teach the Word with clarity, nurture spiritual growth, and establish strong local churches that serve their communities.",
    },
    beliefs: [
      {
        id: "word",
        title: "The Word of God",
        description:
          "We receive the Bible as God's Word and the foundation for faith, spiritual growth, and daily living.",
      },
      {
        id: "jesus",
        title: "Jesus Christ",
        description:
          "We believe Jesus Christ is central to salvation, our hope, and the life we are called to live.",
      },
      {
        id: "spirit",
        title: "Life in the Spirit",
        description:
          "We believe the Holy Spirit empowers believers to know God, grow in character, and serve with purpose.",
      },
      {
        id: "church",
        title: "The Church and Its Mission",
        description:
          "We believe the church is a family of believers called to worship, make disciples, and carry God's love into the world.",
      },
    ],
  },
  leadership: {
    eyebrow: "Our Leadership",
    title: "Serving the church at every level.",
    wifePlaceholder: {
      title: "Global Leadership",
      description:
        "Additional profile details and an official portrait will be added when provided.",
    },
  },
  pastors: {
    eyebrow: "Branch Pastors",
    title: "Local leadership, close to every community.",
    description:
      "Our branch pastors lead and care for Gospel Pillars congregations across the United Kingdom.",
  },
  ministry: {
    eyebrow: "Ministry Arm",
    title: "Serving beyond the Sunday gathering.",
  },
  cta: {
    eyebrow: "You Are Welcome",
    title: "Find your place in the Gospel Pillars family.",
    description:
      "Discover a branch near you or send us a WhatsApp message and our UK team will help you plan your visit.",
    primaryCta: { label: "Explore Our Locations", href: "/locations" },
    secondaryCta: {
      label: "Plan Your Visit",
      href: planVisitWhatsAppUrl,
    },
  },
};
