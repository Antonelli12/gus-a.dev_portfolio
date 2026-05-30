## MODIFIED Requirements

### Requirement: App Router pages expose the current portfolio routes
The portfolio SHALL preserve the core Next.js App Router page set: `/`, `/about`, `/design`, `/development`, and `/contact`. Future implementation MAY add project detail access through dedicated routes such as `/design/[slug]` and `/development/[slug]`, or through a reusable detail view pattern, after evaluating the content and sharing needs. This change SHALL NOT add full project detail pages unless reliable content already exists and the implementation explicitly remains within this proposal's scope, and it SHALL NOT create unsupported internal routes as placeholder destinations.

#### Scenario: Visitor opens a top-level route
- **WHEN** a visitor navigates directly to `/about`, `/design`, `/development`, or `/contact`
- **THEN** the matching page renders the shared site header and the page-specific section for that route

#### Scenario: Visitor opens the home route
- **WHEN** a visitor navigates directly to `/`
- **THEN** the home page renders the shared site header and the home hero section

#### Scenario: Future detail route strategy is selected
- **WHEN** project click-through content is implemented
- **THEN** the implementation preserves the five core routes and uses either dedicated project routes or a reusable detail view pattern

#### Scenario: This change handles project destinations
- **WHEN** this change improves project-card destination behavior
- **THEN** it preserves the existing top-level routes and avoids adding unsupported project detail routes or placeholder internal links

### Requirement: Root layout owns the global site shell
The root layout SHALL provide global metadata defaults, import global styles, apply the body font, initialize theme state before hydration, render the fixed site background, and place page content above that background. Application-readiness polish SHALL review and improve title, description, OpenGraph/social sharing, and favicon/site identity where appropriate.

#### Scenario: Any route renders through the root layout
- **WHEN** any portfolio route is rendered
- **THEN** the page uses the global background, theme-aware body colors, and shared document metadata from the root layout

#### Scenario: Portfolio link is shared
- **WHEN** the portfolio URL is shared in a social or recruiter-facing context
- **THEN** metadata presents Gus's developer-turned-designer positioning clearly without unsupported claims

#### Scenario: A page provides route-specific metadata
- **WHEN** a main route defines page-specific metadata
- **THEN** it works with the root metadata defaults rather than replacing the shared site shell

### Requirement: Project detail access supports deeper evidence
Project cards on Design and Development SHALL support click-through access only when an existing internal detail destination, verified GitHub repository, or verified external URL is available; otherwise they SHALL use an honest unavailable state or remain non-clickable.

#### Scenario: Visitor opens a project card
- **WHEN** a visitor activates a Design or Development project card with a real internal detail destination
- **THEN** the site can present deeper project content without losing the page's Design or Development context

#### Scenario: Visitor opens an external project destination
- **WHEN** a visitor activates a Design or Development project card with a verified external destination
- **THEN** the site opens or navigates to that destination using safe link behavior and clear accessible naming

#### Scenario: Project destination is unavailable
- **WHEN** a project lacks reliable internal detail content or an external destination
- **THEN** the site preserves the card as evidence without creating a fake route, placeholder link, or misleading click-through affordance

## ADDED Requirements

### Requirement: Main routes expose page-specific metadata
Each main route SHALL expose page-specific title and description metadata that matches the route's responsibility and current portfolio positioning. OpenGraph and Twitter metadata SHALL be provided or inherited where appropriate.

#### Scenario: Home metadata renders
- **WHEN** `/` metadata is evaluated
- **THEN** it presents Gus's developer-turned-designer positioning and current UX engineering/product design direction

#### Scenario: About metadata renders
- **WHEN** `/about` metadata is evaluated
- **THEN** it describes Gus's personal path from software engineering into UX engineering and product design

#### Scenario: Design metadata renders
- **WHEN** `/design` metadata is evaluated
- **THEN** it describes UX/product design work around clarity, empathy, interface decisions, and user experience

#### Scenario: Development metadata renders
- **WHEN** `/development` metadata is evaluated
- **THEN** it describes implementation depth, frontend systems, and making design usable in real product conditions

#### Scenario: Contact metadata renders
- **WHEN** `/contact` metadata is evaluated
- **THEN** it supports contacting Gus, viewing the CV, and reviewing relevant professional links without unsupported claims
