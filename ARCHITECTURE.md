# Architecture

A dependency-free static site in `public/`, hosted on Cloudflare Pages. Plain HTML provides content and navigation; CSS provides responsive layout and themes; JavaScript enhances theme selection. Essential content and links remain usable without JavaScript.

The site links to GitHub and email. It is not the NexusKratos product runtime and makes no network requests to task orchestration services. It contains no credentials or backend configuration. Only the `public/` directory is a publishable asset directory.

Cloudflare's Git integration is the intended delivery mechanism. Initial integration requires access to the organization repository and Cloudflare account. Subsequent deployment behavior is managed in Pages settings, not a GitHub workflow. Disable automatic production deployments until the initial site is accepted; see the deployment guide.

Warboard is an independently usable visibility component under active development. Its NexusKratos integration is planned, not a feature implemented by this website.
