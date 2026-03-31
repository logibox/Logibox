import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations("contact");
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-logi-blue">
        {t("title")}
      </h1>
      <p className="mt-4 text-lg text-muted">{t("lead")}</p>
      <dl className="mt-10 grid gap-6 rounded-2xl border border-border bg-card p-6">
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-logi-orange">
            {t("email")}
          </dt>
          <dd className="mt-1 font-medium">{t("placeholderEmail")}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-logi-orange">
            {t("phone")}
          </dt>
          <dd className="mt-1 font-medium">{t("placeholderPhone")}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-logi-orange">
            {t("address")}
          </dt>
          <dd className="mt-1 font-medium">{t("placeholderAddress")}</dd>
        </div>
      </dl>
      <p className="mt-6 text-sm text-muted">{t("note")}</p>
    </article>
  );
}
