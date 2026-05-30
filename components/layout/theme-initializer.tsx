"use client";

import { useEffect } from "react";
import { applyTheme, getInitialTheme } from "@/components/layout/theme-utils";

export function ThemeInitializer() {
  useEffect(() => {
    applyTheme(getInitialTheme());
  }, []);

  return null;
}
