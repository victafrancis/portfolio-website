'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Server, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { techStack } from '@/lib/data/tech-stack'

export function SkillsSection() {
  const [skillsExpanded, setSkillsExpanded] = useState(false)

  return (
    <section className="py-16 border-y overflow-hidden">
      <div className="container mx-auto px-4 space-y-8">
        <div className="flex items-center gap-3">
          <Server className="h-6 w-6 text-accent" />
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
        </div>

        {!skillsExpanded ? (
          <div className="relative">
            <div className="flex gap-8 animate-marquee whitespace-nowrap">
              {[...techStack, ...techStack].map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 text-lg font-medium text-muted-foreground hover:text-accent transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button
                variant="outline"
                onClick={() => setSkillsExpanded(true)}
                className="gap-2"
              >
                View All Skills
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-4 py-2 text-base">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => setSkillsExpanded(false)}
                className="gap-2"
              >
                View Less
                <ChevronUp className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
