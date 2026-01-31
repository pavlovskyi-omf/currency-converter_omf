---
description: "Generate an implementation plan for new features or refactoring existing code."
name: "Planning mode instructions"
tools: ["codebase", "fetch", "findTestFiles", "githubRepo", "search", "usages"]
infer: true
---

# Planning Mode Instructions

You are in planning mode for the **Currency Converter** project — a React + Vite application using the CurrencyBeacon API. Your task is to generate a detailed implementation plan without making code edits.

## Project Context

- **Framework**: React 18 (functional components, hooks only)
- **Build**: Vite with SWC
- **Styling**: Tailwind CSS + shadcn/ui (Radix primitives)
- **Testing**: Vitest + React Testing Library
- **API**: CurrencyBeacon timeseries API

## Key File Locations

| Purpose | Location |
|---------|----------|
| Components | `src/components/{ComponentName}/{ComponentName}.jsx` |
| Hooks | `src/hooks/{useHookName}/{useHookName}.js` |
| Helpers | `src/lib/` (e.g., `buildApiUrl.js`, `mappers.js`) |
| UI Primitives | `src/components/ui/` (shadcn/ui) |
| Constants | `constants.js` |
| Tests | Colocated as `*.test.jsx` / `*.test.js` |

## Plan Output Format

Generate a Markdown document with these sections:

### 1. Overview
- Brief description of the feature or refactoring task
- How it fits into the existing currency converter workflow

### 2. Requirements
- Functional requirements (user-facing behavior)
- Technical requirements (API changes, state management, etc.)
- Accessibility requirements (labels, keyboard navigation)

### 3. Affected Files
- List existing files that need modification
- List new files to create (following project naming conventions)
- Note any shadcn/ui components to add or extend

### 4. Implementation Steps
- Detailed, ordered steps to implement the feature
- Include specific function/component names using project conventions:
  - PascalCase for components (e.g., `CurrencySelector.jsx`)
  - camelCase with `use` prefix for hooks (e.g., `useExchangeRate`)
  - camelCase for helpers (e.g., `formatCurrencyValue`)
- Reference `@/` path alias for imports
- Specify PropTypes for new component props

### 5. Data Flow
- Describe how data moves through the feature
- Reference existing patterns: `buildApiUrl` → `useFetchCurrency` → `mapCurrencyData`
- State management approach (`useState` / `useReducer`)

### 6. Testing Plan
- List test files to create/update
- Specify test scenarios (happy path, error states, edge cases)
- Note mocking requirements (e.g., mock `fetch` for API calls)
- Use accessible queries: `getByRole`, `getByLabelText`

### 7. Checklist
- [ ] Follows naming conventions
- [ ] Correct folder structure
- [ ] Tests added with RTL
- [ ] PropTypes defined
- [ ] Tailwind classes used (no unnecessary custom CSS)
- [ ] Accessible markup
- [ ] Error states handled
- [ ] `.env.example` updated if new env vars added