export interface ContactInfo {
  address: string;
  phone: string;
  phoneRaw: string;
  salesEmail: string;
  hrEmail: string;
  location: string;
  socials: {
    linkedin: string;
    twitter: string;
    instagram: string;
    facebook: string;
  };
}

export interface CompanyStats {
  yearsInBusiness: string;
  teamSize: string;
  projectsCompleted: string;
  clientSatisfaction: string;
  countriesServed: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  accent: string;
  features: string[];
  techStack: string[];
  deliverables: string[];
}

export interface IndustryDetail {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  keySolutions: string[];
  stats: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyContext: string;
  avatarInitials: string;
  rating: number;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface InHouseProduct {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  badge: string;
}

export const COMPANY_INFO: ContactInfo = {
  address: "A - 706/707/708/709, Dev Aurum, Near Deer Circle, 100ft Anandnagar Cross Road, Prahladnagar, Ahmedabad - 380015, Gujarat, India",
  phone: "+91 63557 94606",
  phoneRaw: "+916355794606",
  salesEmail: "info@qrioustech.com",
  hrEmail: "hr@qrioustech.in",
  location: "Ahmedabad, India & Global Operations (USA)",
  socials: {
    linkedin: "https://www.linkedin.com/company/qrious-tech/",
    twitter: "https://twitter.com/qrious_tech",
    instagram: "https://www.instagram.com/qrioustechteam.llp",
    facebook: "https://www.facebook.com/qrioustech/"
  }
};

export const COMPANY_STATS: CompanyStats = {
  yearsInBusiness: "20+",
  teamSize: "60+",
  projectsCompleted: "250+",
  clientSatisfaction: "99.4%",
  countriesServed: "15+"
};

export const CEO_MESSAGE = {
  name: "Rikin Thakkar",
  role: "CEO & Founder",
  company: "Qrious Tech Team LLP",
  quote: "At Qrioustech, our mission is to provide businesses with world-class development talent, enabling them to focus on their core objectives while we handle the technology backbone. Our team of 60+ skilled professionals works tirelessly across diverse domains, including web development, mobile technologies, AI/ML, and Salesforce, ensuring the highest quality of work for every client.",
  details: "Our unique approach to contractual staffing, including nested OEM partnerships, ensures flexibility, confidentiality, and seamless integration with client teams. We pride ourselves on our commitment to excellence, collaboration, and delivering value at every step."
};

export const CORE_VALUES = [
  {
    title: "Client-Centric Engineering",
    description: "We don't just build to specifications; we design from your end-users' perspectives to solve core business challenges and unlock tangible ROI.",
    icon: "Target"
  },
  {
    title: "Radical Transparency",
    description: "Clear, proactive communication across time zones. Even thousands of miles away, our agile pods function as a seamless extension of your in-house team.",
    icon: "ShieldCheck"
  },
  {
    title: "Battle-Tested Quality",
    description: "Two decades of offshore delivery frameworks enable us to prevent failures, enforce zero-regression CI/CD, and consistently replicate success.",
    icon: "Sparkles"
  },
  {
    title: "100% IP Security & Confidentiality",
    description: "Strict bilateral NDAs, encrypted workflows, SOC/GDPR-conscious development, and full intellectual property ownership transferred to you.",
    icon: "Lock"
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Discovery & Requirements",
    desc: "We analyze your technical goals, architectural constraints, and business milestones under strict mutual NDAs."
  },
  {
    step: "02",
    title: "Vetted Senior Talent Match",
    desc: "Receive curated engineer profiles and tech lead recommendations matched specifically to your stack within 48 hours."
  },
  {
    step: "03",
    title: "Technical Interview & Alignment",
    desc: "Conduct live code interviews and technical evaluations directly with your prospective team members."
  },
  {
    step: "04",
    title: "Contract Review & Kickoff",
    desc: "Transparent master service agreements with zero hidden costs, flexible ramp-up/down terms, and instant sprint activation."
  },
  {
    step: "05",
    title: "Agile Execution & Scale",
    desc: "Daily asynchronous standups, bi-weekly sprint demos, real-time code commits, and continuous performance optimization."
  }
];

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: "ai-ml",
    slug: "ai-ml-development",
    title: "AI, GenAI & Machine Learning",
    tagline: "Autonomous multi-agent ecosystems, custom LLM fine-tuning, and edge intelligence",
    description: "Accelerate enterprise operations with custom generative AI architectures, stateful multi-agent workflows (LangGraph), vector embeddings (pgvector/Pinecone), computer vision, and real-time voice intelligence agents.",
    iconName: "BrainCircuit",
    accent: "from-orange-500 to-amber-500",
    features: [
      "Multi-Agent LangGraph Systems & Task Automation",
      "Autonomous Voice Agents with Sub-Second Latency",
      "Enterprise RAG & Private Vector Knowledge Bases",
      "Computer Vision & Spatial Video Telemetry",
      "Biometric & Sentiment Analysis Pipelines"
    ],
    techStack: ["Python", "LangGraph", "FastAPI", "PostgreSQL/pgvector", "PyTorch", "TensorFlow", "OpenAI", "Anthropic", "Hugging Face"],
    deliverables: ["Custom AI Agent Fabric", "API Integration & Docs", "Evaluation Benchmarks", "Enterprise Deployment Scripts"]
  },
  {
    id: "web-dev",
    slug: "web-development",
    title: "Cloud-Native Web Platforms",
    tagline: "High-throughput, scalable web architectures built for speed and conversion",
    description: "Design and construct resilient web applications, enterprise portals, microservices, and progressive web apps (PWAs) engineered with modern frontend frameworks and robust backend APIs.",
    iconName: "Globe",
    accent: "from-blue-500 to-cyan-500",
    features: [
      "Modern Next.js & React 19 Single Page & SSR Apps",
      "Scalable Node.js, Nest.js & Java Enterprise Backends",
      "High-Performance Microservices & GraphQL APIs",
      "Progressive Web Apps (PWA) with Offline Resiliency",
      "Enterprise Headless CMS & WordPress Engineering"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "NestJS", "Java", "Tailwind CSS", "PostgreSQL", "Redis", "Docker"],
    deliverables: ["Production-Ready Web App", "CI/CD Pipeline", "Lighthouse 95+ Score", "Comprehensive Test Suites"]
  },
  {
    id: "mobile-dev",
    slug: "mobile-development",
    title: "High-Performance Mobile Apps",
    tagline: "Smooth, responsive native and cross-platform apps for iOS, Android, and wearables",
    description: "From consumer fitness apps to mission-critical enterprise field tools, we engineer fluid mobile experiences with React Native, Flutter, Swift, and Kotlin, extending smoothly into watchOS and tvOS.",
    iconName: "Smartphone",
    accent: "from-emerald-500 to-teal-500",
    features: [
      "Cross-Platform Flutter & React Native Engineering",
      "Native iOS (Swift) & Android (Kotlin) Optimization",
      "Wearable (watchOS) & Living Room (tvOS) Companion Apps",
      "Real-time Device Sensors & Offline-First Sync",
      "App Store & Google Play Launch & Compliance"
    ],
    techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "SQLite", "Apple HealthKit", "Google Fit"],
    deliverables: ["iOS & Android Builds", "Store Listing Optimization", "Crash Analytics Setup", "Source Code & Docs"]
  },
  {
    id: "salesforce",
    slug: "salesforce-development",
    title: "Salesforce Multi-Cloud Consulting",
    tagline: "Transform CRM workflows and connect your entire revenue and service ecosystem",
    description: "Certified Salesforce consulting spanning Sales Cloud, Service Cloud, Experience Cloud, Field Service Lightning (FSL), Salesforce & Conga CPQ, and custom Lightning Web Components (LWC).",
    iconName: "CloudLightning",
    accent: "from-sky-500 to-indigo-500",
    features: [
      "Sales Cloud & Service Cloud Omnichannel Automation",
      "Experience Cloud Partner & Customer Portals",
      "Field Service Lightning (FSL) Dispatch Optimization",
      "Complex Quoting with Salesforce & Conga CPQ",
      "Custom Lightning Web Components (LWC) & Apex"
    ],
    techStack: ["Salesforce CRM", "Apex", "Lightning Web Components", "Conga CPQ", "Salesforce CPQ", "MuleSoft", "Tableau CRM"],
    deliverables: ["Cloud Configuration & Workflows", "Custom LWC Packages", "Data Migration Scripts", "User Training Guides"]
  },
  {
    id: "data-analytics",
    slug: "data-visualization",
    title: "Data Visualization & Microsoft Fabric",
    tagline: "Turn fragmented data into executive, real-time decision intelligence",
    description: "Empower business stakeholders with enterprise Power BI dashboards, semantic data models, Microsoft Fabric pipelines, DAX performance tuning, and secure embedded analytics portals.",
    iconName: "BarChart3",
    accent: "from-amber-500 to-rose-500",
    features: [
      "Custom Power BI Dashboard & KPI Scorecard Design",
      "Semantic Modeling & Star Schema Architectures",
      "DAX Query Profiling & Performance Tuning",
      "Embedded Analytics Portals for SaaS & Customers",
      "Governance, Row-Level Security & Compliance"
    ],
    techStack: ["Power BI", "Microsoft Fabric", "DAX", "Power Query M", "Azure Synapse", "SQL Server", "Snowflake"],
    deliverables: ["Interactive Power BI Reports", "Semantic Data Model", "DAX Performance Audit", "Automated Data Refresh"]
  },
  {
    id: "dedicated-teams",
    slug: "dedicated-development-teams",
    title: "Dedicated Development Pods",
    tagline: "Pre-vetted senior software engineers embedded directly into your sprint cycles",
    description: "Scale your development capacity without the friction of hiring. Our dedicated pods integrate seamlessly into your workflow with nested OEM capability, zero overhead, and full accountability.",
    iconName: "Users",
    accent: "from-purple-500 to-pink-500",
    features: [
      "Hand-Picked Senior Engineers & Technical Leads",
      "Flexible Staff Augmentation & Contractual Staffing",
      "Nested OEM Partnerships with White-Label Options",
      "Timezone Overlap with North America, Europe & APAC",
      "Zero Hiring Overhead & Predictable Monthly Invoicing"
    ],
    techStack: ["Full Stack", "DevOps", "QA Automation", "Project Managers", "UI/UX Designers"],
    deliverables: ["Dedicated Engineering Pod", "Daily Standup Logs", "Sprint Velocity Reports", "Full Code Ownership"]
  }
];

