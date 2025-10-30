import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeader title="About" />
      <div>
        <p className="mb-4">
          Coming from a background in health psychology research, I discovered my passion for software while using R to streamline my method for data analysis and manuscript writing. What began as curiosity for coding transformed into a deep appreciation for problem-solving through technology, leading me to pursue a career in software engineering to build meaningful, data-driven solutions.
        </p>
        <p className="mb-4">
          My main focus these days is developing applications and tools that solve practical problems for InductiveHealth and the Center for Disease Control (CDC). Much like academic writing, software engineering is a highly iterative process that thrives on strong user feedback and rewards those who are compelled to perpetually edit their work.  I love that my job provides me with the opportunity to frequently explore new tech stacks in support of a valuable public health mission—stopping disease through technology.
        </p>
        <p>
          Outside of work, I'm usually running, hanging out with my wife, cat and dog, or dabbling in game design/development.
        </p>
      </div>
    </section>
  )
}