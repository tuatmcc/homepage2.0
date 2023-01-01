import { FC } from 'react';

import { Helmet } from '~/components/common/Helmet';
import HomePageComponent from '~/components/home/HomePageComponent';

const meta = {
	title: 'Home',
	description: '東京農工大学マイクロコンピュータークラブ(TUATMCC)の公式ホームページです。',
	img: '/mcc-logo.svg',
};

const IndexPage: FC = () => {
	return (
		<>
			<Helmet meta={meta} />
			<HomePageComponent />;
		</>
	);
};

export default IndexPage;
