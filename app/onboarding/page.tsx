import type { Metadata } from 'next'
import { BookOpen, Users, Github, MessageSquare, CheckCircle2, AlertTriangle, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Onboarding | GSA Bioinformatics Internship',
  description: 'Official onboarding guide for GSA Bioinformatics Internship — lab guidelines, good practices, GitHub workflow, and social media policy.',
}

const sections = [
  {
    id: 'lab-guidelines',
    icon: Users,
    color: '#06b6d4',
    colorBg: 'rgba(6,182,212,0.08)',
    colorBorder: 'rgba(6,182,212,0.2)',
    title: 'Lab Guidelines',
    subtitle: 'Expectations, communication & meeting structure',
    blocks: [
      {
        heading: 'Mission & Expectations',
        items: [
          'Dedicate at least 4 hours daily to research and group participation.',
          'Mentors provide feedback, project planning, and career guidance.',
          'Abstract submissions require mentor review one week before deadlines.',
          'Oral presentations must first be presented to the team for feedback.',
          'Authorship follows ICMJE standards. Plagiarism is not tolerated.',
          'Maintain a safe, respectful, and harassment-free environment.',
        ],
      },
      {
        heading: 'Communication',
        items: [
          'Primary platform: Slack. Join #general, #meeting, and #random channels.',
          'Maintain active GitHub and Slack accounts throughout the internship.',
          'Use official email for all formal work correspondence.',
        ],
      },
      {
        heading: 'Meeting Schedule',
        items: [
          'Weekly scrum kick-off — every Friday at 8:30 AM.',
          'Demo day — every Saturday at 8:30 AM (3-minute accomplishment update).',
          'Research meetings — third Friday of each month (rotating meeting lead).',
        ],
      },
    ],
  },
  {
    id: 'good-practices',
    icon: CheckCircle2,
    color: '#10b981',
    colorBg: 'rgba(16,185,129,0.08)',
    colorBorder: 'rgba(16,185,129,0.2)',
    title: 'Good Practices',
    subtitle: 'Reproducibility, code quality & data stewardship',
    blocks: [
      {
        heading: 'Reproducibility',
        items: [
          'All research must be technically reproducible — identical code runs yield consistent results.',
          'Avoid GUI-based tools (e.g., Excel) for data manipulation. Use code-based workflows instead.',
          'Use renv to capture exact R package versions for reproducible environments.',
          'Achieve reproducibility through Makefiles, shell scripts, and peer-reviewed code.',
        ],
      },
      {
        heading: 'Code Quality',
        items: [
          'Languages: Python and R for analysis and visualization.',
          'Use descriptive variable names (e.g., genomeList, not gl).',
          'Write context-rich comments — explain why, not just what.',
          'Make incremental Git commits after each successful analysis step.',
          'All code goes through pull request review before merging.',
        ],
      },
      {
        heading: 'Project Structure',
        items: [
          'README.md — project documentation at the root.',
          'R/ or scripts/ — analysis scripts.',
          'input/ — source datasets (read-only, never modified).',
          'output/ — generated results and figures.',
          'Use RStudio Projects instead of setwd() for portable file paths.',
        ],
      },
      {
        heading: 'Data Governance',
        items: [
          'Keep read-only copies of all source data with secure backups.',
          'Document metadata and experimental design before starting analysis.',
          'Generated data must be uploaded to repositories (GEO, SRA) upon publication.',
          'Statistical analysis must use R, Python, or Jamovi — Excel is not acceptable.',
        ],
      },
    ],
  },
  {
    id: 'github',
    icon: Github,
    color: '#8b5cf6',
    colorBg: 'rgba(139,92,246,0.08)',
    colorBorder: 'rgba(139,92,246,0.2)',
    title: 'GitHub Guidelines',
    subtitle: 'Workflow, branching & collaboration',
    blocks: [
      {
        heading: 'Standard Workflow',
        items: [
          'Fork the repository to your personal GitHub account.',
          'Clone your fork locally and create a feature branch.',
          'Commit changes with clear, descriptive commit messages.',
          'Push to your fork and open a Pull Request to the main repository.',
          'Wait for peer review and approval before merging.',
        ],
      },
      {
        heading: 'Key Concepts',
        items: [
          'Fork — your personal copy of a repository.',
          'Clone — download a repository to your local machine.',
          'Commit — a snapshot of your changes.',
          'Push — upload local commits to GitHub.',
          'Pull — download updates from the remote repository.',
          'Branch — an independent line of development.',
          'Pull Request (PR) — a proposal to merge your changes.',
          'Upstream — the original repository; Origin — your fork.',
        ],
      },
      {
        heading: 'Repository Rules',
        items: [
          'All work lives inside the GSA Bioinformatics Internship GitHub organization.',
          'Private repositories require a minimum of two authorized users.',
          'Default license: BSD-2-Clause Plus Patent License.',
          'Publicly available data scripts must be version-controlled.',
        ],
      },
    ],
  },
  {
    id: 'social-media',
    icon: MessageSquare,
    color: '#f59e0b',
    colorBg: 'rgba(245,158,11,0.08)',
    colorBorder: 'rgba(245,158,11,0.2)',
    title: 'Social Media Policy',
    subtitle: 'Professional conduct & representation',
    blocks: [
      {
        heading: 'Professional Standards',
        items: [
          'Maintain a professional and respectful tone across all platforms.',
          'Do not share confidential research data, health data, or unreleased findings.',
          'Use official email for all formal work correspondence — not personal inboxes.',
          'Obtain authorization before communicating externally on behalf of GSA.',
          'Do not express personal opinions that could be mistaken for organizational positions.',
        ],
      },
      {
        heading: 'Platforms Covered',
        items: [
          'These guidelines apply to Messenger, WhatsApp, Telegram, and all social media platforms.',
          'Any public-facing communication that references GSA or the internship falls under this policy.',
        ],
      },
      {
        heading: 'Violation Consequences',
        items: [
          '1st offense — Verbal warning and counseling.',
          '2nd offense — Written warning and mandatory training.',
          '3rd offense — Suspension of social media privileges or role reassignment.',
          'Severe violations — Potential termination and law enforcement notification.',
        ],
      },
    ],
  },
]

