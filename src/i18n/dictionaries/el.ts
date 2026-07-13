import { en, type LocalizedDictionary } from "./en";

function prefixDeep(value: unknown): unknown {
  if (typeof value === "string") return `[EL] ${value}`;
  if (Array.isArray(value)) return value.map(prefixDeep);
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, v]) => [key, prefixDeep(v)]),
    );
  }
  return value;
}

// Placeholder Greek dictionary, auto-derived from en.ts by prefixing every
// string with "[EL] ". This guarantees the structure always matches the
// English dictionary (TypeScript errors otherwise) and makes any untranslated
// string immediately visible on the page. Replace values with real Greek
// copy incrementally — no other file needs to change when you do.
export const el: LocalizedDictionary = prefixDeep(en) as LocalizedDictionary;
