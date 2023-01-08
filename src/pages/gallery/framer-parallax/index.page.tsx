import { FC } from 'react';

import { FramerPrallaxPrototype } from '~/features/gallery/framer-parallax';
import { SEO, MetaData } from '~/features/seo';
import { Navbar } from '~/features/ui/Navbar';

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
