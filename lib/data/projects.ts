export type ProjectCategory = 'Developer' | 'Data' | 'Game'

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  category: ProjectCategory
  links?: ProjectLink[]
  span?: number
}

export const projects: Project[] = [
  {
    title: 'Weekly Automated Sermon Summarizer (CCF Podcast)',
    description:
      'AWS Lambda workflow that fetches the latest CCF sermon podcast, summarizes the audio with Gemini AI, and emails the recap while DynamoDB prevents re-processing.',
    tech: ['AWS Lambda', 'EventBridge', 'DynamoDB', 'SES', 'Python', 'Gemini AI'],
    image: '/images/projects/automated-sermon-summarizer.png',
    category: 'Developer',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/victafrancis/AWS-automated-sermon-summarizer'
      }
    ],
    span: 1
  },
  {
    title: 'Little Bloom Photography Website',
    description:
      'Designed and built a full photography business website with responsive layouts, SEO focus, and a custom contact flow.',
    tech: ['React', 'Tailwind CSS', 'Vercel', 'Resend', 'Ionos'],
    image: '/images/projects/little-bloom-photography.png',
    category: 'Developer',
    links: [
      {
        label: 'Live Site',
        href: 'https://www.littlebloomphotography.com/'
      },
      {
        label: 'GitHub',
        href: 'https://github.com/victafrancis/little-bloom-website'}
    ],
    span: 2
  },
  {
    title: 'Camp Moses Website',
    description:
      'Redesigned a previously outdated nonprofit website with a modern, SEO-optimized stack that is more versatile and easier to extend in the future.',
    tech: ['NextJS', 'Tailwind', 'Vercel'],
    image: '/images/projects/camp-moses.webp',
    category: 'Developer',
    links: [
      {
        label: 'Live Site',
        href: 'https://www.campmoses.org/'
      },
      {
        label: 'GitHub',
        href: 'https://github.com/victafrancis/camp-moses-website'}
    ]
  },
  {
    title: 'Inflation Effect on Common Goods',
    description:
      'End-to-end data pipeline and React app that visualizes how everyday prices have shifted over time.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Cloudflare'],
    image: '/images/projects/inflation-effect-app.png',
    category: 'Developer',
    links: [
      {
        label: 'Live Demo',
        href: 'https://victafrancis.github.io/inflation-effect/'
      },
      {
        label: 'GitHub',
        href: 'https://github.com/victafrancis/inflation-effect'}
    ]
  },
  {
    title: 'Job Hunter AI Assistant',
    description:
      'Streamlit app that parses job posts with OpenAI, matches skills, and tracks applications with a PostgreSQL backend.',
    tech: ['Python', 'Streamlit', 'OpenAI', 'PostgreSQL'],
    image: '/images/projects/job-hunter-ai.png',
    category: 'Developer',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/victafrancis/jobhunter_ai'
      }
    ]
  },
  {
    title: 'Gift Canada Website',
    description:
      'Volunteer-built nonprofit website with ongoing maintenance and updates for community outreach.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/projects/gift-canada.png',
    category: 'Developer',
    links: [
      {
        label: 'Live Site',
        href: 'https://giftcanada.org/'
      }
    ]
  },
  {
    title: 'Inventory Management System (TPC)',
    description:
      'Inventory platform for a plant accessory business with web + mobile access, APIs, and AWS deployment.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'AWS'],
    image: '/images/projects/tpc-inventory.png',
    category: 'Developer',
    links: [
      {
        label: 'Web Snapshots',
        href: 'https://victafrancis.github.io/projects-image-gallery/tpc-web.html'
      },
      {
        label: 'Mobile Snapshots',
        href: 'https://victafrancis.github.io/projects-image-gallery/tpc-mobile.html'
      }
    ]
  },
  {
    title: 'Future Dining',
    description:
      'Digital menu experience optimized for mobile browsers with favorites and server requests.',
    tech: ['React', 'JavaScript', 'AWS'],
    image: '/images/projects/future-dining.png',
    category: 'Developer',
    links: [
      {
        label: 'Snapshots',
        href: 'https://victafrancis.github.io/projects-image-gallery/futuredining.html'
      }
    ]
  },
  {
    title: 'Coronavirus Digital Agent',
    description:
      'Neural network-powered virtual agent trained to answer COVID-19 questions with a live demo and gallery.',
    tech: ['Python', 'Keras', 'Flask', 'Pandas', 'NumPy'],
    image: '/images/projects/coronavirus-agent.png',
    category: 'Developer',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/victafrancis/Coronavirus-Virtual-Agent-ML'
      },
      {
        label: 'Snapshots',
        href: 'https://victafrancis.github.io/projects-image-gallery/coronavirusagent.html'
      },
      {
        label: 'Live Demo',
        href: 'https://ask-covid-agent.herokuapp.com/'
      }
    ]
  },
  {
    title: 'Inflation Effects Power BI Report',
    description:
      'Interactive Power BI dashboards comparing inflation to Bank of Canada targets and alternate pricing views.',
    tech: ['Power BI', 'Excel'],
    image: '/images/projects/inflation-effects-dashboard.png',
    category: 'Data',
    links: [
      {
        label: 'Download PBIX',
        href: '/files/inflation-effects.pbix'
      }
    ]
  },
  {
    title: 'NBA Player Comparison',
    description:
      'Tableau dashboard comparing 2019-2020 NBA player stats with supporting Excel data preparation.',
    tech: ['Tableau', 'Excel'],
    image: '/images/projects/nba-player-comparison.png',
    category: 'Data',
    links: [
      {
        label: 'Tableau Demo',
        href: 'https://public.tableau.com/profile/francis.victa#!/vizhome/NBAPlayerComparison2019-2020/NBAPlayerComparison2019-2020'
      }
    ]
  },
  {
    title: 'College Application Regression + Classification',
    description:
      'Explored multiple ML models with Python, Scikit-learn, and visualization to predict outcomes.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    image: '/images/projects/college-apps-regression.png',
    category: 'Data',
    links: [
      {
        label: 'Snapshots',
        href: 'https://victafrancis.github.io/projects-image-gallery/collegeanalysis.html'
      }
    ]
  },
  {
    title: 'Client Report Dashboard',
    description: 'Custom Excel reporting dashboard with streamlined monthly data updates for client reporting.',
    tech: ['Excel'],
    image: '/images/projects/client-report-dashboard.jpg',
    category: 'Data',
    links: [
      {
        label: 'Snapshots',
        href: ''
      }
    ]
  },
  {
    title: 'High-Low Casino Game',
    description:
      'Casino-style card game using probability mechanics with a playable web demo.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    image: '/images/projects/high-low-casino.png',
    category: 'Game',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/victafrancis/high-low-strategy-game'
      },
      {
        label: 'Play Game',
        href: 'https://victafrancis.github.io/high-low-strategy-game/'
      }
    ]
  },
  {
    title: 'Memory Sequence Game',
    description:
      'Arcade-style memory game designed to improve short-term recall with a mobile-friendly UI.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    image: '/images/projects/remember-my-number.png',
    category: 'Game',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/victafrancis/remember-my-number-game'
      },
      {
        label: 'Play Game',
        href: 'https://victafrancis.github.io/remember-my-number-game/'
      }
    ]
  }
]
