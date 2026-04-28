"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const currentTheme =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";

    setTheme(currentTheme);
    setHasMounted(true);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

  const isLight = hasMounted && theme === "light";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={isLight}
      onClick={toggleTheme}
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