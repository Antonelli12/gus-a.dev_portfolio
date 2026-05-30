## 1. Scope And Context

- [x] 1.1 Read the accepted baseline specs and the active `define-developer-turned-designer-portfolio` strategy artifacts before editing code.
- [x] 1.2 Confirm the implementation remains a portfolio repositioning and polish pass tied to the developer-turned-designer strategy.
- [x] 1.3 Document that the completed scope expanded beyond Home/About to include Design, Development, Contact, responsive header/navigation, shared tool icon presentation, responsive typography, and custom 404 polish.
- [x] 1.4 Confirm the implementation preserves the existing route set, navigation destinations, Next.js App Router, React, TypeScript, Tailwind CSS, CRT/pixel visual identity, dark/light theme support, and data-driven content approach.
- [x] 1.5 Confirm project detail pages/views, route renames, package/dependency changes, public asset changes, and runtime configuration changes remain out of scope.

## 2. Home Repositioning

- [x] 2.1 Define maintainable typed Home content for hero phrases, supporting summary copy, and Home calls to action.
- [x] 2.2 Include approved hero phrase direction: Developer turned Designer, UX Engineer, Technical Product Designer, Product-first Engineer, Designer with technical depth, and AI-aware product workflow language.
- [x] 2.3 Add concise Home summary copy inside or immediately below the hero area explaining who Gus is, what he is moving toward, why technical depth strengthens design work, and where visitors should go next.
- [x] 2.4 Keep Home calls to action pointing to Design work and Development work.
- [x] 2.5 Ensure Home copy avoids generic Frontend Engineer or Software Engineer as the primary identity and avoids overloading the hero with too many labels at once.
- [x] 2.6 Mention AI-compatible workflow lightly in the Home summary without making it the main hero claim.
- [x] 2.7 Preserve the typed greeting timing pattern, caret behaviour, and reduced-motion support.

## 3. About Repositioning

- [x] 3.1 Update About content around transition, technical depth, working style, education, and AI-compatible workflow habits.
- [x] 3.2 Preserve technical credibility through computer science background, frontend implementation awareness, API/product constraints, accessibility awareness, and maintainable software practices.
- [x] 3.3 Frame AI-compatible workflow as disciplined support for exploration, debugging, review, edge-case thinking, and Spec Driven Development rather than as a dependency.
- [x] 3.4 Keep About content scannable with theme-aware cards, pills, headings, and readable supporting text.
- [x] 3.5 Preserve or adapt the expandable origin-story pattern so key positioning content is not hidden behind the collapsed state.

## 4. Design And Development Evidence Page Polish

- [x] 4.1 Update the Design page title, quote, and introductory copy so it communicates clarity, empathy, reduced confusion, and easier-to-use interfaces.
- [x] 4.2 Update Design page section copy and project wording to avoid self-referential, generic, or overclaimed language.
- [x] 4.3 Present Design tools and methods with a scannable mix of Devicon icons and readable labels.
- [x] 4.4 Update the Development page title, quote, and introductory copy so it connects design intent to practical implementation.
- [x] 4.5 Update Development page section copy around forms, state, data, validation, responsiveness, edge cases, reusable patterns, API integration, and maintainability.
- [x] 4.6 Present Development tools and stack with a scannable mix of Devicon icons and readable labels.
- [x] 4.7 Keep Design and Development as complementary evidence pages without implementing project detail routes/views.

## 5. Contact, 404, And Shared Interaction Polish

- [x] 5.1 Restore Contact intro copy to a direct, human invitation to collaborate or connect.
- [x] 5.2 Replace Contact GitHub and LinkedIn text pills with accessible icon buttons using Devicon where appropriate.
- [x] 5.3 Move Download CV inside the Contact form/card action row and style it as a stronger CTA.
- [x] 5.4 Add a custom 404/not-found page with a clear Return home action.
- [x] 5.5 Preserve accessible labels, keyboard interaction, and existing route destinations for links and buttons.

## 6. Responsive Header, Typography, And Visual Polish

- [x] 6.1 Preserve the shared sticky header and theme toggle while refining responsive spacing.
- [x] 6.2 Keep wider screens on a single-row navbar ordered as theme toggle, Home, About, Design, Development, Contact.
- [x] 6.3 Use a compact phone-sized navbar with top row theme switch/Home/About/Contact and bottom row Design/Development.
- [x] 6.4 Ensure the theme toggle does not overlap nav items and the page does not require horizontal scrolling.
- [x] 6.5 Improve mobile hero/title sizing and responsive typography without globally enlarging highlight/display fonts.
- [x] 6.6 Preserve CRT/pixel-inspired background, dark/light theme support, accent usage, expressive typography, translucent cards, pills, and technical but polished atmosphere.
- [x] 6.7 Clean generated `._*` AppleDouble sidecar files separately and ensure they are not committed.

## 7. Verification

- [x] 7.1 Run `openspec validate implement-home-about-repositioning --strict`.
- [x] 7.2 Run `npm run lint`.
- [x] 7.3 Run `npm run build`.
- [x] 7.4 Use user-provided screenshot feedback and code inspection for visual correction passes without screenshot automation.
- [x] 7.5 Confirm no commits were made during implementation.
