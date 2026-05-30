## Context

The current portfolio uses Next.js App Router pages for `/`, `/about`, `/design`, `/development`, and `/contact`, with shared React/TypeScript/Tailwind components and typed content modules in `data/*.ts`. The archived specs already establish the developer-turned-designer positioning, the CRT/pixel visual identity, the data-driven content approach, and the complementary Design/Development evidence pages.

The current implementation also includes application-readiness polish from a separate completed change: the real CV public asset, Devicon-supported tool lists, improved card alignment, Contact social icon links, a distinct Download CV CTA, a custom not-found page, and responsive header refinements. This change should build on that direction without redesigning the site or creating project detail pages.

The main gaps are practical readiness issues: the animated Home hero needs a static semantic fallback for accessibility/SEO, project cards need honest destination behavior, page metadata should be stronger per route, navigation exposure should be checked for keyboard and assistive-technology users, and the About story should feel more personal and specific to Gus's path into UX engineering.

## Goals / Non-Goals

**Goals:**

- Preserve the existing Next.js, React, TypeScript, Tailwind, App Router, theme, and data-driven architecture.
- Preserve the CRT/pixel visual identity and current routes.
- Make the animated Home hero understandable to screen readers, crawlers, reduced-motion users, and non-JS contexts.
- Keep project-card destinations honest and data-driven.
- Improve route-level metadata for application sharing and recruiter scanning.
- Replace the About expandable story with the supplied personal UX-engineering story.
- Keep Contact conversion subtle by adding one short role-openness line.
- Add accessibility validation tasks that combine code inspection, keyboard/responsive review, and Lighthouse where available.

**Non-Goals:**

- Do not redesign the site, add a footer, rename routes, change the stack, or replace the visual identity.
- Do not create full project detail pages unless reliable content already exists and this proposal explicitly scopes it; this change does not scope full detail pages.
- Do not invent project repositories, external links, employers, outcomes, metrics, seniority, or case-study claims.
- Do not rewrite broad page copy beyond the About story, title capitalisation, metadata, project destination labels, and the small Contact conversion line.
- Do not remove the typed hero animation unless accessibility review proves a small fallback adjustment is not enough.

## Decisions

### 1. Use static semantic hero text alongside the typed presentation

The Home hero should keep the current typed CRT/pixel presentation, but the semantic text exposed to assistive technologies and crawlers must not depend on the animation reaching a complete phrase. The implementation should provide a stable, meaningful Home `<h1>` or accessible label such as "Gus, Developer Turned Designer" and can mark the purely animated fragments as decorative when needed.

Alternatives considered:

- **Remove the typed animation:** simpler, but unnecessarily discards a defining part of the current visual identity.
- **Rely on the current animated text only:** visually works, but initial HTML and screen reader output can be incomplete or empty while the animation is typing.

### 2. Keep project destinations in the project data model

Design and Development cards should gain optional destination metadata rather than hard-coded links in card rendering. A destination model should distinguish at least:

- internal detail destinations when an existing detail route/view exists;
- external destinations such as a verified GitHub repository or relevant URL;
- unavailable destinations when no reliable link exists yet.

External destinations should include safe new-tab behavior and accessible labels. Cards with unavailable destinations should remain non-clickable or communicate status honestly through subtle page-appropriate text such as "Details coming soon" for Development or "Case study coming later" for Design. They must not use fake repositories, placeholder links, or unsupported internal routes.

Alternatives considered:

- **Make every card clickable:** this risks fake or misleading links while the content is still incomplete.
- **Hard-code links in the component:** faster, but weakens the existing data-driven content approach.

### 3. Avoid invalid nested interactive card markup

If a full card becomes clickable, it should be implemented as a single `Link` or anchor wrapping only non-interactive content. If a card needs separate actions later, the card should remain an `article` with explicit action links/buttons. This prevents nested interactive elements and keeps accessible names clear.

### 4. Improve metadata with route-level exports

The root layout should continue to provide global metadata defaults, metadata base, icon configuration, and shared social defaults. Each main route should add or override metadata where useful with titles and descriptions matching the page responsibility:

