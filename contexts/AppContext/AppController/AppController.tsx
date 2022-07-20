import { useEffect, useRef, useState } from "react"

import { AppContext } from "contexts/AppContext"

import styles from "./AppController.module.css"

interface AppControllerProps {
	children: any
}

export default function AppController({
	children
}: AppControllerProps) {
	const [currentSection, setCurrentSection] = useState("#home")

	const contextValue: AppContext = {
		config: {
			sections: []
		},
		currentSection,
		setCurrentSection
	}

	return (
		<AppContext.Provider value={contextValue}>
			{children}
		</AppContext.Provider>
	)
}
