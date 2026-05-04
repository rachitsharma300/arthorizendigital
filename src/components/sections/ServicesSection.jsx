"use client";

import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-white dark:bg-brand-black text-brand-black dark:text-brand-white transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          label="Our Expertise"
          title="Curated Services for Discerning Clients"
          description="We offer end-to-end design solutions, meticulously tailored to your lifestyle and aesthetic aspirations."
        />

        <div className="mt-16 border-t border-brand-gray-light/20">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.id}
              delay={index * 0.1}
              className="group border-b border-brand-gray-light/20"
            >
              <Link href={`/services#${service.id}`} className="flex flex-col md:flex-row md:items-center py-10 md:py-12 px-4 hover:bg-[#F0ECE5] dark:hover:bg-[#111111] transition-all duration-500 overflow-hidden relative">
                
                {/* Number & Icon */}
                <div className="flex items-center gap-6 md:w-1/4 mb-4 md:mb-0 transform md:group-hover:translate-x-4 transition-transform duration-500">
                  <span className="font-heading text-4xl text-brand-gray-light/50 font-light group-hover:text-brand-gold transition-colors">
                    {service.number}
                  </span>
                  <service.icon className="w-8 h-8 text-brand-gray-light group-hover:text-brand-gold transition-colors" />
                </div>

                {/* Content */}
                <div className="md:w-1/2 pr-8 transform md:group-hover:translate-x-4 transition-transform duration-500">
                  <h3 className="font-heading text-3xl mb-3 group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray dark:text-brand-gray-light mb-4 text-sm md:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Tags & Arrow */}
                <div className="md:w-1/4 flex items-center justify-between mt-4 md:mt-0 transform md:group-hover:translate-x-4 transition-transform duration-500">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs uppercase tracking-widest border border-brand-gray-light/30 px-3 py-1 rounded-full text-brand-gray dark:text-brand-gray-light group-hover:border-brand-gold group-hover:text-brand-gold transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="w-8 h-8 text-brand-gray-light group-hover:text-brand-gold opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0" />
                </div>

              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}