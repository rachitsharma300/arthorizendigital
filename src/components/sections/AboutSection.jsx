"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-white dark:bg-brand-black text-brand-black dark:text-brand-white transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <SectionHeading
              label="Our Story"
              title="Defining the Future of Spatial Experience"
            />
            
            <ScrollReveal delay={0.2} className="space-y-6 text-brand-gray dark:text-brand-gray-light text-lg mb-10">
              <p>
                Founded on the principle that spaces profoundly impact human emotion and well-being, Arthorizen Digital has spent the last decade redefining luxury interiors and architectural concepts.
              </p>
              <p>
                We believe in &quot;warm minimalism&quot;—an approach that strips away the unnecessary while retaining tactile richness, natural materials, and an undeniable sense of soul. Every project is a unique narrative, co-authored with our clients.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="space-y-8 mb-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-[1px] bg-brand-gold mt-3" />
                <div>
                  <h4 className="font-heading text-2xl mb-2">Visionary Design</h4>
                  <p className="text-sm text-brand-gray dark:text-brand-gray-light">Forward-thinking concepts that transcend transient trends.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-[1px] bg-brand-gold mt-3" />
                <div>
                  <h4 className="font-heading text-2xl mb-2">Uncompromising Quality</h4>
                  <p className="text-sm text-brand-gray dark:text-brand-gray-light">Meticulous craftsmanship and premium material sourcing.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <Button href="/about">Discover Our Studio</Button>
            </ScrollReveal>
          </div>

          <div className="order-1 lg:order-2">
            <ScrollReveal direction="left" className="relative aspect-square lg:aspect-[4/5] bg-brand-gray-light/20 flex items-center justify-center">
              <div className="absolute inset-4 border border-brand-gold/30" />
              <span className="text-brand-gray uppercase tracking-widest text-sm">[ Image: Studio Environment ]</span>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
