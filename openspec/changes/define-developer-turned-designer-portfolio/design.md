## Context

The archived baseline defines Gus's current portfolio as a Next.js App Router site with five core pages, a CRT/pixel-inspired visual identity, dark/light theme support, expressive typography, translucent UI surfaces, and data-driven content modules. It currently presents Gus as a developer moving toward UX and product design.

This change defines the next portfolio direction before implementation. Gus is repositioning from a general software engineering portfolio into a developer-turned-designer portfolio focused on UX engineering, technical product design, product-first engineering, product-minded frontend development, and AI-compatible workflows.

The source evidence for this change is the CV-derived summary provided in the request. The original CV PDFs are not required. The evidence must be translated into public portfolio strategy, page requirements, card models, and case-study framing rather than copied directly as CV bullets.

## Goals / Non-Goals

**Goals:**

- Define a credible public narrative: developer turned designer, designer with technical depth, product-first engineer, UX engineer, technical product designer, product-minded frontend developer, and AI-compatible workflow practitioner.
- Preserve engineering credibility as the differentiator behind the design direction rather than hiding it.
- Define Home, About, Design, Development, and Contact page responsibilities for the next evolution.
- Define Design and Development as complementary evidence pages with similar layout rhythm and click-through project cards.
- Define card models and detail content models for Design/product case studies and Development/technical projects.
- Define AI-compatible workflow signalling as disciplined workflow evidence with human review and ownership.
- Keep all current technology, visual identity, theme, and data-driven architecture assumptions intact for future implementation.

**Non-Goals:**

- Do not implement code in this change.
- Do not rewrite pages, components, data files, routes, styles, assets, package files, or runtime configuration.
- Do not remove the CRT/pixel-inspired identity, dark/light theme system, expressive typography, or current technical visual tone.
- Do not remove software engineering credibility or make the portfolio read like a generic UX portfolio with no technical differentiation.
- Do not invent achievements, employers, seniority, metrics, case studies, outcomes, or claims beyond the provided evidence.
- Do not paste CV bullets directly into future public content.

## Decisions

### Decision: Add a Dedicated Positioning Capability

The baseline specs describe structure, visual theme, content model, and interactions, but they do not define a durable positioning contract. This change adds `portfolio-positioning-narrative` so future content and component work can be checked against a clear narrative.

Alternatives considered:

- Put positioning only inside `portfolio-content-model`. This would mix narrative strategy with data structures and make future copy decisions harder to evaluate.
- Treat positioning as a one-off design note. This would not give future proposals a testable requirement.

### Decision: Keep the Current Five Core Pages

The existing page set remains Home, About, Design, Development, and Contact. The next evolution changes responsibilities and content hierarchy, not the core site map.

Alternatives considered:

- Add separate UX Engineering, AI Workflow, or Case Studies top-level pages immediately. That would expand navigation before the core narrative is clarified.
- Merge Design and Development into one Work page. That would weaken the useful contrast between product/design evidence and implementation evidence.

### Decision: Make Design and Development Parallel Evidence Pages

Design becomes the main UX/product evidence page. Development preserves technical credibility through frontend implementation, APIs, architecture, testing, maintainability, and AI-assisted development workflow. They should feel like two sides of the same person rather than disconnected sections.

Alternatives considered:

- Put all projects on one mixed grid. This would blur whether a card is proving design/product thinking or implementation depth.
- Make Development secondary or hidden. This would undercut Gus's differentiator as a designer with technical depth.

### Decision: Separate Design Card and Development Card Models

Design cards prioritise problem context, user/product methods, platform/context tags, workflow clarity, and design tools where relevant. Development cards prioritise implementation summary, tech stack, tooling, architecture, integration, testing, maintainability, and trade-offs.

Alternatives considered:

- Use one generic project card schema. This would make Design cards look like tech-stack cards or Development cards look too soft.
- Use entirely unrelated visual systems. This would make Design and Development feel disconnected.

### Decision: Define Click-Through Detail Capability Before Choosing Route Shape

Project cards need deeper content in future implementation, but the exact mechanism should be evaluated later. Dedicated routes such as `/design/[slug]` and `/development/[slug]` offer shareable URLs and clearer information architecture. A reusable detail view can reduce routing work and may be enough for early portfolio depth.

Recommendation: future implementation should evaluate dedicated routes first for case studies/projects that need recruiter-friendly sharing, then consider a reusable detail view pattern if content depth remains lightweight.

### Decision: Frame AI as Workflow Discipline

AI is part of Gus's product/development workflow: Microsoft Copilot Studio, Azure AI Foundry, Azure DevOps, Microsoft Copilot, Codex, prompt iteration, AI-assisted debugging, edge-case exploration, workflow design, and Spec Driven Development. The portfolio should not frame AI as a replacement for design judgement or engineering skill.

Alternatives considered:

- Make AI the headline identity. That risks sounding like trend-chasing and diluting the developer-turned-designer story.
- Hide AI entirely. That misses current evidence and an important signal for modern product workflows.

### Decision: Keep Visual Evolution Inside the Existing Identity

The visual system should become more mature and intentional while staying recognisably Gus's current portfolio: dark-first atmosphere, light/dark theme support, pixel/grid/CRT details, accent colour use, expressive typography, translucent cards/pills, and a technical but polished tone.

Alternatives considered:

- Replace the visual identity with a generic SaaS/portfolio style. That would erase the existing brand signal.
- Keep the current visual system unchanged at all levels. That may limit future clarity for case-study browsing and project comparison.

## Risks / Trade-offs

- [Risk] The narrative could overclaim design seniority. -> Mitigation: requirements explicitly call for credible, public, concise wording and use stronger role language only where supported by the broader developer-turned-designer narrative.
- [Risk] Design and Development pages could drift into duplicated project lists. -> Mitigation: each card model has a different evidence priority even when the same project appears on both pages.
- [Risk] AI messaging could sound like buzzword positioning. -> Mitigation: AI must be tied to concrete workflow practices, human review, edge-case exploration, and implementation awareness.
- [Risk] Detail pages could create too much implementation scope. -> Mitigation: this change defines the requirement and content model only; route shape is deferred to a future implementation proposal.
- [Risk] CV-derived evidence could accidentally become copied CV prose. -> Mitigation: future implementation tasks require adapting evidence into portfolio copy, summaries, case-study framing, skill clusters, and proof points.
- [Risk] AppleDouble `._*` sidecars may appear during documentation edits on macOS external storage. -> Mitigation: clean or ignore sidecars separately and do not commit them.

## Migration Plan

No runtime migration is required for this proposal. Future implementation should be split into smaller OpenSpec changes after this documentation is reviewed and accepted:

- Home and About repositioning.
- Design page project card model and detail pages/detail views.
- Development page project card model and detail pages/detail views.
- Contact page polish and CV/link cleanup.
- Final content and visual polish.

## Open Questions

- Should initial project detail content use dedicated App Router routes or a reusable detail view pattern?
- Which Design case study should receive deeper content first: Customer and Account Management Platform, AI-Enabled Sales Assistant, or Portfolio Website?
- Which Development project should receive deeper content first: Portfolio Website, Customer and Account Management Platform, Banking System, PSO Movie Recommendation System, or an evidence-backed AI workflow prototype?
- Which strong but credible hero phrase should lead the rotation: Developer turned Designer, UX Engineer, Technical Product Designer, Product-first Engineer, or Designer with technical depth?
