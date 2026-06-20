import React from 'react'
import '../assets/css/animations.css';
import '../assets/css/main.css';
export default function Projects() {
  return (
<section id="projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
            <div className="project-card fade-in">
                <h3>� Portfolio Site</h3>
                <p>Modern portfolio with cyber-inspired design, terminal aesthetics, and smooth animations.</p>
                <a href="#" className="project-link">View More &rarr;</a>
            </div>
            
            <div className="project-card fade-in" style={{animationDelay : 0.1}}>
                <h3>Requestly</h3>
                <p>A full-stack web helpdesk which can be used to manage and track services and requests ,  built with React (Light Bootstrap Dashboard) for the frontend and a Node.js/Express server for the backend.</p>
                <a href="https://github.com/govindaragavan/Requestly" className="project-link">view &rarr;</a>
            </div>
            
        </div>
    </section>  );
}
