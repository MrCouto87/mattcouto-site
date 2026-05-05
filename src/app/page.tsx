"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectOrbit } from "@/components/home/project-orbit";

const usefulFor = [
  "Diagnosing business chaos",
  "Turning AI into real workflows",
  "Building brand/content systems",
  "Creating offers and growth plans",
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-[#1a2336] bg-[#06080f]">
        <div className="mx-auto grid w-full max-w-content gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#85aefc]">MATT COUTO</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-[#f3f7ff] md:text-6xl">
              Building the next version of work, brands, and business.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#c2cde0] md:text-lg">
              I’m a founder and strategist based in Lisbon, building AI products, advising businesses, and
              turning messy ideas into clear systems that move.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.14em] text-[#7ea6f6]">
              CURRENTLY BUILDING: Mark AI · Vet My Business · MCS
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/consulting" size="lg" className="hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-20px_rgba(89,152,255,0.8)]">
                Work with me
              </Button>
              <Button
                href="/projects"
                variant="secondary"
                size="lg"
                className="border-[#2d3e5e] bg-[#0f1828] text-[#d9e5ff] hover:-translate-y-0.5 hover:bg-[#131f33]"
              >
                Explore the ecosystem
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }} className="flex items-center">
            <ProjectOrbit />
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#182235] bg-[#070a12]">
        <div className="mx-auto w-full max-w-content px-6 py-10">
          <p className="text-xs uppercase tracking-[0.18em] text-[#80a9ff]">What I’m Useful For</p>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {usefulFor.map((item, index) => (
              <motion.article
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-xl border border-[#1f2e4a] bg-[#0d1422] px-4 py-4 text-sm text-[#d9e4f9] transition duration-300 hover:-translate-y-0.5 hover:border-[#2f4974]"
              >
                {item}
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
