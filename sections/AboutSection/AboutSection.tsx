import ContentSection from "components/ContentSection"
import IconList from "components/IconList"
import NamedContent from "components/NamedContent"
import icons from "utils/icons"

import styles from "./AboutSection.module.css"

export default function AboutSection() {
	return (
		<ContentSection id="about" className="bg-accent section">
			<NamedContent name="About">
				<p>I’m a calm, curious and hardworking person, always looking forward to learn from and grow with every experience, despite being shy I’m great at working in groups and making new friends.</p>
				<p> I study JavaScript and Typescript development by myself for more than 3 years and currently I’m looking for a opportunity to start a carrier as a developer.</p>
			</NamedContent>
			<NamedContent name="Skills">
				<IconList items={[
					{
						name: "HTML",
						icon: icons.html
					},
					{
						name: "CSS",
						icon: icons.css
					},
					{
						name: "JavaScript",
						icon: icons.javascript
					},
					{
						name: "Node.js",
						icon: icons.nodeJS
					},
					{
						name: "TypeScript",
						icon: icons.typescript
					},
					{
						name: "React",
						icon: icons.react
					},
					{
						name: "NextJS",
						icon: icons.nextJS
					},
					{
						name: "Git",
						icon: icons.git
					},
					{
						name: "Figma",
						icon: icons.figma
					}
				]}/>
			</NamedContent>
		</ContentSection>
	)
}
