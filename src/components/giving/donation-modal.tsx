"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useStripe,
  useElements,
  AddressElement,
} from "@stripe/react-stripe-js";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  donationFormSchema,
  type DonationFormValues,
} from "@/lib/schemas/donation";
import { StripeProvider } from "./stripe-provider";
import { DonationForm } from "./donation-form";
import { StripeCheckout } from "./stripe-checkout";

function DonationModalInner({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      donationType: "one-time",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      currency: "GBP",
      amount: 0,
      description: "",
      preferredDay: String(Math.min(28, new Date().getDate())),
      firstChargeDate: "now",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const resetAll = () => {
    form.reset();
    setIsCheckout(false);
    setLoading(false);
    setFeedback("");
  };

  const handleClose = (nextOpen: boolean) => {
    if (!nextOpen) resetAll();
    onOpenChange(nextOpen);
  };

  const handleOneTimePayment = async (values: DonationFormValues) => {
    if (!stripe || !elements) {
      setFeedback("Payment processor not ready. Please try again.");
      return;
    }

    setFeedback("Creating payment... 1 of 3");

    // Create payment intent
    const intentRes = await fetch("/api/donations/create-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, donationType: "one-time" }),
    });
    const intentData = await intentRes.json();

    if (!intentRes.ok || !intentData.clientSecret) {
      setFeedback(intentData.error || "Failed to start payment");
      setLoading(false);
      return;
    }

    setFeedback("Processing payment... 2 of 3");

    const addressElement = elements.getElement(AddressElement);
    const addressDetails = addressElement
      ? await addressElement.getValue()
      : null;

    const billingDetails = {
      name:
        addressDetails?.value.name || `${values.firstName} ${values.lastName}`,
      email: values.email,
      phone: addressDetails?.value.phone || values.phone,
      address: addressDetails?.value.address || undefined,
    };

    const { error: stripeError } = await stripe.confirmCardPayment(
      intentData.clientSecret,
      {
        payment_method: {
          card: elements.getElement("card")!,
          billing_details: billingDetails,
        },
      },
    );

    if (stripeError) {
      setFeedback(stripeError.message || "Payment failed");
      setLoading(false);
      return;
    }

    setFeedback("Saving record... 3 of 3");

    // Confirm and record in DB
    await fetch("/api/donations/confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        paymentIntentId: intentData.paymentIntentId,
        ...values,
      }),
    });

    setFeedback("");
    resetAll();
    onOpenChange(false);
  };

  const handleRecurringPayment = async (values: DonationFormValues) => {
    if (!stripe || !elements) {
      setFeedback("Payment processor not ready. Please try again.");
      return;
    }

    setFeedback("Setting up recurring donation... 1 of 4");

    // Create setup intent + customer
    const intentRes = await fetch("/api/donations/create-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, donationType: "recurring" }),
    });
    const intentData = await intentRes.json();

    if (!intentRes.ok || !intentData.clientSecret) {
      setFeedback(intentData.error || "Failed to start setup");
      setLoading(false);
      return;
    }

    setFeedback("Confirming card... 2 of 4");

    const addressElement = elements.getElement(AddressElement);
    const addressDetails = addressElement
      ? await addressElement.getValue()
      : null;

    const billingDetails = {
      name:
        addressDetails?.value.name || `${values.firstName} ${values.lastName}`,
      email: values.email,
      phone: addressDetails?.value.phone || values.phone,
      address: addressDetails?.value.address || undefined,
    };

    const { setupIntent, error: stripeError } = await stripe.confirmCardSetup(
      intentData.clientSecret,
      {
        payment_method: {
          card: elements.getElement("card")!,
          billing_details: billingDetails,
        },
      },
    );

    if (stripeError) {
      setFeedback(stripeError.message || "Card setup failed");
      setLoading(false);
      return;
    }

    setFeedback("Creating subscription... 3 of 4");

    // Create subscription
    const subRes = await fetch("/api/donations/create-subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerId: intentData.customerId,
        paymentMethodId: setupIntent!.payment_method,
        ...values,
      }),
    });
    const subData = await subRes.json();

    if (!subRes.ok) {
      setFeedback(subData.error || "Subscription creation failed");
      setLoading(false);
      return;
    }

    setFeedback("Done! 4 of 4");

    resetAll();
    onOpenChange(false);
  };

  const onSubmit = async (values: DonationFormValues) => {
    if (!isCheckout) {
      if (values.donationType === "monthly" && !values.preferredDay) {
        form.setError("preferredDay", {
          message: "Please select a preferred day",
        });
        return;
      }
      setIsCheckout(true);
      return;
    }

    setLoading(true);
    try {
      if (values.donationType === "monthly") {
        await handleRecurringPayment(values);
      } else {
        await handleOneTimePayment(values);
      }
    } catch {
      setFeedback("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-zinc-900">
            Make a Donation
          </DialogTitle>
          <DialogDescription>
            Support the work of Gospel Pillars Church UK. All payments are
            securely processed by Stripe.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {!isCheckout ? <DonationForm form={form} /> : <StripeCheckout />}

          {feedback && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-2.5 text-center text-sm text-zinc-700">
              {feedback}
            </div>
          )}

          <DialogFooter className="gap-2 sm:gap-3">
            {isCheckout ? (
              <Button
                type="button"
                variant="outline"
                disabled={loading}
                onClick={() => setIsCheckout(false)}
                className="w-full sm:w-auto"
              >
                Back
              </Button>
            ) : (
              <Button
                type="button"
                variant="outline"
                onClick={() => handleClose(false)}
                className="w-full sm:w-auto"
              >
                Cancel
              </Button>
            )}
            <Button
              type="submit"
              disabled={loading || !form.formState.isValid}
              className="w-full bg-amber-500 text-zinc-950 hover:bg-amber-600 sm:w-auto"
            >
              {loading
                ? "Processing..."
                : isCheckout
                  ? "Donate"
                  : "Go to Payment"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function DonationModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <StripeProvider>
      <DonationModalInner open={open} onOpenChange={onOpenChange} />
    </StripeProvider>
  );
}
