"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const currentTheme =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const timeoutId = window.setTimeout(() => {
      setTheme(currentTheme);
      setHasMounted(true);
    }, 0);

    return () => window.clearTimeout(timeoutId);
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
      className={`group relative rounded-full border border-[var(--border-subtle)] bg-[var(--toggle-bg)] shadow-[var(--toggle-shadow)] transition hover:bg-[var(--toggle-bg-hover)] ${
        compact ? "h-5 w-9" : "h-7 w-12"
      }`}
    >
      <span
        className={`absolute top-1/2 -translate-y-1/2 rounded-full bg-[var(--toggle-knob)] shadow-[var(--toggle-knob-shadow)] transition ${
          compact
            ? `left-0.5 h-4 w-4 ${isLight ? "translate-x-4" : "translate-x-0"}`
            : `left-1 h-5 w-5 ${isLight ? "translate-x-5" : "translate-x-0"}`
        }`}
      />
    </button>
  );
}
