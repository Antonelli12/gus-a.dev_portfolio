import type { ReactNode } from "react";
import { headingFont, highlightFont } from "@/app/fonts";
import {
  designIntro,
  designProcess,
  designSection,
  featuredCaseStudies,
  researchDecisions,
  toolsMethods,
} from "@/data/design";
import {
  sectionEyebrowClassName,
  sectionSummaryClassName,
  sectionTitleClassName,
  sectionTitleHighlightStyle,
} from "@/lib/typography";

function DesignBlock({
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

function CaseStudyGrid() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {featuredCaseStudies.items.map((caseStudy) => (
        <article
          key={caseStudy.title}
          className="ui-pill flex h-full flex-col rounded-2xl p-5"
        >
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-theme-faint">
              {caseStudy.type}
            </span>
            <span className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-theme-faint">
              {caseStudy.status}
            </span>
          </div>

          <h3
            className={`${headingFont.className} mt-5 text-2xl text-theme-accent`}
          >
            {caseStudy.title}
          </h3>

          <p className="mt-4 flex-1 text-sm leading-7 text-theme-muted">
            {caseStudy.description}
          </p>

          <div className="mt-6">
            <PillList items={caseStudy.focus} />
          </div>
        </article>
      ))}
    </div>
  );
}

function ProcessSteps() {
  return (
    <ol className="grid gap-4 lg:grid-cols-4">
      {designProcess.steps.map((step) => (
        <li key={step.label} className="ui-pill rounded-2xl p-5">
          <span
            className={`${highlightFont.className} text-sm text-theme-accent`}
          >
            {step.label}
          </span>

          <h3 className={`${headingFont.className} mt-4 text-xl text-theme`}>
            {step.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-theme-muted">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}

function DecisionList() {
  return (
    <div className="space-y-4">
      {researchDecisions.items.map((item) => (
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

function ToolsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {toolsMethods.groups.map((group) => (
        <article key={group.title} className="ui-pill rounded-2xl p-5">
          <h3
            className={`${headingFont.className} mb-4 text-xl text-theme-accent`}
          >
            {group.title}
          </h3>

          <PillList items={group.items} />
        </article>
      ))}
    </div>
  );
}

export function DesignSection() {
  return (
    <main className="min-h-screen px-6 py-28 text-theme sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-4xl">
          <p className={sectionEyebrowClassName}>{designSection.eyebrow}</p>

          <h1 className={`${headingFont.className} ${sectionTitleClassName}`}>
            {designSection.titleStart}
            <br />
            <span
              className={highlightFont.className}
              style={sectionTitleHighlightStyle}
            >
              {designSection.titleHighlight}
            </span>
            <br />
            {designSection.titleEnd}
          </h1>

          <p className={sectionSummaryClassName}>{designSection.intro}</p>
        </header>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <DesignBlock
            id="design-direction"
            title={designIntro.title}
            className="lg:col-span-2"
          >
            <ParagraphBlock body={designIntro.body} />
          </DesignBlock>

          <DesignBlock
            id="case-studies"
            title={featuredCaseStudies.title}
            className="lg:col-span-2"
          >
            <CaseStudyGrid />
          </DesignBlock>

          <DesignBlock
            id="design-process"
            title={designProcess.title}
            className="lg:col-span-2"
          >
            <ProcessSteps />
          </DesignBlock>

          <DesignBlock id="research-decisions" title={researchDecisions.title}>
            <DecisionList />
          </DesignBlock>

          <DesignBlock id="tools-methods" title={toolsMethods.title}>
            <ToolsGrid />
          </DesignBlock>
        </div>
      </div>
    </main>
  );
}