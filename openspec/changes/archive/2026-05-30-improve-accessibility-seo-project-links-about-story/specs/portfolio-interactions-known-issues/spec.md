## MODIFIED Requirements

### Requirement: Typed greeting cycles through current professional phrases
The Home hero SHALL type, hold, delete, and cycle through developer-turned-designer positioning phrases using the existing timing pattern, while avoiding generic Frontend Engineer or Software Engineer as the main identity and avoiding too many role labels at once. The animated presentation SHALL be backed by meaningful static semantic text so the page remains understandable before, during, or without the animation.

#### Scenario: Visitor watches the home hero
- **WHEN** reduced motion is not requested
- **THEN** the hero starts with the greeting pattern and rotates through credible phrases such as Developer turned Designer, UX Engineer, Technical Product Designer, Product-first Engineer, Designer with technical depth, and AI-aware product workflow language

#### Scenario: Visitor scans hero label density
- **WHEN** the Home hero displays a phrase
- **THEN** the displayed phrase presents one clear positioning idea at a time instead of stacking multiple role labels together

#### Scenario: Static hero meaning is available
- **WHEN** a screen reader, crawler, or non-JS context evaluates the Home hero
- **THEN** it can access meaningful static text that identifies Gus and the developer-turned-designer positioning

### Requirement: Typed greeting respects reduced motion
The typed greeting SHALL provide a static reduced-motion presentation when the visitor has requested reduced motion, and the static copy SHALL reflect the developer-turned-designer positioning.

#### Scenario: Visitor prefers reduced motion
- **WHEN** the browser reports `prefers-reduced-motion: reduce`
- **THEN** the hero skips the typing/deleting animation and displays stable developer-turned-designer intro text

#### Scenario: Reduced-motion text remains semantic
- **WHEN** reduced-motion text renders in the Home hero
- **THEN** it remains part of a meaningful heading or accessible name rather than an isolated decorative fragment

### Requirement: Project cards expose click-through behaviour
Design and Development project cards SHALL communicate when deeper content or a verified destination is available and SHALL avoid implying unavailable click-through content.

#### Scenario: Project card has detail content
- **WHEN** a Design or Development project card has an associated detail route or detail view
- **THEN** the card provides an accessible interactive affordance to open that deeper content

#### Scenario: Project card has an external destination
- **WHEN** a Design or Development project card has a verified GitHub repository or relevant external URL
- **THEN** the card provides an accessible external link with safe target and `rel` behavior when it opens in a new tab

#### Scenario: Project card lacks detail content
- **WHEN** a Design or Development project card does not yet have deeper content or a verified external destination
- **THEN** it remains non-clickable or shows a subtle page-appropriate state such as "Details coming soon" or "Case study coming later" without rendering a fake link, placeholder URL, or unsupported route

#### Scenario: Project card link markup is reviewed
- **WHEN** a card destination is rendered
- **THEN** the card avoids invalid nested interactive elements and exposes an accessible name that identifies the project and destination

### Requirement: Responsive navbar remains usable across breakpoints
The shared header SHALL keep a single-row navbar on wider screens and use a compact two-row layout only on phone-sized screens. The theme toggle SHALL NOT overlap Home or any navigation item. If more than one navigation structure exists in the DOM, hidden variants SHALL NOT be exposed to keyboard users or assistive technologies.

#### Scenario: Visitor uses wider screen navigation
- **WHEN** the viewport is tablet-sized or desktop-sized
- **THEN** navigation appears in one row ordered as theme toggle, Home, About, Design, Development, Contact

#### Scenario: Visitor uses phone navigation
- **WHEN** the viewport is phone-sized
- **THEN** the compact navigation uses top row theme switch/Home/About/Contact and bottom row Design/Development without horizontal overflow

#### Scenario: Visitor tabs through responsive navigation
- **WHEN** a keyboard user tabs through the header at phone, tablet, desktop, or zoomed widths
- **THEN** only the visible navigation controls are reachable and the user does not tab through duplicate hidden links

### Requirement: Contact interaction supports repositioned conversion
The Contact page SHALL make it clear how to access Gus's CV, GitHub, LinkedIn, and message form, while supporting conversion for UX Engineer, Technical Product Designer, Product-minded Frontend Developer, and AI/Product workflow opportunities. Contact actions and role-openness copy SHALL be verified during application-readiness polish.

#### Scenario: Visitor decides to contact Gus
- **WHEN** a visitor reaches the Contact page after reviewing the repositioned portfolio
- **THEN** the available actions support contacting Gus and evaluating relevant role fit

#### Scenario: Application links are verified
- **WHEN** application-readiness polish is implemented
- **THEN** GitHub, LinkedIn, Download CV, and configured contact form links are inspected or validated so obvious broken-link issues are addressed

#### Scenario: Visitor reads Contact role openness
- **WHEN** a visitor reads the Contact intro area
- **THEN** they can see a subtle role-direction statement without losing access to the main contact actions

## ADDED Requirements

### Requirement: Accessibility review covers WCAG-informed interaction checks
Application-readiness accessibility review SHALL inspect responsive reflow, text resizing or zoom, keyboard navigation, focus visibility, form labels, form status feedback, icon accessible names, target size, target spacing, content overlap, and horizontal overflow.

#### Scenario: Responsive layout is reviewed
- **WHEN** the site is checked at mobile, tablet, desktop, and zoomed layouts
- **THEN** normal content does not require two-direction scrolling, controls remain usable, and text remains readable without overlap

#### Scenario: Keyboard interaction is reviewed
- **WHEN** the site is navigated with a keyboard
- **THEN** interactive controls have visible focus states, clear accessible names, and a logical focus order

#### Scenario: Contact form accessibility is reviewed
- **WHEN** the Contact form is inspected
- **THEN** fields have labels, required fields remain understandable, and success/error/submitting states are perceivable

### Requirement: Lighthouse audit is included in validation
The implementation validation SHALL include a Lighthouse or Chrome DevTools Lighthouse audit focused on Accessibility, SEO, Best Practices, and Performance when the environment allows it. Lighthouse SHALL be used as an audit/reporting tool for obvious issues and SHALL NOT require perfect scores before completion.

#### Scenario: Lighthouse can run locally
- **WHEN** a local Lighthouse command or Chrome DevTools Lighthouse audit is available
- **THEN** the audit is run against the local or deployed portfolio and obvious or notable issues are reported without treating non-perfect scores as automatic blockers

#### Scenario: Lighthouse cannot run locally
- **WHEN** Codex cannot run Lighthouse in the environment
- **THEN** the final implementation report documents exact manual steps or a command Gus can run, and validation still includes code inspection plus manual keyboard/responsive review
