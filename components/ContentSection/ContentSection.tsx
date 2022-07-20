/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef } from "react"
import { useSpring, animated } from "react-spring"

import { AppContext } from "contexts/AppContext"
import { useScroll } from "contexts/ScrollContext"

interface ContentSectionProps {
	children: any,
	id: string,
  className?: string
}

export default function ContentSection({
  children, id, className
}: ContentSectionProps) {
  const { setCurrentSection } = useContext(AppContext)

  const sectionRef = useRef<HTMLElement | null>(null)
  
  const [revealAnimation, animate] = useSpring(() => ({
    from: {
      opacity: 0,
      y: 100
    }
  }))

  useEffect(() => {
    const section = sectionRef.current
  
    if (section) {
      if (section == section.parentNode.firstChild) {
        setCurrentSection(id)

        animate({
          opacity: 1,
          y: 0
        })
      }
    }
  })

  useScroll((container) => {
    const section = sectionRef.current
  
    if (section) {
      const scrollY = section.offsetTop - container.scrollTop
  
      if (scrollY < container.clientHeight / 2) {
        setCurrentSection(id)

        animate({
          opacity: 1,
          y: 0
        })
      }
    }
  })

  return (
    <animated.section
      ref={sectionRef}
      id={id}
      className={className}
      style={revealAnimation}
    >
      {children}
    </animated.section>
  )
}
