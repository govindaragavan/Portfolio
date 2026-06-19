import React, { useState, useEffect } from 'react'
const asciiArt = String.raw`
                                                                          
                                                                          
██  ██ ▄▄▄▄▄ ▄▄ ▄▄       ██ ▄▄   ▄▄    ▄████   ▄▄▄  ▄▄ ▄▄ ▄▄ ▄▄  ▄▄ ▄▄▄▄  
██████ ██▄▄  ▀███▀       ██ ██▀▄▀██   ██  ▄▄▄ ██▀██ ██▄██ ██ ███▄██ ██▀██ 
██  ██ ██▄▄▄   █    ▄    ██ ██   ██    ▀███▀  ▀███▀  ▀█▀  ██ ██ ▀██ ████▀ 
                   ▀                                                      
                                                                                               
                                                                                                      
                                                                                          
`
export default function BootScreen() {
    const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const skipBoot = () => {
      setFadeOut(true)
      setTimeout(() => setVisible(false), 500)
    }

    const bootTimer = setTimeout(skipBoot, 6000)

    document.addEventListener('keydown', skipBoot, { once: true })

    return () => {
      clearTimeout(bootTimer)
      document.removeEventListener('keydown', skipBoot)
    }
  }, [])

  if (!visible) return null

  const skipBoot = () => {
    setFadeOut(true)
    setTimeout(() => setVisible(false), 500)
  }

  return (
    <div id="bootScreen" className={`boot-screen${fadeOut ? ' fade-out' : ''}`} onClick={skipBoot}>
        <div className="boot-content">
            <div className="boot-header">
                <pre className="ascii-art">
{asciiArt}
                </pre>
            </div>
            <div className="boot-terminal">
                <p><span className="boot-prompt">[SYSTEM]</span> <span className="boot-text">Initializing system...</span></p>
                <p><span className="boot-prompt">[BOOT]</span> <span className="boot-text">Loading core modules</span> <span className="boot-dots"></span></p>
                <p><span className="boot-prompt">[INIT]</span> <span className="boot-text">Mounting file systems</span> <span className="boot-status boot-ok">[OK]</span></p>
                <p><span className="boot-prompt">[LOAD]</span> <span className="boot-text">Starting network services</span> <span className="boot-status boot-ok">[OK]</span></p>
                <p><span className="boot-prompt">[EXEC]</span> <span className="boot-text">Loading portfolio.sh</span> <span className="boot-dots"></span></p>
                <p><span className="boot-prompt">[INIT]</span> <span className="boot-text">Initializing user interface</span> <span className="boot-status boot-ok">[OK]</span></p>
                <p><span className="boot-prompt">[DONE]</span> <span className="boot-text">System ready</span> <span className="boot-status boot-ready">[READY]</span></p>
            </div>
            <div className="boot-progress">
                <div className="boot-progress-bar"></div>
            </div>
            <p className="boot-footer">Press any key to continue... <span className="boot-sign">— serozr</span></p>
        </div>
    </div>  )
}
