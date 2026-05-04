import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaSectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
};

export function CtaSection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  className,
}: CtaSectionProps) {
  return (
    <section className={cn("mx-auto w-full max-w-content px-6 pb-16 md:pb-24", className)}>
      <div className="rounded-3xl border border-[#d7dce8] bg-[#f6f8fb] p-8 md:p-12">
        <h3 className="text-2xl font-semibold tracking-tight text-[#161a23] md:text-3xl">{title}</h3>
        <p className="mt-4 max-w-2xl text-base text-[#33415c]">{description}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button href={primaryHref}>{primaryLabel}</Button>
          {secondaryLabel && secondaryHref ? (
            <Button href={secondaryHref} variant="ghost">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
