# Remilink Website Rebuild — PRD

## 1. Objective

Rebuild remilink.com as a multi-page static site that clearly communicates what Remilink does, who it helps, and what outcomes it delivers — within the first screen. The site must be modern and visually restrained, discoverable by both web search and AI-oriented search, and structured so every page has a single clear purpose.

## 2. Success Metrics

- First-screen comprehension: a cold visitor can describe what Remilink does after 5 seconds
- Contact form submissions increase (baseline: current rate, target: 2x)
- Google indexes all core pages (currently: 1 page + 4 blog posts)
- Site loads in <2s on 3G (currently achievable — maintain it)
- Lighthouse accessibility score >95

## 3. Audience

### Primary: Mid-sized company decision-makers (VP/C-level)
- Evaluating AI implementation partners
- Skeptical of vague "AI transformation" promises
- Want to see specific outcomes and practical approach
- Industries: Manufacturing, E-commerce, EdTech

### Secondary: Technical evaluators
- CTOs, engineering leads doing due diligence
- Want to see technical depth and methodology
- Blog posts and case study details serve this audience

## 4. Positioning

**One-sentence position:** Remilink designs and delivers production-grade AI systems for mid-sized companies in manufacturing, e-commerce, and education — from strategy through launch.

### Messaging hierarchy (in order of prominence)
1. What we do: AI implementation — strategy, engineering, delivery
2. Who we serve: Mid-sized companies in manufacturing, e-commerce, EdTech
3. How we're different: Production-grade rigor, 90-day delivery rhythm, responsible AI built in
4. Proof: Specific anonymized outcome metrics
5. Next step: Book a discovery call

## 5. Site Architecture

```
/                               Home
/services/                      Services overview
/case-studies/                   Case studies hub
/industries/                    Industries we serve
/about/                         About Remilink
/blog/                          Blog index
/blog/ai-readiness-executive-clarity/
/blog/architecting-responsible-ai-operations/
/blog/delivering-measurable-value-in-90-days/
/blog/building-reliable-llm-agent-workflows/
/contact/                       Contact / book a call
/404.html                       Error page
/sitemap.xml                    Auto-generated
/robots.txt                     Crawler policy
/llms.txt                       AI discoverability aid
```

Total: 6 core pages + 4 blog posts + 3 technical files

## 6. Page Specifications

### 6.1 Home — `/`

**Purpose:** Position Remilink and route visitors to the right next step.

**Sections (6 total, strict one-job-per-section):**

#### 1. Hero (Pattern A)
- Particle canvas behind all content
- REMILINK wordmark centered above headline (larger than current, brand gradient)
- Headline: Specific, not poetic. Must contain "AI" and signal the audience.
  - Draft: "We build AI systems that work in production — for mid-sized companies that can't afford experiments."
- Support line: One sentence naming manufacturing, e-commerce, EdTech.
- Primary CTA: "Book a Discovery Call" (links to /contact/)
- Secondary CTA: "See Our Work" (links to /case-studies/, ghost/outline style)
- Generous vertical padding — hero should feel spacious, not cramped
- NO metric cards in hero. Proof lives in its own strip below.

#### 2. Proof strip (Pattern C)
- Light background tint (subtle warm gray or faint orange wash)
- 3 metrics in a horizontal row, typography-only (no card borders):
  - "68% faster underwriting decisions"
  - "30% improvement in patient throughput"
  - "98% defect detection accuracy"
- Each with one-line context below the number. No company names (NDA).
- Compact section — this is a visual pause between hero and content, not a full section.

#### 3. Services overview (Pattern D — minimal card row)
- Section heading left-aligned: "What we deliver"
- 3 cards in a row (NOT 4-5, keep it scannable):
  1. Strategy & Roadmapping
  2. AI Engineering & Platforms
  3. Operations & Enablement
- Each card: title + 2-line description + arrow link to /services/
- Below cards: one line "See all services →" linking to /services/
- These 3 are consolidated groupings. The full 5-service breakdown lives on /services/.

