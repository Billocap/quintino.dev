import Head from 'next/head';
import { Fragment } from 'react';

import 'styles/globals.css'

export default function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<title>Gabriel Quintino | React / Next.js Developer</title>
			</Head>

			<Component {...pageProps}/>
		</Fragment>
	);
}