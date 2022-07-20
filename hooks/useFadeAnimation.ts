import { useState } from "react"

/**
 * Allow a component to have a fade animation.
 * 
 * Returns the animation as a CSS property, a `fadeIn` function and a `fadeOut` function.
 * 
 * @param time Duration in seconds of the fade.
 * @returns [animation, fadeIn, fadeOut]
 */
export default function useFadeAnimation(time: number): [
  string | undefined,
  Function,
  Function
] {
  const [animation, setAnimation] = useState<string | undefined>()

  function fadeIn() {
    setAnimation(`fade-in ${time}s both`)
  }

  function fadeOut() {
    setAnimation(`fade-out ${time}s both`)
  }

  return [
    animation,
    fadeIn,
    fadeOut
  ]
}
