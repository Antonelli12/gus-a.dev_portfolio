# portfolio-content-model Specification

## Purpose
TBD - created by archiving change document-portfolio-baseline. Update Purpose after archive.
## Requirements
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

### Requirement: Home page introduces Gus and primary work paths
The Home page SHALL introduce Gus as a developer turned designer with product thinking, technical depth, frontend implementation ability, and lightly signalled AI-aware workflow habits. It SHALL explain who Gus is, what he is moving toward, why his technical background strengthens his design work, and where visitors should go next.

#### Scenario: Visitor lands on home
- **WHEN** a visitor opens `/`
- **THEN** the page presents developer-turned-designer positioning and links to `/design` and `/development`

#### Scenario: Visitor scans Home positioning
- **WHEN** a visitor scans the Home hero and supporting copy
- **THEN** the primary identity is not generic Frontend Engineer or generic Software Engineer

#### Scenario: Visitor chooses next path
- **WHEN** a visitor wants to inspect evidence after reading Home
- **THEN** the page provides clear calls to view Design work and Development work

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

### Requirement: Design page describes design direction and case studies
The Design page SHALL remain the main UX/product evidence page and SHALL support the repositioning through clearer UX/product framing, principle-led hero support, grounded case-study wording, design methods, tools, and product reasoning.

#### Scenario: Visitor opens Design
- **WHEN** a visitor opens `/design`
- **THEN** the page renders the Design intro and current or successor design content sections from the Design data model

#### Scenario: Visitor reads Design page
- **WHEN** a visitor opens `/design`
- **THEN** the page emphasises clarity, empathy, reduced confusion, user goals, methods, tools, and design/product case-study framing

#### Scenario: Visitor scans Design evidence
- **WHEN** a visitor scans Design project cards
- **THEN** the cards prioritise design/product evidence over technology stack details

### Requirement: Development page describes frontend and technical work
The Development page SHALL preserve technical credibility and SHALL support the repositioning through practical implementation framing, frontend evidence, API-aware interfaces, reusable patterns, testing, maintainability, architecture, integration, technical trade-offs, and AI-assisted development workflow.

#### Scenario: Visitor opens Development
- **WHEN** a visitor opens `/development`
- **THEN** the page renders the Development intro and current or successor development content sections from the Development data model

#### Scenario: Visitor reads Development page
- **WHEN** a visitor opens `/development`
- **THEN** the page emphasises making design work in real conditions, including forms, state, data, validation, responsiveness, edge cases, reusable patterns, APIs, and maintainability

#### Scenario: Visitor scans Development evidence
- **WHEN** a visitor scans Development project cards
- **THEN** the cards prioritise implementation evidence, architecture, integration, testing, maintainability, and technical trade-offs

### Requirement: Contact page uses contact configuration data
The Contact page SHALL use contact data for intro copy, CV href, social links, Formspree endpoint configuration, accessible GitHub and LinkedIn icon links, the existing contact form flow, and a Download CV CTA placed near the social links as a separate recruiter-facing action that remains visually distinct from icon-only social buttons.

#### Scenario: Visitor opens Contact
- **WHEN** a visitor opens `/contact`
- **THEN** the page renders contact intro copy, Download CV, GitHub, LinkedIn, the contact form, and role-direction messaging using configured contact data

#### Scenario: Visitor scans Contact actions
- **WHEN** a visitor scans Contact actions
- **THEN** social destinations and Download CV appear together as accessible actions outside the form button row, with Download CV presented as a distinct recruiter-facing CTA

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

### Requirement: Design card taxonomy supports context, methods, and tools
Design project cards SHALL support platform/context tags such as Web, Mobile, Desktop, Responsive Web, Internal Tool, AI Workflow, Enterprise Workflow, Dashboard, Assistant, and Prototype; design method tags such as user flows, wireframes, prototyping, interaction design, journey mapping, information architecture, usability feedback, and workflow design; and optional tool tags such as Figma, Miro, Microsoft Copilot Studio, Azure AI Foundry, and Azure DevOps.

