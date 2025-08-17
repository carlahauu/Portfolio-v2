import React from 'react'
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import '../styles/Hero.css'
import Projects from '../components/Projects';

function Home() {
  return (
    <div className='homeContainer'>
      <div className="topBlur"></div>
      <div className="bottomBlur"></div>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </div>
  )
}

export default Home