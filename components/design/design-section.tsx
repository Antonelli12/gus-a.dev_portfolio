import { headingFont, highlightFont } from "@/app/fonts";
import {
  designCaseStudies,
  designCertifications,
  designExperience,
  designLinks,
  designSection,
  designSkills,
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
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`ui-card rounded-2xl p-6 sm:p-8 ${className}`}
    >
      <h3 className={`${headingFont.className} ui-block-title text-2xl sm:text-3xl`}>
        {title}
      </h3>

      <div className="mt-5 text-base leading-8 text-theme-muted">
        {children}
      </div>
    </section>
  );
}

function ItemList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="ui-pill rounded-xl px-4 py-3 text-sm">
          {item}
        </li>
      ))}
    </ul>
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
          <DesignBlock id="skills" title={designSkills.title}>
            <ItemList items={designSkills.items} />
          </DesignBlock>

          <DesignBlock id="experience" title={designExperience.title}>
            <ItemList items={designExperience.items} />
          </DesignBlock>

          <DesignBlock
            id="case-studies"
            title={designCaseStudies.title}
            className="lg:col-span-2"
          >
            <ItemList items={designCaseStudies.items} />
          </DesignBlock>

          <DesignBlock id="certifications" title={designCertifications.title}>
            <ItemList items={designCertifications.items} />
          </DesignBlock>

          <DesignBlock id="links" title={designLinks.title}>
            <div className="flex flex-wrap gap-3">
              {designLinks.items.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="ui-button rounded-full px-5 py-2 text-sm transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </DesignBlock>
        </div>
      </div>
    </main>
  );
}