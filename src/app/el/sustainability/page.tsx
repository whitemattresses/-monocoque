import type { Metadata } from "next";
import SustainabilityPageContent from "@/components/pages/SustainabilityPageContent";
import { el } from "@/i18n/dictionaries/el";

export const metadata: Metadata = {
  title: el.sustainabilityPage.meta.title,
  description: el.sustainabilityPage.meta.description,
};

export default function SustainabilityPage() {
  return <SustainabilityPageContent locale="el" />;
}
