'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Trophy } from 'lucide-react'
import { educationAndCertifications } from '@/lib/data/education'

export function EducationSection() {
  return (
    <section className="container mx-auto px-4 py-16">
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
                <div className="flex flex-col items-start text-left gap-1">
                  <h3 className="text-lg font-semibold">{edu.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium">{edu.institution}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
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
    </section>
  )
}
