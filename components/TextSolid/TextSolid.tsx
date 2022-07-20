import GlassBorder from "components/GlassBorder"

import styles from "./TextSolid.module.css"

interface TextSolidProps {
  children: any,
  active?: boolean,
  className?: string
}

export default function TextSolid({ children, active, className }: TextSolidProps) {
  const solidClassName = [
    styles.solid,
    active ? styles.active : undefined,
    className
  ].join(" ")

  return (
    <div className={solidClassName}>
      <GlassBorder className={styles.border}/>

      {children}
    </div>
  )
}
