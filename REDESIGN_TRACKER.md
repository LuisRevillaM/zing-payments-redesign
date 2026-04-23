# Zing Payments Redesign Tracker

## Purpose
This file is the external source of truth for the Zing Payments redesign. It exists to prevent drift between:
- the generated design concept
- the live Render implementation
- the original site copy and product coverage
- the actual asset pass
- the deployment and follow-up iteration plan

## References
- Generated concept image: `/Users/luisrevilla/.codex/generated_images/019dba5c-8ffd-7281-8ef1-a6de7bd84dc5/ig_01b27254306a693b0169ea15627ad08198986754e35dda5c37.png`
- Current live site: `https://zing-payments-redesign.onrender.com`
- GitHub repo: `https://github.com/LuisRevillaM/zing-payments-redesign`
- Workspace root: `/Users/luisrevilla/Documents/Codex/2026-04-23-files-mentioned-by-the-user-screenshot`

## Project Intent
Rebuild `zingpayments.com` into a modern, world-class B2B marketing site that:
- feels aligned with the generated concept rather than a generic brochure page
- stops relying on hash-link, scroll-spy navigation as the primary information architecture
- uses real product and industry imagery instead of placeholder geometry
- preserves the substance of the original text unless there is a clear structural reason to compress or relabel it
- is ready to iterate quickly on Render

## Non-Negotiables
- Navigation should move to real destinations, not just jump links to long scroll sections.
- Equipment and industry sections should use real imagery wherever possible.
- Copy changes should be minimal and deliberate.
- Contact form behavior must be real, not fake-success client logic.
- Homepage should match the visual direction of the concept: editorial hero, premium composition, stronger hierarchy, cleaner cards, tighter surface system.
- Mobile and desktop both need first-class treatment.

## Audit Findings From First Pass
1. The first deployed version drifted from the generated mockup and used the concept as inspiration instead of implementation guidance.
2. The first deployed version kept a single-page, section-anchor navigation model.
3. Equipment visuals were placeholder constructions rather than actual product assets.
4. The form did not submit to a real backend flow.
5. Some copy was rewritten more aggressively than requested.
6. Some content depended on client-side rendering when it should have been present in the base HTML.

## Current Architecture Direction For Pass Two
- Multi-page static marketing site served by the existing Node server.
- Shared shell and shared data layer for consistency across pages.
- Homepage acts as overview and preview layer.
- Dedicated pages for:
  - `About`
  - `Solutions`
  - `Industries`
  - `Equipment`
  - `Partners`
  - `Gateway`
  - `Contact`
- Contact form posts to `POST /api/contact`.

## Visual Direction
- Warm ivory base instead of cold flat blue.
- Premium serif + modern sans pairing.
- Tighter editorial layout with strong asymmetry in the hero.
- Glassy or layered header treatment only if it supports clarity.
- Bold device/product imagery in the hero and equipment modules.
- Dense but readable cards for industries and solution categories.

## Asset Inventory Already Collected
- `assets/images/hero-architecture.jpg`
- `assets/images/industry-banking.jpg`
- `assets/images/industry-parks.jpg`
- `assets/images/industry-government.jpg`
- `assets/images/industry-powersports.jpg`
- `assets/images/industry-nonprofit.jpg`
- `assets/images/industry-restaurants.jpg`
- `assets/images/clover-station.webp`
- `assets/images/clover-flex.jpg`
- `assets/images/clover-go.webp`
- `assets/images/clover-mini.jpg`
- `assets/images/poynt-five.jpg`
- `assets/images/poynt-terminal.png`
- `assets/images/talech-elo.jpg`
- `assets/images/talech-all-in-one.jpg`
- `assets/images/solution-mobile.jpg`
- `assets/images/clover-flex-official.png`
- `assets/images/clover-mini-official.webp`
- `assets/images/clover-station-official.webp`
- `assets/images/clover-go-icon-official.png`
- `assets/images/clover-go-diagram-official.png`
- `assets/images/poynt-hero-official.png`
- `assets/images/poynt-smart-terminal-official.png`
- `assets/images/poynt-n910-official.png`
- `assets/images/talech-register-front-official.webp`
- `assets/images/talech-register-closeup-official.webp`
- `assets/generated-hero/hero-payments-scene.jpg`
- `artifacts/generated-assets/clover-go/clover-go-clean.jpg`
- `artifacts/generated-assets/clover-go/clover-go-clean-full.jpg`
- `artifacts/generated-assets/clover-go/clover-go-clean-wide.jpg`

