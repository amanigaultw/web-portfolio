import SectionHeader from './SectionHeader'
import ExperienceCard from './ExperienceCard'

const experiences = [
  {
    period: '2024 — Present',
    role: 'Senior Front-End Engineer',
    company: 'Tech Company',
    description: 'Build and maintain critical components used to construct the frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers.',
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js']
  },
  {
    period: '2020 — 2024',
    role: 'Full Stack Developer',
    company: 'Digital Agency',
    description: 'Built and styled high-quality websites, design systems, and digital experiences for diverse clients. Provided leadership through collaboration and knowledge sharing.',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL']
  },
  {
    period: '2018 — 2020',
    role: 'Frontend Developer',
    company: 'Startup Inc',
    description: 'Developed interactive web applications and user interfaces. Collaborated with designers to implement pixel-perfect designs.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js']
  }
]

export default function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeader title="Experience" />
      <div>
        <ol className="group/list">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </ol>
      </div>
    </section>
  )
}