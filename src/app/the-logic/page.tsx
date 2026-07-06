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
    copy: "Site conditions, guest programme, and structural loads are modelled into a single digital twin of the build.",
  },
  {
    index: "02",
    title: "Panel Fabrication",
    copy: "CLT panels are CNC-milled off-site to sub-millimetre tolerance, with service cavities pre-cut.",
  },
  {
    index: "03",
    title: "Quality Control",
    copy: "Every panel is inspected and dry-fitted in the factory before it is released for shipping.",
  },
  {
    index: "04",
    title: "Logistics",
    copy: "Panels are packed as a sequenced kit-of-parts, timed to arrive in the order they are assembled.",
  },
  {
    index: "05",
    title: "On-Site Assembly",
    copy: "A trained crew erects the structural shell in days, not months — with minimal site disturbance.",
  },
];

const comparisonRows = [
  {
    label: "Construction Timeline",
    conventional: "12–18 months from groundbreak to structural completion.",
    monocoque: "3–5 months, with fabrication running parallel to site works.",
  },
  {
    label: "Cost Predictability",
    conventional: "Exposed to labour shortages, weather delays, and material price swings.",
    monocoque: "Fixed factory pricing agreed before site mobilisation begins.",
  },
  {
    label: "On-Site Labour",
    conventional: "Large, trade-dependent crews required for extended periods.",
    monocoque: "A small, trained assembly team erects the pre-fabricated shell.",
  },
  {
    label: "Quality Consistency",
    conventional: "Varies by crew, weather, and site conditions.",
    monocoque: "Controlled in a factory environment to consistent tolerances.",
  },
  {
    label: "Environmental Disruption",
    conventional: "Extended site presence, heavy plant, and material waste.",
    monocoque: "Compressed site footprint and dry assembly with minimal waste.",
  },
];

export default function TheLogicPage() {
  return (
    <>
      <PageHero
        eyebrow="The Logic"
        title="A System, Not a Structure"
        description="Monocoque treats the building as a single engineered object — designed once, fabricated with precision, and assembled on site rather than built from it."
      />

      <ProcessSteps steps={steps} />

      <SplitFeature
        eyebrow="Material"
        title="Cross-Laminated Timber, Engineered as One Shell"
        description="Layers of kiln-dried timber are bonded at alternating angles, producing a panel that is dimensionally stable, structurally rigid, and capable of spanning as both wall and floor. The result behaves less like a frame and more like a monocoque — a single shell carrying its own load."
        bullets={[
          "Panels engineered per-project from structural and thermal models",
          "Integrated insulation and service cavities reduce secondary trades",
          "Compatible with seismic and high-wind coastal design codes",
        ]}
        imageLabel="CLT Panel Cross-Section — Engineering Detail"
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
