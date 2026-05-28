## MODIFIED Requirements

### Requirement: App Router pages expose the current portfolio routes
The portfolio SHALL preserve the core Next.js App Router page set: `/`, `/about`, `/design`, `/development`, and `/contact`. Future implementation MAY add project detail access through dedicated routes such as `/design/[slug]` and `/development/[slug]`, or through a reusable detail view pattern, after evaluating the content and sharing needs.

#### Scenario: Visitor opens a top-level route
- **WHEN** a visitor navigates directly to `/about`, `/design`, `/development`, or `/contact`
- **THEN** the matching page renders the shared site header and the page-specific section for that route

#### Scenario: Visitor opens the home route
- **WHEN** a visitor navigates directly to `/`
- **THEN** the home page renders the shared site header and the home hero section

#### Scenario: Future detail route strategy is selected
- **WHEN** project click-through content is implemented
- **THEN** the implementation preserves the five core routes and uses either dedicated project routes or a reusable detail view pattern

### Requirement: Page responsibilities remain distinct
Each route page SHALL stay responsible for composing the shared header with its route-specific section, while section components SHALL own the page content layout and presentation. Home SHALL act as the landing page and positioning summary; About SHALL explain the transition and working style; Design SHALL become the main UX/product evidence page; Development SHALL preserve technical credibility; Contact SHALL support conversion.

#### Scenario: Design route renders
- **WHEN** `/design` is rendered
- **THEN** the route page composes `SiteHeader` and `DesignSection` without embedding design page content directly in the route file

#### Scenario: Visitor chooses where to go next
- **WHEN** a visitor scans the Home page
- **THEN** the route responsibilities guide them toward Design work, Development work, About context, or Contact

## ADDED Requirements

### Requirement: Implementation stack remains stable
Future implementation SHALL preserve the current Next.js, React, TypeScript, and Tailwind CSS stack unless a separate approved OpenSpec change proposes and accepts a stack change.

#### Scenario: Future implementation is proposed
- **WHEN** a future change proposes page rewrites, component changes, project cards, or detail views
- **THEN** it uses the current Next.js, React, TypeScript, and Tailwind CSS stack unless a separate approved OpenSpec change changes that stack

### Requirement: Design and Development pages remain complementary
The Design and Development pages SHALL feel like parallel evidence pages with similar layout structure, visual rhythm, and project-card affordances while preserving distinct evidence priorities.

#### Scenario: Visitor compares Design and Development pages
- **WHEN** a visitor moves between `/design` and `/development`
- **THEN** the pages feel related in structure and rhythm while Design prioritises product/design reasoning and Development prioritises implementation evidence

### Requirement: Project detail access supports deeper evidence
Project cards on Design and Development SHALL support click-through access to deeper content through dedicated routes or a reusable detail view pattern.

#### Scenario: Visitor opens a project card
- **WHEN** a visitor activates a Design or Development project card
- **THEN** the site can present deeper project content without losing the page's Design or Development context

### Requirement: Detail route approach is evaluated before implementation
Future implementation SHALL evaluate dedicated routes such as `/design/[slug]` and `/development/[slug]` against a reusable detail view pattern before building project detail content.

#### Scenario: Detail implementation is proposed
- **WHEN** a future change proposes card click-through behaviour
- **THEN** it documents why dedicated routes or a reusable detail view pattern is the better fit for the available content depth
