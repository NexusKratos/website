# Contributing

Edit source files in `public/`; no dependency installation or bundling is needed. Keep website claims consistent with the platform's actual status. Do not publish invented usage metrics, partner logos, working-app claims, local paths, or secrets.

Use a feature branch and pull request. Check changes at mobile and desktop widths, keyboard navigation, theme selection, reduced motion, and disabled JavaScript. Verify local links/assets and run `git diff --check`. The browser must have no unexpected console or network errors. A short visual check is more useful than tests that merely match marketing prose.

Use a GitHub noreply address if you wish to keep your commit email private. AI-assisted contributions need the same ownership and validation as other contributions.

`VERSION` is the source checkpoint version. Maintainers allocate `checkpoint/<VERSION>` after focused verification; a checkpoint is not a live deployment. No `v*` release or GitHub Actions workflow is part of initial setup. The Cloudflare connection can trigger deployment independently of tags: inspect its branch settings before pushing.

Contact hello@nexuskratos.dev; report sensitive issues to security@nexuskratos.dev.
