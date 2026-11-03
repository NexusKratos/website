# Deploy to Cloudflare Pages

Historical alternative only. Current delivery uses [Workers Static Assets](cloudflare-workers.md) following the Pages Git-installation failure recorded in ADR 0002.

## Connect the repository

1. Sign into the Cloudflare account that owns `nexuskratos.dev`.
2. Open Workers & Pages, create a Pages application, and connect GitHub.
3. Authorize the Cloudflare GitHub App for **NexusKratos/website**. Organization owner access may be required. Avoid granting access to unrelated repositories.
4. Select the repository, branch `main`, framework preset **None**, build command `exit 0`, and output directory `public`. Keep the root at the repository root.
5. Review branch controls. Disable automatic production deployment while assessing the first preview; use an explicitly selected accepted commit for production. Do not assume Git tags govern Pages builds.
6. Verify the resulting Pages URL and deployed source commit. Check the acceptance items in [RUNBOOK.md](../../RUNBOOK.md).

This guide chooses Git integration. A project created with Direct Upload cannot later be converted into a Git-integrated project, so do not create a Direct Upload project as a shortcut.

## Primary domain

Add `nexuskratos.dev` through the Pages project's Custom domains settings. Complete the DNS setup Cloudflare requests in the account owning that zone. Verify the certificate and actual HTTPS page. Domain registration alone does not complete this step.

## Additional domain

Configure a Cloudflare Single Redirect for incoming hosts `nexuskratos.com` and `www.nexuskratos.com`, targeting `https://nexuskratos.dev` with the original path, HTTP 301, and query-string preservation enabled. The source hostname must resolve through Cloudflare for the rule to run. Check existing records before adding web records. Optionally attach `www.nexuskratos.dev` to Pages and redirect it to the apex.

Preserve all existing MX, SPF, DKIM, DMARC, email routing, and other mail-related records. Both domains have an existing catch-all email setup. Never replace the zone wholesale.

## Acceptance and rollback

Record deployment ID, source commit, Pages URL, custom domain, HTTPS status, and redirect behavior. Verify a nonexistent path returns the custom 404 with status 404. Use the Cloudflare deployment history to roll back a faulty deployment to a known accepted version; do not rewrite Git history.

## References

- [Static HTML](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/)
- [Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/)
- [Build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Single Redirects](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/)
