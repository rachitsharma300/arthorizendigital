"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "The Serene Villa",
        category: "Residential",
        location: "Mumbai, India",
        year: "2024",
        description:
            "A luxurious 4BHK villa transformed into a serene sanctuary with warm neutrals, natural textures, and bespoke furniture.",
        tags: ["Luxury", "Residential", "Full Design"],
    },
    {
        id: 2,
        title: "Nexus Corporate Hub",
        category: "Commercial",
        location: "Delhi, India",
        year: "2024",
        description:
            "A modern office space designed to foster collaboration and creativity — featuring open workspaces, private pods, and a stunning reception area.",
        tags: ["Office", "Commercial", "Space Planning"],
    },
    {
        id: 3,
        title: "The Golden Apartment",
        category: "Residential",
        location: "Bangalore, India",
        year: "2023",
        description:
            "A compact 2BHK apartment redesigned with smart storage solutions, gold accents, and a minimalist aesthetic that feels spacious and elegant.",
        tags: ["Minimal", "Apartment", "Residential"],
    },
    {
        id: 4,
        title: "Aroma Cafe & Lounge",
        category: "Hospitality",
        location: "Pune, India",
        year: "2023",
        description:
            "A cozy cafe interior blending industrial elements with warm lighting and lush greenery — creating an inviting atmosphere for every guest.",
        tags: ["Hospitality", "Cafe", "Commercial"],
    },
];

export default function ProjectsSection() {
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
                                Our Work
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
                            Featured Projects
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#6B6560] max-w-sm text-sm leading-relaxed"
                    >
                        Every project tells a story. Here are some of our most celebrated
                        transformations.
                    </motion.p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative bg-[#111111] border border-[#C9A96E]/10 hover:border-[#C9A96E]/40 transition-all duration-500 p-8 cursor-pointer"
                        >
                            {/* Top Row */}
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-xs tracking-[0.2em] uppercase text-[#C9A96E]">
                                    {project.category}
                                </span>
                                <ArrowUpRight
                                    size={18}
                                    className="text-[#C9A96E]/30 group-hover:text-[#C9A96E] transition-colors duration-300"
                                />
                            </div>

                            {/* Image Placeholder */}
                            <div className="w-full h-48 bg-[#1A1A1A] border border-[#C9A96E]/10 mb-6 flex items-center justify-center overflow-hidden">
                                <span className="text-xs tracking-[0.2em] uppercase text-[#6B6560]">
                                    Project Image
                                </span>
                            </div>

                            {/* Title */}
                            <h3
                                className="text-3xl text-[#F5F2EE] group-hover:text-[#C9A96E] transition-colors duration-300 mb-2"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {project.title}
                            </h3>

                            {/* Location + Year */}
                            <p className="text-xs text-[#6B6560] tracking-[0.1em] mb-4">
                                {project.location} · {project.year}
                            </p>

                            {/* Description */}
                            <p className="text-[#ADA8A3] text-sm leading-relaxed mb-6">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex gap-2 flex-wrap">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs tracking-[0.1em] px-3 py-1 border border-[#C9A96E]/20 text-[#ADA8A3]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}