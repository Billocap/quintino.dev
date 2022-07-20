import { useContext, useEffect } from "react"

import { ScrollContext } from "contexts/ScrollContext"

/**
 * Executes a callback function when the container component gets scrolled.
 * 
 * This hook works in a similar way to `useEffect` but it only handles scroll events.
 * 
 * @param callback The callback function to be executed, the `container` argument is
 * the element that is being scrolled.
 */
export default function useScroll(
	callback: (container?: HTMLDivElement) => void
) {
	const { scrolled, container } = useContext(ScrollContext)

	useEffect(() => {
		if(container) callback(container)
	}, [
		scrolled,
		container,
		callback
	])
}
