## MODIFIED Requirements

### Requirement: Project cards expose click-through behaviour
Design and Development project cards SHALL communicate when deeper content or a verified destination is available and SHALL avoid implying unavailable click-through content. Cards without a verified destination or enough real internal detail content SHALL use the inactive non-clickable wording "Details Coming Soon".

#### Scenario: Project card has detail content
- **WHEN** a Design or Development project card has an associated detail route or detail view with enough real, specific content
- **THEN** the card provides an accessible interactive affordance to open that deeper content

#### Scenario: Project card has an external destination
- **WHEN** a Design or Development project card has a verified GitHub repository or relevant external URL
- **THEN** the card provides an accessible external link with safe target and `rel` behavior when it opens in a new tab

#### Scenario: Project card lacks detail content
- **WHEN** a Design or Development project card does not yet have deeper content or a verified external destination
- **THEN** it remains non-clickable and shows "Details Coming Soon" without rendering a fake link, placeholder URL, or unsupported route

#### Scenario: Thin placeholder content is avoided
- **WHEN** the detail route infrastructure exists but a project has only generic or incomplete detail content
- **THEN** its card does not link to an internal detail page

#### Scenario: Project card link markup is reviewed
- **WHEN** a card destination is rendered
- **THEN** the card avoids invalid nested interactive elements and exposes an accessible name that identifies the project and destination

### Requirement: Detail views preserve evidence context
Project detail interactions SHALL preserve whether the visitor is viewing a Design case study or Development project so the evidence emphasis remains clear.

#### Scenario: Visitor opens Design detail content
- **WHEN** a visitor opens deeper content from a Design card
- **THEN** the detail experience keeps the visitor oriented around design/product evidence and provides a clear return path to Design

#### Scenario: Visitor opens Development detail content
- **WHEN** a visitor opens deeper content from a Development card
- **THEN** the detail experience keeps the visitor oriented around implementation and technical evidence and provides a clear return path to Development

## ADDED Requirements

### Requirement: Expandable project grids reveal additional records accessibly
Design and Development project grids SHALL show the first 3 featured records by default and SHALL provide an accessible expand/collapse control only when more than 3 records exist.

#### Scenario: Design grid has more than three case studies
- **WHEN** the Design case study collection has more than 3 records
- **THEN** a button labelled "See more case studies" reveals the remaining records and exposes expanded state with `aria-expanded`

#### Scenario: Design grid is collapsed
- **WHEN** the Design grid is expanded and the visitor activates the collapse control
- **THEN** the grid returns to the first 3 records and the button label becomes "See more case studies"

#### Scenario: Development grid has more than three projects
- **WHEN** the Development project collection has more than 3 records
- **THEN** a button labelled "See more projects" reveals the remaining records and exposes expanded state with `aria-expanded`

#### Scenario: Development grid is collapsed
- **WHEN** the Development grid is expanded and the visitor activates the collapse control
- **THEN** the grid returns to the first 3 records and the button label becomes "See more projects"

#### Scenario: Grid has three records
- **WHEN** the Design or Development project collection has exactly 3 records
- **THEN** no expand/collapse control is rendered
