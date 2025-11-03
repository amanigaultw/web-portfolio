import { Button } from "@/components/ui/moving-border";
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
          My software engineering approach has been shaped by several key skills honed over a decade of research experience—<i><b>scientific experimentation, writing, and learning</b></i>. User acceptance testing and bug fixing greatly benefit from a scientific mindset—one that involves hypothesis testing and measurement. Similar to academic writing, software engineering is an iterative process that benefits greatly from continuous user feedback and regular revisions. Effective researchers and software engineers tend to learn quickly as they are required to keep up with an ever-evolving literature or technology landscape. My research background strengthens my approach to software engineering—a connection championed by respected engineers, who emphasize the integration of science and software. Indeed, David Farley defines software engineering as the application of an empirical, scientific approach to finding efficient, economic solutions to practical problems in software. 
        </p>
        <p className="mb-4">
          My main focus these days is developing applications and tools that solve practical problems for <b>InductiveHealth</b> and the Centers for Disease Control and Prevention (<b>CDC</b>). I love that my job provides me with the opportunity to frequently explore new tech stacks in support of a valuable public health mission—stopping disease through technology.
        </p>
        <p className="mb-4">
          Outside of work, I'm usually running, hanging out with my wife, cat and dog, or experimenting with game design/development.
        </p>
        <p>
          Please reach out if you have any questions or are seeking to collaborate.  Cheers!
        </p>
      </div>
      {/* <DownloadButton filePath="/docs/Andrew-Manigault-Resume.pdf" fileName="Andrew-Manigault-Resume.pdf" /> */}
      <div className="m-15 flex justify-center text-center">
        <a href="/docs/Andrew-Manigault-Resume.pdf" target="blank">
          <Button
            borderRadius="1.75rem"
            className="bg-slate-900 text-white border-slate-800 hover:bg-slate-800 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out transform"
            >
              View Resume
          </Button>
        </a>
      </div>
    </section>
  )
}