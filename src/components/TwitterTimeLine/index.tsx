'use client';

import { useEffect } from 'react';

export const TwitterTimeline = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://platform.twitter.com/widgets.js';
		script.async = true;
		const parentElement = document.getElementById('twitter-timeline');
		parentElement?.appendChild(script);
		return () => {
			parentElement?.removeChild(script);
		};
	}, []);

	return (
		<div id="twitter-timeline">
			<a
				className="twitter-timeline"
				href="https://twitter.com/TUATMCC?ref_src=twsrc%5Etfw"
				aria-label="Tweets By TUATMCC"
			/>
		</div>
	);
};
