import { Html, Head, Main, NextScript } from 'next/document';
import { FC } from 'react';

const CustomDocument: FC = () => {
	
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
