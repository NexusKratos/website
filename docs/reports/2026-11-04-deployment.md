# Website deployment — 2026-11-04

## What was built

Public website repository and static landing page, system/light/dark themes, contribution/contact links, accessible navigation and custom404. Cloudflare Worker `nexuskratos-website` serves the page and permanently redirects three secondary hostnames to https://nexuskratos.dev. The user explicitly requested .com forwarding.

## Verification evidence

Deployed code candidate: `5eb6e237c6394b5fcb89fb45b26b7baee17237ba`; Worker version `ba049825-1797-4258-b9dd-b5c2712a29bf`. Deployment CLI reported successful upload and deployment. Seven served assets total approximately31KB; `_headers` is configuration, not an eighth served file.

Local Chrome checks passed five widths (1440/1024/768/390/360), overflow/anchors, keyboard focus, reduced motion, themes/persistence, blocked local storage, no-JavaScript fallback, CSP and404 recovery. Two source reviewers found no blocker; both identified one minor README file-preview error, repaired. Focused Worker review on the deployed candidate also found no blocker. The redirect test runner reported **13 passed, 0 failed**. No third-party application dependencies exist.

Live curl checks: primary HTML/CSS/JS/favicon match exact source hashes; CSP headers present; unknown path returns404 and the checked custom error page. All three alias roots return301 to the primary origin. Encoded path/query probes return the exact canonical destination. Following each alias with a query terminates at the primary with200 and exactly one redirect. Live Playwright checks desktop/mobile theme controls with no page errors, canonical-domain navigation,404 status, and return-home. Expected404 network errors are not JavaScript failures. Email delivery was not tested.

Final checkpoint metadata does not change served assets or Worker code. The added route declarations match the four already active managed bindings. Their readback is separate evidence from deployment source identity.

## Assumptions made

The owner requested a static site on Cloudflare, allowing Workers Static Assets as an alternative to Pages. No account plan was upgraded. Redirect execution uses Workers; this is not a guarantee of unlimited free traffic. Apache-2.0 applies to newly authored source. Warboard remains independently usable, under development, and unmoved.

## Concerns and observations

Initial expired OAuth returned403, resolved through existing Wrangler. Offline npm resolution failed; no dependency was installed. Pages project creation returned401/code8000011 after the GitHub App connection; no identical retry or uninstall was attempted. DNS and zone redirect APIs returned403. Workers/custom-domain APIs supported the task and succeeded; no permission or scope was escalated.

The first preview urllib probe returned403; fresh curl and Chrome checks returned200, with no source change. The cause was not established; initial evidence is preserved. The static page does not collect visitor data; hosting-provider operational telemetry is outside that statement.

Git pushes do not deploy automatically. A native Workers Builds connection remains optional future work. Do not enable it without deciding its reviewed-candidate policy.

## Close-out confirmation and hygiene

Final records and domain declarations are checkpointed and pushed as `checkpoint/0.0.1`; remote parity is verified at close-out. No application release is implied. Implementation used one Standard lane; source review requested Standard and Strong configurations, with a focused Strong follow-up. Runtime model telemetry was unavailable to reviewers; requested configurations are recorded in the review report.

No local dependency tree, build output, container, or preview server remains. Source checkout and Git history are retained for development. Screenshots, source hashes, failed-attempt records, and deployment/domain receipts are retained outside the public repository as durable evidence, owned by the setup coordinator, with review at the next website deployment. No evidence was deleted and no unrelated artifacts were touched.

## Live-only correction

The final custom-domain browser console exposed Cloudflare's automatic analytics-beacon injection, blocked by the intended CSP. Source/local and workers.dev checks had not revealed that zone-level injection. Added the documented `Cache-Control: public, max-age=0, must-revalidate, no-transform` header for HTML so the proxy does not inject a script. This preserves the existing CSP. See [Cloudflare Web Analytics setup](https://developers.cloudflare.com/web-analytics/get-started/). A targeted live console/header check follows deployment of this header change; layout/redirect code are unchanged.
