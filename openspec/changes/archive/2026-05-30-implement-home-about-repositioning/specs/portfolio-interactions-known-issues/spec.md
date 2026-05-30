## MODIFIED Requirements

### Requirement: Typed greeting cycles through current professional phrases
The Home hero SHALL type, hold, delete, and cycle through developer-turned-designer positioning phrases using the existing timing pattern, while avoiding generic Frontend Engineer or Software Engineer as the main identity and avoiding too many role labels at once.

#### Scenario: Visitor watches the home hero
- **WHEN** reduced motion is not requested
- **THEN** the hero starts with the greeting pattern and rotates through credible phrases such as Developer turned Designer, UX Engineer, Technical Product Designer, Product-first Engineer, Designer with technical depth, and AI-aware product workflow language

#### Scenario: Visitor scans hero label density
- **WHEN** the Home hero displays a phrase
- **THEN** the displayed phrase presents one clear positioning idea at a time instead of stacking multiple role labels together

### Requirement: Typed greeting respects reduced motion
The typed greeting SHALL provide a static reduced-motion presentation when the visitor has requested reduced motion, and the static copy SHALL reflect the developer-turned-designer positioning.

#### Scenario: Visitor prefers reduced motion
- **WHEN** the browser reports `prefers-reduced-motion: reduce`
- **THEN** the hero skips the typing/deleting animation and displays stable developer-turned-designer intro text

## ADDED Requirements

### Requirement: Home CTAs preserve next-step clarity
The Home page SHALL keep clear interactive calls to view Design work and Development work.

#### Scenario: Visitor activates Home CTA
- **WHEN** a visitor activates a Home call to action
- **THEN** they are taken to either the Design page or the Development page

### Requirement: About expansion remains compatible with revised content
If the About page keeps an expandable long-form story, the expansion control SHALL remain understandable, keyboard-accessible, and compatible with the revised transition narrative.

#### Scenario: Visitor expands About story
- **WHEN** a visitor activates the About expansion control
- **THEN** the page reveals additional transition narrative without hiding key positioning content behind the collapsed state

### Requirement: Responsive navbar remains usable across breakpoints
The shared header SHALL keep a single-row navbar on wider screens and use a compact two-row layout only on phone-sized screens. The theme toggle SHALL NOT overlap Home or any navigation item.

#### Scenario: Visitor uses wider screen navigation
- **WHEN** the viewport is tablet-sized or desktop-sized
- **THEN** navigation appears in one row ordered as theme toggle, Home, About, Design, Development, Contact

#### Scenario: Visitor uses phone navigation
- **WHEN** the viewport is phone-sized
- **THEN** the compact navigation uses top row theme switch/Home/About/Contact and bottom row Design/Development without horizontal overflow

### Requirement: Contact links remain accessible after icon conversion
Contact social links SHALL remain accessible when shown as icon buttons.

#### Scenario: Visitor uses assistive technology on Contact
- **WHEN** GitHub and LinkedIn are rendered as icon-only links
- **THEN** each link has an accessible label that identifies its destination

### Requirement: Not-found page offers recovery
The custom not-found page SHALL include a clear action that returns visitors to Home.

#### Scenario: Visitor reaches an unknown route
- **WHEN** a visitor lands on the not-found experience
- **THEN** they can activate a Return home action that navigates to `/`

### Requirement: AppleDouble sidecars remain uncommitted
Generated macOS AppleDouble `._*` sidecar files SHALL be cleaned or ignored separately from OpenSpec and implementation work.

#### Scenario: Validation sees generated sidecars
- **WHEN** `._*` files appear during development from external macOS storage
- **THEN** they are treated as generated artifacts and are not committed
