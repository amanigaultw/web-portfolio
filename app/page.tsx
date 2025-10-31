import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Publications from '@/components/Publications'
import MouseGradient from '@/components/MouseGradient'
import StaticGradient from '@/components/StaticGradient'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 relative">
      <MouseGradient />
      <StaticGradient />
      
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-12">
          <Header />
          
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Publications />
          </main>
        </div>
      </div>
    </div>
  )
}