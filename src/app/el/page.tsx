import type { Metadata } from "next";
import HomePageContent from "@/components/pages/HomePageContent";
import { el } from "@/i18n/dictionaries/el";

export const metadata: Metadata = {
  title: el.meta.defaultTitle,
  description: el.meta.defaultDescription,
};

export default function Home() {
  return <HomePageContent locale="el" />;
}
