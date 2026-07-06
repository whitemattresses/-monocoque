import Hero from "@/components/sections/home/Hero";
import Philosophy from "@/components/sections/home/Philosophy";
import SplitFeature from "@/components/sections/SplitFeature";
import TypologiesPreview from "@/components/sections/home/TypologiesPreview";
import B2BValuePreview from "@/components/sections/home/B2BValuePreview";
import CtaBanner from "@/components/sections/CtaBanner";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />

      <SplitFeature
        eyebrow="The Logic"
        title="A Product, Not a Construction Site"
        description="Monocoque is built as an industrialized product: fabricated in the factory, delivered to site by truck, and placed by crane — assembled in days rather than months, with 0% unpredictable costs and 100% transparency on price and timeline."
        bullets={[
          "Every module engineered to a constant 2.40 × 4.05m section",
          "Factory fabrication runs while site preparation happens in parallel",
          "Dry, crane-assisted assembly — no curing time, no weather delays",
        ]}
        imageLabel="Place your image here: images/the-logic-assembly.jpg"
        imageSrc="/images/the-logic-assembly.jpg"
        href="/the-logic"
        linkLabel="Read the Full Logic"
      />

      <TypologiesPreview />

      <SplitFeature
        eyebrow="Sustainability"
        title="A Structure That Doesn't Hurt the Land"
        description="Monocoque's shell is light and rigid enough that it doesn't need excavation or tons of poured concrete. Cabins rest on reversible ground screws or concrete plinths, chosen to suit the terrain — and can be unscrewed and moved if a site ever needs to be returned to its original state."
        bullets={[
          "No excavation — the shell is delivered complete, not built in place",
          "Reversible ground screws or plinths, matched to ground conditions",
          "A cabin can be relocated, leaving the landscape as it was",
        ]}
        imageLabel="Place your image here: images/sustainability-nature.jpg"
        imageSrc="/images/sustainability-nature.jpg"
        href="/sustainability"
        linkLabel="Explore the Full Impact"
        reverse
      />

      <B2BValuePreview />

      <section className="section-y border-b border-line">
        <div className="container-editorial text-center">
          <Reveal>
            <p className="mx-auto max-w-2xl font-serif text-xl italic leading-relaxed text-charcoal/60 md:text-2xl">
              A creation of WHITE, designed in collaboration with
              P4Architecture.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Bring Monocoque to Your Next Site"
        description="Share your site parameters and development brief. Our team will return a feasibility outline within five business days."
      />
    </>
  );
}
