import Head from 'next/head';
import { FC } from 'react';

import { MetaData } from '~/types/meta';

type SEOProps = {
	meta: MetaData;
};

export const SEO: FC<SEOProps> = ({ meta }) => {
	const { title, img } = meta;
	const description = meta.description || title;

	return (
		<Head>
			<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
			<link rel="android-touch-icon" href="/android-touch-icon.png" sizes="192x192" />

			<title>{`${title} - MCC`}</title>
			<meta name="description" content={description} />

			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:site_name" content="MCC" />
			<meta property="og:image" content={img?.match(/(\.jpg|\.jpeg|\.png|\.webp)$/) ? img : '/mcc-design.webp'} />

			<meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TUATMCC" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
		</Head>
	);
};
