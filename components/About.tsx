import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeader title="About" />
      <div>
        <p className="mb-4">
          Back in 2015, I decided to try my hand at creating custom themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I've had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.
        </p>
        <p className="mb-4">
          My main focus these days is building accessible user interfaces for our customers at Company. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built really well under the hood.
        </p>
        <p>
          When I'm not at the computer, I'm usually rock climbing, hanging out with my wife and dog, or running around the city.
        </p>
      </div>
    </section>
  )
}