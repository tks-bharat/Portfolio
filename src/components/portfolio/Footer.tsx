import React from 'react'
import { PERSONAL_INFO } from '@/lib/portfolio-data'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-transparent text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-headline mb-2">Profolio Canvas</h3>
            <p className="text-white/60 text-sm max-w-xs">
              A minimalist professional portfolio showcasing data science and AI research.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-accent-foreground transition-all border border-white/10"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-accent-foreground transition-all border border-white/10"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-accent-foreground transition-all border border-white/10"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-white/40 text-xs">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, Genkit & Tailored AI Content.</p>
        </div>
      </div>
    </footer>
  )
}
