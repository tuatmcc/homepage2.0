import Head from 'next/head';
import { FC } from 'react';

import { MetaData } from '~/types/meta';

export type HelmetProps = {
	meta: MetaData;
};

export const Helmet: FC<HelmetProps> = ({ meta }) => {
	const { title, description, img } = meta;

	return (
		<Head>
			<link rel="icon" href="/mcc-logo.svg" />
			<title>{`${title} - TUATMCC`}</title>
			<meta property="og:site_name" content={title} />
			{description && (
				<>
					<meta name="description" content={description} />
					<meta property="og:description" content={description} />
				</>
			)}
			{img && <meta property="og:image" content={img} />}
		</Head>
	);
};
