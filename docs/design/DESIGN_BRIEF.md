---
title: "[CODEX] Remilink Design Brief"
---

# Remilink Website — Design Brief

## Primary design reference

**antigravity.google** — a product marketing site for an AI developer tool by Google.

Reference screenshots saved in `.plan/reference/` (see below for what to capture).

This site is the visual north star for the Remilink rebuild. Every layout decision, spacing choice, and visual treatment should be measured against this reference. When in doubt, go closer to the reference, not further.

## Business truth updates that affect design

- The primary site action is contact-form submission, not calendar-first booking.
- Contact intent should route to `info@remilink.com` with manual follow-up, so the CTA should feel like “start the conversation,” not “book instantly.”
- E-commerce is the strongest current public proof context; EdTech is real but more tentative, and broad multi-industry authority should not be implied visually.
- The visual brandbook `.docx` is mainly a moodboard/mockup source, not a complete implementation system. Use it for atmosphere and cues, not pixel-perfect rules.

## What we are adopting from the reference

### 1. Overall feel

The site feels **quiet, confident, and spacious**. It doesn't try to impress with density or visual complexity. It earns trust through restraint — big whitespace, clean typography, minimal color, and content that speaks for itself.

This is the opposite of a typical SaaS landing page with stacked card grids, animated counters, gradient blobs, and "trusted by 500+ companies" logo bars. The reference says almost nothing visually and lets the product speak.

**For Remilink:** we adopt this same restraint. An AI consultancy that looks calm and unhurried signals competence. A site that screams "look at all our capabilities" signals insecurity.

### 2. Header

**Reference behavior:**
- Logo on the far left (wordmark, not icon)
- Navigation links in the center area, evenly spaced
- Single CTA button on the far right — dark/filled pill shape
- No background blur, no border-bottom, no shadow
- Clean white background, fully flat
- Dropdown menus are minimal: a few text links, no mega-menu, no icons grid

**For Remilink:**
- "REMILINK" wordmark (brand gradient) on far left
- Nav links: Services, Case Studies, Industries, Blog, Company/About
- CTA button: primary conversation CTA, exact copy TBD, visually emphasized as the main form-entry path
- Drop the current blurred glass `backdrop-filter` header entirely
- Drop the current `border-bottom: 1px solid rgba(...)` line
- Sticky position is fine, but keep it visually flat
- Mobile hamburger: keep current behavior, it's fine

### 3. Hero section

**Reference behavior:**
- Full-width white background
- Sparse colored dots/particles scattered across the background — they drift gently
- Centered brand mark (logo + name) prominently placed
- Large headline below the brand mark
- Subtitle text below the headline
- CTA button(s) below the subtitle
- Massive vertical padding — the hero breathes, it's not cramped
- The particles are clearly decorative texture, not content. They don't distract from reading.

**For Remilink:**
- Full-width white background (drop the current `radial-gradient` orange wash)
- Canvas particle effect behind content (see particle spec in PRD Section 7)
- Centered REMILINK wordmark in brand gradient, larger than current header logo
- Headline below: specific, not poetic
- Support text below headline: one sentence
- Primary CTA should clearly lead to the contact flow; a secondary CTA is optional and should not compete unless it has a real destination
- Vertical padding: significantly more than current. The hero should occupy most of the viewport on desktop. Think 80-90vh, not the current cramped layout.

### 4. Section spacing

**Reference behavior:**
- Sections are separated by enormous vertical space
- A single feature section might occupy an entire viewport height
- There is no visual urgency — the page scrolls slowly through ideas
- Light background tints (very subtle gray, warm gradient) distinguish sections without creating hard visual boundaries

**For Remilink:**
- Increase section padding from current `clamp(4rem, 8vw, 6rem)` to `clamp(6rem, 12vw, 10rem)`
- Between major homepage sections, allow even more — up to 8-10rem
- Use subtle background tints (very light warm gray, faint orange wash) to separate sections, not borders or hard color blocks
- Each section should feel like it owns its viewport space

### 5. Content sections (text/visual split)

**Reference behavior:**
- Two-column layout: text on the left, visual on the right
- Text side: large heading + 2-3 lines of body text. That's it. Not paragraphs of explanation.
- Visual side: product screenshot, illustration, or other media, often with a subtle gradient/glow behind it
- Generous gap between the two columns
- The visual is large and given real space — not a thumbnail

**For Remilink:**
- Services, case studies, about sections use this pattern
- Left: heading + concise description
- Right: supporting visual. Since Remilink has no product UI to screenshot, use:
  - Metric highlight cards (e.g., "68% faster underwriting")
  - Team/founder photos
  - Simple process diagrams or abstract visuals
  - Subtle gradient/glow behind the visual element, matching the reference
- On mobile: stacks vertically (text first, visual below)

### 6. Typography

