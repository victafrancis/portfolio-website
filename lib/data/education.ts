export interface Education {
  title: string
  institution: string
  period: string
  description: string
  details: string
}

export const educationAndCertifications: Education[] = [
  {
    title: 'AWS Certified Developer - Associate',
    institution: 'Amazon Web Services',
    period: '2024 - Present',
    description: 'Validation of expertise in developing and deploying scalable cloud applications on AWS. Covers services like Lambda, DynamoDB, API Gateway, and more.',
    details: 'Credential ID: AWS-DVA-C02'
  },
  {
    title: 'Full Stack Development Bootcamp',
    institution: 'George Brown College',
    period: '2019-2020',
    description: 'Comprehensive training in full-stack web development including frontend, backend, and database technologies. Built multiple projects from concept to deployment.',
    details: 'Graduated with honors'
  },
  {
    title: 'Data Analytics & Visualization',
    institution: 'Self-Taught / Coursework',
    period: '2021-2023',
    description: 'Specialized training in data analysis, statistical modeling, and visualization tools. Proficient in Tableau, PowerBI, Python data libraries, and SQL.',
    details: 'Focus on business intelligence and insights'
  },
  {
    title: 'Bachelor of Arts',
    institution: 'Ryerson University',
    period: '2015-2019',
    description: 'General studies with strong focus on technology, business, and entrepreneurship. Developed foundational knowledge in computer science principles.',
    details: 'Dean\'s Honor List'
  }
]