#### 4. About / trust strip (Pattern B — text/visual split)
- Left side: "Who we are" heading + 2-3 sentences about Remilink's approach (90-day delivery, production rigor, embedded governance). Link to /about/.
- Right side: Team photo (outdoor event). Natural, human, not corporate stock.
- This section is compact — not a full about page, just enough to show there are real people here.

#### 5. Blog highlights (Pattern D — minimal card row)
- 2 most recent posts as cards (title + date + one-line excerpt + link)
- Right-aligned "All insights →" link to /blog/

#### 6. Final CTA (Pattern E — full-width CTA block)
- Light gradient background (warm, subtle)
- Centered: "Ready to build something real?"
- Subtext: "Tell us about your challenge. We'll respond within 24 hours with relevant experience and a suggested first step."
- CTA button: "Book a Discovery Call"
- Links to /contact/

### 6.2 Services — `/services/`

**Purpose:** Show the full scope of what Remilink delivers, with enough depth to be useful.

**Content:**
- Intro paragraph: what "AI implementation" means at Remilink
- 5 service blocks, each containing:
  - Title
  - 2-3 paragraph description of what this service involves
  - What you get (deliverables, not vague promises)
  - Relevant case study metric as proof
- Bottom CTA: link to /contact/

**Services to cover:**
1. AI Strategy & Roadmapping — maturity assessments, executive alignment, ROI modeling
2. AI Product & Platform Engineering — custom AI products, data pipelines, integrations
3. LLM Platforms & Agentic Workflows — RAG, multi-agent orchestration, guardrails
4. Responsible AI & Operations — MLOps, ethical AI, lifecycle monitoring, compliance
5. Enablement & Adoption — training, change management, post-launch optimization

This consolidates the current homepage's Services (4 cards) + LLM section (4 cards) into one coherent page.

### 6.3 Case Studies — `/case-studies/`

**Purpose:** Prove outcomes with specifics.

**Content:**
- 6 case studies (keep all current ones)
- Each expanded from 2-line card to structured block:
  - Industry tag
  - Headline metric
  - Challenge (2-3 sentences)
  - Approach (2-3 sentences)
  - Result (specific numbers)
- All remain anonymized (NDA constraint)
- Bottom CTA

**Credibility note:** Since clients can't be named, the depth of the challenge/approach/result narrative must compensate. Specific technical details (what was built, how it integrates, what stack) build trust even without a company name.

### 6.4 Industries — `/industries/`

**Purpose:** Show domain relevance for target verticals.

**Content:**
- Brief intro: "We go deep in the sectors where AI creates the most leverage."
- 3 industry blocks (trimmed from 8):
  1. **Manufacturing** — predictive maintenance, quality assurance, supply chain
  2. **E-commerce & Retail** — personalization, demand forecasting, service automation
  3. **EdTech** — adaptive learning, curriculum intelligence, student analytics
- Each block: 2-3 paragraphs on specific problems Remilink solves in that vertical
- Link relevant case studies where applicable
- Bottom CTA

**Important:** The current 8 industries dilute focus. Dropping to 3 core verticals makes Remilink look like a specialist, not a generalist. Other industries can be mentioned as "We also serve..." if needed but should not get equal billing.

### 6.5 About — `/about/`

**Purpose:** Build human trust. Answer "who are these people?"

**Content:**
- Founder story (2-3 paragraphs)
- Founder photo
- Team photo (outdoor event)
- "Our approach" section — what makes Remilink's delivery different:
  - 90-day delivery rhythm
  - Production-grade from day one
  - Embedded governance
  - Measurable outcomes, not slide decks
- Values (brief, not generic platitudes)
- Bottom CTA

### 6.6 Blog Index — `/blog/`

**Purpose:** List all published articles.

**Content:**
- Simple chronological list of posts
- Each entry: title, date, reading time, first-line excerpt
- Link to individual post
- This page is lightweight — the posts themselves carry the weight

### 6.7 Blog Posts — `/blog/[slug]/`

**Purpose:** Demonstrate expertise and attract search traffic.

