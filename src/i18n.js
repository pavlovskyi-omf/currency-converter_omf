import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enCommon from './locales/en/common.json';

const DEFAULT_LANG = 'en';

const loadedLanguages = new Set();

// Helper to safely get language from localStorage
function getStoredLanguage() {
  try {
    return localStorage.getItem('i18nextLng');
  } catch (err) {
    return null;
  }
}

// initialize only if not already initialized (avoids re-init during tests)
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).use(LanguageDetector).init({
    resources: {
      en: { common: enCommon },
    },
    lng: getStoredLanguage() || DEFAULT_LANG,
    fallbackLng: DEFAULT_LANG,
    ns: ['common'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

  loadedLanguages.add('en');
}

/**
 * Dynamically loads a language translation bundle using Vite's dynamic import.
 * Prevents redundant loading by tracking already loaded languages.
 * 
 * @param {string} lang - The language code to load (e.g., 'es', 'fr')
 * @returns {Promise<void>} Resolves when language is loaded, rejects on error
 */
export async function loadLanguage(lang) {
  if (!lang || loadedLanguages.has(lang)) return Promise.resolve();

  try {
    const module = await import(`./locales/${lang}/common.json`);
    const resources = module.default || module;
    i18n.addResourceBundle(lang, 'common', resources, true, true);
    loadedLanguages.add(lang);
    return Promise.resolve();
  } catch (err) {
    // If loading fails, fallback to default
    // eslint-disable-next-line no-console
    console.warn(`Could not load locale ${lang}`, err);
    return Promise.reject(err);
  }
}

export default i18n;
