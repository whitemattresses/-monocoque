# Monocoque

Marketing site for Monocoque, a prefabricated cross-laminated timber (CLT)
residential system for luxury hospitality — a joint offering from WHITE and
P4Architecture.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (`framer-motion`) for scroll reveals and interaction

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/` — one route per section: `/`, `/the-logic`, `/typologies`,
  `/sustainability`, `/b2b-value`, `/partnership` (WHITE x P4Architecture),
  `/contact`.
- `src/components/layout/` — `SiteHeader`, `SiteFooter`.
- `src/components/ui/` — shared primitives: `Reveal` (scroll animation),
  `SectionHeading`, `ImagePlaceholder`.
- `src/components/sections/` — page-building blocks (`PageHero`,
  `SplitFeature`, `StatGrid`, `ComparisonTable`, `ProcessSteps`,
  `ValuePillars`, `CtaBanner`, `TypologyCard`) plus `sections/home/` for
  home-page-only sections.

## Imagery

Every photo/render slot in the site is a labelled placeholder
(`<ImagePlaceholder />`) rather than a stock image, so real photography can
be dropped in without hunting through markup. To swap one in, replace the
`ImagePlaceholder` usage with a Next.js `<Image />` pointing at a file in
`public/images/`.

## Theme

Palette and type are defined in `src/app/globals.css`: Cream (`#FDFBF7`),
Charcoal (`#1C1C1C`), and a wood accent scale, paired with Playfair Display
(serif, headings) and Inter (sans, body) via `next/font/google`.
