"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] text-brand-white pt-20">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      
      {/* Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-5xl">
        <div className="mb-6 inline-block">
          <ScrollReveal direction="down">
            <span className="text-brand-gold uppercase tracking-[0.2em] text-sm md:text-base font-medium">
              Elevating Modern Living
            </span>
          </ScrollReveal>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 font-light">
          <AnimatedText text="We Design " className="justify-center inline-flex" />
          <span className="italic text-brand-gold font-medium mr-4">Spaces</span>
          <br className="hidden md:block" />
          <AnimatedText text="That Inspire" className="justify-center inline-flex" />
        </h1>

        <ScrollReveal delay={0.4} className="mb-12 max-w-2xl mx-auto">
          <p className="text-brand-gray-light text-lg md:text-xl font-light">
            Award-winning architecture and interior design firm specializing in luxurious, minimalist spaces that transform the way you live and work.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.6} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button href="/projects" size="lg">
            View Our Work
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Book Consultation
          </Button>
        </ScrollReveal>

        <ScrollReveal delay={0.8} className="mt-20 flex justify-center gap-12 text-left text-sm md:text-base">
          <div>
            <div className="font-heading text-3xl text-brand-gold mb-1">150+</div>
            <div className="text-brand-gray-light uppercase tracking-widest text-xs">Projects</div>
          </div>
          <div>
            <div className="font-heading text-3xl text-brand-gold mb-1">8+</div>
            <div className="text-brand-gray-light uppercase tracking-widest text-xs">Years Exp</div>
          </div>
          <div>
            <div className="font-heading text-3xl text-brand-gold mb-1">98%</div>
            <div className="text-brand-gray-light uppercase tracking-widest text-xs">Happy Clients</div>
          </div>
        </ScrollReveal>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowDown className="w-6 h-6 opacity-60" />
      </motion.div>
    </section>
  );
}