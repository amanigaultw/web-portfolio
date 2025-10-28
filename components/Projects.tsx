import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'ShinySnake',
    description: 'An Interactive Web application made with R Shiny.  The application illustrates how a very simple set of heurisitcs may be applied to automate the game "snake".  This project introduced me to speeding up a given R function with a C++ substitution, adding Javascript and CSS to an R Shiny Application, and training a neural network to pick play the game using previous game states as inputs.',
    skills: ['R', 'Shiny', "shinyapp.io", "C++", "CSS", "Javascript"],
    link: 'https://andrewmanigaultw.shinyapps.io/shinySnake/'
  },
  {
    title: 'Transcript Origin Analysis',
    description: 'An R package to carry out a genomic analysis technique that compares gene expression between a sample and a reference expression profile. This project was a software port of my some older Java code graciously shared by Dr. Steve Cole.  i initially intended to re-write the procedure in R to better understand how it works. Here I learned how to compile and run Java code, as well as how to do multithreading in R.',
    skills: ['R', 'Java'],
    link: 'https://github.com/amanigaultw/toa'
  },
  {
    title: 'Hexpow Mobile Game',
    description: 'A "connect-3" mobile game made with Unity.  The intent of this project was to familiarize myself with C#, Unity, and the process of releasing apps on the Google Play Store. This project was the start of new hobby (game dev) and taught me that Google will prune apps that are not regularly updated 😊. Forunately, the game is still playable on the browser as a WebGL build.',
    skills: ['C#', 'Unity', 'Google Play Store'],
    link: 'https://play.unity.com/en/games/3f289e29-55eb-4725-8274-c91bb8cd52a2/webgl-builds'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeader title="Projects" />
      <div>
        <ul className="group/list">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </ul>
      </div>
    </section>
  )
}