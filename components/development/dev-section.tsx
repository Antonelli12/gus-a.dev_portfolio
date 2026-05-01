import { headingFont, highlightFont } from "@/app/fonts";
import {
  devCertifications,
  devExperience,
  devLinks,
  devProjects,
  devSection,
  devSkills,
} from "@/data/development";
import {
  sectionEyebrowClassName,
  sectionSummaryClassName,
  sectionTitleClassName,
  sectionTitleHighlightStyle,
} from "@/lib/typography";

function DevBlock({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="ui-card rounded-2xl p-6 sm:p-8">
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

          <p className={sectionSummaryClassName}>{devSection.intro}</p>
        </header>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <DevBlock id="skills" title={devSkills.title}>
            <ItemList items={devSkills.items} />
          </DevBlock>

          <DevBlock id="experience" title={devExperience.title}>
            <ItemList items={devExperience.items} />
          </DevBlock>

          <DevBlock id="projects" title={devProjects.title}>
            <ItemList items={devProjects.items} />
          </DevBlock>

          <DevBlock id="certifications" title={devCertifications.title}>
            <ItemList items={devCertifications.items} />
          </DevBlock>

          <DevBlock id="links" title={devLinks.title}>
            <div className="flex flex-wrap gap-3">
              {devLinks.items.map((link, index) => (
              <a
                key={`${link.label}-${link.href}-${index}`}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="ui-button rounded-full px-5 py-2 text-sm transition"
              >
                {link.label}
              </a>
            ))}
            </div>
          </DevBlock>
        </div>
      </div>
    </main>
  );
}