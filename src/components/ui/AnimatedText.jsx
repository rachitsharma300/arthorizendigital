"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AnimatedText({ text, className, once = true }) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <motion.div
      className={cn("flex flex-wrap overflow-hidden", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10%" }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-2 inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
