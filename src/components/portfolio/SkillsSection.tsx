"use client"

import React, { useState } from 'react'
import { SKILLS } from '@/lib/portfolio-data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Wand2, Loader2, Code2, BrainCircuit, Database, Layers } from 'lucide-react'
import { generateSkillDescription } from '@/ai/flows/generate-skill-description'

const SKILL_CATEGORIES = [
  { id: 'programming', label: 'Programming', icon: Code2, items: SKILLS.programming },
  { id: 'ai_ml', label: 'AI & Machine Learning', icon: BrainCircuit, items: SKILLS.ai_ml },
  { id: 'data_tools', label: 'Data Tools', icon: Database, items: SKILLS.data_tools },
  { id: 'frameworks', label: 'Frameworks', icon: Layers, items: SKILLS.frameworks },
]

export function SkillsSection() {
  const [aiBlurb, setAiBlurb] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const handleGenerateBlurb = async () => {
    setLoading(true)
    try {
      const allSkills = [...SKILLS.programming, ...SKILLS.ai_ml, ...SKILLS.data_tools, ...SKILLS.frameworks]
      const result = await generateSkillDescription({ skills: allSkills })
      setAiBlurb(result.description)
    } catch (error) {
      console.error("Failed to generate blurb", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-primary mb-4">Skills Showcase</h2>
            {aiBlurb ? (
              <p className="text-accent font-medium leading-relaxed italic animate-in fade-in">
                "{aiBlurb}"
              </p>
            ) : (
              <p className="text-muted-foreground">
                A technical stack focused on Data Science, Artificial Intelligence, and scalable backend solutions.
              </p>
            )}
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleGenerateBlurb}
            disabled={loading}
            className="gap-2 border-accent text-accent-foreground hover:bg-accent/10 whitespace-nowrap self-start md:self-auto"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Wand2 className="h-4 w-4" />}
            Generate AI Blurb
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat) => (
            <Card key={cat.id} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <cat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, idx) => (
                    <Badge 
                      key={idx} 
                      className="px-4 py-1.5 bg-background border-border text-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all cursor-default text-sm"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
                {/* Visual Proficiency bars for illustrative purpose */}
                <div className="mt-8 space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold text-muted-foreground">
                      <span>Expertise Level</span>
                      <span>{cat.id === 'ai_ml' ? 'Advanced' : cat.id === 'programming' ? 'Core' : 'Proficient'}</span>
                    </div>
                    <Progress value={cat.id === 'ai_ml' ? 90 : 85} className="h-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
