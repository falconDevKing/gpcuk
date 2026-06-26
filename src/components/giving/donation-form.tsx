"use client";

import { Controller, useWatch, type UseFormReturn } from "react-hook-form";
import type { DonationFormValues } from "@/lib/schemas/donation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioCardGroup } from "@/components/ui/radio-card-group";
import { supportedCurrencies } from "@/lib/currencies";

const DAY_OPTIONS = Array.from({ length: 28 }, (_, i) => i + 1);

const DONATION_TYPE_OPTIONS = [
  { value: "one-time", label: "One-time Donation" },
  { value: "monthly", label: "Monthly Donation" },
];

const FIRST_CHARGE_OPTIONS = [
  { value: "now", label: "Charge now" },
  { value: "next_preferred_day", label: "On next preferred day" },
];

export function DonationForm({
  form,
}: {
  form: UseFormReturn<DonationFormValues>;
}) {
  const {
    register,
    control,
    formState: { errors },
  } = form;

  const donationType = useWatch({ control, name: "donationType" });

  return (
    <div className="space-y-4">
      {/* Donation type radio */}
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-zinc-700">
          Donation type
        </legend>
        <Controller
          control={control}
          name="donationType"
          render={({ field }) => (
            <RadioCardGroup
              options={DONATION_TYPE_OPTIONS}
              value={field.value}
              onValueChange={field.onChange}
            />
          )}
        />
      </fieldset>

      {/* Name row */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="firstName">
            First name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="firstName"
            placeholder="John"
            {...register("firstName")}
            className="h-10"
          />
          {errors.firstName && (
            <p className="text-xs text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lastName">
            Last name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="lastName"
            placeholder="Doe"
            {...register("lastName")}
            className="h-10"
          />
          {errors.lastName && (
            <p className="text-xs text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email + Phone row */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            className="h-10"
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">
            Phone <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+44 7000 000000"
            {...register("phone")}
            className="h-10"
          />
          {errors.phone && (
            <p className="text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Currency + Amount row */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="currency">
            Currency <span className="text-red-500">*</span>
          </Label>
          <select
            id="currency"
            {...register("currency")}
            className="border-input focus-visible:border-ring focus-visible:ring-ring/50 h-10 w-full rounded-lg border bg-transparent px-2.5 text-sm transition-colors outline-none focus-visible:ring-3"
          >
            <option value="">Select currency</option>
            {supportedCurrencies.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
          {errors.currency && (
            <p className="text-xs text-red-500">{errors.currency.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="amount">
            Amount <span className="text-red-500">*</span>
          </Label>
          <Input
            id="amount"
            type="number"
            min={1}
            placeholder="50"
            {...register("amount", { valueAsNumber: true })}
            className="h-10"
          />
          {errors.amount && (
            <p className="text-xs text-red-500">{errors.amount.message}</p>
          )}
        </div>
      </div>

      {/* Monthly donation fields */}
      {donationType === "monthly" && (
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="space-y-1.5 sm:basis-1/2">
            <Label htmlFor="preferredDay">
              Preferred day of month <span className="text-red-500">*</span>
            </Label>
            <select
              id="preferredDay"
              {...register("preferredDay")}
              className="border-input focus-visible:border-ring focus-visible:ring-ring/50 h-10 w-full rounded-lg border bg-transparent px-2.5 text-sm transition-colors outline-none focus-visible:ring-3"
            >
              {DAY_OPTIONS.map((day) => (
                <option key={day} value={String(day)}>
                  {day}
                  {day === 1 || day === 21
                    ? "st"
                    : day === 2 || day === 22
                      ? "nd"
                      : day === 3 || day === 23
                        ? "rd"
                        : "th"}
                </option>
              ))}
            </select>
            {errors.preferredDay && (
              <p className="text-xs text-red-500">
                {errors.preferredDay.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5 sm:basis-1/2">
            <Label htmlFor="firstChargeDate">
              First charge <span className="text-red-500">*</span>
            </Label>
            <select
              id="firstChargeDate"
              {...register("firstChargeDate")}
              className="border-input focus-visible:border-ring focus-visible:ring-ring/50 h-10 w-full rounded-lg border bg-transparent px-2.5 text-sm transition-colors outline-none focus-visible:ring-3"
            >
              {FIRST_CHARGE_OPTIONS.map((chargeDate) => (
                <option key={chargeDate.value} value={chargeDate.value}>
                  {chargeDate.label}
                </option>
              ))}
            </select>
            {errors.preferredDay && (
              <p className="text-xs text-red-500">
                {errors.firstChargeDate?.message}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Description */}
      <div className="space-y-1.5">
        <Label htmlFor="description">Description (optional)</Label>
        <Input
          id="description"
          placeholder="Any note about your donation..."
          {...register("description")}
          className="h-10"
        />
      </div>
    </div>
  );
}
