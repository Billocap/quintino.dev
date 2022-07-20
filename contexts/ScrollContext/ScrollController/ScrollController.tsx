import { useEffect, useRef, useState } from "react"

import { ScrollContext } from "contexts/ScrollContext"

import styles from "./ScrollController.module.css"

interface ScrollControllerProps {
	children: any
}

export default function ScrollController({
	children
}: ScrollControllerProps) {
	const [scrolled, setScrolled] = useState(false)

	const containerRef = useRef<HTMLDivElement>(null)

	const onScroll = () => {
		setScrolled(true)
	}

	const contextValue: ScrollContext = {
		scrolled,
		container: containerRef.current
	}

	useEffect(() => {
		if (scrolled) setScrolled(false)
	}, [scrolled])

	return (
		<div
			className={styles.container}
			ref={containerRef}
			onScroll={onScroll}
		>
			<ScrollContext.Provider value={contextValue}>
				{children}
			</ScrollContext.Provider>
		</div>
	)
}
