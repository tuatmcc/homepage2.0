import { FC } from 'react';

import { R3fScrollControl } from '~/features/gallery/r3f-scroll-control';
import { SEO } from '~/features/seo';

const meta = {
	title: 'New Home Design',
	description: 'New Home Design',
	img: '/noko-fes-2022-illustrace.webp',
};

const NewHomeDesignPage: FC = () => {
	return (
		<>
			<SEO meta={meta} />
			<R3fScrollControl />
		</>
	);
};

export default NewHomeDesignPage;