export const INDUSTRIES_LIST: IndustryDetail[] = [
  {
    id: "healthcare",
    name: "Healthcare & HealthTech",
    tagline: "HIPAA-compliant telehealth, patient portals & diagnostic intelligence",
    description: "Powering modern medical ecosystems with secure biomarker diagnostics, EHR integrations, doctor-patient scheduling platforms, and clinical decision support systems.",
    iconName: "Stethoscope",
    keySolutions: ["HIPAA-Compliant Diagnostic Portals", "Biomarker Standardization Engines", "Telemedicine Mobile Apps", "Provider-Patient Scheduling"],
    stats: "300K+ Patient Consults Powered"
  },
  {
    id: "fintech",
    name: "Finance & WealthTech",
    tagline: "Secure personal finance, asset tracking & banking portals",
    description: "Building bank-grade fintech applications, smart personal expense trackers, portfolio management suites, and automated compliance workflows.",
    iconName: "Landmark",
    keySolutions: ["Wealth & Portfolio Management", "Personal Budgeting & Expense Engines", "Charitable Stock Asset Giving", "Encrypted Payment Gateways"],
    stats: "$40M+ Assets Tracked"
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    tagline: "Headless storefronts, loyalty rewards & omni-channel commerce",
    description: "Transforming digital shopping through headless architectures, BigCommerce & Shopify integrations, localized delivery networks, and real-time inventory synchronization.",
    iconName: "ShoppingBag",
    keySolutions: ["Headless Commerce Frontends", "Gamified Loyalty & Points Rewards", "Omnichannel Inventory Sync", "Micro-Delivery Logistics"],
    stats: "1.2M+ Orders Processed"
  },
  {
    id: "sports",
    name: "Sports & Live Entertainment",
    tagline: "Real-time court telemetry, tournament management & media streaming",
    description: "Replacing outdated paperwork with sub-second digital scoring, live tournament brackets, fan engagement mobile apps, and real-time statistical analytics.",
    iconName: "Trophy",
    keySolutions: ["Sub-Second Live Scoring", "Bracket & Roster Automation", "Fan Engagement Portals", "Referee & Stat Telemetry"],
    stats: "50,000+ Matches Scored"
  },
  {
    id: "hcm",
    name: "Human Capital & Workforce",
    tagline: "Shift allocation, automated onboarding & municipal resource hubs",
    description: "Streamlining enterprise workforce operations with serverless restaurant staffing apps, automated timesheets, shift swaps, and urban service management.",
    iconName: "Briefcase",
    keySolutions: ["Restaurant Workforce Portals", "Automated Shift Scheduling", "Municipal Service Dispatch", "Compliance & Timecard Auditing"],
    stats: "85% Less Administrative Friction"
  },
  {
    id: "education",
    name: "Education & EdTech",
    tagline: "AI-powered exam synthesis, adaptive learning & interactive games",
    description: "Empowering educators and young learners with generative exam synthesis platforms, early-childhood foundational skills apps, and interactive gamified learning.",
    iconName: "GraduationCap",
    keySolutions: ["AI Exam Synthesis & Grading", "Early Childhood Phonics & Maths", "Classroom Engagement Tools", "Adaptive Curriculum Mapping"],
    stats: "100K+ Active Students"
  }
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: "stuart-rox",
    name: "Stuart Rox",
    role: "Founder / CEO",
    companyContext: "Healthcare & Enterprise Solutions Client",
    avatarInitials: "SR",
    rating: 5,
    text: "Partnering with Qrioustech Team LLP has been a seamless experience. Their developers are highly skilled, professional, and adaptable to complex requirements. The team consistently delivers high-quality solutions that meet our project goals. Their expertise across various domains, including healthcare and service-based industries, has been invaluable."
  },
  {
    id: "lorel-parker",
    name: "Lorel Parker",
    role: "Chief Technology Officer",
    companyContext: "SaaS & CRM Enterprise Client",
    avatarInitials: "LP",
    rating: 5,
    text: "We were impressed by Qrioustech Team LLP's commitment to excellence. Their developers integrated effortlessly into our existing team, contributing innovative ideas and solutions. From CRM development to AI-driven projects, their technical proficiency ensured the success of our initiatives. Highly recommended for businesses seeking reliable development support."
  },
  {
    id: "shota-oda",
    name: "Shota Oda",
    role: "Chief Executive Officer",
    companyContext: "Energy & Mobile Application Partner",
    avatarInitials: "SO",
    rating: 5,
    text: "Qrioustech Team LLP has been a game-changer for our business. Their expertise in Mobile Apps and CRM implementation helped us achieve significant milestones. Despite the complexity of our project in the oil industry, their team delivered beyond expectations. Their ability to work discreetly and efficiently is unmatched."
  },
  {
    id: "shin-paul",
    name: "Shin Paul",
    role: "Co-Founder & Managing Director",
    companyContext: "Media & Digital Platform Venture",
    avatarInitials: "SP",
    rating: 5,
    text: "The Qrioustech team exceeded our expectations. Their proactive approach and technical knowledge in music and digital media projects brought our vision to life. Their ability to collaborate and deliver under tight deadlines was truly commendable. We look forward to working with them on future endeavors."
  }
];

