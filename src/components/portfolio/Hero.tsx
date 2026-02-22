import React from 'react'
import Image from 'next/image'
import { PERSONAL_INFO } from '@/lib/portfolio-data'
import { Button } from '@/components/ui/button'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'

export function Hero() {
  const profileImgObj = PlaceHolderImages.find(img => img.id === 'profile-pic')
  const profileImg = (profileImgObj && profileImgObj.imageUrl) ? profileImgObj.imageUrl : 'https://media.licdn.com/dms/image/v2/D5603AQF-m2YyBH9NCw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1672087152753?e=2147483647&v=beta&t=6QzvHYA2ug1tAOew2eGwRZxyPvShNY3BSH-c4TkS20s'
  
  const nameParts = PERSONAL_INFO.name.split(' ')
  const line1 = nameParts.slice(0, 2).join(' ')
  const line2 = nameParts.slice(2).join(' ')

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-white px-4 py-20">
      <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
        <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm">
          <span className="text-accent">✨</span>
          <span className="text-white/90">{PERSONAL_INFO.institution} Researcher</span>
        </div>
      </div>

      <div className="text-center space-y-6 max-w-6xl mx-auto">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
            {line1}
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-accent via-white to-white bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-6 duration-700">
            {line2 || "Researcher"}
          </h1>
        </div>
        
        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 font-light leading-relaxed">
            {PERSONAL_INFO.title}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/70 text-sm animate-in fade-in duration-1000">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            {PERSONAL_INFO.location}
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-accent" />
            {PERSONAL_INFO.email}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
          <div className="flex gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <div className="flex items-center gap-3">
              <Button size="icon" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10" asChild>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /></a>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10" asChild>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer"><Github /></a>
              </Button>
            </div>
          </div>

          <div className="relative h-48 w-48 lg:h-56 lg:w-56 rounded-full border-2 border-accent/50 p-1.5 bg-black/50 backdrop-blur-sm">
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
    </section>
  )
}