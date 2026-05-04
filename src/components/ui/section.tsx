import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/eyebrow";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export function Section({ id, eyebrow, title, description, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-content px-6 py-16 md:py-24", className)}>
      <div className="max-w-3xl space-y-4">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 className="text-3xl font-semibold tracking-tight text-[#161a23] md:text-5xl">{title}</h2>
        {description ? <p className="text-base text-[#33415c] md:text-lg">{description}</p> : null}
      </div>
      {children ? <div className="mt-10">{children}</div> : null}
    </section>
  );
}
