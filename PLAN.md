# Current work

Dev mode: mvp (default). Written, authorized, updated: 2026-11-04.

## Static website setup

Status: running. Scope: create the separate website repository and a functional static landing page suitable for Cloudflare Pages. Execute authorized tasks in sequence; this does not implement the platform.

Threat sketch: public static assets and outbound GitHub/email links, no accounts or stored visitor data. Publish only public assets. Exclude credentials, private local data, and misleading product claims. Preserve all existing domain email records.

- Website worker owns `public/` and the design guide. Deliver responsive accessible page and honest product copy.
- Coordinator owns project records, repository settings, validation, and source checkpoint. Native worker messages carry checkpoints; no shared-file writers.
- Verify desktop/mobile behavior, local assets, themes, navigation, and content before source publication.
- Connect Cloudflare Git integration (owner installed its GitHub App); verify Pages deployment. Attach the domain where capability permits; DNS API access currently returns 403 and must be reported accurately.

No application release is part of this source foundation. The end state distinguishes source, browser evidence, and hosting. Design decisions are recorded in the design guide and ADR.
