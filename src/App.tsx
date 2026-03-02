/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Briefcase, 
  GraduationCap, 
  LineChart, 
  Mail, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Award, 
  CheckCircle2, 
  ChevronRight,
  Database,
  PieChart,
  Users,
  Search,
  Cpu
} from 'lucide-react';
import { motion } from 'motion/react';

// --- Types ---
interface Project {
  title: string;
  problem: string;
  impact: string;
  approach: string;
  tech: string[];
  metrics: string;
  icon: React.ReactNode;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "Consumer Behavior Analysis – More Super Market",
    problem: "Understanding purchasing drivers in a high-competition retail environment to optimize product placement.",
    impact: "Identified key buying drivers influencing repeat purchases; developed actionable insights for promotional strategies.",
    approach: "Conducted primary research with a sample size of 100+ customers using structured surveys and observational analysis.",
    tech: ["Market Research", "Data Interpretation", "Consumer Psychology"],
    metrics: "100+ Customer Sample | Identified Top 3 Buying Drivers",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Investment & Wealth Advisory – Kotak Mutual Fund",
    problem: "Assessing long-term wealth creation trends and mutual fund performance for client portfolio optimization.",
    impact: "Supported financial planning discussions and assisted in client portfolio reviews for high-net-worth individuals.",
    approach: "Analyzed SIP patterns, NAV, AUM, and annual returns to assess performance metrics and market trends.",
    tech: ["Financial Analysis", "Investment Planning", "AUM Evaluation"],
    metrics: "Analyzed SIP Trends | Evaluated NAV/AUM Metrics",
    icon: <LineChart className="w-6 h-6" />
  },
  {
    title: "Rural Marketing Campaign – Krushi Mela",
    problem: "Bridging the awareness gap for agricultural products among rural consumers in a fragmented market.",
    impact: "Executed field-level outreach and assessed product engagement through real-time market response data.",
    approach: "Field-level data collection and analysis of consumer response during the 2024-25 campaign.",
    tech: ["Rural Marketing", "Field Research", "Data Collection"],
    metrics: "2024-25 Campaign | Direct Rural Outreach",
    icon: <Search className="w-6 h-6" />
  }
];

const SKILLS = {
  "Business & Analytics": ["Market Research", "Financial Analysis", "Data Interpretation", "Revenue Growth Strategy", "Performance Evaluation"],
  "Sales & Engagement": ["Lead Generation", "CRM", "Account Support", "Product Positioning"],
  "Technical & AI": ["Business Analytics", "Digital Marketing", "Generative AI", "Prompt Engineering"],
  "Languages": ["English", "Hindi", "Kannada"]
};

