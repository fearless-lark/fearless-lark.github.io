# Remilink Website Rebuild — Foundation Document v0.1

## 1. Purpose

The purpose of the new Remilink website is to make visitors understand, within one or two looks:

- what Remilink does
- who Remilink helps
- what business outcomes it delivers
- why it is credible
- what the next step is

The site must work as a **clear decision layer**, not as an encyclopedia. Its job is to reduce confusion, build trust, and convert qualified visitors into discovery calls or contact inquiries.

---

## 2. North Star

**Clear positioning + premium restraint + technical credibility + strong discoverability + rigorous consistency.**

The site should feel:
- modern
- technically credible
- premium
- calm
- focused
- easy to understand
- human behind the competence

The site should **not** feel:
- noisy
- trendy for the sake of trendiness
- overloaded with AI jargon
- visually overwhelming
- vague about outcomes
- cluttered with redundant sections
- generic like a mass-market dev agency

---

## 3. Product Definition

This is a **static-first marketing website** for Remilink, built for:

- positioning
- credibility
- organic discoverability
- AI/web search discoverability
- lead generation

It is **not** a web app, dashboard, CMS-heavy platform, or complex interactive product.

GitHub Pages is a static site hosting service that serves HTML, CSS, and JavaScript from a repository and can publish via a build process, which fits this approach well.

---

## 4. Technology Decision

### Chosen stack

- **Astro**
- **TypeScript**
- **scoped CSS or CSS Modules**
- **Astro content collections / Markdown / MDX**
- **GitHub Actions**
- **GitHub Pages**
- **custom domain** (www.remilink.com)
- **Lighthouse + axe**
- **Playwright only if it materially helps**

### Why this stack

Astro's islands architecture is a strong fit because it allows mostly static HTML with small, isolated interactive regions (such as the hero particle effect), which suits a restrained marketing site better than a client-heavy app. Astro content collections provide structured, type-safe content organization for repeatable content like case studies and blog posts. Google's JavaScript SEO guidance favors static rendering, server-side rendering, or hydration patterns over relying heavily on client-side rendering alone.

### Explicit non-decisions

We are **not** using:
- Next.js as the default
- a full React app as the foundation
- Storybook as a requirement
- Tailwind as a requirement
- shadcn as the foundation
- heavy process/tooling for its own sake

---

## 5. Core Website Principles

### Principle 1 — Homepage is a decision layer

The homepage must answer quickly:
- What does Remilink do?
- Who is it for?
- What outcomes does it deliver?
- Why should I trust it?
- What should I do next?

### Principle 2 — One section = one job

Each section must have one purpose only:
- positioning
- proof
- service navigation
- trust-building
- objection handling
- conversion

If a section tries to do multiple jobs, it must be split or simplified.

### Principle 3 — Fewer, stronger pages

We do **not** aim for many pages for the sake of page count.
We aim for **only pages that deserve to exist**.

Initial target:
- approximately **8–12 strong pages**
- each page must have clear purpose and enough depth

### Principle 4 — Clarity beats completeness

Not every capability, industry vertical, or technical methodology belongs on the homepage.

If content does not improve:
- understanding
- trust
- or conversion

it should be removed, shortened, or moved deeper.

### Principle 5 — Premium restraint

Remilink should signal competence through calm and whitespace, not through density and visual force. Use hierarchy, precision, and room to breathe. Avoid visual aggression, clutter, and excessive motion.

---

## 6. Positioning Direction

### Two colors only

The entire site serves exactly two messages:

**Color 1: Risk reduction** — "We prove it before you scale." Your investment is safe with us. We validate before you commit serious budget.

**Color 2: Honest expertise** — "We know what actually works." We've seen the full spectrum of AI approaches. We pick the right one, not the trendy one. We'll tell you the truth about what will work for your problem.

Every section, every page, every sentence should reinforce one of these two messages. Nothing else.

### Working hero

**Headline:** "Validate fast, scale smart."
**Support:** "We prove AI works for your problem before you commit serious budget."
**CTA:** "Book a Discovery Call"

### What Remilink actually is

Remilink is a full-lifecycle AI partner. The same team that diagnoses the business problem also designs the solution, validates it, and builds it to production. No handoff between consultants and engineers. No lost context.

The real differentiator is not any single technology — it's the combination of:
- **Diagnostic ability** — hearing a business problem and figuring out if and how AI solves it
- **Full-spectrum AI knowledge** — classical ML, CV, NLP, audio/DSP, LLMs, agents, RAG — choosing the right approach, not defaulting to the latest trend
- **Validation-first methodology** — focused PoC (2-4 months, AI-only, no integrations) that proves the approach works before the client commits to scale
- **End-to-end delivery** — PoC to MVP to production, with constant communication and incremental validation

### Positioning against competitors

Remilink should be clearly distinguished from:
- **"AI transformation" consultancies** that sell slides and roadmaps but don't build systems
- **LLM-only dev shops** that default to LLMs for everything because it's all they know
- **Offshore dev shops** that build to spec without strategic thinking or honest scoping
- **Big-four consulting firms** that are slow, expensive, and produce reports
- **Solo freelancers** who lack the depth for production-grade delivery

