import { en, type LocalizedDictionary } from "./dictionaries/en";
import { el } from "./dictionaries/el";
import type { Locale } from "./config";

const dictionaries: Record<Locale, LocalizedDictionary> = { en, el };

export function getDictionary(locale: Locale): LocalizedDictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
