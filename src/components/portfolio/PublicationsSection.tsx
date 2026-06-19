"use client"

import React from 'react'
import { PUBLICATIONS } from '@/lib/portfolio-data'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, BookOpen } from 'lucide-react'

export function PublicationsSection() {
  return (
    <section id="publications" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <BookOpen className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold text-white">Research Publications</h2>
          </div>

          <div className="space-y-12">
            {PUBLICATIONS.map((pub, index) => (
              <div key={index} className="group relative p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md hover:border-accent/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                  <div className="space-y-4 flex-grow">
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-accent text-accent-foreground font-bold">{pub.venue}</Badge>
                      <Badge variant="outline" className="text-white/60 border-white/20">{pub.date}</Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                      {pub.title}
                    </h3>
                    
                    <p className="text-white/70 leading-relaxed italic">
                      {pub.abstract}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {pub.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-medium text-white/40 uppercase tracking-widest">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0">
                    <Button 
                      asChild 
                      className="bg-white/5 hover:bg-accent hover:text-accent-foreground border border-white/10 transition-all"
                    >
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                        Read on Springer <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
