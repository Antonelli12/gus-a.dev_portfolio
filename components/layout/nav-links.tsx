"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headingFont } from "@/app/fonts";
import { mainNavigation } from "@/lib/navigation";

type NavigationItem = (typeof mainNavigation)[number];

type NavLinksVariant = "desktop" | "mobileTop" | "mobileBottom";

const navClassName: Record<NavLinksVariant, string> = {
  desktop: "hidden min-w-0 flex-1 sm:block",
  mobileTop: "min-w-0 sm:hidden",
  mobileBottom: "min-w-0 sm:hidden",
};

const listClassName: Record<NavLinksVariant, string> = {
  desktop:
    "flex min-w-0 items-center justify-center gap-x-4 md:gap-x-7 lg:gap-x-10",
  mobileTop:
    "flex min-w-0 items-center justify-center gap-2 min-[360px]:gap-3",
  mobileBottom: "flex items-center justify-center gap-4 min-[360px]:gap-5",
};

export function NavLinks({
  items = mainNavigation,
  variant = "desktop",
  ariaLabel = "Main navigation",
}: {
  items?: readonly NavigationItem[];
  variant?: NavLinksVariant;
  ariaLabel?: string;
}) {
  const pathname = usePathname();
  const isDesktop = variant === "desktop";
  const linkBaseClassName = isDesktop
    ? `${headingFont.className} inline-block rounded px-1 py-1 text-center text-lg leading-none transition duration-200 md:text-xl`
    : `${headingFont.className} block rounded px-1.5 py-1.5 text-center text-[0.82rem] leading-none transition duration-200 min-[430px]:text-sm`;

  return (
    <nav aria-label={ariaLabel} className={navClassName[variant]}>
      <ul className={listClassName[variant]}>
        {items.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`${linkBaseClassName} ${
                  isActive
                    ? `${
                        isDesktop ? "scale-110" : ""
                      } text-theme-accent drop-shadow-[0_0_10px_rgba(114,156,174,0.45)]`
                    : `${
                        isDesktop ? "hover:scale-105" : ""
                      } text-theme-muted hover:text-theme-accent`
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
