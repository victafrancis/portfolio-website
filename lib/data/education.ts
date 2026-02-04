export interface Education {
  title: string
  institution: string
  period: string
  description: string
  details: string
  logo?: string
  link?: string
}

export const educationAndCertifications: Education[] = [
  {
    title: 'AWS Certified Developer - Associate',
    institution: 'Amazon Web Services',
    period: '2026',
    description: 'Validation of expertise in developing and deploying scalable cloud applications on AWS. Covers services like Lambda, DynamoDB, API Gateway, and more.',
    details: 'Credential ID: AWS-DVA-C02',
    logo: '/images/aws-certified-developer-associate.png',
    link: 'https://aws.amazon.com/certification/certified-developer-associate/'
  },
  {
    title: 'Computer Programmer Analyst - Advanced Diploma',
    institution: 'George Brown College',
    period: '2018–2020',
    description: 'A three-year advanced diploma program focused on programming and IT analysis. Training covered software development life cycle, full-stack and mobile development, database management, and applied AI/machine learning through project-based learning.',
    details: 'Dean’s List • GPA: 3.98 / 4',
    logo: '/images/gbc.png',
    link: 'https://www.georgebrown.ca/programs/computer-programming-and-analysis-program-t177'
  },
  {
    title: 'Bachelor of Science in Management Engineering (Honours Program)',
    institution: 'Ateneo de Manila University',
    period: '2008–2012',
    description: 'Prestigious honours program combining liberal arts with business management, decision science, analytics, and systems thinking to prepare graduates for technology-intensive leadership roles.',
    details: 'Dean’s List • Financial Aid Scholar • WES accredited',
    logo: '/images/ateneo.png',
    link: 'https://www.ateneo.edu/jgsom/academics/undergraduate/bs-me'
  }
]
