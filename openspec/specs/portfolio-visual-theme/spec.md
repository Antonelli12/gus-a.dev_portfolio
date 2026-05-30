# portfolio-visual-theme Specification

## Purpose
TBD - created by archiving change document-portfolio-baseline. Update Purpose after archive.
## Requirements
### Requirement: Site presents the current CRT-inspired visual identity
The portfolio SHALL preserve the current dark-first, CRT-inspired visual identity using a fixed layered background, pixel-grid treatment, soft blue accent colors, translucent surfaces, and expressive display typography. Future design refinements SHALL make the identity more mature and intentional without replacing it with a generic SaaS portfolio style.

#### Scenario: Any page loads
- **WHEN** a visitor loads any page
- **THEN** the site background appears behind the page content using theme-aware base color, vignette, pixel grid, noise, and glow layers

#### Scenario: Future visual polish is applied
- **WHEN** future implementation refines layout, cards, or content hierarchy
- **THEN** the result remains recognisably part of Gus's current CRT/pixel-inspired visual system

### Requirement: Background layers are decorative and non-interactive
The shared site background SHALL be fixed behind content, hidden from assistive technologies, and non-interactive.

#### Scenario: Visitor interacts with foreground content
- **WHEN** a visitor clicks links, buttons, or form fields
- **THEN** the background layers do not intercept pointer interaction and do not appear as semantic content

### Requirement: Font system uses the current optimized fonts
The portfolio SHALL use optimized Google fonts through `next/font`: Inter for body text, Bitcount Grid Single for headings/navigation, and Sixtyfour for highlighted display text.

#### Scenario: Section heading renders
- **WHEN** a section title renders on About, Design, Development, or Contact
- **THEN** the heading uses the display heading font and highlighted words use the highlight font treatment

### Requirement: Theme palettes are controlled by CSS custom properties
The visual system SHALL define dark and light palettes through CSS custom properties, with theme selection controlled by `html[data-theme]`.

#### Scenario: Dark theme is active
- **WHEN** `html[data-theme="dark"]` is applied
- **THEN** background, text, accent, surface, border, button, field, status, header, and background-layer tokens resolve to the dark palette

#### Scenario: Light theme is active
- **WHEN** `html[data-theme="light"]` is applied
- **THEN** background, text, accent, surface, border, button, field, status, header, and background-layer tokens resolve to the light palette

### Requirement: Reusable UI utilities provide theme-aware surfaces and controls
The site SHALL use reusable CSS utility classes for core themed elements including cards, pills, buttons, fields, status messages, text colors, content fades, and block titles. Future project cards and detail surfaces SHALL build on these theme-aware primitives or compatible extensions rather than introducing an unrelated visual language.

#### Scenario: Card-like content renders
- **WHEN** About, Design, Development, or Contact renders framed content
- **THEN** the content uses theme-aware border, surface, text, backdrop blur, and shadow treatment from reusable UI utilities

#### Scenario: Project cards are introduced
- **WHEN** Design or Development project cards are implemented
- **THEN** they use the existing theme-aware visual language for surfaces, tags, links, and hover/focus states

### Requirement: Section typography helpers provide consistent page introductions
The site SHALL use shared typography helper values for section eyebrows, large section titles, highlighted title words, and section summaries.

#### Scenario: A content page intro renders
- **WHEN** About, Design, Development, or Contact renders its page introduction
- **THEN** eyebrow, title, highlighted title text, and summary styling remain consistent with the shared typography helpers

### Requirement: Background animation respects reduced motion
The breathing glow animation SHALL stop when the visitor has requested reduced motion.

#### Scenario: Visitor prefers reduced motion
- **WHEN** the browser reports `prefers-reduced-motion: reduce`
- **THEN** the site background glow does not animate

### Requirement: Visual polish supports portfolio scanning
Visual refinements SHALL support scanning, comparison, and hierarchy for project evidence while retaining the technical but polished tone of the baseline site.

#### Scenario: Visitor scans project cards
- **WHEN** a visitor scans Design or Development project cards
- **THEN** card hierarchy, tags, and summaries make the type of evidence clear without overwhelming the visual identity

### Requirement: Design and Development share visual rhythm
Design and Development evidence pages SHALL use a similar layout rhythm so visitors understand they are complementary sections of the same portfolio.

#### Scenario: Visitor moves between evidence pages
- **WHEN** a visitor navigates from Design to Development or from Development to Design
- **THEN** the page structure feels related while the content emphasis changes

### Requirement: Visual identity remains technically expressive
The portfolio MUST retain dark/light theme support, pixel/grid/CRT details, accent colour usage, expressive typography, translucent cards and pills, and a technical but polished atmosphere.

#### Scenario: Future redesign is reviewed
- **WHEN** a future design change proposes broad visual changes
- **THEN** it is rejected or revised if it removes the recognisable CRT/pixel-inspired identity without an explicit accepted spec change

