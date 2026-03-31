import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/lib/navigation";
import { MarkdownContent } from "@/components/MarkdownContent";
import { getGuide, getGuideSlugs, pickLocalized } from "@/lib/content";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export function generateStaticParams() {
  const slugs = getGuideSlugs();
  const locales: Locale[] = ["en", "az"];
  const map = locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
  return map;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  const title = pickLocalized(locale, g.title);
  return {
    title,
    description: pickLocalized(locale, g.summary),
  };
}

export default async function GuideDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const g = getGuide(slug);
  const tc = await getTranslations("common");
  if (!g) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Link
        href="/guides"
        className="text-sm font-semibold text-logi-orange hover:underline"
      >
        ← {tc("backToGuides")}
      </Link>
      <h1 className="mt-8 font-[family-name:var(--font-display)] text-3xl font-bold text-logi-blue sm:text-4xl">
        {g.title[locale]}
      </h1>
      <p className="mt-4 text-lg text-muted">{g.summary[locale]}</p>
      <MarkdownContent markdown={g.bodyMarkdown[locale]} className="mt-8" />
    </article>
  );
}
