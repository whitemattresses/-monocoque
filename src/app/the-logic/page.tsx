import type { Metadata } from "next";
import TheLogicPageContent from "@/components/pages/TheLogicPageContent";

export const metadata: Metadata = {
  title: "The Logic",
  description:
    "How Monocoque's engineered CLT system replaces the variability of traditional construction with a precise, factory-built process.",
};

export default function TheLogicPage() {
  return <TheLogicPageContent locale="en" />;
}
