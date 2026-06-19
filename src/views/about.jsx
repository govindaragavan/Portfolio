import React from 'react';
import '../assets/css/animations.css';
import '../assets/css/main.css';
export default function about() {
  return (


    <section id="about">
        <h2>About Me</h2>
        <div className="about-container">
            <div className="about-content fade-in">
                <div className="about-text">
                    <p className="about-intro">
                        Hi! I'm <span className="highlight">Govind</span>, a passionate coder studying Engineering  in 
                     <span className="highlight"> IIT(BHU)</span>,    who 
                        loves to learn new technologies & develop from scratch
                    </p>
                    <p>
Passionate developer with experience building modern web applications using React, Node.js, Express, MongoDB, and real-time technologies. I enjoy solving complex technical problems, developing scalable applications, and exploring cybersecurity and AI/ML concepts. Currently pursuing Chemical Engineering at IIT BHU while actively building software projects and expanding my expertise in full-stack development
                    </p>
                    <div className="about-stats">
                        <div className="stat-item">
                            <div className="stat-number">0+</div>
                            <div className="stat-label">Years of Experience</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">1+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">∞</div>
                            <div className="stat-label">Cups of Coffee</div>
                        </div>
                    </div>
                </div>
                <div  className="about-image">
                    <div className="code-window">
                        <div className="code-header">
                            <div className="code-dot dot-red"></div>
                            <div className="code-dot dot-yellow"></div>
                            <div className="code-dot dot-green"></div>
                            <span className="code-title">about.js</span>
                        </div>
                        <div className="code-content">
<pre><code><span className="code-keyword">const</span> <span className="code-variable">developer</span><span> {"= {"}</span>
                        <span className="code-property">name</span>: <span className="code-string">"serozr"</span>,
  <span className="code-property">role</span>: <span className="code-string">"Full Stack Developer"</span>,
  <span className="code-property">location</span>: <span className="code-string">"Your Location"</span>,
  <span className="code-property">interests</span>: [
    <span className="code-string">"Web Development"</span>,
    <span className="code-string">"UI/UX Design"</span>,
    <span className="code-string">"Cybersecurity"</span>,
    <span className="code-string">"Creative Coding"</span>
  ],
  <span className="code-property">currentlyLearning</span>: [
    <span className="code-string">"Advanced React"</span>,
    <span className="code-string">"Penetration Testing"</span>
  ],
    <span className="code-property">funFact</span>: <span className="code-string">"I add small interactive touches to delight users"</span>
<span>{"};"}</span></code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  );
}
