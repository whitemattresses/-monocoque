import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SplitFeature from "@/components/sections/SplitFeature";
import StatGrid from "@/components/sections/StatGrid";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "How Monocoque's mass-timber structure sequesters carbon, sources responsibly, and is engineered for disassembly and reuse.",
};

const stats = [
  { value: "-42%", label: "Embodied carbon vs. concrete-frame equivalent" },
  { value: "1 t", label: "CO₂ stored per m³ of CLT in the structure" },
  { value: "100%", label: "FSC or PEFC-certified timber sourcing" },
  { value: "0", label: "Curing time — dry assembly, no on-site emissions" },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="A Structure That Gives Back Carbon"
        description="Every Monocoque shell is grown before it is built. Timber sequesters carbon as it matures — and continues to store it for the working life of the building."
      />

      <StatGrid
        eyebrow="By the Numbers"
        title="The Material Case for Mass Timber"
        stats={stats}
      />

      <SplitFeature
        eyebrow="Sourcing"
        title="Certified Forestry, Traceable Supply"
        description="Every panel begins in a forest managed for long-term yield, not short-term extraction. We work exclusively with FSC and PEFC-certified suppliers, and can trace each project's timber back to its forest of origin — a growing requirement for ESG-linked hospitality financing."
        bullets={[
          "Chain-of-custody documentation provided per project",
          "Regional sourcing prioritised to reduce transport emissions",
          "Replanting commitments built into supplier agreements",
        ]}
        imageLabel="Certified Forestry — Managed Timber Stand"
        href="/b2b-value"
        linkLabel="See the Financial Case"
      />

      <SplitFeature
        eyebrow="Lifecycle"
        title="Engineered for Disassembly"
        description="Monocoque panels are mechanically fixed, not wet-bonded to the substructure — meaning a structure can be partially disassembled for renovation, or fully deconstructed at end of life, with panels reclaimed rather than demolished into landfill."
        bullets={[
          "Bolted and dowelled connections replace irreversible wet joints",
          "Panels can be re-cut and re-purposed across renovation cycles",
          "Reduces landfill demolition waste at end of asset life",
        ]}
        imageLabel="Panel Connection Detail — Mechanical Fixing"
        href="/the-logic"
        linkLabel="See the Full System Logic"
        reverse
      />

      <CtaBanner
        title="Request the Full Sustainability Dossier"
        description="Get lifecycle assessment data, certification documentation, and carbon modelling for your specific site and typology."
        primaryLabel="Request the Dossier"
      />
    </>
  );
}
