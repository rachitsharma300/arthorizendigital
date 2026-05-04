import { generatePageMetadata } from "@/lib/metadata";
import SectionHeading from "@/components/ui/SectionHeading";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";

export const metadata = generatePageMetadata({
  title: "Our Services",
  description: "Comprehensive architectural and interior design services tailored to your unique lifestyle.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-12 md:pt-48 md:pb-20 bg-brand-white dark:bg-brand-black transition-colors">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <SectionHeading
            label="What We Do"
            title="Comprehensive Design Solutions"
            description="From initial architectural concepts to the final interior styling layer, we offer end-to-end services that ensure a cohesive and breathtaking result."
            centered
            className="mb-0 mx-auto"
          />
        </div>
      </section>

      <ServicesSection />
      <CTASection />
    </>
  );
}