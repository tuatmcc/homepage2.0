import { FC } from 'react';

import { SEO } from '~/features/SEO';
import { ArticleTest } from '~/features/gallery/article-test';

const meta = {
	title: 'New Design',
	description: 'New Design',
	img: '/tuat-gate.webp',
};

const NewDesignPage: FC = () => {
	return (
		<>
			<SEO meta={meta} />
			<ArticleTest />
		</>
	);
};

export default NewDesignPage;
