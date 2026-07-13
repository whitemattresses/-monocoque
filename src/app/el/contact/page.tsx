import type { Metadata } from "next";
import ContactPageContent from "@/components/pages/ContactPageContent";
import { el } from "@/i18n/dictionaries/el";

export const metadata: Metadata = {
  title: el.contactPage.meta.title,
  description: el.contactPage.meta.description,
};

export default function ContactPage() {
  return <ContactPageContent locale="el" />;
}
