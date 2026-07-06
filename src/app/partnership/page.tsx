import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SplitFeature from "@/components/sections/SplitFeature";
import StatGrid from "@/components/sections/StatGrid";
import CtaBanner from "@/components/sections/CtaBanner";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "WHITE x P4Architecture",
  description:
    "Monocoque is a partnership between WHITE, a hospitality development studio, and P4Architecture, engineers of mass-timber systems.",
};

const credentials = [
  { value: "20+", label: "Years combined hospitality development experience" },
  { value: "12", label: "Mass-timber structures engineered by P4Architecture" },
  { value: "4", label: "Countries with active Monocoque deployments" },
  { value: "1", label: "Shared standard for design and structure" },
];

export default function PartnershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnership"
        title="WHITE × P4Architecture"
        description="Monocoque exists because two studios — one obsessed with hospitality experience, one obsessed with timber engineering — decided a prefabricated system didn't have to look prefabricated."
      />

      <section className="section-y border-b border-line">
        <div className="container-editorial">
          <Reveal>
            <p className="max-w-3xl font-serif text-3xl leading-[1.4] md:text-4xl">
              We built Monocoque because the hospitality industry kept
              choosing between speed and craft.{" "}
              <span className="text-charcoal/40">
                We didn&apos;t think that trade-off was necessary — so we
                designed a system that removes it.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      <SplitFeature
        eyebrow="Design"
        title="WHITE"
        description="WHITE is a hospitality development studio, responsible for the guest-facing brief behind Monocoque — the spatial planning, material language, and brand standards that every typology is designed to hold. WHITE leads the relationship with developers and operators from first site visit through to opening."
        bullets={[
          "Hospitality concept design and brand standards",
          "Site feasibility and guest-experience planning",
          "Client-facing delivery management",
        ]}
        imageLabel="WHITE Studio — Design Team at Work"
        href="/b2b-value"
        linkLabel="See the Business Case"
      />

      <SplitFeature
        eyebrow="Engineering"
        title="P4Architecture"
        description="P4Architecture is the structural and manufacturing authority behind the Monocoque system — responsible for the CLT panel engineering, factory fabrication standards, and on-site assembly methodology that make the system buildable anywhere, reliably."
        bullets={[
          "CLT structural engineering and panel design",
          "Factory fabrication standards and quality control",
          "On-site assembly training and technical supervision",
        ]}
        imageLabel="P4Architecture — CLT Engineering Studio"
        href="/the-logic"
        linkLabel="See the Engineering Logic"
        reverse
      />

      <StatGrid
        eyebrow="Track Record"
        title="A Partnership Measured in Delivered Projects"
        stats={credentials}
        dark
      />

      <CtaBanner
        title="Talk to the Team Behind Monocoque"
        description="Whether you're evaluating a single site or a portfolio rollout, our joint team can walk you through the system in detail."
      />
    </>
  );
}
