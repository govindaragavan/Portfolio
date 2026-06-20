import React from 'react'

export default function Posts() {
  return (
<section id="contact">
        <h2>Latest Blog Posts</h2>
                <div className="contact-container">
                    <div className="contact-grid">
                        <div className="post-item fade-in">
                            <h3>IDC WriteUps</h3>
                            <a href="https://github.com/govindaragavan/IDC-WriteUps-COPS">IDC-WriteUps-COPS</a>
                        </div>
        
                        <div className="post-item fade-in" style={{animationDelay : 0.1}}>
                            <h3>Natas WriteUps</h3>
                            <a href="https://github.com/govindaragavan" target="_blank">OTW Natas Solutions</a>
                        </div>
                                <div className="post-item fade-in" style={{animationDelay : 0.1}}>
                            <h3>OTW WriteUps</h3>
                            <a href="https://github.com/govindaragavan" target="_blank">OTW Solutions</a>
                        </div>                        <div className="post-item fade-in" style={{animationDelay : 0.1}}>
                            <h3>PortSwigger Labs</h3>
                            <a href="https://github.com/govindaragavan" target="_blank">PortSwigger Labs WriteUps</a>
                        </div>

                    </div>
                </div>
    </section>
  )
}
