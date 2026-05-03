export const metadata = {
  title: "About Us | Arthorizen Digital",
  description:
    "Learn about Arthorizen Digital and our passion for transforming spaces into extraordinary experiences.",
};

export default function AboutPage() {
  return (
    <section className="bg-[#0A0A0A] pt-40 pb-20 px-6 lg:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#C9A96E]" />
          <span className="text-xs tracking-[0.3em] uppercase text-[#C9A96E]">
            Who We Are
          </span>
        </div>
        <h1
          className="text-6xl md:text-8xl text-[#F5F2EE] mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          About
          <br />
          <span className="text-[#C9A96E] italic">Arthorizen</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#ADA8A3] leading-relaxed">
          <p>
            At Arthorizen Digital, we believe that the spaces we inhabit shape our experiences, emotions, and daily lives. We are a premier interior design studio dedicated to crafting environments that are not only visually stunning but profoundly functional and deeply personal.
          </p>
          <p>
            With years of expertise across residential, commercial, and hospitality projects, our team brings a meticulous eye for detail, a passion for innovative design, and a commitment to excellence in every project we undertake.
          </p>
        </div>
      </div>
    </section>
  );
}
