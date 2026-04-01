> Part of [RemiLink Strategy](../index.md). Status: APPROVED. Updated 01.04.2026.

# Brand Identity

Visual identity, voice, and design system for remilink — applies to everything: website, LinkedIn, presentations, proposals, emails, business cards, and any future touchpoint.

For website-specific layout decisions, see [design-brief.md](../website/design-brief.md).

---

## Brand Personality

Approachable, expert, honest. Not corporate, not aggressive, not hype-driven. "Remi" means friend/helper — the brand should feel like a senior architect explaining something to a peer, not a salesperson pitching a deal.

This applies everywhere — a LinkedIn post should feel the same as a proposal, which should feel the same as the website.

---

## Logo

Hexagonal icon + "remilink" wordmark (lowercase). The icon is a geometric cube/hexagon representing connection and structure.

### Variants

| Variant | Usage |
|---|---|
| Orange icon + orange wordmark on white | Primary, default |
| White icon + white wordmark on orange | Reversed, for orange backgrounds |
| Orange icon + dark wordmark on white | Alternative, where orange text doesn't work |

### Rules
- Always use the full logo (icon + wordmark) when space allows
- Icon alone is acceptable for favicons, small spaces, social media avatars
- Minimum clear space: the width of the icon on all sides
- Never stretch, rotate, or add effects to the logo
- Never place the logo on busy or low-contrast backgrounds

### Brand Gradient (wordmark on website)
```css
background: linear-gradient(135deg, #ff7a00, #ff9a40);
```
Used ONLY for the REMILINK wordmark in the site header and hero. Not for body text.

---

## Color Palette

### Primary

| Color | Hex | CSS Variable | Usage |
|---|---|---|---|
| Orange | `#FF7A00` | `--color-primary` | CTA buttons, eyebrow labels, brand accent, ~10-15% of particles |
| Orange hover | `#E86E00` | `--color-primary-hover` | Button hover state |

### Neutrals

| Color | Hex | CSS Variable | Usage |
|---|---|---|---|
| Dark text | `#101828` | `--color-text` | Headings, primary text |
| Body text | `#475467` | `--color-body` | Paragraphs, descriptions |
| Muted text | `#667085` | `--color-muted` | Captions, secondary info |
| Light background | `#F9FAFB` | `--color-light` | Alternate section backgrounds |
| Border | `#E4E7EC` | `--color-border` | Subtle borders, dividers |
| White | `#FFFFFF` | `--color-bg` | Primary background |

### Dark (footer, dark sections)

| Color | Hex | CSS Variable | Usage |
|---|---|---|---|
| Footer background | `#0F172A` | `--color-footer` | Footer, dark sections |
| Footer text | `#94A3B8` | `--color-footer-text` | Body text on dark backgrounds |

### Color Principles
- The visual identity is almost entirely monochrome: dark text, white/light backgrounds, gray accents
- Orange is the single brand accent — use it sparingly so it has impact
- On the website: CTA buttons, eyebrow labels, brand gradient wordmark, particle dots, hover states
- In presentations/proposals: section headers, key figures, call-out boxes
- On LinkedIn: profile banner accent, post imagery highlights
- On business cards: logo, one accent element
- The restraint makes orange moments more impactful — if everything is orange, nothing is
- No gradient blobs, no colored backgrounds on content areas

---

## Typography

### Font: Satoshi

Geometric sans-serif by Indian Type Foundry. Used for both headings and body. Clean, modern, approachable.

Source: https://freebiesbug.com/free-fonts/satoshi

Fallback stack: `'Satoshi', 'Helvetica Neue', Arial, sans-serif`

### Type Scale

| Element | Size | Weight | Color | Letter Spacing |
|---|---|---|---|---|
| H1 | `clamp(2.5rem, 5vw, 4rem)` | 700 | `#101828` | -0.02em |
| H2 | `clamp(1.8rem, 3.5vw, 2.8rem)` | 700 | `#101828` | -0.01em |
| H3 | `clamp(1.2rem, 2vw, 1.5rem)` | 700 | `#101828` | — |
| Body | 1rem (16px) | 400 | `#475467` | — |
| Eyebrow | 0.75rem | 700, uppercase | `#FF7A00` | 0.1em |
| Hero headline | `clamp(2.2rem, 4vw, 3.2rem)` | 700 | `#101828` | -0.02em |
| Hero support | `clamp(1.1rem, 2vw, 1.35rem)` | 400 | `#475467` | — |

### Typography Rules
- Headings: black, bold, large. High contrast against white
- Body: muted gray, regular weight. Creates visual hierarchy
- Very few font weights — bold for headings, regular for body
- No decorative text treatments, no gradients on body text
- Generous line height: 1.1 for headings, 1.6 for body

---

## Spacing & Layout Principles

The design language is spacious. Content breathes. No visual urgency. This applies to all formats:

- **Website**: Generous section padding, one idea per viewport. See CSS tokens in `src/styles/global.css`
- **Presentations**: One key point per slide. Large text, minimal bullets. Let whitespace do the work
- **Proposals**: Wide margins, clear section breaks, no dense walls of text
- **LinkedIn posts**: Short paragraphs, line breaks between ideas, no hashtag spam
- **Email**: Brief, direct. One ask per email. Signature: name + title + remilink.com (no social links, no quotes)

