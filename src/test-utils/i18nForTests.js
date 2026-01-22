import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from '../locales/en/common.json';
import esCommon from '../locales/es/common.json';
import frCommon from '../locales/fr/common.json';

export function initTestI18n({ lng = (typeof localStorage !== 'undefined' && localStorage.getItem('i18nextLng')) || 'en', resources } = {}) {
  // allow localStorage to dictate initial language when present (mirrors production behavior)
  const res =
    resources ||
    ({
      en: { common: enCommon },
      es: { common: esCommon },
      fr: { common: frCommon },
    });

  i18n.use(initReactI18next).init({
    lng,
    fallbackLng: 'en',
    resources: res,
    ns: ['common'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

  return i18n;
}
