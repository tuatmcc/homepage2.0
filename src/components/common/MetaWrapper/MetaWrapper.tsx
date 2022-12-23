import Head from 'next/head';
import { FC } from 'react';

import { MetaData } from '~/types/meta';

export type MetaWrapperProps = {
	meta: MetaData;
	children?: React.ReactNode | React.ReactNode[];
};

const MetaWrapper: FC<MetaWrapperProps> = ({ meta, children }: MetaWrapperProps) => {
	const { title, description, img } = meta;

	return (
		<>
			<Head>
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
			{children}
		</>
	);
};

export default MetaWrapper;
