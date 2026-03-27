# RemiLink Website Rebuild — Project Context

## What This Is

RemiLink (remilink.com) is an AI outsourcing/implementation company. This repo (`fearless-lark.github.io`) hosts the company website on GitHub Pages. We are doing a full website rebuild — from a generic "everything for everyone" AI shop to a focused, trust-led B2B service.

## Documentation Structure

```
docs/
├── index.md              → Reading order
├── strategy/             → Business truth (6 focused files)
│   ├── positioning.md    → What RemiLink is, pillars, AI thesis
│   ├── services.md       → Methodology, labels, pricing rules, verticals
│   ├── icp.md            → Target companies, buyer personas, fears
│   ├── gtm.md            → LinkedIn, CTA, contact flow, content strategy
│   ├── competitors.md    → 4+2 analyses, differentiation
│   └── gaps-and-open.md  → Honest gaps, open items, claims discipline
├── website/              → Everything to build the site
│   ├── spec.md           → Page requirements, tech, acceptance criteria
│   ├── design-brief.md   → Visual direction (antigravity.google reference)
│   └── backlog.md        → 22 tasks across v1 + v2
├── ideas.md              → Every founder idea, todo, speculative direction
├── reference/            → Raw source material (don't modify)
│   ├── founder-notes.md  → 57KB raw extraction from recordings
│   ├── founder-brief-answered.md → Q&A with status markers
│   ├── telegram-pipeline.md → Content pipeline technical analysis
│   └── voice-drafting-system.md → LinkedIn voice drafting spec
└── notes/                → Raw transcriptions and competitor analysis
```

**Rule**: strategy/ and website/ are the active docs. ideas.md captures everything speculative. reference/ is source material only.

## Current State (27.03.2026)

Documentation restructured and up to date. All major strategic decisions made. Ready to start content creation and Astro website build in parallel.

**Next actions**: Write 3 case studies + page content (tasks 1-6), set up Astro project (tasks 7-10), build pages (tasks 11-13). See website/backlog.md.

## Company Quick Reference

- **Positioning**: "Validate fast, scale smart" — risk reduction + honest expertise
- **Founder**: BSc pure math, MSc stats, 11 years AI/ML, personally architects every project
- **Domains**: E-commerce (primary), EdTech (secondary/emerging), In-house AI/MLOps (secondary)
- **Methodology**: AI Strategy Session → Discovery & Blueprint ($5-10K) → Concept Validation (from $15K/mo) → Production-Ready Build (from $15K/mo) → Scale & Optimize
- **ICP**: Mid-sized+ companies with complex catalogs and/or operational complexity
- **Primary CTA**: "Discuss Your AI Project" → info@remilink.com (via formsubmit.co) → founder responds within 24h
- **Primary channel**: LinkedIn

## Key Decisions

- Service labels (5), CTA, pricing display, ICP, team presentation — all decided. See strategy/gaps-and-open.md (Resolved section).
- formsubmit.co kept (email hiding + DDoS protection)
- Site metrics killed (unsourceable)
- Starting rate: $15-18K/mo (not $25K)
- About page: founder-first, no team photos needed
- Secondary CTA (PDF): deferred to post-launch
- Blog: deferred to v2
- Tech stack: Astro + TypeScript + GitHub Pages (migration from current plain HTML)
