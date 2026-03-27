> Part of [RemiLink Website](../index.md). Updated 26.03.2026.

# Website Specification

> For business/positioning context, see [strategy/](../strategy/). For visual direction, see [design-brief.md](design-brief.md).

---

## 1. Purpose

The new Remilink website exists to help a qualified visitor understand four things quickly:

1. What Remilink actually does
2. Who it is most relevant for
3. Why its approach reduces risk
4. What the next step is

The site is not a capability dump. Its job is to convert skepticism into a conversation.

---

## 2. North Star

The site should feel: trustworthy, calm, intelligent, specific, founder-led, useful, approachable.

The site should NOT feel: overloaded, generic, hype-driven, desperate, visually noisy, like it covers every possible AI service for every possible buyer.

---

## 3. Success Criteria

- A cold visitor can explain Remilink's offer and next step after one screen
- Core pages are indexable and technically clean
- The site feels materially clearer than the current "everything for everyone" version
- Contact flow works reliably and delivers inquiries to `info@remilink.com`
- Analytics present at launch or added immediately after

---

## 4. Audience

- **Primary**: Mid-sized+ companies with complex product catalogs and/or operational complexity. Especially e-commerce teams with search/shopping-assistant opportunities. Buyers: CTOs, PMs, founders, engineering leaders.
- **Secondary**: Security-sensitive organizations evaluating in-house AI deployment.
- **Emerging**: EdTech buyers — restrained framing, thinner proof.

---

## 5. Site Architecture

```
/                    Home
/services/           Services
/case-studies/       Case Studies
/industries/         Industries / operating contexts
/about/              Company / About
/blog/               Blog index
/blog/[slug]/        Blog posts
/contact/            Contact
/404.html            Error page
/sitemap.xml         Generated
/robots.txt          Crawler policy
/llms.txt            AI discoverability aid
```

---

## 6. Messaging Hierarchy

1. **Honest expertise**: We know what is worth building and what is not
2. **Validation before scale**: We prove the concept before heavy engineering
3. **AI-native execution with human ownership**: Speed + data-engineering rigor + accountability
4. **Enterprise-safe flexibility**: Tooling/model choices aligned with client restrictions
5. **Founder-led trust**: Real judgment, real involvement, real follow-up
6. **Team leverage**: Small engagements benefit from wider team expertise
7. **Clear next step**: Submit the form, get a response within 24 hours

---

## 7. Page Requirements

### 7.1 Home

**Purpose**: Explain the offer, reduce risk, show trust, drive one action.

**Sections**:
1. **Hero** — Clear statement of what Remilink does. Founder-led, trust-building tone. Primary CTA opens contact flow. Large particle canvas background (see Design Brief). 80–90vh height.
2. **Proof strip** — Only sourced/supportable proof. If thin, fewer items with more context.
3. **Services overview** — High-level methodology journey. 3 cards max.
4. **Trust / company strip** — Founder and team credibility. Text/visual split.
5. **Blog highlights** — Demonstrate judgment and useful thinking. 2–3 cards.
6. **Final CTA** — Repeat the form-based conversation path.

**Impression sequence**:
- 5s: Visually credible and worth reading
- 10s: Content looks relevant
- 15s: "These might be the right people"

### 7.2 Services

**Purpose**: Describe the commercial journey clearly and honestly.

**Structure**: Journey framing (AI Strategy Session → Discovery & Blueprint → Concept Validation → Production-Ready Build → Scale & Optimize). Each phase as a text/visual split block.

**Per phase**: What happens, what the client gets, who it's for. Mention data-engineering practices, tooling flexibility, and wider team expertise where relevant.

**Pricing section** (separate from methodology flow):
- AI Strategy Session: Free (2h) or ~$5,000 (week)
- Discovery & Blueprint: $5,000–$10,000
- Development phases: From $15,000/month
- **No totals. No durations next to prices.**

**Strategy session callout**: "Not sure where to start? We offer a free 2-hour AI Strategy Session to assess feasibility before any commitment."

**E-commerce** as the clearest example use case. EdTech mentioned cautiously.

### 7.3 Case Studies

**Purpose**: Make judgment and delivery feel real.

**Per case**:
- Business problem (2–3 sentences)
- Chosen approach and why (shows judgment)
- What the validation step proved
- Measurable result
- Technology used (credibility even without naming client)

Anonymous cases acceptable. Shallow summaries not. Three deep > six shallow.

### 7.4 Industries

**Purpose**: Show relevance without pretending to own more vertical proof than exists.

