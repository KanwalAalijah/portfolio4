import Image from "next/image"
import Link from "next/link"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="bg-white py-32 lg:py-48">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-black mb-8 leading-tight">
              — Crafting meaningful, AI-driven products that turn data into insight and ideas into impact.
            </h1>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-normal text-black mb-12">
            About Me
          </h2>
          <div className="max-w-3xl">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed font-light">
              I build intelligent products that push boundaries and redefine how industries operate. With over a
              decade of experience in AI, SaaS, and platform innovation, I have led global launches across fintech,
              market intelligence, food tech, and urban analytics. I create systems that turn complexity into clarity
              and scale into simplicity.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              I&apos;ve worked across B2B, B2C, and B2B2C models. I have build products that serve real users and
              real business needs. My work centers on agentic AI systems, AI-powered platforms, and blockchain-integrated
              ecosystems. I focus on creating solutions that people use, that make an impact, and that last. The future
              isn&apos;t predicted, it&apos;s built, one step at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Design Thinking Approach Section */}
      <section id="approach" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-normal text-black mb-16">
            My Design Thinking Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {approaches.map((approach, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl mb-4">{approach.icon}</div>
                <h3 className="text-2xl font-normal text-black mb-3">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-normal text-black mb-16">
            Featured Hobby Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white border border-gray-200 transition-all overflow-hidden ${
                  project.comingSoon
                    ? 'opacity-60 cursor-not-allowed'
                    : 'hover:border-black'
                }`}
              >
                <div className={`w-full h-64 bg-gray-100 flex items-center justify-center relative ${
                  project.comingSoon ? 'blur-sm' : ''
                }`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                  {project.comingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                      <span className="text-white text-lg font-normal backdrop-blur-sm bg-black bg-opacity-50 px-4 py-2">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
                <div className={`p-6 ${project.comingSoon ? 'blur-sm' : ''}`}>
                  <h3 className="text-xl font-normal text-black mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 font-light">{project.description}</p>
                  {!project.comingSoon && (
                    project.link.startsWith('http') ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black font-normal hover:underline inline-flex items-center"
                      >
                        Test the Product Now →
                      </a>
                    ) : (
                      <Link
                        href={project.link}
                        className="text-black font-normal hover:underline inline-flex items-center"
                      >
                        Learn More →
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-20 lg:py-32 bg-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-normal text-black mb-6">
            Transforming Ideas into Intelligent Solutions
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
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex space-x-8 mb-6 md:mb-0">
              <Link href="#about" className="text-gray-500 hover:text-black transition-colors font-light">
                Explore
              </Link>
              <Link href="#projects" className="text-gray-500 hover:text-black transition-colors font-light">
                Connect
              </Link>
              <Link href="#contact" className="text-gray-500 hover:text-black transition-colors font-light">
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

const projects = [
  {
    title: "Crypto Sentiment Analysis",
    description:
      "Real-time cryptocurrency sentiment analysis platform that leverages AI to analyze social media, news, and market data to predict crypto market trends and sentiment shifts.",
    image: "/crypto-sentiment.png",
    link: "https://crypto.kanwalaalijah.com",
    comingSoon: false,
  },
  {
    title: "Fleet Management Web App",
    description:
      "Comprehensive fleet management system that tracks vehicles in real-time, optimizes routes, monitors fuel consumption, and streamlines maintenance scheduling for efficient logistics operations.",
    image: "/project2.png",
    link: "https://logistics.kanwalaalijah.com",
    comingSoon: false,
  },
  {
    title: "Personalized Learning Platform",
    description:
      "Design and built a platform utilizing adaptive learning to deliver educational content and quizzes to individual student learning needs and pace.",
    image: "/project3.jpg",
    link: "#",
    comingSoon: true,
  },
]
