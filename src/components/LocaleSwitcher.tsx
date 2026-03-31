"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/navigation";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

const labels: Record<Locale, string> = { en: "EN", az: "AZ" };

export function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (next: Locale) => {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  };

  return (
    <div
      className="flex rounded-lg border border-border bg-card p-0.5 text-sm font-medium shadow-sm"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLocale(loc)}
          className={`rounded-md px-2.5 py-1 transition-colors ${
            locale === loc
              ? "bg-logi-blue text-white"
              : "text-foreground hover:bg-slate-100"
          }`}
        >
          {labels[loc]}
        </button>
      ))}
    </div>
  );
}
