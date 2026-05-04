import { generatePageMetadata } from "@/lib/metadata";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { team } from "@/data/team";
import CTASection from "@/components/sections/CTASection";

export const metadata = generatePageMetadata({
  title: "About Us",
  description: "Learn about Arthorizen Digital's story, values, and the team behind our award-winning designs.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:py-48 bg-brand-white dark:bg-brand-black transition-colors">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Our Story"
            title="A Legacy of Design Excellence"
            description="Since 2015, we've been transforming spaces with an unwavering commitment to craftsmanship and innovation."
            centered
          />

          <div className="mt-20">
            <ScrollReveal className="relative aspect-video bg-brand-gray-light/20 flex items-center justify-center w-full max-w-5xl mx-auto">
              <span className="text-brand-gray uppercase tracking-widest text-sm">[ Image: Team at work / Studio ]</span>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#F5F2EE] dark:bg-[#050505] transition-colors">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="Our Team" title="The Creative Minds" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {team.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 0.1}>
                <div className="aspect-[3/4] bg-brand-gray-light/20 mb-6 flex items-center justify-center">
                  <span className="text-brand-gray uppercase tracking-widest text-xs">[ Photo: {member.name} ]</span>
                </div>
                <h3 className="font-heading text-2xl text-brand-black dark:text-brand-white mb-1">{member.name}</h3>
                <p className="text-brand-gold text-sm uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-brand-gray dark:text-brand-gray-light text-sm">{member.bio}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
