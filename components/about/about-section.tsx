"use client";

import { useState, type ReactNode } from "react";
import { headingFont, highlightFont } from "@/app/fonts";
import {
  aboutSection,
  developerToDesigner,
  learningCredentials,
  myProcess,
  originStory,
  technicalFoundation,
} from "@/data/about";
import {
  sectionEyebrowClassName,
  sectionSummaryClassName,
  sectionTitleClassName,
  sectionTitleHighlightStyle,
} from "@/lib/typography";

function AboutBlock({
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
      <h3
        className={`${headingFont.className} ui-block-title text-2xl sm:text-3xl`}
      >
        {title}
      </h3>

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

function ListBlock({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="ui-pill rounded-xl px-4 py-3 text-sm"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function OriginStoryBlock() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AboutBlock
      id="origin-story"
      title={originStory.title}
      className="lg:col-span-2"
    >
      <div className="relative overflow-hidden rounded-b-[1.1rem]">
        <div
          className={`space-y-5 overflow-hidden transition-[max-height] duration-300 ease-out ${
            isExpanded ? "max-h-[900px]" : "max-h-48"
          }`}
        >
          {originStory.body.map((paragraph, index) => (
            <p key={`${paragraph}-${index}`}>{paragraph}</p>
          ))}
        </div>

        <div
          className={`ui-content-fade pointer-events-none absolute inset-x-0 bottom-0 h-14 transition-opacity duration-300 ease-out ${
            isExpanded ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      <button
        type="button"
        onClick={() => setIsExpanded((current) => !current)}
        className="ui-button mt-5 rounded-full px-5 py-2 text-sm transition"
      >
        {isExpanded ? "Show less" : "Read more"}
      </button>
    </AboutBlock>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-16 min-h-screen px-6 py-28 text-theme sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-4xl">
          <p className={sectionEyebrowClassName}>{aboutSection.eyebrow}</p>

          <h2 className={`${headingFont.className} ${sectionTitleClassName}`}>
            <span
              className={highlightFont.className}
              style={sectionTitleHighlightStyle}
            >
              Developer
            </span>
            <br />
            turned
            <br />
            <span
              className={highlightFont.className}
              style={sectionTitleHighlightStyle}
            >
              Designer.
            </span>
          </h2>

          <p className={sectionSummaryClassName}>{aboutSection.summary}</p>
        </header>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <OriginStoryBlock />

          <AboutBlock
            id="developer-to-designer"
            title={developerToDesigner.title}
          >
            <ParagraphBlock body={developerToDesigner.body} />
          </AboutBlock>

          <AboutBlock id="my-process" title={myProcess.title}>
            <ListBlock items={myProcess.items} />
          </AboutBlock>

          <AboutBlock
            id="technical-foundation"
            title={technicalFoundation.title}
          >
            <ParagraphBlock body={technicalFoundation.body} />
          </AboutBlock>

          <AboutBlock
            id="learning-credentials"
            title={learningCredentials.title}
          >
            <div className="space-y-6">
              <ParagraphBlock body={learningCredentials.body} />
              <ListBlock items={learningCredentials.items} />
            </div>
          </AboutBlock>
        </div>
      </div>
    </section>
  );
}