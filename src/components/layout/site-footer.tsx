export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-6 py-6 text-sm text-foreground/70">
        <p>© {new Date().getFullYear()} Matt Couto</p>
        <p>Built for clarity, crafted for momentum.</p>
      </div>
    </footer>
  );
}
