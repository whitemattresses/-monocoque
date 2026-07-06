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
    title: "Compressed Timelines",
    copy: "Factory fabrication runs parallel to site works, cutting time-to-revenue by up to 70% against masonry construction.",
  },
  {
    index: "02",
    title: "Fixed-Cost Certainty",
    copy: "Panel pricing is agreed before site mobilisation, insulating your pro forma from labour and material volatility.",
  },
  {
    index: "03",
    title: "Consistent Brand Quality",
    copy: "Factory tolerances mean every key meets the same finish standard — protecting guest experience at scale.",
  },
  {
    index: "04",
    title: "Reduced Site Risk",
    copy: "Shorter site programmes mean less exposure to weather delays, labour shortages, and safety incidents.",
  },
  {
    index: "05",
    title: "Remote & Constrained Sites",
    copy: "Lightweight, pre-cut panels reduce the plant and access requirements of building on islands, cliffs, or reserves.",
  },
  {
    index: "06",
    title: "ESG & Financing Alignment",
    copy: "Lower embodied carbon and certified sourcing support green financing terms increasingly required by lenders.",
  },
];

const stats = [
  { value: "70%", label: "Faster time-to-revenue vs. traditional build" },
  { value: "±3%", label: "Typical variance from fixed factory quote" },
  { value: "5", label: "Business days to initial feasibility outline" },
  { value: "6", label: "Proven typologies, fully specified" },
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
        imageLabel="Delivery Team — Site Handover Meeting"
        href="/partnership"
        linkLabel="Meet the Team Behind the System"
      />

      <CtaBanner
        title="Request a Feasibility Outline"
        description="Share your site, target key count, and budget envelope. We'll return an indicative timeline and cost outline within five business days."
        primaryLabel="Request Feasibility Outline"
      />
    </>
  );
}
