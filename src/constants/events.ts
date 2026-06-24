import type { EventData, ImageData } from "./types";

export const events: EventData[] = [];

export type UpcomingEvent = {
  id: string;
  title: string;
  image: ImageData;
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "special-volunteer-meeting",
    title: "Special Volunteers Meeting",
    image: {
      src: "/assets/special-volunteer-meeting.jpeg",
      alt: "Special Volunteers Meeting — Mon 7th Sept 2026, 6PM at Gospel Pillars Lewisham",
    },
  },
  {
    id: "special-volunteer-meeting",
    title: "Special Volunteers Meeting",
    image: {
      src: "/assets/special-volunteer-meeting.jpeg",
      alt: "Special Volunteers Meeting — Mon 7th Sept 2026, 6PM at Gospel Pillars Lewisham",
    },
  },
];
