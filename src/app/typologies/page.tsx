import type { Metadata } from "next";
import TypologiesPageContent from "@/components/pages/TypologiesPageContent";

export const metadata: Metadata = {
  title: "Typologies",
  description:
    "Four Monocoque typologies, built by linking the same 2.40 × 4.05m CLT module — Extra Small, Small, Medium, and Large.",
};

export default function TypologiesPage() {
  return <TypologiesPageContent locale="en" />;
}
