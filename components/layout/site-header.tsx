import { NavLinks } from "@/components/layout/nav-links";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { mainNavigation } from "@/lib/navigation";

const mobileTopNavigation = mainNavigation.filter((item) =>
  ["/", "/about", "/contact"].includes(item.href)
);
const mobileBottomNavigation = mainNavigation.filter((item) =>
  ["/design", "/development"].includes(item.href)
);

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-subtle)] bg-[var(--header-bg)] shadow-[var(--header-shadow)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-1.5 px-3 py-2 sm:hidden">
        <div className="flex w-full min-w-0 items-center justify-center gap-2 min-[360px]:gap-2.5">
          <div className="shrink-0">
            <ThemeToggle compact />
          </div>

          <NavLinks items={mobileTopNavigation} variant="mobileTop" />
        </div>

        <NavLinks items={mobileBottomNavigation} variant="mobileBottom" />
      </div>

      <div className="mx-auto hidden min-h-16 w-full max-w-[80rem] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 px-6 sm:grid sm:px-10 lg:gap-6 lg:px-16">
        <div className="shrink-0">
          <ThemeToggle />
        </div>

        <NavLinks variant="desktop" />

        <div aria-hidden="true" className="h-7 w-12 shrink-0" />
      </div>
    </header>
  );
}
