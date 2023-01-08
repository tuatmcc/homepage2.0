import type { AppProps } from 'next/app';

import '~/styles/global.css';
import { MediaQueryProvider } from '~/features/media-query';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<MediaQueryProvider>
			<Component {...pageProps} />
		</MediaQueryProvider>
	);
};

export default App;
