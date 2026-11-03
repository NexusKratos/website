# Current work

Dev mode: mvp (default). Written, authorized, updated: 2026-11-04.

## Static website and domain setup

Status: done 2026-11-04. User scope: separate website repository, functional static Cloudflare landing page, and permanent additional-domain forwarding. Tasks executed in sequence with scoped implementation and review lanes.

Threat sketch: public static assets and outbound GitHub/email links; no accounts or visitor-data collection. Publish only public assets; credentials stay in local deployment authentication. Canonical redirects use a fixed destination origin. Preserve all domain mail settings.

- Website worker delivered public assets/design guide, then a separately tested redirect handler and configuration.
- Coordinator created repository records, validated claims/links, integrated reviews, deployed checked source, attached managed custom domains, and verified HTTPS/redirects.
- Two fresh-context source reviews plus focused Worker review found no blockers. The minor local-preview documentation defect was repaired.
- Cloudflare Pages Git installation failed. ADR0002 records the successful Workers Static Assets alternative. Actual domains and forwarding passed live acceptance.

The platform itself is still under development. No application release, automatic deployment pipeline, or Warboard repository migration is part of this task.

## Repository security — authorized 2026-11-04

Status: done 2026-11-04 for the applied configuration; source records close through the protected PR workflow. Owner: coordinator. Scope: the two new public repositories only. Record security choices, enable native GitHub settings, commit the settings documentation, activate branch/tag rules, and verify API readback. No application code, dependencies, deployment, organization membership, or org-wide account policy changes. Threat scope: protect shared source and workflow permissions; preserve owner access through an audited PR exception.
