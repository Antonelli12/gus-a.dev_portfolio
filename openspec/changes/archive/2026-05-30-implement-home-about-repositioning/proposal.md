## Why

The portfolio needed its first impression to reflect the developer-turned-designer direction established by `define-developer-turned-designer-portfolio`. The change began as a Home/About implementation slice, then expanded during review into a broader portfolio repositioning and polish pass so the surrounding Design, Development, Contact, navigation, tooling presentation, typography, and 404 experience felt consistent with the new direction.

This update documents the completed scope accurately so future OpenSpec changes can build on the real implementation state.

## What Changes

- Update the Home hero away from generic Frontend Engineer or Software Engineer positioning.
- Reposition Home around credible role language: Developer turned Designer, Product-first Engineer, Designer with technical depth, UX Engineer, Technical Product Designer, and AI-aware product workflow habits.
- Add Home summary copy that explains who Gus is, what he is moving toward, why technical background strengthens design work, and where visitors should go next.
- Update About content around the transition from software engineering into UX/product design, including technical depth, working style, education, and disciplined AI-compatible workflow habits.
- Polish Design page title, quote, copy, case-study wording, methods, and tool presentation so Design reads as the main UX/product evidence page.
- Polish Development page title, quote, copy, implementation framing, project wording, and tool presentation so Development complements Design as the technical evidence page.
- Update Contact page intro copy, social links as accessible icon buttons, and Download CV placement as a stronger CTA inside the form area.
- Refine the shared responsive header/navbar so wider screens keep a single-row navbar and phone-sized screens use the compact two-row layout.
- Add shared Devicon/tool icon presentation where it improves scanning.
- Add a custom 404/not-found experience with a clear Return home action.
- Apply responsive typography and mobile polish while preserving the existing CRT/pixel-inspired identity, dark/light theme system, expressive typography, route structure, and data-driven content approach.

## Capabilities

### New Capabilities

- Custom not-found experience with a route-preserving Return home action.
- Shared tool/icon presentation pattern for visually scannable technology and workflow lists.

### Modified Capabilities

- `portfolio-content-model`: Updates Home, About, Design, Development, and Contact content responsibilities, page copy expectations, data-driven content, and tool/social data presentation.
- `portfolio-interactions-known-issues`: Updates Home typed greeting requirements, reduced-motion expectations, Contact icon/link accessibility, 404 recovery interaction, and responsive navbar behaviour.
- `portfolio-visual-theme`: Documents the completed responsive typography, Devicon/tool icon presentation, quote styling, CTA styling, and CRT/pixel visual preservation work.
- `portfolio-structure-navigation`: Clarifies that the implementation preserves the current route set and navigation destinations while refining the shared responsive header and custom not-found fallback.

## Impact

- Actual implementation surface includes Home, About, Design, Development, Contact, shared header/navigation, shared tool icon presentation, typography helpers, data modules, typed greeting content, and custom 404/not-found UI.
- Preserved: current routes, Next.js App Router, React, TypeScript, Tailwind CSS, CRT/pixel visual identity, dark/light theme support, and data-driven content approach.
- Still out of scope: route renames, new top-level navigation destinations, project detail pages/views, package/dependency changes, public asset changes, runtime configuration changes, invented claims, invented metrics, invented outcomes, or unsupported seniority.
- This documentation update changes only OpenSpec artifacts under `openspec/changes/implement-home-about-repositioning/**`.
