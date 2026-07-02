import agentConfig from 'eslint-config-agent/recommended-incremental'
import nextConfig from 'eslint-config-next'

// eslint-config-agent and eslint-config-next each pin their own copy of a few
// shared plugins (react, react-hooks, import, @typescript-eslint), which makes
// ESLint throw "Cannot redefine plugin" once both configs are combined. Collapse
// each shared plugin name to a single instance — the newer one, since the older
// copy is sometimes missing a rule the other config references.
// react-hooks: eslint-config-next 16 requires the newer plugin (React Compiler
// rules like `static-components`); eslint-config-agent's copy predates them.
const NEXT_WINS = new Set(['react-hooks'])

const agentPlugins = Object.fromEntries(
  agentConfig.flatMap((c) => (c.plugins ? Object.entries(c.plugins) : []))
)
const nextPlugins = Object.fromEntries(
  nextConfig.flatMap((c) => (c.plugins ? Object.entries(c.plugins) : []))
)

const resolvePlugin = (name, plugin) => {
  if (!(name in agentPlugins) || !(name in nextPlugins)) return plugin
  return NEXT_WINS.has(name) ? nextPlugins[name] : agentPlugins[name]
}

const normalize = (configArray) =>
  configArray.map((c) => {
    if (!c.plugins) return c
    return {
      ...c,
      plugins: Object.fromEntries(
        Object.entries(c.plugins).map(([name, plugin]) => [name, resolvePlugin(name, plugin)])
      ),
    }
  })

export default [
  ...normalize(nextConfig),
  ...normalize(agentConfig),
  {
    ignores: ['out', '.next', 'node_modules', '.centy', 'scripts/**'],
  },
]