**Reference behavior:**
- Large, bold headings with high contrast (black on white)
- Body text in a medium gray, not black — creates visual hierarchy
- Very few font weights in play — bold for headings, regular for body
- No decorative text treatments, no gradients on body text
- Generous line height and letter spacing

**For Remilink:**
- Keep Satoshi as the heading + body font (it's a clean geometric sans, similar feel to the reference)
- Headings: black (#101828), bold, large
- Body: muted gray (#475467), regular weight — already the case in current CSS
- Brand gradient text: use sparingly — only on the REMILINK wordmark, not on body copy
- Increase heading sizes slightly for the new spacious layout

### 7. Color

**Reference behavior:**
- Almost entirely monochrome: black text, white backgrounds, gray accents
- Color appears ONLY in:
  - The particle dots (multicolored: blue, purple, red, orange)
  - Subtle gradient washes behind visuals
  - CTA buttons
- The restraint makes the rare color moments more impactful

**For Remilink:**
- Base: black text (#101828), white background (#ffffff), gray body text (#475467)
- Accent color: Remilink orange (#ff7a00) — used ONLY in:
  - ~10-15% of particle dots
  - CTA buttons (orange fill)
  - REMILINK wordmark gradient
  - Eyebrow text
  - Hover/focus states
  - Subtle section background tints
- Everything else: monochrome
- Drop any sections that currently use prominent colored backgrounds
- The current orange `radial-gradient` on the hero should be removed — particles replace it as the visual accent

### 8. Cards (when used)

**Reference behavior:**
- Cards appear rarely — the reference prefers flat text/visual sections
- When cards exist, they are very simple: title + short text + link
- Light border or subtle shadow, generous internal padding
- Max 3 per row

**For Remilink:**
- Use cards ONLY for:
  - Homepage services overview (3 cards)
  - Blog post teasers (2-3 cards)
- Cards should be simpler than current: drop the bullet lists, drop the hover lift transform
- Subtle border, no shadow, generous padding
- Max 3 per row, never 4

### 9. CTA buttons

**Reference behavior:**
- Primary CTA: dark (black) pill button with white text, placed in the header and at key conversion points
- Ghost/secondary CTA: text link with arrow, no border

**For Remilink — decision needed:**
- The reference uses a **dark/black** CTA. Current Remilink uses an **orange** CTA.
- Option A: switch to dark CTAs to match the reference more closely
- Option B: keep orange CTAs as the brand accent (current approach)
- **Recommendation: keep orange CTAs.** The orange is Remilink's brand color and serves as the single accent in an otherwise monochrome site. A dark CTA would blend into the text. Orange CTAs will pop more in the restrained layout.
- Header CTA: orange pill, exact copy TBD, should imply a low-pressure conversation rather than an instant calendar booking
- Ghost links: keep current style (text + arrow, no border)

### 10. Footer

**Reference behavior (inferred from typical product sites):**
- Dark background, light text
- Simple column layout with link groups
- Minimal, not a sitemap dump

**For Remilink:**
- Keep current dark footer style (#0f172a background)
- Simplify content: logo, short tagline, nav links, LinkedIn, copyright
- No changes needed from current — it's already clean

## What we are NOT adopting

- **Dropdown mega-menus.** The reference has clean dropdowns, but Remilink doesn't need nav dropdowns at all with only 6 nav items.
- **Product screenshots.** The reference shows code editor UIs. Remilink has no product to screenshot. Use metrics, photos, and process visuals instead.
- **Multicolored particles.** The reference uses blue/purple/red/orange dots. Remilink should use muted grays + brand orange only.
- **Dark CTA buttons.** Keeping orange for brand identity (see section 9).

## Mapping: reference → Remilink

| Reference element | Remilink adaptation |
|---|---|
| Flat white header + dark CTA | Flat white header + orange CTA |
| Multicolor particle hero | Gray + orange particle hero |
| "Google Antigravity" centered brand mark | "REMILINK" centered brand mark (gradient) |
| Product headline + subtitle | AI implementation headline + support text |
| Feature section: text left / product screenshot right | Service/case study: text left / metric or photo right |
| Pricing, Use Cases, Resources nav | Services, Case Studies, Industries, Blog, About nav |
| Code editor screenshots | Outcome metrics, team photos, process visuals |
| Dark pill CTA | Orange pill CTA |
| Subtle gradient behind visuals | Subtle gradient behind visuals (warm orange tint) |

## Reference screenshots

Save the following screenshots to `.plan/reference/`:
- `header.png` — flat header with nav and CTA
- `hero.png` — hero with particles and centered brand
- `dropdown.png` — clean nav dropdown
- `feature-section.png` — text/visual split with gradient background

These are the source of truth for visual direction. When making design decisions during implementation, compare against these screenshots.

## The one-sentence design mandate

**Build a site that looks like antigravity.google but says what Remilink does — quiet confidence, massive whitespace, sparse particle texture, monochrome with orange accents, one idea per screen.**
