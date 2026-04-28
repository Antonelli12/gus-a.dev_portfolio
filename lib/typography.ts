import type { CSSProperties } from "react";

export const sectionEyebrowClassName =
  "mb-5 text-sm uppercase tracking-[0.45em] text-theme-faint";

export const sectionTitleClassName =
  "text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.03em] text-theme";

export const sectionTitleHighlightStyle = {
  color: "var(--accent)",
  fontSize: "0.74em",
  lineHeight: 1,
} satisfies CSSProperties;

export const sectionSummaryClassName =
  "mt-8 max-w-2xl text-base leading-8 text-theme-muted sm:text-lg";