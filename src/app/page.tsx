import { CtaSection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { projects } from "@/lib/projects";
import { ProjectOrbit } from "@/components/home/project-orbit";

const featuredProjects = projects.filter((project) => project.featured);

const valuePillars = [
  {
    title: "Strategy",
    items: ["Business diagnosis", "Offers", "Positioning", "Growth planning"],
  },
  {
    title: "AI Systems",
    items: ["AI workflows", "Automation", "Content systems", "Operational leverage"],
  },
  {
    title: "Brand & Content",
    items: ["Personal brand", "Social strategy", "Creative direction", "Content execution"],
  },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid w-full max-w-content gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#556482]">
            Builder. Strategist. AI Operator.
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#111827] md:text-6xl">
            I build practical AI, sharper brands, and businesses that move.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[#33415c] md:text-lg">
            I’m a founder, strategist, and operator based in Lisbon, working across AI, consulting,
            creative systems, and business growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/consulting" size="lg">
              Work with me
            </Button>
            <Button href="/projects" variant="secondary" size="lg">
              Explore projects
            </Button>
          </div>
        </div>
        <div className="flex items-center">
          <ProjectOrbit />
        </div>
      </section>

      <Section
        eyebrow="Currently Building"
        title="Focused projects at the intersection of systems, strategy, and execution."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Where I Create Value"
        title="Three pillars I use to unlock clarity and momentum."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {valuePillars.map((pillar) => (
            <article key={pillar.title} className="rounded-2xl border border-[#d7dce8] bg-white p-6">
              <h3 className="text-xl font-semibold tracking-tight text-[#161a23]">{pillar.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-[#33415c]">
                {pillar.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Selected Projects" title="A broader look across ventures, systems, and experiments.">
        <div className="grid auto-rows-[1fr] gap-5 md:grid-cols-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              className={index === 0 ? "md:col-span-3" : index === 1 ? "md:col-span-3" : "md:col-span-2"}
            />
          ))}
        </div>
      </Section>

      <CtaSection
        title="Need clarity on your business, brand, or AI strategy?"
        description="If your business feels messy, unclear, under-leveraged, or behind on AI, I can help you find the signal and build the plan."
        primaryLabel="Book a working session"
        primaryHref="/contact"
        secondaryLabel="See consulting offers"
        secondaryHref="/consulting"
      />
    </>
  );
}
