import en from './en.json';
import es from './es.json';
import ptBr from './pt-br.json';

export const locales = ['en', 'es', 'pt-br'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const dictionaries: Record<Locale, typeof en> = {
  'en': en,
  'es': es,
  'pt-br': ptBr,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries[defaultLocale];
}

export const localeNames: Record<Locale, string> = {
  'en': 'English',
  'es': 'Español',
  'pt-br': 'Português (BR)',
};

export const localeFlags: Record<Locale, string> = {
  'en': '🇺🇸',
  'es': '🇪🇸',
  'pt-br': '🇧🇷',
};
