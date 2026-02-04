'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { Container } from '@/components/ui/container'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/francisvicta/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/victafrancis', label: 'GitHub' },
    { icon: Mail, href: 'mailto:francisvicta45@gmail.com', label: 'Email' }
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t bg-card/50 backdrop-blur-sm"
    >
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-3 items-start mb-8">
          {/* Branding */}
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Francis Victa</h3>
            <p className="text-sm text-muted-foreground">
              Live with intention and purpose!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Quick Links</h4>
            <nav className="flex flex-col gap-1">
              <a href="#projects-section" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Projects
              </a>
              <a href="" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="mailto:francisvicta45@gmail.com" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Button
                    key={link.label}
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Francis Victa. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="gap-2"
          >
            Back to Top
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </motion.footer>
  )
}
