import SectionHeader from './SectionHeader'
import PublicationCard from './PublicationCard'

const publications = [
  {
    title: 'The Role of Social-Evaluative Threat for Cortisol Profiles in Response to Psychosocial Stress: A Person-Centered Approach.',
    year: "2025",
    authors: ['Peggy M. Zoccola', 'Andrew W. Manigault', 'Gabby Decastro', 'Taylor Courtney ', 'Sally S. Dickerson'],
    journal: "American Psychologist",
    link: 'https://doi.org/10.1037/amp0001335'
  },
  {
    title: 'The role of social-evaluative threat for cortisol profiles in response to psychosocial stress: A person-centered approach.',
    year: "2025",
    authors: ['Peggy M. Zoccola', 'Andrew W. Manigault', 'Gabby Decastro', 'Taylor Courtney ', 'Sally S. Dickerson'],
    journal: "American Psychologist",
    link: 'https://doi.org/10.1037/amp0001335'
  },
  {
    title: 'Newborn Cry Acoustics in the Assessment of Neonatal Opioid Withdrawal Syndrome Using Machine Learning',
    year: "2022",
    authors: ['Andrew W. Manigault', 'Stephen J. Sheinkopf', 'Harvey F. Silverman', 'Barry M. Lester'],
    journal: "JAMA Network Open",
    link: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2797784'
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