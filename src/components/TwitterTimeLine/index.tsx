'use client';

import { useEffect } from 'react';

import styles from './style.module.css';

import { classNames } from '~/libs/classNames';

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
				className={classNames('twitter-timeline', styles.twitterTimeline)}
				href="https://twitter.com/TUATMCC?ref_src=twsrc%5Etfw"
				data-height="500"
				data-chrome="nofooter noheader noborders transparent"
				lang="en"
			>
				Loading Tweets...
				<span className={styles.spinnerBorder} role="status" />
			</a>
		</div>
	);
};
