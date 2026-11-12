export const serviceDetails: Record<string, {
  title: string;
  overview: string;
  approach: string;
  related: [path: string, label: string];
}> = {
  "mobile-app-development": {
    title: "iOS & Android Mobile App Development",
    overview: "I build mobile apps for businesses that need to reach customers or run operations on iOS and Android. A shared codebase can simplify releases and maintenance while still allowing platform-specific behavior where it matters.",
    approach: "We start with the core user journeys and decide what belongs in the first release. I then build and test those flows on real devices, including slow networks, interrupted sessions, and permission changes. Store submission and a handover plan are part of launch.",
    related: ["/projects/learnai", "See LearnAI: AI tutoring for WAEC, NECO, and JAMB"],
  },
  "escrow-powered-marketplaces": {
    title: "Escrow Marketplace & Payments Development",
    overview: "For marketplaces that need to protect buyers and sellers, I build transaction flows that make it clear when a payment is collected, what triggers release, and how refunds or disputes are handled.",
    approach: "We map the transaction states, payout rules, and provider constraints before implementation. Provider support varies by market, so I confirm what the payment provider can handle rather than assuming the marketplace can hold funds itself. The build includes webhook reconciliation and an operations view for exceptions.",
    related: ["/blog/escrow-payments-trust-african-marketplaces", "Read how escrow payments build trust in African marketplaces"],
  },
  "logistics-mobile-apps": {
    title: "Logistics & Delivery App Development",
    overview: "I build connected tools for dispatchers, drivers, and customers, from job assignment and live tracking to delivery updates and proof of delivery.",
    approach: "We map what happens from dispatch to completion, including failed deliveries, offline drivers, and status corrections. Dispatchers get an operational view, while the driver app keeps its workflow focused on the next stop and queues updates when connectivity drops.",
    related: ["/blog/real-time-logistics-apps-react-native", "Read the real-time logistics app guide"],
  },
  "website-design-development": {
    title: "Website Design & Web App Development",
    overview: "Building a website versus building a web app starts with what visitors need to do. A website helps people discover your business and take action; a web app supports ongoing tasks like managing accounts, orders, or workflows. Some businesses need both.",
    approach: "We decide what needs to be public and searchable, what needs authentication, and who will manage the content. I build responsive Next.js and React sites with attention to accessibility, performance, and how enquiries reach your team.",
    related: ["/blog/website-vs-web-app-choosing-the-right-build", "Compare building a website vs. building a web app"],
  },
  "ai-agents": {
    title: "AI Agent Development & Workflow Automation",
    overview: "I build AI assistants and automations for defined jobs such as answering questions from internal documents, triaging support requests, or preparing a draft for human review.",
    approach: "We define what the agent can read and do, when it should ask for help, and how we will measure whether it works. I test against realistic examples and build in monitoring and human handoff before expanding its role.",
    related: ["/blog/ai-agents-production-lessons", "Read about shipping AI agents to production"],
  },
  "duns-number-acquisition": {
    title: "DUNS Number Registration Support in Nigeria",
    overview: "I help Nigerian businesses prepare a D-U-N-S Number request, check whether an existing Dun & Bradstreet record matches their registered entity, and respond to verification questions. This is independent assistance; Dun & Bradstreet issues the number.",
    approach: "Tell me which platform is asking for the number and which business it needs to verify. We then check the legal name and business address against your records, identify the right application channel, and agree on what support you need before you send any documents.",
    related: ["/blog/duns-number-nigerian-startup-guide", "Read the DUNS registration guide for Nigerian startups"],
  },
  "whatsapp-business-software": {
    title: "WhatsApp Commerce API & Business Automation",
    overview: "I use the official WhatsApp Cloud API to build commerce and customer service flows for businesses that take orders, book appointments, or support customers over WhatsApp.",
    approach: "We map how customers opt in, what can be automated, and where a person should take over. I connect the conversation to your CRM, catalogue, or order system so customers do not need to repeat information when they reach your team.",
    related: ["/blog/whatsapp-commerce-cloud-api-guide", "Read the WhatsApp commerce API guide"],
  },
  "seo-services": {
    title: "Technical SEO & Core Web Vitals Services",
    overview: "I help businesses diagnose what keeps useful pages from being discovered, indexed, or loading well. The work covers site architecture, page metadata, internal links, structured data, and front-end performance.",
    approach: "I compare Search Console coverage and query data with crawl results and mobile and desktop lab tests. We prioritize fixes by impact and track what changes after deployment. I don't promise a specific ranking or Lighthouse score.",
    related: ["/blog/technical-seo-core-web-vitals-playbook", "Read the technical SEO and Core Web Vitals playbook"],
  },
};
