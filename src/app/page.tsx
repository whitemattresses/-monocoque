import Hero from "@/components/sections/home/Hero";
import Philosophy from "@/components/sections/home/Philosophy";
import SplitFeature from "@/components/sections/SplitFeature";
import TypologiesPreview from "@/components/sections/home/TypologiesPreview";
import B2BValuePreview from "@/components/sections/home/B2BValuePreview";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />

      <SplitFeature
        eyebrow="The Logic"
        title="Engineering as a Design Discipline"
        description="Monocoque begins in the factory. Cross-laminated timber panels are milled to micron tolerances, pre-fitted with services, and shipped as a kit-of-parts — assembled on site in a fraction of the time of conventional builds."
        bullets={[
          "Digitally fabricated CLT panels, engineered per site",
          "Parallel factory and site-works timelines",
          "Dry assembly — no curing time, no weather delays",
        ]}
        imageLabel="Factory Fabrication — CLT Panel Line"
        href="/the-logic"
        linkLabel="Read the Full Logic"
      />

      <TypologiesPreview />

      <SplitFeature
        eyebrow="Sustainability"
        title="A Structure That Sequesters Carbon"
        description="Cross-laminated timber stores carbon rather than emitting it. Sourced from certified, responsibly managed forests, Monocoque's structure offsets a meaningful share of a property's embodied footprint before a single guest arrives."
        bullets={[
          "FSC-certified mass timber, regionally sourced where possible",
          "Significantly lower embodied carbon than concrete or steel",
          "Engineered for disassembly, reuse, and material recovery",
        ]}
        imageLabel="Timber Sourcing — Certified Forestry"
        href="/sustainability"
        linkLabel="Explore the Full Impact"
        reverse
      />

      <B2BValuePreview />

      <SplitFeature
        eyebrow="Partnership"
        title="WHITE × P4Architecture"
        description="Monocoque is the product of a partnership between WHITE, a hospitality development studio, and P4Architecture, engineers of mass-timber systems — bringing rigorous design and rigorous structure into a single offering."
        imageLabel="Studio Portrait — WHITE x P4Architecture"
        href="/partnership"
        linkLabel="Meet the Partnership"
        dark
      />

      <CtaBanner
        title="Bring Monocoque to Your Next Site"
        description="Share your site parameters and development brief. Our team will return a feasibility outline within five business days."
      />
    </>
  );
}