// --- Components ---

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-2">{children}</h2>
    {subtitle && <p className="text-zinc-500 font-medium uppercase tracking-widest text-xs">{subtitle}</p>}
    <div className="h-1 w-12 bg-zinc-900 mt-4"></div>
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col h-full"
  >
    <div className="bg-zinc-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-zinc-900">
      {project.icon}
    </div>
    <h3 className="text-xl font-bold text-zinc-900 mb-4">{project.title}</h3>
    
    <div className="space-y-4 flex-grow">
      <div>
        <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">The Problem</p>
        <p className="text-zinc-600 text-sm leading-relaxed">{project.problem}</p>
      </div>
      <div>
        <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Approach & Tools</p>
        <p className="text-zinc-600 text-sm leading-relaxed">{project.approach}</p>
      </div>
      <div className="flex flex-wrap gap-2 pt-2">
        {project.tech.map(t => (
          <span key={t} className="px-2 py-1 bg-zinc-100 text-zinc-600 text-[10px] font-bold uppercase rounded tracking-tighter">
            {t}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-8 pt-6 border-t border-zinc-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Key Metric</p>
          <p className="text-zinc-900 font-bold text-sm">{project.metrics}</p>
        </div>
        <div className="flex gap-3">
          <button className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <Github className="w-5 h-5" />
          </button>
          <button className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBFBFB] font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tighter text-xl">CHANNAPPAGOUDA<span className="text-zinc-400">.B</span></span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
            <a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-zinc-900 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
          <a 
            href="mailto:channappagouda@gmail.com"
            className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Business Analyst Roles
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
              Bridging Business Strategy with <span className="text-zinc-400 italic font-serif">Data-Driven</span> Insights.
            </h1>
            <p className="text-xl text-zinc-500 mb-10 leading-relaxed max-w-2xl">
              BBA graduate with a 8.93 CGPA. Specialized in market research, financial analysis, and consumer behavior. I turn raw data into actionable growth strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects"
                className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all group"
              >
                View Case Studies
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#"
                className="bg-white border border-zinc-200 text-zinc-900 px-8 py-4 rounded-2xl font-bold hover:bg-zinc-50 transition-all"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Proof Section */}
      <section className="py-12 border-y border-zinc-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Academic CGPA", value: "8.93/10" },
            { label: "Market Research", value: "100+ Respondents" },
            { label: "Internship", value: "Kotak Mutual Fund" },
            { label: "Certifications", value: "Analytics & AI" }
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-3xl font-bold text-zinc-900 mb-1">{stat.value}</p>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading subtitle="Professional Summary">Strategic Analyst</SectionHeading>
            <p className="text-zinc-600 leading-relaxed mb-6">
              I am a results-driven Business Administration student with a proven track record of academic excellence (1st Rank, Semester 1). My expertise lies at the intersection of financial advisory and market research.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-8">
              During my internship at Kotak Mutual Fund, I mastered the art of evaluating performance metrics and supporting data-driven decision-making for high-stakes financial planning. I am now seeking to leverage these skills to drive revenue growth and strategic clarity for forward-thinking organizations.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white border border-zinc-100 rounded-xl">
                <Award className="w-5 h-5 text-zinc-900 mb-2" />
                <h4 className="font-bold text-sm mb-1">Academic Distinction</h4>
                <p className="text-xs text-zinc-500">Multi-semester Rank Holder</p>
              </div>
              <div className="p-4 bg-white border border-zinc-100 rounded-xl">
                <Cpu className="w-5 h-5 text-zinc-900 mb-2" />
                <h4 className="font-bold text-sm mb-1">AI-Ready</h4>
                <p className="text-xs text-zinc-500">Certified in Prompt Engineering</p>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <h3 className="text-2xl font-bold mb-8">Technical Stack</h3>
            <div className="space-y-8">
              {Object.entries(SKILLS).map(([category, items]) => (
                <div key={category}>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map(item => (
                      <span key={item} className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium hover:bg-white/20 transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Case Studies">Featured Projects</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <div key={i}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Career Path">Experience & Leadership</SectionHeading>
          <div className="space-y-12">
            {/* Kotak */}
            <div className="relative pl-8 border-l-2 border-zinc-100">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-4 border-white"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Investment & Wealth Advisory Intern</h3>
                  <p className="text-zinc-500 font-medium">Kotak Mutual Fund, Hubli</p>
                </div>
                <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mt-2 md:mt-0">Internship</p>
              </div>
              <ul className="space-y-3 text-zinc-600 max-w-3xl">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  Analyzed SIP investment patterns to identify long-term wealth creation trends for strategic advisory.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  Evaluated mutual fund performance metrics (NAV, AUM, returns) to support client portfolio optimization.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  Contributed to investor awareness initiatives, promoting systematic investment planning to 50+ potential leads.
                </li>
              </ul>
            </div>

            {/* Leadership */}
            <div className="relative pl-8 border-l-2 border-zinc-100">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-400 border-4 border-white"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Secretary – Events & Activities Committee</h3>
                  <p className="text-zinc-500 font-medium">KLE Society’s College of BBA</p>
                </div>
                <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mt-2 md:mt-0">Leadership</p>
              </div>
              <ul className="space-y-3 text-zinc-600 max-w-3xl">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-zinc-300 shrink-0 mt-0.5" />
                  Coordinated academic and extracurricular events, managing end-to-end planning and team execution.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-zinc-300 shrink-0 mt-0.5" />
                  Improved student engagement by 30% through structured event management and cross-departmental coordination.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 px-6 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Validation">Certifications & Ranks</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-zinc-400 uppercase tracking-widest">Professional Certifications</h4>
              {[
                "Business Analytics Specialization",
                "Digital Marketing Mastery",
                "Generative AI & Prompt Engineering"
              ].map(cert => (
                <div key={cert} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="bg-emerald-500/20 p-2 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-zinc-400 uppercase tracking-widest">Academic Distinction</h4>
              {[
                { rank: "1st Rank", sem: "Semester 1" },
                { rank: "2nd Rank", sem: "Semester 2" },
                { rank: "2nd Rank", sem: "Semester 5" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                  <span className="text-zinc-400 font-medium">{item.sem}</span>
                  <span className="font-bold text-emerald-400">{item.rank}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 tracking-tight">Ready to drive <span className="italic font-serif text-zinc-400">measurable</span> growth?</h2>
          <p className="text-xl text-zinc-500 mb-12 leading-relaxed">
            I am currently seeking entry-level Business Analyst or Account Executive roles where I can apply my analytical rigor and strategic mindset.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:channappagouda@gmail.com"
              className="w-full md:w-auto bg-zinc-900 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all"
            >
              <Mail className="w-6 h-6" />
              Email Me
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-white border border-zinc-200 text-zinc-900 px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-zinc-50 transition-all"
            >
              <Linkedin className="w-6 h-6" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-400 text-sm font-medium">
            © 2024 Channappagouda B H. Built for high-impact business analysis.
          </p>
          <div className="flex gap-6 text-zinc-400">
            <a href="#" className="hover:text-zinc-900 transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-zinc-900 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-zinc-900 transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>

      {/* SEO Bio Section (Hidden but present for SEO/Recruiters) */}
      <section className="sr-only">
        <h2>SEO Bio & Professional Positioning</h2>
        <p>
          Channappagouda B H is a high-potential Business Analyst candidate and BBA student with a 8.93 CGPA from KLE Society’s College of Business Administration. 
          With specialized experience in investment advisory at Kotak Mutual Fund and primary market research for retail giants like More Super Market, 
          Channappagouda excels at translating complex consumer behavior data into actionable business strategies. 
          Certified in Business Analytics and Generative AI, he brings a modern, tech-forward approach to financial analysis and revenue growth. 
          A multi-semester rank holder and proven student leader, he is positioned to contribute immediate value to strategic planning and account management teams. 
          Key skills include financial modeling, market trend analysis, CRM, and lead generation.
        </p>
      </section>

      {/* Suggestions Section (For the user/developer) */}
      <div className="hidden">
        <h3>Suggestions to Make This Portfolio 10x Stronger</h3>
        <ul>
          <li>Add a "Metrics Dashboard" using D3.js or Recharts to visualize the 100+ customer survey results.</li>
          <li>Include a "Blog" section where you analyze current market trends (e.g., "The Impact of AI on Retail Consumer Behavior").</li>
          <li>Add a downloadable PDF Case Study for the Kotak Mutual Fund internship with more detailed charts.</li>
          <li>Remove: Generic "Languages" if they aren't relevant to the specific job location, but keep them if applying to multi-national firms.</li>
          <li>Add: Testimonials from professors or internship supervisors to provide social proof.</li>
        </ul>
      </div>
    </div>
  );
}
