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

export interface FocusArea {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface IndustryDetail {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  stats: string;
  keySolutions: string[];
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

export interface ArticleItem {
  id: string;
  category: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  image: string;
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
  yearsInBusiness: "8+",
  teamSize: "100+",
  projectsCompleted: "500+",
  clientSatisfaction: "99.4%",
  countriesServed: "15+"
};

export const HERO_CONTENT = {
  pill: "500+ Projects Delivered • AI & Modern Engineering",
  titleMain: "Building & Deploying",
  titleHighlight: "AI Solutions For Your Business",
  subtitle: "Qrious Tech Team LLP helps businesses deploy production-ready AI agents, workflow automation, and custom intelligent software that drive measurable revenue and operational efficiency.",
  ctaPrimary: "Explore 37 Case Studies",
  ctaSecondary: "Book A Free Consultation",
  bulletPoints: [
    "Providing tailored AI solutions for your unique business needs",
    "Driving technological advancement to keep your business ahead",
    "Implementing robust measures to safeguard your data and systems",
    "Adapting solutions to accommodate your company's growth seamlessly"
  ]
};

export const CEO_MESSAGE = {
  name: "Rikin Thakkar",
  role: "CEO & Founder",
  company: "Qrious Tech Team LLP",
  quote: "At Qrioustech, our mission is to empower businesses with production AI systems, autonomous agents, and dedicated engineering pods, enabling leadership to focus on core growth while we handle the technology backbone. Our team works tirelessly across AI/ML, cloud platforms, and modern web architectures, ensuring the highest standard of delivery for every enterprise client.",
  details: "Our dedicated engineering pods and 14-day rapid AI proof-of-concepts ensure complete IP ownership, confidentiality, and seamless integration with client roadmaps. We pride ourselves on engineering rigor, transparent collaboration, and tangible business ROI at every step."
};

export const WHY_CHOOSE_ITEMS = [
  {
    step: "01",
    title: "Easier To Implement",
    subtitle: "Smooth & Frictionless Adoption",
    description: "Deploy AI and modern tech smoothly and hassle-free. Our proven architectural frameworks ensure seamless, deterministic integration with your existing databases and enterprise workflows.",
    icon: "Target"
  },
  {
    step: "02",
    title: "Increase Growth Rates",
    subtitle: "Measurable Acceleration",
    description: "Boost your business and grow faster with our smart solutions. We assemble dedicated pods that accelerate sprint velocity and cut time-to-market dramatically.",
    icon: "TrendingUp"
  },
  {
    step: "03",
    title: "Branding Of The Future",
    subtitle: "Modern Digital Excellence",
    description: "Stand out with a modern product image that fits tomorrow's trends. From state-of-the-art AI systems to elegant mobile experiences, we elevate your digital presence.",
    icon: "Sparkles"
  }
];

export const CORE_VALUES = [
  {
    title: "Client-Centric Approach",
    description: "For any business, customers are always at the center. We think from YOUR end customers' perspectives, their pain areas and devise solutions that solve core problems to benefit your business.",
    icon: "Target"
  },
  {
    title: "Effective Collaboration",
    description: "Communication is the key. When our development team collaborates with clients sitting a thousand miles away, we ensure effectiveness, transparency, and accuracy across platforms.",
    icon: "ShieldCheck"
  },
  {
    title: "Quality Delivered in Time",
    description: "With proven engineering delivery frameworks, our teams deliver solutions with superior quality at all times, preventing failures and replicating production success.",
    icon: "Sparkles"
  },
  {
    title: "IP Protection & Security",
    description: "Strict bilateral NDAs, 100% intellectual property ownership to you, repository access controls, and encrypted developer environments.",
    icon: "Lock"
  }
];

export const IN_HOUSE_PRODUCTS = [
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

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Share Your Business Requirements",
    desc: "Provide us with your requirements and we will match you with the best of our vetted resources that meet your technical needs under mutual NDA."
  },
  {
    step: "02",
    title: "Get Curated Developer CVs",
    desc: "Receive pre-vetted senior developer profiles within 48 hours, screened specifically for your tech stack, domain, and time zone requirements."
  },
  {
    step: "03",
    title: "Schedule Technical Interview",
    desc: "Conduct direct technical interviews and live code reviews with the candidates to validate technical alignment before committing."
  },
  {
    step: "04",
    title: "Review and Sign Contract",
    desc: "Transparent master service agreements with zero hidden costs, flexible ramp-up/down terms, and 100% intellectual property ownership to you."
  },
  {
    step: "05",
    title: "Get Started & Scale Sprints",
    desc: "Upon your confirmation, our developer pod commences work on the agreed-upon date with daily asynchronous standups and sprint reviews."
  }
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: "product-development",
    title: "Product Development",
    tagline: "Visionary Products from Concept to Reality",
    description: "Crafting visionary products from concept to reality, our development team turns ideas into impactful, user-centric software solutions.",
    iconName: "Rocket",
    features: [
      "Zero-to-one MVP architecture & prototyping",
      "Full-cycle product design & engineering",
      "Scalable multi-tenant SaaS platforms",
      "Continuous CI/CD automated deployments"
    ]
  },
  {
    id: "product-architect",
    title: "Product Architect",
    tagline: "Resilient & Scalable Foundations",
    description: "Building resilient and scalable foundations, our architects design the technical blueprint for your product's long-term performance and reliability.",
    iconName: "Cpu",
    features: [
      "Microservices & event-driven architecture",
      "Cloud infrastructure on AWS & Google Cloud",
      "Database schema & query optimization",
      "High-concurrency load & fault-tolerance"
    ]
  },
  {
    id: "power-bi",
    title: "Power BI & Data Analytics",
    tagline: "Actionable Insights from Fragmented Data",
    description: "Transforming raw data into actionable insights, our Power BI experts illuminate the path to informed executive decision-making.",
    iconName: "BarChart3",
    features: [
      "Custom interactive Power BI dashboards",
      "Data modeling & DAX performance tuning",
      "Microsoft Fabric semantic layer design",
      "Secure embedded customer analytics"
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    tagline: "Dynamic, High-Speed Web Platforms",
    description: "From captivating user interfaces to robust backends, we build dynamic web experiences that elevate your online presence and conversion rates.",
    iconName: "Globe",
    features: [
      "Modern Next.js & React 19 web applications",
      "Robust Node.js, Nest.js & Java APIs",
      "Progressive Web Apps (PWA) with offline sync",
      "Lighthouse 95+ performance optimization"
    ]
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    tagline: "Intuitive Apps on iOS, Android & Wearables",
    description: "Creating intuitive and engaging mobile applications, we connect you with your audience anytime, anywhere across phones, tablets, and wearables.",
    iconName: "Smartphone",
    features: [
      "Cross-platform Flutter & React Native apps",
      "Native Swift (iOS) & Kotlin (Android) apps",
      "Companion apps for watchOS & tvOS",
      "Apple HealthKit & Google Fit integrations"
    ]
  },
  {
    id: "salesforce",
    title: "Salesforce Development",
    tagline: "Maximizing Multi-Cloud CRM Potential",
    description: "Maximizing the potential of Salesforce, we streamline your processes and enhance customer relationships for sustained revenue growth.",
    iconName: "CloudLightning",
    features: [
      "Sales Cloud & Service Cloud automation",
      "Experience Cloud customer & partner portals",
      "Salesforce & Conga CPQ quoting engines",
      "Custom Lightning Web Components (LWC)"
    ]
  }
];

export const INDUSTRIES_LIST: IndustryDetail[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    tagline: "Optimizing patient care & compliance",
    description: "Optimizing patient care and operational efficiency with secure healthcare technology solutions, HIPAA-compliant patient portals, and diagnostic intelligence.",
    iconName: "Stethoscope",
    stats: "300K+ Consults Powered",
    keySolutions: [
      "HIPAA-Compliant Patient Portals",
      "Telehealth Video Consultation",
      "EMR/EHR Healthcare Integrations"
    ]
  },
  {
    id: "finance",
    name: "Finance",
    tagline: "Secure, scalable financial software",
    description: "Driving innovation and compliance with secure, scalable financial software, wealth management dashboards, personal budgeting apps, and encrypted transaction flows.",
    iconName: "Landmark",
    stats: "$40M+ Assets Tracked",
    keySolutions: [
      "Encrypted Payment Gateways",
      "Automated Wealth & Portfolio Dashboards",
      "Regulatory Compliance & Audit Trails"
    ]
  },
  {
    id: "education",
    name: "Education",
    tagline: "Interactive e-learning platforms",
    description: "Empowering educators and learners with interactive, accessible e-learning platforms, AI-powered exam synthesis, and adaptive curriculum tools.",
    iconName: "GraduationCap",
    stats: "100K+ Active Students",
    keySolutions: [
      "LMS & Virtual Classroom Platforms",
      "Adaptive Curriculum & Quizzing",
      "Student Performance Analytics"
    ]
  },
  {
    id: "retail",
    name: "Retail & Ecommerce",
    tagline: "Seamless shopping & loyalty systems",
    description: "Transforming customer experiences and boosting sales with seamless e-commerce systems, headless commerce frontends, and automated rewards.",
    iconName: "ShoppingBag",
    stats: "1.2M+ Orders Processed",
    keySolutions: [
      "Headless E-commerce Architecture",
      "Omnichannel Inventory Management",
      "Customer Loyalty & Reward Engines"
    ]
  },
  {
    id: "entertainment",
    name: "Entertainment",
    tagline: "Streaming & interactive digital media",
    description: "Elevating digital entertainment with engaging apps, streaming platforms, and interactive media designed for high-concurrency audiences.",
    iconName: "Tv",
    stats: "Millions of Stream Hours",
    keySolutions: [
      "Ultra-Low Latency Media Streaming",
      "Interactive Community & Voting Feeds",
      "Recurring Subscription Billing"
    ]
  },
  {
    id: "sports",
    name: "Sports",
    tagline: "Real-time tournament & scoring apps",
    description: "Transforming sports management and fan experiences through innovative technology, sub-second live court scoring, and bracket automation.",
    iconName: "Trophy",
    stats: "50,000+ Matches Scored",
    keySolutions: [
      "Real-Time Match Scoring & Sync",
      "Dynamic Bracket Tournament Automation",
      "Player Stats & Analytics Leaderboards"
    ]
  },
  {
    id: "hcm",
    name: "Human Capital (HCM)",
    tagline: "Streamlining HR & workforce dispatch",
    description: "Streamlining HR operations and talent management with intuitive software, automated shift scheduling, timecard compliance, and employee onboarding.",
    iconName: "Briefcase",
    stats: "85% Less Friction",
    keySolutions: [
      "Automated Shift Scheduling & Rosters",
      "Timecard & Payroll Compliance",
      "Employee Self-Service Portals"
    ]
  },
  {
    id: "on-demand",
    name: "On Demand",
    tagline: "Fast, reliable & scalable dispatch",
    description: "Powering the on-demand economy with fast, reliable, and scalable apps for service dispatch, ticket routing, and instant booking.",
    iconName: "Zap",
    stats: "Sub-Second Dispatch",
    keySolutions: [
      "Geo-Location Driver Dispatch Engine",
      "Real-Time Order Tracking & Push Alerts",
      "Instant In-App Booking & Invoicing"
    ]
  }
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: "stuart-rox",
    name: "STUART ROX",
    role: "Founder / CEO",
    companyContext: "Healthcare & Enterprise Solutions Client",
    avatarInitials: "SR",
    rating: 5,
    text: "Partnering with Qrioustech Team LLP has been a seamless experience. Their developers are highly skilled, professional, and adaptable to complex requirements. The team consistently delivers high-quality solutions that meet our project goals. Their expertise across various domains, including healthcare and service-based industries, has been invaluable."
  },
  {
    id: "lorel-parker",
    name: "LOREL PARKER",
    role: "Chief Technology Officer",
    companyContext: "SaaS & CRM Enterprise Client",
    avatarInitials: "LP",
    rating: 5,
    text: "We were impressed by Qrioustech Team LLP's commitment to excellence. Their developers integrated effortlessly into our existing team, contributing innovative ideas and solutions. From CRM development to AI-driven projects, their technical proficiency ensured the success of our initiatives. Highly recommended for businesses seeking reliable development support."
  },
  {
    id: "shota-oda",
    name: "SHOTA ODA",
    role: "Chief Executive Officer",
    companyContext: "Energy & Mobile Application Partner",
    avatarInitials: "SO",
    rating: 5,
    text: "Qrioustech Team LLP has been a game-changer for our business. Their expertise in Mobile Apps and CRM implementation helped us achieve significant milestones. Despite the complexity of our project in the oil industry, their team delivered beyond expectations. Their ability to work discreetly and efficiently is unmatched."
  },
  {
    id: "shin-paul",
    name: "SHIN PAUL",
    role: "Co-Founder & Managing Director",
    companyContext: "Media & Digital Platform Venture",
    avatarInitials: "SP",
    rating: 5,
    text: "The Qrioustech team exceeded our expectations. Their proactive approach and technical knowledge in music-related projects brought our vision to life. Their ability to collaborate and deliver under tight deadlines was truly commendable. We look forward to working with them on future endeavors."
  }
];

