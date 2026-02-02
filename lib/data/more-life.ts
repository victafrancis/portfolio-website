export interface MoreLifeCard {
  title: string
  description: string
  emoji: string
  details: string
  expandedContent: {
    description: string
    links: Array<{ label: string; url: string }>
    images: string[]
  }
}

export const moreLifeCards: MoreLifeCard[] = [
  {
    title: 'Never The Strangers',
    description: 'Band Member',
    emoji: '🎸',
    details: 'Making music and connecting with audiences across the city.',
    expandedContent: {
      description: 'A dynamic indie/alternative band performing across Toronto venues. We blend rock, indie, and experimental sounds to create memorable live experiences.',
      links: [
        { label: 'Spotify', url: '#' },
        { label: 'Instagram', url: '#' }
      ],
      images: []
    }
  },
  {
    title: 'Heart of a Champion',
    description: 'TCBL Champions',
    emoji: '🏀',
    details: 'Teamwork, dedication, and the pursuit of excellence on the court.',
    expandedContent: {
      description: 'Competed in the Toronto Competitive Basketball League, bringing home the championship through strategic gameplay and exceptional teamwork.',
      links: [
        { label: 'Team Profile', url: '#' },
        { label: 'Stats', url: '#' }
      ],
      images: []
    }
  },
  {
    title: 'VR Learning Publication',
    description: 'Award Winner',
    emoji: '🏆',
    details: 'Published research on immersive learning experiences in virtual reality.',
    expandedContent: {
      description: 'Authored and published research exploring how VR technologies can enhance educational outcomes and student engagement in immersive learning environments.',
      links: [
        { label: 'Publication', url: '#' },
        { label: 'Research Paper', url: '#' }
      ],
      images: []
    }
  },
  {
    title: 'NASA Enthusiast',
    description: 'Space Explorer',
    emoji: '🚀',
    details: 'Fascinated by Earthset from Orion and humanity\'s journey to the stars.',
    expandedContent: {
      description: 'Passionate about space exploration, particularly the Artemis program and the future of human spaceflight. Following the journey to the Moon and beyond.',
      links: [
        { label: 'NASA Updates', url: '#' },
        { label: 'Artemis Program', url: '#' }
      ],
      images: []
    }
  }
]
