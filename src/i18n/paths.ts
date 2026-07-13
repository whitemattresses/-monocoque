import { defaultLocale, isLocale, locales, type Locale } from "./config";

/**
 * Build the href for a canonical (English, unprefixed) path in a given locale.
 * The default locale is never prefixed — every other locale is prefixed with
 * its code, e.g. withLocale("/typologies/", "el") -> "/el/typologies/".
 */
export function withLocale(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  if (path === "/") return `/${locale}/`;
  return `/${locale}${path}`;
}

/**
 * Given the current pathname, return which locale it belongs to and the
 * canonical (unprefixed) path within that locale — the inverse of
 * withLocale(). Used by the language switcher and header/footer to figure
 * out "where am I" without hardcoding every route.
 */
export function splitLocaleFromPathname(pathname: string): {
  locale: Locale;
  canonicalPath: string;
} {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (first && isLocale(first) && first !== defaultLocale) {
    const rest = segments.slice(1).join("/");
    return {
      locale: first,
      canonicalPath: rest ? `/${rest}/` : "/",
    };
  }

  const rest = segments.join("/");
  return {
    locale: defaultLocale,
    canonicalPath: rest ? `/${rest}/` : "/",
  };
}

/** Convenience: current locale for a pathname, defaulting to English. */
export function localeFromPathname(pathname: string): Locale {
  return splitLocaleFromPathname(pathname).locale;
}

/** Every supported locale paired with the equivalent href for the current page. */
export function localizedAlternates(pathname: string): { locale: Locale; href: string }[] {
  const { canonicalPath } = splitLocaleFromPathname(pathname);
  return locales.map((locale) => ({
    locale,
    href: withLocale(canonicalPath, locale),
  }));
}
