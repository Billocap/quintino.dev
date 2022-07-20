import ContentSection from "components/ContentSection"
import ContactList from "components/ContactList"
import NamedContent from "components/NamedContent"
import icons from "utils/icons"

import styles from "./HomeSection.module.css"

export default function HomeSection() {
	return (
		<ContentSection id="home" className="grid lg:gap-[100px] md:p-[100px] gap-[50px] p-[50px]">
			<div className="flex flex-col justify-center items-start gap-5">
				<p className="text-h3 sm:text-h1 font-bold">Hello, World!</p>
				<p className="text-base sm:text-h4">My name is <b>Gabriel Quintino</b> and I&lsquo;m a <b>JavaScript</b> and <b>Typescript</b> developer.</p>
			</div>
			<div className="grid gap-5 md:gap-[100px] md:grid-cols-2">
				<NamedContent name="Portfolio">
					<ContactList links={[
						{
							url: "https://github.com/Billocap",
							name: "Github",
							icon: icons.github
						},
						{
							url: "https://codepen.io/Pikachurin",
							name: "CodePen",
							icon: icons.codePen
						},
						{
							url: "https://vercel.com/pikachurin",
							name: "Vercel",
							icon: icons.vercel
						},
						{
							url: "https://codesandbox.io/u/Billocap",
							name: "Code Sandbox",
							icon: icons.codeSandbox
						},
						{
							url: "https://pikachurando.itch.io",
							name: "Itch.io",
							icon: icons.itchIO
						},
						{
							url: "https://pikachurin.medium.com",
							name: "Medium",
							icon: icons.medium
						}
					]}/>
				</NamedContent>
				<NamedContent name="Contact Me">
					<ContactList links={[
						{
							url: "mailto:pikachurando@pm.me",
							name: "E-mail",
							icon: icons.email
						},
						{
							url: "https://www.linkedin.com/in/pikachurin/",
							name: "LinkedIn",
							icon: icons.linkedIn
						},
						{
							url: "https://twitter.com/__Pikachurin__",
							name: "Twitter",
							icon: icons.twitter
						},
						{
							url: "https://discordapp.com/users/533361743519416351",
							name: "Discord",
							icon: icons.discord
						}
					]}/>
				</NamedContent>
			</div>
		</ContentSection>
	)
}
