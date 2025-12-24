const steps = [
  {
    step: "01",
    title: "Install Centy CLI",
    description:
      "Install the Centy CLI globally on your system. Requires Node.js 20 or higher.",
    code: "pnpm add -g centy",
  },
  {
    step: "02",
    title: "Install & Start the Daemon",
    description:
      "Download and start the Centy daemon. This background service handles all operations.",
    code: "centy install daemon && centy start",
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--secondary)]/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Started</h2>
          <p className="text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto">
            Set up Centy on your computer in under 5 minutes. No account required, works offline.
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
