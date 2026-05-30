## Why

The project currently has no OpenSpec baseline specs, so future changes do not have a shared contract for the existing portfolio website. This change documents the current implementation state without modifying application code.

## What Changes

- Add OpenSpec documentation for the current Next.js portfolio structure, route responsibilities, shared shell, and navigation.
- Add OpenSpec documentation for the current CRT-inspired visual identity, typography, theme tokens, background treatment, and reusable UI utilities.
- Add OpenSpec documentation for the current data-driven content approach across About, Design, Development, and Contact pages.
- Add OpenSpec documentation for the current interactive behavior, including theme switching, typed hero text, expandable About content, contact submission, and known baseline issues.
- No implementation code, dependency, route, styling, or content behavior changes are included.

## Capabilities

### New Capabilities
- `portfolio-structure-navigation`: Documents the existing App Router structure, shared layout, header, navigation, and page responsibilities.
- `portfolio-visual-theme`: Documents the existing visual identity, font system, theme tokens, background layers, reusable UI classes, and light/dark theme behavior.
- `portfolio-content-model`: Documents the existing data-driven content modules and how pages render portfolio copy, case studies, project cards, credentials, links, and form configuration.
- `portfolio-interactions-known-issues`: Documents the existing client-side interactions and known issues that future changes should account for.

### Modified Capabilities
- None. There are no existing OpenSpec capabilities in `openspec/specs/`, and this change does not alter application behavior.

## Impact

- Affected OpenSpec files only: `openspec/changes/document-portfolio-baseline/**`.
- No application files under `app/`, `components/`, `data/`, `lib/`, or `public/` should be changed.
- No runtime APIs, dependencies, build configuration, or deployment behavior should be changed.
