> Updated 27.03.2026. Every founder idea, todo, and speculative direction from all source documents. Nothing here is decided — for decisions, see [strategy/](strategy/).

# Ideas & Todos

This file preserves every idea, todo, and speculative thought mentioned across founder voice recordings, planning sessions, and working documents. Items are organized by theme. Nothing is lost.

Items marked with **(decided)** have already been captured in the strategy or website docs — they're listed here for completeness so you can verify nothing was dropped.

---

## Business & Sales

- Build a real post-first-contact sales pipeline — currently nonexistent **(decided — see [gaps-and-open.md](strategy/gaps-and-open.md))**
- Define the exact qualification path after first inquiry — when to route to AI Strategy Session vs Discovery vs direct scoping call *(source: open-questions.md)*
- Define minimum fields/questions founder should capture before first real conversation *(source: open-questions.md)*
- Explore Upwork or alternative marketplace despite founder's skepticism *(source: idea-backlog.md)*
- Explore whether large-company offline-business angle should be more central than mid-market digital buyers *(source: idea-backlog.md)*
- Define tighter ICP hypotheses before scaling outreach *(source: idea-backlog.md)*
- Figure out how to consistently source enough POC opportunities if faster delivery compresses engagement length *(source: idea-backlog.md)*
- Research how buyers actually select vendors — founder explicitly says "I have no idea" *(source: founder-notes.md §2)*

## Offerings & Packaging

- **Agentic POC variant**: 30–40% cheaper/faster POC using agentic approach. System doesn't exist yet — would need to be built during a project. Propose to UTR client first as test. *(source: founder-notes.md §6, §15)*
- Productize the AI audit / Discovery entry point more clearly *(source: idea-backlog.md)*
- Expose sample Discovery artifacts as trust-building material on the site *(source: idea-backlog.md)*
- **E-commerce product idea**: "Why not make a startup that does exactly this — a plug-in recommendation/agent system for any site?" *(source: founder-notes.md §3)*
- Offer in-house AI system setup for data-sensitive organizations as a standalone package *(source: idea-backlog.md)*
- Use CV/custom-model work as fallback differentiator if LLM services commoditize *(source: idea-backlog.md)*
- Offer BA-oriented spec consistency tooling as part of delivery quality *(source: idea-backlog.md)*
- Revisit custom CRM work in education only if a clear AI wedge appears *(source: idea-backlog.md)*

## Delivery Model & Economics

- Resolve staffing model for short projects if POC work becomes too compressed *(source: idea-backlog.md, founder-notes.md §13)*
- Figure out where to find people willing to work on short engagements and maintain loyalty *(source: founder-notes.md §13)*
- Future staffing model: juniors/mid-levels likely become unnecessary with AI-driven development; need seniors, strong mids for oversight, Leads for code review, full-time BAs *(source: founder-notes.md §8)*
- Decide how publicly transparent to be about full-path costs and durations — founder struggles between transparency and competitive concerns *(source: founder-notes.md §5)*
- Use freelancers or flexible collaborators for short bursts, with care around client ownership and continuity *(source: idea-backlog.md)*

## Content & Marketing

### LinkedIn Program
- Founder account: 1x/week or every 2 weeks — high-quality posts *(source: founder-notes.md §9)*
- Create multiple LinkedIn persona accounts with distinct backstories (developer, PM, BA, domain expert) — 3 posts/week each *(source: founder-notes.md §9, §15)*
- Comment engagement as part of the content routine, not just original posts *(source: idea-backlog.md)*
- Contact database building with Clay, Apollo, LinkedIn Helper, or alternatives *(source: founder-notes.md §15)*

