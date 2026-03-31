import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";

export async function Header() {
  const t = await getTranslations("nav");
  const tb = await getTranslations("brand");

  const links: { href: string; label: string }[] = [
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/locations", label: t("locations") },
    { href: "/guides", label: t("guides") },
    { href: "/blog", label: t("blog") },
    { href: "/reviews", label: t("reviews") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <Image
            src="/brand/logibox-logo.png"
            alt="LogiBox"
            width={400}
            height={100}
            className="h-14 w-auto max-w-[min(400px,78vw)] sm:h-16 sm:max-w-[min(440px,72vw)] lg:h-[4.5rem] lg:max-w-[min(480px,42vw)] shrink-0 object-contain object-left"
            priority
            sizes="(max-width: 640px) 78vw, (max-width: 1024px) 400px, 480px"
          />
          <span className="hidden text-xs font-medium text-muted sm:inline truncate max-w-[12rem] lg:max-w-none">
            {tb("tagline")}
          </span>
        </Link>
        <nav
          className="hidden lg:flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-sm font-medium text-foreground"
          aria-label="Main"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-foreground/90 hover:text-logi-orange transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 shrink-0">
          <LocaleSwitcher />
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-lg border border-border bg-background px-3 py-2 text-sm font-semibold">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-52 rounded-xl border border-border bg-card p-2 shadow-lg">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-md px-3 py-2 text-sm hover:bg-slate-50"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
