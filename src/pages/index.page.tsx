import { FC } from 'react';

import { SEO } from '~/features/components/SEO';
import HomePageComponent from '~/features/home/home-page-component';

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
