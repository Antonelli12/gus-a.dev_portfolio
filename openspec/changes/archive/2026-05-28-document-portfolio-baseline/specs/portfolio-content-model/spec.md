## ADDED Requirements

### Requirement: Portfolio copy is primarily data-driven
The portfolio SHALL keep most page copy, repeated list data, case study data, project data, social links, CV URL, and contact form configuration in `data/*.ts` modules.

#### Scenario: Design case studies render
- **WHEN** `DesignSection` renders featured case studies
- **THEN** case study cards are generated from `featuredCaseStudies.items` rather than being independently hard-coded per card

### Requirement: Home page introduces Gus and primary work paths
The home page SHALL present the animated greeting for Gus and provide primary calls to view design work and development work.

#### Scenario: Visitor lands on home
- **WHEN** a visitor opens `/`
- **THEN** the page presents the typed greeting experience and links to `/design` and `/development`

### Requirement: About page describes Gus's professional transition
The About page SHALL present Gus as a developer moving toward UX and product design, including origin story, developer-to-designer framing, process, technical foundation, and learning credentials.

#### Scenario: Visitor opens About
- **WHEN** a visitor opens `/about`
- **THEN** the page renders the About intro and the five current About content blocks from the About data model

### Requirement: Design page describes design direction and case studies
The Design page SHALL present the design side of the portfolio, including design direction, featured case studies, design process, research decisions, and tools/methods.

#### Scenario: Visitor opens Design
- **WHEN** a visitor opens `/design`
- **THEN** the page renders the Design intro and current design content sections from the Design data model

### Requirement: Development page describes frontend and technical work
The Development page SHALL present the development side of the portfolio, including development direction, frontend implementation areas, API integration, design systems/components, technical projects, and tools/stack.

#### Scenario: Visitor opens Development
- **WHEN** a visitor opens `/development`
- **THEN** the page renders the Development intro and current development content sections from the Development data model

### Requirement: Contact page uses contact configuration data
The Contact page SHALL use contact data for intro copy, CV href, social links, and Formspree endpoint configuration, while rendering the current visible "Let's connect." heading from the section component.

#### Scenario: Visitor opens Contact
- **WHEN** a visitor opens `/contact`
- **THEN** the page renders contact intro copy, Download CV, GitHub, LinkedIn, and the contact form using the configured contact data

### Requirement: Repeated content renders from arrays
Repeated portfolio content SHALL render from arrays where currently modeled, including process steps, focus pills, project cards, case study cards, tool groups, credential items, social links, and implementation areas.

#### Scenario: A list-backed section renders
- **WHEN** a list-backed section such as Tools & Stack or Tools & Methods renders
- **THEN** each visible item is produced from the corresponding data array

