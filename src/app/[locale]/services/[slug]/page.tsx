import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/lib/navigation";
import { MarkdownContent } from "@/components/MarkdownContent";
import {
  getService,
  getServiceSlugs,
  pickLocalized,
} from "@/lib/content";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export function generateStaticParams() {
  const slugs = getServiceSlugs();
  const locales: Locale[] = ["en", "az"];
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const title = pickLocalized(locale, s.title);
  return {
    title,
    description: pickLocalized(locale, s.summary),
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const s = getService(slug);
  const tc = await getTranslations("common");
  if (!s) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Link
        href="/services"
        className="text-sm font-semibold text-logi-orange hover:underline"
      >
        ← {tc("backToServices")}
      </Link>
      <h1 className="mt-8 font-[family-name:var(--font-display)] text-3xl font-bold text-logi-blue sm:text-4xl">
        {s.title[locale]}
      </h1>
      <p className="mt-4 text-lg text-muted">{s.summary[locale]}</p>
      <MarkdownContent markdown={s.bodyMarkdown[locale]} className="mt-8" />
    </article>
  );
}
