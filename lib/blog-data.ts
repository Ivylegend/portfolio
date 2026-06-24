export interface BlogPost {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "escrow-payments-trust-african-marketplaces",
    tag: "Marketplaces",
    title: "How Escrow Payments Build Trust in African Marketplaces",
    excerpt:
      "Africa's marketplace ecosystem is booming — but buyer-seller trust remains the single biggest conversion blocker. Here's how escrow mechanics change the game.",
    readTime: "6 min read",
    date: "June 2025",
    content: `
## The Trust Deficit

Every marketplace founder in Africa knows the pain. A promising seller signs up, lists quality products, but conversion rates flatline. Buyers hesitate at checkout — not because of price, but because they can't answer a simple question: *what happens if this goes wrong?*

This is the trust deficit, and it costs African marketplaces billions in unrealised GMV every year. Traditional payment methods offer no protection after money leaves a buyer's account. The result? Buyers and sellers retreat to social media DMs, WhatsApp, and in-person transactions — defeating the entire point of the platform.

## How Escrow Changes the Equation

Escrow shifts the dynamic completely. Instead of asking buyers to trust strangers with their money, you ask them to trust the platform with their money — and only release it when delivery is confirmed.

The mechanics are straightforward:

1. **Buyer places order** and funds are held in escrow (not yet released to seller)
2. **Seller fulfils** the order, knowing the funds exist and are locked
3. **Buyer confirms** receipt, triggering automatic release to seller
4. **Dispute window** allows either party to raise a claim before funds settle

This three-sided trust model — buyer trusts platform, platform trusts process, seller trusts payout — is the foundation every successful African marketplace needs.

## What to Build Into Your Escrow Layer

Not all escrow implementations are equal. Here's what separates a production-ready escrow system from a prototype:

**Milestone-based releases.** For service marketplaces, single-shot release isn't enough. Break payments into milestones tied to deliverables. This works especially well for freelance platforms, construction procurement, and B2B project marketplaces.

**Dispute resolution workflows.** A dispute button with no SLA is useless. Define your escalation path: auto-resolution window → mediation → manual adjudication. Build the tooling for your ops team to review evidence and make binding decisions.

**Payout rails that work.** In Nigeria, this means Paystack or Flutterwave with proper Connect-style split payment support. For cross-border, Stripe Connect (where available) or Chipper Cash / Lemfi integrations. The payout infrastructure is often more complex than the escrow logic itself.

**KYC tied to payout limits.** Require identity verification before sellers can withdraw above a threshold. This reduces fraud, satisfies regulatory obligations, and builds your data moat.

## The Conversion Lift

Marketplaces that add visible escrow protection typically see 20–40% improvements in checkout conversion rates. More importantly, repeat purchase rates improve because buyers who had a good first experience — knowing their money was protected — come back.

The trust deficit isn't a cultural problem. It's an infrastructure problem. Escrow is the infrastructure.

## Building It Right

If you're building a marketplace that needs escrow, the key engineering decisions are:

- Which payment provider supports virtual sub-accounts or split payments in your market?
- How do you handle the holding period for funds in transit?
- What's your dispute SLA, and how does that reflect in your UI?
- How do you communicate escrow status to both parties in real time?

These aren't just product decisions — they're legal and compliance decisions too. Getting them right from the start is far cheaper than retrofitting them after launch.

Ready to build a trust-first marketplace? [Let's talk →](/contact)
    `,
  },
  {
    slug: "real-time-logistics-apps-react-native",
    tag: "Logistics",
    title: "Building Real-Time Logistics Apps with React Native",
    excerpt:
      "Real-time tracking, driver apps, and dispatch dashboards have unique engineering constraints. This is how to get them right.",
    readTime: "8 min read",
    date: "May 2025",
    content: `
## Why Logistics Apps Are Hard

Most mobile apps deal with data at rest. Logistics apps deal with data in motion — constantly changing, frequently conflicting, and always time-sensitive. A package that was in Lagos at 9am might be in Ibadan by noon and delayed by traffic at 2pm. Your app needs to reflect reality as it happens.

This creates engineering challenges that don't exist in typical CRUD apps: WebSocket connection management, location battery optimisation, offline-first data handling, and conflict resolution when the network drops mid-delivery.

## The Three Apps You Actually Need

Most logistics platforms need three distinct applications, not one:

**The driver app** is the most demanding. Drivers are on the road, on low-powered phones, often with intermittent connectivity. It needs to work offline, sync aggressively when online, and minimise battery drain while still polling GPS frequently.

**The dispatcher dashboard** is a web application — a dense, real-time map view showing all active drivers, pending orders, and exception states. It needs WebSocket updates, map clustering, and filtering by zone, status, and driver.

**The customer tracking page** is the simplest but most visible. Customers want to see where their order is, right now. A shareable tracking link with live map embed is usually enough.

## Location Tracking That Doesn't Kill Batteries

The naive approach — navigator.geolocation.watchPosition on full accuracy — drains a phone battery in 3–4 hours. That's not acceptable for a 10-hour driver shift.

The production approach uses adaptive location polling:

- **High frequency (every 15s)** when the driver is in transit with an active delivery
- **Low frequency (every 2–3 min)** when the driver is stationary or between orders
- **Background location** using Expo's expo-location with task manager, requesting Location.Accuracy.Balanced rather than Accuracy.High

Pair this with geofence triggers — instead of constant polling, fire events when a driver enters or exits a delivery zone. This is both battery-efficient and semantically meaningful.

## Offline-First Architecture

Drivers will lose connectivity in tunnels, basements, and rural areas. Your app needs to handle this gracefully.

The pattern that works:

1. **Optimistic local writes** — driver marks delivery as complete in the app, which writes to a local SQLite store immediately
2. **Background sync** — a queue drains to the server when connectivity returns
3. **Conflict resolution** — if the server state has changed while offline, define clear merge rules (last-write-wins is usually fine for delivery status)

React Native with WatermelonDB or expo-sqlite provides this foundation. For the sync layer, a custom job queue with exponential backoff handles the edge cases.

## Real-Time Map Updates

The dispatcher dashboard needs to update as drivers move. WebSockets are the right tool — long polling introduces too much latency.

Architecture:
- Driver app emits location updates via WebSocket (or REST with short polling as fallback)
- Server broadcasts to all subscribed dispatcher sessions
- Dashboard updates map markers in place without re-rendering the entire map

For React, react-map-gl (Mapbox) or Google Maps JS SDK handles the rendering. The key is updating marker positions imperatively rather than re-mounting components on each location change.

## Proof of Delivery

A completed delivery with no evidence is a customer service nightmare. Build PoD from day one:

- Photo capture with automatic upload and compression
- Digital signature canvas
- Geolocation stamp tied to completion event
- Timestamp and driver ID attached to every PoD record

These aren't nice-to-haves — they're your first line of defence in every dispute.

## The Stack I Use

For production logistics apps: React Native with Expo, WatermelonDB for local persistence, Socket.io for real-time, Google Maps Platform for mapping, PostgreSQL for the backend, and Redis for presence and pub/sub.

Building a logistics product? [Let's discuss your requirements →](/contact)
    `,
  },
  {
    slug: "ai-agents-production-lessons",
    tag: "AI",
    title: "Shipping AI Agents to Production: Lessons from the Field",
    excerpt:
      "Building an agent demo is easy. Building one that works reliably in production is a different discipline entirely.",
    readTime: "7 min read",
    date: "April 2025",
    content: `
## The Demo-to-Production Gap

Every AI agent looks impressive in a demo. The prompt is carefully crafted, the examples are cherry-picked, and the inputs are clean. Production is different. Users will ask things you didn't anticipate, provide inputs in unexpected formats, and encounter edge cases your demo never surfaced.

Closing the gap between demo and production is the real work of AI engineering.

## Evaluation First, Engineering Second

The most common mistake: building the agent before defining how to measure its success.

Before writing a single line of agent code, define your eval suite. What does a good response look like? What does a bad one look like? What are the failure modes you care most about?

For a customer support agent:
- Does it correctly classify the intent of the query?
- Does it retrieve the right knowledge base articles?
- Does it stay within its scope (no hallucinated policy details)?
- Does it know when to escalate to a human?

Build 50–100 test cases before your agent exists. Then your development loop becomes: change the agent → run evals → measure regression or improvement. Without evals, you're flying blind.

## Tool Design Is Everything

Agents are only as useful as their tools. Poorly designed tools lead to:
- The agent calling a tool with malformed arguments
- The tool returning ambiguous results the agent misinterprets
- Infinite retry loops when tools fail

Design your tools like API contracts. Clear input schemas, typed outputs, explicit error cases. Use Zod (or Pydantic in Python) to validate every tool input and output. Make sure your tools return enough context for the agent to understand what happened — not just a status code.

## Memory and Context Management

Most agent failures in production relate to context management. The agent forgets what it said earlier, contradicts itself, or loses track of user state across turns.

The production pattern:

**Short-term memory**: The conversation window. Keep this trimmed — summarise older turns rather than letting the context balloon. An agent that always has the last 20 messages is more predictable than one that sometimes has 100.

**Long-term memory**: User profile and historical context. Store this in a database, not the context window. Retrieve relevant facts at query time using embeddings search.

**Working memory**: Task state. For multi-step agents, maintain explicit state machines rather than relying on the model to track where it is in a process.

## Observability Is Non-Negotiable

In production, you need to see exactly what your agent did for every request:
- Which tools were called and in what order
- What the model received and returned at each step
- Latency and token counts per step
- Where failures occurred

LangSmith, Langfuse, and Helicone all provide this. Pick one and instrument it from day one. Without traces, debugging production issues is guesswork.

## Human-in-the-Loop Design

The most robust production agents are designed to escalate gracefully. Define the conditions under which your agent should hand off to a human:
- Confidence below a threshold
- Query types outside the defined scope
- User requests to speak to a human
- Consecutive failed attempts at the same task

Build this escalation path into your agent's system prompt and tool set. The handoff should be seamless — pass full context to the human agent so they're not starting from zero.

## Cost and Latency at Scale

In production, token costs compound. Design for efficiency:

- Use smaller models (GPT-4o-mini, Claude Haiku) for classification and routing; reserve frontier models for generation
- Cache common tool results with short TTLs
- Batch tool calls where the API supports it
- Stream responses so users see output while the model is still generating

At 10,000 agent calls per day, a 30% cost reduction is meaningful. At 100,000 calls, it's the difference between a sustainable product and a runaway bill.

Shipping an AI product? [Let's talk about your architecture →](/contact)
    `,
  },
  {
    slug: "whatsapp-commerce-cloud-api-guide",
    tag: "WhatsApp",
    title: "WhatsApp Commerce: A Guide to the Cloud API for Businesses",
    excerpt:
      "The WhatsApp Cloud API unlocks automated commerce flows for 2+ billion users. Here's a practical guide to building on it.",
    readTime: "6 min read",
    date: "March 2025",
    content: `
## Why WhatsApp Commerce Is the Next Big Channel

WhatsApp has over 2 billion active users. In Nigeria, it's often the primary business communication tool — more used than email, more trusted than web forms. For businesses, this is an enormous opportunity: meet customers exactly where they already spend their time.

The WhatsApp Business Platform (Cloud API) makes this programmable. You can build automated order flows, appointment booking, customer support, payment confirmation, and shipping alerts — all inside WhatsApp.

## How the Cloud API Works

The Cloud API is Meta's hosted version of the WhatsApp Business API. Instead of managing your own servers or partnering with a BSP for basic access, you can call Meta's APIs directly.

Key concepts:

**Phone number**: Each business has a WhatsApp Business phone number linked to a Meta Business account. This is the sender identity for all messages.

**Webhooks**: Incoming messages from users arrive as HTTP POST requests to your webhook URL. Your server processes these and responds.

**Message templates**: Proactive messages (notifications, reminders, marketing) must use pre-approved templates. Conversational replies within a 24-hour window can be free-form.

**Interactive messages**: Buttons (up to 3), list menus (up to 10 items), and product catalog messages enable structured flows without free-text parsing.

## Building a Commerce Flow

A typical order flow:

1. User messages your business number with a product enquiry
2. Your bot responds with a product list (interactive list message)
3. User selects an item; bot confirms selection and asks for delivery details
4. User provides address; bot sends an order summary with Confirm/Cancel buttons
5. On confirmation, bot initiates payment link (Paystack, Flutterwave) via a CTA button
6. On payment, bot sends confirmation template with order ID and tracking link

This entire flow runs without a human agent and can handle hundreds of concurrent conversations.

## Handling the 24-Hour Window

WhatsApp distinguishes between two types of messages:

- **Session messages**: Sent within 24 hours of the last user message. These can be any format — text, media, interactive. No template required.
- **Template messages**: Required for proactive outreach or messages outside the 24-hour window. Must be pre-approved by Meta.

For commerce, this means: if a user places an order and you need to send a shipping update 48 hours later, you need a pre-approved shipping update template. Plan your template library early — approval takes 24–72 hours.

## Integrating with Your CRM

WhatsApp conversations are valuable customer data. Sync them to your CRM:

- Map WhatsApp phone numbers to customer records
- Store conversation history with message IDs
- Trigger CRM workflows on intent signals (e.g., "interested in X product")
- Sync order status back to WhatsApp for proactive notifications

HubSpot, Salesforce, and most modern CRMs have REST APIs that make this straightforward.

## What You Need to Get Started

1. A Meta Business Account (verified)
2. A WhatsApp Business Account with a dedicated phone number
3. A server with a publicly reachable webhook endpoint
4. Node.js or Python to handle the webhook logic
5. Pre-approved message templates for your proactive use cases

The technical setup takes a day. The product design — figuring out the right conversation flows, templates, and error handling — takes longer. Invest in that upfront.

Want to build WhatsApp automation for your business? [Let's get started →](/contact)
    `,
  },
  {
    slug: "technical-seo-core-web-vitals-playbook",
    tag: "SEO",
    title: "Technical SEO for Startups: The Core Web Vitals Playbook",
    excerpt:
      "Core Web Vitals are now ranking signals. Here's a practical guide to measuring, diagnosing, and fixing LCP, CLS, and INP.",
    readTime: "7 min read",
    date: "February 2025",
    content: `
## Why Technical SEO Actually Matters Now

For years, technical SEO was treated as a nice-to-have. Get your keywords right, get some backlinks, and you'd rank. That calculus has shifted.

Core Web Vitals — Google's user experience metrics — are now confirmed ranking signals. A site that loads slowly, shifts layout unexpectedly, or responds sluggishly to interaction will rank below a competitor with comparable content but better performance.

For startups, this is both a challenge and an opportunity. Most startup websites are not technically optimised. Getting ahead of this is a genuine competitive advantage.

## The Three Metrics That Matter

**Largest Contentful Paint (LCP)** measures how long the main content of a page takes to load. Good: under 2.5 seconds. Needs improvement: 2.5–4.0 seconds. Poor: above 4.0 seconds.

**Cumulative Layout Shift (CLS)** measures visual stability — how much elements move around while the page loads. Good: under 0.1. Anything above 0.25 is a significant user experience problem.

**Interaction to Next Paint (INP)** replaced FID in March 2024. It measures responsiveness — how quickly your page responds to user interactions. Good: under 200ms. Poor: above 500ms.

## Diagnosing Your Current State

Start with Google Search Console's Core Web Vitals report. This shows your real-user data (field data) segmented by page. It's more reliable than lab data because it reflects actual user conditions.

Supplement with:
- **PageSpeed Insights**: Lab data + field data, with specific recommendations
- **Chrome DevTools Performance tab**: Deep-dive diagnostics for LCP and INP
- **Lighthouse**: Comprehensive audit in CI/CD pipelines

For CLS specifically, the Layout Instability API lets you log shifts in production and attribute them to specific elements.

## Fixing LCP

The most common LCP culprits:

**Slow server response**: Add a CDN. For Next.js sites on Vercel, this is automatic. For others, Cloudflare's free tier provides global edge caching.

**Render-blocking resources**: CSS and JavaScript that block rendering delay LCP. Audit your &lt;head&gt; for non-critical stylesheets loaded synchronously. Move them to deferred loading.

**Unoptimised images**: The LCP element is almost always an image. Use next/image (or equivalent) for automatic WebP conversion, responsive sizing, and lazy loading. Set the priority attribute on your hero image so it's not lazy-loaded.

**No preloading**: If you know what the LCP element will be, add a link preload tag to fetch it before the browser discovers it in the HTML.

## Fixing CLS

CLS is caused by layout shifts — elements that move after the page appears to have loaded.

**Always size images**: Include explicit width and height attributes on every img element. Without them, the browser doesn't know how much space to reserve.

**Reserve space for dynamic content**: Ads, embeds, and async-loaded content (like chat widgets) should have a fixed-size container so their arrival doesn't push content down.

**Avoid inserting content above existing content**: The most damaging shifts are at the top of the page. Cookie banners, notification bars, and sticky headers that appear after load are frequent offenders.

## Fixing INP

INP is the newest and often most misunderstood metric. It measures interaction responsiveness across the entire page visit, not just the first interaction.

Common causes:
- Long JavaScript tasks blocking the main thread during interactions
- Heavy event handlers (search, filtering, form validation) doing synchronous work
- React re-renders touching too many components on user input

Solutions:
- Break up long tasks with scheduler.yield() or setTimeout(fn, 0)
- Move expensive work to Web Workers
- Debounce expensive event handlers (search, resize)
- Use React's startTransition for non-urgent state updates

## The On-Page SEO Layer

Core Web Vitals are one part of technical SEO. Don't neglect:
- Proper heading hierarchy (one H1 per page)
- Descriptive title tags (under 60 characters)
- Meta descriptions (under 160 characters)
- Canonical tags to avoid duplicate content
- Schema markup for your content type (Article, FAQPage, Product, LocalBusiness)
- XML sitemap submitted to Google Search Console

A site with excellent Core Web Vitals and solid on-page SEO will outperform a fast site with poor fundamentals — and certainly outperform a slow site with great keywords.

Want an SEO audit for your site? [Get in touch →](/contact)
    `,
  },
  {
    slug: "duns-number-nigerian-startup-guide",
    tag: "Business",
    title: "How to Get Your DUNS Number as a Nigerian Startup",
    excerpt:
      "A DUNS number opens doors to global contracts, grants, and enterprise onboarding. Here's the full process for Nigerian businesses.",
    readTime: "5 min read",
    date: "January 2025",
    content: `
## What Is a DUNS Number and Why Do You Need One?

A DUNS (Data Universal Numbering System) number is a unique nine-digit identifier issued by Dun & Bradstreet (D&B) for business entities. It's the global standard for business identification — used by the US government, the EU, and thousands of enterprise procurement systems.

For a Nigerian startup, a DUNS number is increasingly a prerequisite for:

- **US federal grants and contracts** (SAM.gov registration requires it)
- **Apple Developer Program** enterprise enrollment
- **Google for Startups** and other accelerator programs
- **Enterprise procurement** — many multinational companies require suppliers to have a DUNS number
- **Stripe Atlas** and similar global business infrastructure providers

Without one, you're effectively locked out of a significant portion of global business opportunity.

## Who Is Eligible?

Any legally registered business entity can apply for a DUNS number. For Nigeria:
- Companies registered with the Corporate Affairs Commission (CAC)
- Sole proprietorships with a CAC registration
- NGOs and foundations

You'll need your CAC registration number, your registered business name (exactly as it appears on CAC documents), your business address, and your business phone number.

## The Application Process

**Step 1: Go to the official Dun & Bradstreet site**
Navigate to dnb.com and look for the DUNS number request section. Be careful — there are third-party services that charge fees for this. The basic DUNS number is free when applied for directly.

**Step 2: Complete the online form**
You'll provide:
- Business legal name (match your CAC certificate exactly)
- Physical address (a registered office address, not a PO box)
- Phone number
- Type of business entity
- Number of employees
- Primary business activity

**Step 3: Provide supporting documentation**
D&B may request verification documents, particularly for businesses outside the US. Have your CAC certificate of incorporation, evidence of business activity, and proof of address ready.

**Step 4: Wait for processing**
Standard processing takes 30 business days. An expedited option (for a fee) can deliver in 5 business days. For time-sensitive applications (e.g., a grant deadline), budget for the expedited option.

**Step 5: Receive your DUNS number**
Once issued, your DUNS number is permanent. It belongs to your business, not to you personally. Guard it — it's linked to your business credit profile.

## Common Issues and How to Avoid Them

**Name mismatch**: The most common rejection reason. Your business name on the D&B form must exactly match your CAC registration — including punctuation and Ltd/Limited abbreviation.

**Address not recognised**: D&B validates addresses against global databases. If your address doesn't register, provide a Google Maps link or nearby landmark reference in the additional notes field.

**No business activity evidence**: D&B wants to see that your business is operational. A website, social media presence, or invoices all help.

## After You Get Your DUNS Number

Once you have your DUNS number:
- Register on SAM.gov if you're pursuing US government contracts or grants
- Add it to your business profiles on platforms that request it
- Keep your D&B profile updated — your business credit score is attached to it
- Check your D&B file annually to ensure information is accurate

Need help navigating the DUNS application process? [Get in touch →](/contact)
    `,
  },
  {
    slug: "fintech-onboarding-compliance-design",
    tag: "FinTech",
    title: "Designing Fintech Onboarding That Passes Compliance",
    excerpt:
      "KYC and AML requirements don't have to mean terrible UX. Here's how to build onboarding that satisfies regulators and delights users.",
    readTime: "6 min read",
    date: "December 2024",
    content: `
## The Onboarding Paradox

Fintech onboarding sits at the intersection of two opposing forces: regulators who want every detail verified, and users who abandon at the first sign of friction.

Most fintech products fail on one side or the other. Heavy compliance theatre creates 70%+ drop-off rates. Lax verification creates regulatory exposure. The products that win design for both simultaneously.

## What Compliance Actually Requires

KYC (Know Your Customer) requirements vary by jurisdiction and licence type, but the common elements for Nigerian fintech (CBN-regulated) are:

**Tier 1 (wallet, basic transactions)**: BVN, phone number, name. Low transaction limits.

**Tier 2 (higher limits)**: Tier 1 + NIN, address, photo ID.

**Tier 3 (full banking features)**: Tier 2 + proof of address, enhanced due diligence for higher-risk customers.

AML (Anti-Money Laundering) requirements add transaction monitoring, suspicious activity reporting, and PEP (Politically Exposed Person) screening.

The key insight: not every user needs Tier 3 from day one. Progressive KYC — starting with minimal requirements and upgrading as users hit limits — dramatically improves onboarding completion rates.

## Progressive KYC: The Right Mental Model

Instead of a monolithic onboarding form, think in tiers:

**Day 1**: Collect phone number + BVN. User is immediately active with low limits. This gets the user in the product experiencing value before asking for more.

**When user hits a limit**: Surface a contextual upgrade prompt. "You've reached your daily limit. Verify your ID to send up to ₦1,000,000/day." This is the optimal moment for KYC — the user has a concrete reason to complete it.

**For high-value features**: Require full verification before enabling (e.g., virtual cards, international transfers). Frame it as unlocking, not gatekeeping.

## Designing the Verification UX

**BVN lookup**: A single field with real-time validation. Show a loading state while you verify, then confirm name match to build trust. Don't ask users to re-enter their name if you can pull it from BVN.

**NIN verification**: Same pattern. NIMC API returns name and date of birth — use this to pre-fill and confirm, not to interrogate.

**Document upload**: Use a camera flow, not file upload. Most users are on mobile. Provide clear guidance on lighting, angle, and what constitutes an acceptable image. Run client-side quality checks (blur detection, document detection) before upload to catch failures before the API call.

**Selfie + liveness**: For enhanced verification, use a liveness detection library rather than a static selfie. Smile detection or head-turn prompts prevent photo spoofing and are now standard for Tier 2+ onboarding.

## Handling Rejection Gracefully

Verification failures happen. Your UX must handle them without dead ends.

When a BVN doesn't match: don't just show "verification failed." Tell the user specifically what doesn't match (date of birth, name spelling) and offer a path forward.

When a document is rejected: show exactly what was wrong (blurry, expired, wrong document type) and allow immediate re-submission.

When a user needs manual review: set clear expectations. "Your documents are under review. You'll hear from us within 24 hours." Then actually deliver on that SLA.

## The Data Architecture

KYC data has strict handling requirements. A few non-negotiables:

- Encrypt PII at rest (AES-256) and in transit (TLS 1.3)
- Store raw documents separately from processed verification results
- Implement strict access logging for any PII access
- Define and document retention periods (typically 7 years for financial data in Nigeria)
- Ensure your KYC provider agreements cover data processing requirements

## Choosing a KYC Provider

For Nigerian fintech, the common options are Smile Identity, Youverify, and Prembly. Each supports BVN, NIN, and document verification with varying response times and accuracy rates.

I typically recommend Smile Identity for its Nigerian document coverage and SDKs, but the right choice depends on your transaction volumes, geographic focus, and budget.

Building a fintech product? [Let's talk about your compliance architecture →](/contact)
    `,
  },
  {
    slug: "website-vs-web-app-choosing-the-right-build",
    tag: "Web Dev",
    title: "Website vs. Web App: Choosing the Right Build for Your Business",
    excerpt:
      "The choice between a marketing website and a full web application has long-term cost and performance implications. Here's a framework for getting it right.",
    readTime: "5 min read",
    date: "November 2024",
    content: `
## Why the Distinction Matters

"We need a website" is one of the most ambiguous briefs a developer can receive. It could mean a 5-page marketing site that should be live in two weeks, or it could mean a full SaaS dashboard with authentication, billing, and data visualisation. The build approach, timeline, cost, and maintenance burden are completely different.

Getting this wrong is expensive. Companies that treat a web app as a website end up with a fragile CMS-built product that breaks under real usage. Companies that treat a website as a web app spend 10x more than necessary on a contact page.

## What Is a Website?

A website is primarily informational. Its job is to communicate and convert — explain what you do, why you're credible, and prompt visitors to take a specific action (buy, book, contact, download).

Characteristics:
- Mostly static content (doesn't change per user)
- No or minimal user accounts
- Content managed by non-developers
- Primary metric is conversion rate, not engagement time

Technology fit: Next.js with a headless CMS (Sanity, Contentful, or even Notion), or a static site generator. Server-side rendering for SEO. A CDN for performance.

## What Is a Web App?

A web app is primarily functional. Its job is to let users accomplish tasks — track shipments, manage invoices, collaborate on documents, book appointments, or analyse data.

Characteristics:
- Dynamic, user-specific content
- Authentication and user accounts required
- State management across sessions
- Primary metric is task completion rate and retention

Technology fit: React or Next.js with a proper backend (Node.js, PostgreSQL), authentication (Supabase Auth, Auth.js), and real-time capabilities if needed.

## The Grey Area: Marketing + App

Most modern businesses need both. A SaaS product has a marketing site (the landing page, pricing, blog) *and* a web app (the dashboard users log into). These are usually separate codebases, occasionally combined in a monorepo.

The mistake is trying to build both in the same architecture from day one. Start with the marketing site to validate your positioning and drive sign-ups. Build the app in parallel or subsequently. Keep them deployable independently.

## Decision Framework

Ask these four questions:

**1. Does each user see different content?**
If yes → web app. If no → website.

**2. Do users need to create accounts and log in?**
If yes → web app. If no → probably a website (or a website with a simple form integration).

**3. Will non-developers update the content regularly?**
If yes → website with a CMS. If no → static site or hardcoded content is fine.

**4. Does the content drive business decisions in real time (orders, bookings, inventory)?**
If yes → web app with a real database. If no → a website with form integrations is sufficient.

## Cost and Timeline Implications

A well-executed marketing website: 2–4 weeks, depending on design complexity and content.

A web app MVP: 6–12 weeks minimum, assuming a defined scope.

A web app with full authentication, billing, and a data layer: 3–6 months for a team of two.

These aren't estimates — they're industry baselines. Compressing timelines requires either reducing scope or increasing the team.

## The SEO Dimension

Websites need to rank. Web apps usually don't (you're not trying to get Google to index your user dashboard).

This affects technology choice: server-side rendering or static generation is critical for marketing sites. For web apps, client-side rendering is often fine (though SSR still has benefits for SEO if you have public-facing app pages).

If your web app has public content — a marketplace with product listings, a job board, a directory — treat those public pages like a website and ensure they're server-rendered and indexable.

## My Recommendation

When in doubt, ship the website first. A polished marketing site with a working contact form can validate your business thesis in weeks. Once you have paying customers, you know exactly what to build next.

Need help deciding what to build — and building it? [Let's talk →](/contact)
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
