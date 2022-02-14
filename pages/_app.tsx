import Head from 'next/head';
import { Fragment } from 'react';

import 'styles/_font.css';
import 'styles/globals.css';

export default function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				
				<title>Gabriel Quintino | React / Next.js Developer</title>
			</Head>

			<Component {...pageProps}/>
		</Fragment>
	);
}