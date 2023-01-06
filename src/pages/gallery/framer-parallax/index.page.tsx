import { FC } from 'react';

import { Helmet } from '~/components/common/helmet';
import { Navbar } from '~/components/common/navbar';
import { FramerPrallaxPrototype } from '~/components/gallery/framer-parallax';
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
