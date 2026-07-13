import type { Metadata } from "next";
import TypologiesPageContent from "@/components/pages/TypologiesPageContent";
import { el } from "@/i18n/dictionaries/el";

export const metadata: Metadata = {
  title: el.typologiesPage.meta.title,
  description: el.typologiesPage.meta.description,
};

export default function TypologiesPage() {
  return <TypologiesPageContent locale="el" />;
}
