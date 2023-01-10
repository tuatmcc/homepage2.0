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
			<link rel="icon" href="/mcc-logo.svg" />

			<title>{`${title} - TUATMCC`}</title>
			<meta name="description" content={description} />

			<meta property='og:type' content='website' />
			<meta property="og:title" content={title} />
			<meta property="og:site_name" content={title} />
			<meta property="og:description" content={description} />
			{img && <meta property="og:image" content={img} />}
		</Head>
	);
};
