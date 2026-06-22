import type { Branch, ServiceTime } from "./types";

export const nationwideServiceTimes: ServiceTime[] = [
  {
    id: "sunday-service",
    name: "Sunday Service",
    day: "Sunday",
    startTime: "10:00",
    endTime: "",
    frequency: "Weekly",
    description:
      "A weekly gathering for worship, prayer, the Word, and fellowship.",
    notes: "",
  },
  {
    id: "midweek-service",
    name: "Midweek Service",
    day: "",
    startTime: "19:00",
    endTime: "",
    frequency: "Weekly",
    description:
      "A focused midweek time for teaching, prayer, and spiritual refreshing.",
    notes: "",
  },
];

export function getBranchServiceTimes(branch: Branch): ServiceTime[] {
  return branch.serviceTimes.length
    ? branch.serviceTimes
    : nationwideServiceTimes;
}

export function usesNationwideServiceTimes(branch: Branch): boolean {
  return branch.serviceTimes.length === 0;
}

export function formatServiceTime(time: string): string {
  const [hourText, minute = "00"] = time.split(":");
  const hour = Number(hourText);

  if (!time || Number.isNaN(hour)) return time;

  const suffix = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minute} ${suffix}`;
}
