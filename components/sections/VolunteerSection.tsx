'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Handshake } from 'lucide-react'
import { volunteerExperiences } from '@/lib/data/volunteer'
import { Container } from '@/components/ui/container'

export function VolunteerSection() {
  return (
    <section className="py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Handshake className="h-6 w-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold">Volunteer Experience</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {volunteerExperiences.map((volunteer, index) => (
              <AccordionItem key={index} value={`volunteer-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex flex-col items-start text-left gap-1">
                    <h3 className="text-lg font-semibold">{volunteer.role}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      {volunteer.organizations.map((organization, orgIndex) => (
                        <div key={organization.name} className="flex items-center gap-2">
                          {organization.url ? (
                            <a
                              href={organization.url}
                              target="_blank"
                              rel="noreferrer"
                              className="font-medium text-foreground underline-offset-4 hover:underline"
                            >
                              {organization.name}
                            </a>
                          ) : (
                            <span className="font-medium">{organization.name}</span>
                          )}
                          {orgIndex < volunteer.organizations.length - 1 ? <span>•</span> : null}
                        </div>
                      ))}
                      <span>•</span>
                      <span>{volunteer.location}</span>
                      <span>•</span>
                      <span>{volunteer.period}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <p className="text-muted-foreground leading-relaxed">{volunteer.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {volunteer.focusAreas.map((area) => (
                      <Badge key={area} variant="outline">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  )
}
