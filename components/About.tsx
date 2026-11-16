import { Button } from "@/components/ui/moving-border";
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeader title="About" />
      <div>
        <p className="mb-4">
          I found the ideal research career, ironically, in software engineering, where reliability makes progress compound. In theory, scientific progress compounds: each breakthrough opens new lines of inquiry that lead to further breakthroughs. In practice, poor replicability breaks that chain, because results that can’t be reproduced can’t be built upon. In my experience, a colleague’s software library can be installed and built on within minutes, while reproducing a published result can take months, if it’s possible at all. That contrast made me appreciate how much of software engineering tooling exists to make work reproducible. When I moved from analysis scripts to larger programs such as apps and APIs, git tracked every change and made collaboration manageable. Docker standardized environments so software could run on far more machines, and CI/CD and unit tests verified that nothing broke along the way. Each new practice felt like a breakthrough, an exciting new way to solve old problems, because each removed a reason that work fails to carry forward. That focus on reliability is what won me over: it was the missing ingredient for compounding progress.
        </p>
        <p className="mb-4">
          Today I develop/maintain software for InductiveHealth and the Centers for Disease Control and Prevention (CDC), where I regularly work across new tech stacks in service of a valuable public health mission—stopping disease through technology. I love that this work demands both technical depth and real-world impact.
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