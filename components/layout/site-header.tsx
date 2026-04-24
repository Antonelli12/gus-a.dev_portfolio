import { NavLinks } from "@/components/layout/nav-links";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0D0C10]/80 shadow-[0_10px_32px_rgba(114,156,174,0.16)] backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[auto_1fr_auto] items-center px-6 sm:px-10 lg:px-16">
        <div className="flex justify-start">
          <ThemeToggle />
        </div>

        <div className="flex justify-center">
          <NavLinks />
        </div>

        <div aria-hidden="true" className="h-5 w-9" />
      </div>
    </header>
  );
}