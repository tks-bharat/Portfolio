
"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { PROJECTS } from '@/lib/portfolio-data'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger
} from '@/components/ui/dialog'
import { Github, Info, Loader2 } from 'lucide-react'
import { generateProjectCaseStudy } from '@/ai/flows/generate-project-case-study'

export function ProjectsSection() {
  const [loadingStudy, setLoadingStudy] = useState<string | null>(null)
  const [caseStudy, setCaseStudy] = useState<string | null>(null)

  const handleFetchCaseStudy = async (project: typeof PROJECTS[0]) => {
    setLoadingStudy(project.id)
    setCaseStudy(null)
    try {
      const result = await generateProjectCaseStudy({
        projectName: project.title,
        problem: project.problem || project.description,
        solution: project.solution || "",
        technologies: project.technologies,
        impact: project.impact || ""
      })
      setCaseStudy(result.caseStudy)
    } catch (error) {
      console.error("Failed to generate case study", error)
    } finally {
      setLoadingStudy(null)
    }
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Interactive Projects Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent research publications, technical projects, and hackathon wins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => {
            const projectImage = PlaceHolderImages.find(img => img.id === project.image)
            const imageUrl = projectImage?.imageUrl || 'https://picsum.photos/seed/600/400'
            const imageHint = projectImage?.imageHint || 'project visual'

            return (
              <Card key={project.id} className="group flex flex-col overflow-hidden border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-video overflow-hidden">
                  <Image 
                    src={imageUrl} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <Badge className="bg-accent text-accent-foreground">{project.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-[10px]">{project.period}</Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.split(',').slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-[9px] font-normal">{tech.trim()}</Badge>
                    ))}
                    {project.technologies.split(',').length > 3 && (
                      <Badge variant="secondary" className="text-[9px] font-normal">+{project.technologies.split(',').length - 3}</Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center gap-2 border-t pt-4">
                  <Dialog onOpenChange={(open) => !open && setCaseStudy(null)}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-xs gap-1 hover:text-accent"
                        onClick={() => handleFetchCaseStudy(project)}
                      >
                        <Info className="h-3 w-3" />
                        View Case Study
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-primary">{project.title}</DialogTitle>
                        <DialogDescription>Project Overview & AI Analysis</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6 pt-4">
                        {loadingStudy === project.id ? (
                          <div className="flex flex-col items-center justify-center py-12 gap-4">
                            <Loader2 className="h-8 w-8 animate-spin text-accent" />
                            <p className="text-sm text-muted-foreground">AI is synthesizing a case study...</p>
                          </div>
                        ) : (
                          <>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="p-3 bg-secondary/30 rounded-lg">
                                <h5 className="font-bold text-xs uppercase text-primary/70 mb-1">Impact</h5>
                                <p className="text-sm">{project.impact || "Exploration of novel concepts in AI."}</p>
                              </div>
                              <div className="p-3 bg-secondary/30 rounded-lg">
                                <h5 className="font-bold text-xs uppercase text-primary/70 mb-1">Stack</h5>
                                <p className="text-sm">{project.technologies}</p>
                              </div>
                            </div>
                            <div className="prose prose-sm max-w-none">
                              <h4 className="text-primary mb-2">Detailed Summary</h4>
                              <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                                {caseStudy || project.description}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  {project.isPrivate ? (
                    <span className="text-[10px] text-muted-foreground italic text-right leading-tight max-w-[140px]">
                      currently not available (privacy case for researchers)
                    </span>
                  ) : (
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-accent" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
