## MODIFIED Requirements

### Requirement: Portfolio copy is primarily data-driven
The portfolio SHALL keep most page copy, repeated list data, case study data, project data, project card fields, project detail content, social links, CV URL, and contact form configuration in `data/*.ts` modules or an equivalent typed data layer.

#### Scenario: Design case studies render
- **WHEN** `DesignSection` renders featured case studies
- **THEN** case study cards are generated from `featuredCaseStudies.items` or its successor data model rather than being independently hard-coded per card

#### Scenario: Future project detail content renders
- **WHEN** a project detail page or detail view renders
- **THEN** overview, context, problem, goals, process, decisions, constraints, tools/platforms or tech stack, outcomes or learnings, and available links are sourced from typed project data

### Requirement: Home page introduces Gus and primary work paths
The home page SHALL introduce Gus through the developer-turned-designer direction, explain what he is moving toward, explain why technical background strengthens his design work, and guide visitors toward Design work and Development work.

#### Scenario: Visitor lands on home
- **WHEN** a visitor opens `/`
- **THEN** the page presents developer-turned-designer positioning and links to `/design` and `/development`

#### Scenario: Visitor scans the first viewport
- **WHEN** a visitor scans the Home hero
- **THEN** the primary identity is not generic Frontend Engineer or generic Software Engineer

### Requirement: About page describes Gus's professional transition
The About page SHALL explain Gus's transition from software engineering into UX/product design, including values, working style, technical background, product thinking, AI-compatible workflow habits, and continued interest in implementation-aware design.

#### Scenario: Visitor opens About
- **WHEN** a visitor opens `/about`
- **THEN** the page renders the About intro and transition-focused content blocks from the About data model

#### Scenario: Visitor evaluates credibility
- **WHEN** a visitor reads About content
- **THEN** the page makes clear that Gus has not abandoned engineering and uses technical credibility to strengthen design work

### Requirement: Design page describes design direction and case studies
The Design page SHALL be the main UX/product evidence page, focused on case studies, user flows, wireframes, product decisions, AI-enabled workflows, interaction design, research, usability, information architecture, workflow design, and product reasoning.

#### Scenario: Visitor opens Design
- **WHEN** a visitor opens `/design`
- **THEN** the page renders the Design intro and current or successor design content sections from the Design data model

#### Scenario: Visitor scans Design evidence
- **WHEN** a visitor scans Design project cards
- **THEN** the cards prioritise design/product evidence over technology stack details

### Requirement: Development page describes frontend and technical work
The Development page SHALL preserve technical credibility through frontend implementation, API-aware interfaces, backend/software engineering foundations, testing, maintainability, architecture, integration, technical trade-offs, and AI-assisted development workflow.

#### Scenario: Visitor opens Development
- **WHEN** a visitor opens `/development`
- **THEN** the page renders the Development intro and current or successor development content sections from the Development data model

#### Scenario: Visitor scans Development evidence
- **WHEN** a visitor scans Development project cards
- **THEN** the cards prioritise implementation evidence, architecture, integration, testing, maintainability, and technical trade-offs

### Requirement: Contact page uses contact configuration data
The Contact page SHALL use contact data for intro copy, CV href, social links, Formspree endpoint configuration, and a short positioning statement that Gus is open to UX Engineer, Technical Product Designer, Product-minded Frontend Developer, and AI/Product workflow roles.

#### Scenario: Visitor opens Contact
- **WHEN** a visitor opens `/contact`
- **THEN** the page renders contact intro copy, Download CV, GitHub, LinkedIn, the contact form, and role-direction messaging using configured contact data

### Requirement: Repeated content renders from arrays
Repeated portfolio content SHALL render from arrays where modeled, including process steps, focus pills, project cards, case study cards, tool groups, credential items, social links, implementation areas, skill clusters, design methods, platform/context tags, tech stack tags, tooling tags, and project detail sections.

#### Scenario: A list-backed section renders
- **WHEN** a list-backed section such as Tools & Stack, Tools & Methods, Design project cards, or Development project cards renders
- **THEN** each visible item is produced from the corresponding data array

## ADDED Requirements

### Requirement: Design project cards use product evidence fields
Design project cards SHALL support project title, short description, problem or context summary, platform/context tags, design methods used where relevant, optional tools, and click-through metadata for deeper case-study content.

#### Scenario: Design card renders Customer and Account Management Platform
- **WHEN** the Customer and Account Management Platform appears as a Design card
- **THEN** it is framed around user flows, CRUD journeys, wireframes, page-to-page navigation, interface states, responsive UI, feedback, and implementation-aware design

#### Scenario: Design card renders AI-Enabled Sales Assistant
- **WHEN** the AI-Enabled Sales Assistant appears as a Design card
- **THEN** it is framed around AI workflow design, meeting preparation, discovery, follow-up, MEDDPICC/SPIN guided flows, usability, workflow clarity, and enterprise delivery

#### Scenario: Design card renders Portfolio Website
- **WHEN** the Portfolio Website appears as a Design card
- **THEN** it is framed around information architecture, recruiter scanning behaviour, visual system, contact flow, dark/light theme, and AI-assisted iteration with human ownership

### Requirement: Design card taxonomy supports context, methods, and tools
Design project cards SHALL support platform/context tags such as Web, Mobile, Desktop, Responsive Web, Internal Tool, AI Workflow, Enterprise Workflow, Dashboard, Assistant, and Prototype; design method tags such as user flows, wireframes, prototyping, interaction design, journey mapping, information architecture, usability feedback, and workflow design; and optional tool tags such as Figma, Miro, Microsoft Copilot Studio, Azure AI Foundry, and Azure DevOps.

#### Scenario: Design card tags render
- **WHEN** a Design card includes context, method, or tool tags
- **THEN** the tags communicate design evidence and context before implementation stack

### Requirement: Development project cards use technical evidence fields
Development project cards SHALL support project title, short description, technical problem or implementation summary, tech stack tags, tooling tags, and click-through metadata for deeper technical project content.

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
Project detail pages or detail views SHALL support overview, context, problem, goals, process, decisions, constraints, tools/platforms or tech stack, outcome or learning, and links where available.

#### Scenario: Design detail content renders
- **WHEN** a Design project detail page or detail view renders
- **THEN** it emphasises product thinking, user journey, decisions, flows, usability, research, information architecture, and workflow clarity

#### Scenario: Development detail content renders
- **WHEN** a Development project detail page or detail view renders
- **THEN** it emphasises architecture, implementation, integration, testing, maintainability, and technical trade-offs

### Requirement: Content avoids unsupported claims
Portfolio content MUST NOT invent metrics, employers, seniority, case studies, achievements, or outcomes beyond the supplied evidence.

#### Scenario: Project copy is drafted
- **WHEN** project copy, card descriptions, or detail content are drafted from CV-derived evidence
- **THEN** they remain concise, public, credible, and evidence-backed without directly pasting CV bullet points

