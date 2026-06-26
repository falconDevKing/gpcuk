"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { giving } from "@/constants";
import { DonationModal } from "./donation-modal";

const variantStyles = {
  header: "border-amber-300 bg-white text-zinc-950",
  footer:
    "border-white/30 bg-white/10 text-white hover:bg-white hover:text-zinc-950",
  mobile: "w-full bg-amber-500 text-zinc-950",
} as const;

export function GivingButton({
  variant,
}: {
  variant: "header" | "footer" | "mobile";
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant === "mobile" ? "default" : "outline"}
        className={variantStyles[variant]}
        onClick={() => setOpen(true)}
      >
        {giving.label}
        {variant !== "mobile" && (
          <ArrowRight data-icon="inline-end" className="size-4" />
        )}
      </Button>
      <DonationModal open={open} onOpenChange={setOpen} />
    </>
  );
}
