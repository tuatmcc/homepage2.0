import { FC } from 'react';

import { ArticleTest } from '~/features/gallery/article-test';
import { SEO } from '~/features/seo';

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
