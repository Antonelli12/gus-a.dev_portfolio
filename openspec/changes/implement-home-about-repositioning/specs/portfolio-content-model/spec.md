## MODIFIED Requirements

### Requirement: Portfolio copy is primarily data-driven
The portfolio SHALL keep most page copy, repeated list data, case study data, project data, social links, CV URL, contact form configuration, typed hero phrases, tool/method data, and repositioning/polish copy in `data/*.ts` modules or equivalent typed content structures.

#### Scenario: Design case studies render
- **WHEN** `DesignSection` renders featured case studies
- **THEN** case study cards are generated from `featuredCaseStudies.items` rather than being independently hard-coded per card

#### Scenario: Tool and stack sections render
- **WHEN** Design or Development renders tools, methods, stack, or workflow lists
- **THEN** the visible items are generated from maintainable data or structured content and can include icon metadata where useful

#### Scenario: Home, About, and Contact repositioning copy renders
- **WHEN** Home, About, or Contact renders repositioned copy
- **THEN** the copy is sourced from maintainable typed data or clearly structured content constants rather than scattered through unrelated layout logic

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
The About page SHALL explain Gus's transition from software engineering into UX/product design and SHALL preserve technical depth, education, working style, and disciplined AI-compatible workflow habits.

#### Scenario: Visitor opens About
- **WHEN** a visitor opens `/about`
- **THEN** the page renders transition-focused About content from the About data model

#### Scenario: Visitor evaluates credibility
- **WHEN** a visitor reads About content
- **THEN** the page makes clear that Gus has not abandoned engineering and uses technical credibility to strengthen design work

#### Scenario: Visitor scans working style
- **WHEN** a visitor scans About for how Gus works
- **THEN** the page communicates problem-first thinking, clarity, implementation awareness, human review, and edge-case thinking without sounding like a generic process checklist

### Requirement: Design and Development pages act as complementary evidence pages
The Design and Development pages SHALL support the repositioning by presenting complementary evidence: Design foregrounds UX/product thinking and Development foregrounds implementation, architecture, integration, testing, maintainability, and practical constraints.

#### Scenario: Visitor compares evidence pages
- **WHEN** a visitor moves between `/design` and `/development`
- **THEN** the pages feel related in structure and visual rhythm while keeping distinct Design and Development responsibilities

#### Scenario: Visitor reads Design page
- **WHEN** a visitor opens `/design`
- **THEN** the page emphasises clarity, empathy, reduced confusion, user goals, methods, tools, and design/product case-study framing

#### Scenario: Visitor reads Development page
- **WHEN** a visitor opens `/development`
- **THEN** the page emphasises making design work in real conditions, including forms, state, data, validation, responsiveness, edge cases, reusable patterns, APIs, and maintainability

### Requirement: Contact page supports conversion without generic link pills
The Contact page SHALL keep direct contact copy, accessible GitHub and LinkedIn icon links, the existing contact form flow, and a Download CV CTA placed with the form actions.

#### Scenario: Visitor opens Contact
- **WHEN** a visitor opens `/contact`
- **THEN** the intro invites collaboration or connection in direct human language

#### Scenario: Visitor scans Contact actions
- **WHEN** a visitor scans Contact actions
- **THEN** social destinations are available as accessible icon links and Download CV appears as a stronger CTA inside the contact form/card area

## ADDED Requirements

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
