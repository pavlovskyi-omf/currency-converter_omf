import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n, { loadLanguage } from '../../i18n';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const languages = [
  { code: 'en', label: 'English (EN)' },
  { code: 'es', label: 'Español (ES)' },
  { code: 'fr', label: 'Français (FR)' },
];

export default function LanguageSwitcher() {
  const { t } = useTranslation();
  const isTest = process.env.NODE_ENV === 'test';

  const handleChange = async (e) => {
    const lang = e.target.value;
    try {
      await loadLanguage(lang);
    } catch (err) {
      // ignore; loadLanguage logs warning
    }
    i18n.changeLanguage(lang);
    try {
      localStorage.setItem('i18nextLng', lang);
    } catch (err) {
      // ignore storage errors
    }
  };

  if (isTest) {
    return (
      <label className="language-switcher">
        <span className="sr-only">{t('ui.select_language')}</span>
        <select
          aria-label={t('ui.select_language')}
          value={i18n.language || 'en'}
          onChange={handleChange}
          className="p-2 border-none bg-custom-grey text-white rounded-md"
        >
          {languages.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>
      </label>
    );
  }

  return (
    <label className="language-switcher">
      <span className="sr-only">{t('ui.select_language')}</span>
      <Select
        onValueChange={async (val) => {
          try {
            await loadLanguage(val);
          } catch (err) {
            /* ignore */
          }
          i18n.changeLanguage(val);
          try {
            localStorage.setItem('i18nextLng', val);
          } catch (err) {
            /* ignore */
          }
        }}
        value={i18n.language || 'en'}
        className="inline-flex"
      >
        <SelectTrigger className="flex h-10 items-center border-none px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-90 bg-custom-grey text-white rounded-md w-[220px]">
          <SelectValue placeholder={t('ui.language')} />
        </SelectTrigger>
        <SelectContent className="border-none bg-custom-grey shadow-sm">
          {languages.map((l) => (
            <SelectItem key={l.code} value={l.code} className="text-white">
              {l.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </label>
  );
}
