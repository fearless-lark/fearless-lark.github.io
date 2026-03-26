---
title: "[CODEX] Remilink PRD"
---

# Remilink Website Rebuild — PRD

This PRD reflects the current founder-input synthesis. It should be read together with:

- [`../founder-inputs/index.md`](../founder-inputs/index.md)
- [`../Remilink_FOUNDATION.md`](../Remilink_FOUNDATION.md)
- [`DESIGN_BRIEF.md`](DESIGN_BRIEF.md)

## 1. Objective

Build a static-first marketing site that makes a qualified buyer understand:

- what Remilink does
- why its approach reduces risk
- why it is credible
- what to do next

The site should convert interested visitors into contact-form submissions routed to `info@remilink.com`.

## 2. Success Criteria

- A cold visitor can explain Remilink’s offer and next step after one screen.
- Core pages are indexable and technically clean.
- The site feels materially clearer and more focused than the current “everything for everyone” version.
- Contact flow works reliably and delivers inquiries to `info@remilink.com`.
- Analytics is present at launch or added immediately afterward.

## 3. Audience

### Primary

- e-commerce teams with complex search / shopping-assistant opportunities
- buyers such as CTOs, Product Owners, founders, and engineering leaders

### Secondary

- security-sensitive organizations evaluating in-house AI deployment or guarded AI adoption

### Cautious / emerging

- EdTech buyers, but only with restrained public claims

## 4. Positioning

### Core message

Remilink is a founder-led AI implementation partner that helps companies scope the right problem, validate the solution before overspending, and carry proven work into MVP and production.

### Messaging hierarchy

1. Honest expertise: Remilink understands what is worth building and what is not.
2. Validation before scale: the company reduces risk by proving the concept before heavy engineering.
3. AI-native execution with human ownership: internal speedups exist, but human review, data-engineering rigor, and accountability remain non-negotiable.
4. Enterprise-safe flexibility: tooling and model choices can be aligned with client restrictions, including on-prem options where needed.
5. Founder-led trust: real judgment, real involvement, real follow-up.
6. Team leverage: even small staffed engagements benefit from the wider team’s cross-domain AI expertise.
7. Clear next step: submit the form and get a manual response within 24 hours.

### Claims discipline

The site must not publish unsourced claims such as:

- comparative “x times cheaper” claims
- precise speed multipliers
- trust ratings without named origin
- rankings without named origin

## 5. Site Architecture

```
/                               Home
/services/                      Services
/case-studies/                  Case studies
/industries/                    Industries / operating contexts
/about/                         Company / About
/blog/                          Blog index
/blog/[slug]/                   Blog posts
/contact/                       Contact
/404.html                       Error page
/sitemap.xml                    Generated
/robots.txt                     Crawler policy
/llms.txt                       AI discoverability aid
```

Required content categories from the brandbook still map to:

- Services
- Company
- Contact Us
- Blog
- Case Studies
- Industries

## 6. Page Requirements

### 6.1 Home

**Purpose:** explain the offer, reduce risk, show trust, and drive the single next step.

**Required sections:**

1. Hero
   - Clear statement of what Remilink does
   - Founder-led, trust-building tone
   - Primary CTA opens or links to the contact flow
   - Exact CTA copy is still open, but it must represent form submission, not calendar booking
2. Proof strip
   - Only sourced or clearly supportable proof
   - If proof remains thin, use fewer items with more context
3. Services overview
   - High-level summary of how Remilink works
4. Trust / company strip
   - Founder and team credibility
5. Blog or insight highlights
   - Demonstrate judgment and useful thinking
6. Final CTA
   - Repeat the form-based conversation path

### 6.2 Services

**Purpose:** describe the commercial journey clearly and honestly.

**Service blocks to cover:**

1. AI Audit and Discovery
2. Validation-First POC
3. MVP and Production Delivery
4. In-House / Security-Sensitive AI Systems

Each block should be able to mention, where relevant:

