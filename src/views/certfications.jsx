import React from 'react'
import '../assets/css/animations.css';
import '../assets/css/main.css';
export default function Certfications() {
  return (
    <section id="certifications">
        <h2>Certifications & Awards</h2>
        <div className="certifications-grid">
            <div className="cert-card fade-in">
                <div className="cert-icon">🏆</div>
                <div className="cert-badge">
                    <div className="cert-badge-inner">
                        <div className="cert-title">Web Development</div>
                        <div className="cert-issuer">Udemy</div>
                    </div>
                </div>
                <h3> MERN & Bootstrap </h3>
                <p className="cert-description">
                    Completed comprehensive curriculum covering HTML5, CSS3, Node.js,React, and MongoDB
                </p>
            </div>

            <div className="cert-card fade-in" style={{animationDelay : 0.1}}>
                <div className="cert-icon">🔐</div>
                <div className="cert-badge">
                    <div className="cert-badge-inner">
                        <div className="cert-title">Cybersecurity</div>
                    </div>
                </div>
                <h3>Ethical Hacking Fundamentals</h3>
                <p className="cert-description">
                    Learned penetration testing, vulnerability assessment, and security best practices for web applications.
                </p>
            </div>

            <div className="cert-card fade-in" style={{animationDelay : 0.5}}>
                <div className="cert-icon">⭐</div>
                <div className="cert-badge award-badge">
                    <div className="cert-badge-inner">
                        <div className="cert-title">Award</div>
                        <div className="cert-issuer">KashiCTF</div>
                    </div>
                </div>
                <h3>Certification of Merit</h3>
                <p className="cert-description">
                    Placed 12 competing in kashiCTF reputed CTF conducted by IIT(BHU)CyberSec
                </p>
                <div className="cert-footer">
                    <span className="cert-date">2026</span>
                    <span className="cert-badge-text">🥇 Winner</span>
                </div>
            </div>
        </div>
    </section>  )
}
