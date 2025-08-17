import React, {useState} from 'react'
import "../styles/Navbar.css";
import { Fa500Px, FaLinkedin, FaThLarge } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoGithub } from "react-icons/io";

function Navbar() {
  const [style, setStyle] = useState("none");
  const onClick = () => {
    if (style == "block"){
      setStyle("none")
    }
    else{
      setStyle("block")
    }
  }
  return (
    <>
    <div className='navContainer'>
        <div className="left">
            <p><a href='/'>Carla Hau</a></p>
        </div>
        <div className="right">
            <a className='navItems' href='/#skills'>Skills</a>
            <a className='navItems' href='/#experience'>Experience</a>
            <a className='navItems' href='/#projects'>Projects</a>
            <a className='navItems' href='/contact'>Contact</a>
            <a className='navItems' href='/resume'>Resume</a>
            <div className="socials">
              <a href='https://www.linkedin.com/in/carla-hau/'><FaLinkedin className='socialIcon'/></a>
              <a href='http://github.com/carlahauu'><IoLogoGithub className='socialIcon' /></a>
            </div>
            <RxHamburgerMenu onClick={onClick} className='hamburger'/>
        </div>
    </div>
    <div style={{ display: style }} className="mobileNavContainer">
      <ul className="mobileNavItems">
        <li className="home">
          <a href='/#skills'>Skills</a>
        </li>
        <li>
          <a href="/#experience">Experience</a>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href='/resume'>Resume</a>
        </li>
      </ul>
    </div>
    </>
  )
}

export default Navbar