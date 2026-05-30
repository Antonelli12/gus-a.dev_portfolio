## MODIFIED Requirements

### Requirement: Reusable UI utilities provide theme-aware surfaces and controls
The site SHALL use reusable CSS utility classes for core themed elements including cards, pills, buttons, fields, status messages, text colors, content fades, block titles, project detail surfaces, expandable grid controls, and project card destination states. Future project cards and detail surfaces SHALL build on these theme-aware primitives or compatible extensions rather than introducing an unrelated visual language.

#### Scenario: Card-like content renders
- **WHEN** About, Design, Development, Contact, or a project detail page renders framed content
- **THEN** the content uses theme-aware border, surface, text, backdrop blur, and shadow treatment from reusable UI utilities

#### Scenario: Project cards are introduced
- **WHEN** Design or Development project cards are implemented
- **THEN** they use the existing theme-aware visual language for surfaces, tags, links, inactive destination states, and hover/focus states

### Requirement: Visual polish supports portfolio scanning
Visual refinements SHALL support scanning, comparison, and hierarchy for project evidence while retaining the technical but polished tone of the baseline site. Design and Development project cards SHALL reserve or structure consistent vertical regions for top tags, titles, descriptions, and bottom tags/actions primarily on desktop/tablet multi-column layouts, and expandable controls SHALL sit below grids without disrupting card comparison.

#### Scenario: Visitor scans project cards
- **WHEN** a visitor scans Design or Development project cards
- **THEN** card hierarchy, tags, summaries, and destination states make the type of evidence clear without overwhelming the visual identity

#### Scenario: Visitor compares cards in a row
- **WHEN** Design or Development cards appear in a multi-column layout
- **THEN** top tags, project titles, descriptions, and lower tags/actions align consistently enough for easy comparison

#### Scenario: Visitor reads cards on mobile
- **WHEN** Design or Development cards appear in a mobile or single-column layout
- **THEN** cards remain natural, readable, and are not forced into awkward fixed heights

#### Scenario: Visitor expands a project grid
- **WHEN** a See more control renders below a project grid
- **THEN** the control uses the existing CRT/pixel button language and remains visually secondary to project evidence cards

### Requirement: Design and Development share visual rhythm
Design and Development evidence pages SHALL use a similar layout rhythm so visitors understand they are complementary sections of the same portfolio, including consistent project card structure, expandable grid behavior, and detail-page rhythm where cards or detail pages appear on both pages in comparable layouts.

#### Scenario: Visitor moves between evidence pages
- **WHEN** a visitor navigates from Design to Development or from Development to Design
- **THEN** the page structure feels related while the content emphasis changes

#### Scenario: Visitor compares evidence card patterns
- **WHEN** project cards render on Design and Development
- **THEN** cards use compatible spacing, vertical structure, tag placement, destination state styling, and bottom-content rhythm while preserving each page's evidence emphasis

#### Scenario: Visitor opens detail pages
- **WHEN** a visitor opens Design and Development detail pages
- **THEN** both detail page types feel visually related while Design emphasises product/design reasoning and Development emphasises implementation evidence

### Requirement: Accessibility polish preserves the CRT visual identity
Accessibility, SEO, expandable-grid, detail-page, and responsive polish SHALL improve usability without replacing the dark/light theme system, CRT/pixel details, translucent surfaces, accent treatment, Devicon presentation, or expressive typography.

#### Scenario: Accessibility fixes are applied
- **WHEN** markup, labels, focus behavior, layout, or responsive sizing are adjusted
- **THEN** the page remains recognisably part of the current CRT/pixel-inspired visual system

#### Scenario: Responsive fixes are applied
- **WHEN** mobile, tablet, desktop, or zoomed layouts are refined
- **THEN** text, cards, navigation, project details, expandable controls, and controls remain readable and usable without introducing a generic portfolio style
