import React from 'react'
import '../styles/Footer.css'
import { Fa500Px, FaLinkedin, FaThLarge } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

function Footer() {
  return (
    <div className='footerContainer'>
      <div className="footerItems">
        <div className="footerSocials">
          <a><FaLinkedin className='footerSocialIcon'/></a>
          <a><IoLogoGithub className='footerSocialIcon' /></a>
        </div>
      </div>
      <p>Made with love by <a>Carla Hau</a></p>
      <p style={{opacity: 0.5}}>Last Updated: August 2025</p>
    </div>
  )
}

export default Footer