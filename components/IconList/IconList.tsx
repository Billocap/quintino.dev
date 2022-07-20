import Image from "next/image"

import styles from "./IconList.module.css"

interface ListItem {
  name: string,
  icon: Icon
}

interface IconListProps {
  items: ListItem[]
}

export default function IconList({ items }: IconListProps) {
  const listItems = items.map((item, id) => {
    return (
      <a className={styles.item} key={id}>
        <Image src={item.icon.url} alt={item.icon.alt} width={20} height={20}/>
        <span>{item.name}</span>
      </a>
    )
  })

  return (
    <div className={styles.list}>
      {listItems}
    </div>
  )
}
