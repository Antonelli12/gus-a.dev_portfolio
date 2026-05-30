import type { ReactNode } from "react";
import { headingFont, highlightFont } from "@/app/fonts";
import { HeroQuote } from "@/components/shared/hero-quote";
import { ToolIconList } from "@/components/shared/tool-icon-list";
import {
  apiIntegration,
  designSystemsComponents,
  developmentIntro,
  devSection,
  frontendImplementation,
  technicalProjects,
  toolsStack,
} from "@/data/development";
import {
  sectionEyebrowClassName,
  sectionTitleClassName,
  sectionTitleHighlightStyle,
} from "@/lib/typography";

function DevBlock({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`ui-card scroll-mt-28 rounded-2xl p-6 sm:p-8 ${className}`}
    >
      <h2
        className={`${headingFont.className} ui-block-title text-2xl sm:text-3xl`}
      >
        {title}
      </h2>

      <div className="mt-5 text-base leading-8 text-theme-muted">
        {children}
      </div>
    </section>
  );
}

function ParagraphBlock({ body }: { body: readonly string[] }) {
  return (
    <div className="space-y-5">
      {body.map((paragraph, index) => (
        <p key={`${paragraph}-${index}`}>{paragraph}</p>
      ))}
    </div>
  );
}

function PillList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="ui-pill rounded-full px-4 py-2 text-xs"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function ImplementationGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {frontendImplementation.items.map((item) => (
        <article key={item.title} className="ui-pill rounded-2xl p-5">
          <h3 className={`${headingFont.className} text-xl text-theme`}>
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-theme-muted">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}

function ApiIntegrationContent() {
  return (
    <div className="space-y-6">
      <ParagraphBlock body={apiIntegration.body} />
      <PillList items={apiIntegration.items} />
    </div>
  );
}

function ProjectGrid() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {technicalProjects.items.map((project) => (
        <article
          key={project.title}
          className="ui-pill flex h-full flex-col rounded-2xl p-5"
        >
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-theme-faint">
              {project.type}
            </span>
            <span className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-theme-faint">
              {project.status}
            </span>
          </div>

          <h3
            className={`${headingFont.className} mt-5 text-2xl text-theme-accent`}
          >
            {project.title}
          </h3>

          <p className="mt-4 flex-1 text-sm leading-7 text-theme-muted">
            {project.description}
          </p>

          <div className="mt-6">
            <PillList items={project.focus} />
          </div>
        </article>
      ))}
    </div>
  );
}

function ToolsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {toolsStack.groups.map((group) => (
        <article key={group.title} className="ui-pill rounded-2xl p-5">
          <h3
            className={`${headingFont.className} mb-4 text-xl text-theme-accent`}
          >
            {group.title}
          </h3>

          <ToolIconList items={group.items} />
        </article>
      ))}
    </div>
  );
}

export function DevSection() {
  return (
    <main className="min-h-screen px-6 py-28 text-theme sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-4xl">
          <p className={sectionEyebrowClassName}>{devSection.eyebrow}</p>

          <h1 className={`${headingFont.className} ${sectionTitleClassName}`}>
            {devSection.titleStart}
            <br />
            <span
              className={highlightFont.className}
              style={sectionTitleHighlightStyle}
            >
              {devSection.titleHighlight}
            </span>
            <br />
            {devSection.titleEnd}
          </h1>

          <HeroQuote
            quote={devSection.quote}
            attribution={devSection.quoteAttribution}
          />
        </header>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <DevBlock
            id="how-i-build"
            title={developmentIntro.title}
            className="lg:col-span-2"
          >
            <ParagraphBlock body={developmentIntro.body} />
          </DevBlock>

          <DevBlock
            id="frontend-implementation"
            title={frontendImplementation.title}
            className="lg:col-span-2"
          >
            <ImplementationGrid />
          </DevBlock>

          <DevBlock id="api-integration" title={apiIntegration.title}>
            <ApiIntegrationContent />
          </DevBlock>

          <DevBlock
            id="design-systems-components"
            title={designSystemsComponents.title}
          >
            <ParagraphBlock body={designSystemsComponents.body} />
          </DevBlock>

          <DevBlock
            id="technical-projects"
            title={technicalProjects.title}
            className="lg:col-span-2"
          >
            <ProjectGrid />
          </DevBlock>

          <DevBlock
            id="tools-stack"
            title={toolsStack.title}
            className="lg:col-span-2"
          >
            <ToolsGrid />
          </DevBlock>
        </div>
      </div>
    </main>
  );
}
