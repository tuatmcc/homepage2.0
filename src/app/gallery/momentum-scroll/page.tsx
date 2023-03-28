import { Metadata } from 'next';

import { Navbar } from '~/components/Navbar';
import { MomentumScrollWidthImage } from '~/components/gallery/MomentumScrollWidthImage';

export const metadata: Metadata = {
	title: 'Momentum Scroll',
	description: 'momentum scroll',
};

export default function momentumScrollPage() {
	return (
		<>
			<Navbar noBrand />
			<MomentumScrollWidthImage />
		</>
	);
}
