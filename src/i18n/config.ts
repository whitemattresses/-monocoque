export const locales = ["en", "el"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  el: "EL",
};

export const htmlLangByLocale: Record<Locale, string> = {
  en: "en",
  el: "el",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
