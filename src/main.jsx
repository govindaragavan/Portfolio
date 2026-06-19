import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import About from './views/about.jsx'
import Navbar from './views/Components/Navbar/Navbar.jsx'
import './assets/css/animations.css';
import './assets/css/main.css';
import Skills from './views/Skills.jsx';
import Certfications from './views/certfications.jsx';
import Projects from './views/projects.jsx';
import Posts from './views/Posts.jsx';
import Contact from './views/contact.jsx';
import Footer from './views/footer.jsx';
import InitialWindow from './views/InitialWindow.jsx';
import BootScreen from './views/bootScreen.jsx'
import useScrollAnimations from './hooks/useScrollAnimations.jsx'

function Root() {
  useScrollAnimations()
  return (
    <>
      <BootScreen/>
      <Navbar/>
      <InitialWindow/>
      <About/>
      <Skills/>
      <Certfications/>
      <Projects/>
      <Posts/>
      <Contact/>
      <Footer/>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root/>
  </StrictMode>,
)
