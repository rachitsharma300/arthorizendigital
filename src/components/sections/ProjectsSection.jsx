"use client";

import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ProjectsSection({ limit = 4, featuredOnly = false }) {
  const displayProjects = projects
    .filter((p) => (featuredOnly ? p.featured : true))
    .slice(0, limit);

  return (
    <section className="py-24 md:py-32 bg-[#F5F2EE] dark:bg-[#050505] text-brand-black dark:text-brand-white transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <SectionHeading
            label="Selected Works"
            title="A Portfolio of Timeless Design"
            className="mb-0"
          />
          <ScrollReveal delay={0.2} className="mt-8 md:mt-0">
            <Link href="/projects" className="inline-flex items-center gap-2 text-brand-gold uppercase tracking-widest text-sm font-medium hover:text-brand-gold-light transition-colors group">
              View All Projects
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {displayProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 0.1}
              className={cn("group cursor-pointer", index % 2 !== 0 && "md:mt-16")}
            >
              <Link href={`/projects/${project.id}`}>
                <div className="relative overflow-hidden aspect-[4/5] mb-6">
                  {/* Placeholder Image Box */}
                  <div className="absolute inset-0 bg-brand-gray-light/20 dark:bg-brand-gray-light/10 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                    <span className="text-brand-gray uppercase tracking-widest text-sm">[ Image: {project.title} ]</span>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-6 left-6 bg-brand-white dark:bg-brand-black px-4 py-2 text-xs uppercase tracking-widest group-hover:bg-brand-gold group-hover:text-brand-black transition-colors z-10">
                    {project.category}
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-heading text-3xl mb-2 group-hover:text-brand-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-brand-gray dark:text-brand-gray-light text-sm tracking-wide">
                      {project.location} · {project.year}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-brand-gray-light/30 flex items-center justify-center group-hover:border-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}