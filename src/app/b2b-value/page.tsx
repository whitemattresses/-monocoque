import type { Metadata } from "next";
import B2BValuePageContent from "@/components/pages/B2BValuePageContent";

export const metadata: Metadata = {
  title: "B2B Value",
  description:
    "The business case for developers, operators, and investors building luxury hospitality with the Monocoque CLT system.",
};

export default function B2BValuePage() {
  return <B2BValuePageContent locale="en" />;
}
