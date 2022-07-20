import { useEffect, useState } from "react"

import useFadeAnimation from "hooks/useFadeAnimation"

import styles from "./SlideShow.module.css"

interface SlideShowProps {
  /**
   * Time in seconds the fade animation lasts.
   */
  fadeTiming: number,
  /**
   * Time in seconds the slide lasts before fading to next slide.
   */
  slideTiming: number
}

export default function SlideShow({
  fadeTiming, slideTiming
}: SlideShowProps) {
  const [fade, fadeIn, fadeOut] = useFadeAnimation(fadeTiming)

  const [phase, setPhase] = useState("show")
  const [frontSlide, setFrontSlide] = useState(0)
  const [backSlide, setBackSlide] = useState(1)

  const backSlideStyle = {
    backgroundImage: `url("/slides/slide_${backSlide}.jpg")`
  }

  const frontSlideStyle = {
    backgroundImage: `url("/slides/slide_${frontSlide}.jpg")`,
    animation: fade
  }

  const handleAnimationChange = () => {
    if (phase == "show") {
      setBackSlide(prev => (prev + 2) % 11)
    } else {
      setFrontSlide(prev => (prev + 2) % 11)
    }

    setTimeout(() => {
      setPhase(prev => {
        if (prev == "show") {
          fadeOut()

          return "hide"
        } else {
          fadeIn()

          return "show"
        }
      })
    }, slideTiming * 1000)
  }

  useEffect(() => {
    setTimeout(() => {
      setPhase(_ => {
        fadeOut()

        return "hide"
      })
    }, slideTiming * 1000)
  }, [])

  return (
    <div className={styles.slide} style={backSlideStyle}>
      <div
        className={styles.slide}
        style={frontSlideStyle}
        onAnimationEnd={handleAnimationChange}
      ></div>
    </div>
  )
}
