## Context

The current portfolio has the developer-turned-designer positioning in place and the strategy/spec baseline has been archived. Before using the site for applications, the remaining work is practical rather than strategic: make sure recruiters can download the CV, social/contact links work, metadata/social sharing are credible, visual alignment feels intentional, and small default/scaffold leftovers are removed only when safe.

This change should be an implementation pass against the current site, not another repositioning rewrite. The current routes, CRT/pixel identity, theme system, responsive navigation behaviour, and data-driven content approach should stay intact.

## Goals / Non-Goals

**Goals:**

- Add the real CV file to the public path used by `contactSection.cvHref`.
- Confirm Download CV, GitHub, LinkedIn, and Contact actions work.
- Improve metadata, title, description, OpenGraph/social sharing, and favicon/site identity where appropriate.
- Align the shared header/nav more closely with the main content width so it feels centred relative to the site.
- Improve Design and Development project card vertical structure so tags, titles, descriptions, and bottom tags/actions align more consistently across cards.
- Move Download CV out of the Contact form action row and place it near GitHub/LinkedIn as a visually distinct recruiter-facing CTA rather than an icon-only social button.
- Keep Submit as the primary action inside the form.
- Remove stale/default scaffold assets only when code inspection confirms they are unused.
- Preserve accessible labels, keyboard usability, current routes, current stack, theme support, and visual identity.

**Non-Goals:**

- Do not create project detail pages or detail routes.
- Do not restructure Design or Development into new route patterns.
- Do not make broad copy rewrites.
- Do not invent projects, claims, metrics, employers, outcomes, or seniority.
- Do not change dependencies, package files, runtime configuration, or the current page structure unless a validation command reveals a narrow generated-file side effect that must be restored.

## Decisions

### Decision: Treat this as readiness polish, not repositioning

The repositioning work is already complete. This change should focus on trust and usability issues that matter during applications: working CV access, clean metadata, link reliability, and polished scanning.

Alternatives considered:

- Reopen broader narrative/copy work. This would blur the scope and risk undoing the recently archived positioning.
- Start project detail pages now. That is a separate evidence-depth change and remains out of scope.

### Decision: Keep the CV path data-driven

The CV file should be added to the public path already used by the Contact data model, or the data model should be updated if the actual file path/name differs. The implementation should avoid hard-coding the CV URL in multiple components.

Alternatives considered:

- Link to an external CV file. This adds dependency on external hosting and is less reliable for job applications.
- Put the PDF outside `public/`. Next.js static asset serving expects downloadable public files to live under `public/`.

### Decision: Improve metadata in the root/site shell

Metadata should describe Gus's developer-turned-designer positioning clearly and support social sharing. Page title, description, OpenGraph, and basic favicon/site identity should be reviewed in the root layout or current metadata owner.

Alternatives considered:

- Add per-page metadata for every route in this small pass. That may be useful later but is more than needed for application readiness.
- Leave metadata untouched. This weakens link previews and recruiter-facing polish.

### Decision: Align header to the content system without changing routes

Header/nav alignment should feel centred relative to the site content. The implementation should prefer content-width constraints and balanced flex/grid layout over absolute positioning or breakpoint hacks that can cause overlap.

Alternatives considered:

- Centre the nav using fixed offsets. This is brittle and caused overlap risks in earlier responsive passes.
- Replace the navbar with a new mobile menu. That would be too broad for this pass.

### Decision: Make project card internals consistent

Design and Development cards should keep their current content and visual style but reserve/structure consistent vertical regions: top tags, title, description, and lower tags/actions. The goal is easier comparison in desktop and tablet multi-column layouts, not a new card model or fixed-height mobile cards.

Alternatives considered:

- Rewrite cards as a new shared component. This may be useful only if duplication becomes painful during implementation.
- Leave all cards to natural content height at every breakpoint. This keeps code simple but makes multi-column scanning less polished.

### Decision: Move Download CV near social links

Download CV should sit near GitHub and LinkedIn as part of the recruiter-facing action cluster, but it should remain visually distinct from the icon-only social buttons. The form should keep Submit as its only primary action so the form purpose stays clear.

Alternatives considered:

- Keep Download CV in the form button row. This competes with Submit and mixes contact submission with document access.
- Put Download CV only in the footer or page copy. There is no footer pattern today, and the social/action cluster is more discoverable.

## Risks / Trade-offs

- [Risk] CV file name may differ from the current configured path. -> Mitigation: inspect the available CV asset or add it to the configured path intentionally, then verify the link.
- [Risk] Metadata changes could overstate positioning. -> Mitigation: reuse the archived developer-turned-designer narrative and avoid invented claims.
- [Risk] Header alignment changes could reintroduce mobile overlap. -> Mitigation: preserve existing responsive behaviour and test narrow/wide breakpoints with code inspection and build checks.
- [Risk] Card alignment could become rigid on small screens. -> Mitigation: apply reserved/structured card regions primarily to desktop and tablet multi-column layouts while allowing mobile/single-column cards to remain natural and readable.
- [Risk] Removing scaffold assets could delete something still referenced. -> Mitigation: search imports/usages first and remove only clearly unused files.
- [Risk] macOS AppleDouble sidecars may appear during edits. -> Mitigation: clean generated `._*` files separately and do not commit them.
