"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "8+", label: "Years of Excellence" },
  { value: "50+", label: "Design Awards" },
  { value: "200+", label: "Happy Clients" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#0A0A0A] py-20 text-brand-white border-y border-brand-gold/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="font-heading text-5xl md:text-6xl text-brand-gold mb-4 font-light">
                {stat.value}
              </div>
              <div className="uppercase tracking-widest text-brand-gray-light text-xs md:text-sm font-medium">
                {stat.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
