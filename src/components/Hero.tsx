import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--secondary)] text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Open Source Issue Tracking
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
            Intelligent Issue Tracking
          </span>
          <br />
          for Modern Development
        </h1>

        <p className="text-lg sm:text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto mb-10">
          Centy seamlessly integrates issue tracking into your codebase.
          Markdown-based, git-friendly, and designed for developers who value
          simplicity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://app.centy.io"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-base font-medium text-white bg-[var(--primary)] rounded-lg hover:bg-[var(--primary-hover)] transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="https://app.centy.io/demo-org/centy-showcase/issues?demo=true"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-base font-medium border border-[var(--secondary)] rounded-lg hover:bg-[var(--secondary)] transition-colors"
          >
            Try Demo
          </Link>
          <Link
            href="https://github.com/centy-io"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-base font-medium border border-[var(--secondary)] rounded-lg hover:bg-[var(--secondary)] transition-colors"
          >
            View on GitHub
          </Link>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent z-10 pointer-events-none" />
          <div className="bg-[var(--secondary)] rounded-xl p-4 sm:p-8 max-w-4xl mx-auto border border-[var(--secondary)]">
            <pre className="text-left text-sm sm:text-base overflow-x-auto">
              <code className="text-[var(--foreground)]/80">
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
