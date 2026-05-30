## MODIFIED Requirements

### Requirement: Baseline known issues are recorded
The baseline SHALL record current non-blocking issues without requiring unrelated changes to fix them. After application-readiness polish, the configured CV PDF SHALL no longer be listed as missing if the real file has been added successfully.

#### Scenario: Future change reviews known issues
- **WHEN** a future proposal evaluates baseline issues
- **THEN** it can see remaining known issues such as default README content, any default scaffold SVG assets that were not safely removable, and macOS development from an external SSD generating `._*` AppleDouble sidecar files that should not be committed

#### Scenario: AppleDouble sidecar files appear
- **WHEN** generated `._*` AppleDouble sidecar files appear during macOS development from an external SSD
- **THEN** they should be ignored or cleaned up separately from OpenSpec documentation work and should not be committed as project artifacts

### Requirement: Contact interaction supports repositioned conversion
The Contact page SHALL make it clear how to access Gus's CV, GitHub, LinkedIn, and message form, while supporting conversion for UX Engineer, Technical Product Designer, Product-minded Frontend Developer, and AI/Product workflow opportunities. Contact actions SHALL be verified during application-readiness polish.

#### Scenario: Visitor decides to contact Gus
- **WHEN** a visitor reaches the Contact page after reviewing the repositioned portfolio
- **THEN** the available actions support contacting Gus and evaluating relevant role fit

#### Scenario: Application links are verified
- **WHEN** application-readiness polish is implemented
- **THEN** GitHub, LinkedIn, Download CV, and configured contact form links are inspected or validated so obvious broken-link issues are addressed

## ADDED Requirements

### Requirement: CV download remains keyboard accessible
The Download CV action SHALL remain reachable by keyboard and expose understandable link text or an accessible name.

#### Scenario: Visitor tabs through Contact actions
- **WHEN** a keyboard user reaches the Contact action cluster
- **THEN** Download CV, GitHub, and LinkedIn are focusable and clearly identifiable

### Requirement: Application readiness avoids browser-automation dependency
Application-readiness validation SHALL rely on code inspection and local validation commands unless a later implementation instruction explicitly requests browser automation.

#### Scenario: Readiness checks are reported
- **WHEN** implementation validation is reported
- **THEN** the report identifies link/file checks, lint/build results, and any cleanup performed without requiring screenshot automation
