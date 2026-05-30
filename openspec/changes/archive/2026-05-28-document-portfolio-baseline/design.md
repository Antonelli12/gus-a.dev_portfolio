## Context

This project is an existing personal portfolio website for Gus, built with Next.js App Router, React, TypeScript, Tailwind CSS v4, and CSS custom properties. The current site presents Gus as a developer moving toward UX and product design, with separate pages for Home, About, Design, Development, and Contact.

The implementation already has a clear structure:

- `app/layout.tsx` owns global metadata, global CSS, theme initialization, body font application, and the shared background.
- `app/page.tsx` and route pages under `app/about`, `app/design`, `app/development`, and `app/contact` compose `SiteHeader` with one page section.
- `components/layout/*` contains the shared header, navigation links, theme toggle, and fixed background layers.
- `components/home/*`, `components/about/*`, `components/design/*`, `components/development/*`, and `components/contact/*` contain page-specific sections.
- `data/*.ts` files contain most portfolio copy, card data, social links, CV URL, and contact form configuration.
- `lib/navigation.ts` and `lib/typography.ts` contain small shared configuration/helpers.

OpenSpec currently has no base specs and no active changes before this baseline. This change creates documentation artifacts only, so future changes can be proposed against the current behavior rather than rediscovering it each time.

## Goals / Non-Goals

**Goals:**

- Capture the current website structure, navigation, page responsibilities, visual identity, theme system, data model, and client-side interactions as OpenSpec capabilities.
- Document the current content architecture and reusable styling conventions without changing them.
- Record known baseline issues so future proposals can decide whether to address them intentionally.
- Keep the change limited to OpenSpec artifacts.

**Non-Goals:**

- Do not change application code, routes, components, styles, copy, dependencies, configuration, or public assets.
- Do not fix known issues in this change.
- Do not redesign the portfolio, introduce new pages, add new integrations, or refactor repeated component patterns.
- Do not create production-ready tests; the specs define testable expectations for future work.

## Decisions

### Decision: Treat the Baseline as New OpenSpec Capabilities

There are no existing specs under `openspec/specs/`, so the current site is documented as new OpenSpec capabilities rather than modified requirements.

Alternatives considered:

- Use one large `portfolio-baseline` capability. This would be simple but too broad for future targeted changes.
- Create many page-specific capabilities. This would be granular but noisy for a small portfolio site.

Chosen approach: create four capabilities that match stable system boundaries:

- `portfolio-structure-navigation`
- `portfolio-visual-theme`
- `portfolio-content-model`
- `portfolio-interactions-known-issues`

### Decision: Describe Existing Behavior, Not Desired Redesigns

The specs use SHALL/MUST language because OpenSpec requirements are normative, but they describe the current baseline rather than new implementation work. Known issues are documented as present baseline conditions, not as requirements to keep forever.

Alternatives considered:

- Phrase the baseline as recommendations. This would be less testable and less useful for future diffs.
- Include fixes in the baseline tasks. That would violate the request to avoid implementation changes.

### Decision: Preserve Current Implementation Boundaries

The baseline reflects the current pattern of thin route files, page-specific section components, local helper components inside sections, and central data files. It does not propose extracting shared card/list components even though several sections repeat similar structures.

Alternatives considered:

- Document a future shared component library. This would be a new design direction, not a baseline.
- Collapse section behavior into generic requirements only. That would lose useful detail for future page changes.

### Decision: Keep Known Issues in the Interaction/Baseline Capability

Known issues are grouped with baseline interactions because they are current-state facts future changes must account for, not a separate feature area.

Known issues captured:

- `contactSection.cvHref` points to `/documents/gustavo-antonelli-cv.pdf`, but the corresponding file is not present under `public/`.
- `contactSection.title` exists in `data/contact.ts` but the Contact section currently renders a hard-coded "Let's connect." heading instead.
- `README.md` still contains the default create-next-app content and does not document portfolio-specific architecture or workflow.
- `public/` contains default scaffold SVG assets, with no portfolio-specific image/media assets currently present.
- When developing from an external SSD on macOS, generated `._*` AppleDouble sidecar files may appear. These files should not be committed and should be ignored or cleaned up separately from OpenSpec documentation work.

## Risks / Trade-offs

- [Risk] Baseline specs can become stale if implementation changes are made without updating OpenSpec. → Mitigation: future changes should update the relevant capability spec or delta spec as part of the proposal/archive flow.
- [Risk] Specs use normative language for current behavior, which may make known limitations feel intentional. → Mitigation: known issues are explicitly called out as baseline issues, not desired permanent behavior.
- [Risk] Four capability files add some documentation overhead. → Mitigation: the boundaries map to the major parts of the site and should make future proposals easier to scope.
- [Risk] The baseline is based on static repository inspection, not a fresh browser QA pass. → Mitigation: future implementation changes should include appropriate lint/build/browser verification when behavior or visuals are modified.

## Migration Plan

No runtime migration is required. This change only adds OpenSpec artifacts under `openspec/changes/document-portfolio-baseline/`. When accepted, the baseline specs can be archived into `openspec/specs/` through the OpenSpec archive flow.

## Open Questions

- Should future work add project-specific context/rules to `openspec/config.yaml` so new proposals inherit portfolio conventions automatically?
- Should the missing CV asset, unused contact title, default README, default public SVG assets, and AppleDouble sidecar cleanup be addressed as one cleanup change or split into smaller targeted changes?