export const ARTICLES_LIST: ArticleItem[] = [
  {
    id: "ux-ui-design",
    category: "IT Projects",
    title: "Ideal Approach to Design Successful UX & UI",
    date: "20 June 2023",
    author: "Admin",
    summary: "Users expect friendly yet elegant designs in the apps or digital products they use, irrespective of your business objectives. Discover how to create premium digital journeys that drive retention.",
    image: "/images/Ideal Approach to Design Successful UX & UI.png"
  },
  {
    id: "mobile-trends",
    category: "Mobile Apps",
    title: "5 Most Popular Trends for Mobile App Development",
    date: "08 May 2023",
    author: "Admin",
    summary: "Explore cross-platform frameworks, edge AI integrations, wearable companion apps, and modern reactive architectures dominating the mobile engineering landscape.",
    image: "/images/5 Most Popular Trends for Mobile App Development.png"
  },
  {
    id: "blockchain-product",
    category: "Development",
    title: "Blockchain Software Product: What exactly BLOCKCHAIN technology is?",
    date: "24 June 2023",
    author: "Admin",
    summary: "Blockchain is a way to make transactions and transfers online without intermediaries. Explore smart contracts, decentralized ledgers, and enterprise integration patterns.",
    image: "/images/blockchain-software-product.png"
  }
];

