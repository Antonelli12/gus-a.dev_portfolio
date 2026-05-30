## Context

The baseline portfolio is a Next.js App Router site with Home, About, Design, Development, and Contact pages. It uses React, TypeScript, Tailwind CSS, theme-aware CSS variables, a CRT/pixel-inspired visual identity, expressive fonts, shared layout/navigation, and mostly data-driven content modules.

The active strategy change `define-developer-turned-designer-portfolio` establishes the broader portfolio direction: Gus should be positioned as a developer turned designer, product-first engineer, designer with technical depth, UX engineer, technical product designer, and AI-compatible workflow practitioner. This implementation change turns that strategy into a first portfolio-wide repositioning and polish pass.

The change was originally scoped to Home and About. During implementation and review, it expanded to include related Design, Development, Contact, navbar, tool presentation, typography, and 404 polish so the repositioned narrative did not feel isolated to the first two pages.

## Goals / Non-Goals

**Goals:**

- Update Home hero language away from generic Frontend Engineer or Software Engineer positioning.
- Use stronger but credible role language: Developer turned Designer, Product-first Engineer, Designer with technical depth, UX Engineer, and Technical Product Designer.
- Add Home content that quickly explains who Gus is, what he is moving toward, why technical depth strengthens design work, and where visitors should go next.
- Place the Home summary inside or immediately below the hero area so visitors understand the positioning without scrolling far.
- Preserve Home calls to action to Design work and Development work.
- Update About content around the transition from software engineering into UX/product design, technical depth, working style, education, and disciplined AI-compatible workflow habits.
- Polish Design and Development pages as complementary evidence pages through clearer titles, principle-driven quotes, more grounded copy, tool/method presentation, and project wording.
- Polish Contact through clearer intro copy, accessible social icon links, and a stronger Download CV CTA placed with the form actions.
- Improve responsive header behaviour so wider screens keep the single-row navbar and phone-sized screens use a compact two-row layout.
- Improve shared tool/icon presentation with Devicon where useful while keeping labels readable.
- Add a custom 404/not-found experience with a Return home action.
- Preserve the current visual identity, layout language, theme system, font system, route structure, stack, and data-driven content approach.

**Non-Goals:**

- Do not rename routes or add new top-level navigation destinations.
- Do not implement project detail pages/views.
- Do not change package dependencies, runtime configuration, or public assets.
- Do not remove the CRT/pixel-inspired visual identity or replace it with a generic portfolio style.
- Do not invent claims, seniority, metrics, outcomes, employers, or case studies.
- Do not change the broader strategy beyond implementing and polishing against it.

## Decisions

### Decision: Expand the implementation from Home/About to a cohesive portfolio polish pass

Home and About established the new narrative, but Design, Development, Contact, navigation, and error-state polish needed to align with that first impression. The implementation therefore became a focused portfolio repositioning and polish pass rather than a strict Home/About-only change.

Alternatives considered:

- Keep the implementation strictly Home/About. This would leave adjacent pages visibly out of step with the repositioned narrative.
- Rebuild project card models and detail pages too. This would exceed the intended first implementation step from the strategy change.

### Decision: Keep route and shell structure unchanged

The implementation preserves `/`, `/about`, `/design`, `/development`, and `/contact`, plus the shared root layout and header system. The custom not-found experience improves recovery without changing the route model.

Alternatives considered:

- Add new top-level positioning pages. This would conflict with the existing five-page structure.
- Rename Design or Development routes. This would break the established navigation model and is not needed for the repositioning pass.

### Decision: Keep content data-driven where practical

Home, About, Design, Development, and Contact content remains in typed data modules or clearly structured constants where practical. Tool, social, project, and phrase lists stay maintainable rather than being scattered through unrelated layout code.

Alternatives considered:

- Hard-code all revised copy inside components. This would be faster but harder to maintain.
- Introduce a CMS or external content system. This would be excessive for the current portfolio.

### Decision: Keep the typed hero interaction but update its message

The existing typed greeting pattern remains, including timing, caret behaviour, and reduced-motion fallback. Its phrase set now supports the developer-turned-designer positioning without overloading the hero with too many labels at once.

Approved phrase direction:

- Developer turned Designer
- UX Engineer
- Technical Product Designer
- Product-first Engineer
- Designer with technical depth
- AI-aware product workflow language

### Decision: Treat Design and Development as complementary evidence pages

Design and Development should feel like two sides of the same portfolio. The implementation gives both pages clearer titles, quote-led hero support, more natural page copy, and scannable tool/stack presentation while leaving deeper project card/detail modelling for future OpenSpec work.

### Decision: Use Devicon/tool icons for scanning, not decoration

Tool and stack sections use Devicon icons where appropriate and labels/pills where icons are unavailable or clearer. The presentation should make scanning easier without turning the pages into icon walls or hiding important labels.

### Decision: Keep AI-compatible workflow credible

AI is framed as support for disciplined workflow, exploration, debugging, edge-case thinking, and review. It is not presented as a replacement for design judgement or engineering skill.

### Decision: Keep visual changes evolutionary

The implementation reuses existing typography helpers, theme-aware utilities, translucent surfaces, pills/buttons, and the CRT/pixel background. Responsive typography and mobile polish should make the pages clearer without changing the identity.

## Risks / Trade-offs

- [Risk] The broadened scope could obscure that this is still the first implementation step from the strategy change. -> Mitigation: document the completed scope clearly and keep deeper project models/detail pages out of scope.
- [Risk] Hero language could overclaim. -> Mitigation: use credible role language backed by the broader narrative and avoid unsupported seniority or outcomes.
- [Risk] Design/Development copy could become generic. -> Mitigation: prefer human, grounded, quote-led principles and specific implementation/design concerns.
- [Risk] Tool icon sections could hurt readability. -> Mitigation: keep labels visible, allow wrapping, and use icons only where they improve scanning.
- [Risk] Responsive navbar changes could cause overlap or horizontal overflow. -> Mitigation: use explicit wider-screen and phone-screen layout behaviour and preserve tappable controls.
- [Risk] AppleDouble `._*` sidecars may appear during edits on macOS external storage. -> Mitigation: clean or ignore sidecars separately and do not commit them.

## Verification Plan

Verification for this completed implementation pass includes:

1. Validate the OpenSpec change with `openspec validate implement-home-about-repositioning --strict`.
2. Run lint with `npm run lint`.
3. Run production build with `npm run build`.
4. Use code inspection and user-provided screenshot feedback for visual correction passes.
5. Do not rely on screenshot automation for this documented review cycle.
