"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        number: "01",
        title: "Residential Design",
        description:
            "Your home should tell your story. We craft personalized living spaces that blend aesthetics with functionality — from cozy apartments to sprawling villas.",
        tags: ["Living Spaces", "Bedrooms", "Kitchens"],
    },
    {
        number: "02",
        title: "Commercial Design",
        description:
            "Workspaces that inspire productivity and leave lasting impressions. We design offices, retail spaces, and hospitality environments that elevate your brand.",
        tags: ["Offices", "Retail", "Hospitality"],
    },
    {
        number: "03",
        title: "Space Planning",
        description:
            "Smart layouts that maximize every square foot. Our space planning expertise ensures your environment flows naturally and serves its purpose beautifully.",
        tags: ["Floor Plans", "3D Layouts", "Optimization"],
    },
    {
        number: "04",
        title: "Design Consultation",
        description:
            "Not sure where to start? Our expert consultations give you a clear vision, actionable plan, and the confidence to bring your dream space to life.",
        tags: ["Mood Boards", "Material Selection", "Budget Planning"],
    },
];

export default function ServicesSection() {
    return (
        <section className="bg-[#0A0A0A] py-32 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <div className="w-8 h-px bg-[#C9A96E]" />
                            <span className="text-xs tracking-[0.3em] uppercase text-[#C9A96E]">
                                What We Do
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl text-[#F5F2EE]"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Our Services
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#6B6560] max-w-sm text-sm leading-relaxed"
                    >
                        Every project is a unique journey. We offer end-to-end design
                        services tailored to your vision, lifestyle, and budget.
                    </motion.p>
                </div>

                {/* Services List */}
                <div className="divide-y divide-[#C9A96E]/10">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group py-10 flex flex-col md:flex-row md:items-center gap-6 cursor-pointer hover:pl-4 transition-all duration-500"
                        >
                            {/* Number */}
                            <span
                                className="text-5xl text-[#C9A96E]/20 group-hover:text-[#C9A96E]/40 transition-colors duration-300 w-20 shrink-0"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {service.number}
                            </span>

                            {/* Title */}
                            <h3
                                className="text-3xl md:text-4xl text-[#F5F2EE] group-hover:text-[#C9A96E] transition-colors duration-300 w-64 shrink-0"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#6B6560] text-sm leading-relaxed flex-1">
                                {service.description}
                            </p>

                            {/* Tags + Arrow */}
                            <div className="flex flex-col gap-3 items-end shrink-0">
                                <div className="flex gap-2 flex-wrap justify-end">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs tracking-[0.1em] px-3 py-1 border border-[#C9A96E]/20 text-[#ADA8A3] group-hover:border-[#C9A96E]/50 transition-colors duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <ArrowUpRight
                                    size={20}
                                    className="text-[#C9A96E]/30 group-hover:text-[#C9A96E] transition-colors duration-300"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}