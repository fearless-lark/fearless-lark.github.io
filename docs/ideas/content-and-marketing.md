> Part of [Ideas & Todos](index.md). Nothing here is decided — for decisions, see [strategy/](../strategy/).

# Content & Marketing

## LinkedIn Program
- Founder account: 1x/week or every 2 weeks — high-quality posts *(source: founder-notes.md §9)*
- Create multiple LinkedIn persona accounts with distinct backstories (developer, PM, BA, domain expert) — 3 posts/week each *(source: founder-notes.md §9, §15)*
- Comment engagement as part of the content routine, not just original posts *(source: idea-backlog.md)*
- Contact database building with Clay, Apollo, LinkedIn Helper, or alternatives *(source: founder-notes.md §15)*

## Content Pipeline (Telegram-to-LinkedIn)
- Build a Telegram-to-LinkedIn drafting pipeline — capture voice memos → transcribe → AI draft → human review → publish *(source: idea-backlog.md, founder-notes.md §15)*
- Two detailed technical specs exist in reference/: [telegram-pipeline.md](../reference/telegram-pipeline.md) and [voice-drafting-system.md](../reference/voice-drafting-system.md)
- Key risks identified: Telegram Bot API can't fetch old messages, Whisper hallucinates on silence, "done" signal UX is fragile, 5 sequential integration points with no retry mechanism *(source: telegram-pipeline.md)*
- Consider using n8n (open-source workflow automation) — has community templates covering ~70% of input stage *(source: telegram-pipeline.md)*
- Hosting: Fly.io or similar small-hosting setup *(source: idea-backlog.md)*

## Content Tooling
- Create a Claude Skill with example posts for LinkedIn content generation *(source: founder-notes.md §10, §15)*
- Build agent workflow with roles: marketer, technical reviewer, copywriter *(source: idea-backlog.md, content-and-growth.md)*
- Add human-likeness / anti-slop review stage before publishing *(source: idea-backlog.md)*
- Use Notion as the content planning board *(source: idea-backlog.md)*
- Eventually hire someone to refine AI-assisted posts once enough pipeline exists *(source: founder-notes.md §10)*
- Consider generating fictional small case studies for LinkedIn persona content *(source: founder-notes.md §10)*

## Article Ideas
- "When NOT to use an LLM" — trust-building, contrarian **(decided — see [smm.md](../strategy/smm.md))**
- "The PoC trap: why AI projects die between prototype and production" **(decided)**
- "How we scoped an AI project that saved a client 6 months of wasted budget" **(decided)**
- "What to ask before hiring an AI partner" **(decided)**
- Methodology posts explaining Discovery, POC, MVP, Production will likely outperform generic thought leadership *(source: content-and-growth.md)*

## Content Ownership
- Who owns content editing, review, and publishing once drafts exist? *(source: open-questions.md)*
- Which toolchain will actually power content capture and outreach? *(source: open-questions.md)*
