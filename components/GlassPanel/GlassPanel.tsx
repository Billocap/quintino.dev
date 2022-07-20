import { CSSProperties } from "react"

import GlassBorder from "components/GlassBorder"

import styles from "./GlassPanel.module.css"

interface GlassPanelProps {
	children: any,
	id?: string,
  className?: string,
  style?: CSSProperties
}

export default function GlassPanel({ children, id, style, className }: GlassPanelProps) {
	const glassPanelClassNames = [
    styles.panel,
    className
  ].join(" ")

  return (
		<div id={id} className={glassPanelClassNames} style={style}>
			<GlassBorder/>

			{children}
		</div>
	)
}
