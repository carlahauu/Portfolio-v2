import React from 'react'
import '../styles/Projects.css'
import projects from '../projects.json'
import { IoLogoGithub } from "react-icons/io";
import { IoMdOpen } from "react-icons/io";

function Projects() {
  return (
    <div id='projects' className='projectsContainer'>
        <h1 className='projectsHeading'>Featured Projects</h1>
        <div className="projects">
            {projects.map((project, i) => (
                <div className='project'>
                    <div className="projectLeft">
                        <img src={project.image}></img>
                    </div>
                    <div className="projectRight">
                        <div className="projectHeading">
                            <h2>{project.name}</h2>
                            <div className="demoBtns">
                                <a href={project.source}><IoLogoGithub /></a>
                                <a href={project.demo}><IoMdOpen /></a>
                            </div>
                        </div>
                        <p className='description'>{project.description}</p>
                        <div className="projectSkills">
                            {(project.skills).map(skill => (
                                <p>{skill}</p>
                            ))}
                        </div>
                        <div className="projectButtons">
                            <a href={project.demo} className='demoBtn'>Live Demo</a>
                            <a href={project.source} className='sourceBtn'>Source Code</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects