# Website foundation — 2026-11-04

Repository: `NexusKratos/website`. Intended source checkpoint: `checkpoint/0.0.1` after scoped browser/source checks and push.

Hosting destination: Cloudflare Pages, primary domain `nexuskratos.dev`; `nexuskratos.com` should permanently redirect to the primary domain. User has catch-all email on both domains; preserve MX/TXT/mail configuration.

The saved Cloudflare access token initially returned 403; invoking installed Wrangler refreshed it successfully. Both zones are active. The owner installed Cloudflare Workers and Pages for the organization/repository. DNS API access returns 403, so custom-domain DNS may need owner action. No live deployment, domain attachment, or redirect is claimed. Complete the documented Git integration and verify the deployed commit before declaring live.

No platform app or provider integration is implemented here. Warboard still has development work and remains in its existing repository.
