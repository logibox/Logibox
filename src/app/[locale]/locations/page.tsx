import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { LOCATIONS } from "@/data/generated-content";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: Locale }> };

export default async function LocationsIndexPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("locationsIndex");

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-logi-blue">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-2xl text-muted">{t("lead")}</p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LOCATIONS.map((lane) => (
          <li key={lane.slug}>
            <Link
              href={`/locations/${lane.slug}`}
              className="block h-full rounded-2xl border border-dashed border-logi-blue/40 bg-white p-5 transition hover:border-solid hover:border-logi-orange"
            >
              <h2 className="font-semibold text-logi-blue">{lane.name[locale]}</h2>
              <p className="mt-2 text-sm text-muted">{lane.summary[locale]}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
