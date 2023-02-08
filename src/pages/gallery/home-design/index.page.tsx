import { FC } from 'react';

import { SEO } from '~/features/SEO';
import { R3fScrollControl } from '~/features/gallery/r3f-scroll-control';
import { PageTransition } from '~/features/ui/PageTransition';
import { MetaData } from '~/types/meta';

const meta: MetaData = {
	title: 'New Home Design',
	description: 'New Home Design',
	img: '/noko-fes-2022-illustrace.webp',
};

const NewHomeDesignPage: FC = () => {
	return (
		<>
			<SEO meta={meta} />
			<PageTransition>
				<R3fScrollControl />
			</PageTransition>
		</>
	);
};

export default NewHomeDesignPage;
