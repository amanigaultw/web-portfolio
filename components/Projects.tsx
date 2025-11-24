import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Web Portfolio (this website)',
    description: 'A modern, responsive portfolio website built with Next.js, React, and TypeScript. This project was my introduction to this popular tech stack. I enjoyed the way React promotes modular design with components and found that very little was lacking for the purpose of a static web application.',
    skills: ['Typescript', 'React', 'Next.js', "Tailwind CSS"],
    link: 'https://github.com/amanigaultw/web-portfolio'
  },
  {
    title: 'Neural Network from Scratch',
    description: 'A Kaggle notebook showing how to code a neural network from scratch in R.  I followed along a cool Python tutorial on writing a digit recognizer neural network.  This project helped me gain clarity on how neural networks leverage back propagation to improve their predictions.',
    skills: ['R', 'Python', 'Kaggle'],
    link: 'https://www.kaggle.com/code/andrewmanigault/samson-zhang-s-neural-network-tutorial-but-in-r'
  },
  {
    title: 'ShinySnake',
    description: 'An Interactive Web application made with R Shiny.  The application illustrates how a very simple set of heurisitcs may be applied to automate the game "snake".  This project introduced me to speeding up a given R function with a C++ substitution, adding Javascript and CSS to an R Shiny Application, and training a neural network to play the game using previous game states as inputs.',
    skills: ['R', 'Shiny', 'shinyapp.io', 'C++', 'CSS', 'Javascript'],
    link: 'https://andrewmanigaultw.shinyapps.io/shinySnake/'
  },
  {
    title: 'Transcript Origin Analysis',
    description: 'An R package to carry out a genomic analysis technique that compares gene expression between a sample and a reference expression profile. This project was a software port of some older Java code graciously shared by Dr. Steve Cole.  I initially intended to re-write the procedure in R to better understand how it works. Here I learned how to compile and run Java code, how to do multithreading in R, and how to break down a larger program into data "checkpoints" to check the accuracy of my port.',
    skills: ['R', 'Java'],
    link: 'https://github.com/amanigaultw/toa'
  },
  {
    title: 'Hexpow Mobile Game',
    description: 'A "connect-3" mobile game made with Unity.  The intent of this project was to familiarize myself with C#, Unity, and the process of releasing apps on the Google Play Store. This project was the start of a new hobby (i.e., game development) and gave me a taste for strictly typed, object-oriented languages like C#.',
    skills: ['C#', 'Unity', 'Google Play Store'],
    link: 'https://play.google.com/store/apps/details?id=com.A.Manigault.hexpow&pcampaignid=web_share'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeader title="Projects" />
      <p className="mb-12">
          Most of my professional work requires some level of CDC access and is not linked to my personal github. However, I tried to list some shareable projects on this website.
      </p>
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