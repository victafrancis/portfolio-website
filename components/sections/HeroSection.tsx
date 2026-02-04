'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Button, buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Copy, Github, Linkedin, Mail, ChevronRight } from 'lucide-react'
import { heroData } from '@/lib/data/hero'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  onViewWork: () => void
}

export function HeroSection({ onViewWork }: HeroSectionProps) {
  const [copied, setCopied] = useState(false)
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

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

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current)
      }
    }
  }, [])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(heroData.contact.email)
      setCopied(true)

      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current)
      }

      copyTimeoutRef.current = setTimeout(() => setCopied(false), 1500)
    } catch (error) {
      setCopied(false)
      console.error('Failed to copy email address.', error)
    }
  }

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
                src={heroData.profileImage.src}
                alt={heroData.profileImage.alt}
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
              {heroData.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light"
            >
              {heroData.title}
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl"
          >
            {heroData.tagline}
          </motion.p>

          {/* Philosophy Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {heroData.badges.map((badge) => (
              <Badge
                key={badge}
                variant="secondary"
                className="bg-accent/10 text-accent border-accent/30"
              >
                {badge}
              </Badge>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={onViewWork}>
              {heroData.primaryCta.label}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <div
              role="group"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'gap-2 px-4'
              )}
            >
              <a href={`mailto:${heroData.contact.email}`} className="inline-flex items-center select-text">
                <Mail className="mr-2 h-4 w-4" />
                <span className="select-text cursor-text">{heroData.contact.email}</span>
              </a>
              <Tooltip open={copied} onOpenChange={(open) => !open && setCopied(false)}>
                <TooltipTrigger asChild>
                  <Button
                    size="icon-sm"
                    variant="ghost"
                    aria-label="Copy email address"
                    onClick={handleCopyEmail}
                    className="hover:bg-accent/20"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">Copied!</TooltipContent>
              </Tooltip>
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-3 pt-2"
          >
            {heroData.links.map((link) => {
              const Icon =
                link.icon === 'github'
                  ? Github
                  : link.icon === 'linkedin'
                  ? Linkedin
                  : Mail

              return (
                <Button key={link.label} variant="ghost" size="sm" asChild>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    aria-label={link.ariaLabel ?? link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Right Column - AWS Badge (stacks on mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center md:justify-end w-full md:w-auto"
        >
          <div
            className="flex items-center justify-center"
            style={{
              width: heroData.credlyBadge.width,
              height: heroData.credlyBadge.height
            }}
          >
            <div
              data-iframe-width={heroData.credlyBadge.width}
              data-iframe-height={heroData.credlyBadge.height}
              data-share-badge-id={heroData.credlyBadge.badgeId}
              data-share-badge-host={heroData.credlyBadge.host}
            ></div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
