"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Gold Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A96E]/5 blur-[120px]" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
                {/* Tag Line */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-3 mb-8"
                >
                    <div className="w-12 h-px bg-[#C9A96E]" />
                    <span className="text-xs tracking-[0.3em] uppercase text-[#C9A96E]">
                        Premium Interior Design
                    </span>
                    <div className="w-12 h-px bg-[#C9A96E]" />
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-[110px] leading-none tracking-tight text-[#F5F2EE] mb-8"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    We Design
                    <br />
                    <span className="text-[#C9A96E] italic">Spaces</span> That
                    <br />
                    Inspire
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-[#ADA8A3] text-lg max-w-xl mx-auto leading-relaxed mb-12"
                >
                    From concept to completion — we transform ordinary spaces into
                    extraordinary experiences that reflect your unique vision.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/projects"
                        className="px-10 py-4 bg-[#C9A96E] text-[#0A0A0A] text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#E2C99A] transition-all duration-300"
                    >
                        View Our Work
                    </Link>
                    <Link
                        href="/contact"
                        className="px-10 py-4 border border-[#F5F2EE]/30 text-[#F5F2EE] text-sm tracking-[0.2em] uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
                    >
                        Start a Project
                    </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-24 grid grid-cols-3 gap-8 max-w-lg mx-auto"
                >
                    {[
                        { number: "150+", label: "Projects Done" },
                        { number: "8+", label: "Years Experience" },
                        { number: "98%", label: "Happy Clients" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div
                                className="text-3xl md:text-4xl text-[#C9A96E] mb-1"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {stat.number}
                            </div>
                            <div className="text-xs tracking-[0.15em] uppercase text-[#6B6560]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs tracking-[0.2em] uppercase text-[#6B6560]">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-px h-10 bg-gradient-to-b from-[#C9A96E] to-transparent"
                />
            </motion.div>
        </section>
    );
}