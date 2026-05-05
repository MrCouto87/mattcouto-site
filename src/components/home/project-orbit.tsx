"use client";

import { motion } from "framer-motion";

const modules = [
  { title: "Mark AI", status: "Active" },
  { title: "Vet My Business", status: "Building" },
  { title: "MCS", status: "Consulting" },
  { title: "JOIA", status: "In Development" },
  { title: "The Honeymooners Club", status: "Creative" },
];

export function ProjectOrbit() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, delay: 0.25 }}
      className="relative overflow-hidden rounded-3xl border border-[#2a3348] bg-[#0e1524] p-5 shadow-[0_25px_70px_-30px_rgba(6,12,28,0.95)]"
    >
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8fa6d8]">Operating System</p>
        <span className="rounded-full border border-[#33405d] bg-[#121d33] px-2.5 py-1 text-[10px] uppercase tracking-[0.08em] text-[#c1d0ec]">
          Live
        </span>
      </div>

      <div className="space-y-2.5">
        {modules.map((module, i) => (
          <motion.div
            key={module.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
            whileHover={{ y: -2 }}
            className="rounded-xl border border-[#27324a] bg-[#101a2d] px-3.5 py-3"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-[#e8eefb]">{module.title}</p>
              <span className="shrink-0 rounded-full border border-[#3a496a] bg-[#16233d] px-2.5 py-1 text-[10px] uppercase tracking-[0.08em] text-[#bacef1]">
                {module.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.aside>
  );
}
