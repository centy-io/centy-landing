# centy-landing

The Centy landing page at [centy.io](https://centy.io) — a statically exported
Next.js 16 site, deployed to Cloudflare Pages.

`next.config.ts` sets `output: "export"`, so `pnpm build` emits a static site to
`out/` with `trailingSlash: true` and unoptimized images.

## Prerequisites

- Node.js 20 or newer and pnpm 10 (see `packageManager` in `package.json`)

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

The exported site lands in `out/`. Serve the production build locally with
`pnpm start`.

## Scripts

| Script | What it does |
|---|---|
| `pnpm dev` | `next dev` |
| `pnpm build` | `next build` — static export into `out/` |
| `pnpm start` | `next start` |
| `pnpm lint` | `eslint src` |
| `pnpm generate:favicons` | regenerate favicons from `src/app/icon.svg` via `scripts/generate-favicons.ts` |

## Source layout

```
src/app/          # App Router entry: layout.tsx, page.tsx, globals.css, robots.ts, sitemap.ts
src/components/   # page sections — Header, Hero, Features, HowItWorks, Architecture, CTA, Footer
public/           # static assets
scripts/          # generate-favicons.ts
terraform/        # Cloudflare Pages project, centy.io domain, and DNS records
```

Styling is Tailwind CSS 4 through `@tailwindcss/postcss`.

## Deployment

`.github/workflows/deploy.yml` runs on every push to `main` (and on
`workflow_dispatch`). It builds the site and deploys `out/` with
`wrangler pages deploy out --project-name=centy-landing --branch=main`, using the
`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repository secrets.

The Cloudflare Pages project uses direct-upload mode; the project, the `centy.io`
custom domain, and the root/`www` DNS records are managed in `terraform/`.

## CI

`.github/workflows/ci.yml` runs `pnpm lint` and `pnpm build` on every pull
request and on pushes to `main`.
