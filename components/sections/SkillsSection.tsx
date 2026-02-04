'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Server, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { techStackGroups } from '@/lib/data/tech-stack'
import { Container } from '@/components/ui/container'

export function SkillsSection() {
  const [skillsExpanded, setSkillsExpanded] = useState(false)

  return (
    <section className="py-16 border-y overflow-hidden">
      <Container className="space-y-8">
        <div className="flex items-center gap-3">
          <Server className="h-6 w-6 text-accent" />
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
        </div>

        {!skillsExpanded ? (
          <div className="relative space-y-6">
            {techStackGroups.map((group, groupIndex) => (
              <div key={group.label} className="space-y-2">
                <div className={`text-sm font-semibold uppercase tracking-[0.2em] ${group.color}`}>
                  {group.label}
                </div>
                <div
                  className="flex gap-8 animate-marquee whitespace-nowrap"
                  style={{ animationDelay: `${groupIndex * 0.5}s` }}
                >
                  {[...group.items, ...group.items].map((tech, index) => (
                    <span
                      key={`${group.label}-${index}`}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent ${group.borderColor}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
            className="space-y-8"
          >
            {techStackGroups.map((group) => (
              <div key={group.label} className="space-y-4">
                <div className={`text-lg font-semibold ${group.color}`}>{group.label}</div>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((tech) => (
                    <Badge
                      key={`${group.label}-${tech}`}
                      variant="secondary"
                      className={`px-4 py-2 text-base border ${group.borderColor}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
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
      </Container>
    </section>
  )
}
