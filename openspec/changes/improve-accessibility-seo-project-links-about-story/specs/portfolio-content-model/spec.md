## MODIFIED Requirements

### Requirement: Portfolio copy is primarily data-driven
The portfolio SHALL keep most page copy, repeated list data, case study data, project data, project destination metadata, social links, CV URL, contact form configuration, typed hero phrases, static hero fallback copy, page metadata copy, tool/method data, and repositioning/polish copy in `data/*.ts` modules or equivalent typed content structures.

#### Scenario: Design case studies render
- **WHEN** `DesignSection` renders featured case studies
- **THEN** case study cards are generated from `featuredCaseStudies.items` rather than being independently hard-coded per card

#### Scenario: Tool and stack sections render
- **WHEN** Design or Development renders tools, methods, stack, or workflow lists
- **THEN** the visible items are generated from maintainable data or structured content and can include icon metadata where useful

#### Scenario: Home, About, and Contact repositioning copy renders
- **WHEN** Home, About, or Contact renders repositioned copy
- **THEN** the copy is sourced from maintainable typed data or clearly structured content constants rather than scattered through unrelated layout logic

#### Scenario: Metadata and destination copy renders
- **WHEN** route metadata, static hero fallback text, project-card destinations, or unavailable destination labels render
- **THEN** the copy comes from maintainable typed data or clearly structured content constants

### Requirement: About page describes Gus's professional transition
The About page SHALL explain Gus's personal path from early curiosity about how technology works into programming, UX engineering, product design, and implementation-aware design. It SHALL preserve technical depth, education, working style, and disciplined AI-compatible workflow habits without repeatedly using "developer turned designer" inside body copy. The approved About story SHALL be used exactly as provided unless a tiny grammar, escaping, or JSX/string-formatting change is required.

#### Scenario: Visitor opens About
- **WHEN** a visitor opens `/about`
- **THEN** the page renders transition-focused About content from the About data model

#### Scenario: Visitor evaluates credibility
- **WHEN** a visitor reads About content
- **THEN** the page makes clear that Gus has not abandoned engineering and uses technical credibility to strengthen design work

#### Scenario: Visitor scans working style
- **WHEN** a visitor scans About for how Gus works
- **THEN** the page communicates problem-first thinking, clarity, implementation awareness, human review, and edge-case thinking without sounding like a generic process checklist

#### Scenario: Visitor reads the personal story
- **WHEN** a visitor expands or reads the About story
- **THEN** the story uses the approved personal narrative about curiosity, programming, user experience, product thinking, and engineering constraints rather than rewriting it into generic portfolio positioning copy

### Requirement: Contact page uses contact configuration data
The Contact page SHALL use contact data for intro copy, a subtle role-openness line, CV href, social links, Formspree endpoint configuration, accessible GitHub and LinkedIn icon links, the existing contact form flow, and a Download CV CTA placed near the social links as a separate recruiter-facing action that remains visually distinct from icon-only social buttons.

#### Scenario: Visitor opens Contact
- **WHEN** a visitor opens `/contact`
- **THEN** the page renders contact intro copy, a short role-openness statement, Download CV, GitHub, LinkedIn, and the contact form using configured contact data

#### Scenario: Visitor scans Contact actions
- **WHEN** a visitor scans Contact actions
- **THEN** social destinations and Download CV appear together as accessible actions outside the form button row, with Download CV presented as a distinct recruiter-facing CTA

#### Scenario: Visitor reads role openness
- **WHEN** a visitor reads the Contact intro area
- **THEN** a separate short paragraph states that Gus is open to UX Engineer, Technical Product Designer, and product-focused frontend roles without making the page feel cluttered

### Requirement: Design project cards use product evidence fields
Design project cards SHALL support project title, short description, problem or context summary, platform/context tags, design methods used where relevant, optional tools, and data-driven destination metadata for existing deeper case-study content, verified GitHub repositories, verified external URLs, or an honest unavailable state.

