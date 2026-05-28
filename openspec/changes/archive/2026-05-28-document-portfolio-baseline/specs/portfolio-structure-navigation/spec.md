## ADDED Requirements

### Requirement: App Router pages expose the current portfolio routes
The portfolio SHALL expose the current route set through Next.js App Router pages: `/`, `/about`, `/design`, `/development`, and `/contact`.

#### Scenario: Visitor opens a top-level route
- **WHEN** a visitor navigates directly to `/about`, `/design`, `/development`, or `/contact`
- **THEN** the matching page renders the shared site header and the page-specific section for that route

#### Scenario: Visitor opens the home route
- **WHEN** a visitor navigates directly to `/`
- **THEN** the home page renders the shared site header and the home hero section

### Requirement: Root layout owns the global site shell
The root layout SHALL provide global metadata, import global styles, apply the body font, initialize theme state before hydration, render the fixed site background, and place page content above that background.

#### Scenario: Any route renders through the root layout
- **WHEN** any portfolio route is rendered
- **THEN** the page uses the global background, theme-aware body colors, and shared document metadata from the root layout

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
Each route page SHALL stay responsible for composing the shared header with its route-specific section, while section components SHALL own the page content layout and presentation.

#### Scenario: Design route renders
- **WHEN** `/design` is rendered
- **THEN** the route page composes `SiteHeader` and `DesignSection` without embedding design page content directly in the route file

