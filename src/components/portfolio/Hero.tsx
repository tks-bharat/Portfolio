import React from 'react'
import Image from 'next/image'
import { PERSONAL_INFO } from '@/lib/portfolio-data'
import { Button } from '@/components/ui/button'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'

export function Hero() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'profile-pic')?.imageUrl || ''

  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
      <div className="absolute inset-0 opacity-10">
        <Image 
          src={PlaceHolderImages.find(img => img.id === 'hero-bg')?.imageUrl || ''} 
          alt="background"
          fill
          className="object-cover"
          data-ai-hint="abstract background"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between lg:items-center">
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl mb-4">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xl text-primary-foreground/80 font-medium mb-6">
              {PERSONAL_INFO.title} @ <span className="text-accent">{PERSONAL_INFO.institution}</span>
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <MapPin className="h-4 w-4" />
                {PERSONAL_INFO.location}
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Mail className="h-4 w-4" />
                {PERSONAL_INFO.email}
              </div>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                </Button>
                <Button size="icon" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer"><Github /></a>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/3 flex justify-center">
            <div className="relative h-64 w-64 lg:h-80 lg:w-80 rounded-full border-4 border-accent p-2">
              <div className="relative h-full w-full rounded-full overflow-hidden">
                <Image 
                  src={profileImg} 
                  alt={PERSONAL_INFO.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
