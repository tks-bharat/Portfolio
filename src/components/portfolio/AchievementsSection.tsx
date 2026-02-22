"use client"

import React from 'react'
import { ACHIEVEMENTS } from '@/lib/portfolio-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, Award, Target, Globe, Cpu, Star } from 'lucide-react'

const getIcon = (title: string) => {
  if (title.includes('JEE')) return Trophy
  if (title.includes('Promptathon')) return Cpu
  if (title.includes('KIMO')) return Award
  if (title.includes('Quant')) return Globe
  if (title.includes('Finalist')) return Target
  return Star
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Honors & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A track record of excellence in competitive examinations, hackathons, and academic pursuits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((achievement, index) => {
            const IconComponent = getIcon(achievement.title)
            return (
              <Card key={index} className="border border-border/50 hover:border-accent/50 transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <IconComponent className="h-5 w-5 text-accent" />
                    </div>
                    <Badge variant="secondary" className="text-[10px] uppercase tracking-wider font-bold">
                      {achievement.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-primary">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
