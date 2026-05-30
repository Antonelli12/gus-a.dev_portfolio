# portfolio-structure-navigation Specification

## Purpose
TBD - created by archiving change document-portfolio-baseline. Update Purpose after archive.
## Requirements
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

### Requirement: Header remains shared across pages
The site SHALL use a shared sticky header containing the theme toggle on the left and centered main navigation links.

#### Scenario: Visitor scrolls a content page
- **WHEN** a visitor scrolls on About, Design, Development, or Contact
- **THEN** the header remains sticky at the top with theme-aware border, background, shadow, and backdrop blur

### Requirement: Navigation is driven by the shared navigation model
The main navigation SHALL be generated from `mainNavigation` and include Home, About, Design, Development, and Contact links in that order.

#### Scenario: Navigation renders
- **WHEN** the shared navigation component renders
- **THEN** it displays the five configured links from the shared navigation model

### Requirement: Navigation indicates the active route
The navigation SHALL mark the current page with `aria-current="page"` and active styling. The Home link SHALL be active only on `/`, while non-home links SHALL be active when the current pathname starts with their href.

#### Scenario: Development page is active
- **WHEN** the current pathname is `/development`
- **THEN** the Development link is marked as the current page and receives active visual treatment

#### Scenario: Home page is active
- **WHEN** the current pathname is `/`
- **THEN** the Home link is marked as the current page and the other links are not marked active

### Requirement: Page responsibilities remain distinct
Each route page SHALL stay responsible for composing the shared header with its route-specific section, while section components SHALL own the page content layout and presentation. Home SHALL act as the landing page and positioning summary; About SHALL explain the transition and working style; Design SHALL become the main UX/product evidence page; Development SHALL preserve technical credibility; Contact SHALL support conversion.

#### Scenario: Design route renders
- **WHEN** `/design` is rendered
- **THEN** the route page composes `SiteHeader` and `DesignSection` without embedding design page content directly in the route file

#### Scenario: Visitor chooses where to go next
- **WHEN** a visitor scans the Home page
- **THEN** the route responsibilities guide them toward Design work, Development work, About context, or Contact

### Requirement: Implementation stack remains stable
Future implementation SHALL preserve the current Next.js, React, TypeScript, and Tailwind CSS stack unless a separate approved OpenSpec change proposes and accepts a stack change.

#### Scenario: Existing page components or content modules are changed
- **WHEN** Home, About, Design, Development, Contact, shared header, shared tool icons, or not-found UI are updated
- **THEN** they continue to use the current Next.js, React, TypeScript, and Tailwind CSS stack

### Requirement: Design and Development pages remain complementary
The Design and Development pages SHALL feel like parallel evidence pages with similar layout structure, visual rhythm, and project-card affordances while preserving distinct evidence priorities.

#### Scenario: Visitor compares Design and Development pages
- **WHEN** a visitor moves between `/design` and `/development`
- **THEN** the pages feel related in structure and rhythm while Design prioritises product/design reasoning and Development prioritises implementation evidence

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

### Requirement: Detail route approach is evaluated before implementation
Future implementation SHALL evaluate dedicated routes such as `/design/[slug]` and `/development/[slug]` against a reusable detail view pattern before building project detail content.

#### Scenario: Detail implementation is proposed
- **WHEN** a future change proposes card click-through behaviour
- **THEN** it documents why dedicated routes or a reusable detail view pattern is the better fit for the available content depth

### Requirement: Repositioning and polish preserves the route set
The portfolio repositioning and polish pass SHALL preserve the existing route set and navigation model: `/`, `/about`, `/design`, `/development`, and `/contact`.

#### Scenario: Visitor navigates after repositioning and polish
- **WHEN** the implementation is complete
- **THEN** existing top-level navigation links continue to point to the same routes

### Requirement: Repositioning and polish preserves the shared site shell
The portfolio repositioning and polish pass SHALL preserve the shared root layout, fixed site background, shared sticky header, theme toggle, and main navigation structure while allowing responsive spacing/layout refinements.

#### Scenario: Visitor opens any existing top-level page
- **WHEN** `/`, `/about`, `/design`, `/development`, or `/contact` renders
- **THEN** the page still renders through the shared layout and header system

### Requirement: Header supports distinct wider-screen and phone layouts
The shared header SHALL keep normal single-row navigation on desktop and reasonable tablet widths and use compact two-row navigation only for phone-sized screens.

#### Scenario: Visitor uses wider navigation
- **WHEN** there is enough width for the normal header
- **THEN** the header shows the theme toggle at the left and navigation links in one row

#### Scenario: Visitor uses phone navigation
- **WHEN** the screen is phone-sized
- **THEN** the header wraps into the documented compact two-row layout without changing route destinations

### Requirement: Custom not-found preserves recovery without changing route model
The custom not-found experience SHALL provide a Return home action without adding a new top-level navigation destination.

#### Scenario: Visitor reaches an unknown URL
- **WHEN** the not-found experience renders
- **THEN** it uses the existing visual system and provides a link back to `/`

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

