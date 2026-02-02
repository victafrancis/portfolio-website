'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { moreLifeCards } from '@/lib/data/more-life'

export function MoreLifeSection() {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set())

  const toggleCardExpanded = (cardTitle: string) => {
    const newExpanded = new Set(expandedCards)
    if (newExpanded.has(cardTitle)) {
      newExpanded.delete(cardTitle)
    } else {
      newExpanded.add(cardTitle)
    }
    setExpandedCards(newExpanded)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {moreLifeCards.map((card, index) => {
        const isExpanded = expandedCards.has(card.title)
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            layout
          >
            <Card className="h-full hover:border-accent/50 transition-all hover:shadow-lg flex flex-col">
              <CardHeader className="space-y-4">
                <div className="text-5xl">{card.emoji}</div>
                <div className="space-y-1">
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                  <CardDescription className="font-medium">
                    {card.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.details}
                </p>

                {isExpanded && card.expandedContent && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 pt-4 border-t"
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.expandedContent.description}
                    </p>
                    {card.expandedContent.links.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {card.expandedContent.links.map((link) => (
                          <Button
                            key={link.label}
                            variant="outline"
                            size="sm"
                            asChild
                          >
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              {link.label}
                            </a>
                          </Button>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleCardExpanded(card.title)}
                  className="w-full justify-center gap-2 mt-4"
                >
                  {isExpanded ? (
                    <>
                      View Less
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      View More
                      <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
