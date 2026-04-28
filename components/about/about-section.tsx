"use client";

import { useState, type ReactNode } from "react";
import { headingFont, highlightFont } from "@/app/fonts";
import {
  aboutSection,
  background,
  broadCertifications,
  broadSkills,
  pastExperience,
  principles,
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
      <h3 className={`${headingFont.className} ui-block-title text-2xl sm:text-3xl`}>
        {title}
      </h3>

      <div className="mt-5 text-base leading-8 text-theme-muted">{children}</div>
    </section>
  );
}

function ListBlock({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
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

function BackgroundBlock() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AboutBlock
      id="background"
      title={background.title}
      className="lg:col-span-2"
    >
      <div className="relative">
        <div
          className={`space-y-5 transition-all duration-300 ${
            isExpanded ? "max-h-[900px]" : "max-h-40 overflow-hidden"
          }`}
        >
          {background.body.map((paragraph, index) => (
            <p key={`${paragraph}-${index}`}>{paragraph}</p>
          ))}
        </div>

        {!isExpanded && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
            style={{
              background:
  "linear-gradient(to top, rgba(114, 156, 174, 0.14), rgba(114, 156, 174, 0.06), transparent)",
            }}
          />
        )}
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
          <BackgroundBlock />

          <AboutBlock id="skills" title={broadSkills.title}>
            <ListBlock items={broadSkills.items} />
          </AboutBlock>

          <AboutBlock id="certifications" title={broadCertifications.title}>
            <ListBlock items={broadCertifications.items} />
          </AboutBlock>

          <AboutBlock id="experience" title={pastExperience.title}>
            <ListBlock items={pastExperience.items} />
          </AboutBlock>

          <AboutBlock id="principles" title={principles.title}>
            <ListBlock items={principles.items} />
          </AboutBlock>
        </div>
      </div>
    </section>
  );
}