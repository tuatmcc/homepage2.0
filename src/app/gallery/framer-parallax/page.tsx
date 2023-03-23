import { Metadata } from 'next';

import { FramerPrallaxPrototype } from '~/components/gallery/framer-parallax';
import { Navbar } from '~/components/ui/Navbar';

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
