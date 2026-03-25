# Remilink Rebuild — Linear Structure

## Team: Remilink

## Project 1: Planning & Content

Purpose: Finalize what the site says and how it's structured before any code is written.

### Tasks

| ID | Title | Priority | Description |
|----|-------|----------|-------------|
| P-01 | Finalize homepage messaging | Urgent | Write hero headline, support text, and CTA copy. Must pass the "5-second comprehension test." |
| P-02 | Write services page copy | High | 5 service blocks: title + 2-3 paragraphs + deliverables. Consolidate current 8 cards into 5 coherent groups. |
| P-03 | Expand case studies | High | Turn 6 card summaries into challenge / approach / result blocks (2-3 sentences each section). |
| P-04 | Write industry descriptions | Medium | 3 industries (Manufacturing, E-commerce, EdTech): 2-3 paragraphs each on specific problems we solve. |
| P-05 | Write about page | Medium | Founder story (2-3 paragraphs), approach section, values. Collect founder photo + team photo. |
| P-06 | Write contact page copy | Medium | Headline, expectation-setting subtext, form label adjustments. |
| P-07 | Collect photo assets | Medium | Founder headshot, team outdoor photo. Optimize for web (<200KB each). |
| P-08 | Write llms.txt | Low | Concise machine-readable description of Remilink for AI discoverability. |
| P-09 | Final content review | High | Review all page copy for clarity, redundancy, and tone consistency. Apply "does removing this hurt understanding?" filter. |
| P-10 | Save design reference screenshots | Medium | Capture antigravity.google screenshots (header, hero, dropdown, feature section) and save to `.plan/reference/`. These are the visual source of truth per DESIGN_BRIEF.md. |

## Project 2: Build & Launch

Purpose: Implement the site, deploy, validate.

### Epic A: Foundation

| ID | Title | Priority | Description |
|----|-------|----------|-------------|
| B-01 | Set up Astro project scaffold | Urgent | Initialize Astro with static output, create repo structure (src/components, layouts, pages, content, styles, scripts). |
| B-02 | Create Base layout + components | Urgent | Build Base.astro layout, Header, Footer, Nav, HeadMeta components. Flat minimal header per design reference. |
| B-03 | Migrate and evolve CSS | High | Port styles.css to global.css. Add new layout patterns (text/visual split, proof strip, increased whitespace). Drop card-grid density. |
| B-04 | Migrate JS to scripts/ | High | Port nav toggle, smooth scroll, form handler. Keep vanilla. |
| B-05 | Set up GitHub Actions deploy | High | Build with Astro, deploy to GitHub Pages. Verify CNAME + custom domain. |
| B-06 | Add HeadMeta component | High | Per-page title, description, OG tags, canonical URLs, JSON-LD. Driven by page frontmatter/props. |
| B-07 | Build hero particle effect | High | Canvas-based particle island (HeroParticles.astro, client:load). 60-100 dots, gentle drift, cursor influence, mobile fallback, prefers-reduced-motion support. |

### Epic B: Pages

| ID | Title | Priority | Description |
|----|-------|----------|-------------|
| B-08 | Build homepage | Urgent | 6 sections using new layout patterns: hero w/ particles (Pattern A), proof strip (C), services overview (D), trust strip (B), blog highlights (D), final CTA (E). |
| B-09 | Build services page | High | Intro + 5 service blocks using text/visual split layout (Pattern B) + bottom CTA. |
| B-10 | Build case studies page | High | 6 expanded case study blocks (challenge/approach/result) using Pattern B + bottom CTA. |
| B-11 | Build industries page | Medium | Intro + 3 industry blocks (Manufacturing, E-commerce, EdTech) using Pattern B + bottom CTA. |
| B-12 | Build about page | Medium | Founder story + photos (Pattern B) + approach section + values + bottom CTA (Pattern E). |
| B-13 | Build blog index | Medium | Chronological post list. Auto-generated from Astro content collection. |
| B-14 | Migrate blog posts to markdown | High | Convert 4 HTML blog posts to markdown with frontmatter. Define content collection schema. Verify rendering. |
| B-15 | Build contact page | Medium | Standalone contact form page. Maintain formsubmit.co integration. Update copy per PRD. |
| B-16 | Build 404 page | Low | Clean 404 with consistent layout, proper styling, link back to home. |

### Epic C: SEO & Discoverability

| ID | Title | Priority | Description |
|----|-------|----------|-------------|
| B-17 | Add sitemap.xml generation | High | Astro sitemap integration. Must list all public pages. |
| B-18 | Create robots.txt | High | Allow all search + AI crawlers. Reference sitemap. |
| B-19 | Add JSON-LD structured data | Medium | Organization schema on homepage, Article schema on blog posts, BreadcrumbList on inner pages. Via HeadMeta component. |
| B-20 | Deploy llms.txt | Low | Place in public/ at site root. |
| B-21 | Verify internal linking | Medium | Every page links to related pages. No orphan pages. No broken links. |

### Epic D: QA & Launch

| ID | Title | Priority | Description |
|----|-------|----------|-------------|
| B-22 | Accessibility check | High | Run axe on every page. Fix critical/serious issues. Verify keyboard nav, focus states, heading hierarchy. Verify particle canvas doesn't trap focus. |
| B-23 | Mobile/responsive check | High | Test all pages at 375px, 768px, 1280px. Verify particle effect performance on mobile. Verify text/visual splits stack correctly. |
| B-24 | Performance check | Medium | Lighthouse on all pages. Target >90 performance, >95 accessibility. Verify particle canvas doesn't degrade scores. |
| B-25 | Contact form test | High | End-to-end form submission test. Verify formsubmit.co receives data. |
| B-26 | Launch | Urgent | Merge to master. Verify live site on remilink.com. Check all pages load. |
| B-27 | Post-launch verification | High | Google Search Console: request indexing. Verify sitemap picked up. Check OG tags render in social previews. |

## Execution Order

```
P-01 through P-09 (content first — can partially overlap with B-01 through B-07)
  │
  ├── B-01 → B-02 → B-03 + B-04 (parallel) → B-05 → B-06
  ├── B-07 (particle effect — can develop in parallel with B-03/B-04)
  │
  ▼
B-08 (homepage first — proves the layout system + particles work together)
  │
  ├── B-09, B-10, B-11, B-12, B-15, B-16 (parallel, any order)
  ├── B-14 (blog migration, can run parallel with pages)
  ├── B-13 (blog index, after B-14)
  │
  ▼
B-17, B-18, B-19, B-20, B-21 (SEO, after pages exist)
  │
  ▼
B-22, B-23, B-24, B-25 (QA, after all pages + SEO)
  │
  ▼
B-26 → B-27 (launch)
```

## Total: 2 projects, 37 tasks

Planning: 10 tasks
Build: 27 tasks (across 4 epics)
