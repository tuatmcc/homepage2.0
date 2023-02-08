import Router from 'next/router';
import { useEffect } from 'react';

export const OPACITY_EXIT_DURATION = 1;

const routeChange = () => {
	const tempFix = () => {
		const elements = document.querySelectorAll('style[media="x"]');
		elements.forEach((elem) => elem.removeAttribute('media'));
		setTimeout(() => {
			elements.forEach((elem) => elem.remove());
		}, OPACITY_EXIT_DURATION * 1000);
	};
	tempFix();
};

export const usePageTransitionFix = () => {
	console.debug(
		'WARNING: Still using FOUC temp fix on route change.  Has the Next.js bug not been fixed?  See https://github.com/vercel/next.js/issues/17464',
	);
	// rome-ignore lint/nursery/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		Router.events.on('routeChangeComplete', routeChange);
		Router.events.on('routeChangeStart', routeChange);

		return () => {
			Router.events.off('routeChangeComplete', routeChange);
			Router.events.off('routeChangeStart', routeChange);
		};
	}, []);

	useEffect(() => {
		const asPath = Router.router?.asPath;
		Router.router?.push(asPath || '');
		// ? Use replace() instead of push()?
	}, []);
};
