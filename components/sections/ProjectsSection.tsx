'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Images, Code, Maximize2 } from 'lucide-react'
import { projects } from '@/lib/data/projects'
import { Lightbox } from '@/components/ui/lightbox'
import { Container } from '@/components/ui/container'

export function ProjectsSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const handleCardClick = (title: string) => {
    setActiveCard(activeCard === title ? null : title)
  }

  return (
    <section className="py-16" id="projects-section">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Code className="h-6 w-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => {
            const isActive = activeCard === project.title
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={project.span === 2 ? 'md:col-span-2' : ''}
              >
                <div 
                  className="group relative h-64 rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-colors cursor-pointer"
                  onClick={() => handleCardClick(project.title)}
                >
                  {/* Background Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                  />

                  {/* Mobile: Always visible title bar at bottom */}
                  <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 md:hidden ${isActive ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <Badge variant="secondary" className="text-[10px]">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-300">Tap for details</p>
                  </div>

                  {/* Full Overlay - hover on desktop, tap on mobile */}
                  <div className={`absolute inset-0 bg-black/70 flex flex-col justify-end p-6 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">
                          {project.title}
                        </h3>
                        <Badge variant="secondary" className="text-[10px]">
                          {project.category}
                        </Badge>
                        <p className="text-sm text-gray-200 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      {project.links && project.links.length > 0 ? (
                        <div
                          className={`flex flex-wrap gap-2 ${isActive ? 'pointer-events-auto' : 'pointer-events-none md:pointer-events-auto'}`}
                        >
                          {project.links.map((link) => {
                            const label = link.label.toLowerCase()
                            const Icon = label.includes('github')
                              ? Github
                              : label.includes('snapshot') || label.includes('gallery') || label.includes('image')
                                ? Images
                                : ExternalLink

                            return (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(event) => event.stopPropagation()}
                                className="inline-flex items-center gap-1 rounded-md border border-white/20 px-2 py-1 text-xs text-white/90 transition hover:border-white/60 hover:text-white"
                              >
                                <Icon className="h-3.5 w-3.5" />
                                {link.label}
                              </a>
                            )
                          })}
                          <Lightbox
                            imageSrc={project.image}
                            alt={`${project.title} cover image`}
                            trigger={
                              <button
                                type="button"
                                onClick={(event) => event.stopPropagation()}
                                className="inline-flex items-center gap-1 rounded-md border border-white/20 px-2 py-1 text-xs text-white/90 transition hover:border-white/60 hover:text-white"
                                aria-label={`Enlarge ${project.title} cover image`}
                              >
                                <Maximize2 className="h-3.5 w-3.5" />
                              </button>
                            }
                          />
                        </div>
                      ) : null}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-gray-400 md:hidden">Tap again to close</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        </motion.div>
      </Container>
    </section>
  )
}
