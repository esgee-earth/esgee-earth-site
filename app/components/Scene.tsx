"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Scene({
  eyebrow,
  children,
  bgClassName,
  dark = true,
  className = "",
}: {
  eyebrow?: string;
  children: ReactNode;
  bgClassName: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden rounded-3xl ${bgClassName} ${className}`}
    >
      {eyebrow && (
        <span
          className={`absolute top-5 left-5 md:top-6 md:left-6 font-data text-[10px] tracking-[0.25em] uppercase z-10 ${
            dark ? "text-white/45" : "text-slate-400"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}
