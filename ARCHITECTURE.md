# Architecture

A dependency-free static site in `public/`, hosted on Cloudflare Workers Static Assets. Plain HTML provides content and navigation; CSS provides responsive layout and themes; JavaScript enhances theme selection. Essential content and links remain usable without JavaScript.

The site links to GitHub and email. It is not the NexusKratos product runtime and makes no network requests to task orchestration services. It contains no credentials or application backend. A minimal Worker canonicalizes the three secondary hostnames to the primary HTTPS hostname before delegating other requests to static assets. Only the `public/` directory is a publishable asset directory.

Deployment is explicit through Wrangler; Git pushes do not trigger publication. `wrangler.jsonc` binds the public asset directory and redirect Worker. Cloudflare managed custom domains provide DNS and certificates where authorized. ADR 0002 records why Pages was replaced after its Git-installation error.

Warboard is an independently usable visibility component under active development. Its NexusKratos integration is planned, not a feature implemented by this website.
