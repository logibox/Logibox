import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/lib/navigation";
import { MarkdownContent } from "@/components/MarkdownContent";
import {
  getLocation,
  getLocationSlugs,
  pickLocalized,
} from "@/lib/content";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export function generateStaticParams() {
  const slugs = getLocationSlugs();
  const locales: Locale[] = ["en", "az"];
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const lane = getLocation(slug);
  if (!lane) return {};
  const title = pickLocalized(locale, lane.name);
  return {
    title,
    description: pickLocalized(locale, lane.summary),
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const lane = getLocation(slug);
  const tc = await getTranslations("common");
  if (!lane) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Link
        href="/locations"
        className="text-sm font-semibold text-logi-orange hover:underline"
      >
        ← {tc("backToLanes")}
      </Link>
      <h1 className="mt-8 font-[family-name:var(--font-display)] text-3xl font-bold text-logi-blue sm:text-4xl">
        {lane.name[locale]}
      </h1>
      <p className="mt-4 text-lg text-muted">{lane.summary[locale]}</p>
      <MarkdownContent markdown={lane.bodyMarkdown[locale]} className="mt-8" />
    </article>
  );
}
