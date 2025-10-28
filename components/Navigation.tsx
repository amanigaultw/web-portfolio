'use client'

import { useState, useEffect } from 'react'

const sections = ['about', 'experience', 'projects', 'publications']

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
      <ul className="w-max">
        {sections.map((section) => (
          <li key={section}>
            <button
              onClick={() => scrollToSection(section)}
              className="group flex items-center py-3 w-full text-left"
            >
              <span 
                className={`mr-4 h-px transition-all ${
                  activeSection === section 
                    ? 'w-16 bg-slate-200' 
                    : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                }`}
              />
              <span 
                className={`text-xs font-bold uppercase tracking-widest ${
                  activeSection === section 
                    ? 'text-slate-200' 
                    : 'text-slate-500 group-hover:text-slate-200'
                }`}
              >
                {section}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}