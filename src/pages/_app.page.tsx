import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';

import { MediaQueryProvider } from '~/features/MediaQuery';
import { NavDrawerContextProvider } from '~/features/ui/Navbar';
import { usePageTransitionFix } from '~/utils/fix-page-transition';

import '~/styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
	// これをしないと、最適化されすぎたNext.jsがcssを速くはがしてしまい、遷移がチラつく
	usePageTransitionFix();

	return (
		<MediaQueryProvider>
			<AnimatePresence mode="wait">
				<NavDrawerContextProvider>
					<Component {...pageProps} />
				</NavDrawerContextProvider>
			</AnimatePresence>
		</MediaQueryProvider>
	);
};

export default App;
