'use client'

import { motion } from 'framer-motion'
import DadJokes from '@/components/DadJokes'
import { HeroSection } from '@/components/sections/HeroSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { MoreLifeSection } from '@/components/sections/MoreLifeSection'
import { Container } from '@/components/ui/container'
import { Footer } from '@/components/sections/Footer'

export default function PortfolioPage() {
  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects-section')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection onViewWork={handleViewWork} />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Dad Jokes */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <DadJokes />
        </motion.div>
      </section>

      {/* Education & Certifications */}
      <EducationSection />

      {/* Tech Stack Marquee */}
      <SkillsSection />

      {/* More Life Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="text-2xl">✨</div>
            <h2 className="text-3xl md:text-4xl font-bold">More of Life</h2>
          </div>

          <MoreLifeSection />
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
