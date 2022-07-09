import { EffectCallback, useContext, useEffect } from "react"

import { ScrollContext } from "contexts/ScrollContext"

export default function useScroll(callback: EffectCallback) {
	const { scrolled } = useContext(ScrollContext)

	useEffect(callback, [scrolled, callback])
}
