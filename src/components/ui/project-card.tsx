import { Project } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-[#d7dce8] bg-[#fcfcfd] p-6 transition duration-200 hover:-translate-y-0.5 hover:border-[#b5c0d8] hover:shadow-sm",
        className,
      )}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#50607f]">{project.category}</p>
        <span className="rounded-full bg-[#eef1f7] px-2.5 py-1 text-xs text-[#33415c]">{project.status}</span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-[#161a23]">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[#33415c]">{project.shortDescription}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-[#d7dce8] px-2.5 py-1 text-xs text-[#33415c]">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6">
        <Button href={project.ctaUrl} variant="secondary" size="sm">
          {project.ctaLabel}
        </Button>
      </div>
    </article>
  );
}
