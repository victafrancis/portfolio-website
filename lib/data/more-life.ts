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
    title: 'VR Learning Publication',
    description: 'Award Winner',
    emoji: '🥽',
    details: 'Published research on immersive learning experiences in virtual reality.',
    expandedContent: {
      description: 'Authored a Learn2Learn design charette publication exploring how VR can improve education. Created research matrices, ecosystem maps, personas, and a full solution. Our team won the top prize for the competition.',
      links: [
        { label: 'Publication PDF', url: '/files/Learn2Learn Mini Publication - Kim-Victa.pdf' }
      ],
      images: ['/images/vr-l2l.png']
    }
  },
  {
    title: 'Never The Strangers',
    description: 'Past Life with Music',
    emoji: '🎸',
    details: 'A band formed with my closest friends, creating music that changed our lives.',
    expandedContent: {
      description: 'We formed Never The Strangers in university and lived out a dream of writing, performing, and releasing songs together. I left in 2012, but the memories remain unforgettable.',
      links: [
        {
          label: 'YouTube Playlist',
          url: 'https://www.youtube.com/watch?v=5krVutEOtXk&list=PLKRzgIa9LAtDbXBZZTgo7_sfa0cEmMoCl'
        },
        { label: 'Alive MV', url: 'https://www.youtube.com/watch?v=gek7LdfO870' },
        { label: 'Moving Closer MV', url: 'https://www.youtube.com/watch?v=5Gr-ZMV8F2o' },
        { label: 'Second Midnight MV', url: 'https://www.youtube.com/watch?v=wY4m2BauvFw' }
      ],
      images: ['/images/nts-band.png']
    }
  },
  {
    title: 'Collabs with Other Artists',
    description: 'Music / Production / Art',
    emoji: '🎵',
    details: 'I still create music with friends and collaborate on projects whenever I can.',
    expandedContent: {
      description: 'I occasionally create music with other artists and co-founded Living Room Sessions Toronto, inviting friends to perform live sets with strangers.',
      links: [
        { label: 'SoundCloud Profile', url: 'https://soundcloud.com/francisvicta' },
        { label: 'Track: Now', url: 'https://soundcloud.com/francisvicta/now' },
        { label: 'Track: Always There', url: 'https://soundcloud.com/francisvicta/always-there' },
        {
          label: 'Living Room Sessions Toronto',
          url: 'https://www.youtube.com/channel/UCcsbhPz4Esyyffw1_GY0J1w'
        }
      ],
      images: []
    }
  },
  {
    title: 'Heart of a Champion',
    description: 'TCBL Champions',
    emoji: '🏀',
    details: 'Teamwork, discipline, and commitment through league championships.',
    expandedContent: {
      description: 'I love being part of a team and striving for excellence together. The heart of a champion means giving everything to improve and help the team win every opportunity.',
      links: [
        {
          label: 'TCBL Highlights',
          url: 'https://www.youtube.com/embed/mpSKDRfDi34'
        }
      ],
      images: ['/images/champ-tcbl.jpg']
    }
  }
]
