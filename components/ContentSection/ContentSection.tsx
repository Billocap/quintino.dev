/* eslint-disable react-hooks/exhaustive-deps */
import { CSSProperties, useContext, useRef } from "react"

import { AppContext } from "contexts/AppContext"
import { useScroll } from "contexts/ScrollContext"

interface ContentSectionProps {
	children: any,
	id: string,
  className?: string,
  style?: CSSProperties
}

export default function ContentSection({
  children, id, className, style
}: ContentSectionProps) {
  const { setCurrentSection } = useContext(AppContext)

  const sectionRef = useRef<HTMLElement | null>(null)
  
  useScroll((container) => {
    const section = sectionRef.current
  
    if (section && container) {
      const scrollY = section.offsetTop - container.scrollTop
  
      if (scrollY < container.clientHeight / 2) {
        setCurrentSection(id)
      }
    }
  })

  return (
    <section ref={sectionRef} id={id} className={className} style={style}>
      {children}
    </section>
  )
}
