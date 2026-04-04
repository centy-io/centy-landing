const steps = [
  {
    step: "01",
    title: "Install Centy",
    description:
      "Install the Centy daemon with a single command. No Node.js required.",
    code: "curl -fsSL https://github.com/centy-io/installer/releases/latest/download/install.sh | sh",
  },
  {
    step: "02",
    title: "Install the CLI & Start",
    description:
      "Install the CLI and start the daemon. This background service handles all operations.",
    code: "pnpm add -g centy && centy start",
  },
  {
    step: "03",
    title: "Initialize Your Project",
    description:
      "Navigate to your project and initialize Centy. Creates a .centy folder to store issues and docs.",
    code: "cd your-project && centy init",
  },
  {
    step: "04",
    title: "Start Tracking Issues",
    description:
      "Create and manage issues directly from your terminal. All data is stored in git-friendly Markdown files.",
    code: "centy create issue --title 'My first issue'",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--secondary)] border-t-2 border-b-2 border-[var(--foreground)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-3">
            — Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)]">
            Up and Running in Minutes
          </h2>
          <p className="text-base text-[var(--muted)] max-w-xl mt-4 leading-relaxed">
            No account required. Works offline. Installs in under 5 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--foreground)] border-2 border-[var(--foreground)]">
          {steps.map((step) => (
            <div
              key={step.step}
              className="p-8 bg-[var(--secondary)] flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 border-2 border-[var(--foreground)] flex items-center justify-center font-mono font-bold text-sm text-[var(--foreground)]">
                  {step.step}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[var(--foreground)] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="bg-[var(--foreground)] p-3 border-2 border-[var(--foreground)]">
                  <code className="font-mono text-xs text-[var(--background)]/90 break-all">
                    {step.code}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
