import { defineRouting } from "next-intl/routing";

/** Shared by `middleware.ts`, `[locale]` routes, and `src/lib/navigation.ts`. */
export const routing = defineRouting({
  locales: ["en", "az"],
  defaultLocale: "en",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
