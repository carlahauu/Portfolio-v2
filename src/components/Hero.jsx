import React from 'react'
import ProfilePic from '../assets/profilepic.png'
import '../styles/Hero.css'
import { FaMapPin } from "react-icons/fa6";

function Hero() {
  return (
    <div className='heroContainer'>
        <div className="heroLeft">
            <img src={ProfilePic}></img>
        </div>
        <div className="heroRight">
            <h1>Hey, I'm Carla Hau!</h1>
            <p style={{opacity: 0.6}}>
              Full Stack Software Developer
              <br></br>
              <FaMapPin /> Los Angeles Metropolitian Area
            </p>
            <p>
            I’m a sophomore studying Computer Science at UC Riverside! I'm passionate about building software that saves time, solves problems, or simply makes people smile. 
            <br></br>
            In my free time, I enjoy trying new food spots, playing tennis, and watching Korean and Hong Kong dramas.
            </p>
            <button><a href='/contact'>Contact Me</a></button>
        </div>
    </div>
  )
}

export default Hero