"use client";

import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#F5F2EE] dark:bg-[#050505] text-brand-black dark:text-brand-white transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          label="Client Voices"
          title="Enduring Relationships"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.id}
              delay={index * 0.15}
              className="bg-brand-white dark:bg-[#111111] p-10 border border-brand-gray-light/20 relative group hover:-translate-y-2 transition-transform duration-500"
            >
              <Quote className="w-12 h-12 text-brand-gold/20 absolute top-8 right-8 group-hover:text-brand-gold/40 transition-colors" />
              
              <div className="mb-8 relative z-10">
                <p className="font-heading text-xl md:text-2xl italic leading-relaxed text-brand-black dark:text-brand-white">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-8 border-t border-brand-gray-light/20">
                <h4 className="font-heading text-xl text-brand-gold mb-1">{testimonial.name}</h4>
                <p className="text-brand-gray dark:text-brand-gray-light text-sm">
                  {testimonial.designation}, <span className="text-brand-black dark:text-brand-white">{testimonial.company}</span>
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
