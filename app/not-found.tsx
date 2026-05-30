import Link from "next/link";
import { headingFont, highlightFont } from "@/app/fonts";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-28 text-center text-theme">
      <section className="ui-card max-w-2xl rounded-2xl p-8 sm:p-12">
        <p
          className={`${highlightFont.className} text-[clamp(3.4rem,18vw,6.75rem)] leading-none text-theme-accent`}
        >
          404
        </p>

        <h1
          className={`${headingFont.className} mt-5 text-[clamp(1.75rem,8vw,3.25rem)] leading-none`}
        >
          Page not found.
        </h1>

        <p className="mx-auto mt-6 max-w-md text-base leading-8 text-theme-muted">
          This route does not seem to exist. Head back home and pick up the main
          path again.
        </p>

        <Link
          className="ui-button mt-8 inline-flex rounded-full px-6 py-3 text-sm transition"
          href="/"
        >
          Return home
        </Link>
      </section>
    </main>
  );
}
