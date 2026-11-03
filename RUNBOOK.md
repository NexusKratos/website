# Website operations

Deployment: follow [Cloudflare Workers guide](docs/guides/cloudflare-workers.md). Only `public/` is served as static assets; the small Worker handles canonical redirects. No server process, datastore, or container is required.

After deployment, check HTTPS, the root page, a missing page returning 404, CSS/JS/favicon responses, theme controls, GitHub/email links, and mobile layout. Check that the .com redirect preserves the path and query string and cannot form a loop.

For a bad deployment, use Cloudflare Workers deployment rollback to a known accepted deployment; preserve the failing deployment identifier. For a broken custom domain, inspect its Workers custom-domain binding and DNS in the owning account before changing anything. Never delete or replace existing MX/email records to fix web hosting.

There is no local daemon left running by this setup. Any temporary preview process must be explicitly stopped when its inspection completes.
