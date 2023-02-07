import { Html, Head, Main, NextScript } from 'next/document';
import { FC } from 'react';

const CustomDocument: FC = () => {
	return (
		<Html lang="ja">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Orbitron&family=Noto+Sans+JP:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default CustomDocument;
