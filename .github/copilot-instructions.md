---
description: General coding standards and best practices for the project.
applyTo: "**"
---

# Project general coding standards

## Naming Conventions
- Use PascalCase for React component filenames and component names (e.g., `CurrencyInput.jsx`, `CurrencyChart`).
- Use camelCase for variables, functions, and methods.
- Prefix private class members or internal-only variables with an underscore (`_`).
- Use ALL_CAPS for repository-wide constants (e.g., `API_BASE_URL`) and place them in `src/constants.js` or `src/lib` as appropriate.

## Error Handling
- Use try/catch for async operations and rethrow or return structured errors from library functions (see `src/hooks/useFetchCurrency/useFetchCurrency.js`).
- Implement React error boundaries for top-level UI faults (wrap major areas in an Error Boundary component).
- Always log errors with contextual information (component name, action, payload). Avoid leaking sensitive data.

## Project-specific conventions
- Framework & tooling: This repo uses React (JSX) with Vite. Keep components functional and prefer hooks over class components.
- File locations: keep components under `src/components/` (feature folders per component), hooks in `src/hooks/`, and pure helpers in `src/lib/`.
- Data layer: Use `src/hooks/useFetchCurrency` for fetch logic and `src/lib/buildApiUrl.js` + `src/lib/mappers.js` for API URL building and response mapping.

## Components & Props
- Prefer small, focused components. Pass primitive values as props and objects only when necessary.
- Validate prop shapes with PropTypes where useful (this is a JS project). Keep props lists short (<= 6 recommended).
- Use `data-testid` only when necessary for stable test selectors; prefer accessible queries in tests.

## Styling
- Use Tailwind CSS (configured in `tailwind.config.js`). Prefer utility classes for layout and small visual tweaks.
- Keep global styles in `src/App.css`. Avoid deep, theme-scoped selectors—create small presentational classes or utility components when needed.

## Testing
- Tests live alongside code with `.test.jsx`/`.test.js` suffixes (see `src/components/*/*.test.jsx`).
- Use Jest + React Testing Library. Test behavior and accessibility, mock network calls for hooks and API logic.

## Accessibility (a11y)
- Provide semantic HTML and form labels. Ensure keyboard navigability and readable contrast.
- Use ARIA attributes only when native semantics are insufficient.

## Internationalization
- This repo contains HW items related to localization. Keep strings centralized if adding i18n (e.g., `public/locales` or a `src/i18n` folder).

## Performance
- Use `React.memo`, `useMemo`, and `useCallback` to avoid unnecessary re-renders for expensive components.

## Environment & Secrets
- Keep API keys and environment-specific values in environment variables (`.env`) and never commit secrets. If consumers need an example, add `.env.example` with placeholders.

## Linting & Formatting
- Follow the project's ESLint/Prettier settings. Run `npm run lint` and `npm run test` before opening PRs.

## Commits & PRs
- Keep commits small and focused with clear subjects. Use PRs for feature work and request a review; include a short description of what changed and why.

## Where to find things
- Components: `src/components/`
- Hooks: `src/hooks/`
- Lib/helpers: `src/lib/`
- Tests: `*.test.jsx` next to implementation files
- Styles: `src/App.css` and Tailwind config in `tailwind.config.js`
