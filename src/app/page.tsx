import { Header } from '@/components/portfolio/Header'
import { Hero } from '@/components/portfolio/Hero'
import { AboutSection } from '@/components/portfolio/AboutSection'
import { ExperienceSection } from '@/components/portfolio/ExperienceSection'
import { ProjectsSection } from '@/components/portfolio/ProjectsSection'
import { SkillsSection } from '@/components/portfolio/SkillsSection'
import { Footer } from '@/components/portfolio/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        
        {/* Education Highlight (Minimalist) */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-xl bg-card hover:shadow-md transition-all">
                <span className="text-accent text-xs font-bold uppercase tracking-wider">2022 - Present</span>
                <h3 className="font-bold text-lg mt-2 mb-1">B.Tech. Data Science & AI</h3>
                <p className="text-sm text-muted-foreground mb-2">IIT Bhilai</p>
                <p className="text-sm font-semibold">CGPA: 7.21/10</p>
              </div>
              <div className="p-6 border rounded-xl bg-card hover:shadow-md transition-all">
                <span className="text-accent text-xs font-bold uppercase tracking-wider">2020 - 2022</span>
                <h3 className="font-bold text-lg mt-2 mb-1">Senior Secondary</h3>
                <p className="text-sm text-muted-foreground mb-2">DPS Mathura Road</p>
                <p className="text-sm font-semibold">Score: 77.4%</p>
              </div>
              <div className="p-6 border rounded-xl bg-card hover:shadow-md transition-all">
                <span className="text-accent text-xs font-bold uppercase tracking-wider">2020</span>
                <h3 className="font-bold text-lg mt-2 mb-1">Secondary School</h3>
                <p className="text-sm text-muted-foreground mb-2">DPS Indirapuram</p>
                <p className="text-sm font-semibold">Score: 89.9%</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
