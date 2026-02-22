import { Header } from '@/components/portfolio/Header'
import { Hero } from '@/components/portfolio/Hero'
import { AboutSection } from '@/components/portfolio/AboutSection'
import { ExperienceSection } from '@/components/portfolio/ExperienceSection'
import { ProjectsSection } from '@/components/portfolio/ProjectsSection'
import { SkillsSection } from '@/components/portfolio/SkillsSection'
import { AchievementsSection } from '@/components/portfolio/AchievementsSection'
import { Footer } from '@/components/portfolio/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent selection:text-accent-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { period: "2022 - Present", degree: "B.Tech. Data Science & AI", school: "IIT Bhilai", score: "CGPA: 7.21/10" },
                { period: "2020 - 2022", degree: "Senior Secondary", school: "DPS Mathura Road", score: "Score: 77.4%" },
                { period: "2020", degree: "Secondary School", school: "DPS Indirapuram", score: "Score: 89.9%" }
              ].map((edu, i) => (
                <div key={i} className="p-6 border border-white/10 rounded-xl bg-black/40 backdrop-blur-md hover:border-accent/50 transition-all shadow-xl">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider">{edu.period}</span>
                  <h3 className="font-bold text-lg text-white mt-2 mb-1">{edu.degree}</h3>
                  <p className="text-sm text-white/60 mb-2">{edu.school}</p>
                  <p className="text-sm font-semibold text-white/80">{edu.score}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}