**Existing posts (keep all 4):**
- AI readiness & executive clarity
- Responsible AI operations
- 90-day delivery framework
- LLM agent workflows

**Changes needed:**
- Migrate from raw HTML to markdown (Astro content collections)
- Add proper Open Graph / Twitter Card metadata
- Add "related posts" links at bottom
- Ensure each post has a clear CTA linking to /contact/

### 6.8 Contact — `/contact/`

**Purpose:** Convert interest into conversation.

**Content:**
- Headline: "Let's talk about your AI challenge"
- Subtext: What to expect — "We'll review your message and respond within one business day with relevant experience and a suggested first step."
- Contact form (keep existing formsubmit.co integration):
  - Name (required)
  - Work email (required)
  - Organization
  - What are you looking to solve? (textarea, replaces "Project goals")
- No calendar embed (keep it simple)
- Optional: email alternative for people who prefer not to use forms

## 7. Design / UX Principles

> **Full design specification:** see [DESIGN_BRIEF.md](DESIGN_BRIEF.md) for the complete visual direction, element-by-element mapping, and reference screenshots. This section is a summary.

### Design reference: antigravity.google

The site's visual direction follows the aesthetic established by antigravity.google — a product marketing site for an AI developer tool. Key characteristics to adopt:

- **Flat, minimal header** — logo left, flat nav links center, single dark CTA button right. No blurred glass, no borders. Clean and quiet.
- **Hero with particle accent** — sparse, gently drifting dots over a white background. Particles are decorative texture, not the content. Headline and CTAs remain fully readable.
- **Massive whitespace** — sections are separated by generous vertical space. Content does not feel packed. Every element has room to breathe.
- **Text-left / visual-right sections** — feature sections use a split layout: heading + description on the left, supporting visual (metric card, diagram, screenshot, or photo) on the right. NOT card grids.
- **Monochrome + one accent** — body is black text on white. Color appears only in the particle effect, brand gradient, CTAs, and subtle section background tints. No competing color regions.
- **Clean dropdowns** — if nav items expand, they show minimal text options, not mega-menus.

### Keep from current site
- Satoshi font family
- Orange-to-black gradient brand mark (REMILINK wordmark)
- Pill-shaped CTAs with orange fill
- Dark footer

### Change from current site
- **Drop the card grid layout.** Current site packs 4-8 cards per section. Replace with text/visual split sections and linear content blocks. Use cards sparingly (blog teasers, services overview) at max 3 per row.
- **Drop the blurred glass header.** Replace with a flat, clean header matching the reference — white background, no border, no blur. Simple and confident.
- **Massively increase whitespace.** Current section padding is `clamp(4rem, 8vw, 6rem)`. Increase to `clamp(6rem, 12vw, 10rem)` between major sections. Let the site breathe.
- **Reduce visual density per section.** Each section shows one idea with generous space, not a grid of items competing for attention.
- **Stronger type hierarchy.** Biggest text = most specific message. Current pattern is inverted (vague headline is largest, specific copy is smaller).
- **Consistent CTA language.** Use "Book a Discovery Call" as the primary CTA everywhere. One phrase, every page.

