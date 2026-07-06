import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import TypologyCard from "@/components/sections/TypologyCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Typologies",
  description:
    "Six Monocoque typologies — from single-key pavilions to multi-key villas — built from one engineered CLT system.",
};

const typologies = [
  {
    name: "The Pavilion Suite",
    keys: "Single-key",
    size: "68 m²",
    setting: "Garden",
    description:
      "An entry-level footprint for high-density hospitality sites — a compact, single-volume suite with a private outdoor terrace.",
    imageLabel: "Pavilion Suite — Exterior, Garden Setting",
  },
  {
    name: "The Canopy Villa",
    keys: "Two-key",
    size: "140 m²",
    setting: "Forest",
    description:
      "Raised on a slender timber undercroft, the Canopy Villa sits above the forest floor, connecting two keys around a shared deck.",
    imageLabel: "Canopy Villa — Elevated Deck, Forest Setting",
  },
  {
    name: "The Overwater Residence",
    keys: "Three-key",
    size: "210 m²",
    setting: "Water",
    description:
      "Engineered for marine substructure integration, this typology extends the CLT shell over water with full-height glazing.",
    imageLabel: "Overwater Residence — Water Level Terrace",
  },
  {
    name: "The Ridge House",
    keys: "Four-key",
    size: "280 m²",
    setting: "Highland",
    description:
      "A stepped-section villa designed for sloped terrain, using the CLT panel system to cantilever over dramatic topography.",
    imageLabel: "Ridge House — Cantilevered Elevation",
  },
  {
    name: "The Courtyard Retreat",
    keys: "Five-key",
    size: "340 m²",
    setting: "Desert",
    description:
      "Keys are arranged around a private central courtyard, using the CLT shell's thermal mass to moderate arid climates.",
    imageLabel: "Courtyard Retreat — Central Courtyard, Desert Setting",
  },
  {
    name: "The Signature Estate",
    keys: "Six-key",
    size: "460 m²",
    setting: "Coastal",
    description:
      "The flagship configuration — a multi-volume estate for branded residences and ultra-luxury coastal resorts.",
    imageLabel: "Signature Estate — Coastal Elevation",
  },
];

export default function TypologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Typologies"
        title="One System, Many Silhouettes"
        description="Every Monocoque typology shares the same engineered CLT core — reconfigured in plan, section, and material finish to answer the site, climate, and brand it is built for."
      />

      <section className="section-y border-b border-line">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="The Range"
            title="Six Configurations, One Engineered Core"
            description="Each typology below is a starting template, not a fixed product — dimensions, key counts, and material finishes are adapted to your site during design development."
          />

          <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {typologies.map((typology, i) => (
              <TypologyCard key={typology.name} {...typology} delay={(i % 3) * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-b border-line bg-cream-dim">
        <div className="container-editorial grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <Reveal>
            <p className="tracking-wide-label text-[0.7rem] uppercase text-wood">
              Customisation
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.15] md:text-5xl">
              Beyond the Standard Range
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-charcoal/65 md:text-lg">
              The typologies shown here represent Monocoque&apos;s proven
              configurations, refined across prior deployments. For sites with
              unusual topography, code requirements, or a distinct
              architectural brief, our design team works directly with your
              architect of record to adapt the CLT system to a bespoke plan —
              without leaving the engineered tolerances that make the system
              reliable to build.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Request Full Typology Specifications"
        description="Get detailed floor plans, structural specifications, and finish options for every typology in the Monocoque range."
        primaryLabel="Request Specifications"
      />
    </>
  );
}
