export type Project = {
  slug: string;
  title: string;
  categories: string[];
  region?: string;
  image: string;
  website?: string;
  summary: string;
  overview: string[];
  highlights: string[];
  internalPaths: string[];
  seoKeywords: string[];
};

export const projects: Project[] = [
  {
    slug: "vahre",
    title: "Vahre",
    categories: ["Marketplace", "E-commerce", "Africa"],
    region: "Africa",
    image: "/assets/vahre.png",
    website: "https://vahre.co/",
    summary:
      "Vahre is a marketplace for discovering African goods, hiring service providers, and supporting vendors across the continent and diaspora.",
    overview: [
      "Vahre is a digital marketplace created to make African goods, services, and vendors easier to discover and access. The platform connects buyers and customers with African businesses, creatives, artisans, and service providers, creating a single destination for people who want to shop African, hire African talent, or support businesses connected to the continent.",
      "The project is positioned around convenience, culture, and community. Rather than forcing users to search across scattered social pages and informal referrals, Vahre gives African vendors a more organized online presence and gives customers a simpler way to find trusted providers.",
      "For customers, Vahre helps answer one major question: where can I find reliable African goods and service providers without stress? For vendors, it provides visibility, credibility, and a platform to reach people actively looking for their products or skills.",
      "Vahre stands out as a community-first commerce platform built to bring African skills, style, and spirit closer to the people who need them.",
    ],
    highlights: [
      "Marketplace architecture for products, services, vendors, and discovery",
      "Vendor-facing positioning around credibility, visibility, and access",
      "Customer experience centered on trusted African goods and providers",
      "Content structure that supports search around African commerce and diaspora shopping",
    ],
    internalPaths: [
      "Categories",
      "Vendor Sign Up",
      "FAQs",
      "Marketplace Listings",
    ],
    seoKeywords: [
      "African marketplace",
      "African vendors",
      "African products",
      "African service providers",
      "diaspora shopping",
    ],
  },
  {
    slug: "steadyxchange",
    title: "SteadyXchange",
    categories: ["FinTech", "Crypto", "Mobile App"],
    image: "/assets/steady-xchange.png",
    website: "https://steadyxchange.com.ng/",
    summary:
      "SteadyXchange lets Nigerians exchange crypto and gift cards for Naira quickly and securely through a mobile-first platform.",
    overview: [
      "SteadyXchange is a digital asset exchange platform built to help Nigerians convert crypto and gift cards into Naira quickly and securely. The app supports a wide range of cryptocurrencies and gift cards, making it useful for users who want a simple way to sell digital assets and receive local currency.",
      "The platform is positioned around speed, convenience, and trust. Users can exchange popular cryptocurrencies such as Bitcoin, Ethereum, Litecoin, Dogecoin, TRON, USDT, and many others.",
      "Users can also redeem gift cards such as Amazon, iTunes, Google Play, Steam, Walmart, and other supported cards. The website focuses on driving app downloads through the App Store and Google Play while educating users on how to turn digital assets into Naira.",
      "SteadyXchange is best positioned as a practical exchange app for everyday users who need fast rates, secure processing, and a mobile-first experience for converting crypto and gift cards into usable Nigerian currency.",
    ],
    highlights: [
      "Mobile-first exchange experience for crypto and gift cards",
      "Positioning around fast rates, secure processing, and Naira payouts",
      "Landing page structure focused on app downloads and user education",
      "Clear content paths for crypto, gift cards, support, and blog discovery",
    ],
    internalPaths: [
      "Crypto",
      "Gift Cards",
      "Support",
      "Blog",
      "App Store",
      "Google Play",
    ],
    seoKeywords: [
      "sell crypto for Naira",
      "gift card exchange Nigeria",
      "redeem gift cards for Naira",
      "sell Bitcoin in Nigeria",
      "USDT to Naira app",
      "best crypto exchange app Nigeria",
    ],
  },
  {
    slug: "learnai",
    title: "LearnAI",
    categories: ["EdTech", "AI", "Mobile App"],
    image: "/assets/learn-ai.png",
    website: "https://thelearnai.co/",
    summary:
      "LearnAI provides AI tutoring for Nigerian students preparing for WAEC, NECO, and JAMB with personalized study paths and exam intelligence.",
    overview: [
      "LearnAI is an AI-powered education platform built to help Nigerian students prepare smarter for exams such as WAEC, NECO, and JAMB.",
      "The platform combines artificial intelligence, Nigerian curriculum knowledge, examination pattern analysis, and personalized tutoring to make quality academic support more affordable and accessible.",
      "One of the platform’s strongest features is predictive exam intelligence. By analyzing more than 20 years of past questions, LearnAI can help students understand common topics, recurring patterns, and areas that deserve more attention.",
      "LearnAI is best positioned as a future-ready academic support platform for Nigerian students who want better preparation, smarter study plans, and affordable access to personalized learning.",
    ],
    highlights: [
      "Personalized AI tutoring for Nigerian exam preparation",
      "Predictive exam intelligence from long-term past-question patterns",
      "Support for English, Hausa, Yoruba, and Igbo learning contexts",
      "Affordable alternative to traditional private tutoring",
    ],
    internalPaths: [
      "Join Early Waitlist",
      "Watch Demo",
      "Why LearnAI",
      "Features",
      "Subjects",
      "Exam Prep",
    ],
    seoKeywords: [
      "AI tutoring Nigeria",
      "WAEC preparation app",
      "JAMB AI tutor",
      "NECO exam prep",
      "personalized learning Nigeria",
      "affordable online tutoring",
    ],
  },
  {
    slug: "brycam",
    title: "Brycam",
    categories: ["B2B", "Marketplace", "Partnerships"],
    image: "/assets/brycam.png",
    website: "https://brycam.uk/",
    summary:
      "Brycam helps businesses discover verified partnerships, joint ventures, and expansion opportunities through a trusted opportunity platform.",
    overview: [
      "Brycam is a trusted business partnership platform designed to help ambitious companies discover verified opportunities, build strategic relationships, and unlock new growth channels.",
      "In a market where many business opportunities are difficult to verify, Brycam creates a safer and more structured way for users to connect with investors, collaborators, outsourcing partners, and expansion opportunities.",
      "The platform allows users to submit opportunities, which are reviewed and authenticated before being shared with a community of professionals and businesses looking for credible ways to collaborate.",
      "The result is a business-facing website that positions Brycam as more than a listing platform. It presents Brycam as a global growth infrastructure for verified opportunities, meaningful connections, and scalable partnerships.",
    ],
    highlights: [
      "Verified opportunity submission and review flow",
      "Professional B2B positioning for investors, collaborators, and SMEs",
      "Category system for partnership verticals and growth opportunities",
      "Trust-led messaging for strategic business relationships",
    ],
    internalPaths: ["Home", "About Us", "How It Works", "FAQ", "Contact Us"],
    seoKeywords: [
      "business partnership platform",
      "verified business opportunities",
      "joint venture marketplace",
      "strategic partnerships",
      "business expansion opportunities",
    ],
  },
  {
    slug: "proconnect",
    title: "ProConnect",
    categories: ["FinTech", "Education", "SaaS"],
    image: "/assets/proconnect.png",
    website: "https://proconnectpay.com/",
    summary:
      "ProConnect helps African students finance postgraduate study abroad with non-collateral loans, admission guidance, and supported schools.",
    overview: [
      "ProConnect is an education finance platform built to help high-potential African students access global postgraduate education without being blocked by upfront funding limitations.",
      "The platform focuses on non-collateral student loans for programs such as MSc, MBA, LLM, MEng, and MPH across multiple countries and supported schools.",
      "Beyond financing, ProConnect supports the wider study-abroad journey through structured pages for supported schools, global financing, university admission, community, FAQs, and contact.",
      "ProConnect is best positioned as a bridge between African ambition and global education access. It turns a confusing and expensive process into a structured financing and admission pathway.",
    ],
    highlights: [
      "Non-collateral postgraduate loan positioning",
      "Study-abroad funnel covering financing, schools, and admissions",
      "SEO structure for African students searching for global education funding",
      "Clear path from ambition to eligibility and application support",
    ],
    internalPaths: [
      "Supported Schools",
      "Global Financing",
      "University Admission",
      "Global Community",
      "FAQs",
      "Contact",
    ],
    seoKeywords: [
      "postgraduate student loans Africa",
      "study abroad financing Nigeria",
      "non-collateral student loans",
      "MSc funding abroad",
      "MBA student loan Africa",
      "international education financing",
    ],
  },

  {
    slug: "service-blocks",
    title: "Service Blocks",
    categories: ["Agency", "AI", "SaaS"],
    image: "/assets/service-blocks.png",
    website: "https://serviceblocks.biz/",
    summary:
      "Service Blocks builds websites, mobile apps, AI automations, and escrow marketplaces for startups and service businesses.",
    overview: [
      "Service Blocks is a digital product and automation agency that helps startups, first-time founders, product teams, and service-based businesses turn ideas into launch-ready digital systems.",
      "The company provides mobile app development, AI agents and automation, website design and development, and escrow marketplace software development.",
      "The website positions Service Blocks around practical execution for founders who need clarity, speed, and dependable support. Rather than only selling websites, the brand presents a complete system for digital products that attract customers, automate operations, and support growth.",
      "Service Blocks is best positioned as a founder-friendly technology partner that combines product strategy, design, engineering, and AI automation into practical systems.",
    ],
    highlights: [
      "Service architecture for websites, apps, AI automations, and marketplaces",
      "Founder-friendly messaging focused on clarity and launch readiness",
      "Positioning for Nigerian service businesses and early-stage teams",
      "Practical offer structure spanning strategy, design, engineering, and support",
    ],
    internalPaths: [
      "Home",
      "Our Services",
      "Team",
      "FAQs",
      "Contact",
      "Pricing",
    ],
    seoKeywords: [
      "software development agency in Nigeria",
      "mobile app development company",
      "AI automation agency",
      "website design for service businesses",
      "startup MVP development",
      "escrow marketplace software",
    ],
  },
  {
    slug: "purplepay",
    title: "PurplePay",
    categories: ["FinTech", "Payments", "SaaS"],
    image: "/assets/purple-pay.png",
    website: "https://thepurplepay.com/",
    summary:
      "PurplePay is a digital payments platform built for secure onboarding, OTP verification, and seamless everyday transactions.",
    overview: [
      "PurplePay is a digital payments platform designed to make transactions secure, seamless, and easy to manage.",
      "The platform’s core promise is peace of mind. Users can create accounts using basic personal details, verify identity through OTP sent by email or SMS, and access the payment system through a clean login experience.",
      "While the public website still contains some placeholder content, the direction is clear: PurplePay is being built as a modern fintech-style product focused on reliability, user satisfaction, and secure transaction flows.",
      "PurplePay is best positioned as a clean and practical payment solution for users and businesses that need a secure, modern, and easy-to-use way to manage payments.",
    ],
    highlights: [
      "Secure account creation and OTP verification flow",
      "Fintech-style onboarding with clear trust cues",
      "Simple login and transaction management experience",
      "Public website structure for features, process, FAQs, and conversion",
    ],
    internalPaths: [
      "Home",
      "Key Features",
      "How It Works",
      "FAQs",
      "About Us",
      "Login",
      "Sign Up",
    ],
    seoKeywords: [
      "secure payment platform",
      "smart digital payments",
      "fintech payment solution",
      "online payment account",
      "OTP verified payments",
      "seamless transaction platform",
    ],
  },
  {
    slug: "ag-luxury",
    title: "AG Luxury",
    categories: ["Real Estate", "Luxury", "Property"],
    image: "/assets/ag-luxury.png",
    website: "https://agluxury-fullstack.vercel.app/",
    summary:
      "AG Luxury showcases premium apartments, townhouses, and custom homes with refined finishes, amenities, and flexible ownership options.",
    overview: [
      "AG Luxury is a premium real estate and residential development brand built around comfort, elegance, privacy, and refined living.",
      "The platform presents luxury homes as more than buildings. It sells a lifestyle shaped by thoughtful architecture, prime locations, premium finishes, and practical amenities.",
      "AG Luxury emphasizes features that matter to modern property buyers, including prime location, flexible ownership, intentional amenities, privacy, concierge service, wellness spaces, private transport, and smart home integration.",
      "AG Luxury is best positioned as a high-end property brand for people who want elegant homes, lifestyle-focused residences, and real estate investments that feel premium from the first interaction.",
    ],
    highlights: [
      "Luxury real estate positioning around lifestyle and comfort",
      "Property category structure for apartments, townhouses, custom homes, and penthouses",
      "Trust-focused navigation with portfolio, sale properties, policies, and terms",
      "Premium visual direction for buyers, investors, and development partners",
    ],
    internalPaths: [
      "Home",
      "About Us",
      "Portfolio",
      "Property on Sale",
      "Privacy Policy",
      "Terms & Conditions",
    ],
    seoKeywords: [
      "luxury apartments in Nigeria",
      "premium real estate development",
      "residential property developer",
      "penthouse for sale",
      "smart luxury homes",
      "property investment Nigeria",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
