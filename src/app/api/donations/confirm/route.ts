import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createSupabaseServerClient } from "@/lib/supabase";
import { toSmallestUnit } from "@/lib/currencies";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      paymentIntentId,
      firstName,
      lastName,
      email,
      phone,
      currency,
      amount,
      description,
    } = body;

    if (!paymentIntentId) {
      return NextResponse.json(
        { error: "Missing payment intent ID" },
        { status: 400 },
      );
    }

    // Verify with Stripe that the payment actually succeeded
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== "succeeded") {
      return NextResponse.json(
        { error: `Payment not completed. Status: ${paymentIntent.status}` },
        { status: 400 },
      );
    }

    const amountInSmallestUnit = toSmallestUnit(+amount, currency);

    // Insert donation record into Supabase
    const supabase = createSupabaseServerClient();
    const { error: insertError } = await supabase.from("donations").insert({
      first_name: firstName,
      last_name: lastName,
      email,
      phone: phone || "",
      amount: amountInSmallestUnit,
      currency: currency.toUpperCase(),
      description: description || "",
      stripe_payment_intent_id: paymentIntentId,
      stripe_status: "succeeded",
      donation_type: "one-time",
    });

    if (insertError) {
      console.error("Supabase insert error:", insertError);
      return NextResponse.json(
        { error: "Payment succeeded but failed to save record" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to confirm donation";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
