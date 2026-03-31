import type { Locale } from "@/i18n/routing";
import { LegalDocument } from "@/components/LegalDocument";

type Props = { params: Promise<{ locale: Locale }> };

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  return <LegalDocument pageId="terms" locale={locale} />;
}
