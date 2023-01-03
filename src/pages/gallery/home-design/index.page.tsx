import { FC } from 'react';

import { Helmet } from '~/components/common/Helmet';
import { HomeTest } from '~/components/gallery/HomeTest';

const meta = {
	title: 'New Home Design',
	description: 'New Home Design',
	img: '/noko-fes-2022-illustrace.webp',
};

const NewHomeDesignPage: FC = () => {
	return (
		<>
			<Helmet meta={meta} />
			<HomeTest />
		</>
	);
};

export default NewHomeDesignPage;
