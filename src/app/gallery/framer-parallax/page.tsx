'use client';

import { SEO } from '~/components/SEO';
import { FramerPrallaxPrototype } from '~/components/gallery/framer-parallax';
import { Navbar } from '~/components/ui/Navbar';
import { PageTransition } from '~/components/ui/PageTransition';
import { MetaData } from '~/types/meta';

const meta: MetaData = {
	title: 'Framer Prallax',
	description: 'Framer parallax',
};

const FramerParallax = () => {
	return (
		<>
			<SEO meta={meta} />
			<Navbar />
			<PageTransition>
				<FramerPrallaxPrototype />
			</PageTransition>
		</>
	);
};

export default FramerParallax;
