import { Metadata } from 'next';

import { Navbar } from '~/components/Navbar';
import { FramerPrallaxPrototype } from '~/components/gallery/framer-parallax';

export const metadata: Metadata = {
	title: 'Framer Prallax',
	description: 'Framer parallax',
};

const FramerParallax = () => {
	return (
		<>
			<Navbar />
			<FramerPrallaxPrototype />
		</>
	);
};

export default FramerParallax;
