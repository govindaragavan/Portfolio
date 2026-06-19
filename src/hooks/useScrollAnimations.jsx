import { useEffect } from 'react'

export default function useScrollAnimations() {
  useEffect(() => {
    // Smooth-scroll for in-page nav links
    const onAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const href = link.getAttribute('href')
      if (href === '#') return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      const offset = 80
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
    document.addEventListener('click', onAnchorClick)

    // Fade-in elements as they enter the viewport
    const fadeEls = document.querySelectorAll('.fade-in')
    fadeEls.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'all 0.6s ease-out'
    })

    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )
    fadeEls.forEach((el) => fadeObserver.observe(el))

    // Animate skill progress bars when their category scrolls into view
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.skill-progress')
            bars.forEach((bar) => {
              const width = bar.getAttribute('data-width')
              setTimeout(() => {
                bar.style.width = width
              }, 100)
            })
            skillObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )
    document.querySelectorAll('.skill-category').forEach((cat) => skillObserver.observe(cat))

    return () => {
      document.removeEventListener('click', onAnchorClick)
      fadeObserver.disconnect()
      skillObserver.disconnect()
    }
  }, [])
}
