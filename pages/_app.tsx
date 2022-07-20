import Head from 'next/head'
import { Fragment } from 'react'

import AppController from 'contexts/AppContext'

import 'styles/_font.css'
import 'styles/globals.css'
import 'styles/animations.css'
import 'styles/mobile.css'

export default function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<link rel="shortcut icon" href="./favicon.png" type="image/x-icon"/>
				
				<title>Gabriel Quintino | JavaScript &amp; Typescript Developer</title>
			</Head>

			<AppController>
				<Component {...pageProps}/>
			</AppController>
		</Fragment>
	)
}
