import { NextPage } from 'next';

import { SEO } from '~/components/SEO';
import { MomentumScrollWidthImage } from '~/components/gallery/MomentumScrollWidthImage';
import { Navbar } from '~/components/ui/Navbar';
import { PageTransition } from '~/components/ui/PageTransition';
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
			<PageTransition>
				<MomentumScrollWidthImage />
			</PageTransition>
		</>
	);
};

export default MomentumScrollPage;
