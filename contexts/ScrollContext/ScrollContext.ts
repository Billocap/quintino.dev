import { createContext } from "react"

interface ScrollContext {
	scrolled: boolean,
	container: HTMLDivElement
}

const ScrollContext = createContext({} as ScrollContext)

export default ScrollContext
