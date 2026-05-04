import { ReactNode } from "react";

export function PageShell({ title, description, children }: { title: string; description: string; children?: ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-content px-6 py-16 md:py-24">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">{title}</h1>
        <p className="text-base text-foreground/70 md:text-lg">{description}</p>
      </div>
      {children ? <div className="mt-12">{children}</div> : null}
    </section>
  );
}
