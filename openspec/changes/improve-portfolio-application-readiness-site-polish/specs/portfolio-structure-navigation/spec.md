## MODIFIED Requirements

### Requirement: Root layout owns the global site shell
The root layout SHALL provide global metadata, import global styles, apply the body font, initialize theme state before hydration, render the fixed site background, and place page content above that background. Application-readiness polish SHALL review and improve title, description, OpenGraph/social sharing, and favicon/site identity where appropriate.

#### Scenario: Any route renders through the root layout
- **WHEN** any portfolio route is rendered
- **THEN** the page uses the global background, theme-aware body colors, and shared document metadata from the root layout

#### Scenario: Portfolio link is shared
- **WHEN** the portfolio URL is shared in a social or recruiter-facing context
- **THEN** metadata presents Gus's developer-turned-designer positioning clearly without unsupported claims

### Requirement: Header remains shared across pages
The site SHALL use a shared sticky header containing the theme toggle on the left and centered main navigation links. Header/nav alignment SHALL feel centred relative to the main page content while preserving responsive behaviour.

#### Scenario: Visitor scrolls a content page
- **WHEN** a visitor scrolls on About, Design, Development, or Contact
- **THEN** the header remains sticky at the top with theme-aware border, background, shadow, and backdrop blur

#### Scenario: Visitor compares header and content alignment
- **WHEN** a visitor views a desktop or reasonable tablet-width page
- **THEN** the header content aligns visually with the main content system rather than feeling offset from the page

## ADDED Requirements

### Requirement: Application readiness preserves existing routes
Application-readiness polish SHALL preserve `/`, `/about`, `/design`, `/development`, and `/contact` without adding project detail pages or renaming current routes.

#### Scenario: Visitor navigates after application readiness polish
- **WHEN** the visitor uses the main navigation
- **THEN** the same top-level route destinations remain available

### Requirement: Scaffold assets are removed only when unused
Default scaffold assets SHALL be removed only after code inspection confirms they are not referenced by routes, metadata, icons, images, styles, or public links.

#### Scenario: Default asset cleanup is considered
- **WHEN** a default scaffold asset is found in `public/`
- **THEN** it is deleted only if no application code, metadata, or public link references it
