## ADDED Requirements

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
Large hero/page titles SHALL preserve expressive display typography while scaling appropriately on mobile and avoiding horizontal overflow.

#### Scenario: Visitor scans updated hero titles
- **WHEN** a visitor scans page headings and highlighted words
- **THEN** the highlighted words use the approved display treatment consistently without globally enlarging highlight font sizing

#### Scenario: Visitor uses phone-sized screen
- **WHEN** hero/page titles render on a phone-sized screen
- **THEN** title text remains readable, balanced, and contained within the viewport

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
