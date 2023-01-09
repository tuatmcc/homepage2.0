import { FC } from 'react';

import HomePageComponent from '~/features/home/home-page-component';
import { SEO } from '~/features/seo';

const meta = {
	title: 'Home',
	description: '東京農工大学マイクロコンピュータークラブ(TUATMCC)の公式ホームページです。',
	img: '/mcc-logo.svg',
};

const IndexPage: FC = () => {
	return (
		<>
			<SEO meta={meta} />

			<HomePageComponent />
		</>
	);
};

export default IndexPage;
