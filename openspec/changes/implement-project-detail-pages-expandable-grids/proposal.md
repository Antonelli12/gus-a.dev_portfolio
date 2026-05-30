## Why

The portfolio needs a scalable way to deepen project evidence without crowding the Design and Development overview pages. Route-based detail pages, expandable project grids, and consistent browser-tab titles will make the work easier to scan, share, and grow as more reliable project content becomes available.

## What Changes

- Add support for internal route/data/component infrastructure for route-based detail pages:
  - Design case studies at `/design/[slug]`
  - Development projects at `/development/[slug]`
- Link individual project cards to internal detail pages only when that project has enough real, specific detail content to make the page useful.
- Extend the project/case-study data model to support slugs, featured ordering, destination type, verified external URLs, detail-route availability, summary card content, status, tools/tags/platforms, and structured detail sections.
- Keep the current three Design cards and three Development cards visible by default.
- Add expandable project/case-study grid behavior:
  - show the first 3 featured items by default;
  - render a "See more" / "Collapse" control only when more than 3 items exist;
  - use Design-specific labels for case studies and Development-specific labels for projects;
  - keep expanded state keyboard-accessible with button semantics and `aria-expanded`.
- Preserve honest destination behavior:
  - use internal detail routes only when reliable detail content exists;
  - use verified external URLs, such as the current Portfolio Website GitHub repository, where appropriate;
  - use the non-clickable inactive state "Details Coming Soon" when no verified destination exists;
  - do not create thin placeholder detail pages just to make every card clickable;
  - do not create placeholder repositories, fake links, unsupported routes, project outcomes, metrics, research findings, user testing results, screenshots, employers/clients, implementation details, or case-study claims.
- Preserve current-card behavior:
  - Portfolio Website may link to the verified GitHub repository unless a real internal detail page is created with enough content;
  - other current cards link internally only if the implementation has enough real detail content;
  - otherwise cards use `Details Coming Soon`.
- Fix browser tab title consistency:
  - Home title: `Gus' Portfolio`
  - Main route titles: `About | Gustavo Antonelli`, `Design | Gustavo Antonelli`, `Development | Gustavo Antonelli`, `Contact | Gustavo Antonelli`
  - keep existing route descriptions and OpenGraph/Twitter descriptions where appropriate, only adjusting title fields as needed.
- Keep the CRT/pixel visual identity, theme system, shared header, responsive layout, current stack, and data-driven content approach.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `portfolio-content-model`: Project/card data and detail content models gain slugs, destination types, featured ordering, detail sections, verified links, and consistent inactive destination wording.
- `portfolio-structure-navigation`: Route-based detail pages, return paths, metadata title consistency, and top-level route preservation are clarified.
- `portfolio-interactions-known-issues`: Project-card destination behavior and expandable/collapsible grid interaction are refined.
- `portfolio-visual-theme`: Detail pages, card actions, inactive states, and expandable controls preserve the existing CRT/pixel visual language.

## Impact

- Expected implementation areas include `data/design.ts`, `data/development.ts`, project destination types, Design/Development card grids, shared detail-page components or helpers, optional App Router dynamic route infrastructure under `app/design/[slug]` and `app/development/[slug]`, and route metadata data.
- No dependency changes, top-level route changes, footer, broad redesign, or invented project evidence are expected.
