import React from 'react'
import '../../../assets/css/animations.css';
import '../../../assets/css/main.css';
export default function Navbar() {
  return (
        <nav>
        <div className="nav-content">
            <div className="logo">&gt;_developer.sh <span className="logo-sign">.Govindargavan H</span></div>
            <div className="nav-links" id="navLinks">
                <a href="#about" onClick={()=>closeMenu()}>./About</a>
                <a href="#skills" onClick={()=>closeMenu()}>./Skills</a>
                <a href="#certifications" onClick={()=>closeMenu()}>./Certifications</a>
                <a href="#projects" onClick={()=>closeMenu()}>./Projects</a>
                <a href="#contact" onClick={()=>closeMenu()}>./Posts</a>
                <a href="#contact" onClick={()=>closeMenu()}>./Contact</a>
            </div>
        </div>
    </nav>
  )
}
