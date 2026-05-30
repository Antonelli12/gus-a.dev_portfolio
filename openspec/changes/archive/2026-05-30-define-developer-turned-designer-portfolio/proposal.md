## Why

Gus's portfolio baseline currently documents a developer moving toward UX and product design, but the next evolution needs a clearer public positioning strategy before any page rewrites or component work. This change defines the developer-turned-designer narrative, page responsibilities, project card models, detail content expectations, and AI-compatible workflow framing as OpenSpec requirements first.

## What Changes

- Define the core portfolio positioning around Gus as a developer turned designer, product-first engineer, designer with technical depth, UX engineer, technical product designer, product-minded frontend developer, and AI-compatible workflow practitioner.
- Reframe Home and About requirements so the site leads with the transition into UX/product design while preserving engineering credibility.
- Reframe Design as the primary UX/product evidence page and Development as the complementary technical credibility page.
- Define Design project cards that prioritise product/design evidence, including problem context, platform/context tags, design methods, optional tools, and click-through detail behaviour.
- Define Development project cards that prioritise implementation evidence, architecture, integration, testing, maintainability, technical trade-offs, tech stack tags, tooling tags, and click-through detail behaviour.
- Define future click-through detail pages or detail views for Design and Development projects, with recommended content models and evaluation criteria for routes versus reusable detail views.
- Define AI-compatible workflow messaging as disciplined product/development workflow evidence, not as a replacement for judgement.
- Preserve the existing Next.js App Router structure, React/TypeScript/Tailwind stack, CRT/pixel-inspired visual identity, dark/light theme system, expressive typography, and data-driven content approach.
- This change does not implement code, rewrite pages, alter public assets, change dependencies, or edit application files.

## Capabilities

### New Capabilities
- `portfolio-positioning-narrative`: Defines the public positioning, tone, claim boundaries, AI-compatible workflow framing, and CV-evidence translation rules for the developer-turned-designer portfolio.

### Modified Capabilities
- `portfolio-structure-navigation`: Adds future requirements for preserving the current page set while supporting parallel Design/Development evidence pages and deeper project detail routes or reusable detail views.
- `portfolio-visual-theme`: Adds constraints for maturing the current CRT/pixel-inspired visual identity without replacing it with a generic portfolio or SaaS style.
- `portfolio-content-model`: Updates page responsibilities, data-driven content requirements, Design card model, Development card model, project evidence scope, contact positioning, and detail content model.
- `portfolio-interactions-known-issues`: Updates hero phrase requirements and adds future click-through behaviour expectations for project cards.

## Impact

- Affected OpenSpec files only: `openspec/changes/define-developer-turned-designer-portfolio/**`.
- Future implementation is expected to be split into smaller changes, likely:
  - Home and About repositioning.
  - Design page project card model and detail pages/detail views.
  - Development page project card model and detail pages/detail views.
  - Contact page polish and CV/link cleanup.
  - Final content and visual polish.
- No changes should be made in this proposal to `app/`, `components/`, `data/`, `lib/`, `public/`, package files, dependencies, or runtime configuration.
