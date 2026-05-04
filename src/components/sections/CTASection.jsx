"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-brand-white dark:bg-brand-black text-brand-black dark:text-brand-white transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <ScrollReveal className="border border-brand-gold p-12 md:p-24 text-center relative overflow-hidden">
          {/* Subtle Grid Pattern inside CTA */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#C9A96E12_1px,transparent_1px),linear-gradient(to_bottom,#C9A96E12_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          <div className="relative z-10">
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl mb-8 font-light">
              Ready to <span className="italic text-brand-gold font-medium">Transform</span> Your Space?
            </h2>
            <p className="text-brand-gray dark:text-brand-gray-light text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Let&apos;s collaborate to create a space that perfectly balances luxurious aesthetics with functional everyday living.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button href="/projects" size="lg">
                View Projects
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
