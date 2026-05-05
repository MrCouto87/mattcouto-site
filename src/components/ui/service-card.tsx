import { Service } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-[#d7dce8] bg-white p-6 transition duration-200 hover:border-[#b5c0d8] hover:shadow-sm",
        className,
      )}
    >
      <h3 className="text-xl font-semibold tracking-tight text-[#161a23]">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[#33415c]">{service.shortDescription}</p>
      <p className="mt-4 text-sm text-[#1f2a44]"><span className="font-medium">Best for:</span> {service.whoItIsFor}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#33415c]">
        {service.whatItIncludes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-[#1f2a44]"><span className="font-medium">Outcome:</span> {service.outcome}</p>
      <div className="mt-6">
        <Button href="/contact" variant="primary" size="sm">
          {service.ctaLabel}
        </Button>
      </div>
    </article>
  );
}
