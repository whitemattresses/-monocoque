import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SplitFeature from "@/components/sections/SplitFeature";
import StatGrid from "@/components/sections/StatGrid";
import CtaBanner from "@/components/sections/CtaBanner";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "How Monocoque's mass-timber structure sequesters carbon, sources responsibly, and is engineered for disassembly and reuse.",
};

const stats = [
  { value: "0", label: "Excavation required to place a Monocoque structure" },
  { value: "0", label: "Curing time — dry assembly, no on-site emissions" },
  { value: "2", label: "Reversible foundation options: ground screws or plinths" },
  { value: "1", label: "Rigid CLT shell — no columns, minimal material" },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="A Structure That Doesn't Hurt the Land"
        description="Monocoque's shell is light and rigid enough that the ground barely notices it. No excavation, no thousands of tons of poured concrete — just a structure that rests on the site rather than fighting it."
      />

      <section className="border-b border-line pb-16 md:pb-20">
        <div className="container-editorial">
          <Reveal>
            <p className="max-w-2xl text-base leading-relaxed text-charcoal/65 md:text-lg">
              Cross-laminated timber stores the carbon it absorbed while
              growing, holding it for the working life of the structure
              rather than releasing it the way concrete production does.
              Because each module carries its own load, a Monocoque
              hospitality unit needs a fraction of the concrete a
              conventional building would. The CLT shell is engineered for a
              long service life, and — should a site ever change use — a
              module can be relocated rather than demolished, keeping the
              material, and the carbon it stores, in use.
            </p>
          </Reveal>
        </div>
      </section>

      <StatGrid
        eyebrow="By the Numbers"
        title="The Case for a Lighter Foundation"
        stats={stats}
      />

      <SplitFeature
        eyebrow="Foundations"
        title="Resting on the Land, Not Cut Into It"
        description="Because the CLT shell carries its own load and needs no concrete frame behind it, Monocoque hospitality units can be supported on reversible ground screws or, where terrain requires it, small concrete plinths — never a full excavated foundation. Both methods touch a fraction of the ground a conventional structure would."
        bullets={[
          "Ground screws or plinths, chosen per site's soil and slope",
          "No excavation, no mass concrete pour",
          "Installed and removed without heavy earthworks",
        ]}
        imageLabel="Place your image here: images/sustainability-nature.jpg"
        imageSrc="/images/sustainability-nature.jpg"
        href="/b2b-value"
        linkLabel="See the Financial Case"
      />

      <SplitFeature
        eyebrow="Lifecycle"
        title="If It Ever Needs to Leave, It Can"
        description="A Monocoque module is connected to its foundation mechanically, not permanently. If a site ever needs to be returned to its original condition, the structure can be unscrewed, lifted by crane, and relocated — leaving the landscape as it was before it arrived."
        bullets={[
          "Bolted, reversible connections instead of irreversible wet joints",
          "A complete module can be lifted and relocated as one piece",
          "Ground screws are removed cleanly, without demolition waste",
        ]}
        imageLabel="Place your image here: images/the-logic-assembly.jpg"
        imageSrc="/images/the-logic-assembly.jpg"
        imageFit="contain"
        href="/the-logic"
        linkLabel="See the Full System Logic"
        reverse
      />

      <CtaBanner
        title="Let's Discuss Your Site"
        description="Get in touch to discuss your project requirements."
        primaryLabel="Get in Touch"
      />
    </>
  );
}
