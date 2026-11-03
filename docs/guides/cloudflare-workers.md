# Deploy the static website on Cloudflare Workers

## Validate and deploy

The source is dependency-free. Wrangler is deployment tooling, not a visitor dependency. Initial setup used the existing Wrangler 4.98.0 installation and Node 24; no package was installed in this repository. Use an authenticated, compatible Wrangler installation in the intended account.

```sh
node --test worker/redirect.test.mjs
node --check public/script.js
git diff --check
wrangler deploy --config wrangler.jsonc
```

Deploy only a checked, committed candidate; record its commit and resulting Worker version. `public/` is the asset root. The handler must run before assets to redirect secondary hosts even for existing paths. Missing files must retain real 404 status. Never upload the repository root as assets.

The config records the four verified managed custom domains. Initial setup deployed a workers.dev preview first, verified it, then attached these exact custom domains to `nexuskratos-website` through Cloudflare's Workers domain API: `nexuskratos.dev`, `www.nexuskratos.dev`, `nexuskratos.com`, `www.nexuskratos.com`.

Cloudflare managed custom domains create web DNS records and certificates. Inspect conflicts and never authorize an override of an existing record implicitly. Do not change MX, SPF, DKIM, DMARC, catch-all routing, or any other mail settings.

## Canonical redirects

The primary origin is `https://nexuskratos.dev`. Exact `.com` apex, `.com` www, and `.dev` www hosts return HTTP301 to that origin, preserving path and query. Other hosts, including the workers.dev preview, use the asset binding. No target hostname comes from user input.

DNS records alone do not redirect browsers. Do not install duplicate zone redirect rules while this handler owns canonicalization. Zone Single Redirects remain a viable future alternative if deliberately replacing the handler.

## Verify and roll back

Verify HTTPS200 at the primary root, content hash against the candidate, CSS/JS/favicon responses, response security headers, theme behavior at desktop/mobile widths, and an unknown path returning404. Verify every secondary hostname returns301 with the exact expected path and query, and that following it terminates on the primary hostname without a loop.

Record Worker version, deployed source commit, bindings, domain status, and live checks. Use the Workers dashboard version history to roll back to a known accepted deployment; preserve failed version evidence. Do not rewrite Git history.

## Automation status

Deployments are manual/explicit at this stage. No GitHub workflow, deployment hook, or Workers Builds connection is configured by the repository. Connecting automatic builds is separate work and must define its reviewed-candidate policy before enabling branch triggers.

## References

- [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)
- [Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
- [Worker script routing](https://developers.cloudflare.com/workers/static-assets/routing/worker-script/)
