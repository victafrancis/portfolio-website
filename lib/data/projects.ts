export interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  span?: number
}

export const projects: Project[] = [
  {
    title: 'Little Bloom Photography',
    description: 'Modern photography portfolio with CMS integration, optimized image delivery, and contact form.',
    tech: ['Next.js', 'Sentry', 'Tailwind CSS', 'Vercel'],
    image: '/images/little-bloom.jpg',
    span: 2
  },
  {
    title: 'Inflation Effect App',
    description: 'Interactive data visualization tool showing real-time inflation impact on purchasing power.',
    tech: ['React', 'Node.js', 'Chart.js'],
    image: '/images/inflation-app.jpg'
  },
  {
    title: 'NBA Player Comparison',
    description: 'Data analytics dashboard comparing NBA player statistics with interactive visualizations.',
    tech: ['Tableau', 'PowerBI', 'Python'],
    image: '/images/nba-comparison.jpg'
  },
  {
    title: 'Job Hunter AI',
    description: 'AI-powered job search assistant with resume optimization and application tracking.',
    tech: ['Next.js', 'OpenAI', 'Prisma'],
    image: '/images/job-hunter-ai.jpg'
  },
  {
    title: 'Camp Moses',
    description: 'Camp management system with registration, scheduling, and payment processing.',
    tech: ['React', 'Firebase', 'Stripe'],
    image: '/images/camp-moses.jpg'
  },
  {
    title: 'High-Low Casino',
    description: 'Legacy casino game built with jQuery featuring real-time gameplay and betting system.',
    tech: ['jQuery', 'PHP', 'MySQL'],
    image: '/images/high-low-casino.jpg'
  }
]
