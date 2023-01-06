import { FC } from 'react';

import { Helmet } from '~/components/common/helmet';
import { R3fScrollControll } from '~/components/gallery/home-test';

const meta = {
	title: 'New Home Design',
	description: 'New Home Design',
	img: '/noko-fes-2022-illustrace.webp',
};

const NewHomeDesignPage: FC = () => {
	return (
		<>
			<Helmet meta={meta} />
			<R3fScrollControll />
		</>
	);
};

export default NewHomeDesignPage;
