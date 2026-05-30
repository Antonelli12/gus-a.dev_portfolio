## MODIFIED Requirements

### Requirement: Contact page uses contact configuration data
The Contact page SHALL use contact data for intro copy, CV href, social links, Formspree endpoint configuration, accessible GitHub and LinkedIn icon links, the existing contact form flow, and a Download CV CTA placed near the social links as a separate recruiter-facing action that remains visually distinct from icon-only social buttons.

#### Scenario: Visitor opens Contact
- **WHEN** a visitor opens `/contact`
- **THEN** the page renders contact intro copy, Download CV, GitHub, LinkedIn, the contact form, and role-direction messaging using configured contact data

#### Scenario: Visitor scans Contact actions
- **WHEN** a visitor scans Contact actions
- **THEN** social destinations and Download CV appear together as accessible actions outside the form button row, with Download CV presented as a distinct recruiter-facing CTA

## ADDED Requirements

### Requirement: CV download uses a real public asset
The portfolio SHALL provide the real CV file at the public path referenced by the Contact data model.

#### Scenario: Visitor activates Download CV
- **WHEN** a visitor activates the Download CV action
- **THEN** the configured href resolves to an existing public CV file rather than a missing asset

### Requirement: Application readiness content avoids broad rewrites
Application-readiness copy changes SHALL be limited to obvious clarity, metadata, broken-link fixes, or action labelling needed for job applications.

#### Scenario: Application readiness polish is implemented
- **WHEN** page copy is touched during this change
- **THEN** the change preserves the current developer-turned-designer narrative and avoids major rewrites or unsupported new claims
