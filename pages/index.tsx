import ScrollController from "contexts/ScrollContext"
import GlassPanel from "components/GlassPanel"
import SlideShow from "components/SlideShow"
import Header from "components/Header"

import HomeSection from "sections/HomeSection"
import AboutSection from "sections/AboutSection"

export default function Home() {
	return (
		<div className="relative p-5 h-screen w-screen">
			<SlideShow fadeTiming={1} slideTiming={6}/>
			<GlassPanel className="h-full flex flex-col">
				<Header/>
				<ScrollController>
					<HomeSection/>
					<AboutSection/>
				</ScrollController>
			</GlassPanel>
		</div>
	)
}