### Content Pipeline (Telegram-to-LinkedIn)
- Build a Telegram-to-LinkedIn drafting pipeline — capture voice memos → transcribe → AI draft → human review → publish *(source: idea-backlog.md, founder-notes.md §15)*
- Two detailed technical specs exist in reference/: [telegram-pipeline.md](reference/telegram-pipeline.md) and [voice-drafting-system.md](reference/voice-drafting-system.md)
- Key risks identified: Telegram Bot API can't fetch old messages, Whisper hallucinates on silence, "done" signal UX is fragile, 5 sequential integration points with no retry mechanism *(source: telegram-pipeline.md)*
- Consider using n8n (open-source workflow automation) — has community templates covering ~70% of input stage *(source: telegram-pipeline.md)*
- Hosting: Fly.io or similar small-hosting setup *(source: idea-backlog.md)*

### Content Tooling
- Create a Claude Skill with example posts for LinkedIn content generation *(source: founder-notes.md §10, §15)*
- Build agent workflow with roles: marketer, technical reviewer, copywriter *(source: idea-backlog.md, content-and-growth.md)*
- Add human-likeness / anti-slop review stage before publishing *(source: idea-backlog.md)*
- Use Notion as the content planning board *(source: idea-backlog.md)*
- Eventually hire someone to refine AI-assisted posts once enough pipeline exists *(source: founder-notes.md §10)*
- Consider generating fictional small case studies for LinkedIn persona content *(source: founder-notes.md §10)*

### Article Ideas
- "When NOT to use an LLM" — trust-building, contrarian **(decided — see [gtm.md](strategy/gtm.md))**
- "The PoC trap: why AI projects die between prototype and production" **(decided)**
- "How we scoped an AI project that saved a client 6 months of wasted budget" **(decided)**
- "What to ask before hiring an AI partner" **(decided)**
- Methodology posts explaining Discovery, POC, MVP, Production will likely outperform generic thought leadership *(source: content-and-growth.md)*

### Content Ownership
- Who owns content editing, review, and publishing once drafts exist? *(source: open-questions.md)*
- Which toolchain will actually power content capture and outreach? *(source: open-questions.md)*

## Website & Brand

- Arrange professional photo shoot (find photographer, plan location/logistics) — nice-to-have, not a launch blocker *(source: founder-notes.md §15)*
- Invite people for team photo opportunity (combined with birthday/social event) *(source: founder-notes.md §15)*
- Distribute branded t-shirts for team photo event *(source: founder-notes.md §15)*
- Add privacy-respecting note near the contact form *(source: idea-backlog.md)*
- Test whether contact page should show direct LinkedIn cue or just the founder-led form presentation *(source: idea-backlog.md)*
- Show founder's photo or LinkedIn profile next to the contact form to humanize and increase submissions *(source: founder-notes.md §11)*
- Clarify brandbook status — are existing .docx files (brandbook_chatgpt_guide.docx, brandbook_chatgpt_visuals.docx) current? *(source: founder-brief-answered.md)*
- Which analytics tool? Plausible, PostHog, or Google Analytics? *(source: open-questions.md)*
- Is an ungated Discovery-artifacts CTA worth shipping in v1, or only after stronger case material exists? *(source: open-questions.md)*

## Internal Tooling

- Build the agentic development system/pipeline itself *(source: founder-notes.md §15)*
- Develop proprietary AI-native coding workflows *(source: founder-notes.md §15)*
- Explore QA bots using Playwright for automated testing of agent-built code *(source: founder-notes.md §15)*
- Build a BA tool that checks whether specs contradict each other *(source: idea-backlog.md, founder-notes.md §15)*
- Develop three-audience documentation format: docs that serve developers, business people, AND AI agents simultaneously *(source: founder-notes.md §6, §15)*
- Keep experimenting with role-based agent swarms: frontend, data, ML, DevOps, architecture, review *(source: idea-backlog.md)*
- Vision: future company where agents have roles, positions, make broader decisions beyond coding *(source: founder-notes.md §7)*
- Key interest: parallelism — agents should plan themselves and work in parallel *(source: founder-notes.md §7)*

## Strategic Thesis & Long-Term Direction

