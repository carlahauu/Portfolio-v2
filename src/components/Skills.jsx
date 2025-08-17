import React from 'react'
import skills from '../skills.json'
import '../styles/Skills.css'

function Skills() {
  return (
    <div id='skills' className='skillsContainer'>
        <p>Languages</p>
        <div className="languages">
            {skills.languages.map((language, i) => (
                <div className='language'>
                    <img src={language.img}></img>
                    <p>{language.skill}</p>
                </div>
            ))}
        </div>
        <p>Technologies</p>
        <div className="languages">
            {skills.technologies.map((technology, i) => (
                <div className='language'>
                    <img src={technology.img}></img>
                    <p>{technology.skill}</p>
                </div>
            ))}
        </div>
        <p>Developer Tools</p>
        <div className="languages">
            {skills.tools.map((tool, i) => (
                <div className='language'>
                    <img src={tool.img}></img>
                    <p>{tool.skill}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills