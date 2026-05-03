import { en } from './en';
import { de } from './de';

export type Lang = 'en' | 'de';
export type { Translations } from './en';

export const translations = { en, de } as const;

export function getT(lang: Lang) {
  return translations[lang] ?? translations.en;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'de') return 'de';
  return 'en';
}

export function getAlternateLangUrl(url: URL): string {
  const [, lang, ...rest] = url.pathname.split('/');
  const other = lang === 'de' ? 'en' : 'de';
  return ['', other, ...rest].join('/') || `/${other}/`;
}
