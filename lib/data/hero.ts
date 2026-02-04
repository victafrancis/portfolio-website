export type HeroLink = {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail'
  ariaLabel?: string
  external?: boolean
}

export type HeroData = {
  name: string
  title: string
  tagline: string
  profileImage: {
    src: string
    alt: string
  }
  badges: string[]
  primaryCta: {
    label: string
  }
  contact: {
    email: string
  }
  links: HeroLink[]
  credlyBadge: {
    width: number
    height: number
    badgeId: string
    host: string
  }
}

export const heroData: HeroData = {
  name: 'Francis Victa',
  title: 'Full Stack Cloud Developer & AI Solutions Engineer',
  tagline: 'Architecting scalable cloud systems and transforming manual workflows into automated, intelligent solutions.',
  profileImage: {
    src: '/images/profile.png',
    alt: 'Francis Victa'
  },
  badges: ['AWS Certified', 'Serverless Architecture', 'Applied AI Integrations','Student of Life', 'Magis Philosophy'],
  primaryCta: {
    label: 'View Work'
  },
  contact: {
    email: 'francisvicta45@gmail.com'
  },
  links: [
    {
      label: 'GitHub',
      href: 'https://github.com/victafrancis',
      icon: 'github',
      ariaLabel: 'GitHub',
      external: true
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/francisvicta/',
      icon: 'linkedin',
      ariaLabel: 'LinkedIn',
      external: true
    }
  ],
  credlyBadge: {
    width: 150,
    height: 270,
    badgeId: '29c94a6c-0c31-4fe7-be44-79af401bcaf8',
    host: 'https://www.credly.com'
  }
}