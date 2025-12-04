# Cloudflare Pages project for landing page
# Using direct upload mode - deployments handled via Wrangler in CI/CD
resource "cloudflare_pages_project" "landing" {
  account_id        = var.cloudflare_account_id
  name              = var.project_name
  production_branch = "main"
}

# Custom domain for the Pages project (root domain)
resource "cloudflare_pages_domain" "landing" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.landing.name
  domain       = "centy.io"
}

# A record pointing to Cloudflare Pages (for root domain)
resource "cloudflare_record" "landing_root" {
  zone_id = var.cloudflare_zone_id
  name    = "@"
  type    = "CNAME"
  content = cloudflare_pages_project.landing.subdomain
  proxied = true
  ttl     = 1 # Auto TTL when proxied
}

# WWW redirect to root domain
resource "cloudflare_record" "landing_www" {
  zone_id = var.cloudflare_zone_id
  name    = "www"
  type    = "CNAME"
  content = cloudflare_pages_project.landing.subdomain
  proxied = true
  ttl     = 1 # Auto TTL when proxied
}
