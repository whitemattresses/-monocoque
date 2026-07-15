import type { Metadata } from "next";
import ContactPageContent from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Inquire about bringing the Monocoque CLT system to your next luxury hospitality site.",
};

export default function ContactPage() {
  return <ContactPageContent locale="en" />;
}
