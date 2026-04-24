"use client";

import { useEffect, useState } from "react";
import { headingFont } from "@/app/fonts";
import { mainNavigation } from "@/lib/navigation";

export function NavLinks() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    function updateActiveSection() {
      const sectionPositions = mainNavigation
        .map((item) => {
          const sectionId = item.href.replace("#", "");
          const section = document.getElementById(sectionId);

          if (!section) {
            return null;
          }

          return {
            id: sectionId,
            top: section.offsetTop,
          };
        })
        .filter((section): section is { id: string; top: number } => {
          return section !== null;
        })
        .sort((a, b) => a.top - b.top);

      const navbarOffset = 80;
      const scrollPosition = window.scrollY + navbarOffset;

      let currentSection = "home";

      for (const section of sectionPositions) {
        if (section.top <= scrollPosition) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    }

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center justify-center gap-8 sm:gap-10">
        {mainNavigation.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`${headingFont.className} inline-block text-lg transition duration-200 sm:text-xl ${
                  isActive
                    ? "scale-110 text-[#729CAE] drop-shadow-[0_0_10px_rgba(114,156,174,0.45)]"
                    : "text-white/85 hover:scale-105 hover:text-[#729CAE]"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}