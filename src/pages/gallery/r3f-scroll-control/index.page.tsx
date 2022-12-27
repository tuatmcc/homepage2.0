import { FC } from 'react';

import { Helmet } from '~/components/common/Helmet';
import { Layout } from '~/components/common/Layout';
import { ScrollControl } from '~/components/gallery/ScrollControl';
import { MetaData } from '~/types/meta';

const meta: MetaData = {
	title: 'Scroll Control',
	description: 'Scroll Control',
	img: '/random-programing-image-1.jpg',
};

const ScrollControlPage: FC = () => {
	return (
		<>
			<Helmet meta={meta} />
			<Layout noMobileHeader>
				<ScrollControl />
			</Layout>
		</>
	);
};

export default ScrollControlPage;
