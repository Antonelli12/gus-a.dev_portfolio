## 1. Pre-Implementation Review

- [x] 1.1 Inspect `git status --short` and note any unrelated modified or untracked files before editing.
- [x] 1.2 Review current Design and Development data, card components, destination component, metadata data, route files, shared header, and not-found behavior.
- [x] 1.3 Confirm the change starts from the archived specs and does not depend on unapproved implementation assumptions.

## 2. Project Data Model

- [x] 2.1 Define or update shared TypeScript types for project/case-study records, destinations, detail availability, detail sections, links, tags/tools/platforms, status, slug, and featured order.
- [x] 2.2 Add `slug` and `featuredOrder` to the current three Design cards and three Development cards.
- [x] 2.3 Normalize unavailable card destinations across Design and Development to the exact inactive label `Details Coming Soon`.
- [x] 2.4 Keep the Portfolio Website/Portfolio Rebuild verified GitHub destination only where already verified.
- [x] 2.5 Do not add unverified repository links, external URLs, internal detail routes, project outcomes, metrics, research findings, user testing results, screenshots, employers/clients, implementation details, or case-study claims.

## 3. Detail Content Readiness

- [x] 3.1 Add detail-content fields that can support Design sections: overview, context, problem, user goals, process, user flows/journey decisions, design decisions, constraints, tools/platforms, outcome or learning, and links where available.
- [x] 3.2 Add detail-content fields that can support Development sections: overview, context, technical problem, implementation approach, architecture/data/API integration, testing or validation, constraints, trade-offs, tech stack/tools, outcome or learning, and links where available.
- [x] 3.3 Mark detail routes as available only for records with reliable detail content.
- [x] 3.4 Leave current records without reliable detail content on `Details Coming Soon` rather than creating fake detail pages.
- [x] 3.5 Confirm any detail content used is based only on existing repo data, known portfolio content, verified links, or content explicitly provided by Gus.
- [x] 3.6 Do not create thin placeholder detail pages just to make every current card clickable.

## 4. Route-Based Detail Pages

- [x] 4.1 Add `app/design/[slug]/page.tsx` for available Design detail records.
- [x] 4.2 Add `app/development/[slug]/page.tsx` for available Development detail records.
- [x] 4.3 Use route params to look up detail records by slug and render `notFound()` for missing or unavailable detail records.
- [x] 4.4 Add `generateStaticParams` for available detail records where appropriate.
- [x] 4.5 Add sensible detail-page metadata based on project title and Design/Development section without unsupported claims.
- [x] 4.6 Include a clear return link back to `/design` or `/development` on detail pages.
- [x] 4.7 Preserve the shared site header and current visual identity on any implemented detail page.

## 5. Detail Page UI

- [x] 5.1 Build shared detail-page rendering helpers or components that preserve the CRT/pixel visual identity and theme-aware surfaces.
- [x] 5.2 Render Design detail pages with product/design emphasis.
- [x] 5.3 Render Development detail pages with implementation/technical emphasis.
- [x] 5.4 Preserve the shared header, background, responsive layout, keyboard navigation, and accessible link labels.

## 6. Project Card Destination Behavior

- [x] 6.1 Update Design and Development cards to link to internal detail routes only when enough real, specific detail content exists.
- [x] 6.2 Keep verified external destinations using safe `target="_blank"` and `rel="noopener noreferrer"` behavior.
- [x] 6.3 Render `Details Coming Soon` as a non-clickable quieter state when no verified destination exists.
- [x] 6.4 Avoid invalid nested interactive elements by keeping cards as non-clickable `article` surfaces with explicit action areas.
- [x] 6.5 Ensure linked card actions expose accessible names that identify the project and destination.
- [x] 6.6 Keep current non-Portfolio Website cards on `Details Coming Soon` unless enough real internal detail content is available.

## 7. Expandable Grids

- [x] 7.1 Add reusable expandable grid behavior that shows the first 3 featured records by default.
- [x] 7.2 Render no expand/collapse control when there are 3 or fewer records.
- [x] 7.3 Add Design labels: `See more case studies` and `Collapse case studies`.
- [x] 7.4 Add Development labels: `See more projects` and `Collapse projects`.
- [x] 7.5 Use a real button with `aria-expanded` for the expand/collapse control.
- [x] 7.6 Preserve current visible cards and card alignment on the existing three-card pages.

## 8. Browser Tab Titles and Metadata

- [x] 8.1 Update Home browser tab title to `Gus' Portfolio`.
- [x] 8.2 Ensure main route browser tab titles resolve to `About | Gustavo Antonelli`, `Design | Gustavo Antonelli`, `Development | Gustavo Antonelli`, and `Contact | Gustavo Antonelli`.
- [x] 8.3 Preserve existing route-level descriptions and OpenGraph/Twitter descriptions where appropriate.
- [x] 8.4 Avoid truncated or inconsistent browser titles such as `Developer Turned Designer`.

## 9. Validation

- [x] 9.1 Run `openspec validate implement-project-detail-pages-expandable-grids --strict`.
- [x] 9.2 Run `npm run lint`.
- [x] 9.3 Run `npm run build`.
- [x] 9.4 Inspect generated route output or build output to confirm top-level routes and any available detail routes build correctly.
- [x] 9.5 Verify current Design and Development pages still show three cards by default and no See more control with only three records.
- [x] 9.6 Report exactly which files changed, whether detail pages were linked or left inactive, validation results, and confirm no commit was made.
