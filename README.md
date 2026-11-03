# NexusKratos website

The static public website for **nexuskratos.dev**, maintained separately from the [NexusKratos platform](https://github.com/NexusKratos/nexuskratos).

## Status

The platform and its planned Warboard integration are under development. This repository contains the landing page, not the contributor application or a running coordinator. Hosting status is tracked in [PROGRESS.md](PROGRESS.md).

## Files and local preview

Only `public/` is deployed. Serve that directory as the document root with a local static-file server using an available port, then open its HTTP URL. Direct `file://` previews are unsupported because assets use root-relative URLs. No package installation or build step is required. Never deploy the repository root.

The site uses plain HTML, CSS, and JavaScript, with no external fonts, analytics, tracking, runtime API, cookies, signup form, or collected visitor data. The theme preference is stored locally when storage is available.

## Cloudflare deployment

The active deployment path is **Workers Static Assets**, with a small hostname redirect handler. `public/` is the static document root; `worker/` is not published as an asset directory. See [deployment guide](docs/guides/cloudflare-workers.md) for validation, deployment, domains, and rollback.

The original [Pages guide](docs/guides/cloudflare-pages.md) is retained as an alternative, not the current deployment mechanism. Pages rejected the new Git installation; [ADR 0002](docs/adr/0002-workers-static-assets.md) records the switch.

Source pushes and checkpoint tags do not automatically deploy. A live deployment must be verified separately from the source checkpoint.

## Contribute

Read [CONTRIBUTING.md](CONTRIBUTING.md). Contact [hello@nexuskratos.dev](mailto:hello@nexuskratos.dev). Sensitive reports go to [security@nexuskratos.dev](mailto:security@nexuskratos.dev).

[Apache License 2.0](LICENSE).
