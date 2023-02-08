import { FC } from 'react';

import { SEO } from '~/features/SEO';
import { ArticleTest } from '~/features/gallery/article-test';
import { PageTransition } from '~/features/ui/PageTransition';
import { MetaData } from '~/types/meta';

const meta: MetaData = {
	title: 'New Design',
	description: 'New Design',
	img: '/tuat-gate-filtered.webp',
};

const NewDesignPage: FC = () => {
	return (
		<>
			<SEO meta={meta} />
			<PageTransition>
				<ArticleTest />
			</PageTransition>
		</>
	);
};

export default NewDesignPage;
