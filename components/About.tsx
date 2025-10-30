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
          My software engineering approach has been shaped by several key skills honed over a decade of research experience— scientific experimentation, writing, and learning. User acceptance testing and bug fixing greatly benefit from a scientific mindset—one that involves hypothesis testing and measurement. Much like academic writing, software engineering is a highly iterative process that thrives on strong user feedback and rewards those who are compelled to thoroughly edit their work. Lastly, effective researchers and software engineers share in their propensity to learn quickly as they are required to keep up with an ever-evolving literature or technology landscape. My research background strengthens my approach to software engineering—a connection championed by respected engineers, who emphasize the integration of science and software. Indeed, David Farley defines software engineering as the application of an empirical, scientific approach to finding efficient, economic solutions to practical problems in software. 
        </p>
        <p className="mb-4">
          My main focus these days is developing applications and tools that solve practical problems for InductiveHealth and the Centers for Disease Control and Prevention (CDC). I love that my job provides me with the opportunity to frequently explore new tech stacks in support of a valuable public health mission—stopping disease through technology.
        </p>
        <p className="mb-4">
          Outside of work, I'm usually running, hanging out with my wife, cat and dog, or experimenting with game design/development.
        </p>
        <p>
          Most of my professional work requires some level of CDC access and is not linked to my personal github. However, I tried to list some shareable project on this website. Please reach out if you have any question or are seeking to collaborate.  Cheers!
        </p>
      </div>
    </section>
  )
}