'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Trophy } from 'lucide-react'
import { educationAndCertifications } from '@/lib/data/education'
import { Container } from '@/components/ui/container'

export function EducationSection() {
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
            <Trophy className="h-6 w-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold">Education & Certifications</h2>
          </div>

        <Accordion type="single" collapsible className="space-y-4">
          {educationAndCertifications.map((edu, index) => (
            <AccordionItem key={index} value={`edu-${index}`} className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex flex-col items-start text-left gap-3 sm:flex-row sm:items-center">
                  {edu.logo ? (
                    <div className="flex h-14 w-20 items-center justify-center rounded-md border bg-background/60 p-2">
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-col items-start gap-1">
                    {edu.link ? (
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg font-semibold text-foreground transition hover:text-primary"
                      >
                        {edu.title}
                      </a>
                    ) : (
                      <h3 className="text-lg font-semibold">{edu.title}</h3>
                    )}
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">{edu.institution}</span>
                      <span>•</span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                <div className="text-sm text-muted-foreground italic">
                  {edu.details}
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
