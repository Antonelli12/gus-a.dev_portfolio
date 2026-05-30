## 1. Pre-Implementation Review

- [x] 1.1 Inspect the current git status and note any unrelated modified or untracked files before editing.
- [x] 1.2 Review `app/layout.tsx`, all main route files, Home hero components, shared header/nav components, About/Design/Development/Contact sections, and related `data/*.ts` files.
- [x] 1.3 Confirm the implementation starts from the current archived specs plus any completed active application-readiness work already present in the repo.

## 2. Metadata and Title Consistency

- [x] 2.1 Add or update route-specific metadata for `/`, `/about`, `/design`, `/development`, and `/contact` using credible titles and descriptions that match each page responsibility.
- [x] 2.2 Add or inherit OpenGraph/Twitter metadata where appropriate without unsupported claims, invented outcomes, or inflated seniority.
- [x] 2.3 Preserve root metadata defaults, metadata base, favicon/site identity, and the shared App Router shell.
- [x] 2.4 Update main hero/page title capitalisation consistently, including Design, Development, About, and Contact, while preserving current highlighted words and typography.

## 3. Home Hero Accessibility and SEO Fallback

- [x] 3.1 Add stable Home hero text to the typed hero content model or nearby structured constants so the fallback remains data-driven.
- [x] 3.2 Ensure the Home hero exposes a meaningful semantic heading or accessible name before, during, and without the typed animation.
- [x] 3.3 Preserve the existing typed CRT/pixel presentation and reduced-motion behavior unless a small accessibility adjustment requires decorative animated fragments to be hidden from assistive technologies.
- [x] 3.4 Verify the Home hero does not expose incomplete typing fragments as the only accessible page title.

## 4. Navigation Accessibility and Responsive Behaviour

- [x] 4.1 Inspect whether desktop and phone navigation structures are both present in the DOM at the same time.
- [x] 4.2 Ensure only the visible navigation variant is keyboard-focusable and exposed to assistive technologies at phone, tablet, desktop, and zoomed widths.
- [x] 4.3 Preserve the current responsive navbar behavior: wider screens use one row; phone screens use the compact two-row arrangement.
- [x] 4.4 Check for horizontal overflow, content overlap, theme-toggle collisions, and poor tap/focus targets in the header.

## 5. About Story Replacement

- [x] 5.1 Replace the current expandable About story with the approved personal story exactly as provided, allowing only tiny grammar, escaping, or JSX/string-formatting adjustments if required.
- [x] 5.2 Keep the story in the existing About data model or an equivalent typed content structure.
- [x] 5.3 Preserve the expandable story interaction if retained, including `aria-expanded`, `aria-controls`, keyboard support, and readable collapsed/expanded states.
- [x] 5.4 Avoid repeated "developer turned designer" wording inside the body copy while preserving the page's overall positioning.

## 6. Contact Conversion Line

- [x] 6.1 Add a separate short Contact intro paragraph stating that Gus is open to UX Engineer, Technical Product Designer, and product-focused frontend roles.
- [x] 6.2 Keep the Contact page uncluttered and preserve the existing form fields, Formspree endpoint, GitHub/LinkedIn links, and Download CV behavior.
- [x] 6.3 Confirm Contact icon links and the Download CV CTA retain clear accessible names.

## 7. Project Card Destination Model

- [x] 7.1 Add a typed, data-driven destination model for Design and Development project cards that can represent existing internal destinations, verified external destinations, and unavailable destinations.
- [x] 7.2 Audit each Design and Development project for a valid internal detail page, GitHub repository, or relevant external URL.
- [x] 7.3 Add only verified destinations; do not invent repositories, case-study pages, placeholder links, unsupported internal routes, project outcomes, employers, metrics, or claims.
- [x] 7.4 Represent projects with no valid destination honestly by keeping the card non-clickable or showing a subtle page-appropriate state such as "Details coming soon" or "Case study coming later".

## 8. Project Card Link Rendering

- [x] 8.1 Render card destinations with accessible names that identify the project and destination.
- [x] 8.2 Use safe external-link behavior, including `target="_blank"` and `rel="noopener noreferrer"`, when a destination opens in a new tab.
- [x] 8.3 Avoid invalid nested interactive elements by using either a single card link around non-interactive content or explicit action links/buttons inside a non-clickable `article`.
- [x] 8.4 Preserve the existing Design/Development visual rhythm, card alignment, mobile readability, and data-driven rendering.

## 9. WCAG-Informed Review and Polish

- [x] 9.1 Review responsive reflow at narrow, tablet, desktop, and zoomed layouts for horizontal overflow, overlap, and unreadable text.
- [x] 9.2 Review keyboard navigation order and visible focus states across header, Home CTAs, project cards, Contact actions, form fields, form submit, and About expansion.
- [x] 9.3 Review form labels, required fields, submitting/success/error feedback, icon accessible names, target size, and spacing.
- [x] 9.4 Make only small accessibility/responsive fixes needed to satisfy the review while preserving the CRT/pixel identity and current routes.

## 10. Validation

- [x] 10.1 Run `openspec validate improve-accessibility-seo-project-links-about-story --strict`.
- [x] 10.2 Run `npm run lint`.
- [x] 10.3 Run `npm run build`.
- [x] 10.4 Run Lighthouse or Chrome DevTools Lighthouse against the local or deployed site for Accessibility, SEO, Best Practices, and Performance as an audit/reporting tool, not a perfect-score gate.
- [x] 10.5 Record or report obvious Lighthouse issues; if Lighthouse cannot run in the environment, document the exact manual Chrome DevTools Lighthouse steps or CLI command for Gus to run.
- [x] 10.6 Report the files changed, validation commands run, Lighthouse/manual-audit status, known residual risks, and confirm no commits were made.
