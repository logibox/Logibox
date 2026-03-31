import { Link } from "@/lib/navigation";

export default function LocaleNotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-logi-blue">
        404
      </h1>
      <p className="mt-3 text-muted">This page does not exist.</p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-logi-orange px-5 py-3 text-sm font-semibold text-white"
      >
        Home
      </Link>
    </div>
  );
}
