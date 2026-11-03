# Website foundation — 2026-11-04

Repository: `NexusKratos/website`; source checkpoint `checkpoint/0.0.1`.

Live URL: https://nexuskratos.dev. `nexuskratos.com`, `www.nexuskratos.com`, and `www.nexuskratos.dev` return301 to the primary origin, preserving encoded path and query. Curl follow checks terminate with200 in one redirect. Chrome verifies canonical navigation, themes, and404 recovery.

Worker: `nexuskratos-website`. Deployed code commit: `5eb6e237c6394b5fcb89fb45b26b7baee17237ba`. Worker version: `ba049825-1797-4258-b9dd-b5c2712a29bf`. Final checkpoint adds records and declarations matching the verified domain bindings; served assets and redirect code are unchanged.

Cloudflare Pages rejected the new Git installation; ADR0002 records the switch to Workers Static Assets. OAuth refreshed through installed Wrangler. Supported managed custom-domain bindings created the web routes/certificates; no zone DNS override or mail-setting edit was performed.

No preview server or browser process from the implementation lane remains running. No platform app or Warboard integration is implemented by this repository. No automatic deployment pipeline is enabled; follow the Workers guide for the next deployment.
