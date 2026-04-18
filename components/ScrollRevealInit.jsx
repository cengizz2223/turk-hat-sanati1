'use client'
import { useEffect } from 'react'

export default function ScrollRevealInit() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const parent = entry.target.parentElement
          const siblings = [
            ...parent.querySelectorAll('.reveal, .reveal-left, .reveal-right'),
          ]
          const idx = siblings.indexOf(entry.target)
          setTimeout(() => entry.target.classList.add('in'), idx * 70)
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
