import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ScrollObserver from '../utils/scroll-observer';
import SizeObeserver from '../utils/size-observer';
import { FormspreeProvider } from '@formspree/react';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<SizeObeserver>
			<ScrollObserver>
				<FormspreeProvider project='contactform'>
					<Component {...pageProps} />
				</FormspreeProvider>
			</ScrollObserver>
		</SizeObeserver>
	);
};

export default MyApp;