## Known Risks / Open Questions
- Some first-pass industry and lifestyle imagery from the current site is still low resolution and may need a second asset pass.
- Official Clover imagery was recoverable for Flex, Mini, and Station, but the cleanest usable Clover Go source available was a small icon plus an annotated diagram. Generated Clover Go tests are saved in `artifacts/generated-assets/clover-go/`, but the current shipped site still uses the official Clover Go icon because it frames better than the generated attempts.
- The original site copy is long and uneven; page structure must preserve content while avoiding another bloated brochure experience.
- Form submissions currently only need to be real and testable inside Render; downstream CRM/email routing is still unresolved.

## Hero Re-Concept Brief

### Current Problem
- The homepage hero is visually polished but reads as a collage.
- `assets/images/hero-architecture.jpg` is low resolution and communicates "modern building" more than "merchant payments."
- The floating devices prove product breadth, but the assembled composition does not yet feel like one coherent scene.
- The circular zero-cost badge is effective messaging, but it competes with the hardware instead of feeling integrated.

### Goal
Replace the current architecture-led hero visual with a more payments-native scene that still feels premium, modern, and B2B. The hero should communicate:
- trust and scale
- physical payment hardware
- real commerce context
- modern but not generic fintech aesthetics

### Visual Requirements
- Warm, editorial, premium tone; avoid sterile SaaS illustration.
- Scene should feel native to merchant services: countertop payments, modern retail/hospitality workspace, or high-end business checkout moment.
- Composition must support the existing left-copy / right-visual homepage layout.
- Hardware should remain visible and legible at desktop and mobile breakpoints.
- Image should work inside the current rounded hero container or justify simplifying that container.

### Execution Plan
1. Generate a concept image with a strong commerce-native composition.
2. Produce a production-ready hero asset in the workspace.
3. Decide whether the stage should keep multiple floating product cutouts or move to a more unified single-scene visual.
4. Implement the strongest option without rewriting the homepage copy.

## Workstreams

### 1. Information Architecture
- [x] Finalize top-level page structure
- [x] Remove homepage dependence on scroll-based navigation
- [x] Ensure all primary nav items lead to real pages

### 2. Design Fidelity
- [x] Bring homepage composition materially closer to the concept
- [x] Ensure hero uses real imagery and premium typography
- [ ] Standardize cards, spacing, surfaces, and responsive behavior

### 3. Content Fidelity
- [x] Reconcile copy against original screenshots/site content
- [x] Minimize newly invented marketing copy
- [x] Make sure key original sections still exist somewhere in the new structure

### 4. Assets
- [x] Download first-pass real imagery for industries and equipment
- [x] Audit image quality and replace weak assets where necessary
- [x] Ensure alt text and captions are accurate

### 5. Contact Flow
- [x] Add backend submission endpoint in `server.js`
- [x] Wire frontend forms to the real endpoint
- [x] Verify successful submission path locally
- [ ] Decide whether to keep log-file persistence or switch to email/webhook later

### 6. Verification / Deployment
- [x] Run a local smoke test across every page
- [ ] Review mobile layout
- [ ] Deploy updated build to Render
- [ ] Confirm Render is serving the new multi-page structure

## Progress Log

### 2026-04-23
- Completed audit of the first deployed pass and identified the main fidelity, architecture, and asset gaps.
- Downloaded real industry and equipment imagery from the current live site into `assets/images/`.
- Began a second-pass multi-page rebuild with new page files and shared modules.
- Added this tracker to anchor the remaining implementation and deployment work.
- Removed implementation-facing copy from the page intros and contact states so the user-facing language stays on the business, not the rebuild.
- Verified the contact form now posts to `POST /api/contact` and logs a real submission on the local Node server.
- Verified `200` responses locally for `/`, `/about`, `/solutions`, `/industries`, `/equipment`, `/partners`, `/gateway`, and `/contact`.
- Replaced the weak/mislabeled Clover images with official Clover assets for Flex, Mini, and Station.
- Replaced the incorrect Talech placeholder image and low-resolution Talech imagery with official Elavon Talech Register renders.
- Replaced the low-resolution Poynt imagery with official Poynt hardware visuals.
- Tested reference-backed Gemini generations for Clover Go and kept those outputs in `artifacts/generated-assets/clover-go/` for future iteration, but shipped the official Clover Go icon because it framed more cleanly in the current card system.
- Updated the homepage hero and equipment data layer to use the refreshed asset set.
- Added a dedicated hero brief to this tracker to stop the homepage visual from drifting into another collage treatment.
- Generated a new commerce-native hero scene in `assets/generated-hero/hero-payments-scene.jpg`.
- Simplified the homepage hero stage so the generated scene now carries the visual composition instead of sitting under floating device cutouts.

## Definition Of Done For This Pass
- The deployed site visually tracks much closer to the generated concept.
- Navigation is page-based rather than section-anchor based.
- Real equipment and industry images are in place.
- Contact form submits to a real backend handler and returns a real result.
- The tracker is updated with what shipped, what did not, and what still needs iteration.
