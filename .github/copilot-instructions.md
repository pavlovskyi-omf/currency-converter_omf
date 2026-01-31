---
description: Currency Converter app coding standards and Copilot guidance
applyTo: "**"
---

# Currency Converter — Copilot Instructions

> React + Vite currency converter using CurrencyBeacon API. This file helps Copilot generate code that matches project conventions.

## Tech Stack
- **Framework:** React 18 (functional components, hooks only)
- **Build:** Vite with SWC
- **Styling:** Tailwind CSS + shadcn/ui components (Radix primitives)
- **Testing:** Vitest + React Testing Library
- **Linting:** ESLint (Airbnb config) + Prettier

## Project Structure
```
src/
├── components/          # Feature components (folder-per-component)
│   ├── CurrencyInput/   # CurrencyInput.jsx + CurrencyInput.test.jsx
│   ├── CurrencyChart/   # Recharts-based chart
│   ├── CurrencyFee/
│   ├── Skeleton/
│   └── ui/              # shadcn/ui primitives (button, input, select, chart)
├── hooks/
│   └── useFetchCurrency/  # Data fetching with caching
├── lib/
│   ├── buildApiUrl.js   # API URL construction
│   ├── mappers.js       # API response transformers
│   └── utils.js         # cn() for Tailwind class merging
constants.js             # API_KEY, API_URL (env-based)
```

## Naming & Code Style
| Element | Convention | Example |
|---------|------------|---------|
| Component files | PascalCase | `CurrencyInput.jsx` |
| Component folders | PascalCase | `src/components/CurrencyInput/` |
| Hooks | camelCase, `use` prefix | `useFetchCurrency` |
| Helper functions | camelCase | `buildApiUrl`, `mapCurrencyData` |
| Constants | ALL_CAPS | `API_KEY`, `API_URL` |
| Test files | `.test.jsx` / `.test.js` | `CurrencyInput.test.jsx` |

## Component Guidelines
- Use functional components with hooks — no class components
- Validate props with `PropTypes` (import from `prop-types`)
- Keep props ≤ 6; prefer primitives over objects
- Use `@/` path alias for imports (`@/components/...`, `@/hooks/...`, `@/lib/...`)
- Colocate tests: `ComponentName.test.jsx` in same folder

## UI Components (shadcn/ui)
- Located in `src/components/ui/` — Button, Input, Select, Chart
- Use `cn()` from `@/lib/utils` for conditional Tailwind classes
- Extend via `class-variance-authority` variants when needed

## Data Flow
1. **API URL:** `buildApiUrl(baseCurrency, targetCurrency, period)` in `src/lib/buildApiUrl.js`
2. **Fetching:** `useFetchCurrency` hook with built-in caching (`useRef`)
3. **Mapping:** `mapCurrencyData(apiResponse)` transforms raw API to `{ date, value }[]`
4. **State:** Managed in `App.jsx` with `useState`; lifted only when necessary

## API Integration
- Endpoint: CurrencyBeacon timeseries API
- Auth: `VITE_API_KEY` env variable (never commit actual key)
- Always provide `.env.example` with placeholder values

## Testing (Vitest)
```bash
npm run test        # Single run
npm run test:watch  # Watch mode
```
- Mock `fetch` for hook tests; use `@testing-library/react` for component tests
- Prefer accessible queries: `getByRole`, `getByLabelText` over `getByTestId`
- Test user behavior, not implementation details

## Styling
- Tailwind utility classes for layout and spacing
- Custom colors defined in `tailwind.config.js` (e.g., `bg-custom-grey`)
- Global overrides in `src/App.css` — keep minimal

## Before Committing
```bash
npm run lint        # ESLint check
npm run lint:fix    # Auto-fix
npm run format      # Prettier
npm run test        # Vitest
```

## Common Patterns

### Adding a new component
1. Create folder: `src/components/MyComponent/`
2. Add `MyComponent.jsx` with PropTypes
3. Add `MyComponent.test.jsx` with RTL tests
4. Import via `@/components/MyComponent/MyComponent`

### Adding a new hook
1. Create folder: `src/hooks/useMyHook/`
2. Export from `useMyHook.js`
3. Add `useMyHook.test.jsx` for async/state testing

### Extending API
1. Update `buildApiUrl.js` for new params
2. Add mapper in `mappers.js` if response shape differs
3. Update or create hook for data fetching
