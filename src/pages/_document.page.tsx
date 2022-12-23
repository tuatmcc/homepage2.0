import { Html, Head, Main, NextScript } from 'next/document';
import { FC, useEffect } from 'react';

const CustomDocument: FC = () => {
	// add twitter script
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://platform.twitter.com/widgets.js';
		script.async = true;
		document.body.appendChild(script);
	}, []);
	return (
		// add lang="ja" to <html>
		<Html lang="ja">
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default CustomDocument;
