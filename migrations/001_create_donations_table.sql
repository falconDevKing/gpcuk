CREATE TABLE donations (
  id                        UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name                TEXT NOT NULL,
  last_name                 TEXT NOT NULL,
  email                     TEXT NOT NULL,
  phone                     TEXT NOT NULL,
  amount                    INTEGER NOT NULL,
  currency                  TEXT NOT NULL DEFAULT 'GBP',
  description               TEXT,
  stripe_payment_intent_id  TEXT,
  stripe_customer_id        TEXT,
  stripe_subscription_id    TEXT,
  stripe_invoice_id         TEXT,
  stripe_status             TEXT NOT NULL DEFAULT 'pending',
  donation_type             TEXT NOT NULL DEFAULT 'one-time',
  created_at                TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at                TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE INDEX idx_donations_email ON donations (email);
CREATE INDEX idx_donations_stripe_pi ON donations (stripe_payment_intent_id);
CREATE INDEX idx_donations_stripe_sub ON donations (stripe_subscription_id);
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