### Hero particle effect spec
- Canvas element positioned behind hero content (z-index below text)
- 60-100 small dots, sparse distribution across the hero area
- Colors: muted grays (#d0d5dd, #98a2b3) with occasional Remilink orange (#ff7a00) dots (~10-15% of total)
- Behavior: gentle ambient drift with subtle cursor influence (dots shift slowly toward/away from cursor via lerp, not physics sim)
- Speed: slow, calm — 0.3-0.5px per frame base drift
- Size: 2-5px diameter, varied
- Opacity: 0.3-0.6 range, varied per dot
- Extends into the first content section below hero with a fade-out gradient
- **Mobile:** disable cursor tracking, keep gentle ambient drift only. Reduce dot count to 30-40 for performance.
- **Reduced motion:** respect `prefers-reduced-motion` — show static dots with no animation

### Section layout patterns

**Pattern A — Hero (homepage only)**
Full-width white background. Centered REMILINK wordmark above headline. Particle canvas behind. Headline + support text + CTAs centered or left-aligned. No sidebar visual.

**Pattern B — Text / Visual split**
Two-column layout: heading + 2-3 paragraphs on the left (max 50% width), supporting visual on the right. Used for: services detail, case study highlights, about/founder section. On mobile, stacks vertically (text first, visual below).

**Pattern C — Proof strip**
Full-width, light background tint. 3 metrics in a horizontal row with large numbers and one-line labels. Compact, no cards — just typography. On mobile, stacks vertically.

**Pattern D — Minimal card row**
Max 3 cards per row for blog teasers or services overview on homepage. Cards are simple: title + 2-line description + link. Soft shadow, generous internal padding. NOT the current dense 4-column grid.

**Pattern E — Full-width CTA block**
Centered text block with headline, one support sentence, and one CTA button. Light gradient or tinted background. Used as the final section on every page.

### Responsive rules
- Mobile-first approach
- Split sections (Pattern B) stack vertically below 768px
- Card rows (Pattern D) go single-column below 640px
- Nav collapses to hamburger below 768px
- Hero particle effect: cursor tracking disabled on touch devices, reduced dot count
- Minimum touch target: 44x44px

## 8. SEO & Discoverability Requirements

### Per-page metadata
Every page must have:
- Unique `<title>` (format: "Page Name | REMILINK")
- Unique `<meta name="description">` (150-160 chars)
- Canonical URL
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags

### Structured data
- Organization schema (JSON-LD) on homepage
- Article schema on blog posts
- BreadcrumbList schema on all inner pages

### Technical SEO
- sitemap.xml (auto-generated by Astro sitemap integration)
- robots.txt allowing all crawlers + sitemap reference
- Clean URL structure (no .html extensions)
- Proper internal linking between related pages
- Image alt text on all images

### AI / agentic discoverability
- robots.txt: allow GPTBot, OAI-SearchBot, ClaudeBot, Anthropic crawlers
- /llms.txt: concise description of Remilink, key pages, and what the company does
- Content written in clear, factual language that AI systems can extract and summarize

## 9. Technical Architecture

### Stack
- **Astro** — static site generator (islands architecture, content collections, component-based)
- **Astro components (.astro)** — layouts, pages, and reusable UI sections
- **Astro content collections** — blog posts and case studies as structured markdown with schema validation
- **Existing CSS** — evolved, not rewritten. Global `styles.css` with CSS custom properties. No CSS Modules, no Tailwind.
- **Vanilla JS** — nav, smooth scroll, form handling (same as current, minimal)
- **Canvas JS island** — hero particle effect, loaded as an Astro island (`client:load`)
- **GitHub Actions** — build + deploy
- **GitHub Pages** — hosting
- **Custom domain** — www.remilink.com (CNAME already configured)

### Repo structure (proposed)
```
/
  src/
    components/          # Reusable Astro components
      Header.astro
      Footer.astro
      Nav.astro
      HeadMeta.astro     # SEO meta, OG tags, JSON-LD
      ProofStrip.astro
      ServiceCard.astro
      CaseStudyBlock.astro
      CTABlock.astro
      BlogCard.astro
      HeroParticles.astro  # Canvas island (client:load)
    layouts/
      Base.astro         # HTML shell, head, header, footer
      Page.astro         # Standard page (extends Base)
      Article.astro      # Blog post layout (extends Base)
    pages/
      index.astro        # Home
      services.astro     # Services
      case-studies.astro # Case studies
      industries.astro   # Industries
      about.astro        # About
      contact.astro      # Contact
      blog/
        index.astro      # Blog index (auto-lists from content collection)
        [...slug].astro  # Dynamic blog post pages
      404.astro          # Error page
    content/
      blog/              # Blog posts as markdown with frontmatter
        ai-readiness-executive-clarity.md
        architecting-responsible-ai-operations.md
        delivering-measurable-value-in-90-days.md
        building-reliable-llm-agent-workflows.md
      config.ts          # Content collection schemas
    styles/
      global.css         # Evolved from current styles.css
    scripts/
      nav.js             # Nav toggle, smooth scroll
      contact-form.js    # Form submission handler
      particles.js       # Hero particle canvas logic
    images/              # Founder photo, team photo, favicon assets
  public/
    robots.txt
    llms.txt
    CNAME
    favicon.ico
    favicon_io/          # Favicon variants
  astro.config.mjs       # Astro config (static output, sitemap integration)
  .github/
    workflows/
      deploy.yml         # GitHub Pages deployment
```

### Why Astro over 11ty
- Islands architecture: hero particle effect loads as a targeted JS island, rest of site ships zero JS by default
- Content collections: blog posts get schema validation and type-safe querying
- Component-based: `.astro` components are more natural for the text/visual split layout pattern than Nunjucks templates
- Same static output: Astro builds to plain HTML/CSS/JS, identical deployment story

### Migration path
1. Initialize Astro project with static output mode
2. Create Base layout + Header/Footer/Nav components (matching current visual style)
3. Port `styles.css` to `global.css` (add new section patterns, increase whitespace)
4. Convert blog posts from HTML to markdown with frontmatter
5. Define content collection schema for blog posts
6. Build homepage with new section layout (hero particles, proof strip, services, trust, blog, CTA)
7. Build inner pages (services, case-studies, industries, about, contact, blog index)
8. Add HeadMeta component (per-page SEO, OG tags, JSON-LD)
9. Set up GitHub Actions deploy to GitHub Pages
10. QA: accessibility, mobile, performance, form, links
11. Launch

## 10. Content Requirements

### Copy that must be written
- [ ] Homepage hero headline + support text
- [ ] Homepage proof strip copy
- [ ] Homepage services overview card descriptions (5)
- [ ] Homepage trust/about strip
- [ ] Homepage final CTA block
- [ ] Services page intro + 5 service block descriptions
- [ ] Case studies page — expand 6 cases to challenge/approach/result format
- [ ] Industries page intro + 3 industry descriptions
- [ ] About page — founder story, approach description
- [ ] Contact page headline + expectation-setting copy
- [ ] llms.txt content

### Assets needed
- [ ] Founder photo
- [ ] Team photo (outdoor event)
- [ ] Optimized favicon (current one works, verify)

### Copy that can be reused from current site
- Blog post content (all 4 posts, convert to markdown)
- Service card bullet points (as source material for expanded descriptions)
- Case study metrics and summaries (as base for expansion)

## 11. Accessibility Requirements

- WCAG 2.1 AA compliance
- All images have meaningful alt text
- Form inputs have visible labels (current floating label pattern is fine)
- Color contrast meets AA minimums (current orange on white needs verification)
- Skip-to-content link
- Keyboard navigable (current nav toggle needs keyboard testing)
- Focus states visible on all interactive elements
- Heading hierarchy correct on every page (single H1, logical H2/H3 order)

## 12. Acceptance Criteria

### Per-page
- [ ] Page has a unique, descriptive `<title>` and `<meta description>`
- [ ] Page has one H1 that matches its purpose
- [ ] Page answers its core question within the first screen
- [ ] Page has a clear CTA
- [ ] Page renders correctly on mobile (375px), tablet (768px), desktop (1280px)
- [ ] Page passes axe accessibility check with 0 critical/serious issues
- [ ] Page loads in <2s on throttled 3G

### Site-wide
- [ ] All internal links work (no broken anchors)
- [ ] sitemap.xml lists all public pages
- [ ] robots.txt is present and correct
- [ ] llms.txt is present
- [ ] Contact form submits successfully
- [ ] 404 page displays correctly with proper styling
- [ ] Site renders without JavaScript (content is accessible)
- [ ] Google Search Console shows all pages indexed (post-launch)

## 13. Out of Scope (for this phase)

- Individual case study pages (cards with expanded detail are sufficient for now)
- Search functionality
- Newsletter / email capture
- Dark mode
- Animations beyond the hero particle effect (no scroll animations, no section transitions)
- CMS integration
- Analytics dashboard (add tracking code, but dashboard setup is separate)
- A/B testing
- Multi-language support
