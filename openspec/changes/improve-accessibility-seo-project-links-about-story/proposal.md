## Why

The portfolio is close to application-ready, but it still needs a final practical pass for accessibility, SEO, project-card destinations, metadata, and a more personal About story. These improvements make the current developer-turned-designer positioning easier to understand for recruiters, screen readers, crawlers, keyboard users, and visitors arriving from shared links.

## What Changes

- Improve the Home hero accessibility and SEO fallback so the animated/typed positioning has meaningful static text, semantic heading structure, and assistive-technology friendly labeling without removing the CRT/pixel hero.
- Investigate duplicate navigation exposure and ensure only visible navigation is reachable by keyboard users and assistive technologies, while preserving the current responsive header behavior.
- Add WCAG-informed responsive and keyboard checks for reflow, zoom, focus visibility, form labeling/status feedback, icon accessible names, target sizing, and horizontal overflow.
- Make Design and Development project-card destinations data-driven and honest:
  - link to an existing internal detail page/view, verified GitHub repository, or relevant external URL when one exists;
  - keep cards non-clickable or show a subtle honest state such as "Details coming soon" or "Case study coming later" when no verified destination exists;
  - avoid fake repositories, placeholder links, unsupported internal routes, or implied click-through behavior when no reliable destination exists.
- Ensure project-card links have accessible names, safe external-link behavior, and no invalid nested interactive elements.
- Capitalise main hero/page titles consistently while preserving current highlight typography and wording direction.
- Replace the current About expandable story with the approved personal UX-engineering story exactly as provided, apart from tiny grammar or JSX/string-formatting changes if required.
- Add a subtle Contact conversion line stating that Gus is open to UX Engineer, Technical Product Designer, and product-focused frontend roles.
- Add or improve route-level metadata for Home, About, Design, Development, and Contact, including page titles, descriptions, and OpenGraph/Twitter metadata where supported by the current site structure.
- Add Lighthouse/Chrome DevTools Lighthouse audit/reporting to the implementation checklist, alongside code inspection and manual accessibility review, without requiring perfect scores before completion.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `portfolio-content-model`: About story content, project-card destination metadata, Contact conversion copy, and per-page metadata content requirements are refined.
- `portfolio-interactions-known-issues`: Typed hero fallback, navigation exposure, project-card link behavior, keyboard/focus/form accessibility, responsive reflow, and Lighthouse validation requirements are refined.
- `portfolio-structure-navigation`: Route metadata and project-card destination behavior are clarified while preserving current routes and the shared App Router structure.
- `portfolio-visual-theme`: Title capitalisation and accessibility/responsive polish are clarified while preserving CRT/pixel identity and highlighted-word typography.
- `portfolio-positioning-narrative`: About narrative tone and personal UX-engineering story requirements are refined without broad copy rewrites or repeated role-label language.

## Impact

- Affected implementation areas are expected to include Home hero markup/content, shared header navigation semantics, Design and Development card data/rendering, About story content, Contact supporting copy, page metadata exports, and validation workflow.
- No new dependencies, routes, project detail pages, footer, stack changes, or broad redesigns are expected.
- Project repositories, outcomes, employers, metrics, and claims must not be invented.