**Three blocks**:
1. **E-commerce** — Lead with this. Shopping assistants, intelligent search.
2. **Security-sensitive organizations** — In-house AI, data stays on-prem.
3. **EdTech** — Clearly framed as emerging / lighter-proof.

No eight-industry sprawl. No hard-coded manufacturing specialization.

### 7.5 About

**Purpose**: "Who are these people and why should I trust them?"

**Content**:
- **Founder section**: Story (2–3 paragraphs), photo (`media/photos/founder/founder_001.jpg`), education, experience, role in projects.
- **Approach section**: Methodology summary, AI-native stance with human ownership, data-engineering discipline.
- **Team section**: Roles, not faces. "AI Architects · ML Engineers · Data Engineers · Business Analysts." Language: "Every project is personally led by our founding architect. The team is assembled specifically for your challenge — drawing from specialists who've worked together across 50+ AI projects."
- No specific headcount claims, no org charts, no "Our dedicated team is always ready."
- When team photos become available, add them.

### 7.6 Blog

**Purpose**: Demonstrate expertise, restraint, useful thinking.

Align with founder's value-over-noise philosophy. No generic AI-content churn.

### 7.7 Contact

**Purpose**: Convert interest into a low-pressure conversation.

- **CTA button**: "Discuss Your AI Project"
- **Subtext**: "Get an honest assessment of feasibility, timeline, and cost — directly from our chief architect."
- **Founder photo** next to the form
- **Form**: Simple textarea ("What can we help with?"). No dropdowns, no "choose your service."
- Submissions route to `info@remilink.com` via formsubmit.co
- Expectation: "We'll respond within 24 hours"
- No calendar embed
- No automated responses
- Optional: Privacy reassurance near form

---

## 8. Content Rules

- Keep claims conservative unless sourced
- Prefer fewer, stronger messages over broad capability lists
- Lead with e-commerce as proof context
- Treat EdTech cautiously
- Use security-sensitive AI as a contextual differentiator, not a fake vertical authority claim
- No unsourced metrics, rankings, or trust scores

---

## 9. Visual Direction

See [`design/DESIGN_BRIEF.md`](design/DESIGN_BRIEF.md) for the full spec. Summary:

- antigravity.google as the visual north star
- Light, calm, premium restraint
- Monochrome base (#101828 text, #ffffff bg, #475467 body)
- Orange accent (#ff7a00) — only in particles, CTAs, wordmark, eyebrows, hover states
- Massive whitespace, one idea per screen
- Satoshi font, generous line height
- Flat white header + orange CTA button
- Canvas particle hero (gray + orange dots)

**The one-sentence design mandate**: Build a site that looks like antigravity.google but says what Remilink does.

---

## 10. Technical Direction

- **Framework**: Astro
- **Output**: Static
- **Language**: TypeScript
- **Content**: Content collections or structured Markdown
- **Deployment**: GitHub Pages
- **Form handling**: formsubmit.co → info@remilink.com

This is the working direction for the site build, not yet the built application.

---

## 11. SEO & Discoverability

Every page needs:
- Unique title and meta description
- Canonical URL
- OG / social metadata
- Sensible internal linking

Technical outputs:
- `sitemap.xml` (Astro integration)
- `robots.txt` (allow all crawlers)
- `llms.txt` (AI discoverability)
- JSON-LD: Organization on homepage, Article on blog posts, BreadcrumbList on inner pages

---

## 12. Launch Requirements

### Must be ready at launch
- Clear offer on every page
- Working contact flow to `info@remilink.com`
- Proof/claims discipline (nothing unsourced)
- Credible founder/company presentation
- CTA path working end-to-end

### Immediately after launch
- Analytics (Google Analytics / Plausible / PostHog)

### Out of scope for v1
- Calendar-first booking
- CRM-heavy workflows
- Unsupported industry sprawl
- Unsourced comparative claims
- Complex growth automation
- Dashboards or analytics reporting

---

## 13. Acceptance Criteria

- Home, Services, Case Studies, Industries, About, Blog, Contact all exist
- Primary action is form submission, not calendar booking
- All docs use `MVP = 3–5 months`
- `info@remilink.com` is the inquiry destination everywhere
- EdTech named correctly (not AdTech)
- Clay, Apollo, LinkedIn Helper not described as required
- No unsupported proof claims
- Particle canvas works on mobile without degrading performance

---

## Related Docs

- [Strategy](../strategy/) — Business context
- [Design Brief](design-brief.md) — Visual spec
- [Backlog](backlog.md) — Tasks and execution order
