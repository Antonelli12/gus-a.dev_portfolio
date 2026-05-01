"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headingFont } from "@/app/fonts";
import { mainNavigation } from "@/lib/navigation";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center justify-center gap-8 sm:gap-10">
        {mainNavigation.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`${headingFont.className} inline-block text-lg transition duration-200 sm:text-xl ${
                  isActive
                    ? "scale-110 text-theme-accent drop-shadow-[0_0_10px_rgba(114,156,174,0.45)]"
                    : "text-theme-muted hover:scale-105 hover:text-theme-accent"
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