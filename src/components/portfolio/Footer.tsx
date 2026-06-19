import React from 'react'
import { PERSONAL_INFO } from '@/lib/portfolio-data'
import { Github, Linkedin, Mail } from 'lucide-react'

const OrcidIcon = ({ className }: { className?: string }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor"
    className={className}
  >
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.541 0 .98.439.98.98s-.439.98-.98.98-.98-.439-.98-.98.439-.98.98-.98zm-.854 1.842h1.708v10.134H6.515V6.22zm3.915 0h3.178c1.899 0 3.121 1.062 3.121 2.924 0 1.638-1.014 2.652-2.31 2.855l2.457 4.355h-1.895l-2.176-4.008h-1.685v4.008H10.43V6.22zm1.708 1.554v2.798h1.469c.94 0 1.481-.465 1.481-1.399 0-.934-.541-1.399-1.481-1.399h-1.469z"/>
  </svg>
)

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
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-accent-foreground transition-all border border-white/10"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            {PERSONAL_INFO.orcid && (
              <a 
                href={PERSONAL_INFO.orcid} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-accent-foreground transition-all border border-white/10"
                title="ORCID Profile"
              >
                <OrcidIcon className="h-5 w-5" />
              </a>
            )}
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-accent-foreground transition-all border border-white/10"
              title="Email"
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