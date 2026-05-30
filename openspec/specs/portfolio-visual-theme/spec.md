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
The site SHALL use shared typography helper values for section eyebrows, large section titles, highlighted title words, and section summaries. Main hero/page titles SHALL use consistent title capitalisation while preserving current highlight typography and responsive scale.

#### Scenario: A content page intro renders
- **WHEN** About, Design, Development, or Contact renders its page introduction
- **THEN** eyebrow, title, highlighted title text, and summary styling remain consistent with the shared typography helpers

#### Scenario: Main title copy renders
- **WHEN** main hero/page titles render
- **THEN** titles use consistent capitalisation such as "UX Design for Better Digital Experiences.", "Where Design Becomes Real.", "Developer Turned Designer.", and "Let's Connect."

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

### Requirement: Repositioning and polish preserves visual identity
The portfolio repositioning and polish pass SHALL preserve the existing CRT/pixel-inspired visual identity, dark/light theme support, expressive typography, translucent UI surfaces, accent colour usage, and technical but polished atmosphere.

#### Scenario: Visitor views updated pages
- **WHEN** a visitor opens Home, About, Design, Development, Contact, or the not-found page
- **THEN** the page remains recognisably part of the existing portfolio visual system

### Requirement: Updated pages use theme-aware UI language
Updated pages and shared components SHALL use existing theme-aware CSS variables, reusable UI utilities, typography helpers, and responsive layout conventions where practical.

#### Scenario: Theme is toggled on an updated page
- **WHEN** a visitor switches between dark and light themes
- **THEN** revised content remains readable and visually consistent with the rest of the site

### Requirement: Hero typography remains expressive and responsive
Large hero/page titles SHALL preserve expressive display typography while scaling appropriately on mobile, avoiding horizontal overflow, and keeping highlighted words visually consistent across pages.

#### Scenario: Visitor scans updated hero titles
- **WHEN** a visitor scans page headings and highlighted words
- **THEN** the highlighted words use the approved display treatment consistently without globally enlarging highlight font sizing

#### Scenario: Visitor uses phone-sized screen
- **WHEN** hero/page titles render on a phone-sized screen
- **THEN** title text remains readable, balanced, and contained within the viewport

#### Scenario: Title capitalisation is polished
- **WHEN** title text is updated for consistency
- **THEN** the change preserves the current layout rhythm, highlighted words, and CRT/pixel title treatment

### Requirement: Quotes use consistent principle-led hero support
Design and Development hero support text SHALL use quote styling that matches the CRT/pixel visual direction and avoids generic explanatory paragraphs.

#### Scenario: Visitor opens Design or Development
- **WHEN** the hero section renders
- **THEN** quote text is visually distinct, readable, attributed, and supportive of the page responsibility

### Requirement: Devicon/tool presentation improves scanning
Technology, tool, and method lists SHALL use Devicon icons where appropriate and labels or pills where icons are unavailable or clearer.

#### Scenario: Visitor scans tools and stack
- **WHEN** tool or stack sections render
- **THEN** icons and labels remain balanced, readable, and do not overflow their containers

### Requirement: Contact CTA polish remains consistent with the visual system
The Contact social icons and Download CV CTA SHALL preserve the existing button/pill language while making social links and CV access easier to scan.

#### Scenario: Visitor scans Contact actions
- **WHEN** social links and the Download CV action render
- **THEN** they remain theme-aware, accessible, and visually consistent with the portfolio style

### Requirement: Accessibility polish preserves the CRT visual identity
Accessibility, SEO, and responsive polish SHALL improve usability without replacing the dark/light theme system, CRT/pixel details, translucent surfaces, accent treatment, Devicon presentation, or expressive typography.

#### Scenario: Accessibility fixes are applied
- **WHEN** markup, labels, focus behavior, layout, or responsive sizing are adjusted
- **THEN** the page remains recognisably part of the current CRT/pixel-inspired visual system

#### Scenario: Responsive fixes are applied
- **WHEN** mobile, tablet, desktop, or zoomed layouts are refined
- **THEN** text, cards, navigation, and controls remain readable and usable without introducing a generic portfolio style

