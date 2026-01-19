
# Home Task 01: Multi-Language Localization with GitHub Copilot

## Goal
Update the application to support **multi-language localization** using GitHub Copilot:

- Supported languages: **English (default), Spanish, French**
- Language switcher in the UI
- Persist selected language between reloads
- **Add or update unit tests** to validate localization behavior
- Use **GitHub Copilot Plan mode, Background/Cloud Agents, and Local Agent review**

Repository:
https://github.com/pavlovskyi-omf/currency-converter_omf

---

## Part 0 — Prerequisites
- Node.js (LTS recommended)
- GitHub Copilot enabled in your IDE (VS Code recommended)

---

## Part 1 — Clone & Run the Application (Baseline)

Follow the steps from `README.md`.

```bash
git clone https://github.com/pavlovskyi-omf/currency-converter_omf.git
cd currency-converter_omf
npm install
```

- Create an account at [Currency Beacon](https://currencybeacon.com/) and obtain your API key.

Create `.env` file:
```env
VITE_API_KEY=your_api_key_here
```

Run the app:
```bash
npm run dev
```

Run existing tests:
```bash
npm run test
```

**Deliverables**
- Application runs locally
- Existing tests pass before changes

---

## Part 2 — Copilot Chat: Plan Mode

Open **GitHub Copilot Chat** and switch to **Plan** mode.

### Initial Prompt (use exactly)
> Update the application to support multi-language localization.  
> Add support for the following languages: English, Spanish, and French.  
> Set English as the default language.

### Your plan must include
1. Localization approach / library
2. Translation file structure
3. Default & fallback language behavior
4. Language switcher UX
5. Persistence strategy (e.g., localStorage)
6. **Unit testing strategy**
7. Risks and rollback plan

**Deliverable**
- Save the plan as `docs/localization-plan.md`
- Commit it to the repository

---

## Part 3 — Implementation (Background or Cloud Agent)

Create a feature branch:
```bash
git checkout -b feature/i18n
```

Implementation requirements:
- English as default language
- Spanish & French translations
- No hardcoded UI strings (where reasonable)
- Language switcher in UI
- Persist selected language
- Incremental commits with clear messages

---

## Part 4 — Add / Update Unit Tests (Mandatory)

Extend or add unit tests using Copilot (Edit or Agent mode).

### Required test scenarios
- Default language is English
- Language switching updates UI text
- Spanish and French translations render correctly
- Language persistence after reload
- Fallback to English for missing keys
- App renders without crashing

Run tests:
```bash
npm run test
```

**Deliverables**
- New or updated unit tests committed
- All tests passing

---

## Part 5 — Local Agent Code Review

Ask a **Local Agent** to review your work.

### Suggested prompt
> Review my localization implementation and tests.  
> Check i18n setup, missing translations, default/fallback behavior,  
> unit test quality, maintainability, and performance.  
> Provide actionable improvement suggestions.

Apply **2–5 improvements** and commit fixes.

---

## Part 6 — Reflection (Next Session)

Prepare 3 short points:
1. Best Copilot prompt you used
2. Biggest challenge and how AI helped
3. Share AI use cases you appled in your project

---
