'use client'
import { motion } from 'framer-motion'
import DadJokes from '@/components/DadJokes'
import { HeroSection } from '@/components/sections/HeroSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { MoreLifeSection } from '@/components/sections/MoreLifeSection'
import { Footer } from '@/components/sections/Footer'
import { Container } from '@/components/ui/container'

export default function PortfolioPage() {
  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects-section')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="relative min-h-screen bg-transparent text-foreground">
      <div className="fixed inset-0 z-0 bg-black" aria-hidden="true" />
      <div className="galaxy-background is-visible" aria-hidden="true" />
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection onViewWork={handleViewWork} />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Dad Jokes */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <DadJokes />
          </motion.div>
        </Container>
      </section>

      {/* Education & Certifications */}
      <EducationSection />

      {/* Tech Stack Marquee */}
      <SkillsSection />

      {/* More Life Section */}
      <section className="py-16">
        <Container>
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
        </Container>
      </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