export const IN_HOUSE_PRODUCTS: InHouseProduct[] = [
  {
    id: "qt-kids-maths",
    title: "Qt Kids: Maths",
    subtitle: "Interactive Numerical Fluency",
    description: "A gamified, curriculum-aligned mathematical mobile application empowering children to master addition, subtraction, multiplication, and mental arithmetic through intuitive visual puzzles.",
    icon: "Calculator",
    features: ["Adaptive Difficulty Progression", "Interactive Number Visualizers", "Multi-Language Voice Prompts", "Detailed Parent Progress Tracking"],
    badge: "Proprietary Product"
  },
  {
    id: "qt-kids-drawing",
    title: "Qt Kids: Drawing",
    subtitle: "Creative Digital Canvas",
    description: "An intuitive touch-driven drawing and coloring playground tailored for toddlers and early learners to develop fine motor coordination and artistic expression.",
    icon: "Palette",
    features: ["Custom Neon & Pastel Palettes", "Shape Tracing Assistance", "Anti-Scribble Guardrails", "Offline Gallery Export"],
    badge: "Proprietary Product"
  },
  {
    id: "qt-kids-games",
    title: "Qt Kids: Games",
    subtitle: "Cognitive Puzzle Suite",
    description: "A comprehensive cognitive development suite combining memory match, spatial puzzles, pattern recognition, and logic puzzles into child-safe gameplay.",
    icon: "Gamepad2",
    features: ["Zero Third-Party Ads", "Child-Safe Privacy Design", "Logical Deduction Levels", "Auditory Reinforcement Rewards"],
    badge: "Proprietary Product"
  },
  {
    id: "qt-kids-cvc",
    title: "Qt Kids: CVC Words",
    subtitle: "Early Phonics & Reading Mastery",
    description: "A science-backed phonics engine helping preschool and kindergarten students decode consonant-vowel-consonant (CVC) word structures with audio-visual phoneme matching.",
    icon: "BookOpen",
    features: ["Synthetic Phonics Audio", "Word-Family Sorting", "Flashcard & Spelling Quizzes", "Dyslexia-Friendly Typography"],
    badge: "Proprietary Product"
  }
];

