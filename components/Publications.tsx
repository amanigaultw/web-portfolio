import SectionHeader from './SectionHeader'
import PublicationCard from './PublicationCard'

const publications = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration, inventory management, and admin dashboard. Features include real-time updates, advanced search, and personalized recommendations.',
    skills: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Portfolio Builder',
    description: 'Web application that helps developers create beautiful portfolio websites. Includes drag-and-drop interface, customizable themes, and one-click deployment.',
    skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time synchronization, team workspaces, and productivity analytics.',
    skills: ['TypeScript', 'Firebase', 'React', 'Zustand'],
    link: '#'
  }
]

export default function Publications() {
  return (
    <section id="publications" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeader title="Publication" />
      <div>
        <ul className="group/list">
          {publications.map((publication, idx) => (
            <PublicationCard key={idx} {...publication} />
          ))}
        </ul>
      </div>
    </section>
  )
}