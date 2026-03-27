> Part of [RemiLink Website](../index.md). Updated 27.03.2026.

# Website Build Backlog

## Decisions

- All 5 service labels kept (AI Strategy Session → Discovery & Blueprint → Concept Validation → Production-Ready Build → Scale & Optimize)
- Blog deferred to v2 (not part of first release)
- Astro migration happens now (redesign + framework together to avoid double work)
- Current site: plain HTML/CSS/JS, no build system, 1 page + 4 blog posts, formsubmit.co contact form, GitHub Pages with CNAME www.remilink.com

---

## v1: Launch

The website becomes the primary salesman. Content and Astro build run in parallel.

### Content (can start immediately)

| # | Task | Why it matters |
|---|------|---------------|
| 1 | **Write 3 case studies** in challenge/approach/result format | The site has no proof. This is the #1 gap. Without case studies, nothing else matters. |
| 2 | **Write homepage hero + messaging** | First impression. Must pass the 5-second test: "I understand what they do and it's relevant to me." |
| 3 | **Write services page content** | Methodology journey with all 5 service labels. Pricing displayed as entry costs + monthly rates (no totals, no durations next to prices). |
| 4 | **Write about page** | Founder-first. Bio, photo, team-as-roles. The "why trust these people" page. |
| 5 | **Write industry descriptions** | E-commerce (lead), security-sensitive orgs, EdTech (cautious). Three blocks, not eight. |
| 6 | **Write contact page copy** | CTA: "Discuss Your AI Project." Subtext. Founder photo next to form. |

### Astro Build (parallel with content)

| # | Task | Why it matters |
|---|------|---------------|
| 7 | **Set up Astro project** | Static output, TypeScript, GitHub Pages deploy via Actions. CNAME for www.remilink.com. |
| 8 | **Base layout + shared components** | Header, Footer, Nav, HeadMeta (per-page title/description/OG/canonical/JSON-LD). Flat header per [design brief](design-brief.md). |
| 9 | **Design system (CSS)** | antigravity.google feel: monochrome base, orange accent (#ff7a00) only on CTAs/particles/hover, massive whitespace, Satoshi font, one idea per screen. Migrate and evolve current styles.css. |
| 10 | **Hero particle effect** | Canvas island: 60-100 dots, gentle drift, cursor influence, orange accent dots. Mobile: static fallback or reduced particles. |
| 11 | **Build pages** | Home (hero + proof + services overview + trust + CTA), Services, Case Studies, Industries, About, Contact. No blog in v1. |
| 12 | **Contact form** | Form → info@remilink.com via formsubmit.co. Simple textarea. Founder photo next to form. Success state. |
| 13 | **SEO basics** | sitemap.xml (Astro integration), robots.txt, JSON-LD (Organization on home), OG tags, canonical URLs. |

### Launch

| # | Task | Why it matters |
|---|------|---------------|
| 14 | **Content review** | Read every page aloud. Kill anything unsourced. Does removing this hurt understanding? |
| 15 | **QA** | Mobile check (375/768/1280px), accessibility (axe), Lighthouse >90 perf, form E2E test. |
| 16 | **Launch** | Merge, verify live, verify CNAME + custom domain works. |

### Execution Order

```
Content writing (1-6)  ←── parallel ──→  Astro setup (7-10)
         ↓                                      ↓
         └──────── Build pages (11-13) ─────────┘
                          ↓
                  Review + QA (14-15)
                          ↓
                     Launch (16)
```

---

## v2: After Launch

| # | Task | Why |
|---|------|-----|
| 17 | **Install analytics** | Plausible or PostHog. Can't improve what you can't measure. |
| 18 | **Blog setup** | Astro content collection for markdown posts. Blog index page. Add Blog to nav. |
| 19 | **Migrate 4 existing blog posts** | HTML → markdown with frontmatter. Review/update content for tone and accuracy. |
| 20 | **Write first new article** | "When NOT to use an LLM" — trust-building, contrarian, gets shared. |
| 21 | **Add llms.txt** | AI discoverability. Low effort, nice signal. |
| 22 | **404 page** | Clean, consistent, link home. |
