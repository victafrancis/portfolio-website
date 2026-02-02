export interface Experience {
  role: string
  company: string
  period: string
  description: string
  tech: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Fullstack Developer',
    company: 'LabX Media Group',
    period: '2021-2025',
    description: 'Led development of scalable web applications using Next.js and AWS services. Implemented CI/CD pipelines and optimized database performance.',
    tech: ['Next.js', 'AWS', 'PostgreSQL', 'TypeScript']
  },
  {
    role: 'Fullstack Developer & Lead',
    company: 'Backr.ai',
    period: '2020-2021',
    description: 'Architected and developed AI-powered SaaS platform. Led team of 3 developers and established best practices.',
    tech: ['React', 'Node.js', 'MongoDB', 'Python']
  },
  {
    role: 'Fullstack Engineer',
    company: 'Tender Plant and Care',
    period: '2020-2021',
    description: 'Built e-commerce platform with inventory management system. Integrated payment processing and real-time analytics.',
    tech: ['React', 'Express', 'MySQL', 'Stripe']
  },
  {
    role: 'Project Manager',
    company: 'George Brown College',
    period: '2019-2020',
    description: 'Managed cross-functional teams for educational technology projects. Coordinated stakeholder requirements and delivery timelines.',
    tech: ['Agile', 'JIRA', 'Documentation']
  }
]
