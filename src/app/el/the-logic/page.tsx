import type { Metadata } from "next";
import TheLogicPageContent from "@/components/pages/TheLogicPageContent";
import { el } from "@/i18n/dictionaries/el";

export const metadata: Metadata = {
  title: el.theLogicPage.meta.title,
  description: el.theLogicPage.meta.description,
};

export default function TheLogicPage() {
  return <TheLogicPageContent locale="el" />;
}
