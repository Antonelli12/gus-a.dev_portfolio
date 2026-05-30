# portfolio-interactions-known-issues Specification

## Purpose
TBD - created by archiving change document-portfolio-baseline. Update Purpose after archive.
## Requirements
### Requirement: Theme initialization avoids hydration mismatch
The site SHALL initialize `html.dataset.theme` before hydration using saved `localStorage` preference when available, otherwise using the visitor's light color-scheme preference, otherwise defaulting to dark.

#### Scenario: Saved theme exists
- **WHEN** `localStorage.theme` is `light` or `dark` before the page hydrates
- **THEN** the document theme is set to the saved value before React renders the body content

#### Scenario: No saved theme exists
- **WHEN** no valid saved theme exists
- **THEN** the document theme is set from `prefers-color-scheme: light` when matched, or dark otherwise

### Requirement: Theme toggle persists the selected theme
The theme toggle SHALL switch between dark and light themes, update `document.documentElement.dataset.theme`, persist the selection in `localStorage`, and expose pressed state for assistive technologies.

#### Scenario: Visitor toggles theme
- **WHEN** a visitor activates the theme toggle
- **THEN** the site switches to the opposite theme and stores that theme as the future preference

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

### Requirement: Origin story expands and collapses client-side
The About origin story SHALL initially show a shortened version with a fade and provide a button to expand or collapse the full story.

#### Scenario: Visitor expands origin story
- **WHEN** a visitor activates "Read more"
- **THEN** the origin story expands, the fade hides, and the button changes to "Show less"

#### Scenario: Visitor collapses origin story
- **WHEN** a visitor activates "Show less"
- **THEN** the origin story returns to the shortened view and the button changes to "Read more"

### Requirement: Contact form submits to the configured endpoint
The Contact form SHALL submit form data to the configured Formspree endpoint using POST with `Accept: application/json`, show a submitting state, reset on success, and show success or error feedback.

#### Scenario: Contact submission succeeds
- **WHEN** the visitor submits valid contact form data and the endpoint returns a successful response
- **THEN** the form resets and a success message is shown temporarily

#### Scenario: Contact submission fails
- **WHEN** the endpoint returns a non-success response or the request throws
- **THEN** an error message is shown temporarily and the visitor can try again or use LinkedIn

### Requirement: Baseline known issues are recorded
The baseline SHALL record current non-blocking issues without requiring this change to fix them.

#### Scenario: Future change reviews known issues
- **WHEN** a future proposal evaluates baseline issues
- **THEN** it can see that the configured CV PDF is missing from `public/`, `contactSection.title` is currently unused by the Contact page, the README is still default create-next-app content, `public/` contains default scaffold SVG assets rather than portfolio-specific media, and macOS development from an external SSD may generate `._*` AppleDouble sidecar files that should not be committed

#### Scenario: AppleDouble sidecar files appear
- **WHEN** generated `._*` AppleDouble sidecar files appear during macOS development from an external SSD
- **THEN** they should be ignored or cleaned up separately from OpenSpec documentation work and should not be committed as project artifacts

### Requirement: Project cards expose click-through behaviour
Design and Development project cards SHALL communicate that deeper content is available when click-through content exists.

#### Scenario: Project card has detail content
- **WHEN** a Design or Development project card has an associated detail route or detail view
- **THEN** the card provides an accessible interactive affordance to open that deeper content

#### Scenario: Project card lacks detail content
- **WHEN** a Design or Development project card does not yet have deeper content
- **THEN** it avoids implying unavailable click-through content

### Requirement: Detail views preserve evidence context
Project detail interactions SHALL preserve whether the visitor is viewing a Design case study or Development project so the evidence emphasis remains clear.

#### Scenario: Visitor opens Design detail content
- **WHEN** a visitor opens deeper content from a Design card
- **THEN** the detail experience keeps the visitor oriented around design/product evidence

#### Scenario: Visitor opens Development detail content
- **WHEN** a visitor opens deeper content from a Development card
- **THEN** the detail experience keeps the visitor oriented around implementation and technical evidence

### Requirement: Contact interaction supports repositioned conversion
The Contact page SHALL make it clear how to access Gus's CV, GitHub, LinkedIn, and message form, while supporting conversion for UX Engineer, Technical Product Designer, Product-minded Frontend Developer, and AI/Product workflow opportunities.

#### Scenario: Visitor decides to contact Gus
- **WHEN** a visitor reaches the Contact page after reviewing the repositioned portfolio
- **THEN** the available actions support contacting Gus and evaluating relevant role fit

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

