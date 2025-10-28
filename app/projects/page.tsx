import Link from "next/link"
import Navbar from "../components/Navbar"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-normal text-black mb-6">
            Professional Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl font-light">
            A showcase of AI and ML solutions delivering measurable impact across healthcare, finance, government, and enterprise sectors.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="flex gap-3 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-sm px-4 py-1 bg-white rounded-full text-gray-700 font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl md:text-3xl font-normal text-black mb-4 leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8 font-light">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4">
                      <div className="text-2xl md:text-3xl font-normal text-blue-600 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600 font-light">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {project.stats && (
                  <div className="flex justify-between text-sm text-gray-600 font-light mb-6">
                    <span>{project.stats.value}</span>
                    <span>{project.stats.timeline}</span>
                  </div>
                )}

                <a
                  href="#contact"
                  className="inline-flex items-center text-blue-600 font-normal hover:underline"
                >
                  View Full Case Study →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex space-x-8 mb-6 md:mb-0">
              <Link href="/#about" className="text-gray-500 hover:text-black transition-colors font-light">
                About
              </Link>
              <Link href="/projects" className="text-gray-500 hover:text-black transition-colors font-light">
                Projects
              </Link>
              <Link href="/#products" className="text-gray-500 hover:text-black transition-colors font-light">
                Products
              </Link>
              <Link href="/#contact" className="text-gray-500 hover:text-black transition-colors font-light">
                Contact
              </Link>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/kanwal-aalijah/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/KanwalAalijah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=7kXIFdYAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all"
                aria-label="Google Scholar"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
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
