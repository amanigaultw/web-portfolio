import SectionHeader from './SectionHeader'
import PublicationCard from './PublicationCard'

const publications = [
  {
    title: 'The Role of Social-Evaluative Threat for Cortisol Profiles in Response to Psychosocial Stress: A Person-Centered Approach',
    year: "2025",
    authors: ['Peggy M. Zoccola', 'Andrew W. Manigault', 'Gabby Decastro', 'Taylor Courtney', 'Sally S. Dickerson'],
    journal: "American Psychologist",
    link: 'https://doi.org/10.1037/amp0001335'
  },
  {
    title: 'Acoustic Cry Characteristics in Preterm Infants and Developmental and Behavioral Outcomes at 2 Years of Age',
    year: "2023",
    authors: ['Andrew W. Manigault', 'Stephen J. Sheinkopf', 'Brian S. Carter', 'Jennifer Check', 'Jennifer Helderman', 'Julie A. Hofheimer', 'Elisabeth C. McGowan', 'Charles R. Neal', 'Michael O’Shea', 'Steven Pastyrnak', 'Lynne M. Smith', 'Todd M. Everson', 'Carmen J. Marsit', 'Lynne M. Dansereau', 'Sheri A. DellaGrotta', 'Barry M. Lester'],
    journal: "JAMA Network Open",
    link: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2800870'
  },
  {
    title: 'Newborn Cry Acoustics in the Assessment of Neonatal Opioid Withdrawal Syndrome Using Machine Learning',
    year: "2022",
    authors: ['Andrew W. Manigault', 'Stephen J. Sheinkopf', 'Harvey F. Silverman', 'Barry M. Lester'],
    journal: "JAMA Network Open",
    link: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2797784'
  },
  {
    title: 'Psychosocial Resilience to Inflammation-Associated Depression: A Prospective Study of Breast-Cancer Survivors',
    year: "2022",
    authors: ['Andrew W. Manigault', 'Kate R. Kuhlman', 'Michael R. Irwin', 'Steve W. Cole', 'Patricia A. Ganz', 'Catherine M. Crespi', 'Julienne E. Bower'],
    journal: "Psychological Science",
    link: 'https://doi.org/10.1177/09567976221079633'
  },
  {
    title: 'Younger Women Are More Susceptible to Inflammation: A Longitudinal Examination of the Role of Aging in Inflammation and Depressive Symptoms',
    year: "2022",
    authors: ['Kate R. Kuhlman', 'Michael R. Irwin', 'Patricia A. Ganz', 'Steve W. Cole', 'Andrew W. Manigault', 'Catherine M. Crespi', 'Julienne E. Bower'],
    journal: "Journal of Affective Disorders",
    link: 'https://doi.org/10.1016/j.jad.2022.05.019'
  },
  {
    title: 'Psychoneuroimmunology: How Chronic Stress Makes Us Sick',
    year: "2022",
    authors: ['Andrew W. Manigault', 'Peggy M. Zoccola'],
    journal: "Biopsychosocial Factors of Stress, and Mindfulness for Stress Reduction",
    link: 'https://doi.org/10.1007/978-3-030-81245-4_4'
  },
  {
    title: '',
    year: "",
    authors: ['Andrew W. Manigault'],
    journal: "",
    link: ''
  },
  {
    title: '',
    year: "",
    authors: ['Andrew W. Manigault'],
    journal: "",
    link: ''
  },
  {
    title: '',
    year: "",
    authors: ['Andrew W. Manigault'],
    journal: "",
    link: ''
  },
  {
    title: '',
    year: "",
    authors: ['Andrew W. Manigault'],
    journal: "",
    link: ''
  },
  {
    title: '',
    year: "",
    authors: ['Andrew W. Manigault'],
    journal: "",
    link: ''
  },
  {
    title: '',
    year: "",
    authors: ['Andrew W. Manigault'],
    journal: "",
    link: ''
  },
  {
    title: '',
    year: "",
    authors: ['Andrew W. Manigault'],
    journal: "",
    link: ''
  },
  {
    title: '',
    year: "",
    authors: ['Andrew W. Manigault'],
    journal: "",
    link: ''
  },
  {
    title: '',
    year: "",
    authors: ['Andrew W. Manigault'],
    journal: "",
    link: ''
  },
  {
    title: '',
    year: "",
    authors: ['Andrew W. Manigault'],
    journal: "",
    link: ''
  },
  {
    title: '',
    year: "",
    authors: ['Andrew W. Manigault'],
    journal: "",
    link: ''
  },
  {
    title: '',
    year: "",
    authors: ['Andrew W. Manigault'],
    journal: "",
    link: ''
  },
  {
    title: '',
    year: "",
    authors: ['Andrew W. Manigault'],
    journal: "",
    link: ''
  },
  {
    title: '',
    year: "",
    authors: ['Andrew W. Manigault'],
    journal: "",
    link: ''
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