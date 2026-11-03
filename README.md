# NexusKratos website

The static public website for **nexuskratos.dev**, maintained separately from the [NexusKratos platform](https://github.com/NexusKratos/nexuskratos).

## Status

The platform and its planned Warboard integration are under development. This repository contains the landing page, not the contributor application or a running coordinator. Hosting status is tracked in [PROGRESS.md](PROGRESS.md).

## Files and local preview

Only `public/` is deployed. Open `public/index.html` in a browser for a quick preview, or serve that directory with any local static-file server using an available port. No package installation or build step is required. Never deploy the repository root.

The site uses plain HTML, CSS, and JavaScript, with no external fonts, analytics, tracking, runtime API, cookies, signup form, or collected visitor data. The theme preference is stored locally when storage is available.

## Cloudflare Pages

Use the Git integration with repository `NexusKratos/website`:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | None |
| Build command | `exit 0` |
| Build output directory | `public` |
| Root directory | Repository root |

See [deployment guide](docs/guides/cloudflare-pages.md) for connection, domain, redirect, and rollback steps. No Cloudflare project or working domain is implied by these settings.

## Contribute

Read [CONTRIBUTING.md](CONTRIBUTING.md). Contact [hello@nexuskratos.dev](mailto:hello@nexuskratos.dev). Sensitive reports go to [security@nexuskratos.dev](mailto:security@nexuskratos.dev).

[Apache License 2.0](LICENSE).
