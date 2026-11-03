# 0002: Workers Static Assets and canonical-domain redirects

Date: 2026-11-04. Status: accepted. Supersedes the hosting mechanism in ADR 0001; source license and static-page choices remain.

## Context

The owner requested a static website on Cloudflare and explicitly requested .com-to-.dev forwarding. After the Cloudflare GitHub App installation was confirmed, Pages project creation returned HTTP401 with code8000011, an internal Git-installation error. The available account authorization supports Workers and managed custom domains; DNS and zone redirect-rule requests return403.

## Decision

Deploy the existing static public assets through Workers Static Assets. A small Worker redirects the exact secondary hostnames to the canonical HTTPS hostname and delegates all other requests to the assets binding. Validate redirects with Node's built-in test runner, then verify the deployed page and aliases. Use managed custom-domain bindings only if no existing binding conflicts; never override existing DNS records or modify mail configuration.

Keep deployments explicit through Wrangler until a native Workers Builds connection is configured and verified. Source pushes and checkpoint tags alone must not deploy. No new account plan, datastore, analytics, or provider service is provisioned.

## Alternatives rejected

Repeating the unchanged failed Pages API call would not repair its account integration. Direct Upload would lose the intended Pages Git integration path. Zone Single Redirects are a simpler option where the account's permission set supports them, but this session cannot configure them. Workers Static Assets supports the requested static site and canonical redirects through its documented deployment and domain-binding APIs.

## Consequences

The website remains static; only hostname forwarding uses a short Worker. Redirects run before assets so / and existing asset paths on secondary hosts also canonicalize. The deployment must verify path/query preservation, no redirect loop, primary asset pass-through, and 404 status. Domain activation and certificate propagation remain separate from source checks and deployment creation.

References: [Static Assets](https://developers.cloudflare.com/workers/static-assets/), [Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).