export default function OnboardingPage() {
  return (
    <main className="min-h-screen" style={{ background: '#030712' }}>
      {/* Header */}
      <div
        className="relative pt-28 pb-16 text-center overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(6,182,212,0.06) 0%, transparent 100%)',
          borderBottom: '1px solid rgba(6,182,212,0.08)',
        }}
      >
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="container-wide relative">
          <div className="section-badge mb-5 mx-auto w-fit">
            <BookOpen size={13} />
            Intern Onboarding
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Welcome to <span className="gradient-text">GSA Internship</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Everything you need to get started — lab expectations, coding standards, GitHub workflow, and conduct guidelines.
          </p>
          <a
            href="https://github.com/gsabioinfointernship/onboarding"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-sm text-slate-500 hover:text-cyan-400 transition-colors font-mono"
          >
            <Github size={14} />
            github.com/gsabioinfointernship/onboarding
          </a>
        </div>
      </div>

      {/* Sections */}
      <div className="container-wide py-16 space-y-10">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <div
              key={section.id}
              id={section.id}
              className="rounded-2xl overflow-hidden"
              style={{ border: `1px solid ${section.colorBorder}`, background: section.colorBg }}
            >
              {/* Section header */}
              <div
                className="px-8 py-6 flex items-center gap-4"
                style={{ borderBottom: `1px solid ${section.colorBorder}` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${section.color}20`, border: `1px solid ${section.color}40` }}
                >
                  <Icon size={20} color={section.color} />
                </div>
                <div>
                  <h2 className="text-white font-bold text-xl">{section.title}</h2>
                  <p className="text-slate-500 text-sm">{section.subtitle}</p>
                </div>
              </div>

              {/* Blocks */}
              <div className="p-8 grid md:grid-cols-2 gap-8">
                {section.blocks.map((block) => (
                  <div key={block.heading}>
                    <h3
                      className="text-sm font-bold uppercase tracking-widest mb-4"
                      style={{ color: section.color }}
                    >
                      {block.heading}
                    </h3>
                    <ul className="space-y-2.5">
                      {block.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                            style={{ background: section.color }}
                          />
                          <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        {/* Footer notice */}
        <div
          className="rounded-xl p-5 flex items-start gap-3"
          style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)' }}
        >
          <AlertTriangle size={18} color="#f59e0b" className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-300 text-sm font-semibold mb-1">Living Document</p>
            <p className="text-slate-400 text-sm">
              These guidelines evolve over time. Check the{' '}
              <a
                href="https://github.com/gsabioinfointernship/onboarding"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                GitHub repository
              </a>{' '}
              for the latest version. Questions? Reach out via Slack #general.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
