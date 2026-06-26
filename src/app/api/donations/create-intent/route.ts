import { NextResponse } from "next/server";
import Stripe from "stripe";
import { toSmallestUnit } from "@/lib/currencies";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      donationType,
      firstName,
      lastName,
      email,
      phone,
      currency,
      amount,
      description,
    } = body;

    if (!firstName || !lastName || !email || !currency || !amount) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const donorName = `${firstName} ${lastName}`;
    const amountInSmallestUnit = toSmallestUnit(+amount, currency);

    if (donationType === "recurring") {
      // Find or create Stripe customer by email
      let customer: Stripe.Customer;
      const existing = await stripe.customers.list({
        email,
        limit: 1,
      });

      if (existing.data.length > 0) {
        customer = existing.data[0];
      } else {
        customer = await stripe.customers.create({
          name: donorName,
          email,
          phone,
          metadata: { platform: "gpc-uk" },
        });
      }

      const setupIntent = await stripe.setupIntents.create({
        customer: customer.id,
        payment_method_types: ["card"],
        description: `${donorName} recurring donation setup`,
        metadata: { platform: "gpc-uk" },
      });

      return NextResponse.json({
        clientSecret: setupIntent.client_secret,
        customerId: customer.id,
      });
    }

    // One-time donation
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInSmallestUnit,
      currency: currency.toLowerCase(),
      description:
        description || `One-time donation from ${donorName}`,
      receipt_email: email,
      payment_method_types: ["card"],
      payment_method_options: {
        card: { request_three_d_secure: "any" },
      },
      metadata: {
        platform: "gpc-uk",
        donor_name: donorName,
        donor_email: email,
        donor_phone: phone,
        user_description: description || "",
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to create payment intent";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