- Long-term outsourcing edge shifts into orchestration, architecture, specification quality *(source: idea-backlog.md)*
- Future of personal agents and API-ready systems could reduce need for certain custom work categories *(source: idea-backlog.md)*
- Internal company tools (optimization, RAG, secure in-house AI) may be more durable than generic AI website features *(source: idea-backlog.md)*
- Backend-heavy projects are easier to automate than broad full-stack projects *(source: idea-backlog.md)*
- The AI hype paradox: before, hype drove demand; now, hype about AI building AI makes clients think they don't need outsourcing *(source: founder-notes.md §5)*
- Personal agents will increasingly ship with backends/APIs for autonomous agents (MCP or OpenAPI specs) *(source: founder-notes.md §7)*
- Outsourcing will likely focus on internal company products — optimization, RAG systems *(source: founder-notes.md §7)*

## Proof & Case Studies

- Audit all current case studies ruthlessly *(source: idea-backlog.md)*
- Verify every metric and proof claim before using it again *(source: idea-backlog.md)*
- Identify which proof is from founder's personal track record vs company's own track record *(source: idea-backlog.md)*
- Which three case studies should become the flagship public proof set? *(source: open-questions.md)*
- Which outcomes are specific enough to publish safely under NDA? *(source: open-questions.md)*
- Turn methodology and artifacts into reusable sales support materials *(source: idea-backlog.md)*

## Unresolved Founder Tensions

These are genuine contradictions in the founder's thinking, flagged for explicit resolution:

- ~~**Team vs transparency**~~: **Resolved.** Conscious trade-off — present the network model as a team using honest-but-careful language: "The team is assembled specifically for your challenge." See [gtm.md](strategy/gtm.md) Team Presentation section. *(source: founder-notes.md §16, §18)*
- **Cost reduction claims**: Initially "half the cost," then backtracks — "50% sounds dumb." Settles on 30–40% reduction but exact figure needs decision *(source: founder-notes.md §16)*
- **Optimism vs despair cycle**: Oscillates between confidence and pessimism about finding clients *(source: founder-notes.md §16)*
- **Human necessity in specs**: States "without a human, probably no way" but then wonders if that too will be automated *(source: founder-notes.md §16)*
- **CV as differentiator**: Sees it as valuable but niche; doesn't pursue due to difficulty finding clients *(source: founder-notes.md §16)*
- **Frontend capability**: "We don't write frontend. Well, we can, but it's not what we offer" *(source: founder-notes.md §16)*
- **Company size target**: Varies from 50+ to 100+ to 500+ to 2,000 across recordings — partially resolved (complexity over headcount) but numbers still inconsistent *(source: founder-notes.md §16)*
- **Methodology visibility**: Whether showing Discovery/POC/MVP/Production phases is a differentiator or a risk — decision is to lean into transparency but flagged as unresolved *(source: founder-notes.md §12)*

## Post-Launch

- Name the methodology externally ("Remilink Validation Framework" or "Our Process") *(source: ROADMAP.md)*
- One-page sales PDF or visual walkthrough *(source: ROADMAP.md)*
- Downloadable PDF (methodology + case studies + pricing) — ungated *(source: ROADMAP.md)*
- Lightweight follow-up workflow for inbound leads *(source: ROADMAP.md)*
- Inquiry tracking discipline *(source: ROADMAP.md)*
- When does a CRM become necessary? What event triggers that decision? *(source: open-questions.md)*

## Explicitly Deferred

These were explicitly decided against for now:

- Picking new industries (prove current ones first)
- Building complex internal tooling or agent swarms
- Conferences/events (ROI too slow)
- Hiring a salesperson (can't brief them until positioning is battle-tested)
- Paid advertising (volume too low, positioning untested)
- Social media beyond LinkedIn
- Computer Vision as a service line
- Complex CRM integration
- Calendar-heavy booking flows
- Elaborate automation before basic content and inquiry systems work
- Whether ISO/IEC compliance language should appear anywhere *(source: open-questions.md)*
- Whether to offer Discovery artifacts as secondary CTA *(source: open-questions.md)*
- Are persona-account experiments worth the complexity this early? *(source: open-questions.md)*
