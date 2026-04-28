import { NavLinks } from "@/components/layout/nav-links";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-subtle)] bg-[var(--header-bg)] shadow-[var(--header-shadow)] backdrop-blur-md">
      <div className="relative flex h-16 w-full items-center justify-center px-6 sm:px-10 lg:px-16">
        <div className="absolute left-6 sm:left-10 lg:left-16">
          <ThemeToggle />
        </div>

        <NavLinks />
      </div>
    </header>
  );
}