**Principle**: When in doubt, add more whitespace. Density signals desperation. Space signals confidence.

---

## Website Components
For web-specific implementation. See `src/styles/global.css` for CSS tokens.

### Buttons

| Type | Style | Usage |
|---|---|---|
| Primary | Orange pill (`#FF7A00`), white text, rounded | CTA |
| Ghost | Transparent, dark text, subtle border, pill shape | Secondary actions |

### Cards
- Subtle border, no shadow, generous padding
- Max 3 per row. Simple: title + short text
- No bullet lists inside cards, no hover lift effects

### Forms
- Clean inputs with subtle border
- Focus state: orange border
- No dropdowns. Simple textarea for contact

---

## Presentation & Proposal Guidelines

- **Cover slide**: Logo + project/client name + date. White background, orange accent line
- **Section headers**: Large Satoshi Bold text, left-aligned. Orange eyebrow label above if needed
- **Content slides**: One idea per slide. Text left, visual right (or full-width visual)
- **Data/metrics**: Large orange numbers, gray context text below
- **Final slide**: CTA or project-specific next step. Contact info
- **Never**: Clip art, stock AI imagery, dense bullet lists, more than 3 colors on a slide

---

## Imagery & Photography

### Style
- Real people, collaborative environments, warm and approachable
- Diverse teams, casual-professional tone (not corporate stock)
- Elegant visual metaphors for connection and intelligence

### Where used
- **Website**: Hero backgrounds, about page, case study headers
- **LinkedIn**: Post images, article covers, founder photos
- **Proposals**: Team photos, project visuals, process diagrams

### Avoid
- Overly technical/dark visuals
- Abstract AI graphics, robot imagery, neural network illustrations
- Generic stock photos (people pointing at screens, handshakes)
- Busy or cluttered compositions

### When no photos are available
- Metric highlight cards (large orange number + gray context)
- Simple process diagrams with clean lines
- Subtle gradient/glow visuals (warm orange tint)
- Plain white space is better than bad imagery

---

## Voice & Content

### Tone Rules

| Do | Don't |
|---|---|
| Be specific and concrete | Use vague claims ("world-class", "cutting-edge", "innovative") |
| Admit limitations honestly | Overclaim or overpromise |
| Speak to THEIR problem | Talk about ourselves first |
| Use plain language | Use jargon to sound impressive |
| Be direct — say it in fewer words | Pad with filler ("In today's rapidly evolving landscape...") |
| Show, don't tell (numbers, examples, specifics) | Make generic statements ("We deliver exceptional results") |

### Terminology

Use these exact terms. Not alternatives, not abbreviations.

| Correct | Wrong |
|---|---|
| remilink (lowercase) | RemiLink, Remilink, REMILINK (except at sentence start or in headings) |
| AI Strategy Session | Audit, Free Call, Consultation |
| Discovery & Blueprint | Discovery, Scoping, Requirements Phase |
| Concept Validation | POC, PoC, Proof of Concept, MVP |
| Production-Ready Build | MVP, Development Phase |
| Scale & Optimize | Production, Scaling Phase |
| architect | founder, CEO (in service context) |

See [services.md](services.md) Appendix for the reasoning behind each label.

### Content Principles

From the [GTM strategy](gtm.md):

- **Headline**: Speaks to THEIR problem, not about us
- **Subhead**: Reinforces with proof. Not a company description — a reason to keep reading
- **CTA**: Low-pressure. The visitor gets something valuable, not a commitment
- **Content**: Specific to their domain. No hype, but value

### Pricing Language

From [pricing display rules in gtm.md](gtm.md#pricing-display-rules):

- Show monthly rates ("From $15K/mo")
- Never show project totals next to prices
- Never show individual engineer rates
- Never put durations and prices in the same sentence

### What We Never Say

- "AI-powered" as a selling point (our clients know what AI is)
- "End-to-end" (vague, everyone says it)
- "Scalable solutions" (meaningless without context)
- "Digital transformation" (corporate buzzword)
- "Leverage AI" (verb "leverage" is a red flag)
- "Book a call" (see CTA rejection table in [gtm.md](gtm.md))

### What We Always Emphasize

- We validate before we build
- We know what NOT to build
- The client doesn't pay for what won't work
- An architect leads every project, not a sales team
- We're honest about what's feasible and what isn't

---

## Application by Channel

| Channel | Key Rules |
|---|---|
| **Website** | Full design system applies. |
| **LinkedIn** | Satoshi font in graphics. Orange accent sparingly. Real photos > stock. Short paragraphs, value-first |
| **Presentations** | White background, orange accents. One idea per slide. Satoshi Bold for headers |
| **Proposals** | Clean, wide margins. Use service terminology exactly. Include logo on cover + footer |
| **Email** | Brief, direct. No HTML templates — plain text with signature. Architect tone, not sales |
| **Business cards** | Logo (orange icon + dark wordmark), name, title, remilink.com, email. White card, minimal |
