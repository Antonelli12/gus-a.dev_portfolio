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
The home hero SHALL type, hold, delete, and cycle through developer-turned-designer positioning phrases using the configured timing phases, while avoiding generic Frontend Engineer or Software Engineer as the main identity.

#### Scenario: Visitor watches the home hero
- **WHEN** reduced motion is not requested
- **THEN** the hero can rotate through phrases such as Developer turned Designer, UX Engineer, Technical Product Designer, Product-first Engineer, Designer with technical depth, and Building usable products with code, design, and AI-aware workflows

### Requirement: Typed greeting respects reduced motion
The typed greeting SHALL provide a static reduced-motion presentation when the visitor has requested reduced motion.

#### Scenario: Visitor prefers reduced motion
- **WHEN** the browser reports `prefers-reduced-motion: reduce`
- **THEN** the hero skips the typing/deleting animation and displays the intro text in a stable state

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

