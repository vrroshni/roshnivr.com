import React from 'react'
import SectionTitle from '../SectionTitle'
import { projectData } from '@/app/assets/data'
import Project from './Project'

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-44 py-24 scroll-mt-20">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {projectData.map((project, index) => (
          <Project key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects