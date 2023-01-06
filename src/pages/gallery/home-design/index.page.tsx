import { FC } from 'react';

import { Helmet } from '~/components/common/helmet';
import { R3fScrollControl } from '~/components/gallery/r3f-scroll-control';

const meta = {
	title: 'New Home Design',
	description: 'New Home Design',
	img: '/noko-fes-2022-illustrace.webp',
};

const NewHomeDesignPage: FC = () => {
	return (
		<>
			<Helmet meta={meta} />
			<R3fScrollControl />
		</>
	);
};

export default NewHomeDesignPage;