export const FAQS_LIST: FAQItem[] = [
  {
    category: "Engagement & Staffing",
    question: "How quickly can you allocate additional developers to our project if needed?",
    answer: "At Qrious Tech Team LLP, we prioritize responsiveness and flexibility. If additional developers are required for your project, our resource matching engine identifies qualified senior engineers within 48 hours. Depending on specific tech stack requirements, onboarding typically completes within 3 to 7 business days, ensuring seamless scaling without disrupting current sprints."
  },
  {
    category: "Project Management",
    question: "What is your approach to project management and communication?",
    answer: "We embrace Agile Scrum methodologies tailored for distributed global teams. Our workflow includes daily asynchronous standups, bi-weekly sprint demos, shared Kanban boards (Jira, Linear, GitHub Projects), and open Slack/Teams channels. We practice proactive over-communication so clients sitting thousands of miles away experience complete visibility and real-time predictability."
  },
  {
    category: "IP & Security",
    question: "What measures do you take to protect our intellectual property (IP)?",
    answer: "Safeguarding your IP is paramount. Before exchanging any documentation, we execute comprehensive mutual Non-Disclosure Agreements (NDAs). Our contracts explicitly stipulate that 100% of all intellectual property, source code, designs, and architectural assets belong entirely to you upon creation. We operate with strict repository access controls, VPNs, and encrypted developer workstations."
  },
  {
    category: "Collaboration",
    question: "What role does the client play in the product development process?",
    answer: "We operate as collaborative co-creators rather than detached contractors. You maintain full product vision ownership, participate in sprint backlog grooming and priority decisions, attend demo reviews, and validate release deliverables. Our tech leads offer continuous architectural advisory, pointing out cost optimizations and technical tradeoffs along the way."
  },
  {
    category: "Quality Assurance",
    question: "How do you handle quality assurance, code reviews, and bug resolution?",
    answer: "Quality is engineered into every stage of development. Every pull request undergoes peer review, automated linting, unit test validation, and static security scanning before staging deployment. If defects or edge-case regressions occur, our dedicated QA specialists triage by severity: critical blockers are resolved within hours with hotfixes, followed by root-cause documentation and regression tests."
  },
  {
    category: "Contracts & Flexibility",
    question: "What happens if a client wants to terminate or adjust the contract early?",
    answer: "We believe in earning your trust through continuous delivery, not rigid lock-ins. Our agreements provide clear, fair notice periods (typically 14 to 30 days) for adjustments or early termination. In the rare event of early termination, we coordinate a thorough knowledge transfer, hand over all documentation, repository branches, and deployment configs with zero disruption."
  }
];

export const TECH_PRACTICES_CATEGORIES = [
  {
    category: "Frontend & Web",
    techs: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML5/CSS3", "Progressive Web Apps (PWA)", "WordPress"]
  },
  {
    category: "Backend & Cloud",
    techs: ["Node.js", "Nest.js", "Python", "FastAPI", "Java Enterprise", "Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Docker", "Microservices"]
  },
  {
    category: "Mobile & Wearables",
    techs: ["Flutter", "React Native", "Swift (iOS)", "Kotlin (Android)", "Apple Watch (watchOS)", "Apple TV (tvOS)", "Xamarin"]
  },
  {
    category: "AI, ML & Data",
    techs: ["LangGraph & LangChain", "pgvector & Embeddings", "PyTorch / TensorFlow", "Computer Vision", "Power BI", "Microsoft Fabric", "DAX Optimization", "Tableau"]
  },
  {
    category: "Salesforce & CRM",
    techs: ["Sales Cloud", "Service Cloud", "Experience Cloud", "Field Service (FSL)", "Salesforce CPQ", "Conga CPQ", "Apex & Lightning Web Components (LWC)"]
  }
];

