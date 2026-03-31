import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/lib/navigation";
import { MarkdownContent } from "@/components/MarkdownContent";
import { JsonLd } from "@/components/JsonLd";
import { getBlogPost, getBlogSlugs, pickLocalized } from "@/lib/content";
import { siteUrl, siteName } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export function generateStaticParams() {
  const slugs = getBlogSlugs();
  const locales: Locale[] = ["en", "az"];
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const title = pickLocalized(locale, post.title);
  const description = pickLocalized(locale, post.excerpt);
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  const tc = await getTranslations("common");

  if (!post) notFound();

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: pickLocalized(locale, post.title),
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: siteName },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: { "@type": "ImageObject", url: `${siteUrl}/brand/logibox-logo.png` },
    },
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <JsonLd data={blogPosting} />
      <Link
        href="/blog"
        className="text-sm font-semibold text-logi-orange hover:underline"
      >
        ← {tc("backToBlog")}
      </Link>
      <p className="mt-6 text-sm text-muted">
        {tc("published")}: {post.publishedAt}
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-logi-blue sm:text-4xl">
        {post.title[locale]}
      </h1>
      <p className="mt-4 text-lg text-muted">{post.excerpt[locale]}</p>
      <MarkdownContent
        markdown={post.bodyMarkdown[locale]}
        className="mt-10"
      />
    </article>
  );
}
