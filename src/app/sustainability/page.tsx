import type { Metadata } from "next";
import SustainabilityPageContent from "@/components/pages/SustainabilityPageContent";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "How Monocoque's mass-timber structure sequesters carbon, sources responsibly, and is engineered for disassembly and reuse.",
};

export default function SustainabilityPage() {
  return <SustainabilityPageContent locale="en" />;
}
