---
title: "LinkedIn Voice Drafting System Feedback"
---

# LinkedIn Voice Drafting System  
*A practical foundation document for turning Telegram idea notes into posts that sound like me*

## 1. Purpose

This document defines the minimum system needed to convert rough Telegram notes, voice memos, and source links into LinkedIn drafts that preserve my real voice, angle, and restraint.

The objective is **not** to generate generic “good LinkedIn posts.”  
The objective is to generate posts that feel recognizably mine.

Additional founder-note constraints now confirmed:

- the content program should optimize for **value and trust**, not hype or publishing frequency for its own sake
- the main audiences are experienced AI practitioners and business-side AI buyers/operators
- the system should support a long-term expert voice and avoid empty trend reposting
- the workflow and tooling around capture, drafting, and publishing are still exploratory and may change

See [`../founder-inputs/content-and-growth.md`](../founder-inputs/content-and-growth.md) for the current tracked source of truth behind those constraints.

This design follows current vendor guidance: start with prompt design, examples, and evals; add retrieval where relevant; and consider fine-tuning later only if the earlier levers are insufficient. OpenAI also recommends structured outputs for reliable downstream automation, while Notion’s API supports the page property types needed for this workflow. ([developers.openai.com](https://developers.openai.com/api/docs/guides/prompt-engineering/?utm_source=chatgpt.com))

---

## 2. Core Principle

A model cannot infer my voice from one note.

To write like me, the system must have access to:

1. **What I noticed**
2. **What I think about it**
3. **Why I think it matters**
4. **What I would not overclaim**
5. **How I have written similar posts before**

The main failure mode is not poor grammar.  
The main failure mode is **angle drift**:
- the post becomes a summary instead of an opinion
- the tone becomes generic
- the draft overclaims beyond the evidence
- the final result sounds like “AI LinkedIn” instead of me

---

## 3. Success Criteria

A draft is successful only if it passes all of the following:

- factually faithful to the note and source
- preserves my actual interpretation
- sounds close to my canonical past posts
- avoids generic social-media phrasing
- does not overstate weak evidence
- is publication-ready after light editing, not total rewrite

---

## 4. What Must Be Prepared Up Front

## 4.1 Voice Library

Prepare a library of past writing examples.

### Minimum viable dataset
- 25 past posts
- 10 note → final post pairs
- 5 “very me” canonical posts
- 5 examples of posts I do **not** want the system to imitate
- 1 banned-phrases list
- 1 short style guide
- 1 eval set of 10 ideas with preferred outputs

### Better dataset
- 50+ past posts
- 20+ note → final post pairs
- topic tags
- tone tags
- audience tags
- annotations explaining why a post worked

---

## 4.2 Style Guide

The style guide should be short and operational, ideally 500–1000 words.

It should include:

### Audience
Who I usually write for:
- AI engineers
- founders
- technical operators
- buyers of AI services
- general tech audience

### Tone
Examples:
- sharp
- skeptical
- practical
- technical
- non-hype
- opinionated but not theatrical
- clear, not ornamental

### Structural habits
Examples:
- hook
- central claim
- evidence or concrete example
- implication
- restrained ending

### Formatting habits
Examples:
- short paragraphs
- limited emojis or none
- minimal fluff
- direct statements
- occasional tension/contrast framing
- no fake vulnerability format
- no engagement-bait CTA

### Banned patterns
Examples:
- “game changer”
- “unlock”
- “in today’s fast-paced world”
- “let that sink in”
- fake “hot take” tone without substance
- vague trend language with no evidence

---

## 4.3 Transform Pairs

These are the highest-value assets.

Each pair should contain:
- the original messy note, transcript, or thought dump
- the final published post
- optional annotation on what changed

This teaches the system not just **what I sound like**, but **how I transform rough material into finished writing**.

---

## 4.4 Evals

Build evals early.

For each eval case, store:
- raw idea note
- source material
- my preferred final post
- pass/fail criteria

The point is to measure whether the system writes like me consistently, not whether one output “looks nice.” This matches current OpenAI guidance to begin with realistic evals and iterate from there. ([developers.openai.com](https://developers.openai.com/api/docs/guides/optimizing-llm-accuracy/?utm_source=chatgpt.com))

---

## 5. Notion Architecture

Use **three databases**, not one.

## 5.1 Database A: `Content Ideas`

This is the live operational queue.

| Property | Type | Purpose |
|---|---|---|
| Title | title | Working title |
| Status | status | Inbox / Enriching / Ready for Draft / Drafted / Reviewed / Published / Rejected |
| Source Type | select | Telegram note / Voice memo / Link / Mixed |
| Channel | multi_select | LinkedIn / X / Blog / Thread |
| Language | select | EN / RU / UA |
| Raw Note | rich_text | Clean short version of the original capture |
| Core Claim | rich_text | The one sentence the post must land |
| My Take | rich_text | My opinion, not summary |
| Why It Matters | rich_text | Why the reader should care |
| Audience | select | AI engineers / founders / operators / buyers / general tech |
| Desired Angle | select | Contrarian / educational / observation / strategic / tactical |
| Do Not Overclaim | rich_text | Explicit guardrails |
| Evidence / Facts | rich_text | Preserved facts and proof points |
| Source URL | url | Primary source |
| Similar Posts | relation | Related entries from Voice Library |
| Draft Version | rich_text | Latest accepted draft |
| Hook Options | rich_text | Candidate openings |
| Risk Flags | multi_select | Needs fact check / too hype / too generic / weak angle |
| Publish Score | number | Manual quality score |
| Created At | created_time | Audit trail |

---

## 5.2 Database B: `Voice Library`

This is the reusable corpus of finished writing.

| Property | Type | Purpose |
|---|---|---|
| Title | title | Post name |
| Final Post | rich_text | Published post text |
| Topic | multi_select | AI / product / infra / hiring / etc. |
| Tone | multi_select | skeptical / technical / sharp / calm / direct |
| Audience | multi_select | founders / engineers / buyers / operators |
| Pattern | multi_select | strong claim / example / lesson / myth-busting |
| Is Canonical | checkbox | “Very me” examples |
| Why It Worked | rich_text | Optional annotation |
| Link | url | Published URL |

---

## 5.3 Database C: `Transform Pairs`

This database teaches the writing transformation itself.

| Property | Type | Purpose |
|---|---|---|
| Title | title | Pair name |
| Raw Input | rich_text | Original note, memo, or transcript |
| Final Output | rich_text | Final published post |
| What Changed | rich_text | Optional explanation of edits |
| Topic | multi_select | Retrieval tag |
| Angle | multi_select | Retrieval tag |
| Quality | number | Manual rating |

---

## 5.4 Page Body Convention

Keep database properties short. Put long context into the page body.

Use this structure inside each `Content Ideas` page:

### Raw Capture
Full original note, transcript, or copied thread content.

### Source Extracts
Relevant excerpts, quotes, commit notes, screenshots, references.

### My Interpretation
Longer internal thinking that should not be lost.

### Fact Check Notes
Unknowns, caveats, claims to verify.

### Draft History
v1, v2, v3 if needed.

Notion supports the relevant page property types used above, including `title`, `rich_text`, `select`, `multi_select`, `status`, `relation`, `url`, and `formula`, while page content itself can live in the page body. ([developers.notion.com](https://developers.notion.com/reference/property-value-object?utm_source=chatgpt.com))

---

## 6. Mandatory Fields I Must Fill Manually

The system should never rely on the model to infer all of these from scratch.

For every idea, I must manually provide at least:

- **Core Claim**
- **My Take**
- **Why It Matters**
- **Audience**
- **Desired Angle**
- **Do Not Overclaim**

These six fields are the minimum boundary between:
- a generic AI summary
- a voice-faithful draft

---

## 7. Idea Packet Contract

Before drafting, every idea must be converted into a structured packet.

## 7.1 Required Fields

- `title`
- `raw_note`
- `core_claim`
- `my_take`
- `why_it_matters`
- `audience`
- `desired_angle`
- `do_not_overclaim`
- `evidence`
- `source_url`
- `language`
- `tone_tags`
- `structure_pattern`
- `banned_phrases`
- `similar_posts`
- `transform_examples`

## 7.2 Optional Fields

- `fact_check_notes`
- `confidence_notes`
- `publish_goal`
- `cta_style`
- `hook_preference`
- `length_preference`

---

## 8. Retrieval Strategy

For each new idea, the drafting step should retrieve:

1. **3 semantically similar posts** from `Voice Library`
2. **2 relevant note → final pairs** from `Transform Pairs`
3. the current style guide
4. the banned-phrases list

This is better than pasting the same examples into every prompt. The few-shot examples should be dynamically relevant to the current topic and angle, which aligns with OpenAI guidance on combining prompting with retrieval. ([developers.openai.com](https://developers.openai.com/api/docs/guides/optimizing-llm-accuracy/?utm_source=chatgpt.com))

---

## 9. Drafting Prompt Design

The drafting assistant should be optimized for:
- fidelity
- restraint
- voice consistency
- useful structure
- low genericity

Anthropic’s current prompt guidance emphasizes clear instructions, examples, and structured prompts; OpenAI similarly recommends explicit instructions, examples, and structured outputs where appropriate. ([developers.openai.com](https://developers.openai.com/api/docs/guides/prompt-engineering/?utm_source=chatgpt.com))

## 9.1 System Prompt

```text
You are a writing assistant helping draft LinkedIn posts in the user's authentic voice.

Your job is not to sound generically polished.
Your job is to preserve the user's real angle, skepticism level, and framing.

Rules:
1. Prefer clarity over hype.
2. Do not invent facts.
3. If a claim is weakly supported, either soften it or flag it.
4. Use the user's examples and style patterns, not generic LinkedIn phrasing.
5. Keep the post grounded in the user's actual interpretation.
6. Respect the "Do Not Overclaim" section strictly.
7. Produce outputs that are publication-ready but still feel human and specific.

Avoid:
- generic motivational tone
- inflated certainty
- vague trend language
- cliché CTAs
- filler like "game changer", "unlock", "in today's world"

When source evidence is insufficient, say less.
```

## 9.2 User Prompt Template

```xml
<task>
Draft a LinkedIn post from the idea packet below.
</task>

<objective>
Write like the user, not like an AI social media tool.
</objective>

<idea_packet>
<title>{{title}}</title>
<raw_note>{{raw_note}}</raw_note>
<core_claim>{{core_claim}}</core_claim>
<my_take>{{my_take}}</my_take>
<why_it_matters>{{why_it_matters}}</why_it_matters>
<audience>{{audience}}</audience>
<desired_angle>{{desired_angle}}</desired_angle>
<do_not_overclaim>{{do_not_overclaim}}</do_not_overclaim>
<evidence>{{evidence}}</evidence>
<source_url>{{source_url}}</source_url>
</idea_packet>

<voice_examples>
{{top_3_similar_posts}}
</voice_examples>

<transform_examples>
{{top_2_note_to_post_pairs}}
</transform_examples>

<output_requirements>
Return:
1. 3 hook options
2. 1 main draft
3. 1 shorter variant
4. fact-check flags
5. risk flags if the post sounds too generic / too hype / too weak
</output_requirements>

<constraints>
- No invented claims
- No overstatement beyond the evidence
- Keep the user's tone: {{tone_tags}}
- Preferred structure: {{structure_pattern}}
- Avoid banned phrases: {{banned_phrases}}
</constraints>
```

---

## 10. Output Contract

The drafting model should return structured JSON first.

```json
{
  "hook_options": [
    "string",
    "string",
    "string"
  ],
  "main_draft": "string",
  "short_variant": "string",
  "fact_check_flags": [
    "string"
  ],
  "risk_flags": [
    "too_generic",
    "too_hype",
    "unsupported_claim"
  ],
  "confidence_notes": "string"
}
```

This makes automation, validation, and Notion updates cleaner. OpenAI’s current docs recommend structured outputs when a predictable shape is needed. ([developers.openai.com](https://developers.openai.com/api/docs/guides/structured-outputs/?utm_source=chatgpt.com))

---

## 11. Workflow

## 11.1 Capture
User sends:
- text note
- voice memo
- link
- or mixed input

## 11.2 Persist
Save immediately to a local database and/or Notion draft record.

## 11.3 Enrich
Add:
- source URL
- source extract
- core claim
- my take
- why it matters
- do not overclaim
- audience
- desired angle

## 11.4 Retrieve
Fetch:
- 3 similar posts
- 2 transform pairs
- style guide
- banned phrases

## 11.5 Draft
Generate:
- hook options
- main draft
- short variant
- risk flags

## 11.6 Review
Human checks:
- factual accuracy
- voice match
- restraint
- usefulness
- non-genericity

## 11.7 Store
Write accepted draft back to Notion.

## 11.8 Publish
Final edit, then publish manually or through a separate publishing flow.

---

## 12. Acceptance Checklist

Before a draft is accepted, all answers below must be “yes”.

| Check | Question |
|---|---|
| Fact fidelity | Are all claims supported by the note and source? |
| Voice match | Does this sound recognizably like me? |
| Angle clarity | Is there one clear point instead of a vague summary? |
| Restraint | Does it avoid overclaiming? |
| Non-genericity | Could this have been written by any generic AI post generator? |
| Structure | Is the post easy to read and strong enough to publish? |

If any answer is “no”, the draft goes back to review.

---

## 13. Example Idea Packet

Below is how the nanochat-related note should be represented.

The related nanochat history page and repo references show that commit `6ed7d1d` was part of “autoresearch round 1,” and the broader autoresearch repo describes an agent loop that modifies code, trains for a fixed time budget, and keeps or discards changes based on results. ([github.com](https://github.com/karpathy/autoresearch?utm_source=chatgpt.com))

### Title
LLMs will tune training systems, not only weights

### Raw Note
Аналогично тому как сейчас происходит файн-тюнинг весов модели, также будет происходить и файн-тюнинг архитектуры модели и кода файнтюнинга весов модели.

Here on the chat you may see an experiments evolution. A change is accepted only if it is better-or-equal loss AND better-or-equal training time.

As a result it created the following commit of the https://github.com/karpathy/nanochat/commit/6ed7d1d82cee16c2e26f45d559ad3338447a6c1b

It’s not yet a universal library that you can apply to your project. It’s very much oriented to Karpathy’s nanochat project. But it’s a matter of time.

### Core Claim
The next meaningful step is not only AI tuning model weights, but AI iterating on training architecture and training code itself.

### My Take
This is more important than another benchmark bump because it changes the optimization loop, not just the final weights.

### Why It Matters
If this pattern generalizes, training pipelines become partially self-improving systems.

### Audience
AI engineers, technical founders

### Desired Angle
Strategic observation

### Do Not Overclaim
Do not present this as a general-purpose library or a solved universal capability. Frame it as an early but important signal.

### Evidence
- the commit is associated with autoresearch-driven improvement in nanochat
- the broader setup modifies code, runs training, and keeps or discards changes based on measured outcomes
- the current implementation is still narrow and project-specific

### Source URL
GitHub commit URL

### Risk Flags
- needs fact check
- easy to overhype
- requires careful wording around generalization

---

## 14. Non-Negotiable Editorial Rules

The drafting agent must never:
- invent evidence
- invent source details not present in the note or source
- present speculation as fact
- smooth out all skepticism
- force a “LinkedIn voice”
- add fake CTA language for engagement

The drafting agent should:
- preserve tension where it exists
- keep the claim narrow when the evidence is narrow
- prefer one sharp point over five weak ones
- make the post sound authored, not assembled

---

## 15. Fine-Tuning Policy

Do **not** start with fine-tuning.

Start with:
1. style guide
2. voice examples
3. transform pairs
4. retrieval
5. evals

Only consider fine-tuning later if:
- you have at least dozens of strong examples
- prompting + retrieval still miss voice consistently
- you can measure improvement through evals

This is consistent with current OpenAI guidance that prompt design, examples, retrieval, and evals should usually come before fine-tuning. ([developers.openai.com](https://developers.openai.com/api/docs/guides/optimizing-llm-accuracy/?utm_source=chatgpt.com))

---

## 16. Minimum Viable V1

A solid V1 requires only:

- 1 `Content Ideas` database
- 1 `Voice Library` database
- 15 good past posts
- 5 note → final post pairs
- 1 banned-phrases list
- 1 short style guide
- 1 drafting prompt
- 1 review checklist

This is enough to produce a usable first system.

---

## 17. Recommended Next Deliverables

After this document, the next implementation artifacts should be:

1. exact Notion property schema
2. JSON payload contract for the bot
3. retrieval ranking logic for similar posts
4. eval set format
5. review UI or review checklist template

---

## 18. Final Standard

The system is working only when the output makes this true:

> “This sounds like something I would have written from this note.”

Not:

> “This is a decent AI-generated post.”

If you want, I can turn this into a stricter **implementation-ready spec** with:
- Notion field names exactly as API keys
- example JSON payloads
- the draft-generation endpoint contract
- the review-state machine
