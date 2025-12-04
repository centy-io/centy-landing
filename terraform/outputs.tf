output "pages_url" {
  description = "Cloudflare Pages default URL"
  value       = "https://${cloudflare_pages_project.landing.subdomain}"
}

output "custom_domain_url" {
  description = "Custom domain URL"
  value       = "https://${cloudflare_pages_domain.landing.domain}"
}

output "project_name" {
  description = "Cloudflare Pages project name"
  value       = cloudflare_pages_project.landing.name
}
