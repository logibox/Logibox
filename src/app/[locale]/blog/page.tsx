import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { BLOG_POSTS } from "@/data/generated-content";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: Locale }> };

export default async function BlogIndexPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("blogIndex");

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-logi-blue">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-2xl text-muted">{t("lead")}</p>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block rounded-2xl border border-border bg-card p-5 transition hover:border-logi-orange"
            >
              <time
                dateTime={post.publishedAt}
                className="text-xs text-muted"
              >
                {post.publishedAt}
              </time>
              <h2 className="mt-2 font-semibold text-logi-blue">
                {post.title[locale]}
              </h2>
              <p className="mt-2 text-sm text-muted">{post.excerpt[locale]}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
