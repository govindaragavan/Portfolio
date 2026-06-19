import React from 'react'
import GithubIcon from '../assets/img/github-logo.png';
import EmailIcon from '../assets/img/email-logo.png';
import LinkedInIcon from '../assets/img/linkedin-logo.png';
import xIcon from '../assets/img/X_logo.jpg'
export default function Contact() {
  return (
<section id="contact">
        <h2>Get In Touch</h2>
        <div className="contact-container">
            <div className="contact-grid">
                <div className="contact-item fade-in">
                    <div ><img className='contact-icon'  src={EmailIcon}  /></div>
                    <h3>Email</h3>
                    <a href="mailto:govindaragavan10@gmail.com">govindaragavan10@gmail.com</a>
                </div>

                <div className="contact-item fade-in" style={{animationDelay : 0.1}}>
                    <div ><img className='contact-icon'  src={GithubIcon}  /></div>
                    <h3>GitHub</h3>
                    <a href="https://github.com/govindaragavan" target="_blank">github.com/govindaragavan</a>
                </div>

                <div className="contact-item fade-in" style={{animationDelay : 0.2}}>
                    <div ><img className='contact-icon'  src={LinkedInIcon}  /></div>
                    <h3>LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/govindaragavan/" target="_blank">linkedin.com/in/govindaragavan</a>
                </div>

                <div className="contact-item fade-in" style={{animationDelay : 0.3}}>
                    <div ><img className='contact-icon'  src={xIcon}  /></div>
                    <h3>Twitter</h3>
                    <a href="https://x.com/govindarag14677" target="_blank">@govindarag14677</a>
                </div>
            </div>

            <div className="contact-form fade-in">
                <form>
                    <div className="form-group">
                        <label>$ name --input</label>
                        <input type="text" placeholder="Enter name" required/>
                    </div>
                    <div className="form-group">
                        <label>$ email --input</label>
                        <input type="email" placeholder="name@example.com" required/>
                    </div>
                    <div className="form-group">
                        <label>$ message --input</label>
                        <textarea placeholder="Your message here..." required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>  );
}