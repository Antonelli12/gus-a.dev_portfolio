## MODIFIED Requirements

### Requirement: Section typography helpers provide consistent page introductions
The site SHALL use shared typography helper values for section eyebrows, large section titles, highlighted title words, and section summaries. Main hero/page titles SHALL use consistent title capitalisation while preserving current highlight typography and responsive scale.

#### Scenario: A content page intro renders
- **WHEN** About, Design, Development, or Contact renders its page introduction
- **THEN** eyebrow, title, highlighted title text, and summary styling remain consistent with the shared typography helpers

#### Scenario: Main title copy renders
- **WHEN** main hero/page titles render
- **THEN** titles use consistent capitalisation such as "UX Design for Better Digital Experiences.", "Where Design Becomes Real.", "Developer Turned Designer.", and "Let's Connect."

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

## ADDED Requirements

### Requirement: Accessibility polish preserves the CRT visual identity
Accessibility, SEO, and responsive polish SHALL improve usability without replacing the dark/light theme system, CRT/pixel details, translucent surfaces, accent treatment, Devicon presentation, or expressive typography.

#### Scenario: Accessibility fixes are applied
- **WHEN** markup, labels, focus behavior, layout, or responsive sizing are adjusted
- **THEN** the page remains recognisably part of the current CRT/pixel-inspired visual system

#### Scenario: Responsive fixes are applied
- **WHEN** mobile, tablet, desktop, or zoomed layouts are refined
- **THEN** text, cards, navigation, and controls remain readable and usable without introducing a generic portfolio style
