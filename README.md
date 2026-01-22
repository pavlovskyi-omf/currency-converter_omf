# Currency Converter

This is a currency conversion and chart visualization project that allows users to convert values between different currencies and view the exchange rate over different periods. The project was built using Vite + React and leverages the [Currency Beacon API](https://currencybeacon.com/) to fetch exchange rates.

## Features

- **Currency Conversion**: Convert values between various currencies.
- **Chart Visualization**: View the exchange rate trends over different periods, such as 5 days or 1 month.
- **Intuitive Interface**: A user-friendly and responsive interface that works on any device.
- **Localization (i18n)**: Multi-language support (English default, Spanish and French included). Translations are lazy-loaded and the user's language selection is persisted.
- **Testing**: The project includes unit tests written with [Vitest](https://vitest.dev/).

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Vite**: Frontend build tool with minimal configuration.
- **Currency Beacon API**: API used to fetch currency conversion data.
- **Shadcn**: UI component library used for building components.
- **Tailwind CSS**: CSS framework for styling.
- **Lucide Icons**: Icon set used throughout the interface.
- **Vitest**: Unit testing framework.

## Requirements

- **Node.js**: Ensure that Node.js is installed on your machine. [Download Node.js](https://nodejs.org/)

## Installation

1. **Clone the repository**:

```bash
git clone https://github.com/pavlovskyi-omf/currency-converter_omf.git
cd currency-converter_omf
```

2. **Install dependencies**:

```bash
npm install
```

### API Configuration

The project uses the [Currency Beacon API](https://currencybeacon.com/) to fetch exchange rates. To run the project correctly, you need an API key.

- Create an account at Currency Beacon and obtain your API key.
- Create a `.env` file in the root directory of the project and add your API key:

```env
VITE_API_KEY=your_api_key_here
```

3. **Start the development server**:

```bash
npm run dev
```

## Localization (i18n)

This project uses `i18next` + `react-i18next` for localization. Summary:

- Supported languages: English (default), Spanish (`es`) and French (`fr`).
- Translation files are located at `src/locales/<lang>/common.json` (for example `src/locales/es/common.json`).
- Translations are lazy-loaded at runtime using the `loadLanguage(lang)` helper exported from `src/i18n.js`.
- The selected language is persisted to `localStorage` under the key `i18nextLng` so the app restores the user's choice on reload.
- The language selector component is `src/components/LanguageSwitcher/LanguageSwitcher.jsx`.

How to add a new language:

1. Create `src/locales/<lang>/common.json` and add the translation keys used across the app.
2. The dynamic loader (`loadLanguage`) will import the JSON when the user switches to the new language — no build changes required.
3. To include the language in unit tests, either import the locale JSON into `src/test-utils/i18nForTests.js` or add the resources to the test initializer.

## Testing

- Run all unit tests with:

```bash
npm run test
```

- Tests use a deterministic i18n initializer: `src/test-utils/i18nForTests.js`. Make sure tests call `initTestI18n()` before importing components that use `useTranslation()` to avoid react-i18next initialization warnings.
- If tests assert translated strings, ensure the test-i18n helper includes the language resource or the specific keys being asserted.

## Notes and Troubleshooting

- Charts (Recharts) need a non-zero container size in the test environment; a minimum height is provided in the test helpers/components to avoid warnings about width/height being 0.
- If you see a react-i18next warning about passing an i18n instance in tests, re-order the test initialization so `initTestI18n()` runs before component imports.
- Language persistence: clear `localStorage` during testing when you need to reset the selected language.

## Contributing

If you add translations or change translation keys:

- Update the `src/locales/*/common.json` files.
- Run tests and add/adjust tests for any new UI strings as needed.

## License

MIT
# Currency Converter

This is a currency conversion and chart visualization project that allows users to convert values between different currencies and view the exchange rate over different periods. The project was built using Vite + React and leverages the [Currency Beacon API](https://currencybeacon.com/) to fetch real-time exchange rates.

## Features

- **Currency Conversion**: Convert values between various currencies.
- **Chart Visualization**: View the exchange rate trends over different periods, such as 5 days or 1 month.
- **Intuitive Interface**: A user-friendly and responsive interface that works seamlessly on any device.
- **Testing**: The project includes unit tests written with [Vitest](https://vitest.dev/).

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Vite**: Frontend build tool with minimal configuration.
- **Currency Beacon API**: API used to fetch currency conversion data.
- **Shadcn**: UI component library used for building components.
- **Tailwind CSS**: CSS framework for styling.
- **Lucide Icons**: Icon set used throughout the interface.
- **Vitest**: A blazing-fast unit testing framework.

## Requirements

- **Node.js**: Ensure that Node.js is installed on your machine. [Download Node.js](https://nodejs.org/)

## Installation

Follow the steps below to set up and run the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```

2. **Clone the repository**:

   ```bash
   npm install
   ```

3. **API Configuration:**:

The project uses the [Currency Beacon API](https://currencybeacon.com/) to fetch exchange rates. To run the project correctly, you need an API key.

- Create an account at [Currency Beacon](https://currencybeacon.com/) and obtain your API key.
- Create a .env file in the root directory of the project and add your API key:

  ```bash
   VITE_API_KEY=your_api_key_here
  ```

3. **Start the development server:**:
   ```bash
   npm run dev
   ```

## Running Tests

This project includes unit tests using [Vitest](https://vitest.dev/). To run the tests, use the following command:

```bash
npm run test
```