export const FAQS_LIST: FAQItem[] = [
  {
    category: "About Qtech",
    question: "How long has your company been in business?",
    answer: "Qrious Tech Team LLP has been proudly serving clients in the technology industry since 2017. We have established ourselves as a trusted partner for production AI and scalable systems, delivering 500+ successful projects for 200+ clients across healthcare, finance, SaaS, oil & energy, and on-demand platforms."
  },
  {
    category: "Team & Expertise",
    question: "What qualifications and experience do your developers have?",
    answer: "At Qrious Tech Team LLP, our senior engineering pods hold industry certifications across AWS, Salesforce, Google Cloud, and AI architectures. They possess extensive hands-on experience in full-stack web, mobile app development (Flutter, iOS, Android), enterprise CRM, and BI data visualization with collaborative Agile delivery."
  },
  {
    category: "Staffing",
    question: "How quickly can you allocate additional developers to our project if needed?",
    answer: "At Qrious Tech Team LLP, we prioritize responsiveness and flexibility. If additional developers are required for your project, our resource matching engine identifies qualified senior engineers within 48 hours. Depending on specific tech stack requirements, onboarding typically completes within 3 to 7 business days, ensuring seamless scaling without disrupting current sprints."
  },
  {
    category: "Project Management",
    question: "What is your approach to project management?",
    answer: "At Qrious Tech Team LLP, we prioritize effective project management to ensure successful delivery. Our approach includes clear transparent communication, detailed upfront milestone planning, Agile Scrum methodology for flexible iterative delivery, multidisciplinary team collaboration, proactive risk mitigation, and rigorous quality control."
  },
  {
    category: "Collaboration",
    question: "What role does the client play in the product development process?",
    answer: "We believe in fostering active collaboration and partnership. Clients are pivotal in defining requirements, approving user experience designs, prioritizing sprint backlogs, and evaluating sprint deliverables. You remain in full control of your vision while we provide architectural guidance."
  },
  {
    category: "IP Security",
    question: "What measures do you take to protect intellectual property rights?",
    answer: "Safeguarding client IP rights is paramount. We begin by executing mutual Non-Disclosure Agreements (NDAs). Our contracts explicitly assign 100% IP ownership of all developed assets and source code to the client. We enforce repository access controls, VPNs, encrypted workstations, and regular compliance audits."
  },
  {
    category: "Contracts",
    question: "What happens if a client wants to terminate the contract early?",
    answer: "In the event that a client wishes to terminate or adjust the contract early, we handle the process with transparency and fairness adhering to the agreed terms. We provide standard notice periods (14 to 30 days) and ensure an orderly handover of all code repositories, documentation, and credentials with zero disruption."
  }
];

