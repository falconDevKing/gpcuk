"use client";

import { CreditCard, LockKeyhole, MapPinHouse } from "lucide-react";
import { AddressElement, CardElement } from "@stripe/react-stripe-js";
import type { StripeCardElementOptions, StripeAddressElementOptions } from "@stripe/stripe-js";

const cardElementOptions: StripeCardElementOptions = {
  style: {
    base: {
      fontSize: "16px",
      color: "#1e293b",
      "::placeholder": { color: "#94a3b8" },
    },
    invalid: { color: "#ef4444" },
  },
};

const addressElementOptions: StripeAddressElementOptions = {
  mode: "billing",
  fields: { phone: "always" },
  display: { name: "split" },
};

export function StripeCheckout() {
  return (
    <section className="rounded-2xl border border-amber-200 bg-gradient-to-b from-amber-50/50 to-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-700">
            <LockKeyhole className="size-3.5" />
            Secure checkout
          </div>
          <h3 className="text-lg font-semibold text-zinc-900">
            Payment method
          </h3>
          <p className="max-w-xl text-sm leading-5 text-zinc-500">
            Your card details are encrypted by Stripe. Your billing address is
            collected in full.
          </p>
        </div>
        <div className="hidden rounded-full border border-amber-200 bg-white/80 p-3 text-zinc-800 shadow-sm sm:block">
          <CreditCard className="size-5" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-zinc-700">
            <CreditCard className="size-4 text-amber-600" />
            Card details
          </div>
          <CardElement id="card" options={cardElementOptions} />
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-zinc-700">
            <MapPinHouse className="size-4 text-amber-600" />
            Billing address
          </div>
          <AddressElement options={addressElementOptions} />
        </div>
      </div>
    </section>
  );
}
