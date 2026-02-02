'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

export function DadJokes() {
  const [joke, setJoke] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  const fetchJoke = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json',
        },
      })
      const data = await response.json()
      setJoke(data.joke)
    } catch (error) {
      console.error('Error fetching joke:', error)
      setJoke('Why did the developer go broke? Because he lost his cache! 😄')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="text-2xl font-bold pb-4">Here, have a random dad joke..</h4>
      <Card className="max-w-md mx-auto border-gold/30 hover:border-accent/50 transition-colors">
        <CardContent className="pt-6 space-y-4">
          <div className="min-h-20 flex items-center">
            {loading ? (
              <div className="flex items-center justify-center w-full">
                <Loader2 className="h-5 w-5 animate-spin text-accent" />
              </div>
            ) : (
              <p className="text-lg font-medium text-center leading-relaxed">
                {joke}
              </p>
            )}
          </div>
          <Button
            onClick={fetchJoke}
            disabled={loading}
            className="w-full bg-accent hover:bg-accent/90"
          >
            {loading ? 'Loading...' : 'Another One'}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default DadJokes
