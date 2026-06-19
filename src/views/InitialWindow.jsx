import React from 'react'
import Onepiece from '../assets/img/onepiece-user.png'
export default function InitialWindow() {
  return (
    <section className="hero">
        <div className="hero-content fade-in">

            <div className="tag"> Student in IIT(BHU)</div>
            <div><img  style={{width:'200px',height:'200px'}} src={Onepiece}/></div>
            <h1>Govindaragavan H</h1>

            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="terminal-dot dot-red"></div>
                    <div className="terminal-dot dot-yellow"></div>
                    <div className="terminal-dot dot-green"></div>
                </div>
                <div className="terminal-text">
                    <p><span className="prompt">$</span> <span className="command">./get_profile.sh</span></p>
                    <p className="output">Developer with expertise in:</p>
                    <p className="output"><span className="prompt">&gt;</span> Web Development</p>
                    <p className="output"><span className="prompt">&gt;</span> CTF-Web & OSINT</p>
                    <p className="output"><span className="prompt">&gt;</span> Problem Solving</p>
                    <p><span className="prompt">$</span> <span className="command">cat contact.txt</span></p>
                    <p className="output">GitHub: <a href="https://github.com/govindaragavan" target="_blank" className="link">github.com/govindaragavan</a> <span className="muted">· by Govind</span></p>
                    <p className="output">Email: <a>govindaragavan10@gmail.com</a></p>
                    <p><span className="prompt">$</span> <span className="output">_</span><span >|</span></p>
                </div>
            </div>

            <div className="cta-buttons">
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
            </div>
    </section> );
}
