const steps = [
  {
    step: "01",
    title: "Initialize Centy",
    description:
      "Add Centy to your project with a simple initialization command. It creates a .centy folder in your repository.",
    code: "npx centy init",
  },
  {
    step: "02",
    title: "Create Issues",
    description:
      "Create new issues using the CLI or manually add Markdown files. Each issue gets a unique ID.",
    code: "npx centy create issue --title 'Fix login bug'",
  },
  {
    step: "03",
    title: "Track Progress",
    description:
      "Update issue status, add comments, and track progress. All changes are version controlled.",
    code: "npx centy get issue 1",
  },
  {
    step: "04",
    title: "Collaborate",
    description:
      "Share issues through git, integrate with AI assistants, or build custom tooling around the simple format.",
    code: "git add .centy && git commit -m 'Close issue'",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--secondary)]/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto">
            Get started with Centy in minutes. No account required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div key={step.step} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-[var(--foreground)]/70 mb-4">
                  {step.description}
                </p>
                <div className="bg-[var(--background)] rounded-lg p-3 border border-[var(--secondary)]">
                  <code className="text-sm text-[var(--primary)]">
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
