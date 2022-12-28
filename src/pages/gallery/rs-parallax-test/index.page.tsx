import { FC } from 'react';

import { Helmet } from '~/components/common/Helmet';
import { Layout } from '~/components/common/Layout';
import { ParallaxTest } from '~/components/gallery/ParallaxTest';

const meta = {
	title: 'Parallax Test',
	description: 'Parallax Test',
	img: '/mcc-logo.svg',
};

const RsParallaxTest: FC = () => {
	return (
		<>
			<Helmet meta={meta} />
			<Layout noMobileHeader>
				<ParallaxTest />
			</Layout>
		</>
	);
};

export default RsParallaxTest;
