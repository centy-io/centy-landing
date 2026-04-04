import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-[var(--foreground)] leading-none mb-6">
          Intelligent
          <br />
          Issue Tracking
          <br />
          <span className="text-[var(--muted)]">for Modern Dev.</span>
        </h1>

        <p className="text-base sm:text-lg text-[var(--muted)] max-w-xl mb-10 leading-relaxed">
          Centy seamlessly integrates issue tracking into your codebase.
          Markdown-based, git-friendly, and designed for developers who value
          simplicity.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-20">
          <Link
            href="https://app.centy.io"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 font-mono text-sm font-bold uppercase tracking-widest bg-[var(--foreground)] text-[var(--background)] border-2 border-[var(--foreground)] hover:bg-transparent hover:text-[var(--foreground)] transition-all duration-100 text-center"
          >
            Get Started
          </Link>
          <Link
            href="https://app.centy.io/demo-org/centy-showcase/issues?demo=true"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 font-mono text-sm font-bold uppercase tracking-widest border-2 border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-100 text-center"
          >
            Try Demo
          </Link>
          <Link
            href="https://github.com/centy-io"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 font-mono text-sm font-bold uppercase tracking-widest border-2 border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-100 text-center"
          >
            View on GitHub
          </Link>
        </div>

        <div className="max-w-4xl border-2 border-[var(--foreground)]">
          <div className="flex items-center gap-2 px-4 py-2 border-b-2 border-[var(--foreground)] bg-[var(--foreground)]">
            <div className="w-3 h-3 border border-[var(--background)]/40 rounded-full" />
            <div className="w-3 h-3 border border-[var(--background)]/40 rounded-full" />
            <div className="w-3 h-3 border border-[var(--background)]/40 rounded-full" />
            <span className="ml-2 font-mono text-xs text-[var(--background)]/60">
              .centy/issues/abc123/body.md
            </span>
          </div>
          <div className="bg-[var(--foreground)] p-6 sm:p-8">
            <pre className="text-left text-sm sm:text-base overflow-x-auto font-mono">
              <code className="text-[var(--background)]/90 whitespace-pre">
                {`# Create SSG Next.js landing page webapp

Build a Static Site Generation (SSG) Next.js webapp
for the Centy landing page.

## Requirements
- Next.js with SSG for optimal performance
- Deploy target: Cloudflare Pages
- Purpose: Landing page for the Centy project`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
