---
description: 'ReactJS development standards and best practices'
applyTo: '**/*.jsx, **/*.tsx, **/*.js, **/*.ts, **/*.css, **/*.scss'
---

# ReactJS Development Instructions

This repository uses plain JavaScript + React (Vite) and Tailwind for styling. The guidance below is intentionally concise and aligned with the code and conventions actually used in this project.

## Project snapshot
- Framework: React (JSX) with Vite
- Language: JavaScript (no TypeScript in repository)
- Styling: Tailwind CSS
- Tests: Jest + React Testing Library

## Key conventions (keep these short and actionable)
- Components: functional components with hooks (folder: `src/components/`). Use PascalCase for component filenames and component names (e.g., `CurrencyInput.jsx`).
- Hooks: keep reusable logic in `src/hooks/` (e.g., `useFetchCurrency`).
- Lib/helpers: pure helpers live in `src/lib/` (e.g., `buildApiUrl.js`, `mappers.js`).
- Props & types: use PropTypes where helpful; keep props lists small and prefer primitives.
- State: use `useState` / `useReducer` for local state; lift state up only when necessary.
- Styling: prefer Tailwind utility classes and small presentational classes in `src/App.css` when needed.
- Naming: camelCase for functions/variables; ALL_CAPS for repository-wide constants (place in `constants.js`).
- Error handling: use try/catch for async operations and surface meaningful error states to UI.
- Tests: place tests next to files (`*.test.jsx` / `*.test.js`); mock network calls for hooks and API logic.
- Accessibility: use semantic HTML, labels for inputs, and keyboard navigable controls.
- Environment: keep API keys and environment-specific values in `.env` and add `.env.example` with placeholders; do not commit secrets.
- Linting & formatting: follow repository ESLint/Prettier settings; run `npm run lint` and `npm run test` before PRs.

## Files & where to find things
- Components: `src/components/`
- Hooks: `src/hooks/`
- Helpers: `src/lib/`
- Tests: alongside implementation (`*.test.jsx`)
- Styles: `src/App.css` and `tailwind.config.js`

## Minimal checklist for PRs
- Follow naming and folder conventions
- Add or update tests for new behavior
- Run `npm run lint` and `npm run test` locally
- Include `.env.example` changes if adding new env vars

Keep this file focused — it's a quick reference for contributors rather than a full React handbook.