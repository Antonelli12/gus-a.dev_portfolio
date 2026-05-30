## Why

The portfolio is close to job-application use, but a few practical details still need tightening before sending it to recruiters or hiring teams. This change focuses on application readiness: working CV/social links, trustworthy metadata, small responsive/visual polish, and safe cleanup without changing the site direction or structure.

## What Changes

- Add the real CV PDF to the configured public path so Download CV works reliably.
- Review and improve site metadata, page title, description, OpenGraph/social sharing, and favicon/site identity where appropriate.
- Confirm Contact actions work: GitHub, LinkedIn, Download CV, and contact form configuration.
- Move Download CV out of the Contact form button row and place it near the social links as a visually distinct recruiter-facing call-to-action, not as another icon-only social button.
- Keep Submit as the primary form action inside the Contact form.
- Adjust header/nav alignment so the navbar feels centred relative to the main page content while preserving current responsive behaviour.
- Improve Design and Development project card vertical consistency:
  - reserve consistent space for up to two rows/layers of top tags;
  - align project titles across cards;
  - structure descriptions so they start consistently;
  - keep bottom tags/actions visually consistent.
- Apply project card vertical consistency primarily to desktop/tablet multi-column layouts while keeping mobile cards natural and readable.
- Apply small visual alignment, spacing, and responsive polish across existing pages.
- Remove stale/default scaffold assets only when they are clearly unused and safe to delete.
- Preserve the CRT/pixel visual identity, current routes, theme system, responsive layout, and data-driven content approach.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `portfolio-content-model`: Clarifies CV/public asset configuration, Contact action data, and card data/presentation expectations needed for application readiness.
- `portfolio-structure-navigation`: Extends metadata/site identity, route preservation, shared header alignment, and asset hygiene requirements.
- `portfolio-visual-theme`: Adds requirements for small visual polish, card vertical consistency, Contact CTA placement, and responsive alignment.
- `portfolio-interactions-known-issues`: Updates link validation, CV availability, Contact action behaviour, and known issue resolution expectations.

## Impact

- Expected implementation files may include `app/layout.tsx`, shared metadata/favicon assets if needed, `public/documents/**`, Contact data/components, shared header/nav components, Design/Development card components, and safe removal of unused scaffold assets.
- No route renames, new page structure, project detail pages, dependency changes, major copy rewrites, or invented project claims are included.
- This proposal step creates only OpenSpec artifacts under `openspec/changes/improve-portfolio-application-readiness-site-polish/**`.
