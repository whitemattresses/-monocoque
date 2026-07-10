import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ValuePillars from "@/components/sections/ValuePillars";
import StatGrid from "@/components/sections/StatGrid";
import SplitFeature from "@/components/sections/SplitFeature";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "B2B Value",
  description:
    "The business case for developers, operators, and investors building luxury hospitality with the Monocoque CLT system.",
};

const pillars = [
  {
    index: "01",
    title: "One Season, Not Several",
    copy: "Factory fabrication runs while site preparation happens in parallel — a Monocoque asset can go from order to an assembled, occupiable structure within a single season, meaning an earlier opening and earlier operating revenue.",
  },
  {
    index: "02",
    title: "Fixed Factory Pricing",
    copy: "Panel pricing is agreed at the factory before site mobilisation begins — replacing the cost overruns typical of traditional Greek construction with 100% price transparency and materially reduced investment risk.",
  },
  {
    index: "03",
    title: "Consistent Build Quality",
    copy: "Every module is milled and dry-fitted in the factory to the same tolerances — every unit meets the same standard, regardless of site conditions, protecting a consistent guest experience across the portfolio.",
  },
  {
    index: "04",
    title: "Reduced Site Risk",
    copy: "Days of crane assembly replace months of on-site construction, cutting exposure to weather delays, labour shortages, and site incidents — and the risk they pose to the delivery timeline.",
  },
  {
    index: "05",
    title: "Remote & Constrained Sites",
    copy: "A lightweight, self-supporting shell and reversible ground-screw foundations reduce the plant and access requirements of building on islands, cliffs, or protected land.",
  },
  {
    index: "06",
    title: "A Process, Not a Building Site",
    copy: "Delivery is a sequence — truck, crane, placement, connection — rather than an extended construction presence, reducing the operational disruption of building near an active hospitality asset.",
  },
];

const stats = [
  { value: "2.40 × 4.05m", label: "The single CLT module every typology is built from" },
  { value: "0%", label: "Factory pricing fixed before site mobilisation" },
  { value: "5", label: "Business days to initial feasibility outline" },
  { value: "Turnkey", label: "Delivery — fabrication, logistics, and assembly under one team" },
];

export default function B2BValuePage() {
  return (
    <>
      <PageHero
        eyebrow="B2B Value"
        title="Built for Developers, Operators, and Investors"
        description="Monocoque is a capital-efficient answer to the operational demands of luxury hospitality development — designed to protect timelines, budgets, and brand standards at once."
      />

      <ValuePillars
        eyebrow="Why Monocoque"
        title="Six Reasons Developers Choose Monocoque"
        pillars={pillars}
      />

      <StatGrid
        eyebrow="Performance"
        title="What the Numbers Look Like in Practice"
        stats={stats}
        dark
      />

      <SplitFeature
        eyebrow="Delivery Model"
        title="Two Ways to Work With Us"
        description="Monocoque is offered either as a turnkey delivery — where our team manages fabrication, logistics, and assembly end-to-end — or as a licensed system, where your appointed contractor is trained and certified to build to our specification."
        bullets={[
          "Turnkey: single point of accountability from design to handover",
          "Licensed: your delivery team builds under our technical supervision",
          "Both models include structural warranty and after-care support",
        ]}
        imageLabel="Place your image here: images/delivery-cabin-dusk.jpg"
        imageSrc="/images/delivery-cabin-dusk.jpg"
        imageFit="contain"
        imageRatio="aspect-[3/2]"
        href="/contact"
        linkLabel="Talk to the Team"
      />

      <CtaBanner
        title="Request a Feasibility Outline"
        description="Share your site, target key count, and budget envelope. We'll return an indicative timeline and cost outline within five business days."
        primaryLabel="Request Feasibility Outline"
      />
    </>
  );
}
