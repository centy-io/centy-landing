const features = [
  {
    title: "Markdown-Based",
    description:
      "Issues are stored as simple Markdown files. Easy to read, easy to edit, easy to version control.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Git-Friendly",
    description:
      "Issues live alongside your code in the repository. Track changes with git history and collaborate naturally.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "AI Integration",
    description:
      "Designed to work seamlessly with AI assistants like Claude Code for intelligent issue resolution.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Zero Dependencies",
    description:
      "No external services or databases required. Everything runs locally within your project.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    title: "Frontmatter YAML",
    description:
      "Attach structured data to any issue using YAML frontmatter. Define custom fields, statuses, and metadata that fit your workflow.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7h16M4 12h10M4 17h7M9 3v4M15 3v4"
        />
      </svg>
    ),
  },
  {
    title: "Open Source",
    description:
      "Free and open source under MIT license. Contribute, customize, and make it your own.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t-2 border-[var(--foreground)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-3">
            — Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)]">
            Why Choose Centy?
          </h2>
          <p className="text-base text-[var(--muted)] max-w-xl mt-4 leading-relaxed">
            A modern approach to issue tracking that puts developers first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-[var(--foreground)]">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-[var(--background)] group hover:bg-[var(--foreground)] transition-all duration-100 cursor-default"
            >
              <div className="w-9 h-9 border-2 border-[var(--foreground)] group-hover:border-[var(--background)] flex items-center justify-center mb-5 text-[var(--foreground)] group-hover:text-[var(--background)]">
                {feature.icon}
              </div>
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider mb-2 text-[var(--foreground)] group-hover:text-[var(--background)]">
                {feature.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed group-hover:text-[var(--background)]/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
