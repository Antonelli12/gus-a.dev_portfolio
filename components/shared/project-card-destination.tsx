import Link from "next/link";
import { headingFont } from "@/app/fonts";
import type { ProjectDestination } from "@/data/project-destinations";

const baseClassName = `${headingFont.className} inline-flex w-fit items-center justify-center rounded-full px-4 py-2 text-xs leading-none transition`;
const linkClassName = `${baseClassName} border border-dashed border-[var(--accent)] bg-[var(--button-bg)] text-theme-accent shadow-[0_0_18px_rgba(114,156,174,0.16)] hover:bg-[var(--button-bg-hover)] hover:text-theme`;
const unavailableClassName = `${baseClassName} border border-dashed border-[var(--border-subtle)] text-theme-faint`;

export function ProjectCardDestination({
  destination,
}: {
  destination: ProjectDestination;
}) {
  if (destination.kind === "internal") {
    return (
      <Link
        href={destination.href}
        aria-label={destination.ariaLabel}
        className={linkClassName}
      >
        {destination.label}
      </Link>
    );
  }

  if (destination.kind === "external") {
    return (
      <a
        href={destination.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={destination.ariaLabel}
        className={linkClassName}
      >
        {destination.label}
      </a>
    );
  }

  return (
    <span aria-label={destination.ariaLabel} className={unavailableClassName}>
      {destination.label}
    </span>
  );
}
