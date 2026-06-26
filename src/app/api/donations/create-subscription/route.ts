import { NextResponse } from "next/server";
import Stripe from "stripe";
import { toSmallestUnit } from "@/lib/currencies";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

function getNextOccurrence(dayOfMonth: number): number {
  const now = new Date();
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), dayOfMonth);
  if (thisMonth > now) {
    return Math.floor(thisMonth.getTime() / 1000);
  }
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, dayOfMonth);
  return Math.floor(nextMonth.getTime() / 1000);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      customerId,
      paymentMethodId,
      amount,
      currency,
      preferredDay,
      firstName,
      lastName,
      description,
      firstChargeDate,
    } = body;

    if (!customerId || !paymentMethodId || !amount || !currency) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const donorName = `${firstName} ${lastName}`;
    const amountInSmallestUnit = toSmallestUnit(+amount, currency);
    const dayOfMonth = Math.min(Math.max(+(preferredDay || 1), 1), 28);
    const chargeNow = firstChargeDate !== "next_preferred_day";

    // Attach payment method to customer and set as default
    await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customerId,
    });
    await stripe.customers.update(customerId, {
      invoice_settings: { default_payment_method: paymentMethodId },
    });

    // Create a recurring price
    const price = await stripe.prices.create({
      unit_amount: amountInSmallestUnit,
      currency: currency.toLowerCase(),
      recurring: { interval: "month" },
      product_data: {
        name: description || `Monthly donation from ${donorName}`,
      },
    });

    // trial_end determines when the first automated charge occurs
    const trialEnd = chargeNow
      ? Math.floor(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            dayOfMonth,
            6,
          ).getTime() / 1000,
        )
      : getNextOccurrence(dayOfMonth);

    // Create subscription
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      description:
        "GPC UK " + (description || `Monthly donation from ${donorName}`),
      items: [{ price: price.id }],
      default_payment_method: paymentMethodId,
      collection_method: "charge_automatically",
      billing_cycle_anchor_config: { day_of_month: dayOfMonth },
      expand: ["latest_invoice.payment_intent"],
      proration_behavior: "none",
      trial_end: trialEnd,
    } as Stripe.SubscriptionCreateParams);

    // If charging now, create and pay first invoice immediately
    let invoiceId: string | null = null;
    if (chargeNow) {
      const invoice = await stripe.invoices.create({
        customer: customerId,
        collection_method: "charge_automatically",
        auto_advance: false,
      });

      await stripe.invoiceItems.create({
        customer: customerId,
        invoice: invoice.id,
        subscription: subscription.id,
        amount: amountInSmallestUnit,
        currency: currency.toLowerCase(),
        description: "First donation payment",
      });

      const finalised = await stripe.invoices.finalizeInvoice(invoice.id);
      const paidInvoice = await stripe.invoices.pay(finalised.id);
      invoiceId = paidInvoice.id;
    }

    return NextResponse.json({
      subscriptionId: subscription.id,
      invoiceId,
    });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to create subscription";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