- Home: developer turned designer / UX engineering and technical product design positioning.
- About: personal path from engineering curiosity into UX/product design.
- Design: UX/product design, clarity, empathy, interface decisions.
- Development: implementation depth, frontend systems, usable product behavior.
- Contact: collaboration/contact, CV, GitHub, LinkedIn, relevant role direction.

OpenGraph/Twitter metadata should use credible, public wording and avoid unsupported claims.

### 5. Preserve the current navigation pattern while checking exposure

The current header uses distinct phone and wider-screen layouts. That can remain if hidden variants are not exposed to keyboard users or assistive technology. CSS `display: none`/Tailwind `hidden` is acceptable when it reliably removes hidden variants from the accessibility tree. If review finds duplicate tab stops or duplicate nav landmarks exposed at a breakpoint, the implementation should use a single semantic nav or add appropriate hidden/inert/focus-prevention behavior.

### 6. Replace the About story in structured data

The replacement story should live in the existing About content structure, split into maintainable paragraphs, and remain compatible with the existing expandable story interaction if that interaction is kept. The body should not repeatedly use "developer turned designer"; the title can carry that identity while the story explains the human path behind it. Use the approved story exactly as provided unless a tiny grammar, escaping, or JSX/string-formatting adjustment is required.

Approved replacement story:

```text
My interest in technology began with a simple question: “how does this work?” As a kid, I was fascinated by how things functioned beneath the surface, spending ages staring at old electronics and wanting to take them apart just to understand them better. That urge to explore how systems work never really left, and it shaped the way I looked at the world from an early age.

The same mindset eventually led me to programming. What first drew me in was the realisation that software was not only something to use, but something I could understand and create myself. It gave me a way to solve problems directly, build things that had not existed before, and turn ideas into something practical and real. Over time, that curiosity grew into an interest in how people actually used the things I built, and what they experienced while using them: what felt intuitive, what caused friction, and why some interactions felt natural while others did not.

That curiosity is what now pulls me toward UX engineering and product design. I enjoy understanding how people think through a task, exploring the decisions they make along the way, and designing experiences that make those journeys feel clear and purposeful. I am interested in why users like what they like, why some layouts feel obvious while others create friction, and how small design choices can change the way someone understands a product.

My engineering background still matters because it helps me think about how ideas and designs translate into real products. I enjoy working where user experience, product thinking, and engineering meet: taking something complex, understanding it, and turning it into an experience that is useful, thoughtful, and grounded in real-world constraints. The most satisfying part is seeing that work come to life in a product that people can actually interact with.
```

### 7. Treat title casing as content polish, not a typography rewrite

Main hero/page titles should use consistent title casing, including examples such as "UX Design for Better Digital Experiences.", "Where Design Becomes Real.", "Developer Turned Designer.", and "Let's Connect." Highlighted words and responsive title scaling should remain consistent with the current typography helpers.

## Risks / Trade-offs

- **Risk: The typed hero becomes duplicate or noisy for screen readers.** → Mitigate by exposing one stable accessible name/heading and hiding decorative animated fragments where appropriate.
- **Risk: Project-card links imply detail content that does not exist.** → Mitigate with explicit destination metadata, non-clickable unavailable cards, and honest subtle states instead of fake or placeholder links.
- **Risk: Per-route metadata repeats unsupported role claims.** → Mitigate by keeping titles/descriptions tied to current positioning and evidence-backed page responsibilities.
- **Risk: Duplicate desktop/mobile navigation creates duplicate landmarks or tab stops.** → Mitigate through code inspection and keyboard testing at breakpoints; prefer a single semantic nav if practical.
- **Risk: Lighthouse is unavailable in the local environment.** → Mitigate by documenting the exact local command or Chrome DevTools steps for Gus and still completing code/manual checks.
- **Risk: Lighthouse scores become a blocker rather than an audit signal.** → Mitigate by treating Lighthouse as an audit/reporting tool for obvious issues, not a requirement for perfect scores.
