import React from 'react'
import Projects from '../components/Projects'
import '../styles/ProjectsPage.css'

function ProjectsPage() {
  return (
    <div className='projectsPage'>
        <div className="topBlur"></div>
        <div className="bottomBlur"></div>
        <div className="projectsComponent">
            <Projects />
        </div>
    </div>
  )
}

export default ProjectsPage