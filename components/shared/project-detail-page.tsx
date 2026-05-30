import Link from "next/link";
import { headingFont, highlightFont } from "@/app/fonts";
import type {
  ProjectCardRecord,
  ProjectWithAvailableDetail,
} from "@/data/project-types";

type DetailSection = "design" | "development";

const sectionCopy: Record<
  DetailSection,
  {
    eyebrow: string;
    returnHref: string;
    returnLabel: string;
  }
> = {
  design: {
    eyebrow: "Design Case Study",
    returnHref: "/design",
    returnLabel: "Return to Design",
  },
  development: {
    eyebrow: "Development Project",
    returnHref: "/development",
    returnLabel: "Return to Development",
  },
};

function DetailPills({ items }: { items: readonly string[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="ui-pill rounded-full px-4 py-2 text-xs text-theme-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProjectDetailPage({
  project,
  section,
}: {
  project: ProjectWithAvailableDetail<ProjectCardRecord>;
  section: DetailSection;
}) {
  const copy = sectionCopy[section];
  const supportingTags = [
    ...project.focus,
    ...(project.tools ?? []),
    ...(project.platforms ?? []),
    ...(project.detail.tools ?? []),
    ...(project.detail.platforms ?? []),
    ...(project.detail.stack ?? []),
  ];

  return (
    <main className="min-h-screen px-6 py-28 text-theme sm:px-10 lg:px-16">
      <article className="mx-auto max-w-5xl">
        <Link
          href={copy.returnHref}
          className={`${headingFont.className} ui-button inline-flex rounded-full px-4 py-2 text-xs transition`}
        >
          {copy.returnLabel}
        </Link>

        <header className="mt-10">
          <p className="mb-5 text-xs uppercase tracking-[0.32em] text-theme-faint sm:text-sm sm:tracking-[0.45em]">
            {copy.eyebrow}
          </p>

          <h1
            className={`${headingFont.className} max-w-4xl text-[clamp(2rem,5.5vw,4.5rem)] leading-[0.98] tracking-tight sm:leading-[0.95]`}
          >
            {project.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-theme-faint">
              {project.type}
            </span>
            <span className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-theme-faint">
              {project.status}
            </span>
          </div>

          <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-theme-muted sm:text-lg">
            {project.detail.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </header>

        <div className="mt-12 grid gap-6">
          {project.detail.sections.map((detailSection, index) => (
            <section
              key={`${detailSection.title}-${index}`}
              className="ui-card rounded-2xl p-6 sm:p-8"
            >
              <h2
                className={`${headingFont.className} ui-block-title text-2xl sm:text-3xl`}
              >
                {detailSection.title}
              </h2>

              <div className="mt-5 space-y-5 text-base leading-8 text-theme-muted">
                {detailSection.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {detailSection.items ? (
                <div className="mt-6">
                  <DetailPills items={detailSection.items} />
                </div>
              ) : null}
            </section>
          ))}

          <section className="ui-card rounded-2xl p-6 sm:p-8">
            <h2
              className={`${headingFont.className} ui-block-title text-2xl sm:text-3xl`}
            >
              Tools & Focus
            </h2>

            <div className="mt-6">
              <DetailPills items={supportingTags} />
            </div>

            {project.detail.links?.length ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.detail.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.ariaLabel}
                      className={`${headingFont.className} ui-button rounded-full px-4 py-2 text-xs transition`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-label={link.ariaLabel}
                      className={`${headingFont.className} ui-button rounded-full px-4 py-2 text-xs transition`}
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            ) : null}
          </section>
        </div>

        <div className="mt-10">
          <Link
            href={copy.returnHref}
            className={`${highlightFont.className} text-sm text-theme-accent underline-offset-4 hover:underline`}
          >
            {copy.returnLabel}
          </Link>
        </div>
      </article>
    </main>
  );
}
