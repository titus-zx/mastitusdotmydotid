'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimateOnScrollProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'zoom-in'
  delay?: number
}

export default function AnimateOnScroll({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const animations = {
    'fade-up': {
      initial: 'opacity-0 translate-y-10',
      animate: 'opacity-100 translate-y-0'
    },
    'fade-in': {
      initial: 'opacity-0',
      animate: 'opacity-100'
    },
    'fade-left': {
      initial: 'opacity-0 -translate-x-10',
      animate: 'opacity-100 translate-x-0'
    },
    'fade-right': {
      initial: 'opacity-0 translate-x-10',
      animate: 'opacity-100 translate-x-0'
    },
    'zoom-in': {
      initial: 'opacity-0 scale-95',
      animate: 'opacity-100 scale-100'
    }
  }

  const animationClasses = animations[animation]

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? animationClasses.animate : animationClasses.initial
      } ${className}`}
    >
      {children}
    </div>
  )
}
