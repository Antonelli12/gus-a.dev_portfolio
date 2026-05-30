## MODIFIED Requirements

### Requirement: Typed greeting cycles through current professional phrases
The home hero SHALL type, hold, delete, and cycle through developer-turned-designer positioning phrases using the configured timing phases, while avoiding generic Frontend Engineer or Software Engineer as the main identity.

#### Scenario: Visitor watches the home hero
- **WHEN** reduced motion is not requested
- **THEN** the hero can rotate through phrases such as Developer turned Designer, UX Engineer, Technical Product Designer, Product-first Engineer, Designer with technical depth, and Building usable products with code, design, and AI-aware workflows

## ADDED Requirements

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
