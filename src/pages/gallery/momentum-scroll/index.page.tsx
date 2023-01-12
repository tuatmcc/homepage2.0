import { NextPage } from 'next';

import { SEO } from '~/features/SEO';
import { MomentumScrollWidthImage } from '~/features/gallery/MomentumScrollWidthImage';
import { Navbar } from '~/features/ui/Navbar';
import { MetaData } from '~/types/meta';

const meta: MetaData = {
	title: 'Momentum Scroll',
	description: 'momentum scroll',
};

const MomentumScrollPage: NextPage = () => {
	return (
		<>
			<SEO meta={meta} />
			<Navbar noBrand />
			<MomentumScrollWidthImage />
		</>
	);
};

export default MomentumScrollPage;
