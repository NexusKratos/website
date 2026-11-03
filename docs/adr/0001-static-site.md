# 0001: Static website and source license

Date: 2026-11-04. Status: accepted for the initial website.

## Context

The owner requested a separate website repository for a static Cloudflare page. The platform is in development; the page needs clear content and polished interaction without a service backend.

## Decision

Use plain HTML, CSS, and small progressive-enhancement JavaScript in `public/`, with Cloudflare Pages Git integration. Use Apache-2.0 for this new source repository, matching the main project. Publish no analytics or form backend in this task.

## Alternatives rejected

A framework build and dependency graph would add maintenance without helping this single page. Direct Upload would prevent switching this Pages project to native Git integration later. Combining site and platform source would couple deployment to unrelated product changes.

## Consequences

There is no dependency install or compilation step. Browser checks and source review remain necessary. Hosting credentials and GitHub App installation are account capabilities, so source readiness does not establish deployment. Apache-2.0 license terms remain in LICENSE.
