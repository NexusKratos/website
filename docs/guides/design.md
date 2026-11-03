# Website design

The site introduces NexusKratos to open source maintainers and potential contributors. Its job is to explain the proposed collaboration model and bring interested people into the real GitHub repository and issues. The platform is explicitly a concept in development; the site offers no signup, simulated activity, adoption figures, or claims of implemented platform controls. Warboard is presented as an independently useful visibility component under active development, with integration planned. Its private repository is not linked.

## Visual direction

A technical editorial composition combines spacious typography with a compact diagram of coordinated work. The palette is slate white (`#f8fafb`), navy (`#102b35`), teal (`#08665f`), copper (`#a34d30`), and cool gray (`#52656e`). Dark mode uses navy surfaces, pale teal, and light copper. Flat fills only; no gradients. Georgia carries display text, the system UI stack carries body copy, and the local monospace stack labels workflow concepts. No remote fonts or assets are requested.

The signature element is an explicitly conceptual task flow: goal → planner/orchestrator → CLI contributions across repositories → reviewed work and human decisions. Its three task branches demonstrate implementation, independent review, and QA; they do not represent actual contributors or running jobs. Sequential numbering appears only on the proposed four-step contribution workflow. The page deliberately uses plain labels and a single primary button in the hero, keeping the explanation readable before introducing technical details.

## Content and interaction

The landing page moves from the central idea to the proposed workflow, contributor boundaries, ecosystem roles, and ways to get involved. Repository and issue links point to `https://github.com/NexusKratos/nexuskratos`. Contact uses the public role address `hello@nexuskratos.dev`. The canonical website is `https://nexuskratos.dev/`.

The only JavaScript is progressive enhancement for a native system/light/dark theme selector. System is the default; explicit selection persists locally when browser storage permits it. A blocked store does not prevent changing the current page. Without JavaScript, all content and links work and the color scheme follows the system; the inactive selector stays hidden. Nothing is tracked or sent to a backend.

## Accessibility and responsive behavior

Semantic landmarks, one page heading, a skip link, visible keyboard focus, real links, and a native select support keyboard and assistive technology use. The flow diagram is real HTML with a caption, while decorative connectors and glyphs are hidden from assistive technology. Reduced-motion preferences disable smooth scrolling and hover movement. At narrow widths the hero, principles, boundary section, ecosystem, and contribution cards stack; the diagram retains its three labeled branches. The target minimum viewport is 360 CSS pixels.

## Delivery

`public/` is a dependency-free static document root suitable for Cloudflare Pages. It includes an explicit 404 page, SVG favicon, crawler directives, sitemap, and a restrictive same-origin content security policy. CSS and script cache for one hour with revalidation, using unversioned paths that allow routine updates without long cache holds. Cloudflare applies `_headers`; an ordinary local file server does not.
