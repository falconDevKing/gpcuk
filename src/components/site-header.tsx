import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GivingButton } from "@/components/giving/giving-button";
import {
  churchIdentity,
  giving,
  navigation,
  planVisitWhatsAppUrl,
} from "@/constants";

export function SiteHeader() {
  const primaryNavigation = navigation.filter((item) => item.href !== "/");

  return (
    <header className="sticky top-0 z-50 border-b border-amber-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex size-12 items-center justify-center overflow-hidden rounded-3xl border border-amber-300 bg-white">
            <Image
              src={churchIdentity.logo.src}
              alt={churchIdentity.logo.alt}
              fill
              sizes="48px"
              className="object-contain p-1"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="font-display block text-xl font-semibold">
              Gospel Pillars Church
            </span>
            <span className="text-sm text-zinc-600">United Kingdom</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-zinc-700 md:flex">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-amber-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {giving.enabled ? (
            <GivingButton variant="header" />
          ) : (
            <Button variant="outline" disabled>
              {giving.unavailableLabel}
            </Button>
          )}
          <Button asChild className="bg-amber-500 text-zinc-950">
            <a href={planVisitWhatsAppUrl} target="_blank" rel="noreferrer">
              Plan Your Visit
              <CalendarDays data-icon="inline-end" className="size-4" />
            </a>
          </Button>
        </div>

        <details className="relative md:hidden">
          <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-950">
            <Menu className="size-5" aria-hidden="true" />
            <span className="sr-only">Open navigation</span>
          </summary>
          <div className="absolute top-12 right-0 w-64 rounded-lg border border-zinc-200 bg-white p-3 shadow-xl">
            <nav className="grid gap-1">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 font-semibold text-zinc-700 hover:bg-amber-50 hover:text-zinc-950"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {giving.enabled && (
              <div className="mt-3">
                <GivingButton variant="mobile" />
              </div>
            )}
            <Button asChild className="mt-2 w-full bg-amber-500 text-zinc-950">
              <a href={planVisitWhatsAppUrl} target="_blank" rel="noreferrer">
                Plan Your Visit
              </a>
            </Button>
          </div>
        </details>
      </div>
    </header>
  );
}
