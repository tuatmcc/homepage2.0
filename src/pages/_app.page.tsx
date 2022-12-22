import type { AppProps } from 'next/app';

import 'highlight.js/styles/a11y-dark.css';

import '~/styles/global.css';
import MediaQueryProvider from '~/providers/MediaQueryProvider';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<MediaQueryProvider>
			<Component {...pageProps} />
		</MediaQueryProvider>
	);
};

export default App;
