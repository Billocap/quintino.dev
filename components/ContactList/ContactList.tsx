import { ArrowSquareOut } from "phosphor-react"
import Image from "next/image"

import styles from "./ContactList.module.css"

interface Link {
  icon: Icon,
  name: string,
  url: string
}

interface ContactListProps {
  links: Link[]
}

export default function ContactList({ links }: ContactListProps) {
  const linkList = links.map((link, id) => {
    return (
      <a key={id} className={styles.contact} target="_blank" rel="noreferrer" href={link.url}>
        <Image src={link.icon.url} alt={link.icon.alt} width={20} height={20}/>
        <p className="w-full text-left sm:text-center">
          {link.name}
        </p>
        <ArrowSquareOut size={10} weight="bold"/>
      </a>
    )
  })

  return (
    <nav className={styles.list}>
      {linkList}
    </nav>
  )
}
