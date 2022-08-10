import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ScrollObserver from '../utils/scroll-observer';
import SizeObeserver from '../utils/size-observer';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<SizeObeserver>
			<ScrollObserver>
				<Component {...pageProps} />
			</ScrollObserver>
		</SizeObeserver>
	);
};

export default MyApp;
