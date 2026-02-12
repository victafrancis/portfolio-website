export interface Volunteer {
  role: string
  organizations: {
    name: string
    url?: string
  }[]
  location: string
  period: string
  description: string
  focusAreas: string[]
}

export const volunteerExperiences: Volunteer[] = [
  {
    role: 'Tech Lead (Non-Profit Organization)',
    organizations: [
      {
        name: 'Gift Canada',
        url: 'https://www.giftcanada.org/'
      },
      {
        name: 'Camp Moses',
        url: 'https://www.campmoses.org/'
      }
    ],
    location: 'Toronto, ON',
    period: '2020–Present',
    description:
      'As the tech lead, I am in charge of maintaining the websites for the non-profit organization, including the affiliated non-profit Camp Moses, where I also led website modernization to Next.js. I update the websites as needed for new features, manage DNS systems for both domains, and research and suggest new tools to improve processes, such as using MailerLite for mailing list management. I have continued supporting the organization because they have proven to make an impact for kids and families who need it most in more remote parts of the Philippines. As long as they require technical assistance, I will continue to offer support.',
    focusAreas: [
      'Technical Leadership',
      'Next.js Modernization',
      'Website Maintenance',
      'DNS Management',
      'UI',
      'Content Management',
      'Process Improvement',
      'MailerLite'
    ]
  }
]