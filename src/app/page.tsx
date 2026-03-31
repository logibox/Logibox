import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

/** `/` has no `[locale]` segment; send visitors to the default locale. */
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
