import React from 'react'
import { WORK_EXPERIENCE } from '@/lib/portfolio-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Calendar } from 'lucide-react'

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {WORK_EXPERIENCE.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 z-10">
                <Briefcase className="h-5 w-5 text-accent" />
              </div>
              
              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-auto md:ml-0 p-4 rounded border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col mb-2">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-primary">{exp.role}</h3>
                    <Badge variant="outline" className="text-[10px] py-0">{exp.period}</Badge>
                  </div>
                  <p className="text-sm font-semibold text-accent">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.details?.map((detail, idx) => (
                    <Badge key={idx} variant="secondary" className="text-[10px] font-normal">
                      {detail}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
