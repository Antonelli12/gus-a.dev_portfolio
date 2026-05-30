## MODIFIED Requirements

### Requirement: App Router pages expose the current portfolio routes
The portfolio SHALL preserve the core Next.js App Router page set: `/`, `/about`, `/design`, `/development`, and `/contact`. Project detail access SHALL use route-based detail pages at `/design/[slug]` for Design case studies and `/development/[slug]` for Development projects when reliable detail content exists. This change MAY add route/data/component infrastructure for those paths, but it SHALL NOT create unsupported internal routes or thin placeholder detail pages as card destinations.

#### Scenario: Visitor opens a top-level route
- **WHEN** a visitor navigates directly to `/about`, `/design`, `/development`, or `/contact`
- **THEN** the matching page renders the shared site header and the page-specific section for that route

#### Scenario: Visitor opens the home route
- **WHEN** a visitor navigates directly to `/`
- **THEN** the home page renders the shared site header and the home hero section

#### Scenario: Future detail route strategy is selected
- **WHEN** project click-through content is implemented
- **THEN** the implementation preserves the five core routes and uses dedicated project routes for reliable detail content

#### Scenario: This change handles project destinations
- **WHEN** this change improves project-card destination behavior
- **THEN** it preserves the existing top-level routes and avoids adding unsupported project detail routes or placeholder internal links

### Requirement: Project detail access supports deeper evidence
Project cards on Design and Development SHALL support click-through access only when an existing internal detail destination has enough real, specific content, a verified GitHub repository exists, or a verified external URL is available; otherwise they SHALL use the non-clickable "Details Coming Soon" state.

#### Scenario: Visitor opens a project card
- **WHEN** a visitor activates a Design or Development project card with a real internal detail destination
- **THEN** the site presents the detail page at `/design/[slug]` or `/development/[slug]` without losing the page's Design or Development context

#### Scenario: Visitor opens an external project destination
- **WHEN** a visitor activates a Design or Development project card with a verified external destination
- **THEN** the site opens or navigates to that destination using safe link behavior and clear accessible naming

#### Scenario: Project destination is unavailable
- **WHEN** a project lacks reliable internal detail content or an external destination
- **THEN** the site preserves the card as evidence without creating a fake route, placeholder link, or misleading click-through affordance

#### Scenario: Current card destination is evaluated
- **WHEN** a current Design or Development card other than Portfolio Website lacks enough real detail content
- **THEN** it remains non-clickable with "Details Coming Soon" rather than linking to a thin placeholder page

### Requirement: Detail route approach is evaluated before implementation
This implementation SHALL use dedicated route-based detail pages at `/design/[slug]` and `/development/[slug]` because recruiters benefit from shareable project URLs and because Design and Development context should remain distinct.

#### Scenario: Detail implementation is proposed
- **WHEN** this change proposes card click-through behaviour
- **THEN** it documents why dedicated routes are the better fit for available and future detail content

### Requirement: Main routes expose page-specific metadata
Each main route SHALL expose page-specific title and description metadata that matches the route's responsibility and current portfolio positioning. Browser tab titles SHALL follow the approved title pattern. OpenGraph and Twitter metadata SHALL be provided or inherited where appropriate.

#### Scenario: Home metadata renders
- **WHEN** `/` metadata is evaluated
- **THEN** the browser tab title is "Gus' Portfolio" and metadata still presents Gus's developer-turned-designer positioning and current UX engineering/product design direction through descriptions or social metadata

#### Scenario: About metadata renders
- **WHEN** `/about` metadata is evaluated
- **THEN** the browser tab title is "About | Gustavo Antonelli" and the description explains Gus's personal path from software engineering into UX engineering and product design

#### Scenario: Design metadata renders
- **WHEN** `/design` metadata is evaluated
- **THEN** the browser tab title is "Design | Gustavo Antonelli" and the description explains UX/product design work around clarity, empathy, interface decisions, and user experience

#### Scenario: Development metadata renders
- **WHEN** `/development` metadata is evaluated
- **THEN** the browser tab title is "Development | Gustavo Antonelli" and the description explains implementation depth, frontend systems, and making design usable in real product conditions

#### Scenario: Contact metadata renders
- **WHEN** `/contact` metadata is evaluated
- **THEN** the browser tab title is "Contact | Gustavo Antonelli" and the description supports contacting Gus, viewing the CV, and reviewing relevant professional links without unsupported claims

## ADDED Requirements

### Requirement: Detail pages preserve route context and return paths
Project detail pages SHALL preserve whether the visitor is viewing Design or Development evidence and SHALL provide a clear return path to the relevant overview page. Detail pages SHALL expose sensible route metadata based on the project title and section, preserve the shared site header and visual identity, and use clear not-found behavior for invalid or unavailable slugs.

#### Scenario: Design detail page renders
- **WHEN** a visitor opens `/design/[slug]` for an available Design case study
- **THEN** the page renders with the shared header, Design-oriented detail content, and a return link to `/design`

#### Scenario: Development detail page renders
- **WHEN** a visitor opens `/development/[slug]` for an available Development project
- **THEN** the page renders with the shared header, Development-oriented detail content, and a return link to `/development`

#### Scenario: Unavailable detail slug is opened
- **WHEN** a visitor opens a missing slug or a slug whose detail route is not available
- **THEN** the site does not render fake content and instead uses the not-found recovery behavior
