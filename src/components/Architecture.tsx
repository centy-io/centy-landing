const clients = [
  { label: "CLI", sublabel: "pnpm dlx centy" },
  { label: "Web UI", sublabel: "app.centy.io" },
  { label: "MCP Server", sublabel: "npx -y centy-mcp" },
  { label: "External Tools", sublabel: "Any gRPC client" },
];

const daemonLayers = [
  { label: "gRPC Gateway", sublabel: ":50051" },
  { label: "Core Logic", sublabel: null },
  { label: "mdstore", sublabel: "Markdown + YAML frontmatter", inverted: true },
];

export function Architecture() {
  return (
    <section
      id="architecture"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t-2 border-[var(--foreground)]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-3">
            — Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)]">
            Built to Connect
          </h2>
          <p className="text-base text-[var(--muted)] max-w-xl mt-4 leading-relaxed">
            One Rust daemon at the core. Reach it from your terminal, browser,
            AI agent, or any gRPC client.
          </p>
        </div>

        <div className="font-mono flex flex-col items-stretch gap-0">
          {/* Clients box */}
          <div className="border-2 border-[var(--foreground)] p-5">
            <p className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4">
              Clients
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[2px] bg-[var(--foreground)]">
              {clients.map(({ label, sublabel }) => (
                <div
                  key={label}
                  className="bg-[var(--background)] p-4 text-center"
                >
                  <div className="text-sm font-bold text-[var(--foreground)]">
                    {label}
                  </div>
                  <div className="text-xs text-[var(--muted)] mt-0.5">
                    {sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connector */}
          <div className="flex flex-col items-center py-3 self-center">
            <div className="w-px h-20 bg-[var(--foreground)]" />
            <span className="text-[var(--foreground)] text-xl leading-none">
              ↓
            </span>
          </div>

          {/* Daemon box */}
          <div className="border-2 border-[var(--foreground)] p-5">
            <div className="flex flex-col items-center gap-0 max-w-sm mx-auto">
              {daemonLayers.map((layer, i) => (
                <div
                  key={layer.label}
                  className="w-full flex flex-col items-center"
                >
                  <div
                    className={`w-full border-2 border-[var(--foreground)] p-3.5 text-center ${
                      layer.inverted
                        ? "bg-[var(--foreground)] text-[var(--background)]"
                        : "bg-[var(--background)] text-[var(--foreground)]"
                    }`}
                  >
                    <div className="text-sm font-bold">{layer.label}</div>
                    {layer.sublabel && (
                      <div
                        className={`text-xs mt-0.5 ${
                          layer.inverted
                            ? "text-[var(--background)]/60"
                            : "text-[var(--muted)]"
                        }`}
                      >
                        {layer.sublabel}
                      </div>
                    )}
                  </div>
                  {i < daemonLayers.length - 1 && (
                    <div className="flex flex-col items-center py-1.5">
                      <div className="w-px h-3 bg-[var(--foreground)]" />
                      <span className="text-[var(--foreground)] text-base leading-none">
                        ↓
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
