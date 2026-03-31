import { defineRouting } from "next-intl/routing";

/** Keep `locales`, `defaultLocale`, and `localePrefix` in sync with `middleware.ts` in the project root. */
export const routing = defineRouting({
  locales: ["en", "az"],
  defaultLocale: "en",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
