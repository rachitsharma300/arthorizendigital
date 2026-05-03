import ServicesSection from "@/components/sections/ServicesSection";

export const metadata = {
  title: "Services | Arthorizen Digital",
  description:
    "Explore our premium interior design services — residential, commercial, space planning and consultation.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0A0A0A] pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#C9A96E]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#C9A96E]">
              What We Offer
            </span>
          </div>
          <h1
            className="text-6xl md:text-8xl text-[#F5F2EE]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our
            <br />
            <span className="text-[#C9A96E] italic">Services</span>
          </h1>
        </div>
      </section>

      {/* Services List */}
      <ServicesSection />
    </>
  );
}