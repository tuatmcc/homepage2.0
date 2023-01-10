import { FC } from 'react';

import { Navbar } from '~/features/components/Navbar';
import { SEO } from '~/features/components/SEO';
import { FramerPrallaxPrototype } from '~/features/gallery/framer-parallax';
import { MetaData } from '~/types/meta';

const meta: MetaData = {
	title: 'Framer Prallax',
	description: 'Framer parallax',
};

const FramerParallax: FC = () => {
	return (
		<>
			<SEO meta={meta} />
			<Navbar theme='auto' />
			<FramerPrallaxPrototype />
		</>
	);
};

export default FramerParallax;
