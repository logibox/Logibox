import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { GUIDES } from "@/data/generated-content";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: Locale }> };

export default async function GuidesIndexPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("guidesIndex");

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-logi-blue">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-2xl text-muted">{t("lead")}</p>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {GUIDES.map((g) => (
          <li key={g.slug}>
            <Link
              href={`/guides/${g.slug}`}
              className="block rounded-2xl border border-border bg-slate-50 p-5 transition hover:bg-white hover:shadow-md"
            >
              <h2 className="font-semibold text-foreground">{g.title[locale]}</h2>
              <p className="mt-2 text-sm text-muted">{g.summary[locale]}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
