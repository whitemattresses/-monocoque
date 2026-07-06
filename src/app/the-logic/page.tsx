import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SplitFeature from "@/components/sections/SplitFeature";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ComparisonTable from "@/components/sections/ComparisonTable";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "The Logic",
  description:
    "How Monocoque's engineered CLT system replaces the variability of traditional construction with a precise, factory-built process.",
};

const steps = [
  {
    index: "01",
    title: "Design & Engineering",
    copy: "Site conditions and programme are resolved into a module sequence — Balcony, Sleep, Service Pod, Eat, Live — at a constant 2.40 × 4.05m section.",
  },
  {
    index: "02",
    title: "Factory Fabrication",
    copy: "CLT panels are fabricated off-site as complete volumetric modules, with insulation, cladding, and openings built in before the module ever leaves the factory.",
  },
  {
    index: "03",
    title: "Transport",
    copy: "Finished modules are loaded onto a truck and shipped to site as a complete, closed shell — not as materials to be assembled from scratch.",
  },
  {
    index: "04",
    title: "Crane Placement",
    copy: "A crane lifts each module directly onto its foundation — reversible ground screws or concrete plinths, chosen to suit the terrain.",
  },
  {
    index: "05",
    title: "On-Site Assembly",
    copy: "Modules are connected in sequence and the structure is completed in days, not months — with minimal site disturbance.",
  },
];

const comparisonRows = [
  {
    label: "Construction Timeline",
    conventional: "Exposed to permitting delays, weather, and extended site programmes.",
    monocoque: "Factory-built while site works happen in parallel — assembled in days once modules arrive.",
  },
  {
    label: "Cost Predictability",
    conventional: "Exposed to labour shortages, weather delays, and material price swings.",
    monocoque: "0% unpredictable costs — factory pricing is fixed before site mobilisation begins.",
  },
  {
    label: "On-Site Labour",
    conventional: "Large, trade-dependent crews required for extended periods.",
    monocoque: "A crane and a small trained crew connect pre-fabricated modules.",
  },
  {
    label: "Quality Consistency",
    conventional: "Varies by crew, weather, and site conditions.",
    monocoque: "Controlled in a factory environment to consistent CLT tolerances.",
  },
  {
    label: "Ground Impact",
    conventional: "Excavation and poured concrete foundations, largely irreversible.",
    monocoque: "Reversible ground screws or plinths — no excavation, no mass concrete.",
  },
];

export default function TheLogicPage() {
  return (
    <>
      <PageHero
        eyebrow="The Logic"
        title="A Product, Not a Construction Site"
        description="Monocoque treats the cabin as a single engineered object — designed once, fabricated complete in a factory, and assembled on site rather than built from it, module by module."
      />

      <ProcessSteps steps={steps} />

      <SplitFeature
        eyebrow="Material"
        title="Cross-Laminated Timber, Engineered as One Shell"
        description="Layers of kiln-dried timber are bonded at alternating angles, producing a structural CLT panel — 100 to 130mm depending on its role, with insulation, a cavity, and cladding built up around it. The result behaves less like a frame and more like a monocoque — a single rigid shell carrying its own load, with no internal columns."
        bullets={[
          "Structural CLT panels, sized per wall, floor, and roof role",
          "Continuous insulation and cladding reduce secondary trades on site",
          "A rigid shell suited to coastal wind exposure and island sites",
        ]}
        imageLabel="Place your image here: images/the-logic-structure.jpg"
        imageSrc="/images/the-logic-structure.jpg"
        href="/sustainability"
        linkLabel="See the Material's Impact"
      />

      <ComparisonTable
        eyebrow="Comparison"
        title="Conventional Construction vs. Monocoque"
        description="The same brief, delivered through two different logics."
        rows={comparisonRows}
      />

      <CtaBanner
        title="See the Logic Applied to Your Site"
        description="Send us your site plan and programme. We will return a structural and scheduling outline within five business days."
      />
    </>
  );
}
