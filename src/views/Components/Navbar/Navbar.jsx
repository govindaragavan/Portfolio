import React, { useState } from 'react'
import '../../../assets/css/animations.css';
import '../../../assets/css/main.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((open) => !open)
  const closeMenu = () => setMenuOpen(false)

  return (
        <nav>
        <div className="nav-content">
            <div className="logo">&gt;_developer.sh </div>
            <div className={`nav-links${menuOpen ? ' active' : ''}`} id="navLinks">
                <a href="#about" onClick={closeMenu}>./About</a>
                <a href="#skills" onClick={closeMenu}>./Skills</a>
                <a href="#certifications" onClick={closeMenu}>./Certifications</a>
                <a href="#projects" onClick={closeMenu}>./Projects</a>
                <a href="#contact" onClick={closeMenu}>./Posts</a>
                <a href="#contact" onClick={closeMenu}>./Contact</a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
  )
}
