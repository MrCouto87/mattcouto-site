import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteNav() {
  return (
    <header className="border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-6 py-4">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#2f3a52] bg-[#101726] text-xs font-semibold tracking-[0.08em] text-[#dce6fb] transition group-hover:-translate-y-0.5">
            MC
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/85">MATT COUTO</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
