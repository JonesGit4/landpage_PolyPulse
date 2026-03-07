import type { Dictionary } from './types';
import en from './en.json';
import es from './es.json';
import ptBr from './pt-br.json';

export const locales = ['en', 'es', 'pt-br'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const dictionaries: Record<Locale, Dictionary> = {
  'en': en as unknown as Dictionary,
  'es': es as unknown as Dictionary,
  'pt-br': ptBr as unknown as Dictionary,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries[defaultLocale];
}
