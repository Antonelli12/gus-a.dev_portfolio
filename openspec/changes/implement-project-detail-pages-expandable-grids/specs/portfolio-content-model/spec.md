## MODIFIED Requirements

### Requirement: Portfolio copy is primarily data-driven
The portfolio SHALL keep most page copy, repeated list data, case study data, project data, project destination metadata, project slug data, project featured ordering, project detail sections, social links, CV URL, contact form configuration, typed hero phrases, static hero fallback copy, page metadata copy, tool/method data, and repositioning/polish copy in `data/*.ts` modules or equivalent typed content structures.

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

#### Scenario: Project detail content renders
- **WHEN** a Design or Development detail page renders
- **THEN** its title, status, overview, sections, tags, tools/platforms, links, and return path come from project detail data rather than hard-coded page-only content

### Requirement: Repeated content renders from arrays
Repeated portfolio content SHALL render from arrays where modeled, including process steps, focus pills, project cards, case study cards, expandable project grids, detail page sections, detail links, tool groups, credential items, social links, implementation areas, skill clusters, design methods, platform/context tags, tech stack tags, tooling tags, and project detail sections.

#### Scenario: A list-backed section renders
- **WHEN** a list-backed section such as Tools & Stack, Tools & Methods, Design project cards, Development project cards, expandable hidden cards, or project detail sections renders
- **THEN** each visible item is produced from the corresponding data array

### Requirement: Design project cards use product evidence fields
Design project cards SHALL support project title, slug, featured order, short description, problem or context summary, platform/context tags, design methods used where relevant, optional tools, status where needed, and data-driven destination metadata for existing deeper case-study content, verified GitHub repositories, verified external URLs, or an honest unavailable state.

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
- **THEN** the data model represents that honestly by keeping the card non-clickable or using the inactive state "Details Coming Soon" instead of inventing a repository, placeholder link, or unsupported internal route

### Requirement: Development project cards use technical evidence fields
Development project cards SHALL support project title, slug, featured order, short description, technical problem or implementation summary, tech stack tags, tooling tags, status where needed, and data-driven destination metadata for existing deeper technical project content, verified GitHub repositories, verified external URLs, or an honest unavailable state.

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
- **THEN** the data model represents that honestly by keeping the card non-clickable or using the inactive state "Details Coming Soon" instead of inventing a repository, placeholder link, or unsupported internal route

### Requirement: Project detail content model supports design and development depth
Project detail pages or detail views SHALL support overview, context, problem, goals, process, decisions, constraints, tools/platforms or tech stack, outcome or learning, and links where available. Detail content SHALL be route-ready through a slug and SHALL only be available when reliable, specific detail sections exist. Detail content SHALL be based only on existing repo data, known portfolio content, verified links, or content explicitly provided by Gus.

#### Scenario: Design detail content renders
- **WHEN** a Design project detail page or detail view renders
- **THEN** it emphasises product thinking, user journey, decisions, flows, usability, research, information architecture, and workflow clarity

#### Scenario: Development detail content renders
- **WHEN** a Development project detail page or detail view renders
- **THEN** it emphasises architecture, implementation, integration, testing, maintainability, and technical trade-offs

#### Scenario: Detail content is unavailable
- **WHEN** a project does not have reliable detail sections
- **THEN** the data model marks the detail route unavailable and card destinations do not point to a fake detail page

#### Scenario: Detail content lacks enough evidence
- **WHEN** route/data/component infrastructure exists but a project does not yet have enough real detail content
- **THEN** the project remains unavailable for internal detail linking and its card uses "Details Coming Soon"

#### Scenario: Detail content is authored
- **WHEN** detail content is added for a project
- **THEN** it does not invent project outcomes, metrics, research findings, user testing results, repositories, screenshots, employers/clients, implementation details, or case-study claims

### Requirement: Project card destinations are data-driven and honest
Project cards SHALL use structured destination metadata to distinguish existing internal detail access, verified external links, and unavailable destinations. The default unavailable destination label SHALL be "Details Coming Soon" across both Design and Development cards.

#### Scenario: Project has an internal destination
- **WHEN** a project card has reliable internal detail content
- **THEN** its destination metadata identifies the internal href and accessible link label

#### Scenario: Project has an external destination
- **WHEN** a project card has a verified GitHub repository or relevant external URL
- **THEN** its destination metadata identifies the external href, accessible link label, and safe new-tab behavior

#### Scenario: Project has no destination
- **WHEN** a project has no reliable destination yet
- **THEN** the card remains non-clickable or shows the inactive state "Details Coming Soon" without rendering a fake repository, placeholder link, or unsupported internal route

#### Scenario: Portfolio Website keeps verified external destination
- **WHEN** the Portfolio Website card does not have a useful internal detail page
- **THEN** it may continue to use the verified GitHub repository destination instead of a thin internal detail page

### Requirement: Page metadata copy matches route responsibilities
The portfolio SHALL provide concise metadata copy for Home, About, Design, Development, and Contact that matches each route's current responsibility and developer-turned-designer positioning. Browser tab titles SHALL use the approved title pattern while descriptions, OpenGraph descriptions, and Twitter descriptions remain credible and evidence-backed.

#### Scenario: Metadata is drafted
- **WHEN** a route title, description, OpenGraph title, or social description is written
- **THEN** it uses public, credible wording and avoids unsupported claims, invented outcomes, or inflated seniority

#### Scenario: Main browser tab titles render
- **WHEN** a visitor opens a main route in the browser
- **THEN** the tab title is "Gus' Portfolio" for `/`, "About | Gustavo Antonelli" for `/about`, "Design | Gustavo Antonelli" for `/design`, "Development | Gustavo Antonelli" for `/development`, and "Contact | Gustavo Antonelli" for `/contact`

## ADDED Requirements

### Requirement: Project collections support expandable overview grids
Design and Development project collections SHALL support displaying a featured subset of 3 items by default and revealing additional items when more than 3 records exist.

#### Scenario: Collection has three or fewer records
- **WHEN** a Design or Development project collection has 3 or fewer records
- **THEN** all records are visible and no See more control renders

#### Scenario: Current project collections render
- **WHEN** the current Design and Development collections each contain three records
- **THEN** the expandable-grid infrastructure is ready for future records but the See more / Collapse control does not appear

#### Scenario: Collection has more than three records
- **WHEN** a Design or Development project collection has more than 3 records
- **THEN** only the first 3 records by featured order are visible by default

#### Scenario: Future record is added
- **WHEN** a fourth Design case study or Development project is added to the data
- **THEN** the existing grid logic can reveal it without changing component logic
