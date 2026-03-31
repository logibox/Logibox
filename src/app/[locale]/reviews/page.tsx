import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { TestimonialGrid } from "@/components/TestimonialGrid";

export default async function ReviewsPage() {
  const t = await getTranslations("home");
  const tp = await getTranslations("reviewsPage");

  return (
    <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-logi-blue">
        {tp("title")}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{tp("lead")}</p>
      <TestimonialGrid
        quotes={[
          { text: t("review1"), author: t("review1a") },
          { text: t("review2"), author: t("review2a") },
          { text: t("review3"), author: t("review3a") },
          { text: t("review1"), author: t("review1a") },
          { text: t("review2"), author: t("review2a") },
          { text: t("review3"), author: t("review3a") },
        ]}
      />
      <p className="mt-10 text-sm">
        <Link
          href="/review-policy"
          className="font-semibold text-logi-orange underline"
        >
          {tp("policyLink")}
        </Link>
      </p>
    </article>
  );
}
