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
    <div className="bg-[#070b14] text-[#edf2fb]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(72,109,176,0.16),transparent_36%),radial-gradient(circle_at_70%_8%,rgba(59,90,151,0.16),transparent_34%)]" />

        <div className="relative mx-auto w-full max-w-[88rem] px-6 pb-16 pt-14 md:pb-20 md:pt-20">
          <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.78fr_0.72fr]">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="max-w-2xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#90a6d0]">MATT COUTO</p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Building the next version of work, brands, and business.
              </h1>
              <p className="mt-6 text-base leading-relaxed text-[#c6d3ec] md:text-lg">
                I’m a founder and strategist based in Lisbon, building AI products, advising businesses,
                and turning messy ideas into clear systems that move.
              </p>
              <p className="mt-5 border-l-2 border-[#5e79ab] pl-3 text-xs font-medium uppercase tracking-[0.11em] text-[#9db1d6]">
                CURRENTLY BUILDING: Mark AI · Vet My Business · MCS
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <motion.div whileHover={{ y: -2 }}>
                  <Button href="/consulting" size="lg" className="bg-[#2f4f83] hover:bg-[#3a5f9a]">
                    Work with me
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -2 }}>
                  <Button href="/projects" variant="secondary" size="lg" className="border-[#40537a] text-[#d8e3f7] hover:bg-[#16253f]">
                    Explore the ecosystem
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-[#2b3346] bg-[#0e1524] p-2 shadow-[0_28px_75px_-34px_rgba(8,16,36,1)]">
                <div className="relative aspect-[4/5] rounded-[1.3rem] border border-[#313a4f] bg-[linear-gradient(160deg,#10182b_10%,#172238_48%,#0f1524_100%)]">
                  <motion.div
                    animate={{ x: [0, 8, 0], opacity: [0.35, 0.55, 0.35] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-x-4 top-[24%] h-px bg-[#6f8ec7]/60"
                  />
                  <motion.div
                    animate={{ x: [0, -6, 0], opacity: [0.2, 0.45, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-x-8 top-[62%] h-px bg-[#7f9ad2]/50"
                  />
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-[#3a4763] bg-[#111b30]/95 p-4 backdrop-blur">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#8ea6d1]">Founder Portrait Area</p>
                    <p className="mt-2 text-sm text-[#d6e0f3]">Reserved for Matt’s editorial portrait</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:pt-6">
              <ProjectOrbit />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[88rem] px-6 pb-20">
        <div className="rounded-3xl border border-[#26324a] bg-[#0e1524] p-5 md:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8ca3cf]">What I’m Useful For</p>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {usefulFor.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-xl border border-[#2e3c58] bg-[#111c31] px-4 py-3"
              >
                <p className="text-sm text-[#d6e1f6]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