#### Scenario: Design card tags render
- **WHEN** a Design card includes context, method, or tool tags
- **THEN** the tags communicate design evidence and context before implementation stack

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

### Requirement: Development card taxonomy supports stack and tooling
Development project cards SHALL support tech stack tags such as React, Next.js, TypeScript, Tailwind, JavaScript, Java, Spring Boot, Python, SQL, REST, GraphQL, PostgreSQL, Docker, Formspree, Vercel, and Azure; and tooling tags such as Git, GitHub, Postman, Azure DevOps, JUnit, Mockito, Jest, Playwright, Codex, and Copilot.

#### Scenario: Development card tags render
- **WHEN** a Development card includes stack or tooling tags
- **THEN** the tags communicate implementation evidence, tooling familiarity, and technical context

### Requirement: AI workflow evidence is content-modelled
The portfolio SHALL support AI-enabled or agentic workflow project content when evidence-backed, including Microsoft Copilot Studio, Azure AI Foundry, Azure DevOps, Microsoft Copilot, Codex, prompt iteration, AI-assisted debugging, edge-case exploration, workflow design, and Spec Driven Development.

#### Scenario: AI workflow content appears
- **WHEN** AI workflow content appears in cards, page copy, or detail content
- **THEN** it is tied to product workflow design, structured delivery, human review, edge-case thinking, and implementation awareness

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

### Requirement: Content avoids unsupported claims
Portfolio content MUST NOT invent metrics, employers, seniority, case studies, achievements, or outcomes beyond the supplied evidence.

#### Scenario: Project copy is drafted
- **WHEN** project copy, card descriptions, or detail content are drafted from CV-derived evidence
- **THEN** they remain concise, public, credible, and evidence-backed without directly pasting CV bullet points

### Requirement: Repositioning and polish scope excludes deeper project architecture
The portfolio repositioning and polish pass SHALL NOT add project detail pages/views, rename routes, add top-level navigation destinations, change package dependencies, change runtime configuration, or invent unsupported claims.

#### Scenario: Completed implementation is reviewed
- **WHEN** the implementation is reviewed
- **THEN** broader polish across existing pages is allowed, but deeper project-detail architecture and route model changes remain out of scope

### Requirement: Home summary supports the hero
The Home page SHALL include concise supporting copy inside or immediately below the hero area that explains the developer-turned-designer direction without overwhelming the first viewport.

#### Scenario: Visitor reads Home summary
- **WHEN** a visitor reads the Home page supporting copy
- **THEN** they understand that Gus is moving toward UX/product design and uses technical depth to make design work more practical and buildable

#### Scenario: Visitor reads AI-aware Home summary
- **WHEN** AI-compatible workflow is mentioned in the Home summary
- **THEN** it is presented lightly as part of Gus's product/design/development workflow rather than as the main hero claim

### Requirement: AI-compatible workflow remains disciplined and credible
Where AI-compatible workflow is mentioned, the portfolio SHALL frame it through structured delivery, prompt iteration, AI-assisted debugging, edge-case exploration, Spec Driven Development, and human ownership of final decisions.

#### Scenario: Visitor reads AI workflow content
- **WHEN** AI-compatible workflow habits are mentioned
- **THEN** they are framed as disciplined product/development workflow rather than as a replacement for judgement

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

### Requirement: CV download uses a real public asset
The portfolio SHALL provide the real CV file at the public path referenced by the Contact data model.

#### Scenario: Visitor activates Download CV
- **WHEN** a visitor activates the Download CV action
- **THEN** the configured href resolves to an existing public CV file rather than a missing asset

### Requirement: Application readiness content avoids broad rewrites
Application-readiness copy changes SHALL be limited to obvious clarity, metadata, broken-link fixes, or action labelling needed for job applications.

#### Scenario: Application readiness polish is implemented
- **WHEN** page copy is touched during this change
- **THEN** the change preserves the current developer-turned-designer narrative and avoids major rewrites or unsupported new claims

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