#### Scenario: Design card renders Customer and Account Management Platform
- **WHEN** the Customer and Account Management Platform appears as a Design card
- **THEN** it is framed around user flows, CRUD journeys, wireframes, page-to-page navigation, interface states, responsive UI, feedback, and implementation-aware design

#### Scenario: Design card renders AI-Enabled Sales Assistant
- **WHEN** the AI-Enabled Sales Assistant appears as a Design card
- **THEN** it is framed around AI workflow design, meeting preparation, discovery, follow-up, MEDDPICC/SPIN guided flows, usability, workflow clarity, and enterprise delivery

#### Scenario: Design card renders Portfolio Website
- **WHEN** the Portfolio Website appears as a Design card
- **THEN** it is framed around information architecture, recruiter scanning behaviour, visual system, contact flow, dark/light theme, and AI-assisted iteration with human ownership

#### Scenario: Design card destination is unavailable
- **WHEN** a Design card has no reliable internal detail page or external destination
- **THEN** the data model represents that honestly by keeping the card non-clickable or using a subtle state such as "Case study coming later" instead of inventing a repository, placeholder link, or unsupported internal route

### Requirement: Development project cards use technical evidence fields
Development project cards SHALL support project title, short description, technical problem or implementation summary, tech stack tags, tooling tags, and data-driven destination metadata for existing deeper technical project content, verified GitHub repositories, verified external URLs, or an honest unavailable state.

#### Scenario: Development card renders Portfolio Website
- **WHEN** the Portfolio Website appears as a Development card
- **THEN** it is framed around Next.js, React, TypeScript, Tailwind CSS, Formspree, Vercel, theme-aware UI, responsive structure, and implementation choices

#### Scenario: Development card renders Customer and Account Management Platform
- **WHEN** the Customer and Account Management Platform appears as a Development card
- **THEN** it is framed around React, Vite, Tailwind, REST integration, Node.js, Spring Boot, PostgreSQL, CRUD workflows, and API-aware interface implementation

#### Scenario: Development card renders Banking System
- **WHEN** the Banking System appears as a Development card
- **THEN** it is framed around Java, Maven, JUnit, Mockito, OOP, collections, UML-driven design, TDD, SOLID refactoring, and transaction flows

#### Scenario: Development card renders PSO Movie Recommendation System
- **WHEN** the PSO Movie Recommendation System appears as a Development card
- **THEN** it is framed around Python, Particle Swarm Optimisation, the MovieLens 100k dataset, recommendation accuracy and serendipity, and computational trade-offs

#### Scenario: Development card destination is unavailable
- **WHEN** a Development card has no reliable internal detail page, GitHub repository, or relevant external destination
- **THEN** the data model represents that honestly by keeping the card non-clickable or using a subtle state such as "Details coming soon" instead of inventing a repository, placeholder link, or unsupported internal route

## ADDED Requirements

### Requirement: Project card destinations are data-driven and honest
Project cards SHALL use structured destination metadata to distinguish existing internal detail access, verified external links, and unavailable destinations.

#### Scenario: Project has an internal destination
- **WHEN** a project card has reliable internal detail content
- **THEN** its destination metadata identifies the internal href and accessible link label

#### Scenario: Project has an external destination
- **WHEN** a project card has a verified GitHub repository or relevant external URL
- **THEN** its destination metadata identifies the external href, accessible link label, and safe new-tab behavior

#### Scenario: Project has no destination
- **WHEN** a project has no reliable destination yet
- **THEN** the card remains non-clickable or shows a subtle page-appropriate state such as "Details coming soon" or "Case study coming later" without rendering a fake repository, placeholder link, or unsupported internal route

### Requirement: Page metadata copy matches route responsibilities
The portfolio SHALL provide concise metadata copy for Home, About, Design, Development, and Contact that matches each route's current responsibility and developer-turned-designer positioning.

#### Scenario: Metadata is drafted
- **WHEN** a route title, description, OpenGraph title, or social description is written
- **THEN** it uses public, credible wording and avoids unsupported claims, invented outcomes, or inflated seniority
