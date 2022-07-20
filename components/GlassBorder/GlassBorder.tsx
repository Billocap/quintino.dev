import { CSSProperties } from "react"

import styles from "./GlassBorder.module.css"

interface GlassBorderProps {
  id?: string,
  className?: string,
  style?: CSSProperties
}

export default function GlassBorder({ id, style, className }: GlassBorderProps) {
  const glassBorderClassNames = [
    styles.border,
    className
  ].join(" ")

  return (
    <svg id={id} className={glassBorderClassNames} style={style} version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="Gradient" gradientTransform="rotate(150)">
          <stop offset="0%" stopColor="#484B54"/>
          <stop offset="65%" stopColor="#484B54" stopOpacity="0"/>
          <stop offset="100%" stopColor="#484B54" stopOpacity="0.35"/>
        </linearGradient>
      </defs>

      <rect
        strokeWidth="1" stroke="url(#Gradient)"
        x="0" y="0" rx="6" ry="6"
        width="100%" height="100%"
        fill="none"
      />
    </svg>
  )
}
