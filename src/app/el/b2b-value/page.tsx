import type { Metadata } from "next";
import B2BValuePageContent from "@/components/pages/B2BValuePageContent";
import { el } from "@/i18n/dictionaries/el";

export const metadata: Metadata = {
  title: el.b2bValuePage.meta.title,
  description: el.b2bValuePage.meta.description,
};

export default function B2BValuePage() {
  return <B2BValuePageContent locale="el" />;
}
