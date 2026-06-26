"use client";

import type { ReactNode } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/lib/stripe";

export function StripeProvider({ children }: { children: ReactNode }) {
  return (
    <Elements stripe={stripePromise} options={{ locale: "en" }}>
      {children}
    </Elements>
  );
}