### Audience

**Primary: Mid-sized company decision-makers (VP/C-level)**
- Evaluating AI implementation partners
- Skeptical of vague "AI transformation" promises — likely burned before
- Want to see specific outcomes and practical approach
- Want low-risk entry (not a 12-month commitment upfront)
- Industries: E-commerce, EdTech (strongest proof), Manufacturing, Healthcare (secondary)

**Secondary: Technical evaluators**
- CTOs, engineering leads doing due diligence
- Want to see technical depth, methodology, and honest tool selection
- Blog posts, case study details, and the services page serve this audience

---

## 7. Content Strategy

### Content filter

Every block of content must justify itself by helping with at least one of:
- understanding
- trust
- conversion

Otherwise it should be cut or moved.

### Homepage content policy

The homepage should include only:
- a clear headline
- a concise supporting value proposition
- one primary CTA
- proof metrics (compact strip, not a full section)
- a compact services overview
- a trust/about strip
- blog highlights
- a final CTA

The homepage should **not** contain full-detail explanations of every service, industry, methodology, or case study.

### Deep content belongs on secondary pages

Use dedicated pages for:
- full service descriptions
- expanded case studies
- industry-specific positioning
- company story and approach
- blog / insights
- contact / discovery

---

## 8. Messaging Rules

### Above the fold, the site must communicate:
- risk reduction (we validate before you commit budget)
- honest expertise (we know what works and we'll tell you the truth)
- what proof exists (specific anonymized outcome metrics)
- what action to take next (book a discovery call)

### Messaging hierarchy (in order of prominence)
1. Risk reduction: We prove AI works for your problem before you commit serious budget
2. Honest expertise: We design the right AI solution from the full spectrum of approaches
3. Methodology: Discovery → PoC → MVP → Production (validation at every stage)
4. Proof: Specific anonymized outcome metrics from real engagements
5. Next step: Book a discovery call

### Tone requirements

The tone should be:
- clear
- confident
- precise
- technically honest
- human where it matters
- direct without being aggressive

The tone should not be:
- buzzword-heavy ("synergize AI-driven transformation")
- vague ("unique approach," "innovative solutions")
- overselling ("the best," "world-class," "revolutionary")
- cold or impersonal
- too casual or startup-cute

### Copy rule

Every page should answer:
- what this page is about
- who it is for
- why it matters
- what to do next

---

## 9. Initial Information Architecture

Proposed initial structure:

- `/` — Home
- `/services/` — Services / capabilities overview
- `/case-studies/` — Case studies hub
- `/industries/` — Industries we serve
- `/about/` — Company, founder, approach, trust
- `/blog/` — Blog / insights index
- `/blog/[slug]` — Individual blog posts
- `/contact/` — Contact / discovery call

Optional later:
- `/services/[slug]` — Individual service detail pages
- `/case-studies/[slug]` — Individual case study pages
- Dedicated landing pages for specific offers or campaigns

Only add these if content depth justifies them.

---

## 10. SEO and Discoverability Rules

The site must be easy to understand for both human visitors and crawlers.

### Baseline requirements

- static HTML output where possible
- unique page titles
- clear H1 per page
- logical heading hierarchy
- strong internal linking
- sitemap.xml
- robots.txt
- canonical URLs
- structured data where useful (Organization, Article, BreadcrumbList)
- meaningful text content on all indexable pages

Google notes that JavaScript-heavy sites can run into discoverability issues and recommends rendering approaches that make content more accessible to search systems.

### AI/search discoverability

Crawler policy for AI-oriented search should be a deliberate decision. Controls for GPTBot, OAI-SearchBot, ClaudeBot, and Anthropic crawlers should be configured through `robots.txt`. An `/llms.txt` file should provide a concise, machine-readable description of what Remilink does.

### Search intent focus

The content strategy should support discoverability for queries such as:
- AI implementation partner
- AI consulting for e-commerce / EdTech / manufacturing
- AI proof of concept development
- validate AI before scaling
- AI readiness assessment
- when not to use LLMs
- AI solution architecture
- production-grade AI systems
- responsible AI operations

---

## 11. UX and Visual Rules

### Design reference

The visual direction follows antigravity.google — quiet confidence, massive whitespace, sparse particle texture, monochrome with orange accents, one idea per screen. Full visual specification is in the project's DESIGN_BRIEF.md.

### Desired qualities

- calm
- confident
- technical but human
- visually clean
- easy to scan
- strong hierarchy without excessive visual force
- premium without being cold

### Visual direction

The site should visually balance:
- technical credibility (this is an engineering firm)
- approachability (clients are non-technical decision-makers first)
- modern digital polish (Remilink builds AI — the site should feel contemporary)

That means:
- strong hierarchy
- generous whitespace (significantly more than current site)
- monochrome base with orange as the single accent color
- consistent section patterns (text/visual split, proof strip, minimal cards)
- restrained use of decorative elements
- real photography (founder, team) over stock imagery

### Motion policy

Motion is allowed only when it improves:
- focus
- delight without distraction
- perceived polish

One tasteful interactive element is acceptable (the hero particle effect). The site must not become an effects showcase. Astro's islands model supports isolated interactivity while keeping the rest of the site static.

### Mobile-first rule

Every page must remain clear and premium on mobile.
No section should depend on desktop-only visual complexity to make sense.

---

## 12. Trust Strategy

The website must build trust through specific, verifiable proof.

### Preferred trust elements
- anonymized case study metrics with challenge/approach/result depth
- specific outcome numbers (68% faster, 30% improvement, 98% accuracy)
- case studies that show the decision (what was recommended and why), not just the result
- founder story and credentials
- real team photography (not stock)
- visible delivery methodology (Discovery → PoC → MVP → Production) — the methodology IS the trust signal
- transparency about approach: "we'll tell you if AI isn't the answer"
- blog content demonstrating judgment (when NOT to use an LLM, how to scope properly)
- clear deliverables per engagement stage (not vague promises)

### Avoid vague trust claims such as:
- "world-class team"
- "innovative solutions"
- "cutting-edge technology"
- "unique methodology"

unless they are supported with specifics.

### Trust compensation for NDA constraints

Since case study clients cannot be named, the depth of each case study narrative must compensate. Specific technical details — what was built, what stack, how it integrates, what the measurable result was — build trust even without company names.

---

## 13. Reusable System Rules

The implementation should be component-based, but lightweight.

### Section layout patterns
- **Pattern A — Hero:** full-width, centered brand + headline + CTAs, particle canvas behind
- **Pattern B — Text/visual split:** heading + description left, supporting visual right
- **Pattern C — Proof strip:** compact metrics row, typography-only
- **Pattern D — Minimal card row:** max 3 cards for services or blog teasers
- **Pattern E — Full-width CTA block:** centered headline + support text + button

### Required reusable components
- header / nav
- footer
- hero (with particle island)
- CTA block
- proof strip
- service card
- case study block
- blog/article card
- page section wrapper
- contact form
- head meta (SEO, OG tags, JSON-LD)

Rule:
- reuse patterns aggressively
- customize content, not structure, unless there is a strong reason

---

## 14. Quality Bar

The site is not done unless it is:

- clear
- accessible (WCAG 2.1 AA)
- fast (<2s on 3G)
- responsive
- crawlable
- internally consistent

### Acceptance standards

- no page exists without a clear purpose
- no page exists without a clear next step
- no section duplicates another section's role
- no decorative effect is allowed to reduce readability
- no important meaning depends on JavaScript only
- no content block survives if it adds noise without value
- contact form works end-to-end

---

## 15. Delivery Rules

### What we optimize for

- clarity of message
- disciplined page architecture
- maintainability
- discoverability
- premium execution

### What we do not optimize for

- framework novelty
- excessive tooling
- unnecessary animation
- inflated page count
- process overhead that slows delivery

### Practical workflow

1. audit current site
2. define keep / cut / move decisions
3. lock sitemap
4. lock messaging hierarchy
5. create implementation-ready PRD
6. build the shared system
7. implement pages
8. polish and validate
9. launch

---

## 16. Out of Scope for v1

Unless clearly justified, v1 should exclude:
- CMS integration
- account systems
- complex calculators or tools
- extensive animation systems beyond hero particles
- multi-language support
- heavy client-side application logic
- broad industry-page expansion before core pages are strong
- individual case study pages (expanded blocks on hub page are sufficient)
- newsletter / email capture
- dark mode
- A/B testing infrastructure

---

## 17. Success Criteria

The rebuild is successful if:

- a first-time visitor understands Remilink within 5 seconds
- the homepage feels lighter, clearer, and more spacious than the current version
- the site communicates specific outcomes, not vague promises
- a VP-level buyer feels confident enough to book a discovery call
- a CTO-level evaluator finds enough technical depth to take Remilink seriously
- the site has stronger topic-level pages without becoming bloated
- the site remains fast and clean on GitHub Pages
- the content is easier for search engines and AI systems to interpret
- the implementation remains simple enough to maintain confidently

---

## 18. Decision Log

### Fixed decisions

- static-first site
- Astro-based implementation
- GitHub Pages deployment
- custom domain (www.remilink.com)
- content clarity first
- no heavy framework overhead
- no Storybook requirement
- no Tailwind requirement
- no shadcn-first approach
- antigravity.google as visual reference
- orange as single accent color
- lead industries: E-commerce, EdTech (strongest proof); secondary: Manufacturing, Healthcare
- formsubmit.co for form handling
- "Book a Discovery Call" as primary CTA

### Open decisions

- exact page count in v1
- whether individual service detail pages belong in v1
- whether individual case study pages belong in v1
- whether Playwright is needed from the start or only later
- final hero headline copy (working version: "Validate fast, scale smart.")
- whether any additional industries get mentioned as secondary

---

## 20. Related Documents

- [Remilink_Strategy.md](Remilink_Strategy.md) — full strategic positioning analysis with all explored options
- [Remilink_FounderBrief.md](Remilink_FounderBrief.md) — questions the founder must answer for the development team

---

## 19. Working Motto

**Say less per page. Mean more per page.**
