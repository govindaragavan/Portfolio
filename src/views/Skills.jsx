import React from 'react';
import '../assets/css/animations.css';
import '../assets/css/main.css';
export default function Skills() {
  return (<>
      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
            <div className="skill-category fade-in">
                <h3>Frontend Development</h3>
                <div className="skill-item">
                    <div className="skill-name">
                        <span>HTML/CSS</span>
                        <span>90%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{width: 0}} data-width="90%"></div>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="skill-name">
                        <span>JavaScript</span>
                        <span>85%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{width: 0}} data-width="85%"></div>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="skill-name">
                        <span>React</span>
                        <span>80%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{width: 0}} data-width="80%"></div>
                    </div>
                </div>
            </div>

            <div className="skill-category fade-in" style={{animationDelay : 0.1}}>
                <h3>Backend Development</h3>
                <div className="skill-item">
                    <div className="skill-name">
                        <span>Node.js</span>
                        <span>75%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{width: 0}} data-width="75%"></div>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="skill-name">
                        <span>Python</span>
                        <span>70%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{width: 0}} data-width="70%"></div>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="skill-name">
                        <span>Database</span>
                        <span>75%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{width: 0}} data-width="75%"></div>
                    </div>
                </div>
            </div>

            <div className="skill-category fade-in" style={{animationDelay : 0.2}}>
                <h3>CyberSecurity & CTF</h3>
                <div className="skill-item">
                    <div className="skill-name">
                        <span>Web</span>
                        <span>85%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{width: 0}} data-width="85%"></div>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="skill-name">
                        <span>OSINT</span>
                        <span>90%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{width: 0}} data-width="90%"></div>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="skill-name">
                        <span>Stego</span>
                        <span>95%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{width: 0}} data-width="95%"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>

  );
}
