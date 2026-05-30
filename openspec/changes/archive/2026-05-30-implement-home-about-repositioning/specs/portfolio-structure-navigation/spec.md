## MODIFIED Requirements

### Requirement: Implementation stack remains stable
Future implementation SHALL preserve the current Next.js, React, TypeScript, and Tailwind CSS stack unless a separate approved OpenSpec change proposes and accepts a stack change.

#### Scenario: Existing page components or content modules are changed
- **WHEN** Home, About, Design, Development, Contact, shared header, shared tool icons, or not-found UI are updated
- **THEN** they continue to use the current Next.js, React, TypeScript, and Tailwind CSS stack

## ADDED Requirements

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
