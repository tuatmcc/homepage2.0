import { FC } from 'react';

import { Helmet } from '~/components/common/helmet';
import { ArticleTest } from '~/components/gallery/article-test';

const meta = {
	title: 'New Design',
	description: 'New Design',
	img: '/tuat-gate.webp',
};

const NewDesignPage: FC = () => {
	return (
		<>
			<Helmet meta={meta} />
			<ArticleTest />
		</>
	);
};

export default NewDesignPage;
