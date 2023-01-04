import { FC } from 'react';

import { Helmet } from '~/components/common/Helmet';
import { Navbar } from '~/components/common/Navbar';
import { FramerPrallaxPrototype } from '~/components/gallery/FramerParallax';
import { MetaData } from '~/types/meta';

const meta: MetaData = {
	title: 'Framer Prallax',
	description: 'Framer parallax',
};

const FramerParallax: FC = () => {
	return (
		<>
			<Helmet meta={meta} />
			<Navbar theme='auto' />
			<FramerPrallaxPrototype />
		</>
	);
};

export default FramerParallax;
