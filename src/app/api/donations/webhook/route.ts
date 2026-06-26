import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createSupabaseServerClient } from "@/lib/supabase";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

interface InvoiceData {
  id: string;
  subscription?: string | { id: string } | null;
  customer?: string | { id: string } | null;
  payment_intent?: string | { id: string } | null;
  amount_paid: number;
  currency: string;
  description?: string | null;
}

function resolveId(field: string | { id: string } | null | undefined): string {
  if (!field) return "";
  return typeof field === "string" ? field : field.id;
}

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 },
    );
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch {
    return NextResponse.json(
      { error: "Invalid webhook signature" },
      { status: 400 },
    );
  }

  const supabase = createSupabaseServerClient();

  switch (event.type) {
    case "invoice.payment_succeeded": {
      const invoice = event.data.object as unknown as InvoiceData;

      if (!invoice.subscription) break;

      const subscriptionId = resolveId(invoice.subscription);
      const customerId = resolveId(invoice.customer);

      let customerName = "";
      let customerEmail = "";
      let customerPhone = "";
      if (customerId) {
        const customer = await stripe.customers.retrieve(customerId);
        if (!customer.deleted) {
          customerName = customer.name || "";
          customerEmail = customer.email || "";
          customerPhone = customer.phone || "";
        }
      }

      const nameParts = customerName.split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";
      const paymentIntentId = resolveId(invoice.payment_intent) || null;

      await supabase.from("donations").insert({
        first_name: firstName,
        last_name: lastName,
        email: customerEmail,
        phone: customerPhone,
        amount: invoice.amount_paid,
        currency: (invoice.currency || "gbp").toUpperCase(),
        description: invoice.description || "Recurring donation",
        stripe_payment_intent_id: paymentIntentId,
        stripe_customer_id: customerId,
        stripe_subscription_id: subscriptionId,
        stripe_invoice_id: invoice.id,
        stripe_status: "succeeded",
        donation_type: "recurring",
      });
      break;
    }
  }

  return NextResponse.json({ received: true });
}
