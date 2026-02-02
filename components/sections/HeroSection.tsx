'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Mail, ChevronRight } from 'lucide-react'

interface HeroSectionProps {
  onViewWork: () => void
}

export function HeroSection({ onViewWork }: HeroSectionProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    script.type = 'text/javascript';
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:grid md:gap-8 md:grid-cols-4 md:gap-12 items-start md:items-center gap-8">
        {/* Left Column - The Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 md:col-span-3 w-full"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="w-fit"
          >
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-accent/30 hover:border-accent/60 transition-colors group cursor-pointer shadow-md hover:shadow-lg hover:shadow-accent/20 transition-shadow">
              <img
                src="/images/profile.png"
                alt="Francis Victa"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Francis Victa
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light"
            >
              Full Stack Cloud Engineer & AI Developer
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl"
          >
            Leveraging technology, data and curiosity to build the "more".
          </motion.p>

          {/* Philosophy Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/30">
              Student of Life
            </Badge>
            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/30">
              Magis
            </Badge>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={onViewWork}>
              View Work
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:francisvicta45@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                francisvicta45@gmail.com
              </a>
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-3 pt-2"
          >
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/victafrancis" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://www.linkedin.com/in/francisvicta/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column - AWS Badge (stacks on mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center md:justify-end w-full md:w-auto"
        >
          <div className="w-[150px] h-[270px] flex items-center justify-center">
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="29c94a6c-0c31-4fe7-be44-79af401bcaf8" data-share-badge-host="https://www.credly.com"></div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
