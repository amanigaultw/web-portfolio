import SectionHeader from './SectionHeader'
import ExperienceCard from './ExperienceCard'

const experiences = [
  {
    period: '2023 — Present',
    role: 'Software Engineer',
    company: 'InductiveHealth Informatics',
    description: 'Developed containerized tools for monitoring data quality within the National Syndromic Surveillance Program (NSSP) of the Centers for Disease Control and Prevention (CDC), improving data access, usage, and report sharing. Introduced several new applications and enhanced legacy web applications, refactoring backend and improving ease of data exploration.',
    skills: ['R', 'SQL', 'Python', 'Docker', 'JavaScript', 'html', 'css', 'Linux', 'Bash', 'Palantir Foundry']
  },
  {
    period: '2021 — 2023',
    role: 'Biostatistician',
    company: 'Brown University – Center for the Study of Children at Risk',
    description: 'Developed R packages/scripts to support research center activities including infant cry acoustic analysis, latent growth curve modeling, multilevel modeling, data cleaning and visualization. Trained machine learning classifiers to identify neonatal opiate withdrawal syndrome using infant cry acoustics.',
    skills: ['R', 'SAS', 'MATLAB', 'SQL']
  },
  {
    period: '2020 — 2021',
    role: 'Post-doctoral Research Fellow',
    company: 'University of California Los Angeles',
    description: 'Developed R package to perform multithreaded transcriptomic origin analysis. Carried out Psychoneuroimmunology research activities, including statistical analysis and manuscript writting.',
    skills: ['R', 'SAS', "Java"]
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