import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enCommon from './locales/en/common.json';

const DEFAULT_LANG = 'en';

const loadedLanguages = new Set();

// initialize only if not already initialized (avoids re-init during tests)
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).use(LanguageDetector).init({
    resources: {
      en: { common: enCommon },
    },
    lng: localStorage.getItem('i18nextLng') || DEFAULT_LANG,
    fallbackLng: DEFAULT_LANG,
    ns: ['common'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

  loadedLanguages.add('en');
}

// Dynamic loader for additional languages (Vite-friendly dynamic import)
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
