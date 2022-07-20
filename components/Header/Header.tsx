import { ArrowSquareOut } from "phosphor-react"
import { useContext } from "react"

import GlassPanel from "components/GlassPanel"
import TextSolid from "components/TextSolid"
import { AppContext } from "contexts/AppContext"

import styles from "./Header.module.css"

function parseClasses(...classes: string[]) {
  return classes.join(" ")
}

export default function Header() {
  const { config, currentSection, setCurrentSection } = useContext(AppContext)

  const navigation = config.sections.map((section, id) => {
    return (
      <TextSolid key={id} active={section.id == currentSection}>
        <button
          className={styles.link}
          onClick={_ => setCurrentSection(id)}
        >{section.name}</button>
      </TextSolid>
    )
  })

  return (
    <GlassPanel>
      <header className={styles.header}>
        <div className="hidden md:block w-full">
          <h1 className="text-h3 lg:text-h2">GABRIEL QUINTINO</h1>
          <h2 className="hidden lg:block lg:text-h4">JavaScript / Typescript Developer</h2>
        </div>
        <div className={styles.navigation}>
          {navigation}
        </div>
        <a
          className={parseClasses(styles.link, styles.extra)}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Billocap/quintino.dev"
        >
          Repository
          <ArrowSquareOut size={10} weight="bold"/>
        </a>
      </header>
    </GlassPanel>
  )
}
