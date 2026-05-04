import { generatePageMetadata } from "@/lib/metadata";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata = generatePageMetadata({
  title: "Projects",
  description: "Explore our portfolio of luxury residential and commercial architecture and interior design projects.",
  path: "/projects"
});

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-40 pb-12 md:pt-48 md:pb-20 bg-brand-white dark:bg-brand-black transition-colors">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <SectionHeading
            label="Portfolio"
            title="Our Selected Works"
            description="A curated showcase of our most recent and significant projects across residential, commercial, and retail sectors."
            className="mb-0"
          />
        </div>
      </section>

      <ProjectsSection limit={100} featuredOnly={false} />
      <CTASection />
    </>
  );
}
