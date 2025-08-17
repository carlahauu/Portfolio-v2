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
              Full Stack Software Developer & UI/UX Designer
              <br></br>
              <FaMapPin />  Los Angeles Metropolitian Area, California
            </p>
            <p>I am a sophomore studying Computer Science at University of California, Riverside! 
                I am passionate about building software that actually make life better—whether it’s something that saves time, solves a problem, or just makes people smile. 
                <br></br>
                In my spare time, I enjoy trying new food spots with my friends and playing tennis! I also enjoy watching Korean and Hong Kong dramas! 
            </p>
            <button>Contact Me</button>
        </div>
    </div>
  )
}

export default Hero