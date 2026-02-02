export const techStack = [
  'JavaScript', 'Python', 'TypeScript', 'Node.js', 'React', 'Next.js', 
  'AWS Lambda', 'DynamoDB', 'SQL', 'MongoDB', 'Tableau', 'PowerBI',
  'Tailwind CSS', 'Express.js', 'PostgreSQL', 'Redis'
] as const

export type TechStackItem = typeof techStack[number]
