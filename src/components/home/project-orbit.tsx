"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "Mark AI", x: "8%", y: "18%" },
  { label: "Vet My Business", x: "72%", y: "14%" },
  { label: "MCS", x: "14%", y: "70%" },
  { label: "The Honeymooners Club", x: "58%", y: "76%" },
  { label: "JOIA", x: "78%", y: "52%" },
];

export function ProjectOrbit() {
  return (
    <div className="relative mx-auto mt-12 aspect-square w-full max-w-[30rem] rounded-3xl border border-[#d8deea] bg-[#f7f9fc] p-8">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        className="absolute inset-5 rounded-full border border-dashed border-[#c6d0e4]/80"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="absolute inset-14 rounded-full border border-dashed border-[#d4dcec]/80"
      />

      <div className="absolute left-1/2 top-1/2 z-10 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b9c5dd] bg-white px-5 py-4 text-center shadow-sm">
        <p className="text-sm font-semibold tracking-tight text-[#111827]">Matt Couto</p>
        <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#52607c]">Operating Core</p>
      </div>

      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
          className="absolute"
          style={{ left: node.x, top: node.y }}
        >
          <div className="rounded-full border border-[#c9d3e7] bg-white px-3 py-1.5 text-xs font-medium text-[#2e3b57] shadow-sm">
            {node.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
