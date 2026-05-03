import ProjectsSection from "@/components/sections/ProjectsSection";

export const metadata = {
  title: "Projects | Arthorizen Digital",
  description:
    "Explore our featured interior design projects — residential, commercial, and hospitality transformations.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0A0A0A] pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#C9A96E]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#C9A96E]">
              Our Work
            </span>
          </div>
          <h1
            className="text-6xl md:text-8xl text-[#F5F2EE]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Featured
            <br />
            <span className="text-[#C9A96E] italic">Projects</span>
          </h1>
        </div>
      </section>

      {/* Projects List */}
      <ProjectsSection />
    </>
  );
}
