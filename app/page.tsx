import Image from "next/image"
import Link from "next/link"

const brands = [
  "NIKE",
  "EY",
  "PwC",
  "KPMG",
  "BITEWELL",
  "BLUECROSS",
]

const certifications = [
  {
    name: "PSM I",
    image: "/psm-i-badge.png",
  },
  {
    name: "PSPO I",
    image: "/pspo-i-badge.png",
  },
  {
    name: "Cornell University Product Management",
    image: "/cornell-badge.png",
  },
  {
    name: "ISO 42001 AI Governance",
    image: "/iso-42001-badge.png",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="bg-white pt-8 pb-8 lg:pt-12 lg:pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Name */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 tracking-wider">
              KANWAL AALIJAH
            </h1>

            {/* Navigation Menu */}
            <nav className="mb-16">
              <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base tracking-wider">
                <li>
                  <Link href="#home" className="text-gray-600 hover:text-black transition-colors font-medium">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-gray-600 hover:text-black transition-colors font-medium">
                    PRODUCT
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/kanwal-aalijah/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors font-medium"
                  >
                    LINKEDIN
                  </a>
                </li>
                <li>
                  <a
                    href="https://scholar.google.com/citations?user=7kXIFdYAAAAJ&hl=en&oi=ao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors font-medium"
                  >
                    GOOGLE SCHOLAR
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/KanwalAalijah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors font-medium"
                  >
                    GITHUB
                  </a>
                </li>
              </ul>
            </nav>

            {/* Profile Image */}
            <div className="mb-8">
              <div className="relative w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-gray-200 overflow-hidden bg-[#D4B896]">
                <Image
                  src="/kanwal3.jpg"
                  alt="Kanwal Aalijah"
                  width={256}
                  height={256}
                  className="object-contain w-full h-full scale-[1.34] translate-y-[12%]"
                  priority
                />
              </div>
            </div>

            {/* Quote */}
            <div className="max-w-4xl mb-12">
              <h2 className="text-[17px] md:text-[19px] lg:text-[23px] font-normal text-black leading-tight">
                Crafting meaningful, AI-driven products that turn data into insight and ideas into impact.
              </h2>
            </div>

            {/* Title */}
            <div className="max-w-5xl mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black tracking-wide">
                PRODUCT & PROGRAM MANAGER | PRODUCT OWNER, SCRUM MASTER & PMP-CERTIFIED
              </h3>
            </div>

            {/* Description */}
            <div className="max-w-5xl">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light text-justify">
                I build intelligent products that push boundaries and redefine how industries operate. With over a
                decade of experience in AI, SaaS, and platform innovation, I have led global launches across fintech,
                market intelligence, food tech, and urban analytics. I create systems that turn complexity into clarity
                and scale into simplicity. I&apos;ve worked across B2B, B2C, and B2B2C models. I have build products that serve real users and
                real business needs. My work centers on agentic AI systems, AI-powered platforms, and blockchain-integrated
                ecosystems. I focus on creating solutions that people use, that make an impact, and that last. The future
                isn&apos;t predicted, it&apos;s built, one step at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="pt-1 pb-12 lg:pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-6 tracking-wide">
              CERTIFICATIONS
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      width={96}
                      height={96}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="pt-12 pb-12 lg:pt-16 lg:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black tracking-wide mb-12 text-center">
              BRANDS I'VE WORKED WITH
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {brands.map((brand, index) => (
                <div key={index} className="flex items-center justify-center w-full h-16">
                  <span className="text-2xl md:text-3xl font-bold text-black opacity-60 hover:opacity-100 transition-opacity">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="pt-12 pb-20 lg:pt-16 lg:pb-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black tracking-wide mb-12">
              FEATURED HOBBY PRODUCTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all"
                >
                  {/* Title and Description */}
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-black mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">{project.description}</p>
                  </div>

                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center gap-1"
                    >
                      {project.linkText || "View Project"} →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="pt-12 pb-20 lg:pt-16 lg:pb-32 bg-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 tracking-wide">
            TRANSFORMING IDEAS INTO INTELLIGENT SOLUTIONS
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto font-light">
            Passionate about creating innovative AI products? I&apos;m always open to new
            challenges and collaborations.
          </p>
          <a
            href="mailto:kanwal.aalijah@gmail.com"
            className="inline-block bg-black text-white px-8 py-3 font-normal hover:bg-gray-800 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center mb-8">
            <div className="flex items-center gap-0">
              <a
                href="https://www.linkedin.com/in/kanwal-aalijah/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/kanwal.aalijah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://github.com/KanwalAalijah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://scholar.google.com/citations?user=7kXIFdYAAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors"
                aria-label="Google Scholar"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-400 font-light text-sm">
              © 2025 Kanwal Aalijah. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Data
const highlights = [
  {
    icon: "🏆",
    stat: "3 Awards",
    description: "Built 3 proprietary Gen AI solutions that earned Dubai Future Foundation AI Innovation Award",
  },
  {
    icon: "💰",
    stat: "AED 6M+",
    description: "Delivered high-value projects for MENA governments and global enterprises including Nike and EY",
  },
  {
    icon: "📈",
    stat: "85% Adoption",
    description: "Products achieved up to 85% user adoption rates with measurable ROI and business impact",
  },
  {
    icon: "🚀",
    stat: "AED 624K",
    description: "Generated AED 624K revenue in 60 days with True Trends GenAI-powered trend intelligence platform",
  },
  {
    icon: "⚡",
    stat: "60% Faster",
    description: "Upgraded vector search reducing query response time by 60% and improving relevance by 45%",
  },
  {
    icon: "👥",
    stat: "12+ Team",
    description: "Hired and scaled cross-functional AI teams while cutting costs by 50% through Agile frameworks",
  },
]

const approaches = [
  {
    icon: "🔍",
    title: "Empathize",
    description:
      "Understand user needs, motivations, and pain points through research, interviews, and observation to uncover unmet opportunities.",
  },
  {
    icon: "💡",
    title: "Define & Ideate",
    description:
      "Synthesize research to define the problem. Brainstorm a wide range of creative solutions without initial constraints, fostering innovation.",
  },
  {
    icon: "⚡",
    title: "Prototype & Test",
    description:
      "Build quick, low-fidelity prototypes to visualize ideas. Rapidly test with users to gather feedback and iterate on solutions, minimizing risk.",
  },
  {
    icon: "👥",
    title: "Collaborate",
    description:
      "Work closely with cross-functional teams - engineering, design, data science - to align on goals and ensure holistic product development.",
  },
  {
    icon: "💼",
    title: "Strategize",
    description:
      "Align product vision with business goals. Develop a clear roadmap, prioritize features, balance user needs with technical feasibility and iterative improvement.",
  },
  {
    icon: "🔄",
    title: "Iterate",
    description:
      "Embrace continuous learning and adaptation. Regularly gather data and user feedback, refine the product, optimize performance, and evolve the product.",
  },
]

const professionalProjects = [
  {
    title: "DealFlow Diligence: AI-Accelerated M&A Due Diligence",
    tags: ["Financial Services", "Agentic KG-RAG"],
    description: "Due diligence cycle reduced from 4-6 weeks to 5-7 days with 380% ROI.",
    metrics: [
      { value: "380%", label: "ROI" },
      { value: "10 weeks", label: "Implementation" },
    ],
    stats: { value: "Over $50M", timeline: "Under 3 months" },
  },
  {
    title: "BlueCross BlueShield: GenAI Claims-Automation Suite",
    tags: ["Healthcare", "Agentic RAG"],
    description: "A leading U.S. health insurance provider automated 35% of claims processing and achieved $14.7M annual benefits.",
    metrics: [
      { value: "$14.7M annually", label: "ROI" },
      { value: "14 weeks", label: "Implementation" },
    ],
    stats: { value: "Over $10M", timeline: "3-6 months" },
  },
  {
    title: "FoodHealth Co: Personalised-Nutrition Marketplace",
    tags: ["HealthTech", "Hybrid-RAG"],
    description: "Built sophisticated nutrition platform securing $7.5M Series A funding with 77% user satisfaction.",
    metrics: [
      { value: "$7.5M funding", label: "ROI" },
      { value: "14 weeks", label: "Implementation" },
    ],
    stats: { value: "Under $10M", timeline: "3-6 months" },
  },
  {
    title: "UBF: Donor-Impact Analytics & Grant Optimiser",
    tags: ["Non-Profit", "GraphRAG"],
    description: "Secured 40% more funding through data-driven impact demonstration and grant optimization.",
    metrics: [
      { value: "+40% funding", label: "ROI" },
      { value: "8 weeks", label: "Implementation" },
    ],
    stats: { value: "Under $10M", timeline: "Under 3 months" },
  },
  {
    title: "Nike: Multilingual Search & Taxonomy LLMs",
    tags: ["Retail", "Fine-tuning"],
    description: "Achieved 12% uplift in search-to-cart conversion across 26 languages and global markets.",
    metrics: [
      { value: "+12% conversion", label: "ROI" },
      { value: "12 weeks", label: "Implementation" },
    ],
    stats: { value: "Over $50M", timeline: "3-6 months" },
  },
  {
    title: "Zewst: AI Inventory & Demand-Forecasting for Restaurants",
    tags: ["Restaurant Tech", "AutoML"],
    description: "25% reduction in food waste with 300+ restaurants onboarded in first quarter.",
    metrics: [
      { value: "-25% waste", label: "ROI" },
      { value: "10 weeks", label: "Implementation" },
    ],
    stats: { value: "Under $10M", timeline: "Under 3 months" },
  },
  {
    title: "Pinch: All-in-One Restaurant OS for Pakistan",
    tags: ["Restaurant Tech", "Agentic AI"],
    description: "5× GMV growth within 6 months with platform fees reduced from 18% to <4%.",
    metrics: [
      { value: "5× GMV", label: "ROI" },
      { value: "16 weeks", label: "Implementation" },
    ],
    stats: { value: "$10M-50M", timeline: "3-6 months" },
  },
  {
    title: "Nivelo: Real-Time ACH Fraud-Detection Engine",
    tags: ["FinTech", "Low-Latency ML"],
    description: "92% fraud detection accuracy at 140ms latency, creating new licensing revenue stream.",
    metrics: [
      { value: "New revenue stream", label: "ROI" },
      { value: "12 weeks", label: "Implementation" },
    ],
    stats: { value: "$10M-50M", timeline: "3-6 months" },
  },
  {
    title: "EY TaxTech: K-1/K-3 Document-AI & Smart Queueing",
    tags: ["Professional Services", "Document AI"],
    description: "$3M annual labor savings with 2× extraction accuracy and 98% on-time filing rate.",
    metrics: [
      { value: "$3M annually", label: "ROI" },
      { value: "14 weeks", label: "Implementation" },
    ],
    stats: { value: "Under $10M", timeline: "3-6 months" },
  },
  {
    title: "PwC: Private-Equity Alpha Finder with RAG Swarm",
    tags: ["Financial Services", "Agentic RAG"],
    description: "Research cycle reduced from 5-7 days to 2 hours, supporting $400M in closed deals.",
    metrics: [
      { value: "$400M deals", label: "ROI" },
      { value: "10 weeks", label: "Implementation" },
    ],
    stats: { value: "Over $50M", timeline: "Under 3 months" },
  },
  {
    title: "NZ Customs: AI Cargo Drug-Smuggling Detector",
    tags: ["Government", "Risk ML"],
    description: "3× uplift in high-risk container detection, awarded WCO Certificate of Merit.",
    metrics: [
      { value: "3× detection", label: "ROI" },
      { value: "8 weeks", label: "Implementation" },
    ],
    stats: { value: "$10M-50M", timeline: "Under 3 months" },
  },
  {
    title: "ACC Insurance: Provider-Fraud Scoring Micro-services",
    tags: ["Insurance", "Behavioral ML"],
    description: "NZ$18M annual recovery with 30% precision improvement over legacy systems.",
    metrics: [
      { value: "NZ$18M/year", label: "ROI" },
      { value: "10 weeks", label: "Implementation" },
    ],
    stats: { value: "$10M-50M", timeline: "Under 3 months" },
  },
  {
    title: "Trinidad & Tobago: Revenue-Evasion Predictor",
    tags: ["Government", "GraphRAG"],
    description: "$3.4M under-declared duties flagged in Q1 with 3× hit-rate improvement.",
    metrics: [
      { value: "$3.4M Q1", label: "ROI" },
      { value: "30 days", label: "Implementation" },
    ],
    stats: { value: "$10M-50M", timeline: "Under 3 months" },
  },
  {
    title: "Saudi Customs: Post-Clearance Audit AI Accelerator",
    tags: ["Government", "Policy-Aware RAG"],
    description: "$50M+ unpaid duties recovered in 6 months with 32% reduction in review time.",
    metrics: [
      { value: "$50M recovered", label: "ROI" },
      { value: "16 weeks", label: "Implementation" },
    ],
    stats: { value: "Over $50M", timeline: "3-6 months" },
  },
  {
    title: "Auckland Blues: Soft-Tissue Injury Predictor",
    tags: ["Sports", "Multimodal Fusion"],
    description: "21% reduction in match-day injuries with multimodal edge AI deployment.",
    metrics: [
      { value: "-21% injuries", label: "ROI" },
      { value: "12 weeks", label: "Implementation" },
    ],
    stats: { value: "Under $10M", timeline: "3-6 months" },
  },
  {
    title: "Centrality: ICO-Success & Crypto-Trading AI",
    tags: ["Hedge Fund", "Multi-Signal ML"],
    description: "24% of fund PnL with +18% CAGR over ETH buy-and-hold strategy.",
    metrics: [
      { value: "24% of PnL", label: "ROI" },
      { value: "14 weeks", label: "Implementation" },
    ],
    stats: { value: "$10M-50M", timeline: "3-6 months" },
  },
  {
    title: "Healthdex: Privacy-Preserving Health-Data Marketplace",
    tags: ["HealthTech", "Homomorphic Encryption"],
    description: "$6M Series A secured with $25M GMV projected by 2026 using homomorphic encryption.",
    metrics: [
      { value: "$6M funding", label: "ROI" },
      { value: "18 weeks", label: "Implementation" },
    ],
    stats: { value: "$10M-50M", timeline: "3-6 months" },
  },
  {
    title: "MASI: Low-Resource-Language LLM Translation",
    tags: ["Education", "LLM Fine-tuning"],
    description: "+19 BLEU score lift enabling 4,800 rural students to access bilingual education.",
    metrics: [
      { value: "+19 BLEU", label: "ROI" },
      { value: "12 weeks", label: "Implementation" },
    ],
    stats: { value: "Under $10M", timeline: "3-6 months" },
  },
  {
    title: "BioSynapse: Accelerating Drug Discovery with Agentic Knowledge Graph",
    tags: ["Healthcare", "Knowledge Graph"],
    description: "40% reduction in drug target discovery time with 3 repurposing candidates identified.",
    metrics: [
      { value: "Multi-million over 5 years", label: "ROI" },
      { value: "16 weeks", label: "Implementation" },
    ],
    stats: { value: "Over $50M", timeline: "3-6 months" },
  },
  {
    title: "FactoryFlow AI: Predictive Maintenance with Voice-Assisted Technicians",
    tags: ["Manufacturing", "Voice AI"],
    description: "25% reduction in unplanned downtime with 285% ROI through voice AI assistance.",
    metrics: [
      { value: "285%", label: "ROI" },
      { value: "12 weeks", label: "Implementation" },
    ],
    stats: { value: "$10M-50M", timeline: "3-6 months" },
  },
  {
    title: "AmplifyInfluence: Hyper-Personalized Creator Campaigns at Scale",
    tags: ["Retail", "Multimodal Generation"],
    description: "35% increase in ROAS with 5x more micro-influencer collaborations enabled.",
    metrics: [
      { value: "+35% ROAS", label: "ROI" },
      { value: "8 weeks", label: "Implementation" },
    ],
    stats: { value: "$10M-50M", timeline: "Under 3 months" },
  },
]

const projects = [
  {
    icon: "📈",
    title: "Crypto Sentiment Analysis",
    description:
      "Real-time cryptocurrency sentiment analysis platform that leverages AI to analyze social media, news, and market data.",
    tags: ["Python", "AI/ML", "Real-time Analytics"],
    features: [
      "Sentiment tracking across multiple crypto exchanges",
      "Social media and news aggregation",
      "Predictive trend analysis",
    ],
    link: "https://crypto.kanwalaalijah.com",
    linkText: "View live platform",
  },
  {
    icon: "🚚",
    title: "Fleet Management Web App",
    description:
      "Comprehensive fleet management system that tracks vehicles in real-time and optimizes logistics operations.",
    tags: ["React", "Node.js", "Real-time Tracking"],
    features: [
      "Real-time vehicle tracking",
      "Route optimization algorithms",
      "Fuel consumption monitoring",
    ],
    link: "https://logistics.kanwalaalijah.com",
    linkText: "View demo",
  },
  {
    icon: "🤖",
    title: "Customer Support AI Assistant",
    description:
      "Intelligent RAG-powered document search system using Google Gemini embeddings and Pinecone vector database.",
    tags: ["RAG", "Gemini", "Pinecone"],
    features: [
      "AI-generated answers with citations",
      "Policy document upload and indexing",
      "Real-time semantic search",
    ],
    link: "https://customer-support-rag.vercel.app/",
    linkText: "Try the assistant",
  },
  {
    icon: "📚",
    title: "AI Knowledge Base",
    description:
      "Comprehensive AI knowledge aggregation platform that tracks and analyzes research across multiple sources.",
    tags: ["Data Aggregation", "Analytics", "Visualization"],
    features: [
      "1,000+ articles tracked and analyzed",
      "769 research papers indexed",
      "Trend analysis and insights",
    ],
    link: "https://ai-data-aggregator-9lzlnlm5f-kanwalaalijahs-projects.vercel.app/",
    linkText: "Explore the platform",
  },
]
