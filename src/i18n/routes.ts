// Canonical, locale-neutral route paths (always the unprefixed/English form).
// Used together with withLocale() to build the actual href for a given locale.
export const ROUTES = {
  home: "/",
  theLogic: "/the-logic/",
  typologies: "/typologies/",
  sustainability: "/sustainability/",
  b2bValue: "/b2b-value/",
  contact: "/contact/",
} as const;

export type RouteKey = keyof typeof ROUTES;
