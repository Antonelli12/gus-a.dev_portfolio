"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const isLight = theme === "light";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={isLight}
      onClick={() =>
        setTheme((currentTheme) =>
          currentTheme === "dark" ? "light" : "dark",
        )
      }
      className="group relative h-5 w-9 rounded-full border border-[var(--border-subtle)] bg-[var(--toggle-bg)] shadow-[var(--toggle-shadow)] transition hover:bg-[var(--toggle-bg-hover)]"
    >
      <span
        className={`absolute left-0.5 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[var(--toggle-knob)] shadow-[var(--toggle-knob-shadow)] transition ${
          isLight ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
}