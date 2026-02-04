export type TechStackGroup = {
  label: string
  color: string
  borderColor: string
  items: string[]
}

export const techStackGroups: TechStackGroup[] = [
  {
    label: 'Web / Software',
    color: 'text-sky-500',
    borderColor: 'border-sky-500/40',
    items: [
      'JavaScript',
      'TypeScript',
      'Python',
      'Java',
      'C#',
      'PHP',
      'HTML5',
      'CSS3',
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'AngularJS',
      'Tailwind CSS',
      'Bootstrap',
      'ASP.NET',
      'Android Studio',
      'VBA for Excel'
    ]
  },
  {
    label: 'Database',
    color: 'text-emerald-500',
    borderColor: 'border-emerald-500/40',
    items: [
      'SQL (MySQL, Oracle, PostgreSQL)',
      'PostgreSQL',
      'MongoDB',
      'DynamoDB',
      'Redis',
      'Postman',
      'Data Modeling',
      'Database Architecture',
      'UML Class Diagrams',
      'ERD'
    ]
  },
  {
    label: 'Cloud / AWS',
    color: 'text-orange-500',
    borderColor: 'border-orange-500/40',
    items: [
      'Cloud Computing',
      'AWS Lambda',
      'AWS S3',
      'AWS IAM',
      'AWS EC2',
      'AWS API Gateway',
      'AWS DynamoDB',
      'AWS CloudWatch',
      'AWS VPC',
      'AWS Amplify',
      'AWS RDS',
      'GCP App Engine',
      'GCP Cloud Functions'
    ]
  },
  {
    label: 'Architecture & Workflow',
    color: 'text-violet-500',
    borderColor: 'border-violet-500/40',
    items: [
      'Cloud Architecture',
      'Serverless',
      'Microservices',
      'Object-Oriented Programming',
      'MVC Framework',
      'RESTful API',
      'Git Version Control',
      'Agile Methodologies'
    ]
  },
  {
    label: 'Data / ML / Analytics',
    color: 'text-amber-500',
    borderColor: 'border-amber-500/40',
    items: [
      'Python',
      'NumPy',
      'Pandas',
      'Scikit-Learn',
      'Keras',
      'Tableau',
      'Power BI',
      'MS Excel',
      'MS Access'
    ]
  },
  {
    label: 'AI Tools',
    color: 'text-rose-500',
    borderColor: 'border-rose-500/40',
    items: ['GitHub Copilot', 'Cursor', 'Cline', 'OpenAI', 'OpenRouter', 'Gemini', 'Claude']
  }
]

export const techStack = techStackGroups.flatMap((group) => group.items)

export type TechStackItem = typeof techStack[number]
