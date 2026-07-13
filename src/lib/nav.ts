import { ROUTES } from "@/i18n/routes";
import { withLocale } from "@/i18n/paths";
import type { Locale } from "@/i18n/config";
import type { LocalizedDictionary } from "@/i18n/dictionaries/en";

export type NavLink = {
  href: string;
  label: string;
};

export function getNavLinks(locale: Locale, dict: LocalizedDictionary): NavLink[] {
  return [
    { href: withLocale(ROUTES.theLogic, locale), label: dict.nav.theLogic },
    { href: withLocale(ROUTES.typologies, locale), label: dict.nav.typologies },
    { href: withLocale(ROUTES.sustainability, locale), label: dict.nav.sustainability },
    { href: withLocale(ROUTES.b2bValue, locale), label: dict.nav.b2bValue },
  ];
}
