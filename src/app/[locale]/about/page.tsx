import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("about");
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-logi-blue">
        {t("title")}
      </h1>
      <p className="mt-6 text-lg text-muted">{t("lead")}</p>
      <p className="mt-6 text-foreground/90 leading-relaxed">{t("p1")}</p>
      <p className="mt-4 text-foreground/90 leading-relaxed">{t("p2")}</p>
    </article>
  );
}
