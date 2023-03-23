import { NextPage, Metadata } from 'next';

import { MomentumScrollWidthImage } from '~/components/gallery/MomentumScrollWidthImage';
import { Navbar } from '~/components/ui/Navbar';

export const metadata: Metadata = {
	title: 'Momentum Scroll',
	description: 'momentum scroll',
};

const MomentumScrollPage: NextPage = () => {
	return (
		<>
			<Navbar noBrand />
			<MomentumScrollWidthImage />
		</>
	);
};

export default MomentumScrollPage;
