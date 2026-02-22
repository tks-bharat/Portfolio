import React from 'react'
import Image from 'next/image'
import { PERSONAL_INFO } from '@/lib/portfolio-data'
import { Button } from '@/components/ui/button'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'
import AnimatedShaderHero from '@/components/ui/animated-shader-hero'

export function Hero() {
  const profileImgObj = PlaceHolderImages.find(img => img.id === 'profile-pic')
  const profileImg = (profileImgObj && profileImgObj.imageUrl) ? profileImgObj.imageUrl : 'https://media.licdn.com/dms/image/v2/D5603AQF-m2YyBH9NCw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1672087152753?e=2147483647&v=beta&t=6QzvHYA2ug1tAOew2eGwRZxyPvShNY3BSH-c4TkS20s'
  
  // Split name for the two-line headline
  const nameParts = PERSONAL_INFO.name.split(' ')
  const line1 = nameParts.slice(0, 2).join(' ')
  const line2 = nameParts.slice(2).join(' ')

  return (
    <AnimatedShaderHero
      trustBadge={{
        text: `${PERSONAL_INFO.institution} Researcher`,
        icons: ["✨"]
      }}
      headline={{
        line1: line1,
        line2: line2 || "Researcher"
      }}
      subtitle={PERSONAL_INFO.title}
    >
      <div className="flex flex-col items-center">
        {/* Contact Info & Socials Integrated into Shader Hero */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            {PERSONAL_INFO.location}
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-accent" />
            {PERSONAL_INFO.email}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Social Buttons */}
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

          {/* Profile Picture Slot */}
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
    </AnimatedShaderHero>
  )
}
