"use client";

import { motion } from "framer-motion";

const initiatives = [
  { name: "Mark AI", status: "Active" },
  { name: "Vet My Business", status: "Building" },
  { name: "MCS", status: "Consulting" },
  { name: "JOIA", status: "In Development" },
  { name: "The Honeymooners Club", status: "Creative" },
];

export function ProjectOrbit() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-auto grid w-full max-w-[36rem] gap-5 rounded-3xl border border-[#1f2c45] bg-[#090d16] p-5 shadow-[0_35px_90px_-45px_rgba(43,116,255,0.6)] md:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="relative min-h-[21rem] overflow-hidden rounded-2xl border border-[#22314d] bg-gradient-to-b from-[#121b2d] to-[#0b111d]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(76,140,255,0.26),transparent_45%),radial-gradient(circle_at_74%_78%,rgba(86,148,255,0.2),transparent_48%)]" />
        <div className="absolute inset-x-7 bottom-7 top-7 rounded-[1.5rem] border border-[#2f4368] bg-gradient-to-b from-[#1c2942] to-[#0f1727]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-[#7fa7ff]">Portrait Placeholder</p>
            <p className="mt-2 text-sm text-[#dbe7ff]">Editorial founder image area</p>
          </div>
        </div>

        <motion.div
          animate={{ x: [0, 18, 0], y: [0, -14, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-8 top-8 h-40 w-40 rounded-full border border-[#3d65aa]/50"
        />
        <motion.div
          animate={{ x: [0, -16, 0], y: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-10 bottom-6 h-52 w-52 rounded-full border border-[#4c79c7]/40"
        />
      </div>

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-2xl border border-[#1f2d48] bg-[#0c1220] p-5"
      >
        <p className="text-xs uppercase tracking-[0.16em] text-[#87aefc]">Operating System</p>
        <ul className="mt-4 space-y-2.5">
          {initiatives.map((initiative, index) => (
            <motion.li
              key={initiative.name}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex items-center justify-between rounded-xl border border-[#202f4a] bg-[#0f1829] px-3 py-2"
            >
              <span className="text-sm text-[#e4ecff]">{initiative.name}</span>
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#80a9ff]">{initiative.status}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
