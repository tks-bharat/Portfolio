"use client"

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Wand2, Loader2 } from 'lucide-react'
import { generateAboutMeSummary } from '@/ai/flows/generate-about-me-summary'

export function AboutSection() {
  const [summary, setSummary] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const handleGenerateSummary = async () => {
    setLoading(true)
    try {
      const result = await generateAboutMeSummary({
        professionalExperience: "Currently a B.Tech student in Data Science & AI at IIT Bhilai. Experience with Research Publication in PAKDD, Quantitative Research at WorldQuant, and Financial Analysis at PredictRAM.",
        aspirations: "To advance in AI research and Quantitative Finance, building scalable AI systems for complex data problems.",
        interests: "Passionate about NLP, Knowledge Graphs, and high-performance computing. Hobbies include poetry writing, sports like badminton and cricket, and singing."
      })
      setSummary(result.summary)
    } catch (error) {
      console.error("Failed to generate summary", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleGenerateSummary}
              disabled={loading}
              className="gap-2 border-accent text-white hover:bg-accent/10"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Wand2 className="h-4 w-4" />}
              Enhance with AI
            </Button>
          </div>
          
          <Card className="border-white/10 shadow-2xl bg-black/40 backdrop-blur-md">
            <CardContent className="pt-6 space-y-6">
              {summary ? (
                <div className="prose prose-invert max-w-none animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <p className="text-lg leading-relaxed text-white/90 whitespace-pre-line italic border-l-4 border-accent pl-6">
                    {summary}
                  </p>
                </div>
              ) : (
                <p className="text-lg leading-relaxed text-white/80">
                  I am a highly motivated Data Science and AI enthusiast currently pursuing my B.Tech at IIT Bhilai. 
                  My journey is defined by a deep curiosity for how machine learning and quantitative research 
                  can solve real-world problems. With experience spanning from research publications in knowledge 
                  graphs to quantitative strategy development at WorldQuant, I thrive at the intersection 
                  of theory and practical application.
                </p>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <h4 className="font-bold text-accent uppercase tracking-wider text-xs">Aspirations</h4>
                  <p className="text-sm text-white/60">Building the next generation of intelligent systems that can reason through complex semantic structures and financial markets.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-accent uppercase tracking-wider text-xs">Personal Interests</h4>
                  <p className="text-sm text-white/60">Beyond tech, I am an avid writer (published poet), musician, and sportsman who values the scenic beauty of nature.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}