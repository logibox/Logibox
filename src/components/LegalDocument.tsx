import type { Locale } from "@/i18n/routing";
import {
  legalBodies,
  legalTitles,
  type LegalPageId,
} from "@/data/legal-content";
import { MarkdownContent } from "@/components/MarkdownContent";

type Props = {
  pageId: LegalPageId;
  locale: Locale;
};

export function LegalDocument({ pageId, locale }: Props) {
  const title = legalTitles[pageId][locale];
  const body = legalBodies[pageId][locale];

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-logi-blue">
        {title}
      </h1>
      <MarkdownContent markdown={body} className="mt-8" />
    </article>
  );
}
