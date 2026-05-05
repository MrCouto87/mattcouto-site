import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteNav() {
  return (
    <header className="border-b border-[#172033] bg-[#06080f]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-6 py-4">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#2b3f64] bg-[#0d1627] text-[11px] font-semibold tracking-[0.1em] text-[#b7cdff] transition group-hover:-translate-y-0.5">
            MC
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dde8ff]">MATT COUTO</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#c4d3ef] transition hover:text-[#f2f6ff]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
