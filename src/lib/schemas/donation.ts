import { z } from "zod";

export const donationFormSchema = z.object({
  donationType: z.enum(["one-time", "monthly"]),
  firstName: z.string().min(1, "First name is required").max(120),
  lastName: z.string().min(1, "Last name is required").max(120),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(5, "Phone number is required").max(40),
  currency: z.string().min(1, "Please select a currency"),
  amount: z.number().min(1, "Minimum donation is 1").max(999999999),
  description: z.string().max(500),
  preferredDay: z.string(),
  firstChargeDate: z.enum(["now", "next_preferred_day"]),
});

export type DonationFormValues = z.infer<typeof donationFormSchema>;
