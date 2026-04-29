import { Button } from "@/components/ui/moving-border";
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeader title="About" />
      <div>
        <p className="mb-4">
          I build software the way researchers solve problems — rigorously, iteratively, and with a relentless focus on what the evidence actually shows. My path into engineering started in health psychology, where I spent a decade designing experiments, analyzing data in R, and writing for peer review. That foundation didn't just introduce me to code; it shaped how I think about building software.
        </p>
        <p className="mb-4">
          The skills that make a great engineer — debugging a broken system, gathering user feedback, adapting to new tools — map directly onto scientific practice. Hypothesis testing is just structured debugging. User acceptance testing is just an experiment. Keeping up with a shifting tech landscape is no different from tracking an evolving field of research. I didn't learn these habits in a CS classroom, but I've been using them professionally for years.
        </p>
        <p className="mb-4">
          Today I develop applications and tools for InductiveHealth and the Centers for Disease Control and Prevention (CDC), where I regularly work across new tech stacks in service of a valuable public health mission: stopping disease through technology. I love that this work demands both technical depth and real-world impact.
        </p>
        <p className="mb-4">
          Outside of work, I'm usually running, spending time with my wife, cat, and dog, or exploring game design and development.
        </p>
        <p>
          If you're looking for a software engineer who brings genuine scientific thinking to the craft — reach out. I'd love to connect.
        </p>
      </div>
      {/* <DownloadButton filePath="/docs/Andrew-Manigault-Resume.pdf" fileName="Andrew-Manigault-Resume.pdf" /> */}
      {/* <div className="m-15 flex justify-center text-center">
        <a href="/docs/Andrew-Manigault-Resume.pdf" target="blank">
          <Button
            borderRadius="1.75rem"
            className="bg-slate-900 text-white border-slate-800 hover:bg-slate-800 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out transform"
            >
              View Resume
          </Button>
        </a>
      </div> */}
    </section>
  )
}