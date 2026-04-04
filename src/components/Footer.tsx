import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t-2 border-[var(--foreground)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <span className="font-mono text-lg font-bold tracking-tight text-[var(--foreground)]">
            centy
          </span>
          <p className="font-mono text-xs text-[var(--muted)] mt-1 uppercase tracking-widest">
            Open Source Issue Tracking
          </p>
        </div>

        <div className="flex items-center gap-8">
          <Link
            href="https://app.centy.io"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--foreground)] hover:underline transition-colors"
          >
            App
          </Link>
          <Link
            href="https://docs.centy.io"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--foreground)] hover:underline transition-colors"
          >
            Docs
          </Link>
          <Link
            href="https://docs.centy.io"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--foreground)] hover:underline transition-colors"
          >
            Support
          </Link>
          <Link
            href="https://github.com/centy-io"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--foreground)] hover:underline transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[var(--secondary)]">
        <p className="font-mono text-xs text-[var(--muted)]">
          Built with Next.js · Deployed on Cloudflare Pages
        </p>
      </div>
    </footer>
  );
}