- data-engineering best practices as part of implementation quality
- tooling/model alignment with enterprise constraints
- access to wider team expertise beyond the visible day-to-day staffing

Optional supporting material:

- e-commerce shopping assistants as the clearest example use case
- note that EdTech exists but is not yet the dominant public proof base

### 6.3 Case Studies

**Purpose:** make Remilink’s judgment and delivery feel real.

**Structure for each case:**

- business problem
- chosen approach and why
- what the validation step proved
- measurable result
- enough technical detail to feel concrete

Anonymous cases are acceptable, but shallow summaries are not.

### 6.4 Industries

**Purpose:** show relevance without pretending to own more vertical proof than exists.

**Recommended v1 blocks:**

1. E-commerce
2. Security-sensitive organizations
3. EdTech (clearly framed as an emerging / lighter-proof area)

This page should avoid the old eight-industry sprawl and should not hard-code manufacturing-heavy specialization unless proof is later upgraded.

### 6.5 Company / About

**Purpose:** answer “who are these people and why should I trust them?”

**Content:**

- founder story
- founder role in delivery
- honest team framing
- methodology summary
- AI-native stance with human ownership
- data-engineering discipline as part of “how we build well”
- whole-team expertise behind small staffed engagements

### 6.6 Blog

**Purpose:** demonstrate expertise, restraint, and useful thinking.

Content should align with the founder’s value-over-noise philosophy and should not feel like generic AI-content churn.

### 6.7 Contact

**Purpose:** convert interest into a low-pressure conversation.

**Requirements:**

- form-based entry point
- submissions route to `info@remilink.com`
- expectation-setting copy: manual response within 24 hours
- no automated-response promise or autoresponder-heavy feel
- no calendar embed by default
- optional privacy reassurance is worth considering
- optional direct email display is acceptable
- optional real-human cue near the form, such as the actual responder or LinkedIn link, is worth evaluating if it lowers friction without feeling staged

## 7. Content Rules

- Keep public claims conservative unless sourced.
- Prefer fewer, stronger messages over broad capability lists.
- Use e-commerce as the clearest proof-led context.
- Treat EdTech with caution.
- Use the security-sensitive / in-house AI story as a contextual differentiator, not a fake vertical authority claim.

## 8. Design and UX Rules

Use the design brief as the visual source of truth. The important business implications are:

- the site must feel calm, not overloaded
- the design must support trust and scanability
- founder/team visuals matter
- the CTA must feel low-pressure and credible
- the site must read as a services business, not a product landing page

## 9. Technical Direction

The current working implementation direction remains:

- Astro
- static output
- TypeScript
- content collections or structured Markdown for repeatable content
- GitHub Pages deployment

This remains a working assumption for the future site build, not yet the built application in this repo.

## 10. SEO and Discoverability

Every page should have:

- unique title
- unique meta description
- canonical URL
- OG / social metadata
- sensible internal linking

Technical outputs should include:

- `sitemap.xml`
- `robots.txt`
- `llms.txt`

## 11. Launch vs. Immediate Follow-Up

### Launch-critical

- clear offer
- proof discipline
- working contact flow to `info@remilink.com`
- credible founder/company presentation

### Immediately after launch if not already done

- analytics

## 12. Out of Scope for v1

- calendar-first booking
- CRM-heavy workflows
- unsupported industry sprawl
- unsourced comparative claims
- complex growth automation
- dashboards or analytics reporting products

## 13. Acceptance Criteria

- Home, Services, Case Studies, Industries, Company/About, Blog, and Contact all exist in the final site IA.
- The primary site action is form submission, not calendar booking.
- All docs and future implementation specs use `MVP = 3–5 months`.
- `info@remilink.com` is the planned inquiry destination everywhere.
- EdTech is named correctly and not replaced with AdTech.
- Clay, Apollo, and LinkedIn Helper are not described as required product choices.
- The final build avoids unsupported proof claims.
