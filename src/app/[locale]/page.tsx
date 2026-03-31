import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { CubeHero } from "@/components/CubeHero";
import { MotionList, MotionListItem } from "@/components/MotionList";
import { TestimonialGrid } from "@/components/TestimonialGrid";
import { SERVICES } from "@/data/generated-content";
import { LOCATIONS } from "@/data/generated-content";
import { GUIDES } from "@/data/generated-content";
import { BLOG_POSTS } from "@/data/generated-content";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: Locale }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("home");

  const servicePreview = SERVICES.slice(0, 3);
  const lanePreview = LOCATIONS.slice(0, 4);
  const guidePreview = GUIDES.slice(0, 3);
  const blogPreview = BLOG_POSTS.slice(0, 4);

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-white to-slate-50">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(90deg,#0056b3_1px,transparent_1px),linear-gradient(#0056b3_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-logi-orange">
              LogiBox
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-logi-blue sm:text-5xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">{t("heroLead")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-logi-orange px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:brightness-110"
              >
                {t("ctaPrimary")}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border-2 border-logi-blue bg-white px-5 py-3 text-sm font-semibold text-logi-blue transition hover:bg-slate-50"
              >
                {t("ctaSecondary")}
              </Link>
            </div>
          </div>
          <CubeHero />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-wider text-logi-orange">
          {t("statsCap")}
        </p>
        <MotionList className="mt-6 grid gap-6 sm:grid-cols-3">
          <MotionListItem className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-logi-blue">
              {t("stat1v")}
            </p>
            <p className="mt-2 text-sm text-muted">{t("stat1l")}</p>
          </MotionListItem>
          <MotionListItem className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-logi-blue">
              {t("stat2v")}
            </p>
            <p className="mt-2 text-sm text-muted">{t("stat2l")}</p>
          </MotionListItem>
          <MotionListItem className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-logi-blue">
              {t("stat3v")}
            </p>
            <p className="mt-2 text-sm text-muted">{t("stat3l")}</p>
          </MotionListItem>
        </MotionList>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-wider text-logi-orange">
            {t("servicesCap")}
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-logi-blue">
            {t("servicesTitle")}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{t("servicesLead")}</p>
          <MotionList className="mt-8 grid gap-5 md:grid-cols-3">
            {servicePreview.map((s) => (
              <MotionListItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="block h-full rounded-2xl border border-border bg-slate-50/80 p-5 transition hover:border-logi-orange hover:shadow-md"
                >
                  <h3 className="font-semibold text-foreground">
                    {s.title[locale]}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{s.summary[locale]}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-logi-orange">
                    →
                  </span>
                </Link>
              </MotionListItem>
            ))}
          </MotionList>
          <Link
            href="/services"
            className="mt-8 inline-block text-sm font-semibold text-logi-blue underline"
          >
            {t("allServices")}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-wider text-logi-orange">
          {t("lanesCap")}
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-logi-blue">
          {t("lanesTitle")}
        </h2>
        <p className="mt-3 max-w-2xl text-muted">{t("lanesLead")}</p>
        <MotionList className="mt-8 grid gap-4 sm:grid-cols-2">
          {lanePreview.map((lane) => (
            <MotionListItem key={lane.slug}>
              <Link
                href={`/locations/${lane.slug}`}
                className="flex flex-col rounded-xl border border-dashed border-logi-blue/30 bg-white p-4 transition hover:border-solid hover:border-logi-orange"
              >
                <span className="font-semibold text-logi-blue">
                  {lane.name[locale]}
                </span>
                <span className="text-sm text-muted">{lane.summary[locale]}</span>
              </Link>
            </MotionListItem>
          ))}
        </MotionList>
        <Link
          href="/locations"
          className="mt-6 inline-block text-sm font-semibold text-logi-blue underline"
        >
          {t("allLanes")}
        </Link>
      </section>

      <section className="border-y border-border bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-wider text-logi-orange">
            {t("guidesCap")}
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-logi-blue">
            {t("guidesTitle")}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{t("guidesLead")}</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {guidePreview.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="block rounded-2xl bg-white p-5 shadow-sm ring-1 ring-border transition hover:ring-logi-orange"
                >
                  <h3 className="font-semibold">{g.title[locale]}</h3>
                  <p className="mt-2 text-sm text-muted">{g.summary[locale]}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/guides"
            className="mt-6 inline-block text-sm font-semibold text-logi-blue underline"
          >
            {t("allGuides")}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-wider text-logi-orange">
          {t("blogCap")}
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-logi-blue">
          {t("blogTitle")}
        </h2>
        <p className="mt-3 max-w-2xl text-muted">{t("blogLead")}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {blogPreview.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border border-border bg-card p-5 transition hover:border-logi-blue"
            >
              <p className="text-xs text-muted">{post.publishedAt}</p>
              <h3 className="mt-2 font-semibold text-logi-blue">
                {post.title[locale]}
              </h3>
              <p className="mt-2 text-sm text-muted">{post.excerpt[locale]}</p>
            </Link>
          ))}
        </div>
        <Link
          href="/blog"
          className="mt-6 inline-block text-sm font-semibold text-logi-blue underline"
        >
          {t("allPosts")}
        </Link>
      </section>

      <section className="border-t border-border bg-logi-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-wider text-logi-orange">
            {t("reviewsCap")}
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold">
            {t("reviewsTitle")}
          </h2>
          <TestimonialGrid
            quotes={[
              { text: t("review1"), author: t("review1a") },
              { text: t("review2"), author: t("review2a") },
              { text: t("review3"), author: t("review3a") },
            ]}
          />
          <Link
            href="/reviews"
            className="mt-8 inline-block text-sm font-semibold text-white underline decoration-logi-orange"
          >
            {t("reviewsPageLink")}
          </Link>
        </div>
      </section>
    </main>
  );
}
