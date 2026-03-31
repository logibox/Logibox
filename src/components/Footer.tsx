import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";

export async function Footer() {
  const t = await getTranslations("footer");

  const legal = [
    { href: "/privacy" as const, label: t("privacy") },
    { href: "/terms" as const, label: t("terms") },
    { href: "/cookies" as const, label: t("cookies") },
    { href: "/review-policy" as const, label: t("reviewPolicy") },
    { href: "/accessibility" as const, label: t("accessibility") },
  ];

  return (
    <footer className="mt-auto border-t border-border bg-logi-blue text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-bold">
            LogiBox
          </p>
          <p className="mt-2 max-w-sm text-sm text-white/80">
            © {new Date().getFullYear()} LogiBox. {t("rights")}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
            {t("legal")}
          </p>
          <ul className="mt-3 grid gap-2 text-sm">
            {legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/90 underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
