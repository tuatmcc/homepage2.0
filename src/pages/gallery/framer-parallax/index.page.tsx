import { FC } from 'react';

import { SEO } from '~/features/SEO';
import { FramerPrallaxPrototype } from '~/features/gallery/framer-parallax';
import { Navbar } from '~/features/ui/Navbar';
import { MetaData } from '~/types/meta';

const meta: MetaData = {
	title: 'Framer Prallax',
	description: 'Framer parallax',
};

const FramerParallax: FC = () => {
	return (
		<>
			<SEO meta={meta} />
			<Navbar />
			<FramerPrallaxPrototype />
		</>
	);
};

export default FramerParallax;
