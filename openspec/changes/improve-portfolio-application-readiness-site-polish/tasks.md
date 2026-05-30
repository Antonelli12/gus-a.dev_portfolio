## 1. Readiness Audit

- [x] 1.1 Read the archived portfolio specs and this change's proposal, design notes, and spec deltas before editing code.
- [x] 1.2 Inspect current metadata, favicon/site identity files, public assets, Contact data, social links, CV href, shared header/nav components, and Design/Development card components.
- [x] 1.3 Confirm the implementation scope preserves current routes, page structure, theme system, CRT/pixel identity, responsive layout, data-driven content approach, and current stack.
- [x] 1.4 Identify the real CV PDF source file and target public path before changing Contact links.

## 2. CV, Metadata, And Application Links

- [x] 2.1 Add the real CV PDF to the public path referenced by `contactSection.cvHref`, or update `contactSection.cvHref` to the approved public CV path.
- [x] 2.2 Verify the Download CV link resolves to an existing public file.
- [x] 2.3 Review and improve root/site metadata, including title, description, OpenGraph/social sharing, and site identity/favicons where appropriate.
- [x] 2.4 Confirm GitHub and LinkedIn hrefs are correct and remain accessible.
- [x] 2.5 Confirm Contact form configuration still points to the intended Formspree endpoint and keeps existing submission behaviour.
- [x] 2.6 Remove default/scaffold public assets only after confirming they are unused by code, metadata, styles, or public links.

## 3. Header And Responsive Alignment

- [x] 3.1 Adjust shared header/nav alignment so it feels centred relative to the main content width on desktop and reasonable tablet widths.
- [x] 3.2 Preserve the existing responsive navbar behaviour, including the phone-sized two-row layout and no horizontal overflow.
- [x] 3.3 Ensure the theme toggle remains separate from nav links and does not overlap Home or other nav items.
- [x] 3.4 Preserve active route styling and `aria-current` behaviour.

## 4. Design And Development Card Polish

- [x] 4.1 Update Design project cards to reserve or structure consistent space for up to two rows/layers of top tags on desktop/tablet multi-column layouts.
- [x] 4.2 Update Development project cards to reserve or structure consistent space for up to two rows/layers of top tags on desktop/tablet multi-column layouts.
- [x] 4.3 Align card titles so they begin on a consistent vertical line across cards in multi-column layouts.
- [x] 4.4 Structure card descriptions so descriptions start consistently across cards in multi-column layouts while mobile/single-column cards remain natural, readable, and not forced into awkward fixed heights.
- [x] 4.5 Keep bottom tags/actions visually consistent across Design and Development cards.
- [x] 4.6 Preserve current card content, project status wording, data-driven rendering, and page responsibilities.

## 5. Contact Action Placement

- [x] 5.1 Move Download CV out of the Contact form button row.
- [x] 5.2 Place Download CV near GitHub and LinkedIn as a visually distinct recruiter-facing call-to-action, not as another icon-only social button.
- [x] 5.3 Keep Submit as the primary form action inside the Contact form.
- [x] 5.4 Preserve accessible labels, keyboard focusability, target behaviour, and theme-aware button/icon styling for Contact actions.

## 6. Small Visual And Responsive Polish

- [x] 6.1 Inspect current pages for small spacing, alignment, and responsive polish issues that affect application readiness.
- [x] 6.2 Apply only narrow visual fixes that preserve the CRT/pixel identity and current page structure.
- [x] 6.3 Ensure hero/page typography remains responsive and does not overflow on narrow screens.
- [x] 6.4 Avoid broad copy rewrites unless required to fix obvious clarity, metadata, or broken-link issues.

## 7. Validation And Cleanup

- [x] 7.1 Run `openspec validate improve-portfolio-application-readiness-site-polish --strict`.
- [x] 7.2 Run `npm run lint`.
- [x] 7.3 Run `npm run build`.
- [x] 7.4 Verify no unintended route, package, runtime configuration, or project-detail changes were introduced.
- [x] 7.5 Clean generated `._*` AppleDouble sidecar files separately and ensure they are not committed.
- [x] 7.6 Report changed files, link/file verification results, validation commands, and any assets removed as safe cleanup.