export const SERVICES_LIST = [
  {
    id: "ai-ml-development",
    slug: "ai-ml-development",
    title: "AI / ML Development",
    tagline: "Autonomous Agents & Custom Intelligence",
    description: "We build and deploy production AI solutions: multi-agent autonomous swarms, private RAG pipelines, and fine-tuned open-weights models tailored to your business.",
    iconName: "Brain",
    features: [
      "Custom LLM fine-tuning & private RAG integration",
      "Autonomous LangGraph & CrewAI multi-agent swarms",
      "Computer vision & biometric recognition algorithms",
      "Enterprise zero-leakage privacy & VPC deployment"
    ],
    techStack: ["Python", "PyTorch", "LangGraph", "Llama 3.3", "Claude", "FastAPI"],
    deliverables: ["Deployed Model Endpoints", "Private Vector Hub", "Production Agentic Workflows"]
  },
  {
    id: "ai-modernization-partner",
    slug: "ai-modernization-partner",
    title: "AI Modernization Partner",
    tagline: "Transforming Business Workflows with AI",
    description: "Modernize your existing business software and processes with AI. We re-engineer workflows, integrate LLMs, and automate repetitive tasks with zero data leakage.",
    iconName: "Sparkles",
    features: [
      "Full architecture and workflow automation audit",
      "Embeddings & semantic vector search implementation",
      "Intelligent document understanding & process automation",
      "Zero data-leakage enterprise privacy compliance"
    ],
    techStack: ["LangChain", "LlamaIndex", "Python", "Vector DBs", "AWS Bedrock", "Azure OpenAI"],
    deliverables: ["Modernized Cloud Architecture", "AI Automation Suite", "Compliance Audit"]
  },
  {
    id: "dedicated-development-teams",
    slug: "dedicated-development-teams",
    title: "Dedicated AI & Tech Pods",
    tagline: "Senior Engineers & Fast Onboarding",
    description: "Scale your engineering capacity with dedicated developers and AI specialists who integrate directly into your Slack and Jira to deliver solutions fast.",
    iconName: "Users2",
    features: [
      "Vetted senior developer profiles allocated in 48 hours",
      "Direct integration into your Slack, Jira, and GitHub",
      "Flexible ramp-up with zero recruitment friction",
      "100% intellectual property ownership from day one"
    ],
    techStack: ["React 19", "Next.js", "Flutter", "Salesforce", "Python", "AWS"],
    deliverables: ["Dedicated Engineering Pod", "Daily Standup Logs", "Sprint Backlog Burndown"]
  },
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    tagline: "High-Performance Modern Web Apps",
    description: "From engaging user interfaces to scalable backends, we build fast, responsive Next.js and React applications built for your users and customers.",
    iconName: "Globe",
    features: [
      "Modern Next.js & React 19 web applications",
      "Robust Node.js, Nest.js & Python APIs",
      "Progressive Web Apps (PWA) with offline sync",
      "Lighthouse 95+ performance optimization"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "NestJS", "PostgreSQL"],
    deliverables: ["Full Stack Web App", "REST/GraphQL APIs", "Lighthouse 95+ Score"]
  },
  {
    id: "power-bi",
    slug: "data-visualization",
    title: "Power BI & Analytics",
    tagline: "Transforming Data into Actionable Insights",
    description: "Transform your company data into clean, interactive Power BI dashboards and predictive reports for fast, confident business decisions.",
    iconName: "BarChart3",
    features: [
      "Custom interactive Power BI dashboards",
      "Data modeling & DAX performance tuning",
      "Microsoft Fabric semantic layer design",
      "Secure embedded customer analytics"
    ],
    techStack: ["Power BI", "Microsoft Fabric", "DAX", "Power Query", "Azure Synapse"],
    deliverables: ["Interactive Dashboards", "Semantic Model", "DAX Performance Audit"]
  },
  {
    id: "mobile-development",
    slug: "mobile-development",
    title: "Mobile App Development",
    tagline: "Intuitive & Engaging Mobile Applications",
    description: "Creating intuitive and engaging mobile applications, we connect you with your audience anytime, anywhere on iOS and Android.",
    iconName: "Smartphone",
    features: [
      "Cross-platform Flutter & React Native apps",
      "Native Swift (iOS) & Kotlin (Android) apps",
      "Companion apps for watchOS & tablet devices",
      "Real-time offline sync & push notifications"
    ],
    techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
    deliverables: ["iOS & Android App Store Builds", "Complete Source Code"]
  },
  {
    id: "salesforce",
    slug: "salesforce-development",
    title: "Salesforce Development",
    tagline: "Maximizing Multi-Cloud Potential",
    description: "Maximizing the potential of Salesforce, we streamline your customer operations and sales pipelines with custom Lightning components and automations.",
    iconName: "CloudLightning",
    features: [
      "Sales Cloud & Service Cloud automation",
      "Experience Cloud customer & partner portals",
      "Salesforce & Conga CPQ quoting engines",
      "Custom Lightning Web Components (LWC)"
    ],
    techStack: ["Salesforce CRM", "Apex", "LWC", "Conga CPQ", "MuleSoft"],
    deliverables: ["Custom LWC Components", "Workflows & Automations", "User Training Docs"]
  },
  {
    id: "saas-development-partner",
    slug: "saas-development-partner",
    title: "Custom Software & SaaS Development",
    tagline: "Fast Idea to Working Software",
    description: "Turn your business idea or internal workflow into market-ready software. We take you from early prototype to live production deployment.",
    iconName: "Rocket",
    features: [
      "Multi-tenant database schema & tenancy isolation",
      "Stripe / LemonSqueezy subscription billing engines",
      "Automated CI/CD with Kubernetes & AWS CloudFormation",
      "Rapid 90-day production MVP release milestone"
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "AWS", "Stripe"],
    deliverables: ["Production Multi-Tenant SaaS", "Admin Backoffice", "Architecture Blueprint"]
  },
  {
    id: "product-development",
    slug: "product-development",
    title: "Product Engineering",
    tagline: "Full-Cycle Digital Solutions",
    description: "Crafting digital software from concept to reality, our engineering team turns operational requirements into reliable, scalable applications.",
    iconName: "Rocket",
    features: [
      "Zero-to-one MVP architecture & prototyping",
      "Full-cycle product design & engineering",
      "Scalable multi-tenant SaaS platforms",
      "Continuous CI/CD automated deployments"
    ],
    techStack: ["React 19", "Next.js", "Node.js", "Python", "PostgreSQL", "Docker"],
    deliverables: ["Production Web/Mobile App", "Architecture Blueprint", "CI/CD Pipeline"]
  },
  {
    id: "product-architect",
    slug: "product-architect",
    title: "System Architecture",
    tagline: "Resilient & Scalable Foundations",
    description: "Building resilient and scalable foundations, our architects design the blueprint for your system's long-term performance and reliability.",
    iconName: "Cpu",
    features: [
      "Microservices & event-driven architecture",
      "Cloud infrastructure on AWS & Google Cloud",
      "Database schema & query optimization",
      "High-concurrency load & fault-tolerance"
    ],
    techStack: ["AWS", "Google Cloud", "Kubernetes", "Redis", "Kafka", "PostgreSQL"],
    deliverables: ["Cloud Architecture Spec", "Security Audit", "IaC Terraform Scripts"]
  }
];

export const TECH_PRACTICES_CATEGORIES = [
  {
    category: "Frontend & Web",
    techs: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Progressive Web Apps (PWA)", "WordPress"]
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
    techs: ["LangChain & LangGraph", "pgvector & Embeddings", "PyTorch / TensorFlow", "Computer Vision", "Power BI", "Microsoft Fabric", "DAX Optimization"]
  },
  {
    category: "Salesforce & CRM",
    techs: ["Sales Cloud", "Service Cloud", "Experience Cloud", "Field Service (FSL)", "Salesforce CPQ", "Conga CPQ", "Apex & Lightning Web Components (LWC)"]
  }
];
