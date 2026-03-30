"use client";

import { motion } from "framer-motion";

export default function StepVisualJourney() {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 shadow-sm px-6 py-8">

      <div className="grid md:grid-cols-[1fr_1.3fr] items-center gap-8">

        {/* LEFT: FLOW */}
        <div className="relative flex items-center justify-center gap-6">

          {/* RECEIPT */}
          <div className="h-20 w-20 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-2xl">
            📄
          </div>

          {/* HAND (moves across properly) */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{
              x: [ -20, 80, 80, -20 ],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 4.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1.2
            }}
            className="absolute left-10"
          >
            <span className="text-3xl">🤚</span>
          </motion.div>

          {/* ESGee */}
          <div className="h-20 w-20 rounded-full bg-white border border-emerald-300 shadow-sm flex items-center justify-center text-sm font-semibold text-emerald-600 text-center">
            ESGee<br />Earth
          </div>

        </div>

        {/* RIGHT: STACKED CHECKLIST */}
        <div className="space-y-3 text-sm text-slate-700">

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-3 whitespace-nowrap"
          >
            <span className="text-emerald-600 text-lg">✔</span>
            <span>Start simple</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 }}
            className="flex items-center gap-3 whitespace-nowrap"
          >
            <span className="text-emerald-600 text-lg">✔</span>
            <span>Track data monthly</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
            className="flex items-center gap-3 whitespace-nowrap"
          >
            <span className="text-emerald-600 text-lg">✔</span>
            <span>No ESG expertise needed</span>
          </motion.div>

        </div>

      </div>

    </div>
  );
}
