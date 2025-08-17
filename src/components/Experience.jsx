import React from 'react'
import '../styles/Experience.css'
import experience from '../experience.json'

function Experience() {
  return (
    <div id="experience" className='experienceContainer'>
        <p className='experienceHeading'>Work Experience</p>
        <div className="experiences">
            {experience.map((experience, i) => (
                <>
                    <div className='experience'>
                        <div className="experienceLeft">
                            <img src={experience.logo}></img>
                            <div className="experienceDetails">
                                <p>{experience.company}, {experience.position}</p>
                                <p className='experienceDate'>{experience.date}</p>
                            </div>
                        </div>
                        <div className="experienceRight">
                            <p>{experience.location}</p>
                        </div>
                    </div>
                    <p className='experienceDescription'>{experience.description}</p>
                    <div className="experienceSkills">
                        {(experience.skills).map(skill => (
                            <p>{skill}</p>
                        ))}
                    </div>
                </>
            ))}
        </div>
    </div>
  )
}

export default Experience