---
title: "[CLAUDE] RemiLink — Structured Founder Notes"
---

# RemiLink — Structured Founder Notes

> Extracted from voice recordings dated 25.03.2026. Four transcriptions totaling ~110KB, plus one written competitor analysis. Every detail, idea, TODO, and thought from the founder is captured below, organized by topic. Where the same topic appears in multiple recordings, information is merged and cross-referenced.
>
> **Note on sourcing**: Items marked with *(founder directive)* were communicated by the founder outside the recordings. Items marked with *(editorial)* are reasonable inferences not directly stated in the transcriptions.

---

## Table of Contents

1. [Company Identity & Brand](#1-company-identity--brand)
2. [Buyer Personas & ICP](#2-buyer-personas--icp)
3. [Domain Specialization](#3-domain-specialization)
4. [Service Offerings & Methodology](#4-service-offerings--methodology)
5. [Pricing](#5-pricing)
6. [AI-Native Development Approach](#6-ai-native-development-approach)
7. [Future Vision — Agent Swarms & Automation](#7-future-vision--agent-swarms--automation)
8. [Team & Founder Background](#8-team--founder-background)
9. [Sales & Marketing](#9-sales--marketing)
10. [Content Strategy for LinkedIn](#10-content-strategy-for-linkedin)
11. [Website Vision](#11-website-vision)
12. [Competitors & Differentiation](#12-competitors--differentiation)
13. [Economics & Sustainability](#13-economics--sustainability)
14. [Current Limitations & Honest Gaps](#14-current-limitations--honest-gaps)
15. [Ideas & TODOs from Founder](#15-ideas--todos-from-founder)
16. [Contradictions & Open Questions](#16-contradictions--open-questions)
17. [Notable Quotes](#17-notable-quotes)

---

## 1. Company Identity & Brand

### Brand Name
- **"Remi"** means friend/helper (referenced from Urban Dictionary)
- Core concept to preserve: trustworthiness, friendliness, someone who is happy to help
- The brand must convey approachability and trust ("trastovost'")

### Brand Philosophy
- **Anti-hype stance**: The founder explicitly rejects aggressive marketing tactics and empty promises
- **Value and trust** are the two pillars — not hype, not pressure, not "information noise"
- The company focuses on usefulness, not frequency of engagement
- Direct quote: "We are not news channels"

### AI Native Identity
- RemiLink is an **AI Native company** — uses best practices, strong models, and pipelines for development
- Has its own proprietary flow/workflow tailored to their specifics and tasks
- This is a product they provide to all clients — but the client doesn't pay extra for it; instead they save money by working with RemiLink
- **Full code ownership**: Nothing ships without human review, validation, and testing
- "There is not a single piece of code that hasn't been reviewed, validated, tested, and inspected by us"
- **Enterprise tooling flexibility** *(founder directive)*: For enterprise clients with restrictions on specific coding tools or AI models, RemiLink always aligns the exact toolset and model stack with the client — including fully on-prem instruments where required
- **Data engineering best practices** *(founder directive)*: AI solutions are built on a proper data engineering foundation — something many competitors neglect or do poorly. This is a critical differentiator.
- **Team expertise at individual prices** *(founder directive)*: Even on 1–2–3 person projects, the client gets access to the experience and expertise of the entire team of engineers and architects specializing across all AI disciplines. You pay for a couple of people but get the collective judgment of the full bench.

### Founder's Emotional Context
The founder opens the main recording with an extended personal reflection about stress, self-doubt, feeling inadequate, and the pressure of starting an AI company at a time when "everyone thinks AI can build itself." Direct quotes:
- "Стресс не ушёл" (the stress hasn't gone)
- "Ты ощущаешь, что тебе нужно что-то делать, а ты не делаешь"
- "Желание всё бросить. Чувство, что ты не дотягиваешь."

While personal, this context informs the authenticity of the brand voice and the founder's motivation.

### Tone & Voice
- Friendly, not corporate
- Professional but not intimidating
- Anti-pressure: "If you want real value, leave a request. We will analyze it and connect you with a top specialist to discuss your specific task, no pressure. Our work is a pleasure for us, so in a friendly atmosphere we can discuss your task."
- The founder is skeptical of tactics like "Get a response within 10 hours!" — considers this overplayed
- The anti-hype framing is set against a backdrop of "information noise" — "информация повсюду, bullshit на каждом шагу каждые 5 минут"
- The phrase "Трастовость в LA" (trust in value) appears as a closing shorthand for the entire brand philosophy

---

## 2. Buyer Personas & ICP

### Target Titles
- CTO
- VP of Engineering
- Engineering Manager
- Product Owner / Product Manager
- CEO / Founder
- Potentially: HR (for certain content)

### Company Size
- **Original range**: 100–2,000 employees (acknowledged as "a very big spread")
- **Refined target (decided 26.03.2026)**: Mid-sized and larger companies with complex product catalogs and/or real operational complexity
- Initial thought was 50+, but reconsidered — companies with ~100 people might not have the budget
- **Ideal**: Large companies, possibly offline businesses with 500+ employees, where more long-term, larger-scale solutions are needed

### Company Types
- Specialized online stores (e-commerce) — auto parts, clothing, cosmetics, building materials
- Companies with strict data security policies (financial, healthcare, insurance)
- Any business that hasn't tried AI yet, doesn't know where to start

### Purchase Triggers
- Competitors have already tried or implemented similar AI solutions
- Corporate data security policy that prohibits using external AI vendors (drives in-house AI demand)
- Board pressure to adopt AI *(editorial)*
- Specific operational pain points *(editorial)*
- Failed attempt to build in-house *(editorial)*

### Buyer Fears
- Spending budget on a prototype that never reaches production ("потратить деньги и не получить ничего")
- Long timelines and high costs scaring stakeholders
- Picking the wrong partner *(editorial)*
- Getting slide decks instead of working systems *(editorial)*
- Internal team resistance *(editorial)*

### Lead Sources
- **Primarily LinkedIn** — this is where the buyers are
- Potentially: referrals, articles, content marketing
- Upwork mentioned but characterized as "already dead"

### Vendor Selection Process
- Founder explicitly states: "Как выглядит их процесс выбора вендора, я без понятия" (I have no idea)
- No data available — needs research or client interviews

### AI Maturity Segmentation
- **AI Audit**: For companies at the beginning of their AI journey — no prior AI experience
- **Other offerings**: For any medium/high AI maturity level — companies that already have some AI experience or understanding

### Psychographic Profile of Ideal Client
- "Adequate" clients who understand reality
- People who may have already been somewhere, tried something, and understand the process
- Not people who fall for empty promises
- "I would want to work with those who understand this, not with those who fall for empty promises"

---

## 3. Domain Specialization

### Domain 1: E-Commerce (Primary)

**Core Use Case — AI Shopping Assistants / Intelligent Search**
- Intelligent chatbots (founder prefers "shopping assistants")
- Help users find products via natural text queries
- Consider not just structured product characteristics but also:
  - Product descriptions (unstructured text)
  - Product reviews/comments
- The agent should also: make sales, consult, recommend products
- Could be built on LangChain or similar frameworks

**Target Companies**
- Specialized online stores with complex product search — many nested categories, thousands/tens of thousands of products
- The simpler the catalog (few categories, few hundred products), the less the need
- **Ideal example**: A large auto parts store — navigate by brand, component, model year, model, find the right part, plus analogs

**Startup Idea (Offhand)**
- Founder briefly considers: "Why not make a startup that does exactly this? A plug-in recommendation/agent system for any site?"

### Domain 2: EdTech (Secondary)

**Note**: In the transcription, the founder sometimes says "adtech" but the actual use cases described are **EdTech**. There is no adtech specialization.

**Current Work**
- Building a CRM for an online school of math, logic, and programming
- "More of a product, not specifically AI-focused"

**Possible AI Use Cases (Undeveloped)**
- AI tutoring agents that can answer homework questions
- RAG + agents for educational materials (lecture notes, textbooks)
- Possibly AI teachers (founder notes: "This is a more complex topic, needs careful thought")

**Founder's Assessment**
- "We are not really experts in this sphere"
- "This is a shady area. Need to think about it."
- Marked as needing further thought
- Idea: look at Upwork to see what people in this domain are requesting

### Domain 3: In-House AI / MLOps (Emerging)

**Concept**
- Setting up AI agents for companies internally on their own infrastructure
- All data stays in-house, secure

**Services**
- Task analysis
- Compute capacity estimation
- Cost assessment
- Procurement and setup assistance

**Target ICP**
- 50–1,000+ employees
- Financial companies, healthcare, insurance, or any company with strict data policies

**Trigger**: Corporate data security policy that prohibits using external AI vendors

### Computer Vision — Considered and Shelved

- RemiLink can also do computer vision (CV), not just LLM-based work
- **Advantage of CV**: Requires custom development — labeling datasets, training custom models, selecting architecture, inference and training. Harder for AI to commoditize.
- **Problem**: Where to find CV clients is unclear. Very narrow niches right now.
- **Decision**: Do not change the whole company concept to CV, because LLM work is still a huge percentage of the market
- Doing CV through LLMs would be: slower inference, significantly more expensive, and hard to assess quality

### CRM — Considered and Rejected
- Founder extensively talks himself through CRM: considers it → realizes small companies can't afford custom development → big companies already have CRMs → asks "where is AI in this?" → finds no clear AI angle → rejects it
- Reasoning chain in the recording: "Кому нужен CRM — маленьким компаниям? У них нет бюджета. Большим компаниям? У них уже есть CRM. А где тут AI?"

---

## 4. Service Offerings & Methodology

### Offering 1: AI Development (Full Lifecycle)

#### Discovery Phase
- **Duration**: 1–3 weeks
- **Cost**: $5,000–$10,000
- **Team**: Architect, one developer (for quick prototyping), one business analyst
- **Deliverables**:
  - VBS (Vision & Business Strategy)
  - VBO *(acronym undefined in recordings — needs clarification)*
  - PRD (Product Requirements Document)
  - Technical Blueprint
  - Commercial Proposal
- **Important**: These artifacts are **portable** — the client can take them to any other company or develop in-house
- **Process**: Meetings with all stakeholders to gather product and technical requirements; all documented
- **Internal breakdown**: ~2 weeks of calls with stakeholders + ~1 week preparing artifacts
- If the project looks simple, POC can start without detailed Discovery

#### POC (Proof of Concept) Phase
- **Duration**: 2–4 months
- **Cost**: ~$15,000–18,000/month
- **Team**: Architect (part-time), 2 developers, 1 business analyst, 1 project manager (part-time)
- **Approach**: Deliberately **no heavy engineering** — the goal is purely to validate the AI concept
- Demo interface with real data but without tight integration into existing systems
- "Done on the side, on a shoestring" intentionally to save budget
- **Consulting during scope**: "If we need to prove product search works in a category, we do it for ONE category, not two, three, ten"
- Key philosophy: Don't waste money proving the same thing multiple times

#### MVP Phase
- **Duration**: 3–5 months
- **Team**: Same as POC plus possibly a tester; primarily backend developers
- Real engineering effort begins:
  - Integration with the main application
  - Deployment
  - Production preparation
- End of MVP: Solution can be rolled out to a subset of users and a subset of products

#### Production Phase
- **Duration**: 4–7 months
- **Activities**:
  - Full scaling to all product groups and all users
  - Monitoring and automation
  - Guardrails
  - Accuracy and speed optimization
  - Production data pipelines
  - Full production-grade infrastructure

**Total Timeline (all phases sequential)**: ~8–9 months ("like having a baby")

### Offering 2: AI Shopping Assistants for E-Commerce
*(See Domain 1 above for details)*

### Offering 3: In-House AI Systems / MLOps
*(See Domain 3 above for details)*

### Offering 4: AI Audit / Strategic Workshop

- Talk to business stakeholders, review all their ideas
- Talk to the technical team, examine existing architecture, technical stack, data, ecosystem
- Prepare a summary and artifacts that tell the business:
  - Which ideas are feasible, with estimated timeline, cost, effort, and expected quality/results
  - Which ideas are NOT feasible (e.g., insufficient data) and what data needs to be collected
  - **New opportunities**: "You have data and infrastructure to do THIS thing you haven't considered"
  - Comparisons to similar clients' experiences
- All packaged into documentation
- Can follow up with commercial proposals for development or deeper Discovery on specific tasks

**ICP**: CTO, Product Owner, CEO/Founder — broader than other offerings
**Target companies**: Any business that hasn't tried AI yet, doesn't know where to start
**Duration**: 1–3 weeks
**Cost**: $5,000–$10,000 (same as Discovery)
**A 2-hour session**: Free
**A full week of stakeholder auditing**: ~$5,000

### Key Differentiators Across All Offerings

1. **Radical transparency** — Honest and transparent in estimates (time and cost), realistic timelines
2. **Value-first approach** — No selling on hype or empty promises
3. **Budget optimization** — Actively consult clients to avoid unnecessary spending, especially during scoping
4. **Client visibility** — Weekly sprint calls, weekly demos, weekly reports to the client: "the client constantly knows what's happening"
5. **Full business immersion** — The company fully immerses itself in the client's business problem
6. **Expert team, no management burden** — Client doesn't have to recruit, vet, manage, or dismiss a team: "Like a brigade of super-experienced, excellent builders who come, do everything, and leave"
7. **Post-project availability** — Team remains available for questions even after project completion
8. **World-class quality at lower cost** — "We develop at the level of world-renowned outsourcers, but our price is 4–5 times cheaper. For absolutely the same quality."

### Vendor Management as a Service
- RemiLink takes on LLM vendor management — the client does not worry about the cost of how code is written
- RemiLink pays for subscriptions and builds workflows
- **Key framing**: The cost of AI tooling/subscriptions is entirely RemiLink's problem, not the client's — it's abstracted away. The client doesn't even need to think about it.
- **On-prem option**: Can guarantee all development happens on local infrastructure, demonstrate that the entire codebase stays local, and help clients deploy locally

---

## 5. Pricing

### Pricing Model
- **Fixed price** for Discovery and AI Audit
- **Can be fixed price** for POC
- **Primarily Time & Materials** for larger phases

### Price Table

| Phase | Duration | Cost | Team |
|-------|----------|------|------|
| Free strategy call | 2 hours | Free | Founder/Architect |
| AI Audit (full) | 1 week | ~$5,000 | Architect, BA |
| Discovery | 1–3 weeks | $5,000–$10,000 | Architect, 1 developer, 1 BA |
| POC | 2–4 months | ~$15,000–18,000/month | Architect (PT), 2 devs, 1 BA, 1 PM (PT) |
| MVP | 3–5 months | ~$15,000–18,000+/month | Same + tester, scaling devs |
| Production | 4–7 months | Varies (team scales) | Growing team |

### Transparency Dilemma
- Founder leans toward showing pricing transparently, consistent with company philosophy
- But worries that showing the full timeline (8–9 months, ~$80K+ for Discovery + POC) might scare off prospects
- Competitors "promise anything, golden mountains"
- Considered renaming phases (e.g., not calling it "POC" to avoid signaling it's not even production yet)
- **Ultimately leans toward keeping it transparent**
- **iPhone vs. Android analogy** (self-critiqued): Founder compares RemiLink pricing to buying an iPhone vs. Android — you get the same thing but cheaper (inverted from the usual analogy). Then says: "Может с айфоном пример неудачный" (maybe the iPhone example is a bad one).

### The AI Hype Paradox (Market Context)
- Before: hype that everyone wanted AI → drove demand for AI outsourcing
- Now: hype that AI can build AI → clients think they don't need outsourcing anymore
- This is a structural market challenge, not just a positioning issue
- The value proposition shifts to expertise in orchestration, specification, architecture, and quality assurance — things AI alone can't yet do reliably

### Entry Products (Low-Barrier)
- Free 2-hour strategy call
- Paid AI Audit ($5,000 for a week)
- Paid Discovery ($5,000–$10,000)
- Fixed-price pilot/POC

---

## 6. AI-Native Development Approach

### Core Claims
- AI-native company using best practices, strong models, and pipelines
- Enables **30–40% faster development** than competitors
- Has their own flow tailored to their specifics
- Customer doesn't pay for this; instead saves money

### Quality Assurance
- Full ownership of code quality
- Nothing ships without human review, validation, testing
- "No piece of code goes out without human verification"
- RemiLink doesn't just delegate to AI — they review, design the hardest parts, and verify everything

### Agentic Approach (Marketing Angle)
- Offer an "agentic-based approach" where POC is significantly faster and cheaper
- Perhaps 30–40% cheaper (not 50%, which "sounds dumb")
- Original 2–4 month POC could shrink to 1–2 months
- For POC (not production), quality caveats are acceptable
- **Proposed marketing messaging**: "We have a standard approach AND we have an agentic approach for POC"
- **Visual marketing idea**: Show two columns side by side — standard approach (2x longer, 2x more expensive) vs. agentic approach — as a direct comparison
- Detailed Discovery phase must precede any POC, with everything clarified before development starts

### Current State of AI-Driven Development
- The founder developed an entire application for an online school without writing a single line of code by hand — now has 60,000+ lines of code
- The role of the human is becoming that of an operator: correctly specifying requirements, understanding architecture, composing the application plan
- Tasks that used to take several days can now be done in a couple of days
- Backend-only projects are easier to automate than full-stack

### Current Limitations
- AI doesn't handle corner cases well — adds scenarios that weren't specified
- Sometimes adds things that seem logical to it but were intentionally left unspecified
- **The bottleneck is testing** — everything needs to be tested afterward
  - Potential solution: QA bots using Playwright for automated testing; spinning up the app on a test environment
- **Specification writing may be THE primary bottleneck of the future** — not just "another bottleneck." The founder states: "Следующий ботлнек будет в будущем — это именно написание спецификаций и последующие тестировки." He then wonders if even this might be automated as AI improves.
- File-level inaccuracies: when writing specs/PRDs, AI sometimes paraphrases or summarizes instead of being exact
- Information that should be in separate spec files gets mixed in, with cross-references missing

### Documentation Format Innovation
- **Idea**: Change documentation format to serve three audiences simultaneously: developers, business people, AND AI agents
- "Нужно будет поменять формат этой документации, чтобы он был для разработчиков, для бизнес-людей и для агентов"
- This three-audience documentation concept could become a differentiator

### The "Programming Will Never Be the Same" Proof Point
- The 60,000+ line application for an online school (built entirely without writing a single line by hand) is the founder's personal proof that "программирование уже точно не станет прежним" (programming will definitely never be the same again)
- This causal link — personal experience → industry prediction — is core to the AI-native messaging

---

## 7. Future Vision — Agent Swarms & Automation

### Swarm of Agents Concept
- A company where agents have their own roles, positions, and make broader decisions beyond just coding
- Sub-agents for: frontend, data engineering, ML engineering, DevOps
- Agents communicating with each other (possibly through a simple shared file)
- A critic agent (like a team lead)
- An architect agent
- Each agent develops its own part of the system

### Parallelism
- The most interesting aspect of the swarm
- Should be able to plan itself and work in parallel on multiple tasks
- If one repository: work split atomically to avoid large merge conflicts
- If separate repositories: each can have its own agent
- If specifications for 10 features exist: logically split into non-overlapping groups and launched in parallel

### Two Approaches to Parallel Work (Considered)
1. Multiple agents work on the same feature in parallel, compare results, pick best (deemed **too costly**)
2. Task divided among specialized sub-agents (**preferred**)

### The Existential Question for Outsourcing
- If a product owner and architect can just write specs and call agents that build, test, integrate, and deploy — where is the place for outsourcing companies?
- **Answer**: The value proposition becomes expertise (knowing how to write specs for quality AI output), orchestration (proprietary workflows), architecture expertise, and consulting

### Personal Agents and APIs (Future Landscape)
- Reference to Andrej Karpathy's case: set up OpenClaw at home, replaced 6 smart home apps via reverse engineering to connect devices that didn't originally have APIs
- Prediction: devices will ship with backends and APIs for autonomous agents (MCP or OpenAPI specs)
- Extends to: online stores, social networks, marketplaces, architecture firms, home renovation search
- **Implication**: outsourcing will likely focus on internal company products — optimization, RAG systems, and similar

---

## 8. Team & Founder Background

### Founder
- **Education**: Bachelor's in pure mathematics; Master's in theoretical and applied statistics
- **Experience**: 11 years in AI/ML (since 2015)
- **Previous roles in outsourcing companies**: Senior, Lead, Architect — in AI departments
- **Previous roles in product companies**: Architect, Engineering Manager, VP of Data Science
- **Role in projects**: Personally involved in every project as the chief architect; final decision-maker

### Origin Story
"After extensive experience in outsourcing companies, on both sides — vendor and client — we understood the needs of companies that turn to outsourcing, and how to approach these needs from the business side of the outsourcing company to bring maximum value. That's why we decided to create such a company."

### Team Reality
- Currently: **Founder + network of people** who can be brought in as needed
- These are real people with shared photos, shared projects, long-term collaboration history
- Client flow is currently unstable, so keeping a large permanent staff isn't feasible yet
- **Founder explicitly says NOT to present it this way on the website** — present it as a team

### Social Proof
- Many case studies, but most are under NDA
- Most case studies are NOT in LLM/agents — they're in classical ML, Computer Vision, NLP
- 50+ projects over many years (founder's career, not the company per se)

### Technical Team Composition (Roles Available)
- AI Developers
- ML Engineers
- MLOps Engineers
- DevOps Engineers
- Data Scientists
- Data Analysts
- AI Architects
- Business Analysts
- Project Managers
- **Note**: Frontend is NOT their focus — "We don't write frontend. Well, we can, but it's not what we offer."

### Proposed Future Team Structure
- **Juniors and even mid-level developers likely become unnecessary** with AI-driven development
- Need seniors who can: run agents against specifications, verify output, maintain documentation, write and improve workflows
- **Strong mid-level developers** may still be needed for oversight
- **Lead (not senior)** performs code review, ensures architectural compliance, verifies no keys are exposed
- **Business Analyst (BA) on every project full-time**: constantly clarifies requirements, fully immersed in the project, writes specifications, ensures they don't contradict existing specs, negotiates with the client
- BA needs to be full-time because development speed will increase dramatically

---

## 9. Sales & Marketing

### Current State
- **Sales capability**: Zero. No pipeline, no experience.
- **Readiness paradox**: RemiLink is ready to receive clients and confident about quality, but the flow of clients doesn't exist.
- "The only thing we don't have is clients, marketing, and sales. Sales are not set up at all."

### Planned Channels

#### LinkedIn (Primary)
- **Personal page**: Higher-quality posts, once per week or once every two weeks
- **Other accounts (personas)**: Three posts per week each
- All pages should include contact addition/outreach activity
- Collect contact databases through tools like **Clay** or **Apollo** (or alternatives to be explored)
- Send outreach through **LinkedIn Helper** (or alternatives)

#### LinkedIn Personas
- Must NOT look like salespeople
- Should feel like **real, living people** — a developer writing about technical topics, a project manager, a business analyst, a domain expert
- Each persona should have its own story/backstory
- Personas could be documented in DOCS
- Initially focusing on two domains: e-commerce and EdTech

#### SMM
- Those accounts post content
- The founder posts less frequently but more valuable content personally

#### Upwork
- Mentioned but characterized as "already dead"

### Sales Pipeline
- **Post-first contact**: Currently nonexistent ("Пока никак") — marked as TODO
- Entry points: free 2-hour call → paid Discovery/Audit → POC → MVP → Production
- No CRM needed for now (low volume expected)

### Lead Handling
- Form submissions should go to **info@remilink.com**
- Response handled by the architect/founder within **24 hours**
- No calendar integration (founder believes nobody books calls through website calendars anymore)
- No automated responses for now — all manual

---

## 10. Content Strategy for LinkedIn

### Two Target Audiences
1. **AI developers** — senior-level, lead-level, architects
2. **Business audience** — product managers, business analysts, founders, CEOs, CTOs, HR

### Content Philosophy
- Main concept: **value and trust**, not hype
- Should have a proprietary style, proprietary value
- "Not something copied, not something made just to increase visibility"
- Work for the long term, build trust, build expertise, focus on value
- Posts should demonstrate domain expertise, not just rebroadcast news

### Content Format Considerations
- Posts are preferred over articles (articles are long, nobody reads them unless very interesting)
- Should not reveal too much at the current stage of the company — explicit content filter: "не раскроют чего-то лишнего, чего не следовало бы раскрывать на моем этапе работы"
- **Initial content purpose**: "Больше ещё даже не для клиентов, а просто для социальной поддержки странички" — early posts are for page presence, not lead generation
- **LinkedIn engagement**: Writing comments on other people's posts is an essential activity alongside posting — "конечно, надо будет ещё писать комментарии"

### Content Production Pipeline Ideas
- Use a **Notion board** for post management
- Build a small app on **Fly.io** that receives Telegram voice messages, transcribes them, and transforms them into LinkedIn posts
- Create an **AI agent swarm** for post writing:
  - A marketer sub-agent
  - A technical expert sub-agent
  - A copywriter sub-agent
  - Connected to web search and domain expertise
  - A final "human-likeness" check agent
- **Claude Skill idea**: Create a Claude Skill with example posts for generating LinkedIn content — "скиллы типа для Клода Скилл, чтобы написать пост, добавить туда примеры постов"
- Understood that AI output will need human rewriting
- Eventually hire someone to refine/review posts
- **Review workflow**: Hired person refines posts, founder reviews them on a Notion board; person then copy-pastes and schedules posts
- **Fake case studies for personas**: Founder considers generating fictional small case studies for LinkedIn persona accounts — "можно нагенерить этих кейсов каких-то и потом просто делать посты"

### Founder's Core Content Insight
"We are so overloaded with content now. Everyone is sick of it. These constant LinkedIn posts that are just empty, there are thousands of identical ones, they're all AI-generated, they have absolutely no value. It's disrespect to yourself to even read it. The person who wrote it possibly didn't even bother to read it. That's why I would build everything around VALUE."

---

## 11. Website Vision

### Biggest Problem with Current Site
- **Overloaded**: Too much text
- **No specialization**: "The site says we do everything for everyone"
- **Not targeted**: "Millions of proofs and descriptions that nobody reads"
- "It's targeted at nobody"

### Desired First Impressions (5-Second Intervals)
1. **First 5 seconds**: Site is visually convenient, interesting, and attractive enough to give it a chance
2. **Second 5 seconds**: Content hooks the visitor; opinion forms that "this is possibly an interesting site, I should read more"
3. **Third 5 seconds**: "Interesting, I need to study the information on this site in detail"

### Desired Outcome
The founder wants a VP-level visitor to say to a colleague: "I found potentially good guys for implementing that AI project idea we were discussing, remember?"

### What Would Make the Founder Proud
- Site tailored to their specialization and ICP
- Well-thought-out contact form
- The 5-second impression sequence working as designed

### What Would Feel Like Wasted Time
- If the site becomes visually beautiful but the content remains generic ("everything for everyone") without specific client targeting

### Primary CTA
- Fill out the contact form → submissions go to **info@remilink.com** → wait for a response
- **Empathy insight**: The founder acknowledges that he himself, as a visitor, doesn't like filling out forms: "Но мне не хочется её заполнять и ни с кем общаться, даже если меня это ни к чему не обязывает." The site must overcome this reluctance.
- **UX idea**: Show the founder's photo or LinkedIn profile next to the contact form — "Может, нужно какое-то фото человека, с кем он будет общаться, или сразу линкедин человека"
- **Secondary idea**: Offer a downloadable PDF describing their approach — something a prospect can share with their team to evaluate RemiLink as a vendor (concern about competitors copying it)

### Technical Details
- Current form uses **formsubmit.co** — founder thinks this isn't great and should be replaced
- No CRM integration needed for now
- No analytics currently — needs to be added (post-launch is acceptable)

### Photo Requirements
- Need professional photos for the website
- Welcoming, not intimidating atmosphere
- Professional photographer specializing in business/work photography
- Photo of the founder personally
- Consider inviting others for a "team" photo
- **Location challenge**: No photogenic zones at the current location; would need to go somewhere — a studio or to Kyiv
- **Team photo logistics**: Idea to invite friends/former colleagues to a birthday/social event, give branded t-shirts ("футболочки"), hire photographer
  - People considered: Dima, Diana, Vova, Katya, Katya's husband, Zheka, Taras (some live nearby — "на спате")
  - Complications: Tamara would "definitely visit the site and see the photos," causing social issues; most candidates were ruled out due to various complications

---

## 12. Competitors & Differentiation

### Analyzed Competitors (from `docs/notes/text/`)

#### 1. Competitor A (✅ Done)
**What they do well**: Stylish website, specific case studies with real client names, founders info and photo, FAQ section, services menu specific to 4 options, collapsed Discovery blocks, clear process with real photos, digestible text, relevant blog posts, additional CTA (leave email, get discovery artifacts sample)
**What they get wrong**: No domain selection (generic "Dedicated Engineers & Custom AI/ML Development"), confusing use case navigation, overdesigned page elements, blog design doesn't match site, discovery artifact CTA poorly designed
**Questionable**: Embedded Calendly — founder prefers submission form
**How we're different**: They're engineers trying to do AI; we specialize in AI. We have a clear framework. Our expertise allows consulting. We're AI-native with own workflows.

#### 2. Competitor B (✅ Done)
**What they do well**: Strong social proof (Clutch badges), "We build our own AI coding tools," light/non-pressure design, clear industries with real person reps, strong case studies with real clients and feedback, nice blog from developer perspective, services described in weeks with price ranges, privacy-respecting form
**What they get wrong**: Main page overloaded (20-40 seconds to read), looks engineer-made without UI/UX, too much text in Industries, feels text-heavy despite moderate actual content (due to plain design)
**Questionable**: "AI Tools for Software Development" practical guide — unclear if serves end goal, ISO/IEC compliance mention — needs validation, doesn't mention PoC/MVP/Production phases
**How we're different**: We emphasize transparency, code ownership, AI-nativeness, and clear project workflow

#### 3. Competitor C (✅ Done)
**What they do well**: Stylish (with some classic/Accenture notes), use cases, team, FAQ, founder likes the concept overall
**What they get wrong**: Some sections overdesigned, interfere with content perception — looks nice but drains the "user content token budget"
**Questionable**: No methodology description (Discovery/PoC/MVP/Production) — might aim at clients ready to invest large sums upfront
**How we're different**: World-level quality at 3–5x cheaper, AI-native speed, clear standardized approach, consulting and AI audit capability

#### 4. Competitor D (✅ Done)
**What they do well**: Very specific on conversational AI, minimalistic and clear design
**What they get wrong**: Not clear in first 5 seconds it's outsourcing not a product company, too plain — looks vibecoded without professional UI/UX
**How we're different**: Broader specialization

### Cross-Competitor Pattern
Several competitors don't mention Discovery/PoC/MVP/Production phases at all. The founder wonders whether this is because they "have a better paradigm," are "explicitly not mentioning it," or "aim at clients ready to invest large sums upfront." This is a strategic signal: RemiLink's explicit methodology transparency could be a differentiator — or could scare away certain clients. Unresolved.

#### 5. Competitor E (❌ TODO)
#### 6. Competitor F (❌ TODO)

---

## 13. Economics & Sustainability

### Core Economic Problem
With AI accelerating development speed:
- POC = 1–2 months instead of 2–4
- MVP = shorter too
- Previously: POC + MVP = ~9 months of guaranteed work; time to find next project
- Now: living on POCs alone would mean 5–10 POCs per year — practically one every month
- "Where do I find this many clients, I have no idea"

### Conversion Chain Concern
- POC → MVP → Production is the ideal path
- If POC succeeds but client doesn't proceed to MVP, and there's no next POC, what happens to the hired person who only worked 1–2 months?

### Staffing Dilemma
- Need someone who can do short POCs
- Specific concern: "Где искать этих людей, что это за люди, какие это люди, как их удерживать, чтобы они работали на таких коротких дистанциях" — where to find people who will work on short engagements and stay loyal
- Freelancer? But must be full-time and must not poach the client
- No resolution found in the recording

### Ideal Scenario
- Large companies (500+ employees) where more long-term, larger-scale solutions are needed
- These provide sustained engagement rather than quick POCs

---

## 14. Current Limitations & Honest Gaps

1. **No sales pipeline** — "Sales are not set up at all"
2. **No analytics** — Nothing installed on the current site (to be added post-launch)
3. **No CRM** — Not needed yet at current volume
4. **Thin social proof** — Most case studies under NDA; most experience is in classical ML/CV/NLP, not LLM/agents
5. **Team presentation vs. reality** — Network model, but needs to be presented as a team
6. **EdTech expertise unclear** — "We are not really experts in this sphere"
7. **No professional photos** — Needed for the website, logistics challenging
8. **Frontend capability gap** — "We don't write frontend. Well, we can, but it's not what we offer."
9. **Agentic development system doesn't exist yet** — Proposed to UTR client but would need to be built during the project itself
10. **No competitors/inspirations list** — Partially addressed in text notes (4 of 6 analyzed)
11. **Upwork is "already dead"** — No viable alternative identified yet
12. **BA tooling gap** — Needs a tool to check that specifications don't contradict each other

---

## 15. Ideas & TODOs from Founder

### Business & Sales
- [ ] Set up LinkedIn outreach: define ICP, form hypotheses, create accounts, messaging
- [ ] Build a sales pipeline post-first-contact (currently nonexistent)
- [ ] Propose a faster/cheaper agentic approach to UTR client (30% cheaper, ~2 months)
  - UTR project details: integration, search across data; tasks estimated at 5–6 days / 8 days each; original estimate ~3–4 months
  - Would need to "sit down and validate everything, not just write code but do analytics, figure out fields with different meanings"
  - The agentic system would need to be built during this project as a proof point
- [ ] Create a downloadable PDF describing RemiLink's approach (for prospects to share internally)
- [ ] Complete competitor analysis (Competitor E and Competitor F remaining)

### Website
- [ ] Develop the website as the primary sales conversion tool
- [ ] Replace formsubmit.co with info@remilink.com routing
- [ ] Set up website analytics (post-launch)
- [ ] Arrange professional photo shoot (find photographer, plan location/logistics)
- [ ] Invite people for team photo opportunity (combined with birthday/social event)
- [ ] Define design system: colors, forms, typography
- [ ] Create a detailed site plan before development
- [ ] Consider a "privacy-respecting" note on the contact form (inspired by Competitor B)
- [ ] Consider showing founder's photo or LinkedIn link next to the contact form (to humanize and increase submissions)
- [ ] Distribute branded t-shirts for team photo event

### Content & Marketing
- [ ] Form LinkedIn post ideas from voice notes (value + trust, not hype)
- [ ] Create persona backstories for LinkedIn accounts
- [ ] Consider generating fictional case studies for persona LinkedIn content
- [ ] Consider building Telegram-to-LinkedIn post pipeline (Fly.io app)
- [ ] Explore Notion board for post management (check for Notion MCP or API)
- [ ] Create a Claude Skill with example posts for LinkedIn content generation
- [ ] Consider building an AI agent swarm for post writing (marketer + tech expert + copywriter sub-agents)
- [ ] Write about the agentic approach on the company website
- [ ] Include LinkedIn comment engagement as part of the content routine

### Internal Tooling
- [ ] Build a tool for Business Analysts to check specification consistency
- [ ] Build the agentic development system/pipeline itself
- [ ] Develop proprietary coding workflows
- [ ] Explore QA bots using Playwright for automated testing of agent-built code
- [ ] Develop the three-audience documentation format (developers, business, AI agents)

### Content Ideas for LinkedIn (Specific)
> *Note: These are editorial suggestions based on the founder's content philosophy, not topics he named in the recordings.*
- [ ] Post about AI-native development approach and what it means
- [ ] Post about the real cost of AI projects (transparency angle)
- [ ] Post about when NOT to use an LLM
- [ ] Post targeting AI developers (senior/lead/architect level)
- [ ] Post targeting business audience (PMs, BAs, founders, CEOs, CTOs)

### Strategic Decisions Pending
- [ ] Refine company size target (100–2,000 is too broad)
- [ ] Figure out EdTech specialization and specific ICP
- [ ] Decide how to present timelines/costs without scaring prospects
- [ ] Resolve transparency vs. competitive presentation tension
- [ ] Determine whether to pursue the "plug-in recommendation system" startup idea
- [ ] Evaluate ISO/IEC compliance mention (inspired by Competitor B)

---

## 16. Contradictions & Open Questions

1. **Team presentation vs. transparency**: The founder values "absolute transparency" but explicitly says not to present the network model honestly on the website — present it as a team. This is a conscious trade-off, not an oversight.

2. **Cost reduction claims**: Initially says "half the cost," then backtracks — "50% sounds dumb." Settles on 30–40% reduction. The exact figure needs to be decided for marketing materials.

3. **Optimism vs. despair cycle**: Oscillates between confidence ("we have everything — expertise, cutting-edge tech, quality, speed") and pessimism ("where do I find this many clients, I have no idea").

4. **Human necessity in specs**: States "without a human, probably no way" for final specification review, but then wonders if that too will be automated as AI gets smarter.

5. **CV as a differentiator**: Mentions CV as valuable and hard to commoditize, but immediately decides not to pursue it due to difficulty finding clients — somewhat contradictory (if hard to commoditize, should have more stable demand, but founder sees it as niche).

6. **Pricing transparency vs. scaring clients**: Genuinely struggles between being transparent about 8–9 month timelines / $80K+ costs and the fear that over-promising competitors will win deals. Leans toward transparency but flags this as unresolved.

7. **Agentic development readiness**: Proposes offering the agentic approach to the UTR client but admits the system doesn't yet exist — would need to be built during the project.

8. **"adtech" vs. EdTech**: The founder uses "adtech" in speech but all described use cases are EdTech. This is a speech error, not a real adtech interest.

9. **Frontend capability**: "We don't write frontend. Well, we can, but it's not what we offer." — They have the capability but deliberately don't position for it.

10. **Company size target**: Varies from 50+ to 100+ to 500+ to 2,000 across the recording. Needs explicit decision.

---

## 17. Notable Quotes

> "Если раньше ты предоставляешь ИИ услуги, ну, был хайп вокруг ИИ, что все хотели ИИ. А теперь хайп вокруг ИИ, что все по-прежнему хотят ИИ, но им кажется, что этот же ИИ может сделать для них ИИ."
> *Before, you provide AI services, there was hype around AI, everyone wanted AI. Now the hype around AI is that everyone still wants AI, but they think that same AI can build AI for them.*

> "Человек превращается в какого-то оператора, которому нужно просто правильно указывать спецификации."
> *The human is becoming an operator who just needs to correctly specify requirements.*

> "Наша value аутсорсинга получается именно в экспертности."
> *Our outsourcing value is specifically in expertise.*

> "То, что компания делает всё классно технически, ещё не гарантия, что она выживет. Потому что делать классно и продавать классно — это два разных класса, две большие разницы."
> *That a company does everything great technically doesn't guarantee it survives. Doing great and selling great are two different classes, two big differences.*

> "Мы develop на уровне world-known outsourcers, but our price is 4-5 times cheaper. For absolutely the same quality."
> *We develop at the level of world-renowned outsourcers, but our price is 4–5 times cheaper. For absolutely the same quality.*

> "Единственное, чего у нас нет, это клиентов и маркетинга, да, и продажи. Продажи вообще не настроены."
> *The only thing we don't have is clients, marketing, and sales. Sales are not set up at all.*

> "Программирование уже точно не станет прежним."
> *Programming will definitely never be the same again.*

> "Стресс не ушёл... Желание всё бросить. Чувство, что ты не дотягиваешь."
> *The stress hasn't gone... The desire to quit everything. The feeling that you're not good enough.*

> "Мы так перегружены контентом сейчас. Все уже заболели от этого. Эти постоянные посты в LinkedIn, которые просто пустые, их тысячи одинаковых, они все AI-generated, в них нет абсолютно никакой ценности."
> *We are so overloaded with content now. Everyone is sick of it. These constant LinkedIn posts that are just empty, there are thousands of identical ones, they're all AI-generated, they have absolutely no value.*

---

## 18. Decisions Log (Post-Recording)

> These decisions were made after the recordings, through follow-up discussion with the founder. They are not in the raw transcriptions.

### Resolved 26.03.2026

---

#### 1. Site metrics KILLED

"100+ AI initiatives," "4.9/5 rating," "Top 0.001%" — all three dropped. Not carried to new site.

**Why**: Cannot be sourced. The founder never addressed where these numbers came from. Unsourced claims directly undermine the trust-first positioning — if a skeptical CTO Googles "Top 0.001%" and finds nothing, the entire credibility story collapses. Better to have no numbers than fake ones. The company will look stronger by being specific and restrained than by stretching its proof.

---

#### 2. Company-size target refined

**Decision**: "Mid-sized and larger companies with complex product catalogs and/or real operational complexity."

**Why a number range doesn't work**: The original 100–2,000 was too broad — a 100-person startup and a 2,000-person enterprise have completely different buying processes, budgets, and decision timelines. But even a tighter number (e.g., 200–1,000) would be arbitrary. What actually matters is:
- **Catalog complexity** (for e-commerce): thousands of products, nested categories, difficult search — this is what makes the AI shopping assistant valuable
- **Operational complexity** (for in-house AI): strict data policies, multiple systems, real infrastructure — this is what makes the in-house AI offering relevant

A 150-person auto parts retailer with 50,000 SKUs is a better fit than a 5,000-person company selling 3 products. Size is a proxy; complexity is the real qualifier. The "and/or" is deliberate — some clients have catalog complexity (e-commerce), some have operational complexity (in-house AI needs), some have both.

---

#### 3. Starting monthly rate corrected

**Decision**: $15,000–18,000/month (not $25,000).

**Why**: The $25K figure from the recordings was the founder's initial rough estimate. After further discussion, the actual starting rate for Concept Validation and Production-Ready Build phases is $15–18K/mo. This is the number that goes on the site and into proposals.

---

#### 4. Pricing display approach

**Decision**: Show entry costs and monthly rates. Do NOT show project totals or durations next to prices. Separate the "price story" from the "timeline story."

**The principle**: "Be transparent about the steps and the entry cost, let the conversation handle the rest."

**Why separate price from duration**: Showing "$15K/mo" next to "2–4 months" makes the total ($30–60K) obvious. The founder's core worry was that full totals ($80K+ for a complete lifecycle) would scare prospects while competitors over-promise. The psychological framing matters:
- "$15,000/month" feels like a manageable ongoing cost
- "$60,000–$100,000 total project" feels like a lump-sum commitment
- Both are the same money, but the first invites conversation while the second invites comparison shopping

**How it works on the site**:
- **Services/Methodology section**: Shows the journey as a visual flow with durations — sets timeline expectations
- **Pricing section**: Shows entry costs only — Free Strategy Session, AI Audit from $5K, Discovery $5–10K, Development from $15K/mo
- **Never in the same table cell**: price and duration don't appear together
- **Totals**: Only come up in conversation, where the founder can contextualize them ("4 months of validation saves you 18 months of building the wrong thing")

---

#### 5. Public-facing service labels

**Decision**:

| Internal Name | Public Label | Why This Name |
|---|---|---|
| AI Audit / Free 2h Call | **AI Strategy Session** | "Audit" sounds like you're looking for problems. "Strategy Session" sounds like you're looking for opportunities. The free 2h and paid week versions are tiers of the same thing. |
| Discovery | **Discovery & Blueprint** | "Blueprint" signals a tangible deliverable, not just "we talk for a week." Competitor A also uses "Discovery" — it's industry-understood. Adding "Blueprint" differentiates. |
| POC | **Concept Validation** | Don't abbreviate "POC" — non-technical buyers don't know what it means. "Validation" says "we're genuinely testing whether this works" (honest, aligned with brand). "Confirmation" was considered but rejected — it implies the answer is already known and you're just rubber-stamping, which is the opposite of what happens. |
| MVP | **Production-Ready Build** | "MVP" has a startup connotation that enterprise buyers associate with "unfinished." "Production-Ready Build" says what it actually is — real engineering, integration, deployment. |
| Production | **Scale & Optimize** | Clear. Goes to all users, all products, with monitoring and guardrails. |

**Framing**: A journey, not a menu. On the site: "How We Work: AI Strategy Session → Discovery & Blueprint → Concept Validation → Production-Ready Build → Scale & Optimize." This is the differentiator — most competitors (Competitor C, Competitor B) don't show methodology at all. Competitor A shows 4 phases but theirs are operational ("Team Assembly"). RemiLink's map to what the *client* gets at each step.

---

#### 6. Primary CTA

**Decision**: Button: **"Discuss Your AI Project."** Subtext: "Get an honest assessment of feasibility, timeline, and cost — directly from our chief architect." Founder photo shown next to the form.

**Why "Discuss Your AI Project" over alternatives**:

| Considered | Problem |
|---|---|
| "Contact Us" | Too vague. Says nothing about what happens next. |
| "Get Started" | Too salesy. Implies commitment. |
| "Book a Free Strategy Session" | Only works for "explorer" visitors. A CTO comparing vendors already knows what they need — they don't want a "strategy session," they want to describe their project and get a response. |
| "Estimate Project" | Commoditizes you. If someone clicks "Estimate Project" on 5 vendor sites, they're comparing spreadsheets, not expertise. Also misses the explorer segment entirely. |

**"Discuss Your AI Project" wins because** it works for all three visitor types:
1. **Explorer** ("I have an idea, is it feasible?") — yes, let's discuss it
2. **Buyer** ("I know what I need, I'm comparing vendors") — yes, tell us about your project
3. **Researcher** ("I'm building a shortlist for my boss") — yes, we'll give you something to take back

The subtext puts "estimate" in the promise ("feasibility, timeline, and cost") without making it the action. The founder's photo next to the form humanizes it — a VP is filling out a form to talk to "Oleh, Chief AI Architect" specifically, not to "a company."

**Strategy session offer** lives on the Services page as: "Not sure where to start? We offer a free 2-hour AI Strategy Session to assess feasibility before any commitment."

**Form itself**: Simple "What can we help with?" textarea. No dropdowns, no "choose your service." The founder handles qualification manually.

---

#### 7. Team presentation

**Decision**: About page launches founder-first. Team section shows roles, not faces. Photoshoot downgraded from blocker to nice-to-have.

**Why founder-first works**:
- This IS a founder-led company. The founder is personally on every project. Leading with him is honest.
- No team member photos are confirmed. Waiting for a photoshoot would block the About page indefinitely.
- Enterprise buyers care more about the person who'll architect their project than about a grid of headshots.

**Language that's honest without revealing the network model**:

> "Every project is personally led by our founding architect. The team is assembled specifically for your challenge — drawing from specialists in ML engineering, data engineering, DevOps, and business analysis who've worked together across 50+ AI projects."

This is true: there ARE specialists, they ARE selected per project, the founder DOES lead everything. It doesn't claim a headcount or imply full-time staff.

**What to avoid**: Specific headcount claims ("team of 20+"), org chart imagery, "Our dedicated team is always ready" language.

**When team photos become available**: Add them. The page works without them.

---

#### 8. Secondary CTA (PDF) deferred

**Decision**: Not at launch. Methodology page = shareable URL. Build PDF post-launch after 2–3 articles + 1–2 case studies exist. Ungated.

**Why not now**: The PDF would contain methodology + case studies + pricing + founder bio. The case studies aren't expanded yet, the site copy isn't proven yet. Building a PDF before the site content is tested means packaging unproven messaging.

**Why the URL is enough for now**: A CTO comparing vendors can send the methodology page link to their team. This is simpler, trackable (once analytics are added), and doesn't need separate design work. The site must be good enough that the URL itself is impressive.

**Why ungated when it's built**: Lead volume is too low to optimize for email capture. Optimize for trust instead. If someone wants to share the PDF with their team, let them — that's the whole point. Gating can be considered 6+ months post-launch if traffic warrants it.

---

#### 9. formsubmit.co kept

**Decision**: Keep formsubmit.co as the form handler. No replacement needed.

**Why**: formsubmit.co already forwards to info@remilink.com. It also provides email address hiding (hash-based URL, not exposed in HTML source) and DDoS/spam protection. The founder's comment that it "isn't great" was unfamiliarity, not a real problem. Replacing it would add work for zero benefit.

---

*Source files: `docs/notes/raw/25.03.2026 remilink - концепция аутсорсинг компании_ru.txt`, `docs/notes/raw/25.03.2026 remilink - специализация и стратегия_ru.txt`, `docs/notes/raw/25.03.2026 remilink - AI native разработка_ru.txt`, `docs/notes/raw/25.03.2026 remilink - сформировать идеи постов из голосовых заметок_ru.txt`, `docs/notes/text/25.03.2026 remilink - competitors`*
