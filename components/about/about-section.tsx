"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
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
} from "@/lib/typography";

const aboutTitleHighlightStyle = {
  color: "#729CAE",
  fontSize: "0.74em",
  lineHeight: 1,
} satisfies CSSProperties;

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
      className={`scroll-mt-28 rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm sm:p-8 ${className}`}
    >
      <h3 className={`${headingFont.className} text-2xl text-white sm:text-3xl`}>
        {title}
      </h3>

      <div className="mt-5 text-base leading-8 text-white/65">{children}</div>
    </section>
  );
}

function ListBlock({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/70"
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
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0D0C10]/95 via-[#0D0C10]/55 to-transparent" />
        )}
      </div>

      <button
        type="button"
        onClick={() => setIsExpanded((current) => !current)}
        className="mt-5 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 transition hover:border-[#729CAE]/50 hover:bg-[#729CAE]/10 hover:text-white"
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
      className="min-h-screen px-6 py-28 text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-4xl">
          <p className={sectionEyebrowClassName}>{aboutSection.eyebrow}</p>

          <h2 className={`${headingFont.className} ${sectionTitleClassName}`}>
            <span
              className={highlightFont.className}
              style={aboutTitleHighlightStyle}
            >
              Developer
            </span>
            <br />
            turned
            <br />
            <span
              className={highlightFont.className}
              style={aboutTitleHighlightStyle}
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