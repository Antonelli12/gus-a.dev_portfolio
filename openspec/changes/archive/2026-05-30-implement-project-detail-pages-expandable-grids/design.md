## Context

The current portfolio is a Next.js App Router site with five top-level routes, shared header/theme/background systems, and data-driven Design and Development project cards. The archived specs already require honest project destinations and route-specific metadata. Current cards support external/unavailable destinations, but they do not yet have a full detail content model, route-based detail pages, or expandable grids for future project growth.

The current browser-tab titles also need tightening. The Home tab currently follows the positioning copy rather than the requested portfolio label, while route pages should use a consistent `Page | Gustavo Antonelli` pattern.

## Goals / Non-Goals

**Goals:**

- Add route/data/component infrastructure for route-based detail-page support and use it only for projects with enough real, specific content.
- Keep the Design and Development overview pages as the primary evidence pages.
- Make project data future-proof with slugs, ordering, destinations, tags/tools/platforms, and optional detail sections.
- Show only the first 3 featured cards by default and reveal additional cards only when data grows beyond 3 items.
- Keep the current three Design and three Development cards visible by default.
- Keep card destinations honest: internal detail route only when useful detail content exists, verified external URL when available, otherwise `Details Coming Soon`.
- Fix browser tab titles while preserving descriptions and OpenGraph/Twitter wording where appropriate.

**Non-Goals:**

- Do not redesign the site, add a footer, rename top-level routes, change the stack, or change the theme system.
- Do not invent project outcomes, metrics, research findings, user testing results, repositories, screenshots, employers/clients, implementation details, or case-study claims.
- Do not create fake or thin placeholder internal detail pages for cards that do not have reliable detail content.
- Do not create new projects.
- Do not make broad copy rewrites outside the data model, card/detail content, expandable controls, and metadata title fields required for this change.

## Decisions

### 1. Use route-based detail pages

Use dedicated App Router dynamic routes:

- `app/design/[slug]/page.tsx`
- `app/development/[slug]/page.tsx`

These routes make individual projects shareable for recruiters and keep future detail content compatible with standard browser navigation, metadata, and direct links. The route infrastructure may exist before every project has a detail page, but cards should link to internal detail pages only when their data has enough real, specific detail content. Each rendered detail route should use sensible metadata based on the project title and section, render through the shared header and visual system, and include a clear return link back to `/design` or `/development`.

Alternatives considered:

- **Modal/detail drawer:** faster to add, but weaker for sharing and less useful for recruiters opening specific work.
- **Single catch-all detail route:** simpler routing, but it blurs Design vs Development context and weakens metadata clarity.

### 2. Gate detail routes through reliable data

Route files may exist even if only a subset of projects has detail content. A project should link internally only when its data record explicitly marks a detail route as available and provides meaningful detail sections. If a visitor manually opens an unknown or unavailable slug, the route should render clear not-found behavior rather than a fake detail page.

The current Portfolio Website card may keep using the verified GitHub repository if no internal detail page is created in this change. Other cards should remain `Details Coming Soon` unless a verified destination or reliable detail content already exists.

### 3. Use a shared project detail content model

Create or evolve a shared typed model that can support both Design and Development evidence while preserving each page's emphasis. A practical shape should include:

- `slug`
- `featuredOrder`
- `title`
- `status`
- `summary`
- `description`
- `cardTags` / `focus`
- `tools`
- `platforms`
- `destination`
- `detail`

The `detail` object should support `available`, `route`, `overview`, typed sections, tools/platforms or stack, links, and return-link metadata. Design detail sections should support overview, context, problem, user goals, process, user flows/journey decisions, design decisions, constraints, tools/platforms, outcome or learning, and links where available. Development detail sections should support overview, context, technical problem, implementation approach, architecture/data/API integration, testing or validation, constraints, trade-offs, tech stack/tools, outcome or learning, and links where available. These fields are a content structure, not permission to fabricate content; detail sections must be based on existing repo data, current portfolio content, verified links, or content explicitly provided by Gus.

### 4. Keep card actions explicit

Cards should remain `article` surfaces with an explicit action/control area rather than making the whole card clickable. This keeps destinations accessible, avoids nested interactive elements, and keeps inactive states visibly non-clickable.

Destination behavior:

- Internal detail available: render an internal `Link` to the detail route.
- Verified external URL available: render an external anchor with `target="_blank"` and `rel="noopener noreferrer"`.
- No verified destination: render non-clickable `Details Coming Soon`.

The inactive label should be consistent across Design and Development for this change.

### 5. Add reusable expandable grid behavior

Use client-side state for the grid only, not route state. A small reusable wrapper/hook can accept all items, a default visible count of 3, and labels:

- Design: `See more case studies` / `Collapse case studies`
- Development: `See more projects` / `Collapse projects`

The control should render only when there are more than 3 items. Because the current Design and Development pages each have three cards, the control should probably not appear immediately after this change. The button should expose `aria-expanded`, remain keyboard-usable, and avoid changing the current cards when there are exactly 3 items.

### 6. Fix tab titles without broad metadata rewrites

Adjust title fields so browser tab labels resolve to:

- `/`: `Gus' Portfolio`
- `/about`: `About | Gustavo Antonelli`
- `/design`: `Design | Gustavo Antonelli`
- `/development`: `Development | Gustavo Antonelli`
- `/contact`: `Contact | Gustavo Antonelli`

Keep existing route descriptions and OpenGraph/Twitter descriptions where appropriate. Detail pages should also have useful route metadata when available, but this change should avoid unsupported claims.

## Risks / Trade-offs

- **Risk: Detail route infrastructure creates empty-looking pages.** → Mitigation: only link to and statically generate detail pages for records with reliable detail content.
- **Risk: Infrastructure makes every current card look clickable before the content is ready.** → Mitigation: keep current cards on `Details Coming Soon` unless there is a verified external destination or enough real internal detail content.
- **Risk: The data model becomes too abstract.** → Mitigation: keep the model close to existing Design and Development card data and add only fields needed for destinations, ordering, expansion, and details.
- **Risk: "See more" appears unnecessarily with the current three-card pages.** → Mitigation: render the control only when item count is greater than 3.
- **Risk: Browser title fixes accidentally rewrite social metadata.** → Mitigation: change title fields deliberately and preserve descriptions/OG/Twitter copy unless a title must match the browser-tab pattern.
- **Risk: Internal links create invalid nested interactive elements.** → Mitigation: use explicit card action links/buttons inside non-clickable `article` cards.
